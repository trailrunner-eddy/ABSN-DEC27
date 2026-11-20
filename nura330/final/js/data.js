/* New content for the Health Assessment Final Exam guide: Mod 9 (GI & abdominal), Mod 10 (neuro),
   and Mod 11 (musculoskeletal).
   The final is cumulative: index.html also loads the Exam 1 and Exam 2 guides, and js/merge.js joins
   everything. This file must stand alone, because NCLEX Prep loads it (with practice.js) by itself.
   Outline follows the "NURA 330 Final Exam Study Guide"; details come from the Mod 9 and Mod 10
   lecture guides and slides; Mod 11 from the Mod 11 slides and the Final Exam Prep review deck. */

window.GUIDE = {
  key: "ha-final-v1",
  course: "NURA 330 · Health Assessment",
  title: "Final Exam Study Lab",
  heroArt: "🩺",
  heroText: "Cumulative: 50 items (multiple choice and SATA) in 75 minutes, 25% of the course grade. Modules 1–7 are 3–4 questions each; Modules 8–11 are 4–5 each. Lynnwood: Mon Nov 30, 11:15 am (arrive 10:45). Auburn: Tue Dec 1, 11:15 am. Bring a valid ID and log in to ATI the day before. <br><a href=\"study-guide.html\" style=\"color:#fff;font-weight:700;text-decoration:underline\">📘 Open the color-coded final study guide</a> (PowerPoint vs. written guide, every module).",
  formats: ["Multiple choice", "Select all that apply"],
  formatNote: "The final is MC and SATA only, so every practice question uses those two formats and is rated easy, medium, or hard. Questions marked “New for the final” go deeper than the Exam 1 and 2 sets.",
  chainTitle: "The assessment chain",
  chainNote: "Anatomy that matters → what you ask (subjective) → what you examine (objective) → red flags to report.",
  chainShort: "an anatomy → ask → examine → report chain",
  chainKeys: [["why", "1 · Anatomy & why"], ["ask", "2 · Ask (subjective)"], ["exam", "3 · Examine (objective)"], ["flags", "4 · Report / red flags"]],
  connectLabel: "Techniques:",
  credit: "Slide image from the PLU ABSN program (NURA 330 lecture slides).",
  /* The final exam blueprint (questions per system), used for the home page and the mock exam. */
  blueprint: [
    ["intro", "Mod 1 · 3–4 questions", 4], ["survey", "Mod 2 · 3–4 questions", 4], ["resp", "Mod 3 · 3–4 questions", 4],
    ["skin", "Mod 4 · 3–4 questions", 4], ["cv", "Mod 5 · 3–4 questions", 4], ["heent", "Mod 6 · 3–4 questions", 4],
    ["repro", "Mods 7–8 · 7–9 questions", 9], ["gi", "Mod 9 · 4–5 questions", 6], ["neuro", "Mod 10 · 4–5 questions", 6],
    ["msk", "Mod 11 · 4–5 questions", 5]
  ]
};

window.SYSTEMS = [
  { id: "gi", name: "GI & Abdominal Assessment", short: "GI & Abdomen", icon: "🫃", weight: "Mod 9 · 4–5 questions" },
  { id: "neuro", name: "Neurological Assessment", short: "Neuro", icon: "🧠", weight: "Mod 10 · 4–5 questions" },
  { id: "msk", name: "Musculoskeletal Assessment", short: "MSK", icon: "🦴", weight: "Mod 11 · 4–5 questions" },
  /* Earlier modules, so the cumulative questions below have names when NCLEX Prep loads this file alone.
     On the Final page, merge.js keeps the Exam 1 and Exam 2 versions of these instead. */
  { id: "intro", name: "Intro to Health Assessment", short: "Intro", icon: "🧭", weight: "Mod 1 · 3–4 questions" },
  { id: "survey", name: "General Survey & Health History", short: "Survey & Hx", icon: "📋", weight: "Mod 2 · 3–4 questions" },
  { id: "resp", name: "Respiratory Assessment", short: "Resp", icon: "🫁", weight: "Mod 3 · 3–4 questions" },
  { id: "skin", name: "Lifespan, Skin & Lymph", short: "Skin & Lymph", icon: "🩹", weight: "Mod 4 · 3–4 questions" },
  { id: "cv", name: "Cardiovascular & Peripheral Vascular", short: "Cardio", icon: "🫀", weight: "Mod 5 · 3–4 questions" },
  { id: "heent", name: "Head, Eyes, Ears, Nose & Throat", short: "HEENT", icon: "👁️", weight: "Mod 6 · 3–4 questions" },
  { id: "repro", name: "Reproductive, GU & Rectal", short: "Repro & GU", icon: "🧬", weight: "Mods 7–8 · 7–9 questions" }
];

window.EMPHASIS = [
  "Abdomen: inspect → auscultate → THEN touch. Listen before you palpate or percuss, because touch changes bowel sounds.",
  "Bowel sounds: diaphragm, start in the RLQ, then RUQ → LUQ → LLQ. Never chart “absent” after a quick listen.",
  "High-pitched tinkling with pain and distention = possible obstruction. Absent = ileus or other serious problem.",
  "A pulsatile abdominal mass: do not palpate or percuss. Notify.",
  "Rigid, boardlike abdomen = peritoneal irritation. Hematemesis or GI bleeding with low BP = escalate now.",
  "CVA tenderness: client sitting, fist on a flat hand at the 12th rib and spine, both sides. Tender = kidney infection.",
  "Stroke: activate the stroke alert, note LAST KNOWN WELL, check glucose, NPO until swallow screen, HOB 30°, neuro checks q15 min.",
  "A change from baseline (especially LOC) is the earliest sign of neuro decline.",
  "GCS: E4 V5 M6 = 15. Lowest 3. 8 or less is severe.",
  "Strength 3/5 = against gravity only. 2/5 = gravity eliminated. Pronator drift = weakness.",
  "DTRs: 2+ is normal. 4+ with clonus is unexpected. Romberg should be negative.",
  "Left-brain stroke → right-sided weakness (and often aphasia).",
  "Sudden confusion in an older adult is delirium until proven otherwise, not “just aging.”",
  "MSK: inspect → palpate → ROM → strength, and compare both sides every time. Ligaments join bone to bone; tendons join muscle to bone.",
  "Neurovascular check below any injury or cast: color, warmth, movement, sensation, pulses, cap refill. A lost distal pulse or new numbness gets reported now.",
  "Final review deck: urine output of at least 30 mL/hr is the common adult benchmark (≈ 0.5 mL/kg/hr for a 60 kg adult).",
  "Cumulative: SpO₂ under 92%, stridor, new asymmetric chest expansion, PVR over 100 mL, and urine output under 0.5 mL/kg/hr all get reported."
];

window.CRITICAL_THINKING = [
  ["Why is the abdominal exam order different from every other system?", "Touching the abdomen (palpation or percussion) can change bowel sounds, so you auscultate right after inspecting and before any hands-on technique. In every other system the order is inspect, palpate, percuss, auscultate."],
  ["How do you decide whether an abdominal finding is urgent?", "Ask whether the client is unstable or the finding threatens perfusion: rigidity, hematemesis, GI bleeding with hypotension, a pulsatile mass, sudden severe pain. Those are escalated now. Weight loss, persistent pain, or changed bowel habits need follow-up but are not emergencies."],
  ["A client has sudden weakness and slurred speech. What do you do first, and why?", "Activate the stroke alert and report last known well: time to treatment decides how much brain survives. Then glucose (rule out hypoglycemia), NPO until a swallow screen, HOB 30°, and frequent neuro checks."],
  ["Why does the baseline matter so much in neuro assessment?", "Neuro findings are judged as change. A GCS of 13 may be stable for one client and a sharp decline for another. Level of consciousness usually changes first, before pupils or vital signs."],
  ["How do the modules connect on a cumulative exam?", "The same skills repeat: OLDCARTS/PQRST for any symptom, expected vs. unexpected for any finding, the right technique and tool, objective documentation, and prioritizing the unstable client. Melena links GI and rectal; suprapubic fullness links abdomen and urinary retention; CVA tenderness links abdomen and UTI; facial droop links HEENT (CN VII) and stroke."]
];

window.STRATEGY = [
  ["Read the stem for the module, then the age and baseline", "On a cumulative exam, name the system first. Then ask what is expected for this age and this client."],
  ["Spot the action word", "“First,” “priority,” “best,” “report” change the answer. A priority question wants the finding that threatens ABCs or is sudden and new."],
  ["For SATA, judge each option alone", "Treat every option as true or false against the stem. There is no pattern in how many to pick."],
  ["Technique questions are free points", "Bell vs. diaphragm, where to start (RLQ), which hand surface, which position (sitting for CVA, HOB 30–45° for JVD): learn them cold."],
  ["Assessment before action", "If the stem hasn't given you enough data, the answer is often to assess further (recheck, compare sides, compare with baseline)."],
  ["Eliminate vague documentation", "Charting answers with numbers, locations, and objective terms beat answers with “normal,” “fine,” “okay,” or “a little.”"],
  ["Pace yourself", "75 minutes for 50 items is 1.5 minutes each. Flag and move on; come back if time allows."]
];

window.DISORDERS = [
/* ================= MOD 9: GI & ABDOMINAL ================= */
{
  id: "giap", sys: "gi", name: "GI Anatomy & Abdominal Landmarks",
  sub: "Major structures, accessory organs, functions, four quadrants, nine regions",
  connect: ["Anatomy", "Documentation"],
  star: true, starLabel: "On the study guide",
  summary: "Food moves esophagus → stomach → small intestine (where most nutrients are absorbed) → large intestine (where water is absorbed and stool forms) → rectum and anus. The liver makes bile, the gallbladder stores it, and the pancreas makes digestive enzymes. Quadrants let you localize and chart findings.",
  chain: {
    why: ["Four GI jobs: digestion, absorption of nutrients and fluids, motility, elimination", "Small intestine = primary site of nutrient absorption", "Large intestine absorbs water and forms stool", "Accessory organs: liver (bile, nutrient processing), gallbladder (stores/releases bile), pancreas (enzymes)"],
    ask: ["When functions are altered clients report pain, nausea, bloating, appetite change, or altered bowel habits", "Ask where the pain is and whether it radiates: location points to the organ"],
    exam: ["Name findings by quadrant (client's right and left)", "RUQ: liver, gallbladder, right kidney", "LUQ: stomach, spleen, pancreas", "RLQ: appendix, cecum", "LLQ: descending and sigmoid colon"],
    flags: ["RUQ pain may suggest gallbladder", "RLQ pain may suggest appendix", "Epigastric pain may involve stomach or pancreas"]
  },
  table: {
    cols: ["Quadrant", "Main organs (slide notes)", "Pain may suggest"],
    rows: [
      ["RUQ", "Liver, gallbladder, right kidney", "Gallbladder (classically after a fatty meal)"],
      ["LUQ", "Stomach, spleen, pancreas", "Stomach, spleen, pancreas"],
      ["RLQ", "Appendix, cecum, portions of intestine", "Appendix"],
      ["LLQ", "Descending and sigmoid colon", "Colon"],
      ["Epigastric (region)", "Upper middle: stomach, pancreas", "Stomach, pancreas, others (J.M.'s case)"]
    ]
  },
  table2: {
    title: "Nine regions (for terminology)",
    cols: ["Row", "Right", "Middle", "Left"],
    rows: [["Top", "Right hypochondriac", "Epigastric", "Left hypochondriac"], ["Middle", "Right lumbar", "Umbilical", "Left lumbar"], ["Bottom", "Right iliac (inguinal)", "Hypogastric (suprapubic)", "Left iliac (inguinal)"]]
  },
  facts: [
    "The lecture focuses on the four quadrants for practice; the nine regions are for terminology.",
    "Quadrants are named for the client's right and left, not yours.",
    "Epigastric = upper middle; hypogastric = lower middle (suprapubic, over the bladder).",
    "Bile emulsifies fat: why gallbladder pain often follows a fatty meal."
  ],
  beyond: "McBurney's point (RLQ, one-third of the way from the right anterior iliac spine to the umbilicus) is the classic appendicitis tenderness site. Bile and McBurney's point are standard references, not in the slides.",
  qa: [
    ["Where are most nutrients absorbed?", "The small intestine. The large intestine absorbs water and forms stool."],
    ["Which organs are in the RUQ?", "Liver, gallbladder, right kidney."],
    ["What does the gallbladder do?", "Stores and releases bile (the liver makes it)."],
    ["Which region is directly above the umbilical region?", "Epigastric."]
  ]
},
{
  id: "gihx", sys: "gi", name: "GI Health History & Symptoms",
  sub: "Medical and surgical history, meds (NSAIDs), nutrition, swallowing, PQRST, bowel habits, SDOH",
  connect: ["Health history", "PQRST", "Communication"],
  summary: "Medication use, diet, and medical history can all cause GI symptoms. Ask specifically about OTC drugs (NSAIDs, antacids, laxatives), weight change, swallowing, alcohol and tobacco, then use PQRST for any pain and ask about meals, vomiting, fever, and bowel habits.",
  chain: {
    why: ["NSAIDs damage the protective stomach lining → gastritis, ulcers, GI bleeding", "Stress and anxiety can worsen GI symptoms", "Food insecurity and cost limit symptom management"],
    ask: ["History: GERD, ulcers, IBS, IBD, abdominal surgery, hernia, bowel obstruction, family history", "Meds: prescriptions, OTC (NSAIDs, antacids, laxatives), vitamins, supplements", "Nutrition: appetite, diet, fluids, weight change, intolerances", "Chewing/swallowing: difficulty, dentures", "Lifestyle: alcohol, tobacco/vaping, substances", "Bowel: last BM, usual pattern, color/consistency change, blood, incontinence"],
    exam: ["Use PQRST for abdominal pain", "Ask the relation to meals, vomiting or fever, effect on daily life, change from baseline", "Compare stool and bowel pattern with the client's usual"],
    flags: ["Black, tarry stool (melena) = GI bleeding", "Unintentional weight loss", "Persistent change in bowel habits", "Recurrent vomiting"]
  },
  table: {
    cols: ["PQRST", "Example question"],
    rows: [["Provocation/Palliation", "What makes it better or worse?"], ["Quality", "Sharp, dull, burning, or cramping?"], ["Region/Radiation", "Where is it? Does it radiate?"], ["Severity", "Rate it 0–10."], ["Timing", "When did it start? Constant or intermittent?"]]
  },
  table2: {
    title: "Psychosocial & SDOH",
    cols: ["Area", "What to explore"],
    rows: [
      ["Quality of life", "Pain interfering with work, sleep, daily activities; diet restrictions affecting social life"],
      ["Stress", "Stress and anxiety can influence GI symptoms"],
      ["Food access", "Nutritious food, food insecurity, clean drinking water"],
      ["Cost & literacy", "Financial barriers to meds and GI care; health literacy about diet advice"],
      ["Culture", "Respect cultural food practices; individualize teaching"]
    ]
  },
  facts: [
    "Ask about OTC NSAIDs, antacids, and laxatives by name: clients often leave them out.",
    "J.M.'s pattern: epigastric pain after meals + NSAIDs + weight loss → think GERD, gastritis, peptic ulcer.",
    "Melena = black, tarry stool = possible GI bleeding.",
    "The Bristol chart and rectal exam were taught in Mod 8 and are still on the final."
  ],
  qa: [
    ["A client says the pain is “burning.” Which PQRST letter is this?", "Q, quality."],
    ["Why ask about OTC ibuprofen in a client with epigastric pain?", "NSAIDs damage the stomach lining and raise the risk of gastritis, ulcers, and bleeding."],
    ["Black, tarry stools are called what?", "Melena; it suggests GI bleeding."],
    ["Name two SDOH that affect GI health.", "Any two: food insecurity, access to nutritious food or clean water, cost of meds and care, cultural diet, health literacy."]
  ]
},
{
  id: "giorder", sys: "gi", name: "Exam Order & Abdominal Inspection",
  sub: "Inspect → auscultate → palpate/percuss; RLQ → RUQ → LUQ → LLQ; contour, skin, umbilicus, pulsations",
  connect: ["Inspection", "Positioning"],
  star: true, starLabel: "Order is a favorite exam item",
  summary: "The abdomen is the one system where you listen before you touch: inspect, auscultate, then the hands-on techniques. Go around the abdomen RLQ → RUQ → LUQ → LLQ and examine any painful area last. On inspection, look at symmetry, contour, skin, umbilicus, and visible movement.",
  chain: {
    why: ["Touching or manipulating the abdomen can change bowel sounds", "A consistent sequence makes the exam accurate", "A faint aortic pulsation can be normal in thin people"],
    ask: ["Ask where it hurts first, so you can examine that spot last", "Have the client empty the bladder"],
    exam: ["Client supine, knees slightly bent, arms at sides", "Symmetry: bulges or masses?", "Contour: flat, rounded/protuberant, scaphoid (concave)", "Skin: scars, striae, rashes, lesions, dilated veins", "Umbilicus: position, redness, bulging/hernia", "Movement: respiration, peristalsis, aortic pulsation"],
    flags: ["Prominent pulsatile mass: do NOT palpate or percuss; notify", "New or significant distention", "Localized bulging (hernia or mass)", "Prominent dilated veins"]
  },
  table: {
    cols: ["Expected", "Unexpected"],
    rows: [["Symmetric abdomen", "Asymmetry or localized bulging"], ["Flat or rounded contour", "New or significant distention"], ["Intact skin", "New lesions or prominent dilated veins"], ["Umbilicus without inflammation", "Redness or abnormal bulging"], ["No concerning visible movement", "Prominent pulsatile mass"]]
  },
  facts: [
    "Slides: Inspection → Auscultation → Palpation → Percussion. The final study guide and ATI list Inspection → Auscultation → Percussion → Palpation. Both put auscultation second, before any touching.",
    "Order around the abdomen (study guide): RLQ → RUQ → LUQ → LLQ.",
    "Distention can be gas, fluid, stool, or another cause; bulging may be a hernia or mass.",
    "Scaphoid = sunken, concave. Protuberant = rounded outward."
  ],
  beyond: "Prep (positioning, empty bladder) and the reason not to palpate a pulsatile mass (possible abdominal aortic aneurysm) are standard references. Cullen's sign (bruising around the umbilicus) and Grey Turner's sign (flank bruising) suggest bleeding inside the abdomen.",
  qa: [
    ["What comes right after inspection in the abdominal exam?", "Auscultation, before any palpation or percussion."],
    ["Why?", "Touching the abdomen can change bowel sounds."],
    ["A thin client has a strong pulsating mass above the umbilicus. What do you do?", "Don't palpate or percuss; notify the provider."],
    ["Name the three abdominal contours from the slides.", "Flat, rounded/protuberant, scaphoid (concave)."]
  ]
},
{
  id: "bowel", sys: "gi", name: "Auscultation: Bowel Sounds & Bruits",
  sub: "Diaphragm, start RLQ, normoactive/hypoactive/hyperactive/absent, obstruction, bruits",
  connect: ["Auscultation", "Documentation"],
  summary: "Use the diaphragm, start in the RLQ, and listen in all four quadrants for frequency and character. Expected: intermittent gurgles or clicks in every quadrant. Hypoactive = slowed motility; hyperactive = increased activity; high-pitched tinkling with pain or distention = possible obstruction; absent (after prolonged listening) = ileus or another serious problem.",
  chain: {
    why: ["Bowel sounds reflect intestinal motility", "They must be interpreted with the other findings, never alone", "Bruits are turbulent blood flow over a narrowed or altered vessel"],
    ask: ["Last BM, flatus, nausea, vomiting, distention, recent surgery or opioids (slow motility)"],
    exam: ["Diaphragm, light pressure", "Start in the RLQ, then RUQ, LUQ, LLQ", "Assess frequency and character", "Listen longer when sounds are faint", "Listen for bruits over the aorta and renal and iliac arteries"],
    flags: ["Tinkling, high-pitched + pain/distention = obstruction", "Absent after prolonged, systematic listening = ileus or serious condition", "Bruit = altered blood flow or narrowing: report"]
  },
  table: {
    cols: ["Classification", "Description", "May mean"],
    rows: [["Normoactive", "Intermittent gurgling/clicking", "Expected"], ["Hypoactive", "Decreased or infrequent", "Reduced motility"], ["Hyperactive", "Increased, sometimes loud or high-pitched", "Increased activity (e.g., diarrhea)"], ["High-pitched tinkling", "With pain or distention", "Possible obstruction"], ["Absent", "None after prolonged systematic listening", "Ileus or other serious condition"]]
  },
  facts: [
    "Never document bowel sounds as absent after listening only briefly.",
    "Borborygmi = loud, audible rumbling (“stomach growling”), a hyperactive sound.",
    "Start in the RLQ: the ileocecal valve area, where sounds are most consistently heard."
  ],
  beyond: "ATI: normoactive is about 5–30 sounds a minute, and you listen about 5 minutes before calling sounds absent. Use the bell for bruits. These numbers are standard references, not in the slides.",
  qa: [
    ["Which part of the stethoscope for bowel sounds?", "The diaphragm."],
    ["Where do you start?", "The RLQ."],
    ["High-pitched tinkling sounds with distention and cramping suggest what?", "Possible bowel obstruction."],
    ["What is a bruit?", "A sound of turbulent blood flow over a vessel; it may mean narrowing. Report it."]
  ]
},
{
  id: "palpperc", sys: "gi", name: "Palpation & Percussion",
  sub: "Light palpation about 1 cm, tenderness, guarding, rigidity, masses, tympany vs. dullness",
  connect: ["Palpation", "Percussion"],
  summary: "Light palpation uses the finger pads and about 1 cm of pressure in all four quadrants plus the suprapubic area, watching the face and doing the painful area last. Expected: soft and nontender. Percussion separates air (tympany, which should predominate) from solid organs, fluid, or stool (dullness).",
  chain: {
    why: ["Guarding = muscle tensing from pain or irritation (voluntary or involuntary)", "Rigidity = persistent involuntary contraction from peritoneal irritation", "Tympany = air; dullness = solid, fluid, or stool"],
    ask: ["Explain the procedure", "Ask about pain first; examine the painful area last", "Stop if the client has significant pain"],
    exam: ["Finger pads, gentle pressure about 1 cm", "All four quadrants and the suprapubic region", "Watch facial expressions", "Percussion: middle finger of one hand firm on the abdomen, tap it with the middle finger of the other hand, compare quadrants"],
    flags: ["Rigid, boardlike abdomen", "Unexpected masses", "Suprapubic fullness → urinary retention → bladder scan", "Large areas of unexplained dullness; pain with percussion"]
  },
  table: {
    cols: ["Finding", "Description", "Significance"],
    rows: [["Tenderness", "Pain with palpation", "Inflammation or pathology"], ["Guarding", "Muscle tensing; voluntary or involuntary", "Pain or irritation"], ["Rigidity", "Persistent, involuntary contraction", "Peritoneal irritation: urgent"], ["Masses", "Unexpected palpable abnormality", "Needs evaluation"], ["Suprapubic fullness", "Fullness over the bladder", "Urinary retention: bladder scan"]]
  },
  table2: {
    title: "Percussion sounds",
    cols: ["Sound", "Character", "Over"],
    rows: [["Tympany", "Hollow, drumlike", "Air-filled stomach and intestines: predominant and expected"], ["Dullness", "Muffled, thudlike", "Solid organs (liver), fluid (ascites), stool, full bladder"]]
  },
  facts: [
    "Expected: soft, nontender, predominantly tympanic.",
    "Rebound tenderness = pain when pressure is released (peritoneal irritation); usually checked by the provider.",
    "Ascites = fluid in the peritoneal cavity (dull flanks with a distended abdomen).",
    "Organomegaly = an enlarged organ."
  ],
  beyond: "Voluntary guarding relaxes on exhale or with distraction; rigidity doesn't. Deep palpation (5–8 cm) is mostly an advanced-practice skill. Expected dullness over the liver (RUQ) is a standard reference.",
  qa: [
    ["How deep is light palpation?", "About 1 cm, with the finger pads."],
    ["Which finding suggests peritoneal irritation: guarding or rigidity?", "Rigidity (persistent, involuntary). Guarding can be voluntary."],
    ["What sound predominates over a healthy abdomen?", "Tympany."],
    ["Suprapubic fullness and the client can't void. Next step?", "Assess for urinary retention: bladder scan if indicated, report."]
  ]
},
{
  id: "cva", sys: "gi", name: "CVA Tenderness",
  sub: "Costovertebral angle, technique, kidney infection",
  connect: ["Percussion", "Positioning"],
  summary: "The costovertebral angle is where the 12th rib meets the spine, over each kidney. With the client sitting, place one hand flat over the CVA and strike it gently with the fist of the other hand, on both sides. Tenderness can mean kidney infection or another renal problem.",
  chain: {
    why: ["The kidneys sit posterior, under the lower ribs", "An inflamed kidney hurts when jarred"],
    ask: ["Flank pain, fever, chills, dysuria, urgency, frequency, hematuria"],
    exam: ["Client sitting upright", "Locate the CVA at the 12th rib and spine", "One hand flat over the area", "Strike that hand gently with the other fist", "Both sides"],
    flags: ["CVA tenderness + fever + UTI symptoms = possible pyelonephritis: report"]
  },
  facts: [
    "Expected: nontender bilaterally (“No CVA tenderness bilaterally”).",
    "In the GI module CVA = costovertebral angle; in the neuro module CVA = cerebral vascular accident (stroke).",
    "Ties to Mod 8 UTI assessment."
  ],
  beyond: "Pyelonephritis and kidney stones as the usual causes come from Patho, not the slides.",
  qa: [
    ["Position for CVA assessment?", "Sitting upright."],
    ["Where is the CVA?", "Where the 12th rib meets the spine, over each kidney."],
    ["CVA tenderness suggests what?", "Kidney infection or another renal condition."]
  ]
},
{
  id: "giflags", sys: "gi", name: "Abdominal Red Flags, Lifespan & Terms",
  sub: "When to escalate, infants to older adults, terminology, documentation",
  connect: ["Prioritization", "Documentation"],
  summary: "Escalate now for sudden severe pain, a rigid abdomen, significant distention with persistent vomiting, hematemesis, GI bleeding with instability, severe pain with hypotension, or a concerning pulsatile mass. Children dehydrate fast and can't localize pain; older adults get constipation from slow motility and can be sick with few symptoms.",
  chain: {
    why: ["Bleeding and peritonitis threaten circulation", "Children: small stomach capacity, rapid dehydration", "Older adults: slower motility, meds affect GI function, vulnerable to dehydration"],
    ask: ["Vomiting blood? Black stool? Dizziness?", "Children: feeding, wet diapers, vomiting/diarrhea", "Older adults: appetite, taste, meds, constipation"],
    exam: ["Pair abdominal findings with vital signs", "Document location, technique, and the specific term"],
    flags: ["Urgent: sudden severe pain, rigidity, distention + persistent vomiting, hematemesis, GI bleed with instability, pain + hypotension, pulsatile mass", "Further evaluation: persistent pain, weight loss, recurrent N/V, masses, persistent bowel changes"]
  },
  table: {
    cols: ["Term", "Meaning"],
    rows: [["Epigastric / Hypogastric", "Upper middle / lower middle region"], ["Distention", "Abnormal abdominal enlargement"], ["Tympany / Dullness", "Hollow drumlike / muffled percussion sound"], ["Normo-, hypo-, hyperactive", "Expected / decreased / increased bowel sounds"], ["Guarding", "Abdominal muscle tensing"], ["Rigidity", "Persistent, involuntary contraction"], ["Rebound tenderness", "Pain with release of pressure"], ["Borborygmi", "Audible intestinal rumbling"], ["Ascites", "Fluid in the peritoneal cavity"], ["Organomegaly", "Enlarged organ"], ["Hematemesis", "Vomiting blood"]]
  },
  table2: {
    title: "Lifespan",
    cols: ["Group", "Key points"],
    rows: [["Infants & children", "GI tract still maturing; small stomach → frequent feeds; rounded or protuberant abdomen is expected; trouble localizing pain; vomiting and diarrhea → rapid dehydration"], ["Adults", "Diet, meds, symptoms, stress, lifestyle, chronic disease"], ["Older adults", "Slower motility → constipation; less appetite, altered taste; meds affect GI function; more vulnerable to dehydration and complications"]]
  },
  facts: [
    "Good documentation: “Bowel sounds normoactive in all four quadrants. Tympany predominates. Abdomen soft, nontender to light palpation in all four quadrants and suprapubic region. No guarding or rigidity. No CVA tenderness bilaterally.”",
    "Avoid: “stomach feels fine,” “a little bloated,” “some pain,” “bowel sounds okay.”",
    "Instability beats pain in a priority question."
  ],
  beyond: "Older adults may have serious abdominal problems with less pain, fever, and guarding: a standard geriatric point, not in the slides.",
  qa: [
    ["Name three urgent abdominal red flags.", "Any three: sudden severe pain, rigid abdomen, distention with persistent vomiting, hematemesis, GI bleed with instability, severe pain with hypotension, pulsatile mass."],
    ["Why do children with diarrhea need close watching?", "Vomiting and diarrhea can cause rapid dehydration."],
    ["Why are older adults prone to constipation?", "Slower GI motility, plus medication effects and lower intake."]
  ]
},
{
  id: "gicase", sys: "gi", name: "Case: J.M., Epigastric Pain",
  sub: "Putting the abdominal assessment together",
  connect: ["Clinical judgment", "Documentation"],
  summary: "J.M., 45, has two weeks of dull epigastric pain after meals (worse with fatty or spicy foods), bloating, nausea, poor appetite, belching, nighttime heartburn, a 5-lb unintentional weight loss, and occasional NSAID use. Exam: mild distention, bowel sounds in all four quadrants, tympanic, mild epigastric tenderness, no guarding, rigidity, or masses.",
  chain: {
    why: ["Epigastric = stomach, pancreas, other upper structures", "NSAIDs injure the stomach lining"],
    ask: ["Pain characteristics and relation to meals", "NSAID use (how much, how often)", "Bowel habit or stool changes", "Signs of GI bleeding (black stool, vomiting blood, dizziness)"],
    exam: ["Unexpected: epigastric tenderness, bloating/distention, persistent symptoms, weight loss", "Expected: bowel sounds in all 4 quadrants, tympany, no guarding/rigidity/masses"],
    flags: ["Consider GERD, gastritis, peptic ulcer disease", "Monitor for worsening pain or GI bleeding", "Communicate findings; teach"]
  },
  facts: [
    "Exam items often hide one or two unexpected findings among several expected ones.",
    "Abnormal charting example: “Patient reports intermittent epigastric pain rated 5/10, worsening after meals, with nausea and bloating for two weeks… Mild tenderness with light palpation of epigastric region. No guarding or rigidity… Provider notified.”"
  ],
  qa: [
    ["Which of J.M.'s findings are unexpected?", "Epigastric tenderness, bloating/distention, persistent symptoms, and the unintentional weight loss."],
    ["What extra data matters most?", "NSAID use, pain pattern with meals, stool changes, and signs of GI bleeding."],
    ["What are the nursing priorities?", "Keep assessing, watch for worsening pain or bleeding, communicate findings, teach."]
  ]
},

/* ================= MOD 10: NEUROLOGICAL ================= */
{
  id: "stroke", sys: "neuro", name: "Suspected Stroke: Priority Actions",
  sub: "Case Mr. Alvarez, time is brain, last known well, stroke alert, SBAR",
  connect: ["Prioritization", "SBAR", "Clinical judgment"],
  star: true, starLabel: "On the study guide",
  summary: "Sudden focal deficits (facial droop, slurred speech, one-sided weakness) mean a possible acute stroke. Time to treatment decides outcome: activate the stroke alert, report the last known well time, check glucose, keep NPO until a swallow screen, HOB 30°, neuro checks every 15 minutes, and get a stat CT.",
  chain: {
    why: ["Atrial fibrillation lets clots form; missed anticoagulant → embolic stroke risk", "Left-hemisphere stroke → right-sided weakness and often aphasia", "Brain tissue dies with every minute of no blood flow"],
    ask: ["Last known well (when last seen normal)", "History: HTN, diabetes, afib, anticoagulant use", "Family/witness report of onset and symptoms"],
    exam: ["BE-FAST", "GCS, pupils, facial symmetry, speech, motor strength, pronator drift, sensation", "Glucose (rule out hypoglycemia)", "Vitals: BP, irregular HR"],
    flags: ["Activate stroke alert immediately", "Stat CT head (rules out bleeding)", "NPO until swallow screen; HOB 30°", "Neuro checks q15 min; report any decline"]
  },
  table: {
    cols: ["Domain", "Mr. Alvarez", "Expected", "Meaning"],
    rows: [["LOC", "Drowsy, GCS 13", "Alert, oriented ×4, GCS 15", "Altered mental status"], ["Speech", "Slurred, word-finding trouble", "Clear, fluent", "Dysarthria / aphasia"], ["Face (CN VII)", "Right droop", "Symmetric", "Central facial weakness"], ["Motor", "R arm 2/5, R leg 3/5", "5/5 all", "Right hemiparesis"], ["Pupils", "3 mm, equal, brisk", "Equal, round, reactive", "No brainstem sign now"]]
  },
  table2: {
    title: "SBAR to the provider",
    cols: ["", "Content"],
    rows: [["Situation", "68-year-old man, sudden right weakness and slurred speech, onset 90 min ago"], ["Background", "HTN, type 2 DM, atrial fibrillation; missed anticoagulant doses"], ["Assessment", "GCS 13, right facial droop, right arm 2/5, BP 188/102, glucose 142 mg/dL (normal 70–99)"], ["Recommendation", "Stat CT head and stroke team; clarify BP and NPO orders"]]
  },
  facts: [
    "Lecture question: the priority is to activate the stroke alert and report last known well time (not oral fluids, not lying flat to observe, not a routine consult).",
    "Nursing diagnoses: ineffective cerebral tissue perfusion, risk for aspiration, impaired physical mobility, impaired verbal communication.",
    "Outcomes: neuro status stable or improving, no aspiration, BP in ordered range, patient and wife can state the plan."
  ],
  beyond: "Clot-dissolving drugs are generally given within about 3–4.5 hours of last known well, after CT rules out bleeding. The afib → embolic stroke link is from Patho, not the slides.",
  qa: [
    ["What is the nurse's first action for sudden facial droop and arm weakness?", "Activate the stroke alert and report last known well time."],
    ["Why NPO?", "Dysphagia is common after stroke; oral intake before a swallow screen risks aspiration."],
    ["Why check glucose right away?", "Hypoglycemia can mimic a stroke."],
    ["A left-hemisphere stroke causes weakness on which side?", "The right (motor pathways cross)."]
  ]
},
{
  id: "neuroap", sys: "neuro", name: "Neuro Anatomy & the Nervous System",
  sub: "CNS vs. PNS, lobes, cerebellum, brainstem, ANS, afferent and efferent pathway",
  connect: ["Anatomy"],
  summary: "The CNS (brain and spinal cord, protected by skull, vertebrae, and meninges) processes information; the PNS (12 cranial and 31 spinal nerve pairs) carries it in and out. The cerebrum's lobes handle movement and judgment (frontal), sensation (parietal), hearing and memory (temporal), and vision (occipital); the cerebellum coordinates balance; the brainstem runs breathing, heart rate, and consciousness.",
  chain: {
    why: ["Frontal: movement, judgment, speech", "Parietal: sensation", "Temporal: hearing, memory", "Occipital: vision", "Cerebellum: balance, posture, smooth voluntary movement", "Brainstem (midbrain, pons, medulla): breathing, HR, consciousness, cranial nerves"],
    ask: ["Link symptoms to structures: vision loss (occipital), unsteady gait (cerebellum), personality change (frontal)"],
    exam: ["Pathway: receptors → sensory (afferent) → CNS processing → motor (efferent) → effectors", "Somatic = voluntary skeletal muscle; autonomic = smooth muscle, heart, glands"],
    flags: ["Brainstem signs (pupil changes, breathing changes, falling LOC) are the most dangerous", "Contralateral deficits point to the opposite hemisphere"]
  },
  table: {
    cols: ["ANS branch", "Nickname", "Effects"],
    rows: [["Sympathetic", "Fight or flight", "↑ HR and BP, dilates pupils and airways, blood to skeletal muscle, slows digestion"], ["Parasympathetic", "Rest and digest", "↓ HR and BP, constricts pupils, stimulates digestion and elimination"]]
  },
  table2: {
    title: "Receptor types (slide notes)",
    cols: ["Type", "Detects"],
    rows: [["Somatic sensory", "Position, touch, pressure, pain, temperature"], ["Special sensory", "Smell, taste, vision, balance, hearing"], ["Visceral sensory", "Internal organs"]]
  },
  facts: [
    "Meninges = protective membranes that surround and cushion the brain and spinal cord.",
    "Afferent = toward the CNS (sensory). Efferent = away from the CNS (motor).",
    "12 pairs of cranial nerves, 31 pairs of spinal nerves."
  ],
  beyond: "Memory trick: Afferent Arrives, Efferent Exits. Language usually sits in the left hemisphere (standard reference).",
  qa: [
    ["Which lobe handles vision?", "Occipital."],
    ["Which structure coordinates balance and smooth movement?", "The cerebellum."],
    ["Which ANS branch constricts the pupils and stimulates digestion?", "Parasympathetic."],
    ["Is the sensory division afferent or efferent?", "Afferent (toward the CNS)."]
  ]
},
{
  id: "befast", sys: "neuro", name: "Neuro History & BE-FAST",
  sub: "Subjective neuro assessment, BE-FAST, last known well",
  connect: ["Health history", "Prioritization"],
  summary: "The neuro history covers neuro disease and injuries, headaches, dizziness, seizures, loss of consciousness, weakness or numbness, balance and falls, vision/hearing/speech/swallowing changes, family history, sleep and ADLs, hazards, substances, and all medications. BE-FAST screens for stroke: Balance, Eyes, Face, Arms, Speech, Time.",
  chain: {
    why: ["Stroke symptoms are sudden and focal", "Time from last known well decides treatment options"],
    ask: ["Headaches, dizziness, seizures, LOC", "Weakness, numbness, tingling", "Balance, coordination, gait, falls", "Vision, hearing, speech, swallowing", "Family history, sleep, ADLs, hazards, alcohol/marijuana/illicit drugs, Rx/OTC/supplements, appetite and vomiting"],
    exam: ["B: sudden loss of balance/coordination", "E: sudden vision loss, blurred or double vision", "F: facial droop, uneven smile", "A: arm weakness or drift", "S: slurred, strange speech", "T: time last known well; call stroke code"],
    flags: ["Any positive BE-FAST sign = stroke code now", "Document last known well", "NPO until swallow screen; check glucose"]
  },
  table: {
    cols: ["BE-FAST", "Look for"],
    rows: [["Balance", "Sudden loss of balance or coordination"], ["Eyes", "Sudden vision loss, blurred or double vision"], ["Face", "Facial droop or uneven smile"], ["Arms", "Arm weakness or drift downward"], ["Speech", "Slurred, strange, hard to understand"], ["Time", "Last known well; call 911/stroke code"]]
  },
  facts: [
    "Last known well = the last time the person was seen at baseline (if they woke with symptoms, when they went to bed).",
    "Check blood glucose to rule out hypoglycemia, a stroke mimic.",
    "Time is brain."
  ],
  qa: [
    ["What does the B in BE-FAST stand for?", "Balance."],
    ["A client woke at 0700 with slurred speech; went to bed at 2300 normal. Last known well?", "2300."],
    ["Name four subjective neuro questions.", "Any four from the history list: headaches, dizziness, seizures, LOC, weakness, numbness, balance/falls, vision/hearing/speech/swallowing, family history, meds, substances."]
  ]
},
{
  id: "gcs", sys: "neuro", name: "LOC, Mental Status & the GCS",
  sub: "Objective neuro components, baseline, Glasgow Coma Scale",
  connect: ["Inspection", "Documentation"],
  star: true, starLabel: "Know how to score it",
  summary: "The objective neuro exam covers mental status, LOC (with the GCS), pupils, cranial nerves, motor and gait, sensation, coordination, and vitals including glucose. Know the baseline first: a change from baseline is the earliest sign of decline. The GCS scores eyes (1–4), verbal (1–5), and motor (1–6): 15 is best, 3 is lowest.",
  chain: {
    why: ["LOC is the most sensitive sign of neuro change", "GCS gives a number you can trend"],
    ask: ["What is this client's baseline? (family, chart)"],
    exam: ["Mental status: orientation, memory, attention, speech", "LOC: alertness, response to stimuli, GCS", "Pupils: size, shape, equality, light reaction", "Vitals: BP, HR, RR, temp, SpO₂, glucose"],
    flags: ["Falling GCS (a drop of 2 or more is significant)", "GCS 8 or less = severe; airway at risk", "New confusion or drowsiness"]
  },
  table: {
    cols: ["Score", "Eyes", "Verbal", "Motor"],
    rows: [["6", "", "", "Obeys commands"], ["5", "", "Oriented", "Localizing"], ["4", "Spontaneous", "Confused", "Normal flexion (withdraws)"], ["3", "To sound", "Words", "Abnormal flexion (decorticate)"], ["2", "To pressure", "Sounds", "Extension (decerebrate)"], ["1", "None", "None", "None"]]
  },
  facts: [
    "Severity: 13–15 mild, 9–12 moderate, 3–8 severe.",
    "Mr. Alvarez: E3 (opens to voice) + V4 (oriented to person only = confused) + M6 (follows commands) = 13.",
    "Report each component (E, V, M), not just the total."
  ],
  beyond: "“Less than 8, intubate,” the 2-point drop, and decorticate/decerebrate names are standard references, not in the slides.",
  qa: [
    ["Highest and lowest GCS?", "15 and 3."],
    ["Opens eyes to voice, confused, obeys commands. GCS?", "E3 + V4 + M6 = 13."],
    ["What is the earliest sign of neuro decline?", "A change from baseline, usually in LOC."]
  ]
},
{
  id: "motor", sys: "neuro", name: "Motor Strength & Pronator Drift",
  sub: "BUE/BLE, 0–5 scale, against gravity and resistance, compare sides",
  connect: ["Inspection", "Comparison", "Documentation"],
  summary: "Test both sides and compare. Upper: shoulder shrug, elbow flexion/extension, hand grip. Lower: hip flexion, knee extension, ankle dorsiflexion and plantar flexion. The client moves against gravity, then against your resistance. Pronator drift: arms out, palms up, eyes closed, 10 seconds; drift suggests weakness.",
  chain: {
    why: ["Asymmetric weakness points to a one-sided brain or nerve problem", "Gravity is the first test; resistance is the second"],
    ask: ["New weakness, clumsiness, dropping things, falls"],
    exam: ["BUE: shrug, elbow flex/extend, grip", "BLE: hip flexion, knee extension, dorsiflexion, plantar flexion", "Against gravity, then resistance", "Pronator drift: palms up, eyes closed, 10 sec", "Score each limb, left vs. right"],
    flags: ["New unilateral weakness (hemiparesis)", "Positive pronator drift", "Any decline from the last check"]
  },
  table: {
    cols: ["Score", "Meaning"],
    rows: [["5", "Normal, full resistance"], ["4", "Moves against some resistance"], ["3", "Moves against gravity only"], ["2", "Moves with gravity eliminated"], ["1", "Flicker of contraction"], ["0", "No movement"]]
  },
  facts: [
    "3/5: lifts against gravity but gives way to any resistance.",
    "2/5: slides across the bed but can't lift.",
    "Expected: 5/5, symmetric, no drift."
  ],
  qa: [
    ["Client lifts the leg off the bed but can't resist any pressure. Score?", "3/5."],
    ["How is pronator drift tested?", "Arms out, palms up, eyes closed, 10 seconds; watch for one arm drifting down."],
    ["Name two BLE movements tested.", "Any two: hip flexion, knee extension, ankle dorsiflexion, plantar flexion."]
  ]
},
{
  id: "cnneuro", sys: "neuro", name: "Cranial Nerve Assessment",
  sub: "I–XII: what each does and how to test it",
  connect: ["Inspection", "Palpation", "Comparison"],
  summary: "Test each cranial nerve with a simple maneuver: smell (I), acuity and fields (II), pupils and eye movements (III, IV, VI), facial sensation and jaw clench (V), facial expression (VII), hearing (VIII), gag, swallow, and uvula (IX, X), shrug and head turn (XI), and tongue midline (XII).",
  chain: {
    why: ["CN IX and X control gag and swallow → aspiration risk after stroke", "CN VII: a central facial droop is a stroke sign"],
    ask: ["Changes in smell, vision, hearing, swallowing, speech, facial numbness"],
    exam: ["I: identify smells, one nostril at a time", "II: acuity (OD/OS/OU) and fields", "III, IV, VI: pupils, H pattern, convergence (head still)", "V: facial sensation; clench teeth (temporal, masseter)", "VII: raise brows, frown, close eyes tight, smile, puff cheeks", "VIII: finger rub or whisper", "IX, X: gag (warn first), voice, “Ah” and uvula rises", "XI: shrug and turn head against resistance", "XII: tongue out midline, side to side"],
    flags: ["Facial droop (VII)", "Tongue deviation (XII)", "Weak gag or swallow (IX, X): stay NPO", "Unequal or sluggish pupils (III)"]
  },
  table: {
    cols: ["CN", "Name", "Test"],
    rows: [["I", "Olfactory", "Familiar smells, each nostril"], ["II", "Optic", "Acuity and visual fields"], ["III", "Oculomotor", "Pupils, EOMs, eyelid"], ["IV", "Trochlear", "EOMs (H pattern)"], ["V", "Trigeminal", "Facial sensation; clench jaw"], ["VI", "Abducens", "EOMs (lateral gaze)"], ["VII", "Facial", "Smile, frown, close eyes, puff cheeks"], ["VIII", "Vestibulocochlear", "Hearing (finger rub, whisper), balance"], ["IX, X", "Glossopharyngeal, Vagus", "Gag, swallow, voice, uvula rises"], ["XI", "Spinal accessory", "Shrug, turn head against resistance"], ["XII", "Hypoglossal", "Tongue midline, side to side"]]
  },
  facts: [
    "The slide notes call CN VI “Trochlear”; the trochlear is CN IV, and CN VI is the abducens.",
    "Ties to Mod 6 HEENT: PERRLA and the H test are CN II, III, IV, VI.",
    "Warn the client before testing the gag reflex."
  ],
  beyond: "Mnemonics (Oh Oh Oh To Touch And Feel Very Good Velvet Ah Heaven; Some Say Marry Money But My Brother Says Big Brains Matter More) are standard memory aids.",
  qa: [
    ["Which CN is tested by asking the client to shrug?", "XI, spinal accessory."],
    ["Tongue deviates when protruded. Which CN?", "XII, hypoglossal."],
    ["Which CNs are tested with the gag reflex?", "IX and X."],
    ["Raise eyebrows, close eyes tightly, smile: which CN?", "VII, facial."]
  ]
},
{
  id: "dtr", sys: "neuro", name: "Deep Tendon Reflexes & Coordination",
  sub: "Biceps, brachioradialis, patellar, Achilles, 0–4+ scale, finger-to-nose, Romberg",
  connect: ["Percussion", "Comparison"],
  summary: "Strike the biceps (C5–C6, through your thumb in the antecubital fossa), brachioradialis (C5–C6, radius 2–3 inches above the wrist), patellar (L2–L4, just below the kneecap, leg hanging), and Achilles (S1–S2, foot slightly dorsiflexed). 2+ is normal; 4+ with clonus is unexpected. Coordination: finger-to-nose, rapid alternating movements, Romberg.",
  chain: {
    why: ["Reflexes test the spinal reflex arc at specific levels", "Cerebellum controls coordination"],
    ask: ["Falls, unsteadiness, tremor, numbness"],
    exam: ["Relaxed limb, compare sides", "Biceps C5–6, brachioradialis C5–6, patellar L2–4, Achilles S1–2", "Finger-to-nose; rapid alternating movements", "Romberg: feet together, eyes closed; stand close"],
    flags: ["Absent (0) or 4+ with clonus", "Asymmetric reflexes", "Ataxia, tremor, positive Romberg"]
  },
  table: {
    cols: ["Grade", "Meaning"],
    rows: [["0", "Absent"], ["1+", "Diminished"], ["2+", "Normal"], ["3+", "Brisk (may be normal)"], ["4+", "Hyperactive with clonus"]]
  },
  table2: {
    title: "Where to strike",
    cols: ["Reflex", "Level", "Technique"],
    rows: [["Biceps", "C5–C6", "Thumb on the tendon in the antecubital fossa; strike your thumb"], ["Brachioradialis", "C5–C6", "Radius 2–3 inches above the wrist"], ["Patellar", "L2–L4", "Just below the kneecap, leg hanging relaxed"], ["Achilles", "S1–S2", "Dorsiflex slightly; strike above the heel"]]
  },
  facts: [
    "Expected: 2+ and symmetric; smooth, steady gait; negative Romberg.",
    "Clonus = rhythmic repeated jerking after the reflex.",
    "Romberg: slight sway is negative (expected); losing balance with eyes closed is positive."
  ],
  beyond: "The Romberg technique, reinforcement (clench teeth or pull hooked fingers), and the Babinski sign (normal in infants, abnormal in adults) are standard references; the slides name Romberg but don't describe it.",
  qa: [
    ["Normal DTR grade?", "2+."],
    ["Spinal level of the patellar reflex?", "L2–L4."],
    ["Where do you strike for the brachioradialis?", "On the radius about 2–3 inches above the wrist."],
    ["A client loses balance with feet together and eyes closed. Result?", "Positive Romberg: unexpected."]
  ]
},
{
  id: "neurofind", sys: "neuro", name: "Expected vs. Unexpected Neuro Findings",
  sub: "What's normal and what gets reported",
  connect: ["Pattern recognition", "Prioritization"],
  summary: "Expected: alert and oriented ×4, follows commands, PERRL, face symmetric, tongue midline, clear speech, 5/5 symmetric with no drift, equal sensation, smooth gait, negative Romberg, reflexes 2+ and symmetric. Anything else (falling GCS, unequal or fixed pupils, droop, deviation, slurred speech, weakness, drift, numbness, ataxia, positive Romberg, absent or 4+ reflexes) is reported.",
  chain: {
    why: ["Neuro findings are judged as change from baseline"],
    ask: ["When did it start? Sudden or gradual?"],
    exam: ["Compare side to side", "Compare with the last check"],
    flags: ["Falling GCS", "Unequal, fixed, sluggish, or dilated pupils", "Facial droop, tongue deviation, slurred speech", "Hemiparesis, pronator drift", "Ataxia, positive Romberg", "Reflexes absent or 4+ with clonus"]
  },
  table: {
    cols: ["Area", "Expected", "Report"],
    rows: [["Mental status/LOC", "Alert, oriented ×4, follows commands", "Drowsy, confused, falling GCS"], ["Pupils", "Equal, round, reactive", "Unequal, fixed, sluggish, dilated"], ["Cranial nerves", "Symmetric face, tongue midline, clear speech", "Droop, deviation, slurred speech"], ["Motor", "5/5, symmetric, no drift", "Weakness, hemiparesis, drift"], ["Sensory", "Intact and equal", "Numbness, tingling, loss"], ["Coordination/gait", "Smooth, steady, negative Romberg", "Ataxia, tremor, positive Romberg"], ["Reflexes", "2+ symmetric", "Absent, 4+, clonus"]]
  },
  facts: ["Older adults: slower reflexes and pupil response can be expected, so the baseline matters even more."],
  qa: [
    ["Is a 3+ reflex always abnormal?", "No; 3+ is brisk and may be normal. 4+ with clonus is unexpected."],
    ["A newly sluggish, dilated pupil. Expected?", "No; report immediately."]
  ]
},
{
  id: "neurolife", sys: "neuro", name: "Neuro Lifespan, SDOH & Terms",
  sub: "Infants, children, pregnancy, older adults, delirium, barriers, terminology",
  connect: ["Communication", "Documentation"],
  summary: "Infants: fontanelles, head circumference, primitive reflexes; irritability, poor feeding, or a high-pitched cry can mean increased ICP. Children: play and a pediatric GCS. Pregnancy: new headache, vision changes, or seizures can mean preeclampsia/eclampsia. Older adults: slower reflexes, higher stroke and fall risk, need a baseline. Sudden confusion is delirium, not aging.",
  chain: {
    why: ["Infant skull is still open (fontanelles)", "Delirium has acute, treatable causes"],
    ask: ["Ask about cost, transport, insurance, literacy, language, support"],
    exam: ["Age-appropriate tools (pediatric GCS, CAM)", "Compare every finding with baseline"],
    flags: ["Infant high-pitched cry, bulging fontanelle", "Pregnancy: headache, vision change, seizure", "Older adult: sudden confusion → look for infection, meds, hypoxia"]
  },
  table: {
    cols: ["Term", "Meaning"],
    rows: [["Aphasia", "Loss of ability to speak or understand language"], ["Dysarthria", "Slurred speech from muscle weakness"], ["Dysphagia", "Difficulty swallowing; aspiration risk"], ["Ataxia", "Uncoordinated, unsteady movement"], ["Hemiparesis", "Weakness on one side"], ["Paresthesia", "Numbness, tingling, pins and needles"], ["Nystagmus", "Involuntary rhythmic eye movement"], ["CVA", "Cerebral vascular accident (stroke)"], ["a- / dys- / hemi-", "Without / difficult, abnormal / one half"], ["-paresis / -plegia / -algia", "Weakness / paralysis / pain"]]
  },
  table2: {
    title: "SDOH and the neuro client",
    cols: ["Determinant", "Effect"],
    rows: [["Access to care", "Delayed stroke recognition or follow-up"], ["Income & meds", "Cost limits anticoagulants, antihypertensives, seizure meds"], ["Health literacy", "Knowing stroke signs and med instructions"], ["Food & housing", "Raise stroke risk, limit recovery"], ["Work & environment", "Head injury, toxins, shift-work sleep loss"], ["Social support", "Fall prevention, rehab, med routines"], ["Language & culture", "Interpreters; beliefs affect reporting"]]
  },
  facts: [
    "Aphasia is a language problem; dysarthria is a muscle (articulation) problem.",
    "Screen delirium with a tool such as CAM.",
    "Nursing action for SDOH: ask about barriers; refer to social work, case management, community resources."
  ],
  beyond: "Delirium vs. dementia: delirium is sudden, fluctuating, and usually reversible; dementia is gradual and progressive (standard reference).",
  qa: [
    ["An infant is irritable, feeding poorly, with a high-pitched cry. Concern?", "Increased intracranial pressure."],
    ["A pregnant client has a new severe headache and blurred vision. Concern?", "Preeclampsia; report immediately."],
    ["Slurred but correct words: aphasia or dysarthria?", "Dysarthria."]
  ]
},

/* ================= MOD 11: MUSCULOSKELETAL ================= */
{
  id: "mskcase", sys: "msk", name: "Case: Hip Fracture After a Fall",
  sub: "85-year-old with osteoporosis, 10/10 hip pain, neurovascular checks",
  connect: ["Clinical judgment", "Neurovascular check", "Comparison"],
  star: true, starLabel: "Lecture case",
  summary: "An 85-year-old woman with osteoporosis and hypertension fell in her assisted living apartment and landed on her right hip. Pain is 10/10, the hip is bruised, red, and swollen, flexion and extension are limited, and she favors the other leg. Pulses are 2+ and cap refill is under 2 seconds, so circulation is intact for now. The x-ray shows a hip fracture needing ORIF. The nursing job: frequent neurovascular checks, ice, pain control, and fall-risk thinking.",
  chain: {
    why: ["Osteoporosis = low bone density → a simple fall breaks a hip", "Older adults: sarcopenia, slower gait, poor balance → fall risk"],
    ask: ["Mechanism: tripped or fell from standing? Hit the head?", "Pain 0–10, location, radiation", "History (osteoporosis, HTN), allergies, meds"],
    exam: ["Inspect: ecchymosis, erythema, edema, alignment, gait", "Palpate pulses (femoral, pedal) and cap refill, both sides", "Skin warm/dry; sensation; can she move the toes?", "ROM of the injured hip is limited; strength deferred on the injured leg"],
    flags: ["Loss of a distal pulse", "New numbness or tingling", "Severe pain with neurovascular changes", "Pale, cool foot or cap refill over 2 seconds"]
  },
  table: {
    cols: ["Domain", "Client finding", "What it means"],
    rows: [["Vital signs", "T 97.8 °F, P 99, R 22, BP 145/90, SpO₂ 98% RA", "HR, RR, and BP up with 10/10 pain"], ["Inspection", "Right hip ecchymosis, erythema, edema; mild knee and foot edema", "Injury and swelling"], ["Neurovascular", "Femoral and pedal pulses 2+, cap refill under 2 s, warm, dry, sensation intact", "Perfusion intact right now: keep checking"], ["Motion", "Moves toes; right hip ↓ flexion and extension; left leg full ROM", "Painful, limited ROM on the injured side"], ["Gait", "Altered, favoring the left", "Avoiding weight on the injured hip"]]
  },
  table2: {
    title: "Provider orders",
    cols: ["Order", "Detail"],
    rows: [["Monitoring", "Neurovascular checks every 15 minutes"], ["Comfort", "Ice 20 minutes on, 20 off, as tolerated"], ["Imaging", "AP and lateral x-rays of the hip and lower extremity"], ["IV fluids", "Lactated Ringer's at 50 mL/hr"], ["Medication", "Morphine 1 mg slow IV push now"], ["Result", "Hip fracture; ORIF needed"]]
  },
  facts: [
    "Heads-up on the slides: the client injured her RIGHT hip, but the orders and x-ray on slide 5 say LEFT. In real practice, a side that doesn't match is a wrong-site safety issue: clarify with the provider before acting.",
    "The slide lists left-leg strength as “+2,” which on the 0–5 scale would mean she can't lift the leg against gravity. With full ROM and no limits on the left, 5/5 is what the rest of the assessment suggests; treat “+2” as a slide typo.",
    "ORIF = open reduction, internal fixation (surgery to line up and fix the bone)."
  ],
  beyond: "Classic hip-fracture signs from standard references: the injured leg looks shorter and turned outward (external rotation). Older adults on bed rest after a hip fracture are at risk for blood clots, pressure injuries, and delirium.",
  qa: [
    ["Pulses 2+, cap refill under 2 s, toes warm and moving. What does this tell you?", "Distal circulation and nerve function are intact right now; keep checking on schedule."],
    ["Which finding would you report immediately?", "A lost or weaker distal pulse, new numbness, or pain out of proportion with neurovascular changes."],
    ["Why did a simple fall fracture her hip?", "Osteoporosis: low bone density makes bones fragile."]
  ]
},
{
  id: "mskap", sys: "msk", name: "Musculoskeletal Anatomy & Physiology",
  sub: "Bones, joints, ligaments vs. tendons, muscles, body regions",
  connect: ["Anatomy", "Function"],
  star: true, starLabel: "On the study guide",
  summary: "The musculoskeletal system is bones, joints, ligaments, tendons, and muscles. It moves the body, protects organs, stores calcium, and makes blood cells in the marrow (hematopoiesis). Ligaments connect bone to bone; tendons connect muscle to bone. Synovial joints move freely: hinge joints (knee, elbow) flex and extend, ball-and-socket joints (hip, shoulder) move in every direction.",
  chain: {
    why: ["Adult skeleton: 206 bones (long, short, flat, irregular)", "Movement needs bone + joint + muscle + nerve working together", "Periosteum (bone covering) carries vessels and nerves"],
    ask: ["Pain, stiffness, swelling, weakness, loss of function"],
    exam: ["Know each joint's type, so you know which motions to test"],
    flags: ["A joint that moves in a way its type shouldn't (instability)"]
  },
  table: {
    cols: ["Joint type", "Movement", "Example"],
    rows: [["Fibrous", "Immovable", "Skull sutures"], ["Cartilaginous", "Slightly movable", "Ribs to sternum; between vertebrae"], ["Synovial: hinge", "Flexion and extension", "Elbow, knee, ankle"], ["Synovial: ball and socket", "Flexion, extension, abduction, adduction, rotation, circumduction", "Hip, shoulder"], ["Synovial: condyloid", "Flexion, extension, hyperextension (side to side too)", "Wrist"]]
  },
  table2: {
    title: "Region by region",
    cols: ["Region", "Key point from the slides"],
    rows: [["Head and neck", "Skull on 7 cervical vertebrae; nodding and rotation (SCM, trapezius)"], ["Shoulder", "Ball and socket with the greatest range of motion but less stability; rotator cuff"], ["Elbow", "Hinge of the humerus, radius, ulna; olecranon is the tip of the elbow"], ["Wrist and hand", "27 small bones (8 carpals, 5 metacarpals, 14 phalanges) for fine movement and grip"], ["Spine", "7 cervical, 12 thoracic, 5 lumbar, then the fused sacrum and coccyx; discs cushion; cervical and lumbar curves concave, thoracic convex"], ["Hip", "Ball and socket (femoral head in the acetabulum): wide motion plus weight-bearing stability"], ["Knee", "Hinge of the femur, tibia, patella; cruciate and collateral ligaments and menisci stabilize"], ["Ankle and foot", "Hinge (tibia, fibula, talus) plus 26 foot bones; malleoli are the landmarks"]]
  },
  facts: [
    "Ligament = bone to bone (stabilizes the joint). Tendon = muscle to bone (moves the bone).",
    "Three muscle types: skeletal (voluntary, attaches by tendons), smooth (organ walls), cardiac (heart).",
    "Neuro link: voluntary movement starts in the frontal lobe; the cerebellum coordinates; the parietal lobe handles position sense (proprioception)."
  ],
  beyond: "The slide says the spine has 24 vertebrae in five regions and the notes say 33; both are right: 24 movable vertebrae (7 + 12 + 5) plus 5 fused sacral and 3–4 fused coccygeal.",
  qa: [
    ["What connects muscle to bone?", "A tendon."],
    ["What connects bone to bone?", "A ligament."],
    ["Which joint has the greatest range of motion?", "The shoulder (ball and socket), at the cost of stability."],
    ["Name a hinge joint.", "Knee or elbow (also the ankle)."],
    ["Where are blood cells made?", "Bone marrow (hematopoiesis)."]
  ]
},
{
  id: "mskhx", sys: "msk", name: "MSK Subjective Assessment",
  sub: "Chief complaint, onset and mechanism, OLDCARTS, function, red flags",
  connect: ["Interview", "OLDCARTS", "Function"],
  summary: "Ask about the chief complaint (pain, stiffness, swelling, weakness, loss of function), then onset and mechanism (sudden or gradual; injury, overuse, or trauma), location and radiation, quality and severity (0–10), what makes it worse or better, timing (morning stiffness, night pain), and how it affects walking, stairs, work, sport, and daily activities. Finish with past, surgical, and family history, medications, and red flags such as fever, weight loss, and numbness.",
  chain: {
    why: ["Mechanism predicts injury: a twist suggests ligament, a fall suggests fracture", "Function tells you the real-life impact"],
    ask: ["Chief complaint", "Onset and mechanism", "Location and radiation", "Quality and severity 0–10", "Aggravating and relieving factors", "Timing: morning stiffness, night pain", "Functional impact (ADLs)", "History, medications, red flags"],
    exam: ["Use the answers to focus the exam on the joint involved"],
    flags: ["Fever with joint pain", "Unexplained weight loss", "Numbness or tingling", "Night pain"]
  },
  table: {
    cols: ["Slide item", "Example question"],
    rows: [["Chief complaint", "“What's bothering you most: pain, stiffness, swelling, or weakness?”"], ["Onset and mechanism", "“Did it start suddenly? Did you fall, twist, or overuse it?”"], ["Location and radiation", "“Point to where it hurts. Does it spread?”"], ["Quality and severity", "“Is it sharp, dull, aching, burning? Rate it 0–10.”"], ["Aggravating/relieving", "“Is it worse with movement or weight bearing? Better with rest?”"], ["Timing", "“Is it stiff in the morning? Does pain wake you at night?”"], ["Functional impact", "“Can you walk, climb stairs, dress, work?”"], ["History and red flags", "“Any fever, weight loss, numbness? Past fractures, surgery, osteoporosis in the family?”"]]
  },
  facts: [
    "The slide notes add: spinal curvature (scoliosis, kyphosis, lordosis) with pain or breathing trouble; neurologic history (head or spinal injury, stroke, seizures); tremors; heavy lifting or repetitive motion at work; exercise habits and protective gear; family neuromuscular disorders.",
    "This is OLDCARTS from Mod 2, applied to bones and joints."
  ],
  beyond: "Morning stiffness lasting over an hour points toward inflammatory arthritis (such as RA); brief stiffness that eases with movement is more typical of osteoarthritis (standard reference).",
  qa: [
    ["Which question explores mechanism of injury?", "“How did it happen? Did you fall, twist, or overuse it?”"],
    ["Which red flags go with MSK pain?", "Fever, unexplained weight loss, numbness."],
    ["Why ask about stairs and dressing?", "To measure functional impact on daily activities."]
  ]
},
{
  id: "mskexam", sys: "msk", name: "MSK Objective Assessment, ROM & Strength",
  sub: "Inspect → palpate → ROM → strength, compare sides, 0–5 scale",
  connect: ["Inspection", "Palpation", "Range of motion", "Comparison"],
  star: true, starLabel: "On the study guide",
  summary: "For each region: inspect (alignment, symmetry, swelling, deformity, color), palpate (tenderness, warmth, crepitus, nodules), test range of motion (active first; passive if needed), then strength against your resistance on the 0–5 scale. Compare both sides every time, demonstrate the motion, and never push a joint past the point of pain.",
  chain: {
    why: ["The unaffected side is the client's own normal", "ROM tells joint function; strength tells muscle and nerve function"],
    ask: ["Pain with movement? Where does it stop?"],
    exam: ["Inspect, then palpate", "AROM: client moves; PROM: nurse moves", "Strength: against gravity, then against resistance (0–5)", "Pronator drift: arms out, palms up, eyes closed 10 seconds", "Measure asymmetry with a tape: >1 cm difference is notable", "Gait, posture, balance"],
    flags: ["New weakness or asymmetry", "Crepitus with pain", "Deformity or misalignment", "Unable to bear weight"]
  },
  table: {
    cols: ["Grade", "Strength scale (slide)"],
    rows: [["5", "Normal, full resistance"], ["4", "Moves against some resistance"], ["3", "Moves against gravity only"], ["2", "Moves with gravity eliminated"], ["1", "Flicker of muscle contraction"], ["0", "No movement"]]
  },
  table2: {
    title: "ROM words",
    cols: ["Motion", "Meaning"],
    rows: [["Flexion / extension", "Bending / straightening"], ["Hyperextension", "Beyond straight (head back, arm behind)"], ["Abduction / adduction", "Away from / toward the midline"], ["Internal / external rotation", "Turning toward / away from the body"], ["Pronation / supination", "Palm down / palm up"], ["Dorsiflexion / plantar flexion", "Toes up toward the nose / toes pointed down"], ["Inversion / eversion", "Sole turned in / out"], ["Opposition", "Thumb touches each fingertip"], ["Lateral flexion", "Bending sideways (neck or trunk)"], ["Circumduction", "Circular motion (shoulder, hip)"]]
  },
  facts: [
    "BUE strength (slide): shoulder shrug, elbow flexion and extension, hand grip. BLE: hip flexion, knee extension, ankle dorsiflexion and plantar flexion.",
    "Document a strength score for each limb, left vs. right (for example, “RUE 5/5, LUE 4/5”).",
    "Expected variation: the dominant arm may have slightly more muscle bulk."
  ],
  beyond: "Standard technique: test the unaffected side first, and stop passive ROM at the first sign of pain or resistance.",
  qa: [
    ["Strength 3/5 means?", "Moves against gravity but not against resistance."],
    ["AROM vs. PROM?", "Active: the client moves the joint. Passive: the nurse moves it."],
    ["Turning the palm up is…?", "Supination."],
    ["Moving an arm away from the body is…?", "Abduction."],
    ["Pointing the toes toward the nose is…?", "Dorsiflexion."]
  ]
},
{
  id: "mskregions", sys: "msk", name: "Expected vs. Unexpected by Region",
  sub: "Neck, shoulders, elbows, hands, spine, hips and knees, ankles and feet",
  connect: ["Inspection", "Palpation", "Pattern recognition"],
  star: true, starLabel: "On the study guide",
  summary: "Expected: symmetric movement, functional ROM, stable joints, steady gait, smooth bones without nodules. Unexpected: swelling, redness, warmth, deformity, limited ROM, weakness, atrophy, crepitus, instability, and altered gait. Each region has its own classic unexpected findings, such as ulnar deviation in the hands, kyphosis or scoliosis in the spine, and hallux valgus in the feet.",
  chain: {
    why: ["Symmetry is the reference point for every region"],
    ask: ["Which joint? One side or both?"],
    exam: ["Head to toe: neck → shoulders → elbows → wrists/hands → spine → hips/knees → ankles/feet", "Inspect and palpate each, then ROM and strength"],
    flags: ["Flattened shoulder (possible dislocation)", "Displaced olecranon (possible elbow dislocation)", "Boggy, mushy knee", "Ataxic or shuffling gait"]
  },
  table: {
    cols: ["Region", "Expected", "Unexpected"],
    rows: [["Head and neck", "Head erect and aligned; equal movement; jaw opens and closes (clicking is a variation)", "Asymmetry (measure; >1 cm difference), pain, spasm, altered sensation"], ["Shoulders", "Symmetric height and contour; firm; relaxed muscles", "Erythema, atrophy, swelling, spasm; flattened shoulder = possible dislocation; pain on abduction = subacromial bursa"], ["Elbows", "Hollows beside the olecranon; even color", "Swelling, erythema, effusion (gout), misalignment or displacement (dislocation), nodules (RA)"], ["Wrists and hands", "Symmetric, straight alignment, smooth joints", "Swelling or nodules (arthritis), ulnar deviation, ganglion cyst, limited motion"], ["Spine", "Head erect, level shoulders, iliac crests, and gluteal folds; concave cervical and lumbar, convex thoracic; loss of height with age is expected", "Kyphosis, lordosis, scoliosis, lateral deviation, tenderness, spasm, ataxic or shuffling gait"], ["Hips and knees", "Smooth, coordinated gait; symmetric hips and knees; hollows beside the patella", "Asymmetry, pain with movement, erythema, swelling, crepitus, boggy knee, genu varum or valgum, contracture, wide-based gait"], ["Ankles and feet", "Feet and toes straight; smooth malleoli; arch varies", "Swelling, lesions, ulcers, corns, calluses, hallux valgus, hammertoes"]]
  },
  facts: [
    "Shoulder pain can come from elsewhere (gallbladder, hiatal hernia, heart, or lung): ask the client to point to it.",
    "Forward-bend test: the lumbar curve should disappear into one C-shaped curve, with scapulae and ribs level. Uneven = possible scoliosis.",
    "The iliac crest line should be level and cross L4.",
    "Rheumatoid nodules: firm, nontender, freely movable lumps on the olecranon or ulna."
  ],
  qa: [
    ["Fingers drifting toward the little-finger side?", "Ulnar deviation: a sign of arthritis."],
    ["Exaggerated thoracic curve?", "Kyphosis."],
    ["Lateral S-shaped curve of the spine?", "Scoliosis."],
    ["Big toe angled outward?", "Hallux valgus (bunion)."],
    ["A shoulder that looks flat instead of rounded?", "Possible dislocation: report."]
  ]
},
{
  id: "msknv", sys: "msk", name: "Neurovascular Checks & MSK Red Flags",
  sub: "Color, warmth, movement, sensation, pulses, cap refill; when to escalate",
  connect: ["Neurovascular check", "Prioritization", "Documentation"],
  star: true, starLabel: "Final review: urgent",
  summary: "Below any injury, cast, or splint, check color, warmth, movement, sensation, pulses, and capillary refill, and compare with the other side. This is CWMS from Mod 5 plus pulses and refill. Escalate right away for a lost distal pulse, new numbness, or severe pain with neurovascular changes. Document the site, severity, and a bilateral comparison.",
  chain: {
    why: ["Swelling inside a closed space squeezes nerves and vessels", "Nerves give the first warning (numbness, tingling)"],
    ask: ["Numbness, tingling, pain that's getting worse"],
    exam: ["Color (pink vs. pale or dusky)", "Warmth (warm vs. cool)", "Movement (wiggle fingers/toes)", "Sensation (light touch)", "Pulses distal to the injury, both sides", "Cap refill <2 seconds"],
    flags: ["Lost or weaker distal pulse", "New numbness or tingling", "Severe pain with NV changes", "Pale or cool extremity, slow refill"]
  },
  table: {
    cols: ["Check", "Expected", "Report"],
    rows: [["Color", "Pink, same as the other side", "Pale, dusky, cyanotic"], ["Warmth", "Warm", "Cool or cold"], ["Movement", "Moves fingers or toes", "Can't move, or new weakness"], ["Sensation", "Normal touch", "Numbness, tingling, new loss"], ["Pulses", "Present and equal (2+)", "Weaker, absent, unequal"], ["Capillary refill", "Under 2 seconds", "Slower than 2 seconds"]]
  },
  facts: [
    "Final review slide: urgent MSK findings are loss of distal pulse, new numbness, and severe pain with neurovascular changes.",
    "In the lecture case, orders were for neurovascular checks every 15 minutes.",
    "Chart example: “R foot pink, warm, moves toes, sensation intact, DP and PT 2+, cap refill <2 s, equal to L.”"
  ],
  beyond: "Compartment syndrome (standard reference): rising pressure inside a muscle compartment after a fracture or under a tight cast. Watch the 6 Ps: pain (out of proportion, worse with passive stretch), pallor, paresthesia, paralysis, pulselessness, and poikilothermia (coolness); some lists use pressure. Pulselessness is a late sign. It's an emergency.",
  qa: [
    ["Name the parts of a neurovascular check.", "Color, warmth, movement, sensation, pulses, capillary refill (compare sides)."],
    ["Client in a new cast reports increasing numbness in the toes. Priority?", "Report now: possible neurovascular compromise."],
    ["Is the earliest warning usually a pulse change or a sensation change?", "Sensation (numbness, tingling, increasing pain); a lost pulse is late."]
  ]
},
{
  id: "msklife", sys: "msk", name: "MSK Lifespan, SDOH, Health Promotion & Terms",
  sub: "Infants, children, older adults, falls, calcium and vitamin D, terminology",
  connect: ["Lifespan", "Health promotion", "Documentation"],
  summary: "Infants: soft bones with more cartilage; screen hips for developmental dysplasia. Children: growth plates are vulnerable; watch posture, gait, scoliosis, and sports injuries. Older adults: bone loss (osteoporosis, fracture risk), muscle loss (sarcopenia), osteoarthritis, less ROM, kyphosis, slower gait, and more falls. Promote safe lifting, warm-ups, protective gear, fall-hazard removal, weight-bearing exercise, and calcium and vitamin D.",
  chain: {
    why: ["Growth plates (epiphyseal plates) are weak points in children", "Aging: bone density and muscle mass decline"],
    ask: ["Falls, home hazards (stairs, lighting, rugs), help with ADLs", "Calcium and vitamin D intake; cost of supplements and equipment", "Work demands and sick leave"],
    exam: ["Infants: hip stability, primitive reflexes, milestones", "Children: posture, gait, coordination, scoliosis", "Older adults: gait, balance, posture (kyphosis), ROM"],
    flags: ["Unequal hip or leg folds in an infant", "Fall with a new inability to bear weight in an older adult"]
  },
  table: {
    cols: ["Term", "Meaning"],
    rows: [["ROM", "Degree of movement possible at a joint"], ["AROM / PROM", "Client moves the joint / examiner moves it"], ["Muscle strength", "Ability of muscles to exert force"], ["Muscle tone", "Resistance of muscles to passive movement"], ["Atrophy / hypertrophy", "Decrease / increase in muscle size"], ["Crepitus", "Crackling or grinding in a joint"], ["Tenderness", "Pain when an area is touched"], ["Edema", "Swelling from fluid"], ["Deformity", "Abnormal shape or structure"], ["Contracture", "Permanent tightening of muscle or tendon that limits movement"], ["Gait / posture", "Walking pattern / body position and alignment"], ["Symmetry", "Similarity between the two sides"]]
  },
  table2: {
    title: "SDOH and the MSK client (slide)",
    cols: ["Determinant", "Effect"],
    rows: [["Economic stability", "Physical, low-wage jobs; little sick leave to recover; cost of equipment and supplements"], ["Education and literacy", "Understanding posture and exercise; following rehab; osteoporosis awareness"], ["Healthcare access", "Delayed care; insurance, cost, transport; limited physical therapy"], ["Living environment", "Safe places to walk; stairs, poor lighting, uneven floors raise fall risk"], ["Social support", "Help with mobility and ADLs; isolation lowers activity; caregiver strain"], ["Food and nutrition", "Food insecurity limits calcium and vitamin D"]]
  },
  facts: [
    "Health promotion (slide): ergonomics (lifting, posture, workstation, assistive equipment), injury prevention (warm up, protective gear, remove fall hazards), exercise (weight-bearing, strength and balance, build up gradually), calcium and vitamin D (dairy, leafy greens, fortified foods, safe sun, supplements if advised).",
    "Loss of height with age is an expected variation (discs flatten); a new fracture after a minor fall is not."
  ],
  beyond: "Infant hip screening uses the Ortolani and Barlow maneuvers (standard reference; the slide just says to evaluate hip stability).",
  qa: [
    ["Decline in muscle mass with aging?", "Sarcopenia."],
    ["Which structure in children is vulnerable to injury?", "The growth (epiphyseal) plate."],
    ["Crackling or grinding in a joint?", "Crepitus."],
    ["Which nutrients support bone health?", "Calcium and vitamin D."]
  ]
}
];

window.EMERGENCIES = [
  ["Rigid, boardlike abdomen", "gi", "Persistent involuntary muscle contraction, often with severe pain", "Peritoneal irritation: escalate now."],
  ["Hematemesis or GI bleed with instability", "gi", "Vomiting blood, melena with low BP and rising HR", "Possible hemorrhage: escalate now, monitor VS."],
  ["Pulsatile abdominal mass", "gi", "Prominent pulsation or pulsatile mass", "Do not palpate or percuss; notify (possible aneurysm)."],
  ["Distention with persistent vomiting", "gi", "Significant distention, vomiting, often tinkling or absent bowel sounds", "Possible obstruction or ileus: report."],
  ["Severe abdominal pain with hypotension", "gi", "Sudden severe pain, low BP", "Possible bleeding or perforation: escalate now."],
  ["Acute stroke signs", "neuro", "Sudden facial droop, slurred speech, arm drift, balance or vision loss", "Activate the stroke alert; note last known well; NPO; glucose; stat CT."],
  ["Falling GCS", "neuro", "Drop of 2 or more, new drowsiness or confusion", "Neuro decline: report immediately."],
  ["Unequal, fixed, or dilated pupil", "neuro", "New sluggish or blown pupil", "Possible increased ICP/herniation: escalate."],
  ["Preeclampsia signs", "neuro", "Pregnant client with new headache, vision changes, or seizure", "Report immediately."],
  ["Acute delirium", "neuro", "Sudden confusion in an older adult", "Not normal aging: look for infection, meds, hypoxia; report."],
  ["Lost distal pulse below an injury", "msk", "Weaker or absent pulse, pale or cool extremity, slow cap refill", "Possible vascular compromise: report now."],
  ["New numbness or severe pain with NV changes", "msk", "Paresthesia, pain out of proportion, worse with passive stretch", "Possible compartment syndrome: report now."],
  ["Fall with deformity and inability to bear weight", "msk", "Older adult after a fall: severe hip pain, limited ROM", "Possible fracture: keep immobile, NV checks, notify."],
  ["Flattened shoulder or displaced olecranon", "msk", "Lost normal contour after an injury", "Possible dislocation: immobilize, NV check, report."]
];

window.LOOKALIKES = [
  ["Guarding vs. rigidity?", "Guarding: muscle tensing, can be voluntary, relaxes with distraction or exhale. Rigidity: persistent, involuntary, boardlike = peritoneal irritation."],
  ["Hypoactive vs. absent bowel sounds?", "Hypoactive: decreased or infrequent. Absent: none after prolonged, systematic listening (about 5 min). Don't chart absent after a quick listen."],
  ["Tympany vs. dullness?", "Tympany: hollow, drumlike, air. Dullness: muffled, thudlike, solid organ, fluid, or stool."],
  ["Melena vs. hematemesis?", "Melena: black, tarry stool. Hematemesis: vomiting blood. Both = GI bleeding."],
  ["CVA (abdomen) vs. CVA (neuro)?", "Costovertebral angle (kidney area, tenderness = infection) vs. cerebral vascular accident (stroke)."],
  ["Aphasia vs. dysarthria?", "Aphasia: language (can't find or understand words). Dysarthria: slurred speech from weak muscles."],
  ["Strength 3/5 vs. 2/5?", "3: moves against gravity only. 2: moves only with gravity eliminated."],
  ["Hemiparesis vs. hemiplegia?", "Hemiparesis: one-sided weakness. Hemiplegia: one-sided paralysis."],
  ["Sympathetic vs. parasympathetic?", "Sympathetic: fight or flight (dilated pupils, ↑HR, slowed digestion). Parasympathetic: rest and digest (constricted pupils, ↓HR, digestion)."],
  ["Delirium vs. dementia?", "Delirium: sudden, fluctuating, usually reversible: report. Dementia: gradual, progressive."],
  ["Negative vs. positive Romberg?", "Negative: slight sway with eyes closed (expected). Positive: loses balance with eyes closed."],
  ["Ligament vs. tendon?", "Ligament: bone to bone, stabilizes the joint. Tendon: muscle to bone, moves the bone."],
  ["Active vs. passive ROM?", "AROM: the client moves the joint. PROM: the examiner moves it."],
  ["Kyphosis vs. lordosis vs. scoliosis?", "Kyphosis: exaggerated thoracic (hunchback) curve. Lordosis: exaggerated lumbar (swayback) curve. Scoliosis: lateral S-shaped curve."],
  ["Abduction vs. adduction?", "Abduction: away from the midline. Adduction: toward (add to) the midline."],
  ["Pronation vs. supination?", "Pronation: palm down. Supination: palm up (holding soup)."],
  ["Atrophy vs. contracture?", "Atrophy: muscle shrinks. Contracture: muscle or tendon permanently shortens and locks the joint."]
];
