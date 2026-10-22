(function () {
  "use strict";

  /* ---------- Storage (per-browser; works offline from file://) ---------- */
  var KEY = "patho-exam2-v1";
  var S = { xp: 0, flash: {}, q: {}, topics: {}, best: {}, abg: { right: 0, total: 0, streak: 0 }, theme: "auto" };
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
    $$("#nav a", document).forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-r") === r || (r === "topic" && a.getAttribute("data-r") === "topics")); });
    var views = { home: home, topics: topics, topic: topics, flash: flash, quiz: quiz, sort: sortGame, chains: chains, triage: triage, abg: abg, emerg: emerg };
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
      ["#topics", "📚", "Topic Pages", "Every disorder on the study guide as a mechanism → change → cues → worst-case chain, with the guide's questions to self-test."],
      ["#flash", "🃏", "Flashcards", FLASHCARDS.length + " flip cards. Mark what you know and drill the rest."],
      ["#quiz", "📝", "Practice Questions", QUESTIONS.length + " NGN-style items: multiple choice, SATA, select N, cloze dropdowns, and matrix grids."],
      ["#sort", "🧺", "Sort It", "Race the clock sorting cues between look-alike disorders."],
      ["#chains", "🔗", "Chain Builder", "Put pathophysiology steps in order, from trigger to complication."],
      ["#triage", "🚨", "Who First?", "Pick the priority client from a group of four."],
      ["#abg", "🧪", "ABG Lab", "Endless randomized ABGs set in this unit's disorders."],
      ["#emerg", "⚠️", "Emergencies & Look-alikes", "Top emergencies, the giveaway cue, and how to tell similar disorders apart."]
    ].map(function (t) { return '<a class="card tile" href="' + t[0] + '"><div class="emoji">' + t[1] + "</div><h3>" + t[2] + '</h3><p class="muted small">' + t[3] + "</p></a>"; }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-main"><div class="hero-art">🫀</div>' +
          '<div class="tiny" style="color:rgba(255,255,255,.8);font-weight:700;letter-spacing:.06em;text-transform:uppercase">NURA 340 · Pathophysiology</div>' +
          "<h1>Exam 2 Study Lab</h1>" +
          "<p>50 questions, 60–75 points. Respiratory is the heaviest block, and fluid, electrolytes, acid-base, and defense show up inside every disorder. For each one, practice moving from <b>mechanism → physiologic change → cues → complications</b>.</p>" +
          '<div class="row"><a class="btn" href="#topics">Start with topics</a><a class="btn ghost" href="#quiz">Quick quiz</a></div>' +
        "</div>" +
        '<div class="card"><h3>Your progress</h3><div class="ring-wrap"><div class="ring" style="--p:' + overall + '" data-label="' + overall + '%"></div>' +
          '<div class="small muted">Mastery blends flashcards you know, questions you have answered correctly, and topics you marked studied.<br><br><b>' + S.xp + " XP</b> earned · ABG streak best <b>" + (S.best.abgStreak || 0) + "</b></div></div>" +
          '<div class="row" style="margin-top:14px"><button class="btn small" id="reset">Reset progress</button></div></div>' +
      "</section>" +
      '<section class="grid grid-2">' +
        '<div class="card"><h2>Exam blueprint</h2><p class="small muted">Tap a system to jump to its first topic.</p>' + rows + "</div>" +
        '<div class="stack"><div class="card"><h2>Heard in lecture</h2><ul class="list-clean">' + EMPHASIS.map(function (e) { return "<li>⭐ " + esc(e) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="card"><h2>Question types on the exam</h2><div class="row">' + ["Multiple choice", "Select all that apply", "Select N", "Drop-down / drag rationale (dyad/triad)", "Drop-down / drag cloze"].map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + '</div><p class="small muted" style="margin-top:10px">Practice Qs uses all of these formats.</p></div></div>' +
      "</section>" +
      '<h2 style="margin-top:28px">Study modes</h2><section class="grid grid-3">' + tiles + "</section>" +
      '<section class="grid grid-2" style="margin-top:28px">' +
        '<div class="card sys-found"><h2>Critical thinking questions</h2><p class="small muted">From the study guide. Tap for the strategy.</p>' + CRITICAL_THINKING.map(function (q, i) { return revealQ((i + 1) + ". " + q[0], q[1]); }).join("") + "</div>" +
        '<div class="card"><h2>Test-taking strategy</h2><ol class="facts">' + STRATEGY.map(function (s) { return "<li><b>" + esc(s[0]) + ".</b> " + esc(s[1]) + "</li>"; }).join("") + "</ol>" +
        '<div class="callout" style="margin-top:14px"><strong>Clinical judgment frame</strong>Recognize and analyze cues (define the disorder, know the s/s, watch trends), then prioritize hypotheses (ABCs, Maslow, worst-case complication).</div></div>' +
      "</section>";
    bindReveal();
    $("#reset").onclick = function () { if (confirm("Clear all saved progress and XP?")) { var th = S.theme; S = { xp: 0, flash: {}, q: {}, topics: {}, best: {}, abg: { right: 0, total: 0, streak: 0 }, theme: th }; save(); document.getElementById("xp").textContent = 0; home(); } };
  }

  function revealQ(q, a) { return '<div class="reveal-q"><button type="button">' + esc(q) + '</button><div class="ans">' + esc(a) + "</div></div>"; }
  function bindReveal() { $$(".reveal-q button").forEach(function (b) { b.onclick = function () { b.parentNode.classList.toggle("open"); }; }); }

  /* ================= TOPICS ================= */
  function topics(id) {
    var d = DISORDERS.filter(function (x) { return x.id === id; })[0] || DISORDERS.filter(function (x) { return x.sys === "resp"; })[0];
    var side = "";
    SYSTEMS.forEach(function (s) {
      side += '<h4><span class="sys-dot sys-' + s.id + '"></span>' + esc(s.name) + "</h4>";
      DISORDERS.filter(function (x) { return x.sys === s.id; }).forEach(function (x) {
        side += '<a class="sys-' + s.id + (x.id === d.id ? " active" : "") + '" href="#topic/' + x.id + '">' + esc(x.name) + (x.star ? ' <span class="star">★</span>' : "") + (S.topics[x.id] ? '<span class="check">✓</span>' : "") + "</a>";
      });
    });
    var list = DISORDERS, idx = list.indexOf(d), prev = list[idx - 1], next = list[idx + 1];
    var s = SYS[d.sys];

    function bullets(arr) { return "<ul>" + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
    function table(t) { return '<div class="table-wrap"><table><thead><tr>' + t.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + t.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>"; }

    var body =
      '<div class="card topic-head sys-' + d.sys + '">' +
        '<div class="row">' + tag(d.sys) + (d.star ? '<span class="chip" style="color:var(--warn)">★ Instructor\'s #1 arterial topic</span>' : "") + '<span class="spacer"></span><span class="tiny">' + esc(s.weight || "") + "</span></div>" +
        '<h1 style="margin-top:10px">' + esc(d.name) + "</h1>" + (d.sub ? '<p class="muted">' + esc(d.sub) + "</p>" : "") +
        "<p>" + esc(d.summary) + "</p>" +
        '<div class="connect"><span class="small muted" style="margin-right:4px">Connect to:</span>' + d.connect.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" +
        (d.pathogens ? '<div class="pathogens" style="margin-top:10px"><span class="small muted" style="margin-right:4px">Pathogens:</span>' + d.pathogens.map(function (p) { return '<span class="pathogen">' + esc(p) + "</span>"; }).join("") + "</div>" : "") +
      "</div>" +
      '<div class="card sys-' + d.sys + '"><h2>The chain</h2><p class="small muted">Underlying mechanism → physiologic change → expected cues → potential complications.</p>' +
        '<div class="chain">' +
          '<div class="chain-step"><h4>1 · Mechanism</h4>' + bullets(d.chain.mechanism) + "</div>" +
          '<div class="chain-step"><h4>2 · Physiologic change</h4>' + bullets(d.chain.change) + "</div>" +
          '<div class="chain-step"><h4>3 · Expected cues</h4>' + bullets(d.chain.cues) + "</div>" +
          '<div class="chain-step"><h4>4 · Worst case</h4>' + bullets(d.chain.worst) + "</div>" +
        "</div></div>" +
      (d.table ? '<div class="card"><h2>' + (d.tableTitle || "At a glance") + "</h2>" + table(d.table) + "</div>" : "") +
      (d.table2 ? '<div class="card"><h2>' + esc(d.table2.title) + "</h2>" + table(d.table2) + "</div>" : "") +
      (d.facts && d.facts.length ? '<div class="card"><h2>Must-know facts</h2><ul class="facts">' + d.facts.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" : "") +
      (d.beyond ? '<div class="callout beyond"><strong>Beyond the lectures</strong>' + esc(d.beyond) + "</div>" : "") +
      (d.qa && d.qa.length ? '<div class="card sys-' + d.sys + '"><h2>Study guide questions</h2><p class="small muted">Answer out loud first, then tap to check.</p>' + d.qa.map(function (q) { return revealQ(q[0], q[1]); }).join("") + "</div>" : "") +
      '<div class="row">' +
        (prev ? '<a class="btn" href="#topic/' + prev.id + '">← ' + esc(prev.name) + "</a>" : "") + '<span class="spacer"></span>' +
        '<button class="btn ' + (S.topics[d.id] ? "good" : "primary") + '" id="mark">' + (S.topics[d.id] ? "✓ Studied" : "Mark as studied") + "</button>" +
        (d.sys !== "found" ? '<a class="btn" href="#quiz/' + d.sys + '">Quiz this system</a>' : "") +
        (next ? '<a class="btn" href="#topic/' + next.id + '">' + esc(next.name) + " →</a>" : "") +
      "</div>";

    app.innerHTML = '<div class="topics-layout"><aside class="card sidebar" id="side"><div class="row" style="margin-bottom:6px"><b>Topics</b><span class="spacer"></span><span class="tiny">' + Object.keys(S.topics).length + "/" + DISORDERS.length + ' studied</span></div><div class="side-body">' + side + '</div></aside><div class="stack"><select class="topic-jump" id="jump" aria-label="Jump to topic">' + SYSTEMS.map(function (s) { return '<optgroup label="' + esc(s.name) + '">' + DISORDERS.filter(function (x) { return x.sys === s.id; }).map(function (x) { return '<option value="' + x.id + '"' + (x.id === d.id ? " selected" : "") + ">" + esc(x.name) + (S.topics[x.id] ? " ✓" : "") + "</option>"; }).join("") + "</optgroup>"; }).join("") + "</select>" + body + "</div></div>";
    bindReveal();
    $("#jump").onchange = function () { location.hash = "#topic/" + this.value; };
    $("#mark").onclick = function () {
      if (S.topics[d.id]) { delete S.topics[d.id]; save(); topics(d.id); return; }
      S.topics[d.id] = 1; save(); addXP(15, "Topic studied");
      topics(d.id);
    };
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
      app.innerHTML = '<h1>Chain Builder</h1><p class="muted">The study guide asks you to move from mechanism → physiologic change → cues → complications. Put each chain in order. Drag the steps, or use the arrows.</p><div class="grid grid-3">' +
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

  /* ================= ABG LAB ================= */
  var ABG_TYPES = {
    RAc: { name: "Respiratory acidosis", ctx: ["a client with a COPD exacerbation", "a client with a tension pneumothorax", "an asthma client who has become drowsy", "a pneumonia client who is tiring out", "a client with a hemothorax after trauma"], fullCtx: ["a client with long-standing COPD at baseline"],
      none: [[7.22, 7.33], [48, 65], [22, 26]], partial: [[7.25, 7.33], [50, 68], [27, 34]], full: [[7.35, 7.39], [47, 60], [28, 34]] },
    RAl: { name: "Respiratory alkalosis", ctx: ["a client with an acute pulmonary embolism", "a client early in an asthma attack", "a tachypneic client with early pneumonia", "a client hyperventilating from anxiety"], fullCtx: ["a client living at high altitude for weeks"],
      none: [[7.47, 7.56], [25, 33], [22, 26]], partial: [[7.46, 7.52], [24, 32], [17, 21]], full: [[7.41, 7.45], [26, 33], [17, 21]] },
    MAc: { name: "Metabolic acidosis", ctx: ["a client with acute kidney injury", "a client with stage 4 CKD", "a client in septic shock from pyelonephritis", "a client in cardiogenic shock after an MI", "a client in obstructive shock from a massive PE"], fullCtx: ["a client with stable CKD"],
      none: [[7.20, 7.33], [35, 45], [12, 20]], partial: [[7.22, 7.33], [26, 34], [12, 19]], full: [[7.35, 7.39], [27, 33], [15, 20]] },
    MAl: { name: "Metabolic alkalosis", ctx: ["a client with prolonged vomiting", "a heart failure client on high-dose diuretics"], fullCtx: ["a client with ongoing NG suction for several days"],
      none: [[7.47, 7.55], [36, 44], [29, 38]], partial: [[7.46, 7.52], [46, 52], [30, 38]], full: [[7.41, 7.45], [46, 50], [29, 34]] }
  };
  var COMP = { none: "Uncompensated", partial: "Partially compensated", full: "Fully compensated" };
  function abg() {
    var q;
    function gen() {
      if (Math.random() < .08) return { type: "normal", comp: "none", pH: rand(7.37, 7.43, 2), co2: rand(37, 43), hco3: rand(23, 26), ctx: "a healthy postoperative client" };
      var type = pick(["RAc", "RAc", "RAl", "MAc", "MAc", "MAl"]), comp = pick(["none", "partial", "full"]), T = ABG_TYPES[type], r = T[comp];
      return { type: type, comp: comp, pH: rand(r[0][0], r[0][1], 2), co2: rand(r[1][0], r[1][1]), hco3: rand(r[2][0], r[2][1]), ctx: comp === "full" ? pick(T.fullCtx.concat(T.ctx)) : pick(T.ctx) };
    }
    function arrow(v, lo, hi) { return v < lo ? '<span class="arrow lo">↓ low</span>' : v > hi ? '<span class="arrow hi">↑ high</span>' : '<span class="arrow ok">normal</span>'; }
    function draw() {
      q = gen();
      var st = S.abg;
      app.innerHTML = '<h1>ABG Lab</h1><p class="muted">Randomized ABGs set in this unit\'s disorders. Step 1: name the primary problem. Step 2: name the compensation.</p>' +
        '<div class="grid grid-2"><div class="card sys-found"><div class="q-meta"><span class="tag sys-found">🧪 ABG</span><span class="spacer"></span><span class="tiny">streak ' + st.streak + " · " + st.right + "/" + st.total + " correct</span></div>" +
        '<div class="q-stem">ABG drawn on ' + esc(q.ctx) + ':</div>' +
        '<div class="abg-vals"><div class="abg-val"><div class="lbl">pH</div><div class="num">' + q.pH.toFixed(2) + "</div>" + arrow(q.pH, 7.35, 7.45) + '</div><div class="abg-val"><div class="lbl">PaCO₂</div><div class="num">' + q.co2 + "</div>" + arrow(q.co2, 35, 45) + '</div><div class="abg-val"><div class="lbl">HCO₃⁻</div><div class="num">' + q.hco3 + "</div>" + arrow(q.hco3, 22, 26) + "</div></div>" +
        '<h3>1. Primary problem</h3><div class="choice-grid" id="p1">' + ["RAc", "RAl", "MAc", "MAl", "normal"].map(function (k) { return '<button class="opt" data-k="' + k + '"><span class="box"></span><span>' + (k === "normal" ? "Normal ABG" : ABG_TYPES[k].name) + "</span></button>"; }).join("") + "</div>" +
        '<h3 style="margin-top:14px">2. Compensation</h3><div class="choice-grid" id="p2">' + Object.keys(COMP).map(function (k) { return '<button class="opt" data-k="' + k + '"><span class="box"></span><span>' + COMP[k] + "</span></button>"; }).join("") + "</div>" +
        '<div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn primary" id="chk">Check</button></div><div id="rat"></div></div>' +
        '<div class="card"><h2>Steps</h2><ol class="facts"><li><b>pH:</b> &lt;7.35 acidosis, &gt;7.45 alkalosis. 7.35–7.39 leans acid, 7.41–7.45 leans alkaline.</li><li><b>CO₂ (lungs):</b> moves <i>opposite</i> to pH → respiratory cause.</li><li><b>HCO₃⁻ (kidneys):</b> moves <i>with</i> pH → metabolic cause.</li><li><b>Other value:</b> normal = uncompensated. Abnormal in the direction that pulls pH back = compensating. pH back in range = fully compensated.</li></ol>' +
        '<div class="callout" style="margin-top:12px"><strong>Normals</strong>pH 7.35–7.45 · PaCO₂ 35–45 · HCO₃⁻ 22–26 (HCO₃⁻ range is beyond the lectures)</div>' +
        '<h3 style="margin-top:16px">In this unit</h3><ul class="facts small"><li>Pneumonia, asthma: early resp. alkalosis → later resp. acidosis</li><li>COPD: compensated resp. acidosis; exacerbation drops pH</li><li>PE: resp. alkalosis → metabolic acidosis in shock</li><li>AKI, CKD, shock: metabolic acidosis</li></ul></div></div>';
      ["p1", "p2"].forEach(function (g) { $$("#" + g + " .opt").forEach(function (b) { b.onclick = function () { $$("#" + g + " .opt").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel"); }; }); });
      $("#chk").onclick = check;
    }
    function check() {
      var a = $("#p1 .opt.sel"), b = $("#p2 .opt.sel");
      if (!a) { toast("Pick the primary problem"); return; }
      if (!b && a.getAttribute("data-k") !== "normal") { toast("Pick a compensation"); return; }
      var ak = a.getAttribute("data-k"), bk = b ? b.getAttribute("data-k") : "none";
      var ok1 = ak === q.type, ok2 = q.type === "normal" ? true : bk === q.comp, ok = ok1 && ok2;
      $$("#p1 .opt").forEach(function (x) { x.disabled = true; var k = x.getAttribute("data-k"); if (k === q.type) x.classList.add("right"); else if (x === a) x.classList.add("wrong"); });
      $$("#p2 .opt").forEach(function (x) { x.disabled = true; var k = x.getAttribute("data-k"); if (q.type !== "normal" && k === q.comp) x.classList.add("right"); else if (x === b && !ok2) x.classList.add("wrong"); });
      S.abg.total++; if (ok) { S.abg.right++; S.abg.streak++; S.best.abgStreak = Math.max(S.best.abgStreak || 0, S.abg.streak); addXP(5); } else S.abg.streak = 0; save();
      if (ok && S.abg.streak > 0 && S.abg.streak % 5 === 0) { confetti(); toast(S.abg.streak + " in a row!"); }
      $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (q.type === "normal" ? "Normal ABG" : COMP[q.comp] + " " + ABG_TYPES[q.type].name.toLowerCase()) + "</strong>" + explain(q) + '</div><div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="nx">Next ABG →</button></div>';
      $("#chk").style.display = "none";
      $("#nx").onclick = draw; $("#nx").focus();
    }
    function explain(q) {
      if (q.type === "normal") return "All three values are in range.";
      var acid = q.type === "RAc" || q.type === "MAc", resp = q.type[0] === "R";
      var s = "pH " + q.pH.toFixed(2) + (q.pH < 7.35 ? " is acidotic. " : q.pH > 7.45 ? " is alkalotic. " : " is in range but leans " + (q.pH < 7.4 ? "acidic" : "alkaline") + ". ");
      s += resp ? "PaCO₂ " + q.co2 + " is " + (acid ? "high" : "low") + " and moves opposite to pH, so the lungs are the cause. " : "HCO₃⁻ " + q.hco3 + " is " + (acid ? "low" : "high") + " and moves with pH, so it is metabolic. ";
      if (q.comp === "none") s += (resp ? "HCO₃⁻" : "PaCO₂") + " is normal: no compensation yet.";
      else s += (resp ? "HCO₃⁻ " + q.hco3 + " is " + (acid ? "high (kidneys holding bicarbonate)" : "low (kidneys dumping bicarbonate)") : "PaCO₂ " + q.co2 + " is " + (acid ? "low (lungs blowing off CO₂)" : "high (lungs retaining CO₂)")) + ", pulling pH back toward normal" + (q.comp === "full" ? " and pH is in range: fully compensated." : ", but pH is still out of range: partially compensated.");
      return esc(s);
    }
    draw();
  }

  /* ================= EMERGENCIES ================= */
  function emerg() {
    app.innerHTML = '<h1>Emergencies, Look-alikes & Priorities</h1><p class="muted">Priority questions come down to ABCs and “which patient is getting worse right now?”</p>' +
      '<h2 style="margin-top:20px">Top emergencies and the giveaway cue</h2><div class="grid grid-2">' +
      EMERGENCIES.map(function (e) { return '<div class="card emerg sys-' + e[1] + '"><h3>' + esc(e[0]) + '</h3><div style="margin-bottom:6px">' + tag(e[1]) + '</div><p class="small"><b>Giveaway:</b> ' + esc(e[2]) + '</p><p class="small muted" style="margin:0"><b>Why it kills:</b> ' + esc(e[3]) + "</p></div>"; }).join("") + "</div>" +
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
