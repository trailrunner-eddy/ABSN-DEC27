/* Joins Exam 1 + Exam 2 + the Final's new content into one cumulative guide (see js/stash.js).
   Order matters: saved progress is stored by list position, so parts always join in the same order
   (Exam 1, Exam 2, Final) and new Final items are added at the end of the Final's own lists. */
(function () {
  var P = window.HA_PARTS || [];
  var fin = P[P.length - 1] || {};
  function cat(k) { return P.reduce(function (a, p) { return a.concat(p[k] || []); }, []); }
  function obj(k) { var o = {}; P.forEach(function (p) { var v = p[k] || {}; Object.keys(v).forEach(function (x) { o[x] = v[x]; }); }); return o; }

  window.GUIDE = fin.GUIDE;

  /* Systems in module order, labelled with the final exam blueprint. */
  var bp = {}; (fin.GUIDE.blueprint || []).forEach(function (b) { bp[b[0]] = b[1]; });
  var seen = {};
  window.SYSTEMS = cat("SYSTEMS").filter(function (s) { if (seen[s.id]) return false; seen[s.id] = 1; return true; }).map(function (s) {
    var c = Object.assign({}, s);
    if (bp[c.id]) c.weight = bp[c.id];
    if (c.id === "repro") { c.name = "Reproductive, GU & Rectal"; c.short = "Repro & GU"; }
    if (c.id === "msk") c.soon = true;
    return c;
  });

  window.DISORDERS = cat("DISORDERS");
  window.EMPHASIS = fin.EMPHASIS;
  window.CRITICAL_THINKING = fin.CRITICAL_THINKING;
  window.STRATEGY = fin.STRATEGY;
  window.EMERGENCIES = cat("EMERGENCIES");
  window.LOOKALIKES = cat("LOOKALIKES");
  window.FLASHCARDS = cat("FLASHCARDS");
  /* The Final's own questions are marked so the quiz can offer a "New for the final" set. */
  window.QUESTIONS = P.reduce(function (a, p) {
    return a.concat((p.QUESTIONS || []).map(function (q) { return p === fin ? Object.assign({ fin: true }, q) : q; }));
  }, []);
  window.SORTS = cat("SORTS");
  window.CHAINS = cat("CHAINS");
  window.TRIAGE = cat("TRIAGE");
  window.FINDINGS = cat("FINDINGS");
  window.SECTIONS = obj("SECTIONS");
  window.PLAIN = obj("PLAIN");
  window.DIAGRAMS = cat("DIAGRAMS");

  /* Slide decks: renumber each part's deck index; figures point back to their own guide's folder. */
  var decks = [], slides = [], figs = [];
  P.forEach(function (p) {
    var off = decks.length;
    decks = decks.concat(p.SLIDE_DECKS || []);
    (p.SLIDES || []).forEach(function (s) { slides.push(Object.assign({}, s, { deck: s.deck + off })); });
    (p.FIGURES || []).forEach(function (f) { figs.push(Object.assign({}, f, { f: p.figDir + f.f })); });
  });
  window.SLIDE_DECKS = decks; window.SLIDES = slides; window.FIGURES = figs;
})();
