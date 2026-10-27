(function () {
  "use strict";

  /* ---------- Storage (per-browser; works offline from file://) ---------- */
  var G = window.GUIDE || {};
  var KEY = G.key || "guide-v1";
  var S = { xp: 0, flash: {}, q: {}, topics: {}, best: {}, normal: { right: 0, total: 0, streak: 0 }, theme: "auto" };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) S = Object.assign(S, saved); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var app = document.getElementById("app");
  var SYS = {}; SYSTEMS.forEach(function (s) { SYS[s.id] = s; });

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function rand(a, b, dp) { var v = a + Math.random() * (b - a); var m = Math.pow(10, dp || 0); return Math.round(v * m) / m; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function tag(sys) { return '<span class="tag sys-' + sys + '">' + esc(SYS[sys].icon + " " + SYS[sys].short) + "</span>"; }
  function $(sel, root) { return (root || app).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || app).querySelectorAll(sel)); }
  function addXP(n, msg) { S.xp += n; save(); document.getElementById("xp").textContent = S.xp; if (msg) toast(msg + "  +" + n + " XP"); }
  var toastTimer;
  function toast(msg) { var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1600); }
  function sysFilterBar(active, hrefBase, includeFound) {
    var out = '<div class="filter-bar"><a class="chip ' + (!active ? "on" : "") + '" href="' + hrefBase + '">All</a>';
    SYSTEMS.forEach(function (s) { if (s.id === "found" && !includeFound) return; out += '<a class="chip ' + (active === s.id ? "on" : "") + '" href="' + hrefBase + "/" + s.id + '"><span class="sys-dot sys-' + s.id + '"></span>' + esc(s.short) + "</a>"; });
    return out + "</div>";
  }

  /* ---------- Mastery ---------- */
  function mastery(sys) {
    var parts = [];
    var fc = FLASHCARDS.map(function (c, i) { return [c, i]; }).filter(function (x) { return !sys || x[0][0] === sys; });
    if (fc.length) parts.push(fc.filter(function (x) { return S.flash[x[1]]; }).length / fc.length);
    var qs = QUESTIONS.map(function (q, i) { return [q, i]; }).filter(function (x) { return !sys || x[0].sys === sys; });
    if (qs.length) parts.push(qs.filter(function (x) { return S.q[x[1]] === 1; }).length / qs.length);
    var ts = DISORDERS.filter(function (d) { return !sys || d.sys === sys; });
    if (ts.length) parts.push(ts.filter(function (d) { return S.topics[d.id]; }).length / ts.length);
    if (!parts.length) return 0;
    return Math.round(100 * parts.reduce(function (a, b) { return a + b; }, 0) / parts.length);
  }

  /* ---------- Router ---------- */
  var cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    confettiRun++;
    var h = (location.hash || "#home").slice(1).split("/");
    var r = h[0] || "home", arg = h[1], arg2 = h[2];
    $$("#nav a", document).forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-r") === r || ((r === "topic" || r === "intro") && a.getAttribute("data-r") === "topics")); });
    var views = { home: home, topics: topics, topic: topics, intro: intro, pics: pics, flash: flash, quiz: quiz, sort: sortGame, chains: chains, triage: triage, normal: normalGame, emerg: emerg };
    (views[r] || home)(arg, arg2);
    window.scrollTo(0, 0);
    var active = $(".nav a.active", document); if (active && active.scrollIntoView) { try { active.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {} }
  }
  window.addEventListener("hashchange", route);

  /* ================= HOME ================= */
  function home() {
    var overall = mastery(null);
    var rows = SYSTEMS.map(function (s) {
      var m = mastery(s.id);
      var first = DISORDERS.filter(function (d) { return d.sys === s.id; })[0];
      return '<a class="blueprint-row sys-' + s.id + '" href="#topic/' + first.id + '">' +
        '<span style="font-size:20px">' + s.icon + '</span><span><span class="name">' + esc(s.name) + '</span><br><span class="tiny">' + esc(s.weight) + "</span></span>" +
        '<span class="small" style="font-weight:700">' + m + '%</span><div class="progress bar"><span style="width:' + m + '%"></span></div></a>';
    }).join("");
var tiles = [
      ["#topics", "📚", "Topic Pages", "Every topic on the study guide as " + (G.chainShort || "a step-by-step chain") + ", with self-check questions."],
      ["#pics", "🖼️", "Picture Lab", "Tap-to-learn diagrams for every section, plus a picture quiz from the lecture slides."],
      ["#flash", "🃏", "Flashcards", FLASHCARDS.length + " flip cards. Mark what you know and drill the rest."],
      ["#quiz", "📝", "Practice Questions", QUESTIONS.length + " exam-style items: multiple choice, SATA, select N, cloze dropdowns, and matrix grids."],
      ["#normal", "🔍", "Expected or Not?", "Rapid-fire findings: expected, unexpected (follow up), or report now?"],
      ["#sort", "🧺", "Sort It", "Race the clock sorting findings between look-alike categories."],
      ["#chains", "🔢", "Step Order", "Put assessment steps and sequences in the right order."],
      ["#triage", "🚨", "Who First?", "Pick the priority client from a group of four."],
      ["#emerg", "⚠️", "Red Flags & Look-alikes", "Findings to escalate now, and how to tell similar findings apart."]
    ].map(function (t) { return '<a class="card tile" href="' + t[0] + '"><div class="emoji">' + t[1] + "</div><h3>" + t[2] + '</h3><p class="muted small">' + t[3] + "</p></a>"; }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-main"><div class="hero-art">' + (G.heroArt || "🩺") + '</div>' +
          '<div class="tiny" style="color:rgba(255,255,255,.8);font-weight:700;letter-spacing:.06em;text-transform:uppercase">' + esc(G.course || "") + "</div>" +
          "<h1>" + esc(G.title || "Study Lab") + "</h1>" +
          "<p>" + (G.heroText || "") + "</p>" +
          '<div class="row"><a class="btn" href="#topics">Start with topics</a><a class="btn ghost" href="#quiz">Quick quiz</a></div>' +
        "</div>" +
        '<div class="card"><h3>Your progress</h3><div class="ring-wrap"><div class="ring" style="--p:' + overall + '" data-label="' + overall + '%"></div>' +
          '<div class="small muted">Mastery blends flashcards you know, questions you have answered correctly, and topics you marked studied.<br><br><b>' + S.xp + " XP</b> earned · Expected-or-Not best streak <b>" + (S.best.normalStreak || 0) + "</b></div></div>" +
          '<div class="row" style="margin-top:14px"><button class="btn small" id="reset">Reset progress</button></div></div>' +
      "</section>" +
      '<section class="grid grid-2">' +
        '<div class="card"><h2>Exam blueprint</h2><p class="small muted">Tap a system to jump to its first topic.</p>' + rows + "</div>" +
        '<div class="stack"><div class="card"><h2>Heard in lecture</h2><ul class="list-clean">' + EMPHASIS.map(function (e) { return "<li>⭐ " + esc(e) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="card"><h2>Question types on the exam</h2><div class="row">' + (G.formats || ["Multiple choice", "Select all that apply"]).map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + '</div><p class="small muted" style="margin-top:10px">' + esc(G.formatNote || "Practice Qs uses these formats and a few NGN extras.") + '</p></div></div>' +
      "</section>" +
      '<h2 style="margin-top:28px">Study modes</h2><section class="grid grid-3">' + tiles + "</section>" +
      '<section class="grid grid-2" style="margin-top:28px">' +
        '<div class="card sys-found"><h2>Critical thinking questions</h2><p class="small muted">From the study guide. Tap for the strategy.</p>' + CRITICAL_THINKING.map(function (q, i) { return revealQ((i + 1) + ". " + q[0], q[1]); }).join("") + "</div>" +
        '<div class="card"><h2>Test-taking strategy</h2><ol class="facts">' + STRATEGY.map(function (s) { return "<li><b>" + esc(s[0]) + ".</b> " + esc(s[1]) + "</li>"; }).join("") + "</ol>" +
        '<div class="callout" style="margin-top:14px"><strong>Clinical judgment frame</strong>Health assessment is the first two steps: recognize cues (a structured history and a systematic exam) and analyze cues (expected vs. unexpected, compared with the client\'s baseline). Then prioritize: ABCs, acute over chronic, unstable over stable.</div></div>' +
      "</section>";
    bindReveal();
    $("#reset").onclick = function () { if (confirm("Clear all saved progress and XP?")) { var th = S.theme; S = { xp: 0, flash: {}, q: {}, topics: {}, best: {}, normal: { right: 0, total: 0, streak: 0 }, theme: th }; save(); document.getElementById("xp").textContent = 0; home(); } };
  }

  function revealQ(q, a) { return '<div class="reveal-q"><button type="button">' + esc(q) + '</button><div class="ans">' + esc(a) + "</div></div>"; }
  function bindReveal() { $$(".reveal-q button").forEach(function (b) { b.onclick = function () { b.parentNode.classList.toggle("open"); }; }); }

  /* ================= TOPICS ================= */
  /* Reading order: each system's overview page, then its topics */
  var SECTIONS = window.SECTIONS || {};
  var ORDER = [];
  SYSTEMS.forEach(function (s) {
    if (SECTIONS[s.id]) ORDER.push({ key: "intro/" + s.id, name: s.name + ": overview" });
    DISORDERS.filter(function (x) { return x.sys === s.id; }).forEach(function (x) { ORDER.push({ key: "topic/" + x.id, name: x.name }); });
  });
  function navLinks(key, middle) {
    var i = ORDER.map(function (o) { return o.key; }).indexOf(key), prev = ORDER[i - 1], next = ORDER[i + 1];
    return '<div class="row">' + (prev ? '<a class="btn" href="#' + prev.key + '">← ' + esc(prev.name) + "</a>" : "") + '<span class="spacer"></span>' + (middle || "") +
      (next ? '<a class="btn" href="#' + next.key + '">' + esc(next.name) + " →</a>" : "") + "</div>";
  }
  function topicShell(key, body) {
    var side = "";
    SYSTEMS.forEach(function (s) {
      side += '<h4><span class="sys-dot sys-' + s.id + '"></span>' + esc(s.name) + "</h4>";
      if (SECTIONS[s.id]) side += '<a class="sys-' + s.id + ' intro-link' + (key === "intro/" + s.id ? " active" : "") + '" href="#intro/' + s.id + '">Overview</a>';
      DISORDERS.filter(function (x) { return x.sys === s.id; }).forEach(function (x) {
        side += '<a class="sys-' + s.id + (key === "topic/" + x.id ? " active" : "") + '" href="#topic/' + x.id + '">' + esc(x.name) + (x.star ? ' <span class="star">★</span>' : "") + (S.topics[x.id] ? '<span class="check">✓</span>' : "") + "</a>";
      });
    });
    var jump = SYSTEMS.map(function (s) {
      return '<optgroup label="' + esc(s.name) + '">' + (SECTIONS[s.id] ? '<option value="intro/' + s.id + '"' + (key === "intro/" + s.id ? " selected" : "") + ">Overview</option>" : "") +
        DISORDERS.filter(function (x) { return x.sys === s.id; }).map(function (x) { return '<option value="topic/' + x.id + '"' + (key === "topic/" + x.id ? " selected" : "") + ">" + esc(x.name) + (S.topics[x.id] ? " ✓" : "") + "</option>"; }).join("") + "</optgroup>";
    }).join("");
    app.innerHTML = '<div class="topics-layout"><aside class="card sidebar" id="side"><div class="row" style="margin-bottom:6px"><b>Topics</b><span class="spacer"></span><span class="tiny">' + Object.keys(S.topics).length + "/" + DISORDERS.length + ' studied</span></div><div class="side-body">' + side + '</div></aside><div class="stack"><select class="topic-jump" id="jump" aria-label="Jump to topic">' + jump + "</select>" + body + "</div></div>";
    $("#jump").onchange = function () { location.hash = "#" + this.value; };
    bindReveal();
  }
  function diagramCard(dg, sys, heading) {
    return '<div class="card sys-' + sys + '"><div class="row"><h2 style="margin:0">' + heading + '</h2><span class="spacer"></span><a class="chip" href="#pics/diagrams/' + dg.id + '/find">Quiz me on it</a></div>' + diagramHTML(dg) + "</div>";
  }

  function intro(sysId) {
    var sec = SECTIONS[sysId], s = SYS[sysId];
    if (!sec || !s) { topics(); return; }
    var dg = DIAG.filter(function (g) { return g.id === sec.diagram; })[0];
    var list = DISORDERS.filter(function (x) { return x.sys === sysId; });
    var body =
      '<div class="card topic-head sys-' + sysId + '"><div class="row">' + tag(sysId) + '<span class="spacer"></span><span class="tiny">' + esc(s.weight || "") + "</span></div>" +
        '<h1 style="margin-top:10px">' + esc(s.icon + " " + s.name) + '</h1><p class="muted" style="margin-bottom:0">' + esc(sec.lead) + "</p></div>" +
      '<div class="card sys-' + sysId + ' summary-card"><h2>The big picture</h2>' + sec.summary.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      (dg ? diagramCard(dg, sysId, "🧩 " + (dg.kind === "structure" ? "Structure: " : "") + esc(dg.title)) : "") +
      '<div class="card"><h2>Structure & function to know</h2><ul class="facts">' + sec.structure.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" +
      "<h2>Topics in this section</h2>" +
      '<div class="grid grid-2 intro-topics">' + list.map(function (x) {
        return '<a class="card tile sys-' + sysId + '" href="#topic/' + x.id + '"><div class="row"><h3 style="margin:0">' + esc(x.name) + (x.star ? ' <span class="star">★</span>' : "") + '</h3><span class="spacer"></span>' + (S.topics[x.id] ? '<span class="chip good-chip">✓ studied</span>' : "") + '</div><p class="small muted" style="margin:6px 0 0">' + esc(PLAIN[x.id] && S.plain ? PLAIN[x.id].text.split(". ")[0] + "." : x.summary) + "</p></a>";
      }).join("") + "</div>" +
      navLinks("intro/" + sysId, sysId !== "found" ? '<a class="btn" href="#quiz/' + sysId + '">Quiz this system</a>' : "");
    topicShell("intro/" + sysId, body);
    if (dg) bindDiagram($(".dg"), dg, "explore");
  }

  function topics(id) {
    var d = DISORDERS.filter(function (x) { return x.id === id; })[0];
    if (!d) { intro(SYSTEMS[0].id); return; }
    var s = SYS[d.sys];

    function bullets(arr) { return "<ul>" + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
    function table(t) { return '<div class="table-wrap"><table><thead><tr>' + t.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + t.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>"; }

    var tdg = DIAG.filter(function (g) { return g.topic === d.id; })[0];
    var body =
      '<div class="card topic-head sys-' + d.sys + '">' +
        '<div class="row">' + tag(d.sys) + (d.star ? '<span class="chip" style="color:var(--warn)">★ ' + esc(d.starLabel || "Emphasized in lecture") + "</span>" : "") + '<span class="spacer"></span><span class="tiny">' + esc(s.weight || "") + "</span></div>" +
        (PLAIN[d.id] ? '<div class="plain-switch"><button type="button" class="switch' + (S.plain ? " on" : "") + '" id="plainT" role="switch" aria-checked="' + (S.plain ? "true" : "false") + '"><span class="knob"></span></button><label for="plainT">Plain language</label></div>' : "") +
        '<h1 style="margin-top:10px">' + esc(d.name) + "</h1>" + (d.sub ? '<p class="muted">' + esc(d.sub) + "</p>" : "") +
        "<p>" + esc(d.summary) + "</p>" +
        '<div class="connect"><span class="small muted" style="margin-right:4px">' + esc(G.connectLabel || "Connect to:") + '</span>' + d.connect.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" +
        (d.pathogens ? '<div class="pathogens" style="margin-top:10px"><span class="small muted" style="margin-right:4px">Pathogens:</span>' + d.pathogens.map(function (p) { return '<span class="pathogen">' + esc(p) + "</span>"; }).join("") + "</div>" : "") +
      "</div>" +
      plainCard(d) +
      (tdg ? diagramCard(tdg, d.sys, "🧩 " + esc(tdg.title)) : "") +
      '<div class="card sys-' + d.sys + '"><h2>' + esc(G.chainTitle || "The chain") + '</h2><p class="small muted">' + esc(G.chainNote || "") + "</p>" +
        '<div class="chain">' + (G.chainKeys || [["mechanism", "1 · Mechanism"], ["change", "2 · Physiologic change"], ["cues", "3 · Expected cues"], ["worst", "4 · Worst case"]]).map(function (k) {
          return d.chain[k[0]] ? '<div class="chain-step"><h4>' + esc(k[1]) + "</h4>" + bullets(d.chain[k[0]]) + "</div>" : "";
        }).join("") +
        "</div></div>" +
      (d.table ? '<div class="card"><h2>' + (d.tableTitle || "At a glance") + "</h2>" + table(d.table) + "</div>" : "") +
      (d.table2 ? '<div class="card"><h2>' + esc(d.table2.title) + "</h2>" + table(d.table2) + "</div>" : "") +
      (d.facts && d.facts.length ? '<div class="card"><h2>Must-know facts</h2><ul class="facts">' + d.facts.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" : "") +
      (d.beyond ? '<div class="callout beyond"><strong>Beyond the lectures</strong>' + esc(d.beyond) + "</div>" : "") +
      (d.qa && d.qa.length ? '<div class="card sys-' + d.sys + '"><h2>Study guide questions</h2><p class="small muted">Answer out loud first, then tap to check.</p>' + d.qa.map(function (q) { return revealQ(q[0], q[1]); }).join("") + "</div>" : "") +
      navLinks("topic/" + d.id, '<button class="btn ' + (S.topics[d.id] ? "good" : "primary") + '" id="mark">' + (S.topics[d.id] ? "✓ Studied" : "Mark as studied") + "</button>" +
        (d.sys !== "found" ? '<a class="btn" href="#quiz/' + d.sys + '">Quiz this system</a>' : ""));

    topicShell("topic/" + d.id, body);
    if ($("#plainT")) $("#plainT").onclick = function () { S.plain = !S.plain; save(); this.classList.toggle("on", S.plain); this.setAttribute("aria-checked", S.plain ? "true" : "false"); var b = $("#plainBox"); if (b) { b.hidden = !S.plain; if (S.plain) b.scrollIntoView({ block: "nearest", behavior: "smooth" }); } };
    if (tdg) bindDiagram($(".dg"), tdg, "explore");
    $("#mark").onclick = function () {
      if (S.topics[d.id]) { delete S.topics[d.id]; save(); topics(d.id); return; }
      S.topics[d.id] = 1; save(); addXP(15, "Topic studied");
      topics(d.id);
    };
  }


  /* ================= PICTURES: lecture slides, diagrams, plain language ================= */
  var SLIDE_LIST = window.SLIDES || [], DECKS = window.SLIDE_DECKS || [], FIGS = window.FIGURES || [], DIAG = window.DIAGRAMS || [], PLAIN = window.PLAIN || {};
  var CREDIT = G.credit || "";
  function topicName(id) { var d = DISORDERS.filter(function (x) { return x.id === id; })[0]; return d ? d.name : id; }
  function deckLabel(s) { var d = DECKS[s.deck]; return d ? d.mod + " · " + d.title : ""; }

  function plainCard(d) {
    var p = PLAIN[d.id]; if (!p) return "";
    return '<div class="card plain-card sys-' + d.sys + '" id="plainBox"' + (S.plain ? "" : " hidden") + '><h2>🗣 In plain words</h2><p>' + esc(p.text) + "</p>" +
      (p.like ? '<p class="plain-like"><b>Think of it like this:</b> ' + esc(p.like) + "</p>" : "") + "</div>";
  }

  /* Lightbox: one overlay shared by every picture on the site */
  var lb = null;
  function openLB(items, i) {
    if (!lb) {
      lb = document.createElement("div"); lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
      lb.innerHTML = '<button class="lb-x" aria-label="Close">✕</button><button class="lb-nav lb-prev" aria-label="Previous">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-nav lb-next" aria-label="Next">›</button>';
      document.body.appendChild(lb);
      lb.onclick = function (e) { if (e.target === lb || e.target.classList.contains("lb-x")) closeLB(); };
      document.addEventListener("keydown", function (e) { if (!lb.classList.contains("open")) return; if (e.key === "Escape") closeLB(); else if (e.key === "ArrowRight") lb.step(1); else if (e.key === "ArrowLeft") lb.step(-1); });
    }
    var pos = i;
    lb.step = function (n) { pos = (pos + n + items.length) % items.length; show(); };
    function show() { var it = items[pos]; lb.querySelector("img").src = it.src; lb.querySelector("img").alt = it.cap; lb.querySelector("figcaption").innerHTML = esc(it.cap) + (items.length > 1 ? ' <span class="tiny">' + (pos + 1) + " / " + items.length + "</span>" : ""); }
    lb.querySelector(".lb-prev").onclick = function () { lb.step(-1); };
    lb.querySelector(".lb-next").onclick = function () { lb.step(1); };
    lb.querySelector(".lb-prev").style.display = lb.querySelector(".lb-next").style.display = items.length > 1 ? "" : "none";
    show(); lb.classList.add("open"); document.body.style.overflow = "hidden";
  }
  function closeLB() { if (lb) { lb.classList.remove("open"); document.body.style.overflow = ""; } }

  /* Tap-to-learn diagrams. Explore: tap a dot to learn it. Find it: tap the dot that matches the name. */
  function diagramHTML(dg, focus) {
    return '<div class="dg" data-dg="' + dg.id + '"><div class="dg-wrap"><svg class="dg-svg" viewBox="' + dg.view + '" role="img" aria-label="' + esc(dg.title) + ' diagram">' + dg.svg +
      dg.spots.map(function (p, i) { var hot = focus && p.topics.indexOf(focus) > -1; return '<g class="spot' + (hot ? " hot" : "") + '" data-i="' + i + '" tabindex="0" role="button" aria-label="' + (i + 1) + '"><circle r="13" cx="' + p.x + '" cy="' + p.y + '"></circle><text x="' + p.x + '" y="' + (p.y + 4.5) + '">' + (i + 1) + "</text></g>"; }).join("") +
      '</svg></div><div class="dg-panel"></div></div>';
  }
  function bindDiagram(root, dg, mode, focus) {
    if (!root) return;
    var panel = root.querySelector(".dg-panel"), spots = Array.prototype.slice.call(root.querySelectorAll(".spot")), seen = {};
    function info(i) {
      var p = dg.spots[i];
      return "<h3>" + (i + 1) + " · " + esc(p.label) + "</h3><p>" + esc(p.text) + "</p>" +
        (p.topics.length ? '<div class="row">' + p.topics.map(function (t) { return '<a class="chip" href="#topic/' + t + '">' + esc(topicName(t)) + " →</a>"; }).join("") + "</div>" : "");
    }
    if (mode === "find") {
      var order = shuffle(dg.spots.map(function (p, i) { return i; })), k = 0, right = 0, tries = 0;
      var ask = function () {
        spots.forEach(function (g) { g.classList.remove("bad"); });
        if (k >= order.length) {
          panel.innerHTML = "<h3>Done! " + right + " / " + order.length + " on the first try</h3><p class=\"small muted\">Every structure is labeled now. Tap any dot to review it.</p><button class=\"btn primary\" id=\"dg-again\">Try again</button>";
          if (right === order.length) { addXP(10, "Perfect diagram"); confetti(); }
          root.querySelector("#dg-again").onclick = function () { spots.forEach(function (g) { g.classList.remove("good"); }); bindDiagram(root, dg, "find", focus); };
          spots.forEach(function (g) { g.onclick = function () { panel.innerHTML = info(+g.getAttribute("data-i")); }; });
          return;
        }
        tries = 0;
        panel.innerHTML = '<p class="tiny">' + (k + 1) + " of " + order.length + " · score " + right + '</p><h3>Find: ' + esc(dg.spots[order[k]].label) + '</h3><p class="small muted">Tap the numbered dot.</p>';
      };
      spots.forEach(function (g) {
        g.onclick = g.onkeydown = function (e) {
          if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
          var i = +g.getAttribute("data-i"); if (k >= order.length || g.classList.contains("good")) return;
          if (i === order[k]) { if (!tries) right++; g.classList.add("good"); k++; toast("✓ " + dg.spots[i].label); ask(); }
          else { tries++; g.classList.add("bad"); setTimeout(function () { g.classList.remove("bad"); }, 600); panel.querySelector(".muted").textContent = "That's " + dg.spots[i].label + ". Try again."; }
        };
      });
      ask();
      return;
    }
    panel.innerHTML = '<p class="muted">Tap a numbered dot to learn what it is and what you assess there.' + (focus ? " Pulsing dots relate to this topic." : "") + "</p>";
    spots.forEach(function (g) {
      g.onclick = g.onkeydown = function (e) {
        if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
        var i = +g.getAttribute("data-i"); seen[i] = 1;
        spots.forEach(function (x) { x.classList.toggle("sel", x === g); });
        g.classList.add("seen");
        panel.innerHTML = info(i) + '<p class="tiny" style="margin-top:10px">' + Object.keys(seen).length + " of " + dg.spots.length + " explored</p>";
        if (Object.keys(seen).length === dg.spots.length && !S.best["dg_" + dg.id]) { S.best["dg_" + dg.id] = 1; addXP(5, "Diagram explored"); }
      };
    });
  }

  function pics(tab, arg) {
    tab = tab || "diagrams";
    var head = '<h1>Picture Lab</h1><p class="muted">Learn with pictures: tap-to-learn diagrams for every system and topic, and a picture quiz built from the lecture slides.</p>' +
      '<div class="filter-bar">' + [["diagrams", "🧩 Diagrams"], ["quiz", "🖼️ Picture quiz"]].map(function (t) { return '<a class="chip' + (tab === t[0] ? " on" : "") + '" href="#pics/' + t[0] + '">' + t[1] + "</a>"; }).join("") + "</div>";

    if (tab === "quiz") {
      var sys = arg && SYS[arg] ? arg : null;
      var pool = FIGS.filter(function (f) { var d = DISORDERS.filter(function (x) { return x.id === f.topic; })[0]; return d && (!sys || d.sys === sys); });
      var best = S.best.pics;
      app.innerHTML = head + sysFilterBar(sys, "#pics/quiz", true) +
        '<div class="card"><h2>Which topic is this picture from?</h2><p class="small muted">' + pool.length + " pictures from the lecture slides in this pool. You'll see 10 at a time and get the slide it came from after each answer." + (best ? " Best so far: " + best + "/10." : "") + '</p><button class="btn primary" id="go"' + (pool.length < 4 ? " disabled" : "") + ">Start</button></div>";
      if (pool.length >= 4) $("#go").onclick = function () { picQuiz(shuffle(pool).slice(0, 10), sys); };
      return;
    }

    var dg = DIAG.filter(function (x) { return x.id === arg; })[0] || DIAG[0];
    var mode = arg && location.hash.indexOf("/find") > -1 ? "find" : "explore";
    app.innerHTML = head +
      '<select class="topic-jump dg-pick" id="dgpick" aria-label="Choose a diagram" style="display:block">' + SYSTEMS.map(function (sy) { var g = DIAG.filter(function (x) { return x.sys === sy.id; }); return g.length ? '<optgroup label="' + esc(sy.name) + '">' + g.map(function (x) { return '<option value="' + x.id + '"' + (x.id === dg.id ? " selected" : "") + ">" + esc((x.kind === "structure" ? "Structure: " : "") + x.title) + "</option>"; }).join("") + "</optgroup>" : ""; }).join("") + "</select>" +
      '<div class="card sys-' + dg.sys + '"><div class="row"><h2 style="margin:0">' + esc(dg.title) + '</h2><span class="spacer"></span>' +
        '<a class="chip' + (mode === "explore" ? " on" : "") + '" href="#pics/diagrams/' + dg.id + '">Explore</a><a class="chip' + (mode === "find" ? " on" : "") + '" href="#pics/diagrams/' + dg.id + '/find">Find it (quiz)</a></div>' +
        diagramHTML(dg) + "</div>";
    bindDiagram($(".dg"), dg, mode);
    $("#dgpick").onchange = function () { location.hash = "#pics/diagrams/" + this.value + (mode === "find" ? "/find" : ""); };
  }

  function picQuiz(items, sys) {
    var pos = 0, score = 0, names = DISORDERS.filter(function (d) { return d.sys !== "found"; });
    function draw() {
      if (pos >= items.length) {
        if (!S.best.pics || score > S.best.pics) S.best.pics = score; save();
        app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">' + (score >= 8 ? "🏆" : score >= 6 ? "💪" : "📖") + '</div><div class="big-score">' + score + " / " + items.length + '</div><p class="muted">Pictures matched to the right topic.</p><div class="row" style="justify-content:center"><button class="btn primary" id="again">Play again</button><a class="btn" href="#pics/diagrams">Diagrams</a></div></div>';
        $("#again").onclick = function () { pics("quiz", sys); };
        if (score >= 8) confetti();
        return;
      }
      var f = items[pos], d = DISORDERS.filter(function (x) { return x.id === f.topic; })[0];
      var same = shuffle(names.filter(function (x) { return x.sys === d.sys && x.id !== d.id; })).slice(0, 2);
      var other = shuffle(names.filter(function (x) { return x.sys !== d.sys; })).slice(0, 3 - same.length);
      var opts = shuffle([d].concat(same, other));
      var sl = SLIDE_LIST.filter(function (s) { return s.id === f.slide; })[0];
      app.innerHTML = '<div class="row" style="margin-bottom:12px"><a class="btn small" href="#pics/quiz">← End</a><span class="spacer"></span><span class="chip">' + (pos + 1) + " / " + items.length + " · score " + score + "</span></div>" +
        '<div class="card pic-q"><div class="pic-frame"><img src="figures/' + f.f + '" alt="Lecture slide picture" title="Tap to enlarge"></div><h2>Which topic is this picture from?</h2>' +
        opts.map(function (o) { return '<button class="opt" data-k="' + o.id + '"><span class="box"></span><span>' + esc(o.name) + "</span></button>"; }).join("") + '<div id="rat"></div></div>';
      $(".pic-frame img").onclick = function () { openLB([{ src: "figures/" + f.f, cap: sl ? sl.title : "" }], 0); };
      $$(".opt").forEach(function (b) {
        b.onclick = function () {
          var ok = b.getAttribute("data-k") === d.id; if (ok) { score++; addXP(3); }
          $$(".opt").forEach(function (x) { x.disabled = true; var r = x.getAttribute("data-k") === d.id; if (r) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); x.querySelector(".box").textContent = r ? "✓" : x === b ? "✕" : ""; });
          $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Correct!" : "It's " + esc(d.name) + ".") + "</strong>" + (sl ? "From the slide “" + esc(sl.title) + "” in " + esc(deckLabel(sl)) + ". " : "") + '<a href="#topic/' + d.id + '">Open the topic</a></div><div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="next">' + (pos + 1 >= items.length ? "See score" : "Next picture →") + "</button></div>";
          $("#next").onclick = function () { pos++; draw(); window.scrollTo(0, 0); };
          $("#next").focus();
        };
      });
    }
    draw();
  }

  /* ================= FLASHCARDS ================= */
  function flash(sys) {
    var only = sessionStorageGet("flashOnly") === "1";
    var deck = FLASHCARDS.map(function (c, i) { return i; }).filter(function (i) { return !sys || FLASHCARDS[i][0] === sys; });
    if (only) deck = deck.filter(function (i) { return !S.flash[i]; });
    deck = shuffle(deck);
    var pos = 0, flipped = false;
    var total = FLASHCARDS.filter(function (c) { return !sys || c[0] === sys; }).length;

    function draw() {
      var known = FLASHCARDS.filter(function (c, i) { return (!sys || c[0] === sys) && S.flash[i]; }).length;
      var head = '<div class="row" style="margin-bottom:6px"><h1 style="margin:0">Flashcards</h1><span class="spacer"></span><span class="small muted">' + known + " of " + total + " known</span></div>" +
        sysFilterBar(sys, "#flash", true) +
        '<label class="row small" style="margin-bottom:14px;gap:6px"><input type="checkbox" id="only" ' + (only ? "checked" : "") + "> Only show cards I haven't marked known</label>";
      if (!deck.length) { app.innerHTML = head + '<div class="card empty"><div style="font-size:48px">🎉</div><h2>Every card here is marked known.</h2><p>Uncheck the filter to review them all again.</p></div>'; bindHead(); return; }
      if (pos >= deck.length) {
        app.innerHTML = head + '<div class="card empty"><div style="font-size:48px">✅</div><h2>Deck finished</h2><p>' + known + " of " + total + ' known in this set.</p><button class="btn primary" id="again">Shuffle and go again</button></div>';
        bindHead(); $("#again").onclick = function () { flash(sys); }; if (known === total) confetti(); return;
      }
      var i = deck[pos], c = FLASHCARDS[i];
      app.innerHTML = head +
        '<div class="flash-stage sys-' + c[0] + '">' +
          '<div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * pos / deck.length) + '%"></span></div>' +
          '<div class="flash' + (flipped ? " flipped" : "") + '" id="card" role="button" tabindex="0" aria-label="Flip card">' +
            '<div class="flash-face front"><span class="tagpos">' + tag(c[0]) + '</span><div class="q">' + esc(c[1]) + '</div><div class="hint">Tap or press space to flip</div></div>' +
            '<div class="flash-face back"><span class="tagpos">' + tag(c[0]) + '</span><div class="a">' + esc(c[2]) + '</div><div class="hint">' + (S.flash[i] ? "Marked known" : "Did you know it?") + "</div></div>" +
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
      $("#yes").onclick = function () { if (!S.flash[i]) { S.flash[i] = 1; save(); addXP(2); } pos++; flipped = false; draw(); };
      $("#no").onclick = function () { if (S.flash[i]) { delete S.flash[i]; save(); } deck.push(i); pos++; flipped = false; draw(); };
    }
    function flip() { flipped = !flipped; var el = $("#card"); if (el) el.classList.toggle("flipped", flipped); }
    function bindHead() { var o = $("#only"); if (o) o.onchange = function () { sessionStorageSet("flashOnly", o.checked ? "1" : "0"); flash(sys); }; }
    function onKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
      if (e.key === " ") { e.preventDefault(); flip(); }
      else if (e.key === "1" && $("#no")) $("#no").click();
      else if (e.key === "2" && $("#yes")) $("#yes").click();
      else if (e.key === "ArrowRight" && $("#skip")) $("#skip").click();
      else if (e.key === "ArrowLeft" && $("#prev")) $("#prev").click();
    }
    document.addEventListener("keydown", onKey);
    cleanup = function () { document.removeEventListener("keydown", onKey); };
    draw();
  }
  function sessionStorageGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function sessionStorageSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  /* ================= QUIZ ================= */
  var TYPE_LABEL = { mc: "Multiple choice", sata: "Select all that apply", selectn: "Select N", cloze: "Drop-down cloze", matrix: "Matrix grid" };
  function quiz(sys) {
    var pool = QUESTIONS.map(function (q, i) { return i; }).filter(function (i) { return !sys || QUESTIONS[i].sys === sys; });
    var answered = pool.filter(function (i) { return S.q[i] !== undefined; }).length;
    var correct = pool.filter(function (i) { return S.q[i] === 1; }).length;
    var missed = pool.filter(function (i) { return S.q[i] === 0; });
    app.innerHTML =
      '<h1>Practice Questions</h1><p class="muted">NGN-style items written from your lectures. Each one has a rationale tied to the mechanism.</p>' +
      sysFilterBar(sys, "#quiz", false) +
      '<div class="grid grid-2"><div class="card"><h2>Start a set</h2><p class="small muted">' + pool.length + " questions in this pool · " + answered + " attempted · " + correct + ' correct</p>' +
        '<div class="row" style="margin:12px 0"><span class="small">How many?</span>' + [10, 20, "All"].map(function (n, k) { return '<button class="chip' + (k === 0 ? " on" : "") + '" data-n="' + n + '">' + n + "</button>"; }).join("") + "</div>" +
        '<div class="row"><button class="btn primary" id="go">Start</button>' + (missed.length ? '<button class="btn" id="redo">Retry my ' + missed.length + " missed</button>" : "") + "</div></div>" +
        '<div class="card"><h2>Formats</h2><ul class="facts small">' + Object.keys(TYPE_LABEL).map(function (t) { var n = pool.filter(function (i) { return QUESTIONS[i].type === t; }).length; return n ? "<li><b>" + TYPE_LABEL[t] + "</b> · " + n + "</li>" : ""; }).join("") + "</ul></div></div>";
    var count = 10;
    $$("[data-n]").forEach(function (b) { b.onclick = function () { $$("[data-n]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); count = b.getAttribute("data-n") === "All" ? 999 : +b.getAttribute("data-n"); }; });
    $("#go").onclick = function () { runQuiz(shuffle(pool).slice(0, count), sys); };
    if ($("#redo")) $("#redo").onclick = function () { runQuiz(shuffle(missed), sys); };
  }

  function runQuiz(ids, sys) {
    var pos = 0, score = 0, results = [];
    function next() {
      if (pos >= ids.length) return finish();
      var qi = ids[pos], q = QUESTIONS[qi];
      var html = '<div class="q-card card sys-' + q.sys + '"><div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * pos / ids.length) + '%"></span></div>' +
        '<div class="q-meta">' + tag(q.sys) + '<span class="chip">' + TYPE_LABEL[q.type] + (q.type === "selectn" ? " · pick " + q.n : "") + '</span><span class="spacer"></span><span class="tiny">' + (pos + 1) + " / " + ids.length + " · score " + score + "</span></div>";
      if (q.type === "cloze") {
        var i = 0;
        html += '<p class="small muted">Choose the option that best completes each blank.</p><div class="cloze">' + esc(q.stem).replace(/\{(\d+)\}/g, function (m, n) {
          var b = q.blanks[+n]; var opts = shuffle(b.options.map(function (o, k) { return k; }));
          return '<select data-b="' + n + '"><option value="">Select…</option>' + opts.map(function (k) { return '<option value="' + k + '">' + esc(b.options[k]) + "</option>"; }).join("") + "</select>";
        }) + "</div>";
      } else if (q.type === "matrix") {
        html += '<div class="q-stem">' + esc(q.stem) + '</div><div class="table-wrap"><table class="matrix"><thead><tr><th></th>' + q.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          q.rows.map(function (r, ri) { return "<tr><td>" + esc(r[0]) + "</td>" + q.cols.map(function (c, ci) { return '<td data-r="' + ri + '" data-c="' + ci + '"><input type="radio" name="m' + ri + '" value="' + ci + '" aria-label="' + esc(r[0] + ": " + c) + '"></td>'; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      } else {
        var multi = q.type !== "mc";
        html += '<div class="q-stem">' + esc(q.stem) + "</div>" + q.options.map(function (o, k) { return '<button class="opt' + (multi ? " multi" : "") + '" data-k="' + k + '"><span class="box"></span><span>' + esc(o) + "</span></button>"; }).join("");
      }
      html += '<div class="row" style="margin-top:16px"><span class="spacer"></span><button class="btn primary" id="submit">Submit</button></div><div id="rat"></div></div>';
      app.innerHTML = '<div class="row" style="margin-bottom:14px"><a class="btn small" href="#quiz' + (sys ? "/" + sys : "") + '">← End set</a></div>' + html;

      if (q.type === "mc" || q.type === "sata" || q.type === "selectn") {
        $$(".opt").forEach(function (b) { b.onclick = function () {
          if (q.type === "mc") $$(".opt").forEach(function (x) { x.classList.remove("sel"); });
          if (q.type === "selectn" && !b.classList.contains("sel") && $$(".opt.sel").length >= q.n) { toast("Pick exactly " + q.n); return; }
          b.classList.toggle("sel");
        }; });
      }
      $("#submit").onclick = function () { grade(q, qi); };
    }
    function grade(q, qi) {
      var ok = false;
      if (q.type === "mc" || q.type === "sata" || q.type === "selectn") {
        var sel = $$(".opt.sel").map(function (b) { return +b.getAttribute("data-k"); });
        if (!sel.length) { toast("Choose an answer first"); return; }
        var ans = q.type === "mc" ? [q.answer] : q.answer;
        ok = sel.length === ans.length && sel.every(function (k) { return ans.indexOf(k) > -1; });
        $$(".opt").forEach(function (b) { var k = +b.getAttribute("data-k"); b.disabled = true; var isA = ans.indexOf(k) > -1, isS = sel.indexOf(k) > -1;
          b.classList.remove("sel"); if (isA && isS) b.classList.add("right"); else if (isS) b.classList.add("wrong"); else if (isA) b.classList.add("right", "missed");
          b.querySelector(".box").textContent = isA ? "✓" : isS ? "✕" : ""; });
      } else if (q.type === "cloze") {
        var sels = $$(".cloze select");
        if (sels.some(function (s) { return s.value === ""; })) { toast("Fill every blank"); return; }
        ok = true;
        sels.forEach(function (s) { var b = q.blanks[+s.getAttribute("data-b")]; var r = +s.value === b.answer; ok = ok && r; s.classList.add(r ? "right" : "wrong"); s.disabled = true;
          if (!r) { var span = document.createElement("span"); span.className = "small"; span.style.color = "var(--good)"; span.style.fontWeight = "700"; span.textContent = " → " + b.options[b.answer]; s.after(span); } });
      } else if (q.type === "matrix") {
        var picks = q.rows.map(function (r, ri) { var c = app.querySelector('input[name="m' + ri + '"]:checked'); return c ? +c.value : -1; });
        if (picks.indexOf(-1) > -1) { toast("Answer every row"); return; }
        ok = true;
        q.rows.forEach(function (r, ri) { var cell = app.querySelector('td[data-r="' + ri + '"][data-c="' + r[1] + '"]'); cell.classList.add("right"); if (picks[ri] !== r[1]) { ok = false; app.querySelector('td[data-r="' + ri + '"][data-c="' + picks[ri] + '"]').classList.add("wrong"); } });
        $$(".matrix input").forEach(function (x) { x.disabled = true; });
      }
      S.q[qi] = ok ? 1 : (S.q[qi] === 1 ? 1 : 0);
      if (ok) { score++; addXP(10); } save();
      results.push({ qi: qi, ok: ok });
      $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Correct!" : "Not quite.") + "</strong>" + esc(q.why) + "</div>";
      var btn = $("#submit"); btn.textContent = pos + 1 >= ids.length ? "See results" : "Next question →";
      btn.onclick = function () { pos++; next(); };
      btn.focus();
    }
    function finish() {
      var pct = Math.round(100 * score / ids.length);
      var wrong = results.filter(function (r) { return !r.ok; });
      app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">' + (pct >= 85 ? "🏆" : pct >= 70 ? "💪" : "📖") + '</div><div class="big-score">' + pct + '%</div><p class="muted">' + score + " of " + ids.length + " correct</p>" +
        "<p>" + (pct >= 85 ? "Exam-ready on this set." : pct >= 70 ? "Solid. Review the rationales you missed." : "Go back to the topic pages for the systems you missed, then retry.") + "</p>" +
        '<div class="row" style="justify-content:center"><a class="btn primary" href="#quiz' + (sys ? "/" + sys : "") + '">New set</a><a class="btn" href="#topics">Topics</a></div></div>' +
        (wrong.length ? '<h2 style="margin-top:24px">Review what you missed</h2>' + wrong.map(function (r) { var q = QUESTIONS[r.qi]; return '<div class="card sys-' + q.sys + '" style="margin-bottom:12px"><div class="q-meta">' + tag(q.sys) + '<span class="chip">' + TYPE_LABEL[q.type] + '</span></div><p><b>' + esc(q.stem.replace(/\{\d+\}/g, "___")) + '</b></p><p class="small muted">' + esc(q.why) + "</p></div>"; }).join("") : "");
      if (pct >= 85) confetti();
    }
    next();
  }

  /* ================= SORT IT ================= */
  function sortGame(id) {
    var g = SORTS.filter(function (s) { return s.id === id; })[0];
    if (!g) {
      app.innerHTML = '<h1>Sort It</h1><p class="muted">One cue at a time: drag it into the right bucket, tap a bucket, or use ← and → keys. Beat your best time with zero mistakes.</p><div class="grid grid-3">' +
        SORTS.map(function (s) { var b = S.best["sort_" + s.id]; return '<a class="card tile sys-' + s.sys + '" href="#sort/' + s.id + '">' + tag(s.sys) + "<h3>" + esc(s.title) + '</h3><p class="small muted">' + s.items.length + " cues" + (b ? " · best " + b.t + "s, " + b.m + " mistakes" : "") + "</p></a>"; }).join("") + "</div>";
      return;
    }
    var items = shuffle(g.items), pos = 0, mistakes = 0, t0 = Date.now(), placed = { a: [], b: [] }, timerId;
    function draw() {
      if (pos >= items.length) return done();
      var it = items[pos];
      app.innerHTML = '<div class="sort-stage sys-' + g.sys + '"><div class="row" style="margin-bottom:12px"><a class="btn small" href="#sort">← Games</a><span class="spacer"></span><span class="chip">⏱ <span class="timer" id="tm">0.0</span>s</span><span class="chip">✕ ' + mistakes + '</span><span class="chip">' + pos + "/" + items.length + "</span></div>" +
        '<h1 style="text-align:center">' + esc(g.title) + "</h1>" +
        '<div class="sort-card" id="sc" draggable="true">' + esc(it[0]) + "</div>" +
        '<div class="buckets">' + ["a", "b"].map(function (k) { return '<div class="bucket" data-k="' + k + '"><button class="btn bucket-btn ' + (k === "a" ? "" : "") + '" data-k="' + k + '">' + (k === "a" ? "← " : "") + esc(g[k]) + (k === "b" ? " →" : "") + '</button><div class="placed">' + placed[k].map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("") + "</div></div>"; }).join("") + "</div></div>";
      $$(".bucket-btn").forEach(function (b) { b.onclick = function () { choose(b.getAttribute("data-k")); }; });
      var sc = $("#sc");
      sc.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", "x"); });
      $$(".bucket").forEach(function (bk) {
        bk.addEventListener("dragover", function (e) { e.preventDefault(); bk.classList.add("hover"); });
        bk.addEventListener("dragleave", function () { bk.classList.remove("hover"); });
        bk.addEventListener("drop", function (e) { e.preventDefault(); bk.classList.remove("hover"); choose(bk.getAttribute("data-k")); });
      });
      // touch drag
      var sx = 0, sy = 0;
      sc.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; sc.setPointerCapture(e.pointerId); });
      sc.addEventListener("pointermove", function (e) { if (e.buttons || e.pointerType === "touch") { sc.style.transform = "translate(" + (e.clientX - sx) + "px," + (e.clientY - sy) + "px)"; } });
      sc.addEventListener("pointerup", function (e) {
        var dx = e.clientX - sx; sc.style.transform = "";
        if (Math.abs(dx) < 60) return;
        var under = document.elementsFromPoint ? document.elementsFromPoint(e.clientX, e.clientY).filter(function (el) { return el.classList && el.classList.contains("bucket"); })[0] : null;
        choose(under ? under.getAttribute("data-k") : (dx < 0 ? "a" : "b"));
      });
    }
    function choose(k) {
      var it = items[pos];
      if (it[1] === k) { placed[k].push(it[0]); pos++; draw(); }
      else { mistakes++; var sc = $("#sc"); sc.classList.remove("shake"); void sc.offsetWidth; sc.classList.add("shake"); toast("That one belongs to " + g[it[1]]); $$(".chip")[1].textContent = "✕ " + mistakes; }
    }
    function done() {
      clearInterval(timerId);
      var t = Math.round((Date.now() - t0) / 100) / 10;
      var b = S.best["sort_" + g.id], isBest = !b || mistakes < b.m || (mistakes === b.m && t < b.t);
      if (isBest) S.best["sort_" + g.id] = { t: t, m: mistakes };
      save(); addXP(Math.max(5, 20 - mistakes * 3));
      app.innerHTML = '<div class="card scoreboard sys-' + g.sys + '"><div style="font-size:44px">' + (mistakes === 0 ? "🎯" : "🧺") + '</div><h2>' + esc(g.title) + '</h2><div class="big-score">' + t + 's</div><p class="muted">' + mistakes + " mistake" + (mistakes === 1 ? "" : "s") + (isBest ? " · new personal best!" : " · best " + b.t + "s, " + b.m + " mistakes") + '</p><div class="row" style="justify-content:center"><a class="btn primary" href="#sort/' + g.id + '" id="again">Play again</a><a class="btn" href="#sort">Other games</a></div></div>';
      $("#again").onclick = function (e) { e.preventDefault(); sortGame(g.id); };
      if (mistakes === 0) confetti();
    }
    function onKey(e) { if (e.key === "ArrowLeft") choose("a"); else if (e.key === "ArrowRight") choose("b"); }
    document.addEventListener("keydown", onKey);
    timerId = setInterval(function () { var el = document.getElementById("tm"); if (el) el.textContent = ((Date.now() - t0) / 1000).toFixed(1); }, 100);
    cleanup = function () { document.removeEventListener("keydown", onKey); clearInterval(timerId); };
    draw();
  }

  /* ================= CHAINS ================= */
  function chains(id) {
    var c = CHAINS.filter(function (x) { return x.id === id; })[0];
    if (!c) {
      app.innerHTML = '<h1>Step Order</h1><p class="muted">Assessment is done in a set order for a reason. Put each sequence in order: drag the steps, or use the arrows.</p><div class="grid grid-3">' +
        CHAINS.map(function (x) { return '<a class="card tile sys-' + x.sys + '" href="#chains/' + x.id + '">' + tag(x.sys) + "<h3>" + esc(x.title) + '</h3><p class="small muted">' + x.steps.length + " steps" + (S.best["chain_" + x.id] ? " · ✓ solved" : "") + "</p></a>"; }).join("") + "</div>";
      return;
    }
    var order = shuffle(c.steps.map(function (s, i) { return i; }));
    while (order.every(function (v, i) { return v === i; })) order = shuffle(order);
    var tries = 0, solved = false;
    function draw(marks) {
      app.innerHTML = '<div class="sys-' + c.sys + '"><div class="row" style="margin-bottom:12px"><a class="btn small" href="#chains">← All chains</a></div>' +
        '<div class="row">' + tag(c.sys) + '</div><h1 style="margin-top:8px">' + esc(c.title) + '</h1><p class="muted small">First step at the top. Tries: ' + tries + "</p>" +
        '<ol class="chain-list" id="cl">' + order.map(function (si, p) {
          var cls = marks ? (si === p ? " right" : " wrong") : "";
          return '<li class="chain-item' + cls + '" draggable="' + (!solved) + '" data-p="' + p + '"><span class="num">' + (p + 1) + '</span><span class="txt">' + esc(c.steps[si]) + "</span>" +
            (solved ? "" : '<span class="mv"><button data-up="' + p + '" aria-label="Move up">↑</button><button data-down="' + p + '" aria-label="Move down">↓</button></span>') + "</li>";
        }).join("") + "</ol>" +
        '<div class="row" style="margin-top:14px">' + (solved ? '<button class="btn primary" id="again">Shuffle again</button><a class="btn" href="#chains">Next chain</a>' : '<button class="btn primary" id="check">Check order</button>') + "</div></div>";
      $$("[data-up]").forEach(function (b) { b.onclick = function () { move(+b.getAttribute("data-up"), -1); }; });
      $$("[data-down]").forEach(function (b) { b.onclick = function () { move(+b.getAttribute("data-down"), 1); }; });
      var dragFrom = null;
      $$(".chain-item").forEach(function (li) {
        li.addEventListener("dragstart", function (e) { dragFrom = +li.getAttribute("data-p"); li.classList.add("dragging"); e.dataTransfer.setData("text/plain", "x"); });
        li.addEventListener("dragend", function () { li.classList.remove("dragging"); });
        li.addEventListener("dragover", function (e) { e.preventDefault(); });
        li.addEventListener("drop", function (e) { e.preventDefault(); var to = +li.getAttribute("data-p"); if (dragFrom === null || dragFrom === to) return; var v = order.splice(dragFrom, 1)[0]; order.splice(to, 0, v); dragFrom = null; draw(); });
      });
      if ($("#check")) $("#check").onclick = check;
      if ($("#again")) $("#again").onclick = function () { chains(c.id); };
    }
    function move(p, d) { var q = p + d; if (q < 0 || q >= order.length) return; var t = order[p]; order[p] = order[q]; order[q] = t; draw(); }
    function check() {
      tries++;
      var right = order.filter(function (v, i) { return v === i; }).length;
      if (right === order.length) { solved = true; if (!S.best["chain_" + c.id]) { S.best["chain_" + c.id] = 1; save(); } addXP(tries === 1 ? 20 : 10, tries === 1 ? "Perfect chain!" : "Chain complete"); draw(true); if (tries === 1) confetti(); }
      else { draw(true); toast(right + " of " + order.length + " in the right spot"); }
    }
    draw();
  }

  /* ================= TRIAGE ================= */
  function triage(sys) {
    var sets = shuffle(TRIAGE.filter(function (t) { return !sys || t.sys === sys; }));
    var pos = 0, score = 0;
    function draw() {
      if (pos >= sets.length) {
        app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">🚨</div><div class="big-score">' + score + "/" + sets.length + '</div><p class="muted">priority calls correct</p><div class="row" style="justify-content:center"><button class="btn primary" id="again">Run it again</button></div></div>';
        $("#again").onclick = function () { triage(sys); }; if (score === sets.length) confetti(); return;
      }
      var t = sets[pos], order = shuffle(t.clients.map(function (c, i) { return i; }));
      app.innerHTML = '<h1>Who First?</h1><p class="muted">ABCs, then acute over chronic, then unstable over stable. A baseline finding is rarely the priority.</p>' + sysFilterBar(sys, "#triage", false) +
        '<div class="card sys-' + t.sys + '"><div class="q-meta">' + tag(t.sys) + '<span class="spacer"></span><span class="tiny">' + (pos + 1) + " / " + sets.length + " · score " + score + '</span></div><div class="q-stem">' + esc(t.stem) + '</div><div class="triage-grid">' +
        order.map(function (k) { return '<button class="opt" data-k="' + k + '"><span class="box"></span><span>' + esc(t.clients[k]) + "</span></button>"; }).join("") + '</div><div id="rat"></div></div>';
      $$(".opt").forEach(function (b) { b.onclick = function () {
        var k = +b.getAttribute("data-k"), ok = k === t.answer;
        $$(".opt").forEach(function (x) { x.disabled = true; var kk = +x.getAttribute("data-k"); if (kk === t.answer) { x.classList.add("right"); x.querySelector(".box").textContent = "✓"; } else if (x === b) { x.classList.add("wrong"); x.querySelector(".box").textContent = "✕"; } });
        if (ok) { score++; addXP(10); }
        $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Right call." : "Not this one.") + "</strong>" + esc(t.why) + '</div><div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="nx">Next →</button></div>';
        $("#nx").onclick = function () { pos++; draw(); }; $("#nx").focus();
      }; });
    }
    draw();
  }

  /* ================= EXPECTED OR NOT? ================= */
  var VERDICT = [["Expected", "good"], ["Unexpected: follow up", "warn"], ["Report now", "bad"]];
  function normalGame(sys) {
    var F = window.FINDINGS || [];
    var pool = shuffle(F.map(function (f, i) { return i; }).filter(function (i) { return !sys || F[i][0] === sys; }));
    var pos = 0;
    function draw() {
      if (pos >= pool.length) { pool = shuffle(pool); pos = 0; }
      var f = F[pool[pos]], st = S.normal;
      app.innerHTML = '<h1>Expected or Not?</h1><p class="muted">Read the finding, then decide: is it expected, unexpected (a cue to follow up), or a red flag to report now? Context matters, so read the whole line.</p>' + sysFilterBar(sys, "#normal", true) +
        '<div class="card sys-' + f[0] + '"><div class="q-meta">' + tag(f[0]) + '<span class="spacer"></span><span class="tiny">streak ' + st.streak + " · " + st.right + "/" + st.total + ' correct</span></div>' +
        '<div class="q-stem" style="font-size:1.15em">' + esc(f[1]) + '</div><div class="choice-grid" id="vg">' +
        VERDICT.map(function (v, k) { return '<button class="opt" data-k="' + k + '"><span class="box"></span><span>' + v[0] + "</span></button>"; }).join("") + '</div><div id="rat"></div></div>' +
        '<div class="card" style="margin-top:16px"><h2>How to decide</h2><ul class="facts small"><li><b>Expected:</b> fits the client\'s age, baseline, and context. Expected does not have to mean perfect.</li><li><b>Unexpected:</b> new, changed, or out of range. It is a cue: validate it, assess further, and document it.</li><li><b>Report now:</b> threatens airway, breathing, circulation, or neuro status, or is sudden and new. Act and escalate.</li></ul></div>';
      $$("#vg .opt").forEach(function (b) { b.onclick = function () {
        var k = +b.getAttribute("data-k"), ok = k === f[2];
        $$("#vg .opt").forEach(function (x) { x.disabled = true; var kk = +x.getAttribute("data-k"); if (kk === f[2]) { x.classList.add("right"); x.querySelector(".box").textContent = "✓"; } else if (x === b) { x.classList.add("wrong"); x.querySelector(".box").textContent = "✕"; } });
        st.total++; if (ok) { st.right++; st.streak++; S.best.normalStreak = Math.max(S.best.normalStreak || 0, st.streak); addXP(3); } else st.streak = 0; save();
        if (ok && st.streak > 0 && st.streak % 10 === 0) { confetti(); toast(st.streak + " in a row!"); }
        $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + VERDICT[f[2]][0] + ".</strong>" + esc(f[3]) + '</div><div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="nx">Next finding →</button></div>';
        $("#nx").onclick = function () { pos++; draw(); }; $("#nx").focus();
      }; });
    }
    if (!pool.length) { app.innerHTML = '<h1>Expected or Not?</h1>' + sysFilterBar(sys, "#normal", true) + '<div class="card empty"><p>No findings in this section yet.</p></div>'; return; }
    draw();
  }

  /* ================= EMERGENCIES ================= */
  function emerg() {
    app.innerHTML = '<h1>Red Flags, Look-alikes & Priorities</h1><p class="muted">Priority questions come down to ABCs and “which patient is getting worse right now?” Unexpected findings are cues; these are the ones you act on now.</p>' +
      '<h2 style="margin-top:20px">Red flags to escalate</h2><div class="grid grid-2">' +
      EMERGENCIES.map(function (e) { return '<div class="card emerg sys-' + e[1] + '"><h3>' + esc(e[0]) + '</h3><div style="margin-bottom:6px">' + tag(e[1]) + '</div><p class="small"><b>What you find:</b> ' + esc(e[2]) + '</p><p class="small muted" style="margin:0"><b>Why it matters / action:</b> ' + esc(e[3]) + "</p></div>"; }).join("") + "</div>" +
      '<h2 style="margin-top:28px">Look-alikes</h2><p class="small muted">Say how you would tell them apart, then tap to check.</p><div class="card">' +
      LOOKALIKES.map(function (l) { return revealQ(l[0], l[1]); }).join("") + "</div>" +
      '<div class="row" style="margin-top:20px"><a class="btn primary" href="#triage">Practice priority calls →</a><a class="btn" href="#sort">Play Sort It →</a></div>';
    bindReveal();
  }

  /* ---------- Confetti ---------- */
  var confettiRun = 0;
  function confetti() {
    var run = ++confettiRun;
    try { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; } catch (e) {}
    var cv = document.getElementById("confetti"), ctx = cv.getContext("2d"), W = cv.width = innerWidth, H = cv.height = innerHeight;
    var colors = ["#2f6fde", "#12898f", "#c8463d", "#a43f87", "#c27a17", "#4b5fc9", "#1f8a5b"];
    var parts = []; for (var i = 0; i < 140; i++) parts.push({ x: W / 2 + (Math.random() - .5) * 200, y: H / 3, vx: (Math.random() - .5) * 14, vy: -Math.random() * 12 - 4, r: Math.random() * 6 + 3, c: pick(colors), a: Math.random() * 6, va: (Math.random() - .5) * .3 });
    var frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      parts.forEach(function (p) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
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
