/* Pharm Exam 2 standard drug cards: every drug shows the same four fields.
   moa, use, contra: condensed from "Exam 2 Drug Tables - Combined" (ATI).
   se / ae: only the effects that point to this drug, not ones most drugs share (plain nausea, headache, GI upset).
   ==text== marks wording that is on the instructor's Exam 2 study guide; it renders highlighted and underlined.
   sg: other study-guide takeaways that don't fit the four fields (nursing priorities, administration, interactions).
   Drugs the instructor guide skipped (window.GUIDE.added) have no highlights. */
window.CARDS = {
  /* ---------- Blood pressure ---------- */
  "doxazosin": {
    moa: "Blocks alpha1-adrenergic receptors, dilating arteries and veins.",
    use: "==Hypertension==; BPH (ATI). The instructor guide also lists ==stable angina==, likely copied from the nifedipine slide; ask which they expect.",
    se: "==Dizziness, fatigue, headache, nausea, nasal congestion, drowsiness; orthostatic hypotension and syncope can occur==, especially after the first dose or a dose increase.",
    ae: "Intraoperative floppy iris syndrome (IFIS); priapism (rare).",
    contra: "Allergy to the drug or class. Use cautiously with a history of orthostatic hypotension or severe liver impairment.",
    sg: [["Nursing priorities", "==Monitor BP.=="]]
  },
  "hydralazine-hydrochloride": {
    moa: "==Decreases peripheral resistance but at the same time raises cardiac output==; acts directly on vascular smooth muscle.",
    use: "Hypertension that does not improve with other medications.",
    se: "Flushing, tachycardia, peripheral edema.",
    ae: "==Dizziness, anxiety, reflex tachycardia, heart failure, edema==; systemic lupus erythematosus (SLE)-like syndrome.",
    contra: "Hypersensitivity.",
    sg: [["Nursing priorities", "==Monitor BP.=="]]
  },
  "lisinopril": {
    moa: "Inhibits ACE so angiotensin I can't become angiotensin II: less vasoconstriction and less aldosterone, so sodium is excreted and potassium is retained.",
    use: "Hypertension; heart failure (adjunct); lowers mortality after MI.",
    se: "==Dry, persistent cough, dizziness, hypotension==; taste changes.",
    ae: "==Angioedema, hyperkalemia==; renal insufficiency, blood dyscrasias.",
    contra: "History of angioedema, pregnancy, bilateral renal artery stenosis, hyperkalemia, ARNI (sacubitril/valsartan) within the last 36 hr.",
    sg: [["Nursing priorities", "==Monitor BP and renal function (serum creatinine, BUN). Assess for angioedema and breathing difficulty.=="]]
  },
  "losartan": {
    moa: "Blocks angiotensin II from binding its receptors in blood vessels, causing vasodilation.",
    use: "Hypertension; lowers stroke risk with hypertension and left ventricular hypertrophy; protects the kidneys in type 2 diabetes with proteinuria.",
    se: "Dizziness, nasal congestion, back pain. No ACE-inhibitor cough.",
    ae: "==Hyperkalemia, angioedema, severe hypotension, renal impairment (rare).==",
    contra: "Allergy to ARBs, pregnancy, severe kidney or liver impairment.",
    sg: [["Nursing priorities", "==Monitor BP, electrolytes, renal function. Monitor for angioedema.=="]]
  },
  "metoprolol": {
    moa: "Blocks beta1 receptors in the heart, lowering heart rate, contractility, and cardiac output, which reduces cardiac workload and oxygen demand.",
    use: "==Hypertension; angina; prevent MI; heart failure in specific cases; arrhythmias.== Also migraine prevention and thyrotoxicosis.",
    se: "Fatigue, cold extremities, erectile dysfunction, decreased libido; masks hypoglycemia signs and causes glucose intolerance.",
    ae: "Bradycardia, heart block, severe hypotension, worsening heart failure, bronchospasm, hypoglycemia, depression.",
    contra: "Bradycardia, 2nd or 3rd degree heart block, cardiogenic shock, uncompensated heart failure, pulmonary edema, sick sinus syndrome, cocaine-induced chest pain, untreated pheochromocytoma.",
    sg: [["Nursing priorities", "==Monitor BP and HR; watch for heart failure: shortness of breath, edema, weight gain.=="]]
  },
  "nifedipine": {
    moa: "Blocks calcium influx across cell membranes, dilating coronary and peripheral arterioles.",
    use: "==Hypertension, stable angina==; also vasospastic angina.",
    se: "Facial flushing, headache, palpitations, gingival hyperplasia.",
    ae: "Peripheral edema, reflex tachycardia, bradycardia, heart block, hypotension, rebound hypertension if stopped abruptly.",
    contra: "Calcium channel blocker allergy, heart block, sick sinus syndrome, renal or hepatic impairment, pregnancy, breastfeeding.",
    sg: [["Nursing priorities", "==Monitor BP; monitor for edema; monitor for tachycardia/bradycardia.=="]]
  },
  "nitroglycerin": {
    moa: "==Converts to nitric oxide (NO), relaxing vascular smooth muscle → vasodilation.== Dilates coronary arteries (more blood flow) and veins (less preload), lowering myocardial oxygen demand.",
    use: "==Angina pectoris, hypertensive emergencies, coronary artery spasm, heart failure==; acute MI.",
    se: "Headache (expected), flushing, orthostatic hypotension, dizziness; dermatitis with the patch.",
    ae: "Profound hypotension, reflex tachycardia, syncope and falls, methemoglobinemia.",
    contra: "==PDE-5 inhibitors (sildenafil)==, increased intracranial pressure, right-sided MI, severe anemia, hypovolemia, shock, pericardial tamponade or constrictive pericarditis.",
    sg: [["Nursing priorities", "==Monitor BP and O₂. Do not take with PDE-5 inhibitors (sildenafil).=="]]
  },

  /* ---------- Cholesterol ---------- */
  "atorvastatin": {
    moa: "Inhibits HMG-CoA reductase, the liver enzyme needed to make cholesterol, and lowers VLDL production.",
    use: "Lowers total cholesterol, LDL, and triglycerides and raises HDL; prevents cardiovascular events from atherosclerosis and after MI.",
    se: "Mild GI effects (gas, constipation); usually well tolerated.",
    ae: "==Myopathies, myalgia, rhabdomyolysis, acute kidney injury, hepatotoxicity==; increased blood glucose, memory loss.",
    contra: "Severe liver impairment, pregnancy, breastfeeding, statin allergy.",
    sg: [["Nursing priorities", "==Assess liver function before giving. Monitor for myopathies.=="]]
  },
  "ezetimibe": {
    moa: "==Inhibits absorption of cholesterol in the small intestine.==",
    use: "Lowers total cholesterol, LDL, and triglycerides and raises HDL.",
    se: "Rhinorrhea, sore throat.",
    ae: "Myopathy and rhabdomyolysis (most likely when combined with a statin), hepatotoxicity.",
    contra: "Pregnancy, breastfeeding, active liver disease, elevated liver enzymes.",
    sg: [["Nursing priorities", "==Baseline liver enzymes and lipid panel. Monitor for muscle pain. Watch for liver injury: fatigue, anorexia, abdominal pain, jaundice, dark urine.=="]]
  },
  "gemfibrozil": {
    moa: "Activates PPAR-alpha in the liver and fat tissue, boosting the enzyme that breaks down triglycerides; lowers VLDL and raises HDL.",
    use: "==Reduce hypertriglyceridemia and increase HDL.==",
    se: "Dyspepsia, abdominal pain.",
    ae: "Cholelithiasis (gallstones), hepatotoxicity, myopathy, rhabdomyolysis.",
    contra: "Active liver or gallbladder disease, severe renal dysfunction.",
    sg: [["Nursing priorities", "==Monitor/report GI or gallbladder manifestations and myopathies. Monitor liver function tests and triglycerides.=="]]
  },
  "niacin": {
    moa: "Prevents lipolysis in fat tissue and slows fatty acid synthesis in the liver.",
    use: "Dyslipidemia (adjunct); high triglycerides with pancreatitis risk; pellagra.",
    se: "==Flushing, generalized pruritus, burning sensation of the face and chest.==",
    ae: "==Hyperuricemia, gout==; hepatotoxicity, macular edema.",
    contra: "Regular alcohol use, active peptic ulcer disease, active liver disease, arterial bleeding, pregnancy, lactation.",
    sg: [["Nursing priorities", "==Monitor for flushing and/or pruritus; assess lipid levels.=="]]
  },

  /* ---------- Anticoagulants ---------- */
  "alteplase": {
    moa: "Converts plasminogen to plasmin, which ==breaks down fibrin and fibrinogen to dissolve the thrombus==. ==The only true clot buster.==",
    use: "Acute MI, pulmonary embolism, acute ischemic stroke, occluded IV catheters.",
    se: "Minor bleeding, reperfusion PVCs.",
    ae: "==Hemorrhage==, including intracranial hemorrhage; reperfusion arrhythmias (V-tach); anaphylaxis.",
    contra: "Active or internal bleeding, recent intracranial hemorrhage, BP above 180/110, intracranial lesions, ischemic stroke or major head trauma in the last 3 months, recent brain or spine surgery, surgery in the last 3 weeks, possible aortic dissection, pregnancy.",
    sg: [["Nursing priorities", "==Monitor for bleeding. Monitor aPTT, CBC, fibrinogen. Assess neurological status. Monitor BP.=="]]
  },
  "apixaban": {
    moa: "Inhibits factor Xa (and thrombin-induced platelet aggregation).",
    use: "==Atrial fibrillation (reduce DVT/PE and stroke risk); treat DVT and PE.==",
    se: "Epistaxis, bruising, bleeding that takes longer to stop.",
    ae: "Hemorrhage, including spontaneous GI or bladder bleeding; anemia.",
    contra: "==Bleeding (history of GI bleed), severe liver damage, prosthetic heart valves==; spinal puncture or anesthesia, pregnancy or lactation, triple-positive antiphospholipid syndrome.",
    sg: [["Nursing priorities", "==Monitor for DVT, stroke, bleeding, peripheral vascular disease, PE.=="]]
  },
  "aspirin": {
    moa: "Inhibits prostaglandin production (less inflammation, fever, and pain) and reduces platelet aggregation.",
    use: "==Pain; cardiovascular and ischemic risk reduction (antiplatelet effect)==; inflammation, fever.",
    se: "Epigastric distress, dyspepsia.",
    ae: "GI ulceration and bleeding, salicylate toxicity (tinnitus), Reye syndrome in children, intracranial hemorrhage.",
    contra: "Salicylate allergy (or ibuprofen cross-allergy), bleeding disorders, peptic ulcer disease or gastritis, children (Reye syndrome), asthma (bronchospasm).",
    sg: [["Nursing assessment", "==Monitor for GI bleeding: black/dark stools, abdominal pain, nausea, hematemesis. Monitor GI symptoms.=="]]
  },
  "clopidogrel": {
    moa: "Irreversibly blocks the platelet P2Y12 (ADP) receptor so platelets can't clump; activated by liver CYP enzymes.",
    use: "Unstable angina; secondary prevention after MI, stroke, or peripheral arterial disease; keeps coronary stents from reclosing.",
    se: "Bruising, nosebleeds, rash, pruritus.",
    ae: "Major bleeding, thrombotic thrombocytopenic purpura (TTP, rare), gastric ulceration and bleeding.",
    contra: "Active bleeding, peptic ulcer disease, bleeding disorders, thrombocytopenia, anaphylaxis to clopidogrel.",
    sg: []
  },
  "enoxaparin": {
    moa: "Low molecular weight heparin: inhibits factor X(a), so clots can't form or grow.",
    use: "Prevent DVT; treat DVT with or without PE; prevent ischemic complications of NSTEMI and unstable angina.",
    se: "Bleeding, thrombocytopenia, injection-site bruising.",
    ae: "Hemorrhage.",
    contra: "Active bleeding, known allergy.",
    sg: []
  },
  "heparin": {
    moa: "Inhibits factor Xa and thrombin.",
    use: "==Ischemic stroke, PE, DVT; MI, unstable chest pain, dysrhythmias==; prevents clotting during procedures and in DIC.",
    se: "Bleeding, thrombocytopenia.",
    ae: "Hemorrhage, heparin-induced thrombocytopenia, anaphylaxis.",
    contra: "Uncontrollable bleeding, severe thrombocytopenia, pregnancy, lumbar or regional anesthesia, surgery of the brain, eyes, or spinal cord.",
    sg: [["Nursing priorities", "==Monitor pulse and BP; monitor for bleeding; monitor aPTT to adjust infusion dosing; monitor for thrombocytopenia.=="]]
  },
  "warfarin": {
    moa: "==Interrupts the vitamin K cycle, reducing active clotting factors.==",
    use: "Prevent venous or arterial thrombosis and embolism (AFib, DVT, PE, mechanical valves).",
    se: "Bleeding of mucous membranes, bruising.",
    ae: "Hemorrhage, toxicity (high INR). Antidote: vitamin K.",
    contra: "Pregnancy, uncontrollable bleeding, vitamin K deficiency, thrombocytopenia, alcohol use disorder or liver disease, lumbar puncture, regional anesthesia, brain, eye, or spinal cord surgery.",
    sg: [["Nursing priorities", "==Monitor pulse and BP. Monitor PT/INR. Monitor for bleeding.=="]]
  },

  /* ---------- Dysrhythmias & contractility ---------- */
  "adenosine": {
    moa: "==Restores sinus rhythm by slowing impulses through the AV node.==",
    use: "==Convert an arrhythmia (SVT) to sinus rhythm.==",
    se: "Facial flushing, metallic taste, a brief pause (asystole) on the monitor.",
    ae: "==Arrhythmias such as V-tach, MI, palpitations, difficulty breathing==; bronchospasm, hypotension.",
    contra: "Sick sinus syndrome, 2nd or 3rd degree AV block, MI or ischemia, breastfeeding, hypersensitivity.",
    sg: []
  },
  "amiodarone": {
    moa: "Class III: lengthens the action potential and refractory period, prolonging the PR and QT intervals and slowing the sinus rate.",
    use: "==Supraventricular and ventricular arrhythmias.==",
    se: "Photosensitivity, anorexia, fatigue.",
    ae: "Pulmonary fibrosis, bradycardia, hypotension, worsening arrhythmia, ARDS, toxic epidermal necrolysis, ataxia.",
    contra: "Iodine or amiodarone allergy, 2nd or 3rd degree AV block, severe sick sinus syndrome, cardiogenic shock, bradycardia without a pacemaker, breastfeeding. ==Precautions: thyroid disorder, severe liver disease, severe pulmonary disease.==",
    sg: []
  },
  "digoxin": {
    moa: "Inhibits the Na⁺/K⁺-ATPase pump, raising calcium in heart cells for a stronger contraction; prolongs the AV node refractory period and slows the heart rate.",
    use: "==Atrial fibrillation, atrial flutter==; heart failure.",
    se: "Asymptomatic bradycardia, anorexia, nausea and vomiting (early toxicity signs).",
    ae: "Symptomatic bradycardia, heart blocks and arrhythmias, visual changes (yellow-green halos), confusion.",
    contra: "Ventricular dysrhythmias, heart block, low potassium or magnesium, Wolff-Parkinson-White syndrome, MI, hypersensitivity.",
    sg: [["Nursing priority", "==Take the apical heart rate; hold the dose if HR <60/min.=="]]
  },
  "diltiazem": {
    moa: "Class IV calcium channel blocker: keeps calcium out of the slow channels of heart and vascular muscle.",
    use: "==Convert supraventricular tachyarrhythmias to sinus rhythm; slow the rate of atrial flutter and AFib.==",
    se: "Peripheral edema, weight gain, nocturia.",
    ae: "==Bradycardia, hypotension, heart failure==; Stevens-Johnson syndrome, liver toxicity.",
    contra: "2nd or 3rd degree AV block without a pacemaker, hypotension, recent MI, breastfeeding, hypersensitivity.",
    sg: [["Nursing priority", "==BP, HR, ECG.=="]]
  },

  /* ---------- Diuretics ---------- */
  "furosemide": {
    moa: "Loop diuretic: blocks sodium and chloride reabsorption in the ascending loop of Henle, so sodium, chloride, potassium, magnesium, calcium, and water are excreted.",
    use: "==Pulmonary edema in heart failure; edema from renal, hepatic, or heart failure==; hypertension.",
    se: "Hypokalemia and other electrolyte losses, orthostatic hypotension, photosensitivity, tinnitus, hyperuricemia.",
    ae: "Ototoxicity and hearing loss, severe electrolyte imbalance, hyperglycemia, Stevens-Johnson syndrome, blood dyscrasias.",
    contra: "Anuria, hepatic coma, dehydration or electrolyte imbalance, hypersensitivity.",
    sg: [["Nursing priority", "==Assess potassium and BP before giving.=="]]
  },
  "hydrochlorothiazide": {
    moa: "==Increases sodium and water excretion by preventing sodium reabsorption in the distal tubule== (blocks the Na-Cl transporter); potassium and magnesium are lost too.",
    use: "Hypertension; edema from heart failure, liver disease, or kidney problems.",
    se: "Hyperglycemia, hyperuricemia (gout), hyperlipidemia, photosensitivity, orthostatic hypotension.",
    ae: "==Electrolyte imbalances: hypokalemia, hyponatremia, dehydration==; acute angle-closure glaucoma, pancreatitis, metabolic alkalosis.",
    contra: "Sulfa allergy (cross-reactivity), anuria, hypotension, electrolyte imbalance, severe liver disease, adrenal insufficiency, breastfeeding.",
    sg: [["Nursing priority", "==BP, daily weights, edema, electrolytes.=="]]
  },
  "mannitol": {
    moa: "Osmotic diuretic: raises plasma osmolality, pulling water out of the brain and CSF into the blood; it isn't reabsorbed by the tubule, so water and sodium follow it out.",
    use: "==Acute renal failure; reduce intracranial pressure from cerebral edema.==",
    se: "Thirst, dry mouth.",
    ae: "==Dehydration, pulmonary edema, worsening heart failure, seizures, confusion.==",
    contra: "==Anuria, pulmonary edema, active intracranial bleeding==; severe dehydration.",
    sg: []
  },
  "spironolactone": {
    moa: "Aldosterone antagonist: blocks sodium reabsorption in the distal tubule and collecting duct while potassium is kept. Also blocks androgen receptors.",
    use: "==Hypertension; edema from heart failure, cirrhosis, nephrotic syndrome; hypokalemia==; improves heart failure survival; feminizing therapy in transgender women.",
    se: "Gynecomastia, breast tenderness, menstrual irregularities, erectile dysfunction, deepening voice, hirsutism.",
    ae: "Hyperkalemia (muscle weakness, palpitations, dysrhythmias), Stevens-Johnson syndrome, agranulocytosis.",
    contra: "Hyperkalemia, renal failure, anuria, pregnancy (teratogenic), hypersensitivity.",
    sg: [["Nursing priority", "==Monitor serum potassium. If hyperkalemia occurs, monitor for cardiac dysrhythmias.=="]]
  },

  /* ---------- Urinary, sexual, hormones ---------- */
  "oxybutynin": {
    moa: "Anticholinergic: inhibits acetylcholine to relax the bladder (detrusor) smooth muscle.",
    use: "Overactive bladder (urinary antispasmodic): decreases urgency and frequency.",
    se: "Anticholinergic: dry mouth, constipation, blurred vision, drowsiness.",
    ae: "Confusion and hallucinations (older adults), tachycardia, angioedema.",
    contra: "Urinary retention, intestinal obstruction, narrow-angle glaucoma, hypersensitivity.",
    sg: []
  },
  "tamsulosin": {
    moa: "Blocks alpha1 receptors in the prostate and bladder neck, relaxing the smooth muscle so urine flows.",
    use: "BPH.",
    se: "==Dizziness, headache, hypotension==; ejaculatory disorders.",
    ae: "Intraoperative floppy iris syndrome (tell the eye surgeon before cataract surgery).",
    contra: "Hypersensitivity to tamsulosin or sulfa.",
    sg: [["Nursing priority", "==Assess BPH urinary symptoms before and after giving. Monitor BP.=="]]
  },
  "sildenafil": {
    moa: "Inhibits phosphodiesterase type 5, increasing blood flow to the penis.",
    use: "Erectile dysfunction, pulmonary arterial hypertension.",
    se: "==Flushing, dyspepsia, headache, dizziness, hypotension.==",
    ae: "Priapism (erection over 4 hr), MI, sudden vision or hearing loss.",
    contra: "Nitrate use, severe hypotension, recent stroke or MI, hepatic impairment, hypersensitivity.",
    sg: [["Interactions", "==Nitrates, alpha-adrenergic receptor antagonists (e.g., tamsulosin, doxazosin).== Together they cause severe hypotension."]]
  },
  "combination-estrogen-progestin": {
    moa: "Prevents ovulation, changes the uterine lining, and thickens cervical mucus so sperm can't enter.",
    use: "Birth control; acne; benign breast disease; ovarian cysts; premenstrual syndrome.",
    se: "Breakthrough bleeding or spotting, breast tenderness, brown skin patches (melasma).",
    ae: "Blood clots, stroke, and MI (warning signs ACHES: abdominal pain, chest pain, headache, eye or vision changes, severe leg pain); liver injury (jaundice, dark urine).",
    contra: "Smoking, history of blood clots, stroke, or MI, breast cancer, uncontrolled hypertension, migraine with aura, pregnancy, breastfeeding, less than 21 days postpartum.",
    sg: []
  },
  "estradiol": {
    moa: "Estrogen: develops the female sex organs and secondary sex characteristics and regulates ovulation.",
    use: "Menopausal symptoms, hypogonadism, osteoporosis, menstrual disorders, contraception, some hormone-sensitive cancers.",
    se: "Breast tenderness, edema, gynecomastia and testicular atrophy in males, hypercalcemia, hyperglycemia.",
    ae: "Thromboembolism, stroke, MI; breast, endometrial, and ovarian cancers.",
    contra: "==Estrogen allergy; thromboembolic disease (DVT, PE, MI); history of breast cancer; liver impairment; undiagnosed vaginal bleeding; pregnancy.==",
    sg: [["Interactions", "==Smoking increases risk of thromboembolic and cardiac adverse effects.=="]]
  },
  "progesterone": {
    moa: "Causes secretory changes in the endometrium, relaxes uterine smooth muscle, and inhibits the pituitary.",
    use: "Suppresses endogenous androgens, reducing masculine characteristics; often used in gender-affirming care.",
    se: "Glucose intolerance, fatigue, mood changes.",
    ae: "DVT, PE, MI; liver toxicity and tumors; meningiomas.",
    contra: "Peanut allergy (oil base), thromboembolism, breast cancer, cardiovascular disease, liver impairment, severe depression, pregnancy.",
    sg: []
  },
  "testosterone": {
    moa: "Androgen: develops the male sex organs and maintains secondary sex characteristics.",
    use: "==Increase male characteristics (low testosterone, transgender clients); delayed puberty; hypogonadism; androgen-responsive breast cancer.==",
    se: "Acne, deepening voice, facial hair, clitoral enlargement; gynecomastia in males.",
    ae: "==DVT, liver toxicity, stroke, suicidal thoughts, PE, anaphylaxis.==",
    contra: "Breast or prostate cancer in males, pregnancy, lactation, hypersensitivity.",
    sg: []
  },

  /* ---------- GI ---------- */
  "metoclopramide": {
    moa: "Blocks dopamine receptors; stimulates upper GI motility and speeds gastric emptying.",
    use: "Nausea and vomiting (also gastroparesis and GERD).",
    se: "Drowsiness, restlessness.",
    ae: "Extrapyramidal symptoms and tardive dyskinesia, which may be irreversible.",
    contra: "GI obstruction or bleeding, seizure disorders, Parkinson's disease, history of tardive dyskinesia, MAOIs, hypersensitivity.",
    sg: [["Nursing priority", "==Assess for: Parkinsonian symptoms (trouble speaking or swallowing, shuffling gait, mask-like face); dystonia (repetitive twisting contractions, inability to move eyes); tardive dyskinesia (involuntary movements of tongue, face, neck).=="]]
  },
  "ondansetron": {
    moa: "Blocks serotonin 5-HT3 receptors to decrease nausea and vomiting.",
    use: "Nausea and vomiting from chemotherapy, radiation, anesthesia, and pregnancy.",
    se: "Headache, constipation.",
    ae: "==QT prolongation, serotonin syndrome==; fetal cleft palate or septal defects; Stevens-Johnson syndrome.",
    contra: "Congenital long QT syndrome, use with apomorphine, hypersensitivity.",
    sg: [["Nursing priority", "==ECG and monitor sodium, potassium, calcium, magnesium in clients with cardiac risk factors.=="]]
  },
  "scopolamine": {
    moa: "Anticholinergic: blocks acetylcholine (M1 receptors) in the CNS.",
    use: "Prevent motion sickness and postoperative nausea and vomiting (PONV).",
    se: "Dry mouth, blurred vision, dilated pupils, drowsiness, urinary hesitancy.",
    ae: "Anticholinergic toxicity: flushed skin, tachycardia, agitation, confusion, urinary retention.",
    contra: "Angle-closure glaucoma, GI obstruction, belladonna alkaloid allergy, pregnancy with pre-eclampsia.",
    sg: []
  },
  "calcium-carbonate": {
    moa: "Neutralizes stomach acid and raises gastric pH.",
    use: "Heartburn, GERD, peptic ulcers, gastritis.",
    se: "Constipation.",
    ae: "Hypercalcemia, renal calculi, bradycardia with overuse.",
    contra: "Hypercalcemia, renal calculi, renal failure, hyperparathyroidism.",
    sg: [["Client teaching", "==Do not take enteric-coated medications within 1 hour.=="],
         ["Nursing priority", "==Assess presenting symptoms and the abdomen. Monitor calcium and phosphorus levels.=="]]
  },
  "famotidine": {
    moa: "Blocks H2 (histamine) receptors on the stomach's parietal cells, reducing acid secretion.",
    use: "Short-term treatment of PUD, GERD, heartburn, and hypersecretory conditions; prevents stress-induced GI bleeding in critically ill clients.",
    se: "Drowsiness, headache.",
    ae: "Confusion (older adults), cardiac arrhythmias, blood disorders (agranulocytosis, aplastic anemia, thrombocytopenia), drug-induced hepatitis.",
    contra: "Hypersensitivity.",
    sg: []
  },
  "pantoprazole": {
    moa: "Proton pump inhibitor: blocks the H⁺/K⁺-ATPase pump in parietal cells, shutting down acid production.",
    use: "==Decreases acid reflux; heals duodenal ulcers and esophagitis.==",
    se: "Flatulence, abdominal pain.",
    ae: "With long-term use: bone fractures, C. difficile infection, vitamin B12 deficiency.",
    contra: "Hypersensitivity to benzimidazoles. ==Precautions: long-term use; clients planning or suspecting pregnancy.==",
    sg: []
  },
  "misoprostol": {
    moa: "Prostaglandin: inhibits gastric acid secretion and increases protective mucus.",
    use: "==Prevent and treat NSAID-induced gastric ulcers.==",
    se: "Diarrhea, uterine cramping, spotting, dysmenorrhea.",
    ae: "Miscarriage.",
    contra: "==Pregnancy, hypersensitivity.==",
    sg: [["Nursing priority", "==Assess abdominal and epigastric pain; blood in stools; assess female clients for pregnancy.=="]]
  },
  "sucralfate": {
    moa: "Forms a thick paste that sticks to the ulcer surface and protects it.",
    use: "==Acute duodenal ulcers.==",
    se: "Constipation.",
    ae: "Hyperglycemia (with the suspension).",
    contra: "Hypersensitivity.",
    sg: [["Administration", "==Give orally on an empty stomach, four times a day: 1 hour before each of the three meals and at bedtime.=="]]
  },
  "dicyclomine": {
    moa: "Blocks acetylcholine, bradykinin, and histamine to stop GI muscle spasm.",
    use: "==Relieves GI muscle spasms (e.g., IBS).==",
    se: "==Dry mouth, thirst, dry skin, drowsiness, dizziness (anticholinergic).==",
    ae: "CNS effects (confusion, hallucinations, agitation); cardiovascular effects.",
    contra: "Infants under 6 months, breastfeeding, glaucoma, myasthenia gravis, obstructive uropathy, GI obstruction, severe ulcerative colitis, reflux esophagitis, unstable cardiovascular status.",
    sg: []
  },
  "rifaximin": {
    moa: "Antibiotic: binds bacterial RNA polymerase so bacteria can't make proteins.",
    use: "==Decrease symptoms of IBS-D; decrease severity of traveler's diarrhea from E. coli.==",
    se: "Few; mostly mild nausea or dizziness (it stays in the gut).",
    ae: "==C. difficile-associated diarrhea.==",
    contra: "Diarrhea with fever or blood, diarrhea from other organisms, hypersensitivity.",
    sg: []
  },
  "sulfasalazine": {
    moa: "Produces an anti-inflammatory effect in the colon.",
    use: "Reduce manifestations of ulcerative colitis.",
    se: "Orange-yellow urine or skin; loss of appetite.",
    ae: "Toxic epidermal necrolysis, agranulocytosis, aplastic anemia, hypersensitivity.",
    contra: "Sulfa or salicylate allergy, intestinal or urinary obstruction.",
    sg: []
  }
};
