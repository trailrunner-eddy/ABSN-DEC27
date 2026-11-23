/* Drug name decoder for the Pharm Final: the suffix-to-class chart for this exam's drugs.
   stem = the part of the generic name that signals the class; hit = what to look for
   (lowercase); drugs = this exam's drugs that use it; more = same stem, not on this exam.
   Stems for the Modules 5–8 drugs are copied from the Exam 2 decoder (bottom of this file).
   window.SUFFIXES (for the Name Game and Memory Aids) is rebuilt from STEMS at the end. */
window.STEMS = [
  /* Endocrine */
  { stem: "-gliflozin", hit: ["gliflozin"], cls: "SGLT2 inhibitor", drugs: ["empagliflozin"], more: "dapagliflozin, canagliflozin", tip: "\"Glucose flows in\" the urine: UTIs, yeast infections, dehydration. Bonus: lowers CV death in T2DM." },
  { stem: "gli-, gly- (…-ide)", hit: ["glipiz", "glybur", "glimep"], cls: "Sulfonylurea", drugs: ["glipizide"], more: "glyburide, glimepiride", tip: "Squeezes insulin out of the pancreas, so hypoglycemia is the #1 risk." },
  { stem: "-formin", hit: ["formin"], cls: "Biguanide", drugs: ["metformin"], more: "", tip: "The \"form\" is in the liver: it blocks glucose formation (gluconeogenesis). GI upset; lactic acidosis." },
  { stem: "insulin", hit: ["insulin"], cls: "Insulin: the first word gives the speed", drugs: ["insulin-lispro", "regular-insulin", "nph-insulin", "insulin-glargine"], more: "aspart, glulisine (rapid); detemir, degludec (long)", tip: "Fastest to slowest: Lispro, Regular, NPH, Glargine (\"Little Rabbits Nap Gently\"). Only NPH is cloudy; only regular goes IV." },
  { stem: "levo-…-thyroxine", hit: ["thyrox", "thyron"], cls: "Thyroid hormone replacement", drugs: ["levothyroxine"], more: "liothyronine (T3)", tip: "Thyroxine = T4. Empty stomach every morning; too much looks like hyperthyroidism." },
  { stem: "-imazole, thio-", hit: ["imazole", "thiour"], cls: "Thioamide antithyroid", drugs: ["methimazole"], more: "carbimazole, propylthiouracil (PTU)", tip: "Not the antifungal -conazoles (ketoconazole). Watch for agranulocytosis: sore throat, fever." },
  /* Hematologic & cancer */
  { stem: "-phosphamide", hit: ["phosphamide"], cls: "Alkylating agent (nitrogen mustard)", drugs: ["cyclophosphamide"], more: "ifosfamide", tip: "Its breakdown product burns the bladder: hemorrhagic cystitis, so push fluids." },
  { stem: "-rubicin", hit: ["rubicin"], cls: "Anthracycline (antitumor antibiotic)", drugs: ["doxorubicin"], more: "daunorubicin, epirubicin, idarubicin", tip: "\"Ruby\" red: red drug, red urine, and it hurts the red pump (cardiotoxicity)." },
  { stem: "vin-", hit: ["vincr", "vinbl", "vinor"], cls: "Vinca alkaloid (mitotic inhibitor)", drugs: ["vincristine"], more: "vinblastine, vinorelbine", tip: "Vines wrap the nerves: peripheral neuropathy and constipation. IV only." },
  { stem: "-trexate, -trexed", hit: ["trexate", "trexed"], cls: "Antifolate antimetabolite", drugs: ["methotrexate"], more: "pemetrexed, pralatrexate", tip: "Folic acid antagonist: watch counts and liver, no alcohol, no pregnancy." },
  { stem: "-ifen, -ifene", hit: ["oxifen", "mifen"], cls: "SERM / estrogen receptor blocker", drugs: ["tamoxifen"], more: "raloxifene, toremifene", tip: "Blocks estrogen in the breast: hot flashes, plus clot (DVT/PE) risk." },
  { stem: "interferon", hit: ["interferon"], cls: "Biologic response modifier", drugs: ["interferon-alfa-2a"], more: "peginterferon, interferon beta (MS)", tip: "It interferes with cancer by boosting immunity: flu-like symptoms, myelosuppression, depression." },
  { stem: "-grastim", hit: ["grastim"], cls: "Colony-stimulating factor (neutrophils)", drugs: ["filgrastim"], more: "pegfilgrastim; sargramostim (-gramostim)", tip: "\"Grows\" neutrophils. Bone pain; LUQ or shoulder pain = splenic rupture." },
  { stem: "-poetin", hit: ["poetin"], cls: "Erythropoiesis-stimulating agent", drugs: ["epoetin-alfa"], more: "darbepoetin", tip: "\"Poetin\" from erythropoiesis (making red cells): watch BP and clots." },
  /* Neurological */
  { stem: "-azepam", hit: ["azepam", "azolam"], cls: "Benzodiazepine", drugs: ["diazepam", "lorazepam"], more: "clonazepam, temazepam; midazolam, alprazolam (-azolam)", tip: "GABA up, breathing down: check RR; flumazenil reverses. Taper." },
  { stem: "-azepine", hit: ["azepine"], cls: "Sodium channel blocker anticonvulsant (iminostilbene)", drugs: ["carbamazepine"], more: "oxcarbazepine", tip: "-azepINE is not -azePAM: carbamazepine is not a benzo. Watch for SJS and suicidal thoughts." },
  { stem: "-toin", hit: ["toin"], cls: "Hydantoin anticonvulsant", drugs: ["phenytoin"], more: "fosphenytoin", tip: "Gums grow (gingival hyperplasia), so brush and floss. Level 10–20 mcg/mL." },
  { stem: "valpro-", hit: ["valpro"], cls: "Valproate anticonvulsant", drugs: ["valproic-acid"], more: "divalproex sodium", tip: "Liver, pancreas, platelets, ammonia. Don't stop abruptly." },
  { stem: "-gabalin, gaba-", hit: ["gabalin", "gabapen"], cls: "Gabapentinoid (GABA analog)", drugs: ["pregabalin"], more: "gabapentin", tip: "Cleared by the kidneys: lower the dose when CrCl is under 60 mL/min." },
  { stem: "-dopa", hit: ["dopa"], cls: "Dopaminergic (dopamine precursor)", drugs: ["carbidopa-levodopa"], more: "methyldopa (an antihypertensive, a look-alike)", tip: "Feeds the brain dopamine: nausea, orthostatic hypotension, hallucinations." },
  { stem: "-oxetine", hit: ["oxetine"], cls: "Reuptake inhibitor antidepressant (SNRI or SSRI)", drugs: ["duloxetine"], more: "fluoxetine, paroxetine (SSRIs)", tip: "Duloxetine is the SNRI that also treats nerve pain. Serotonin syndrome; no MAOIs." },
  { stem: "-clofen, -lofen", hit: ["clofen"], cls: "Muscle relaxant (GABA-B agonist)", drugs: ["baclofen"], more: "", tip: "Only one drug uses it, so think \"back off, spasm.\" Never stop abruptly." },
  /* Prior: Modules 1–3 */
  { stem: "-sone, -olone", hit: ["sone", "olone"], cls: "Corticosteroid", drugs: ["prednisone"], more: "hydrocortisone, dexamethasone, methylprednisolone", tip: "Raises glucose, lowers K⁺, hides infection. Morning with food; taper." },
  { stem: "-purinol", hit: ["purinol"], cls: "Xanthine oxidase inhibitor", drugs: ["allopurinol"], more: "", tip: "Purines make uric acid; -purinol stops it. Push fluids; stop for rash." },
  { stem: "-terol", hit: ["terol"], cls: "Beta2 agonist bronchodilator", drugs: ["albuterol"], more: "levalbuterol (short); salmeterol, formoterol (long)", tip: "Albuterol is the short-acting rescue inhaler: tremor and tachycardia." },
  { stem: "-mycin", hit: ["mycin"], cls: "Antibiotic (from Streptomyces; not one class)", drugs: ["vancomycin"], more: "erythromycin (macrolide), clindamycin", tip: "Vancomycin is a glycopeptide: slow infusion, kidneys and ears." }
];
window.NO_STEM = [
  { drug: "glucagon", hook: "The hormone's own name. \"Glucagon = glucose gone? Get it back\": rescue for severe lows; turn the client on their side." },
  { drug: "rai-131", hook: "The name is the drug: radioactive iodine. No iodine 7 days before; permanent, so expect hypothyroidism." },
  { drug: "dantrolene", hook: "Peripherally acting: works in the muscle. \"Dan treats the liver badly\": monitor LFTs and RUQ pain. IV for malignant hyperthermia." },
  { drug: "morphine", hook: "Named for Morpheus, the god of dreams: sedation and slowed breathing. Naloxone reverses it." },
  { drug: "diphenhydramine", hook: "First-generation antihistamine: drowsy and dry (anticholinergic). Falls in older adults." }
];

/* ===== Modules 5–8: copied from the Exam 2 site (nura350/exam2/js), categories remapped ===== */
window.STEMS = window.STEMS.concat([
  {
    "stem": "-statin",
    "hit": [
      "statin"
    ],
    "cls": "Statin (HMG-CoA reductase inhibitor)",
    "drugs": [
      "atorvastatin"
    ],
    "more": "simvastatin, rosuvastatin",
    "tip": "Statins slow the liver's cholesterol factory. Watch liver labs and muscle pain."
  },
  {
    "stem": "-olol",
    "hit": [
      "olol",
      "ilol"
    ],
    "cls": "Beta blocker",
    "drugs": [
      "metoprolol"
    ],
    "more": "atenolol, propranolol, carvedilol (-ilol)",
    "tip": "Slows the pump: check apical pulse and BP first; may mask hypoglycemia."
  },
  {
    "stem": "nitr-",
    "hit": [
      "nitro"
    ],
    "cls": "Nitrate (vasodilator)",
    "drugs": [
      "nitroglycerin"
    ],
    "more": "isosorbide mononitrate",
    "tip": "Headache and low BP; never with sildenafil (-afil)."
  },
  {
    "stem": "-teplase",
    "hit": [
      "teplase"
    ],
    "cls": "Thrombolytic (tPA, clot buster)",
    "drugs": [
      "alteplase"
    ],
    "more": "reteplase, tenecteplase",
    "tip": "\"-ase\" enzymes break things down: this one dissolves the clot. Highest bleeding risk."
  },
  {
    "stem": "-semide",
    "hit": [
      "semide"
    ],
    "cls": "Loop diuretic",
    "drugs": [
      "furosemide"
    ],
    "more": "torsemide (bumetanide breaks the pattern)",
    "tip": "Strongest diuretic: big K⁺ loss, ototoxicity with fast IV push."
  },
  {
    "stem": "-thiazide",
    "hit": [
      "thiazide"
    ],
    "cls": "Thiazide diuretic",
    "drugs": [
      "hydrochlorothiazide"
    ],
    "more": "chlorothiazide",
    "tip": "Lowers K⁺, raises glucose, uric acid, and calcium."
  },
  {
    "stem": "estr-",
    "hit": [
      "estr"
    ],
    "cls": "Estrogen",
    "drugs": [
      "estradiol"
    ],
    "more": "ethinyl estradiol (in most pills)",
    "tip": "Clot risk (DVT, PE, stroke), worse with smoking."
  },
  {
    "stem": "-setron",
    "hit": [
      "setron"
    ],
    "cls": "Antiemetic (5-HT3 blocker)",
    "drugs": [
      "ondansetron"
    ],
    "more": "granisetron",
    "tip": "Blocks serotonin's vomiting signal. Watch for QT prolongation."
  }
]);
window.NO_STEM = window.NO_STEM.concat([
  {
    "drug": "warfarin",
    "hook": "Vitamin K antagonist. Lab is PT/INR; antidote vitamin K; keep vitamin K intake steady."
  },
  {
    "drug": "digoxin",
    "hook": "\"Dig\" from digitalis (foxglove). Pulse under 60, hold; low K⁺ raises toxicity."
  },
  {
    "drug": "metoclopramide",
    "hook": "Dopamine blocker that speeds the gut. Watch for tardive dyskinesia."
  },
  {
    "drug": "calcium-carbonate",
    "hook": "The name is the chemistry: a calcium salt that neutralizes acid. Constipation, kidney stones."
  }
]);
window.SUFFIXES = window.STEMS.map(function (s) {
  var names = s.drugs.map(function (id) { var d = (window.DRUGS || []).filter(function (x) { return x.id === id; })[0]; return d ? d.name.toLowerCase() : id; });
  return [s.stem, s.cls, names.join(", ")];
});
