/* Content for the Patho Final (GI unit) interactive guide.
   Built from the three Final Exam lecture guides (Upper GI, Lower GI, Liver & Gallbladder),
   their transcripts, and slides. The instructor has not published a Final exam study guide yet,
   so the outline follows the lecture order. Anything tagged beyond:true is standard
   nursing content added to fill a gap the lectures did not cover. */

window.SYSTEMS = [
  { id: "found", name: "GI Foundations", short: "Foundations", icon: "⚖️", weight: "Applied in every GI question", note: "Normal GI function, protective defenses, fluid, electrolytes, acid-base, and blood loss." },
  { id: "upper", name: "Upper GI · Esophagus, Stomach & Duodenum", short: "Upper GI", icon: "🫗", weight: "Diseases of the Upper GI System lecture" },
  { id: "lower", name: "Lower GI · Small Intestine, Colon & Rectum", short: "Lower GI", icon: "🌀", weight: "Diseases of the Lower GI System lecture" },
  { id: "liver", name: "Liver & Gallbladder", short: "Liver & GB", icon: "🟤", weight: "Diseases of the Liver & Gallbladder lecture" }
];

window.EMPHASIS = [
  "For every disorder, ask what normal function has been disrupted, then explain each finding from that. Don't memorize lists.",
  "Nursing interventions, test ordering, and drug details are not tested in this course. Pharm mentions only connect to your Pharm class.",
  "C. diff: wash with soap and water. Alcohol hand sanitizer does not kill the spores.",
  "Know McBurney's point. You won't be tested on the obturator, psoas, or Rovsing signs.",
  "Crohn's vs. UC: focus on location, distribution, and depth.",
  "Cirrhosis: tie every finding to lost liver function, portal hypertension, or both.",
  "Hepatitis A acute infection does not become chronic. Know that it spreads fecal-oral.",
  "Make sure you understand why a blocked bile duct causes dark urine and pale stool."
];

window.CRITICAL_THINKING = [
  ["What normal function does each disorder disrupt?", "Is something moving the wrong direction (GERD)? Is the lining damaged (gastritis, PUD, IBD)? Is something blocked (appendicitis, gallstones, obstruction)? Has the organ lost its job (cirrhosis)? Start every disorder page from its Chain."],
  ["How does the pathophysiology explain the presentation?", "List each finding and ask “why?” Diarrhea: the inflamed lining can't absorb water. Jaundice: bilirubin can't be processed or can't drain. Tachycardia in a GI bleed: lost volume."],
  ["How would you tell similar disorders apart?", "Use the Look-alikes and Sort It games: GER vs. GERD, erosion vs. ulcer, diverticulosis vs. diverticulitis, mechanical obstruction vs. ileus, IBS vs. IBD, Crohn's vs. UC, cystic vs. common bile duct stone, hepatitis A vs. B vs. C."],
  ["What is the worst-case scenario, and what cues warn you?", "Perforation → peritonitis → sepsis (PUD, appendicitis, cholecystitis, diverticulitis, toxic megacolon). Rapid bleeding → hypovolemic shock (ulcer, varices). See the Emergencies page."],
  ["Which client is the priority?", "ABCs first, then acute over chronic and unstable over stable. A rapid bleed with tachycardia and dizziness beats chronic epigastric pain. Practice in Who First?"],
  ["Which labs tell you about injury, flow, or function?", "AST/ALT = cell injury. ALP/GGT and bilirubin = bile flow. Albumin and INR = the liver's ability to make proteins. CBC shows anemia but not the source."]
];

window.STRATEGY = [
  ["Find the location and the mechanism first", "Wrong direction, damaged lining, blocked passage, or lost organ function."],
  ["Depth and location explain complications", "Erosion vs. ulcer, mucosal (UC) vs. transmural (Crohn's), cystic vs. common bile duct."],
  ["Pain that suddenly gets better is not always good news", "In appendicitis or a perforating ulcer, relief can mean the wall has ruptured."],
  ["Early labs can mislead", "Hemoglobin may be normal right after a big bleed; AST/ALT may be normal in advanced cirrhosis."],
  ["When stuck, ask: losing blood, losing fluid, or losing function?", "Then match the systemic effect: anemia, hypovolemia, edema, bleeding, confusion."]
];

/* ---------- Disorders ---------- */
window.DISORDERS = [
/* ===== FOUNDATIONS ===== */
{
  id: "gifn", sys: "found", name: "Normal GI Function & Defenses",
  connect: ["Structure & Function", "Inflammation"],
  summary: "Each GI disorder breaks a normal job. The esophagus moves food down and clears reflux. The stomach digests while protecting its own lining. The small intestine absorbs nutrients and fluid; the colon absorbs water and forms stool. The liver processes, builds, and clears; the gallbladder stores bile.",
  chain: {
    mechanism: ["Barrier fails (LES, mucus, intestinal lining)", "Defenses weaken (fewer prostaglandins, H. pylori)", "Passage blocked (stone, fecalith, adhesion)", "Organ function lost (scarred liver)"],
    change: ["Acid exposure where tissue can't handle it", "Inflammation and tissue injury", "Pressure builds behind a blockage", "Lost synthesis, processing, and clearance"],
    cues: ["Heartburn, epigastric pain", "Diarrhea (lining can't absorb water)", "Cramping, distension, vomiting", "Jaundice, edema, bleeding, confusion"],
    worst: ["Perforation → peritonitis → sepsis", "Hemorrhage → hypovolemic shock", "Organ failure"]
  },
  facts: [
    "Esophagus: peristalsis moves food down. The LES relaxes to let food in, then closes. The diaphragm supports the barrier.",
    "The esophageal lining has much less protection against acid than the stomach. Saliva neutralizes and peristalsis clears small, normal amounts of reflux.",
    "Parietal cells make HCl and intrinsic factor (needed to absorb vitamin B12 in the terminal ileum). Chief cells release pepsinogen, which acid turns into pepsin.",
    "Stomach defenses: mucus with bicarbonate, tight junctions, good blood flow and repair, and prostaglandins (which support the other three).",
    "Key idea: stomach injury is a balance problem. Injury can happen when defenses weaken even if acid is normal.",
    "Small intestine absorbs most nutrients and a large amount of fluid. Colon absorbs more water and electrolytes and forms stool. The normal microbiome protects against harmful organisms.",
    "Three overlapping processes in the lower GI: infection, inflammation, and obstruction.",
    "Organs (viscera) localize pain poorly; the parietal peritoneum localizes it well. Visceral pain can be referred (gallbladder → right shoulder)."
  ],
  qa: [["Why can an NSAID injure the stomach when acid production is normal?", "NSAIDs lower prostaglandins, which support mucus, bicarbonate, and blood flow. With weaker defenses, normal acid and pepsin injure the tissue."]]
},
{
  id: "fluidgi", sys: "found", name: "Fluid, Electrolytes, Acid-Base & Blood Loss",
  connect: ["Fluid Balance", "Electrolytes", "Acid-Base", "Perfusion"],
  summary: "GI disease reaches far beyond the gut. Ask: is the client losing fluid (diarrhea, vomiting, fluid trapped in bowel), losing blood (slow or fast), or losing a function the body needs (albumin, clotting factors, B12)?",
  chain: {
    mechanism: ["Diarrhea: inflamed lining can't absorb water", "Vomiting and fluid trapped in an obstructed bowel", "Bleeding from an ulcer, varix, or inflamed lining", "Low albumin from a failing liver"],
    change: ["Hypovolemia and electrolyte loss", "Metabolic alkalosis from lost stomach acid", "Slow loss → iron deficiency; fast loss → ↓venous return → ↓CO", "Fluid leaks out of vessels (third spacing)"],
    cues: ["Tachycardia, dizziness, dry membranes, ↓urine", "Weakness, fatigue, pallor (anemia)", "Hypotension (late)", "Edema, ascites"],
    worst: ["Hypovolemic shock", "Reduced kidney perfusion → AKI", "Electrolyte-driven dysrhythmias"]
  },
  table: { cols: ["Blood loss", "What happens", "What you see"], rows: [
    ["Slow, repeated", "Iron stores depleted → iron deficiency anemia → less O₂ delivery", "Fatigue, low activity tolerance, pallor"],
    ["Rapid, large", "↓Venous return → ↓stroke volume → ↓cardiac output; tachycardia and vasoconstriction compensate", "Tachycardia, dizziness, fainting, then hypotension and shock"]
  ] },
  tableTitle: "Slow vs. rapid blood loss",
  facts: [
    "C. diff: fluid and electrolyte loss is the immediate concern → hypovolemia → reduced kidney perfusion → electrolyte imbalances.",
    "Obstruction: fluid is trapped in the bowel and moves into the bowel wall, so less stays in circulation. Vomiting adds to the loss.",
    "Vomiting stomach acid (HCl) → metabolic alkalosis.",
    "Hemoglobin may stay near baseline early in an acute bleed, because plasma and RBCs are lost together. It falls only after fluid shifts or IV fluids.",
    "BUN may rise in an upper GI bleed: digested blood adds a nitrogen (protein) load, and reduced kidney perfusion adds to it.",
    "Low albumin (cirrhosis) → fluid leaks out of vessels → edema and ascites.",
    "Two anemia pathways from the stomach: chronic blood loss (iron deficiency) or autoimmune parietal cell loss (no intrinsic factor → B12 deficiency, pernicious anemia)."
  ],
  qa: [["Why might hemoglobin be normal right after a large GI bleed?", "Plasma and RBCs are lost together, so the concentration doesn't fall until fluid shifts happen or fluids are given."],
       ["Why can vomiting from an obstruction cause metabolic alkalosis?", "Loss of stomach acid (HCl)."]]
},

/* ===== UPPER GI ===== */
{
  id: "gerd", sys: "upper", name: "GERD",
  sub: "Gastroesophageal reflux disease",
  connect: ["Inflammation", "Structure & Function"],
  summary: "GER is stomach contents moving back into the esophagus, which happens occasionally and is not a disease. GERD is reflux that causes troublesome, recurrent symptoms or complications. The LES barrier doesn't work well, and the esophageal lining lacks the stomach's protection.",
  chain: {
    mechanism: ["↑Abdominal pressure (pregnancy, abdominal/thoracic adipose)", "Large meals, delayed stomach emptying", "Smoking and drugs that lower LES pressure", "Hiatal hernia weakens the LES/diaphragm barrier"],
    change: ["LES relaxes when it should stay closed", "Reflux is frequent or clearance (saliva, peristalsis) is impaired", "Lining exposed to acid longer → irritation → inflammation → injury"],
    cues: ["Heartburn behind the sternum, worse after eating, bending, lying down", "Regurgitation with a sour taste", "Cough, throat clearing, hoarseness, sore throat", "Dental erosion"],
    worst: ["Esophagitis and stricture", "Barrett's esophagus (cell change → ↑cancer risk)", "Aspiration while lying down"]
  },
  facts: [
    "Worse after a big meal: a distended stomach raises pressure and promotes transient LES relaxation. Lying down removes gravity's help.",
    "Diagnosis: a regular pattern of heartburn and regurgitation is often enough to start a PPI trial.",
    "Red flags needing more testing: difficulty swallowing, unexplained weight loss, signs of bleeding.",
    "Endoscopy shows inflammation or damage (you don't need the grading system). Not everyone with GERD has visible damage; reflux monitoring measures acid exposure.",
    "Barrett's esophagus: long-term reflux changes the type of cells lining the lower esophagus. It raises cancer risk, although most people with Barrett's do not get cancer.",
    "Pharm connection: PPIs don't stop the LES from relaxing or stop reflux. They lower acid, so refluxed contents injure the esophagus less."
  ],
  qa: [["Why do reflux symptoms worsen after a large meal or when lying down? (Discussion Q #1)", "A distended stomach raises pressure and promotes transient LES relaxation; if the barrier is already impaired, contents move up more easily. Lying down removes gravity's help keeping contents in the stomach and clearing the esophagus. Link: distension + barrier function + how long the lining stays exposed."],
       ["What is the difference between GER and GERD?", "GER is reflux itself, which can be normal and occasional. GERD is reflux causing troublesome recurrent symptoms or complications."],
       ["Why doesn't a PPI stop reflux?", "It doesn't change LES function. It lowers acid, so refluxed contents injure the esophagus less."]]
},
{
  id: "esophagitis", sys: "upper", name: "Esophagitis",
  connect: ["Inflammation", "Immunity", "Infection"],
  summary: "Inflammation of the esophageal lining. GERD is the most common cause, but not the only one. Different causes, same result: inflammation and injury to tissue that needs to let food pass smoothly.",
  pathogens: ["Candida (yeast)"],
  chain: {
    mechanism: ["GERD (most common)", "Pill lodges and irritates as it dissolves", "Radiation", "Candida infection (weakened immunity)", "Eosinophilic esophagitis (EoE): abnormal immune response"],
    change: ["Repeated acid exposure → ↑blood flow, swelling, pain-receptor stimulation", "EoE: eosinophils build up and release inflammatory substances", "Injury and healing → scar tissue → stiffer, narrower esophagus"],
    cues: ["Heartburn", "Dysphagia (food feels slow or stuck)", "Odynophagia (painful swallowing)", "Food impaction"],
    worst: ["Stricture that stays narrow after inflammation improves", "Poor intake → nutrition and weight problems"]
  },
  facts: [
    "Dysphagia = difficulty swallowing. Odynophagia = pain with swallowing (food passing over injured tissue).",
    "Swelling interferes with swallowing short-term; scarring causes longer-lasting narrowing.",
    "EoE is often seen in people with food allergies, asthma, or eczema (associated with, not the direct cause of every case).",
    "Diagnosis must find both the injury and its cause: endoscopy shows inflammation, erosions, or narrowing; biopsy tells causes apart.",
    "EoE is confirmed by eosinophils in esophageal tissue on biopsy. A blood eosinophil count alone cannot confirm it.",
    "Barrett's esophagus is linked to long-term reflux, not to every cause of esophagitis.",
    "Treatment must match the cause: reduce acid for reflux injury; address the immune response for EoE."
  ],
  qa: [["What changes in GERD-related esophagitis cause pain, difficulty swallowing, and heartburn? (Discussion Q #2)", "Acid injures the lining and triggers inflammation. Irritated sensory nerves → burning (heartburn). Swallowing over injured tissue hurts (odynophagia). Swelling slows food (dysphagia). Repeated injury and healing → scar tissue that keeps the opening narrow (stricture)."],
       ["Why can't a blood eosinophil count confirm EoE?", "The diagnosis requires eosinophils in the esophageal tissue itself, found on biopsy."]]
},
{
  id: "gastritis", sys: "upper", name: "Gastritis",
  connect: ["Inflammation", "Infection", "Immunity"],
  summary: "Inflammation of the stomach lining. The common thread is disruption of the stomach's protective lining.",
  pathogens: ["Helicobacter pylori"],
  chain: {
    mechanism: ["H. pylori infection (very common)", "Autoimmune attack on parietal cells", "NSAIDs, alcohol, bile", "Severe physiologic stress (shock, critical illness) ↓ mucosal blood flow"],
    change: ["H. pylori lives in mucus and makes urease → less acidic surroundings → survives and inflames", "NSAIDs ↓ prostaglandins → less mucus, bicarbonate, blood flow", "Acid and enzymes injure the weakened lining", "Autoimmune: parietal cell loss → ↓intrinsic factor"],
    cues: ["Burning or gnawing epigastric discomfort", "Nausea, vomiting, early fullness", "Reduced intake, weight loss", "Some have little discomfort despite inflammation"],
    worst: ["Bleeding → iron deficiency anemia", "Autoimmune → pernicious (B12) anemia"]
  },
  facts: [
    "“Stress” here means the physiologic stress of serious illness, not everyday emotional stress.",
    "Gastropathy: tissue damage with relatively little inflammation (NSAIDs, alcohol, bile).",
    "Diagnosis: endoscopy ± biopsy. For H. pylori, a urea breath test or stool antigen test detects active infection. Finding the cause guides treatment.",
    "Pharm connection: PPIs and H2 blockers reduce acid so tissue can heal. Antibiotics are needed to eliminate H. pylori. Acid suppression helps healing but does not remove the cause."
  ],
  table: { cols: ["Pathway 1: chronic blood loss", "Pathway 2: autoimmune parietal cell damage"], rows: [
    ["Damaged lining bleeds slowly over time", "Parietal cells destroyed"],
    ["Ongoing iron loss", "Less intrinsic factor"],
    ["Body can't make enough hemoglobin", "Poor B12 absorption in the terminal ileum"],
    ["Iron deficiency anemia", "Abnormal RBC development → pernicious (B12) anemia"]
  ] },
  tableTitle: "How gastritis leads to anemia (Discussion Q #5)",
  qa: [["How can gastritis lead to vitamin deficiency and anemia? (Discussion Q #5)", "Two pathways: slow blood loss → iron deficiency anemia, or autoimmune parietal cell damage → no intrinsic factor → no B12 absorption → pernicious anemia. Ask: is the person losing blood, or has the disease blocked something needed to make RBCs?"],
       ["How does H. pylori survive in the acidic stomach?", "It lives in the mucus layer and makes urease, which makes its immediate surroundings less acidic."]]
},
{
  id: "pud", sys: "upper", name: "Peptic Ulcer Disease",
  connect: ["Inflammation", "Infection", "Perfusion"],
  summary: "A deeper, localized breakdown of the lining of the stomach or duodenum. The key difference from gastritis or erosion is depth: an ulcer goes through the muscularis mucosae into deeper tissue. An erosion stays in the mucosa.",
  pathogens: ["Helicobacter pylori"],
  chain: {
    mechanism: ["H. pylori → inflammation and disrupted defenses", "NSAIDs → fewer protective prostaglandins", "Smoking interferes with healing"],
    change: ["Acid and pepsin damage the less-protected tissue", "Injury deepens past the muscularis mucosae", "Can reach blood vessels or go through the wall"],
    cues: ["Burning or gnawing epigastric pain, nausea, bloating, fullness", "Gastric: pain worse after eating", "Duodenal: may improve briefly with eating, then return", "May be silent until bleeding"],
    worst: ["Bleeding (reaches a vessel)", "Perforation → peritonitis", "Outlet obstruction → persistent vomiting"]
  },
  facts: [
    "The two major causes are H. pylori and NSAIDs. Spicy food is not a major cause, though some foods may worsen discomfort.",
    "Gastric vs. duodenal pain patterns are classic but not reliable enough to locate the ulcer.",
    "Diagnosis: upper endoscopy visualizes the ulcer; biopsy identifies H. pylori or checks abnormal tissue, especially in a gastric ulcer.",
    "A CBC can show anemia from blood loss but doesn't show where the bleeding came from or confirm an ulcer.",
    "Pain and reduced intake affect nutrition; bleeding and vomiting reduce circulating volume."
  ],
  qa: [["How can NSAIDs cause an ulcer when acid production is normal? (Discussion Q #6)", "Prostaglandins maintain mucus, bicarbonate, and mucosal blood flow. NSAIDs reduce prostaglandins, so even normal acid and pepsin injure the unprotected tissue. The protective side of the balance weakened; acid didn't increase."],
       ["What separates an ulcer from an erosion?", "Depth. An ulcer extends through the muscularis mucosae into deeper tissue."]]
},
{
  id: "ugib", sys: "upper", name: "Upper GI Bleeding",
  sub: "Esophagus, stomach, or duodenum · ulcer vs. variceal",
  connect: ["Perfusion", "Fluid Balance", "Clotting"],
  summary: "Bleeding is a complication of an underlying problem, not a disease by itself. Two questions: where is it coming from, and how much is it affecting the person?",
  chain: {
    mechanism: ["Peptic ulcer (important cause)", "Erosive gastritis, esophagitis", "Tear from forceful vomiting (Mallory-Weiss)", "Ruptured varices from portal hypertension"],
    change: ["Ulcer/erosion damages a vessel and blood enters the GI tract", "Varices: portal pressure enlarges collateral veins until they rupture and bleed heavily"],
    cues: ["Hematemesis: bright red or coffee-ground", "Melena: black, tarry stool", "Weakness, dizziness, tachycardia, fainting", "↑BUN (supporting clue)"],
    worst: ["Rapid loss → hypovolemic shock", "Slow loss → iron deficiency anemia"]
  },
  facts: [
    "Coffee-ground emesis = blood exposed to stomach acid: a stomach source.",
    "Melena comes from upper GI blood broken down as it passes through the intestines.",
    "A very rapid upper GI bleed can produce red or maroon blood from the rectum. Color alone doesn't establish the source.",
    "Endoscopy finds many upper GI sources. CBC assesses blood loss, not the source.",
    "Hemoglobin may be near baseline early because plasma and RBCs are lost together.",
    "Elevated BUN:creatinine ratio is a supporting clue, not proof: digested blood adds a nitrogen load and kidney perfusion falls.",
    "Rapid loss: ↓venous return → ↓stroke volume → ↓cardiac output. Compensation first (tachycardia, vasoconstriction), then hypotension and shock.",
    "Management: treat the source and the blood loss. Endoscopic treatment details are beyond this course."
  ],
  qa: [["Ulcer-related vs. variceal bleeding: how do the mechanisms differ? (Discussion Q #8)", "Ulcer: tissue damage goes deep enough to erode into a blood vessel. Varices: increased portal pressure enlarges veins until they rupture. Both cause serious blood loss, but by completely different mechanisms, which is why finding the source matters."],
       ["What are the early compensatory signs of rapid GI blood loss?", "Tachycardia and vasoconstriction. Later: hypotension and shock."]]
},

/* ===== LOWER GI ===== */
{
  id: "cdiff", sys: "lower", name: "C. diff Infection",
  sub: "Clostridioides difficile",
  connect: ["Infection", "Fluid Balance", "Inflammation"],
  summary: "A bacterium that inflames the colon, and a leading cause of healthcare-associated infections. Usually causes severe diarrhea and can be fatal if untreated. Recent antibiotic use is the biggest risk factor.",
  pathogens: ["Clostridioides difficile (spore-forming)"],
  chain: {
    mechanism: ["Antibiotics (especially broad-spectrum) kill normal flora", "Spores survive on surfaces; fecal-oral spread"],
    change: ["C. diff multiplies and releases toxins", "Toxins damage colon cells and trigger inflammation", "Inflamed colon can't absorb water → fluid stays in the bowel"],
    cues: ["Frequent, watery diarrhea (≥3 unformed stools in 24 h raises concern)", "Cramping, tenderness, fever, nausea, ↓appetite", "Mucus in stool; blood is less common", "Very distinct odor"],
    worst: ["Hypovolemia → ↓kidney perfusion → electrolyte imbalance", "Toxic megacolon", "Perforation, peritonitis, sepsis"]
  },
  facts: [
    "Higher risk: older adults, weakened immunity, previous C. diff, recent healthcare setting.",
    "Colonization vs. infection: some people carry C. diff with no symptoms. A positive test must be read with symptoms.",
    "Stool tests detect the toxins or the organism's ability to produce them.",
    "Pseudomembranes: collections of inflammatory material over the injured lining.",
    "Pharm connection: oral vancomycin is the gold standard. Recurrent disease may need microbiota-based treatment (e.g., fecal transplant), an interesting fact, not expected knowledge.",
    "Instructor emphasis: wash with soap and water. Alcohol-based sanitizer does not kill C. diff spores."
  ],
  qa: [["Why is recent antibiotic use the biggest risk factor?", "Antibiotics kill the normal flora that keep C. diff from overgrowing."],
       ["A client tests positive for C. diff but has formed stools and no symptoms. What does that mean?", "Colonization, not active infection."]]
},
{
  id: "appendicitis", sys: "lower", name: "Appendicitis",
  connect: ["Inflammation", "Infection", "Perfusion"],
  summary: "Inflammation of the appendix, a small pouch at the beginning of the large intestine. Often begins when the opening is blocked. The major concern is progression from inflammation to tissue death to perforation.",
  chain: {
    mechanism: ["Opening blocked (hardened stool, enlarged lymphoid tissue)"],
    change: ["Mucus and contents can't drain → pressure builds", "Bacteria multiply → inflammation", "Swelling and pressure compromise blood flow → ischemia → necrosis"],
    cues: ["Vague periumbilical pain that moves to the RLQ", "RLQ tenderness (McBurney's point)", "Anorexia, nausea, vomiting, fever", "↑WBC and CRP (not specific)"],
    worst: ["Perforation", "Contained leak → abscess", "Spread → peritonitis → sepsis and organ dysfunction"]
  },
  facts: [
    "Pain migrates because early pain is visceral (organs localize poorly). Once inflammation involves the nearby parietal peritoneum, pain localizes to the RLQ.",
    "Not everyone follows the classic pattern: no migrating pain doesn't rule it out, and RLQ pain alone doesn't rule it in.",
    "Diagnosis: history + abdominal findings + labs + imaging (ultrasound or CT).",
    "Know McBurney's point. Obturator, psoas, and Rovsing signs are not tested.",
    "Temporary pain relief does not mean it has resolved; tissue injury may still be progressing, including perforation.",
    "Appendectomy is commonly the definitive treatment; some uncomplicated cases get antibiotics instead."
  ],
  qa: [["Why does appendicitis pain move from the umbilicus to the RLQ?", "Early pain is visceral and poorly localized. Once inflammation reaches the parietal peritoneum, pain localizes to the RLQ."],
       ["A client with appendicitis suddenly says the pain is better. Is this reassuring?", "No. Relief can occur while tissue injury progresses, including after perforation."]]
},
{
  id: "diverticular", sys: "lower", name: "Diverticular Disease",
  sub: "Diverticulosis, diverticulitis, diverticular bleeding",
  connect: ["Inflammation", "Infection", "Structure & Function"],
  summary: "Diverticula are small pouches that push out through weak areas of the colon wall, from bowel-wall changes plus pressure inside the colon. Risk rises with age as tissue integrity declines. Keep three terms separate.",
  chain: {
    mechanism: ["Weak areas in the colon wall", "↑Pressure inside the colon", "Aging tissue"],
    change: ["Pouches form (diverticulosis)", "A pouch inflames, sometimes with a small perforation (diverticulitis)", "A vessel by a pouch bleeds (diverticular bleeding)"],
    cues: ["Diverticulosis: usually none", "Diverticulitis: LLQ pain and tenderness, fever, bowel habit changes", "Bleeding: usually painless rectal bleeding"],
    worst: ["Abscess or larger perforation", "Scarring narrows the bowel", "Fistula to another structure"]
  },
  table: { cols: ["Term", "What it means", "Typical picture"], rows: [
    ["Diverticulosis", "Pouches are present", "Often no symptoms"],
    ["Diverticulitis", "Inflammation in and around a pouch (-itis)", "LLQ pain, fever, bowel changes"],
    ["Diverticular bleeding", "A vessel associated with a pouch bleeds, even without -itis", "Painless rectal bleeding, should not be extensive"]
  ] },
  tableTitle: "Three terms to keep separate",
  facts: [
    "LLQ pain because diverticula commonly develop in the sigmoid colon. It can occur elsewhere, and visceral pain can be referred, so it's a common pattern, not a rule.",
    "CT is commonly used for suspected acute diverticulitis and complications.",
    "Colonoscopy is usually deferred during acute diverticulitis because inflamed tissue risks perforation.",
    "Antibiotics are often used when infection risk or complications are greater, but not always needed in uncomplicated cases."
  ],
  qa: [["Why does diverticulitis typically cause LLQ pain? (Discussion Q #1)", "Diverticula commonly develop in the sigmoid colon, in the left lower abdomen; inflammation there causes localized LLQ pain. It's a common pattern, not a rule."],
       ["Why is colonoscopy usually avoided during acute diverticulitis?", "Risk of perforating the inflamed tissue."]]
},
{
  id: "obstruction", sys: "lower", name: "Intestinal Obstruction & Ileus",
  connect: ["Fluid Balance", "Acid-Base", "Perfusion"],
  summary: "Anything that interferes with forward movement of intestinal contents, partial or complete. Mechanical obstruction is a physical blockage; functional obstruction (ileus) means movement slows or stops without a blockage. Obstruction affects fluid balance and perfusion, not just elimination.",
  chain: {
    mechanism: ["Mechanical: adhesions after surgery, hernia, tumor, stricture", "Ileus: after surgery, electrolyte disturbances, opioids"],
    change: ["Gas, fluid, and contents collect above the blockage; bowel stretches", "Fluid moves into the bowel wall → less in circulation", "Pressure compromises blood flow (strangulation)"],
    cues: ["Distension, nausea, vomiting", "Mechanical: waves of cramping; high-pitched bowel sounds early, decreased later", "Ileus: bowel sounds usually reduced or absent", "Complete: no stool or gas (eventually)"],
    worst: ["Hypovolemia and electrolyte disturbances", "Metabolic alkalosis from vomiting acid", "Ischemia → necrosis → perforation"]
  },
  table: { cols: ["", "Mechanical obstruction", "Functional obstruction (ileus)"], rows: [
    ["Cause", "Physical blockage: adhesions, hernia, tumor, stricture", "No blockage; coordinated movement slows or stops (post-op, electrolytes, opioids)"],
    ["What happens", "Contents collect above the blockage; bowel stretches", "Contents accumulate because muscle activity is impaired"],
    ["Pain", "Bowel contracts against the blockage → waves of cramping", "Less cramping"],
    ["Bowel sounds", "High-pitched early, decreased later", "Usually reduced"]
  ] },
  tableTitle: "Mechanical vs. ileus",
  facts: [
    "Bowel sounds alone can't make the diagnosis.",
    "Early in a complete obstruction, material already beyond the blockage may still pass.",
    "Imaging shows whether, where, and complications; blood tests check electrolytes, dehydration, kidney function, inflammation.",
    "Some cases resolve with decompression: relieving the pressure from trapped gas and fluid.",
    "Pharm connection: opioids reduce intestinal motility, causing constipation and contributing to ileus."
  ],
  qa: [["After abdominal surgery, a client has distension, nausea, and absent bowel sounds. What mechanism? (Discussion Q #2)", "Postoperative ileus. Anesthesia, medications, and handling the bowel slow coordinated movement; gas and fluid accumulate with no physical blockage."],
       ["How can a bowel obstruction cause hypovolemia?", "Fluid is trapped in the bowel and bowel wall, and vomiting adds to the loss, so less stays in circulation."]]
},
{
  id: "ibs", sys: "lower", name: "Irritable Bowel Syndrome",
  connect: ["Structure & Function", "Nervous System"],
  summary: "A problem with gut–brain communication, how the bowel moves, and how it senses stretch. Symptoms happen without visible damage to the lining. The gut–brain connection does not mean symptoms are imaginary.",
  chain: {
    mechanism: ["Altered gut–brain communication", "Microbiome changes, previous intestinal infection", "Individual responses to food or stress"],
    change: ["Bowel moves too fast (IBS-D), too slow (IBS-C), or inconsistently", "Hypersensitive to stretch: gas or distension hurts more"],
    cues: ["Recurring abdominal pain related to bowel movements", "Change in stool frequency or form", "Bloating (very common)"],
    worst: ["No destructive tissue injury, but large effects on work, school, eating, and social life"]
  },
  facts: [
    "Diagnosis: symptom pattern (Rome criteria, seen in ATI, no need to memorize) plus ruling out other causes.",
    "Bleeding, unexplained weight loss, or anemia need further evaluation because IBS does not explain them.",
    "Management is individualized: medications may target constipation, diarrhea, pain, or gut sensitivity."
  ],
  qa: [["A client with presumed IBS develops rectal bleeding and weight loss. What do you do?", "Flag it for further evaluation. IBS does not explain bleeding, weight loss, or anemia."]]
},
{
  id: "crohns", sys: "lower", name: "Crohn's Disease",
  connect: ["Immunity", "Inflammation", "Nutrition"],
  summary: "A chronic, immune-mediated IBD from genetic susceptibility, environmental triggers, the microbiome, and an abnormal immune response. Two features to know: patchy “skip lesions” anywhere from mouth to anus, and transmural depth.",
  chain: {
    mechanism: ["Abnormal immune response in the GI tract", "Fewer (often mutated) Paneth cells"],
    change: ["Lining infiltrated with inflammatory cells → hyperemia, edema", "Ulcers over patchy inflamed areas (skip lesions)", "Transmural inflammation; thickened wall; healing → strictures"],
    cues: ["Diarrhea, cramping, fatigue, weight loss", "Blood may be present, but not everyone has bloody diarrhea", "Malabsorption → nutritional deficiencies (small intestine)", "Joints, eyes, skin inflammation"],
    worst: ["Stricture → obstruction", "Fistula", "Abscess"]
  },
  facts: [
    "Most often the terminal ileum and colon; inflamed areas are separated by relatively normal tissue.",
    "Because inflammation is transmural, Crohn's can cause abscesses and fistulas.",
    "Diagnosis: blood tests (anemia, inflammation), stool tests (inflammation, rule out infection), colonoscopy with biopsy and imaging.",
    "Ongoing inflammation, diarrhea, and poor absorption affect hydration, nutrition, bone health, and electrolytes.",
    "Pharm connection: corticosteroids for flares (not long-term); immune-modifying and biologic drugs for maintenance.",
    "Memory aid: Crohn's “Crawls everywhere, Cuts deep.”"
  ],
  qa: [["Which IBD is more likely to cause a fistula, and why?", "Crohn's, because inflammation is transmural (through the whole wall)."]]
},
{
  id: "uc", sys: "lower", name: "Ulcerative Colitis",
  connect: ["Immunity", "Inflammation", "Fluid Balance"],
  summary: "A chronic, immune-mediated IBD that affects only the colon and rectum. It usually starts in the rectum and extends upward continuously, and involves mainly the mucosa. Bloody diarrhea with mucus is the key symptom.",
  chain: {
    mechanism: ["Interacting genetic, immune, environmental, and microbiome factors"],
    change: ["Inflammation starts at the rectum and spreads up without gaps", "Mucosa becomes inflamed, fragile, and ulcerated", "Impaired fluid absorption"],
    cues: ["Bloody diarrhea with mucus", "Urgency and tenesmus", "Cramping, fatigue", "Flares and remission"],
    worst: ["Toxic megacolon", "Significant hemorrhage, perforation", "↑Colon cancer risk (long-standing)"]
  },
  facts: [
    "Inflamed surface tissue bleeds easily, and impaired absorption makes stools looser.",
    "Tenesmus = a persistent feeling of needing to pass stool even when little is left, from rectal inflammation.",
    "Repeated diarrhea → dehydration and electrolyte loss; bleeding → anemia.",
    "Diagnosis: blood and stool tests; endoscopy with biopsy shows the characteristic pattern.",
    "Pharm connection: corticosteroids for flares; immune-modifying and biologic therapy to maintain remission.",
    "Memory aid: UC “Up from the rectum, Continuous, Upper layer only.”"
  ],
  table: { cols: ["Feature", "Crohn's disease", "Ulcerative colitis"], rows: [
    ["Location", "Any part of the GI tract; often terminal ileum and colon", "Colon and rectum only"],
    ["Distribution", "Patchy: skip lesions", "Continuous, usually starting in the rectum"],
    ["Depth", "Full thickness (transmural)", "Mainly the inner lining (mucosa)"],
    ["Common findings", "Pain, diarrhea, fatigue, weight loss; bleeding may occur", "Bloody diarrhea, urgency, cramping, fatigue"],
    ["Complications", "Strictures, fistulas, abscesses, nutritional deficiencies", "Anemia, dehydration, toxic megacolon, perforation; ↑colon cancer risk"],
    ["Shared", "Chronic inflammation; flares and remission", "Chronic inflammation; flares and remission"]
  ] },
  tableTitle: "Crohn's vs. UC",
  qa: [["Bloody diarrhea with mucus, urgency, and tenesmus; inflammation starts at the rectum and is continuous. Which IBD?", "Ulcerative colitis."]]
},
{
  id: "crc", sys: "lower", name: "Colorectal Cancer (Brief)",
  connect: ["Cellular Regulation"],
  summary: "Covered in detail later in the hematology and cancer module, and the instructor said not to review the ATI colorectal cancer content yet. The link here: long-standing IBD (especially UC) increases colon cancer risk.",
  chain: {
    mechanism: ["Long-standing UC (chronic inflammation)", "Older age; rising rates under 50"],
    change: ["Tumor grows and damages vessels"],
    cues: ["Unexplained blood in the stool", "A persistent, real change in usual bowel habits"],
    worst: ["Missed diagnosis when findings are blamed on hemorrhoids or IBS"]
  },
  facts: [
    "Still more common in older adults, but rates have been rising in adults under 50.",
    "Blood in the stool and a persistent change in bowel habits don't automatically mean cancer, but don't dismiss them, especially just because the person is young."
  ],
  qa: []
},
{
  id: "lgib", sys: "lower", name: "Lower GI Bleeding",
  sub: "Colon or rectum",
  connect: ["Perfusion", "Fluid Balance"],
  summary: "Bleeding from the colon or rectum is a finding that needs an explanation, not a single disease. Whether upper or lower, the systemic effect depends on how much and how fast.",
  chain: {
    mechanism: ["Diverticular bleeding", "Inflammatory or infectious colitis", "Abnormal vessels (hemorrhoids)", "Tumors"],
    change: ["A vessel near a pouch is damaged", "Inflamed or ulcerated mucosa bleeds", "Tumor growth damages vessels"],
    cues: ["Bright red or maroon blood, mixed with stool or separate", "Frank (visible) or occult (found only by testing)"],
    worst: ["Slow → iron deficiency anemia", "Rapid → ↓circulating volume, compromised perfusion"]
  },
  facts: [
    "A rapid upper GI bleed can also produce red blood from the rectum, so appearance guides evaluation but can't establish the source.",
    "Diagnosis considers the bleeding pattern, symptoms, and effects on circulation; blood tests check anemia; colonoscopy or imaging finds the source.",
    "Pharm connection: anticoagulants can make bleeding worse, but they don't explain where the injury is. The source still needs to be found."
  ],
  qa: [["Frank vs. occult bleeding?", "Frank is visible. Occult is not visible and is found only by testing."]]
},

/* ===== LIVER & GALLBLADDER ===== */
{
  id: "liverfn", sys: "liver", name: "Liver Functions & Bilirubin Pathway",
  connect: ["Structure & Function", "Metabolism"],
  summary: "Ask what the liver normally does and what happens when it can't. It processes nutrients, makes bile, processes bilirubin, makes albumin and clotting factors, and processes drugs and ammonia.",
  chain: {
    mechanism: ["Liver cells injured or replaced by scar", "Bile can't drain (blocked duct)"],
    change: ["↓Albumin and clotting factors", "Bilirubin not processed or can't reach the intestine", "Ammonia and drugs not cleared"],
    cues: ["Edema, ascites", "Bleeding, bruising", "Jaundice, dark urine, pale stool", "Confusion"],
    worst: ["Hepatic encephalopathy", "Hemorrhage", "Drug buildup"]
  },
  table: { cols: ["Function", "What it does", "If it fails, expect…"], rows: [
    ["Nutrient metabolism", "Processes nutrients; stores glucose as glycogen; processes fat and protein", "Malnutrition, muscle loss"],
    ["Bile production", "Makes bile to digest and absorb fat", "Poor fat digestion"],
    ["Bilirubin processing", "Processes (doesn't make) bilirubin from RBC breakdown; sends it into bile", "Jaundice, dark urine, pale stool"],
    ["Protein synthesis", "Makes albumin and many clotting factors", "Edema, ascites; bleeding, bruising"],
    ["Substance processing", "Processes medications; converts ammonia to urea", "Drug buildup; confusion (hepatic encephalopathy)"]
  ] },
  tableTitle: "Normal liver functions",
  table2: { title: "Bilirubin pathway", cols: ["Step", "What happens"], rows: [
    ["1", "Old RBCs broken down (mostly spleen): heme → unconjugated bilirubin + iron"],
    ["2", "Unconjugated bilirubin isn't water-soluble, so it travels to the liver bound to albumin"],
    ["3", "Liver conjugates it (enzyme UGT) → conjugated, water-soluble bilirubin"],
    ["4", "Into bile → stored in the gallbladder → released into the intestine"],
    ["5", "Gut bacteria → urobilinogen; most becomes stercobilin (brown stool); a little is excreted in urine"]
  ] },
  facts: [
    "Blocked bile duct: conjugated bilirubin backs up into blood → jaundice. It's water-soluble, so kidneys filter it → dark, tea-colored urine. Less reaches the gut → less stercobilin → pale, clay-colored stool.",
    "Normally, bilirubin is not found in urine."
  ],
  beyond: "The recording skips the bilirubin pathway slides, so the step-by-step pathway is standard A&P matched to the slide diagram. The “dark urine, pale stool” explanation is from the lecture.",
  qa: [["Why does a blocked bile duct cause dark urine and pale stool?", "Conjugated bilirubin can't reach the intestine and backs up into blood (jaundice). It's water-soluble, so it spills into urine (dark). Less reaches the gut, so less stercobilin colors the stool (pale)."]]
},
{
  id: "gallstones", sys: "liver", name: "Cholelithiasis (Gallstones)",
  connect: ["Structure & Function", "Inflammation"],
  summary: "Cholelithiasis means gallstones are present. Many people never know, because nothing is blocked. Location matters: a stone in the gallbladder may cause no problem, while a stone in a duct blocks bile flow.",
  chain: {
    mechanism: ["More cholesterol than bile can keep dissolved", "Stasis: gallbladder doesn't empty well", "Risk: ↑age, rapid weight loss, pregnancy, metabolic conditions"],
    change: ["Crystals → stone", "Cystic duct blocked: gallbladder contracts against it → pressure → pain", "Common bile duct blocked: bilirubin backs up"],
    cues: ["Often none", "RUQ or epigastric pain → right shoulder/back; worse after fatty meals", "Nausea, vomiting", "CBD stone: jaundice, dark urine, pale stool"],
    worst: ["Cholecystitis (cystic duct)", "Bile duct infection (CBD)", "Gallstone pancreatitis (near the pancreatic duct)"]
  },
  facts: [
    "Most gallstones are mainly cholesterol.",
    "Worse after a fatty meal: fat signals the gallbladder to contract; contracting against a blocked outlet raises pressure and pain.",
    "A stone blocking only the cystic duct usually does not cause jaundice: liver bile still reaches the intestine.",
    "Ultrasound is usually the first imaging test. Elevated bilirubin or ALP suggests a bile duct problem.",
    "No symptoms → often no treatment. Symptomatic stones → cholecystectomy is common.",
    "After cholecystectomy: the liver still makes bile, but nothing stores it; a rush of bile after a fatty meal can cause urgent diarrhea, so a lower-fat diet is encouraged. (The lecturer called this “dumping”; “dumping syndrome” on an exam usually means the gastric version.)"
  ],
  qa: [["Why does a cystic duct stone usually not cause jaundice, while a common bile duct stone does?", "With a cystic duct stone, liver bile still reaches the intestine through the common bile duct. A CBD stone blocks it, so bilirubin backs up into the blood."],
       ["Why does gallbladder pain show up in the right shoulder?", "Referred pain: visceral pain perceived elsewhere because of shared nerve pathways."]]
},
{
  id: "cholecystitis", sys: "liver", name: "Cholecystitis",
  connect: ["Inflammation", "Infection", "Perfusion"],
  summary: "Inflammation of the gallbladder. About 90% are caused by a stone blocking the cystic duct (calculous). Acalculous cholecystitis (without a stone) happens mainly in critically ill people.",
  chain: {
    mechanism: ["Stone blocks the cystic duct (≈90%)", "Acalculous: critical illness"],
    change: ["Bile trapped → pressure rises → wall stretches → inflammation", "Swelling impairs blood flow to the wall → possible necrosis", "Bacterial infection can develop"],
    cues: ["Persistent RUQ pain and tenderness (longer than biliary pain)", "Pain referred to right shoulder or back", "Nausea, vomiting, fever", "↑WBC/CRP; bilirubin often normal"],
    worst: ["Necrosis → perforation → peritonitis"]
  },
  facts: [
    "Pain is more persistent than a brief episode of biliary pain because the wall itself is inflamed.",
    "Ultrasound: gallstones, thickened wall, fluid around the gallbladder.",
    "Bilirubin may be normal in uncomplicated cholecystitis; a significant rise suggests obstruction beyond the cystic duct (common bile duct).",
    "Repeated episodes → chronic inflammation and scarring.",
    "Usually gallbladder removal; antibiotics if infection is suspected.",
    "Same pattern as appendicitis: obstruction → pressure → inflammation → compromised perfusion → tissue death → rupture → peritonitis."
  ],
  qa: [["What is acalculous cholecystitis, and who gets it?", "Gallbladder inflammation without a stone (a- = without, calculus = stone), mainly in critically ill people."]]
},
{
  id: "cirrhosis", sys: "liver", name: "Cirrhosis",
  star: true, starText: "★ Instructor emphasis: the two mechanisms",
  connect: ["Perfusion", "Clotting", "Fluid Balance", "Cognition"],
  summary: "Healthy liver tissue is permanently replaced by scar after long-term damage and inflammation. Tie every finding to (1) loss of normal liver function, (2) portal hypertension, or both.",
  chain: {
    mechanism: ["Long-term alcohol-associated liver disease", "Chronic hepatitis B or C", "MASLD (metabolic dysfunction-associated steatotic liver disease)", "Autoimmune, inherited, chronic bile duct disease"],
    change: ["Repeated injury and repair → fibrosis and regenerative nodules", "Scarring ↑ resistance to portal flow → portal hypertension", "Fewer working cells → ↓albumin, clotting factors, bilirubin and ammonia clearance"],
    cues: ["Early: fatigue, ↓appetite, weakness", "Edema, ascites", "Jaundice", "Bleeding, bruising", "Splenomegaly, varices", "Confusion (hepatic encephalopathy)"],
    worst: ["Variceal hemorrhage with poor clotting", "Hepatic encephalopathy", "Liver failure"]
  },
  table: { cols: ["Loss of liver function", "Portal hypertension"], rows: [
    ["↓Albumin → edema, ascites", "Fluid pushed out of circulation → ascites"],
    ["↓Clotting factors → bleeding, bruising", "Splenomegaly → spleen holds platelets → ↓platelets"],
    ["↓Bilirubin processing → jaundice", "Collateral veins enlarge → varices"],
    ["↓Ammonia clearance → hepatic encephalopathy", ""]
  ] },
  tableTitle: "The two mechanisms",
  facts: [
    "The two often occur together. Ascites: portal hypertension pushes fluid out, and low albumin makes it worse.",
    "Stages: compensated (the body works around damage) → decompensated (complications appear) → end stage. You don't need to stage clients.",
    "AST/ALT rise with cell injury but don't show function; in advanced cirrhosis they may be only mildly elevated or even normal.",
    "Albumin and INR show the liver's ability to make proteins; bilirubin shows processing and clearance.",
    "Complications can occur even when some liver labs don't look dramatically abnormal.",
    "Management: treat the cause and complications; comfort and quality of life; some need a transplant."
  ],
  qa: [["Why is a person with cirrhosis at risk for bleeding? (Discussion Q #3)", "Can the body clot? The liver makes fewer clotting factors, and portal hypertension enlarges the spleen, which holds platelets. Is there a vessel likely to rupture? Portal hypertension creates varices. If one ruptures, bleeding is heavy and the body can't clot well."],
       ["Name the two mechanisms of cirrhosis and one finding from each.", "Loss of function (low albumin → edema; low clotting factors → bleeding; ammonia → encephalopathy) and portal hypertension (ascites, splenomegaly, varices)."],
       ["Why can a client with advanced cirrhosis have normal AST/ALT?", "These enzymes reflect active cell injury, not function. With few working cells left, there may be little enzyme to release."]]
},
{
  id: "hepa", sys: "liver", name: "Hepatitis A",
  connect: ["Infection", "Inflammation"],
  summary: "Spread by the fecal-oral route. Acute only: it does NOT become chronic. Most people recover; a vaccine exists.",
  pathogens: ["Hepatitis A virus"],
  chain: {
    mechanism: ["Contaminated food or water, or close contact (fecal-oral)"],
    change: ["Virus reaches the liver → inflammation", "Disrupts liver function and bilirubin handling"],
    cues: ["Fatigue, nausea, ↓appetite, RUQ discomfort", "± jaundice, dark urine, pale stools", "Young children may have few or no symptoms"],
    worst: ["Severe injury in people with existing liver disease"]
  },
  facts: [
    "Instructor emphasis: hepatitis A acute infection does not become chronic.",
    "Diagnosis: ↑AST/ALT and antibodies showing recent hepatitis A infection.",
    "Treatment is supportive while the liver recovers.",
    "Memory aid: A = Alimentary (fecal-oral), Acute only."
  ],
  qa: [["Which hepatitis is spread by the fecal-oral route and never becomes chronic?", "Hepatitis A."]]
},
{
  id: "hepb", sys: "liver", name: "Hepatitis B",
  connect: ["Infection", "Immunity", "Inflammation"],
  summary: "Spread by infected blood and certain body fluids: sexual contact, shared injection equipment, needle sticks, and perinatally. Highly infectious. The immune response against infected liver cells causes the injury. Infants are much more likely than adults to become chronic.",
  pathogens: ["Hepatitis B virus"],
  chain: {
    mechanism: ["Blood and body fluids; sexual; perinatal"],
    change: ["Virus infects liver cells; the immune response causes inflammation and injury", "Some clear it; others become chronic", "Chronic: inflammation → fibrosis → cirrhosis"],
    cues: ["Like other hepatitis: fatigue, nausea, RUQ discomfort, ± jaundice", "Many have no obvious symptoms, especially when chronic"],
    worst: ["Cirrhosis → liver failure → liver cancer", "Lifelong disease when infected as an infant"]
  },
  facts: [
    "A tiny amount of blood is enough, and the virus stays infectious on surfaces for at least 7 days, even when blood isn't visible. Health care workers should be vaccinated.",
    "The younger the person at infection, the more likely lifelong disease, cirrhosis, liver failure, cancer, or transplant. Adults can also become chronic.",
    "HBsAg (surface antigen) = current infection. Anti-HBs (surface antibody) = immunity from vaccination or recovery.",
    "Vaccine is very well tolerated. The instructor noted a worrying drop in parents choosing it for newborns; nurses play a key role in education. Adults without immunity (titer) complete the series.",
    "Antivirals can suppress chronic infection and reduce progression.",
    "HBIG for infants born to a person with active hepatitis B is extra information, not tested.",
    "Memory aid: B = Blood and Body fluids, Babies become chronic."
  ],
  qa: [["Why is the hepatitis B vaccine recommended for newborns?", "Infants infected with HBV are much more likely to develop chronic infection, which leads to cirrhosis, liver failure, and liver cancer."]]
},
{
  id: "hepc", sys: "liver", name: "Hepatitis C",
  connect: ["Infection", "Inflammation"],
  summary: "Spread primarily by blood. More than half of infections become chronic, and it's the virus most associated with long-term chronic liver disease. Often silent for years. No vaccine, but direct-acting antivirals cure most infections.",
  pathogens: ["Hepatitis C virus"],
  chain: {
    mechanism: ["Shared injection equipment", "Inadequately sterilized medical equipment", "Pregnant person → infant"],
    change: ["Virus stays in the liver → ongoing inflammation", "Repeated inflammation and healing → fibrosis → cirrhosis"],
    cues: ["Often none for years", "Nonspecific fatigue, abdominal discomfort"],
    worst: ["Cirrhosis, portal hypertension, ascites", "Liver cancer"]
  },
  facts: [
    "No jaundice or pain does not mean the liver is unaffected.",
    "Antibody test first: positive = exposure at some point, not necessarily current infection. HCV RNA confirms current infection.",
    "Memory aid: C = Chronic, Curable, Can't vaccinate."
  ],
  table: { cols: ["Feature", "Hepatitis A", "Hepatitis B", "Hepatitis C"], rows: [
    ["Transmission", "Fecal-oral", "Blood and certain body fluids; sexual, perinatal", "Primarily blood"],
    ["Course", "Acute only; never chronic", "Acute or chronic (infants at highest risk)", "Often chronic (more than half)"],
    ["Vaccine?", "Yes", "Yes", "No"],
    ["Treatment", "Supportive care", "Antivirals suppress chronic infection", "Antivirals cure most infections"],
    ["Key test point", "Antibodies to recent infection", "HBsAg = current; anti-HBs = immune", "Antibody = exposure; RNA = current"]
  ] },
  tableTitle: "Hepatitis A vs. B vs. C",
  qa: [["A client's hepatitis C antibody is positive. Do they have hepatitis C now?", "Not necessarily. The antibody shows exposure; an HCV RNA test confirms current infection."],
       ["Which hepatitis has no vaccine but is usually curable?", "Hepatitis C."]]
},
{
  id: "liverlabs", sys: "liver", name: "Liver & Biliary Labs",
  connect: ["Labs"],
  summary: "For each lab, ask: is it telling me about liver cell injury, bile flow, or the liver's ability to make proteins? No single lab tells the whole story; connect labs to what you see.",
  chain: {
    mechanism: ["Cells injured (hepatitis)", "Bile flow blocked (duct stone)", "Function lost (advanced cirrhosis)"],
    change: ["Enzymes leak out (AST/ALT)", "ALP, GGT, bilirubin rise", "Albumin falls, INR rises, platelets fall"],
    cues: ["Jaundice, dark urine, pale stool", "Edema, ascites", "Bruising, bleeding"],
    worst: ["Missing failing function because AST/ALT look normal"]
  },
  table: { cols: ["Lab", "What it assesses", "Patho connection"], rows: [
    ["AST and ALT", "Liver cell injury", "Rise when injured cells release them (hepatitis). They don't measure function; unlike GFR for kidneys, they can't show how well the liver works."],
    ["ALP and GGT", "Bile flow and biliary injury", "Rise when bile flow is impaired (stone in a duct). ALP also comes from bone; GGT helps show whether a high ALP is liver/biliary."],
    ["Bilirubin", "Processing and excretion of bilirubin", "↑ → jaundice; blocked flow → dark urine, pale stool"],
    ["Albumin", "Protein synthesis", "↓ → fluid leaks out (third spacing) → edema, ascites. Can be low for other reasons (kidney)."],
    ["PT / INR", "Clotting factor synthesis", "Prolonged PT/↑INR → ↓clotting factors. Also affected by some drugs and vitamin K deficiency."],
    ["Platelets", "Cells involved in clotting", "↓ with portal hypertension (enlarged spleen holds them)"]
  ] },
  tableTitle: "Liver and biliary labs",
  facts: [
    "Hepatitis: high AST/ALT (cells injured right now).",
    "Advanced cirrhosis: normal or mildly high AST/ALT but low albumin and high INR: the liver can't make proteins.",
    "PT/INR best reflects the liver's ability to make clotting factors."
  ],
  qa: [["Which lab best reflects the liver's ability to make clotting factors?", "PT/INR."],
       ["Why is a cirrhotic client's platelet count low?", "Portal hypertension enlarges the spleen, which holds more platelets."]]
}
];

window.EMERGENCIES = [
  ["Perforated peptic ulcer", "upper", "Sudden severe abdominal pain, rigid tender abdomen, signs of peritonitis", "Contents leak into the abdominal cavity → peritonitis → sepsis"],
  ["Rapid upper GI bleed", "upper", "Hematemesis (red or coffee-ground), melena, tachycardia, dizziness, fainting", "↓Venous return → ↓CO → hypovolemic shock"],
  ["Ruptured esophageal varices", "liver", "Cirrhosis history, sudden large-volume hematemesis, hypotension", "Heavy bleeding from high-pressure veins plus poor clotting"],
  ["Perforated appendix", "lower", "RLQ pain that suddenly “gets better,” then fever, rigid abdomen", "Peritonitis → sepsis and organ dysfunction"],
  ["Toxic megacolon", "lower", "C. diff or UC with marked distension, worsening pain, fever, tachycardia", "Dilated colon stops working → perforation, sepsis"],
  ["Severe C. diff", "lower", "Profuse watery diarrhea, ↓urine output, tachycardia", "Hypovolemia → ↓kidney perfusion → electrolyte imbalance"],
  ["Strangulated bowel obstruction", "lower", "Distension, vomiting, cramping that becomes constant, fever", "Ischemia → necrosis → perforation; hypovolemia"],
  ["Gallbladder necrosis / perforation", "liver", "Persistent RUQ pain, fever, rising WBC, then peritonitis", "Bile or infected material leaks → peritonitis"],
  ["Hepatic encephalopathy", "liver", "Cirrhosis with new confusion, sleep or behavior change", "Ammonia isn't cleared and reaches the brain"],
  ["Aspiration from reflux", "upper", "GERD client coughing or short of breath after lying down or sleeping", "Refluxed contents enter the lungs"]
];

window.LOOKALIKES = [
  ["GER vs. GERD", "GER: reflux itself, occasional, normal. GERD: reflux causing troublesome, recurrent symptoms or complications."],
  ["Dysphagia vs. odynophagia", "Dysphagia: difficulty swallowing (food feels slow or stuck). Odynophagia: pain with swallowing."],
  ["Gastritis vs. PUD", "Gastritis: inflammation of the lining. PUD: a deeper, localized breakdown through the muscularis mucosae."],
  ["Erosion vs. ulcer", "Erosion stays in the mucosa. An ulcer extends deeper and can reach vessels or go through the wall."],
  ["Gastric vs. duodenal ulcer pain", "Gastric: worse after eating. Duodenal: may improve briefly with eating, then return. Not reliable enough to locate the ulcer."],
  ["Ulcer bleed vs. variceal bleed", "Ulcer: injury erodes into a vessel. Varices: portal hypertension enlarges veins until they rupture."],
  ["Hematemesis vs. melena", "Hematemesis: vomiting blood (red or coffee-ground). Melena: black, tarry stool from upper GI blood broken down in the intestines."],
  ["Iron deficiency vs. pernicious anemia from gastritis", "Iron deficiency: slow blood loss. Pernicious: autoimmune parietal cell loss → no intrinsic factor → no B12 absorption."],
  ["C. diff colonization vs. infection", "Colonized: positive test, no symptoms. Infection: watery diarrhea (≥3 unformed/24 h), cramping, fever."],
  ["Appendicitis vs. diverticulitis", "Appendicitis: periumbilical pain → RLQ, often younger. Diverticulitis: LLQ (sigmoid), older adults."],
  ["Diverticulosis vs. diverticulitis vs. diverticular bleeding", "Pouches present (usually silent) vs. inflamed pouch (LLQ pain, fever) vs. painless rectal bleeding from a vessel."],
  ["Mechanical obstruction vs. ileus", "Mechanical: physical blockage, cramping waves, high-pitched sounds early. Ileus: no blockage, motility stops, sounds reduced or absent."],
  ["IBS vs. IBD", "IBS: gut–brain/motility/sensitivity, no tissue damage; bleeding isn't IBS. IBD: immune inflammation damages tissue; bleeding, weight loss possible."],
  ["Crohn's vs. UC", "Crohn's: anywhere, skip lesions, transmural → fistulas, strictures, abscesses. UC: colon/rectum only, continuous from the rectum, mucosa → bloody diarrhea, tenesmus."],
  ["Cystic duct vs. common bile duct stone", "Cystic duct: pain, can lead to cholecystitis, usually no jaundice. CBD: jaundice, dark urine, pale stool, ↑bilirubin and ALP."],
  ["Biliary pain vs. cholecystitis", "Biliary pain: brief, after fatty meals. Cholecystitis: persistent RUQ pain, fever, ↑WBC/CRP (the wall is inflamed)."],
  ["Hepatitis A vs. B vs. C", "A: fecal-oral, acute only, vaccine. B: blood/fluids, infants become chronic, vaccine. C: blood, often chronic, no vaccine, curable."],
  ["Hepatitis (acute) vs. advanced cirrhosis labs", "Hepatitis: high AST/ALT. Cirrhosis: AST/ALT may be normal, but low albumin, high INR, low platelets."]
];
