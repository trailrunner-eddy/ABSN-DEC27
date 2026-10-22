(function () {
  "use strict";
  var KEY = "absn-hub-v1";
  var S = { current: "sem1", theme: "auto", recent: [] };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved) S = Object.assign(S, saved); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var app = document.getElementById("app"), crumbs = document.getElementById("crumbs");
  var P = window.PROGRAM;
  var LOCAL = location.protocol === "file:";
  function examHref(e) { return encodeURI(LOCAL && e.localPath ? e.localPath : e.path); }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function allCourses() { var out = []; P.semesters.forEach(function (s) { s.courses.forEach(function (c) { out.push({ sem: s, course: c }); }); }); return out; }
  function findCourse(id) { return allCourses().filter(function (x) { return x.course.id === id; })[0]; }
  function readyCount(c) { return c.exams.filter(function (e) { return e.status === "ready"; }).length; }
  function daysUntil(d) { if (!d) return null; var t = new Date(d + "T00:00:00"); if (isNaN(t)) return null; return Math.ceil((t - new Date().setHours(0, 0, 0, 0)) / 864e5); }
  function countdown(d) { var n = daysUntil(d); if (n === null) return ""; return n > 0 ? '<span class="count">⏳ ' + n + " day" + (n === 1 ? "" : "s") + " away</span>" : n === 0 ? '<span class="count">📍 Today</span>' : '<span class="tiny">Done</span>'; }

  function setCrumbs(parts) {
    crumbs.innerHTML = parts.map(function (p, i) {
      var last = i === parts.length - 1;
      return (i ? '<span class="crumb sep">›</span>' : "") + (p[1] && !last ? '<a class="crumb" href="' + p[1] + '">' + esc(p[0]) + "</a>" : '<span class="crumb last">' + esc(p[0]) + "</span>");
    }).join("");
  }

  function examCard(e, course) {
    var ready = e.status === "ready" && e.path;
    var inner = '<span class="status ' + (ready ? "ready" : "planned") + '">' + (ready ? "Study guide ready" : "Coming soon") + "</span>" +
      "<h3>" + esc(e.name) + "</h3>" +
      (e.blurb ? '<p class="small muted" style="margin:0">' + esc(e.blurb) + "</p>" : "") +
      (e.topics ? '<div class="row">' + e.topics.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" : "") +
      (e.stats ? '<div class="tiny">' + esc(e.stats) + "</div>" : "") +
      (e.date ? countdown(e.date) : "") +
      (ready ? '<span class="btn primary" style="align-self:flex-start;margin-top:4px">Open study guide →</span>' : "");
    return ready
      ? '<a class="card exam" style="--c:' + course.color + '" href="' + examHref(e) + '" data-open="' + esc(course.id + "|" + e.name) + '">' + inner + "</a>"
      : '<div class="card exam planned">' + inner + "</div>";
  }

  /* ---------- Home ---------- */
  function home() {
    setCrumbs([["Program", null]]);
    var cur = P.semesters.filter(function (s) { return s.id === S.current; })[0] || P.semesters[0];
    var ready = allCourses().reduce(function (n, x) { return n + readyCount(x.course); }, 0);
    var recent = (S.recent || []).map(function (r) { var x = findCourse(r.c); if (!x) return null; var e = x.course.exams.filter(function (e) { return e.name === r.e && e.status === "ready"; })[0]; return e ? { x: x, e: e } : null; }).filter(Boolean).slice(0, 3);

    var html =
      '<section class="hero-main" style="border-radius:18px;padding:28px;margin-bottom:8px"><div class="hero-art">🎓</div>' +
        '<div class="tiny" style="color:rgba(255,255,255,.8);font-weight:700;letter-spacing:.06em;text-transform:uppercase">' + P.months + "-month program</div>" +
        "<h1>" + esc(P.name) + "</h1>" +
        "<p>Pick a course, then an exam. Every guide has topic pages, practice questions in the exam's formats, flashcards, and games. " + ready + " study guide" + (ready === 1 ? "" : "s") + " ready so far.</p>" +
        '<div class="timeline">' + P.semesters.map(function (s, i) {
          var n = s.courses.length;
          return '<a class="tl-seg' + (s.id === cur.id ? " current" : "") + '" href="#sem-' + s.id + '"><b>' + esc(s.name) + "</b><span>" + (s.id === cur.id ? "You are here · " : "") + (n ? n + " course" + (n === 1 ? "" : "s") : "Not started") + "</span></a>";
        }).join("") + "</div>" +
      "</section>";

    if (recent.length) {
      html += '<section class="sem"><div class="sem-head"><h2>Jump back in</h2></div><div class="grid grid-3">' +
        recent.map(function (r) { return '<a class="card exam" style="--c:' + r.x.course.color + '" href="' + examHref(r.e) + '" data-open="' + esc(r.x.course.id + "|" + r.e.name) + '"><span class="tiny">' + esc((r.x.course.code ? r.x.course.code + " · " : "") + r.x.course.name) + "</span><h3>" + esc(r.e.name) + "</h3>" + (r.e.date ? countdown(r.e.date) : "") + "</a>"; }).join("") + "</div></section>";
    }

    P.semesters.forEach(function (s) {
      html += '<section class="sem" id="sem-' + s.id + '"><div class="sem-head"><h2>' + esc(s.name) + "</h2>" + (s.note ? '<span class="muted small">' + esc(s.note) + "</span>" : "") + '<span class="spacer"></span>' +
        (s.id === cur.id ? '<span class="chip on">Current</span>' : '<button class="chip" data-cur="' + s.id + '">Set as current</button>') + "</div>";
      if (!s.courses.length) {
        html += '<div class="card placeholder">Courses for ' + esc(s.name) + " will show up here. Add them in <code>js/program.js</code>.</div>";
      } else {
        html += '<div class="grid grid-3">' + s.courses.map(function (c) {
          var r = readyCount(c), next = c.exams.filter(function (e) { var d = daysUntil(e.date); return d !== null && d >= 0; })[0];
          return '<a class="card course" style="--c:' + c.color + '" href="#course/' + c.id + '"><div class="row"><div class="icon">' + c.icon + '</div><div><div class="code">' + esc(c.code || "Semester course") + "</div><h3 style=\"margin:2px 0 0\">" + esc(c.name) + "</h3></div></div>" +
            '<p class="small muted" style="margin:12px 0 6px">' + c.exams.length + " exam" + (c.exams.length === 1 ? "" : "s") + " · " + r + " guide" + (r === 1 ? "" : "s") + " ready" + (c.lectureGuides && c.lectureGuides.length ? " · " + c.lectureGuides.length + " lecture guides" : "") + "</p>" +
            '<div class="progress" style="--c:' + c.color + '"><span style="width:' + (c.exams.length ? 100 * r / c.exams.length : 0) + '%"></span></div>' +
            (next ? '<p class="small" style="margin:10px 0 0">Next: <b>' + esc(next.name) + "</b> " + countdown(next.date) + "</p>" : "") + "</a>";
        }).join("") + "</div>";
      }
      html += "</section>";
    });
    app.innerHTML = html;
    Array.prototype.forEach.call(app.querySelectorAll("[data-cur]"), function (b) { b.onclick = function () { S.current = b.getAttribute("data-cur"); save(); home(); }; });
    bindOpen();
  }

  /* ---------- Course ---------- */
  function course(id) {
    var x = findCourse(id);
    if (!x) { location.hash = "#home"; return; }
    var c = x.course, s = x.sem;
    setCrumbs([["Program", "#home"], [s.name, "#home"], [c.code || c.name, null]]);
    app.innerHTML =
      '<section class="course-hero" style="--c:' + c.color + '"><div class="code">' + (c.code ? esc(c.code) + " · " : "") + esc(s.name) + '</div><h1>' + c.icon + " " + esc(c.name) + "</h1><p style=\"margin:0;opacity:.9\">" + (c.exams.length ? readyCount(c) + " of " + c.exams.length + " exam guides ready. Choose an exam." : "No exams added yet.") + "</p></section>" +
      (c.exams.length ? '<h2>Exams</h2><div class="grid grid-2">' + c.exams.map(function (e) { return examCard(e, c); }).join("") + "</div>" : '<div class="card placeholder">Exam study guides for this course will show up here.</div>') +
      lectureSection(c) +
      '<div class="row" style="margin-top:22px"><a class="btn" href="#home">← All courses</a></div>';
    bindOpen();
  }

  function lectureSection(c) {
    var L = c.lectureGuides || [];
    if (!L.length) return "";
    var base = LOCAL && c.lectureFolder ? c.lectureFolder : c.lectureWebFolder;
    var mods = []; L.forEach(function (g) { if (mods.indexOf(g.mod) < 0) mods.push(g.mod); });
    return '<section class="sem" id="lectures"><div class="sem-head"><h2>Lecture guides</h2><span class="muted small">' + L.length + ' PDFs</span></div><div class="card dl-list">' +
      mods.map(function (m) {
        return '<h4>' + esc(m) + '</h4><ul>' + L.filter(function (g) { return g.mod === m; }).map(function (g) {
          var f = LOCAL && c.lectureFolder ? g.file : g.web;
          return base && f ? '<li><a href="' + encodeURI(base + f) + '" download="' + esc(g.file) + '">⬇ ' + esc(g.title) + "</a></li>" : "<li>" + esc(g.title) + "</li>";
        }).join("") + "</ul>";
      }).join("") + "</div></section>";
  }

  function bindOpen() {
    Array.prototype.forEach.call(app.querySelectorAll("[data-open]"), function (a) {
      a.addEventListener("click", function () {
        var p = a.getAttribute("data-open").split("|");
        S.recent = [{ c: p[0], e: p[1] }].concat((S.recent || []).filter(function (r) { return !(r.c === p[0] && r.e === p[1]); })).slice(0, 6);
        save();
      });
    });
  }

  function route() {
    var h = (location.hash || "#home").slice(1).split("/");
    if (h[0] === "course") course(h[1]);
    else if (h[0].indexOf("sem-") === 0) { home(); var el = document.getElementById(h[0]); if (el) el.scrollIntoView(); return; }
    else home();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  function applyTheme() { if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
  document.getElementById("theme").onclick = function () {
    var dark = S.theme === "dark" || (S.theme === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    S.theme = dark ? "light" : "dark"; save(); applyTheme();
  };
  applyTheme();
  route();
})();
