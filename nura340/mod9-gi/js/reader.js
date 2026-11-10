/* Mod 9 GI reading guide: a read-through reader for the chapters in content.js.
   Routes: #start, #<chapter id>, #<chapter id>/<section id>, #search/<words> */
(function () {
  "use strict";
  var D = window.MOD9, CH = D.chapters, PARTS = D.parts;
  var app = document.getElementById("app"), toc = document.getElementById("toc");
  var KEY = "mod9-gi-reader";
  var S = { read: {}, theme: "auto", last: null };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) for (var k in saved) S[k] = saved[k]; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function byId(id) { for (var i = 0; i < CH.length; i++) if (CH[i].id === id) return i; return -1; }
  function partOf(c) { return c.part === null || c.part === undefined ? null : PARTS[c.part]; }
  function color(c) { var p = partOf(c); return "#" + (p ? p.color : "1F6FB2"); }
  function label(c) { return c.partintro && partOf(c) && partOf(c).num ? "Overview" : c.title; }
  var READABLE = CH.filter(function (c) { return c.id !== "start"; });

  /* ---------- theme ---------- */
  function applyTheme() { if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
  applyTheme();
  document.getElementById("theme").onclick = function () {
    var dark = S.theme === "dark" || (S.theme === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    S.theme = dark ? "light" : "dark"; save(); applyTheme();
  };

  /* ---------- lab ranges (from ../../js/labs.js) ---------- */
  var LAB_KEYS = ["Albumin", "Ammonia", "Bilirubin", "Hemoglobin", "Hematocrit", "WBC", "Platelets", "INR", "PT", "BUN", "Creatinine",
    "ALT", "AST", "Alkaline phosphatase", "GGT", "Amylase", "Lipase", "AFP", "CRP", "ESR", "Fecal calprotectin"];
  function labList() {
    var all = window.LAB_RANGES || [];
    return LAB_KEYS.map(function (k) { return all.filter(function (l) { return l.lab === k; })[0]; }).filter(Boolean);
  }
  function rangeText(l) {
    var u = l.unit ? (l.unit.charAt(0) === "/" ? l.unit : " " + l.unit) : "";
    return "(normal " + l.normal + u + ")";
  }
  /* In Diagnostic Criteria and Manifestations boxes, put the normal range right after the first mention of each lab. */
  function addRanges(root) {
    var labs = labList();
    if (!labs.length) return;
    var pats = labs.map(function (l) {
      var alts = l.names.slice().sort(function (a, b) { return b.length - a.length; }).map(function (n) {
        var e = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return /[A-Z]/.test(n) ? e : "(?:" + e.split("").map(function (ch) { return /[a-z]/.test(ch) ? "[" + ch + ch.toUpperCase() + "]" : ch; }).join("") + ")";
      });
      return { l: l, re: new RegExp("(^|[^A-Za-z-])(" + alts.join("|") + ")(s?)(?![A-Za-z-])") };
    });
    Array.prototype.forEach.call(root.querySelectorAll(".sec-dx, .sec-mani"), function (box) {
      var done = {};
      var w = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, null), nodes = [], n;
      while ((n = w.nextNode())) nodes.push(n);
      for (var ni = 0; ni < nodes.length; ni++) (function (node) {
        if (node.parentNode.closest && node.parentNode.closest(".lab-rng, .box-h, figcaption")) return;
        var t = node.nodeValue, best = null;
        pats.forEach(function (p) {
          if (done[p.l.lab]) return;
          var m = p.re.exec(t);
          if (m && (!best || m.index < best.i)) best = { i: m.index, end: m.index + m[0].length, p: p };
        });
        if (!best) return;
        var after = t.slice(best.end);
        var rest = after;
        // skip ranges already given ("albumin (under 3.5 g/dL)") and non-lab uses ("hemoglobin breakdown")
        if (/^\s*\(/.test(after) || /^\s*breakdown/.test(after)) { done[best.p.l.lab] = true; return; }
        // after the label, keep any following words in the same phrase on the left (", ALT" pairs stay readable)
        done[best.p.l.lab] = true;
        var span = document.createElement("span");
        span.className = "lab-rng";
        span.textContent = " " + rangeText(best.p.l);
        // "Total and direct bilirubin": the range is for total bilirubin
        if (/direct\s+bilirubin$/i.test(t.slice(0, best.end)))
          span.textContent = span.textContent.replace("(normal ", "(normal total ");
        var tail = document.createTextNode(rest);
        node.nodeValue = t.slice(0, best.end);
        var parent = node.parentNode, next = node.nextSibling;
        // put the range after the closing bold tag when the lab name is the whole bold run
        if (parent.tagName === "STRONG" && !rest.trim() && parent.lastChild === node) {
          parent.parentNode.insertBefore(span, parent.nextSibling);
        } else {
          parent.insertBefore(span, next);
          parent.insertBefore(tail, span.nextSibling);
          nodes.push(tail);
        }
      })(nodes[ni]);
    });
  }

  /* ---------- table of contents ---------- */
  function tocHtml(cur) {
    var out = '<a class="toc-start' + (cur === "start" ? " on" : "") + '" href="#start">🏁 Start here</a>';
    var donePct = Math.round(100 * READABLE.filter(function (c) { return S.read[c.id]; }).length / READABLE.length);
    out += '<div class="toc-prog"><span>' + READABLE.filter(function (c) { return S.read[c.id]; }).length + " of " + READABLE.length + ' read</span><div class="bar"><span style="width:' + donePct + '%"></span></div></div>';
    PARTS.forEach(function (p, pi) {
      var items = CH.filter(function (c) { return c.part === pi; });
      var open = items.some(function (c) { return c.id === cur; });
      out += '<details class="toc-part" style="--c:#' + p.color + '"' + (open || !cur || cur === "start" ? " open" : "") + '><summary><span class="num">' + (p.num || "✓") + '</span><span>' + esc(p.short) + "</span></summary><ul>" +
        items.map(function (c) {
          return '<li><a href="#' + c.id + '"' + (c.id === cur ? ' class="on" aria-current="page"' : "") + ">" + '<span class="tick' + (S.read[c.id] ? " done" : "") + '" aria-hidden="true"></span>' + esc(label(c)) + "</a></li>";
        }).join("") + "</ul></details>";
    });
    return out;
  }
  function drawToc(cur) { toc.innerHTML = tocHtml(cur); }

  var tocBtn = document.getElementById("tocBtn"), scrim = document.getElementById("scrim");
  function setDrawer(open) { document.body.classList.toggle("toc-open", open); tocBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  tocBtn.onclick = function () { setDrawer(!document.body.classList.contains("toc-open")); };
  scrim.onclick = function () { setDrawer(false); };
  toc.addEventListener("click", function (e) { if (e.target.closest("a")) setDrawer(false); });

  /* ---------- pages ---------- */
  function start() {
    var st = CH[0];
    var cards = PARTS.map(function (p, pi) {
      var items = CH.filter(function (c) { return c.part === pi; });
      var first = items[0];
      return '<a class="part-card" data-no-gloss style="--c:#' + p.color + '" href="#' + first.id + '"><div class="pc-top"><span class="num">' + (p.num ? "Part " + p.num : "Last") + '</span><span class="tiny">' + items.length + " page" + (items.length === 1 ? "" : "s") + "</span></div><h3>" + esc(p.short) + '</h3><p class="small">' + esc(p.sub) + '</p><div class="chips">' +
        items.filter(function (c) { return !c.partintro; }).slice(0, 8).map(function (c) { return "<span>" + esc(c.title.replace(/ \(.*\)$/, "")) + "</span>"; }).join("") + "</div></a>";
    }).join("");
    var next = S.last && byId(S.last) > 0 ? CH[byId(S.last)] : READABLE[0];
    var labs = labList();
    app.innerHTML =
      '<section class="hero" data-no-gloss><div class="kicker">NURA 340 · Pathophysiology · Module 9</div><h1>' + esc(D.title) + '</h1><p>Your Module 9 readings as a read-through reference. Start with Part 1, because the diseases make more sense once you know the healthy system. Every condition uses the same six color-coded sections, so you always know where to look.</p>' +
      '<div class="row"><a class="btn primary" href="#' + next.id + '">' + (S.last && S.last !== READABLE[0].id ? "Continue: " + esc(next.title) + " →" : "Start reading →") + '</a><a class="btn" href="../final/index.html">🩺 Patho Final study lab</a></div></section>' +
      '<h2>Parts</h2><div class="part-grid">' + cards + "</div>" +
      '<h2>How the boxes work</h2><div class="card">' + st.html + "</div>" +
      (labs.length ? '<h2>Lab normal ranges in this module</h2><div class="card"><p class="small muted" style="margin-top:0">Ranges also appear next to labs inside each Diagnostic Criteria and Manifestations section.</p><div class="tbl-wrap"><table class="dt" style="--c:#0E8A7D"><thead><tr><th>Lab</th><th>Normal range</th></tr></thead><tbody>' +
        labs.map(function (l) { return "<tr><td><strong>" + esc(l.lab) + "</strong></td><td>" + esc(l.normal + (l.unit ? (l.unit.charAt(0) === "/" ? l.unit : " " + l.unit) : "")) + "</td></tr>"; }).join("") + "</tbody></table></div></div>" : "");
    drawToc("start");
    document.title = "Mod 9 GI Reading Guide";
  }

  function chapter(i, sec) {
    var c = CH[i], p = partOf(c);
    var prev = i > 1 ? CH[i - 1] : null, next = i < CH.length - 1 ? CH[i + 1] : null;
    var wrap = document.createElement("article");
    wrap.className = "chapter";
    wrap.style.setProperty("--pc", color(c));
    wrap.innerHTML =
      '<header class="ch-head" data-no-gloss><div class="kicker">' + (p ? (p.num ? "Part " + p.num + " · " : "") + esc(p.short) : "") + "</div><h1>" + esc(c.partintro && p && p.num ? p.title : c.title) + "</h1>" + (c.sub ? '<p class="ch-sub">' + esc(c.sub) + "</p>" : "") + "</header>" +
      '<nav class="jump" data-no-gloss aria-label="Sections on this page"></nav>' +
      '<div class="ch-body">' + c.html + "</div>" +
      '<div class="ch-foot"><button class="btn mark" type="button">' + (S.read[c.id] ? "✓ Read" : "Mark as read") + "</button></div>" +
      '<nav class="pager">' +
      (prev ? '<a class="pg prev" href="#' + prev.id + '"><span class="tiny">← Previous</span><strong>' + esc(prev.partintro && partOf(prev).num ? partOf(prev).title : prev.title) + "</strong></a>" : '<a class="pg prev" href="#start"><span class="tiny">← Back to</span><strong>Start here</strong></a>') +
      (next ? '<a class="pg next" href="#' + next.id + '"><span class="tiny">Next →</span><strong>' + esc(next.partintro && partOf(next).num ? partOf(next).title : next.title) + "</strong></a>" : '<a class="pg next" href="#start"><span class="tiny">Finished</span><strong>Back to start</strong></a>') +
      "</nav>";
    addRanges(wrap);
    var heads = wrap.querySelectorAll(".ch-body > .box > .box-h, .ch-body > h3");
    var jump = wrap.querySelector(".jump");
    if (heads.length > 2) {
      jump.innerHTML = Array.prototype.map.call(heads, function (h) {
        if (!h.id) h.id = c.id + "-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        var box = h.closest(".box");
        var col = box ? box.style.getPropertyValue("--c") : "";
        return '<a href="#' + c.id + "/" + h.id.slice(c.id.length + 1) + '" style="--c:' + (col || "var(--pc)") + '">' + esc(h.textContent) + "</a>";
      }).join("");
    } else jump.remove();
    app.innerHTML = "";
    app.appendChild(wrap);
    wrap.querySelector(".mark").onclick = function () {
      S.read[c.id] = !S.read[c.id]; save();
      this.textContent = S.read[c.id] ? "✓ Read" : "Mark as read";
      drawToc(c.id);
    };
    S.last = c.id; save();
    drawToc(c.id);
    document.title = c.title + " · Mod 9 GI Reading";
    if (sec) {
      var el = document.getElementById(c.id + "-" + sec);
      if (el) { setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 0); return true; }
    }
    return false;
  }

  /* ---------- search ---------- */
  var plain = CH.map(function (c) { var d = document.createElement("div"); d.innerHTML = c.html.replace(/<(\/?(?:p|li|td|th|h3|h4|ul|div|figcaption)\b)/g, " <$1"); return c.title + " " + (c.sub || "") + " " + d.textContent.replace(/\s+/g, " "); });
  function search(q) {
    q = q.trim();
    var words = q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = [];
    if (words.length) CH.forEach(function (c, i) {
      var t = plain[i], lo = t.toLowerCase();
      if (!words.every(function (w) { return lo.indexOf(w) >= 0; })) return;
      var score = words.reduce(function (s, w) { return s + lo.split(w).length - 1 + (c.title.toLowerCase().indexOf(w) >= 0 ? 20 : 0); }, 0);
      var at = lo.indexOf(words[0]), from = Math.max(0, at - 70);
      var snip = (from ? "…" : "") + t.slice(from, at + 150) + "…";
      hits.push({ c: c, score: score, snip: snip });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    var re = words.length ? new RegExp("(" + words.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")", "gi") : null;
    app.innerHTML = '<h1 class="s-title">Search</h1><p class="muted">' + (words.length ? hits.length + " page" + (hits.length === 1 ? "" : "s") + " mention “" + esc(q) + "”" : "Type in the search box to find a topic.") + "</p>" +
      '<div class="hits">' + hits.map(function (h) {
        var p = partOf(h.c);
        return '<a class="hit" style="--c:' + color(h.c) + '" href="#' + h.c.id + '"><span class="tiny">' + (p ? esc(p.short) : "Start") + "</span><strong>" + esc(h.c.partintro && p && p.num ? p.title : h.c.title) + '</strong><span class="small muted">' + esc(h.snip).replace(re, "<mark>$1</mark>") + "</span></a>";
      }).join("") + "</div>";
    drawToc(null);
  }
  var q = document.getElementById("q"), qt;
  q.addEventListener("input", function () {
    clearTimeout(qt);
    qt = setTimeout(function () { var v = q.value.trim(); if (v) location.hash = "#search/" + encodeURIComponent(v); else if (/^#search/.test(location.hash)) location.hash = "#start"; }, 250);
  });

  /* ---------- reading progress bar ---------- */
  var bar = document.getElementById("readbar");
  function onScroll() {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? Math.min(100, 100 * h.scrollTop / max) : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- image zoom ---------- */
  var lb = document.getElementById("lightbox");
  app.addEventListener("click", function (e) {
    var z = e.target.closest(".zoom");
    if (!z) return;
    lb.querySelector("img").src = z.getAttribute("data-src");
    lb.querySelector("img").alt = z.querySelector("img").alt;
    lb.hidden = false;
  });
  lb.addEventListener("click", function () { lb.hidden = true; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { lb.hidden = true; setDrawer(false); }
    if (e.target.tagName === "INPUT") return;
    var cur = byId((location.hash || "").slice(1).split("/")[0]);
    if (e.key === "ArrowRight" && cur >= 0 && cur < CH.length - 1) location.hash = "#" + CH[cur + 1].id;
    if (e.key === "ArrowLeft" && cur > 1) location.hash = "#" + CH[cur - 1].id;
  });

  /* ---------- router ---------- */
  function route() {
    var h = decodeURIComponent((location.hash || "#start").slice(1)).split("/");
    var scrolled = false;
    if (h[0] === "search") { search(h.slice(1).join("/")); if (q.value.trim() !== h.slice(1).join("/")) q.value = h.slice(1).join("/"); }
    else {
      var i = byId(h[0]);
      if (i > 0) scrolled = chapter(i, h[1]);
      else start();
    }
    if (!scrolled) window.scrollTo(0, 0);
    onScroll();
  }
  window.addEventListener("hashchange", route);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", route); else route();
})();
