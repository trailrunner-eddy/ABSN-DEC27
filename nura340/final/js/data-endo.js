/* Endocrine unit for the Patho Final guide, added after the GI unit (loads after data.js).
   Built from the three endocrine Final lecture guides (Pancreas, Thyroid Gland, Pituitary & Adrenal Glands),
   their transcripts, and slides. Also adds esophageal motility disorders (achalasia) to Upper GI from the
   N340 Module 9 GI Study Guide. Everything is appended so saved progress keeps its place. */
(function () {
  function add(k) { var a = window[k] = window[k] || []; a.push.apply(a, [].slice.call(arguments, 1)); }
  add("SYSTEMS", 
    { id: "pancreas", name: "Pancreas · Diabetes & Pancreatitis", short: "Pancreas", icon: "🍬", weight: "Diseases of the Pancreas lecture" },
    { id: "thyroid", name: "Thyroid Gland", short: "Thyroid", icon: "🦋", weight: "Diseases of the Thyroid Gland lecture" },
    { id: "adrenal", name: "Pituitary & Adrenal Glands", short: "Pituitary & Adrenal", icon: "🧠", weight: "Diseases of the Pituitary and Adrenal Glands lecture" }
  );

  add("EMPHASIS", 
    "Endocrine: ask which hormone is too high or too low, where the problem is (the gland itself or the signal controlling it), and what that hormone normally does.",
    "Pair the labs: a hormone level means little without the signal that controls it (TSH with free T4, ACTH with cortisol, renin with aldosterone).",
    "“Inappropriately normal” matters: a normal TSH or ACTH when the target hormone is abnormal points to the pituitary or hypothalamus.",
    "Type 2 diabetes is not a moral failing. Notice your own biases about weight and lifestyle.",
    "Avoid “always” and “never” in diabetes: DKA is classic for type 1, but people with type 2 can develop it too.",
    "A higher lipase does not mean more severe pancreatitis. Severity comes from the body's response, not the number.",
    "Cortisol is controlled by ACTH; aldosterone is controlled mainly by renin–angiotensin and potassium. That's why pituitary failure spares aldosterone.",
    "Cushing syndrome = any cause of too much cortisol (most often glucocorticoid medicine). Cushing's disease = an ACTH-making pituitary adenoma."
  );

  add("CRITICAL_THINKING", 
    ["Endocrine: too much, too little, and where is the problem?", "Name the hormone, decide if it's high or low, then locate the problem: the gland itself (primary) or the pituitary/hypothalamus signal (central). Check the paired lab: in primary disease the controlling hormone moves the opposite way (↑TSH with ↓T4); in central disease it's low or inappropriately normal."],
    ["How do hormone effects explain the findings?", "Thyroid hormone sets the pace: too little and everything slows (cold, constipated, bradycardic); too much and everything speeds up (heat intolerance, diarrhea, tachycardia). Cortisol raises glucose and breaks down muscle, skin, and bone; aldosterone holds sodium and water and dumps potassium."]
  );

  add("STRATEGY", 
    ["Endocrine labs come in pairs", "Read the target hormone and its controlling signal together before deciding primary vs. central."],
    ["Diabetes emergencies: look for ketones", "Kussmaul breathing, fruity breath, and acidosis = DKA. Extreme glucose, severe dehydration, and confusion with few ketones = HHS."]
  );

  add("DISORDERS", 
  /* ===== PANCREAS ===== */
  {
    id: "pancfn", sys: "pancreas", name: "The Pancreas: Two Jobs",
    connect: ["Structure & Function", "Glucose Regulation"],
    summary: "The pancreas is two organs in one. The exocrine part (acinar cells) makes digestive enzymes that drain through the pancreatic duct into the duodenum. The endocrine part (islets) makes hormones that control blood glucose: beta cells make insulin, alpha cells make glucagon. Diabetes is an endocrine failure; pancreatitis starts as an exocrine one.",
    chain: {
      mechanism: ["Beta cells destroyed (T1DM)", "Cells stop responding to insulin (T2DM)", "Digestive enzymes activate too early (pancreatitis)"],
      change: ["Too little insulin action → glucose stays in the blood", "Body burns fat for fuel → ketones", "Enzymes digest the pancreas itself"],
      cues: ["Polyuria, polydipsia, hunger, weight loss", "Fatigue, blurry vision, slow healing", "Severe epigastric pain to the back"],
      worst: ["DKA or HHS", "Long-term vessel and nerve damage", "Severe pancreatitis with hypovolemia"]
    },
    table: { cols: ["Cell", "Makes", "Job"], rows: [
      ["Acinar cells (exocrine)", "Digestive enzymes (lipase, amylase, proteases)", "Digest fat, starch, protein in the duodenum"],
      ["Beta cells (islets)", "Insulin", "Moves glucose into cells; lowers blood glucose; blocks fat breakdown"],
      ["Alpha cells (islets)", "Glucagon", "Raises blood glucose between meals"]
    ] },
    tableTitle: "Exocrine vs. endocrine pancreas",
    facts: [
      "Insulin lets glucose into muscle and fat cells and tells the liver to store glucose. Without insulin action, glucose builds up in the blood while cells starve.",
      "Insulin also blocks fat breakdown. With almost no insulin, fat breaks down into fatty acids, and the liver turns them into ketones (DKA).",
      "Glucose above the kidney's threshold spills into urine and pulls water with it (osmotic diuresis) → polyuria → dehydration → thirst.",
      "The pancreatic duct and the common bile duct share an opening into the duodenum, which is why a gallstone can cause pancreatitis.",
      "Gestational diabetes is in the slides but not covered on this exam."
    ],
    qa: [["Why does high blood glucose cause frequent urination and thirst?", "Glucose spills into the urine and pulls water with it (osmotic diuresis). Losing that water dehydrates the person, which triggers thirst."],
         ["Which pancreatic cells are destroyed in type 1 diabetes?", "Beta cells in the islets, which make insulin."]]
  },
  {
    id: "t1dm", sys: "pancreas", name: "Type 1 Diabetes", star: true, starText: "Autoimmune loss of insulin; DKA risk",
    connect: ["Glucose Regulation", "Immunity", "Acid-Base"],
    summary: "The immune system destroys the beta cells, so the body makes little or no insulin. Glucose can't get into cells and builds up in the blood. Onset is often fast and often (not only) in children and young adults. Insulin is required for life.",
    chain: {
      mechanism: ["Autoimmune attack on beta cells (genetic risk + trigger)", "Little or no insulin made"],
      change: ["Glucose can't enter cells → hyperglycemia", "Cells starve → fat and muscle break down", "Fat breakdown → ketones → metabolic acidosis"],
      cues: ["Polyuria, polydipsia, polyphagia", "Unintended weight loss, fatigue", "Kussmaul respirations, fruity breath, vomiting, abdominal pain (DKA)"],
      worst: ["Diabetic ketoacidosis", "Severe dehydration and electrolyte loss", "Long-term vessel and nerve damage"]
    },
    facts: [
      "Classic symptoms: polyuria (osmotic diuresis), polydipsia (dehydration), polyphagia (cells are starving), and weight loss (fat and muscle are broken down for fuel).",
      "Labs: hyperglycemia, autoantibodies against islet cells, and low or absent C-peptide.",
      "C-peptide is released with the body's own insulin. Injected insulin has none, so C-peptide shows how much insulin the pancreas still makes.",
      "DKA can be the first sign that someone has type 1 diabetes.",
      "Management (not tested in detail): insulin by injection or pump, glucose monitoring, nutrition."
    ],
    qa: [["Why does someone with untreated type 1 diabetes lose weight even though they're eating more?", "Without insulin, cells can't use glucose, so the body breaks down fat and muscle for energy. Calories are also lost as glucose in the urine."],
         ["Why is C-peptide low in type 1 diabetes?", "C-peptide is made along with the body's own insulin. Destroyed beta cells make little insulin, so little C-peptide."]]
  },
  {
    id: "t2dm", sys: "pancreas", name: "Type 2 Diabetes", star: true, starText: "Insulin resistance, then beta-cell decline",
    connect: ["Glucose Regulation", "Perfusion", "Inflammation"],
    summary: "Cells stop responding well to insulin (insulin resistance). At first the pancreas makes extra insulin to keep glucose normal. Over time the beta cells wear out and can't keep up, and glucose rises. Onset is gradual, so many people have no symptoms at diagnosis.",
    chain: {
      mechanism: ["Insulin resistance (genetics, excess visceral fat, inactivity, age)", "Pancreas compensates with extra insulin (hyperinsulinemia)"],
      change: ["Beta cells gradually decline", "Glucose rises slowly over years", "High glucose and lipids damage vessels"],
      cues: ["Often none at first", "Fatigue, blurry vision", "Frequent infections, slow wound healing", "Polyuria and polydipsia when glucose is high"],
      worst: ["Hyperosmolar hyperglycemic state (HHS)", "Heart attack, stroke, kidney disease, retinopathy, neuropathy", "Poor circulation and foot wounds"]
    },
    facts: [
      "Not a moral failing. Genetics, environment, medications, and access to food and care all play a part. Check your biases.",
      "Early in the disease, insulin levels can be high: the pancreas is working harder against resistance.",
      "Because some insulin is still made, ketone formation is usually limited, which is why the classic crisis is HHS. But people with type 2 can still develop DKA.",
      "Long-term high glucose damages small vessels (eyes, kidneys, nerves) and large vessels (heart attack, stroke, poor circulation).",
      "Management (not tested in detail): activity, nutrition, oral or injected medications, and sometimes insulin."
    ],
    qa: [["Why can a client with early type 2 diabetes have a high insulin level?", "The cells resist insulin, so the beta cells make extra to keep glucose normal. Glucose rises only when they can't keep up."],
         ["Why does type 2 diabetes raise the risk of foot wounds that won't heal?", "High glucose damages nerves (the person doesn't feel injuries) and vessels (less blood flow), and it impairs immune function."]]
  },
  {
    id: "dkahhs", sys: "pancreas", name: "DKA vs. HHS", star: true, starText: "Ketones and acidosis vs. extreme dehydration",
    connect: ["Acid-Base", "Fluid Balance", "Electrolytes"],
    summary: "Both are hyperglycemic emergencies. In DKA there's almost no insulin, so fat breaks down into ketones and the blood becomes acidic. In HHS there's enough insulin to limit ketones, but glucose climbs very high, and the osmotic diuresis causes severe dehydration and neurologic changes.",
    chain: {
      mechanism: ["Severe insulin deficiency (DKA) or relative deficiency with stress (HHS)", "Stress hormones (cortisol, glucagon, catecholamines) push glucose higher"],
      change: ["DKA: fat breakdown → ketones → metabolic acidosis", "HHS: very high glucose → osmotic diuresis → severe dehydration"],
      cues: ["DKA: Kussmaul respirations, fruity breath, N/V, abdominal pain", "HHS: extreme thirst, dry mucosa, confusion, seizures or coma"],
      worst: ["Shock from dehydration", "Dangerous potassium shifts", "Coma and death"]
    },
    table: { cols: ["", "DKA", "HHS"], rows: [
      ["Typical client", "Type 1 (can happen in type 2)", "Type 2, often older"],
      ["Insulin", "Almost none", "Some, enough to limit ketones"],
      ["Ketones / acidosis", "Yes: metabolic acidosis", "Few or none"],
      ["Glucose", "High", "Very high"],
      ["Breathing", "Kussmaul (deep, rapid), fruity breath", "Not the key finding"],
      ["Dehydration", "Yes", "Severe"],
      ["Mental status", "Can change", "Neuro changes are prominent"],
      ["Onset", "Hours to a day", "Days"]
    ] },
    tableTitle: "DKA vs. HHS",
    facts: [
      "Kussmaul respirations are the lungs blowing off CO₂ to make up for metabolic acidosis.",
      "Fruity breath comes from acetone, a ketone.",
      "Both cause osmotic diuresis, so both lose water and electrolytes.",
      "Infection and missed insulin are common triggers."
    ],
    qa: [["Why does DKA cause deep, rapid breathing?", "Ketones make the blood acidic (metabolic acidosis). The lungs compensate by blowing off CO₂."],
         ["Why are ketones usually limited in HHS?", "There's still enough insulin to block most fat breakdown, even though it isn't enough to control glucose."]]
  },
  {
    id: "dmlabs", sys: "pancreas", name: "Diabetes Labs & Diagnosis",
    connect: ["Glucose Regulation"],
    summary: "Diabetes is diagnosed with one of four tests. The thresholds are the same for type 1 and type 2. A1C reflects about 3 months of glucose and needs no fasting. Abnormal results without classic symptoms need to be confirmed.",
    chain: {
      mechanism: ["Too little insulin or insulin action"],
      change: ["Glucose rises in the blood", "Glucose attaches to hemoglobin over the red cell's life (A1C)"],
      cues: ["Fasting ≥126, A1C ≥6.5%, 2-hr OGTT ≥200, or random ≥200 with symptoms", "Prediabetes: A1C 5.7–6.4%"],
      worst: ["Missed diagnosis → years of silent vessel and nerve damage", "Diagnosing from one abnormal value without symptoms (confirm first)"]
    },
    table: { cols: ["Test", "What it tells you", "Diabetes threshold"], rows: [
      ["Fasting plasma glucose", "Blood glucose after at least 8 hours without calories", "≥126 mg/dL"],
      ["A1C", "Average glucose over about 3 months; no fasting", "≥6.5% (prediabetes 5.7–6.4%)"],
      ["2-hour oral glucose tolerance test", "Glucose 2 hours after a 75 g glucose drink", "≥200 mg/dL"],
      ["Random plasma glucose", "Any time, regardless of meals", "≥200 mg/dL with classic symptoms or a hyperglycemic crisis"]
    ] },
    tableTitle: "Diagnostic criteria",
    facts: [
      "Normal fasting glucose is 70–99 mg/dL. Normal A1C is less than 5.7%.",
      "Without clear symptoms, an abnormal result needs confirmation (repeat test or a second test).",
      "C-peptide shows how much insulin the body is still making: low in type 1, normal or high early in type 2.",
      "Islet autoantibodies point to type 1."
    ],
    qa: [["A client has an A1C of 6.1%. What does this mean?", "Prediabetes (5.7–6.4%). Normal is less than 5.7%; diabetes is 6.5% or higher."],
         ["Which test doesn't need fasting and reflects about 3 months?", "A1C."]]
  },
  {
    id: "pancreatitis", sys: "pancreas", name: "Pancreatitis", star: true, starText: "Enzymes digest the pancreas",
    connect: ["Inflammation", "Fluid Balance", "Perfusion"],
    summary: "Digestive enzymes activate inside the pancreas instead of in the duodenum and start digesting the pancreas itself (autodigestion). Acute pancreatitis causes sudden, severe pain and can leak fluid out of vessels. Repeated or long-term injury causes chronic pancreatitis, where scar tissue replaces the gland and both jobs fail.",
    chain: {
      mechanism: ["Gallstone blocks the shared duct opening", "Alcohol", "Very high triglycerides, some medications, injury"],
      change: ["Enzymes activate early → autodigestion", "Inflammation → capillary leak", "Chronic: fibrosis replaces acinar and islet cells"],
      cues: ["Acute: severe epigastric pain radiating to the back, N/V, ↑lipase", "Chronic: steatorrhea, weight loss, diabetes"],
      worst: ["Hypovolemia and shock from fluid leak", "Systemic inflammation and organ failure", "Malnutrition and diabetes (chronic)"]
    },
    table: { cols: ["", "Acute", "Chronic"], rows: [
      ["What happens", "Sudden autodigestion and inflammation", "Ongoing injury → fibrosis, permanent damage"],
      ["Pain", "Severe epigastric, radiates to the back", "Recurrent or constant"],
      ["Lipase", "Elevated (key lab)", "May be normal (little tissue left)"],
      ["Other cues", "N/V, tachycardia, hypovolemia", "Steatorrhea, weight loss, diabetes"]
    ] },
    tableTitle: "Acute vs. chronic pancreatitis",
    facts: [
      "Gallstones and alcohol are the two most common causes.",
      "Lipase is especially useful for diagnosis (normal 0–160 units/L). A higher lipase does NOT mean more severe disease.",
      "Capillary leak moves fluid out of the vessels (third spacing), so the client can become hypovolemic.",
      "Chronic: no enzymes → fat isn't digested → fatty, foul, floating stool (steatorrhea) and weight loss. Islet loss → diabetes."
    ],
    qa: [["How can a gallstone cause pancreatitis?", "The common bile duct and pancreatic duct share an opening into the duodenum. A stone there blocks enzyme drainage, so enzymes activate inside the pancreas."],
         ["Why can lipase be normal in chronic pancreatitis?", "So much tissue has been replaced by scar that few cells are left to release enzymes."],
         ["Why does chronic pancreatitis cause steatorrhea and diabetes?", "Fibrosis destroys acinar cells (no lipase → fat isn't digested) and islet cells (less insulin)."]]
  },

  /* ===== THYROID ===== */
  {
    id: "thyroidfn", sys: "thyroid", name: "Thyroid Axis & Labs",
    connect: ["Structure & Function", "Metabolism"],
    summary: "The hypothalamus releases TRH, which tells the pituitary to release TSH, which tells the thyroid to make T4 and T3. T4 is made in larger amounts; T3 is the more active form, and tissues convert T4 to T3. Thyroid hormone sets the body's pace. When enough is made, it turns down TRH and TSH (negative feedback).",
    chain: {
      mechanism: ["Hypothalamus TRH → pituitary TSH → thyroid T4 and T3", "Negative feedback from T4/T3"],
      change: ["Thyroid fails → T4 falls → TSH rises", "Thyroid overproduces → T4 rises → TSH falls", "Pituitary or hypothalamus fails → T4 falls, TSH stays low or normal"],
      cues: ["Primary: TSH opposite to T4", "Central: TSH inappropriately normal or low", "Antibodies point to Hashimoto's or Graves'"],
      worst: ["Misreading a normal TSH as reassuring when T4 is low"]
    },
    table: { cols: ["Pattern", "TSH", "Free T4", "Where's the problem?"], rows: [
      ["Primary hypothyroidism", "↑", "↓", "The thyroid itself (e.g., Hashimoto's)"],
      ["Central hypothyroidism", "↓ or inappropriately normal", "↓", "Pituitary (secondary) or hypothalamus (tertiary)"],
      ["Subclinical hypothyroidism", "↑", "Normal", "A lab pattern, not a location"],
      ["Primary hyperthyroidism", "↓", "↑ (and/or ↑T3)", "The thyroid (e.g., Graves', nodule)"]
    ] },
    tableTitle: "Reading TSH with free T4",
    facts: [
      "TSH is the best first screen for primary thyroid disease because the pituitary reacts to small changes in thyroid hormone.",
      "Primary disease: TSH moves the opposite way from T4 (feedback is working).",
      "Central disease: TSH is low or inappropriately normal while T4 is low. The signal is the problem.",
      "Antibodies help identify autoimmune causes (Hashimoto's, Graves').",
      "Thyroid hormone affects metabolic rate, heart rate, digestion, brain development, muscle, and bone."
    ],
    qa: [["TSH is high and free T4 is low. Where's the problem?", "The thyroid itself (primary hypothyroidism). The pituitary is shouting for more hormone, and the thyroid can't answer."],
         ["Why is a normal TSH “inappropriate” when free T4 is low?", "With low T4, a working pituitary should raise TSH. A normal TSH means the pituitary or hypothalamus isn't responding."]]
  },
  {
    id: "hypothyroid", sys: "thyroid", name: "Hypothyroidism", star: true, starText: "Everything slows down",
    connect: ["Metabolism", "Immunity", "Perfusion"],
    summary: "Too little thyroid hormone, so everything slows down. Most cases are primary, from damage to the thyroid itself, most often Hashimoto's (autoimmune). Less often, the pituitary or hypothalamus doesn't send the signal (central).",
    chain: {
      mechanism: ["Hashimoto's (autoimmune damage)", "Thyroid surgery, radiation, or medications", "Iodine deficiency", "Pituitary or hypothalamus problem (central)"],
      change: ["↓T4 and T3 → slower metabolism", "Primary: ↑TSH (feedback)", "↑Cholesterol"],
      cues: ["Fatigue, cold intolerance, weight gain", "Constipation, bradycardia, dry skin, thinning hair", "Foggy thinking, depression", "Heavy or irregular periods"],
      worst: ["Myxedema coma: hypothermia, slowed breathing, altered consciousness", "Cardiovascular disease"]
    },
    facts: [
      "Think “everything slows”: heart rate, gut, thinking, metabolism, temperature.",
      "Primary labs: ↑TSH, ↓free T4, often thyroid antibodies (Hashimoto's).",
      "Central: ↓free T4 with low or inappropriately normal TSH. Secondary = pituitary; tertiary = hypothalamus.",
      "Subclinical: ↑TSH with normal free T4.",
      "Myxedema coma is the life-threatening extreme, often triggered by infection or stress.",
      "Congenital hypothyroidism is why newborns are screened: untreated, it impairs brain development."
    ],
    qa: [["Why does hypothyroidism cause constipation and bradycardia?", "Thyroid hormone sets the pace of the gut and the heart. Less hormone, slower motility and slower heart rate."],
         ["Why does hypothyroidism raise cholesterol?", "Lipid metabolism slows, so cholesterol isn't cleared as well, raising cardiovascular risk."]]
  },
  {
    id: "hyperthyroid", sys: "thyroid", name: "Hyperthyroidism", star: true, starText: "Everything speeds up; Graves' eye signs",
    connect: ["Metabolism", "Immunity", "Perfusion"],
    summary: "Too much thyroid hormone, so everything speeds up. Thyrotoxicosis is the state of having too much thyroid hormone from any source; hyperthyroidism means the thyroid is overproducing. The most common cause is Graves' disease, where antibodies switch on the TSH receptor.",
    chain: {
      mechanism: ["Graves': antibodies stimulate the TSH receptor", "Autonomous (toxic) nodules make hormone on their own", "Thyroiditis: inflamed gland leaks stored hormone"],
      change: ["↑T4/T3 → faster metabolism", "Feedback lowers TSH, but the gland ignores it"],
      cues: ["Heat intolerance, sweating, weight loss", "Tachycardia, palpitations, anxiety, insomnia", "Diarrhea, tremor, muscle weakness", "Eye changes (Graves' only)"],
      worst: ["Atrial fibrillation → clots and stroke", "Thyroid storm: high fever, marked tachycardia, mental status change", "Bone loss"]
    },
    facts: [
      "Labs: ↓TSH with ↑free T4 and/or T3.",
      "Graves' overrides negative feedback: TSH is low, but the antibodies keep the gland switched on.",
      "Eye disease (bulging eyes) happens only in Graves', because the same immune process affects tissue behind the eyes.",
      "Thyroiditis can cause a short hyperthyroid phase as stored hormone leaks out, then a hypothyroid phase once the store is used up.",
      "Thyroid storm is the life-threatening extreme."
    ],
    qa: [["Why is TSH low in Graves' disease even though the thyroid is overactive?", "High thyroid hormone turns off TSH through negative feedback. Graves' antibodies keep stimulating the gland anyway."],
         ["Why does hyperthyroidism raise stroke risk?", "Excess thyroid hormone can cause atrial fibrillation; blood pools in the atria and clots can travel to the brain."]]
  },
  {
    id: "goiter", sys: "thyroid", name: "Goiter & Thyroid Nodules",
    connect: ["Structure & Function"],
    summary: "A goiter is an enlarged thyroid. A nodule is a lump in the thyroid. Neither tells you the gland's function: a goiter or nodule can come with low, normal, or high hormone. Most nodules are benign. A large goiter or nodule can press on nearby structures.",
    chain: {
      mechanism: ["Iodine deficiency → low hormone → ↑TSH → gland grows", "Graves' (stimulated growth) or Hashimoto's (inflammation)", "Nodules: benign growths, cysts, sometimes cancer"],
      change: ["Gland enlarges", "Some nodules make hormone on their own (autonomous)"],
      cues: ["Visible neck swelling", "Dysphagia (esophagus)", "Hoarseness (recurrent laryngeal nerves)", "Trouble breathing (trachea)"],
      worst: ["Airway compression", "Thyroid cancer (a minority of nodules)"]
    },
    facts: [
      "Goiter can occur with hypothyroidism, hyperthyroidism, or normal function. Always check labs.",
      "Concerning nodule features: history of childhood head or neck radiation, family history of thyroid cancer.",
      "An autonomous nodule ignores TSH and can cause hyperthyroidism.",
      "Compression: esophagus → dysphagia; recurrent laryngeal nerves → hoarseness; trachea → breathing difficulty."
    ],
    qa: [["Why can iodine deficiency cause a goiter?", "Without iodine the thyroid can't make enough hormone, so TSH rises, and constant TSH stimulation makes the gland grow."],
         ["A client with a large goiter has a hoarse voice. Why?", "The enlarged gland presses on the recurrent laryngeal nerves that control the vocal cords."]]
  },

  /* ===== PITUITARY & ADRENAL ===== */
  {
    id: "pitadrfn", sys: "adrenal", name: "Pituitary & Adrenal Basics",
    connect: ["Structure & Function"],
    summary: "The pituitary sits under the brain, just below the optic chiasm. The anterior pituitary makes TSH, ACTH, GH, prolactin, FSH, and LH. The posterior pituitary releases ADH and oxytocin, which are made in the hypothalamus. The adrenal cortex makes cortisol (driven by ACTH) and aldosterone (driven by renin–angiotensin and potassium); the medulla makes epinephrine and norepinephrine.",
    chain: {
      mechanism: ["Hypothalamus → pituitary → target gland", "Aldosterone has its own boss: renin–angiotensin and K⁺"],
      change: ["Too much or too little of a hormone", "Primary (gland) vs. central (pituitary) problem"],
      cues: ["Pair the labs: ACTH with cortisol, renin with aldosterone", "“Inappropriately normal” control hormone = central problem"],
      worst: ["Cortisol deficiency under stress → adrenal crisis"]
    },
    table: { cols: ["Hormone", "Source", "Controlled by", "Main job"], rows: [
      ["ACTH", "Anterior pituitary", "CRH from hypothalamus; cortisol feedback", "Tells the adrenal cortex to make cortisol"],
      ["Cortisol", "Adrenal cortex", "ACTH", "Raises glucose, helps handle stress, keeps BP up, dampens inflammation"],
      ["Aldosterone", "Adrenal cortex", "Renin–angiotensin system and potassium (not mainly ACTH)", "Holds sodium and water, excretes potassium"],
      ["Epinephrine / norepinephrine", "Adrenal medulla", "Sympathetic nerves", "Fight or flight"],
      ["Prolactin", "Anterior pituitary", "Dopamine inhibits it", "Milk production"],
      ["ADH", "Made in hypothalamus, released from posterior pituitary", "Plasma concentration, volume", "Kidneys hold water"]
    ] },
    tableTitle: "Key hormones",
    facts: [
      "The control difference matters: pituitary failure lowers cortisol (no ACTH) but leaves aldosterone working (renin and potassium still drive it).",
      "Primary adrenal failure loses both cortisol and aldosterone.",
      "Paired labs: ACTH with cortisol; renin with aldosterone.",
      "Pituitary hormones: TSH, ACTH, GH, prolactin, FSH/LH (anterior); ADH, oxytocin (posterior)."
    ],
    qa: [["Why does pituitary failure leave aldosterone mostly normal?", "Aldosterone is driven mainly by renin–angiotensin and potassium, not ACTH."],
         ["Which pituitary hormones are released from the posterior lobe?", "ADH and oxytocin (made in the hypothalamus)."]]
  },
  {
    id: "adenoma", sys: "adrenal", name: "Pituitary Adenoma",
    connect: ["Structure & Function", "Cellular Regulation"],
    summary: "A benign tumor of the pituitary. A functioning adenoma makes too much of a hormone (prolactin, ACTH, GH). A nonfunctioning one makes none but can grow large and cause mass effect: it presses on the optic chiasm and on the normal pituitary.",
    chain: {
      mechanism: ["Benign pituitary tumor"],
      change: ["Functioning: too much of one hormone", "Mass effect: compresses the optic chiasm and normal pituitary tissue"],
      cues: ["Headache", "Bitemporal hemianopia (loss of outer visual fields)", "Signs of hormone excess or deficiency"],
      worst: ["Pituitary apoplexy (rare): sudden bleeding or infarction → sudden severe headache, vision loss, adrenal crisis", "Permanent vision loss"]
    },
    facts: [
      "The optic chiasm sits right above the pituitary. Pressure on its center hits fibers from both outer (temporal) visual fields → bitemporal hemianopia.",
      "A large adenoma can squeeze normal pituitary cells and cause hypopituitarism.",
      "Workup: MRI, visual field testing, and paired hormone labs (look for “inappropriately normal”).",
      "Prolactinoma is the most common functioning adenoma; an ACTH-making adenoma causes Cushing's disease."
    ],
    qa: [["Why does a pituitary adenoma cause loss of the outer visual fields?", "It presses up on the center of the optic chiasm, where the fibers carrying both temporal (outer) fields cross."]]
  },
  {
    id: "prolactin", sys: "adrenal", name: "Hyperprolactinemia",
    connect: ["Reproduction", "Structure & Function"],
    summary: "Too much prolactin. Dopamine from the hypothalamus normally holds prolactin down. A prolactinoma, dopamine-blocking medications, hypothyroidism, or anything that disrupts the pituitary stalk removes that brake. High prolactin suppresses GnRH, so FSH and LH fall and reproductive hormones drop.",
    chain: {
      mechanism: ["Prolactinoma", "Dopamine-blocking medications (e.g., antipsychotics)", "Hypothyroidism", "Stalk compression"],
      change: ["↑Prolactin → ↓GnRH → ↓FSH/LH", "↓Estrogen or testosterone"],
      cues: ["Absent or irregular periods, infertility", "↓Libido, erectile dysfunction", "Galactorrhea (milky nipple discharge), possible in any sex"],
      worst: ["Bone loss from low sex hormones", "Mass effect if from a large adenoma"]
    },
    facts: [
      "Dopamine inhibits prolactin. Block dopamine or cut the stalk and prolactin rises.",
      "Galactorrhea can happen in people assigned male at birth, too.",
      "Bone loss happens because estrogen and testosterone protect bone."
    ],
    qa: [["Why can an antipsychotic cause galactorrhea?", "Many antipsychotics block dopamine, which normally inhibits prolactin."],
         ["Why does high prolactin cause absent periods?", "It suppresses GnRH, so FSH and LH fall and estrogen drops."]]
  },
  {
    id: "hypopit", sys: "adrenal", name: "Hypopituitarism",
    connect: ["Structure & Function", "Fluid Balance", "Glucose Regulation"],
    summary: "The pituitary doesn't make enough of one or more hormones, often from a tumor pressing on it, surgery, radiation, injury, or bleeding. Each missing hormone causes its own picture. Losing ACTH is the most dangerous because the body can't make cortisol under stress.",
    chain: {
      mechanism: ["Tumor compression, surgery, radiation, injury, or bleeding"],
      change: ["Less TSH, ACTH, FSH/LH, GH, or ADH", "Target glands slow down"],
      cues: ["Hypothyroid picture, weakness, low BP, hypoglycemia", "Absent periods, low libido", "Large volumes of dilute urine (ADH)"],
      worst: ["No cortisol response to stress → shock (adrenal crisis)"]
    },
    table: { cols: ["Missing hormone", "What happens"], rows: [
      ["TSH", "Central hypothyroidism: fatigue, cold intolerance, slowing"],
      ["ACTH", "Low cortisol: weakness, low BP, hypoglycemia, poor stress response (life-threatening under stress)"],
      ["FSH/LH", "Absent periods, infertility, ↓libido, bone loss"],
      ["GH", "Children: poor growth. Adults: less muscle, more fat, low energy"],
      ["ADH (posterior)", "Large volumes of dilute urine, thirst (diabetes insipidus)"]
    ] },
    tableTitle: "Each missing hormone and its effect",
    facts: [
      "Labs show low target hormones with low or inappropriately normal pituitary hormones.",
      "Aldosterone is mostly preserved (renin and potassium drive it), so sodium/potassium problems are milder than in Addison's.",
      "No skin darkening, because ACTH is low."
    ],
    qa: [["Why is ACTH deficiency the most dangerous part of hypopituitarism?", "Without ACTH the adrenals can't raise cortisol during stress, so illness or surgery can cause shock and hypoglycemia."]]
  },
  {
    id: "cushing", sys: "adrenal", name: "Cushing Syndrome", star: true, starText: "Too much cortisol; syndrome vs. disease",
    connect: ["Glucose Regulation", "Immunity", "Structure & Function"],
    summary: "Too much cortisol from any cause. The most common cause is taking glucocorticoid medicines long term. Cushing's disease is one specific cause: a pituitary adenoma making too much ACTH. Other causes are an adrenal tumor and ACTH made by a tumor elsewhere (ectopic).",
    chain: {
      mechanism: ["Long-term glucocorticoid medicine (most common)", "Pituitary ACTH adenoma (Cushing's disease)", "Adrenal tumor", "Ectopic ACTH"],
      change: ["Cortisol raises glucose", "Breaks down muscle, skin, and bone", "Redistributes fat; suppresses immunity"],
      cues: ["Hyperglycemia", "Proximal muscle weakness, thin arms and legs", "Thin skin, easy bruising, wide purple striae", "Central fat: round face, fat over the upper back", "Mood changes"],
      worst: ["Secondary diabetes", "Fractures (osteoporosis)", "Serious infections", "Hypertension and cardiovascular disease"]
    },
    facts: [
      "Syndrome = the clinical state of cortisol excess, any cause. Disease = pituitary ACTH adenoma.",
      "Screening tests: late-night salivary cortisol, 24-hour urine free cortisol, dexamethasone suppression test.",
      "Then ACTH finds the source: ↓ACTH = adrenal source (or medication); ↑ or inappropriately normal ACTH = ACTH-driven (pituitary or ectopic).",
      "Dexamethasone is a steroid that should turn cortisol off through feedback. In Cushing, cortisol stays high.",
      "Wide, purple striae form because cortisol thins the skin and breaks down collagen."
    ],
    qa: [["What's the difference between Cushing syndrome and Cushing's disease?", "Syndrome is cortisol excess from any cause (most often medicine). Disease is the specific cause of an ACTH-making pituitary adenoma."],
         ["Why does Cushing syndrome cause hyperglycemia?", "Cortisol raises glucose (more glucose made by the liver, less used by tissues) and causes insulin resistance."],
         ["Cortisol is high and ACTH is low. Where is the source?", "The adrenal gland itself (or glucocorticoid medicine). Pituitary ACTH is being suppressed by feedback."]]
  },
  {
    id: "addison", sys: "adrenal", name: "Addison's Disease (Primary Adrenal Insufficiency)", star: true, starText: "↓Cortisol + ↓aldosterone; adrenal crisis",
    connect: ["Fluid Balance", "Electrolytes", "Glucose Regulation", "Immunity"],
    summary: "The adrenal cortex itself is damaged, most often by autoimmune attack, so it makes too little cortisol and too little aldosterone. The pituitary senses low cortisol and raises ACTH, which darkens the skin.",
    chain: {
      mechanism: ["Autoimmune destruction of the adrenal cortex (most common)", "Infection, bleeding, or metastases"],
      change: ["↓Cortisol → poor stress response, low glucose", "↓Aldosterone → sodium and water lost, potassium kept", "↑ACTH (no feedback) → hyperpigmentation"],
      cues: ["Fatigue, weakness, weight loss", "Hypotension, orthostatic dizziness", "Hyponatremia, hyperkalemia", "Darkened skin", "Salt craving, GI upset"],
      worst: ["Adrenal crisis: shock, severe hypotension, often triggered by illness or stress"]
    },
    facts: [
      "Labs: low cortisol with high ACTH; ↓Na⁺, ↑K⁺.",
      "ACTH stimulation test: give ACTH, and the damaged adrenal doesn't respond (cortisol stays low).",
      "Hyperpigmentation comes from high ACTH (shares a precursor with melanocyte-stimulating hormone; the mechanism detail isn't tested).",
      "If the cause is the pituitary (secondary), aldosterone is preserved, ACTH is low, and there's no hyperpigmentation."
    ],
    qa: [["Why does Addison's cause hyperkalemia and hyponatremia?", "Aldosterone normally holds sodium and excretes potassium. Without it, sodium (and water) is lost and potassium builds up."],
         ["Why is the skin darker in Addison's but not in pituitary failure?", "In Addison's, ACTH is high because low cortisol removes feedback. In pituitary failure, ACTH is low."]]
  },
  {
    id: "aldo", sys: "adrenal", name: "Hyperaldosteronism",
    connect: ["Fluid Balance", "Electrolytes", "Acid-Base", "Perfusion"],
    summary: "Too much aldosterone. The kidneys hold sodium and water and lose potassium and hydrogen. The main finding is high blood pressure, often hard to control. Primary hyperaldosteronism comes from the adrenal itself (renin is low); in renin-driven forms, such as renal artery stenosis, both renin and aldosterone are high.",
    chain: {
      mechanism: ["Primary: adrenal adenoma or both adrenals overactive", "Secondary: high renin (e.g., renal artery stenosis)"],
      change: ["Sodium and water retention → ↑blood volume", "Potassium and hydrogen excreted"],
      cues: ["Hypertension (main finding)", "Hypokalemia: weakness, cramps (not in everyone)", "Metabolic alkalosis", "Sodium often normal"],
      worst: ["Stroke, atrial fibrillation, heart failure", "Kidney damage"]
    },
    facts: [
      "Primary: ↑aldosterone with ↓renin (high aldosterone-to-renin ratio). Volume expansion turns renin off.",
      "Renin-driven (secondary): both renin and aldosterone are high.",
      "Sodium is often normal because water is retained along with it.",
      "Pharm connection: spironolactone and eplerenone block aldosterone."
    ],
    qa: [["Why is renin low in primary hyperaldosteronism?", "Aldosterone expands blood volume and raises BP, which turns off renin release by the kidneys."],
         ["Why can hyperaldosteronism cause muscle weakness?", "Aldosterone makes the kidneys excrete potassium, and hypokalemia weakens muscle."]]
  },

  /* ===== UPPER GI addition (N340 Module 9 GI Study Guide) ===== */
  {
    id: "achalasia", sys: "upper", name: "Esophageal Motility Disorders (Achalasia)",
    connect: ["Structure & Function"],
    summary: "In achalasia, the nerves in the esophagus wall (Auerbach's plexus) are damaged. The LES doesn't relax to let food in, and peristalsis is lost. Food and liquid back up in the esophagus.",
    chain: {
      mechanism: ["Damage to the myenteric (Auerbach's) plexus"],
      change: ["LES fails to relax", "Loss of peristalsis", "Food and liquid collect in the esophagus"],
      cues: ["Dysphagia to BOTH solids and liquids", "Passive regurgitation of undigested food", "Chest pain"],
      worst: ["Aspiration pneumonia", "Weight loss and malnutrition"]
    },
    facts: [
      "Dysphagia to solids and liquids from the start points to a motility problem. Dysphagia to solids first that progresses points to a narrowing (stricture, tumor).",
      "Regurgitation is passive, not vomiting: food simply comes back up, especially when lying down.",
      "Esophageal manometry (measures pressure and movement) is the definitive test.",
      "Opposite of GERD: in GERD the LES relaxes when it shouldn't; in achalasia it won't relax when it should."
    ],
    qa: [["How does achalasia differ from GERD at the LES?", "GERD: the LES relaxes when it should stay closed, so acid refluxes up. Achalasia: the LES won't relax, so food can't get into the stomach."]]
  }
  );

  add("EMERGENCIES", 
    ["Diabetic ketoacidosis (DKA)", "pancreas", "Hyperglycemia with Kussmaul respirations, fruity breath, vomiting, abdominal pain", "Ketones → metabolic acidosis; osmotic diuresis → dehydration and electrolyte loss"],
    ["Hyperosmolar hyperglycemic state (HHS)", "pancreas", "Older type 2 client, extremely high glucose, severe dehydration, confusion", "Extreme osmotic diuresis → hypovolemia, neurologic changes, coma"],
    ["Severe acute pancreatitis", "pancreas", "Severe epigastric pain to the back, tachycardia, falling BP", "Autodigestion and capillary leak → hypovolemic shock, organ failure"],
    ["Thyroid storm", "thyroid", "Known hyperthyroidism with high fever, marked tachycardia, agitation or confusion", "Extreme hypermetabolic state → arrhythmias, heart failure"],
    ["Myxedema coma", "thyroid", "Severe hypothyroidism with hypothermia, slowed breathing, decreased consciousness", "Extreme slowing → respiratory failure, shock"],
    ["Airway compression from goiter", "thyroid", "Large goiter with new trouble breathing or stridor", "The enlarged gland narrows the trachea"],
    ["Adrenal crisis", "adrenal", "Addison's or long-term steroid user who is ill: severe hypotension, vomiting, confusion", "No cortisol (and aldosterone) to respond to stress → shock"],
    ["Pituitary apoplexy", "adrenal", "Known adenoma with sudden severe headache and vision loss", "Bleeding into the tumor → compression, sudden ACTH loss"]
  );

  add("LOOKALIKES", 
    ["Type 1 vs. type 2 diabetes", "T1: autoimmune beta-cell destruction, little or no insulin, low C-peptide, antibodies, DKA risk. T2: insulin resistance then beta-cell decline, gradual, often no symptoms, HHS risk (DKA possible)."],
    ["DKA vs. HHS", "DKA: almost no insulin → ketones, metabolic acidosis, Kussmaul breathing, fruity breath. HHS: some insulin, very high glucose, severe dehydration, neuro changes, few ketones."],
    ["Acute vs. chronic pancreatitis", "Acute: sudden severe pain to the back, ↑lipase, risk of hypovolemia. Chronic: fibrosis → steatorrhea, weight loss, diabetes; lipase may be normal."],
    ["Hypothyroidism vs. hyperthyroidism", "Hypo: everything slows (cold, constipated, bradycardic, weight gain). Hyper: everything speeds up (heat intolerant, diarrhea, tachycardic, weight loss)."],
    ["Primary vs. central hypothyroidism", "Primary: ↑TSH, ↓T4 (thyroid problem). Central: ↓T4 with low or inappropriately normal TSH (pituitary or hypothalamus)."],
    ["Hyperthyroidism vs. thyrotoxicosis", "Thyrotoxicosis: too much thyroid hormone from any source. Hyperthyroidism: the thyroid itself is overproducing."],
    ["Graves' vs. thyroiditis", "Graves': antibodies keep stimulating the gland; eye disease possible. Thyroiditis: stored hormone leaks out, then a hypothyroid phase may follow."],
    ["Goiter vs. nodule", "Goiter: the whole gland is enlarged. Nodule: a lump within it. Neither tells you function."],
    ["Cushing syndrome vs. Cushing's disease", "Syndrome: cortisol excess, any cause (most often medicine). Disease: ACTH-making pituitary adenoma."],
    ["Cushing vs. Addison's", "Cushing: too much cortisol (hyperglycemia, central fat, striae, thin skin). Addison's: too little cortisol and aldosterone (hypotension, ↓Na⁺, ↑K⁺, hyperpigmentation)."],
    ["Primary vs. secondary adrenal insufficiency", "Primary (Addison's): ↑ACTH, ↓aldosterone, hyperpigmentation, ↑K⁺. Secondary (pituitary): ↓ACTH, aldosterone preserved, no pigmentation."],
    ["Primary vs. renin-driven hyperaldosteronism", "Primary: ↑aldosterone, ↓renin. Renin-driven (e.g., renal artery stenosis): both high."],
    ["Achalasia vs. stricture dysphagia", "Achalasia: solids AND liquids from the start, passive regurgitation. Stricture: solids first, progressing."]
  );
})();
