/* NCLEX Prep: builds custom practice exams from every ready exam guide's question bank.
   An exam joins the pool when its entry in program.js has a "bank" list (script files,
   relative to the guide's folder) that define window.QUESTIONS, and optionally
   window.TRIAGE (priority sets) and window.SYSTEMS (topic names). */
(function () {
  "use strict";
  var TYPES = { mc: "Multiple choice", sata: "Select all that apply", selectn: "Select N", cloze: "Drop-down cloze", matrix: "Matrix grid", priority: "Prioritization" };
  var DIFFS = { easy: "Easy", medium: "Medium", hard: "Hard", unrated: "Not rated" };
  function diffChip(d) { return d === "unrated" ? "" : '<span class="chip diff diff-' + d + '">' + DIFFS[d] + "</span>"; }
  var LENGTHS = [10, 25, 50, 75, "All"];
  var bank = null, loading = null;
  var app, ctx, esc, S;

  function $(s) { return app.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(app.querySelectorAll(s)); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function note(msg) { var el = $("#nx-note"); if (el) { el.textContent = msg; el.style.display = "block"; clearTimeout(note.t); note.t = setTimeout(function () { el.style.display = "none"; }, 2200); } }
  function st() { S.nx = S.nx || { seen: {}, hist: [], prefs: {} }; S.nx.seen = S.nx.seen || {}; S.nx.hist = S.nx.hist || []; S.nx.prefs = S.nx.prefs || {}; return S.nx; }

  /* ---------- Loading every bank ---------- */
  function sources() {
    var out = [];
    ctx.P.semesters.forEach(function (s) { s.courses.forEach(function (c) { c.exams.forEach(function (e) {
      if (e.status !== "ready" || !e.bank || !e.path) return;
      var page = ctx.LOCAL && e.localPath ? e.localPath : e.path;
      out.push({ key: c.id + "|" + e.name, course: c, exam: e, dir: page.slice(0, page.lastIndexOf("/") + 1) });
    }); }); });
    return out;
  }
  function loadScript(src) {
    return new Promise(function (ok, fail) { var t = document.createElement("script"); t.src = encodeURI(src); t.onload = ok; t.onerror = function () { fail(src); }; document.head.appendChild(t); });
  }
  function loadAll() {
    if (bank) return Promise.resolve(bank);
    if (loading) return loading;
    var out = { sources: [], qs: [], failed: [] };
    loading = sources().reduce(function (p, src) {
      return p.then(function () {
        window.QUESTIONS = window.TRIAGE = window.SYSTEMS = undefined;
        return src.exam.bank.reduce(function (q, f) { return q.then(function () { return loadScript(src.dir + f); }); }, Promise.resolve()).then(function () {
          var sys = {}; (window.SYSTEMS || []).forEach(function (s) { sys[s.id] = s; });
          var tag = (src.course.code || src.course.name) + " · " + src.exam.name, n0 = out.qs.length;
          (window.QUESTIONS || []).forEach(function (q, i) { out.qs.push(norm(q, src, sys, src.key + "|q" + i, q.type)); });
          (window.TRIAGE || []).forEach(function (t, i) { out.qs.push(norm({ sys: t.sys, type: "mc", diff: t.diff, stem: t.stem, options: t.clients, answer: t.answer, why: t.why }, src, sys, src.key + "|t" + i, "priority")); });
          src.tag = tag; src.count = out.qs.length - n0; out.sources.push(src);
        }, function () { out.failed.push(src); });
      });
    }, Promise.resolve()).then(function () { window.QUESTIONS = window.TRIAGE = window.SYSTEMS = undefined; bank = out; return out; });
    return loading;
  }
  function norm(q, src, sys, id, kind) {
    var s = sys[q.sys];
    return { id: id, src: src.key, kind: kind, diff: DIFFS[q.diff] ? q.diff : "unrated", topic: src.key + "|" + q.sys, topicName: s ? s.name : q.sys, short: s ? s.short : q.sys, color: src.course.color, course: src.course, exam: src.exam, q: q };
  }

  /* ---------- Builder ---------- */
  function render(appEl, c) {
    app = appEl; ctx = c; esc = c.esc; S = c.S;
    stopTimer();
    app.innerHTML = '<div class="card placeholder">Loading question banks…</div>';
    loadAll().then(builder, function () { app.innerHTML = '<div class="card placeholder">Could not load the question banks.</div>'; });
  }

  function builder(B) {
    var nx = st(), pf = nx.prefs;
    if (!B.qs.length) {
      app.innerHTML = '<h1>🧠 NCLEX Prep</h1><div class="card placeholder">No question banks found yet. When an exam guide with practice questions is added, its questions show up here.</div>';
      return;
    }
    var topics = [], seenT = {};
    B.qs.forEach(function (x) { if (!seenT[x.topic]) { seenT[x.topic] = 1; topics.push({ id: x.topic, src: x.src, name: x.topicName, color: x.color }); } });
    var on = function (list, id) { return !list || list.indexOf(id) > -1; };
    var seen = nx.seen, tried = Object.keys(seen).length, hist = nx.hist;

    var html = '<h1>🧠 NCLEX Prep</h1><p class="muted">Build a custom practice exam from every course\'s question bank. ' + B.qs.length + " questions across " + B.sources.length + " exam" + (B.sources.length === 1 ? "" : "s") + " so far · " + tried + " tried.</p>" +
      (B.failed.length ? '<div class="callout">Couldn\'t load: ' + B.failed.map(function (f) { return esc(f.course.code + " " + f.exam.name); }).join(", ") + "</div>" : "") +
      '<div class="card nx-section"><h3>1 · Courses & exams</h3><div class="nx-grid">' + B.sources.map(function (s) {
        return '<label class="nx-check"><input type="checkbox" data-src="' + esc(s.key) + '"' + (on(pf.src, s.key) ? " checked" : "") + '><span><b>' + esc(s.tag) + '</b><br><span class="tiny">' + esc(s.course.name) + " · " + s.count + " questions</span></span></label>";
      }).join("") + "</div></div>" +
      '<div class="card nx-section"><div class="row"><h3 style="margin:0">2 · Topics</h3><span class="spacer"></span><button class="chip" id="t-all">All</button><button class="chip" id="t-none">None</button></div><div class="nx-grid" style="margin-top:10px" id="topics">' + topics.map(function (t) {
        var n = B.qs.filter(function (x) { return x.topic === t.id; }).length;
        return '<label class="nx-check" data-tsrc="' + esc(t.src) + '"><input type="checkbox" data-topic="' + esc(t.id) + '"' + (on(pf.topics, t.id) ? " checked" : "") + '><span><span class="sys-dot" style="background:' + t.color + '"></span> ' + esc(t.name) + '<br><span class="tiny">' + n + " questions</span></span></label>";
      }).join("") + "</div></div>" +
      '<div class="card nx-section"><h3>3 · Question types</h3><div class="nx-grid">' + Object.keys(TYPES).map(function (k) {
        var n = B.qs.filter(function (x) { return x.kind === k; }).length;
        return n ? '<label class="nx-check"><input type="checkbox" data-type="' + k + '"' + (on(pf.types, k) ? " checked" : "") + '><span>' + TYPES[k] + '<br><span class="tiny">' + n + " questions</span></span></label>" : "";
      }).join("") + "</div></div>" +
      '<div class="card nx-section"><h3>4 · Difficulty</h3><p class="tiny muted" style="margin:-4px 0 10px">Easy = recall a fact · Medium = apply it to a client · Hard = multi-step or technical reasoning</p><div class="nx-grid">' + Object.keys(DIFFS).map(function (k) {
        var n = B.qs.filter(function (x) { return x.diff === k; }).length;
        return n ? '<label class="nx-check"><input type="checkbox" data-diff="' + k + '"' + (on(pf.diffs, k) ? " checked" : "") + '><span>' + (k === "unrated" ? DIFFS[k] : diffChip(k)) + '<br><span class="tiny">' + n + " questions</span></span></label>" : "";
      }).join("") + "</div></div>" +
      '<div class="card nx-section"><h3>5 · Setup</h3>' +
        '<div class="row" style="margin-bottom:12px"><b class="small" style="width:90px">Length</b>' + LENGTHS.map(function (n) { return '<button class="chip' + (String(pf.len || 25) === String(n) ? " on" : "") + '" data-len="' + n + '">' + n + "</button>"; }).join("") + "</div>" +
        '<div class="row" style="margin-bottom:12px"><b class="small" style="width:90px">Pool</b>' + [["all", "All questions"], ["unseen", "Not tried yet"], ["missed", "Missed before"]].map(function (p) { return '<button class="chip' + ((pf.pool || "all") === p[0] ? " on" : "") + '" data-pool="' + p[0] + '">' + p[1] + "</button>"; }).join("") + "</div>" +
        '<div class="row" style="margin-bottom:12px"><b class="small" style="width:90px">Mode</b>' + [["tutor", "Tutor: rationale after each"], ["exam", "Exam: rationales at the end"]].map(function (p) { return '<button class="chip' + ((pf.mode || "tutor") === p[0] ? " on" : "") + '" data-mode="' + p[0] + '">' + p[1] + "</button>"; }).join("") + "</div>" +
        '<label class="row small" style="gap:8px"><input type="checkbox" id="timed"' + (pf.timed ? " checked" : "") + '> Timed: about 90 seconds per question, like the real NCLEX pace</label>' +
      "</div>" +
      '<div class="card nx-summary"><div><b id="pool-n">0</b> questions match · exam will have <b id="exam-n">0</b></div><span class="spacer"></span><button class="btn primary" id="go">Start exam →</button></div>' +
      '<div class="callout" id="nx-note" style="display:none;margin-top:10px"></div>' +
      (hist.length ? '<h2 style="margin-top:28px">Recent exams</h2><div class="card table-wrap"><table class="nx-hist"><thead><tr><th>Date</th><th>Questions</th><th>Mode</th><th>Score</th></tr></thead><tbody>' +
        hist.slice(0, 8).map(function (h) { return "<tr><td>" + esc(new Date(h.d).toLocaleDateString()) + "</td><td>" + h.n + "</td><td>" + (h.mode === "exam" ? "Exam" : "Tutor") + "</td><td><b>" + h.pct + "%</b></td></tr>"; }).join("") + "</tbody></table></div>" : "");
    app.innerHTML = html;

    function chosen(attr) { return $$("input[" + attr + "]").filter(function (i) { return i.checked; }).map(function (i) { return i.getAttribute(attr); }); }
    function pick(attr) { var b = $("[" + attr + "].on"); return b ? b.getAttribute(attr) : null; }
    function pool() {
      var src = chosen("data-src"), tp = chosen("data-topic"), ty = chosen("data-type"), df = chosen("data-diff"), p = pick("data-pool");
      return B.qs.filter(function (x) {
        return src.indexOf(x.src) > -1 && tp.indexOf(x.topic) > -1 && ty.indexOf(x.kind) > -1 && df.indexOf(x.diff) > -1 &&
          (p === "unseen" ? seen[x.id] === undefined : p === "missed" ? seen[x.id] === 0 : true);
      });
    }
    function update() {
      var src = chosen("data-src");
      $$("[data-tsrc]").forEach(function (l) { var off = src.indexOf(l.getAttribute("data-tsrc")) < 0; l.classList.toggle("disabled", off); l.querySelector("input").disabled = off; });
      var n = pool().length, len = pick("data-len");
      $("#pool-n").textContent = n;
      $("#exam-n").textContent = len === "All" ? n : Math.min(n, +len);
      $("#go").disabled = !n;
      nx.prefs = { src: src, topics: chosen("data-topic"), types: chosen("data-type"), diffs: chosen("data-diff"), len: len, pool: pick("data-pool"), mode: pick("data-mode"), timed: $("#timed").checked };
      ctx.save();
    }
    $$("input").forEach(function (i) { i.onchange = update; });
    ["data-len", "data-pool", "data-mode"].forEach(function (a) { $$("button[" + a + "]").forEach(function (b) { b.onclick = function () { $$("button[" + a + "]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); update(); }; }); });
    $("#t-all").onclick = function () { $$("input[data-topic]").forEach(function (i) { i.checked = true; }); update(); };
    $("#t-none").onclick = function () { $$("input[data-topic]").forEach(function (i) { i.checked = false; }); update(); };
    $("#go").onclick = function () {
      var p = pool(); if (!p.length) { note("No questions match. Turn on more topics, types, or difficulty levels."); return; }
      var len = pick("data-len"), mode = pick("data-mode");
      run(shuffle(p).slice(0, len === "All" ? p.length : +len), mode, $("#timed").checked);
    };
    update();
  }

  /* ---------- Running an exam ---------- */
  var timerId = null;
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }

  function run(list, mode, timed) {
    var pos = 0, results = [], t0 = Date.now(), limit = timed ? list.length * 90 : 0, perm = null;
    stopTimer();
    timerId = setInterval(function () {
      var el = document.getElementById("nx-time"); if (!el) { stopTimer(); return; }
      var t = (Date.now() - t0) / 1000;
      el.textContent = limit ? fmt(limit - t) + " left" : fmt(t);
      if (limit && t >= limit) { stopTimer(); for (var i = pos; i < list.length; i++) results.push({ x: list[i], ok: false, resp: null }); finish(true); }
    }, 500);

    function draw() {
      if (pos >= list.length) return finish(false);
      var x = list[pos], q = x.q, k = x.kind;
      var html = '<div class="row" style="margin-bottom:14px"><button class="btn small" id="quit">← End exam</button><span class="spacer"></span><span class="chip">⏱ <span id="nx-time">' + (limit ? fmt(limit - (Date.now() - t0) / 1000) + " left" : fmt((Date.now() - t0) / 1000)) + '</span></span></div>' +
        '<div class="q-card card" style="border-left:5px solid ' + x.color + '"><div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * pos / list.length) + '%"></span></div>' +
        '<div class="q-meta"><span class="chip">' + esc(x.course.code || x.course.name) + " · " + esc(x.short) + '</span><span class="chip">' + TYPES[k] + (k === "selectn" ? " · pick " + q.n : "") + "</span>" + diffChip(x.diff) + '<span class="spacer"></span><span class="tiny">' + (pos + 1) + " / " + list.length + "</span></div>";
      if (k === "cloze") {
        html += '<p class="small muted">Choose the option that best completes each blank.</p><div class="cloze">' + esc(q.stem).replace(/\{(\d+)\}/g, function (m, n) {
          var b = q.blanks[+n];
          return '<select data-b="' + n + '"><option value="">Select…</option>' + shuffle(b.options.map(function (o, i) { return i; })).map(function (i) { return '<option value="' + i + '">' + esc(b.options[i]) + "</option>"; }).join("") + "</select>";
        }) + "</div>";
      } else if (k === "matrix") {
        html += '<div class="q-stem">' + esc(q.stem) + '</div><div class="table-wrap"><table class="matrix"><thead><tr><th></th>' + q.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          q.rows.map(function (r, ri) { return "<tr><td>" + esc(r[0]) + "</td>" + q.cols.map(function (c, ci) { return '<td data-r="' + ri + '" data-c="' + ci + '"><input type="radio" name="m' + ri + '" value="' + ci + '" aria-label="' + esc(r[0] + ": " + c) + '"></td>'; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      } else {
        var multi = k === "sata" || k === "selectn";
        perm = shuffle(q.options.map(function (o, i) { return i; }));
        html += '<div class="q-stem">' + esc(q.stem) + "</div>" + perm.map(function (i) { return '<button class="opt' + (multi ? " multi" : "") + '" data-k="' + i + '"><span class="box"></span><span>' + esc(q.options[i]) + "</span></button>"; }).join("");
      }
      html += '<div class="row" style="margin-top:16px"><span class="tiny">' + (mode === "exam" ? "Exam mode: you can't go back, just like the NCLEX." : "") + '</span><span class="spacer"></span><button class="btn primary" id="submit">' + (mode === "exam" ? (pos + 1 >= list.length ? "Finish exam" : "Next →") : "Submit") + '</button></div><div class="callout" id="nx-note" style="display:none;margin-top:10px"></div><div id="rat"></div></div>';
      app.innerHTML = html;
      window.scrollTo(0, 0);

      $$(".opt").forEach(function (b) { b.onclick = function () {
        if (k === "mc" || k === "priority") $$(".opt").forEach(function (o) { o.classList.remove("sel"); });
        if (k === "selectn" && !b.classList.contains("sel") && $$(".opt.sel").length >= q.n) { note("Pick exactly " + q.n + "."); return; }
        b.classList.toggle("sel");
      }; });
      $("#quit").onclick = function () {
        var b = $("#quit");
        if (!b.classList.contains("armed")) { b.classList.add("armed"); b.textContent = "Tap again to end · answered questions are scored"; setTimeout(function () { if (b.isConnected) { b.classList.remove("armed"); b.textContent = "← End exam"; } }, 4000); return; }
        stopTimer(); finish(true);
      };
      $("#submit").onclick = submit;
    }

    function read(x) {
      var q = x.q, k = x.kind;
      if (k === "cloze") { var v = $$(".cloze select").map(function (s) { return s.value; }); return v.indexOf("") > -1 ? null : v.map(Number); }
      if (k === "matrix") { var p = q.rows.map(function (r, ri) { var c = app.querySelector('input[name="m' + ri + '"]:checked'); return c ? +c.value : -1; }); return p.indexOf(-1) > -1 ? null : p; }
      var sel = $$(".opt.sel").map(function (b) { return +b.getAttribute("data-k"); });
      if (!sel.length || (k === "selectn" && sel.length !== q.n)) return null;
      return sel;
    }
    function score(x, r) {
      var q = x.q, k = x.kind;
      if (k === "cloze") return q.blanks.every(function (b, i) { return r[i] === b.answer; });
      if (k === "matrix") return q.rows.every(function (row, i) { return r[i] === row[1]; });
      var ans = typeof q.answer === "number" ? [q.answer] : q.answer;
      return r.length === ans.length && r.every(function (i) { return ans.indexOf(i) > -1; });
    }
    function reveal(x, r) {
      var q = x.q, k = x.kind;
      if (k === "cloze") {
        $$(".cloze select").forEach(function (s, i) { var b = q.blanks[+s.getAttribute("data-b")], good = +s.value === b.answer; s.classList.add(good ? "right" : "wrong"); s.disabled = true;
          if (!good) { var sp = document.createElement("span"); sp.className = "small"; sp.style.color = "var(--good)"; sp.style.fontWeight = "700"; sp.textContent = " → " + b.options[b.answer]; s.after(sp); } });
      } else if (k === "matrix") {
        q.rows.forEach(function (row, ri) { app.querySelector('td[data-r="' + ri + '"][data-c="' + row[1] + '"]').classList.add("right"); if (r[ri] !== row[1]) app.querySelector('td[data-r="' + ri + '"][data-c="' + r[ri] + '"]').classList.add("wrong"); });
        $$(".matrix input").forEach(function (i) { i.disabled = true; });
      } else {
        var ans = typeof q.answer === "number" ? [q.answer] : q.answer;
        $$(".opt").forEach(function (b) { var i = +b.getAttribute("data-k"), isA = ans.indexOf(i) > -1, isS = r.indexOf(i) > -1; b.disabled = true; b.classList.remove("sel");
          if (isA && isS) b.classList.add("right"); else if (isS) b.classList.add("wrong"); else if (isA) b.classList.add("right", "missed");
          b.querySelector(".box").textContent = isA ? "✓" : isS ? "✕" : ""; });
      }
    }
    function submit() {
      var x = list[pos], r = read(x);
      if (!r) { note(x.kind === "cloze" ? "Fill every blank." : x.kind === "matrix" ? "Answer every row." : x.kind === "selectn" ? "Pick exactly " + x.q.n + "." : "Choose an answer first."); return; }
      var ok = score(x, r);
      results.push({ x: x, ok: ok, resp: r });
      st().seen[x.id] = ok ? 1 : 0; ctx.save();
      if (mode === "exam") { pos++; draw(); return; }
      reveal(x, r);
      $("#rat").innerHTML = '<div class="rationale ' + (ok ? "ok" : "no") + '"><strong>' + (ok ? "Correct!" : "Not quite.") + "</strong>" + esc(x.q.why || "") + "</div>";
      var btn = $("#submit"); btn.textContent = pos + 1 >= list.length ? "See results" : "Next question →";
      btn.onclick = function () { pos++; draw(); };
      btn.focus();
    }

    function answerText(x) {
      var q = x.q;
      if (x.kind === "cloze") return q.blanks.map(function (b) { return b.options[b.answer]; }).join(" · ");
      if (x.kind === "matrix") return q.rows.map(function (r) { return r[0] + ": " + q.cols[r[1]]; }).join(" · ");
      var ans = typeof q.answer === "number" ? [q.answer] : q.answer;
      return ans.map(function (i) { return q.options[i]; }).join(" · ");
    }
    function bars(groups) {
      return Object.keys(groups).filter(function (g) { return groups[g].n; }).map(function (g) { var v = groups[g], p = Math.round(100 * v.ok / v.n);
        return '<div class="nx-bar"><span>' + esc(g) + '</span><div class="progress" style="--c:' + (p >= 75 ? "var(--good)" : p >= 60 ? "var(--warn)" : "var(--bad)") + '"><span style="width:' + p + '%;background:var(--c)"></span></div><b>' + p + "%</b></div>";
      }).join("");
    }
    function finish(early) {
      stopTimer();
      var n = results.length;
      if (!n) { builder(bank); return; }
      var ok = results.filter(function (r) { return r.ok; }).length, pct = Math.round(100 * ok / n), secs = (Date.now() - t0) / 1000;
      var byTopic = {}, byType = {}, byDiff = {};
      Object.keys(DIFFS).forEach(function (k) { byDiff[DIFFS[k]] = { n: 0, ok: 0 }; });
      results.forEach(function (r) {
        var a = (r.x.course.code || r.x.course.name) + " · " + r.x.topicName, b = TYPES[r.x.kind];
        (byTopic[a] = byTopic[a] || { n: 0, ok: 0 }).n++; if (r.ok) byTopic[a].ok++;
        (byType[b] = byType[b] || { n: 0, ok: 0 }).n++; if (r.ok) byType[b].ok++;
        var d = DIFFS[r.x.diff]; (byDiff[d] = byDiff[d] || { n: 0, ok: 0 }).n++; if (r.ok) byDiff[d].ok++;
      });
      var nx = st(); nx.hist.unshift({ d: Date.now(), n: n, pct: pct, mode: mode }); nx.hist = nx.hist.slice(0, 30); ctx.save();
      var wrong = results.filter(function (r) { return !r.ok; });
      app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">' + (pct >= 85 ? "🏆" : pct >= 70 ? "💪" : "📖") + '</div><div class="big-score">' + pct + '%</div><p class="muted">' + ok + " of " + n + " correct · " + fmt(secs) + (early && n < list.length ? " · ended early" : "") + "</p>" +
        "<p>" + (pct >= 85 ? "Strong. Try a longer exam or switch to Exam mode." : pct >= 70 ? "Solid. Read the rationales below, then retry your missed questions." : "Review the topics below with the lowest scores, then build an exam from just those.") + "</p>" +
        '<div class="row" style="justify-content:center"><button class="btn primary" id="again">Build another exam</button>' + (wrong.length ? '<button class="btn" id="retry">Retry the ' + wrong.length + " I missed</button>" : "") + "</div></div>" +
        '<div class="grid grid-2" style="margin-top:18px"><div class="card"><h3>By topic</h3>' + bars(byTopic) + '</div><div class="card"><h3>By question type</h3>' + bars(byType) + '</div><div class="card"><h3>By difficulty</h3>' + bars(byDiff) + "</div></div>" +
        (wrong.length ? '<h2 style="margin-top:24px">Review what you missed</h2>' + wrong.map(function (r) { var q = r.x.q;
          return '<div class="card" style="margin-bottom:12px;border-left:5px solid ' + r.x.color + '"><div class="q-meta"><span class="chip">' + esc(r.x.course.code || r.x.course.name) + " · " + esc(r.x.short) + '</span><span class="chip">' + TYPES[r.x.kind] + "</span>" + diffChip(r.x.diff) + (r.resp ? "" : '<span class="chip">Not answered</span>') + "</div><p><b>" + esc(q.stem.replace(/\{\d+\}/g, "___")) + '</b></p><p class="small"><b style="color:var(--good)">Answer:</b> ' + esc(answerText(r.x)) + '</p><p class="small muted">' + esc(q.why || "") + "</p></div>";
        }).join("") : "");
      $("#again").onclick = function () { builder(bank); window.scrollTo(0, 0); };
      if ($("#retry")) $("#retry").onclick = function () { run(shuffle(wrong.map(function (r) { return r.x; })), mode, timed); };
      window.scrollTo(0, 0);
    }
    draw();
  }

  window.NCLEX = { render: render };
  window.addEventListener("hashchange", function () { if (location.hash.indexOf("#nclex") !== 0) stopTimer(); });
})();
