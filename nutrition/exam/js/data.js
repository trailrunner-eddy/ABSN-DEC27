/* Content for the Nutrition exam interactive guide.
   Outline follows the "Nutrition Exam Study Guide" (built around the nine Key Concepts at the end of
   the Nutrition Pathophysiology source PDF). Details come from that guide and source. Things the guide
   marks ADDED (not in the source) are shown in gray "Beyond the source" boxes, and places where the
   source contradicts itself (marked CHECK) are called out in the facts. */

window.GUIDE = {
  key: "nutrition-exam-v1",
  course: "Semester 1 · Nutrition",
  title: "Nutrition Exam Study Lab",
  heroArt: "🥗",
  heroText: "Your exam is the <b>70-question ATI Nutrition CMS</b>. Start on the <b>ATI CMS</b> page for the plan and a 70-question practice test. Every topic moves from <b>why the body needs it → what you assess → what the diet or nursing action is → what you teach</b>.",
  formats: ["Multiple choice", "Select all that apply", "Fill in the blank", "Ordered response", "Select N", "Matrix grid", "Drop-down cloze"],
  formatNote: "The exam is the proctored ATI Nutrition CMS (70 questions). ATI uses mostly multiple choice and select all that apply, plus fill-in-the-blank calculations and ordered response, so the ATI-style set uses those formats. The rest of the bank adds a few Next Gen formats for extra practice. Every question is rated easy, medium, or hard and explains the answer.",
  chainTitle: "The nutrition chain",
  chainNote: "Why it matters → what you assess → diet and nursing actions → teaching and red flags.",
  chainShort: "a why → assess → act → teach chain",
  chainKeys: [["why", "1 · Why it matters"], ["assess", "2 · Assess"], ["act", "3 · Diet & nursing actions"], ["teach", "4 · Teach / red flags"]],
  connectLabel: "Connects to:",
  emphasisTitle: "Highest-yield numbers",
  ctTitle: "The nine Key Concepts",
  ctNote: "Your source ends with these. Explain each one out loud, then tap to check.",
  frame: "Nutrition questions are clinical judgment questions. Recognize cues (weight change, labs, intake, swallowing), connect them to the condition, then pick the action. Airway beats everything: an aspiration risk or a choking client comes before any diet teaching. After that, unstable electrolytes and glucose come before chronic diet changes.",
  verdictTitle: "Right Call?",
  verdictIntro: "Read the choice or finding, then decide: is it appropriate, does it need teaching or follow-up, or should the nurse stop and report now?",
  verdict: [["Appropriate", "good"], ["Needs teaching / follow up", "warn"], ["Stop & report now", "bad"]],
  verdictHelp: [
    ["Appropriate", "fits the client's diet order, condition, and stage of life."],
    ["Needs teaching / follow up", "a wrong food choice, a misunderstanding, or a borderline value: teach, reassess, or refer to the dietitian."],
    ["Stop & report now", "threatens the airway, causes dangerous electrolyte or glucose shifts, or signals a complication (aspiration, refeeding, fluid overload, line infection)."]
  ],
  beyondLabel: "Beyond the source",
  credit: ""
};

window.SYSTEMS = [
  { id: "basics", name: "Foundations: Nutrients & Food Safety", short: "Foundations", icon: "🥦", weight: "Section 0 · Ch. 1, 4, 5" },
  { id: "vital", name: "Nutrition as a Vital Sign", short: "Vital Sign", icon: "📏", weight: "Key Concept 1 · Ch. 3, 11, 12" },
  { id: "heal", name: "Nutrition Supports Healing", short: "Healing", icon: "🩹", weight: "Key Concept 2 · Ch. 1, 2, 12" },
  { id: "breath", name: "Nutrition & Breathing", short: "Breathing", icon: "🫁", weight: "Key Concept 3 · Ch. 12, 17" },
  { id: "heart", name: "Food as Prevention & Treatment: Heart", short: "Heart", icon: "🫀", weight: "Key Concept 4 · Ch. 13" },
  { id: "renal", name: "The Kidney as Nutrition Regulator", short: "Kidney", icon: "🫘", weight: "Key Concept 5 · Ch. 15" },
  { id: "gi", name: "From Food to Function: GI", short: "GI", icon: "🍽️", weight: "Key Concept 6 · Ch. 2, 14" },
  { id: "life", name: "Nutrition Across Life & Diabetes", short: "Lifespan & DM", icon: "👶", weight: "Key Concept 7 · Ch. 2, 7, 16" },
  { id: "blood", name: "Blood Cell Production & Cancer", short: "Blood & Cancer", icon: "🩸", weight: "Key Concept 8 · Ch. 13, 17" },
  { id: "cant", name: "When Patients Can't Eat Normally", short: "Can't Eat", icon: "🧪", weight: "Key Concept 9 · Ch. 8, 9, 10, 11" }
];

window.EMPHASIS = [
  "Carb 4, protein 4, fat 9 kcal/g. AMDR: carb 45–65%, protein 10–35%, fat 20–35%.",
  "Protein RDA 0.8 g/kg. Fiber 25 g (F) / 38 g (M). Minimum water 1,500 mL/day.",
  "BMI: <18.5 under · 18.5–24.9 healthy · 25–29.9 overweight · ≥30 obese.",
  "Albumin 3.5–5 g/dL (slow). Prealbumin 15–36 mg/dL (best recent marker; <10.7 = severe).",
  "Nutrition screening within 24 hours of admission (The Joint Commission).",
  "Sodium <2,300 mg/day; DASH works toward 1,500 mg.",
  "Hypoglycemia <70: 15 g fast carb, recheck in 15 minutes.",
  "Tube feeding: HOB ≥30° during and 30–60 min after. Placement confirmed by X-ray first.",
  "TPN with dextrose >10% needs a central line. Never speed it up to catch up.",
  "Refeeding syndrome: K⁺, Mg²⁺, and phosphorus crash when feeding restarts. Start slow."
];

window.CRITICAL_THINKING = [
  ["1 · Nutrition as a Vital Sign: why assess nutrition in every patient?", "Hydration, electrolytes, and nutrient status keep every system in homeostasis, and a normal-looking weight can hide malnutrition. Screen within 24 hours, track weight change %, BMI, prealbumin, I&O, and refer at-risk clients to the dietitian."],
  ["2 · Nutrition Supports Healing: how do protein and vitamins affect repair and infection risk?", "Protein builds tissue, antibodies, and albumin (keeps fluid in vessels). Vitamin C makes collagen, A supports tissue growth and immunity, K clots. Stress hormones break protein down fast, so without enough protein and calories, wounds heal slowly and infection risk rises."],
  ["3 · Nutrition & Breathing: why does respiratory disease raise calorie needs?", "Labored breathing makes respiratory muscles work all day and inflammation raises metabolism. If intake doesn't keep up, the body breaks down muscle, including the diaphragm. Fluids keep secretions thin. Small, frequent, dense meals; rest and sit up before eating."],
  ["4 · Food as Prevention and Treatment: how does diet treat HTN, atherosclerosis, and HF?", "DASH (low sodium, high K⁺ and Ca²⁺) lowers BP. TLC (saturated fat <7%, cholesterol <200 mg, no trans fat, soluble fiber, omega-3s) lowers LDL. HF: sodium restriction, about 2 L fluid, daily weights."],
  ["5 · The Kidney as Nutrition Regulator: why is diet central in kidney disease?", "Kidneys clear urea (from protein), K⁺, phosphorus, sodium, and fluid. When they fail, intake has to drop: protein restricted before dialysis (rises on dialysis), plus low K⁺, phosphorus, sodium, and fluid. Phosphate binders with every meal."],
  ["6 · From Food to Function: how does GI disease change nutrient needs?", "Digestion and absorption happen mostly in the small intestine with bile and pancreatic enzymes. Gastric surgery causes dumping and B12/iron loss; celiac and Crohn's cause malabsorption; pancreatitis needs bowel rest; ostomies lose fluid and electrolytes."],
  ["7 · Nutrition Across Life and Metabolism: how do needs change, and how does diet manage diabetes?", "BMR rises with growth, pregnancy, fever, and hyperthyroidism and falls with aging and starvation. Pregnancy adds calories, protein, folic acid, and iron. Older adults need fewer calories but the same or more vitamins. Diabetes: consistent carbs, carb counting, Rule of 15."],
  ["8 · Nutrition and Blood Cell Production: how do deficiencies affect hematopoiesis and cancer care?", "RBCs need iron (small pale cells), B12, and folate (large cells). B12 deficiency adds neuro signs. Cancer raises metabolism and causes anorexia and negative nitrogen balance: small, calorie- and protein-dense meals and symptom-specific teaching."],
  ["9 · When Patients Can't Eat Normally: how do neuro disorders affect eating, and what replaces it?", "Stroke, Parkinson's, and dementia impair swallowing, so aspiration is the danger. Use modified textures and thickened liquids. If the gut works, use it (enteral); if not, parenteral. Each has safety rules for placement, HOB, flushing, and line care."]
];

window.STRATEGY = [
  ["Airway first", "A choking, coughing, or aspirating client beats every teaching question. Dysphagia and HOB questions are airway questions."],
  ["Find the condition, then the restriction", "CKD before dialysis = restrict protein; on dialysis = more protein. HF = sodium and fluid. Celiac = gluten. Read for the stage, not just the disease name."],
  ["For food-choice items, test each food", "Ask: does this food break the restriction? Hidden sodium (canned soup, deli meat), hidden gluten (barley, graham crackers), hidden potassium (bananas, potatoes, tomatoes)."],
  ["For SATA, judge each option alone", "Treat every option as true or false against the stem. Don't look for a pattern in how many to pick."],
  ["Numbers are free points", "Learn the Must-Know Numbers list cold: kcal/g, AMDR, BMI, albumin, prealbumin, HOB 30°, Rule of 15, sodium limits."],
  ["Teaching answers: consistent, not eliminated", "Warfarin + vitamin K: keep it consistent. Diabetes: sugar allowed if counted. Extreme “never eat” answers are usually wrong unless it's a true allergy, celiac, MAOI tyramine, or honey under 1."]
];

window.DISORDERS = [
/* ================= SECTION 0: FOUNDATIONS ================= */
{
  id: "macros", sys: "basics", name: "Macronutrients & DRIs", star: true, starLabel: "Must-know numbers",
  sub: "RDA, EAR, AI, UL, AMDR; carbohydrate, protein, fat, fiber",
  connect: ["Energy", "Healing", "Diabetes", "Heart"],
  summary: "Carbohydrate, protein, and fat are the energy-yielding nutrients. Carbs and protein give 4 kcal/g and fat gives 9 kcal/g, which makes fat the most energy-dense. The DRIs tell you how much is enough (RDA, EAR, AI) and how much is too much (UL).",
  chain: {
    why: ["Carbs fuel the brain (minimum 130 g/day) and spare protein", "Protein builds and repairs tissue, enzymes, hormones, antibodies, and keeps fluid and acid-base balance", "Fat stores energy, builds cell walls and hormones, insulates, and carries vitamins A, D, E, K"],
    assess: ["Diet history: types and amounts of each macronutrient", "Signs of protein deficit: muscle loss, edema, poor healing", "Fiber intake vs. the AI (25 g F / 38 g M)"],
    act: ["Aim for AMDR: carb 45–65%, protein 10–35%, fat 20–35% (saturated ≤10%)", "Protein RDA 0.8 g/kg for adults", "Combine incomplete plant proteins over the day (beans + rice)"],
    teach: ["Increase fiber gradually with fluids", "Children under 2 need more fat for brain growth", "Severe protein-calorie deficit = marasmus or kwashiorkor"]
  },
  table: {
    cols: ["", "Carbohydrate", "Protein", "Fat"],
    rows: [
      ["kcal/g", "4", "4", "9 (most energy-dense)"],
      ["AMDR", "45–65%", "10–35%", "20–35% (saturated ≤10%)"],
      ["Main job", "Energy, especially the brain; spares protein", "Build and repair tissue, enzymes, hormones, antibodies, fluid and acid-base balance", "Stored energy, cell walls, hormones, insulation, absorbs A, D, E, K"],
      ["Types", "Mono (glucose, fructose, galactose), di (sucrose, lactose, maltose), poly (starch, fiber, glycogen)", "Complete (animal + soy, all 9 essential amino acids); incomplete (plants)", "Saturated (solid, animal); unsaturated mono (olive, canola, avocado) and poly (corn, soy, fish); omega-3 and -6 essential"],
      ["Key fact", "Excess → glycogen (liver, muscle) → fat", "RDA 0.8 g/kg", "LDL “bad” carries cholesterol to tissues; HDL “good” carries it back to the liver"]
    ]
  },
  table2: {
    title: "Dietary Reference Intakes",
    cols: ["Term", "Meaning"],
    rows: [
      ["RDA", "Meets the needs of most healthy people of a given age and sex"],
      ["EAR", "Meets the needs of half a population (used to set the RDA)"],
      ["AI", "Used when there isn't enough data for an RDA; based on what healthy people eat"],
      ["UL", "Maximum safe intake; exists for nutrients that can cause harm in excess"],
      ["AMDR", "Recommended percentage of calories from carbs, protein, and fat"]
    ]
  },
  facts: [
    "Fiber is indigestible plant carbohydrate: adds bulk, stimulates peristalsis, lowers cholesterol, steadies glucose, lowers colon cancer risk.",
    "Liver glycogen keeps blood glucose steady between meals.",
    "CHECK: one chapter says adequate protein creates a “protein-sparing effect.” It is adequate carbohydrate (and fat) that spares protein so it isn't burned for energy.",
    "Complete proteins: animal foods and soy. Plants are incomplete, so vegetarians combine sources over the day."
  ],
  qa: [
    ["A meal has 20 g carbohydrate, 10 g protein, and 10 g fat. How many calories?", "20 × 4 + 10 × 4 + 10 × 9 = 80 + 40 + 90 = 210 kcal."],
    ["Which DRI is the maximum safe amount?", "The UL (Tolerable Upper Intake Level)."],
    ["Why does a client need at least 130 g carbohydrate a day?", "It's the brain's minimum glucose need, and enough carbohydrate spares protein for tissue repair."]
  ]
},
{
  id: "vitamins", sys: "basics", name: "Vitamins",
  sub: "Water-soluble (C, B-complex) vs. fat-soluble (A, D, E, K)",
  connect: ["Anemia", "Healing", "Warfarin", "Malabsorption"],
  summary: "Water-soluble vitamins (C and the B group) aren't stored much, so they need regular intake. Fat-soluble vitamins (A, D, E, K) are stored in the liver and fat, so they can build up to toxic levels, and they are poorly absorbed whenever fat absorption is impaired.",
  chain: {
    why: ["Fat-soluble vitamins ride with fat: cystic fibrosis, celiac, Crohn's, bypass surgery, and cirrhosis cause A, D, E, K deficits", "B12 comes only from animal foods and needs intrinsic factor", "Vitamin K makes clotting factors (prothrombin)"],
    assess: ["Diet pattern (vegan, alcohol use, malabsorption)", "Signs: bleeding gums (C), night blindness (A), paresthesias (B12), bleeding (K), cracked lips (B2)", "Medications such as warfarin"],
    act: ["Give vitamin D with calcium", "Keep vitamin K intake consistent on warfarin", "Smokers need 35 mg/day more vitamin C"],
    teach: ["Vitamin A in excess is teratogenic in pregnancy", "Vegans need B12 from fortified foods or supplements", "High-dose B6 supplements can cause sensory neuropathy"]
  },
  table: {
    cols: ["Vitamin", "Key role", "Sources", "Deficiency / excess"],
    rows: [
      ["C (ascorbic acid)", "Collagen, wound healing, iron absorption, immunity", "Citrus, tomatoes, peppers, greens, strawberries", "Scurvy: bleeding gums, loose teeth, joint pain"],
      ["B1 thiamin", "Energy metabolism, nerves, appetite", "Meats, grains, legumes", "Beriberi (confusion, ataxia, tachycardia); refeeding and alcohol use"],
      ["B2 riboflavin", "Releases energy from cells", "Milk, meats, dark greens", "Cheilosis (cracked lips), glossitis, dermatitis"],
      ["B3 niacin", "Fat, glucose, alcohol metabolism", "Meats, legumes, enriched grains", "Pellagra: skin lesions, GI and CNS changes (dementia)"],
      ["B6 pyridoxine", "Hemoglobin and neurotransmitters", "Meats, grains, legumes", "Anemia, CNS changes; high-dose supplements → neuropathy"],
      ["Folate", "Cell division, hemoglobin; prevents neural tube defects", "Liver, dark greens, OJ, legumes, fortified grains", "Megaloblastic anemia, neural tube defects"],
      ["B12 cobalamin", "RBC maturation, activates folate, nerves", "Animal foods only", "Pernicious anemia, paresthesias, poor coordination"],
      ["A", "Vision, tissue growth, immunity", "Orange/yellow produce, fatty fish, dairy, eggs", "Night blindness, xerophthalmia; teratogenic in excess"],
      ["D", "Calcium and phosphorus absorption; bone", "Sunlight, fatty fish, eggs, fortified milk", "Rickets (children), osteomalacia (adults); excess → hypercalcemia"],
      ["E", "Antioxidant for cell membranes", "Vegetable oils, nuts", "Rare; anemia"],
      ["K", "Clotting (prothrombin), bone", "Dark green leafy vegetables, eggs", "Bleeding. Antidote for warfarin"]
    ]
  },
  facts: [
    "Water-soluble = C + B complex (regular intake). Fat-soluble = A, D, E, K (stored, can be toxic).",
    "Malabsorption of fat (CF, celiac, Crohn's, cirrhosis, bariatric surgery) means A, D, E, K deficiency.",
    "CHECK: the source calls B6-deficiency anemia “macrocytic.” Standard references say microcytic; B12 and folate are the macrocytic anemias. Ask your instructor which they expect."
  ],
  qa: [
    ["A client with cystic fibrosis is at risk for which vitamin deficiencies?", "Fat-soluble A, D, E, K, because no pancreatic enzymes means poor fat absorption."],
    ["Which vitamin is the antidote for warfarin?", "Vitamin K."],
    ["Why does a strict vegan need a B12 source?", "B12 is found only in animal foods."]
  ]
},
{
  id: "minerals", sys: "basics", name: "Minerals, Electrolytes & Water",
  sub: "Sodium, potassium, calcium, magnesium, phosphorus, iron, iodine, fluoride; hydration",
  connect: ["Kidney", "Heart", "Hydration", "Anemia"],
  summary: "Major minerals are needed at 100 mg/day or more (Ca, P, Na, K, Mg, Cl, S); trace minerals at 20 mg/day or less (iron, iodine, zinc, copper, selenium, fluoride). Water is the nutrient you can survive only a few days without.",
  chain: {
    why: ["Electrolytes control nerve, muscle, and heart function", "Kidneys lose most water; skin, lungs, and feces lose the rest (insensible loss about 1,000 mL)", "Children and older adults dehydrate fastest"],
    assess: ["Turgor, mental status, orthostatic BP, urine output and concentration, mucous membranes", "Chvostek's and Trousseau's signs (low calcium)", "ECG changes with K⁺, Ca²⁺, Mg²⁺ imbalances"],
    act: ["Minimum 1,500 mL water/day; AI about 2.7 L (F) / 3.7 L (M) total", "Give oral K⁺ with meals", "Give oral calcium with vitamin D; vitamin C boosts iron absorption"],
    teach: ["Thirst is a late sign, especially in older adults", "Liquid iron stains teeth; iron causes constipation", "Caffeine's diuretic effect is small in regular users"]
  },
  table: {
    cols: ["Mineral", "Sources", "Too little", "Too much"],
    rows: [
      ["Sodium", "Table salt, processed foods", "Muscle cramps, anorexia, memory loss", "Fluid retention, HTN, disorientation"],
      ["Potassium", "Bananas, oranges, potatoes, tomatoes, avocados, dried fruit, dairy, meats", "Dysrhythmias, cramps, confusion", "Dysrhythmias, weakness, numbness"],
      ["Calcium", "Dairy, broccoli, kale, fortified grains", "Tetany, +Chvostek's and Trousseau's, ECG changes, osteoporosis", "Constipation, kidney stones, lethargy, ↓ reflexes"],
      ["Magnesium", "Greens, nuts, whole grains, tuna, halibut, chocolate", "Weakness, dysrhythmias, seizures, ↑ BP", "Diarrhea, hypotension, bradycardia, lethargy"],
      ["Phosphorus", "Dairy, meat, eggs, legumes", "Rare", "↓ Calcium"],
      ["Iron", "Heme (meat, fish, poultry: best absorbed); non-heme (beans, grains, vegetables)", "Iron deficiency anemia", "Toxicity; GI upset, constipation"],
      ["Iodine", "Seafood, iodized salt", "Goiter", "Thyrotoxicosis"],
      ["Fluoride", "Fluoridated water", "Dental caries", "Fluorosis"]
    ]
  },
  facts: [
    "Minimum water 1,500 mL/day = about 1,000 mL insensible loss + at least 500 mL urine.",
    "Adult I&O: intake 2–3 L/day; output 1,750–3,000 mL/day.",
    "Hypocalcemia: positive Chvostek's (facial twitch) and Trousseau's (carpal spasm with BP cuff).",
    "Heme iron (animal) is absorbed better than non-heme (plant)."
  ],
  qa: [
    ["A client has a positive Trousseau's sign. Which electrolyte is low?", "Calcium."],
    ["Why is 1,500 mL the minimum daily water intake?", "About 1,000 mL is lost insensibly and the kidneys need at least 500 mL of urine to clear wastes."],
    ["How should oral potassium be taken?", "With meals, to reduce GI irritation."]
  ]
},
{
  id: "guidelines", sys: "basics", name: "Healthy Eating Guidelines & Labels",
  sub: "Dietary Guidelines, MyPlate, activity, vegetarian diets, food labels",
  connect: ["Teaching", "Heart", "Diabetes", "Cancer prevention"],
  summary: "The Dietary Guidelines for Americans (updated every 5 years) promote a healthy pattern at every life stage, customized to culture and budget, built on nutrient-dense foods, with limits on added sugar, saturated fat, sodium, and alcohol. MyPlate turns that into a picture.",
  chain: {
    why: ["Diet pattern drives heart disease, diabetes, obesity, and some cancers", "Labels let clients see sodium, fat, sugar, and allergens"],
    assess: ["What the client eats in a typical day", "Culture, budget, and literacy (label reading)", "Activity level"],
    act: ["Added sugars <10% of calories; saturated fat <10%; sodium <2,300 mg/day", "Alcohol ≤2 drinks/day men, ≤1 women", "Half the plate fruits and vegetables; at least half of grains whole"],
    teach: ["Activity: ≥150 min/week moderate (or 75 vigorous) + strengthening ≥2 days", "% Daily Value is based on 2,000 kcal; ingredients listed heaviest first", "Vegans risk low B12, vitamin D, calcium, omega-3s"]
  },
  table: {
    cols: ["Diet", "What's excluded"],
    rows: [
      ["Vegan", "All animal products"],
      ["Lacto-vegetarian", "Meat, fish, eggs (dairy allowed)"],
      ["Lacto-ovo vegetarian", "Meat and fish (dairy and eggs allowed)"]
    ]
  },
  tableTitle: "Vegetarian patterns",
  facts: [
    "Infants: only breast milk (or iron-fortified formula) for about 6 months + vitamin D; solids around 6 months; no added sugar under 2.",
    "Labels must declare the major allergens: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy.",
    "Heart health: saturated fat 7% or less and DASH. Bones: calcium, vitamin D, weight-bearing exercise.",
    "Cancer prevention: plant-based, high fiber, limit red/processed meat and alcohol, stay active."
  ],
  qa: [
    ["How are ingredients ordered on a food label?", "By weight, heaviest first."],
    ["What portion of the plate should be fruits and vegetables?", "Half."],
    ["Which nutrients is a vegan client most at risk of missing?", "B12, vitamin D, calcium, and omega-3 fatty acids."]
  ]
},
{
  id: "foodsafety", sys: "basics", name: "Food Safety & Food–Drug Interactions", star: true, starLabel: "Common exam traps",
  sub: "Storage, cooking temps, pathogens, allergy vs. intolerance, grapefruit, vitamin K, tyramine",
  connect: ["Infection", "Pregnancy", "Pharmacology"],
  summary: "Foodborne illness is most dangerous for children, older adults, pregnant clients, and immunocompromised clients. Food also changes how drugs work: grapefruit raises drug levels, vitamin K lowers warfarin's effect, and tyramine with an MAOI can cause a hypertensive crisis.",
  chain: {
    why: ["Viruses cause most foodborne illness, but bacteria cause most deaths", "Listeria crosses the placenta (miscarriage, stillbirth)", "Grapefruit blocks drug metabolism → higher drug levels"],
    assess: ["Who is high risk (pregnant, very young or old, immunocompromised)", "Current meds: warfarin, MAOIs, levodopa", "Allergy (immune, every time, can be severe) vs. intolerance (dose-dependent)"],
    act: ["Fridge 40 °F (4 °C) or colder; perishables out ≤2 hr (1 hr above 90 °F)", "Cook steaks/roasts 145 °F, ground beef and eggs 160 °F, chicken 165 °F, then rest 3 min", "Only feed clients who are awake with an intact gag and swallow reflex"],
    teach: ["MAOIs (phenelzine, selegiline): avoid aged cheese, cured/smoked meats and fish, overripe avocado", "Warfarin: keep vitamin K intake consistent, don't eliminate greens", "High-protein meals reduce levodopa absorption"]
  },
  table: {
    cols: ["Pathogen", "Source", "Key points"],
    rows: [
      ["Salmonella", "Raw or undercooked meat, poultry, eggs, fish, dairy", "Fever, cramps, diarrhea, vomiting; can be fatal"],
      ["E. coli O157:H7", "Undercooked ground beef", "Severe pain, bloody diarrhea; hemolytic uremic syndrome (anemia + kidney failure)"],
      ["Listeria", "Soft cheese, raw milk, deli meats, raw vegetables", "Dangerous in pregnancy, newborns, immunocompromised"],
      ["Norovirus", "Produce, salads, oysters, water, sick food handlers", "Very contagious; 24–48 hr onset; projectile vomiting, watery diarrhea"]
    ]
  },
  table2: {
    title: "Food–medication interactions",
    cols: ["Food", "Interaction"],
    rows: [
      ["Grapefruit juice", "Blocks metabolism of many drugs → higher levels"],
      ["Vitamin K foods", "Reduce warfarin effect: keep intake consistent"],
      ["High-protein meals", "Reduce levodopa absorption"],
      ["Tyramine (aged cheese, cured meats, overripe avocado)", "With MAOIs → hypertensive crisis"],
      ["Take with food", "Ibuprofen, amoxicillin, bupropion (less GI upset)"],
      ["Herbals", "Can interact; always report to the provider"]
    ]
  },
  facts: [
    "Storage: poultry, ground meat, fish 1–2 days; steaks/roasts 3–5 days; eggs 3–5 weeks. Discard dented, rusted, or leaking cans.",
    "Sell-by = last day to sell; use-by = best quality; expiration = last day to eat.",
    "Infants often outgrow cow's milk and soy allergies by about age 4."
  ],
  qa: [
    ["Minimum internal temperature for chicken?", "165 °F, then a 3-minute rest."],
    ["A pregnant client asks about deli turkey and brie. Teaching?", "Avoid them (Listeria risk); deli meat should be heated until steaming."],
    ["How does an allergy differ from an intolerance?", "An allergy is an immune reaction every time and can be severe; an intolerance depends on how much is eaten."]
  ]
},

/* ================= KEY CONCEPT 1: VITAL SIGN ================= */
{
  id: "screen", sys: "vital", name: "Screening & Anthropometrics", star: true, starLabel: "Calculations",
  sub: "24-hour screening, diet history, weight change %, BMI, IBW, waist",
  connect: ["Assessment", "Malnutrition", "Obesity"],
  summary: "The Joint Commission requires nutrition screening within 24 hours of admission. Nurses screen, monitor, and evaluate; the dietitian does the full assessment for at-risk clients. Weight trends tell you more than one weight.",
  chain: {
    why: ["Malnutrition slows healing and raises infection risk", "Day-to-day weight change is usually fluid", "Muscle can inflate BMI, so a “healthy” BMI doesn't rule out malnutrition"],
    assess: ["Diet history: timing, type, amount of meals, snacks, fluids (including caffeine), preparation, eating out, allergies, supplements, meds", "Physical signs: dry brittle hair, dry skin, poor healing, fat or muscle loss, weakness", "Weight same time of day, similar clothing; height shoes off (infants lying down)"],
    act: ["% weight change = (usual − current) ÷ usual × 100", "BMI = weight (kg) ÷ height (m)²", "Refer at-risk clients to the dietitian"],
    teach: ["Severe loss (chronic): >5% in 1 month, >7.5% in 3 months, >10% in 6 months, >20% in 1 year", "Severe loss (acute illness): >2% in 1 week, >5% in 1 month, >7.5% in 3 months", "Central obesity: waist >35 in (F), >40 in (M)"]
  },
  table: {
    cols: ["Measure", "Values"],
    rows: [
      ["BMI", "<18.5 underweight · 18.5–24.9 healthy · 25–29.9 overweight · ≥30 obese"],
      ["IBW (Hamwi), females", "100 lb for 5 ft + 5 lb per inch over"],
      ["IBW (Hamwi), males", "106 lb for 5 ft + 6 lb per inch over"],
      ["Waist (central obesity)", "Females >35 in; males >40 in"],
      ["Waist-to-hip ratio", "≥0.8 (F), ≥0.95 (M)"]
    ]
  },
  beyond: "Practice math (added by the study guide): a 5'6\" female has an IBW of 100 + (6 × 5) = 130 lb. Usual weight 150 lb, now 135 lb: (15 ÷ 150) × 100 = 10% loss. Over 6 months, that meets “severe.”",
  facts: [
    "Screen within 24 hours of admission (TJC).",
    "The nurse screens and monitors; the dietitian does the comprehensive assessment.",
    "Physical signs of poor nutrition overlap with other conditions, so confirm with history and labs."
  ],
  qa: [
    ["A 5'4\" female. Ideal body weight?", "100 + (4 × 5) = 120 lb."],
    ["Usual weight 200 lb, now 180 lb over 3 months. Severe?", "(20 ÷ 200) × 100 = 10%. Yes: more than 7.5% in 3 months."],
    ["A client weighs 70 kg and is 1.75 m tall. BMI?", "70 ÷ (1.75 × 1.75) = 70 ÷ 3.06 ≈ 22.9 (healthy)."]
  ]
},
{
  id: "labs", sys: "vital", name: "Nutrition Labs & Nitrogen Balance",
  sub: "Albumin, prealbumin, BUN, creatinine, nitrogen balance, I&O",
  connect: ["Healing", "TPN", "Kidney"],
  summary: "Albumin (3.5–5 g/dL) changes slowly, so it reflects long-term status. Prealbumin (15–36 mg/dL) has a short half-life, so it is the best marker of recent nutrition and of response to TPN. Nitrogen balance shows whether the body is building (positive) or breaking down (negative).",
  chain: {
    why: ["Albumin holds fluid in the vessels; low albumin → edema", "Prealbumin falls fast with poor intake, so it shows change within days", "Both fall with inflammation and liver disease, not just poor intake"],
    assess: ["Albumin, prealbumin, BUN, creatinine, CBC, electrolytes", "Nitrogen in = protein (g) ÷ 6.25; nitrogen out = 24-hr urine urea nitrogen + 4", "Fluid I&O"],
    act: ["Prealbumin <10.7 mg/dL = severe deficit: notify and involve the dietitian", "Use prealbumin and weight to judge TPN effectiveness"],
    teach: ["Positive balance: growth, pregnancy, recovery", "Negative balance: starvation, trauma, illness (catabolic)"]
  },
  table: {
    cols: ["Lab", "Expected", "What it tells you"],
    rows: [
      ["Albumin", "3.5–5 g/dL", "Long-term status; slow to change; affected by liver disease, kidney disease, injury"],
      ["Prealbumin", "15–36 mg/dL (<10.7 = severe)", "Recent nutrition and TPN response; falls with inflammation and liver disease"],
      ["BUN", "↓ with low protein intake", "Protein intake (and kidney function)"],
      ["Creatinine", "↓ with low muscle mass", "Muscle mass (and kidney function)"],
      ["Sodium", "↑ can reflect dehydration", "Hydration"]
    ]
  },
  facts: [
    "Prealbumin = best indicator of recent nutrition (short half-life).",
    "Albumin = slow; good for chronic status, poor for tracking a week of change.",
    "Nitrogen balance negative = losing protein = catabolic."
  ],
  qa: [
    ["Which lab best shows whether TPN is working after one week?", "Prealbumin, because its short half-life shows recent change."],
    ["A client's albumin is 2.6 g/dL. What finding might you see?", "Edema, because low albumin lets fluid leak out of the vessels."],
    ["Protein intake 75 g; 24-hr UUN 10 g. Nitrogen balance?", "In = 75 ÷ 6.25 = 12 g. Out = 10 + 4 = 14 g. Balance = −2 g (negative, catabolic)."]
  ]
},
{
  id: "barriers", sys: "vital", name: "Risk Factors, SDOH & Barriers",
  sub: "Food insecurity, deserts and swamps, dentition, dementia, sensory change, NPO",
  connect: ["Older adults", "Teaching", "Dysphagia"],
  summary: "Biophysical, psychological, and social factors all affect intake. Social determinants of health (neighborhood, social context, money, access, education) explain why a client may know what to eat and still not be able to eat it.",
  chain: {
    why: ["Food insecurity = limited or uncertain access to food", "Food desert = far from grocery stores; food swamp = flooded with fast food", "Processed food is cheap but high in sodium, fat, and calories"],
    assess: ["Dentition, chewing, swallowing", "Income, transportation, housing, literacy", "Depression, stress, cognition; NPO or liquids >24 hr; polypharmacy"],
    act: ["Refer to dietitian if NPO or on liquids for more than 24 hr", "Pharmacist for med interactions; social services, food banks, Meals on Wheels", "Small frequent meals; oral care"],
    teach: ["Point misinformed clients to MyPlate, AHA, Dietary Guidelines", "Food journal, portion and label teaching"]
  },
  table: {
    cols: ["Barrier", "Key nursing actions"],
    rows: [
      ["Poor dentition", "Limit sticky processed carbs; fluoride; dental care; dietitian. Risk factor for dysphagia"],
      ["Low income / no access", "Dietitian, label teaching, social services, community meals, food banks, Meals on Wheels"],
      ["Dementia", "Same time, place, people; few distractions; simple menu; small pieces; cue “chew, then swallow”; stroking the throat can prompt a swallow"],
      ["Sensory changes", "Help with tray setup (vision); cool foods for aversions or nausea; tangy or spiced foods if taste is dull"],
      ["Swallowing impairment", "Watch during meals, suction at bedside; thickened liquids; rest before meals; chin tuck"],
      ["Jaw wired", "Liquid diet; help place the straw; encourage fluids"],
      ["NPO, polypharmacy", "Dietitian if NPO or liquids >24 hr; pharmacist; small frequent meals; oral care"]
    ]
  },
  facts: [
    "SDOH domains: neighborhood, social context, economic stability, health care access, education.",
    "Discourage alcohol-based mouthwash in clients with stomatitis.",
    "Liquid supplements go between meals, not with them."
  ],
  qa: [
    ["A client with dementia eats little. Two environment changes?", "Same time, place, and people at meals with few distractions; simple menu with finger foods or small pieces, and cue “chew, then swallow.”"],
    ["When should a client on clear liquids be referred to the dietitian?", "When NPO or on clear/full liquids for more than 24 hours."]
  ]
},
{
  id: "malnut", sys: "vital", name: "Malnutrition", star: true, starLabel: "High yield",
  sub: "Diagnosis, marasmus vs. kwashiorkor, older adults, boosting intake, mealtime environment",
  connect: ["Healing", "Labs", "Refeeding"],
  summary: "Malnutrition is diagnosed when at least two of these are present: inadequate calorie intake, unintentional weight loss, loss of muscle mass, or decreased functional status. Marasmus is too little of everything; kwashiorkor is too little protein with enough calories.",
  chain: {
    why: ["Inflammation from chronic disease (COPD, HIV, CF, CKD, alcohol use) or acute injury (burns, sepsis, trauma) raises needs", "Older adults: dental and swallowing problems, less taste and smell, polypharmacy, isolation"],
    assess: ["Appetite, daily weight, I&O (can be delegated to AP)", "Calorie counts", "Prealbumin, albumin, electrolytes"],
    act: ["Pain meds before meals; remove odors, bedpans, emesis basins", "Hygiene and oral care first; sit up in a chair; glasses, hearing aids, dentures in", "Open packages, cut food; let the client feed themselves when able; no non-urgent procedures at mealtime"],
    teach: ["Boost calories: butter, oil, mayo, gravy, honey, whipped cream", "Boost protein: cheese, peanut butter, nuts, yogurt, milk instead of water, dry milk powder", "Route of support: oral > enteral > parenteral"]
  },
  table: {
    cols: ["Type", "Key features"],
    rows: [
      ["Marasmus", "Too few calories and protein; wasted fat and muscle; serum proteins may look normal"],
      ["Kwashiorkor", "Too little protein with adequate calories; weight may look normal; low serum protein → edema"],
      ["Chronic disease-related", "Mild/moderate inflammation: alcohol use disorder (A, D, E, K deficits with cirrhosis), COPD, HIV, CF, CKD"],
      ["Acute illness/injury", "Severe inflammation: burns, sepsis, major trauma"]
    ]
  },
  facts: [
    "Diagnosis needs at least 2 of: low calorie intake, unintentional weight loss, muscle loss, decreased function.",
    "Kwashiorkor can hide behind a normal weight because of edema.",
    "Weighing and I&O can be delegated; interpreting them cannot."
  ],
  qa: [
    ["A child has edema, a swollen belly, and a normal weight but low albumin. Which type?", "Kwashiorkor (protein deficit with adequate calories)."],
    ["Name three things to do before a meal tray arrives.", "Give pain meds, do oral care and hygiene, sit the client up with glasses, hearing aids, and dentures in, and remove odors and bedpans."]
  ]
},
{
  id: "obesity", sys: "vital", name: "Obesity & Bariatric Surgery",
  sub: "Causes, complications, treatment, medications, surgery criteria",
  connect: ["Heart", "Diabetes", "Dumping syndrome"],
  summary: "Obesity happens when intake exceeds expenditure, shaped by genetics, hormones (leptin, ghrelin), behavior, environment, and gut bacteria. Weight stigma can lead clients to avoid care, so language matters.",
  chain: {
    why: ["Complications: CAD, HTN, hyperlipidemia, sleep apnea, type 2 DM, fatty liver, GERD, gallstones, osteoarthritis, stroke, cancers, depression, PCOS"],
    assess: ["BMI, waist circumference, comorbidities", "Readiness to change (motivational interviewing)"],
    act: ["Reduce intake 500–750 kcal/day (DASH, Mediterranean)", "Very-low-calorie (<800 kcal) only under supervision", "Medications: BMI ≥30, or ≥27 with a complication (GLP-1s like semaglutide, tirzepatide; phentermine; orlistat)"],
    teach: ["Bariatric candidates: BMI ≥40, ≥35 with a complication, or 30–34.9 with poorly controlled type 2 DM", "After surgery: liquids → pureed → soft; chew slowly", "Lifelong risk of iron, calcium, thiamin, B12, vitamin D deficiency; Roux-en-Y risks dumping"]
  },
  facts: [
    "Weight loss target: 500–750 kcal/day deficit.",
    "Bariatric diet advances liquids → pureed → soft.",
    "Behavior change: goals, triggers, support groups, motivational interviewing."
  ],
  qa: [
    ["BMI 36 with sleep apnea. Bariatric candidate?", "Yes: BMI ≥35 with an obesity-related complication."],
    ["Which deficiencies are lifelong risks after gastric bypass?", "Iron, calcium, thiamin, B12, vitamin D."]
  ]
},

/* ================= KEY CONCEPT 2: HEALING ================= */
{
  id: "stress", sys: "heal", name: "Stress, Protein & Wound Healing", star: true, starLabel: "Key concept",
  sub: "Catabolism vs. anabolism, protein needs in stress, healing nutrients",
  connect: ["Labs", "Pressure injuries", "Infection"],
  summary: "Healing tissue needs building blocks (protein), helpers (vitamins and minerals), and energy (calories). Acute stress (trauma, surgery, burns, sepsis) raises metabolism, blood glucose, and protein breakdown, so protein deficiency is the main worry.",
  chain: {
    why: ["Catabolism = breaking down (releases energy); anabolism = building (uses energy)", "Stress hormones break protein down fast", "Low albumin → fluid leaks out → edema"],
    assess: ["Wounds, skin breakdown, infection signs", "Negative nitrogen balance", "Intake vs. needs; albumin and prealbumin"],
    act: ["Protein can rise to >2 g/kg (up to 25% of calories) in severe stress", "Enough carbs and fat to spare protein for healing", "Critical illness: high doses of vitamins C and E, selenium, zinc, copper are recommended"],
    teach: ["Vitamin C: collagen and wound healing", "Vitamin A: tissue strength and immunity", "Vitamin K: clotting"]
  },
  table: {
    cols: ["Nutrient", "Role in repair and immunity"],
    rows: [
      ["Protein", "Tissue building, antibodies, enzymes, fluid balance (albumin keeps fluid in vessels)"],
      ["Vitamin C", "Collagen formation and wound healing; immunity; iron absorption"],
      ["Vitamin A", "Tissue strength and growth; immunity"],
      ["Vitamin K", "Clotting"],
      ["Zinc, selenium, copper, vitamin E", "High doses recommended in critical illness"],
      ["Calories", "Adequate carbohydrate and fat spare protein for healing"]
    ]
  },
  facts: [
    "Protein deficiency → skin breakdown, delayed healing, infection, organ failure, ulcers, poor medication tolerance.",
    "Negative nitrogen balance = catabolic state.",
    "Raise protein and calories: double-strength milk (dry milk powder), whole milk instead of water, cheese, peanut butter, chopped eggs, yogurt, nuts, beans."
  ],
  qa: [
    ["Why does a post-op client need more protein?", "Stress hormones break down protein, and healing tissue needs it for collagen, new cells, and antibodies."],
    ["Which vitamin is most tied to collagen formation?", "Vitamin C."],
    ["How can you add protein for a client with a dairy allergy?", "Nuts, nut butters, beans, eggs, meats."]
  ]
},
{
  id: "burns", sys: "heal", name: "Burns & Sepsis",
  sub: "Hypermetabolism, early enteral feeding, indirect calorimetry",
  connect: ["Enteral nutrition", "TPN", "Critical care"],
  summary: "Burns raise calorie and protein needs sharply, and they can stay high for years. Early feeding lowers infection risk. In sepsis, calculate needs and start nutrition support as soon as possible.",
  chain: {
    why: ["Burned skin loses fluid, protein, and heat; healing needs huge energy", "Early gut feeding protects the gut barrier and lowers infection risk"],
    assess: ["TBSA burned", "Intake as a percentage of needs", "Indirect calorimetry (O₂ used, CO₂ produced): most accurate in critical illness"],
    act: ["<20% TBSA: high-calorie, high-protein foods and supplements may be enough", "Start EN (or PN if the gut doesn't work) within 4–6 hours if oral intake can't meet needs", "Consider EN if intake is under 75% of needs for more than 3 days"],
    teach: ["Needs stay high long after discharge", "Small, frequent, high-protein meals and supplements"]
  },
  facts: [
    "Burns: start EN within 4–6 hours when oral intake can't meet needs.",
    "Consider EN when intake <75% of needs for >3 days.",
    "Indirect calorimetry is the most accurate way to measure calorie needs in critically ill clients."
  ],
  qa: [
    ["A client with 35% TBSA burns can't eat enough. When should enteral feeding start?", "Within 4–6 hours."],
    ["What is the most accurate way to measure calorie needs in a ventilated septic client?", "Indirect calorimetry."]
  ]
},
{
  id: "refeed", sys: "heal", name: "Refeeding Syndrome", star: true, starLabel: "Know this",
  sub: "Insulin surge, K⁺/Mg²⁺/phosphorus shift, thiamin, prevention",
  connect: ["Malnutrition", "TPN", "Enteral nutrition", "Electrolytes"],
  summary: "In a starved or severely malnourished client, restarting nutrition (especially carbohydrate) triggers insulin, which drives potassium, phosphorus, and magnesium into cells, so blood levels crash. Carbohydrate metabolism also uses up thiamin.",
  chain: {
    why: ["Insulin pushes K⁺, PO₄, Mg²⁺ into cells", "Thiamin is used up metabolizing carbohydrate", "Risk is higher with PN than EN"],
    assess: ["Who is at risk: starvation, anorexia nervosa, alcohol use disorder, prolonged NPO", "K⁺, Mg²⁺, phosphorus daily as feeding starts", "Heart rhythm, breathing, edema, mental status"],
    act: ["Start slowly; slow EN/PN rates", "Replace thiamin and electrolytes", "Monitor electrolytes closely"],
    teach: ["Signs: weakness, confusion, seizures, dysrhythmias, heart failure, shallow breathing, edema, hemolysis"]
  },
  facts: [
    "Lab trio: low potassium, low magnesium, low phosphorus.",
    "Prevention = start low, go slow, replace thiamin and electrolytes.",
    "More likely with PN than EN."
  ],
  qa: [
    ["Day 2 of TPN in a severely malnourished client: weakness and a new dysrhythmia. Suspect?", "Refeeding syndrome (low K⁺, Mg²⁺, phosphate)."],
    ["Which vitamin is replaced to prevent refeeding complications?", "Thiamin (B1)."]
  ]
},

/* ================= KEY CONCEPT 3: BREATHING ================= */
{
  id: "resp", sys: "breath", name: "Respiratory Disease & Nutrition", star: true, starLabel: "Key concept",
  sub: "COPD, cystic fibrosis, HIV/respiratory infection, hydration and secretions",
  connect: ["Malnutrition", "Healing", "Dysphagia"],
  summary: "The source covers breathing mainly through COPD, cystic fibrosis, and HIV in the malnutrition chapter. The common thread: breathing harder burns more calories, eating gets harder, and if intake falls behind, the body breaks down muscle, including the diaphragm.",
  chain: {
    why: ["COPD: work of breathing burns more calories; muscle loss includes breathing muscles; dyspnea while eating", "Cystic fibrosis: work of breathing + no pancreatic enzymes → poor fat absorption → A, D, E, K deficiency", "Respiratory infection (HIV/AIDS): increased needs, wasting, poor intake"],
    assess: ["Weight trend, muscle wasting, appetite", "Dyspnea and fatigue at meals", "Fluid status and secretion thickness"],
    act: ["Small, frequent, calorie- and protein-dense meals", "Rest before meals; sit upright; oxygen during meals if prescribed", "Avoid gas-forming foods and large fluid volumes with meals; liquid supplements between meals"],
    teach: ["Fluids keep secretions thin and easy to clear (unless fluid-restricted, e.g., heart failure)", "Malnutrition weakens immunity (infection risk)", "Dysphagia raises aspiration pneumonia risk"]
  },
  beyond: "The study guide adds this explanation (not spelled out in the source): a full stomach pushes on the diaphragm, chewing and swallowing compete with breathing, and fatigue and medications reduce appetite. Muscle breakdown weakens the diaphragm, which makes breathing harder: a downward spiral.",
  facts: [
    "COPD and CF raise calorie needs because the work of breathing is constant.",
    "CF needs pancreatic enzymes and fat-soluble vitamins.",
    "Big meals push up on the diaphragm; small, frequent meals are easier to breathe through."
  ],
  qa: [
    ["Why does a client with COPD lose weight even when eating “normally”?", "Labored breathing and inflammation raise calorie needs; intake doesn't keep up, so the body breaks down muscle."],
    ["Two meal tips for a client with COPD?", "Rest before meals and eat small, frequent, calorie-dense meals sitting upright (with O₂ if prescribed); drink supplements between meals."],
    ["Why encourage fluids in pneumonia (when not restricted)?", "To keep secretions thin so they're easier to cough up."]
  ]
},

/* ================= KEY CONCEPT 4: HEART ================= */
{
  id: "chd", sys: "heart", name: "Coronary Heart Disease, Lipids & TLC Diet",
  sub: "HDL/LDL, risk factors, metabolic syndrome, heart-healthy eating",
  connect: ["Atherosclerosis", "Diabetes", "Obesity"],
  summary: "Heart disease is the leading cause of death in the U.S. High cholesterol → atherosclerosis → MI, ischemic stroke, and kidney failure. The TLC (therapeutic lifestyle changes) diet cuts saturated fat, cholesterol, and trans fat and adds soluble fiber and omega-3s.",
  chain: {
    why: ["LDL (“bad”) deposits plaque; HDL (“good”) carries cholesterol back to the liver", "Trans fat (partially hydrogenated oils) raises LDL", "Low folate, B6, B12 raise homocysteine (CHD risk)"],
    assess: ["Lipids: LDL optimal <100 mg/dL; HDL protective ≥60 (M) / ≥70 (F) per the source", "Modifiable risks: high LDL, low HDL, saturated-fat diet, HTN, DM, obesity, inactivity, nicotine", "Non-modifiable: age, male sex, family history"],
    act: ["Cholesterol <200 mg/day; saturated fat <7%; avoid trans fat", "Lean meats, skin off; bake, broil, grill, steam (not fry); low-fat dairy; olive or canola oil", "Oily fish (salmon, tuna, herring) and omega-3s (flax, walnuts, canola, soy)"],
    teach: ["Soluble fiber lowers LDL: oats, beans, barley, fruits, vegetables, flaxseed", "Involve family, explain why, fit preferences, food diary; occasional deviations are okay", "Exercise, stop tobacco, read labels"]
  },
  table: {
    cols: ["Metabolic syndrome (any 3 of 5)", "Cutoff"],
    rows: [
      ["Waist", "≥40 in (M), ≥35 in (F)"],
      ["Triglycerides", "≥150 mg/dL (or on treatment)"],
      ["HDL", "≤40 (M), ≤50 (F) mg/dL (or on treatment)"],
      ["Blood pressure", "≥130/80 (or on treatment)"],
      ["Fasting glucose", "≥100 mg/dL (or on treatment)"]
    ]
  },
  tableTitle: "Metabolic syndrome",
  facts: [
    "CHECK: the source says LDL optimal is “less than 130” and, a line later, “less than 100.” Less than 100 is the standard optimal value.",
    "CHECK: the source says “medications to lower HDL” for metabolic syndrome; the criterion is medication to raise (treat low) HDL.",
    "TLC: cholesterol <200 mg/day, saturated fat <7% of calories."
  ],
  qa: [
    ["Which breakfast best lowers LDL: bacon and eggs, oatmeal with walnuts, or a croissant?", "Oatmeal with walnuts (soluble fiber + omega-3s)."],
    ["Name the five metabolic syndrome criteria.", "Waist, triglycerides, low HDL, BP ≥130/80, fasting glucose ≥100 (any 3)."]
  ]
},
{
  id: "htn", sys: "heart", name: "Hypertension & DASH", star: true, starLabel: "High yield",
  sub: "Sodium limits, potassium and calcium, high-sodium foods",
  connect: ["Kidney", "Stroke", "Heart failure"],
  summary: "DASH (Dietary Approaches to Stop Hypertension) is low in sodium and high in potassium and calcium. Sodium <2,300 mg/day, working toward 1,500 mg. It lowers both blood pressure and cholesterol.",
  chain: {
    why: ["Sodium holds water → higher volume → higher pressure", "Potassium and calcium help lower BP"],
    assess: ["BP ≥130/80 sustained = HTN (per the source's definition)", "Risks: family history, smoking, obesity, inactivity, high sodium, low potassium, alcohol, stress, age", "Highest prevalence in African American people; risk rises after menopause"],
    act: ["Limit canned soups and sauces, chips, pretzels, smoked/cured meats, seasoning mixes, processed foods", "Add low-fat dairy (calcium) and potassium-rich produce (apricots, bananas, tomatoes, potatoes)", "Limit alcohol; exercise; lose weight; quit smoking"],
    teach: ["Read labels for sodium", "Season with herbs and spices instead of salt"]
  },
  facts: [
    "DASH = low Na⁺, high K⁺, high Ca²⁺.",
    "Sodium goal <2,300 mg/day, working toward 1,500 mg.",
    "CHECK: Ch. 13 defines HTN as ≥130/80 (current ACC/AHA), but its own answer key uses 140/90 (under 60) and 150/90 (over 60). Use 130/80 unless told otherwise."
  ],
  qa: [
    ["Which snack fits DASH: pretzels, a banana with yogurt, or canned soup?", "Banana with low-fat yogurt (potassium + calcium, low sodium)."],
    ["DASH sodium target?", "<2,300 mg/day, working toward 1,500 mg."]
  ]
},
{
  id: "hf", sys: "heart", name: "Heart Failure & After MI",
  sub: "Sodium and fluid restriction, daily weights, post-MI diet",
  connect: ["Daily weights", "Diuretics", "Warfarin"],
  summary: "In heart failure the heart can't keep up, so the body retains sodium and fluid (edema). Diet limits sodium and fluid and daily weights catch fluid early. After an MI, the goal is to lower the heart's workload.",
  chain: {
    why: ["Low output → kidneys retain sodium and water → edema, crackles", "After MI: low oxygen to heart muscle; digestion and caffeine raise workload"],
    assess: ["Daily weight (same time, scale, clothing)", "Edema, lung sounds, dyspnea", "K⁺ and Na⁺ on diuretics"],
    act: ["HF sodium <3,000 mg (mild/moderate) or <2,000 mg (severe); fluid about 2 L/day; protein about 1.12 g/kg", "Post-MI: liquid diet first 24 hr; no caffeine (raises HR); small, frequent meals; then heart-healthy diet"],
    teach: ["Report a sudden weight gain (fluid, not fat)", "Warfarin: keep vitamin K consistent", "Diuretics: watch potassium"]
  },
  table: {
    cols: ["", "Heart failure", "After MI"],
    rows: [
      ["Problem", "Can't maintain flow → sodium and fluid retention", "Low oxygen to heart muscle; reduce its workload"],
      ["Diet", "Na⁺ <3,000 mg (mild/mod) or <2,000 mg (severe); fluid ~2 L/day; protein ~1.12 g/kg; daily weights", "Liquids first 24 hr; no caffeine; small frequent meals; then heart-healthy"]
    ]
  },
  facts: [
    "Day-to-day weight change = fluid.",
    "A 1.5 kg overnight gain in HF: assess edema and lung sounds, review sodium and fluid intake, report.",
    "No caffeine after MI because it raises heart rate."
  ],
  qa: [
    ["Sodium limit for severe heart failure?", "<2,000 mg/day."],
    ["Why are small, frequent meals used after an MI?", "Large meals increase cardiac workload and oxygen demand."]
  ]
},

/* ================= KEY CONCEPT 5: KIDNEY ================= */
{
  id: "ckd", sys: "renal", name: "CKD & ESKD", star: true, starLabel: "Protein flips with dialysis",
  sub: "Protein, potassium, phosphorus, sodium, fluid, phosphate binders",
  connect: ["Electrolytes", "Protein", "Anemia"],
  summary: "Kidneys control fluid, waste removal, acid-base, BP, calcium/phosphorus/vitamin D, and RBC production. Urea is the waste product of protein, so protein is restricted before dialysis. Dialysis removes protein, so needs rise once it starts.",
  chain: {
    why: ["Failing kidneys can't clear urea, K⁺, phosphorus, sodium, or fluid", "No active vitamin D → ↑ phosphorus, ↓ calcium", "Dialysate pulls out protein and amino acids"],
    assess: ["Daily weights (best fluid indicator), urine output, fluid restriction adherence", "K⁺, phosphorus, calcium, albumin", "Constipation (from fluid restriction)"],
    act: ["CKD 1–4: protein about 0.8–1.0 g/kg (less as it progresses), high biologic value (eggs, meat, fish, soy, dairy)", "ESKD on dialysis: protein 1.0–1.2 g/kg; calories 35 kcal/kg; phosphorus 700–1,200 mg; sodium 2–3 g; fluid restricted", "Phosphate binders with every meal and snack"],
    teach: ["Limit phosphorus: peanut butter, dried beans, bran, cola, chocolate, beer, some whole grains (1 serving/day or less)", "Avoid unprescribed supplements, protein/energy drinks, herbals", "Calcium supplements often needed"]
  },
  table: {
    cols: ["Stage", "Protein", "Other key points"],
    rows: [
      ["CKD 1–4 (pre-dialysis)", "Restrict: ~0.8–1.0 g/kg; high biologic value", "Restrict sodium, potassium, phosphorus; no unprescribed supplements or protein drinks"],
      ["ESKD (stage 5, GFR <15) on dialysis", "Increase to 1.0–1.2 g/kg (lost in dialysate); half from high-biologic sources", "Low phosphorus (700–1,200 mg), low K⁺, sodium 2–3 g, fluid restricted, 35 kcal/kg; binders with meals"]
    ]
  },
  facts: [
    "Pre-dialysis: restrict protein. On dialysis: increase protein.",
    "Phosphate binders: with every meal and snack.",
    "ESKD: ↑ phosphorus, ↓ calcium, ↑ magnesium."
  ],
  qa: [
    ["A client with stage 3 CKD wants high-protein shakes. Response?", "Avoid them: protein is restricted to slow kidney damage."],
    ["Why does protein go up on hemodialysis?", "Protein and amino acids are lost in the dialysate."],
    ["When are phosphate binders taken?", "With every meal and snack."]
  ]
},
{
  id: "aki", sys: "renal", name: "AKI & Nephrotic Syndrome",
  sub: "Oliguric fluid rule, electrolyte risks, proteinuria and edema",
  connect: ["Fluid balance", "Electrolytes", "Edema"],
  summary: "In acute kidney injury, the risk is electrolyte chaos and fluid overload. In nephrotic syndrome, heavy protein loss in the urine causes low albumin, edema, high lipids, and clotting risk.",
  chain: {
    why: ["AKI: ↓ Na⁺, ↑ K⁺, ↓ Ca²⁺, ↑ phosphorus, fluid overload/pulmonary edema", "Nephrotic: protein leaks into urine → low albumin → edema"],
    assess: ["Urine output, daily weights, lung sounds", "K⁺ and phosphorus", "Edema, lipids"],
    act: ["AKI: protein ~0.6 g/kg without dialysis, 1.0–1.2+ g/kg on dialysis; calories 20–30 kcal/kg", "AKI oliguric phase fluid = yesterday's urine output + 500 mL", "AKI sodium 1–2 g (no dialysis) or 2–4 g (dialysis); K⁺ 60–70 mEq on dialysis"],
    teach: ["Nephrotic: protein adequate 0.7–1.0 g/kg (soy may help); sodium 2,000 mg; carbs for most calories; limit saturated fat and cholesterol; multivitamin + vitamin D"]
  },
  facts: [
    "AKI fluid in oliguria = previous day's urine output + 500 mL.",
    "Nephrotic syndrome: protein is adequate, not high, despite the urine losses.",
    "Pulmonary edema is the fluid-overload danger in AKI."
  ],
  qa: [
    ["An oliguric AKI client made 300 mL of urine yesterday. Today's fluid allowance?", "300 + 500 = 800 mL."],
    ["Why does nephrotic syndrome cause edema?", "Heavy proteinuria lowers serum albumin, so fluid leaks out of the vessels."]
  ]
},
{
  id: "stones", sys: "renal", name: "Kidney Stones",
  sub: "Fluids first, calcium oxalate, uric acid, cystine",
  connect: ["Pain", "Ostomy", "Vitamin C"],
  summary: "Kidney stones cause sudden, severe flank pain not relieved by position, with nausea, vomiting, diaphoresis, and hematuria. Most are calcium oxalate. The number one intervention is fluid.",
  chain: {
    why: ["Concentrated urine lets crystals form", "Ileostomy raises risk (fluid loss)"],
    assess: ["Flank pain, hematuria, N/V", "Stone type"],
    act: ["Drink enough for at least 2 L urine/day, including some before bed (cystine needs even more)", "Calcium oxalate: limit oxalates (spinach, rhubarb, beets, nuts, chocolate, tea, wheat bran, strawberries), animal protein, sodium, alcohol, caffeine", "Avoid vitamin C megadoses"],
    teach: ["Uric acid stones: limit purines (organ meats, lean meats, whole grains, legumes)", "Oxalate matters more than calcium"]
  },
  beyond: "Added by the study guide: don't cut dietary calcium drastically for calcium oxalate stones. Calcium in the gut binds oxalate; very low calcium intake can raise oxalate absorption.",
  facts: [
    "#1 intervention: fluid for ≥2 L urine/day.",
    "Most stones are calcium oxalate.",
    "Vitamin C megadoses raise oxalate."
  ],
  qa: [
    ["Best teaching for calcium oxalate stones?", "Drink enough to make at least 2 L of urine a day, limit high-oxalate foods, avoid vitamin C megadoses."],
    ["Which foods to limit for uric acid stones?", "High-purine foods: organ meats, lean meats, whole grains, legumes."]
  ]
},

/* ================= KEY CONCEPT 6: GI ================= */
{
  id: "digest", sys: "gi", name: "Digestion & Symptom Management",
  sub: "Ingestion, digestion, absorption, metabolism; N/V, anorexia, constipation, diarrhea",
  connect: ["Malabsorption", "Fiber", "Fluids"],
  summary: "Food is taken in, broken down (pancreatic amylase for starch; bile emulsifies fat and pancreatic lipase digests it), absorbed mostly in the small intestine, and metabolized in cells. GI symptoms change what a client can eat and absorb.",
  chain: {
    why: ["Most absorption happens in the small intestine", "Bile + lipase are needed for fat (and fat-soluble vitamins)", "Excess glucose → glycogen → fat; liver removes nitrogen from amino acids"],
    assess: ["Chewing, swallowing, N/V/D, bloating, gas, steatorrhea, occult blood, pain, weight and bowel changes", "Tobacco, alcohol, caffeine, OTC and herbals", "Emesis: coffee-ground = blood; green = bile"],
    act: ["N/V: clear → full liquids → advance; bland low-fat carbs (crackers, toast); HOB up; ginger; no fluids with meals", "Anorexia: small frequent meals; hold fluids 30 min before/after meals; biggest meal early", "Diarrhea: replace fluid, K⁺, Na⁺; low-fiber short term"],
    teach: ["Constipation: fiber (25/38 g) increased gradually, fluids about 64 oz, exercise, avoid chronic laxatives", "High-fiber pick: baked potato with skin over peeled fruit"]
  },
  facts: [
    "Steatorrhea = fatty stools = fat malabsorption.",
    "Coffee-ground emesis = old blood; report.",
    "Low-fiber diets reduce stool volume; used short-term for diarrhea and malabsorption."
  ],
  qa: [
    ["What two things digest fat?", "Bile (emulsifies) and pancreatic lipase."],
    ["A client vomits coffee-ground material. Meaning?", "Old blood from upper GI bleeding: report."]
  ]
},
{
  id: "upper", sys: "gi", name: "Dumping, GERD, PUD & Lactose Intolerance", star: true, starLabel: "Diet teaching",
  sub: "Post-gastrectomy dumping, reflux triggers, ulcer diet, lactase",
  connect: ["Bariatric surgery", "B12", "Calcium"],
  summary: "After stomach surgery, food can rush into the small intestine (dumping). GERD is driven by things that relax the lower esophageal sphincter. Ulcers and gastritis are worsened by NSAIDs, H. pylori, and alcohol.",
  chain: {
    why: ["Dumping: hypertonic food pulls fluid into the gut (early) then insulin overshoots (late hypoglycemia)", "GERD: fat, caffeine, chocolate, alcohol, nicotine, mint relax the LES", "PUD: NSAIDs, H. pylori, alcohol"],
    assess: ["Early dumping (10–20 min): cramping, nausea, diarrhea, dizziness, tachycardia, hypotension, sweating", "Late dumping (1–3 hr): hypoglycemia (shaky, sweaty, hungry)", "PUD: gnawing epigastric pain, tarry stools, anemia; GERD can mimic MI"],
    act: ["Dumping: small frequent meals; protein and fat each meal; avoid concentrated sugars; limit lactose; fluids 30–60 min after meals, not with; lie down after eating", "GERD: no eating 3 hr before lying down; elevate head; no tight clothes; lose weight", "PUD/gastritis: avoid alcohol, smoking, aspirin/NSAIDs, caffeine, black pepper, spicy foods"],
    teach: ["Dumping: watch iron and B12", "Gastritis: avoid frequent snacking (stimulates acid)", "Lactose intolerance: small amounts of milk with meals; yogurt and aged cheese tolerated better; lactase enzyme; watch calcium and vitamin D"]
  },
  facts: [
    "Dumping: dry meals, fluids between meals, lie down after.",
    "GERD triggers: fat, caffeine, chocolate, alcohol, nicotine, peppermint/spearmint, citrus, spicy, carbonation.",
    "H. pylori → antibiotic “triple therapy.”",
    "GERD risks Barrett's esophagus and cancer."
  ],
  qa: [
    ["Dizzy and sweaty 15 minutes after eating, post-gastrectomy. Teaching?", "Dumping syndrome: small frequent meals with protein and fat, avoid concentrated sweets, fluids between (not with) meals, lie down after eating."],
    ["Why avoid peppermint with GERD?", "It relaxes the lower esophageal sphincter, increasing reflux."]
  ]
},
{
  id: "lower", sys: "gi", name: "Celiac, IBD, Diverticular Disease & Ostomies",
  sub: "Gluten-free diet, flares, fiber, ostomy fluid losses",
  connect: ["Malabsorption", "Anemia", "Fluids"],
  summary: "Celiac disease is an autoimmune reaction to gluten that flattens the villi, causing malabsorption. IBD flares need extra protein and calories. Diverticulosis is prevented by fiber. Ostomies (especially ileostomies) lose fluid and electrolytes.",
  chain: {
    why: ["Gluten (wheat, barley, rye) damages villi → anemia, osteoporosis, bleeding", "IBD: flares and remission with diarrhea, weight loss, steatorrhea", "Ileostomy output is liquid → fluid and electrolyte loss"],
    assess: ["Weight, stool pattern, anemia, bone health", "Ostomy output and stoma healing", "Diverticulitis: pain, fever"],
    act: ["Celiac: strict lifelong gluten-free (safe: rice, corn, potatoes, eggs, milk, meat, fish, beans, fruits, vegetables)", "IBD flare: low-residue, high-protein, high-calorie + vitamins/minerals; EN preferred over PN", "Acute diverticulitis: clear liquids, then advance to high-fiber, low-fat"],
    teach: ["Read labels for hidden gluten: sauces, gravies, cold cuts, soups, even lipstick and communion wafers", "Ostomy: fluids 1.9–2.4 L/day; soluble fiber; avoid gas (beans, eggs, carbonation), blockage (nuts, raw carrots, popcorn), odor (eggs, fish, garlic)", "Diverticulosis prevention: high fiber"]
  },
  beyond: "Memory aid added by the study guide: BROW = Barley, Rye, Oats, Wheat. The source lists wheat, barley, and rye; oats are commonly avoided unless labeled gluten-free because of cross-contamination.",
  facts: [
    "Celiac = no wheat, barley, rye (BROW).",
    "Diverticulosis (pouches) = high fiber; diverticulitis (inflamed) acute = clear liquids first.",
    "IBD: enteral nutrition preferred over parenteral.",
    "Ostomy: protein and calories for stoma healing; body-image support."
  ],
  qa: [
    ["Which is safe in celiac disease: graham crackers, rice, or barley soup?", "Rice."],
    ["A new ileostomy client: main nutrition concern?", "Fluid and electrolyte loss. Drink 1.9–2.4 L/day."]
  ]
},
{
  id: "accessory", sys: "gi", name: "Gallbladder, Pancreas & Liver",
  sub: "Cholecystitis, pancreatitis, cirrhosis and hepatitis",
  connect: ["Fat digestion", "Alcohol", "TPN"],
  summary: "Bile (gallbladder) and pancreatic enzymes digest fat, so disease here makes fat hard to handle. Acute pancreatitis needs the pancreas rested. Liver disease often causes malnutrition.",
  chain: {
    why: ["Fatty meals trigger gallbladder contraction → pain", "Food stimulates pancreatic enzymes → more inflammation", "The liver stores vitamins and makes proteins"],
    assess: ["Cholecystitis: RUQ pain radiating to the right shoulder after fatty meals", "Pancreatitis: mostly alcohol and gallstones", "Liver: weight, muscle loss, bleeding, confusion"],
    act: ["Cholecystitis: low fat", "Acute pancreatitis: NPO + NG suction (rest the pancreas), TPN if needed", "Chronic pancreatitis: low fat, high protein, high carb; vitamin C and B supplements; no alcohol"],
    teach: ["Liver disease: protein usually increased; carbs not restricted; multivitamin (B, C, K); no alcohol, nicotine, caffeine"]
  },
  facts: [
    "Acute pancreatitis = NPO + NG suction.",
    "Cholecystitis = low-fat diet.",
    "Liver disease: protein usually increased (not restricted)."
  ],
  qa: [
    ["Acute pancreatitis: first nutrition order?", "NPO with NG suction to rest the pancreas; TPN if needed."],
    ["Where does gallbladder pain radiate?", "To the right shoulder, after fatty meals."]
  ]
},

/* ================= KEY CONCEPT 7: LIFESPAN & DIABETES ================= */
{
  id: "bmr", sys: "life", name: "Metabolic Rate",
  sub: "What raises and lowers BMR",
  connect: ["Hormones", "Thyroid", "Healing"],
  summary: "Basal metabolic rate (BMR) is the energy used for involuntary functions at rest after a 12-hour fast. It depends mostly on lean body mass and hormones; thyroid tests indirectly reflect it. Males are generally higher because of more muscle.",
  chain: {
    why: ["Muscle burns more energy at rest than fat", "Thyroid hormone sets the pace of metabolism"],
    assess: ["Age, muscle mass, thyroid status, fever, healing wounds", "Medications that raise or lower BMR"],
    act: ["Raise calorie targets when BMR is up (burns, fever, healing, pregnancy)", "Lower calorie targets with aging and hypothyroidism"],
    teach: ["Strength training preserves lean mass and BMR"]
  },
  table: {
    cols: ["Raises BMR", "Lowers BMR"],
    rows: [
      ["Lean muscle; rapid growth (infancy, puberty); pregnancy and lactation", "Starvation; aging (loss of lean mass)"],
      ["Fever, shivering, extreme temperatures, prolonged stress", "Hypothyroidism"],
      ["Hyperthyroidism, cancer, burns, surgery and healing, HIV, heart failure", "Opioids, muscle relaxants, barbiturates"],
      ["Epinephrine, levothyroxine, ephedrine, anti-obesity drugs", ""]
    ]
  },
  facts: [
    "BMR is measured at rest after a 12-hour fast.",
    "Lean body mass is the main driver.",
    "Starvation lowers BMR (the body conserves energy)."
  ],
  qa: [
    ["Which raises BMR: hypothyroidism, fever, or opioids?", "Fever."],
    ["Why do older adults need fewer calories?", "Loss of lean muscle lowers BMR."]
  ]
},
{
  id: "preg", sys: "life", name: "Pregnancy & Lactation", star: true, starLabel: "Numbers",
  sub: "Calories, weight gain by BMI, protein, folic acid, iron, foods to avoid",
  connect: ["Folate", "Iron", "Food safety"],
  summary: "Pregnancy adds calories in the 2nd and 3rd trimesters, raises protein, folic acid, and iron needs, and adds food-safety rules (alcohol, mercury, Listeria). Weight-gain targets depend on pre-pregnancy BMI.",
  chain: {
    why: ["Folic acid prevents neural tube defects (start before conception)", "Blood volume expands → iron need rises 50%", "Mercury and Listeria harm the fetus"],
    assess: ["Pre-pregnancy BMI and weight trend", "Nausea, constipation", "Diet history including caffeine and fish"],
    act: ["+340 kcal/day 2nd trimester, +450 3rd; lactation +340 first 6 mo, +400 second 6 mo", "Protein 71 g/day; folic acid 600 mcg (4 mg if prior NTD); iron 27 mg with vitamin C", "Fluids 2–3 L/day"],
    teach: ["No alcohol (no safe amount); caffeine <200 mg/day", "Fish 8–12 oz/week, albacore ≤6 oz; avoid shark, swordfish, king mackerel, tilefish, marlin, orange roughy", "Nausea: dry crackers, toast, ginger, no fluids with meals. Constipation: ≥8 cups fluid, fiber, activity"]
  },
  table: {
    cols: ["Pre-pregnancy BMI", "Total weight gain"],
    rows: [
      ["Underweight", "28–40 lb"],
      ["Normal", "25–35 lb"],
      ["Overweight", "15–25 lb"],
      ["Obese", "11–20 lb"]
    ]
  },
  tableTitle: "Weight gain targets",
  facts: [
    "1st trimester gain: 1.1–4.4 lb total.",
    "Folic acid 400 mcg before, 600 mcg pregnant, 500 mcg lactating; 4 mg if a prior baby had an NTD.",
    "Maternal PKU: low-phenylalanine diet from 3 months before conception through pregnancy.",
    "CHECK: the source's pregnancy DRI table lists vitamin E as “15 mcg”; it is 15 mg."
  ],
  qa: [
    ["Normal-BMI pregnant client: total weight gain?", "25–35 lb."],
    ["Folic acid dose if a previous baby had spina bifida?", "4 mg/day, starting before conception."],
    ["Extra calories in the 3rd trimester?", "+450 kcal/day."]
  ]
},
{
  id: "infant", sys: "life", name: "Infancy",
  sub: "Growth, breastfeeding, formula, starting solids, honey and cow's milk",
  connect: ["Iron", "Allergies", "Dehydration"],
  summary: "Birth weight doubles by 6 months and triples by 1 year. Breast milk alone for about 6 months (with vitamin D), then iron-fortified foods. No cow's milk or honey before age 1.",
  chain: {
    why: ["Fetal iron stores run low around 4–6 months", "Honey can carry botulism spores", "Cow's milk stresses infant kidneys and is poorly digested"],
    assess: ["Weight gain 1–2 lb/month (first 6 months), then 1 lb/month", "Hunger cues: rooting, sucking hands (crying is late)", "Wet diapers and fontanels in diarrhea"],
    act: ["Breastfeed 8–12 times/24 hr on demand; vitamin D soon after birth", "Iron-fortified formula for the first year; mix exactly; discard if out ≥2 hr; max 32 oz/day", "Solids about 6 months: one new single-ingredient food every 3–5 days; iron-fortified cereal first; table foods about 9 months"],
    teach: ["Breast milk: fridge 4 days, freezer 6 months; thaw in fridge, never microwave or refreeze", "Never prop bottles or put to bed with a bottle (tooth decay)", "Avoid choking hazards (grapes, nuts, raw carrots)"]
  },
  table: {
    cols: ["Problem", "Response"],
    rows: [
      ["Colic (3+ hr crying)", "Breastfeeding parent avoids cruciferous vegetables, cow's milk, onion, chocolate; burp upright"],
      ["Lactose intolerance", "Soy formula"],
      ["Diarrhea", "Oral rehydration solution (not sports drinks); keep breastfeeding; watch sunken fontanels, fewer wet diapers"],
      ["Constipation", "Formula mixed too concentrated"]
    ]
  },
  facts: [
    "No water or formula for breastfed newborns unless prescribed.",
    "No honey before 1 year (botulism). No cow's milk before 1 year.",
    "Don't reuse leftover formula."
  ],
  qa: [
    ["A parent wants to give a 10-month-old honey for a cough. Response?", "No honey before age 1 (botulism risk)."],
    ["Best first solid food at 6 months?", "Iron-fortified infant cereal."],
    ["By what age should birth weight triple?", "1 year."]
  ]
},
{
  id: "child", sys: "life", name: "Children, Adolescents & Older Adults",
  sub: "Toddler milk and juice, food jags, adolescent calcium and iron, aging",
  connect: ["Iron deficiency", "Obesity", "Osteoporosis"],
  summary: "Toddlers need whole milk for brain growth but too much milk crowds out iron. Adolescents grow faster than any time but infancy. Older adults need fewer calories but the same or more vitamins and minerals.",
  chain: {
    why: ["Iron deficiency anemia is the most common deficiency in toddlers", "Adolescent growth spurt raises calcium (1,300 mg) and iron needs", "Older adults lose muscle (lower BMR) and thirst sense"],
    assess: ["Toddler milk and juice volume", "Teen meal skipping, soda, dieting, eating disorders", "Older adult dentition, swallowing, dry mouth, taste, cognition, income, isolation"],
    act: ["Toddler: whole milk 1–2 yr; juice 4–6 oz/day; milk ≤24 oz; serving = 1 Tbsp per year of age", "Preschool: 1,000–1,800 kcal/day; low-fat milk after 2; feed often (less lead absorbed)", "School-age: 60 min activity daily; breakfast; never use food as reward or punishment"],
    teach: ["Choking risk until 4: hot dogs, popcorn, nuts, grapes, raw carrots, hard candy", "Pregnant teens → WIC", "Older adults: calcium, vitamin D, B12, B6; 150 min/week activity; senior centers, Meals on Wheels"]
  },
  facts: [
    "Food jags in preschoolers are normal and short-lived.",
    "Adolescent iron: 15 mg girls, 11 mg boys. Calcium 1,300 mg/day.",
    "Dehydration is the most common fluid/electrolyte problem in older adults."
  ],
  qa: [
    ["A 2-year-old drinks 40 oz of milk a day and is pale. Likely problem?", "Iron deficiency anemia; too much milk displaces iron-rich food. Limit to ≤24 oz."],
    ["Serving size for a 3-year-old?", "About 3 Tbsp (1 Tbsp per year of age)."]
  ]
},
{
  id: "dm", sys: "life", name: "Diabetes Mellitus", star: true, starLabel: "Rule of 15",
  sub: "Types, hypo- vs. hyperglycemia, carb counting, Somogyi vs. dawn",
  connect: ["Metabolism", "Kidney", "Exercise"],
  summary: "Type 1 is autoimmune loss of insulin; type 2 is insulin resistance plus altered secretion. Diet is individualized: spread carbohydrate through the day, count carbs, and know the Rule of 15 for lows.",
  chain: {
    why: ["Hypoglycemia: too much insulin, skipped or late meals, extra exercise, alcohol without food", "Hyperglycemia: too little insulin, resistance, illness, infection, stress"],
    assess: ["Low (<70): shaky, sweaty, confused, palpitations, headache, blurred vision → seizures, coma", "High: polydipsia, polyuria, polyphagia → ketones, Kussmaul breathing, fruity breath, dehydration, ↓ LOC", "Morning highs: Somogyi vs. dawn phenomenon"],
    act: ["Rule of 15: 15 g fast carb (4 glucose tabs, ½ cup juice or regular soda, 1 Tbsp sugar/honey, 5–6 hard candies) → recheck 15 min → repeat if <70 → snack with protein once stable", "1 carb choice = 15 g: 1 slice bread, ½ cup pasta, ½ cup canned fruit in juice, 3 cups raw vegetables, ½ cup ice cream", "Fiber ≥14 g per 1,000 kcal; protein 15–20% (less with kidney disease); sodium <2,300 mg; fish twice a week"],
    teach: ["Sugar is allowed if counted", "Alcohol ≤1 (F) / 2 (M) drinks, always with food", "Exercise 150 min/week over 3+ days; don't sit >90 min; check glucose (may need less medication)"]
  },
  table: {
    cols: ["", "Somogyi effect", "Dawn phenomenon"],
    rows: [
      ["What happens", "Nighttime low → rebound morning high", "Early-morning rise (~5–6 a.m.) from growth hormone"],
      ["Fix", "Bedtime snack, adjust insulin", "More overnight insulin"]
    ]
  },
  facts: [
    "Type 1: autoimmune, usually before 18. Type 2: resistance + genetics + environment. Gestational: usually resolves, raises later type 2 risk.",
    "Weight loss if BMI >25 improves insulin resistance.",
    "Go to the ED for confusion, ↓ LOC, or seizures with hyperglycemia."
  ],
  qa: [
    ["Glucose 58 mg/dL, client alert. First action?", "Give 15 g fast carbohydrate (e.g., ½ cup juice) and recheck in 15 minutes."],
    ["How many carb choices is 1 cup of pasta?", "2 (½ cup = 1 choice = 15 g)."]
  ]
},

/* ================= KEY CONCEPT 8: BLOOD & CANCER ================= */
{
  id: "anemia", sys: "blood", name: "Nutritional Anemias", star: true, starLabel: "B12 = neuro signs",
  sub: "Iron, B12, folate: who, signs, foods",
  connect: ["Vitamins", "Pregnancy", "GI surgery"],
  summary: "Making red blood cells takes iron, vitamin B12, and folic acid. Iron deficiency makes small, pale cells; B12 and folate deficiency make large cells. Only B12 deficiency causes neurologic signs.",
  chain: {
    why: ["Iron builds hemoglobin", "B12 needs intrinsic factor (stomach) to be absorbed", "Folate is needed for cell division"],
    assess: ["Fatigue, pallor, tachycardia, glossitis", "Neuro: paresthesias of hands and feet, poor balance → B12", "Risk history: blood loss, pregnancy, gastrectomy, vegan diet, alcohol, anticonvulsants"],
    act: ["Iron: red meat, fish, poultry, tofu, dried beans, whole grains, dried fruit, fortified cereals; add vitamin C", "B12: meat, fish, poultry, eggs, milk; fortified foods over 50 and vegans; injections if no intrinsic factor", "Folate: dark greens, dried beans, seeds, orange juice, fortified grains"],
    teach: ["Medicinal iron is a leading cause of accidental poisoning in small children: store safely", "Iron causes constipation and dark stools"]
  },
  table: {
    cols: ["", "Iron deficiency", "B12 (pernicious)", "Folate"],
    rows: [
      ["Cell type", "Small, pale (microcytic)", "Large (macrocytic/megaloblastic)", "Large (macrocytic/megaloblastic)"],
      ["Who", "Infants, toddlers, teen girls, pregnancy; blood loss, poor intake, alcohol, malabsorption, gastrectomy", "No intrinsic factor, vegans, small-bowel resection, gastric surgery, older adults", "Poor intake, malabsorption (Crohn's), anticonvulsants, oral contraceptives, alcohol"],
      ["Signs", "Fatigue, pallor, cold intolerance, headache, tachycardia; short attention span in children", "Pallor, jaundice, fatigue, glossitis, anorexia + paresthesias, poor balance, irritability, delirium", "Fatigue, pallor, glossitis, diarrhea; no neuro signs"]
    ]
  },
  beyond: "The cell-size row was added by the study guide (not in the source). It's standard hematology and a common exam distinction.",
  facts: [
    "Iron deficiency is the most common nutritional disorder worldwide.",
    "Numbness and tingling of hands and feet = B12, not folate.",
    "No intrinsic factor = B12 injections (oral won't absorb)."
  ],
  qa: [
    ["Which finding points to B12 rather than folate deficiency?", "Paresthesias of the hands and feet (neurologic signs)."],
    ["Why give iron with orange juice?", "Vitamin C increases iron absorption."]
  ]
},
{
  id: "cancer", sys: "blood", name: "Cancer, Immunosuppression & HIV",
  sub: "Needs, side-effect teaching, food safety, HIV wasting",
  connect: ["Malnutrition", "Food safety", "Healing"],
  summary: "Cancer and its treatment affect chewing, swallowing, taste, appetite, digestion, and absorption. Cancer causes anorexia, raises metabolism, and creates negative nitrogen balance. Immunosuppressed clients need strict food safety.",
  chain: {
    why: ["Tumors and treatment raise needs and cut intake", "Chemo damages fast-growing cells (mouth, gut)", "HIV lipodystrophy → insulin resistance, high lipids"],
    assess: ["Weight, intake, prealbumin, albumin, ferritin, transferrin", "Mouth sores, taste change, N/V/D", "HIV wasting: unintentional loss of 10% of weight + diarrhea, weakness, or fever for 30+ days"],
    act: ["Calories 25–35 kcal/kg; protein 1–2.5 g/kg", "Eat more on good days; supplements between meals; whole milk in recipes", "HIV: small, frequent, high-calorie, high-protein meals; multivitamin; liberal fluids; EN if intake inadequate"],
    teach: ["Food safety: wash produce, cook meat/poultry/eggs thoroughly, refrigerate promptly", "Prevention: fiber, fruits and vegetables (A and C foods, cruciferous), whole grains; limit smoked, pickled, charred, nitrate-cured meats and alcohol; healthy weight"]
  },
  table: {
    cols: ["Treatment side effect", "Teaching"],
    rows: [
      ["Early satiety / anorexia", "Small, calorie-dense, high-protein bites; eat most in the morning; avoid odors; don't fill up on broth; cool foods"],
      ["Mouth sores (stomatitis)", "Soft toothbrush; no alcohol mouthwash; avoid acidic, spicy, dry, coarse foods (toast, citrus); cool soft foods; straws; gravies and sauces"],
      ["Fatigue", "Big breakfast; easy-to-make foods; meal delivery"],
      ["Food aversions", "Eat favorite foods before treatment days"],
      ["Taste changes / thick saliva", "Tart foods; seasonings and sauces; plastic utensils (metallic taste); mints or gum"],
      ["Nausea / vomiting", "Cool foods; high-carb low-fat; no fried foods; don't eat right before chemo/radiation; sit up 1 hr after eating; ginger"],
      ["Diarrhea", "Replace fluids; avoid roughage; high-pectin foods (bananas, applesauce); limit caffeine, fat, very hot or cold drinks"],
      ["Dysphagia", "Thickened foods; sit upright with chin tilted forward"]
    ]
  },
  tableTitle: "Treatment side effects",
  facts: [
    "Plastic utensils help with a metallic taste.",
    "Stomatitis: cool, soft, bland, moist; no alcohol mouthwash.",
    "Eating favorite foods right before chemo can create lasting aversions."
  ],
  qa: [
    ["Chemo stomatitis: toast, orange juice, or a cool milkshake?", "Cool milkshake (avoid coarse and acidic foods)."],
    ["Metallic taste during chemo. Tip?", "Use plastic utensils; try tart foods and seasonings."]
  ]
},

/* ================= KEY CONCEPT 9: CAN'T EAT NORMALLY ================= */
{
  id: "modified", sys: "cant", name: "Modified Diets & Diet Progression",
  sub: "Clear liquid, full liquid, pureed, soft, mechanical soft, as tolerated",
  connect: ["Post-op care", "Dysphagia", "GI disorders"],
  summary: "Neurologic problems, head and neck surgery, and GI dysfunction can make normal eating unsafe. Diets are modified by texture and content, and after surgery they advance only once bowel function returns.",
  chain: {
    why: ["Clear liquids leave no residue and are easy to absorb", "Full liquids add milk products and calories", "Texture changes protect clients who can't chew or swallow"],
    assess: ["Bowel sounds and flatus before advancing post-op", "Hunger, appetite, nausea", "Chewing and swallowing ability"],
    act: ["Post-op: NPO → clear → full → regular, only after bowel sounds and flatus return", "Supplement full liquids if used more than 3 days", "Caution with full liquids in dysphagia unless thickened"],
    teach: ["Clear liquids are nutritionally inadequate: short-term only", "Soft diets can cause constipation"]
  },
  table: {
    cols: ["Diet", "What's included", "Used for"],
    rows: [
      ["Clear liquid", "Clear at room temp, no residue: water, tea, coffee, fat-free broth, apple or cranberry juice, ginger ale, gelatin, popsicles", "Bowel prep, acute GI illness, first diet after surgery"],
      ["Full liquid", "Clear liquids + milk, plain ice cream, sherbet, pudding, strained cereals", "Transition to soft, post-op, can't tolerate solids"],
      ["Blenderized (pureed)", "Foods pureed separately; add broth, milk, gravy for calories", "Wired jaw, oral/facial surgery, chewing or swallowing problems"],
      ["Soft (bland, low-fiber)", "Easily digested, lightly seasoned; no raw produce, coarse grains, gas-forming foods", "Transition from full liquid; GI disorders"],
      ["Mechanical soft", "Regular diet in easy-to-chew form: ground meats, cottage cheese, mashed or soft-cooked vegetables, canned fruit; no dried fruit, raw produce, seeds, nuts", "Poor chewing, no teeth or poor dentures, head/neck surgery"],
      ["As tolerated", "Client's preference within ability", "After surgery once bowel sounds and flatus return"]
    ]
  },
  facts: [
    "Clear liquid test: can you see through it at room temperature? Milk, sherbet, pudding, and orange juice with pulp are not clear.",
    "No bowel sounds post-op = don't advance the diet.",
    "Full liquid includes milk and ice cream; clear liquid does not."
  ],
  qa: [
    ["Select the clear-liquid items: apple juice, sherbet, broth, gelatin, milk, coffee.", "Apple juice, broth, gelatin, coffee."],
    ["Two days post-op with no bowel sounds. Advance to clear liquids?", "No; wait for bowel sounds and flatus."]
  ]
},
{
  id: "dysphagia", sys: "cant", name: "Dysphagia & IDDSI", star: true, starLabel: "Aspiration = airway",
  sub: "Signs, safety measures, IDDSI levels 0–7, National Dysphagia Diet",
  connect: ["Stroke", "Parkinson's", "Aspiration pneumonia"],
  summary: "Stroke, Parkinson's, cerebral palsy, dementia, and head and neck surgery can impair swallowing. The danger is aspiration. Speech therapy evaluates, and the diet uses thickened liquids and texture levels (IDDSI 0–7).",
  chain: {
    why: ["Thin liquids move fastest and are the easiest to aspirate", "Sticky foods are hard to clear from the mouth"],
    assess: ["Drooling, pocketing food, coughing, choking, gagging", "Gag and swallow reflex before any oral intake", "Refer to speech therapy"],
    act: ["Upright/high Fowler's; oral care before eating; small bites, chew well, extra time; adaptive utensils", "Avoid thin liquids and sticky foods; pills with at least 8 oz (thickened) fluid", "Suction ready; supervise meals; chin tuck when swallowing"],
    teach: ["Rest before meals", "Never leave a client with dysphagia alone with a meal tray"]
  },
  table: {
    cols: ["IDDSI level", "Drinks / foods"],
    rows: [
      ["0 Thin", "Flows like water"],
      ["1 Slightly thick", "Thicker than water; still through a straw"],
      ["2 Mildly thick", "Pours but slowly; hard to sip through a straw"],
      ["3 Moderately thick / liquidized", "Smooth, no lumps; cup or spoon, not fork"],
      ["4 Extremely thick / pureed", "Holds shape; spoon only; no chewing"],
      ["5 Minced and moist", "Small soft lumps easily mashed with the tongue"],
      ["6 Soft and bite-sized", "Soft, moist, chewable pieces"],
      ["7 Easy to chew / regular", "Near-normal or normal textures"]
    ]
  },
  facts: [
    "CHECK: the source uses two systems. Ch. 8 uses IDDSI (levels 0–7); Ch. 11 uses the older National Dysphagia Diet (solids: Level 1 pureed, 2 mechanically altered, 3 advanced; liquids: thin, nectar-like, honey-like, spoon-thick). Know both; IDDSI is current.",
    "The source's sample question for an IDDSI level 2 client picks scrambled eggs (soft, moist).",
    "Highest priority to watch at meals: the client with impaired swallowing (Parkinson's, stroke)."
  ],
  qa: [
    ["Three signs of dysphagia?", "Drooling, pocketing food, coughing or choking during meals."],
    ["Which head position helps protect the airway when swallowing?", "Chin tuck (chin down)."]
  ]
},
{
  id: "enteral", sys: "cant", name: "Enteral Nutrition (Tube Feeding)", star: true, starLabel: "Safety rules",
  sub: "Tubes, formulas, delivery methods, placement, HOB, residuals, meds, complications",
  connect: ["Aspiration", "Refeeding", "Medication administration"],
  summary: "Use enteral nutrition when the gut works but the client can't eat enough. It's contraindicated with a non-functioning gut (paralytic ileus, obstruction). If the gut works, use it.",
  chain: {
    why: ["Short-term (<3–4 weeks): nasogastric; nasoduodenal or nasojejunal for aspiration risk or delayed emptying", "Long-term: gastrostomy (PEG) or low-profile button; jejunostomy", "Gastric feedings are better tolerated (less dumping)"],
    assess: ["Placement: X-ray before first use; mark the tube at the nose and check the mark every shift and before each feeding", "Bowel sounds; residuals per policy every 4–6 hr", "Daily weight, I&O, labs, stoma site, bowel pattern"],
    act: ["HOB at least 30° during feeding and 30–60 min after", "Hold for residual >250 mL on two checks (adults) or > ¼ of volume (children)", "Meds: stop feeding; flush 15–30 mL water before, between, and after each med; liquid forms; never mix meds into formula"],
    teach: ["Room-temp formula; never microwave; change bag and tubing every 24 hr; label opened cans", "Clogs: 30–50 mL warm water in a 60-mL syringe with gentle pressure; no carbonated drinks", "Meticulous oral care when NPO"]
  },
  table: {
    cols: ["Method", "How", "Notes"],
    rows: [
      ["Continuous", "Pump over 24 hr", "Best for critically ill (less aspiration and diarrhea). Flush 30 mL water every 4 hr"],
      ["Cyclic", "8–20 hr, often overnight", "Transition to oral intake"],
      ["Intermittent", "Set times by gravity or pump", "Mimics meals; home and rehab"],
      ["Bolus", "250–400 mL by syringe over 5–15 min, 4–6 times/day", "Stomach only (not duodenal/jejunal); can cause dumping"]
    ]
  },
  table2: {
    title: "Complications",
    cols: ["Type", "Nursing actions"],
    rows: [
      ["GI (diarrhea, cramping, dumping, N/V)", "Slow the rate or volume; change formula; room temperature; prevent contamination; free water for constipation"],
      ["Mechanical (dislodgement, aspiration, clogging, irritation)", "Check placement; HOB up; bolus over at least 15 min; flush routinely"],
      ["Metabolic (dehydration, hyperglycemia, electrolytes, overload, refeeding)", "Free water; isotonic formula; monitor glucose, electrolytes, weight; insulin per protocol"]
    ]
  },
  facts: [
    "pH and aspirate are not reliable for initial placement: X-ray first.",
    "Formulas: standard/polymeric (whole protein, working gut, 1–2 kcal/mL); hydrolyzed (predigested, for partial gut function); higher-calorie formulas have less water (extra free water).",
    "Closed systems preferred; clean can tops."
  ],
  qa: [
    ["How does the nurse verify NG placement each shift?", "Check the external mark at the nares (initial placement was confirmed by X-ray)."],
    ["Three meds through a feeding tube. Flushing?", "Stop the feeding; flush 15–30 mL water before, between each med, and after."],
    ["Residual is 300 mL, then 280 mL an hour later. Action?", "Hold the feeding (>250 mL on two checks) and notify the provider."]
  ]
},
{
  id: "tpn", sys: "cant", name: "Parenteral Nutrition (TPN / PPN)", star: true, starLabel: "Never catch up",
  sub: "Central vs. peripheral, contents, safety, complications, weaning",
  connect: ["Infection control", "Glucose", "Refeeding"],
  summary: "Use parenteral nutrition when the GI tract doesn't work or the client can't meet needs orally or enterally. TPN is hypertonic (dextrose >10%) and must go through a central vein; PPN (≤10% dextrose) can go peripherally for a short time.",
  chain: {
    why: ["High dextrose irritates small veins and feeds bacteria", "Lipids add calories without raising osmolality and prevent essential fatty acid deficiency", "Sudden stop → rebound hypoglycemia"],
    assess: ["Glucose (sliding-scale insulin), daily weights, I&O, electrolytes", "Prealbumin and weight show effectiveness", "Site: fever, redness, ↑ WBC"],
    act: ["Infusion pump; filter on PN tubing (not lipid tubing); verify with a second nurse; warm refrigerated bags to room temp for 1 hr", "Strict aseptic technique; sterile dressing changes; bag and tubing every 24 hr; lipids hang ≤12 hr", "Next bag late? Hang 10% or 20% dextrose. Never speed up to catch up"],
    teach: ["“Cracked” solution (oily layer or separation): don't use; return to pharmacy", "Stop lipids 12 hr before a triglyceride level", "Wean gradually once oral/enteral intake meets 50–75% of needs"]
  },
  table: {
    cols: ["", "TPN", "PPN"],
    rows: [
      ["Line", "Central vein only", "Peripheral vein"],
      ["Dextrose", "Hypertonic, >10% (up to 70%)", "10% or less; amino acids 5% or less"],
      ["Use", "Complete nutrition, high needs, long-term (cancer, bowel disease, burns, trauma, critical illness)", "Short-term (7–10 days), fewer calories; not complete"]
    ]
  },
  table2: {
    title: "Complications",
    cols: ["Complication", "Signs / actions"],
    rows: [
      ["Infection / sepsis", "Fever, ↑ WBC, redness at site → aseptic technique"],
      ["Metabolic", "Hyper- or hypoglycemia, electrolyte shifts, osmotic diuresis; fluid overload (gain >1 kg/day, edema)"],
      ["Mechanical", "Pneumothorax (SOB, ↓ breath sounds), air embolism, thrombosis, occlusion, pump errors"],
      ["Refeeding syndrome", "↓ K⁺, ↓ Mg²⁺, ↓ phosphate → weakness, confusion, seizures, dysrhythmias, shallow breathing"]
    ]
  },
  facts: [
    "Lipids: 10–30%, milky, from soybean/safflower oil and egg: check for soy, egg, safflower allergy.",
    "Insulin can be added to the bag.",
    "Weight gain >1 kg/day on TPN = fluid overload."
  ],
  qa: [
    ["The next TPN bag is delayed. Action?", "Hang 10% or 20% dextrose to prevent hypoglycemia; don't speed up later."],
    ["Why must TPN go through a central line?", "Dextrose >10% is hypertonic and damages peripheral veins."],
    ["The TPN bag has an oily layer on top. Action?", "Don't use it (“cracked” emulsion); return it to pharmacy."]
  ]
}
];

window.EMERGENCIES = [
  ["Aspiration / choking at a meal", "cant", "Coughing, choking, wet gurgly voice, drop in SpO₂ during eating or a tube feeding", "Stop the feeding, suction, position upright, assess airway; hold intake and get a swallow evaluation."],
  ["Refeeding syndrome", "heal", "Day 1–3 of feeding a starved client: weakness, confusion, dysrhythmia, edema, shallow breathing; ↓ K⁺, Mg²⁺, PO₄", "Slow or hold the feeding per order, replace electrolytes and thiamin, cardiac monitoring, notify."],
  ["Hypoglycemia", "life", "Glucose <70: shaky, sweaty, confused, palpitations", "Alert: 15 g fast carb, recheck 15 min. Can't swallow: don't give oral; IV dextrose or glucagon per protocol."],
  ["DKA / severe hyperglycemia", "life", "Polyuria, polydipsia, ketones, Kussmaul breathing, fruity breath, ↓ LOC", "Escalate: emergency care for confusion, ↓ LOC, or seizures."],
  ["TPN line infection", "cant", "Fever, ↑ WBC, redness or drainage at the central-line site", "Possible sepsis: notify, cultures per order, strict asepsis."],
  ["Fluid overload", "heart", "Weight gain >1 kg/day, edema, crackles, dyspnea (HF, AKI, TPN)", "Assess lungs and edema, review sodium and fluid intake, slow fluids per order, notify."],
  ["Hypertensive crisis (tyramine + MAOI)", "basics", "Client on phenelzine or selegiline ate aged cheese or cured meat: severe headache, very high BP", "Emergency: notify, monitor BP; reteach tyramine restrictions."],
  ["Dehydration in an infant", "life", "Diarrhea with sunken fontanel, fewer wet diapers, lethargy", "Oral rehydration solution (not sports drinks); keep breastfeeding; escalate if worsening."],
  ["Severe hyperkalemia in kidney disease", "renal", "ESKD client after high-potassium foods: weakness, numbness, dysrhythmia", "Cardiac monitoring, notify; reteach potassium limits."],
  ["Pneumothorax with central line", "cant", "Sudden SOB, ↓ breath sounds after central line insertion", "Oxygen, notify immediately, prepare for chest X-ray."]
];

window.LOOKALIKES = [
  ["Marasmus vs. kwashiorkor?", "Marasmus: too few calories and protein; visibly wasted; serum proteins may be normal. Kwashiorkor: protein deficit with adequate calories; edema can hide weight loss; low albumin."],
  ["Albumin vs. prealbumin?", "Albumin (3.5–5 g/dL) changes slowly: long-term status. Prealbumin (15–36 mg/dL) has a short half-life: best for recent intake and TPN response."],
  ["Iron vs. B12 vs. folate anemia?", "Iron: small, pale cells. B12 and folate: large cells. Only B12 causes neuro signs (paresthesias, poor balance)."],
  ["Somogyi effect vs. dawn phenomenon?", "Somogyi: nighttime low → rebound morning high (bedtime snack, less insulin). Dawn: early-morning rise from growth hormone (more overnight insulin)."],
  ["Early vs. late dumping?", "Early (10–20 min): cramping, diarrhea, dizziness, tachycardia, sweating from fluid shift. Late (1–3 hr): hypoglycemia from insulin overshoot."],
  ["CKD before vs. on dialysis: protein?", "Before dialysis: restrict (about 0.8–1.0 g/kg). On dialysis: increase (1.0–1.2 g/kg) because dialysate removes protein."],
  ["Clear liquid vs. full liquid?", "Clear: see-through at room temp (broth, apple juice, gelatin, tea, popsicles). Full: adds milk, ice cream, sherbet, pudding, strained cereal."],
  ["TPN vs. PPN?", "TPN: central line, dextrose >10%, complete and long-term. PPN: peripheral, ≤10% dextrose, short-term (7–10 days), not complete."],
  ["Food allergy vs. intolerance?", "Allergy: immune (histamine), every exposure, can be severe. Intolerance: dose-dependent (e.g., lactose)."],
  ["Diverticulosis vs. diverticulitis diet?", "Diverticulosis (pouches): high fiber to prevent problems. Acute diverticulitis (inflamed): clear liquids, then advance to high-fiber, low-fat."]
];
