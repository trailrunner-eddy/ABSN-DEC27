/* Normal lab reference ranges used in every question bank on the site.

   The NCLEX shows a normal range beside every lab result, so our questions do too.
   Whenever a question's stem, options, rationale, triage card, or findings card
   gives a lab RESULT (a number), write the range right after it, in this format:

       K⁺ 6.4 mEq/L (normal 3.5–5.0)
       pH 7.29 (normal 7.35–7.45) with PaCO₂ 68 mm Hg (normal 35–45)
       aPTT of 115 seconds (normal 30–40; control 30 seconds)

   Use the "normal" text from the table below, word for word, so every course agrees.
   Ranges follow standard NCLEX/ATI values and the course materials (where a course
   teaches its own number, e.g. Nutrition's prealbumin or Patho's PaO₂, that wins).
   Thresholds and criteria ("glucose <70", "creatinine ↑ 0.3 in 48 hr") are not
   results, so they don't need a range.

   Every page loads this file (after its other scripts) so ranges never break across
   lines on a phone. New pages: add <script src="…/js/labs.js"></script>.

   Check every bank with:  node tools/check-labs.js
   It lists any lab result that is missing its range or uses a different range.
   To add a lab: add a row here. names = how questions write it (all-lowercase names
   match any case; abbreviations match exact case); normal = what we print. */
(function (root) {
  var LAB_RANGES = [
    // Electrolytes
    { lab: "Potassium",   names: ["potassium", "K⁺", "K+"],               unit: "mEq/L", normal: "3.5–5.0" },
    { lab: "Sodium",      names: ["sodium", "Na⁺", "Na+"],                unit: "mEq/L", normal: "135–145" },
    { lab: "Calcium",     names: ["calcium", "Ca²⁺", "Ca2+"],             unit: "mg/dL", normal: "9.0–10.5" },
    { lab: "Magnesium",   names: ["magnesium", "Mg²⁺", "Mg2+"],           unit: "mg/dL", normal: "1.5–2.5" },
    { lab: "Phosphorus",  names: ["phosphorus", "phosphate"],            unit: "mg/dL", normal: "3.0–4.5" },
    { lab: "Chloride",    names: ["chloride", "Cl⁻"],                    unit: "mEq/L", normal: "98–106" },
    // Glucose
    { lab: "Glucose",     names: ["glucose", "blood sugar"], unit: "mg/dL", normal: "70–99" },
    { lab: "Hemoglobin A1C", names: ["A1C", "A1c", "HbA1c"],    unit: "%",     normal: "less than 5.7%" },
    // Kidney
    { lab: "BUN",         names: ["BUN", "blood urea nitrogen"],         unit: "mg/dL", normal: "10–20" },
    { lab: "Creatinine",  names: ["creatinine"],                      unit: "mg/dL", normal: "0.6–1.2" },
    { lab: "eGFR",        names: ["eGFR", "GFR"],                           unit: "mL/min/1.73 m²", normal: "90 or higher" },
    // Blood counts
    { lab: "Hemoglobin",  names: ["hemoglobin", "Hgb"],                  unit: "g/dL",  normal: "female 12–16, male 14–18" },
    { lab: "Hematocrit",  names: ["hematocrit", "Hct"],                  unit: "%",     normal: "female 37–47%, male 42–52%" },
    { lab: "WBC",         names: ["WBC", "white blood cell count"],          unit: "/mm³",  normal: "5,000–10,000" },
    { lab: "Platelets",   names: ["platelet count", "platelets", "PLT"],       unit: "/mm³",  normal: "150,000–400,000" },
    // Clotting
    { lab: "INR",         names: ["INR"],                             unit: "",      normal: "0.8–1.1" },   // + "; goal on warfarin 2–3"
    { lab: "aPTT",        names: ["aPTT", "PTT"],                           unit: "seconds", normal: "30–40" },   // + "; control …"
    { lab: "PT",          names: ["PT"],                              unit: "seconds", normal: "11–12.5" },
    // ABGs
    { lab: "pH",          names: ["pH"],                              unit: "",      normal: "7.35–7.45" },
    { lab: "PaCO₂",       names: ["PaCO₂", "PaCO2"],                     unit: "mm Hg", normal: "35–45" },
    { lab: "PaO₂",        names: ["PaO₂", "PaO2"],                       unit: "mm Hg", normal: "75–100" },
    { lab: "HCO₃⁻",       names: ["HCO₃⁻", "HCO3", "bicarbonate"],        unit: "mEq/L", normal: "22–26" },
    // Nutrition, liver, lipids
    { lab: "Albumin",     names: ["albumin"],              unit: "g/dL",  normal: "3.5–5.0" },
    { lab: "Prealbumin",  names: ["prealbumin"],                      unit: "mg/dL", normal: "15–36" },
    { lab: "Total cholesterol", names: ["total cholesterol"],    unit: "mg/dL", normal: "less than 200" },
    { lab: "LDL",         names: ["LDL"],                             unit: "mg/dL", normal: "less than 100" },
    { lab: "HDL",         names: ["HDL"],                             unit: "mg/dL", normal: "female greater than 50" }, // male: "male greater than 40"
    { lab: "Triglycerides", names: ["triglycerides", "TG"],             unit: "mg/dL", normal: "less than 150" },
    { lab: "Ammonia",     names: ["ammonia"],                         unit: "mcg/dL", normal: "10–80" },
    { lab: "Bilirubin",   names: ["bilirubin"],            unit: "mg/dL", normal: "0.3–1.0" },
    // Cardiac and drug levels
    { lab: "BNP",         names: ["BNP"],                             unit: "pg/mL", normal: "less than 100" },
    { lab: "Troponin I",  names: ["troponin"],                 unit: "ng/mL", normal: "less than 0.03" },
    { lab: "Digoxin level", names: ["digoxin level"],            unit: "ng/mL", normal: "0.5–2.0" },
    { lab: "Lithium level", names: ["lithium level"],            unit: "mEq/L", normal: "0.6–1.2" }
  ];
  root.LAB_RANGES = LAB_RANGES;
  if (typeof module !== "undefined" && module.exports) { module.exports = LAB_RANGES; return; }

  /* In the browser: keep each range on one line on phones, so "(normal 9.0–10.5)"
     never splits into "9.0–" and "10.5". It glues the numbers to the dash with an
     invisible word joiner. Text only; it never changes what a question says. */
  if (typeof document === "undefined" || root.__labsLoaded) return;
  root.__labsLoaded = true;
  var RANGE = /\(normal [^)]*/g, DASH = /(\d%?)[–-](\d)/g;
  function fix(node) {
    var t = node.nodeValue;
    if (!t || t.indexOf("(normal ") < 0) return;
    var nt = t.replace(RANGE, function (r) { return r.replace(DASH, "$1\u2060–\u2060$2"); });
    if (nt !== t) node.nodeValue = nt;
  }
  function scan(el) {
    if (!el) return;
    if (el.nodeType === 3) { fix(el); return; }
    if (el.nodeType !== 1 && el.nodeType !== 11) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) fix(n);
  }
  function start() {
    scan(document.body);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === "characterData") fix(m.target);
        else for (var i = 0; i < m.addedNodes.length; i++) scan(m.addedNodes[i]);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})(typeof window !== "undefined" ? window : this);
