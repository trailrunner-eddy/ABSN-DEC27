/* Hematology & Neoplasia unit for the Patho Final guide (loads after data-endo.js).
   Built from the five hematology Final lectures (Diseases of Red Blood Cells, Sickle Cell Anemia,
   Diseases of Platelets, Diseases of White Blood Cells, Introduction to Neoplasia and Cancer),
   their transcripts and slides, and the instructor's 340 Final Exam Study Guide.
   Everything is appended so saved progress keeps its place. */
(function () {
  function add(k) { var a = window[k] = window[k] || []; a.push.apply(a, [].slice.call(arguments, 1)); }
  add("SYSTEMS",
    { id: "rbc", name: "Red Blood Cells & Anemias", short: "RBCs & Anemia", icon: "🩸", weight: "Diseases of Red Blood Cells lecture" },
    { id: "sickle", name: "Sickle Cell Disease", short: "Sickle Cell", icon: "🌙", weight: "Sickle Cell Anemia lecture (Prof. Forbes)" },
    { id: "plt", name: "Platelet Disorders", short: "Platelets", icon: "🩹", weight: "Diseases of Platelets lecture" },
    { id: "wbc", name: "WBC Cancers: Leukemia, Lymphoma, MDS", short: "Leukemia & Lymphoma", icon: "🧫", weight: "Diseases of White Blood Cells lecture" },
    { id: "neo", name: "Neoplasia & Cancer", short: "Neoplasia", icon: "🎗️", weight: "Introduction to Neoplasia and Cancer lecture" }
  );

  add("EMPHASIS",
    "Hematology: for every disorder ask what started the problem, what changed about the cells, and how that change explains the findings.",
    "Many blood disorders share fatigue and shortness of breath. The CBC pattern and the history tell them apart.",
    "Anemia: hemoglobin tells you how severe; MCV (cell size) points to the cause. Small = iron; big = B12 or folate; normal = acute bleeding or hemolysis.",
    "Numbness, tingling, or trouble walking points to B12 deficiency, not folate, and can appear before the anemia does.",
    "Fever in a client with sickle cell disease is a medical emergency (the spleen doesn't work).",
    "Sickle cell pain is whatever the client says it is. No lab or vital sign confirms or rules out a pain crisis.",
    "Platelets: ask how many there are AND how well they work. A normal count can still bleed.",
    "A high total WBC in leukemia can be mostly abnormal cells. It doesn't tell you how many working neutrophils there are.",
    "Fever may be the only sign of infection in neutropenia, because there aren't enough neutrophils to make pus or redness.",
    "Grade = how abnormal the cells look. Stage = how far the cancer has spread. A tumor can be high grade and still localized."
  );

  add("CRITICAL_THINKING",
    ["Hematology: read the CBC as a whole", "Start with hemoglobin (anemia?), then MCV (size → cause), then platelets and WBC. If several lines are low at once, think of the bone marrow (leukemia, MDS, treatment). If only one is low, look for a cause aimed at that cell (iron loss, ITP, B12)."],
    ["Cancer: cells, location, extent", "Ask what the abnormal cells are doing, what normal function the mass blocks or replaces where it sits, and how far it has spread. The local effect explains the symptoms; the spread explains the stage."]
  );

  add("STRATEGY",
    ["Blood counts: what's missing explains the symptom", "Low Hgb → fatigue, pallor, dyspnea. Low platelets → petechiae, bruising, bleeding. Low neutrophils → infection, often with fever as the only sign."],
    ["Look for the history clue", "Heavy periods or GI bleed → iron. Vegan diet, PPI, metformin, bariatric surgery, pernicious anemia → B12. RA or chronic infection → anemia of chronic disease. Heparin + falling platelets → HIT."]
  );

  add("DISORDERS",
  /* ===== RED BLOOD CELLS ===== */
  {
    id: "hemefn", sys: "rbc", name: "Blood Cells, the CBC & Hematopoiesis",
    connect: ["Oxygen Transport", "Immunity", "Hemostasis"],
    summary: "All blood cells start as stem cells in the bone marrow. The myeloid line makes red blood cells, megakaryocytes (which shed platelets), and neutrophils and monocytes. The lymphoid line makes B cells, T cells, and natural killer cells. Red cells carry oxygen on hemoglobin, white cells defend against infection, and platelets start clots. The CBC counts each line, so a change in production or destruction shows up there.",
    chain: {
      mechanism: ["Stem cells in the marrow → myeloid or lymphoid line", "Kidneys release erythropoietin (EPO) when oxygen delivery falls", "Liver makes thrombopoietin, which drives platelet production"],
      change: ["Too few cells made (marrow failure, missing iron/B12/folate, low EPO)", "Cells destroyed or lost faster than replaced (hemolysis, bleeding)", "Cells made that don't work (leukemia, MDS)"],
      cues: ["Low Hgb/Hct → fatigue, pallor, dyspnea, tachycardia", "Low platelets → petechiae, bruising, bleeding", "Low neutrophils → infections"],
      worst: ["Pancytopenia: all three lines low at once", "Hypoxia from severe anemia; hemorrhage; sepsis"]
    },
    table: { cols: ["CBC value", "What it tells you", "Normal"], rows: [
      ["Hemoglobin (Hgb)", "How much oxygen-carrying protein is in the blood; how severe an anemia is", "female 12–16, male 14–18 g/dL"],
      ["Hematocrit (Hct)", "Percent of blood volume made of red cells", "female 37–47%, male 42–52%"],
      ["MCV", "Average red cell size: small, normal, or large. Points to the cause of an anemia", "80–100 fL"],
      ["Reticulocyte count", "Young red cells: is the marrow responding?", "0.5–2.0%"],
      ["WBC with differential", "Total white cells and which kinds; immature cells (blasts) are abnormal", "5,000–10,000/mm³"],
      ["Platelet count", "How many platelets (not how well they work)", "150,000–400,000/mm³"]
    ] },
    tableTitle: "Reading a CBC",
    facts: [
      "Hemoglobin binds O₂ in the lungs and releases it in the tissues; it also helps carry CO₂ back to the lungs.",
      "EPO comes from the kidneys. In chronic kidney disease, low EPO helps explain anemia.",
      "The marrow needs iron to make hemoglobin, and B12 and folate to make DNA so developing red cells can divide.",
      "Thrombopoietin comes from the liver. In cirrhosis, low thrombopoietin is one reason platelets fall.",
      "Low Hgb = anemia. Low platelets = thrombocytopenia. Low neutrophils = neutropenia. All three low = pancytopenia."
    ],
    qa: [["Which organ makes erythropoietin, and what does it do?", "The kidneys. It signals the bone marrow to make more red blood cells."],
         ["Why can one marrow disorder lower Hgb, platelets, and neutrophils together?", "All three lines are made in the same marrow. Anything that crowds out or damages the marrow can lower every line (pancytopenia)."],
         ["What does a high reticulocyte count tell you?", "The marrow is releasing more young red cells to keep up with loss or destruction (bleeding or hemolysis)."]]
  },
  {
    id: "anemia", sys: "rbc", name: "Anemia: Causes & Classification", star: true, starText: "MCV points to the cause",
    connect: ["Oxygen Transport", "Perfusion"],
    summary: "Anemia means hemoglobin below the normal range. It happens three ways: the marrow makes too few red cells, the cells are destroyed too fast (hemolysis), or they are lost (bleeding). Hemoglobin tells you how severe it is. MCV, the average cell size, points toward the cause.",
    chain: {
      mechanism: ["Decreased production (iron, B12, folate deficiency; low EPO; inflammation; marrow failure)", "Increased destruction (hemolysis, sickle cell)", "Blood loss (acute or slow chronic)"],
      change: ["Less hemoglobin → less oxygen-carrying capacity", "Heart and lungs work harder to deliver oxygen"],
      cues: ["Fatigue, weakness, activity intolerance", "Dyspnea on exertion, pallor, tachycardia, dizziness", "Clues to cause: jaundice (hemolysis), neuro changes (B12), melena or heavy periods (iron)"],
      worst: ["Tissue hypoxia: angina, heart strain, syncope", "Hypovolemic shock if the cause is acute bleeding"]
    },
    table: { cols: ["MCV", "Cell size", "Think of"], rows: [
      ["Low (<80 fL)", "Microcytic, often pale (hypochromic)", "Iron deficiency (most common); sometimes anemia of chronic inflammation; thalassemia"],
      ["Normal (80–100 fL)", "Normocytic", "Acute blood loss (cells are normal, there are just fewer); hemolysis; anemia of chronic disease"],
      ["High (>100 fL)", "Macrocytic", "B12 or folate deficiency (DNA can't be made, cells grow but don't divide); liver disease; some medications"]
    ] },
    tableTitle: "Classify by MCV",
    facts: [
      "Hemoglobin = severity. MCV = clue to the cause. Put both together with the history.",
      "Acute bleeding is normocytic because nothing is wrong with how the cells are made. You're just losing them.",
      "Tachycardia is compensation: the heart pumps the smaller amount of hemoglobin around faster.",
      "Fatigue and shortness of breath appear in almost every anemia, so they don't tell you which one."
    ],
    qa: [["Why does B12 deficiency make cells big and iron deficiency make them small?", "Iron builds hemoglobin; without it, cells fill with less hemoglobin and come out small and pale. B12 and folate build DNA; without them, cells keep growing but can't divide on schedule, so they come out large."],
         ["A client lost blood in a car crash yesterday. What MCV do you expect?", "Normal (normocytic). The cells are normal; there are just fewer of them."]]
  },
  {
    id: "ida", sys: "rbc", name: "Iron Deficiency Anemia", star: true, starText: "Most common anemia",
    connect: ["Oxygen Transport", "Blood Loss", "Nutrition"],
    summary: "Iron stores run out, so the marrow can't make enough hemoglobin. Cells come out small (microcytic) and pale (hypochromic). Causes are too little iron in, too little absorbed, or iron lost through bleeding. Every time blood is lost, the iron inside those red cells goes with it.",
    chain: {
      mechanism: ["Chronic blood loss: heavy menstrual bleeding, slow GI bleed (ulcer, colon cancer)", "Low dietary intake", "Poor absorption (celiac disease, bariatric surgery)"],
      change: ["Iron stores (ferritin) deplete", "Less hemoglobin per cell → small, pale cells", "Less oxygen carried to tissues"],
      cues: ["Fatigue, weakness, dyspnea with activity", "Pallor; tachycardia", "Labs: ↓Hgb, ↓MCV, ↓ferritin, ↓serum iron, ↑TIBC"],
      worst: ["Missing the cause: an older adult with new IDA may have a bleeding colon cancer", "Severe anemia → heart strain"]
    },
    table: { cols: ["Lab", "Iron deficiency", "Why"], rows: [
      ["Hemoglobin", "↓", "Not enough iron to build it"],
      ["MCV", "↓ (microcytic)", "Cells have less hemoglobin and come out smaller"],
      ["Ferritin", "↓", "Ferritin = stored iron; stores are empty"],
      ["Serum iron", "↓", "Less iron circulating"],
      ["TIBC", "↑", "The liver makes more transferrin to grab every bit of iron it can find"]
    ] },
    tableTitle: "Iron studies pattern",
    facts: [
      "Ferritin reflects stored iron. Low ferritin is the most specific sign that iron stores are depleted.",
      "TIBC rises in iron deficiency: the instructor compared it to a feedback loop, where the liver makes more transferrin to catch scarce iron.",
      "Treatment has two parts: replace iron (oral or IV) AND fix the cause (stop the bleeding).",
      "Iron deficiency can also cause a reactive (secondary) thrombocytosis."
    ],
    qa: [["Why is TIBC high in iron deficiency?", "The liver makes more transferrin (the iron transport protein) to grab whatever iron is available, so the capacity to bind iron goes up."],
         ["A 41-year-old with chronic heavy menstrual bleeding is tired. Which anemia, and which lab confirms the cause?", "Iron deficiency anemia. Low ferritin shows that iron stores are depleted (with low MCV)."]]
  },
  {
    id: "b12", sys: "rbc", name: "Vitamin B12 Deficiency & Pernicious Anemia", star: true, starText: "Neuro signs = B12",
    connect: ["Nutrition", "Neural Communication", "Autoimmunity"],
    summary: "Developing red cells need B12 to make DNA. Without it, they keep growing but divide slowly, so fewer, larger (macrocytic) cells reach the blood. B12 must bind intrinsic factor from the stomach's parietal cells to be absorbed in the terminal ileum. In pernicious anemia an autoimmune process blocks intrinsic factor, so the person can eat plenty of B12 and still be deficient. B12 also keeps nerves healthy, so deficiency causes neurologic signs.",
    chain: {
      mechanism: ["Low intake (strict vegan diet without supplement)", "Poor absorption: pernicious anemia, PPIs, metformin, bariatric surgery, celiac, alcohol, terminal ileum disease (Crohn's)"],
      change: ["DNA synthesis impaired → cells grow but don't divide → macrocytes", "Nerve damage (myelin)"],
      cues: ["Fatigue, pallor, dyspnea, headache, dizziness", "Numbness and tingling in feet, balance and walking problems, cognitive or mood changes", "Labs: ↓Hgb, ↑MCV, ↓B12 (below 200 pg/mL), hypersegmented neutrophils on smear"],
      worst: ["Permanent neurologic damage", "Neuro signs can appear BEFORE anemia, so a normal Hgb doesn't rule it out"]
    },
    table: { cols: ["", "B12 deficiency", "Folate deficiency"], rows: [
      ["MCV", "↑ (macrocytic)", "↑ (macrocytic)"],
      ["Smear", "Large oval RBCs, hypersegmented neutrophils", "Same"],
      ["Neurologic signs", "YES: numbness, tingling, gait problems, cognitive changes", "No"],
      ["Other clues", "Vegan diet, pernicious anemia, PPI, metformin, bariatric surgery", "Alcohol use, pregnancy, celiac, some antiseizure drugs; glossitis"],
      ["How to tell apart", "Serum B12 level", "Serum folate level"]
    ] },
    tableTitle: "B12 vs. folate deficiency",
    facts: [
      "Intrinsic factor is made by parietal cells in the stomach. B12 is absorbed in the terminal ileum.",
      "Hallmark: neurologic manifestations (numbness, tingling, difficulty walking). These point to B12 rather than folate.",
      "Hypersegmented neutrophils (too many nuclear lobes) are another sign that DNA synthesis is impaired.",
      "Medications that reduce B12 absorption: proton pump inhibitors and metformin."
    ],
    qa: [["Why can a client with pernicious anemia eat enough B12 and still be deficient?", "Autoimmune damage blocks intrinsic factor, which B12 needs to be absorbed in the terminal ileum."],
         ["Which finding points to B12 rather than folate deficiency?", "Neurologic changes: numbness, tingling, balance or walking problems."],
         ["Client A, 30, strict vegan for 3 years: which anemia and which lab?", "B12 deficiency; expect a high MCV (and low B12)."]]
  },
  {
    id: "folate", sys: "rbc", name: "Folate Deficiency Anemia",
    connect: ["Nutrition", "Cellular Function"],
    summary: "Folate is also needed for DNA synthesis, and the body stores only a small amount, so low intake shows up within months. Like B12 deficiency, cells grow but can't divide, causing a macrocytic anemia. Unlike B12, there are no neurologic signs. Folate also matters in early pregnancy because the neural tube closes very early.",
    chain: {
      mechanism: ["Low intake (limited stores)", "Poor absorption (celiac)", "Higher need (pregnancy)", "Alcohol use disorder, some antiseizure medications"],
      change: ["DNA synthesis impaired → large cells, fewer of them"],
      cues: ["Fatigue, pallor, dyspnea", "Glossitis (sore, smooth tongue), poor appetite, diarrhea", "↓Hgb, ↑MCV, ↓folate level, hypersegmented neutrophils"],
      worst: ["In pregnancy: neural tube defects (spina bifida, anencephaly)"]
    },
    facts: [
      "Folic acid before and during early pregnancy lowers the risk of neural tube defects. It's recommended for anyone who could become pregnant.",
      "Neural tube fails to close at the top → anencephaly; lower down → spina bifida.",
      "CBC and smear look the same as B12 deficiency, so check both B12 and folate levels.",
      "If there's numbness, tingling, or trouble walking, think B12 instead."
    ],
    qa: [["Why does folate deficiency cause macrocytic anemia?", "Developing red cells need folate to make DNA. Without it they keep growing but divide slowly, so fewer, larger cells reach the blood."],
         ["Why is folic acid recommended before pregnancy?", "The neural tube closes very early, often before a person knows they're pregnant. Enough folate lowers the risk of neural tube defects."]]
  },
  {
    id: "hemolytic", sys: "rbc", name: "Hemolytic Anemia",
    connect: ["Hemolysis", "Bilirubin", "Immunity"],
    summary: "Red cells are destroyed before the end of their normal life, and the marrow can't keep up. The problem can be inside the cell (intracorpuscular, like sickle cell) or outside it (extracorpuscular, like antibodies coating the cell). Destruction happens either in the spleen and liver (extravascular) or inside the vessels (intravascular). Broken-down hemoglobin becomes bilirubin, which explains jaundice and pigment gallstones.",
    chain: {
      mechanism: ["Intracorpuscular: defect in the cell itself (sickle cell, thalassemia)", "Extracorpuscular: antibodies, mechanical damage, toxins"],
      change: ["Early red cell destruction → anemia", "More hemoglobin broken down → more unconjugated bilirubin", "Marrow speeds up → more reticulocytes"],
      cues: ["Fatigue, dyspnea, tachycardia", "Jaundice and dark urine", "Labs: ↑reticulocytes, ↑LDH, ↑unconjugated bilirubin, ↓haptoglobin; DAT (Coombs) positive if immune"],
      worst: ["Severe anemia", "Pigment gallstones from chronic extra bilirubin"]
    },
    table: { cols: ["Lab", "In hemolysis", "Why"], rows: [
      ["Reticulocyte count", "↑", "The marrow releases young cells to replace destroyed ones"],
      ["LDH", "↑", "Released from damaged red cells"],
      ["Unconjugated (indirect) bilirubin", "↑", "Hemoglobin is broken down faster than the liver can conjugate it"],
      ["Haptoglobin", "↓", "It binds free hemoglobin and is used up"],
      ["Direct antiglobulin test (DAT, direct Coombs)", "Positive if immune", "Detects antibodies or complement on the red cells"]
    ] },
    tableTitle: "Hemolysis labs",
    facts: [
      "Extravascular: macrophages in the spleen and liver remove abnormal or antibody-coated cells. Intravascular: cells break apart in the bloodstream (fragments on the smear).",
      "Dark urine: hemoglobin released in the bloodstream can spill into the urine.",
      "Chronic hemolysis → extra bilirubin in bile → pigment gallstones (ties back to the GI module).",
      "Hemolytic anemia is usually normocytic."
    ],
    qa: [["Why does hemolysis cause jaundice?", "Destroyed red cells release hemoglobin, which is broken down to bilirubin. When it's made faster than the liver can process, bilirubin builds up and yellows the skin and eyes."],
         ["Why is haptoglobin low in hemolysis?", "Haptoglobin binds free hemoglobin released from destroyed cells and gets used up."]]
  },
  {
    id: "acd", sys: "rbc", name: "Anemia of Chronic Disease (Inflammation)",
    connect: ["Inflammation", "Iron Regulation"],
    summary: "Ongoing inflammation (rheumatoid arthritis, chronic infection, cancer, vasculitis) releases cytokines like IL-6. IL-6 tells the liver to make hepcidin, which blocks iron absorption from the gut and traps iron in storage. The marrow can't get iron even though stores are full. Inflammation also blunts the marrow's response to EPO and shortens red cell life. It's the second most common anemia and the most common in adults 65 and older.",
    chain: {
      mechanism: ["Chronic inflammation: RA, chronic infection, cancer, vasculitis, autoimmune disease"],
      change: ["IL-6 → liver makes hepcidin", "Hepcidin ↓ gut iron absorption and traps iron in storage", "Marrow responds poorly to EPO; red cells live shorter"],
      cues: ["Gradual, subtle fatigue, weakness, dyspnea, dizziness, fainting", "Serum iron ↓ but ferritin normal or ↑", "MCV usually normal (sometimes low); ↑CRP/ESR"],
      worst: ["Poorer outcomes in older adults and those with malnutrition or limited access to care"]
    },
    table: { cols: ["", "Iron deficiency", "Anemia of chronic disease"], rows: [
      ["Serum iron", "↓", "↓"],
      ["Ferritin (stores)", "↓ (stores empty)", "Normal or ↑ (iron is trapped)"],
      ["TIBC", "↑", "Normal or ↓"],
      ["MCV", "↓", "Usually normal (can be low)"],
      ["History", "Bleeding, low intake", "RA, chronic infection, cancer"]
    ] },
    tableTitle: "Iron deficiency vs. anemia of chronic disease",
    facts: [
      "A low serum iron alone can't tell IDA from ACD. Ferritin and the history make the difference.",
      "Ferritin is also an acute-phase protein, so inflammation can raise it.",
      "Path to explain out loud: inflammation → cytokines (IL-6) → hepcidin → less iron absorbed and released + blunted EPO response + shorter RBC life → lower Hgb."
    ],
    qa: [["Client B, 65, long-term RA. Which anemia and which lab pattern?", "Anemia of chronic disease: low serum iron with normal or high ferritin."],
         ["How does inflammation lead to anemia?", "IL-6 makes the liver produce hepcidin, which blocks iron absorption and traps iron in storage. Cytokines also blunt the marrow's response to EPO and shorten red cell life."]]
  },
  {
    id: "thal", sys: "rbc", name: "Hemoglobinopathies: Sickle Cell & Thalassemia",
    connect: ["Genetics", "Hemolysis"],
    summary: "Hemoglobinopathies are inherited changes in hemoglobin itself. Either the hemoglobin is the wrong type (sickle cell: hemoglobin S) or the body makes too little of one of its protein chains (thalassemia). The shared feature is chronic hemolytic anemia.",
    chain: {
      mechanism: ["Sickle cell: abnormal hemoglobin S", "Thalassemia: too little of one globin chain"],
      change: ["HbS sticks together after releasing O₂ → rigid, sickled cells", "Unbalanced chains → some cells never mature; others break down early"],
      cues: ["Chronic hemolytic anemia", "Sickle cell: pain episodes from blocked small vessels", "Thalassemia: severity depends on the form; small cells"],
      worst: ["Sickle cell: acute chest syndrome, stroke, sepsis", "Iron overload from repeated transfusions"]
    },
    facts: [
      "Two pathways: unexpected TYPE of hemoglobin (HbS) vs. reduced AMOUNT of hemoglobin (thalassemia).",
      "Cardinal feature of both: chronic hemolytic anemia.",
      "See the Sickle Cell section for the full disease."
    ],
    qa: [["How do sickle cell disease and thalassemia differ?", "Sickle cell makes an abnormal type of hemoglobin (HbS). Thalassemia makes too little of one hemoglobin chain. Both cause chronic hemolytic anemia."]]
  },

  /* ===== SICKLE CELL ===== */
  {
    id: "scd", sys: "sickle", name: "Sickle Cell Disease: Mechanism & Diagnosis", star: true, starText: "Rigid, sticky, fragile cells",
    connect: ["Genetics", "Hemolysis", "Perfusion"],
    summary: "An inherited change makes hemoglobin S. After HbS releases its oxygen, it sticks together inside the cell, turning the cell rigid, sticky, and crescent shaped. Sickled cells do two things: they block small vessels (vaso-occlusion → ischemia and pain), and they break down early (chronic hemolytic anemia). Most children in Washington are diagnosed on the newborn screen.",
    chain: {
      mechanism: ["Inherited HbS from both parents (autosomal recessive; one copy = trait)", "Triggers: low oxygen, dehydration, infection, fever, cold, stress"],
      change: ["HbS polymerizes when deoxygenated → rigid sickle cells", "Cells clump and stick to vessel walls → vaso-occlusion", "Fragile cells break down early → chronic anemia", "Repeated splenic infarcts → functional asplenia by 2–3 months of age"],
      cues: ["Severe pain episodes, chronic pain", "Chronic anemia (know the client's baseline Hgb)", "Fever may be the first sign (sepsis)"],
      worst: ["Sepsis from encapsulated bacteria", "Acute chest syndrome (most common cause of death)", "Stroke; splenic sequestration"]
    },
    table: { cols: ["Parents", "Chance per pregnancy"], rows: [
      ["Both carriers (trait)", "25% sickle cell disease · 50% carrier · 25% unaffected"]
    ] },
    tableTitle: "Inheritance (from the lecture slide)",
    facts: [
      "About 100,000 people in the US; about 1 in 365 Black or African American births and about 1 in 16,300 Hispanic American births. Also affects people of Indian, Middle Eastern, and Mediterranean ancestry.",
      "Hemoglobin and reticulocyte count are the key labs, but people with SCD don't have 'normal' values: compare to the client's own baseline.",
      "Reticulocyte count helps when Hgb drops: low retics → the marrow stopped (aplastic crisis, e.g., parvovirus); high retics → cells are being trapped (sequestration).",
      "Hct = % of blood volume that is red cells. Hgb = the iron-containing pigment that carries oxygen."
    ],
    qa: [["What two problems do sickled cells cause?", "They block small vessels (vaso-occlusion → ischemia and pain) and they break down early (chronic hemolytic anemia)."],
         ["Why might a child's first sign of sickle cell disease be sepsis?", "Splenic function is lost early (around 2–3 months), so encapsulated bacteria can cause overwhelming infection."]]
  },
  {
    id: "voe", sys: "sickle", name: "Vaso-Occlusive Episode (Pain Crisis)", star: true, starText: "Believe the client's pain",
    connect: ["Perfusion", "Ischemia"],
    summary: "Sickled cells clump and block microvascular flow, so tissue downstream becomes ischemic and very painful. Pain can start suddenly or build over 24–48 hours, often in the same place as previous crises: arms, legs, lower back, chest. There is no lab or imaging test for a pain crisis, so care is guided entirely by the client's report.",
    chain: {
      mechanism: ["Dehydration, infection/fever, cold, hypoxia, stress, nonadherence to hydroxyurea"],
      change: ["Sickled cells clump and adhere to vessel walls", "Blocked microvascular flow → tissue ischemia"],
      cues: ["Severe, 'stabbed by knives' pain (legs, arms, back, chest)", "Infants: dactylitis (swollen hands and feet), first crisis as early as 6 months", "Vital signs and labs may be unchanged"],
      worst: ["Untreated pain; ACS developing from splinting and shallow breathing", "Bias leading to undertreatment"]
    },
    facts: [
      "No labs or imaging validate pain or measure its severity. If the client says 10/10, believe it and treat promptly.",
      "Ask: location, character, is this like previous crises? Then reassess the response.",
      "Home: acetaminophen, ibuprofen, often an opioid for breakthrough. Acute: opioids. Complementary: warm packs, massage, acupressure.",
      "Racism and stigma lead to people with SCD being labeled 'drug-seeking.' Avoid terms like 'sickler' or 'frequent flier.'",
      "Pain in a crisis → shallow breathing (splinting) → hypoventilation → can trigger acute chest syndrome."
    ],
    qa: [["A client in pain crisis rates pain 10/10 but has normal vital signs. What does the nurse do?", "Believe the report and treat promptly. Vital signs and labs don't confirm or rule out a crisis."],
         ["Why can a pain crisis lead to acute chest syndrome?", "Pain causes splinting and shallow breathing, so lung segments hypoventilate. Local hypoxia increases sickling in the lung vessels."]]
  },
  {
    id: "acs", sys: "sickle", name: "Acute Chest Syndrome", star: true, starText: "Most common cause of death",
    connect: ["Perfusion", "Gas Exchange", "Infection"],
    summary: "Vaso-occlusion in the small vessels of the lungs causes local ischemia and infarcts. The client becomes hypoxic, and hypoxia causes more sickling: a vicious cycle. It looks like pneumonia: new infiltrate on chest x-ray plus fever, chest pain, cough, tachypnea, or falling oxygen saturation. It's the second most common reason for hospitalization and the most common cause of death in SCD.",
    chain: {
      mechanism: ["Infection", "Asthma", "Hypoventilation (splinting from pain, not using the incentive spirometer)"],
      change: ["Sickling in lung microvessels → infarcts", "Hypoxemia → more sickling → more occlusion"],
      cues: ["New pulmonary infiltrate on chest imaging plus ≥1: chest pain, temp >38.5 °C, tachypnea/wheezing/rales/cough/↑WOB, SpO₂ >2% below baseline", "Children: fever, wheeze, cough, ↑work of breathing", "Adults: chest pain, arm and leg pain, SOB"],
      worst: ["Respiratory failure, ICU, death"]
    },
    facts: [
      "Treatment: oxygen to keep SpO₂ >95%, chest PT, incentive spirometry, bronchodilator, steroids if asthma-driven, transfusion or exchange transfusion, broad-spectrum antibiotics.",
      "Incentive spirometry every 2–4 hours while awake during a pain-crisis admission can PREVENT acute chest. The instructor called it a highly important nursing intervention.",
      "Fever + chest symptoms (SOB, tachypnea, cough, rales) → urgent chest x-ray.",
      "Kaylee's case: fever, leg pain 10/10, RR 34, HR 105, coarse breath sounds bilaterally, SpO₂ 96% → think acute chest syndrome."
    ],
    qa: [["What is the vicious cycle in acute chest syndrome?", "Sickling blocks lung vessels → infarcts → hypoxemia → more sickling → more blockage."],
         ["Which nursing intervention can prevent ACS during a pain-crisis admission?", "Incentive spirometry every 2–4 hours while awake (hourly at first)."]]
  },
  {
    id: "scdfever", sys: "sickle", name: "Fever, Infection & Splenic Sequestration",
    connect: ["Immunity", "Infection", "Perfusion"],
    summary: "Repeated sickling in the spleen destroys its function starting around 2–3 months of age (functional asplenia). Without the spleen, encapsulated bacteria cause severe infection, so fever in SCD is a medical emergency. Splenic sequestration is the opposite spleen problem: sickled cells suddenly pool in the spleen, it enlarges, and hemoglobin drops at least 2 g/dL below baseline.",
    chain: {
      mechanism: ["Splenic infarcts → functional asplenia", "Sudden trapping of blood in the spleen (ages 1–4)"],
      change: ["Can't clear encapsulated bacteria → sepsis risk", "Sequestration: blood pools in the spleen → circulating volume and Hgb fall"],
      cues: ["Fever (any) = emergency", "Sequestration: rapidly enlarging LUQ mass, Hgb ≥2 g/dL below baseline, pallor, tachycardia"],
      worst: ["Sepsis (common cause of death)", "Hypovolemic shock from sequestration"]
    },
    facts: [
      "Fever workup: history and exam, CBC with differential, reticulocyte count, blood cultures, prompt antibiotics. Penicillin-resistant organisms are possible.",
      "Fever can accompany or trigger acute chest, a pain crisis, or splenic sequestration.",
      "Daily penicillin prophylaxis and immunizations protect against encapsulated bacteria.",
      "After recurrent sequestration, splenectomy is common. It doesn't add infection risk because the spleen already doesn't work.",
      "Caregivers are taught to feel for an enlarging mass in the left upper quadrant."
    ],
    qa: [["Why is fever a medical emergency in SCD?", "The spleen stops working early in life, so the child can't clear encapsulated bacteria; sepsis can develop fast."],
         ["How is splenic sequestration defined?", "Sudden spleen enlargement with hemoglobin at least 2 g/dL below the client's baseline, usually in children 1–4."]]
  },
  {
    id: "scdcomp", sys: "sickle", name: "Stroke, Chronic Complications & Treatment",
    connect: ["Perfusion", "Neuro", "Iron Overload"],
    summary: "Blocked flow damages any organ with strong blood flow. Stroke (ischemic or hemorrhagic) can happen even in children, sometimes preceded by TIAs that don't show on imaging. Chronic complications include chronic pain, avascular necrosis, pulmonary hypertension, kidney and eye damage, gallstones, and priapism. Treatments aim to reduce sickling, prevent infection, and replace damaged blood.",
    chain: {
      mechanism: ["Repeated vaso-occlusion in brain, bone, lungs, kidneys, eyes, penis"],
      change: ["Ischemia and infarction of tissue", "Repeated transfusions → iron overload"],
      cues: ["Stroke: sudden weakness, aphasia, seizure, coma", "Priapism: an erection that won't go away", "Avascular necrosis: hip or shoulder pain"],
      worst: ["Stroke with motor and cognitive deficits", "Multi-organ failure; shortened life expectancy"]
    },
    table: { cols: ["Treatment", "Why"], rows: [
      ["Hydroxyurea (daily)", "Disease-modifying: reduces sickling and crises"],
      ["Penicillin", "Protects against encapsulated bacteria (no working spleen)"],
      ["Folic acid", "Supports red cell production in chronic hemolysis"],
      ["Transfusion", "Acute: severe anemia, stroke, ACS, sequestration. Scheduled: prevent stroke or recurrent ACS, before surgery"],
      ["Exchange transfusion", "Removes some of the client's blood and replaces it with donor RBCs: lowers % sickle cells WITHOUT raising viscosity. Used for stroke, severe ACS"],
      ["Iron chelation", "Treats iron overload from transfusions"],
      ["Stem cell transplant / gene therapy", "Potential cure; high risk or limited access"]
    ] },
    tableTitle: "Treatments (patho level)",
    facts: [
      "Acute stroke confirmed on imaging → exchange transfusion.",
      "Priapism is a medical emergency.",
      "Iron overload causes more pain crises and organ failure.",
      "Teens may stop hydroxyurea or folic acid to 'feel normal,' leading to more crises: ask about adherence.",
      "Psychosocial effects: missed school, cognitive delays after stroke, hopelessness, anxiety, depression, sleep problems, substance use."
    ],
    qa: [["Why use an exchange transfusion instead of a simple transfusion in a stroke?", "It lowers the percentage of sickle cells without raising the hematocrit and blood viscosity."],
         ["Name three chronic complications of SCD.", "Any of: chronic pain, avascular necrosis, pulmonary hypertension, kidney disease, eye disease, priapism, stroke/TIA, gallstones."]]
  },

  /* ===== PLATELETS ===== */
  {
    id: "pltfn", sys: "plt", name: "Platelets & Hemostasis",
    connect: ["Hemostasis", "Clotting"],
    summary: "Platelets are fragments shed by megakaryocytes in the bone marrow. When a vessel is injured, platelets stick to the injured wall (adhesion, helped by von Willebrand factor), activate, release signals like thromboxane A2 that recruit more platelets, and stick to each other (aggregation) to form a plug: primary hemostasis. Clotting factors then make fibrin to reinforce it: secondary hemostasis. Ask two questions: how many platelets, and how well do they work?",
    chain: {
      mechanism: ["Too few platelets (thrombocytopenia)", "Too many (thrombocytosis)", "Normal number but poor function (acquired platelet dysfunction)"],
      change: ["Plug can't form → bleeding", "Excess or abnormal platelets → clots (and sometimes bleeding)"],
      cues: ["Platelet-type bleeding: petechiae, purpura, easy bruising, nosebleeds, bleeding gums, heavy periods, prolonged bleeding after minor injury"],
      worst: ["Bleeding into the brain or GI tract", "Thrombosis: stroke, MI, DVT"]
    },
    facts: [
      "Normal platelet count: 150,000–400,000/mm³.",
      "PT and aPTT test the clotting-factor pathway, not platelets. They're usually normal in a pure platelet problem.",
      "The CBC answers 'how many'; history, medications, and symptoms answer 'how well.'",
      "The liver makes thrombopoietin (drives platelet production) and most clotting factors and their inhibitors."
    ],
    qa: [["What is primary hemostasis?", "Platelets adhere to the injured vessel, activate, recruit more platelets, and aggregate into a plug."],
         ["Why are PT and aPTT normal in thrombocytopenia?", "They measure clotting factors (secondary hemostasis), not platelet number."]]
  },
  {
    id: "tcp", sys: "plt", name: "Thrombocytopenia (ITP, HIT & more)", star: true, starText: "4 ways to lose platelets",
    connect: ["Hemostasis", "Immunity", "Bone Marrow Function"],
    summary: "Platelet count below 150,000/mm³. Four mechanisms: the marrow makes fewer (leukemia, chemo, marrow failure, low thrombopoietin), platelets are cleared or consumed faster (ITP, HIT), the spleen holds them (sequestration in portal hypertension), or they're diluted (massive bleeding replaced with fluids and packed RBCs, which contain no platelets). HIT is the twist: platelets fall but clotting risk rises.",
    chain: {
      mechanism: ["↓Production: marrow disorders, chemo/radiation, cirrhosis (↓thrombopoietin)", "↑Destruction/consumption: ITP (antibodies mark platelets), HIT (antibodies activate platelets)", "Sequestration: splenomegaly from portal hypertension", "Dilution: massive transfusion of fluids + PRBCs"],
      change: ["Fewer platelets to form a plug", "HIT: activated platelets clump and are consumed → thrombosis"],
      cues: ["Petechiae, purpura, bruising, nosebleeds, bleeding gums, blood in urine or stool", "Mild: often no symptoms; found on routine CBC", "HIT: falling count after heparin, new clots"],
      worst: ["Spontaneous bleeding at about 10,000/mm³, including intracranial hemorrhage", "HIT: arterial or venous thrombosis"]
    },
    table: { cols: ["Mechanism", "Example", "Clue"], rows: [
      ["Decreased production", "Leukemia, chemo, marrow failure, cirrhosis (↓thrombopoietin)", "Other lines (Hgb, WBC) often low too"],
      ["Increased clearance/consumption", "ITP; HIT", "Only platelets low (ITP, diagnosis of exclusion); heparin exposure (HIT)"],
      ["Sequestration", "Splenomegaly from portal hypertension (cirrhosis)", "Big spleen, liver disease"],
      ["Dilution", "Massive blood loss replaced with IV fluids and packed RBCs", "Recent hemorrhage and resuscitation"]
    ] },
    tableTitle: "Why is the count low?",
    facts: [
      "If several CBC lines are low → think marrow. If only platelets are low → look for a platelet-specific cause.",
      "A peripheral smear can show platelet clumping, which makes the automated count falsely low.",
      "ITP is generally diagnosed by excluding other causes.",
      "HIT: antibodies activate platelets → they clump → count falls AND clots form. A falling count can be a clue to clotting risk.",
      "Cirrhosis lowers platelets two ways: less thrombopoietin (marrow) and splenic sequestration (spleen)."
    ],
    qa: [["Why does HIT cause both low platelets and thrombosis?", "Antibodies activate platelets, which clump into clots and are consumed, so the count drops while clotting risk rises."],
         ["Why doesn't replacing blood loss with fluids and packed RBCs restore platelets?", "Neither contains platelets, so platelets per microliter fall even as volume is restored (dilution)."],
         ["At what count does spontaneous bleeding become a major risk?", "About 10,000/mm³ (bleeding can occur without injury, including in the brain)."]]
  },
  {
    id: "et", sys: "plt", name: "Primary Thrombocytosis (Essential Thrombocythemia)",
    connect: ["Cellular Growth", "Clotting", "Perfusion"],
    summary: "An acquired mutation in the marrow keeps growth signals switched on, so megakaryocytes multiply and enlarge and pour out too many, often malfunctioning, platelets. The main danger is clotting in small and large vessels. Counterintuitively, at extremely high counts the person can bleed, because so many platelets soak up von Willebrand factor that the plug can't anchor to the vessel wall.",
    chain: {
      mechanism: ["Acquired gene mutations in hematopoietic stem cells (no need to know gene names)"],
      change: ["↑ number and size of megakaryocytes → platelet overproduction", "Platelets clog small vessels → downstream ischemia"],
      cues: ["Often none (routine CBC)", "Headache, vision changes, dizziness", "Burning, throbbing, or numb hands and feet; cool, pale fingers and toes"],
      worst: ["Arterial clots: TIA, stroke, MI", "Venous clots: DVT", "Bleeding at extreme counts (↓von Willebrand factor activity)"]
    },
    facts: [
      "Diagnosis: persistently high platelet count, rule out reactive causes (infection, inflammation, iron deficiency), smear, genetic testing, bone marrow biopsy.",
      "Clots most often affect the brain, hands, and feet.",
      "Primary thrombocytosis carries more clotting risk than reactive thrombocytosis."
    ],
    qa: [["How can a very high platelet count cause bleeding?", "Extremely high counts reduce von Willebrand factor activity, so platelets can't attach to the injured wall and the plug doesn't form."],
         ["Why does ET cause headache and burning hands and feet?", "Excess platelets block small vessels, so tissue downstream gets less blood and oxygen."]]
  },
  {
    id: "reactive", sys: "plt", name: "Secondary (Reactive) Thrombocytosis",
    connect: ["Inflammation", "Infection", "Iron Deficiency"],
    summary: "The marrow is normal but responding to something else: infection, an inflammatory flare, iron deficiency, or having no spleen (asplenia/splenectomy leaves more platelets circulating). It's usually temporary, rarely causes clots on its own, and the count comes down when the cause is treated.",
    chain: {
      mechanism: ["Infection or inflammation (cytokines stimulate platelet production)", "Iron deficiency", "Splenectomy"],
      change: ["More platelets made or kept in circulation"],
      cues: ["Usually no symptoms from the count itself", "Signs of the underlying cause", "High platelets + low Hgb + low MCV → check iron studies"],
      worst: ["Rarely clots; the underlying disease is the bigger danger"]
    },
    table: { cols: ["", "Primary (ET)", "Secondary (reactive)"], rows: [
      ["Where it starts", "Bone marrow (mutation)", "Somewhere else in the body"],
      ["Causes", "Acquired stem-cell mutation", "Infection, inflammation, iron deficiency, splenectomy"],
      ["Course", "Chronic", "Usually temporary; resolves with the cause"],
      ["Clot risk", "Higher; bleeding possible at extreme counts", "Low from the count itself"],
      ["Workup", "Genetic testing, marrow biopsy", "Find and treat the cause"]
    ] },
    tableTitle: "Primary vs. secondary thrombocytosis",
    facts: ["Both kinds still carry some risk of thrombotic events, but reactive thrombocytosis is rarely the cause of a clot."],
    qa: [["A client with pneumonia has a platelet count of 610,000. What's the likely cause?", "Reactive (secondary) thrombocytosis from infection and inflammation; it should fall as the pneumonia resolves."]]
  },
  {
    id: "apfd", sys: "plt", name: "Acquired Platelet Function Disorders",
    connect: ["Hemostasis", "Renal", "Liver", "Pharmacology"],
    summary: "The count is normal but the platelets don't work. Aspirin irreversibly blocks COX-1, so platelets can't make thromboxane A2, the signal that recruits other platelets, and aggregation falls. In advanced kidney failure, retained wastes (uremia) impair both adhesion and aggregation. In liver failure, platelet number, platelet function, and clotting proteins all change, so the client can bleed AND clot.",
    chain: {
      mechanism: ["Medications: aspirin (COX-1 → ↓thromboxane A2) and others", "Kidney failure: uremic toxins", "Liver failure: ↓clotting factors and inhibitors, ↓thrombopoietin, splenomegaly"],
      change: ["Platelets can't adhere to the vessel wall and/or aggregate", "Plug doesn't form → bleeding lasts longer"],
      cues: ["Easy bruising, nosebleeds, bleeding gums, prolonged bleeding after dental work or a minor cut", "Platelet count normal; PT and aPTT may be normal"],
      worst: ["Significant bleeding after injury or a procedure; GI or brain bleeding"]
    },
    facts: [
      "Normal count + normal PT/aPTT + bleeding → history is key: new aspirin or supplements? advanced kidney disease (↑BUN, ↑creatinine)? liver disease?",
      "Symptoms look like thrombocytopenia because in both the initial platelet plug is impaired.",
      "Acquired = develops during life (not inherited).",
      "Cirrhosis: the liver makes clotting factors AND the proteins that limit clotting, so both sides of the balance shift."
    ],
    beyond: "The transcript says kidney failure decreases 'tranexamic acid or TXA' production. The signal platelets make is thromboxane A2 (TXA2), the same one aspirin blocks. Tranexamic acid is an unrelated drug used to stop bleeding.",
    qa: [["How does aspirin cause bleeding with a normal platelet count?", "It blocks COX-1, so platelets make less thromboxane A2 and can't recruit and aggregate with each other."],
         ["How is liver function related to platelet disorders?", "Less thrombopoietin → fewer platelets made; portal hypertension → splenomegaly traps platelets; fewer clotting factors and inhibitors → risk of bleeding and clotting."]]
  },

  /* ===== WHITE BLOOD CELLS ===== */
  {
    id: "leuk", sys: "wbc", name: "Leukemia Basics", star: true, starText: "Crowded-out marrow",
    connect: ["Abnormal Cell Growth", "Hematopoiesis", "Immunity"],
    summary: "Leukemias are cancers of blood-forming cells, usually starting in the bone marrow. Abnormal cells multiply and crowd out healthy production, so red cells, platelets, and neutrophils fall. The name tells you two things: lymphoid or myeloid (which line) and acute or chronic (immature blasts that progress fast vs. mature-looking cells that progress slowly).",
    chain: {
      mechanism: ["Genetic changes in a blood-forming cell", "Risks: inherited conditions, benzene, high radiation, prior chemotherapy or radiation; often no cause"],
      change: ["Abnormal cells accumulate in the marrow (and blood, nodes, spleen, CNS)", "Healthy production falls"],
      cues: ["↓Hgb → fatigue, pallor, dyspnea", "↓Platelets → petechiae, bruising, bleeding gums, nosebleeds", "↓Neutrophils → frequent or severe infections, fever", "Bone pain; enlarged nodes or spleen"],
      worst: ["Sepsis (febrile neutropenia)", "Hemorrhage", "Leukostasis; tumor lysis syndrome"]
    },
    table: { cols: ["", "Lymphoid", "Myeloid"], rows: [
      ["Acute (blasts, fast)", "ALL: most common childhood cancer", "AML: mostly older adults"],
      ["Chronic (mature-looking, slow)", "CLL: older adults; abnormal B cells", "CML: Philadelphia chromosome (9;22)"]
    ] },
    tableTitle: "The four main leukemias",
    facts: [
      "Lymphoid line → B cells, T cells, NK cells. Myeloid line → RBCs, megakaryocytes/platelets, neutrophils, monocytes, basophils, eosinophils.",
      "A high total WBC can be mostly abnormal cells. It says nothing about how many working neutrophils there are, so look at the differential.",
      "Pancytopenia = low RBCs, platelets, and neutrophils together.",
      "Some cancer treatments also suppress the marrow, so low counts and infection risk come from the disease AND the treatment."
    ],
    qa: [["A client with leukemia has low Hgb, low platelets, and low neutrophils. Which explains fatigue, bruising, and infection?", "Low Hgb → fatigue. Low platelets → bruising. Low neutrophils → infection. All three come from the same crowded-out marrow."],
         ["What do 'acute' and 'chronic' mean in leukemia names?", "Acute: immature blasts accumulate and the disease progresses quickly. Chronic: mature or maturing cells; slower."]]
  },
  {
    id: "all", sys: "wbc", name: "Acute Lymphoid Leukemia (ALL)",
    connect: ["Abnormal Cell Growth", "Immunity"],
    summary: "Genetic changes stop immature lymphoid cells from maturing, so nonfunctional lymphoblasts pile up in the marrow and crowd out healthy cells. It's the most common childhood cancer. Blasts can also travel to lymph nodes and the central nervous system.",
    chain: {
      mechanism: ["DNA mutations in immature lymphoid cells; radiation, chemicals, prior chemo, genetic conditions"],
      change: ["Lymphoblasts multiply without maturing", "Healthy RBC, platelet, and neutrophil production falls", "Spread to nodes, CNS"],
      cues: ["Early: fatigue, pallor, SOB, weakness", "Later: petechiae, nosebleeds, bleeding gums, frequent severe infections, bone pain, enlarged nodes", "CNS: headache, vomiting"],
      worst: ["Severe infection, bleeding", "CNS involvement"]
    },
    facts: [
      "CBC with differential: low Hgb and platelets; WBC can be high, normal, or low. Smear may show blasts.",
      "Bone marrow sample establishes the diagnosis; flow cytometry identifies the cells (B vs. T line).",
      "Lumbar puncture checks CSF for leukemia cells (CNS involvement).",
      "Treatment aims for remission, then targets remaining cells; it also suppresses the marrow."
    ],
    qa: [["Why does a child with ALL have bone pain?", "Leukemic cells crowd and expand the bone marrow."],
         ["Why is a lumbar puncture done in ALL?", "To check the cerebrospinal fluid for leukemia cells in the central nervous system."]]
  },
  {
    id: "cll", sys: "wbc", name: "Chronic Lymphoid Leukemia (CLL)",
    connect: ["Immunity", "Autoimmunity"],
    summary: "Mature-looking but malfunctioning B lymphocytes slowly accumulate, mostly in older adults. Because healthy B cells make antibodies, immune function suffers even when the lymphocyte count is high. Some clients develop autoimmune hemolytic anemia. Many are found on routine bloodwork and managed with watchful waiting.",
    chain: {
      mechanism: ["Genetic changes in B cells; possible pesticide exposure; cause often unknown"],
      change: ["Abnormal B cells accumulate in blood, marrow, and lymph tissue", "Poor antibody production → infection", "Autoimmune attack on RBCs (hemolytic anemia)"],
      cues: ["Often none at first (↑lymphocytes on routine CBC)", "Later: enlarged nodes, fatigue, drenching night sweats, weight loss, recurrent infections"],
      worst: ["Recurrent serious infections", "Declining counts; autoimmune hemolysis"]
    },
    facts: [
      "Smear: smudge cells (fragile lymphocytes that break apart when the slide is made).",
      "Flow cytometry on a blood sample identifies the abnormal B-cell population.",
      "Watchful waiting = monitoring without treating yet. Needs frequent labs and close follow-up.",
      "Living with uncertainty causes emotional distress."
    ],
    qa: [["Why does a client with CLL get infections despite a high lymphocyte count?", "The B cells are abnormal and don't make normal antibodies."],
         ["What are smudge cells?", "Fragile CLL lymphocytes that break apart when the smear is prepared."]]
  },
  {
    id: "aml", sys: "wbc", name: "Acute Myeloid Leukemia (AML)",
    connect: ["Abnormal Cell Growth", "Perfusion", "Immunity"],
    summary: "Myeloblasts multiply without maturing and crowd out healthy cells. It occurs mostly in older adults, sometimes after a prior marrow disorder or prior chemo/radiation; in children it's rare and often linked to a genetic syndrome like Down syndrome. AML progresses fast, so severe infection and bleeding are major concerns. Very high blast counts can cause leukostasis.",
    chain: {
      mechanism: ["Genetic changes in myeloid precursors; prior chemo/radiation; MDS; inherited conditions"],
      change: ["Myeloblasts fill the marrow → ↓RBCs, platelets, neutrophils", "Huge numbers of circulating blasts sludge small vessels (leukostasis)"],
      cues: ["Fatigue, pallor, bruising/bleeding, infections, fever, weight loss, night sweats", "Leukostasis: dyspnea, vision changes, headache, confusion", "Children: gingival hyperplasia, skin involvement (leukemia cutis), neuro signs"],
      worst: ["Febrile neutropenia → sepsis", "Bleeding", "Leukostasis in lungs or brain"]
    },
    facts: [
      "Smear: myeloblasts, some with Auer rods (needle-like inclusions; know the name, not how to identify them).",
      "Diagnosis: marrow exam, flow cytometry, genetics; about 20% blasts is the usual threshold.",
      "ANC = how many neutrophils are circulating. Low ANC → fewer cells to fight infection and fewer signs of inflammation (little pus or redness).",
      "Fever may be the first or only sign of infection: febrile neutropenia needs urgent evaluation."
    ],
    qa: [["Why might a neutropenic client have an infection with no pus or redness?", "Neutrophils produce those signs. With very few neutrophils, fever may be the only sign."],
         ["What is leukostasis?", "So many circulating leukemic cells that they block small vessels, causing hypoxia in the lungs or brain (dyspnea, vision changes, confusion)."]]
  },
  {
    id: "cml", sys: "wbc", name: "Chronic Myeloid Leukemia (CML)",
    connect: ["Genetics", "Abnormal Cell Growth"],
    summary: "Parts of chromosomes 9 and 22 swap places, creating the Philadelphia chromosome. The fusion gene makes a tyrosine kinase that is always 'on,' constantly telling myeloid cells to grow. In the chronic phase, cells still mature, so the smear shows granulocytes at many stages. In blast phase it behaves like an acute leukemia (AML). Tyrosine kinase inhibitors target the exact abnormal signal.",
    chain: {
      mechanism: ["Acquired 9;22 translocation = Philadelphia chromosome"],
      change: ["Constant tyrosine kinase signaling → overproduction of myeloid cells", "Spleen enlarges", "Blast crisis: immature cells take over"],
      cues: ["Often found on routine bloodwork", "Fatigue, weight loss, fever", "Splenomegaly: LUQ discomfort, fullness after small meals (early satiety)"],
      worst: ["Blast crisis (acts like AML)", "Later anemia, neutropenia, thrombocytopenia; leukostasis in children"]
    },
    facts: [
      "Testing for the 9;22 change confirms the diagnosis.",
      "Tyrosine kinase inhibitors are a targeted therapy: lifelong medication and blood tests; they can affect metabolism over time.",
      "Children progress faster with a shorter chronic phase."
    ],
    qa: [["Why does CML cause early satiety?", "The enlarged spleen presses on the stomach in the left upper abdomen."],
         ["What is the Philadelphia chromosome and why does it matter?", "A 9;22 swap that makes an always-on tyrosine kinase, driving myeloid overgrowth. It's also the target of TKI therapy."]]
  },
  {
    id: "hodgkin", sys: "wbc", name: "Lymphomas & Hodgkin Lymphoma", star: true, starText: "Reed-Sternberg · B symptoms",
    connect: ["Abnormal Cell Growth", "Inflammation", "Immunity"],
    summary: "Lymphomas are cancers of lymphocytes that usually collect in lymph nodes and lymphatic tissue (leukemias usually start in the marrow). Classic Hodgkin lymphoma comes from B cells and has Reed-Sternberg cells ('owl eye' nuclei). These cells release cytokines that attract other immune cells, so the node is part cancer, part inflammation, which helps explain fever, sweats, and itching.",
    chain: {
      mechanism: ["Mutation in a B cell in a lymph node", "Risks: EBV (weakens immune control, doesn't directly cause it), immune dysfunction, family history, autoimmune disease"],
      change: ["Reed-Sternberg cells release cytokines → inflammatory node", "Cells hide from or defend against the immune system"],
      cues: ["Painless enlarged node, often neck or above the clavicle (also armpit, groin)", "B symptoms: unexplained fever, drenching night sweats, unintentional weight loss", "Fatigue, itching; cough or chest pain from chest nodes"],
      worst: ["Extranodal spread = more advanced", "Compression of chest structures", "Long-term treatment effects (heart, lungs, later cancers)"]
    },
    table: { cols: ["", "Hodgkin", "Non-Hodgkin"], rows: [
      ["Hallmark", "Reed-Sternberg cells", "Many subtypes; most from B cells, some T or NK"],
      ["Behavior", "Usually responds well to treatment", "Indolent (follicular) to aggressive (diffuse large B-cell, Burkitt)"],
      ["Spread", "Often orderly node to node", "Extranodal involvement more common (GI tract, skin)"],
      ["Shared", "Painless nodes, B symptoms, biopsy for diagnosis, staging by imaging", "Same"]
    ] },
    tableTitle: "Hodgkin vs. non-Hodgkin",
    facts: [
      "Diagnosis needs a lymph node biopsy. CBC, ESR/CRP (nonspecific inflammation), and PET/CT help assess extent.",
      "Staging (ATI uses Lugano) describes how widespread the lymphoma is; you don't need to stage it yourself.",
      "Extranodal = outside the lymph nodes (stomach, skin); usually means more advanced disease.",
      "Indolent lymphomas may be managed with watchful waiting; aggressive ones need immediate therapy."
    ],
    qa: [["What are B symptoms?", "Unexplained fever, drenching night sweats, and unintentional weight loss."],
         ["How do lymphoma and leukemia differ?", "Leukemia usually starts in the marrow and floods the blood; lymphoma usually collects in lymph nodes and lymphatic tissue. They can overlap."]]
  },
  {
    id: "nhl", sys: "wbc", name: "Non-Hodgkin Lymphoma & Tumor Lysis Syndrome",
    connect: ["Abnormal Cell Growth", "Electrolytes", "Renal"],
    summary: "Non-Hodgkin lymphoma is a group of many cancers, mostly from B cells, with risks like immune suppression, certain infections, chronic inflammation, and autoimmune disease. Some are slow (follicular), others aggressive (diffuse large B-cell, Burkitt). Fast-growing lymphomas and leukemias can cause tumor lysis syndrome when many cells break open at once, often after treatment starts.",
    chain: {
      mechanism: ["Rapid breakdown of many cancer cells (treatment or very fast growth)"],
      change: ["Cell contents spill into blood: ↑potassium, ↑phosphate", "DNA breakdown → ↑uric acid", "Phosphate binds calcium → ↓calcium"],
      cues: ["Hyperkalemia → dysrhythmias", "Hypocalcemia → cramps, tetany, seizures", "↑Uric acid and calcium phosphate → acute kidney injury, ↓urine output"],
      worst: ["Cardiac arrest", "Acute kidney injury"]
    },
    table: { cols: ["Lab", "Direction", "Effect"], rows: [
      ["Potassium", "↑", "Dysrhythmias, cardiac arrest"],
      ["Phosphate", "↑", "Binds calcium; crystals damage kidneys"],
      ["Calcium", "↓", "Muscle cramps, tetany, seizures, dysrhythmias"],
      ["Uric acid", "↑", "Crystals in kidney tubules → AKI"]
    ] },
    tableTitle: "Tumor lysis syndrome: what's released",
    facts: [
      "NHL extranodal involvement causes organ-specific symptoms, like abdominal pain or fullness with GI involvement.",
      "LDH may be elevated from high cell turnover but doesn't diagnose lymphoma.",
      "In children, NHL is rare but usually aggressive (and often responds well to chemo).",
      "Cytokine dysregulation causes systemic symptoms (B symptoms)."
    ],
    beyond: "The lecture lists uric acid, then says 'so calcium can fall and phosphate can rise.' The calcium drop comes from the phosphate, not the uric acid: released phosphate binds calcium. Uric acid's harm is to the kidneys.",
    qa: [["Why does calcium fall in tumor lysis syndrome?", "Cells release large amounts of phosphate, which binds calcium in the blood."],
         ["Which two organs does tumor lysis syndrome threaten most?", "The heart (hyperkalemia, hypocalcemia → dysrhythmias) and the kidneys (uric acid and calcium phosphate → AKI)."]]
  },
  {
    id: "mds", sys: "wbc", name: "Myelodysplastic Neoplasms (MDS)",
    connect: ["Bone Marrow Dysfunction", "Hematopoiesis"],
    summary: "Abnormal blood-forming stem cells produce cells that develop abnormally and often die before they reach the blood: ineffective hematopoiesis. The marrow can be full while blood counts are low. One or more lines can be affected. Some cases progress to AML. More common in older adults, especially males; most cases are de novo, some follow prior chemo or radiation.",
    chain: {
      mechanism: ["Abnormal stem cells; de novo (no known cause) or after prior chemo/radiation"],
      change: ["Cells develop abnormally and die in the marrow", "Full marrow, low blood counts (cytopenias)"],
      cues: ["Anemia → fatigue, activity intolerance", "Neutropenia → infections", "Thrombocytopenia → bruising, bleeding"],
      worst: ["Progression to AML", "Iron overload from repeated transfusions"]
    },
    facts: [
      "CBC finds the low counts; marrow aspiration and biopsy show abnormal development; genetics and blast percentage estimate the course.",
      "Having lots of developing cells in the marrow doesn't mean enough healthy cells reach the bloodstream.",
      "Repeated transfusions can cause iron overload over time."
    ],
    beyond: "The lecture defines 'de novo' as a cancer that has already spread when it's diagnosed. In MDS, de novo means it arose on its own, without prior chemotherapy or radiation (the opposite of therapy-related MDS). That's the meaning used in the ATI slide.",
    qa: [["How can the marrow be full of cells while the blood counts are low?", "In MDS the cells develop abnormally and die before maturing, so few healthy cells reach the blood (ineffective hematopoiesis)."],
         ["Which leukemia can MDS progress to?", "Acute myeloid leukemia (AML)."]]
  },
  {
    id: "oncemerg", sys: "wbc", name: "Cancer-Related Complications", star: true, starText: "Neutropenia & tumor lysis",
    connect: ["Bone Marrow Function", "Immunity", "Electrolytes"],
    summary: "Cancer and its treatment can both suppress the bone marrow. Fewer red cells cause fatigue and hypoxia, fewer platelets cause bleeding, and fewer neutrophils cause infection that can turn into sepsis quickly, often with fever as the only sign. Rapid cancer-cell breakdown (tumor lysis) floods the blood with potassium, phosphate, and uric acid, threatening the heart and kidneys.",
    chain: {
      mechanism: ["Cancer cells crowd out the marrow", "Chemotherapy/radiation suppress the marrow", "Rapid cell death releases cell contents"],
      change: ["Anemia, thrombocytopenia, neutropenia", "↑K⁺, ↑phosphate, ↓Ca²⁺, ↑uric acid"],
      cues: ["Febrile neutropenia: fever with low ANC, maybe no other sign", "Bleeding: petechiae, gum bleeding, melena, headache (intracranial)", "TLS: dysrhythmias, cramps, ↓urine output"],
      worst: ["Septic shock", "Intracranial hemorrhage", "Cardiac arrest, AKI"]
    },
    facts: [
      "Why infection is so dangerous in neutropenia: there aren't enough neutrophils to contain it, and the usual signs (pus, redness, swelling) are muted.",
      "Fever + low ANC = urgent evaluation.",
      "Tumor lysis can happen with fast-growing leukemias and lymphomas, usually after treatment starts, occasionally before."
    ],
    qa: [["Why is infection particularly concerning in neutropenia?", "Few neutrophils to fight it, and inflammatory signs are muted, so it can progress to sepsis with fever as the only clue."],
         ["How can rapid destruction of cancer cells disrupt electrolytes and kidney function?", "Cells release potassium and phosphate (which lowers calcium), and DNA breakdown raises uric acid. Uric acid and calcium phosphate crystals injure the kidneys; potassium and calcium changes cause dysrhythmias."]]
  },

  /* ===== NEOPLASIA ===== */
  {
    id: "neo", sys: "neo", name: "Neoplasia: Benign vs. Malignant", star: true, starText: "Pushing vs. growing into",
    connect: ["Cellular Growth", "Genetics"],
    summary: "Neoplasia means abnormal cell growth; in solid tissue it can form a mass. Normally cells divide when needed, pause to repair damage, and die if the damage can't be repaired. Cancer develops when genetic changes build up and break those controls, so cells keep dividing and survive when they should die. A benign tumor stays localized but can still cause symptoms by pressing on nearby structures. A malignant tumor grows into surrounding tissue and can spread.",
    chain: {
      mechanism: ["Genetic changes accumulate and disrupt controls on division and cell death"],
      change: ["Cells keep dividing / don't die → abnormal population grows → mass"],
      cues: ["Benign: compression symptoms (pituitary adenoma → headache, vision changes)", "Malignant: local invasion and distant spread"],
      worst: ["Metastasis and organ failure"]
    },
    table: { cols: ["", "Benign", "Malignant"], rows: [
      ["Growth", "Stays localized; pushes on (compresses) tissue", "Grows into (invades) surrounding tissue"],
      ["Spread", "No", "Can spread to distant sites (metastasis)"],
      ["Can it cause symptoms?", "Yes, by pressure on nearby structures", "Yes: pressure, invasion, bleeding, organ dysfunction, systemic effects"]
    ] },
    tableTitle: "Benign vs. malignant",
    facts: [
      "The difference to notice: pushing on tissue (benign) vs. growing into it (malignant).",
      "Example of a benign mass causing symptoms: pituitary adenoma pressing on the optic chiasm.",
      "Exam focus: general concepts (abnormal growth, invasion, metastasis, grade, stage) and the colon cancer example. Specific cancers from the Engage modules won't be tested."
    ],
    qa: [["Can a benign tumor cause symptoms? How?", "Yes. It can press on nearby structures and disrupt their function, like a pituitary adenoma causing headaches and vision changes."],
         ["How does cancer develop at the cell level?", "Genetic changes build up and disrupt the controls on division and cell death, so cells divide when they shouldn't and survive when they should die."]]
  },
  {
    id: "spread", sys: "neo", name: "Invasion, Metastasis & Tumor Location",
    connect: ["Cellular Growth", "Obstruction", "Blood Loss"],
    summary: "The primary tumor is where the cancer starts. Local invasion is growth into nearby tissue (deeper into the colon wall). Metastasis is spread to a distant site through blood or lymph; a liver tumor made of colon cancer cells is metastatic colon cancer. Location explains symptoms: a colon mass narrows the lumen (cramping, bloating, hard-to-pass stool) and bleeds (blood in stool or slow iron loss).",
    chain: {
      mechanism: ["Colon lining cells lose growth control → primary tumor"],
      change: ["Mass narrows the lumen", "Fragile, highly vascular tissue bleeds", "Cells invade the wall, then enter blood or lymph → liver"],
      cues: ["Cramping, bloating, change in bowel habits, difficulty passing stool", "Blood in stool, or fatigue from iron deficiency anemia (slow bleed)", "Liver involvement → signs from another organ"],
      worst: ["Bowel obstruction", "Metastatic disease affecting other organs"]
    },
    facts: [
      "Symptoms tell you about the tumor's local effect; the liver finding tells you the extent of disease.",
      "Cancer can cause systemic effects: fatigue, weight loss, and anemia (from bleeding, chronic inflammation, or marrow involvement).",
      "Use the same reasoning anywhere: what normally happens there, and what changes as the tumor grows or spreads?"
    ],
    qa: [["How does the colon mass explain cramping, bloating, and difficulty passing stool?", "It narrows the lumen, so stool can't move through easily."],
         ["Which finding shows distant spread?", "Colon cancer cells found in a liver mass (metastasis)."]]
  },
  {
    id: "grade", sys: "neo", name: "Biopsy, Grade & Stage",
    connect: ["Cellular Growth"],
    summary: "Biopsy gives the pathologist tissue to confirm cancer and its type. Grade describes how abnormal the cells look under the microscope. Stage describes how far the cancer extends in the body: primary tumor size or depth, lymph node involvement, and distant spread. A tumor can be high grade (very abnormal cells) and still be confined to where it started.",
    chain: {
      mechanism: ["Tissue sample → microscope → imaging and workup"],
      change: ["Biopsy: is it cancer, what type?", "Grade: how abnormal?", "Stage: how far?"],
      cues: ["'Very abnormal-looking cells' = grade", "'Spread to lymph nodes or liver' = stage"],
      worst: ["Confusing grade with stage on an exam question"]
    },
    table: { cols: ["Term", "Question it answers"], rows: [
      ["Biopsy", "What does the tissue sample show? (cancer? which type?)"],
      ["Grade", "How abnormal do the tumor cells look under a microscope?"],
      ["Stage", "How far does the cancer extend in the body?"]
    ] },
    tableTitle: "From the lecture slide",
    facts: ["High grade + confined to the original site is possible: grade is about the cells, stage is about the location."],
    qa: [["A report describes a high-grade tumor confined to its original site. How can both be true?", "High grade describes how abnormal the cells look. Confined describes where the tumor is (an early stage). They measure different things."]]
  }
  );

  add("EMERGENCIES",
    ["Fever in sickle cell disease", "sickle", "Any fever, especially in a child with SCD", "Functional asplenia → overwhelming infection with encapsulated bacteria (sepsis)"],
    ["Acute chest syndrome", "sickle", "SCD with new infiltrate + fever, chest pain, tachypnea, cough, falling SpO₂", "Lung vaso-occlusion → hypoxemia → more sickling; most common cause of death"],
    ["Splenic sequestration", "sickle", "Child 1–4 with a rapidly enlarging LUQ mass and Hgb ≥2 g/dL below baseline", "Blood pools in the spleen → hypovolemic shock"],
    ["Stroke in sickle cell disease", "sickle", "Sudden weakness, aphasia, seizure, or coma in a client with SCD", "Vaso-occlusion or hemorrhage in the brain; exchange transfusion"],
    ["Priapism", "sickle", "Erection that won't go away in a client with SCD", "Vaso-occlusion trapping blood in the penis → ischemia"],
    ["Severe thrombocytopenia", "plt", "Platelets about 10,000/mm³ with headache, confusion, or GI bleeding", "Spontaneous internal bleeding, including intracranial hemorrhage"],
    ["Heparin-induced thrombocytopenia", "plt", "Platelets falling days after heparin, with a new clot", "Antibodies activate platelets → thrombosis while the count drops"],
    ["Febrile neutropenia", "wbc", "Fever in a client with leukemia or on chemo, low ANC, maybe no other signs", "Too few neutrophils to fight infection → rapid sepsis"],
    ["Leukostasis", "wbc", "AML with very high WBC and new dyspnea, vision changes, or confusion", "Blasts sludge small vessels in lungs and brain → hypoxia"],
    ["Tumor lysis syndrome", "wbc", "Fast-growing leukemia/lymphoma, often after treatment starts: dysrhythmia, cramps, falling urine output", "↑K⁺, ↑phosphate, ↓Ca²⁺, ↑uric acid → cardiac arrest, AKI"],
    ["Acute GI hemorrhage from a tumor", "neo", "Colon cancer with large bloody stools, tachycardia, falling BP", "Fragile, vascular tumor tissue bleeds → hypovolemia"]
  );

  add("LOOKALIKES",
    ["Iron deficiency vs. anemia of chronic disease", "Both have low serum iron. IDA: ferritin ↓, TIBC ↑, MCV ↓, history of bleeding. ACD: ferritin normal or ↑ (iron trapped), MCV usually normal, chronic inflammation (RA, infection)."],
    ["B12 vs. folate deficiency", "Both macrocytic with hypersegmented neutrophils. B12: neurologic signs (numbness, tingling, gait), vegan diet, pernicious anemia, PPI/metformin. Folate: no neuro signs, glossitis, alcohol, pregnancy."],
    ["Microcytic vs. normocytic vs. macrocytic", "Small: iron deficiency. Normal: acute blood loss, hemolysis, chronic disease. Large: B12 or folate deficiency, liver disease."],
    ["Hemolysis vs. bleeding", "Both drop Hgb with ↑reticulocytes. Hemolysis adds jaundice, dark urine, ↑LDH, ↑indirect bilirubin, ↓haptoglobin. Bleeding: visible or occult blood loss, no jaundice."],
    ["Sickle trait vs. sickle cell disease", "Trait: one HbS gene (carrier), usually no disease. Disease: two copies. Two carrier parents: 25% disease, 50% trait, 25% unaffected."],
    ["Splenic sequestration vs. aplastic crisis", "Both drop Hgb. Sequestration: enlarging spleen, reticulocytes ↑. Aplastic crisis (e.g., parvovirus): marrow stops, reticulocytes ↓."],
    ["ITP vs. HIT", "ITP: antibodies mark platelets for removal → bleeding; diagnosis of exclusion. HIT: after heparin, antibodies activate platelets → count falls AND clots form."],
    ["Thrombocytopenia vs. platelet dysfunction", "Same bleeding pattern (petechiae, bruising, mucosal bleeding). Low count = thrombocytopenia. Normal count = dysfunction (aspirin, uremia, liver disease)."],
    ["Primary vs. secondary thrombocytosis", "Primary (ET): marrow mutation, higher clot risk, bleeding possible at extreme counts. Secondary: reacting to infection, inflammation, iron deficiency, splenectomy; usually temporary, low clot risk."],
    ["Acute vs. chronic leukemia", "Acute: immature blasts, rapid. Chronic: mature-looking cells, gradual, often found on routine labs."],
    ["ALL vs. AML", "ALL: lymphoid blasts, most common childhood cancer, CNS involvement (LP). AML: myeloblasts with Auer rods, older adults, leukostasis; gingival hyperplasia in children."],
    ["CLL vs. CML", "CLL: abnormal mature B cells, smudge cells, infections, autoimmune hemolysis, watchful waiting. CML: Philadelphia chromosome, splenomegaly/early satiety, blast crisis, TKIs."],
    ["Leukemia vs. lymphoma", "Leukemia: starts in marrow, floods the blood, cytopenias. Lymphoma: collects in lymph nodes; painless node, B symptoms. They overlap."],
    ["Hodgkin vs. non-Hodgkin lymphoma", "Hodgkin: Reed-Sternberg cells, often neck/supraclavicular node, EBV link. Non-Hodgkin: many subtypes, indolent to aggressive, extranodal more common."],
    ["MDS vs. AML", "MDS: ineffective hematopoiesis, cytopenias, full marrow, lower blast %. AML: blasts take over (about 20%+). MDS can progress to AML."],
    ["Benign vs. malignant tumor", "Benign: localized, compresses. Malignant: invades nearby tissue and can metastasize."],
    ["Grade vs. stage", "Grade: how abnormal the cells look. Stage: how far the cancer extends (size, nodes, distant spread)."]
  );
})();
