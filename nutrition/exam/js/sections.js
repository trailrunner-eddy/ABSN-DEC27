/* Section introductions: a diagram (when there is one), a short summary that ties the section
   together, and the core facts to know. One per Key Concept, plus Foundations. */
window.SECTIONS = {
  basics: {
    diagram: "plate",
    lead: "Section 0 · Macronutrients, vitamins, minerals, water, healthy eating, and food safety (Ch. 1, 4, 5).",
    summary: [
      "Everything else in this course builds on these basics. Carbohydrate, protein, and fat supply energy (4, 4, and 9 kcal per gram). Protein does the building and repairing, carbohydrate keeps the brain fueled and spares protein, and fat stores energy and carries the fat-soluble vitamins A, D, E, and K. Vitamins and minerals are the helpers, and water is the nutrient you can't go more than a few days without.",
      "The practical side is what you teach: MyPlate and the Dietary Guidelines for healthy patterns, label reading for sodium and allergens, safe storage and cooking temperatures, and the food–drug interactions that show up on exams (grapefruit, vitamin K with warfarin, tyramine with MAOIs)."
    ],
    structure: [
      "kcal/g: carb 4, protein 4, fat 9. AMDR: carb 45–65%, protein 10–35%, fat 20–35%.",
      "Water-soluble: C and B complex (need regular intake). Fat-soluble: A, D, E, K (stored, can be toxic).",
      "Major minerals ≥100 mg/day (Ca, P, Na, K, Mg, Cl, S); trace ≤20 mg/day (iron, iodine, zinc...).",
      "Minimum water 1,500 mL/day. Thirst is a late sign in older adults.",
      "Fridge ≤40 °F. Cook: 145 °F steaks, 160 °F ground beef and eggs, 165 °F poultry."
    ]
  },
  vital: {
    diagram: "",
    lead: "Key Concept 1 · Nutrition assessment in every patient; hydration and electrolytes for homeostasis (Ch. 3, 11, 12).",
    summary: [
      "Treat nutrition like a vital sign: something you check on everyone, because hydration, electrolytes, and nutrient status keep every system in balance. A normal-looking weight can hide malnutrition (think edema in kwashiorkor, or muscle loss behind a healthy BMI). The Joint Commission requires a nutrition screen within 24 hours of admission, and at-risk clients go to the dietitian.",
      "Your tools are the diet history, anthropometrics (weight change %, BMI, ideal body weight, waist), labs (albumin for the long view, prealbumin for recent change, nitrogen balance), and the social picture: food insecurity, dentition, dementia, sensory changes, and money. Malnutrition is diagnosed with two of four criteria, and obesity is a nutrition problem too."
    ],
    structure: [
      "% weight change = (usual − current) ÷ usual × 100. BMI = kg ÷ m².",
      "BMI <18.5 / 18.5–24.9 / 25–29.9 / ≥30.",
      "IBW: females 100 lb + 5 lb/inch over 5 ft; males 106 lb + 6 lb/inch.",
      "Albumin 3.5–5 g/dL; prealbumin 15–36 mg/dL (<10.7 severe).",
      "Malnutrition = 2 of: low intake, unintentional weight loss, muscle loss, decreased function."
    ]
  },
  heal: {
    diagram: "",
    lead: "Key Concept 2 · Protein, vitamins, inflammation, tissue repair, immunity, and infection risk (Ch. 1, 2, 12).",
    summary: [
      "Healing tissue needs building blocks (protein), helpers (vitamins C, A, K and zinc), and energy (calories). Surgery, trauma, burns, and sepsis flood the body with stress hormones that break protein down fast, so the body goes into negative nitrogen balance. Without enough protein, wounds heal slowly, skin breaks down, antibodies fall, and infection risk climbs.",
      "So needs go up: protein can exceed 2 g/kg in severe stress, burns need early enteral feeding within 4–6 hours, and septic clients get nutrition support as soon as possible. The trap on the other side is refeeding syndrome: restart nutrition too fast in a starved client and potassium, magnesium, and phosphorus crash."
    ],
    structure: [
      "Catabolism = breaking down; anabolism = building up.",
      "Protein >2 g/kg (up to 25% of calories) in severe stress.",
      "Vitamin C = collagen. Vitamin A = tissue growth and immunity. Vitamin K = clotting.",
      "Burns: EN within 4–6 hr if oral intake can't meet needs.",
      "Refeeding: ↓ K⁺, ↓ Mg²⁺, ↓ PO₄, thiamin used up. Start slow."
    ]
  },
  breath: {
    diagram: "",
    lead: "Key Concept 3 · Why respiratory disease raises calorie needs; hydration and respiratory function (Ch. 12, 17).",
    summary: [
      "Breathing is work. In COPD and cystic fibrosis the respiratory muscles labor all day and chronic inflammation raises metabolism, so calorie needs go up. Eating itself gets harder: a full stomach pushes on the diaphragm, chewing competes with breathing, and fatigue kills appetite. If intake falls behind, the body breaks down muscle, including the diaphragm, which makes breathing even harder.",
      "Nursing care breaks the spiral: small, frequent, calorie- and protein-dense meals, rest and sit up before eating, oxygen at meals if prescribed, supplements between meals, and enough fluid to keep secretions thin (unless the client is fluid-restricted). CF adds pancreatic enzymes and fat-soluble vitamins."
    ],
    structure: [
      "COPD: ↑ work of breathing → ↑ calories; dyspnea while eating.",
      "CF: no pancreatic enzymes → fat malabsorption → A, D, E, K deficiency.",
      "HIV/respiratory infection: ↑ needs, wasting.",
      "Fluids thin secretions (unless fluid-restricted).",
      "Dysphagia → aspiration pneumonia risk."
    ]
  },
  heart: {
    diagram: "",
    lead: "Key Concept 4 · Diet in hypertension, atherosclerosis, heart failure, and cardiovascular risk (Ch. 13).",
    summary: [
      "Heart disease is the leading cause of death in the U.S., and diet is both prevention and treatment. LDL deposits plaque and HDL carries cholesterol back to the liver, so the TLC diet cuts saturated fat (<7%), cholesterol (<200 mg/day), and trans fat while adding soluble fiber and omega-3s. Metabolic syndrome is any three of five risk markers.",
      "For blood pressure, DASH lowers sodium (<2,300 mg/day, toward 1,500) and raises potassium and calcium. Heart failure tightens sodium further and limits fluid to about 2 L, with daily weights to catch fluid early. After an MI, keep the heart's workload low: liquids first, no caffeine, small meals."
    ],
    structure: [
      "LDL optimal <100 mg/dL. HDL protective ≥60 (M) / ≥70 (F) per the source.",
      "TLC: saturated fat <7%, cholesterol <200 mg/day, no trans fat.",
      "DASH: low Na⁺, high K⁺ and Ca²⁺; Na⁺ <2,300 → 1,500 mg.",
      "HF: Na⁺ <3,000 (mild/mod) or <2,000 mg (severe); fluid ~2 L; daily weights.",
      "Metabolic syndrome: waist, TG ≥150, low HDL, BP ≥130/80, FBG ≥100 (any 3)."
    ]
  },
  renal: {
    diagram: "",
    lead: "Key Concept 5 · Diet in kidney disease and electrolyte disorders (Ch. 15).",
    summary: [
      "The kidneys regulate fluid volume, clear wastes, balance acid and base, control blood pressure, activate vitamin D, and signal red cell production. Urea is the waste product of protein, so protein is central: restricted before dialysis to slow damage, then increased on dialysis because protein is lost in the dialysate. Potassium, phosphorus, sodium, and fluid are limited throughout.",
      "The daily weight is the best fluid indicator. Phosphate binders go with every meal and snack. In AKI, oliguric fluid allowance is yesterday's urine output plus 500 mL. Nephrotic syndrome leaks protein, causing low albumin and edema. Kidney stones are prevented mainly with fluid: enough to make at least 2 L of urine a day."
    ],
    structure: [
      "CKD 1–4 protein ~0.8–1.0 g/kg. Dialysis 1.0–1.2 g/kg.",
      "ESKD: 35 kcal/kg; phosphorus 700–1,200 mg; sodium 2–3 g; fluid restricted.",
      "No active vitamin D → ↑ phosphorus, ↓ calcium.",
      "AKI oliguric fluid = urine output + 500 mL; 20–30 kcal/kg.",
      "Stones: ≥2 L urine/day; limit oxalates for calcium oxalate stones."
    ]
  },
  gi: {
    diagram: "gitract",
    lead: "Key Concept 6 · Normal digestion and absorption; how GI disease changes nutrient needs (Ch. 2, 14).",
    summary: [
      "Food has to be taken in, broken down, absorbed, and then metabolized. Starch is digested by pancreatic amylase; fat needs bile to emulsify it and pancreatic lipase to digest it; most absorption happens in the small intestine. Anywhere this chain breaks, nutrients are lost: gastric surgery loses intrinsic factor (B12) and causes dumping, celiac and Crohn's damage the absorbing surface, and pancreatic or gallbladder disease makes fat hard to digest.",
      "Each disorder has a matching diet: GERD avoids things that relax the LES, ulcers avoid irritants, dumping uses dry small meals with fluids between, celiac is strictly gluten-free, acute pancreatitis rests the gut with NPO and NG suction, and ostomies need extra fluid. Symptoms like nausea, anorexia, constipation, and diarrhea each have their own tricks."
    ],
    structure: [
      "Starch: pancreatic amylase. Fat: bile + pancreatic lipase.",
      "Absorption: mainly the small intestine.",
      "Coffee-ground emesis = blood; green = bile.",
      "Dumping: early 10–20 min (fluid shift); late 1–3 hr (hypoglycemia).",
      "Celiac: no wheat, barley, rye (BROW adds oats)."
    ]
  },
  life: {
    diagram: "",
    lead: "Key Concept 7 · Hormones and metabolism; lifespan needs; diabetes (Ch. 2, 7, 16).",
    summary: [
      "Metabolic rate is set mostly by lean body mass and hormones like thyroid hormone. It rises with growth, pregnancy, fever, burns, and hyperthyroidism, and falls with aging, starvation, and hypothyroidism. Needs follow: pregnancy adds calories, protein, folic acid, and iron; infants double their birth weight by 6 months; adolescents need more calcium and iron; older adults need fewer calories but the same or more vitamins and minerals.",
      "Diabetes is the metabolic disease you'll see most. Type 1 has no insulin and type 2 has resistance. Diet spreads carbohydrate through the day using carb counting (15 g per choice), sugar is allowed if counted, and every nurse must know the Rule of 15 for a glucose under 70."
    ],
    structure: [
      "Pregnancy: +340 kcal (2nd), +450 (3rd); protein 71 g; folic acid 600 mcg; iron 27 mg.",
      "Infants: double birth weight by 6 mo, triple by 1 yr; solids ~6 mo; no honey or cow's milk <1 yr.",
      "Toddlers: whole milk 1–2 yr; milk ≤24 oz; juice 4–6 oz.",
      "Older adults: ↓ calories, same or ↑ vitamins; dehydration most common.",
      "Hypoglycemia <70: 15 g fast carb, recheck in 15 min."
    ]
  },
  blood: {
    diagram: "",
    lead: "Key Concept 8 · Deficiency anemias; nutrition during cancer treatment (Ch. 13, 17).",
    summary: [
      "Red blood cells need iron, vitamin B12, and folic acid. Without iron, cells come out small and pale; without B12 or folate, they come out large. B12 also protects nerves, so B12 deficiency adds numbness, tingling, and poor balance. Iron deficiency is the most common nutritional disorder in the world; B12 deficiency hits vegans, older adults, and anyone missing intrinsic factor after gastric surgery.",
      "Cancer raises metabolism, causes anorexia, and pushes the body into negative nitrogen balance, while chemo and radiation cause mouth sores, taste changes, nausea, and diarrhea. Teaching is symptom-by-symptom, and immunosuppressed clients need strict food safety."
    ],
    structure: [
      "Iron: microcytic. B12 and folate: macrocytic. B12 only: neuro signs.",
      "Vitamin C boosts iron absorption.",
      "No intrinsic factor → B12 injections.",
      "Cancer needs: 25–35 kcal/kg; protein 1–2.5 g/kg.",
      "HIV wasting: 10% weight loss + diarrhea, weakness, or fever for 30+ days."
    ]
  },
  cant: {
    diagram: "routes",
    lead: "Key Concept 9 · Swallowing problems, modified diets, enteral and parenteral nutrition (Ch. 8, 9, 10, 11).",
    summary: [
      "Stroke, Parkinson's disease, cerebral palsy, dementia, and head and neck surgery can make normal eating unsafe, and the danger is aspiration. The ladder goes from a modified oral diet (texture changes, thickened liquids, IDDSI levels) to enteral feeding through a tube to parenteral nutrition through a vein. The rule is simple: if the gut works, use it.",
      "Each step has safety rules that show up on exams. Tube feeding: X-ray before first use, HOB at least 30° during and after, check the tube mark, flush around meds, hold for high residuals. TPN: central line for dextrose over 10%, strict asepsis, never speed up to catch up, hang dextrose if the next bag is late, and watch glucose and refeeding labs."
    ],
    structure: [
      "Post-op diet: NPO → clear → full → regular once bowel sounds and flatus return.",
      "IDDSI 0 thin → 4 pureed → 7 regular.",
      "NG/NJ <3–4 weeks; PEG or J-tube long-term.",
      "Tube feeding: HOB ≥30°; flush 30 mL q4h; meds 15–30 mL flushes; hold residual >250 mL ×2.",
      "TPN: >10% dextrose = central; lipids ≤12 hr; tubing 24 hr; wean at 50–75% intake."
    ]
  }
};
