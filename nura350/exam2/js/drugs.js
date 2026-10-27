/* Pharm Exam 2 drug tables. Drug fields (class, MOA, use, contraindications, side and adverse effects,
   RN assessment, client teaching) are taken from "Exam 2 Drug Tables - Combined" (ATI Engage medication tables).
   plain, key and beyond are study notes written for this guide.
   Digoxin appears once and belongs to two categories. */
window.SYSTEMS = [
 {
  "id": "cv1",
  "name": "Cardiac Pt 1: BP & Cholesterol",
  "short": "Cardiac 1",
  "icon": "🫀",
  "weight": "Pharm for the Cardiovascular System Pt 1"
 },
 {
  "id": "cv2",
  "name": "Cardiac Pt 2: Clots & Rhythm",
  "short": "Cardiac 2",
  "icon": "🩸",
  "weight": "Pharm for the Cardiovascular System Pt 2"
 },
 {
  "id": "gu",
  "name": "Renal, GU & Reproductive",
  "short": "Renal/GU",
  "icon": "💧",
  "weight": "Pharm for the Renal System · GU & Reproductive Systems"
 },
 {
  "id": "gi",
  "name": "Gastrointestinal",
  "short": "GI",
  "icon": "🍽️",
  "weight": "GI drug tables"
 }
];
window.CATEGORIES = [
 {
  "id": "bp",
  "name": "Blood Pressure",
  "sys": "cv1",
  "mnemonic": "\"Doctors Hate Low Lazy Mornings, No Naps\"",
  "decode": "Doxazosin, Hydralazine, Lisinopril, Losartan, Metoprolol, Nifedipine, Nitroglycerin",
  "like": "Pressure is flow times squeeze. Each of these drugs loosens a different valve in the plumbing: some relax the pipes (vessels), one slows the pump (metoprolol), and nitro takes load off the pump."
 },
 {
  "id": "chol",
  "name": "Cholesterol",
  "sys": "cv1",
  "mnemonic": "\"Nix Extra Greasy Appetizers\"",
  "decode": "Niacin, Ezetimibe, Gemfibrozil, Atorvastatin",
  "like": "Cholesterol comes from two places: the liver's factory and your food. Statins slow the factory, ezetimibe locks the food door, and fibrates and niacin go after triglycerides."
 },
 {
  "id": "coag",
  "name": "Anticoagulant",
  "sys": "cv2",
  "mnemonic": "\"Triple-A clots? CHEW them up\"",
  "decode": "Alteplase, Apixaban, Aspirin; Clopidogrel, Heparin, Enoxaparin, Warfarin. Alteplase is the only true clot buster.",
  "like": "Antiplatelets (aspirin, clopidogrel) stop the first sticky plug, anticoagulants (heparins, apixaban, warfarin) stop the clot from growing, and alteplase dissolves one that's already there. Every one of them means bleeding precautions."
 },
 {
  "id": "dys",
  "name": "Dysrhythmias",
  "sys": "cv2",
  "mnemonic": "\"AA-DD: Rhythm off? Add AADD\"",
  "decode": "Adenosine, Amiodarone, Digoxin, Diltiazem",
  "like": "These all slow or steady the heart's wiring, so the nursing check is always the same: pulse and BP before the dose, ECG for IV."
 },
 {
  "id": "contract",
  "name": "Increase Contractility",
  "sys": "cv2",
  "mnemonic": "\"DIG deeper for a stronger squeeze\"",
  "decode": "Digoxin: stronger contraction, slower rate, so it's in both sections.",
  "like": "Digoxin is a stronger squeeze with a slower beat: more output per beat, more time to fill."
 },
 {
  "id": "diur",
  "name": "Diuretics",
  "sys": "gu",
  "mnemonic": "\"Fluids Have Moved Somewhere\"",
  "decode": "Furosemide, Hydrochlorothiazide, Mannitol, Spironolactone. \"Spiro Spares K+.\"",
  "like": "Every diuretic pulls sodium (and water follows). Where it acts decides the strength and what happens to potassium: loop and thiazide lose K+, spironolactone keeps it."
 },
 {
  "id": "bladder",
  "name": "Urinary/Bladder",
  "sys": "gu",
  "mnemonic": "\"OT for the bladder\"",
  "decode": "Oxybutynin = Overactive bladder; Tamsulosin = Tight prostate (BPH)",
  "like": "Oxybutynin calms a bladder that squeezes too often; tamsulosin opens a prostate that squeezes the outlet shut."
 },
 {
  "id": "sexual",
  "name": "Sexual Dysfunction",
  "sys": "gu",
  "mnemonic": "\"Sildenafil = Sex, Never with Nitro\"",
  "decode": "Sildenafil (never with nitroglycerin: severe hypotension)",
  "like": "Sildenafil and nitro both open blood vessels. Together they open them so far that blood pressure crashes."
 },
 {
  "id": "female",
  "name": "Female Hormones",
  "sys": "gu",
  "mnemonic": "\"Every Pregnancy Choice\"",
  "decode": "Estradiol, Progesterone, Combination estrogen-progestin (oral contraceptive)",
  "like": "Estrogen-containing drugs make blood clot more easily, so the shared danger is clots, stroke, and MI, and smoking multiplies it."
 },
 {
  "id": "male",
  "name": "Male Hormones",
  "sys": "gu",
  "mnemonic": "\"T is for Testosterone\"",
  "decode": "Testosterone (the only one)",
  "like": "Testosterone replaces what the body isn't making. Watch for clots, liver strain, and accidental transfer of the gel to others."
 },
 {
  "id": "emesis",
  "name": "Antiemetics",
  "sys": "gi",
  "mnemonic": "\"MOS: Motion Of the Sea\"",
  "decode": "Metoclopramide, Ondansetron, Scopolamine (patch for motion sickness)",
  "like": "Each blocks a different nausea messenger: dopamine (metoclopramide), serotonin (ondansetron), or acetylcholine (scopolamine)."
 },
 {
  "id": "antacid",
  "name": "Antacids",
  "sys": "gi",
  "mnemonic": "\"Tums Calm the Chalky burn\"",
  "decode": "Calcium Carbonate (Tums)",
  "like": "An antacid is a fire extinguisher for acid that's already there; it doesn't stop the stomach making more."
 },
 {
  "id": "ulcer",
  "name": "Ulcer Prevention",
  "sys": "gi",
  "mnemonic": "\"Fix Painful Stomach Mucosa\"",
  "decode": "Famotidine, Pantoprazole, Sucralfate, Misoprostol",
  "like": "Two strategies: turn down the acid (famotidine, pantoprazole, misoprostol) or shield the lining (sucralfate, and misoprostol's extra mucus)."
 },
 {
  "id": "bowel",
  "name": "Bowel Meds",
  "sys": "gi",
  "mnemonic": "\"Bowel trouble? See the DRS\"",
  "decode": "Dicyclomine, Rifaximin, Sulfasalazine",
  "like": "Three bowel problems, three tools: a muscle relaxer for spasm (dicyclomine), a gut-only antibiotic (rifaximin), and an anti-inflammatory for UC (sulfasalazine)."
 }
];
window.SUFFIXES = [
 [
  "-pril",
  "ACE inhibitor",
  "lisinopril"
 ],
 [
  "-sartan",
  "ARB",
  "losartan"
 ],
 [
  "-olol",
  "Beta blocker",
  "metoprolol"
 ],
 [
  "-dipine",
  "Calcium channel blocker",
  "nifedipine"
 ],
 [
  "-zosin / -sulosin",
  "Alpha-1 blocker",
  "doxazosin, tamsulosin"
 ],
 [
  "-statin",
  "Cholesterol (HMG-CoA reductase inhibitor)",
  "atorvastatin"
 ],
 [
  "-parin",
  "Heparins",
  "heparin, enoxaparin"
 ],
 [
  "-xaban",
  "Factor Xa inhibitor",
  "apixaban"
 ],
 [
  "-tidine",
  "H2 blocker",
  "famotidine"
 ],
 [
  "-prazole",
  "Proton pump inhibitor",
  "pantoprazole"
 ],
 [
  "-setron",
  "Antiemetic (5-HT3 blocker)",
  "ondansetron"
 ]
];
window.DRUGS = [
 {
  "id": "doxazosin",
  "name": "Doxazosin",
  "brand": "Cardura",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Alpha1-blocker",
  "moa": "Dilates arteries and veins by blocking postsynaptic alpha1-adrenergic receptors",
  "use": "Hypertension, benign prostatic hyperplasia (BPH)",
  "contra": "Do not use in clients who have known allergies to the medication or similar medications. Use cautiously in clients who have a history of orthostatic hypotension, as it can cause significant drops in BP upon standing. Also use with caution in clients who have severe liver impairment, as doxazosin is metabolized in the liver.",
  "se": "Dizziness, fatigue, headache, nausea, nasal congestion, drowsiness; orthostatic hypotension and syncope can occur, particularly after the first dose or with dose increases; less common side effects include palpitations, edema, and shortness of breath",
  "ae": "Intraoperative floppy iris syndrome (IFIS); in rare cases, priapism (prolonged erection) can occur",
  "rn": "Monitor client response to therapy through BP monitoring. Watch for adverse effects. Monitor for adherence to medication therapy regimen. Monitor laboratory tests.",
  "teach": "Review healthy habits, including engaging in regular physical activity, quitting smoking, and eating a low-sodium diet. Monitor BP and heart rate and rhythm regularly. Do not to stop doxazosin abruptly to avoid rebound hypertension.",
  "plain": "Relaxes the muscle around blood vessels so they open up and pressure drops. It also relaxes the prostate, which helps men with an enlarged prostate pee more easily.",
  "key": "Orthostatic hypotension and fainting, especially after the first dose or a dose increase; rise slowly. Do not stop abruptly (rebound HTN).",
  "beyond": "Giving the first dose at bedtime limits first-dose fainting."
 },
 {
  "id": "hydralazine-hydrochloride",
  "name": "Hydralazine Hydrochloride",
  "brand": "Apresoline",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Antihypertensive, direct-acting vasodilator",
  "moa": "Decreases peripheral resistance but concurrently elevates cardiac output; acts directly on smooth muscle of blood vessels",
  "use": "Hypertension that does not improve with other medications",
  "contra": "Hypersensitivity",
  "se": "Headache, tachycardia, flushing, dyspnea, peripheral edema",
  "ae": "Dizziness, anxiety, reflex tachycardia, heart failure, edema, chest pain, nausea, vomiting, GI upset, rash, lesions, systemic lupus erythematosus (SLE)-like syndrome",
  "rn": "Check for any contraindications to avoid possible side effects. Obtain a baseline of the client's weight, vital signs, skin condition, and lab tests, including kidney and liver function as well as electrolyte levels, to monitor how the client is responding to the treatment.",
  "teach": "Take as prescribed to lower blood pressure. Report side effects such as dizziness or swelling. Regularly check BP and HR. Follow a low-sodium diet, avoid alcohol, and inform providers about other medications to prevent interactions.",
  "plain": "Works right on the blood vessel walls to make them relax and widen. It's saved for blood pressure that other pills haven't fixed. The heart often speeds up to compensate.",
  "key": "Reflex tachycardia and a lupus-like (SLE) syndrome. Used when other antihypertensives fail."
 },
 {
  "id": "lisinopril",
  "name": "Lisinopril",
  "brand": "Zestril",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "ACE inhibitor",
  "moa": "Competitively inhibits ACE to prevent conversion of angiotensin I to angiotensin II; reduces vasoconstriction and aldosterone secretion, leading to sodium excretion and potassium retention",
  "use": "Heart failure adjunctive therapy, hypertension management, reduction of mortality in when used post myocardial infarction",
  "contra": "History of angioedema, pregnancy, bilateral renal artery stenosis, hyperkalemia, renal failure with previous lisinopril use, hypersensitivity, clients who are taking or have taken ARN inhibitors within the past 36 hr",
  "se": "Dizziness, headache, fatigue, dry persistent cough, nausea, vomiting, diarrhea, taste changes",
  "ae": "Angioedema, hyperkalemia, renal insufficiency, hypotension, blood dyscrasias, erectile dysfunction, nephrotoxicity",
  "rn": "Monitor BP and renal function (serum creatinine, BUN). Assess for manifestations of angioedema and breathing difficulties. Evaluate baseline serum potassium levels and liver function.",
  "teach": "Report angioedema immediately. May cause a dry hacking cough. Take as scheduled, even when feeling well. Avoid NSAIDs without consulting provider. Avoid high-potassium foods. Do not become pregnant while on lisinopril. Take orally at same time daily. Do not skip or double doses or stop taking medication. Do not use salt alternatives for seasoning as they may contain potassium. Rise slowly from lying to sitting or standing as BP may drop.",
  "plain": "Blocks the enzyme that makes angiotensin II, a hormone that tightens vessels and holds on to salt. Less of it means relaxed vessels and lower pressure, but potassium builds up.",
  "key": "Dry, hacking cough; angioedema (swollen lips/tongue = emergency); hyperkalemia, so no salt substitutes. Never in pregnancy.",
  "beyond": "Both -prils and -sartans raise potassium and harm a fetus; only ACE inhibitors cause the dry cough (from bradykinin buildup)."
 },
 {
  "id": "losartan",
  "name": "Losartan",
  "brand": "",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Angiotensin II Receptor Blockers (ARBs)",
  "moa": "Selectively block the binding of angiotensin II to its receptors in the blood vessels, leading to vasodilation",
  "use": "Used to treat hypertension, reduce the risk of stroke in clients with hypertension and left ventricular hypertrophy, and protect kidney function in clients with type 2 diabetes mellitus (T2DM) and proteinuria",
  "contra": "Known allergy to losartan or any ARBs, pregnancy, severe kidney or liver impairment",
  "se": "Dizziness, fatigue, nasal congestion, back pain",
  "ae": "Hyperkalemia, angioedema, severe hypotension, renal impairment (rare)",
  "rn": "Evaluate the client's response to treatment by checking their blood pressure. Monitor for any side effects and ensure they are following their medication plan. Regularly review lab test results (electrolytes, renal function, liver function).",
  "teach": "Healthy habits, such as engaging in regular exercise, quitting smoking, and eating less sodium, can help blood pressure medication work better. Check blood pressure, heart rate, and rhythm to spot any problems early.",
  "plain": "Instead of stopping angiotensin II from being made (like the -prils), it blocks the parking spot angiotensin II binds to, so vessels stay relaxed. No ACE cough.",
  "key": "Same risks as ACE inhibitors (hyperkalemia, angioedema, pregnancy) but without the dry cough."
 },
 {
  "id": "metoprolol",
  "name": "Metoprolol",
  "brand": "Lopressor",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Beta-blocker (selective beta1-adrenergic antagonist)",
  "moa": "Blocks beta1 adrenergic receptors in the heart, reducing heart rate, myocardial contractility, and cardiac output. Reduces workload and oxygen demand of the heart. Blocks the effect of stress hormones that may cause migraine; also prevents abnormal constriction and dilation of vessels in the brain.",
  "use": "Manage hypertension; treat angina pectoris; prevent myocardial infarction (MI); manage heart failure (class II or III), decrease mortality rate of hospitalized clients; control tachycardic arrhythmias; prevention of migraine headaches; manage thyrotoxicosis",
  "contra": "Bradycardia, heart block (2nd or 3rd degree), cardiogenic shock, uncompensated severe heart failure, pulmonary edema, sick sinus syndrome, cocaine-induced chest pain, untreated pheochromocytoma, children younger than 18 years old",
  "se": "Fatigue, dizziness, nausea, diarrhea, constipation, cold extremities, pruritus, glucose intolerance, erectile dysfunction, impotence, decreased libido, headache, blurred vision, dry mouth",
  "ae": "Bradycardia, severe hypotension, heart block, worsening heart failure, pulmonary edema, depression, mood changes, anaphylaxis, hypoglycemia, bronchospasm, shortness of breath",
  "rn": "Monitor blood pressure (BP) and heart rate (HR). Assess for bronchospasm. Monitor for manifestations of heart failure (e.g., shortness of breath, edema, weight gain). Monitor blood glucose levels in clients with diabetes. Assess cardiac rhythm as well as for manifestations such as syncope, palpitations, angina, or cardiac arrest. Monitor digoxin levels and assess for digoxin toxicity if prescribed. Obtain baseline ECG and medication reconciliation to assess for interactions.",
  "teach": "Take exactly as prescribed, with food if necessary. Do not stop taking the medication suddenly. Monitor for side effects and report severe manifestations. Clients with diabetes should monitor blood glucose levels. Change positions slowly to avoid orthostatic hypotension. Assess pulse prior to taking medication and notify prescriber if below 50/min.",
  "plain": "Puts the brakes on the heart: blocks adrenaline's beta-1 receptors so the heart beats slower and less forcefully, which lowers blood pressure and how much oxygen the heart needs.",
  "key": "Check pulse first; hold and notify if below 50/min. Watch glucose in diabetes (hypoglycemia). Don't stop suddenly."
 },
 {
  "id": "nifedipine",
  "name": "Nifedipine",
  "brand": "Procardia",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Calcium channel blocker",
  "moa": "Inhibit calcium ion influx across membranes; vasodilating effects on coronary and peripheral arterioles",
  "use": "Can be used as monotherapy to treat hypertension or combined with other antihypertensives; also indicated for chronic stable angina and vasospastic angina",
  "contra": "Allergy to calcium channel blockers, heart block, sick sinus syndrome, renal and hepatic impairment, pregnancy, breastfeeding",
  "se": "Headaches, dizziness, facial flushing, heart palpitations, gingival hyperplasia, nausea, constipation",
  "ae": "Lightheadedness, fatigue, bradycardia, reflex tachycardia, peripheral edema, heart block, hypotension, hepatic injury, rash, rebound hypertension",
  "rn": "Check for any contraindications before using this medication to avoid potential side effects. Monitor heart and lung function closely, as the medication can have serious effects on these systems.",
  "teach": "Healthy habits, such as engaging in regular exercise, quitting smoking, and eating a low-sodium diet, are important to make BP medication more effective. Regularly check BP and heart rate and rhythm to spot any potential side effects early. Do not abruptly stop due to potential rebound hypertension.",
  "plain": "Keeps calcium out of the muscle cells in artery walls, so the arteries relax and widen. That lowers blood pressure and helps angina.",
  "key": "Headache, flushing, peripheral edema, reflex tachycardia, gingival hyperplasia. Don't stop abruptly."
 },
 {
  "id": "nitroglycerin",
  "name": "Nitroglycerin",
  "brand": "Nitrostat [sublingual], Nitro-Dur [transdermal patch], Nitro-Time [extended-release capsule]",
  "note": "",
  "cats": [
   "bp"
  ],
  "cls": "Nitrate, organic nitrites, vasodilator",
  "moa": "Converts to nitric oxide (NO), dilating the coronary arteries to increase coronary blood flow. Causes vasodilation of veins and arteries which causes a decrease in preload, and reduction of myocardial oxygen consumption.",
  "use": "Angina pectoris, hypertensive emergencies, acute myocardial infarction, heart failure",
  "contra": "Increased intracranial pressure, severe anemia, right-sided MI, PDE-5 inhibitors, hypersensitivity, pericardial tamponade, pericarditis (constrictive), uncorrected hypovolemia, shock",
  "se": "Dizziness, headache, nausea, palpitations, weakness, flushing, blurred vision, abdominal pain, feelings of apprehension or restlessness, dermatitis (transdermal), orthostatic hypotension, vertigo",
  "ae": "Profound hypotension, methemoglobinemia, tachycardia, syncope, potential falls/injuries, alcohol intoxication (large IV doses only), cardiogenic shock",
  "rn": "Monitor blood pressure (BP), heart rate (HR), and respiratory rate during use, especially in emergencies. Monitor for toxicity manifestations, including hypotension, tachycardia, and headaches. Assess location, intensity, duration, and precipitating factors of angina. Perform cardiac monitoring for IV administration.",
  "teach": "Take medication as prescribed. Do not double doses if one is missed. Change positions slowly to avoid orthostatic hypotension. Headache is a common side effect. Notify provider if headache is severe or does not go away or if blurred vision occurs. Limit alcohol and inform the provider of other medications. Monitor BP regularly and seek emergency care if manifestations worsen or if fainting occurs. Sublingual and translingual spray may be self-administered every 5 minutes for a total of three doses. Keep sublingual medication in original container in an area protected from heat, air, and moisture. Replace tablets every 6 months to ensure potency.",
  "plain": "Turns into nitric oxide, which opens up veins and the heart's own arteries. Less blood returning to the heart means less work, so chest pain eases.",
  "key": "Chest pain: 1 SL every 5 min, max 3 doses. Headache is expected. NEVER with sildenafil (PDE-5). Keep in the dark glass bottle, replace every 6 months."
 },
 {
  "id": "atorvastatin",
  "name": "Atorvastatin",
  "brand": "Lipitor",
  "note": "",
  "cats": [
   "chol"
  ],
  "cls": "HMG-CoA reductase inhibitor (statin)",
  "moa": "Inhibits HMG-CoA reductase, an enzyme necessary for cholesterol synthesis, and reduces the production and secretion of VLDL particles by the liver",
  "use": "Decrease of total cholesterol, triglycerides, and LDL and increase of HDL in clients who have dyslipidemia; also used for primary and secondary prevention of cardiovascular events associated with atherosclerosis and post-MI therapy",
  "contra": "Severe liver impairment, pregnancy, breastfeeding, known allergy to statins",
  "se": "Headache, dizziness, nausea, diarrhea, constipation, gas, nasopharyngeal congestion",
  "ae": "Myopathies, myalgia, rhabdomyolysis, acute kidney injury, hepatotoxicity, increased blood glucose, thrombocytopenia, memory loss, confusion",
  "rn": "Assess liver function prior to administration. Monitor for myopathies.",
  "teach": "Report muscle pain, tenderness, or weakness, abdominal pain, yellowing of skin or eyes, or fatigue to a provider. Adhere to laboratory testing as prescribed by the provider. The medication may be taken with or without food, and the provider may prescribe the statin to be taken in the evening. Lovastatin should be taken with the evening meal.",
  "plain": "Blocks the liver enzyme that makes cholesterol, so LDL drops and HDL rises.",
  "key": "Report muscle pain or weakness (rhabdomyolysis). Check liver function before starting. Often taken in the evening."
 },
 {
  "id": "ezetimibe",
  "name": "Ezetimibe",
  "brand": "Zetia",
  "note": "",
  "cats": [
   "chol"
  ],
  "cls": "Cholesterol absorption inhibitor",
  "moa": "Inhibits absorption of cholesterol in the small intestine",
  "use": "Reduces total cholesterol, LDL, and triglycerides while increasing HDL",
  "contra": "Pregnancy, breastfeeding, active liver disease, elevated liver enzymes",
  "se": "Headache, rhinorrhea, sore throat",
  "ae": "Myopathy, back pain, chest pain, joint pain, diarrhea, fatigue, weakness, rhabdomyolysis (most common in combination with statin therapy), hepatotoxicity",
  "rn": "Monitor baseline liver enzymes, CK, kidney function, and lipid panel. Monitor for manifestations of rhabdomyolysis, including muscle pain and elevated CK levels. Monitor for manifestations of liver injury, including fatigue, anorexia, abdominal pain, jaundice, and dark urine.",
  "teach": "Follow a low-cholesterol diet with this medication. Report unexplainable fatigue, muscle aches or pains, poor appetite, abdominal pain, nausea, vomiting, yellowing of the skin or eyes, or dark-colored urine to a provider.",
  "plain": "Stops the small intestine from absorbing cholesterol from food.",
  "key": "Rhabdo risk is highest when combined with a statin. Watch liver (jaundice, dark urine). Low-cholesterol diet."
 },
 {
  "id": "gemfibrozil",
  "name": "Gemfibrozil",
  "brand": "Lopid",
  "note": "",
  "cats": [
   "chol"
  ],
  "cls": "Fibric acid derivative (fibrate)",
  "moa": "Activates peroxisome proliferator-activated receptors (PPAR) alpha in the liver and adipose tissues, increasing the amount of an enzyme that breaks down triglycerides and lowers VLDL production while moderately lowering LDL production and boosting HDL production",
  "use": "Reduce hypertriglyceridemia and increase HDL",
  "contra": "Active liver or gallbladder disease, severe renal dysfunction",
  "se": "Dyspepsia, abdominal pain",
  "ae": "Cholelithiasis, hepatotoxicity, myopathy, rhabdomyolysis, elevations in serum creatinine",
  "rn": "Monitor for and report GI or gallbladder manifestations, as well as myopathies. Monitor liver function tests and triglycerides prior to administration and periodically during therapy.",
  "teach": "Report GI manifestations, including new inability to tolerate fried foods, upper abdominal discomfort, and bloating to provider. Report muscle or joint pain, any abdominal pain, yellowing of skin or eyes, or fatigue to provider.",
  "plain": "Turns up the enzyme that breaks down triglycerides, so triglycerides fall and HDL rises.",
  "key": "Gallstones (cholelithiasis): report trouble with fried foods or upper abdominal pain. Myopathy too."
 },
 {
  "id": "niacin",
  "name": "Niacin",
  "brand": "Niacor",
  "note": "",
  "cats": [
   "chol"
  ],
  "cls": "Miscellaneous antilipidemic agent",
  "moa": "Prevents lipolysis in adipose tissue; slows fatty acid synthesis in the liver",
  "use": "Adjunctive treatment of dyslipidemias, treatment of hypertriglyceridemia in clients who are at increased risk for pancreatitis, treatment of pellagra",
  "contra": "Regular alcohol use, pregnancy, lactation, active peptic ulcer disease, active liver disease, arterial bleeding",
  "se": "Flushing, generalized pruritus, burning sensations to the face and chest, GI problems, including dyspepsia, nausea and vomiting, rash",
  "ae": "Hyperuricemia, gout, hypotension, hepatotoxicity, arrhythmias, macular edema",
  "rn": "Assess baseline lipid levels. Check blood pressure prior to administration. Monitor blood glucose and blood coagulation. Monitor phosphorus levels in clients at increased risk for hypophosphatemia. Monitor uric acid levels in clients who have a history of hyperuricemia or gout. Clients who have a history of supraventricular tachycardia should be monitored for exacerbation of palpitations/arrythmias.",
  "teach": "Do not use alcohol at the same time as taking niacin.",
  "plain": "A B vitamin given in big doses; it slows fat release and fat production in the liver, lowering triglycerides.",
  "key": "Flushing and itching are expected. Watch uric acid (gout) and liver. No alcohol at the same time."
 },
 {
  "id": "alteplase",
  "name": "Alteplase",
  "brand": "Activase",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Thrombolytic agent (tissue plasminogen activator)",
  "moa": "Converts plasminogen to plasmin, which breaks down fibrin and fibrinogen to dissolve thrombus",
  "use": "Acute MI, pulmonary embolism, acute ischemic stroke, occluded intravenous catheters",
  "contra": "Recent intracranial hemorrhage, active bleeding, severe hypertension (systolic greater than 180 mm Hg or diastolic greater than 110 mm Hg), intracranial lesions, ischemic stroke in the last 3 months, possible aortic dissection, significant facial or head trauma in last 3 months, recent intracranial or spine surgery, pregnancy, surgery within last 3 weeks, subarachnoid bleeding, internal bleeding",
  "se": "Minor bleeding, hypotension, fever, reperfusion premature ventricular contractions",
  "ae": "Major bleeding, intracranial hemorrhage, anaphylaxis, reperfusion arrhythmias such as ventricular tachycardia, hemorrhage",
  "rn": "Assess for contraindications, bleeding risk, vital signs, neurological status, cardiac rhythm, and chest pain. Monitor for manifestations of bleeding. Monitor aPTT, CBC, fibrinogen. Monitor blood pressure.",
  "teach": "Review purpose, risks, and precautions. Report any bleeding or neurological changes. Teach client to monitor for manifestations of bleeding. Time-sensitive: within 3 hours of manifestation start for strokes, within 30 min of arrival for MI.",
  "plain": "A clot buster. It activates the body's own clot-dissolving enzyme (plasmin) to break up a clot that is already there.",
  "key": "Time-sensitive (stroke within 3 hr). Many bleeding contraindications, e.g., BP > 180/110, recent bleed or surgery. Watch neuro status for intracranial bleeding."
 },
 {
  "id": "apixaban",
  "name": "Apixaban",
  "brand": "Eliquis",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Direct factor Xa inhibitors",
  "moa": "Inhibits factor Xa and platelet aggregation induced by thrombin",
  "use": "To reduce the risk of clot formation, specifically DVTs, that result from conditions such as atrial fibrillation. Also used to treat DVT and PE.",
  "contra": "Severe bleeding, spinal puncture or anesthesia, pregnancy/lactation, severe liver damage, prosthetic heart valves, triple-positive antiphospholipid syndrome, PE with hemodynamic instability, previous hypersensitivity",
  "se": "Nausea, epistaxis, bruising, and taking longer for bleeding to stop",
  "ae": "Anemia, hemorrhage, anaphylaxis, spontaneous bleeding from the gastrointestinal tract or bladder",
  "rn": "Assess for manifestations of bleeding from the gums, wounds, IV insertion sites, hematuria, blood in the stool, petechia, bruising",
  "teach": "Instruct client to take medication as prescribed. Do not abruptly stop taking the medication. Instruct client that they may bruise more easily and to notify provider immediately if bleeding occurs that will not stop. Notify provider immediately if a rash or manifestations of anaphylaxis occur, such as swelling of the face or tongue, difficulty breathing, dizziness, or fainting. Use a soft bristle toothbrush and electric razor to prevent bleeding.",
  "plain": "Blocks factor Xa, a key step in the clotting chain, so new clots are less likely to form (for example in A-fib).",
  "key": "Bleeding precautions: soft toothbrush, electric razor. Do not stop abruptly. No routine lab needed."
 },
 {
  "id": "aspirin",
  "name": "Aspirin",
  "brand": "Bayer",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "NSAID, salicylate, antiplatelet agent, antipyretic",
  "moa": "Inhibits the production of prostaglandins to reduce inflammation and fever, produces analgesia. Reduces platelet aggregation.",
  "use": "Primary and secondary prevention of cardiovascular events (MI, ischemic stroke), pain relief, inflammation reduction, and fever control",
  "contra": "Salicylate allergy, bleeding disorders, pediatric population (Reye syndrome), peptic ulcer disease or gastritis, hemophilia, allergy to ibuprofen (cross-reactivity), asthma (possible bronchospasm)",
  "se": "Nausea, epigastric distress, dyspepsia, gastrointestinal upset",
  "ae": "GI bleeding, anemia, hemolysis, hepatotoxicity, hypersensitivity including anaphylaxis and drug reaction with eosinophilia and systemic symptoms (DRESS), gastric ulceration/ bleeding, thrombotic thrombocytopenic purpura (TTP), Reye syndrome (swelling of the brain and liver damage in children taking aspirin), salicylate toxicity, intracranial hemorrhage",
  "rn": "Assess pain and temperature before and after administration. Monitor for fever, rash, lymphadenopathy, and facial swelling periodically. Monitor for manifestations of bleeding (easy bruising, dark-colored stools) throughout treatment. Assess for manifestations of toxicity, which include headaches, tinnitus, hyperventilation, and confusion. Monitor hepatic function, serum salicylate levels, and serum uric acid.",
  "teach": "Avoid drinking alcohol while using aspirin. Do not take with other NSAIDs or acetaminophen for more than a few days unless directed by the provider. Report onset of black, tarry stool; unexpected bleeding or bruising; or tinnitus. Report use to provider ahead of surgery as aspirin may need to be discontinued to reduce bleeding risk. If needed, take with food or milk to minimize gastrointestinal effects. Report continual gastric irritation and manifestations of bleeding. Take medication with a full glass of water and remain upright for 15 to 30 min. Keep stored and locked away from children. Do not crush or chew an enteric-coated aspirin. Because many OTC medications contain aspirin, make sure to read ingredients in OTC preparations.",
  "plain": "Blocks prostaglandins to ease pain, fever, and inflammation, and makes platelets less sticky for the rest of their lifespan.",
  "key": "GI bleeding (black tarry stools), tinnitus = toxicity, Reye syndrome in children. Stop before surgery as told."
 },
 {
  "id": "clopidogrel",
  "name": "Clopidogrel",
  "brand": "Plavix",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Platelet aggregation inhibitor, antiplatelet",
  "moa": "Irreversibly inhibits platelet P2Y12 ADP receptor, preventing platelet aggregation; requires enzymatic activation via CYP enzymes",
  "use": "Unstable angina; secondary prevention after MI, stroke, peripheral arterial disease; decrease platelet aggregation to decrease risk of myocardial infarction; postcoronary stent reclusion",
  "contra": "Active bleeding, anaphylaxis to clopidogrel or components, peptic ulcer disease, bleeding disorders, thrombocytopenia",
  "se": "Minor bleeding (bruising, nosebleeds), rash, pruritus, GI upset, gastric upset, abdominal pain, diarrhea, nausea",
  "ae": "Major bleeding events, thrombotic thrombocytopenia purpura (rare), severe hypersensitivity reactions, gastric ulceration/bleeding",
  "rn": "Monitor for bleeding (visible bleeding, bruising). Check hemoglobin and hematocrit. Assess for rash and pruritus.",
  "teach": "Report unexpected bleeding or bruising. Avoid activities with high injury risk. Inform all providers of medication use. Take with food to decrease gastrointestinal effects.",
  "plain": "Permanently blocks a receptor on platelets so they can't clump together. Used after MI, stroke, or a stent.",
  "key": "Bleeding and bruising; take with food; tell every provider (stop before surgery as directed)."
 },
 {
  "id": "enoxaparin",
  "name": "Enoxaparin",
  "brand": "Lovenox",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Anticoagulant (low molecular weight heparin)",
  "moa": "Factor X inhibitor",
  "use": "Prevention of DVT, inpatient treatment of DVT with or without PE, outpatient treatment of DVT without PE, prevention of ischemic complications related to non- ST elevation MI (NSTEMI) and unstable angina",
  "contra": "Active bleeding, known allergy",
  "se": "Bleeding, thrombocytopenia, allergic reaction",
  "ae": "Hemorrhage",
  "rn": "Monitor for manifestations of bleeding.",
  "teach": "Report signs of bleeding. Follow bleeding precautions.",
  "plain": "A low-molecular-weight heparin given as a shot under the skin; blocks factor X to prevent DVT.",
  "key": "Bleeding and low platelets. Bleeding precautions. Given subcutaneously.",
  "beyond": "Give deep subcutaneous in the abdomen at least 2 inches from the umbilicus; do not expel the air bubble or rub the site."
 },
 {
  "id": "heparin",
  "name": "Heparin",
  "brand": "",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Anticoagulant",
  "moa": "Factor Xa/thrombin inhibitor",
  "use": "Treatment and management of ischemic strokes, including embolic and thrombotic strokes, pulmonary embolisms (PEs), and deep vein thromboses (DVTs); myocardial infarctions (MIs), unstable chest pain, and dysrhythmias; prevent excess coagulation during procedures; prevent disseminated intravascular coagulation.",
  "contra": "Uncontrollable bleeding; pregnancy; severe thrombocytopenia; lumbar anesthesia; surgery that involves the brain, eyes, or spinal cord puncture; regional anesthesia",
  "se": "Bleeding, thrombocytopenia, allergic reactions",
  "ae": "Hemorrhage, anaphylaxis",
  "rn": "Monitor pulse and blood pressure. Monitor for signs of bleeding. Monitor activated partial thromboplastin time (aPTT) for dosage adjustments for infusions. Monitor for thrombocytopenia and allergic reactions. Monitor sensation and movement of lower extremities.",
  "teach": "Report signs of bleeding, calf pain, tenderness, or swelling immediately. Report shortness of breath. Follow bleeding precautions.",
  "plain": "Fast-acting anticoagulant (IV or subcutaneous) that blocks thrombin and factor Xa so clots stop growing.",
  "key": "Monitor aPTT for IV infusions and platelets (thrombocytopenia).",
  "beyond": "Antidote: protamine sulfate."
 },
 {
  "id": "warfarin",
  "name": "Warfarin",
  "brand": "Coumadin",
  "note": "",
  "cats": [
   "coag"
  ],
  "cls": "Vitamin K antagonist",
  "moa": "Interrupts the vitamin K cycle and reduces the creation of active clotting factors",
  "use": "Prevention of venous or arterial thrombosis and embolism",
  "contra": "Pregnancy, vitamin K deficiency, thrombocytopenia, alcohol use disorder or liver disease, uncontrollable bleeding. Avoid use if undergoing a lumbar puncture, regional anesthesia, or any surgery involving the brain, eyes, or spinal cord.",
  "se": "Bleeding in mucous membranes, bruising",
  "ae": "Hemorrhage, toxicity",
  "rn": "Monitor pulse and blood pressure. Monitor PT/INR levels.",
  "teach": "Avoid excessive alcohol ingestion. Take medication at same time each day. Make sure clients watch for and report manifestations of bleeding. Advise clients to avoid taking OTC NSAIDs, particularly aspirin, or any medications that contain salicylates. Maintain a consistent diet of vitamin K–rich foods. Teach bleeding precautions.",
  "plain": "Blocks vitamin K from activating clotting factors, so clotting slows. Takes days to work.",
  "key": "Monitor PT/INR. Keep vitamin K foods CONSISTENT (not zero). Avoid aspirin/NSAIDs.",
  "beyond": "Antidote: vitamin K. Typical INR goal is 2–3 for most indications."
 },
 {
  "id": "adenosine",
  "name": "Adenosine",
  "brand": "Adenocard",
  "note": "",
  "cats": [
   "dys"
  ],
  "cls": "Antiarrhythmic",
  "moa": "Reinstates sinus rhythm by slowing the speed of impulses traveling through the AV node",
  "use": "Change arrhythmia to a sinus rhythm",
  "contra": "Hypersensitivity, sick sinus syndrome, second- or third-degree AV block, myocardial infarction, ischemia, breastfeeding",
  "se": "Nausea, metallic taste, headache, facial flushing",
  "ae": "Arrhythmia such as V-tach, myocardial infarction, palpitations, difficulty breathing, hyperventilation, hypersensitivity reaction, stroke, seizures, lightheadedness, hypotension",
  "rn": "Provide continuous ECG monitoring of the heart rate and BP. Assess respiratory rate and lung sounds to rule out bronchospasms in clients with asthma.",
  "teach": "Change positions slowly to prevent falling or fainting. Report dizziness, difficulty breathing, or flushing of the face.",
  "plain": "Briefly slows conduction through the AV node, like a reset button, to convert a fast rhythm back to sinus.",
  "key": "Continuous ECG; flushing and a brief pause are expected. Caution in asthma (bronchospasm)."
 },
 {
  "id": "amiodarone",
  "name": "Amiodarone",
  "brand": "Pacerone",
  "note": "",
  "cats": [
   "dys"
  ],
  "cls": "Class III antiarrhythmic agent",
  "moa": "Lengthens the duration of the action potential and refractory period; subdues cardiac arrhythmias by prolonging the PR interval and QT interval and reducing the speed of the sinus rate",
  "use": "Supraventricular and ventricular arrhythmias",
  "contra": "Hypersensitivity to amiodarone or iodine, breastfeeding, second- and third-degree AV block, severe sick sinus syndrome, cardiogenic shock, bradycardia (unless the client has a pacemaker)",
  "se": "Nausea, vomiting, constipation, anorexia, fatigue, malaise, photosensitivity",
  "ae": "Hypotension, bradycardia, worsening arrhythmia, toxic epidermal necrolysis, acute respiratory distress syndrome, pulmonary fibrosis, ataxia, dizziness, involuntary movement",
  "rn": "Monitor ECG continuously with therapy initiation, both orally and IV. Continuous IV therapy requires continuous ECG monitoring. During ECG monitoring, assess the heart rate, BP, rhythm, PR interval, QT interval, and T wave. Report bradycardia and worsening arrhythmia.",
  "teach": "Take as prescribed. If a dose is missed, take the next dose at the scheduled time. Avoid grapefruit juice because it alters medication metabolism. Wear sunscreen and use caution when riding in the vehicle or wearing thin clothing, because the skin may react to sun exposure. Monitor pulse every day and report findings outside of the prescribed range. Use contraceptives and avoid breastfeeding during therapy.",
  "plain": "Lengthens the heart's recharge time so fast, irregular rhythms settle down. Works on both upper- and lower-chamber rhythms.",
  "key": "Pulmonary fibrosis, bradycardia, photosensitivity (sunscreen). Avoid grapefruit juice. Continuous ECG with IV."
 },
 {
  "id": "digoxin",
  "name": "Digoxin",
  "brand": "Lanoxin",
  "note": "",
  "cats": [
   "dys",
   "contract"
  ],
  "cls": "Cardiac glycoside, antiarrhythmic, inotropic",
  "moa": "Inhibits sodium-potassium adenosine triphosphatase (ATPase) pump to increase contractility through an increase of intracellular sodium and intracardiac calcium. Prolongs the refractory period of the AV node and increases the strength of myocardial contractions; decreases heart rate",
  "use": "Atrial flutter, atrial fibrillation, HF",
  "contra": "Hypersensitivity, MI, ventricular dysrhythmia, heart block, low potassium or magnesium, Wolff-Parkinson-White syndrome",
  "se": "Asymptomatic bradycardia, lack of appetite, diarrhea, nausea, vomiting, weakness or fatigue, headache, rash",
  "ae": "Symptomatic bradycardia, arrhythmias/heart blocks, visual changes (yellow or green hue around objects), abdominal pain, confusion, thrombocytopenia",
  "rn": "Auscultate apical pulse prior to administration. Follow hold and report prescriptions as needed (hold for HR less than 60/min). Client should be on cardiac monitor when administered IV. Monitor renal and hepatic function and electrolytes, especially potassium. If a dose of the medication is not given, notify the provider. Monitor BP during IV therapy.",
  "teach": "Teach how to take pulse. Clients should contact provider if heart rate is below 60/min or above 100/min. Do not stop the medication without consulting a provider. Review manifestations of digoxin toxicity and when to seek care. High- fiber meals may decrease absorption. Check with provider regarding OTC medication use. Take the medication at the same time. Take missed dose within 12 hours of the next dose or skip. Report manifestations of toxicity to the provider immediately. Adhere to follow-up appointments and laboratory studies.",
  "plain": "Makes each heartbeat stronger and slows the rate by blocking the sodium-potassium pump. Used for heart failure and A-fib.",
  "key": "Take apical pulse first; hold if HR < 60. Low potassium raises toxicity risk. Toxicity: nausea, vomiting, yellow-green halos.",
  "beyond": "Therapeutic level is about 0.5–2 ng/mL; hypokalemia (often from loop or thiazide diuretics) raises toxicity risk. Antidote: digoxin immune fab."
 },
 {
  "id": "diltiazem",
  "name": "Diltiazem",
  "brand": "Cardizem",
  "note": "",
  "cats": [
   "dys"
  ],
  "cls": "Class IV antiarrhythmic, calcium channel blocker",
  "moa": "During depolarization, prevents calcium ions from going into the slow calcium channels in the myocardium or vascular smooth muscle",
  "use": "Convert supraventricular tachyarrhythmias to sinus rhythm; slow rate of atrial flutter and atrial fibrillation",
  "contra": "Prior hypersensitivity, second- or third-degree AV block (except if the client has a pacemaker), hypotension, recent myocardial infarction, breastfeeding",
  "se": "Peripheral edema, weight gain, dry mouth, nocturia, urinary frequency, headache",
  "ae": "Bradycardia, especially with IV dose but also with oral therapy; hypotension with IV dose or overdose; heart failure, Stevens-Johnson syndrome, dyspnea, confusion, thrombocytopenia, leukopenia, anemia, lightheadedness, dizziness, liver toxicity",
  "rn": "Assess BP and heart rate before administration. The client must adhere to prescribed parameters. Do not administer if BP is less than 90 mm Hg or prescribed parameter. Do not administer if the pulse is less than 60/min or the prescribed parameter. Monitor ECG continuously for cardiac rhythm during IV therapy. Report bradycardia, hypotension, or development of an arrhythmia to the provider. Assess skin for rash and manifestations of Stevens-Johnson syndrome, such as blisters, hyperthermia, conjunctivitis, lesions in the mouth, or malaise.",
  "teach": "Take with or without meals. Take at the same time each day. Take a missed dose as soon as possible unless it is close to the time of the next scheduled dose. Assess BP and heart rate before taking medication and adhere to parameters when holding a dose. Notify the provider if adverse effects occur. Change position slowly.",
  "plain": "A calcium channel blocker that slows the heart's electrical system, used to slow down A-fib and flutter.",
  "key": "Hold if HR < 60 or SBP < 90. Bradycardia and hypotension, especially IV. Watch for Stevens-Johnson rash."
 },
 {
  "id": "furosemide",
  "name": "Furosemide",
  "brand": "Lasix",
  "note": "",
  "cats": [
   "diur"
  ],
  "cls": "Loop diuretic",
  "moa": "Prevents reabsorption or retention of sodium and chloride in the kidneys by inhibiting the sodium–chloride cotransport system in the proximal and distal tubules and the ascending loop of Henle, leading to an increase in the excretion of sodium, chloride, potassium, magnesium, calcium, and water.",
  "use": "Treats pulmonary edema in heart failure; edema caused by renal, hepatic, or cardiac failure not affected by other diuretics; elimination of fluid to prevent and manage hypertension",
  "contra": "Hypersensitivity, hepatic coma, electrolyte imbalance or dehydration, anuria; subcutaneous forms contraindicated for clients who have cirrhosis of the liver, ascites, or acute pulmonary edema",
  "se": "Photosensitivity, tinnitus, headache, hypovolemia, orthostatic hypotension, urticaria, hyperlipidemia, hyperuricemia, electrolyte imbalances (sodium, potassium, calcium, chloride, magnesium), nausea, vomiting, diarrhea or constipation, vertigo, muscle cramps; hepatic and renal labs may become elevated",
  "ae": "Hypotension, ototoxicity, hyperglycemia, elevated uric acid levels, severe severe electrolyte imbalances, tingling or numbness of limbs, erythema multiforme, Stevens-Johnson syndrome, toxic epidermal necrolysis, hearing loss, blood dyscrasias (agranulocytosis, aplastic anemia, hemolytic anemia, leukopenia, thrombocytopenia)",
  "rn": "Measure I&O; perform daily weights; assess presence and location of edema; auscultate breath sounds; and monitor BP, glucose levels, uric acid, electrolytes, lipids, hepatic, and renal function before and during therapy",
  "teach": "Instruct clients to increase their consumption of potassium-rich foods, such as citrus fruits, potatoes, and bananas, if they have experienced hypokalemia; clients should check blood pressure regularly; report manifestations of low blood pressure, such as dizziness or syncope; report any change in hearing, including loss of hearing or ringing in ears; clients who have diabetes need to monitor blood glucose levels carefully and report hyperglycemia; clients who have gout need to monitor for manifestations and report them to their provider; furosemide should be taken as directed; doses should not be doubled, take a missed dose as soon as remembered as long as it is not within 2 hours of the next dose; change positions slowly; check weights daily and notify the prescriber if weight changes",
  "plain": "A strong water pill. Works in the loop of Henle to flush out sodium, water, and potassium fast.",
  "key": "Hypokalemia (eat bananas, potatoes, citrus), ototoxicity (ringing, hearing loss), orthostatic hypotension. Daily weights and I&O."
 },
 {
  "id": "hydrochlorothiazide",
  "name": "Hydrochlorothiazide",
  "brand": "Hydrodiuril",
  "note": "",
  "cats": [
   "diur"
  ],
  "cls": "Thiazide diuretic",
  "moa": "Inhibits sodium reabsorption in the distal tubule by blocking the sodium-chloride transporter, allowing for increased sodium and water excretion; also increases excretion of other electrolytes (potassium, chloride, magnesium), and bicarbonate",
  "use": "Management of hypertension; treatment of edema caused by heart failure, liver disease, or kidney problems",
  "contra": "Hypotension, electrolyte imbalances, anuria, breastfeeding, sulfa allergies, severe liver disease, adrenal insufficiency, increase the risk of serious complications. Do not use in clients who are allergic to this medication class or sulfonamides (due to potential cross allergies).",
  "se": "Hypovolemia, orthostatic hypotension, rash, photosensitivity, hyperlipidemia, hyperuricemia, low electrolyte levels, nausea, vomiting, headache, dizziness, weakness, muscle cramps, abdominal cramping, drowsiness, lethargy, manifestations of gout, hyperglycemia.",
  "ae": "Severe hypovolemia and hypotension, acute angle-closure glaucoma, severe electrolyte imbalances, skin cancer, Stevens-Johnson syndrome, hearing loss, thrombocytopenia, pancreatitis, hepatitis, dehydration from severe fluid loss, metabolic alkalosis, allergic reactions (rash, hives)",
  "rn": "Monitor blood pressure, fluid status, intake and output (I&O), daily weight, and electrolyte levels regularly. Assess presence and location of edema, auscultate breath sounds, and monitor glucose, uric acid, lipids, hepatic, and renal function before and during therapy. Determine if the client has an allergy to sulfonamides. Monitor for presence of rash.",
  "teach": "Hydrochlorothiazide should be taken as directed, preferably in the morning. Doses should not be doubled; take a forgotten dose as soon as remembered as long as it is not within 2 hours of the next dose. BP may drop with administration, or it may do so when changing positions, change positions slowly. Check weights daily and notify the prescriber if weight changes dramatically, such as 0.91 kg (2 lb) in a day. Increase intake of potassium-rich foods such as citrus fruits, potatoes, and bananas if approved. Report manifestations of sodium imbalance, which may include confusion, headache, fatigue, muscle weakness or cramps, or seizures. Report manifestations of potassium imbalances, which may include constipation, palpitations, tingling or numbness, and muscle damage. Avoid alcohol. Do not smoke. Wear protective clothing and sunscreen. Monitor blood pressure weekly. Engage in regular exercise and stress management. Clients who have diabetes mellitus must monitor blood glucose levels.",
  "plain": "A milder water pill. Blocks sodium reabsorption in the distal tubule; first-line for hypertension.",
  "key": "Low K+, high glucose and uric acid. Sulfa allergy cross-reactivity. Take in the morning; report weight gain of 2 lb/day."
 },
 {
  "id": "mannitol",
  "name": "Mannitol",
  "brand": "Osmitrol",
  "note": "",
  "cats": [
   "diur"
  ],
  "cls": "Osmotic diuretic",
  "moa": "Elevates blood plasma osmolality, causing water from brain and cerebral spinal fluid (CSF) to move into the interstitial fluid and plasma, which is not reabsorbed by the renal tubule and increases the osmolality of the glomerular filtrate, causing the excretion of water, sodium, chloride, and other solutes",
  "use": "Management of acute renal failure; reduction in intracranial pressure associated with cerebral edema",
  "contra": "Anuria, pulmonary edema, active intracranial bleeding, severe dehydration",
  "se": "Tiredness, weakness, dry mouth, increased thirst",
  "ae": "Dehydration, pulmonary edema, exacerbation of congestive heart failure, seizures, confusion",
  "rn": "Assess neurological function (increase in intracranial or intraocular pressure), lung sounds, urine output, manifestations of fluid overload or dehydration, electrolytes, and renal function.",
  "teach": "Osmotic diuretics are administered intravenously. Clients should report difficulty breathing as this may be a manifestation of pulmonary edema.",
  "plain": "An IV sugar-alcohol that pulls water out of the brain into the blood, then out through the kidneys.",
  "key": "Used for increased ICP. Watch for pulmonary edema and fluid overload (report trouble breathing). IV only."
 },
 {
  "id": "spironolactone",
  "name": "Spironolactone",
  "brand": "Aldactone, CaroSpir",
  "note": "",
  "cats": [
   "diur"
  ],
  "cls": "Potassium-sparing diuretic, steroidal antiandrogen",
  "moa": "Acts as an aldosterone receptor antagonist, inhibiting sodium reabsorption in the distal tubules and collecting duct, allowing for increased sodium and water excretion with retention of potassium. Inhibits testosterone production and blocks androgen receptors.",
  "use": "Hypertension, edema caused by heart failure, cirrhosis, nephrotic syndrome, hypokalemia, increases survival in clients with heart failure by preventing cardiac muscle remodeling, suppression of male secondary sex characteristics in transgender women",
  "contra": "Pregnancy (teratogenic), renal failure, hyperkalemia, hypersensitivity, anuria",
  "se": "Dizziness, stomach pain or cramps, drowsiness, fatigue, restlessness, menstrual irregularities, hirsutism, deepening of voice, gynecomastia, impotence, loss of coordination, headache, erectile dysfunction, breast tenderness, muscle cramps, hypersensitivity reactions, vomiting, diarrhea, enlarged or painful breasts, increased body hair growth",
  "ae": "Hyperkalemia which can manifest as vomiting, diarrhea, muscle weakness, or heart palpitation. Toxic epidermal necrolysis, Stevens-Johnson syndrome, agranulocytosis, severe hypersensitivity reactions, polyuria, polydipsia, postural hypotension",
  "rn": "Monitor serum potassium levels during treatment. If hyperkalemia occurs, monitor for cardiac dysrhythmias. Monitor fluid balance, intake and output, perform daily weights, assess skin for rash, and monitor blood pressure, blood glucose, renal function, weakness, and urinary calcium before and during therapy. Monitor ECG periodically.",
  "teach": "Report palpitations, irregular pulse, or other signs of hyperkalemia. Avoid potassium supplements, large amounts of high-potassium foods (bananas, prunes, orange juice), and salt substitutes (mineral salt). Spironolactone should be taken as directed. Notify the provider immediately if muscle cramps or weakness, unexpected fatigue, or severe nausea, vomiting, diarrhea, or rash are experienced, as this can be an indication of a severe reaction. Blood pressure should be checked at least weekly. Take in the morning to avoid sleep disruption. Avoid drinking alcohol. Notify the provider of all medications and presence of Addison's disease or liver or kidney disease.",
  "plain": "A gentle water pill that blocks aldosterone, so you lose sodium and water but keep potassium.",
  "key": "HYPERkalemia: no potassium supplements or salt substitutes. Gynecomastia. 'Spiro Spares K+.'"
 },
 {
  "id": "oxybutynin",
  "name": "Oxybutynin",
  "brand": "Ditropan",
  "note": "",
  "cats": [
   "bladder"
  ],
  "cls": "Anticholinergic",
  "moa": "Inhibits acetylcholine to relax smooth muscle",
  "use": "Urinary antispasmodic",
  "contra": "Hypersensitivity, urinary retention, intestinal obstruction, narrow-angle glaucoma",
  "se": "Constipation, dry mouth, blurred vision, nausea, dizziness, drowsiness",
  "ae": "Confusion, hallucinations, chest pain, tachycardia, angioedema",
  "rn": "Assess voiding pattern and residual urine. Monitor level of consciousness.",
  "teach": "Avoid driving and other activities that require being alert. Use caution with CNS depressants. Dry mouth is common. Rotate sites on intact skin if using transdermal route.",
  "plain": "An anticholinergic that relaxes the bladder muscle to stop spasms and urgency in overactive bladder.",
  "key": "Dry mouth, constipation, blurred vision, drowsiness. Don't use with urinary retention or narrow-angle glaucoma."
 },
 {
  "id": "tamsulosin",
  "name": "Tamsulosin",
  "brand": "Flomax",
  "note": "",
  "cats": [
   "bladder"
  ],
  "cls": "Alpha-adrenergic receptor antagonist",
  "moa": "Blocks alpha-1 adrenergic receptors, which causes smooth muscle relaxation",
  "use": "BPH",
  "contra": "Hypersensitivity (to tamsulosin or sulfa)",
  "se": "Dizziness; headache; hypotension; fatigue; ejaculatory disorders, like decreased ejaculation",
  "ae": "Intraoperative floppy iris syndrome",
  "rn": "Assess pre- and post-administration urinary manifestations of BPH. Monitor blood pressure.",
  "teach": "Take daily at same time. Monitor for manifestations of and take precautions for hypotension and dizziness.",
  "plain": "Relaxes the smooth muscle of the prostate and bladder neck so urine flows more easily in BPH.",
  "key": "Dizziness and orthostatic hypotension; floppy iris syndrome during cataract surgery. Sulfa allergy caution."
 },
 {
  "id": "sildenafil",
  "name": "Sildenafil",
  "brand": "Viagra",
  "note": "",
  "cats": [
   "sexual"
  ],
  "cls": "Phosphodiesterase type 5 inhibitor",
  "moa": "Inhibits phosphodiesterase type 5; causes increased blood flow and erection of the penis",
  "use": "Erectile dysfunction, pulmonary arterial hypertension",
  "contra": "Hypersensitivity, use of nitrates, severe hypotension, hepatic impairment, recent stroke or heart attack",
  "se": "Flushing, dyspepsia, headache, dizziness, hypotension",
  "ae": "Priapism, myocardial infarction, vision or hearing loss",
  "rn": "Assess for erectile dysfunction diagnosis.",
  "teach": "Take 1 hr before sexual activity. Do not take more than once per day. Report chest pain immediately. Notify provider if erection lasts more than 4 hr.",
  "plain": "Increases blood flow to the penis (and the lungs, for pulmonary hypertension) by blocking PDE-5.",
  "key": "NEVER with nitrates (severe hypotension). Erection > 4 hr: get help. Take 1 hr before sex, once a day max."
 },
 {
  "id": "combination-estrogen-progestin",
  "name": "Combination Estrogen-Progestin",
  "brand": "Ortho Tri-Cyclen, Yaz",
  "note": "",
  "cats": [
   "female"
  ],
  "cls": "Oral contraceptive",
  "moa": "Combinations of estrogen and progestin in oral contraceptives work by preventing ovulation, changing the uterine lining to prevent pregnancy, and altering the cervical mucus to prevent sperm from entering.",
  "use": "Birth control, treatment of acne, benign breast disease, ovarian cysts, treatment of premenstrual syndrome",
  "contra": "Pregnancy, breastfeeding, history of blood clots, breast cancer, MI, stroke, uncontrolled high blood pressure, migraines with aura, postpartum for less than 21 days, smoking",
  "se": "Upper GI manifestations such as nausea and vomiting, lower GI manifestations such as constipation or diarrhea, changes in weight or appetite, menstrual changes, including pain with menstruation, missed periods, or spotting between periods, breast enlargement, breast tenderness, acne, brown patches of skin, vaginal swelling, burning, redness, itching",
  "ae": "Severe headache/vomiting, speech problems, weakness/numbness in arm or leg, dizziness, chest pain, hemoptysis, loss of vision, double vision, leg pain, severe stomach pain, jaundice, loss of appetite, lethargy, dark urine, light-colored stool, swelling of hands, feet, lower legs, menstrual bleeding that lasts longer than 7 days or is unusually heavy",
  "rn": "Conduct a thorough medication review and confirm that the client is not pregnant or breastfeeding. Obtain a health history to assess for risks for adverse effects, including history of blood clots, breast cancer, MI, stroke, migraines, uncontrolled hypertension, and smoking.",
  "teach": "Follow provider directions carefully about when to start taking birth control pills. Withdrawal bleeding during the days of low or no doses may be experienced. If doses are missed, the client may not be protected from pregnancy and should use a backup method of birth control.",
  "plain": "The birth control pill: stops ovulation, thins the uterine lining, and thickens cervical mucus.",
  "key": "Clots and stroke (leg pain, chest pain, severe headache, vision loss). Contraindicated with smoking, clot history, migraine with aura. Use backup if doses are missed.",
  "beyond": "ACHES warning signs: Abdominal pain, Chest pain, Headache (severe), Eye problems, Severe leg pain."
 },
 {
  "id": "estradiol",
  "name": "Estrogens/Estradiol",
  "brand": "Delestrogen, Estrace, Depo-Estradiol, EstroGel",
  "note": "",
  "cats": [
   "female"
  ],
  "cls": "Hormone, estrogen",
  "moa": "Development of female sex organs, secondary sex characteristics, ovulation",
  "use": "Contraception, menstrual disorders, hypogonadism, infertility treatments, osteoporosis, menopausal manifestations, hormone-sensitive breast cancer; reduce blood cholesterol, protein synthesis, and sodium and water retention",
  "contra": "History of allergy to estrogens, thromboembolic disease (deep vein thrombosis [DVT], pulmonary embolism [PE], MI), history of breast cancer, liver impairment, undiagnosed vaginal bleeding, pregnancy",
  "se": "Edema, urticaria, hypertension, oily skin, gynecomastia (breast enlargement in males), breast tenderness, nausea, vomiting, anorexia, weight changes, amenorrhea, dysmenorrhea, loss of libido, hypercalcemia, leg cramps, hyperglycemia, erectile dysfunction, testicular atrophy",
  "ae": "Cancers (breast, endometrial, ovarian), stroke, thromboembolism, myocardial infarction (MI)",
  "rn": "Monitor blood pressure, weight (weekly), and I&O. Monitor labs; may increase HDL, triglycerides, glucose, sodium, cortisol, prothrombin, and clotting factors. Monitor hepatic function labs.",
  "teach": "Take oral doses with food to reduce nausea. Report manifestations of fluid retention and/ or thromboembolic disorders, depression, or liver dysfunction. Consider smoking cessation education. Do not stop suddenly; take missed dose as soon as it is remembered. Notify provider if pregnancy is planned or suspected.",
  "plain": "Replaces estrogen, the hormone behind female sex characteristics and ovulation; used for menopause, osteoporosis, and more.",
  "key": "Clots, stroke, MI, and some cancers. Contraindicated with DVT/PE history or undiagnosed vaginal bleeding."
 },
 {
  "id": "progesterone",
  "name": "Progesterone",
  "brand": "Prometrium",
  "note": "",
  "cats": [
   "female"
  ],
  "cls": "Synthetic progestogen, steroidal antiandrogen",
  "moa": "Causes secretory changes to the endometrium leading to changes in the vaginal epithelium, growth of the mammary alveolar tissue; inhibition of the pituitary gland; uterine smooth muscle relaxation",
  "use": "Suppresses endogenous androgens, reducing masculine characteristics, often used in gender-affirming care",
  "contra": "Hypersensitivity, hypersensitivity to peanuts, liver impairment, wasting diseases, severe depression, breast cancer, cardiovascular disease, pregnancy, Dubin- Johnson syndrome, Rotor syndrome, and thromboembolism",
  "se": "Fatigue, weakness, and glucose intolerance",
  "ae": "Meningiomas, liver toxicity, liver tumors, myocardial infarction, DVT, and PE",
  "rn": "Assess for manifestations of thromboembolism, such as chest pain and dyspnea. Monitor mood changes. Monitor liver function and adrenocortical function tests. Monitor BP and weekly weight. Monitor blood glucose levels.",
  "teach": "Avoid alcohol while taking this medication. Be aware that fatigue may occur in the first week of therapy; avoid driving if affected. Take missed doses as soon as remembered, but do not double the dose. Be aware of the potential for benign breast tumors and patchy hair loss.",
  "plain": "Acts like progesterone: changes the uterine lining and relaxes uterine muscle; also lowers androgens in gender-affirming care.",
  "key": "Thromboembolism (chest pain, dyspnea), mood changes, liver toxicity. Peanut allergy is a contraindication."
 },
 {
  "id": "testosterone",
  "name": "Testosterone",
  "brand": "Depo-Testosterone, AndroGel",
  "note": "",
  "cats": [
   "male"
  ],
  "cls": "Hormone, androgen",
  "moa": "Growth and development of male sex organs and maintenance of secondary sex characteristics",
  "use": "Increase male characteristics in male clients who have low testosterone levels and transgender clients, delayed puberty in men, hypogonadism, androgen-responsive breast cancer",
  "contra": "Hypersensitivity, males with breast or prostate cancer, pregnancy, lactation",
  "se": "Edema, deepening of voice, change in libido, clitoral enlargement, and decreased breast size in females; acne, facial hair, gynecomastia, and erectile dysfunction in males",
  "ae": "DVT, liver toxicity, stroke, suicidal thoughts, PE, anaphylaxis",
  "rn": "Monitor I&O. Weigh client twice a week. Assess for misuse of medication (using higher doses than prescribed). Monitor for enlargement of breast tissue, persistent erections, and increased urge to urinate.",
  "teach": "Report priapism, difficulty urinating, hypercalcemia (nausea, vomiting, constipation, weakness), edema, weight gain, jaundice, or abdominal pain. Clients with diabetes should monitor blood glucose carefully. Women and children should avoid contact with unclothed or unwashed application site for transdermal or gel route.",
  "plain": "Replaces testosterone to build and keep male sex characteristics.",
  "key": "DVT/PE, liver toxicity. Gel: women and children must avoid touching the application site."
 },
 {
  "id": "metoclopramide",
  "name": "Metoclopramide",
  "brand": "Reglan",
  "note": "",
  "cats": [
   "emesis"
  ],
  "cls": "Antiemetic, dopamine receptor antagonist",
  "moa": "Stimulates motility of the upper GI and increases gastric emptying",
  "use": "Nausea and vomiting",
  "contra": "Hypersensitivity, GI obstruction, GI bleed, seizure disorders, hypertension, Parkinson's disease, history of tardive dyskinesia, concurrent use of MAOIs",
  "se": "Metoclopramide can cause drowsiness, extrapyramidal symptoms, and restlessness.",
  "ae": "Extrapyramidal symptoms may be irreversible.",
  "rn": "Assess for adverse effects such as Parkinsonian manifestations (difficulty speaking or swallowing, shuffling gait, mask-like face), dystonia (repetitive muscle contractions and twisting, inability to move eyes), and tardive dyskinesia (involuntary movements usually present in the tongue, face, and neck). Also assess for cardiac arrhythmias and mental status changes.",
  "teach": "Teach how to take intranasal doses. Avoid driving until reaction to medication is known. Clients should notify their provider if they become pregnant or are breastfeeding. Notify health care professionals of any mood or mental status changes or extrapyramidal symptoms.",
  "plain": "Speeds up the stomach so it empties faster and blocks dopamine to calm nausea.",
  "key": "Extrapyramidal symptoms and tardive dyskinesia (can be permanent). Not with GI obstruction, bleed, or Parkinson's."
 },
 {
  "id": "ondansetron",
  "name": "Ondansetron",
  "brand": "Zofran",
  "note": "",
  "cats": [
   "emesis"
  ],
  "cls": "Serotonin 5-HT3 receptor antagonist",
  "moa": "Inhibits the activation of the 5-HT3 receptor to decrease nausea and vomiting.",
  "use": "Nausea and vomiting related to chemotherapy, radiation therapy, post anesthesia, and pregnancy",
  "contra": "Hypersensitivity, congenital long QT syndrome; do not use with apomorphine due to the risk of decreased level of consciousness and hypotension.",
  "se": "Headache, fatigue, malaise, constipation, diarrhea, and dry mouth",
  "ae": "QT prolongation, development of septal defects and cleft palate of the fetus if taken during pregnancy, serotonin syndrome, toxic epidermal necrolysis, and Stevens-Johnson syndrome",
  "rn": "Obtain a baseline ECG and monitor serum sodium, potassium, calcium, magnesium, and liver function levels for clients with known cardiac risk factors or those taking medications that prolong the QT interval. Assess bowel sounds and abdominal distention prior to administration. Monitor for extrapyramidal effects, manifestations of serotonin syndrome, and Stevens-Johnson syndrome.",
  "teach": "Share any history of nausea and vomiting, concomitant use of medications containing serotonin, or pregnancy with the provider. Report palpitations or syncope. Follow the provider's instructions on dose timing for chemotherapy- induced nausea and vomiting. Self-administer 30 minutes prior to chemotherapy.",
  "plain": "Blocks serotonin (5-HT3) signals that trigger vomiting, especially from chemo, surgery, or pregnancy.",
  "key": "QT prolongation: baseline ECG and electrolytes in cardiac clients. Serotonin syndrome. Give 30 min before chemo."
 },
 {
  "id": "scopolamine",
  "name": "Scopolamine",
  "brand": "Transderm Scop",
  "note": "",
  "cats": [
   "emesis"
  ],
  "cls": "Anticholinergic",
  "moa": "Inhibits ACh release in the CNS and acts as an antagonist to the M1 receptor",
  "use": "Prevention of motion sickness, and postoperative nausea and vomiting (PONV)",
  "contra": "Hypersensitivity, allergy to belladonna alkaloids, glaucoma (angle-closure), obstructive disease of GI tract; pregnancy with pre-eclampsia",
  "se": "Tachycardia, blurred vision, dilated pupils, dry mouth, urinary hesitancy, drowsiness",
  "ae": "Palpitations, confusion, anticholinergic toxidrome including flushed skin, tachycardia, agitation, confusion, and urinary retention",
  "rn": "Monitor for vomiting, nausea, urinary retention, flushed skin, tachycardia, agitation, and confusion during treatment.",
  "teach": "Apply at least 4 hours prior to travel on a clean, dry, and hairless area behind the ears. Apply pressure to the area to adhere. It should remain active for 3 days and is not affected by water or showering. May cause drowsiness; avoid driving until the reaction the medication is known. It can cause overheating in hot weather. Avoid alcohol and other CNS depressants while on the medication and use ice chips or sugarless gum or candy for dry mouth. Discontinue use before having an MRI, as one of the layers of the patch has metal in it that could heat up and cause burns. Wash hands before and after handling the patch; do not touch eyes.",
  "plain": "An anticholinergic patch that blocks acetylcholine in the brain's balance center to prevent motion sickness.",
  "key": "Patch behind the ear 4 hr before travel, lasts 3 days. Remove before MRI. Dry mouth, drowsiness, anticholinergic toxicity."
 },
 {
  "id": "calcium-carbonate",
  "name": "Calcium Carbonate",
  "brand": "Tums",
  "note": "",
  "cats": [
   "antacid"
  ],
  "cls": "Antacid",
  "moa": "Neutralizes stomach acid, reduces gastric pH",
  "use": "Relief of heartburn, treatment of GERD, peptic ulcers, and gastritis",
  "contra": "Allergy to any ingredient in this preparation, renal calculi, hypercalcemia, renal failure, hyperparathyroidism",
  "se": "Nausea, vomiting, constipation",
  "ae": "Hypercalcemia, renal calculi, bradycardia with overuse",
  "rn": "Assess for heartburn, indigestion, and epigastric pain. Inspect and auscultate abdomen. Monitor for severe constipation, vomiting, and bradycardia and report as manifestations of toxicity. Monitor calcium and phosphorus levels. Follow-up assessment of manifestations and GI assessment should be completed to determine effectiveness.",
  "teach": "Take as directed: after meals and at bedtime with a full glass of water. Calcium carbonate may cause constipation; increase dietary fiber, fluid, and exercise to reduce this risk, but laxative use may be needed to offset this effect. Chewable tablets should be completely chewed before swallowing. Do not take within 1 hour of other medications. Contact provider if taking antacids for more than 2 weeks without improved manifestations.",
  "plain": "Tums: a base that neutralizes stomach acid on contact for quick heartburn relief.",
  "key": "Constipation, hypercalcemia, kidney stones. Separate from other meds by 1 hr; see provider if needed > 2 weeks."
 },
 {
  "id": "famotidine",
  "name": "Famotidine",
  "brand": "Pepcid",
  "note": "",
  "cats": [
   "ulcer"
  ],
  "cls": "Antiulcer, antihistamine",
  "moa": "Blocks H2 receptors in parietal cells of the stomach, reducing gastric acid secretion",
  "use": "Short-term treatment of PUD, GERD, hypersecretory gastric disease, heartburn; treatment of stress-induced gastric bleeding in critically ill clients",
  "contra": "Hypersensitivity",
  "se": "Drowsiness, headache, constipation, diarrhea, GI upset, fatigue",
  "ae": "Confusion, cardiac arrhythmias, agranulocytosis, aplastic anemia, thrombocytopenia, neutropenia, medication-induced hepatitis",
  "rn": "Monitor CBC with differential periodically throughout therapy; assess for epigastric or abdominal pain, blood in stool, and emesis before and during treatment; monitor older adult clients for confusion during use",
  "teach": "Take medication as directed; do not smoke while on this medication; inform provider of fever, sore throat, dizziness, black tarry stools, rash, or confusion; avoid aspirin, NSAIDs, alcohol, and foods that increase GI acid secretion; may cause drowsiness; avoid operating heavy machinery until the effect is known; do not exceed maximum doses for more than 2 weeks without consulting a provider; contact a provider if difficulty swallowing develops or abdominal pain persists; notify a provider if pregnant, planning to become pregnant, or breastfeeding before use",
  "plain": "Blocks histamine (H2) receptors on stomach cells so less acid is made.",
  "key": "Confusion in older adults; blood disorders (monitor CBC). Avoid NSAIDs and alcohol."
 },
 {
  "id": "pantoprazole",
  "name": "Pantoprazole",
  "brand": "Protonix",
  "note": "",
  "cats": [
   "ulcer"
  ],
  "cls": "Antiulcer agent",
  "moa": "Inhibits the hydrogen-potassium-ATPase enzyme in the parietal cells of the stomach that suppresses gastric acid production",
  "use": "Decreases acid reflux, heals duodenal ulcers and esophagitis",
  "contra": "Hypersensitivity to benzimidazoles",
  "se": "Headaches, abdominal pain, diarrhea, flatulence",
  "ae": "Bone fracture, Clostridium difficile, vitamin B12 deficiency",
  "rn": "Monitor liver function tests and magnesium levels and assess for abdominal or epigastric pain and manifestations of blood in stool and emesis.",
  "teach": "Avoid alcohol and products with aspirin and NSAID components. Notify provider if diarrhea, black tarry stools, or obvious blood in stools or emesis develops, or if planning pregnancy or suspect being pregnant.",
  "plain": "A proton pump inhibitor: shuts down the acid pump in the stomach for strong, long acid control.",
  "key": "Long-term use: bone fractures, C. diff, low B12 and magnesium. Report black stools."
 },
 {
  "id": "misoprostol",
  "name": "Misoprostol",
  "brand": "",
  "note": "Prostaglandin E analog",
  "cats": [
   "ulcer"
  ],
  "cls": "Prostaglandin",
  "moa": "Inhibits gastric acid secretion, increases the production of protective mucus",
  "use": "Prevention and treatment of NSAID-induced gastric ulcers",
  "contra": "Pregnancy, hypersensitivity",
  "se": "Diarrhea, abdominal pain, dysmenorrhea, uterine cramping, spotting",
  "ae": "Miscarriage",
  "rn": "Assess for abdominal and epigastric pain. Assess for blood in stools. Assess female clients for pregnancy. Monitor for cervical dilation in clients who are pregnant. Watch for bleeding and abdominal cramping during use in termination of pregnancy.",
  "teach": "Report worsening diarrhea or abdominal pain. Expect diarrhea to resolve after the first week of medication therapy. Drink plenty of clear fluids. Take with food to minimize GI effects. Report menstrual changes. Do not ingest alcohol or any foods that may further irritate the GI tract.",
  "plain": "Replaces the protective prostaglandins that NSAIDs wipe out, so the stomach lining makes mucus and less acid.",
  "key": "Can cause miscarriage: confirm the client is not pregnant. Diarrhea and cramping, usually resolve in a week."
 },
 {
  "id": "sucralfate",
  "name": "Sucralfate",
  "brand": "Carafate",
  "note": "",
  "cats": [
   "ulcer"
  ],
  "cls": "GI protectants",
  "moa": "Forms a thick paste that adheres to the surface of the ulcer",
  "use": "Acute duodenal ulcers",
  "contra": "Hypersensitivity",
  "se": "Constipation",
  "ae": "Hyperglycemia (with suspension)",
  "rn": "Assess for abdominal pain and for blood in the stools, both occult and frank blood. Monitor I&O. Assess bowel movement number and character.",
  "teach": "Increase fluid and fiber intake. Increase activity and exercise. Drink plenty of clear fluids. Report any manifestations of obvious or occult GI bleeding such as coffee ground emesis.",
  "plain": "Forms a sticky paste that coats the ulcer like a bandage so it can heal.",
  "key": "Constipation (increase fluid and fiber). Hyperglycemia with the suspension."
 },
 {
  "id": "dicyclomine",
  "name": "Dicyclomine",
  "brand": "Bentyl",
  "note": "",
  "cats": [
   "bowel"
  ],
  "cls": "Antispasmodic and anticholinergic",
  "moa": "Blocks different compounds, such as acetylcholine, bradykinin, and histamine, to inhibit muscle spasm in the GI tract",
  "use": "Relieves muscle spasms of the GI tract",
  "contra": "Infants younger than 6 months, clients who are breastfeeding, and clients who have unstable cardiovascular status, myasthenia gravis, glaucoma, obstructive uropathy, obstructive GI conditions, severe ulcerative colitis, or reflux esophagitis",
  "se": "Dry mouth, thirst, dry skin, drowsiness, dizziness",
  "ae": "Cardiovascular effects, such as thyrotoxicosis and heart failure; CNS effects, such as confusion, hallucinations, and agitation",
  "rn": "Monitor manifestation of IBS.",
  "teach": "Instruct clients not to breastfeed while taking dicyclomine. Clients should also not drive or operate machinery, as drowsiness or blurred vision may occur.",
  "plain": "Relaxes the gut muscle to ease the cramping and spasms of IBS.",
  "key": "Anticholinergic: dry mouth, drowsiness, blurred vision; no driving. Not for infants < 6 months or while breastfeeding."
 },
 {
  "id": "rifaximin",
  "name": "Rifaximin",
  "brand": "Xifaxan",
  "note": "",
  "cats": [
   "bowel"
  ],
  "cls": "Antibiotic",
  "moa": "Binds to the bacterial DNA-dependent RNA polymerase to inhibit the bacteria from synthesizing proteins",
  "use": "Decrease the manifestations of IBS-D and decrease the severity of traveler's diarrhea due to E. coli",
  "contra": "Hypersensitivity, diarrhea accompanied by fever or blood, diarrhea caused by other infectious organisms",
  "se": "Nausea, dizziness",
  "ae": "Diarrhea associated with Clostridioides difficile",
  "rn": "Monitor manifestations of IBS-D, including bowel frequency and consistency, bloating, and cramping.",
  "teach": "Instruct clients to take all the medication for the prescribed length of time, even if they are feeling better. They should notify a provider of worsening diarrhea or diarrhea with blood.",
  "plain": "An antibiotic that stays in the gut and stops bacteria from making proteins; treats IBS-D and traveler's diarrhea.",
  "key": "Finish the full course. Report bloody or worsening diarrhea (C. diff)."
 },
 {
  "id": "sulfasalazine",
  "name": "Sulfasalazine",
  "brand": "Azulfidine",
  "note": "",
  "cats": [
   "bowel"
  ],
  "cls": "5-aminosalicylate",
  "moa": "Produces an anti-inflammatory effect in the colon",
  "use": "Reduce manifestations of ulcerative colitis",
  "contra": "Hypersensitivity, intestinal or urinary obstruction",
  "se": "Nausea, vomiting, indigestion, loss of appetite, headache, fever",
  "ae": "Toxic epidermal necrolysis, agranulocytosis, aplastic anemia, hypersensitivity",
  "rn": "Assess for allergy to sulfonamides or salicylates. Assess for severe rash. Monitor intake and output. Assess abdominal pain and bowel habits.",
  "teach": "Instruct clients to take medication as prescribed and notify a provider about any skin rash, mouth ulcers, bruising, wheezing, or fever. Remission may take 3 to 6 weeks.",
  "plain": "An anti-inflammatory that works in the colon to calm ulcerative colitis.",
  "key": "Sulfa or salicylate allergy. Severe rash (TEN) and agranulocytosis. Remission takes 3–6 weeks."
 }
];
