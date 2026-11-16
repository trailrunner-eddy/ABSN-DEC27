/* The Final is cumulative, so its page loads the Exam 1 guide, the Exam 2 guide, and the Final's own
   new content one after another. Each guide's scripts set the same globals (window.QUESTIONS, ...),
   so after each guide loads, haStash() saves a copy and clears the globals for the next one.
   js/merge.js then joins the saved parts into one guide before the shared app starts. */
(function () {
  var KEYS = ["GUIDE", "SYSTEMS", "DISORDERS", "EMPHASIS", "CRITICAL_THINKING", "STRATEGY", "EMERGENCIES", "LOOKALIKES",
    "FLASHCARDS", "QUESTIONS", "SORTS", "CHAINS", "TRIAGE", "FINDINGS", "SECTIONS", "PLAIN", "SLIDE_DECKS", "SLIDES", "FIGURES", "DIAGRAMS"];
  window.HA_PARTS = [];
  /* name: a label for the part. figDir: where its picture-quiz figures live, relative to final/figures/. */
  window.haStash = function (name, figDir) {
    var part = { name: name, figDir: figDir || "" };
    KEYS.forEach(function (k) { part[k] = window[k]; window[k] = undefined; });
    window.HA_PARTS.push(part);
  };
})();
