/* Study guide for the Pharm Final, following the instructor's "N350 Final Exam Study Guide"
   (Modules 1–12, cumulative). Plain rows are the instructor's takeaways, word for word
   where possible. "also" rows add context: ATI = ATI Engage medication tables,
   LECTURE = recorded lectures and slides, ADDED = study aid, CORRECTED = a likely error.
   added: true = in play (it has a lecture drug table) but the instructor guide skipped it.
   noGuide: true = a prior-module drug the guide lists by name; no Exam 1 study guide was
   provided, so its rows come from the ATI table.
   The "prior2" section is filled from the Exam 2 guide (nura350/exam2/js/guide.js) at the
   bottom of this file, since the Final guide says to use the previous study guides for Modules 1–8. */
window.GUIDE = {
  order: ["endo", "heme", "neuro", "prior1", "prior2"],
  tips: "The final is cumulative: Modules 1–12. The instructor's PowerPoint covers the new content from Modules 10–12; use the previous study guides for Modules 1–8. Eighteen medications from previous modules are named, and 8 dosage calculation questions are \"similar questions to previous exams.\"",
  breakdown: [["Module 1", 3], ["Module 2", 3], ["Module 3", 3], ["Module 5", 5], ["Module 6", 3], ["Module 7", 3], ["Module 8", 3], ["Module 10", 15], ["Module 11", 14], ["Module 12", 15], ["Dosage calculation", 8]],
  sections: [
    { id: "endo", name: "Endocrine Meds", sys: "endo", icon: "🍬", drugs: [
      { drug: "glipizide", title: "Glipizide", brand: "Glucotrol", cls: "Sulfonylurea (gli-…-ide)",
        rows: [["Action", "Increases insulin secretion/sensitivity and decreases glucose release from the liver."], ["Nursing priorities", "Monitor for signs/symptoms of hypoglycemia. Monitor blood glucose."]],
        also: [["ATI", "Hold per parameters if glucose is low. Take with the first meal of the day; swallow whole."], ["ADDED", "Alcohol, beta-blockers, and sulfonamides make lows more likely; beta-blockers also hide the warning signs."]] },
      { drug: "metformin", title: "Metformin", brand: "Glucophage", cls: "Biguanide (-formin)",
        rows: [["Action", "Inhibits gluconeogenesis in the liver."], ["Administration", "Oral: typically taken daily with food and water."], ["Nursing priorities", "Monitor for nausea/vomiting."]],
        also: [["ATI", "Boxed warning: lactic acidosis. Check kidney function (GFR); contraindicated in severe renal dysfunction. Can cause vitamin B12 deficiency."], ["LECTURE", "Rarely causes hypoglycemia on its own; usually held around iodinated contrast."]] },
      { drug: "empagliflozin", title: "Empagliflozin", brand: "Jardiance", cls: "SGLT2 inhibitor (-gliflozin)",
        rows: [["Action", "Reducing glucose reabsorption and increasing glycosuria."], ["Other uses", "Lower the risk of cardiovascular death in clients with type 2 diabetes mellitus."]],
        also: [["ATI", "Sugar in the urine means UTIs, genital yeast infections, and dehydration. Watch for ketoacidosis and Fournier's gangrene."]] },
      { drug: "insulin-lispro", title: "Lispro insulin", brand: "Humalog", cls: "Rapid-acting insulin",
        rows: [["Onset", "15–30 minutes."], ["Peak", "1–3 hours."], ["Timing", "Can be used postprandial."], ["Nursing priorities", "Monitor for hypoglycemia."]],
        also: [["ATI", "Give within 15 minutes before a meal or immediately after. Duration 3–5 hours. ATI lists the peak as 0.5–3 hours."]] },
      { drug: "regular-insulin", title: "Regular insulin", brand: "Humulin R", cls: "Short-acting insulin",
        rows: [["Administration", "Administer 30 to 45 minutes prior to a meal."], ["Onset", "30 to 60 minutes."], ["Peak", "2 to 4 hours."], ["Duration", "4–12 hours."], ["Nursing priorities", "Monitor for signs and symptoms of hypoglycemia. Monitor blood glucose."]],
        also: [["ATI", "The only insulin given IV (DKA, HHS, hyperkalemia); monitor glucose and K⁺ closely when IV."], ["ADDED", "Mixing with NPH: clear (regular) before cloudy (NPH)."]] },
      { drug: "nph-insulin", title: "NPH insulin", brand: "Humulin N", cls: "Intermediate-acting insulin",
        rows: [["Onset", "1–2 hours."], ["Peak", "4–12 hours (monitor blood glucose)."], ["Administration", "Roll pen or vial. Insulin should be cloudy."]],
        also: [["ATI", "Duration 14–24 hours. Taken at night, it raises the risk of nocturnal hypoglycemia. Subcut only, never IV."]] },
      { drug: "insulin-glargine", title: "Insulin glargine", brand: "Lantus", cls: "Long-acting (basal) insulin", added: true,
        rows: [["Timing", "Onset 2–4 hours, minimal peak, duration up to 24 hours."], ["Administration", "Do not mix with other insulin formulations. Subcut once daily; rotate sites."], ["Nursing priorities", "Check blood glucose before giving; monitor for hypoglycemia."]],
        also: [["LECTURE", "Basal insulin for type 1 and type 2 diabetes and hospitalized clients."]] },
      { drug: "glucagon", title: "Glucagon", brand: "Gvoke", cls: "Hyperglycemic agent",
        rows: [["Therapeutic use", "Severe hypoglycemia."], ["Side effects", "Nausea and vomiting."], ["Nursing priorities", "Place clients on their side to prevent aspiration while unconscious. Give a complex carb as soon as the client is able."]],
        also: [["ATI", "Recheck glucose 15 minutes after. Teach family where it's kept and how to give it. Store at room temperature."]] },
      { drug: "levothyroxine", title: "Levothyroxine", brand: "Synthroid", cls: "Thyroid hormone (synthetic T4)", added: true,
        rows: [["Action", "Synthetic T4 that increases the metabolic rate of the tissues."], ["Administration", "PO on an empty stomach with a full glass of water, 30 to 60 minutes before breakfast."], ["Nursing priorities", "Monitor TSH. Check HR and BP before starting; watch for manifestations of toxicity (hyperthyroidism)."]],
        also: [["LECTURE", "Lifelong for hypothyroidism. Separate from calcium, iron, and antacids."]] },
      { drug: "methimazole", title: "Methimazole", brand: "Tapazole", cls: "Antithyroid agent (thioamide)",
        rows: [["Action", "Decreases the production of thyroid hormones."], ["Nursing assessment", "Assess client for manifestations of hypo- and hyperthyroidism. Monitor thyroid labs."], ["Expected outcomes", "Return thyroid function studies to expected values and decrease manifestations of hyperthyroidism."]],
        also: [["ATI", "Agranulocytosis: report sore throat, fever, or mouth sores. Hepatotoxicity."]] },
      { drug: "rai-131", title: "Radioactive iodine-131", brand: "", cls: "Radioactive nuclear medicine",
        rows: [["Action", "Emits radiation that permanently destroys thyroid tissue."], ["Nursing priorities", "Educate on not consuming iodine for 7 days prior to radioactive iodine-131. Monitor thyroid function."]],
        also: [["ATI", "Contraindicated in pregnancy and breastfeeding. Hypothyroidism usually develops within a year, then lifelong replacement."]] }
    ] },
    { id: "heme", name: "Hematologic/Cancer Meds", sys: "heme", icon: "🎗️", drugs: [
      { drug: "doxorubicin", title: "Doxorubicin hydrochloride", brand: "Adriamycin", cls: "Antineoplastic antibiotic: anthracycline",
        rows: [["Action", "Forms a complex with DNA, causing breakage of DNA strands and inhibition of DNA synthesis."], ["Nursing assessment", "Monitor blood cell counts (red and white blood cells) for myelosuppression. Monitor ECG for findings of cardiotoxicity."]],
        also: [["ATI", "Red urine for 1–2 days is expected. Lifetime cumulative dose limit (500 mg/m²) because of cardiomyopathy."]] },
      { drug: "vincristine", title: "Vincristine", brand: "Oncovin", cls: "Mitotic inhibitor: vinca alkaloid",
        rows: [["Administration", "IV only."], ["Class", "Mitotic inhibitor: vinca alkaloid."]],
        also: [["ATI", "Neurotoxicity (paresthesia, loss of deep tendon reflexes) and constipation. Vesicant: watch for extravasation."], ["ADDED", "\"IV only\" because intrathecal vincristine is fatal."]] },
      { drug: "methotrexate", title: "Methotrexate", brand: "Trexall", cls: "Antimetabolite (folic acid antagonist)",
        rows: [["Action", "Interferes with folic acid metabolism."], ["Nursing priorities", "Monitor for decreased RBC, WBC, leukopenia, and thrombocytopenia."], ["Education", "Avoid alcohol. Avoid pregnancy."]],
        also: [["ATI", "Hepatotoxic and teratogenic. For RA it's given once weekly. Folic acid supplements may be prescribed to decrease toxicity."]] },
      { drug: "tamoxifen", title: "Tamoxifen", brand: "Soltamox", cls: "Estrogen receptor blocker",
        rows: [["Class", "Estrogen receptor blocker."], ["Side effects", "Hot flashes, nausea, vomiting."], ["Education", "Notify provider immediately if manifestations of DVT/PE."]],
        also: [["ATI", "Also raises the risk of endometrial cancer; report abnormal vaginal bleeding. Increases warfarin's effect."]] },
      { drug: "interferon-alfa-2a", title: "Interferon alfa-2a", brand: "Roferon A", cls: "Biologic response modifier",
        rows: [["Action", "Boosts immune system against cancer cells by enhancing activity of immune cells."], ["Nursing priorities", "Monitor for side effects: myelosuppression, flu-like manifestations."]],
        also: [["ATI", "Screen for depression and suicidal ideation; baseline eye exam (retinopathy)."]] },
      { drug: "filgrastim", title: "Filgrastim", brand: "Neupogen", cls: "Colony-stimulating factor (G-CSF)",
        rows: [["Action", "Stimulates division and duplication of immature neutrophils; mature neutrophil activation."], ["Nursing assessment", "Assess vital signs. Assess for pain in the left upper quadrant (abdomen) or shoulder, and bone pain."], ["Adverse effects", "Spleen rupture. ARDS."]],
        also: [["ATI", "Not within 24 hours of chemotherapy. Refrigerate; don't shake."], ["CORRECTED", "The chemotherapy transcript once attaches splenic rupture to epoetin; the ATI table and this guide put it with filgrastim."]] },
      { drug: "epoetin-alfa", title: "Epoetin alfa", brand: "Epogen, Procrit", cls: "Erythropoiesis-stimulating agent (ESA)",
        rows: [["Action", "Stimulates cells to divide and differentiate into RBCs."], ["Nursing priorities", "Assess for allergic reactions, blood clots, hypertension, and anemia. Monitor CBC. Monitor blood pressure."]],
        also: [["ATI", "Hgb above 11 g/dL raises the risk of clots. Contraindicated with uncontrolled hypertension. Iron is often needed."]] },
      { drug: "cyclophosphamide", title: "Cyclophosphamide", brand: "Procytox", cls: "Alkylating agent: nitrogen mustard", added: true,
        rows: [["Action", "Interferes with DNA replication and RNA transcription."], ["Adverse effects", "Hemorrhagic cystitis, myelosuppression, infertility, pulmonary fibrosis."], ["Client teaching", "Adequate hydration to prevent hemorrhagic cystitis; take oral doses in the morning."]],
        also: [["ATI", "IV push diluent must be normal saline. Raises doxorubicin's cardiotoxicity."]] }
    ] },
    { id: "neuro", name: "Neuro Meds", sys: "neuro", icon: "🧠", drugs: [
      { drug: "baclofen", title: "Baclofen", brand: "Lioresal", cls: "Centrally acting muscle relaxant",
        rows: [["Class", "Centrally acting muscle relaxant."], ["Interactions", "Enhanced CNS depression with alcohol, antihistamines."], ["Nursing priorities", "Assess for drowsiness, fall risk."]],
        also: [["ATI", "Never stop abruptly (withdrawal: hallucinations, seizures). Give with food or milk."]] },
      { drug: "dantrolene", title: "Dantrolene", brand: "Dantrium", cls: "Peripherally acting muscle relaxant",
        rows: [["Class", "Peripherally acting muscle relaxant."], ["Nursing assessment", "Assess liver function: liver enzymes, RUQ pain."]],
        also: [["ATI", "IV dantrolene treats malignant hyperthermia. Report jaundice or dark urine."]] },
      { drug: "diazepam", title: "Diazepam", brand: "Valium", cls: "Benzodiazepine",
        rows: [["Class", "Benzodiazepine."], ["Nursing assessment", "Monitor respiratory and cardiovascular status."], ["Side effects", "Drowsiness, fatigue, sedation."]],
        also: [["ATI", "Antidote: flumazenil. Taper; don't stop abruptly."], ["CORRECTED", "The transcript says diazepam decreases intraocular pressure; benzodiazepines are contraindicated in narrow-angle glaucoma because they can raise it."]] },
      { drug: "pregabalin", title: "Pregabalin", brand: "Lyrica", cls: "GABA analog, antiseizure",
        rows: [["Class", "GABA analog, antiseizure."], ["Nursing priorities", "Assess for behavior changes. Assess renal function."], ["Precautions", "Renal impairment (dose alteration recommended for creatinine clearance less than 60 mL/min)."]],
        also: [["ATI", "Dizziness, drowsiness, weight gain, peripheral edema. Taper over at least 1 week."]] },
      { drug: "carbamazepine", title: "Carbamazepine", brand: "Tegretol", cls: "Sodium channel inhibitor, anticonvulsant",
        rows: [["Class", "Sodium channel inhibitor, anticonvulsant."], ["Nursing priorities", "Monitor for suicidal thoughts. Monitor for Stevens-Johnson syndrome."], ["Contraindications", "History of bone marrow depression."]],
        also: [["ATI", "Also treats trigeminal neuralgia. Check CBC and sodium. Avoid grapefruit."]] },
      { drug: "carbidopa-levodopa", title: "Carbidopa and levodopa", brand: "Sinemet", cls: "Dopaminergic",
        rows: [["Therapeutic action", "Provides dopamine in the CNS, reversing manifestations of Parkinson's disease."], ["Side effects", "Nausea, dizziness, headache, sleepiness, orthostatic hypotension."]],
        also: [["ATI", "Avoid high-protein meals near doses. Watch for hallucinations and psychosis, especially in older adults."]] },
      { drug: "phenytoin", title: "Phenytoin", brand: "Dilantin", cls: "Sodium channel inhibitor",
        rows: [["Class", "Sodium channel inhibitor."], ["Education", "Maintain good dental hygiene. Do not take within 2–3 hours of an antacid."]],
        also: [["LECTURE", "Narrow therapeutic range 10–20 mcg/mL; toxicity = nystagmus, ataxia, slurred speech."]] },
      { drug: "valproic-acid", title: "Valproic acid", brand: "Depakene", cls: "Antiseizure, GABA-augmenting agent",
        rows: [["Action", "Increases levels of GABA to suppress seizure activity."], ["Nursing priorities", "Monitor hepatic enzymes, ammonia, CBC, platelet counts, and bleeding times. Assess for liver manifestations."], ["Education", "Do not stop abruptly."]],
        also: [["ATI", "Pancreatitis and teratogenicity. Therapeutic level 50–100 mcg/mL."]] },
      { drug: "lorazepam", title: "Lorazepam", brand: "Ativan", cls: "Benzodiazepine, GABA receptor agonist",
        rows: [["Class", "Benzodiazepine, GABA receptor agonist."], ["Side effects", "Dizziness, drowsiness, lethargy."], ["Nursing priorities", "Assess respiratory status."], ["Education", "Avoid alcohol and other CNS depressants."]],
        also: [["ATI", "First-line IV drug for status epilepticus; IV no faster than 2 mg/min."]] },
      { drug: "duloxetine", title: "Duloxetine", brand: "Cymbalta", cls: "SNRI", added: true,
        rows: [["Action", "Inhibits reuptake of serotonin and norepinephrine; centrally mediated pain inhibitor."], ["Therapeutic use", "Neuropathic and chronic musculoskeletal pain (diabetic neuropathy, fibromyalgia); depression; anxiety."], ["Nursing priorities", "Monitor for suicidal thoughts and serotonin syndrome; monitor BP and liver function."]],
        also: [["CORRECTED", "The neuro part 1 transcript calls it \"noradrenergic blocking\"; it blocks the reuptake of norepinephrine, which raises it."]] }
    ] },
    { id: "prior1", name: "Prior Modules 1–3", sys: "prior1", icon: "🫁", drugs: [
      { drug: "morphine", title: "Morphine", brand: "MS Contin", cls: "Opioid agonist", noGuide: true,
        rows: [["Nursing assessment", "Assess BP, pulse, and respirations before and during treatment. Reassess pain 1 hr after PO/IM or 20 min after IV."], ["Adverse effects", "Respiratory depression, hypotension, urinary retention."]],
        also: [["ADDED", "Antidote: naloxone. Constipation is expected; prevent it."]] },
      { drug: "prednisone", title: "Prednisone", brand: "", cls: "Glucocorticoid", noGuide: true,
        rows: [["Administration", "Give in the morning with food. Do not stop abruptly; taper."], ["Side and adverse effects", "Hyperglycemia, infection, poor wound healing; adrenal suppression, hypokalemia, Cushingoid features, GI bleeding."]],
        also: [] },
      { drug: "allopurinol", title: "Allopurinol", brand: "Zyloprim", cls: "Xanthine oxidase inhibitor", noGuide: true,
        rows: [["Therapeutic use", "Gout and uric acid stones (prevention); tumor lysis syndrome with chemotherapy."], ["Client teaching", "Drink at least 3,000 mL of fluid daily, follow a low-purine diet, take after meals, report any rash."]],
        also: [["ADDED", "Ties to the chemo unit: given before chemotherapy to prevent tumor lysis syndrome."]] },
      { drug: "vancomycin", title: "Vancomycin", brand: "Vancocin", cls: "Glycopeptide antibacterial", noGuide: true,
        rows: [["Administration", "IV over more than 60 minutes; PO for C. difficile."], ["Adverse effects", "Nephrotoxicity, ototoxicity, vancomycin flushing syndrome."]],
        also: [] },
      { drug: "albuterol", title: "Albuterol", brand: "Proventil", cls: "Short-acting beta2 agonist", noGuide: true,
        rows: [["Action", "Binds beta2 receptors in bronchial smooth muscle, causing bronchodilation."], ["Side and adverse effects", "Tremor, palpitations, nervousness; paradoxical bronchospasm, hypokalemia."]],
        also: [] },
      { drug: "diphenhydramine", title: "Diphenhydramine", brand: "Benadryl", cls: "Antihistamine (H1 blocker)", noGuide: true,
        rows: [["Side effects", "Drowsiness, dry mouth, urinary retention, constipation."], ["Precautions", "Avoid in older adults (falls, delirium); paradoxical excitation in children."]],
        also: [["ADDED", "Ties to the neuro unit: an antihistamine plus baclofen means extra CNS depression."]] }
    ] },
    { id: "prior2", name: "Prior Modules 5–8", sys: "prior2", icon: "❤️", drugs: [] }
  ],
  added: ["insulin-glargine", "levothyroxine", "cyclophosphamide", "duloxetine"],
  hy: {
    labs: [
      ["Blood glucose (normal 70–99 mg/dL) and HbA1c", "All four insulins, glipizide, metformin, empagliflozin, glucagon; raised by prednisone"],
      ["TSH (normal 0.4–4.0 mIU/L) and free T4", "Levothyroxine, methimazole, radioactive iodine-131"],
      ["CBC: WBC/ANC, Hgb/Hct, platelets", "Doxorubicin, vincristine, methotrexate, cyclophosphamide, interferon, filgrastim (ANC), epoetin (Hgb), carbamazepine, valproic acid, methimazole (agranulocytosis)"],
      ["Liver enzymes", "Dantrolene, valproic acid, methotrexate, carbamazepine, duloxetine, methimazole"],
      ["Ammonia and bleeding times", "Valproic acid"],
      ["Renal function (creatinine, CrCl, GFR)", "Pregabalin (dose change if CrCl under 60 mL/min), metformin, empagliflozin, vancomycin, methotrexate"],
      ["Drug levels", "Phenytoin 10–20 mcg/mL, carbamazepine 4–12 mcg/mL, valproic acid 50–100 mcg/mL, digoxin 0.5–2.0 ng/mL, vancomycin trough, warfarin by INR (goal 2–3)"],
      ["ECG and BP", "Doxorubicin (ECG for cardiotoxicity), epoetin (BP), duloxetine (BP), levothyroxine (HR)"],
      ["Potassium (normal 3.5–5.0 mEq/L)", "Insulin, furosemide, HCTZ, albuterol, and prednisone lower it; low K⁺ raises digoxin toxicity"]
    ],
    updown: { title: "🍬 Blood glucose: which way?", upLabel: "Raises glucose", downLabel: "Lowers glucose",
      up: ["Glucagon (on purpose)", "Prednisone", "Albuterol", "Phenytoin", "Interferon alfa-2a", "Hydrochlorothiazide"],
      down: ["Insulin lispro, regular, NPH, glargine", "Glipizide", "Empagliflozin (glucose out in urine)", "Metformin (rarely low on its own)"],
      danger: "Metoprolol and other beta-blockers hide the shaky, racing-heart warning signs of hypoglycemia, so a client on insulin or glipizide may only show sweating and confusion." },
    hold: [
      ["Insulin, glipizide", "Check blood glucose first; hold for a low per parameters and make sure food is coming."],
      ["Benzodiazepines, baclofen, morphine", "Respiratory rate, sedation level, and fall risk first."],
      ["Filgrastim", "Not within 24 hours of chemotherapy."],
      ["Epoetin alfa", "Hold for uncontrolled BP or Hgb above 11 g/dL."],
      ["Metformin", "Renal function; usually held around iodinated contrast."],
      ["Levothyroxine", "Hold and report chest pain or a racing heart (too much hormone)."],
      ["Metoprolol, digoxin", "Pulse first (from Exam 2)."]
    ],
    combos: [
      "Benzodiazepines + opioids + alcohol: additive CNS and respiratory depression (diazepam, lorazepam, morphine, baclofen, pregabalin).",
      "Baclofen + antihistamines (diphenhydramine): enhanced CNS depression, from the study guide.",
      "Duloxetine + MAOIs (or other serotonergic drugs): serotonin syndrome. Wait 14 days after an MAOI.",
      "Carbidopa/levodopa + MAOIs: hypertensive crisis.",
      "Doxorubicin + cyclophosphamide: more cardiotoxicity.",
      "Phenytoin + antacids: separate by 2–3 hours, from the study guide.",
      "Warfarin + tamoxifen, levothyroxine, valproic acid, or glucagon: more bleeding; watch the INR.",
      "Methotrexate + NSAIDs or aspirin: methotrexate toxicity."
    ],
    boxes: [
      ["🤰 Avoid in pregnancy", "Methotrexate (absolute), radioactive iodine-131, valproic acid, phenytoin, diazepam, cyclophosphamide, doxorubicin, vincristine, tamoxifen, interferon, empagliflozin, and warfarin. Methimazole is avoided in the first trimester."],
      ["🦠 Myelosuppression: infection and bleeding precautions", "Doxorubicin, vincristine, methotrexate, cyclophosphamide, interferon, and RAI-131. Filgrastim and epoetin are given to rebuild counts. Teach: avoid crowds, wash hands, soft toothbrush, report fever."],
      ["🧠 Never stop abruptly", "Baclofen, diazepam, lorazepam, phenytoin, carbamazepine, valproic acid, pregabalin, duloxetine, prednisone, and metoprolol."],
      ["💭 Watch for suicidal thoughts", "Carbamazepine, pregabalin, valproic acid, phenytoin, duloxetine, and interferon alfa-2a."]
    ]
  },
  notes: [
    ["Question formats", "The Final guide doesn't say which formats to expect, so the practice bank defaults to NCLEX-style: mostly multiple choice and select all that apply, plus a few Next Gen items (matrix, drop-down, select N) and fill-in-the-blank dosage calculations, which is how the NCLEX asks math."],
    ["Lispro peak", "The guide says lispro peaks at 1–3 hours; the ATI table says 0.5–3 hours. They overlap, so learn the guide's number for the exam."],
    ["Metformin timing", "The guide says \"daily with food and water\"; the ATI table says with the evening meal. Either way, give it with food to limit GI upset."],
    ["Glucagon follow-up", "The guide says to give a complex carb as soon as the client is able. ATI adds a simple carbohydrate first once the client can swallow, then a complex one to keep glucose up."],
    ["Splenic rupture", "One spot in the chemotherapy transcript attaches splenic rupture to epoetin. It belongs to filgrastim, as the guide and ATI table say.", "CORRECTED"],
    ["Diazepam and eye pressure", "The neuro transcript says diazepam decreases intraocular pressure. Benzodiazepines can raise it, which is why narrow-angle glaucoma is a contraindication.", "CORRECTED"],
    ["Modules 1–3 drugs", "No Exam 1 study guide was provided, so morphine, prednisone, allopurinol, vancomycin, albuterol, and diphenhydramine are built from the Exam 1 ATI drug tables and nothing on their cards is highlighted."],
    ["Modules 5–8 drugs", "These twelve drugs use the Exam 2 study guide (the guide says to use previous study guides), so their highlights are the Exam 2 takeaways."],
    ["Dosage calculation", "Eight questions, \"similar to previous exams.\" Practice the 🧮 Dosage calc set here, then the full Med Math & IV Rates trainer."]
  ]
};

/* ===== Modules 5–8: copied from the Exam 2 site (nura350/exam2/js), categories remapped ===== */
window.GUIDE.sections.filter(function (s) { return s.id === "prior2"; })[0].drugs = [
  {
    "drug": "metoprolol",
    "title": "Metoprolol",
    "brand": "Lopressor",
    "cls": "Beta-blocker (\"-olol\"), selective beta-1",
    "rows": [
      [
        "Therapeutic use",
        "Hypertension; angina; prevent MI; heart failure in specific cases; arrhythmias."
      ],
      [
        "Nursing priorities",
        "Monitor BP and HR; watch for heart failure: shortness of breath, edema, weight gain."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "Slows HR and lowers contractility. Watch for bradycardia, hypotension, heart block."
      ],
      [
        "ADDED",
        "Commonly held for HR <60 or SBP <100 (follow orders)."
      ]
    ]
  },
  {
    "drug": "atorvastatin",
    "title": "Atorvastatin",
    "brand": "Lipitor",
    "cls": "HMG-CoA reductase inhibitor (statin)",
    "rows": [
      [
        "Nursing priorities",
        "Assess liver function before giving. Monitor for myopathies."
      ],
      [
        "Adverse effects",
        "Myopathies, myalgia, rhabdomyolysis, acute kidney injury, hepatotoxicity."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "First line for lowering LDL. Any muscle pain → tell the provider (rhabdo risk); usually a 2-week \"statin holiday,\" then a different statin or class."
      ],
      [
        "ATI",
        "Contraindicated in pregnancy, breastfeeding, severe liver impairment."
      ]
    ]
  },
  {
    "drug": "nitroglycerin",
    "title": "Nitroglycerin",
    "brand": "Nitrostat",
    "cls": "Nitrate",
    "rows": [
      [
        "Therapeutic use",
        "Angina pectoris, hypertensive emergencies, coronary artery spasm, heart failure."
      ],
      [
        "Action",
        "Converts to nitric oxide (NO), relaxing vascular smooth muscle → vasodilation."
      ],
      [
        "Nursing priorities",
        "Monitor BP and O₂. Do not take with PDE-5 inhibitors (sildenafil)."
      ]
    ],
    "also": [
      [
        "ATI",
        "Sublingual: may repeat every 5 minutes, up to 3 doses. Headache is common. Keep tablets in the original container away from heat, air, and moisture; replace every 6 months. Change positions slowly."
      ]
    ]
  },
  {
    "drug": "warfarin",
    "title": "Warfarin",
    "brand": "Coumadin",
    "cls": "Vitamin K antagonist",
    "rows": [
      [
        "Action",
        "Interrupts the vitamin K cycle, reducing active clotting factors."
      ],
      [
        "Nursing priorities",
        "Monitor pulse and BP. Monitor PT/INR. Monitor for bleeding."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "Avoid NSAIDs; keep vitamin K intake consistent; used mainly for mechanical valves or when other anticoagulants aren't tolerated."
      ],
      [
        "ADDED",
        "Antidote: vitamin K."
      ]
    ]
  },
  {
    "drug": "alteplase",
    "title": "Alteplase",
    "brand": "Activase",
    "cls": "Thrombolytic (tPA)",
    "rows": [
      [
        "Action",
        "Breaks down fibrin and fibrinogen to dissolve the thrombus. The only true clot buster."
      ],
      [
        "Nursing priority",
        "Monitor for bleeding. Monitor aPTT, CBC, fibrinogen. Assess neurological status. Monitor BP."
      ],
      [
        "Adverse effects",
        "Hemorrhage."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "Stroke: give within 3 hours of symptom onset; worsening neuro status may mean conversion to hemorrhagic stroke. Also used for PE and clogged IV catheters."
      ]
    ]
  },
  {
    "drug": "digoxin",
    "title": "Digoxin",
    "brand": "Lanoxin",
    "cls": "Antiarrhythmic, inotropic, cardiac glycoside",
    "rows": [
      [
        "Therapeutic use",
        "Atrial fibrillation, atrial flutter."
      ],
      [
        "Nursing priority",
        "Take the apical heart rate; hold the dose if HR <60/min."
      ]
    ],
    "also": [
      [
        "ATI",
        "Toxicity: nausea, vomiting, anorexia, visual changes (yellow/green halos), arrhythmias, confusion. Low potassium increases toxicity risk (watch with furosemide/HCTZ). Also used for heart failure (stronger contractions)."
      ]
    ]
  },
  {
    "drug": "hydrochlorothiazide",
    "title": "Hydrochlorothiazide",
    "brand": "HydroDiuril",
    "cls": "Thiazide diuretic",
    "rows": [
      [
        "Action",
        "Increases sodium and water excretion by preventing sodium reabsorption in the distal tubule."
      ],
      [
        "Nursing priority",
        "BP, daily weights, edema, electrolytes."
      ],
      [
        "Adverse effects",
        "Electrolyte imbalances: hypokalemia, hyponatremia, dehydration."
      ]
    ],
    "also": []
  },
  {
    "drug": "furosemide",
    "title": "Furosemide",
    "brand": "Lasix",
    "cls": "Loop diuretic",
    "rows": [
      [
        "Therapeutic use",
        "Pulmonary edema in heart failure; edema from renal, hepatic, or heart failure."
      ],
      [
        "Nursing priority",
        "Assess potassium and BP before giving."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "Potassium follows the water out (hypokalemia); K⁺ supplements are often ordered."
      ],
      [
        "ATI",
        "Ototoxicity (tinnitus, hearing loss); teach potassium-rich foods (bananas, potatoes, citrus)."
      ]
    ]
  },
  {
    "drug": "ondansetron",
    "title": "Ondansetron",
    "brand": "Zofran",
    "cls": "Serotonin 5-HT3 receptor antagonist (\"-setron\")",
    "rows": [
      [
        "Nursing priority",
        "ECG and monitor sodium, potassium, calcium, magnesium in clients with cardiac risk factors."
      ],
      [
        "Adverse effects",
        "QT prolongation, serotonin syndrome."
      ]
    ],
    "also": [
      [
        "ATI",
        "Used for nausea from chemo, radiation, anesthesia, and pregnancy. Serotonin syndrome risk rises with SSRIs, SNRIs, triptans, fentanyl, tramadol. Contraindicated with congenital long QT syndrome."
      ]
    ]
  },
  {
    "drug": "estradiol",
    "title": "Estrogens / Estradiol",
    "brand": "",
    "cls": "Hormone, estrogen",
    "clsFix": "The instructor guide labels this \"Hormone, androgen\" (see note 2).",
    "rows": [
      [
        "Interactions",
        "Smoking increases risk of thromboembolic and cardiac adverse effects."
      ],
      [
        "Contraindications",
        "Estrogen allergy; thromboembolic disease (DVT, PE, MI); history of breast cancer; liver impairment; undiagnosed vaginal bleeding; pregnancy."
      ]
    ],
    "also": [
      [
        "LECTURE",
        "Used for contraception, menopause symptoms, HRT, gender-affirming care. Assess clot history and smoking."
      ]
    ]
  },
  {
    "drug": "calcium-carbonate",
    "title": "Calcium Carbonate",
    "brand": "Tums",
    "cls": "Antacid",
    "rows": [
      [
        "Client teaching",
        "Do not take enteric-coated medications within 1 hour."
      ],
      [
        "Nursing priority",
        "Assess presenting symptoms and the abdomen. Monitor calcium and phosphorus levels."
      ]
    ],
    "also": [
      [
        "ATI",
        "Neutralizes stomach acid. Side effect: constipation. Overuse: hypercalcemia, kidney stones, bradycardia. Take after meals and at bedtime; see the provider if needed for more than 2 weeks."
      ]
    ]
  },
  {
    "drug": "metoclopramide",
    "title": "Metoclopramide",
    "brand": "Reglan",
    "cls": "Antiemetic, dopamine receptor antagonist",
    "rows": [
      [
        "Nursing priority",
        "Assess for: Parkinsonian symptoms (trouble speaking or swallowing, shuffling gait, mask-like face); dystonia (repetitive twisting contractions, inability to move eyes); tardive dyskinesia (involuntary movements of tongue, face, neck)."
      ]
    ],
    "also": [
      [
        "ATI",
        "Speeds gastric emptying. These extrapyramidal symptoms may be irreversible. Contraindicated with GI obstruction or bleed, seizures, Parkinson's. On the Beers list (caution in older adults)."
      ]
    ]
  }
];
