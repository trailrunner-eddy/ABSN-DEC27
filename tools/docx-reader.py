"""Convert a color-coded study-guide .docx (like "N340 Module 9 GI Study Guide") into
chapters for a reading-guide page (see nura340/mod9-gi/).

usage:
  mkdir /tmp/doc && cd /tmp/doc && unzip "N340 Module 9 GI Study Guide.docx"
  python3 -I tools/docx-reader.py /tmp/doc nura340/mod9-gi
  mv nura340/mod9-gi/content.js nura340/mod9-gi/js/ && rm nura340/mod9-gi/content.json

Heading 1 = part, Heading 2 = one page, single-cell tables with a dark header = color-coded
section boxes, shaded paragraphs = yellow/green/red/gray callouts. Needs Pillow."""
import sys, os, re, json, html
import xml.etree.ElementTree as ET
from PIL import Image

SRC, OUT = sys.argv[1], sys.argv[2]
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"
A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"

doc = ET.parse(os.path.join(SRC, "word/document.xml")).getroot()
rels = {r.get("Id"): r.get("Target") for r in ET.parse(os.path.join(SRC, "word/_rels/document.xml.rels")).getroot()}
os.makedirs(os.path.join(OUT, "figures"), exist_ok=True)

CALLOUT = {"FFF9DB": "simple", "E8F8EE": "trick", "FFE9E9": "alert", "F4F4F4": "missing"}
esc = lambda s: html.escape(s, quote=False)


def slug(s):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower().replace("'", "")).strip("-")
    return s


def ppr(p):
    pr = p.find(W + "pPr")
    d = {"style": None, "fill": None, "num": None}
    if pr is None:
        return d
    st = pr.find(W + "pStyle")
    if st is not None:
        d["style"] = st.get(W + "val")
    sh = pr.find(W + "shd")
    if sh is not None:
        d["fill"] = sh.get(W + "fill")
    n = pr.find(W + "numPr")
    if n is not None:
        d["num"] = int(n.find(W + "ilvl").get(W + "val"))
    return d


img_done = {}


def image(blip_id, alt):
    tgt = rels[blip_id]
    name = os.path.basename(tgt)
    if name not in img_done:
        src = os.path.join(SRC, "word", tgt)
        base, ext = os.path.splitext(name)
        if ext == ".gif":
            out = name
            with open(src, "rb") as f, open(os.path.join(OUT, "figures", out), "wb") as g:
                g.write(f.read())
        else:
            im = Image.open(src)
            im.load()
            if im.width > 1400:
                im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
            out = base + ".png"
            if Image.open(src).width <= 1400 and ext == ".png":
                import shutil
                shutil.copy(src, os.path.join(OUT, "figures", out))
            else:
                im.save(os.path.join(OUT, "figures", out), optimize=True)
            # try jpeg if much smaller and no transparency
            if im.mode == "RGB" or (im.mode == "RGBA" and im.getextrema()[3][0] == 255):
                jp = base + ".jpg"
                im.convert("RGB").save(os.path.join(OUT, "figures", jp), quality=85, optimize=True)
                if os.path.getsize(os.path.join(OUT, "figures", jp)) < 0.6 * os.path.getsize(os.path.join(OUT, "figures", out)):
                    os.remove(os.path.join(OUT, "figures", out))
                    out = jp
                else:
                    os.remove(os.path.join(OUT, "figures", jp))
        img_done[name] = out
    return img_done[name]


def runs(p):
    """Inline HTML of a paragraph."""
    parts = []

    def do_run(r):
        rp = r.find(W + "rPr")
        b = rp is not None and rp.find(W + "b") is not None
        i = rp is not None and rp.find(W + "i") is not None
        out = ""
        for ch in r:
            if ch.tag == W + "t":
                out += esc(ch.text or "")
            elif ch.tag == W + "drawing":
                blip = ch.find(".//" + A + "blip")
                docpr = ch.find(".//{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}docPr")
                alt = docpr.get("descr") or docpr.get("title") or "" if docpr is not None else ""
                parts.append(("IMG", image(blip.get(R + "embed"), alt), alt))
                return
        if not out:
            return
        if b:
            out = "<strong>" + out + "</strong>"
        if i:
            out = "<em>" + out + "</em>"
        parts.append(("T", out))

    for ch in p:
        if ch.tag == W + "r":
            do_run(ch)
        elif ch.tag == W + "hyperlink":
            anc = ch.get(W + "anchor")
            inner = []
            for r in ch.findall(W + "r"):
                do_run(r)
            parts.append(("A", anc))
    # merge
    html_ = ""
    imgs = []
    for x in parts:
        if x[0] == "T":
            html_ += x[1]
        elif x[0] == "IMG":
            imgs.append((x[1], x[2]))
    html_ = html_.replace("</strong><strong>", "").replace("</em><em>", "")
    return html_, imgs


def text(p):
    return "".join(t.text or "" for t in p.iter(W + "t"))


def render_blocks(elems):
    """Render a sequence of body/cell children to HTML, grouping lists and callouts."""
    out = []
    i = 0
    elems = list(elems)
    while i < len(elems):
        e = elems[i]
        if e.tag == W + "tbl":
            r = table(e)
            i += 1
            if isinstance(r, dict):
                # a headed box owns everything after it until the next headed box / heading
                j = i
                while j < len(elems):
                    x = elems[j]
                    if x.tag == W + "tbl" and is_headed(x):
                        break
                    if x.tag == W + "p" and ppr(x)["style"]:
                        break
                    j += 1
                extra = render_blocks(elems[i:j])
                i = j
                inner = r["inner"] + extra
                out.append('<section class="box%s" style="--c:#%s"><h3 data-no-gloss class="box-h"%s>%s</h3>%s</section>' % (
                    (" sec-" + r["sec"]) if r["sec"] else "", r["color"], r["ident"], esc(r["hdr"]),
                    '<div class="box-b">' + inner + "</div>" if inner.strip() else ""))
            else:
                out.append(r)
            continue
        if e.tag != W + "p":
            i += 1
            continue
        d = ppr(e)
        # callout group
        if d["fill"] in CALLOUT and d["style"] is None:
            kind = CALLOUT[d["fill"]]
            grp = []
            while i < len(elems) and elems[i].tag == W + "p" and ppr(elems[i])["fill"] == d["fill"] and ppr(elems[i])["style"] is None:
                grp.append(elems[i])
                i += 1
            out.append(callout(kind, grp))
            continue
        if d["num"] is not None:
            # list group
            items = []
            while i < len(elems) and elems[i].tag == W + "p" and ppr(elems[i])["num"] is not None:
                items.append((ppr(elems[i])["num"], runs(elems[i])[0]))
                i += 1
            out.append(ul(items))
            continue
        h, imgs = runs(e)
        i += 1
        if d["style"] == "Heading3":
            out.append("<h3>" + strip_strong(h) + "</h3>")
            continue
        for src, alt in imgs:
            out.append(figure(src, alt, elems, i))
        if imgs:
            # caption paragraph follows (italic); figure() consumes it
            if i < len(elems) and is_caption(elems[i], imgs[0][1]):
                i += 1
            continue
        if h.strip():
            out.append("<p>" + h + "</p>")
    return "\n".join(out)


def is_caption(p, alt):
    if p.tag != W + "p":
        return False
    t = text(p).strip()
    return bool(t) and (t == alt.strip() or (alt and t[:40] == alt.strip()[:40]))


def figure(src, alt, elems, i):
    cap = alt
    if i < len(elems) and elems[i].tag == W + "p" and text(elems[i]).strip():
        t = text(elems[i]).strip()
        if alt and t[:40] == alt.strip()[:40]:
            cap = runs(elems[i])[0]
            cap = re.sub(r"^<em>(.*)</em>$", r"\1", cap)
    lazy = ' loading="lazy"'
    return ('<figure class="fig"><button class="zoom" type="button" data-src="figures/%s" aria-label="Enlarge image">'
            '<img src="figures/%s" alt="%s"%s></button><figcaption>%s</figcaption></figure>') % (
        src, src, html.escape(alt), lazy, cap)


def strip_strong(h):
    return re.sub(r"^<strong>(.*)</strong>$", r"\1", h.strip())


def ul(items):
    out, depth = "", -1
    for lvl, h in items:
        while depth < lvl:
            out += "<ul>"
            depth += 1
            if depth < lvl:
                out += "<li>"
        while depth > lvl:
            out += "</li></ul>"
            depth -= 1
        if out.endswith("</li>") or out.endswith("</ul>"):
            pass
        out += "<li>" + h
        out += "</li>"
    # fix nesting: simple approach (lists here are mostly level 0)
    while depth > 0:
        out += "</ul></li>"
        depth -= 1
    out += "</ul>"
    return out


LABELS = {"simple": "In simple words", "trick": "Memory trick", "alert": "Watch out", "missing": "In your textbook"}


def callout(kind, grp):
    body = []
    for p in grp:
        h, imgs = runs(p)
        if h.strip():
            body.append("<p>" + h + "</p>")
    inner = "".join(body)
    if kind == "missing":
        inner = inner.replace("<p>Image not in your file: ", "<p>")
        return '<aside class="co missing"><span class="co-ic" aria-hidden="true">📖</span><div><div class="co-k">Picture in your textbook</div>' + inner + "</div></aside>"
    ic = {"simple": "💡", "trick": "🧠", "alert": "⚠️"}[kind]
    return '<aside class="co %s"><span class="co-ic" aria-hidden="true">%s</span><div>%s</div></aside>' % (kind, ic, inner)


def cell_fill(tc):
    pr = tc.find(W + "tcPr")
    if pr is None:
        return None
    sh = pr.find(W + "shd")
    return sh.get(W + "fill") if sh is not None else None


def table(t):
    rows = t.findall(W + "tr")
    ncol = len(t.find(W + "tblGrid").findall(W + "gridCol"))
    first_cells = rows[0].findall(W + "tc")
    hf = cell_fill(first_cells[0])
    # skip the doc's own clickable contents table
    if t.find(".//" + W + "hyperlink") is not None:
        return ""
    # legend table (color key)
    if all(cell_fill(c) not in (None, "FFFFFF") and text(c).count(":") == 1 for r in rows for c in r.findall(W + "tc")) and ncol == 3 and len(rows) == 2:
        chips = []
        for r in rows:
            for c in r.findall(W + "tc"):
                a, b = text(c).split(":", 1)
                chips.append('<div class="key" style="--c:#%s"><strong>%s</strong><span>%s</span></div>' % (cell_fill(c), esc(a), esc(b.strip())))
        return '<div class="legend">' + "".join(chips) + "</div>"
    if ncol == 1:
        # a box: optional dark header row + body
        hdr = None
        body_rows = rows
        is_dark = hf and hf not in ("FFFFFF",) and hf.upper() in DARK
        if is_dark:
            hdr = text(rows[0]).strip()
            body_rows = rows[1:]
        color = hf if is_dark else border_color(t)
        bodies = []
        for r in body_rows:
            for c in r.findall(W + "tc"):
                bodies.append(render_blocks(list(c)))
        inner = "".join(bodies)
        sec = SECTION.get(hdr or "", "")
        ident = ' id="%s"' % idfor(hdr) if hdr else ""
        m = re.fullmatch(r"<p><strong>([^<]*)</strong></p>", inner.strip())
        if not hdr and m:
            return '<h4 class="sub">%s</h4>' % m.group(1)
        if hdr:
            return {"color": color or "1F6FB2", "sec": sec, "ident": ident, "hdr": hdr, "inner": inner}
        return '<section class="box%s" style="--c:#%s"%s>%s%s</section>' % (
            (" sec-" + sec) if sec else "", color or "1F6FB2", "",
            ('<h3 data-no-gloss class="box-h"%s>%s</h3>' % (ident, esc(hdr))) if hdr else "",
            '<div class="box-b">' + inner + "</div>" if inner.strip() else "")
    # data table
    color = hf if hf and hf.upper() in DARK else border_color(t) or "1F6FB2"
    out = ['<div class="tbl-wrap"><table class="dt" style="--c:#%s">' % color]
    for ri, r in enumerate(rows):
        cells = r.findall(W + "tc")
        hdr_row = ri == 0 and cell_fill(cells[0]) and cell_fill(cells[0]).upper() in DARK
        tag = "th" if hdr_row else "td"
        if hdr_row:
            out.append("<thead>")
        out.append("<tr>")
        for c in cells:
            h = render_blocks(list(c))
            # unwrap single paragraph
            m = re.fullmatch(r"<p>(.*)</p>", h, re.S)
            if m and "<p>" not in m.group(1):
                h = m.group(1)
            if hdr_row:
                h = strip_strong(h)
            out.append("<%s>%s</%s>" % (tag, h, tag))
        out.append("</tr>")
        if hdr_row:
            out.append("</thead><tbody>")
    out.append("</tbody></table></div>")
    return "".join(out)


def is_headed(t):
    rows = t.findall(W + "tr")
    if len(t.find(W + "tblGrid").findall(W + "gridCol")) != 1:
        return False
    f = cell_fill(rows[0].findall(W + "tc")[0])
    return bool(f) and f.upper() in DARK


def border_color(t):
    b = t.find(W + "tblPr/" + W + "tblBorders/" + W + "top")
    return b.get(W + "color") if b is not None else None


DARK = {"1F6FB2", "6B3FA0", "D9600F", "0E8A7D", "C2185B", "3E8E41"}
SECTION = {"Etiology": "etio", "Pathogenesis and Pathophysiology": "patho", "Manifestations": "mani",
           "Diagnostic Criteria": "dx", "Impact on the Health of the Client": "impact", "Management": "mgmt"}
used_ids = {}


def idfor(h):
    s = CUR_CH[0] + "-" + slug(h)
    n = used_ids.get(s, 0)
    used_ids[s] = n + 1
    return s if n == 0 else "%s-%d" % (s, n + 1)


CUR_CH = ["intro"]

# ---------- walk the body into chapters ----------
body = [e for e in doc.find(W + "body") if e.tag in (W + "p", W + "tbl")]
chapters = []  # dict(id,title,sub,part,partsub,elems)
parts = []
cur = {"id": "start", "title": "Start here", "sub": "", "part": None, "elems": []}
chapters.append(cur)
i = 0
title = ""
while i < len(body):
    e = body[i]
    d = ppr(e) if e.tag == W + "p" else {"style": None, "fill": None}
    if d["style"] == "Title":
        title = text(e)
        i += 1
        continue
    if d["style"] in ("Heading1", "Heading2"):
        t = text(e).strip()
        sub = ""
        fill = d["fill"]
        if i + 1 < len(body) and body[i + 1].tag == W + "p" and ppr(body[i + 1])["fill"] == fill and ppr(body[i + 1])["style"] is None:
            sub = text(body[i + 1]).strip()
            i += 1
        if d["style"] == "Heading1":
            m = re.match(r"Part (\d+): (.*)", t)
            parts.append({"title": t, "short": m.group(2) if m else t, "num": m.group(1) if m else "", "sub": sub, "color": fill or "1F6FB2"})
            # a part with content before its first H2 → it gets a chapter for that intro
            nxt = body[i + 1] if i + 1 < len(body) else None
            cur = {"id": slug(t.replace("Part ", "part-")), "title": t if not m else "Part %s overview" % m.group(1), "sub": sub,
                   "part": len(parts) - 1, "elems": [], "partintro": True}
            chapters.append(cur)
        else:
            cur = {"id": slug(t), "title": t, "sub": sub, "part": len(parts) - 1, "elems": [], "color": fill}
            chapters.append(cur)
        i += 1
        continue
    cur["elems"].append(e)
    i += 1

# merge empty part intros: if a part-intro chapter has no elems, drop it
final = []
for c in chapters:
    if c.get("partintro") and not any(text(e).strip() or e.find(".//" + W + "drawing") is not None for e in c["elems"]):
        continue
    final.append(c)
chapters = final

# Last H1 ("Check These With Your Professor") is not a "Part N"
for c in chapters:
    if c.get("partintro") and not parts[c["part"]]["num"]:
        c["title"] = parts[c["part"]]["title"]
        c["id"] = slug(c["title"])

res = []
for c in chapters:
    CUR_CH[0] = c["id"]
    c_html = render_blocks(c["elems"])
    res.append({"id": c["id"], "title": c["title"], "sub": c["sub"], "part": c["part"], "html": c_html,
                "partintro": bool(c.get("partintro"))})

json.dump({"title": title, "parts": parts, "chapters": res}, open(os.path.join(OUT, "content.json"), "w"), indent=1)
print(title, len(res), "chapters", len(img_done), "images")
for c in res:
    print(" ", c["id"], "|", c["title"], "| part", c["part"], len(c["html"]))

# ---------- write content.js for the reader ----------
st = res[0]
h = st["html"]
h = h.replace("<p><strong>N340 Module 9</strong></p>\n", "").replace("<p><strong>Pathophysiology Study Guide</strong></p>\n", "")
h = h.replace("<p><strong>What is inside (click to jump)</strong></p>\n", "").replace("<p><strong>What is inside (click to jump)</strong></p>", "")
h = h.replace("<p><strong>Gray dashed boxes</strong> mark an image your reading refers to that did not come through in your file. Add it there if you can get it from your online textbook.</p>",
              '<aside class="co missing"><span class="co-ic" aria-hidden="true">📖</span><div><p><strong>Book boxes</strong> mark a picture your reading refers to that did not come through in the file. Look for it in your online textbook.</p></div></aside>')
st["html"] = h.strip()
with open(os.path.join(OUT, "content.js"), "w") as f:
    f.write("/* Generated from \"N340 Module 9 GI Study Guide.docx\" (Patho > Final > Lecture Guide).\n"
            "   Re-run the converter instead of hand-editing if the Word doc changes. */\n")
    f.write("window.MOD9 = ")
    json.dump({"title": title, "parts": parts, "chapters": res}, f, ensure_ascii=False, indent=0)
    f.write(";\n")
