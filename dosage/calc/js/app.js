/* Dosage Calc lab: lessons, worked examples, the ATI chart, and a 200-problem practice bank
   with typed numeric answers and step-by-step solutions. Reads window.DOSAGE + LESSON_EX (problems.js)
   and window.LESSONS (lessons.js). */
(function () {
  "use strict";

  var KEY = "dosage-calc-v1";
  var S = { xp: 0, q: {}, lessons: {}, theme: "auto" };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) S = Object.assign(S, saved); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var app = document.getElementById("app");
  var P = window.DOSAGE, EX = window.LESSON_EX, LESSONS = window.LESSONS;
  var BYID = {}; P.forEach(function (p) { BYID[p.id] = p; });
  var LESSON = {}; LESSONS.forEach(function (l) { LESSON[l.id] = l; });
  var CATS = { med: { name: "Medication math", short: "Med math", icon: "💊", sys: "med" }, iv: { name: "IV flow rates", short: "IV rates", icon: "💧", sys: "iv" } };
  var TOPICS = [
    { id: "conv", cat: "med", name: "Conversions", lesson: "conv" },
    { id: "tabs", cat: "med", name: "Tablets & capsules", lesson: "tabs" },
    { id: "liquid", cat: "med", name: "Oral liquids", lesson: "liquid" },
    { id: "inj", cat: "med", name: "Injections", lesson: "inj" },
    { id: "weight", cat: "med", name: "Weight-based", lesson: "weight" },
    { id: "pump", cat: "iv", name: "Pump rate (hours)", lesson: "pump" },
    { id: "pumpmin", cat: "iv", name: "Pump rate (minutes)", lesson: "pump" },
    { id: "time", cat: "iv", name: "Time & volume", lesson: "time" },
    { id: "gtt", cat: "iv", name: "Drip rate (gtt/min)", lesson: "gtt" },
    { id: "dose", cat: "iv", name: "Dose-based infusions", lesson: "dose" }
  ];
  var TOPIC = {}; TOPICS.forEach(function (t) { TOPIC[t.id] = t; });
  var DIFF = { easy: ["Easy", "one step, units already match"], medium: ["Medium", "one conversion or two steps"], hard: ["Hard", "weight-based, dose-based, or several conversions"] };
  var RULE = { tenth: "nearest tenth", whole: "nearest whole number", hundredth: "nearest hundredth", none: "no rounding" };

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function $(sel, root) { return (root || app).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || app).querySelectorAll(sel)); }
  /* Numbers the way the exam wants them: leading zero, no trailing zeros, commas from 1,000. */
  function fmt(x, places) {
    var p = places === undefined ? 4 : places;
    var s = (Math.round(x * Math.pow(10, p)) / Math.pow(10, p)).toFixed(p).replace(/\.?0+$/, "");
    var neg = s.charAt(0) === "-"; if (neg) s = s.slice(1);
    var parts = s.split("."); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (neg ? "−" : "") + parts.join(".");
  }
  function unitHTML(u) { return esc(u).replace(/·/g, "&#8202;·&#8202;"); }
  function diffChip(d) { return '<span class="chip diff diff-' + d + '" title="' + DIFF[d][1] + '">' + DIFF[d][0] + "</span>"; }
  function addXP(n, msg) { S.xp += n; save(); document.getElementById("xp").textContent = S.xp; if (msg) toast(msg + "  +" + n + " XP"); }
  var toastTimer;
  function toast(msg) { var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1700); }
  function statsFor(f) {
    var ids = P.filter(f).map(function (p) { return p.id; });
    return { n: ids.length, tried: ids.filter(function (i) { return S.q[i] !== undefined; }).length, right: ids.filter(function (i) { return S.q[i] === 1; }).length };
  }

  /* ---------- Step renderer (shared by lessons and practice) ----------
     A chain step is a row of fractions; units that cancel are struck through,
     like crossing them out on paper. */
  function chainHTML(s) {
    var slots = [];
    s.terms.forEach(function (t, ti) {
      (t[1] ? t[1].split("·") : []).forEach(function (u, ui) { slots.push({ t: ti, top: true, i: ui, u: u }); });
      (t[3] ? t[3].split("·") : []).forEach(function (u, ui) { slots.push({ t: ti, top: false, i: ui, u: u }); });
    });
    var crossed = {};
    slots.forEach(function (a) {
      if (!a.top || crossed[a.t + "t" + a.i]) return;
      for (var k = 0; k < slots.length; k++) { var b = slots[k]; if (!b.top && b.u === a.u && !crossed[b.t + "b" + b.i]) { crossed[a.t + "t" + a.i] = crossed[b.t + "b" + b.i] = 1; return; } }
    });
    function side(t, ti, top) {
      var n = top ? t[0] : t[2], us = (top ? t[1] : t[3]) ? (top ? t[1] : t[3]).split("·") : [];
      return '<span class="n">' + fmt(n) + "</span>" + (us.length ? " " + us.map(function (u, ui) { return '<span class="u' + (crossed[ti + (top ? "t" : "b") + ui] ? " x" : "") + '">' + esc(u) + "</span>"; }).join('<span class="dot">·</span>') : "");
    }
    var parts = s.terms.map(function (t, ti) {
      var plain = t[2] === 1 && !t[3];
      return plain ? '<span class="term plain">' + side(t, ti, true) + "</span>" : '<span class="term frac"><span class="top">' + side(t, ti, true) + '</span><span class="bot">' + side(t, ti, false) + "</span></span>";
    });
    return '<div class="dchain">' + parts.join('<span class="op">×</span>') + '<span class="op">=</span><span class="res">' + (s.exact ? "" : "≈ ") + fmt(s.r, s.exact ? 4 : 2) + " " + unitHTML(s.ru) + "</span></div>";
  }
  function stepHTML(s, i) {
    var body;
    if (s.t === "chain") body = chainHTML(s);
    else if (s.t === "sum") body = '<div class="dchain">' + s.parts.map(function (p, k) { return (k ? '<span class="op">' + (p[0] < 0 ? "−" : "+") + "</span>" : "") + '<span class="term plain"><span class="n">' + fmt(Math.abs(p[0])) + "</span> " + esc(p[1]) + "</span>"; }).join("") + '<span class="op">=</span><span class="res">' + fmt(s.r) + " " + esc(s.ru) + "</span></div>";
    else body = '<div class="dchain"><span class="term plain">' + fmt(s.from, 4) + '</span><span class="op">→</span><span class="res">' + fmt(s.r) + " " + unitHTML(s.ru) + "</span></div>";
    var label = s.t === "round" ? "Round to the " + RULE[s.rule] : s.label;
    return '<li class="step"><div class="step-label"><span class="step-n">' + (i + 1) + "</span>" + esc(label) + "</div>" + body + "</li>";
  }
  function stepsHTML(p) { return '<ol class="steps">' + p.steps.map(stepHTML).join("") + "</ol>"; }
  /* Abbreviations in problem text get a dotted underline; hover, focus, or tap shows the meaning above. */
  var ABBR = {
    "PRN": "As needed", "PO": "By mouth (per os)", "IV push": "Given directly into the vein with a syringe", "IV": "Intravenous (into a vein)",
    "IM": "Intramuscular (into a muscle)", "subcut": "Subcutaneous (into the fatty tissue under the skin)",
    "NS": "Normal saline (0.9% sodium chloride)", "D5W": "5% dextrose in water", "D5 ½NS": "5% dextrose in half-strength (0.45%) normal saline",
    "D5 ¼NS": "5% dextrose in quarter-strength (0.225%) normal saline", "KCl": "Potassium chloride", "ER": "Extended release",
    "mEq": "Milliequivalent", "gtt": "Drops (guttae)", "mcg": "Microgram", "tsp": "Teaspoon", "Tbsp": "Tablespoon", "oz": "Ounce", "lb": "Pound",
    "hr": "Hour", "min": "Minute", "kg": "Kilogram", "mg": "Milligram", "mL": "Milliliter", "L": "Liter", "g": "Gram"
  };
  var ABBR_RE = new RegExp("(^|[^A-Za-z0-9½¼])(" + Object.keys(ABBR).sort(function (a, b) { return b.length - a.length; }).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(?![A-Za-z0-9])", "g");
  function abbr(text) { return esc(text).replace(ABBR_RE, function (m, pre, k) { return pre + '<abbr class="ab" tabindex="0" data-tip="' + esc(ABBR[k]) + '">' + k + "</abbr>"; }); }
  function stemHTML(p) { return '<div class="q-stem">' + p.lines.map(function (l) { return '<div class="stem-line">' + abbr(l) + "</div>"; }).join("") + '<div class="stem-q">' + abbr(p.q) + "</div></div>"; }
  function answerText(p) { return fmt(p.answer) + " " + p.unit; }

  /* ---------- Answer checking ---------- */
  function parseAnswer(raw) {
    var s = String(raw).trim().replace(/,/g, "").replace(/\s*[a-zA-Zµ/ ]+\.?$/, "").trim();
    if (!/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return null;
    return { v: parseFloat(s), noLead: /^-?\./.test(s), trail: /\.\d*0$|\.$/.test(s) };
  }
  function grade(p, raw) {
    var a = parseAnswer(raw);
    if (!a) return null;
    var ok = Math.abs(a.v - p.answer) < 1e-9, notes = [];
    if (ok && a.noLead) notes.push("Write it with a leading zero: " + fmt(p.answer) + ", not " + raw.trim() + ".");
    if (ok && a.trail) notes.push("Drop the trailing zero: write " + fmt(p.answer) + ".");
    if (!ok) {
      var last = p.steps[p.steps.length - 1], unrounded = last.t === "round" ? last.from : p.answer;
      if (last.t === "round" && Math.abs(a.v - unrounded) < 0.006) notes.push("Your math is right, but round to the " + RULE[p.rule] + ": " + fmt(unrounded, 4) + " → " + fmt(p.answer) + ".");
      else if (Math.abs(a.v - p.answer) <= (p.rule === "whole" ? 1 : p.rule === "hundredth" ? 0.01 : 0.1) + 1e-9) notes.push("Very close: check your rounding. Keep every digit until the last step.");
      else if (Math.abs(a.v - p.answer * 1000) < 1e-6 || Math.abs(a.v * 1000 - p.answer) < 1e-6) notes.push("Off by a factor of 1,000: check your metric conversion (g, mg, mcg, L, mL).");
      else if (Math.abs(a.v - p.answer * 60) < 0.5 || Math.abs(a.v * 60 - p.answer) < 0.5) notes.push("Off by a factor of 60: check your minutes and hours.");
      else if (Math.abs(a.v - p.answer * 2.2) < 0.06 * p.answer || Math.abs(a.v * 2.2 - p.answer) < 0.06 * p.answer) notes.push("Off by a factor of 2.2: did you use the weight in pounds instead of kg?");
    }
    return { ok: ok, v: a.v, raw: raw.trim(), notes: notes };
  }

  /* ---------- Router ---------- */
  function route() {
    var h = (location.hash || "#home").slice(1).split("/");
    var r = h[0] || "home";
    $$("#nav a", document).forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-r") === r); });
    var views = { home: home, learn: learn, practice: practice, chart: chart };
    (views[r] || home)(h[1]);
    window.scrollTo(0, 0);
    var active = $(".nav a.active", document); if (active && active.scrollIntoView) { try { active.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {} }
  }
  window.addEventListener("hashchange", route);

  /* ================= HOME ================= */
  function home() {
    var all = statsFor(function () { return true; });
    var pct = Math.round(100 * all.right / all.n);
    function catRow(c) {
      var st = statsFor(function (p) { return p.cat === c; }), m = Math.round(100 * st.right / st.n);
      return '<a class="blueprint-row sys-' + c + '" href="#practice/' + c + '"><span style="font-size:20px">' + CATS[c].icon + '</span><span><span class="name">' + CATS[c].name + '</span><br><span class="tiny">' + st.n + " problems · " + st.tried + " tried · " + st.right + ' correct</span></span><span class="small" style="font-weight:700">' + m + '%</span><div class="progress bar"><span style="width:' + m + '%"></span></div></a>';
    }
    var tiles = [
      ["#learn/rules", "🚦", "Start here: the rules", "Leading and trailing zeros, rounding, and which conversions the exam gives you (only the ATI chart)."],
      ["#learn/dims", "🧩", "Dimensional analysis", "The fraction method from your example sheets, step by step, with units crossing out as you go."],
      ["#learn", "📘", "Learn med math & IV rates", LESSONS.length + " short lessons with worked examples you can step through and a try-it problem at the end of each."],
      ["#practice/med", "💊", "Practice: medication math", "100 problems: conversions, tablets, liquids, injections, and weight-based doses."],
      ["#practice/iv", "💧", "Practice: IV flow rates", "100 problems: pump rates, infusion time, gravity drips (gtt/min), and dose-based drips."],
      ["#chart", "📋", "ATI conversion chart", "The only conversions the exam gives you, plus the ones you must memorize."]
    ].map(function (t) { return '<a class="card tile" href="' + t[0] + '"><div class="emoji">' + t[1] + "</div><h3>" + t[2] + '</h3><p class="muted small">' + t[3] + "</p></a>"; }).join("");
    app.innerHTML =
      '<section class="hero"><div class="hero-main"><div class="hero-art">🧮</div>' +
        '<div class="tiny" style="color:rgba(255,255,255,.85);font-weight:700;letter-spacing:.06em;text-transform:uppercase">Semester 1 · Dosage Calc</div>' +
        "<h1>Med Math & IV Rates</h1>" +
        "<p>Learn the method, then practice 200 problems modeled on your instructor's example sheets. Type your answer like you would on the exam and see every step of the solution.</p>" +
        '<div class="row"><a class="btn" href="#learn">Start learning</a><a class="btn ghost" href="#practice">Practice problems</a><a class="btn ghost" href="#chart">ATI chart</a></div></div>' +
        '<div class="card"><h3>Your progress</h3><div class="ring-wrap"><div class="ring" style="--p:' + pct + '" data-label="' + pct + '%"></div>' +
          '<div class="small muted">Share of all 200 problems you have answered correctly at least once.<br><br><b>' + S.xp + " XP</b> · " + all.tried + " tried · " + Object.keys(S.lessons).length + "/" + LESSONS.length + " lessons done</div></div>" +
          '<div class="row" style="margin-top:14px"><button class="btn small" id="reset">Reset progress</button></div></div></section>' +
      '<section class="grid grid-2"><div class="card"><h2>Problem bank</h2><p class="small muted">Tap a set to practice it.</p>' + catRow("med") + catRow("iv") + "</div>" +
        '<div class="card"><h2>Exam rules in one breath</h2><ul class="facts">' +
          "<li><b>Leading zero</b> always: 0.5 mL, never .5 mL.</li><li><b>No trailing zero</b>: 2 tablets, never 2.0.</li>" +
          "<li><b>Round to the nearest tenth</b> unless the question says otherwise.</li><li><b>gtt/min</b>: round to a whole number.</li>" +
          "<li>Only the <b>ATI household chart</b> is given. Metric (g, mg, mcg, L, mL) and minutes/hours are on you.</li></ul></div></section>" +
      '<h2 style="margin-top:28px">Study modes</h2><section class="grid grid-3">' + tiles + "</section>";
    $("#reset").onclick = function () { if (confirm("Clear all saved progress and XP?")) { var th = S.theme; S = { xp: 0, q: {}, lessons: {}, theme: th }; save(); document.getElementById("xp").textContent = 0; home(); } };
  }

  /* ================= LEARN ================= */
  function learn(id) {
    if (id && LESSON[id]) return lesson(LESSON[id]);
    var groups = [["start", "Start here"], ["med", "Medication math"], ["iv", "IV flow rates"]];
    app.innerHTML = "<h1>Learn</h1><p class=\"muted\">Short lessons in the order you'd learn them. Each one has a worked example you can reveal one step at a time and a try-it problem.</p>" +
      groups.map(function (g) {
        return '<h2 style="margin-top:22px">' + g[1] + '</h2><div class="grid grid-3">' + LESSONS.filter(function (l) { return l.cat === g[0]; }).map(function (l) {
          return '<a class="card tile lesson-tile sys-' + (l.cat === "start" ? "start" : l.cat) + '" href="#learn/' + l.id + '"><div class="emoji">' + l.icon + "</div><h3>" + esc(l.title) + (S.lessons[l.id] ? ' <span class="chip good-chip">✓</span>' : "") + '</h3><p class="muted small">' + esc(l.sub) + "</p></a>";
        }).join("") + "</div>";
      }).join("");
  }

  function exampleHTML(ex, title, k) {
    return '<div class="card worked" data-ex="' + k + '"><div class="tiny worked-h">' + esc(title) + "</div>" + stemHTML(ex) +
      '<ol class="steps">' + ex.steps.map(function (s, i) { return stepHTML(s, i).replace('<li class="step">', '<li class="step" hidden>'); }).join("") + "</ol>" +
      '<div class="answer-line" hidden>Answer: <b>' + esc(answerText(ex)) + "</b></div>" +
      '<div class="row" style="margin-top:10px"><button class="btn primary small" data-next>Show step 1</button><button class="btn small" data-all>Show all</button></div></div>';
  }
  function tryHTML(ex, k) {
    return '<div class="card tryit" data-try="' + k + '"><div class="tiny worked-h">✏️ Your turn</div>' + stemHTML(ex) +
      '<div class="ans-row"><input class="ans" inputmode="decimal" autocomplete="off" placeholder="Your answer" aria-label="Your answer"><span class="ans-unit">' + esc(ex.unit) + '</span><button class="btn primary" data-check>Check</button></div><div class="try-out"></div></div>';
  }
  function lesson(l) {
    var i = LESSONS.indexOf(l), prev = LESSONS[i - 1], next = LESSONS[i + 1];
    var html = '<div class="lesson"><a class="small" href="#learn">← All lessons</a><div class="lesson-head"><span class="lesson-icon">' + l.icon + "</span><div><h1>" + esc(l.title) + '</h1><p class="muted" style="margin:0">' + esc(l.sub) + "</p></div></div>";
    l.blocks.forEach(function (b, k) {
      if (b[0] === "p") html += "<p>" + b[1] + "</p>";
      else if (b[0] === "key") html += '<div class="callout">' + b[1] + "</div>";
      else if (b[0] === "formula") html += '<div class="formula">' + b[1] + "</div>";
      else if (b[0] === "ex") html += exampleHTML(EX[b[1]], b[2], k);
      else if (b[0] === "try") html += tryHTML(EX[b[1]], k);
      else if (b[0] === "traps") html += '<div class="callout traps"><strong>Common traps</strong><ul>' + b[1].map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>";
      else if (b[0] === "table") html += '<div class="table-wrap"><table><thead><tr>' + b[1].map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" + b[2].map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    });
    var topics = l.practice.map(function (t) { return TOPIC[t]; });
    html += '<div class="card lesson-foot"><div class="row"><button class="btn ' + (S.lessons[l.id] ? "good" : "primary") + '" id="done">' + (S.lessons[l.id] ? "✓ Lesson done" : "Mark lesson done") + "</button>" +
      topics.map(function (t) { return '<a class="btn" href="#practice/' + t.id + '">Practice: ' + esc(t.name) + " (" + P.filter(function (p) { return p.tid === t.id; }).length + ")</a>"; }).join("") + "</div>" +
      '<div class="row lesson-nav">' + (prev ? '<a class="btn small" href="#learn/' + prev.id + '">← ' + esc(prev.title) + "</a>" : "") + '<span class="spacer"></span>' + (next ? '<a class="btn small" href="#learn/' + next.id + '">' + esc(next.title) + " →</a>" : "") + "</div></div></div>";
    app.innerHTML = html;

    $$(".worked").forEach(function (w) {
      var steps = $$(".step", w), nb = $("[data-next]", w), shown = 0;
      function upd() { steps.forEach(function (s, i) { s.hidden = i >= shown; }); var done = shown >= steps.length; $(".answer-line", w).hidden = !done; nb.hidden = done; $("[data-all]", w).hidden = done; nb.textContent = "Show step " + (shown + 1); }
      nb.onclick = function () { shown++; upd(); };
      $("[data-all]", w).onclick = function () { shown = steps.length; upd(); };
    });
    $$(".tryit").forEach(function (t) {
      var ex = EX[l.blocks[+t.getAttribute("data-try")][1]], inp = $(".ans", t), out = $(".try-out", t);
      function check() {
        var g = grade(ex, inp.value);
        if (!g) { toast("Type a number"); return; }
        out.innerHTML = '<div class="rationale ' + (g.ok ? "ok" : "no") + '"><strong>' + (g.ok ? "Correct! " : "Not quite. ") + "Answer: " + esc(answerText(ex)) + "</strong>" + g.notes.map(function (n) { return '<div class="note">' + esc(n) + "</div>"; }).join("") + "</div>" + stepsHTML(ex);
        if (g.ok && !t.getAttribute("data-scored")) { t.setAttribute("data-scored", 1); addXP(5, "Nice"); }
      }
      $("[data-check]", t).onclick = check;
      inp.onkeydown = function (e) { if (e.key === "Enter") check(); };
    });
    $("#done").onclick = function () {
      if (S.lessons[l.id]) delete S.lessons[l.id]; else { S.lessons[l.id] = 1; addXP(10, "Lesson done"); }
      save(); lesson(l);
    };
  }

  /* ================= ATI CHART ================= */
  function chartHTML() {
    return '<div class="table-wrap"><table class="ati"><thead><tr><th colspan="3" class="ati-h">Volume measurements</th></tr><tr><th>Metric</th><th>Household</th><th>Apothecary</th></tr></thead><tbody>' +
      [["5 mL", "1 tsp", "<i>1 dram</i>"], ["15 mL", "1 Tbsp", "<i>3 or 4 drams</i><br>½ ounce (oz)"], ["30 mL", "2 Tbsp", "<i>8 dram</i><br>1 ounce (oz)"], ["240 mL", "1 cup", "8 ounces (oz)"], ["480 mL", "2 cups<br>1 pint", "16 ounces (oz)"], ["960 mL", "2 pints<br>1 quart", "32 ounces (oz)"]]
        .map(function (r) { return "<tr><td>" + r.join("</td><td>") + "</td></tr>"; }).join("") +
      '</tbody><thead><tr><th colspan="3" class="ati-h">Weight measurements</th></tr><tr><th>Household</th><th>Household equivalent</th><th>Metric equivalent</th></tr></thead><tbody>' +
      "<tr><td>Ounce (oz)</td><td></td><td>1 oz = 28.35 g</td></tr><tr><td>Pound (lb)</td><td>1 lb = 16 oz</td><td>2.2 lb = 1 kg</td></tr></tbody></table></div>" +
      '<p class="tiny" style="margin-top:6px"><i>Dram as a unit of measure is rarely used in modern medicine.</i> Source: ATI\'s Household Measurements Conversion Guide (Dosage Calculations 3.0).</p>';
  }
  function chart() {
    app.innerHTML = "<h1>ATI Conversion Chart</h1><p class=\"muted\">This is the only conversion reference the exam gives you. Problems on this site can use these conversions without stating them.</p>" +
      '<div class="grid grid-2 chart-grid"><div class="card">' + chartHTML() + "</div>" +
      '<div class="card"><h2>Not given: memorize these</h2><p class="small muted">Problems will expect these without telling you.</p><div class="table-wrap"><table><tbody>' +
        [["1 g", "1,000 mg"], ["1 mg", "1,000 mcg"], ["1 L", "1,000 mL"], ["1 kg", "1,000 g"], ["1 hr", "60 min"], ["1 unit", "1,000 milliunits"]].map(function (r) { return "<tr><td><b>" + r[0] + "</b></td><td>=</td><td>" + r[1] + "</td></tr>"; }).join("") +
        '</tbody></table></div><div class="callout" style="margin-top:14px">Moving between g, mg, and mcg (or L and mL) is always a move of 3 decimal places. Big unit to small unit: the number gets bigger.</div></div></div>';
  }

  /* ================= PRACTICE ================= */
  var pDiff = "all", pCount = 10;
  function practice(key) {
    var cat = CATS[key] ? key : TOPIC[key] ? TOPIC[key].cat : null, topic = TOPIC[key] ? key : null;
    function inScope(p) { return (!cat || p.cat === cat) && (!topic || p.tid === topic); }
    var pool = P.filter(inScope), st = statsFor(inScope);
    var missed = pool.filter(function (p) { return S.q[p.id] === 0; });
    var catBar = '<div class="filter-bar"><a class="chip ' + (!cat ? "on" : "") + '" href="#practice">All 200</a>' +
      Object.keys(CATS).map(function (c) { return '<a class="chip ' + (cat === c && !topic ? "on" : "") + '" href="#practice/' + c + '"><span class="sys-dot sys-' + c + '"></span>' + CATS[c].name + " · " + P.filter(function (p) { return p.cat === c; }).length + "</a>"; }).join("") + "</div>";
    var topicBar = cat ? '<div class="filter-bar topics-bar">' + TOPICS.filter(function (t) { return t.cat === cat; }).map(function (t) { return '<a class="chip ' + (topic === t.id ? "on" : "") + '" href="#practice/' + t.id + '">' + esc(t.name) + " · " + P.filter(function (p) { return p.tid === t.id; }).length + "</a>"; }).join("") + "</div>" : "";
    function nDiff(d) { return pool.filter(function (p) { return d === "all" || p.diff === d; }).length; }
    app.innerHTML = '<h1>Practice Problems</h1><p class="muted">Type your answer as a number, the way you would on the exam. After you submit, you\'ll see every step of the solution. Use ← Previous to look back at problems you already answered.</p>' + catBar + topicBar +
      '<div class="grid grid-2"><div class="card"><h2>' + (topic ? esc(TOPIC[topic].name) : cat ? CATS[cat].name : "Everything") + '</h2><p class="small muted">' + pool.length + " problems · " + st.tried + " tried · " + st.right + " correct</p>" +
        '<div class="row" style="margin:12px 0"><span class="small">How many?</span>' + [10, 20, "All"].map(function (n) { var v = n === "All" ? 999 : n; return '<button class="chip' + (pCount === v ? " on" : "") + '" data-n="' + v + '">' + n + "</button>"; }).join("") + "</div>" +
        '<div class="row" style="margin:0 0 14px"><span class="small">Difficulty</span>' + ["all", "easy", "medium", "hard"].map(function (d) { return '<button class="chip' + (pDiff === d ? " on" : "") + '" data-d="' + d + '">' + (d === "all" ? "All" : DIFF[d][0]) + " · " + nDiff(d) + "</button>"; }).join("") + "</div>" +
        '<div class="row"><button class="btn primary" id="go">Start</button>' + (missed.length ? '<button class="btn" id="redo">Redo the ' + missed.length + " I missed</button>" : "") + "</div></div>" +
      '<div class="card"><h2>How it works</h2><ul class="facts small">' +
        "<li>Round to the <b>nearest tenth</b> unless the problem says otherwise; <b>gtt/min</b> to a whole number.</li>" +
        "<li>Commas and units are fine (1,500 or 1500 mL). A leading-zero or trailing-zero slip is flagged.</li>" +
        "<li>The <b>📋 ATI chart</b> button opens the chart inside every problem, just like the exam. Nothing else is given.</li></ul>" +
        '<h3 style="margin-top:14px">Difficulty</h3><ul class="facts small">' + Object.keys(DIFF).map(function (d) { return "<li>" + diffChip(d) + " " + DIFF[d][1] + " · " + pool.filter(function (p) { return p.diff === d; }).length + "</li>"; }).join("") + "</ul>" +
        (topic ? '<p class="small"><a href="#learn/' + TOPIC[topic].lesson + '">📘 Review the lesson for this topic</a></p>' : "") + "</div></div>";
    $$("[data-n]").forEach(function (b) { b.onclick = function () { $$("[data-n]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); pCount = +b.getAttribute("data-n"); }; });
    $$("[data-d]").forEach(function (b) { b.onclick = function () { $$("[data-d]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); pDiff = b.getAttribute("data-d"); }; });
    $("#go").onclick = function () {
      var ids = pool.filter(function (p) { return pDiff === "all" || p.diff === pDiff; }).map(function (p) { return p.id; });
      if (!ids.length) { toast("No problems at that difficulty here"); return; }
      run(shuffle(ids).slice(0, pCount), key);
    };
    if ($("#redo")) $("#redo").onclick = function () { run(shuffle(missed.map(function (p) { return p.id; })), key); };
  }

  /* A set keeps every answer, so ← Previous reopens an answered problem with the
     typed answer, the verdict, and the full solution. */
  function run(ids, key) {
    var pos = 0, results = [];
    function score() { return results.filter(function (r) { return r.ok; }).length; }
    function show(n) {
      pos = n;
      if (pos >= ids.length) return finish();
      var p = BYID[ids[pos]], done = results[pos], last = results.length;
      app.innerHTML = '<div class="row" style="margin-bottom:14px"><button class="btn small" id="end">← End set</button><span class="spacer"></span><button class="btn small" id="chartBtn">📋 ATI chart</button></div>' +
        '<div class="q-card card sys-' + p.cat + '"><div class="progress" style="margin-bottom:14px"><span style="width:' + (100 * last / ids.length) + '%"></span></div>' +
        '<div class="q-meta"><span class="tag sys-' + p.cat + '">' + CATS[p.cat].icon + " " + CATS[p.cat].short + '</span><span class="chip">' + esc(TOPIC[p.tid].name) + "</span>" + diffChip(p.diff) + (done ? '<span class="chip">Reviewing</span>' : "") +
        '<span class="spacer"></span><span class="tiny">' + (pos + 1) + " / " + ids.length + " · score " + score() + "</span></div>" +
        stemHTML(p) +
        '<div class="ans-row"><input class="ans" id="ans" inputmode="decimal" autocomplete="off" placeholder="Your answer" aria-label="Your answer"><span class="ans-unit">' + esc(p.unit) + "</span></div>" +
        '<div class="tiny" style="margin-top:6px">Round to the ' + RULE[p.rule] + ".</div>" +
        '<div id="rat"></div><div class="row q-nav" style="margin-top:16px"><button class="btn" id="prev"' + (pos ? "" : " disabled") + ">← Previous</button>" +
        (last < ids.length && last - pos > 1 ? '<button class="btn small" id="resume">Jump to problem ' + (last + 1) + "</button>" : "") +
        '<span class="spacer"></span><button class="btn primary" id="submit">Submit</button></div></div>';
      $("#end").onclick = function () { if (results.length) finish(); else practice(key); };
      $("#chartBtn").onclick = openChart;
      $("#prev").onclick = function () { if (pos) { show(pos - 1); window.scrollTo(0, 0); } };
      if ($("#resume")) $("#resume").onclick = function () { show(last); window.scrollTo(0, 0); };
      var inp = $("#ans");
      if (done) { inp.value = done.raw; reveal(p, done); return; }
      inp.onkeydown = function (e) { if (e.key === "Enter") submit(p); };
      $("#submit").onclick = function () { submit(p); };
      if (window.matchMedia && matchMedia("(pointer: fine)").matches) inp.focus();
    }
    function submit(p) {
      var g = grade(p, $("#ans").value);
      if (!g) { toast("Type a number, like 2.5"); return; }
      S.q[p.id] = g.ok ? 1 : (S.q[p.id] === 1 ? 1 : 0);
      if (g.ok) addXP(10); save();
      results[pos] = g;
      $(".q-card .progress span").style.width = (100 * results.length / ids.length) + "%";
      $(".q-meta .tiny").textContent = (pos + 1) + " / " + ids.length + " · score " + score();
      reveal(p, g);
      $("#submit").focus();
    }
    function reveal(p, g) {
      var inp = $("#ans"); inp.disabled = true; inp.classList.add(g.ok ? "right" : "wrong");
      $("#rat").innerHTML = '<div class="rationale ' + (g.ok ? "ok" : "no") + '"><strong>' + (g.ok ? "Correct!" : "Not quite.") + " The answer is " + esc(answerText(p)) + ".</strong>" +
        g.notes.map(function (n) { return '<div class="note">⚠️ ' + esc(n) + "</div>"; }).join("") + '<div class="why">' + esc(p.why) + "</div></div>" +
        '<h3 class="steps-h">Step by step</h3>' + stepsHTML(p);
      var btn = $("#submit"); btn.textContent = pos + 1 >= ids.length ? "See results" : "Next problem →";
      btn.onclick = function () { show(pos + 1); window.scrollTo(0, 0); };
    }
    function finish() {
      var n = results.filter(Boolean).length, sc = score(), pct = n ? Math.round(100 * sc / n) : 0;
      var wrong = results.map(function (r, i) { return r && !r.ok ? i : -1; }).filter(function (i) { return i > -1; });
      app.innerHTML = '<div class="card scoreboard"><div style="font-size:44px">' + (pct >= 90 ? "🏆" : pct >= 75 ? "💪" : "📖") + '</div><div class="big-score">' + pct + '%</div><p class="muted">' + sc + " of " + n + " correct" + (n < ids.length ? " · ended early" : "") + "</p>" +
        "<p>" + (pct >= 90 ? "Exam-ready on this set." : pct >= 75 ? "Solid. Look over the steps you missed." : "Go back to the lessons for the topics you missed, then try again.") + "</p>" +
        '<div class="row" style="justify-content:center"><button class="btn primary" id="newset">New set</button><a class="btn" href="#learn">Lessons</a></div></div>' +
        (wrong.length ? '<h2 style="margin-top:24px">Review what you missed</h2>' + wrong.map(function (i) {
          var p = BYID[ids[i]], r = results[i];
          return '<details class="card miss sys-' + p.cat + '"><summary><div class="q-meta"><span class="chip">' + esc(TOPIC[p.tid].name) + "</span>" + diffChip(p.diff) + '</div><div class="miss-stem">' + abbr(p.lines.join(" ") + " " + p.q) + '</div><div class="small">You: <b class="bad-t">' + esc(r.raw) + "</b> · Answer: <b class=\"good-t\">" + esc(answerText(p)) + "</b></div></summary>" + stepsHTML(p) + "</details>";
        }).join("") : "");
      $("#newset").onclick = function () { practice(key); window.scrollTo(0, 0); };
      if (pct >= 90 && n >= 5) confetti();
    }
    show(0);
  }

  /* ---------- ATI chart sheet (inside practice) ---------- */
  function openChart() {
    var d = document.getElementById("sheet");
    d.innerHTML = '<div class="sheet-card" role="dialog" aria-modal="true" aria-label="ATI conversion chart"><div class="row"><h2 style="margin:0">ATI conversion chart</h2><span class="spacer"></span><button class="icon-btn" id="sheetX" aria-label="Close">✕</button></div>' + chartHTML() + "</div>";
    d.hidden = false;
    function close() { d.hidden = true; d.innerHTML = ""; document.removeEventListener("keydown", esc_); }
    function esc_(e) { if (e.key === "Escape") close(); }
    document.getElementById("sheetX").onclick = close;
    d.onclick = function (e) { if (e.target === d) close(); };
    document.addEventListener("keydown", esc_);
  }

  /* ---------- Confetti ---------- */
  var confettiRun = 0;
  function confetti() {
    var run_ = ++confettiRun;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var cv = document.getElementById("confetti"), ctx = cv.getContext("2d"), W = cv.width = innerWidth, H = cv.height = innerHeight;
    var colors = ["#c27a17", "#2f6fde", "#1f8a5b", "#a43f87", "#12898f"];
    var bits = []; for (var i = 0; i < 140; i++) bits.push({ x: Math.random() * W, y: -20 - Math.random() * H * 0.4, vx: Math.random() * 4 - 2, vy: 2 + Math.random() * 4, s: 4 + Math.random() * 5, c: colors[i % colors.length], r: Math.random() * 6 });
    var frames = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      bits.forEach(function (b) { b.x += b.vx; b.y += b.vy; b.vy += 0.05; b.r += 0.1; ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6); ctx.restore(); });
      if (++frames < 120 && run_ === confettiRun) requestAnimationFrame(tick); else ctx.clearRect(0, 0, W, H);
    })();
  }

  /* ---------- Theme ---------- */
  function applyTheme() { if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
  document.getElementById("theme").onclick = function () {
    var dark = S.theme === "dark" || (S.theme === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    S.theme = dark ? "light" : "dark"; save(); applyTheme();
  };
  /* One floating tooltip for every abbreviation, kept inside the screen. */
  var tip = document.createElement("div"); tip.className = "ab-tip"; tip.setAttribute("role", "tooltip"); tip.hidden = true; document.body.appendChild(tip);
  var tipFor = null;
  function showTip(el) {
    tipFor = el; tip.textContent = el.getAttribute("data-tip"); tip.hidden = false;
    var r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2)), top = r.top - h - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = left + "px"; tip.style.top = top + "px";
  }
  function hideTip() { tip.hidden = true; tipFor = null; }
  document.addEventListener("mouseover", function (e) { var a = e.target.closest && e.target.closest(".ab"); if (a) showTip(a); else if (tipFor && !tipFor.contains(document.activeElement)) hideTip(); });
  document.addEventListener("focusin", function (e) { if (e.target.classList && e.target.classList.contains("ab")) showTip(e.target); });
  document.addEventListener("focusout", function (e) { if (e.target === tipFor) hideTip(); });
  document.addEventListener("click", function (e) { var a = e.target.closest && e.target.closest(".ab"); if (a) { e.preventDefault(); showTip(a); } else hideTip(); });
  window.addEventListener("scroll", hideTip, { passive: true });
  window.addEventListener("hashchange", hideTip);
  applyTheme();
  document.getElementById("xp").textContent = S.xp;
  route();
})();
