/* Pharm Exam 2 study lab: drug tables, compare grid, flashcards, practice questions, name game.
   Reads window.SYSTEMS, CATEGORIES, DRUGS, SUFFIXES (drugs.js) and QUESTIONS (practice.js). */
(function () {
  "use strict";

  /* ---------- Storage (per-browser; works offline from file://) ---------- */
  var KEY = "pharm-exam2-v1";
  var S = { xp: 0, drugs: {}, flash: {}, q: {}, best: {}, plain: false, cover: false, theme: "auto" };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) S = Object.assign(S, saved); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var app = document.getElementById("app");
  var UNITS = window.SYSTEMS, CATS = window.CATEGORIES, DRUGS = window.DRUGS, SUFFIXES = window.SUFFIXES, QUESTIONS = window.QUESTIONS || [];
  var UNIT = {}, CAT = {}, DRUG = {};
  UNITS.forEach(function (u) { UNIT[u.id] = u; });
  CATS.forEach(function (c) { CAT[c.id] = c; });
  DRUGS.forEach(function (d) { DRUG[d.id] = d; });
  var FIELDS = [["moa", "MOA"], ["use", "Use"], ["contra", "Contraindications"], ["se", "Side effects"], ["ae", "Adverse effects"], ["rn", "RN assessment"], ["teach", "Client teaching"]];

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function $(sel, root) { return (root || app).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || app).querySelectorAll(sel)); }
  function unitOf(d) { return CAT[d.cats[0]].sys; }
  function drugsIn(catId) { return DRUGS.filter(function (d) { return d.cats.indexOf(catId) > -1; }); }
  function catsIn(unitId) { return CATS.filter(function (c) { return c.sys === unitId; }); }
  function tag(u) { return '<span class="tag sys-' + u + '">' + esc(UNIT[u].icon + " " + UNIT[u].short) + "</span>"; }
  function title(d) { return esc(d.name) + (d.brand ? ' <span class="brand-name">(' + esc(d.brand) + ")</span>" : ""); }
  function plainTitle(d) { return d.name + (d.brand ? " (" + d.brand + ")" : ""); }
  function addXP(n, msg) { S.xp += n; save(); document.getElementById("xp").textContent = S.xp; if (msg) toast(msg + "  +" + n + " XP"); }
  var toastTimer;
  function toast(msg) { var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1600); }
  function unitBar(active, hrefBase) {
    return '<div class="filter-bar"><a class="chip ' + (!active ? "on" : "") + '" href="' + hrefBase + '">All</a>' +
      UNITS.map(function (u) { return '<a class="chip ' + (active === u.id ? "on" : "") + '" href="' + hrefBase + "/" + u.id + '"><span class="sys-dot sys-' + u.id + '"></span>' + esc(u.short) + "</a>"; }).join("") + "</div>";
  }
  function switchHTML(id, on, label) {
    return '<div class="plain-switch"><button type="button" class="switch' + (on ? " on" : "") + '" id="' + id + '" role="switch" aria-checked="' + (on ? "true" : "false") + '"><span class="knob"></span></button><label for="' + id + '">' + label + "</label></div>";
  }

  function mastery(unitId) {
    var parts = [];
    var ds = DRUGS.filter(function (d) { return !unitId || unitOf(d) === unitId; });
    parts.push(ds.filter(function (d) { return S.drugs[d.id]; }).length / ds.length);
    var fc = FLASH.filter(function (c) { return !unitId || c.u === unitId; });
    parts.push(fc.filter(function (c) { return S.flash[c.k]; }).length / fc.length);
    var qs = QUESTIONS.map(function (q, i) { return [q, i]; }).filter(function (x) { return !unitId || x[0].sys === unitId; });
    if (qs.length) parts.push(qs.filter(function (x) { return S.q[x[1]] === 1; }).length / qs.length);
    return Math.round(100 * parts.reduce(function (a, b) { return a + b; }, 0) / parts.length);
  }

  /* ---------- Router ---------- */
  var cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    var h = (location.hash || "#home").slice(1).split("/");
    var r = h[0] || "home";
    $$("#nav a", document).forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-r") === r || (r === "drug" && a.getAttribute("data-r") === "drugs")); });
    var views = { home: home, drugs: drugsView, drug: drugView, compare: compare, flash: flash, quiz: quiz, names: names, memory: memory };
    (views[r] || home)(h[1], h[2]);
    window.scrollTo(0, 0);
    var active = $(".nav a.active", document); if (active && active.scrollIntoView) { try { active.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {} }
  }
  window.addEventListener("hashchange", route);

  /* ================= HOME ================= */
  function home() {
    var overall = mastery(null);
    var rows = UNITS.map(function (u) {
      var m = mastery(u.id), cs = catsIn(u.id);
      var n = DRUGS.filter(function (d) { return unitOf(d) === u.id; }).length;
      return '<a class="blueprint-row sys-' + u.id + '" href="#drugs/' + cs[0].id + '">' +
        '<span style="font-size:20px">' + u.icon + '</span><span><span class="name">' + esc(u.name) + '</span><br><span class="tiny">' + n + " drugs · " + esc(cs.map(function (c) { return c.name; }).join(", ")) + "</span></span>" +
        '<span class="small" style="font-weight:700">' + m + '%</span><div class="progress bar"><span style="width:' + m + '%"></span></div></a>';
    }).join("");
    var tiles = [
      ["#drugs", "💊", "Drug Tables", DRUGS.length + " drugs in " + CATS.length + " categories. Class, MOA, use, contraindications, side and adverse effects, RN assessment, and teaching, with a plain-language switch and cover mode."],
      ["#compare", "📊", "Compare", "Line up one column (say, adverse effects) across every drug in a unit to spot look-alikes."],
      ["#flash", "🃏", "Flashcards", FLASH.length + " flip cards: class and use, brand to generic, and the one thing to remember for each drug."],
      ["#quiz", "📝", "Practice Questions", QUESTIONS.length + " NCLEX-style items (multiple choice and SATA) with rationales from the tables."],
      ["#names", "⚡", "Name Game", "Rapid fire: brand to generic, drug to category, drug to class, and suffix to class."],
      ["#memory", "🧠", "Memory Aids", "The mnemonic for every category and the name endings that give away the class."]
    ].map(function (t) { return '<a class="card tile" href="' + t[0] + '"><div class="emoji">' + t[1] + "</div><h3>" + t[2] + '</h3><p class="muted small">' + t[3] + "</p></a>"; }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-main"><div class="hero-art">💊</div>' +
          '<div class="tiny" style="color:rgba(255,255,255,.8);font-weight:700;letter-spacing:.06em;text-transform:uppercase">NURA 350 · Pharmacology</div>' +
          "<h1>Exam 2 Study Lab</h1>" +
          "<p>Every Exam 2 drug from the combined drug tables. For each one, learn <b>what it is → what it does → what to watch → what to teach</b>.</p>" +
          '<div class="row"><a class="btn" href="#drugs">Open the drug tables</a><a class="btn ghost" href="#quiz">Quick quiz</a></div>' +
        "</div>" +
        '<div class="card"><h3>Your progress</h3><div class="ring-wrap"><div class="ring" style="--p:' + overall + '" data-label="' + overall + '%"></div>' +
          '<div class="small muted">Mastery blends drugs you marked studied, flashcards you know, and questions you answered correctly.<br><br><b>' + S.xp + " XP</b> earned · " + Object.keys(S.drugs).length + "/" + DRUGS.length + " drugs studied · Name Game best streak <b>" + (S.best.names || 0) + "</b></div></div>" +
          '<div class="row" style="margin-top:14px"><button class="btn small" id="reset">Reset progress</button></div></div>' +
      "</section>" +
      '<section class="grid grid-2">' +
        '<div class="card"><h2>Drugs by lecture</h2><p class="small muted">Tap a unit to open its first category.</p>' + rows + "</div>" +
        '<div class="card"><h2>Which drug goes where</h2><p class="small muted">Personal memory aids from the drug tables: the first letter of each word matches a drug in that category.</p>' +
          '<div class="mn-list">' + CATS.map(function (c) { return '<a class="mn-row sys-' + c.sys + '" href="#drugs/' + c.id + '"><span class="mn-cat">' + esc(c.name) + '</span><span class="mn-say">' + esc(c.mnemonic) + "</span></a>"; }).join("") + "</div></div>" +
      "</section>" +
      '<h2 style="margin-top:28px">Study modes</h2><section class="grid grid-3">' + tiles + "</section>" +
      '<div class="card" style="margin-top:28px"><h2>How to read a drug card</h2><ol class="facts">' +
        "<li><b>Class and MOA first.</b> If you know the class, you can usually predict the side effects.</li>" +
        "<li><b>Side vs. adverse effects.</b> Side effects are expected and annoying; adverse effects are dangerous and get reported. Exam questions about \"priority\" usually point at an adverse effect.</li>" +
        "<li><b>RN assessment = what you check before and during.</b> Pulse before metoprolol, digoxin, and diltiazem; potassium with diuretics and ACE/ARBs; bleeding with every anticoagulant.</li>" +
        "<li><b>Client teaching = what the client does at home.</b> Turn on cover mode and try to say it before you reveal it.</li></ol></div>";
    $("#reset").onclick = function () { if (confirm("Clear all saved progress and XP?")) { var th = S.theme; S = { xp: 0, drugs: {}, flash: {}, q: {}, best: {}, plain: false, cover: false, theme: th }; save(); document.getElementById("xp").textContent = 0; home(); } };
  }

  /* ================= DRUG TABLES ================= */
  function drugCard(d, catId, open) {
    var u = CAT[catId].sys;
    var other = d.cats.filter(function (c) { return c !== catId; });
    return '<details class="card drug-card sys-' + u + '" id="d-' + d.id + '"' + (open ? " open" : "") + ">" +
      '<summary><div class="drug-head"><h3>' + title(d) + (S.drugs[d.id] ? ' <span class="chip good-chip">✓</span>' : "") + '</h3><div class="drug-cls">' + esc(d.cls) + (d.note ? " · " + esc(d.note) : "") + "</div></div></summary>" +
      (other.length ? '<p class="small muted">Also in: ' + other.map(function (c) { return '<a href="#drugs/' + c + '">' + esc(CAT[c].name) + "</a>"; }).join(", ") + "</p>" : "") +
      '<div class="plain-card card plain-box"' + (S.plain ? "" : " hidden") + '><h4>🗣 In plain words</h4><p>' + esc(d.plain) + "</p></div>" +
      '<div class="key-line"><b>Must know:</b> ' + esc(d.key) + "</div>" +
      '<dl class="drug-fields">' + FIELDS.map(function (f) {
        return "<dt>" + f[1] + '</dt><dd><span class="fv' + (S.cover ? " covered" : "") + '" tabindex="0">' + esc(d[f[0]]) + "</span></dd>";
      }).join("") + "</dl>" +
      (d.beyond ? '<div class="callout beyond"><strong>Beyond the table</strong>' + esc(d.beyond) + "</div>" : "") +
      '<div class="row" style="margin-top:12px"><button class="btn small ' + (S.drugs[d.id] ? "good" : "primary") + '" data-mark="' + d.id + '">' + (S.drugs[d.id] ? "✓ Studied" : "Mark as studied") + "</button></div>" +
      "</details>";
  }

  function drugsShell(key, body) {
    var side = "";
    UNITS.forEach(function (u) {
      side += '<h4><span class="sys-dot sys-' + u.id + '"></span>' + esc(u.name) + "</h4>";
      catsIn(u.id).forEach(function (c) {
        var ds = drugsIn(c.id), done = ds.filter(function (d) { return S.drugs[d.id]; }).length;
        side += '<a class="sys-' + u.id + (key === c.id ? " active" : "") + '" href="#drugs/' + c.id + '">' + esc(c.name) + ' <span class="tiny">' + done + "/" + ds.length + "</span>" + (done === ds.length ? '<span class="check">✓</span>' : "") + "</a>";
      });
    });
    var jump = UNITS.map(function (u) {
      return '<optgroup label="' + esc(u.name) + '">' + catsIn(u.id).map(function (c) { return '<option value="drugs/' + c.id + '"' + (key === c.id ? " selected" : "") + ">" + esc(c.name) + "</option>"; }).join("") + "</optgroup>";
    }).join("");
    app.innerHTML = '<div class="topics-layout"><aside class="card sidebar" id="side"><div class="row" style="margin-bottom:6px"><b>Categories</b><span class="spacer"></span><span class="tiny">' + Object.keys(S.drugs).length + "/" + DRUGS.length + ' studied</span></div><div class="side-body">' + side + "</div></aside>" +
      '<div class="stack"><div class="search-wrap"><input type="search" id="q" placeholder="Search all ' + DRUGS.length + ' drugs: name, brand, class, effect…" aria-label="Search drugs" autocomplete="off"><div id="hits" class="hits" hidden></div></div>' +
      '<select class="topic-jump" id="jump" aria-label="Jump to category">' + jump + "</select>" + body + "</div></div>";
    $("#jump").onchange = function () { location.hash = "#" + this.value; };
    bindSearch();
  }

  function bindSearch() {
    var q = $("#q"), hits = $("#hits");
    q.oninput = function () {
      var t = q.value.trim().toLowerCase();
      if (t.length < 2) { hits.hidden = true; return; }
      var res = DRUGS.map(function (d) {
        var head = (d.name + " " + d.brand + " " + d.note + " " + d.cls).toLowerCase();
        var inHead = head.indexOf(t) > -1;
        var where = inHead ? null : FIELDS.filter(function (f) { return d[f[0]].toLowerCase().indexOf(t) > -1; }).map(function (f) { return f[1]; });
        return { d: d, score: inHead ? 2 : where.length ? 1 : 0, where: where };
      }).filter(function (r) { return r.score; }).sort(function (a, b) { return b.score - a.score; });
      hits.hidden = false;
      hits.innerHTML = res.length ? res.slice(0, 12).map(function (r) {
        return '<a href="#drug/' + r.d.id + '"><b>' + esc(plainTitle(r.d)) + '</b><span class="tiny">' + esc(r.where ? "found in " + r.where.join(", ") : r.d.cls) + "</span></a>";
      }).join("") + (res.length > 12 ? '<div class="tiny" style="padding:8px 12px">' + (res.length - 12) + " more; keep typing to narrow it down</div>" : "") : '<div class="tiny" style="padding:8px 12px">No drug matches "' + esc(q.value) + '"</div>';
    };
  }

  // open: one drug id or a list of ids whose cards start expanded; the last one is scrolled to
  function drugsView(catId, open) {
    var ids = [].concat(open || []), openId = ids[ids.length - 1];
    var c = CAT[catId] || CATS[0];
    var ds = drugsIn(c.id);
    var i = CATS.indexOf(c), prev = CATS[i - 1], next = CATS[i + 1];
    var body =
      '<div class="card topic-head sys-' + c.sys + '">' +
        '<div class="row">' + tag(c.sys) + '<span class="spacer"></span><span class="tiny">' + esc(UNIT[c.sys].weight) + "</span></div>" +
        '<div class="row switches">' + switchHTML("plainT", S.plain, "Plain language") + switchHTML("coverT", S.cover, "Cover mode") + "</div>" +
        '<h1 style="margin-top:10px">' + esc(c.name) + ' <span class="muted" style="font-weight:500">(' + ds.length + ")</span></h1>" +
        '<div class="mnemonic"><span class="tiny">Mnemonic</span><div class="mn-big">' + esc(c.mnemonic) + '</div><div class="small muted">' + esc(c.decode) + "</div></div>" +
      "</div>" +
      '<div class="card plain-card plain-box"' + (S.plain ? "" : " hidden") + '><h2>🗣 In plain words</h2><p class="plain-like" style="margin:0"><b>Think of it like this:</b> ' + esc(c.like) + "</p></div>" +
      '<div class="card"><h2>At a glance</h2><div class="table-wrap"><table class="glance"><thead><tr><th>Drug</th><th>Class</th><th>Must know</th></tr></thead><tbody>' +
        ds.map(function (d) { return '<tr><td><a href="#drug/' + d.id + '"><b>' + esc(d.name) + "</b></a>" + (d.brand ? '<br><span class="tiny">' + esc(d.brand) + "</span>" : "") + "</td><td>" + esc(d.cls) + "</td><td>" + esc(d.key) + "</td></tr>"; }).join("") +
      "</tbody></table></div></div>" +
      '<p class="small muted" style="margin:0">' + (S.cover ? "Cover mode is on: say each answer out loud, then tap the blurred text to check." : "Tap a drug to open its full table. Turn on cover mode to quiz yourself.") + "</p>" +
      ds.map(function (d) { return drugCard(d, c.id, ids.indexOf(d.id) > -1 || ds.length === 1); }).join("") +
      '<div class="row nav-links">' + (prev ? '<a class="btn" href="#drugs/' + prev.id + '">← ' + esc(prev.name) + "</a>" : "") + '<span class="spacer"></span>' +
        '<a class="btn" href="#quiz/' + c.sys + '">Quiz this unit</a>' + (next ? '<a class="btn primary" href="#drugs/' + next.id + '">' + esc(next.name) + " →</a>" : "") + "</div>";
    drugsShell(c.id, body);

    $("#plainT").onclick = function () { S.plain = !S.plain; save(); drugsView(c.id, openIds()); };
    $("#coverT").onclick = function () { S.cover = !S.cover; save(); drugsView(c.id, openIds()); };
    $$(".fv").forEach(function (f) { f.onclick = f.onkeydown = function (e) { if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return; if (e.type === "keydown") e.preventDefault(); f.classList.toggle("covered"); }; });
    $$("[data-mark]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-mark"), y = window.scrollY;
        if (S.drugs[id]) { delete S.drugs[id]; save(); } else { S.drugs[id] = 1; save(); addXP(10, "Drug studied"); if (ds.every(function (d) { return S.drugs[d.id]; })) confetti(); }
        drugsView(c.id, openIds().concat([id])); window.scrollTo(0, y);
      };
    });
    if (openId && DRUG[openId]) { var el = document.getElementById("d-" + openId); if (el) setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 0); }
  }
  function openIds() { return $$("details.drug-card[open]").map(function (x) { return x.id.slice(2); }); }

  // #drug/<id> opens the drug inside its first category
  function drugView(id) {
    var d = DRUG[id]; if (!d) return drugsView();
    drugsView(d.cats[0], id);
  }

  /* ================= COMPARE ================= */
  function compare(unitId, field) {
    var opts = [["cls", "Class"]].concat(FIELDS).concat([["key", "Must know"]]);
    var f = opts.filter(function (o) { return o[0] === field; })[0] || ["use", "Use"];
    var cats = unitId && UNIT[unitId] ? catsIn(unitId) : CATS;
    app.innerHTML = '<h1>Compare</h1><p class="muted">Pick one column and read it down the list. Look-alikes jump out (for example, every drug whose adverse effects include hyperkalemia).</p>' +
      unitBar(unitId && UNIT[unitId] ? unitId : null, "#compare") +
      '<div class="filter-bar">' + opts.map(function (o) { return '<a class="chip ' + (o[0] === f[0] ? "on" : "") + '" href="#compare/' + (unitId && UNIT[unitId] ? unitId : "all") + "/" + o[0] + '">' + o[1] + "</a>"; }).join("") + "</div>" +
      '<input type="search" id="hl" class="hl-input" placeholder="Highlight a word, e.g. potassium, bleeding, pregnancy" aria-label="Highlight a word">' +
      '<div class="card"><div class="table-wrap"><table class="compare"><thead><tr><th>Drug</th><th>' + f[1] + "</th></tr></thead><tbody>" +
      cats.map(function (c) {
        return '<tr class="cat-row sys-' + c.sys + '"><td colspan="2"><span class="sys-dot sys-' + c.sys + '"></span> ' + esc(c.name) + "</td></tr>" +
          drugsIn(c.id).map(function (d) { return '<tr><td><a href="#drug/' + d.id + '"><b>' + esc(d.name) + '</b></a></td><td class="cv">' + esc(d[f[0]]) + "</td></tr>"; }).join("");
      }).join("") + "</tbody></table></div></div>";
    var cells = $$(".cv"), raw = cells.map(function (c) { return c.innerHTML; });
    $("#hl").oninput = function () {
      var t = this.value.trim();
      var re = t.length > 1 ? new RegExp("(" + esc(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi") : null;
      var n = 0;
      cells.forEach(function (c, i) { var h = re ? raw[i].replace(re, function (m) { n++; return "<mark>" + m + "</mark>"; }) : raw[i]; c.innerHTML = h; c.parentNode.classList.toggle("dim", !!re && h === raw[i]); });
    };
  }

  /* ================= FLASHCARDS ================= */
  var FLASH = [];
  DRUGS.forEach(function (d) {
    var u = unitOf(d);
    FLASH.push({ k: d.id + ":cls", u: u, q: plainTitle(d) + ": class and main use?", a: d.cls + ".\n\nUse: " + d.use });
    FLASH.push({ k: d.id + ":key", u: u, q: plainTitle(d) + ": the one thing to remember?", a: d.key });
    if (d.brand) FLASH.push({ k: d.id + ":brand", u: u, q: "Brand name " + d.brand.split(/,|\[/)[0].trim() + " is which generic drug?", a: d.name + " (" + d.cls + ")" });
  });
  CATS.forEach(function (c) { FLASH.push({ k: "mn:" + c.id, u: c.sys, q: "Mnemonic for " + c.name + "?", a: c.mnemonic + "\n\n" + c.decode }); });

  function flash(unitId) {
    unitId = UNIT[unitId] ? unitId : null;
    var only = sget("pharmFlashOnly") === "1";
    var deck = shuffle(FLASH.filter(function (c) { return (!unitId || c.u === unitId) && (!only || !S.flash[c.k]); }));
    var total = FLASH.filter(function (c) { return !unitId || c.u === unitId; }).length;
    var pos = 0, flipped = false;
    function draw() {
      var known = FLASH.filter(function (c) { return (!unitId || c.u === unitId) && S.flash[c.k]; }).length;
      var head = '<div class="row" style="margin-bottom:6px"><h1 style="margin:0">Flashcards</h1><span class="spacer"></span><span class="small muted">' + known + " of " + total + " known</span></div>" +
        unitBar(unitId, "#flash") +
        '<label class="row small" style="margin-bottom:14px;gap:6px"><input type="checkbox" id="only" ' + (only ? "checked" : "") + "> Only show cards I haven't marked known</label>";
      if (!deck.length) { app.innerHTML = head + '<div class="card empty"><div style="font-size:48px">🎉</div><h2>Every card here is marked known.</h2><p>Uncheck the filter to review them all again.</p></div>'; bindHead(); return; }
      if (pos >= deck.length) {
        app.innerHTML = head + '<div class="card empty"><div style="font-size:48px">✅</div><h2>Deck finished</h2><p>' + known + " of " + total + ' known in this set.</p><button class="btn primary" id="again">Shuffle and go again</button></div>';
        bindHead(); $("#again").onclick = function () { flash(unitId); }; if (known === total) confetti(); return;
      }
      var c = deck[pos];
      app.innerHTML = head +
        '<div class="flash-stage sys-' + c.u + '">' +
          '<div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * pos / deck.length) + '%"></span></div>' +
          '<div class="flash' + (flipped ? " flipped" : "") + '" id="card" role="button" tabindex="0" aria-label="Flip card">' +
            '<div class="flash-face front"><span class="tagpos">' + tag(c.u) + '</span><div class="q">' + esc(c.q) + '</div><div class="hint">Tap or press space to flip</div></div>' +
            '<div class="flash-face back"><span class="tagpos">' + tag(c.u) + '</span><div class="a pre">' + esc(c.a) + '</div><div class="hint">' + (S.flash[c.k] ? "Marked known" : "Did you know it?") + "</div></div>" +
          "</div>" +
          '<div class="flash-controls">' +
            '<button class="btn" id="prev" ' + (pos === 0 ? "disabled" : "") + ">← Back</button>" +
            '<button class="btn bad" id="no">Still learning (1)</button>' +
            '<button class="btn good" id="yes">Got it (2)</button>' +
            '<button class="btn" id="skip">Skip →</button>' +
          '</div><p class="tiny" style="text-align:center;margin-top:10px">Card ' + (pos + 1) + " of " + deck.length + " · keys: space flip, 1 learning, 2 got it, ← →</p></div>";
      bindHead();
      $("#card").onclick = flip;
      $("#prev").onclick = function () { pos = Math.max(0, pos - 1); flipped = false; draw(); };
      $("#skip").onclick = function () { pos++; flipped = false; draw(); };
      $("#yes").onclick = function () { if (!S.flash[c.k]) { S.flash[c.k] = 1; save(); addXP(2); } pos++; flipped = false; draw(); };
      $("#no").onclick = function () { if (S.flash[c.k]) { delete S.flash[c.k]; save(); } deck.push(c); pos++; flipped = false; draw(); };
    }
    function flip() { flipped = !flipped; var el = $("#card"); if (el) el.classList.toggle("flipped", flipped); }
    function bindHead() { var o = $("#only"); if (o) o.onchange = function () { sset("pharmFlashOnly", o.checked ? "1" : "0"); flash(unitId); }; }
    function onKey(e) {
      if (e.target.tagName === "INPUT") return;
      if (e.key === " ") { e.preventDefault(); flip(); }
      else if (e.key === "1" && $("#no")) $("#no").click();
      else if (e.key === "2" && $("#yes")) $("#yes").click();
      else if (e.key === "ArrowRight" && $("#skip")) $("#skip").click();
      else if (e.key === "ArrowLeft" && $("#prev") && !$("#prev").disabled) $("#prev").click();
    }
    document.addEventListener("keydown", onKey);
    cleanup = function () { document.removeEventListener("keydown", onKey); };
    draw();
  }
  function sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  /* ================= PRACTICE QUESTIONS ================= */
  var TYPE_LABEL = { mc: "Multiple choice", sata: "Select all that apply" };
  function quiz(unitId) {
    unitId = UNIT[unitId] ? unitId : null;
    var pool = QUESTIONS.map(function (q, i) { return i; }).filter(function (i) { return !unitId || QUESTIONS[i].sys === unitId; });
    var answered = pool.filter(function (i) { return S.q[i] !== undefined; }).length;
    var correct = pool.filter(function (i) { return S.q[i] === 1; }).length;
    var missed = pool.filter(function (i) { return S.q[i] === 0; });
    var count = 10;
    app.innerHTML = "<h1>Practice Questions</h1>" + unitBar(unitId, "#quiz") +
      '<div class="grid grid-2"><div class="card"><h2>Start a set</h2><p class="small muted">' + pool.length + " questions here · " + answered + " tried · " + correct + " correct</p>" +
        '<div class="row" style="margin:12px 0"><span class="small">How many?</span>' + [10, 20, "All"].map(function (n, k) { return '<button class="chip' + (k === 0 ? " on" : "") + '" data-n="' + n + '">' + n + "</button>"; }).join("") + "</div>" +
        '<div class="row"><button class="btn primary" id="go">Start</button>' + (missed.length ? '<button class="btn" id="redo">Redo the ' + missed.length + " I missed</button>" : "") + "</div></div>" +
      '<div class="card"><h2>Formats</h2><ul class="facts small">' + Object.keys(TYPE_LABEL).map(function (t) { var n = pool.filter(function (i) { return QUESTIONS[i].type === t; }).length; return n ? "<li><b>" + TYPE_LABEL[t] + "</b> · " + n + "</li>" : ""; }).join("") + '</ul><p class="small muted">Answer choices are shuffled every time, so you learn the content, not the letter.</p></div></div>';
    $$("[data-n]").forEach(function (b) { b.onclick = function () { $$("[data-n]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); count = b.getAttribute("data-n") === "All" ? 999 : +b.getAttribute("data-n"); }; });
    $("#go").onclick = function () { runQuiz(shuffle(pool).slice(0, count), unitId); };
    if ($("#redo")) $("#redo").onclick = function () { runQuiz(shuffle(missed), unitId); };
  }

  function runQuiz(ids, unitId) {
    var pos = 0, score = 0, results = [];
    function next() {
      if (pos >= ids.length) return finish();
      var qi = ids[pos], q = QUESTIONS[qi], multi = q.type === "sata";
      var order = shuffle(q.options.map(function (o, k) { return k; }));
      app.innerHTML = '<div class="q-card card sys-' + q.sys + '"><div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * pos / ids.length) + '%"></span></div>' +
        '<div class="q-meta">' + tag(q.sys) + '<span class="chip">' + TYPE_LABEL[q.type] + '</span><span class="spacer"></span><span class="tiny">' + (pos + 1) + " / " + ids.length + " · score " + score + "</span></div>" +
        '<div class="q-stem">' + esc(q.stem) + "</div>" +
        order.map(function (k) { return '<button class="opt' + (multi ? " multi" : "") + '" data-k="' + k + '"><span class="box"></span><span>' + esc(q.options[k]) + "</span></button>"; }).join("") +
        '<div id="rat"></div><div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn primary" id="submit">Check answer</button></div></div>';
      $$(".opt").forEach(function (b) { b.onclick = function () {
        if (!multi) $$(".opt").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.toggle("sel");
      }; });
      $("#submit").onclick = function () { grade(q, qi); };
    }
    function grade(q, qi) {
      var sel = $$(".opt.sel").map(function (b) { return +b.getAttribute("data-k"); });
      if (!sel.length) { toast("Choose an answer first"); return; }
      var ans = q.type === "mc" ? [q.answer] : q.answer;
      var ok = sel.length === ans.length && sel.every(function (k) { return ans.indexOf(k) > -1; });
      $$(".opt").forEach(function (b) {
        var k = +b.getAttribute("data-k"); b.disabled = true; var isA = ans.indexOf(k) > -1, isS = sel.indexOf(k) > -1;
        b.classList.remove("sel"); if (isA && isS) b.classList.add("right"); else if (isS) b.classList.add("wrong"); else if (isA) b.classList.add("right", "missed");
        b.querySelector(".box").textContent = isA ? "✓" : isS ? "✕" : "";
      });
      S.q[qi] = ok ? 1 : 0;
      if (ok) { score++; addXP(10); } save();
      results.push({ qi: qi, ok: ok });
      $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Correct!" : "Not quite.") + "</strong>" + esc(q.why) + "</div>";
      var btn = $("#submit"); btn.textContent = pos + 1 >= ids.length ? "See results" : "Next question →";
      btn.onclick = function () { pos++; next(); window.scrollTo(0, 0); };
      btn.focus();
    }
    function finish() {
      var pct = Math.round(100 * score / ids.length);
      var wrong = results.filter(function (r) { return !r.ok; });
      app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">' + (pct >= 85 ? "🏆" : pct >= 70 ? "💪" : "📖") + '</div><div class="big-score">' + pct + '%</div><p class="muted">' + score + " of " + ids.length + " correct</p>" +
        "<p>" + (pct >= 85 ? "Exam-ready on this set." : pct >= 70 ? "Solid. Review the rationales you missed." : "Go back to the drug tables for the units you missed, then retry.") + "</p>" +
        '<div class="row" style="justify-content:center"><a class="btn primary" href="#quiz' + (unitId ? "/" + unitId : "") + '">New set</a><a class="btn" href="#drugs">Drug tables</a></div></div>' +
        (wrong.length ? '<h2 style="margin-top:24px">Review what you missed</h2>' + wrong.map(function (r) { var q = QUESTIONS[r.qi]; return '<div class="card sys-' + q.sys + '" style="margin-bottom:12px"><div class="q-meta">' + tag(q.sys) + '<span class="chip">' + TYPE_LABEL[q.type] + "</span></div><p><b>" + esc(q.stem) + '</b></p><p class="small muted">' + esc(q.why) + "</p></div>"; }).join("") : "");
      if (pct >= 85) confetti();
    }
    next();
  }

  /* ================= NAME GAME ================= */
  var MODES = {
    brand: { label: "Brand → generic", pool: function () { return DRUGS.filter(function (d) { return d.brand; }); },
      ask: function (d) { return { q: d.brand.split(/,|\[/)[0].trim(), sub: "is the brand name for…", a: d.name, opts: DRUGS.map(function (x) { return x.name; }) }; } },
    cat: { label: "Drug → category", pool: function () { return DRUGS; },
      ask: function (d) { return { q: d.name, sub: "goes in which category?", a: d.cats.map(function (c) { return CAT[c].name; }), opts: CATS.map(function (c) { return c.name; }) }; } },
    cls: { label: "Drug → class", pool: function () { return DRUGS; },
      ask: function (d) { return { q: d.name, sub: "belongs to which class?", a: d.cls, opts: DRUGS.map(function (x) { return x.cls; }) }; } },
    suffix: { label: "Suffix → class", pool: function () { return SUFFIXES; },
      ask: function (s) { return { q: s[0], sub: "names usually mean…", a: s[1], opts: SUFFIXES.map(function (x) { return x[1]; }), after: "Example: " + s[2] }; } }
  };
  function names(mode) {
    if (!MODES[mode]) {
      app.innerHTML = '<h1>Name Game</h1><p class="muted">Rapid fire. Pick a mode, then keep the streak going. Best streak: <b>' + (S.best.names || 0) + "</b></p>" +
        '<div class="grid grid-2">' + Object.keys(MODES).map(function (k) { return '<a class="card tile" href="#names/' + k + '"><h3>' + MODES[k].label + '</h3><p class="small muted">' + MODES[k].pool().length + " items</p></a>"; }).join("") + "</div>";
      return;
    }
    var M = MODES[mode], streak = 0, right = 0, total = 0;
    function ask() {
      var item = pick(M.pool()), x = M.ask(item);
      var answers = [].concat(x.a);
      var distract = shuffle(x.opts.filter(function (o, i, a) { return a.indexOf(o) === i && answers.indexOf(o) < 0; })).slice(0, 3);
      var correct = pick(answers);
      var opts = shuffle(distract.concat([correct]));
      app.innerHTML = '<div class="row"><h1 style="margin:0">Name Game</h1><span class="spacer"></span><a class="chip" href="#names">Change mode</a></div>' +
        '<p class="small muted">' + M.label + " · streak <b>" + streak + "</b> · " + right + "/" + total + " · best " + (S.best.names || 0) + "</p>" +
        '<div class="card q-card name-card"><div class="name-q">' + esc(x.q) + '</div><p class="muted">' + esc(x.sub) + "</p>" +
        opts.map(function (o) { return '<button class="opt" data-o="' + esc(o) + '"><span class="box"></span><span>' + esc(o) + "</span></button>"; }).join("") +
        '<div id="rat"></div></div>';
      $$(".opt").forEach(function (b) {
        b.onclick = function () {
          var o = b.getAttribute("data-o"), ok = answers.indexOf(o) > -1;
          total++;
          $$(".opt").forEach(function (y) { y.disabled = true; var r = answers.indexOf(y.getAttribute("data-o")) > -1; if (r) y.classList.add("right"); else if (y === b) y.classList.add("wrong"); y.querySelector(".box").textContent = r ? "✓" : y === b ? "✕" : ""; });
          if (ok) {
            right++; streak++; addXP(1);
            if (streak > (S.best.names || 0)) { S.best.names = streak; save(); }
            if (streak % 10 === 0) { confetti(); toast(streak + " in a row!"); }
          } else streak = 0;
          $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Yes!" : "Not quite.") + "</strong>" + esc(x.q + " → " + answers.join(" / ") + (x.after ? ". " + x.after : "")) + "</div>" +
            '<div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="nx">Next →</button></div>';
          $("#nx").onclick = ask; $("#nx").focus();
        };
      });
    }
    ask();
  }

  /* ================= MEMORY AIDS ================= */
  function memory() {
    app.innerHTML = "<h1>Memory Aids</h1>" +
      '<div class="card"><h2>Which drug goes where</h2><p class="small muted">Personal memory aids from the drug tables, not ATI content. The first letter of each word matches a drug in that category.</p><div class="table-wrap"><table><thead><tr><th>Category</th><th>Mnemonic</th><th>Drugs</th></tr></thead><tbody>' +
        CATS.map(function (c) { return '<tr><td><a href="#drugs/' + c.id + '"><span class="sys-dot sys-' + c.sys + '"></span> ' + esc(c.name) + "</a></td><td><b>" + esc(c.mnemonic) + "</b></td><td>" + esc(c.decode) + "</td></tr>"; }).join("") +
      "</tbody></table></div></div>" +
      '<div class="card" style="margin-top:20px"><h2>Name endings that give away the class</h2><div class="table-wrap"><table><thead><tr><th>Ending</th><th>Class</th><th>Example</th></tr></thead><tbody>' +
        SUFFIXES.map(function (s) { return "<tr><td><b>" + esc(s[0]) + "</b></td><td>" + esc(s[1]) + "</td><td>" + esc(s[2]) + "</td></tr>"; }).join("") +
      '</tbody></table></div><div class="row" style="margin-top:12px"><a class="btn primary" href="#names/suffix">Drill the suffixes</a><a class="btn" href="#names/cat">Drill the categories</a></div></div>';
  }

  /* ---------- Confetti ---------- */
  var confettiRun = 0;
  function confetti() {
    var run = ++confettiRun;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var cv = document.getElementById("confetti"), ctx = cv.getContext("2d"), W = cv.width = innerWidth, H = cv.height = innerHeight;
    var colors = ["#c8463d", "#a43f87", "#4b5fc9", "#c27a17", "#1f8a5b"];
    var bits = []; for (var i = 0; i < 140; i++) bits.push({ x: Math.random() * W, y: -20 - Math.random() * H * 0.4, vx: Math.random() * 4 - 2, vy: 2 + Math.random() * 4, s: 4 + Math.random() * 5, c: pick(colors), r: Math.random() * 6 });
    var frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      bits.forEach(function (b) { b.x += b.vx; b.y += b.vy; b.vy += 0.05; b.r += 0.1; ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6); ctx.restore(); });
      if (++frames < 120 && run === confettiRun) requestAnimationFrame(tick); else ctx.clearRect(0, 0, W, H);
    })();
  }

  /* ---------- Theme ---------- */
  function applyTheme() { if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
  document.getElementById("theme").onclick = function () {
    var dark = S.theme === "dark" || (S.theme === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    S.theme = dark ? "light" : "dark"; save(); applyTheme();
  };
  applyTheme();
  document.getElementById("xp").textContent = S.xp;
  route();
})();
