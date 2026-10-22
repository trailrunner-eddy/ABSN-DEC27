/* Practice content: flashcards, NGN-style questions, sorting games, chain builders, triage sets.
   These are new items written from the lecture content; they don't repeat the Practice Exam PDF. */

window.FLASHCARDS = [
  // Foundations
  ["found", "Lungs vs. kidneys in acid-base: which is fast?", "Lungs (CO₂, minutes). Kidneys handle HCO₃⁻ and H⁺ over days."],
  ["found", "Normal pH, PaCO₂, PaO₂", "pH 7.35–7.45 · PaCO₂ 35–45 · PaO₂ 75–100"],
  ["found", "Why does chronic HF cause hyponatremia?", "ADH retains free water → dilutional hyponatremia; a sign of long-standing, poorly controlled HF."],
  ["found", "Which electrolytes does aldosterone waste?", "Potassium and magnesium (it retains sodium) → dysrhythmia risk."],
  ["found", "Best quick bedside read of fluid status", "Daily weight. Rapid gain over 1–2 days = fluid, not fat."],
  ["found", "Which disorders are the immune response (not the bug) doing the damage?", "Rheumatic heart disease, glomerulonephritis, myocarditis, TB granulomas, atherosclerosis."],
  ["found", "Asthma is which type of hypersensitivity?", "Type I (IgE on mast cells)."],
  // Resp
  ["resp", "Sinusitis: viral or bacterial if symptoms >10 days?", "Bacterial. Under 10 days = viral, let it run its course."],
  ["resp", "Untreated group A strep can cause…", "Rheumatic fever: fever, heart murmur, nonpruritic rash, joint pain, cardiac involvement."],
  ["resp", "Nonallergic rhinitis mechanism", "Non-IgE: parasympathetic activation and neurogenic inflammation → turbinate engorgement → congestion, rhinorrhea."],
  ["resp", "Acute bronchitis: what is the CXR?", "Negative. The point of workup is ruling out pneumonia."],
  ["resp", "All pneumonias are a ___ problem", "Shunt: alveoli perfused but not ventilated."],
  ["resp", "Most common bacterial pneumonia organism", "Streptococcus pneumoniae"],
  ["resp", "Most common fungal pneumonia; who gets it?", "Pneumocystis jirovecii; immunocompromised (e.g., advanced HIV)."],
  ["resp", "Rust-colored sputum suggests…", "Bacterial pneumonia (RBCs leaking into exudate)."],
  ["resp", "Why can TB survive inside macrophages?", "Its lipid-rich cell wall blocks lysosome fusion."],
  ["resp", "Latent TB: contagious? test result?", "Not contagious, no symptoms, but skin/blood test POSITIVE."],
  ["resp", "Active TB classic triad", "Low-grade fever, night sweats, unintentional weight loss (+ persistent cough)."],
  ["resp", "TB precautions", "Airborne: N95 respirator."],
  ["resp", "Asthma early vs. late phase", "Early (minutes): histamine/leukotrienes → bronchospasm. Late (hours): eosinophils/T helper cells → edema, mucus."],
  ["resp", "Asthma: what does a rising CO₂ mean?", "Muscles fatiguing, respiratory acidosis starting: alarm sign."],
  ["resp", "How is asthma diagnosed?", "Spirometry showing reversibility after albuterol. Not diagnosed under age 2."],
  ["resp", "COPD O₂ target during exacerbation", "SpO₂ 88–92%"],
  ["resp", "Emphysema mechanism", "Elastase destroys alveolar walls and elastic fibers → airways collapse on exhalation → air trapping."],
  ["resp", "Why barrel chest in COPD?", "Chronic hyperinflation enlarges the AP diameter."],
  ["resp", "Why clubbing?", "Chronic hypoxemia → growth factors in the nail bed."],
  ["resp", "Cor pulmonale", "Right-sided HF from pulmonary HTN (e.g., COPD → hypoxic vasoconstriction)."],
  ["resp", "Tension pneumothorax: trachea deviates which way?", "AWAY from the injured side (toward the unaffected side)."],
  ["resp", "Percussion: air vs. blood in pleural space", "Air = hyperresonant (sits high). Blood = dull (pools at base)."],
  ["resp", "Classic spontaneous pneumothorax patient", "Tall, thin, young male (apical bleb), or COPD."],
  ["resp", "Hemothorax causes which kind of shock?", "Hypovolemic."],
  ["resp", "Dead space vs. shunt", "Dead space = ventilated not perfused (PE). Shunt = perfused not ventilated (pneumonia, collapse)."],
  // Card1
  ["card1", "HTN definition", "SBP >130 and/or DBP >80 mmHg"],
  ["card1", "Primary HTN mechanism", "Baroreceptor and RAAS feedback loops become desensitized and stop correcting high pressure."],
  ["card1", "Urgency vs. emergency", "Both >180/120. Emergency = active organ damage (confusion, chest pain, pulmonary edema, low urine)."],
  ["card1", "First lesion of atherosclerosis", "Fatty streak (foam cells = macrophages full of oxidized LDL)."],
  ["card1", "What makes the fibrous cap?", "Smooth muscle cells migrating from the media laying down collagen."],
  ["card1", "Name the 6 P's", "Pain, Pallor, Pulselessness, Poikilothermia, Paresthesia, Paralysis"],
  ["card1", "#1 source of arterial emboli to a leg", "Atrial fibrillation (clot forms in quivering atria)."],
  ["card1", "PAD skin", "Pale, shiny, hairless, cool; weak/absent pulses; round dry toe ulcers."],
  ["card1", "CVI skin", "Brown hemosiderin staining, stasis dermatitis, brawny edema, moist ulcers at medial malleolus."],
  ["card1", "AAA key findings", "Pulsatile abdominal mass, bruit; low back ache, early satiety."],
  ["card1", "TAA compression signs", "Hoarseness, dysphagia, SVC syndrome, unequal arm BPs."],
  ["card1", "Virchow's triad", "Venous stasis, endothelial injury, hypercoagulability"],
  ["card1", "A negative D-dimer means…", "Rules OUT DVT/PE in low-risk patients. Positive is nonspecific."],
  ["card1", "#1 PE symptom", "Sudden dyspnea"],
  ["card1", "PE gold-standard test", "CT pulmonary angiography (CTPA)"],
  ["card1", "PE early ABG", "Respiratory alkalosis with hypoxemia (hyperventilation)."],
  ["card1", "Why does PE cause shock?", "↑pulmonary resistance → RV dilates/fails → septum bulges into LV → ↓SV → obstructive shock."],
  // Card2
  ["card2", "Stenosis causes ___ overload → ___", "Pressure overload → hypertrophy"],
  ["card2", "Regurgitation causes ___ overload → ___", "Volume overload → dilation"],
  ["card2", "Who typically has mitral valve prolapse?", "Young women; weak connective tissue, family history."],
  ["card2", "Gold-standard test for valve disease", "Echocardiogram"],
  ["card2", "How long until ischemia becomes necrosis?", "~20 minutes"],
  ["card2", "Troponin timeline", "Rises 2–4 hr, peaks 18–24 hr, elevated 7–14 days. Trend it."],
  ["card2", "STEMI vs. NSTEMI", "STEMI: complete occlusion, transmural, ST elevation. NSTEMI: partial, subendocardial, ST depression/T inversion."],
  ["card2", "Why does inferior MI cause bradycardia?", "The RCA feeds the SA node."],
  ["card2", "Atypical MI presentation in women", "Jaw/neck pain without chest pain, back pain, N/V, extreme fatigue, indigestion, lightheadedness."],
  ["card2", "Pericarditis pain relief position", "Sitting up and leaning forward."],
  ["card2", "Pericarditis EKG", "ST elevation + PR depression; troponin normal."],
  ["card2", "Janeway lesions vs. Osler nodes", "Janeway: painless, palms/soles. Osler: painful, finger/toe pads."],
  ["card2", "Endocarditis gold standard", "Blood cultures ×2–3 from separate sites; echo shows vegetations."],
  ["card2", "Most common cause of HF overall", "Ischemic heart disease / prior MI"],
  ["card2", "Most common cause of diastolic HF", "Long-standing uncontrolled HTN"],
  ["card2", "BNP cutoffs", "<100 helps rule out HF; >400 confirms volume overload."],
  ["card2", "Pink frothy sputum means…", "Left-sided HF / pulmonary edema."],
  ["card2", "Leading cause of sudden death in young athletes", "Hypertrophic cardiomyopathy (autosomal dominant)."],
  ["card2", "Atrial kick provides…", "The last 20–30% of ventricular filling."],
  ["card2", "AFib's biggest danger", "Stroke (blood pools → clot). Also RVR → ↓CO."],
  ["card2", "AFib vs. flutter rates", "AFib atria 300–600, irregularly irregular. Flutter 250–350, sawtooth."],
  ["card2", "Rate where diastolic filling drops CO", "~120–140 bpm"],
  // Kidney
  ["kidney", "Urine output goal (on the test!)", "≥0.5 mL/kg/hr"],
  ["kidney", "AKI creatinine criteria", "↑ ≥0.3 mg/dL in 48 hr, or ≥1.5× baseline within 7 days."],
  ["kidney", "AKI urine criterion", "<0.5 mL/kg/hr for ≥6 hours"],
  ["kidney", "Three nephrotoxins from lecture", "NSAIDs, aminoglycosides, iodinated contrast"],
  ["kidney", "Postrenal AKI causes", "Stones, tumors, retroperitoneal fibrosis, BPH"],
  ["kidney", "Four main AKI dangers", "Fluid overload, hyperkalemia, metabolic acidosis, waste accumulation (uremia)."],
  ["kidney", "CKD time requirement", "≥3 months"],
  ["kidney", "Two most common CKD causes", "Diabetes and hypertension"],
  ["kidney", "Why anemia in CKD?", "↓Erythropoietin → fewer RBCs."],
  ["kidney", "Uremic frost", "Urea crystals from sweat on skin; very late CKD."],
  ["kidney", "eGFR ranges", ">60 expected, 15–60 kidney disease, <15 failure."],
  ["kidney", "RBC casts mean…", "Bleeding from inside the kidney (glomerulonephritis)."],
  ["kidney", "GN urine color and edema pattern", "Tea/cola urine; face and periorbital edema, worse in the morning."],
  ["kidney", "Nephrotic protein threshold", "≥3.5 g/day"],
  ["kidney", "Nephrotic urine appearance", "Foamy"],
  ["kidney", "Why hyperlipidemia in nephrotic syndrome?", "Liver ramps up protein/lipid production in response to protein loss."],
  // GU
  ["gu", "Most common UTI organism", "E. coli"],
  ["gu", "Urethra length: female vs. male", "~4 cm vs. ~20 cm"],
  ["gu", "Negative nitrite = no UTI?", "No. Not all bacteria convert nitrate to nitrite."],
  ["gu", "UTI in older adults may show up as…", "New confusion, agitation, falls, functional decline."],
  ["gu", "Pyelo signs that cystitis lacks", "Fever, chills, N/V, flank pain, CVA tenderness."],
  ["gu", "Pyelo red flags", "Hypotension or falling urine output (sepsis + AKI)."],
  ["gu", "Renal colic radiates to…", "Abdomen, groin, inner thigh."],
  ["gu", "Most common stone type", "Calcium oxalate (and calcium phosphate)."],
  ["gu", "Stone + fever =", "Obstructed infected kidney: urologic emergency."],
  ["gu", "BPH: hyperplasia means…", "More cells (growth > apoptosis). Not inflammation."],
  ["gu", "BPH urinary cues", "Hesitancy, weak/interrupted stream, straining, incomplete emptying, nocturia."],
  ["gu", "Acute prostatitis classic setting", "Sudden fever, chills, perineal pain after catheterization; E. coli."],
  ["gu", "Chronic prostatitis clue", "Pain with ejaculation, recurrent UTIs, pelvic pain."]
];

/* Question types: mc, sata, selectn, cloze (dropdowns), matrix (each row picks a column) */
window.QUESTIONS = [
/* ---------- RESPIRATORY ---------- */
{ sys: "resp", type: "mc",
  stem: "A 6-year-old has had a runny nose, cough, and mild sore throat for 3 days. Temperature 99.8°F, mild nasal congestion, no tonsillar exudate. Which explanation is most accurate?",
  options: ["Group A strep pharyngitis; needs rapid antigen testing now", "A viral URI; children get more because they have met fewer antigens", "Acute bacterial sinusitis because symptoms are present", "Nonallergic rhinitis caused by IgE cross-linking"],
  answer: 1,
  why: "Cough, congestion, and runny nose are the viral cold picture, and children average 6–8 URIs a year (immature immunity, fewer antigens met, poorer hygiene). Bacterial sinusitis needs >10 days. Nonallergic rhinitis is NOT IgE-mediated."
},
{ sys: "resp", type: "sata",
  stem: "A client with a 4-day viral URI is mouth breathing, febrile, and drinking little. Which findings would the nurse expect from fluid volume deficit? Select all that apply.",
  options: ["Thick, hard-to-clear secretions", "Tachycardia", "Dry mucous membranes", "Crackles and peripheral edema", "Concentrated, decreased urine", "JVD"],
  answer: [0, 1, 2, 4],
  why: "Fever, fast breathing, mouth breathing, exudate, and poor intake all drain fluid. Dehydration thickens mucus (escalator can't clear it), raises HR, dries membranes, and concentrates urine. Crackles, edema, and JVD are overload."
},
{ sys: "resp", type: "cloze",
  stem: "Sinusitis develops when mucosal edema blocks the {0}. The sealed cavity absorbs oxygen and fills with {1} fluid, which becomes a medium for bacteria. Pain typically gets worse when the client {2}.",
  blanks: [
    { options: ["ostia", "alveoli", "eustachian valves", "turbinates"], answer: 0 },
    { options: ["stagnant", "oxygenated", "free-flowing", "serous pleural"], answer: 0 },
    { options: ["leans forward", "lies flat", "swallows", "exhales"], answer: 0 }
  ],
  why: "Edema blocks the ostia → sealed cavity → O₂ absorbed, vacuum pulls in fluid → stagnant fluid grows bacteria. Facial pressure worsens leaning forward."
},
{ sys: "resp", type: "mc",
  stem: "A college student in a dorm has 5 days of dry cough, low-grade fever, and fatigue. CXR shows bilateral interstitial infiltrates; WBC is normal. Which pneumonia type fits best?",
  options: ["Bacterial (S. pneumoniae)", "Viral", "Fungal (Pneumocystis)", "Aspiration with consolidation"],
  answer: 1,
  why: "Gradual onset, dry cough, bilateral infiltrates, normal WBC = viral (it inflames alveolar walls and interstitium, not the air sacs). Bacterial is abrupt with purulent/rust sputum, one-sided consolidation, high WBC. Pneumocystis needs an immunocompromised host."
},
{ sys: "resp", type: "selectn", n: 3,
  stem: "A client with bacterial pneumonia is being monitored. Select the 3 findings that most suggest the pneumonia is worsening or becoming systemic.",
  options: ["New confusion", "Productive yellow sputum", "BP 88/50 with HR 124", "PaCO₂ rising from 32 to 47 as RR slows", "Temperature 100.9°F", "Crackles in the right lower lobe"],
  answer: [0, 2, 3],
  why: "New confusion, hypotension with tachycardia (sepsis), and a rising CO₂ after being low (fatigue, respiratory acidosis) are the worsening signs. Purulent sputum, fever, and local crackles are expected findings of the pneumonia itself."
},
{ sys: "resp", type: "matrix",
  stem: "Classify each finding as Latent TB, Active TB, or Both.",
  cols: ["Latent", "Active", "Both"],
  rows: [["Positive PPD or IGRA", 2], ["Night sweats and weight loss", 1], ["Can transmit by airborne route", 1], ["No symptoms", 0], ["Positive sputum culture", 1], ["Granuloma formed by cell-mediated immunity", 2]],
  why: "Both forms test positive and both involve a granuloma. Latent: wall holds, no symptoms, not contagious, sputum negative. Active: wall breaks, cytokine symptoms (fever, night sweats, weight loss), airborne spread, sputum positive."
},
{ sys: "resp", type: "mc",
  stem: "A client with latent TB just started high-dose corticosteroids after a kidney transplant. The nurse explains the main risk is:",
  options: ["Developing asthma from IgE sensitization", "Reactivation because immunosuppression weakens the granuloma wall", "Spreading latent TB to family members now", "A false-negative chest X-ray"],
  answer: 1,
  why: "Cell-mediated immunity holds the granuloma together. Transplant drugs, chemo, HIV, diabetes, and aging weaken it so bacteria escape → active TB. Latent TB is not contagious."
},
{ sys: "resp", type: "cloze",
  stem: "In an asthma exacerbation, the {0} phase brings bronchospasm within minutes from histamine and leukotrienes. Hours later, {1} and T helper cells cause submucosal edema and mucus plugging. Because exhalation depends on {2}, air becomes trapped.",
  blanks: [
    { options: ["early", "late", "chronic", "compensatory"], answer: 0 },
    { options: ["eosinophils", "neutrophils", "plasma cells", "foam cells"], answer: 0 },
    { options: ["elastic recoil", "the diaphragm contracting", "surfactant production", "the external intercostals"], answer: 0 }
  ],
  why: "Type I hypersensitivity: early phase (minutes) = bronchospasm; late phase (hours) = eosinophils + T helper cells. Exhalation is passive (elastic recoil), so narrowed airways trap air."
},
{ sys: "resp", type: "mc",
  stem: "A child in an asthma attack had loud wheezing 30 minutes ago. Now wheezing is barely audible, the child is drowsy, and still using accessory muscles. Which interpretation is correct?",
  options: ["The albuterol is working", "Airflow is so limited that little air is moving; this is an emergency", "The late phase has resolved", "The child is falling asleep from relief"],
  answer: 1,
  why: "A “silent chest” with ongoing distress means almost no air is moving (beyond the lectures), and drowsiness suggests rising CO₂ (status asthmaticus). Quieter is not better here."
},
{ sys: "resp", type: "matrix",
  stem: "For each COPD finding, is it a chronic baseline finding or a sign of acute exacerbation?",
  cols: ["Chronic baseline", "Acute exacerbation"],
  rows: [["Barrel chest", 0], ["Clubbing", 0], ["SpO₂ 90% on room air (usual)", 0], ["pH 7.29 with PaCO₂ 68", 1], ["New fever with increased purulent sputum", 1], ["HCO₃⁻ 31 with pH 7.37", 0]],
  why: "Barrel chest, clubbing, low-90s SpO₂, and compensated respiratory acidosis (high HCO₃⁻, normal pH) are baseline. A falling pH means CO₂ rose faster than kidneys can compensate; infection is the usual trigger."
},
{ sys: "resp", type: "sata",
  stem: "A long-time smoker with emphysema asks why breathing is so hard. Which explanations are accurate? Select all that apply.",
  options: ["Elastase has destroyed alveolar walls and elastic fibers", "Airways collapse during exhalation and trap air", "The flattened diaphragm works less efficiently", "Exhalation is an active process that the muscles can no longer perform", "There is less surface area for gas diffusion", "Bronchospasm fully reverses with albuterol"],
  answer: [0, 1, 2, 4],
  why: "Emphysema = protease destruction → lost recoil → airway collapse and air trapping → hyperinflation flattens the diaphragm; fewer alveoli = less diffusion surface. Exhalation is normally passive. COPD is irreversible (reversibility = asthma)."
},
{ sys: "resp", type: "cloze",
  stem: "A client with COPD develops JVD and bilateral ankle edema. Chronic hypoxia caused pulmonary {0}, raising pressure the {1} ventricle must pump against. This is called {2}.",
  blanks: [
    { options: ["vasoconstriction and remodeling", "vasodilation", "embolism", "consolidation"], answer: 0 },
    { options: ["right", "left"], answer: 0 },
    { options: ["cor pulmonale", "cardiac tamponade", "dilated cardiomyopathy", "tension pneumothorax"], answer: 0 }
  ],
  why: "Hypoxic vasoconstriction and remodeling → pulmonary HTN → RV hypertrophies then fails → systemic venous congestion (JVD, edema) = cor pulmonale."
},
{ sys: "resp", type: "mc",
  stem: "After a motor vehicle crash, a client has dyspnea, decreased breath sounds on the left, hyperresonance on the left, trachea midline, BP 128/80, HR 104. Which is most likely?",
  options: ["Tension pneumothorax", "Simple (closed) pneumothorax", "Hemothorax", "Pulmonary embolism"],
  answer: 1,
  why: "Hyperresonance = air. A midline trachea with normal BP rules out tension (which adds deviation, JVD, hypotension). Hemothorax is dull."
},
{ sys: "resp", type: "cloze",
  stem: "In tension pneumothorax, a flap acts as a {0} valve. Rising pressure shifts the mediastinum and compresses the {1}, reducing {2} and causing obstructive shock.",
  blanks: [
    { options: ["one-way", "two-way", "semilunar", "mitral"], answer: 0 },
    { options: ["vena cava", "trachea only", "pulmonary veins", "aortic arch"], answer: 0 },
    { options: ["preload", "afterload", "contractility", "oncotic pressure"], answer: 0 }
  ],
  why: "Air in, can't get out → mediastinal shift → vena cava compressed → ↓venous return (preload) → ↓CO → hypotension. Treat before X-ray."
},
{ sys: "resp", type: "mc",
  stem: "A client with acute bronchitis asks if they need antibiotics. The nurse's best understanding is that acute bronchitis is:",
  options: ["Usually bacterial and needs antibiotics", "More than 90% viral and usually resolves in 2–3 weeks", "Diagnosed by consolidation on CXR", "A form of COPD"],
  answer: 1,
  why: ">90% viral (rhinovirus, adenovirus, influenza, parainfluenza). CXR is negative; the workup is to rule out pneumonia. Cough may linger after the client is no longer contagious."
},

/* ---------- CARDIAC PART 1 ---------- */
{ sys: "card1", type: "mc",
  stem: "A 52-year-old with BP 186/124 reports a mild headache and anxiety. Neuro exam, troponin, creatinine, and lung sounds are normal. This is best classified as:",
  options: ["Stage 1 hypertension", "Hypertensive urgency", "Hypertensive emergency", "Secondary hypertension"],
  answer: 1,
  why: "Both urgency and emergency are >180/120. Without active organ damage (no encephalopathy, MI, pulmonary edema, renal failure), it is urgency. Autoregulation is still intact."
},
{ sys: "card1", type: "matrix",
  stem: "Classify each as primary or secondary hypertension.",
  cols: ["Primary", "Secondary"],
  rows: [["Desensitized baroreceptor feedback", 0], ["Renal artery disease activating RAAS", 1], ["Obstructive sleep apnea", 1], ["Family history + inactivity, no single cause", 0], ["Cushing syndrome", 1], ["90–95% of cases", 0]],
  why: "Primary (90–95%) is multifactorial with desensitized feedback loops. Secondary has an identifiable cause (renal, endocrine like Cushing/PCOS, OSA, stimulants, pregnancy, meds); treating it often improves BP."
},
{ sys: "card1", type: "selectn", n: 3,
  stem: "A client with long-standing HTN asks how it can harm the body. Select 3 accurate explanations.",
  options: ["High afterload makes the LV hypertrophy and raises O₂ demand", "High wall tension injures endothelium and speeds atherosclerosis", "Damaged retinal vessels can change vision", "HTN raises plasma oncotic pressure", "BNP causes the kidneys to retain sodium", "HTN mainly damages veins"],
  answer: [0, 1, 2],
  why: "LV works against afterload (hypertrophy, ischemia), endothelium is injured (↓NO, atherosclerosis), retinal vessels are damaged. BNP promotes sodium EXCRETION."
},
{ sys: "card1", type: "cloze",
  stem: "Atherosclerosis begins with {0}, which lowers nitric oxide. LDL enters the intima and becomes {1}. Macrophages engulf it to become {2}, forming the fatty streak. Smooth muscle cells then build a {3}.",
  blanks: [
    { options: ["endothelial injury", "valve incompetence", "IgE cross-linking", "granuloma formation"], answer: 0 },
    { options: ["oxidized", "hydrolyzed", "calcified", "phagocytosed by neutrophils"], answer: 0 },
    { options: ["foam cells", "Reed-Sternberg cells", "eosinophils", "vegetations"], answer: 0 },
    { options: ["fibrous cap", "thrombus", "caseous center", "aneurysm"], answer: 0 }
  ],
  why: "Endothelial injury → ↓NO → LDL oxidized → foam cells (fatty streak) → smooth muscle lays collagen = fibrous cap → necrotic core → rupture/thrombus."
},
{ sys: "card1", type: "mc",
  stem: "A client with PAD reports calf pain after walking one block that goes away within minutes of resting. This is called:",
  options: ["Rest pain", "Intermittent claudication", "Renal colic", "Paresthesia"],
  answer: 1,
  why: "Exertional demand exceeds what the narrowed artery can supply; rest restores balance. Pain at rest signals severe disease."
},
{ sys: "card1", type: "sata",
  stem: "A client with AFib suddenly reports severe right leg pain. Which findings support acute arterial embolism? Select all that apply.",
  options: ["Pale, cold foot", "Absent dorsalis pedis pulse", "Numbness and tingling", "Warm, red, swollen calf", "Brown hemosiderin staining", "Difficulty moving the toes"],
  answer: [0, 1, 2, 5],
  why: "The 6 P's: pain, pallor, pulselessness, poikilothermia, paresthesia, paralysis. Warm red swollen calf = DVT; hemosiderin = CVI. Paresthesia and paralysis are late, ominous signs."
},
{ sys: "card1", type: "mc",
  stem: "A client with a known 5 cm AAA reports new sudden severe back pain, BP 82/50, HR 128, cool clammy skin. Priority labs ordered by the provider would most likely include:",
  options: ["Lipid panel and A1C", "CBC/H&H and type and screen", "Sputum culture", "BNP only"],
  answer: 1,
  why: "Rupture or dissection = massive blood loss → hypovolemic shock. The lecture's rupture labs: CBC and H&H, D-dimer, type and screen."
},
{ sys: "card1", type: "matrix",
  stem: "Arterial (PAD) or venous (CVI)?",
  cols: ["Arterial", "Venous"],
  rows: [["Weak or absent pedal pulses", 0], ["Brawny edema that improves with elevation", 1], ["Round, dry, pale ulcer on the toe", 0], ["Moist ulcer with irregular border at medial malleolus", 1], ["Thin, shiny, hairless skin", 0], ["Dull, heavy ache worse after standing", 1]],
  why: "Arterial = no blood getting in (pale, cool, hairless, no pulse, dry toe ulcers). Venous = blood gets in but can't get out (edema, hemosiderin, moist ankle ulcers, heavy ache)."
},
{ sys: "card1", type: "selectn", n: 2,
  stem: "A postpartum client on estrogen-containing birth control flew 12 hours yesterday. Select the 2 Virchow's triad components most clearly present.",
  options: ["Venous stasis", "Hypercoagulability", "Endothelial injury", "Valve incompetence", "Atrial kick loss"],
  answer: [0, 1],
  why: "Long flight = stasis. Postpartum + estrogen = hypercoagulability. A DVT rarely forms without at least two of the three."
},
{ sys: "card1", type: "cloze",
  stem: "A PE creates alveoli that are ventilated but not perfused, called {0}. Early on, hyperventilation produces respiratory {1}. If obstructive shock develops, anaerobic metabolism causes {2} acidosis.",
  blanks: [
    { options: ["dead space", "shunt", "atelectasis", "consolidation"], answer: 0 },
    { options: ["alkalosis", "acidosis"], answer: 0 },
    { options: ["metabolic (lactic)", "respiratory", "compensated respiratory", "renal tubular"], answer: 0 }
  ],
  why: "PE = dead space (contrast pneumonia = shunt). Hypoxia and irritant receptors drive hyperventilation (respiratory alkalosis); later shock → lactic acidosis."
},
{ sys: "card1", type: "mc",
  stem: "A low-risk outpatient with mild calf discomfort has a negative D-dimer. The nurse understands this result:",
  options: ["Confirms a small DVT", "Makes DVT unlikely and helps rule it out", "Means a CTPA is required", "Is not useful because D-dimer is nonspecific"],
  answer: 1,
  why: "Negative D-dimer rules out DVT/PE in low-risk patients. A POSITIVE result is the nonspecific one (surgery, pregnancy, cancer, trauma, inflammation)."
},

/* ---------- CARDIAC PART 2 ---------- */
{ sys: "card2", type: "matrix",
  stem: "Match each finding with the valve mechanism.",
  cols: ["Stenosis", "Regurgitation"],
  rows: [["Valve won't open fully", 0], ["Valve won't close fully", 1], ["Pressure overload → hypertrophy", 0], ["Volume overload → dilation", 1], ["Age-related calcification", 0], ["Endocarditis destroying leaflets", 1]],
  why: "Stenosis = obstruction to forward flow → chamber behind it thickens. Regurgitation = backward leak → receiving chamber stretches. Calcification (age, CKD, hypercalcemia) stiffens; vegetations destroy."
},
{ sys: "card2", type: "mc",
  stem: "A 19-year-old had untreated strep throat last year and now has a new heart murmur. Which mechanism links them?",
  options: ["Direct bacterial infection of the valve", "Autoimmune cross-reaction (rheumatic heart disease)", "Atherosclerotic plaque on the valve", "Hypertrophic cardiomyopathy"],
  answer: 1,
  why: "Rheumatic heart disease: antibodies against strep cross-react with heart tissue. The immune response, not the bug, damages the valve."
},
{ sys: "card2", type: "cloze",
  stem: "When myocardial cells lose oxygen they switch to {0} metabolism, producing lactic acid and {1}, which stimulate pain fibers. If flow is restored within about {2}, the cells recover.",
  blanks: [
    { options: ["anaerobic", "aerobic", "ketogenic", "oxidative"], answer: 0 },
    { options: ["adenosine", "histamine", "BNP", "renin"], answer: 0 },
    { options: ["20 minutes", "2 hours", "24 hours", "5 minutes"], answer: 0 }
  ],
  why: "Anaerobic glycolysis → lactic acid + adenosine → visceral pain. Ischemia >20 min → necrosis starting in the subendocardium."
},
{ sys: "card2", type: "matrix",
  stem: "Stable angina, unstable angina, or MI?",
  cols: ["Stable", "Unstable", "MI"],
  rows: [["Chest pain shoveling snow, gone after 3 min rest", 0], ["Chest pain at rest lasting 18 min, troponin normal ×2", 1], ["Crushing pain 45 min, troponin rising", 2], ["New pattern: more frequent episodes at lower activity", 1], ["Pain after a heavy meal, relieved by rest, predictable", 0]],
  why: "Stable = predictable, exertional, relieved by rest. Unstable = at rest, increasing, not reliably relieved, troponin normal. MI = troponin elevated (necrosis)."
},
{ sys: "card2", type: "mc",
  stem: "A client with an inferior wall MI has HR 46. Which explanation is correct?",
  options: ["The LAD supplies the AV node", "The RCA supplies the SA node", "Hyperkalemia from aldosterone", "Loss of atrial kick"],
  answer: 1,
  why: "The RCA feeds the right heart, the inferior LV wall, and the SA node, so inferior MI can cause sinus bradycardia."
},
{ sys: "card2", type: "sata",
  stem: "Within the first hours after an MI, why are dysrhythmias a major danger? Select all that apply.",
  options: ["Local lactic acidosis impairs the Na⁺/K⁺ ATPase", "Injured cells leak potassium", "The resting membrane potential becomes unstable", "Scar tissue has already formed", "Ectopic beats can arise before cells die"],
  answer: [0, 1, 2, 4],
  why: "Acidosis disables the pump, K⁺ leaks, membranes destabilize → dysrhythmias even before necrosis. Scar forms over 2–4 weeks, not hours."
},
{ sys: "card2", type: "cloze",
  stem: "A 24-year-old with a recent cold has sharp chest pain that improves when {0}. EKG shows ST elevation with {1}. Troponin is {2}, which points to pericarditis rather than MI.",
  blanks: [
    { options: ["sitting up and leaning forward", "lying flat", "exerting", "taking a deep breath"], answer: 0 },
    { options: ["PR depression", "a sawtooth pattern", "absent P waves", "peaked T waves"], answer: 0 },
    { options: ["normal", "markedly elevated", "rising every 3 hours", "undetectable due to error"], answer: 0 }
  ],
  why: "Pericarditis: positional pleuritic pain (better leaning forward), friction rub, ST elevation + PR depression, normal troponin, young with recent virus."
},
{ sys: "card2", type: "sata",
  stem: "A client who injects drugs has fever and fatigue. Which findings support infective endocarditis? Select all that apply.",
  options: ["New regurgitant murmur", "Painless red macules on the soles", "Painful nodules on finger pads", "Splinter hemorrhages", "Pericardial friction rub", "Pain relieved by leaning forward"],
  answer: [0, 1, 2, 3],
  why: "Vegetations destroy valves (new murmur) and embolize: Janeway lesions (painless, palms/soles), Osler nodes (painful, finger/toe pads), splinter hemorrhages. Rub and positional pain = pericarditis."
},
{ sys: "card2", type: "matrix",
  stem: "Left-sided or right-sided heart failure?",
  cols: ["Left-sided", "Right-sided"],
  rows: [["Orthopnea", 0], ["JVD", 1], ["Pink frothy sputum", 0], ["Ascites and hepatomegaly", 1], ["Paroxysmal nocturnal dyspnea", 0], ["Dependent edema", 1]],
  why: "Left backs into the lungs. Right backs into the systemic veins (body). Left-sided HF is the most common cause of right-sided HF."
},
{ sys: "card2", type: "cloze",
  stem: "In heart failure the body reads low output as {0}. Aldosterone retains sodium but wastes {1}, while ADH retains free water causing {2}.",
  blanks: [
    { options: ["hypovolemia", "hypervolemia", "infection", "hypercapnia"], answer: 0 },
    { options: ["potassium and magnesium", "calcium and phosphate", "sodium and chloride", "bicarbonate"], answer: 0 },
    { options: ["dilutional hyponatremia", "hypernatremia", "hyperkalemia", "metabolic alkalosis"], answer: 0 }
  ],
  why: "SNS, RAAS, and ADH activate as if volume were low. Aldosterone wastes K⁺ and Mg²⁺ (dysrhythmias). ADH dilutes sodium: a sign of chronic, poorly controlled HF."
},
{ sys: "card2", type: "mc",
  stem: "An echocardiogram shows EF 62% with a thick, stiff LV. Which history is the most likely cause?",
  options: ["Prior large anterior MI", "Long-standing uncontrolled hypertension", "Viral myocarditis", "Chronic alcohol use"],
  answer: 1,
  why: "EF ≥50% with thick stiff walls = diastolic HF (HFpEF), most often from long-standing HTN. Prior MI is the most common cause of systolic HF."
},
{ sys: "card2", type: "matrix",
  stem: "Match each to the cardiomyopathy.",
  cols: ["Dilated", "Hypertrophic", "Restrictive"],
  rows: [["Asymmetric septal thickening", 1], ["Thin, weak walls; low EF", 0], ["Rigid walls with big atria, worst prognosis", 2], ["Sudden death in a young athlete", 1], ["Can follow viral myocarditis or chronic alcohol use", 0], ["Amyloidosis", 2]],
  why: "DCM: big, thin, weak (systolic). HCM: thick septum, autosomal dominant, sudden death in the young. RCM: stiff, can't fill, right-sided signs, worst survival."
},
{ sys: "card2", type: "sata",
  stem: "A client has new-onset AFib with a ventricular rate of 148. Which effects would the nurse anticipate? Select all that apply.",
  options: ["Loss of the last 20–30% of ventricular filling", "Shortened diastole reducing coronary flow", "Risk of atrial clot and embolic stroke", "Decreased cardiac output", "Regular sawtooth P waves", "Increased stroke volume from faster rate"],
  answer: [0, 1, 2, 3],
  why: "Lost atrial kick + short diastole (above ~120–140) drop SV and CO; pooling causes clots → stroke. Sawtooth = flutter. Faster rate here lowers SV."
},
{ sys: "card2", type: "mc",
  stem: "Which client's sinus bradycardia (HR 52) needs the nurse's attention first?",
  options: ["A marathon runner, BP 118/72, alert, at baseline", "A client with BP 82/48, dizziness, and new confusion", "A sleeping client, BP 110/70, warm skin", "A client on a beta-blocker, asymptomatic, BP 124/78"],
  answer: 1,
  why: "Whether a rhythm matters depends on perfusion (BP, mentation, skin, urine), not the number. Hypotension and confusion = ↓CO."
},

/* ---------- KIDNEY ---------- */
{ sys: "kidney", type: "matrix",
  stem: "Classify each AKI scenario.",
  cols: ["Prerenal", "Intrinsic", "Postrenal"],
  rows: [["Hemorrhage after trauma", 0], ["Gentamicin (aminoglycoside) toxicity", 1], ["BPH causing urinary retention", 2], ["Septic shock causing tubular necrosis", 1], ["Severe dehydration from gastroenteritis", 0], ["Bilateral ureteral stones", 2]],
  why: "Where does it start? Before (blood flow), inside (tissue damage: ATN, nephrotoxins, GN, sepsis), or after (obstruction)."
},
{ sys: "kidney", type: "mc",
  stem: "A 70 kg client has made 120 mL of urine over the past 6 hours. The nurse recognizes:",
  options: ["Output is adequate", "Output is below 0.5 mL/kg/hr and meets an AKI criterion", "Output is only abnormal if creatinine is elevated", "Output is low but requires 24 hours to assess"],
  answer: 1,
  why: "Goal ≥0.5 mL/kg/hr → 70 × 0.5 = 35 mL/hr = 210 mL in 6 hr. 120 mL is ~20 mL/hr, below threshold for ≥6 hr."
},
{ sys: "kidney", type: "selectn", n: 3,
  stem: "A client with AKI has K⁺ 6.4, pH 7.28, HCO₃⁻ 16, crackles, and +3 kg in 2 days. Select the 3 findings that are most immediately life-threatening.",
  options: ["K⁺ 6.4", "Crackles with rapid weight gain", "pH 7.28", "Mild pruritus", "BUN 38", "Fatigue"],
  answer: [0, 1, 2],
  why: "The main AKI dangers: hyperkalemia (dysrhythmia/arrest), fluid overload (pulmonary edema), and metabolic acidosis."
},
{ sys: "kidney", type: "cloze",
  stem: "In CKD, decreased {0} causes anemia. Decreased activation of {1} reduces calcium absorption, and {2} is retained, weakening bone.",
  blanks: [
    { options: ["erythropoietin", "renin", "ADH", "aldosterone"], answer: 0 },
    { options: ["vitamin D (calcitriol)", "vitamin K", "vitamin B12", "angiotensinogen"], answer: 0 },
    { options: ["phosphate", "bicarbonate", "magnesium", "chloride"], answer: 0 }
  ],
  why: "Lost endocrine functions: ↓EPO → anemia; ↓calcitriol + phosphate retention → low Ca²⁺, bone loss."
},
{ sys: "kidney", type: "mc",
  stem: "Which finding confirms CKD rather than AKI?",
  options: ["Creatinine rose from 1.0 to 1.4 in 36 hours", "eGFR 48 on three checks over 5 months", "One eGFR of 55 during pneumonia", "Urine output 0.3 mL/kg/hr for 8 hours"],
  answer: 1,
  why: "CKD requires abnormality for ≥3 months. A rise of ≥0.3 in 48 hr and low urine output are AKI criteria; one value during acute illness is not CKD."
},
{ sys: "kidney", type: "matrix",
  stem: "Nephrotic syndrome or glomerulonephritis?",
  cols: ["Nephrotic", "Glomerulonephritis"],
  rows: [["Foamy urine", 0], ["Cola-colored urine with RBC casts", 1], ["Albumin 1.8 g/dL", 0], ["BP 168/100 after impetigo", 1], ["Elevated cholesterol and triglycerides", 0], ["Morning periorbital edema with rising creatinine", 1]],
  why: "Nephrotic = leaky filter (heavy protein, low albumin, high lipids, foamy). GN = inflamed filter (hematuria, RBC casts, HTN, falling GFR), often post-infectious."
},
{ sys: "kidney", type: "cloze",
  stem: "In nephrotic syndrome, heavy proteinuria causes {0}, which lowers {1}. Fluid shifts into tissues, the body senses low circulating volume, and {2} retain more sodium and water.",
  blanks: [
    { options: ["hypoalbuminemia", "hyperalbuminemia", "hematuria", "hyperkalemia"], answer: 0 },
    { options: ["plasma oncotic pressure", "hydrostatic pressure", "GFR", "afterload"], answer: 0 },
    { options: ["RAAS and ADH", "BNP and ANP", "EPO and calcitriol", "histamine and leukotrienes"], answer: 0 }
  ],
  why: "Proteinuria → hypoalbuminemia → ↓oncotic pressure → edema → low effective volume → RAAS/ADH → more retention that also leaks out."
},

/* ---------- GU ---------- */
{ sys: "gu", type: "matrix",
  stem: "Cystitis or pyelonephritis?",
  cols: ["Cystitis", "Pyelonephritis"],
  rows: [["Suprapubic pain and urgency, afebrile", 0], ["CVA tenderness", 1], ["Fever 102.4°F with chills", 1], ["Dysuria and cloudy urine only", 0], ["Nausea, vomiting, flank pain", 1]],
  why: "Cystitis = local bladder symptoms. Pyelo = kidney involvement: flank pain, CVA tenderness, and systemic signs (fever, chills, N/V)."
},
{ sys: "gu", type: "sata",
  stem: "Which clients have increased UTI risk? Select all that apply.",
  options: ["A woman who uses spermicide", "A man with BPH and post-void residual of 250 mL", "A client with an indwelling catheter", "A client with renal calculi causing stasis", "A man with a 20 cm urethra and complete emptying", "A client drinking 3 L of water daily with no symptoms"],
  answer: [0, 1, 2, 3],
  why: "Spermicide (irritant), incomplete emptying/obstruction (stasis), catheters (introduce bacteria, give surface), stones (stasis). Long urethra and full emptying are protective."
},
{ sys: "gu", type: "mc",
  stem: "An 84-year-old in long-term care is newly confused and fell twice this week. No fever, no urinary complaints. The nurse should:",
  options: ["Attribute it to normal aging", "Consider a UTI among the causes and do a thorough assessment", "Diagnose a UTI based on confusion alone", "Wait for a fever before assessing further"],
  answer: 1,
  why: "Older adults may present atypically with confusion, agitation, falls, or decline. Consider UTI, but confusion doesn't automatically mean UTI; new confusion is never just normal aging."
},
{ sys: "gu", type: "cloze",
  stem: "A kidney stone moving into the ureter causes {0} pain that radiates to the {1}. If the obstruction persists, urine backs up causing {2}, a postrenal AKI.",
  blanks: [
    { options: ["sudden, severe colicky flank", "dull, chronic suprapubic", "positional pleuritic", "burning epigastric"], answer: 0 },
    { options: ["groin and inner thigh", "left arm and jaw", "shoulder blade", "umbilicus only"], answer: 0 },
    { options: ["hydronephrosis", "nephrotic syndrome", "glomerulonephritis", "cor pulmonale"], answer: 0 }
  ],
  why: "Ureter stretches and spasms around the stone → renal colic radiating to abdomen, groin, inner thigh. Persistent block → hydronephrosis → postrenal AKI."
},
{ sys: "gu", type: "mc",
  stem: "A client with a 7 mm ureteral stone now has temperature 102.6°F and chills. Why is this urgent?",
  options: ["Fever means the stone is dissolving", "An obstructed, infected kidney can rapidly cause sepsis", "Fever indicates glomerulonephritis", "Stones cannot cause infection"],
  answer: 1,
  why: "Obstruction → stasis → bacteria multiply behind the stone; trapped pus → sepsis (beyond lectures: urologic emergency)."
},
{ sys: "gu", type: "matrix",
  stem: "BPH, acute bacterial prostatitis, or chronic prostatitis?",
  cols: ["BPH", "Acute prostatitis", "Chronic prostatitis"],
  rows: [["Gradual weak stream and nocturia, age 68, afebrile", 0], ["Sudden fever and perineal pain after catheter removal", 1], ["Pain with ejaculation and recurrent UTIs", 2], ["Increased cell number (hyperplasia)", 0], ["Risk of sepsis", 1]],
  why: "BPH = gradual obstruction from hyperplasia, no fever. Acute = sudden, bacterial (E. coli), febrile, sepsis risk. Chronic = persistent pelvic pain, recurrent UTIs, ejaculatory pain."
},
{ sys: "gu", type: "selectn", n: 2,
  stem: "A client with BPH asks how an enlarged prostate could hurt his kidneys. Select the 2 most accurate links.",
  options: ["Incomplete emptying causes stasis and UTI that can ascend", "Back pressure from obstruction causes hydronephrosis (postrenal AKI)", "Hyperplasia produces immune complexes that attack glomeruli", "The prostate secretes nephrotoxins", "BPH lowers plasma oncotic pressure"],
  answer: [0, 1],
  why: "Stasis → infection that can climb; severe obstruction → back pressure → hydronephrosis → postrenal AKI."
},

/* ---------- PRIORITY (cross-system) ---------- */
{ sys: "kidney", type: "mc",
  stem: "A client with pyelonephritis now has BP 86/50, HR 122, urine output 18 mL/hr (70 kg). This suggests:",
  options: ["Expected pyelonephritis findings", "Sepsis with poor renal perfusion and possible AKI", "Cystitis recovery", "Nephrotic syndrome"],
  answer: 1,
  why: "Hypotension + falling urine output (<35 mL/hr for 70 kg) = sepsis lowering kidney perfusion; AKI worsens in a vicious cycle."
}
];

/* Sort It games: two buckets */
window.SORTS = [
  { id: "artven", title: "Arterial vs. Venous", a: "Arterial (PAD)", b: "Venous (CVI)", sys: "card1",
    items: [["Weak/absent pulses", "a"], ["Brown hemosiderin staining", "b"], ["Pale, shiny, hairless skin", "a"], ["Edema improves with elevation", "b"], ["Ulcer on toes, round and dry", "a"], ["Moist ulcer at medial malleolus", "b"], ["Claudication with walking", "a"], ["Heavy, achy legs after standing", "b"], ["Cool extremity", "a"], ["Stasis dermatitis", "b"]] },
  { id: "lrhf", title: "Left vs. Right Heart Failure", a: "Left-sided", b: "Right-sided", sys: "card2",
    items: [["Crackles", "a"], ["JVD", "b"], ["Orthopnea", "a"], ["Ascites", "b"], ["Pink frothy sputum", "a"], ["Hepatomegaly", "b"], ["PND", "a"], ["Dependent edema", "b"], ["S3 with dyspnea on exertion", "a"], ["Rapid weight gain, bloating", "b"]] },
  { id: "nephr", title: "Nephrotic vs. Glomerulonephritis", a: "Nephrotic (leaky)", b: "GN (inflamed)", sys: "kidney",
    items: [["Foamy urine", "a"], ["Cola-colored urine", "b"], ["Albumin very low", "a"], ["RBC casts", "b"], ["High lipids", "a"], ["Hypertension common", "b"], ["Protein ≥3.5 g/day", "a"], ["Follows skin infection", "b"], ["Minimal change disease (kids)", "a"], ["Rising creatinine early", "b"]] },
  { id: "tb", title: "Latent vs. Active TB", a: "Latent", b: "Active", sys: "resp",
    items: [["Not contagious", "a"], ["Night sweats", "b"], ["Sputum negative", "a"], ["Airborne spread", "b"], ["Asymptomatic", "a"], ["Weight loss", "b"], ["Granuloma wall holds", "a"], ["Cavitary lung lesions", "b"]] },
  { id: "pneumohemo", title: "Pneumothorax vs. Hemothorax", a: "Air (pneumo)", b: "Blood (hemo)", sys: "resp",
    items: [["Hyperresonant", "a"], ["Dull to percussion", "b"], ["Collects at apex", "a"], ["Pools at base", "b"], ["Apical bleb rupture", "a"], ["Hypovolemic shock", "b"], ["Tall thin young male", "a"], ["Chest tube drains frank blood", "b"]] },
  { id: "asthcopd", title: "Asthma vs. COPD", a: "Asthma", b: "COPD", sys: "resp",
    items: [["Reversible", "a"], ["Irreversible", "b"], ["IgE type I hypersensitivity", "a"], ["Elastase destroys alveoli", "b"], ["Any age, episodic", "a"], ["Barrel chest", "b"], ["Spirometry improves after albuterol", "a"], ["Compensated respiratory acidosis at baseline", "b"], ["Clubbing", "b"], ["Not diagnosed under age 2", "a"]] },
  { id: "bactvir", title: "Bacterial vs. Viral Pneumonia", a: "Bacterial", b: "Viral", sys: "resp",
    items: [["Rust-colored sputum", "a"], ["Dry cough", "b"], ["Abrupt high fever", "a"], ["Gradual onset", "b"], ["One-lobe consolidation", "a"], ["Bilateral infiltrates", "b"], ["High WBC", "a"], ["Normal WBC", "b"]] },
  { id: "cystpyelo", title: "Cystitis vs. Pyelonephritis", a: "Cystitis", b: "Pyelonephritis", sys: "gu",
    items: [["Suprapubic pain", "a"], ["CVA tenderness", "b"], ["Urgency and frequency only", "a"], ["Fever and chills", "b"], ["No systemic signs", "a"], ["Nausea and vomiting", "b"], ["Bladder spasms", "a"], ["Can cause AKI and sepsis", "b"]] },
  { id: "pericmi", title: "Pericarditis vs. MI", a: "Pericarditis", b: "MI", sys: "card2",
    items: [["Better leaning forward", "a"], ["Troponin rising", "b"], ["PR depression", "a"], ["Diaphoresis, crushing pressure", "b"], ["Friction rub", "a"], ["Older with diabetes, HTN, smoking", "b"], ["Recent viral illness, age 22", "a"], ["Unrelieved by position", "b"]] },
  { id: "akickd", title: "AKI vs. CKD", a: "AKI", b: "CKD", sys: "kidney",
    items: [["Hours to days", "a"], ["≥3 months", "b"], ["Creatinine ↑ 0.4 in 48 hr", "a"], ["Anemia from ↓EPO", "b"], ["Often reversible", "a"], ["Uremic frost", "b"], ["Sudden weight gain, oliguria", "a"], ["Bone disease", "b"]] }
];

/* Chain builder: put steps in order */
window.CHAINS = [
  { id: "ath", sys: "card1", title: "Atherosclerosis", steps: ["Endothelial injury ↓ nitric oxide", "LDL enters intima and is oxidized", "Monocytes become macrophages", "Foam cells form a fatty streak", "Smooth muscle builds a fibrous cap", "Foam cells die → necrotic core", "Plaque ruptures or forms thrombus"] },
  { id: "pe", sys: "card1", title: "DVT to PE to shock", steps: ["Virchow's triad forms a deep vein clot", "Clot fragment enters the vena cava", "Passes through the RA and RV", "Lodges in a pulmonary artery", "Pulmonary vascular resistance rises", "RV dilates and septum bulges into LV", "↓Stroke volume → obstructive shock"] },
  { id: "tb", sys: "resp", title: "TB infection", steps: ["Bacillus inhaled into alveoli", "Alveolar macrophage engulfs it", "Lipid-rich wall blocks lysosome fusion", "T cells recruit more macrophages", "Granuloma with caseous necrosis forms", "Immunosuppression breaks the wall", "Active TB with cavitation"] },
  { id: "pna", sys: "resp", title: "Pneumonia acid-base", steps: ["Exudate floods alveoli (shunt)", "Hypoxemia", "Tachypnea blows off CO₂", "Respiratory alkalosis", "Client tires; secretions block bronchioles", "CO₂ trapped", "Respiratory acidosis"] },
  { id: "neph", sys: "kidney", title: "Nephrotic edema", steps: ["Glomerular barrier damaged", "Heavy proteinuria", "Hypoalbuminemia", "↓Plasma oncotic pressure", "Fluid shifts into tissues", "Body senses low circulating volume", "RAAS and ADH retain more Na⁺ and water"] },
  { id: "hf", sys: "card2", title: "Heart failure compensation spiral", steps: ["Ventricle fails → ↓cardiac output", "Body reads it as hypovolemia", "SNS, RAAS, ADH activate", "Vasoconstriction and fluid retention", "↑Afterload and ↑preload", "More work and O₂ demand for the heart", "Remodeling and worsening failure"] },
  { id: "pyelo", sys: "gu", title: "Cystitis to sepsis", steps: ["E. coli ascends the urethra", "Bacteria invade bladder mucosa (cystitis)", "Bacteria ascend a ureter", "Renal pelvis infected (pyelonephritis)", "Bacteria enter the bloodstream", "Sepsis lowers BP and renal perfusion", "AKI"] },
  { id: "mi", sys: "card2", title: "MI timeline", steps: ["Coronary occlusion", "Seconds: aerobic metabolism stops", "~20 min: subendocardial necrosis begins", "Troponin rises at 2–4 hr", "24–48 hr: neutrophils infiltrate", "Days 2–4: WBC peaks", "2–4 wk: macrophages lay scar (remodeling)"] },
  { id: "bph", sys: "gu", title: "BPH to kidney injury", steps: ["Prostate cells multiply (hyperplasia)", "Urethra narrows", "Bladder strains, wall thickens", "Incomplete emptying", "Urinary stasis and retention", "Back pressure up the ureters", "Hydronephrosis → postrenal AKI"] },
  { id: "tension", sys: "resp", title: "Tension pneumothorax", steps: ["Chest wall/lung flap acts as one-way valve", "Air enters the pleural space but can't exit", "Intrapleural pressure rises", "Lung collapses", "Mediastinum shifts to the unaffected side", "Vena cava compressed → ↓preload", "Hypotension, obstructive shock"] }
];

/* Who first? priority sets */
window.TRIAGE = [
  { sys: "resp", stem: "You receive report on four clients. Who do you see first?",
    clients: ["COPD client, SpO₂ 90% on 2 L, barrel chest, at baseline", "Client post-MVC with sudden dyspnea, JVD, trachea deviated right, BP 84/52", "Asthma client wheezing, improving after albuterol, SpO₂ 95%", "Acute bronchitis client with productive cough, afebrile"],
    answer: 1, why: "Tension pneumothorax “will always be your priority patient”: obstructive shock. The COPD findings are baseline, the asthma client is responding, bronchitis is self-limiting." },
  { sys: "card1", stem: "Which client needs the nurse first?",
    clients: ["PAD client with claudication after one block", "Client with known AAA, new sudden back pain, BP 80/48, HR 130", "CVI client with brawny edema and hemosiderin staining", "HTN client, BP 158/94, asymptomatic"],
    answer: 1, why: "Sudden back pain with hypotension and tachycardia in AAA = rupture/dissection → hypovolemic shock. Others are chronic or stable." },
  { sys: "card2", stem: "Four cardiac clients. Who is the priority?",
    clients: ["Stable angina client, pain resolved with rest 10 min ago", "Pericarditis client, sharp pain better leaning forward, troponin normal", "Client with chest pain at rest for 30 min, diaphoretic, troponin rising", "HF client with 1+ ankle edema, weight unchanged"],
    answer: 2, why: "Pain >20 min at rest with rising troponin = MI in progress: necrosis and dysrhythmia risk. The others are expected or stable." },
  { sys: "kidney", stem: "Which kidney client is most at risk right now?",
    clients: ["CKD client with chronic anemia, Hgb 10.1", "AKI client with K⁺ 6.7 and HR 48", "Nephrotic client with periorbital edema", "CKD client reporting pruritus"],
    answer: 1, why: "Hyperkalemia with bradycardia in AKI can progress to cardiac arrest. The others are expected chronic findings." },
  { sys: "gu", stem: "Which urinary client should the nurse assess first?",
    clients: ["Cystitis client with dysuria and frequency", "BPH client with nocturia ×3", "Pyelonephritis client, BP 84/50, HR 124, urine 15 mL/hr", "Client with a passing stone, pain 6/10 after analgesic"],
    answer: 2, why: "Pyelonephritis with hypotension, tachycardia, and oliguria suggests sepsis with poor renal perfusion and possible AKI." },
  { sys: "resp", stem: "A pulmonary unit. Who first?",
    clients: ["Asthma client whose PaCO₂ went from 30 to 44 over an hour, now drowsy", "Pneumonia client, temp 101°F, productive cough", "Latent TB client asking about medication", "Spontaneous pneumothorax client with chest tube, SpO₂ 96%"],
    answer: 0, why: "In asthma a “normalizing” CO₂ plus drowsiness means fatigue and impending hypercapnic failure (status asthmaticus)." },
  { sys: "card1", stem: "Post-op day 2 surgical unit. Who first?",
    clients: ["Client with unilateral calf warmth and swelling", "Client with sudden dyspnea, pleuritic chest pain, HR 126, SpO₂ 86%", "Client with incision pain 5/10", "Client with mild ankle edema bilaterally"],
    answer: 1, why: "Sudden dyspnea, pleuritic pain, tachycardia, hypoxemia after surgery = PE. The DVT client is next (risk of PE)." },
  { sys: "card2", stem: "Telemetry unit. Who first?",
    clients: ["AFib client, rate 88, on anticoagulant, alert", "AFib client with new right arm weakness and slurred speech", "Sinus brady 54 in a runner, BP 120/76", "Sinus tachy 106 with fever 101.2°F"],
    answer: 1, why: "New weakness and slurred speech in AFib = embolic stroke (clot from pooling atria)." }
];
