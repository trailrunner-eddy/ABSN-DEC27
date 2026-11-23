/* Drug cards for the Pharm Final: MOA (technical, then "Simply put"), therapeutic use,
   drug-specific side and adverse effects, contraindications, nursing priorities, and
   client teaching (always shown).
   ==text== marks wording from the instructor's study guide ("N350 Final Exam Study Guide").
   It renders highlighted and underlined. For the twelve Exam 2 drugs, the highlights come
   from the Exam 2 study guide, which the Final guide says to use for prior modules.
   sg: extra study-guide takeaways that don't fit a field (timing, administration, class).
   The twelve Exam 2 cards are appended unchanged from nura350/exam2/js/cards.js. */
window.CARDS = {
  /* ---------- Endocrine ---------- */
  "glipizide": {
    moa: "Sulfonylurea: ==increases insulin secretion/sensitivity and decreases glucose release from the liver==.",
    moaS: "Squeezes the pancreas to release more insulin, whether or not the client has eaten.",
    use: "Lower blood glucose in type 2 diabetes.",
    se: "Hypoglycemia, weight gain, photosensitivity.",
    ae: "Hyponatremia/SIADH, cholestatic jaundice, allergic reactions.",
    contra: "Type 1 diabetes, DKA, hypersensitivity.",
    np: "==Monitor for signs/symptoms of hypoglycemia; monitor blood glucose==. Hold per parameters if glucose is low. Check HbA1c every 3 months until at goal.",
    teach: "Take with breakfast or the first meal (immediate-release 30 minutes before). Know the signs of a low (shaky, sweaty, fast heart, confused) and carry fast sugar. Avoid alcohol.",
    sg: []
  },
  "metformin": {
    moa: "Biguanide: ==inhibits gluconeogenesis in the liver==; also lowers intestinal glucose absorption and increases insulin sensitivity.",
    moaS: "Tells the liver to stop making extra sugar, so lows are rare on its own.",
    use: "First-line oral drug for type 2 diabetes; PCOS.",
    se: "==Nausea, vomiting==, diarrhea (GI upset).",
    ae: "Lactic acidosis (boxed warning); vitamin B12 deficiency.",
    contra: "Severe renal dysfunction; metabolic acidosis. Usually held around iodinated contrast.",
    np: "==Monitor for nausea/vomiting==. Check kidney function (GFR) and watch for lactic acidosis (muscle pain, weakness, rapid breathing, sleepiness).",
    teach: "==Take daily with food and water== to limit GI upset; swallow whole. Avoid alcohol. Report muscle pain, trouble breathing, or unusual sleepiness.",
    sg: [["Administration", "==Oral: typically taken daily with food and water.=="]]
  },
  "empagliflozin": {
    moa: "SGLT2 inhibitor: ==reduces glucose reabsorption and increases glycosuria== (sugar excreted in the urine).",
    moaS: "Opens a drain in the kidneys so extra sugar leaves in the urine.",
    use: "Type 2 diabetes. ==Other use: lowers the risk of cardiovascular death in clients with type 2 diabetes mellitus==; heart failure.",
    se: "UTI, genital yeast infection, dehydration, hypotension.",
    ae: "Ketoacidosis, Fournier's gangrene, severe infection, kidney injury.",
    contra: "Type 1 diabetes, dialysis, pregnancy and lactation.",
    np: "Monitor BP, renal function, electrolytes, daily weight, and glucose. Watch for dehydration and urinary or genital infection.",
    teach: "Take every morning. Stay hydrated; rise slowly. Report burning on urination, genital itching or redness, or blister-type rash.",
    sg: []
  },
  "insulin-lispro": {
    moa: "==Rapid-acting insulin==: moves glucose into cells. ==Onset 15–30 minutes, peaks at 1–3 hours==, lasts 3–5 hours.",
    moaS: "The fastest insulin, so food has to follow right away.",
    use: "Mealtime (bolus) insulin for type 1 and type 2 diabetes; ==can be used postprandial== (right after a meal).",
    se: "Hypoglycemia, injection-site lipodystrophy.",
    ae: "Hypokalemia (K⁺ shifts into cells).",
    contra: "Hypoglycemia, hypokalemia.",
    np: "==Monitor for hypoglycemia==. Check glucose before giving; give within 15 minutes of eating or immediately after.",
    teach: "Eat within 15 minutes. Rotate sites. Treat a low with 15 g fast carbs and recheck in 15 minutes. Refrigerate unopened vials.",
    sg: [["Timing", "==Onset 15–30 min · peaks 1–3 hr · can be used postprandial=="]]
  },
  "regular-insulin": {
    moa: "==Short-acting insulin==: moves glucose into cells. ==Onset 30–60 minutes, peak 2–4 hours, duration 4–12 hours.==",
    moaS: "The middle-speed mealtime insulin, and the only one that can run IV.",
    use: "Type 1 and type 2 diabetes; DKA and HHS (IV); severe hyperkalemia.",
    se: "Hypoglycemia, injection-site lipodystrophy.",
    ae: "Hypokalemia (especially IV).",
    contra: "Hypoglycemia, hypokalemia.",
    np: "==Monitor for signs and symptoms of hypoglycemia; monitor blood glucose==. If IV, check glucose and K⁺ often. Mixing with NPH: draw up regular first (clear before cloudy).",
    teach: "==Inject 30 to 45 minutes before a meal==. Know the signs of a low and how to treat it. Wear medical alert ID.",
    sg: [["Timing", "==Administer 30–45 min before a meal · onset 30–60 min · peak 2–4 hr · duration 4–12 hr=="]]
  },
  "nph-insulin": {
    moa: "==Intermediate-acting insulin==: ==onset 1–2 hours, peaks in 4–12 hours==, lasts 14–24 hours.",
    moaS: "The cloudy, all-day insulin with a long, wide peak.",
    use: "Basal coverage in type 1 and type 2 diabetes, often twice daily.",
    se: "Hypoglycemia (including overnight), injection-site lipodystrophy.",
    ae: "Hypokalemia.",
    contra: "Hypoglycemia, hypokalemia. Never IV.",
    np: "==Monitor blood glucose during the 4–12 hour peak==. When mixing, cloudy NPH goes into the syringe after the clear insulin.",
    teach: "==Roll the pen or vial== (don't shake); ==it should be cloudy== and evenly mixed. Watch for lows, including at night.",
    sg: [["Administration", "==Roll pen or vial; insulin should be cloudy.=="], ["Timing", "==Onset 1–2 hr · peaks 4–12 hr (monitor blood glucose)=="]]
  },
  "insulin-glargine": {
    moa: "Long-acting basal insulin: onset 2–4 hours, minimal peak, lasts up to 24 hours.",
    moaS: "A steady, all-day background insulin with no real peak.",
    use: "Basal insulin for type 1 and type 2 diabetes; hospitalized clients.",
    se: "Hypoglycemia, weight gain, injection-site lipodystrophy.",
    ae: "Hypokalemia (with overdose).",
    contra: "Hypoglycemia, hypokalemia, DKA. Never mix; never IV.",
    np: "Check glucose before giving. Give at the same time daily. Do not mix with any other insulin.",
    teach: "Same time every day. Never mix it with another insulin in one syringe. It's clear even though it's long-acting, so read the label.",
    sg: []
  },
  "glucagon": {
    moa: "Raises blood glucose by increasing glycogenolysis and gluconeogenesis in the liver.",
    moaS: "Tells the liver to dump its stored sugar into the blood.",
    use: "==Severe hypoglycemia== (client unconscious or unable to swallow).",
    se: "==Nausea and vomiting==, headache.",
    ae: "Hypersensitivity, rebound hypoglycemia.",
    contra: "Pheochromocytoma, insulinoma, hypersensitivity.",
    np: "==Place the unconscious client on their side to prevent aspiration. Give a complex carb as soon as the client is able.== Recheck glucose in 15 minutes.",
    teach: "Show family where the glucagon is and how to give it (IM, subcut, or nasal). Turn the person on their side. Seek care after any use. Store at room temperature.",
    sg: []
  },
  "levothyroxine": {
    moa: "Synthetic T4 that increases the metabolic rate of body tissues.",
    moaS: "Replaces the thyroid hormone the body isn't making.",
    use: "Hypothyroidism (lifelong replacement).",
    se: "Overreplacement looks like hyperthyroidism: tachycardia, palpitations, heat intolerance, insomnia, weight loss.",
    ae: "Arrhythmias (atrial fibrillation), angina/MI, osteoporosis with long-term excess.",
    contra: "Recent MI, uncorrected hyperthyroidism.",
    np: "Monitor TSH (normal 0.4–4.0 mIU/L). Check HR and BP before starting; start low in older adults and cardiac clients.",
    teach: "Take every morning on an empty stomach, 30–60 minutes before breakfast, with water. Separate from calcium, iron, and antacids. Lifelong; don't stop.",
    sg: []
  },
  "methimazole": {
    moa: "Thioamide: ==decreases the production of thyroid hormones== (blocks T3/T4 synthesis).",
    moaS: "Shuts down the overactive thyroid's hormone factory.",
    use: "Hyperthyroidism (Graves'); before surgery or RAI.",
    se: "Rash, itching, joint pain, altered taste.",
    ae: "Agranulocytosis, hepatotoxicity, hypothyroidism from overtreatment.",
    contra: "Hypersensitivity; avoid in the first trimester.",
    np: "==Assess for manifestations of hypo- and hyperthyroidism; monitor thyroid labs.== Check WBC with differential.",
    teach: "Report sore throat, fever, or mouth sores right away. Take at the same time daily. Weigh yourself a few times a week.",
    sg: [["Expected outcome", "==Return thyroid function studies to expected values and decrease manifestations of hyperthyroidism.=="]]
  },
  "rai-131": {
    moa: "==Emits radiation that permanently destroys thyroid tissue.==",
    moaS: "A radioactive dose the thyroid soaks up, which then destroys the overactive tissue.",
    use: "Graves' disease, toxic nodules or goiter, thyroid cancer.",
    se: "Dry eye, itching, hives.",
    ae: "Hypothyroidism (expected), bone marrow depression, radiation thyroiditis, infertility.",
    contra: "Pregnancy, breastfeeding, active Graves' eye disease.",
    np: "==Educate on not consuming iodine for 7 days prior to radioactive iodine-131. Monitor thyroid function.==",
    teach: "No iodine for 7 days before. Follow radiation safety precautions. Expect hypothyroidism within a year and lifelong levothyroxine.",
    sg: []
  },

  /* ---------- Hematologic & cancer ---------- */
  "cyclophosphamide": {
    moa: "Alkylating agent (nitrogen mustard): interferes with DNA replication and RNA transcription.",
    moaS: "Glues DNA strands together so cells can't divide.",
    use: "Cancers; immunosuppression at lower doses.",
    se: "Alopecia, darkened skin and nails.",
    ae: "Hemorrhagic cystitis, myelosuppression, infertility, pulmonary fibrosis.",
    contra: "Urinary outflow obstruction, pregnancy, lactation.",
    np: "Monitor CBC (neutrophils, platelets). Watch for hematuria. IV push diluted in NS only.",
    teach: "Drink plenty of fluids and void often to protect the bladder; report blood in the urine. Take oral doses in the morning.",
    sg: []
  },
  "doxorubicin": {
    moa: "Anthracycline: ==forms a complex with DNA, causing breakage of DNA strands and inhibition of DNA synthesis.==",
    moaS: "A red drug that breaks DNA strands.",
    use: "Kill rapidly dividing cancer cells.",
    se: "Red urine for 1–2 days (harmless), alopecia.",
    ae: "==Cardiotoxicity== (cardiomyopathy, dysrhythmias), ==myelosuppression==, extravasation injury.",
    contra: "Pregnancy, lactation.",
    np: "==Monitor blood cell counts (red and white blood cells) for myelosuppression. Monitor ECG for findings of cardiotoxicity.== Track the lifetime cumulative dose.",
    teach: "Red urine is expected. Report shortness of breath, irregular heartbeat, or leg swelling. Caregivers glove for body fluids for 5 days.",
    sg: []
  },
  "vincristine": {
    moa: "==Mitotic inhibitor: vinca alkaloid==. Binds mitotic spindle microtubules, stopping division in metaphase.",
    moaS: "Freezes cells mid-division, and nerves pay the price.",
    use: "Kill rapidly dividing cells (leukemias, lymphomas).",
    se: "Constipation, alopecia, abdominal cramps.",
    ae: "Peripheral neuropathy, paralytic ileus, extravasation (vesicant), myelosuppression.",
    contra: "Pregnancy, Charcot-Marie-Tooth disease. Fatal if given intrathecally.",
    np: "==Administration: IV only.== Watch the site for extravasation. Monitor for neurotoxicity (tingling, lost reflexes) and counts.",
    teach: "Report numbness, tingling, or constipation. Avoid crowds; wash hands. Use contraception during and for 2 months after.",
    sg: [["Class", "==Mitotic inhibitor: vinca alkaloid=="], ["Administration", "==IV only=="]]
  },
  "methotrexate": {
    moa: "Antimetabolite: ==interferes with folic acid metabolism==, so DNA synthesis fails in rapidly dividing cells.",
    moaS: "Starves dividing cells of the folic acid they need to copy DNA.",
    use: "Cancers; severe RA, psoriasis, lupus, IBD (weekly dosing).",
    se: "Mouth sores, alopecia, rash.",
    ae: "Myelosuppression, hepatotoxicity, pulmonary toxicity (dry cough), teratogenicity.",
    contra: "Pregnancy and breastfeeding, liver disease, alcohol use disorder, renal insufficiency.",
    np: "==Monitor for decreased RBC, WBC, leukopenia, and thrombocytopenia.== Verify pregnancy status. Watch LFTs and for dry cough. Folic acid supplements may be prescribed to decrease toxicity.",
    teach: "==Avoid alcohol. Avoid pregnancy.== For RA, take once a week, not daily. Report mouth sores, fever, bleeding, or cough.",
    sg: []
  },
  "tamoxifen": {
    moa: "==Estrogen receptor blocker==: competes with estrogen for binding sites in breast tissue.",
    moaS: "Blocks estrogen from feeding breast cancer cells.",
    use: "Estrogen-receptor-positive breast cancer; prevention in high-risk clients.",
    se: "==Hot flashes, nausea, vomiting==, bone pain.",
    ae: "DVT/PE, endometrial cancer, hypercalcemia.",
    contra: "History of DVT/PE on warfarin, pregnancy.",
    np: "Verify a negative pregnancy test. Weigh weekly. Watch for clots and abnormal vaginal bleeding.",
    teach: "==Notify the provider immediately of manifestations of DVT/PE== (leg swelling, sudden shortness of breath, chest pain). Use nonhormonal contraception.",
    sg: [["Class", "==Estrogen receptor blocker=="]]
  },
  "interferon-alfa-2a": {
    moa: "Biologic response modifier: ==boosts the immune system against cancer cells by enhancing activity of immune cells.==",
    moaS: "Turns up the immune system so it attacks cancer cells.",
    use: "Some leukemias, melanoma, Kaposi sarcoma.",
    se: "==Flu-like manifestations== (fever, chills, aches, fatigue).",
    ae: "==Myelosuppression==, depression and suicidal ideation, retinopathy.",
    contra: "Pregnancy, severe cardiac disease, seizure disorders.",
    np: "==Monitor for side effects: myelosuppression, flu-like manifestations.== Baseline eye exam; screen mood.",
    teach: "Expect flu-like symptoms. Report depression or vision changes. Use contraception. Keep refrigerated.",
    sg: []
  },
  "filgrastim": {
    moa: "G-CSF: ==stimulates division and duplication of immature neutrophils; mature neutrophil activation.==",
    moaS: "Fertilizer for white blood cells (neutrophils).",
    use: "Raise neutrophils after chemotherapy; before bone marrow transplant.",
    se: "==Bone pain==, injection-site pain.",
    ae: "==Spleen rupture; ARDS==; anaphylaxis.",
    contra: "Within 24 hours of chemotherapy; E. coli protein allergy.",
    np: "==Assess vital signs. Assess for pain in the left upper quadrant (abdomen) or shoulder, and bone pain.== Monitor CBC (ANC).",
    teach: "Bone pain is common. Report left upper abdominal or left shoulder pain or trouble breathing at once. Refrigerate; don't shake.",
    sg: []
  },
  "epoetin-alfa": {
    moa: "ESA: ==stimulates cells to divide and differentiate into RBCs.==",
    moaS: "Fertilizer for red blood cells.",
    use: "Anemia from CKD or chemotherapy; fewer transfusions.",
    se: "Hypertension, headache.",
    ae: "Blood clots (DVT, MI, stroke), severe hypertension, seizures.",
    contra: "Uncontrolled hypertension.",
    np: "==Assess for allergic reactions, blood clots, hypertension, and anemia. Monitor CBC. Monitor blood pressure.== Hgb above 11 g/dL raises clot risk.",
    teach: "Check BP often. Report chest pain, leg swelling, sudden headache, or seizure. Take iron as prescribed.",
    sg: []
  },

  /* ---------- Neurological ---------- */
  "baclofen": {
    moa: "==Centrally acting muscle relaxant==: acts at GABA-B receptors to inhibit spinal reflexes.",
    moaS: "Quiets overactive reflex signals in the spinal cord.",
    use: "Spasticity (MS, spinal cord injury).",
    se: "==Drowsiness==, dizziness, weakness.",
    ae: "CNS/respiratory depression, seizures and hallucinations on abrupt withdrawal.",
    contra: "Hypersensitivity; caution when spasticity supports balance.",
    np: "==Assess for drowsiness and fall risk.== ==Interactions: enhanced CNS depression with alcohol and antihistamines.==",
    teach: "Avoid alcohol and antihistamines. Don't drive until you know the effects. Never stop suddenly.",
    sg: [["Class", "==Centrally acting muscle relaxant=="], ["Interactions", "==Enhanced CNS depression with alcohol, antihistamines=="]]
  },
  "dantrolene": {
    moa: "==Peripherally acting muscle relaxant==: decreases calcium release from the sarcoplasmic reticulum in skeletal muscle.",
    moaS: "Relaxes the muscle itself by blocking the calcium it needs to contract.",
    use: "Chronic spasticity; malignant hyperthermia (IV).",
    se: "Drowsiness, muscle weakness, diarrhea.",
    ae: "Hepatotoxicity, GI bleeding, respiratory depression.",
    contra: "Active liver disease; spasticity needed for balance.",
    np: "==Assess liver function: liver enzymes and RUQ pain.== Monitor VS and ECG with IV use.",
    teach: "Report yellow skin or eyes, dark urine, or right upper belly pain. Keep liver lab appointments. Avoid alcohol.",
    sg: [["Class", "==Peripherally acting muscle relaxant=="]]
  },
  "diazepam": {
    moa: "==Benzodiazepine==: enhances GABA, reducing neuronal excitability and reflex activity.",
    moaS: "Turns up the brain's brake pedal.",
    use: "Anxiety, muscle spasm, status epilepticus, alcohol withdrawal.",
    se: "==Drowsiness, fatigue, sedation==, ataxia.",
    ae: "Respiratory depression, hypotension, dependence and withdrawal.",
    contra: "Pregnancy, narrow-angle glaucoma, respiratory depression, sleep apnea, myasthenia gravis.",
    np: "==Monitor respiratory and cardiovascular status== (RR, SpO2, BP, HR) and sedation depth. Antidote: flumazenil.",
    teach: "No alcohol or other CNS depressants. Don't drive. Taper; never stop suddenly.",
    sg: [["Class", "==Benzodiazepine=="]]
  },
  "lorazepam": {
    moa: "==Benzodiazepine, GABA receptor agonist==: enhances GABA to depress the CNS.",
    moaS: "A fast IV brake pedal for the brain, first-line for status epilepticus.",
    use: "Status epilepticus, anxiety, sedation, alcohol withdrawal.",
    se: "==Dizziness, drowsiness, lethargy==.",
    ae: "Respiratory depression, apnea, hypotension.",
    contra: "Closed-angle glaucoma, severe hypotension, sleep apnea.",
    np: "==Assess respiratory status.== IV no faster than 2 mg/min (dilute 1:1). Antidote: flumazenil.",
    teach: "==Avoid alcohol and other CNS depressants.== Don't drive until you know the effects. Don't stop suddenly.",
    sg: [["Class", "==Benzodiazepine, GABA receptor agonist=="]]
  },
  "phenytoin": {
    moa: "==Sodium channel inhibitor==: limits the spread of seizure activity.",
    moaS: "Closes the sodium gates a seizure uses to spread.",
    use: "Tonic-clonic and focal seizures; status epilepticus after a benzo.",
    se: "Gingival hyperplasia, nystagmus, ataxia, diplopia, hirsutism.",
    ae: "Dysrhythmias and hypotension with fast IV, SJS/DRESS, hepatotoxicity, suicidal thoughts.",
    contra: "Sinus bradycardia, heart block, pregnancy.",
    np: "Monitor levels (therapeutic 10–20 mcg/mL); toxicity = nystagmus, ataxia, slurred speech. IV in NS only, slowly. Assess the mouth and skin.",
    teach: "==Maintain good dental hygiene. Do not take within 2–3 hours of an antacid.== Don't stop suddenly. Report rash or suicidal thoughts.",
    sg: [["Class", "==Sodium channel inhibitor=="]]
  },
  "carbamazepine": {
    moa: "==Sodium channel inhibitor, anticonvulsant==: stabilizes hyperactive neuronal membranes.",
    moaS: "Closes sodium gates; also calms the stabbing face pain of trigeminal neuralgia.",
    use: "Seizures, trigeminal neuralgia, bipolar mania.",
    se: "Drowsiness, dizziness, ataxia, blurred vision.",
    ae: "==Stevens-Johnson syndrome==, ==suicidal thoughts==, aplastic anemia/agranulocytosis, hyponatremia.",
    contra: "==History of bone marrow depression==; MAOIs within 14 days.",
    np: "==Monitor for suicidal thoughts. Monitor for Stevens-Johnson syndrome.== Check CBC, sodium, and LFTs (level 4–12 mcg/mL).",
    teach: "Report rash, blisters, or mouth sores at once. Report fever, sore throat, or bruising. Avoid grapefruit. Use backup birth control.",
    sg: [["Class", "==Sodium channel inhibitor, anticonvulsant=="]]
  },
  "valproic-acid": {
    moa: "==Increases levels of GABA to suppress seizure activity==; also blocks sodium and calcium influx.",
    moaS: "Turns up the brain's brake, but it's hard on the liver.",
    use: "Seizures (absence, tonic-clonic), bipolar mania, migraine prevention.",
    se: "Weight gain, tremor, alopecia.",
    ae: "Hepatotoxicity, pancreatitis, thrombocytopenia, hyperammonemia, teratogenicity.",
    contra: "Liver disease, pregnancy, urea cycle disorders.",
    np: "==Monitor hepatic enzymes, ammonia, CBC, platelet counts, and bleeding times. Assess for liver manifestations.== Therapeutic level 50–100 mcg/mL.",
    teach: "==Do not stop abruptly.== Report yellow skin, abdominal pain, vomiting, or easy bruising. Avoid alcohol and pregnancy.",
    sg: []
  },
  "pregabalin": {
    moa: "==GABA analog, antiseizure==: binds calcium channels, reducing release of pain neurotransmitters.",
    moaS: "Turns down overexcited nerves, so nerve pain eases.",
    use: "Neuropathic pain, fibromyalgia, focal seizures.",
    se: "Dizziness, drowsiness, weight gain, peripheral edema.",
    ae: "Suicidal thoughts, respiratory depression with other depressants, angioedema.",
    contra: "Hypersensitivity. ==Precaution: renal impairment (dose alteration recommended for creatinine clearance less than 60 mL/min).==",
    np: "==Assess for behavior changes. Assess renal function.==",
    teach: "Report mood changes or suicidal thoughts. Avoid alcohol. Don't stop suddenly; taper over at least a week.",
    sg: [["Class", "==GABA analog, antiseizure=="]]
  },
  "carbidopa-levodopa": {
    moa: "Levodopa converts to dopamine in the brain; carbidopa blocks its breakdown in the periphery. ==Provides dopamine in the CNS, reversing manifestations of Parkinson's disease.==",
    moaS: "Refills the brain's dopamine supply.",
    use: "Parkinson's disease.",
    se: "==Nausea, dizziness, headache, sleepiness, orthostatic hypotension==; dark urine or sweat.",
    ae: "Hallucinations, psychosis, dyskinesias, wearing-off.",
    contra: "MAOIs, narrow-angle glaucoma, melanoma history.",
    np: "Check orthostatic BP and fall risk. Monitor for hallucinations, confusion, and mood changes.",
    teach: "Rise slowly. Avoid high-protein meals near doses. Dark urine is harmless. Report hallucinations or uncontrolled movements.",
    sg: []
  },
  "duloxetine": {
    moa: "SNRI: inhibits reuptake of serotonin and norepinephrine, acting as a centrally mediated pain inhibitor.",
    moaS: "Raises serotonin and norepinephrine, which lifts mood and turns down pain.",
    use: "Diabetic neuropathy, fibromyalgia, chronic musculoskeletal pain; depression and anxiety.",
    se: "Sweating, dry mouth, constipation, insomnia, sexual dysfunction.",
    ae: "Serotonin syndrome, suicidal thoughts, hepatotoxicity, hypertension, bleeding.",
    contra: "MAOIs within 14 days, severe renal or hepatic impairment, alcohol use disorder.",
    np: "Screen for suicidal thoughts early and with dose changes. Watch for serotonin syndrome. Monitor BP and LFTs.",
    teach: "Swallow whole. Avoid alcohol. Don't stop suddenly. Report agitation, fever, sweating, or twitching.",
    sg: []
  },

  /* ---------- Prior: Modules 1–3 (no Exam 1 study guide was provided, so nothing here is highlighted) ---------- */
  "morphine": {
    moa: "Opioid agonist: binds CNS opiate receptors, changing the perception of pain and depressing the CNS.",
    moaS: "Dulls pain in the brain, but also slows breathing and the gut.",
    use: "Moderate to severe pain.",
    se: "Constipation, sedation, constricted pupils, itching.",
    ae: "Respiratory depression, hypotension, urinary retention.",
    contra: "Significant respiratory depression, severe asthma, paralytic ileus.",
    np: "Check RR and BP before and after. Reassess pain 1 hour after PO/IM or 20 minutes after IV. Naloxone reverses it.",
    teach: "Avoid alcohol and CNS depressants. Prevent constipation. Store safely away from others.",
    sg: []
  },
  "prednisone": {
    moa: "Glucocorticoid: suppresses inflammatory cytokines and prostaglandins.",
    moaS: "A powerful anti-inflammatory that also lowers immunity.",
    use: "Inflammatory and autoimmune disease, allergic reactions, adrenal insufficiency.",
    se: "Hyperglycemia, weight gain, poor wound healing, infection risk.",
    ae: "Adrenal suppression, Cushingoid features, hypokalemia, GI bleeding, osteoporosis.",
    contra: "Fungal or untreated infection; live vaccines.",
    np: "Monitor glucose, BP, K⁺, weight, and signs of infection or GI bleeding.",
    teach: "Take in the morning with food. Taper; never stop suddenly. Avoid sick people.",
    sg: []
  },
  "allopurinol": {
    moa: "Xanthine oxidase inhibitor: blocks uric acid production.",
    moaS: "Stops the body from making so much uric acid.",
    use: "Gout prevention, uric acid stones, tumor lysis syndrome.",
    se: "Drowsiness, gout flare when starting.",
    ae: "SJS/TEN, DRESS, agranulocytosis.",
    contra: "HLA-B*58:01 positive; hypersensitivity.",
    np: "Monitor uric acid (goal less than 6 mg/dL), CBC, renal and liver function. Stop for any rash.",
    teach: "Drink 3,000 mL a day, follow a low-purine diet, take after meals, and report any rash.",
    sg: []
  },
  "vancomycin": {
    moa: "Glycopeptide: inhibits bacterial cell wall synthesis.",
    moaS: "Breaks down the wall that resistant bacteria build around themselves.",
    use: "MRSA, C. diff (PO), endocarditis.",
    se: "Phlebitis, chills.",
    ae: "Nephrotoxicity, ototoxicity, vancomycin flushing syndrome.",
    contra: "Glycopeptide allergy.",
    np: "Infuse over at least 60 minutes. Monitor creatinine, urine output, hearing, and trough levels.",
    teach: "Report ringing in the ears, hearing loss, or less urine. Finish the full course.",
    sg: []
  },
  "albuterol": {
    moa: "Short-acting beta2 agonist: relaxes bronchial smooth muscle.",
    moaS: "The rescue inhaler that opens tight airways in minutes.",
    use: "Acute bronchospasm (asthma, COPD).",
    se: "Tremor, nervousness, tachycardia, palpitations.",
    ae: "Paradoxical bronchospasm, hypokalemia, hyperglycemia, arrhythmias.",
    contra: "Children under 2; adrenergic amine allergy.",
    np: "Assess lung sounds, HR, SpO2, and K⁺. Hold for paradoxical wheezing.",
    teach: "Use it first, before other inhalers; wait 1 minute between puffs. Report if you need it more often.",
    sg: []
  },
  "diphenhydramine": {
    moa: "H1 blocker with anticholinergic and CNS depressant effects.",
    moaS: "Blocks histamine and dries everything out.",
    use: "Allergies, itching, anaphylaxis (adjunct), motion sickness, sleep.",
    se: "Drowsiness, dry mouth, urinary retention, constipation.",
    ae: "Confusion and falls in older adults; paradoxical excitation in children.",
    contra: "Neonates, breastfeeding, acute asthma attack.",
    np: "Fall precautions in older adults. Watch for urinary retention. IV no faster than 25 mg/min.",
    teach: "No driving or alcohol. Gum or hard candy for dry mouth. Report trouble urinating.",
    sg: []
  }
};

/* ===== Modules 5–8: copied from the Exam 2 site (nura350/exam2/js), categories remapped ===== */
Object.assign(window.CARDS, {
  "metoprolol": {
    "moa": "Blocks beta1 receptors in the heart, lowering heart rate, contractility, and cardiac output, which reduces cardiac workload and oxygen demand.",
    "moaS": "Puts the brakes on the heart: slower, gentler beats that need less oxygen.",
    "use": "==Hypertension; angina; prevent MI; heart failure in specific cases; arrhythmias.== Also migraine prevention and thyrotoxicosis.",
    "se": "Fatigue, cold extremities, erectile dysfunction, decreased libido; masks hypoglycemia signs and causes glucose intolerance.",
    "ae": "Bradycardia, heart block, severe hypotension, worsening heart failure, bronchospasm, hypoglycemia, depression.",
    "contra": "Bradycardia, 2nd or 3rd degree heart block, cardiogenic shock, uncompensated heart failure, pulmonary edema, sick sinus syndrome, cocaine-induced chest pain, untreated pheochromocytoma.",
    "np": "==Monitor BP and HR; watch for heart failure: shortness of breath, edema, weight gain.==",
    "sg": []
  },
  "atorvastatin": {
    "moa": "Inhibits HMG-CoA reductase, the liver enzyme needed to make cholesterol, and lowers VLDL production.",
    "moaS": "Slows the liver's cholesterol factory.",
    "use": "Lowers total cholesterol, LDL, and triglycerides and raises HDL; prevents cardiovascular events from atherosclerosis and after MI.",
    "se": "Mild GI effects (gas, constipation); usually well tolerated.",
    "ae": "==Myopathies, myalgia, rhabdomyolysis, acute kidney injury, hepatotoxicity==; increased blood glucose, memory loss.",
    "contra": "Severe liver impairment, pregnancy, breastfeeding, statin allergy.",
    "np": "==Assess liver function before giving. Monitor for myopathies.==",
    "sg": []
  },
  "nitroglycerin": {
    "moa": "==Converts to nitric oxide (NO), relaxing vascular smooth muscle → vasodilation.== Dilates coronary arteries (more blood flow) and veins (less preload), lowering myocardial oxygen demand.",
    "moaS": "Turns into nitric oxide, which opens vessels: more blood to the heart, less work for it.",
    "use": "==Angina pectoris, hypertensive emergencies, coronary artery spasm, heart failure==; acute MI.",
    "se": "Headache (expected), flushing, orthostatic hypotension, dizziness; dermatitis with the patch.",
    "ae": "Profound hypotension, reflex tachycardia, syncope and falls, methemoglobinemia.",
    "contra": "==PDE-5 inhibitors (sildenafil)==, increased intracranial pressure, right-sided MI, severe anemia, hypovolemia, shock, pericardial tamponade or constrictive pericarditis.",
    "np": "==Monitor BP and O₂. Do not take with PDE-5 inhibitors (sildenafil).==",
    "sg": []
  },
  "warfarin": {
    "moa": "==Interrupts the vitamin K cycle, reducing active clotting factors.==",
    "moaS": "Blocks vitamin K, which the liver needs to make clotting factors, so fewer working factors are made.",
    "use": "Prevent venous or arterial thrombosis and embolism (AFib, DVT, PE, mechanical valves).",
    "se": "Bleeding of mucous membranes, bruising.",
    "ae": "Hemorrhage, toxicity (high INR). Antidote: vitamin K.",
    "contra": "Pregnancy, uncontrollable bleeding, vitamin K deficiency, thrombocytopenia, alcohol use disorder or liver disease, lumbar puncture, regional anesthesia, brain, eye, or spinal cord surgery.",
    "np": "==Monitor pulse and BP. Monitor PT/INR. Monitor for bleeding.==",
    "sg": []
  },
  "alteplase": {
    "moa": "Converts plasminogen to plasmin, which ==breaks down fibrin and fibrinogen to dissolve the thrombus==. ==The only true clot buster.==",
    "moaS": "Clot buster: activates the body's own clot-dissolving enzyme to break up a clot that's already there.",
    "use": "Acute MI, pulmonary embolism, acute ischemic stroke, occluded IV catheters.",
    "se": "Minor bleeding, reperfusion PVCs.",
    "ae": "==Hemorrhage==, including intracranial hemorrhage; reperfusion arrhythmias (V-tach); anaphylaxis.",
    "contra": "Active or internal bleeding, recent intracranial hemorrhage, BP above 180/110, intracranial lesions, ischemic stroke or major head trauma in the last 3 months, recent brain or spine surgery, surgery in the last 3 weeks, possible aortic dissection, pregnancy.",
    "np": "==Monitor for bleeding. Monitor aPTT, CBC, fibrinogen. Assess neurological status. Monitor BP.==",
    "sg": []
  },
  "digoxin": {
    "moa": "Inhibits the Na⁺/K⁺-ATPase pump, raising calcium in heart cells for a stronger contraction; prolongs the AV node refractory period and slows the heart rate.",
    "moaS": "Stronger squeeze, slower beat: more calcium in heart cells while it slows the AV node.",
    "use": "==Atrial fibrillation, atrial flutter==; heart failure.",
    "se": "Asymptomatic bradycardia, anorexia, nausea and vomiting (early toxicity signs).",
    "ae": "Symptomatic bradycardia, heart blocks and arrhythmias, visual changes (yellow-green halos), confusion.",
    "contra": "Ventricular dysrhythmias, heart block, low potassium or magnesium, Wolff-Parkinson-White syndrome, MI, hypersensitivity.",
    "np": "==Take the apical heart rate; hold the dose if HR <60/min.==",
    "sg": []
  },
  "hydrochlorothiazide": {
    "moa": "==Increases sodium and water excretion by preventing sodium reabsorption in the distal tubule== (blocks the Na-Cl transporter); potassium and magnesium are lost too.",
    "moaS": "Medium diuretic: blocks salt pickup in the distal tubule; water follows salt out, and potassium is lost too.",
    "use": "Hypertension; edema from heart failure, liver disease, or kidney problems.",
    "se": "Hyperglycemia, hyperuricemia (gout), hyperlipidemia, photosensitivity, orthostatic hypotension.",
    "ae": "==Electrolyte imbalances: hypokalemia, hyponatremia, dehydration==; acute angle-closure glaucoma, pancreatitis, metabolic alkalosis.",
    "contra": "Sulfa allergy (cross-reactivity), anuria, hypotension, electrolyte imbalance, severe liver disease, adrenal insufficiency, breastfeeding.",
    "np": "==BP, daily weights, edema, electrolytes.==",
    "sg": []
  },
  "furosemide": {
    "moa": "Loop diuretic: blocks sodium and chloride reabsorption in the ascending loop of Henle, so sodium, chloride, potassium, magnesium, calcium, and water are excreted.",
    "moaS": "Strongest diuretic: blocks salt pickup in the loop of Henle, so lots of water (and potassium) leaves.",
    "use": "==Pulmonary edema in heart failure; edema from renal, hepatic, or heart failure==; hypertension.",
    "se": "Hypokalemia and other electrolyte losses, orthostatic hypotension, photosensitivity, tinnitus, hyperuricemia.",
    "ae": "Ototoxicity and hearing loss, severe electrolyte imbalance, hyperglycemia, Stevens-Johnson syndrome, blood dyscrasias.",
    "contra": "Anuria, hepatic coma, dehydration or electrolyte imbalance, hypersensitivity.",
    "np": "==Assess potassium and BP before giving.==",
    "sg": []
  },
  "ondansetron": {
    "moa": "Blocks serotonin 5-HT3 receptors to decrease nausea and vomiting.",
    "moaS": "Blocks serotonin's nausea signal in the gut and brain.",
    "use": "Nausea and vomiting from chemotherapy, radiation, anesthesia, and pregnancy.",
    "se": "Headache, constipation.",
    "ae": "==QT prolongation, serotonin syndrome==; fetal cleft palate or septal defects; Stevens-Johnson syndrome.",
    "contra": "Congenital long QT syndrome, use with apomorphine, hypersensitivity.",
    "np": "==ECG and monitor sodium, potassium, calcium, magnesium in clients with cardiac risk factors.==",
    "sg": []
  },
  "estradiol": {
    "moa": "Estrogen: develops the female sex organs and secondary sex characteristics and regulates ovulation.",
    "moaS": "Replaces estrogen, the main female sex hormone.",
    "use": "Menopausal symptoms, hypogonadism, osteoporosis, menstrual disorders, contraception, some hormone-sensitive cancers.",
    "se": "Breast tenderness, edema, gynecomastia and testicular atrophy in males, hypercalcemia, hyperglycemia.",
    "ae": "Thromboembolism, stroke, MI; breast, endometrial, and ovarian cancers.",
    "contra": "==Estrogen allergy; thromboembolic disease (DVT, PE, MI); history of breast cancer; liver impairment; undiagnosed vaginal bleeding; pregnancy.==",
    "np": "Monitor BP, weekly weight, I&O, glucose, and liver function. Assess for clots, stroke, and MI warning signs; ask about smoking.",
    "sg": [
      [
        "Interactions",
        "==Smoking increases risk of thromboembolic and cardiac adverse effects.=="
      ]
    ]
  },
  "calcium-carbonate": {
    "moa": "Neutralizes stomach acid and raises gastric pH.",
    "moaS": "Chalk that neutralizes acid already in the stomach.",
    "use": "Heartburn, GERD, peptic ulcers, gastritis.",
    "se": "Constipation.",
    "ae": "Hypercalcemia, renal calculi, bradycardia with overuse.",
    "contra": "Hypercalcemia, renal calculi, renal failure, hyperparathyroidism.",
    "np": "==Assess presenting symptoms and the abdomen. Monitor calcium and phosphorus levels.==",
    "teach": "==Do not take enteric-coated medications within 1 hour.== Take after meals and at bedtime with a full glass of water; chew chewable tablets completely. Do not take within 1 hour of other medications. May cause constipation: increase fiber, fluid, and exercise. See the provider if antacids are needed for more than 2 weeks without relief.",
    "sg": []
  },
  "metoclopramide": {
    "moa": "Blocks dopamine receptors; stimulates upper GI motility and speeds gastric emptying.",
    "moaS": "Blocks dopamine to stop nausea and makes the stomach empty faster.",
    "use": "Nausea and vomiting (also gastroparesis and GERD).",
    "se": "Drowsiness, restlessness.",
    "ae": "Extrapyramidal symptoms and tardive dyskinesia, which may be irreversible.",
    "contra": "GI obstruction or bleeding, seizure disorders, Parkinson's disease, history of tardive dyskinesia, MAOIs, hypersensitivity.",
    "np": "==Assess for: Parkinsonian symptoms (trouble speaking or swallowing, shuffling gait, mask-like face); dystonia (repetitive twisting contractions, inability to move eyes); tardive dyskinesia (involuntary movements of tongue, face, neck).==",
    "sg": []
  }
});
