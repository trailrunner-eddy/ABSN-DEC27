/* Pharm Exam 2 standard drug cards: every drug shows the same four fields.
   moa, use, contra: condensed from "Exam 2 Drug Tables - Combined" (ATI).
   se / ae: only the effects that point to this drug, not ones most drugs share (plain nausea, headache, GI upset).
   ==text== marks wording that is on the instructor's Exam 2 study guide; it renders highlighted and underlined.
   moaS: the same MOA in plain words, for memory recall.
   np: nursing priorities (study-guide wording highlighted; otherwise from ATI and the guide's "added" rows).
   sg: other study-guide takeaways that don't fit the four fields (nursing priorities, administration, interactions).
   Drugs the instructor guide skipped (window.GUIDE.added) have no highlights. */
window.CARDS = {
  /* ---------- Blood pressure ---------- */
  "doxazosin": {
    moa: "Blocks alpha1-adrenergic receptors, dilating arteries and veins.",
    moaS: "Blocks the \"squeeze\" signal on vessels so they relax and BP drops (also relaxes the prostate).",
    use: "==Hypertension==; BPH (ATI). The instructor guide also lists ==stable angina==, likely copied from the nifedipine slide; ask which they expect.",
    se: "==Dizziness, fatigue, headache, nausea, nasal congestion, drowsiness; orthostatic hypotension and syncope can occur==, especially after the first dose or a dose increase.",
    ae: "Intraoperative floppy iris syndrome (IFIS); priapism (rare).",
    contra: "Allergy to the drug or class. Use cautiously with a history of orthostatic hypotension or severe liver impairment.",
    np: "==Monitor BP.==",
    sg: []
  },
  "hydralazine-hydrochloride": {
    moa: "==Decreases peripheral resistance but at the same time raises cardiac output==; acts directly on vascular smooth muscle.",
    moaS: "Relaxes artery walls directly; the heart speeds up to make up for it.",
    use: "Hypertension that does not improve with other medications.",
    se: "Flushing, tachycardia, peripheral edema.",
    ae: "==Dizziness, anxiety, reflex tachycardia, heart failure, edema==; systemic lupus erythematosus (SLE)-like syndrome.",
    contra: "Hypersensitivity.",
    np: "==Monitor BP.==",
    sg: []
  },
  "lisinopril": {
    moa: "Inhibits ACE so angiotensin I can't become angiotensin II: less vasoconstriction and less aldosterone, so sodium is excreted and potassium is retained.",
    moaS: "Stops the body from making angiotensin II, the hormone that tightens vessels and holds salt and water.",
    use: "Hypertension; heart failure (adjunct); lowers mortality after MI.",
    se: "==Dry, persistent cough, dizziness, hypotension==; taste changes.",
    ae: "==Angioedema, hyperkalemia==; renal insufficiency, blood dyscrasias.",
    contra: "History of angioedema, pregnancy, bilateral renal artery stenosis, hyperkalemia, ARNI (sacubitril/valsartan) within the last 36 hr.",
    np: "==Monitor BP and renal function (serum creatinine, BUN). Assess for angioedema and breathing difficulty.==",
    sg: []
  },
  "losartan": {
    moa: "Blocks angiotensin II from binding its receptors in blood vessels, causing vasodilation.",
    moaS: "Lets angiotensin II be made but blocks its parking spot, so vessels stay relaxed.",
    use: "Hypertension; lowers stroke risk with hypertension and left ventricular hypertrophy; protects the kidneys in type 2 diabetes with proteinuria.",
    se: "Dizziness, nasal congestion, back pain. No ACE-inhibitor cough.",
    ae: "==Hyperkalemia, angioedema, severe hypotension, renal impairment (rare).==",
    contra: "Allergy to ARBs, pregnancy, severe kidney or liver impairment.",
    np: "==Monitor BP, electrolytes, renal function. Monitor for angioedema.==",
    sg: []
  },
  "metoprolol": {
    moa: "Blocks beta1 receptors in the heart, lowering heart rate, contractility, and cardiac output, which reduces cardiac workload and oxygen demand.",
    moaS: "Puts the brakes on the heart: slower, gentler beats that need less oxygen.",
    use: "==Hypertension; angina; prevent MI; heart failure in specific cases; arrhythmias.== Also migraine prevention and thyrotoxicosis.",
    se: "Fatigue, cold extremities, erectile dysfunction, decreased libido; masks hypoglycemia signs and causes glucose intolerance.",
    ae: "Bradycardia, heart block, severe hypotension, worsening heart failure, bronchospasm, hypoglycemia, depression.",
    contra: "Bradycardia, 2nd or 3rd degree heart block, cardiogenic shock, uncompensated heart failure, pulmonary edema, sick sinus syndrome, cocaine-induced chest pain, untreated pheochromocytoma.",
    np: "==Monitor BP and HR; watch for heart failure: shortness of breath, edema, weight gain.==",
    sg: []
  },
  "nifedipine": {
    moa: "Blocks calcium influx across cell membranes, dilating coronary and peripheral arterioles.",
    moaS: "Keeps calcium out of artery muscle so the arteries can't squeeze; they widen and BP drops.",
    use: "==Hypertension, stable angina==; also vasospastic angina.",
    se: "Facial flushing, headache, palpitations, gingival hyperplasia.",
    ae: "Peripheral edema, reflex tachycardia, bradycardia, heart block, hypotension, rebound hypertension if stopped abruptly.",
    contra: "Calcium channel blocker allergy, heart block, sick sinus syndrome, renal or hepatic impairment, pregnancy, breastfeeding.",
    np: "==Monitor BP; monitor for edema; monitor for tachycardia/bradycardia.==",
    sg: []
  },
  "nitroglycerin": {
    moa: "==Converts to nitric oxide (NO), relaxing vascular smooth muscle → vasodilation.== Dilates coronary arteries (more blood flow) and veins (less preload), lowering myocardial oxygen demand.",
    moaS: "Turns into nitric oxide, which opens vessels: more blood to the heart, less work for it.",
    use: "==Angina pectoris, hypertensive emergencies, coronary artery spasm, heart failure==; acute MI.",
    se: "Headache (expected), flushing, orthostatic hypotension, dizziness; dermatitis with the patch.",
    ae: "Profound hypotension, reflex tachycardia, syncope and falls, methemoglobinemia.",
    contra: "==PDE-5 inhibitors (sildenafil)==, increased intracranial pressure, right-sided MI, severe anemia, hypovolemia, shock, pericardial tamponade or constrictive pericarditis.",
    np: "==Monitor BP and O₂. Do not take with PDE-5 inhibitors (sildenafil).==",
    sg: []
  },

  /* ---------- Cholesterol ---------- */
  "atorvastatin": {
    moa: "Inhibits HMG-CoA reductase, the liver enzyme needed to make cholesterol, and lowers VLDL production.",
    moaS: "Slows the liver's cholesterol factory.",
    use: "Lowers total cholesterol, LDL, and triglycerides and raises HDL; prevents cardiovascular events from atherosclerosis and after MI.",
    se: "Mild GI effects (gas, constipation); usually well tolerated.",
    ae: "==Myopathies, myalgia, rhabdomyolysis, acute kidney injury, hepatotoxicity==; increased blood glucose, memory loss.",
    contra: "Severe liver impairment, pregnancy, breastfeeding, statin allergy.",
    np: "==Assess liver function before giving. Monitor for myopathies.==",
    sg: []
  },
  "ezetimibe": {
    moa: "==Inhibits absorption of cholesterol in the small intestine.==",
    moaS: "Locks the gut's door so cholesterol from food isn't absorbed.",
    use: "Lowers total cholesterol, LDL, and triglycerides and raises HDL.",
    se: "Rhinorrhea, sore throat.",
    ae: "Myopathy and rhabdomyolysis (most likely when combined with a statin), hepatotoxicity.",
    contra: "Pregnancy, breastfeeding, active liver disease, elevated liver enzymes.",
    np: "==Baseline liver enzymes and lipid panel. Monitor for muscle pain. Watch for liver injury: fatigue, anorexia, abdominal pain, jaundice, dark urine.==",
    sg: []
  },
  "gemfibrozil": {
    moa: "Activates PPAR-alpha in the liver and fat tissue, boosting the enzyme that breaks down triglycerides; lowers VLDL and raises HDL.",
    moaS: "Turns up fat burning in the liver to clear triglycerides and raise HDL.",
    use: "==Reduce hypertriglyceridemia and increase HDL.==",
    se: "Dyspepsia, abdominal pain.",
    ae: "Cholelithiasis (gallstones), hepatotoxicity, myopathy, rhabdomyolysis.",
    contra: "Active liver or gallbladder disease, severe renal dysfunction.",
    np: "==Monitor/report GI or gallbladder manifestations and myopathies. Monitor liver function tests and triglycerides.==",
    sg: []
  },
  "niacin": {
    moa: "Prevents lipolysis in fat tissue and slows fatty acid synthesis in the liver.",
    moaS: "Stops fat tissue from releasing fat and slows the liver making it, so triglycerides drop and HDL rises.",
    use: "Dyslipidemia (adjunct); high triglycerides with pancreatitis risk; pellagra.",
    se: "==Flushing, generalized pruritus, burning sensation of the face and chest.==",
    ae: "==Hyperuricemia, gout==; hepatotoxicity, macular edema.",
    contra: "Regular alcohol use, active peptic ulcer disease, active liver disease, arterial bleeding, pregnancy, lactation.",
    np: "==Monitor for flushing and/or pruritus; assess lipid levels.==",
    sg: []
  },

  /* ---------- Anticoagulants ---------- */
  "alteplase": {
    moa: "Converts plasminogen to plasmin, which ==breaks down fibrin and fibrinogen to dissolve the thrombus==. ==The only true clot buster.==",
    moaS: "Clot buster: activates the body's own clot-dissolving enzyme to break up a clot that's already there.",
    use: "Acute MI, pulmonary embolism, acute ischemic stroke, occluded IV catheters.",
    se: "Minor bleeding, reperfusion PVCs.",
    ae: "==Hemorrhage==, including intracranial hemorrhage; reperfusion arrhythmias (V-tach); anaphylaxis.",
    contra: "Active or internal bleeding, recent intracranial hemorrhage, BP above 180/110, intracranial lesions, ischemic stroke or major head trauma in the last 3 months, recent brain or spine surgery, surgery in the last 3 weeks, possible aortic dissection, pregnancy.",
    np: "==Monitor for bleeding. Monitor aPTT, CBC, fibrinogen. Assess neurological status. Monitor BP.==",
    sg: []
  },
  "apixaban": {
    moa: "Inhibits factor Xa (and thrombin-induced platelet aggregation).",
    moaS: "Blocks factor Xa, a key step in the clotting chain, so new clots can't form.",
    use: "==Atrial fibrillation (reduce DVT/PE and stroke risk); treat DVT and PE.==",
    se: "Epistaxis, bruising, bleeding that takes longer to stop.",
    ae: "Hemorrhage, including spontaneous GI or bladder bleeding; anemia.",
    contra: "==Bleeding (history of GI bleed), severe liver damage, prosthetic heart valves==; spinal puncture or anesthesia, pregnancy or lactation, triple-positive antiphospholipid syndrome.",
    np: "==Monitor for DVT, stroke, bleeding, peripheral vascular disease, PE.==",
    sg: []
  },
  "aspirin": {
    moa: "Inhibits prostaglandin production (less inflammation, fever, and pain) and reduces platelet aggregation.",
    moaS: "Makes platelets less sticky and blocks prostaglandins (less pain, fever, and inflammation).",
    use: "==Pain; cardiovascular and ischemic risk reduction (antiplatelet effect)==; inflammation, fever.",
    se: "Epigastric distress, dyspepsia.",
    ae: "GI ulceration and bleeding, salicylate toxicity (tinnitus), Reye syndrome in children, intracranial hemorrhage.",
    contra: "Salicylate allergy (or ibuprofen cross-allergy), bleeding disorders, peptic ulcer disease or gastritis, children (Reye syndrome), asthma (bronchospasm).",
    np: "==Monitor for GI bleeding: black/dark stools, abdominal pain, nausea, hematemesis. Monitor GI symptoms.==",
    sg: []
  },
  "clopidogrel": {
    moa: "Irreversibly blocks the platelet P2Y12 (ADP) receptor so platelets can't clump; activated by liver CYP enzymes.",
    moaS: "Permanently blocks the platelet's \"stick together\" receptor for that platelet's life.",
    use: "Unstable angina; secondary prevention after MI, stroke, or peripheral arterial disease; keeps coronary stents from reclosing.",
    se: "Bruising, nosebleeds, rash, pruritus.",
    ae: "Major bleeding, thrombotic thrombocytopenic purpura (TTP, rare), gastric ulceration and bleeding.",
    contra: "Active bleeding, peptic ulcer disease, bleeding disorders, thrombocytopenia, anaphylaxis to clopidogrel.",
    np: "Monitor for bleeding and bruising. Check hemoglobin and hematocrit. Assess for rash and pruritus (allergic reaction).",
    sg: []
  },
  "enoxaparin": {
    moa: "Low molecular weight heparin: inhibits factor X(a), so clots can't form or grow.",
    moaS: "A smaller heparin given as a shot that blocks factor Xa so clots can't grow.",
    use: "Prevent DVT; treat DVT with or without PE; prevent ischemic complications of NSTEMI and unstable angina.",
    se: "Bleeding, thrombocytopenia, injection-site bruising.",
    ae: "Hemorrhage.",
    contra: "Active bleeding, known allergy.",
    np: "Monitor for bleeding and thrombocytopenia (platelets). Watch for allergic reaction.",
    sg: []
  },
  "heparin": {
    moa: "Inhibits factor Xa and thrombin.",
    moaS: "Blocks thrombin and factor Xa right away, so clots can't form or grow.",
    use: "==Ischemic stroke, PE, DVT; MI, unstable chest pain, dysrhythmias==; prevents clotting during procedures and in DIC.",
    se: "Bleeding, thrombocytopenia.",
    ae: "Hemorrhage, heparin-induced thrombocytopenia, anaphylaxis.",
    contra: "Uncontrollable bleeding, severe thrombocytopenia, pregnancy, lumbar or regional anesthesia, surgery of the brain, eyes, or spinal cord.",
    np: "==Monitor pulse and BP; monitor for bleeding; monitor aPTT to adjust infusion dosing; monitor for thrombocytopenia.==",
    sg: []
  },
  "warfarin": {
    moa: "==Interrupts the vitamin K cycle, reducing active clotting factors.==",
    moaS: "Blocks vitamin K, which the liver needs to make clotting factors, so fewer working factors are made.",
    use: "Prevent venous or arterial thrombosis and embolism (AFib, DVT, PE, mechanical valves).",
    se: "Bleeding of mucous membranes, bruising.",
    ae: "Hemorrhage, toxicity (high INR). Antidote: vitamin K.",
    contra: "Pregnancy, uncontrollable bleeding, vitamin K deficiency, thrombocytopenia, alcohol use disorder or liver disease, lumbar puncture, regional anesthesia, brain, eye, or spinal cord surgery.",
    np: "==Monitor pulse and BP. Monitor PT/INR. Monitor for bleeding.==",
    sg: []
  },

  /* ---------- Dysrhythmias & contractility ---------- */
  "adenosine": {
    moa: "==Restores sinus rhythm by slowing impulses through the AV node.==",
    moaS: "A quick reset button: briefly blocks the AV node to stop a fast rhythm.",
    use: "==Convert an arrhythmia (SVT) to sinus rhythm.==",
    se: "Facial flushing, metallic taste, a brief pause (asystole) on the monitor.",
    ae: "==Arrhythmias such as V-tach, MI, palpitations, difficulty breathing==; bronchospasm, hypotension.",
    contra: "Sick sinus syndrome, 2nd or 3rd degree AV block, MI or ischemia, breastfeeding, hypersensitivity.",
    np: "Continuous ECG with HR and BP; a brief pause and flushing are expected. Assess respirations and lung sounds for bronchospasm in clients with asthma.",
    sg: []
  },
  "amiodarone": {
    moa: "Class III: lengthens the action potential and refractory period, prolonging the PR and QT intervals and slowing the sinus rate.",
    moaS: "Makes heart cells take longer to recharge, which steadies fast rhythms.",
    use: "==Supraventricular and ventricular arrhythmias.==",
    se: "Photosensitivity, anorexia, fatigue.",
    ae: "Pulmonary fibrosis, bradycardia, hypotension, worsening arrhythmia, ARDS, toxic epidermal necrolysis, ataxia.",
    contra: "Iodine or amiodarone allergy, 2nd or 3rd degree AV block, severe sick sinus syndrome, cardiogenic shock, bradycardia without a pacemaker, breastfeeding. ==Precautions: thyroid disorder, severe liver disease, severe pulmonary disease.==",
    np: "Continuous ECG when starting (oral or IV): HR, BP, rhythm, PR and QT intervals. Report bradycardia or worsening arrhythmia. Watch for pulmonary toxicity (new cough, dyspnea).",
    sg: []
  },
  "digoxin": {
    moa: "Inhibits the Na⁺/K⁺-ATPase pump, raising calcium in heart cells for a stronger contraction; prolongs the AV node refractory period and slows the heart rate.",
    moaS: "Stronger squeeze, slower beat: more calcium in heart cells while it slows the AV node.",
    use: "==Atrial fibrillation, atrial flutter==; heart failure.",
    se: "Asymptomatic bradycardia, anorexia, nausea and vomiting (early toxicity signs).",
    ae: "Symptomatic bradycardia, heart blocks and arrhythmias, visual changes (yellow-green halos), confusion.",
    contra: "Ventricular dysrhythmias, heart block, low potassium or magnesium, Wolff-Parkinson-White syndrome, MI, hypersensitivity.",
    np: "==Take the apical heart rate; hold the dose if HR <60/min.==",
    sg: []
  },
  "diltiazem": {
    moa: "Class IV calcium channel blocker: keeps calcium out of the slow channels of heart and vascular muscle.",
    moaS: "Keeps calcium out of the heart's wiring and muscle so the rate slows down.",
    use: "==Convert supraventricular tachyarrhythmias to sinus rhythm; slow the rate of atrial flutter and AFib.==",
    se: "Peripheral edema, weight gain, nocturia.",
    ae: "==Bradycardia, hypotension, heart failure==; Stevens-Johnson syndrome, liver toxicity.",
    contra: "2nd or 3rd degree AV block without a pacemaker, hypotension, recent MI, breastfeeding, hypersensitivity.",
    np: "==BP, HR, ECG.==",
    sg: []
  },

  /* ---------- Diuretics ---------- */
  "furosemide": {
    moa: "Loop diuretic: blocks sodium and chloride reabsorption in the ascending loop of Henle, so sodium, chloride, potassium, magnesium, calcium, and water are excreted.",
    moaS: "Strongest diuretic: blocks salt pickup in the loop of Henle, so lots of water (and potassium) leaves.",
    use: "==Pulmonary edema in heart failure; edema from renal, hepatic, or heart failure==; hypertension.",
    se: "Hypokalemia and other electrolyte losses, orthostatic hypotension, photosensitivity, tinnitus, hyperuricemia.",
    ae: "Ototoxicity and hearing loss, severe electrolyte imbalance, hyperglycemia, Stevens-Johnson syndrome, blood dyscrasias.",
    contra: "Anuria, hepatic coma, dehydration or electrolyte imbalance, hypersensitivity.",
    np: "==Assess potassium and BP before giving.==",
    sg: []
  },
  "hydrochlorothiazide": {
    moa: "==Increases sodium and water excretion by preventing sodium reabsorption in the distal tubule== (blocks the Na-Cl transporter); potassium and magnesium are lost too.",
    moaS: "Medium diuretic: blocks salt pickup in the distal tubule; water follows salt out, and potassium is lost too.",
    use: "Hypertension; edema from heart failure, liver disease, or kidney problems.",
    se: "Hyperglycemia, hyperuricemia (gout), hyperlipidemia, photosensitivity, orthostatic hypotension.",
    ae: "==Electrolyte imbalances: hypokalemia, hyponatremia, dehydration==; acute angle-closure glaucoma, pancreatitis, metabolic alkalosis.",
    contra: "Sulfa allergy (cross-reactivity), anuria, hypotension, electrolyte imbalance, severe liver disease, adrenal insufficiency, breastfeeding.",
    np: "==BP, daily weights, edema, electrolytes.==",
    sg: []
  },
  "mannitol": {
    moa: "Osmotic diuretic: raises plasma osmolality, pulling water out of the brain and CSF into the blood; it isn't reabsorbed by the tubule, so water and sodium follow it out.",
    moaS: "A sugar that pulls water out of swollen tissue (like the brain) into the blood and out through the kidneys.",
    use: "==Acute renal failure; reduce intracranial pressure from cerebral edema.==",
    se: "Thirst, dry mouth.",
    ae: "==Dehydration, pulmonary edema, worsening heart failure, seizures, confusion.==",
    contra: "==Anuria, pulmonary edema, active intracranial bleeding==; severe dehydration.",
    np: "Assess neuro status (ICP), lung sounds, urine output, electrolytes, and renal function. Watch for fluid overload and pulmonary edema, or dehydration.",
    sg: []
  },
  "spironolactone": {
    moa: "Aldosterone antagonist: blocks sodium reabsorption in the distal tubule and collecting duct while potassium is kept. Also blocks androgen receptors.",
    moaS: "Blocks aldosterone, so salt and water leave but potassium stays (\"Spiro Spares K⁺\").",
    use: "==Hypertension; edema from heart failure, cirrhosis, nephrotic syndrome; hypokalemia==; improves heart failure survival; feminizing therapy in transgender women.",
    se: "Gynecomastia, breast tenderness, menstrual irregularities, erectile dysfunction, deepening voice, hirsutism.",
    ae: "Hyperkalemia (muscle weakness, palpitations, dysrhythmias), Stevens-Johnson syndrome, agranulocytosis.",
    contra: "Hyperkalemia, renal failure, anuria, pregnancy (teratogenic), hypersensitivity.",
    np: "==Monitor serum potassium. If hyperkalemia occurs, monitor for cardiac dysrhythmias.==",
    sg: []
  },

  /* ---------- Urinary, sexual, hormones ---------- */
  "oxybutynin": {
    moa: "Anticholinergic: inhibits acetylcholine to relax the bladder (detrusor) smooth muscle.",
    moaS: "Blocks acetylcholine so the bladder muscle calms down and stops squeezing so often.",
    use: "Overactive bladder (urinary antispasmodic): decreases urgency and frequency.",
    se: "Anticholinergic: dry mouth, constipation, blurred vision, drowsiness.",
    ae: "Confusion and hallucinations (older adults), tachycardia, angioedema.",
    contra: "Urinary retention, intestinal obstruction, narrow-angle glaucoma, hypersensitivity.",
    np: "Assess voiding pattern and residual urine. Monitor level of consciousness.",
    sg: []
  },
  "tamsulosin": {
    moa: "Blocks alpha1 receptors in the prostate and bladder neck, relaxing the smooth muscle so urine flows.",
    moaS: "Relaxes the prostate and bladder neck so urine flows more easily.",
    use: "BPH.",
    se: "==Dizziness, headache, hypotension==; ejaculatory disorders.",
    ae: "Intraoperative floppy iris syndrome (tell the eye surgeon before cataract surgery).",
    contra: "Hypersensitivity to tamsulosin or sulfa.",
    np: "==Assess BPH urinary symptoms before and after giving. Monitor BP.==",
    sg: []
  },
  "sildenafil": {
    moa: "Inhibits phosphodiesterase type 5, increasing blood flow to the penis.",
    moaS: "Keeps vessels in the penis open longer, so more blood flows in.",
    use: "Erectile dysfunction, pulmonary arterial hypertension.",
    se: "==Flushing, dyspepsia, headache, dizziness, hypotension.==",
    ae: "Priapism (erection over 4 hr), MI, sudden vision or hearing loss.",
    contra: "Nitrate use, severe hypotension, recent stroke or MI, hepatic impairment, hypersensitivity.",
    np: "Confirm the ED diagnosis and screen for nitrate or alpha-blocker use. Monitor BP. Teach: erection over 4 hr needs emergency care.",
    sg: [["Interactions", "==Nitrates, alpha-adrenergic receptor antagonists (e.g., tamsulosin, doxazosin).== Together they cause severe hypotension."]]
  },
  "combination-estrogen-progestin": {
    moa: "Prevents ovulation, changes the uterine lining, and thickens cervical mucus so sperm can't enter.",
    moaS: "Tricks the body into thinking it's pregnant, so no egg is released; the uterus lining and cervical mucus change too.",
    use: "Birth control; acne; benign breast disease; ovarian cysts; premenstrual syndrome.",
    se: "Breakthrough bleeding or spotting, breast tenderness, brown skin patches (melasma).",
    ae: "Blood clots, stroke, and MI (warning signs ACHES: abdominal pain, chest pain, headache, eye or vision changes, severe leg pain); liver injury (jaundice, dark urine).",
    contra: "Smoking, history of blood clots, stroke, or MI, breast cancer, uncontrolled hypertension, migraine with aura, pregnancy, breastfeeding, less than 21 days postpartum.",
    np: "Confirm the client is not pregnant or breastfeeding. Take a health history for clot and stroke risk: blood clots, breast cancer, MI, stroke, migraines, uncontrolled hypertension, smoking.",
    sg: []
  },
  "estradiol": {
    moa: "Estrogen: develops the female sex organs and secondary sex characteristics and regulates ovulation.",
    moaS: "Replaces estrogen, the main female sex hormone.",
    use: "Menopausal symptoms, hypogonadism, osteoporosis, menstrual disorders, contraception, some hormone-sensitive cancers.",
    se: "Breast tenderness, edema, gynecomastia and testicular atrophy in males, hypercalcemia, hyperglycemia.",
    ae: "Thromboembolism, stroke, MI; breast, endometrial, and ovarian cancers.",
    contra: "==Estrogen allergy; thromboembolic disease (DVT, PE, MI); history of breast cancer; liver impairment; undiagnosed vaginal bleeding; pregnancy.==",
    np: "Monitor BP, weekly weight, I&O, glucose, and liver function. Assess for clots, stroke, and MI warning signs; ask about smoking.",
    sg: [["Interactions", "==Smoking increases risk of thromboembolic and cardiac adverse effects.=="]]
  },
  "progesterone": {
    moa: "Causes secretory changes in the endometrium, relaxes uterine smooth muscle, and inhibits the pituitary.",
    moaS: "Prepares the uterine lining and quiets the pituitary, which lowers androgen effects.",
    use: "Suppresses endogenous androgens, reducing masculine characteristics; often used in gender-affirming care.",
    se: "Glucose intolerance, fatigue, mood changes.",
    ae: "DVT, PE, MI; liver toxicity and tumors; meningiomas.",
    contra: "Peanut allergy (oil base), thromboembolism, breast cancer, cardiovascular disease, liver impairment, severe depression, pregnancy.",
    np: "Assess for thromboembolism (chest pain, dyspnea, DVT). Monitor mood, liver function, BP, weekly weight, and blood glucose.",
    sg: []
  },
  "testosterone": {
    moa: "Androgen: develops the male sex organs and maintains secondary sex characteristics.",
    moaS: "Replaces testosterone, the main male sex hormone.",
    use: "==Increase male characteristics (low testosterone, transgender clients); delayed puberty; hypogonadism; androgen-responsive breast cancer.==",
    se: "Acne, deepening voice, facial hair, clitoral enlargement; gynecomastia in males.",
    ae: "==DVT, liver toxicity, stroke, suicidal thoughts, PE, anaphylaxis.==",
    contra: "Breast or prostate cancer in males, pregnancy, lactation, hypersensitivity.",
    np: "Monitor I&O and weigh twice a week. Watch for DVT/PE, liver toxicity, gynecomastia, priapism, and misuse. Gel: others must not touch the application site.",
    sg: []
  },

  /* ---------- GI ---------- */
  "metoclopramide": {
    moa: "Blocks dopamine receptors; stimulates upper GI motility and speeds gastric emptying.",
    moaS: "Blocks dopamine to stop nausea and makes the stomach empty faster.",
    use: "Nausea and vomiting (also gastroparesis and GERD).",
    se: "Drowsiness, restlessness.",
    ae: "Extrapyramidal symptoms and tardive dyskinesia, which may be irreversible.",
    contra: "GI obstruction or bleeding, seizure disorders, Parkinson's disease, history of tardive dyskinesia, MAOIs, hypersensitivity.",
    np: "==Assess for: Parkinsonian symptoms (trouble speaking or swallowing, shuffling gait, mask-like face); dystonia (repetitive twisting contractions, inability to move eyes); tardive dyskinesia (involuntary movements of tongue, face, neck).==",
    sg: []
  },
  "ondansetron": {
    moa: "Blocks serotonin 5-HT3 receptors to decrease nausea and vomiting.",
    moaS: "Blocks serotonin's nausea signal in the gut and brain.",
    use: "Nausea and vomiting from chemotherapy, radiation, anesthesia, and pregnancy.",
    se: "Headache, constipation.",
    ae: "==QT prolongation, serotonin syndrome==; fetal cleft palate or septal defects; Stevens-Johnson syndrome.",
    contra: "Congenital long QT syndrome, use with apomorphine, hypersensitivity.",
    np: "==ECG and monitor sodium, potassium, calcium, magnesium in clients with cardiac risk factors.==",
    sg: []
  },
  "scopolamine": {
    moa: "Anticholinergic: blocks acetylcholine (M1 receptors) in the CNS.",
    moaS: "Blocks acetylcholine so the inner-ear motion signals don't trigger vomiting.",
    use: "Prevent motion sickness and postoperative nausea and vomiting (PONV).",
    se: "Dry mouth, blurred vision, dilated pupils, drowsiness, urinary hesitancy.",
    ae: "Anticholinergic toxicity: flushed skin, tachycardia, agitation, confusion, urinary retention.",
    contra: "Angle-closure glaucoma, GI obstruction, belladonna alkaloid allergy, pregnancy with pre-eclampsia.",
    np: "Monitor for anticholinergic toxicity: urinary retention, flushed skin, tachycardia, agitation, confusion. Apply the patch 4 hr before travel; remove before MRI.",
    sg: []
  },
  "calcium-carbonate": {
    moa: "Neutralizes stomach acid and raises gastric pH.",
    moaS: "Chalk that neutralizes acid already in the stomach.",
    use: "Heartburn, GERD, peptic ulcers, gastritis.",
    se: "Constipation.",
    ae: "Hypercalcemia, renal calculi, bradycardia with overuse.",
    contra: "Hypercalcemia, renal calculi, renal failure, hyperparathyroidism.",
    np: "==Assess presenting symptoms and the abdomen. Monitor calcium and phosphorus levels.==",
    sg: [["Client teaching", "==Do not take enteric-coated medications within 1 hour.=="]]
  },
  "famotidine": {
    moa: "Blocks H2 (histamine) receptors on the stomach's parietal cells, reducing acid secretion.",
    moaS: "Blocks histamine's \"make acid\" signal on stomach cells.",
    use: "Short-term treatment of PUD, GERD, heartburn, and hypersecretory conditions; prevents stress-induced GI bleeding in critically ill clients.",
    se: "Drowsiness, headache.",
    ae: "Confusion (older adults), cardiac arrhythmias, blood disorders (agranulocytosis, aplastic anemia, thrombocytopenia), drug-induced hepatitis.",
    contra: "Hypersensitivity.",
    np: "Monitor CBC with differential. Assess epigastric or abdominal pain and blood in stool or emesis. Monitor older adults for confusion.",
    sg: []
  },
  "pantoprazole": {
    moa: "Proton pump inhibitor: blocks the H⁺/K⁺-ATPase pump in parietal cells, shutting down acid production.",
    moaS: "Shuts off the stomach's acid pumps (stronger than H2 blockers).",
    use: "==Decreases acid reflux; heals duodenal ulcers and esophagitis.==",
    se: "Flatulence, abdominal pain.",
    ae: "With long-term use: bone fractures, C. difficile infection, vitamin B12 deficiency.",
    contra: "Hypersensitivity to benzimidazoles. ==Precautions: long-term use; clients planning or suspecting pregnancy.==",
    np: "Monitor liver function and magnesium. Assess epigastric pain and blood in stool or emesis. With long-term use, watch bone health and B12.",
    sg: []
  },
  "misoprostol": {
    moa: "Prostaglandin: inhibits gastric acid secretion and increases protective mucus.",
    moaS: "Replaces the stomach's protective prostaglandins: less acid, more mucus (and it can contract the uterus).",
    use: "==Prevent and treat NSAID-induced gastric ulcers.==",
    se: "Diarrhea, uterine cramping, spotting, dysmenorrhea.",
    ae: "Miscarriage.",
    contra: "==Pregnancy, hypersensitivity.==",
    np: "==Assess abdominal and epigastric pain; blood in stools; assess female clients for pregnancy.==",
    sg: []
  },
  "sucralfate": {
    moa: "Forms a thick paste that sticks to the ulcer surface and protects it.",
    moaS: "Forms a sticky bandage over the ulcer.",
    use: "==Acute duodenal ulcers.==",
    se: "Constipation.",
    ae: "Hyperglycemia (with the suspension).",
    contra: "Hypersensitivity.",
    np: "Assess abdominal pain and stool for blood (occult and frank). Monitor I&O and bowel movements (constipation).",
    sg: [["Administration", "==Give orally on an empty stomach, four times a day: 1 hour before each of the three meals and at bedtime.=="]]
  },
  "dicyclomine": {
    moa: "Blocks acetylcholine, bradykinin, and histamine to stop GI muscle spasm.",
    moaS: "Blocks acetylcholine so the gut muscle stops spasming.",
    use: "==Relieves GI muscle spasms (e.g., IBS).==",
    se: "==Dry mouth, thirst, dry skin, drowsiness, dizziness (anticholinergic).==",
    ae: "CNS effects (confusion, hallucinations, agitation); cardiovascular effects.",
    contra: "Infants under 6 months, breastfeeding, glaucoma, myasthenia gravis, obstructive uropathy, GI obstruction, severe ulcerative colitis, reflux esophagitis, unstable cardiovascular status.",
    np: "Monitor IBS manifestations. Watch for anticholinergic effects (confusion, urinary retention), especially in older adults.",
    sg: []
  },
  "rifaximin": {
    moa: "Antibiotic: binds bacterial RNA polymerase so bacteria can't make proteins.",
    moaS: "Antibiotic that stays in the gut and stops bacteria from making proteins.",
    use: "==Decrease symptoms of IBS-D; decrease severity of traveler's diarrhea from E. coli.==",
    se: "Few; mostly mild nausea or dizziness (it stays in the gut).",
    ae: "==C. difficile-associated diarrhea.==",
    contra: "Diarrhea with fever or blood, diarrhea from other organisms, hypersensitivity.",
    np: "Monitor bowel frequency and consistency, bloating, and cramping. Report bloody or worsening diarrhea (C. diff).",
    sg: []
  },
  "sulfasalazine": {
    moa: "Produces an anti-inflammatory effect in the colon.",
    moaS: "Calms inflammation right in the colon.",
    use: "Reduce manifestations of ulcerative colitis.",
    se: "Orange-yellow urine or skin; loss of appetite.",
    ae: "Toxic epidermal necrolysis, agranulocytosis, aplastic anemia, hypersensitivity.",
    contra: "Sulfa or salicylate allergy, intestinal or urinary obstruction.",
    np: "Assess for sulfonamide or salicylate allergy. Assess for severe rash. Monitor I&O. Assess abdominal pain and bowel habits.",
    sg: []
  }
};
