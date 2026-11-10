/* ATI Nutrition CMS add-on: the exam page (#ati), six topics the earlier guide didn't cover,
   their flashcards and plain-language versions.
   The "ATI Nutrition CMS Study Resources" handout lists ATI resources but no content, so these
   topics follow the standard ATI Nutrition review areas and the Engage modules the handout names.
   Loads after data.js, practice.js, and plain.js. New topics and cards are appended (never inserted)
   so saved progress keeps its place. Safe to load without plain.js (NCLEX Prep loads only the banks). */
(function () {
  var W = window;
  W.DISORDERS = W.DISORDERS || []; W.FLASHCARDS = W.FLASHCARDS || [];

  /* ---------- The ATI exam page ---------- */
  W.ATI = {
    title: "ATI Nutrition CMS",
    lead: "The proctored ATI Nutrition Content Mastery Series assessment: 70 questions. This page maps the ATI review areas to every topic on this site and gives you a plan for the time you have left.",
    facts: [
      ["70 questions", "Proctored and timed. ATI proctored tests include some unscored pretest items, and you can't tell which ones they are, so treat every question as scored."],
      ["Mostly multiple choice", "Plus select all that apply and a few alternate formats: fill-in-the-blank calculations (rounded the way the stem says), ordered response, and charts or exhibits."],
      ["Scored by proficiency level", "ATI reports Below Level 1, Level 1, Level 2, or Level 3. Check your syllabus for the level your course requires."],
      ["Written in ATI's voice", "\"A nurse is teaching a client who…\" Most items ask for the best food choice, the statement that shows understanding (or needs more teaching), or the first action."]
    ],
    plan: [
      ["Take Practice Assessment A", "It's required. Do it first and cold, so the score shows what you actually know."],
      ["Work your Focused Review", "ATI builds it from the items you missed. Spend most of your time on those areas instead of rereading everything."],
      ["Drill here by section", "Use the blueprint below: open the topics for your weak areas, then do Practice Qs for that section until you're at 85% or better."],
      ["Take Practice Assessment B", "Optional, but it's a second full look at ATI-style items. Review the rationales for right and wrong answers."],
      ["Dynamic Quizzing + the 70-question practice test", "Pick Nutrition in Dynamic Quizzing. Then take the 70-question practice test on this site in one sitting to build stamina."],
      ["Night before", "Run the Must-Know Numbers and the ATI flashcards. Sleep."]
    ],
    engage: [
      ["Engage Fundamentals: Nutrition", "Nutrition assessment, imbalanced nutrition, care planning, factors affecting nutritional status.", ["screen", "labs", "malnut", "barriers", "culture"]],
      ["Engage Pharmacology: Nutrition as Medicine", "Macro- and micronutrients and what influences nutrition.", ["macros", "vitamins", "minerals", "foodsafety"]],
      ["Engage Pharmacology: Vitamins and Minerals", "Micronutrients, supplementation, deficiency and excess.", ["supplements", "vitamins", "minerals", "anemia"]]
    ],
    units: [
      { name: "Principles of nutrition", items: [
        ["Sources of nutrition: carbohydrate, protein, fat, vitamins, minerals, water", ["macros", "vitamins", "minerals", "supplements"]],
        ["Ingestion, digestion, absorption, metabolism", ["digest", "bmr"]],
        ["Nutrition assessment and data collection", ["screen", "labs", "malnut"]],
        ["Guidelines for healthy eating", ["guidelines"]],
        ["Food safety and food–drug interactions", ["foodsafety", "supplements"]],
        ["Cultural, religious, and socioeconomic influences", ["culture", "barriers"]],
        ["Nutrition across the lifespan", ["preg", "infant", "child", "peds"]]
      ] },
      { name: "Clinical nutrition", items: [
        ["Modified diets and diet progression", ["modified", "dysphagia"]],
        ["Enteral nutrition", ["enteral"]],
        ["Parenteral nutrition", ["tpn", "refeed"]]
      ] },
      { name: "Alterations in nutrition", items: [
        ["Barriers to adequate nutrition", ["barriers", "malnut", "obesity", "peds"]],
        ["Gastrointestinal disorders", ["upper", "lower", "accessory", "liver"]],
        ["Cardiovascular and hematologic disorders", ["chd", "htn", "hf", "anemia"]],
        ["Diabetes mellitus", ["dm", "dmplus"]],
        ["Kidney disorders", ["ckd", "aki", "stones"]],
        ["Cancer and immunosuppression (including HIV)", ["cancer"]],
        ["Wound healing, stress, burns, and respiratory disease", ["stress", "burns", "resp"]]
      ] }
    ],
    traps: [
      "\"Which statement indicates understanding?\" wants the TRUE statement. \"Needs further teaching\" wants the FALSE one. Reread the last line of the stem before you answer.",
      "Food-choice items: test every food against the restriction. Hidden sodium (canned soup, cured meat, pickles), hidden gluten (barley, rye, malt), hidden potassium (potatoes, tomatoes, oranges, dried fruit), hidden tyramine (aged cheese, cured meat, soy sauce).",
      "The client's stage changes the diet: CKD before dialysis restricts protein, dialysis raises it. Diverticulitis flare is low fiber, diverticulosis is high fiber. Acute pancreatitis is NPO.",
      "Assessment before action when the stem gives you no data. Airway first when the client is coughing or choking at a meal or during a tube feeding.",
      "Ask about preferences before planning a diet for any cultural or religious practice. Never assume from a client's background.",
      "Calculation items: show your units, round only at the end, and follow the stem's rounding rule exactly."
    ]
  };

  /* ---------- New topics ---------- */
  var T = [
  {
    id: "culture", sys: "basics", name: "Cultural, Religious & Socioeconomic Food Practices", star: true, starLabel: "ATI",
    sub: "Kosher, halal, Ramadan, Hindu, Buddhist, Adventist, Latter-day Saints, Catholic; SNAP, WIC, Meals on Wheels",
    connect: ["Teaching", "Diabetes", "Food insecurity"],
    summary: "Food carries culture and faith, so a diet plan the client can't follow isn't a plan. Ask what the client eats and avoids, learn the main religious rules, and plan around fasting days and food access. Never assume from a client's background.",
    chain: {
      why: ["Religious laws decide which foods are allowed, how they're prepared, and when people fast", "Income and access decide what a client can buy", "Culturally familiar food improves intake and adherence"],
      assess: ["Ask: foods eaten and avoided, who cooks and shops, fasting practices, food budget", "Fasting + medications (insulin, oral diabetes drugs) = hypoglycemia risk", "Food insecurity: running out of food, skipping meals, cost"],
      act: ["Plan the diet around the practice (e.g., kosher or halal meal trays, vegetarian protein sources)", "Adjust medication timing for fasting with the provider", "Refer: dietitian, social work, SNAP, WIC, food banks, Meals on Wheels"],
      teach: ["Most faiths excuse the ill, pregnant clients, and children from fasting, but let the client decide with their faith leader", "Budget tips: dried beans, eggs, frozen and canned produce (rinse canned vegetables), store brands"]
    },
    table: {
      cols: ["Faith", "Practices to know"],
      rows: [
        ["Judaism (kosher)", "No pork or shellfish; fish must have fins and scales. Meat and dairy are never eaten together (separate dishes, a waiting period between). Passover: no leavened bread. Yom Kippur: 24-hour fast."],
        ["Islam (halal)", "No pork and no alcohol (including some medications and vanilla extract made with alcohol). Meat must be halal-slaughtered. Ramadan: no food or drink from sunrise to sunset for a month."],
        ["Hinduism", "Beef is forbidden (the cow is sacred); many are vegetarian. Fasting on holy days."],
        ["Buddhism", "Many are lacto-ovo vegetarian (avoid killing animals); some avoid alcohol. Fasting on holy days."],
        ["Seventh-day Adventist", "Lacto-ovo vegetarian diet encouraged. No pork or shellfish, alcohol, tobacco, or caffeine (coffee, tea)."],
        ["Latter-day Saints (Mormon)", "No alcohol, tobacco, coffee, or tea. Fasting once a month (often the first Sunday) for 24 hours."],
        ["Roman Catholic", "No meat on Ash Wednesday and the Fridays of Lent; fasting on Ash Wednesday and Good Friday. No food for 1 hour before Communion."],
        ["Eastern Orthodox", "Many fasting periods (e.g., Lent) with no meat, dairy, or eggs."]
      ]
    },
    tableTitle: "Religious food practices",
    facts: [
      "Kosher = no pork or shellfish and never meat with dairy (no cheeseburger, no milk with a meat meal).",
      "Halal = no pork and no alcohol. Ramadan = fasting sunrise to sunset; plan insulin and meals with the provider.",
      "Adventists and Latter-day Saints both avoid alcohol and coffee/tea; Adventists are often vegetarian.",
      "Lactose intolerance is more common in Asian, African American, Hispanic, and Native American clients: offer lactose-free milk, yogurt, hard cheese, or fortified soy milk for calcium.",
      "WIC serves pregnant, postpartum, and breastfeeding clients and children under 5 at nutrition risk. SNAP helps low-income households buy food. Older Americans Act programs (Meals on Wheels, congregate meals) serve older adults."
    ],
    qa: [
      ["A client who keeps kosher is ordered a cheeseburger and a milkshake. Problem?", "Meat and dairy can't be eaten together. Offer a plain burger with a nondairy drink, or a dairy meal without meat."],
      ["A client with type 2 diabetes plans to fast for Ramadan. Nurse's first step?", "Ask about the plan and involve the provider to adjust medication timing (hypoglycemia risk). Teach glucose checks and when to break the fast."],
      ["A Latter-day Saints client asks for a hot drink. What can you offer?", "Herbal (caffeine-free) tea, hot cocoa, or broth; not coffee or black tea."]
    ]
  },
  {
    id: "supplements", sys: "basics", name: "Supplements: Deficiency, Toxicity & Drug Interactions", star: true, starLabel: "ATI · Engage Pharm",
    sub: "Who needs supplements, how to take iron, calcium, potassium, vitamin D; toxicity; herbal–drug interactions",
    connect: ["Vitamins", "Minerals", "Anemia", "Pregnancy"],
    summary: "Food first, but some clients need supplements: pregnancy (folic acid, iron), infants (vitamin D, iron), older adults (B12, D, calcium), vegans (B12), bariatric surgery, alcohol use disorder, and malabsorption. Supplements aren't FDA-approved for safety before sale, and fat-soluble vitamins and iron can be toxic.",
    chain: {
      why: ["Deficiency: poor intake, malabsorption, higher need (pregnancy, growth, healing), drugs that block absorption", "Excess: high-dose supplements, especially A and D (stored in fat) and iron"],
      assess: ["Ask about every supplement and herbal product (clients often don't count them as medicine)", "Who's at risk: pregnancy, infants, older adults, vegans, alcohol use, bariatric surgery, Crohn's, CKD", "Drug–nutrient interactions on the MAR"],
      act: ["Iron: on an empty stomach if tolerated, with vitamin C; not with milk, tea, coffee, or antacids; liquid through a straw", "Calcium: no more than 500–600 mg at a time; carbonate with food, citrate any time; separate from iron, levothyroxine, and tetracycline/fluoroquinolone antibiotics", "Potassium: with food and a full glass of water; don't crush extended-release tablets"],
      teach: ["Iron turns stools dark green or black and constipates: fluids and fiber", "Keep iron locked away: a leading cause of poisoning death in young children", "Tell the provider before starting herbal products"]
    },
    table: {
      cols: ["Nutrient", "Best sources", "Deficiency", "Excess / key teaching"],
      rows: [
        ["Vitamin A", "Liver, orange and dark green vegetables, fortified milk", "Night blindness, dry eyes, poor immunity", "Teratogenic in pregnancy (birth defects); liver damage. Isotretinoin is a vitamin A drug: no A supplements with it."],
        ["Vitamin D", "Fortified milk, fatty fish, egg yolk, sunlight", "Rickets (children), osteomalacia, osteoporosis", "Hypercalcemia, kidney stones. Breastfed infants get 400 IU/day."],
        ["Vitamin E", "Vegetable oils, nuts, seeds", "Rare: nerve damage, hemolysis", "High doses ↑ bleeding with warfarin or aspirin."],
        ["Vitamin K", "Green leafy vegetables, gut bacteria", "Bleeding; newborns get one IM dose at birth", "Reverses warfarin: keep intake consistent."],
        ["Vitamin C", "Citrus, peppers, strawberries, tomatoes, broccoli", "Scurvy: bleeding gums, poor wound healing", "Diarrhea and kidney stones at high doses. Smokers need more."],
        ["Thiamin (B1)", "Pork, whole and enriched grains, legumes", "Beriberi; Wernicke encephalopathy (confusion, ataxia, eye movement problems) in alcohol use disorder", "Give thiamin before glucose in alcohol use disorder."],
        ["Niacin (B3)", "Meat, poultry, fish, enriched grains", "Pellagra: dermatitis, diarrhea, dementia", "Flushing and liver damage at drug doses."],
        ["Pyridoxine (B6)", "Meat, fish, potatoes, bananas", "Neuropathy, especially with isoniazid (INH) for TB", "Given with INH. High doses cause neuropathy."],
        ["Folate", "Dark greens, legumes, orange juice, fortified grains", "Megaloblastic anemia; neural tube defects", "400 mcg/day before and during early pregnancy. High doses can hide B12 deficiency."],
        ["Vitamin B12", "Animal foods only; fortified foods", "Pernicious anemia + neuro signs (paresthesias)", "Injections if no intrinsic factor. Metformin and PPIs lower absorption."],
        ["Calcium", "Milk, yogurt, cheese, sardines, fortified juice and soy milk, kale", "Osteoporosis; tetany if low in the blood", "Constipation, kidney stones. Take with vitamin D."],
        ["Iron", "Red meat, poultry, fish (heme); beans, fortified cereal, dried fruit (non-heme)", "Microcytic anemia: fatigue, pallor, spoon nails", "Overdose in children can be fatal. Dark stools, constipation."],
        ["Potassium", "Bananas, potatoes, oranges, tomatoes, spinach, dried fruit", "Hypokalemia with loop and thiazide diuretics: weakness, dysrhythmia", "Salt substitutes are potassium chloride: avoid with CKD, ACE inhibitors, or potassium-sparing diuretics."],
        ["Magnesium", "Nuts, seeds, whole grains, green vegetables", "Alcohol use, diuretics, PPIs: tremor, dysrhythmia", "Antacids and laxatives with magnesium are risky in CKD."],
        ["Zinc", "Meat, seafood, whole grains", "Poor wound healing, taste loss", "Copper deficiency with long-term high doses."],
        ["Iodine / fluoride", "Iodized salt, seafood / fluoridated water", "Goiter / dental caries", "Fluorosis (mottled teeth) with too much fluoride."]
      ]
    },
    tableTitle: "Vitamins & minerals: sources, deficiency, excess",
    facts: [
      "Vitamin C boosts non-heme iron absorption; milk, tea, coffee, and antacids block it.",
      "Calcium binds levothyroxine, iron, and tetracycline/fluoroquinolone antibiotics: separate the doses.",
      "Herbal interactions: St. John's wort speeds drug metabolism (lowers levels of oral contraceptives, warfarin, many others) and adds serotonin with SSRIs; ginkgo, garlic, ginger, and vitamin E add bleeding risk.",
      "Older adults: B12 absorption drops (less stomach acid), and skin makes less vitamin D.",
      "Look for the USP seal: it means the product contains what the label says, not that it works."
    ],
    qa: [
      ["Best drink to take an iron tablet with?", "Orange juice (vitamin C). Not milk, tea, or coffee."],
      ["Client takes levothyroxine and calcium carbonate at breakfast. Teaching?", "Take levothyroxine alone on an empty stomach; take calcium at least 4 hours later."],
      ["Which supplement must a client avoid while taking isotretinoin?", "Vitamin A (additive toxicity); isotretinoin is also teratogenic."]
    ]
  },
  {
    id: "liver", sys: "gi", name: "Liver Disease, Alcohol & Hepatic Encephalopathy", star: true, starLabel: "ATI",
    sub: "Hepatitis, cirrhosis, ascites, varices, encephalopathy, alcohol use disorder",
    connect: ["Malnutrition", "Refeeding", "Vitamins"],
    summary: "The liver stores vitamins, makes albumin and clotting factors, and clears ammonia. When it fails, clients lose muscle and weight, hold fluid (ascites), bleed easily, and get confused when ammonia builds up. Malnutrition is common, so the diet usually gives enough calories and protein while limiting sodium and stopping alcohol.",
    chain: {
      why: ["Low albumin → fluid leaks into the abdomen (ascites) and tissues", "Portal hypertension → esophageal varices that can bleed", "Ammonia (from protein breakdown) isn't cleared → hepatic encephalopathy", "Alcohol displaces food and blocks thiamin, folate, and magnesium"],
      assess: ["Weight (falsely high with ascites), muscle wasting, abdominal girth", "Confusion, asterixis (flapping hand tremor), ammonia level", "Bleeding, bruising; albumin; glucose (the liver can't store glycogen)"],
      act: ["Cirrhosis: enough calories and protein (don't routinely restrict protein), small frequent meals plus a late-evening snack", "Ascites: sodium restriction (about 2,000 mg/day); fluid restriction only if sodium is low", "Encephalopathy: lactulose to clear ammonia (goal 2–3 soft stools a day); vegetable and dairy protein are better tolerated", "Varices: soft foods; avoid coarse, hard, or spicy foods that could tear them"],
      teach: ["No alcohol, ever, in liver disease", "Multivitamin with B vitamins, zinc, and fat-soluble vitamins as ordered", "Avoid acetaminophen in large doses and herbal products unless the provider approves"]
    },
    table: {
      cols: ["Problem", "Diet / nursing focus"],
      rows: [
        ["Hepatitis", "Small, frequent, high-calorie meals (appetite is worst later in the day, so make breakfast the biggest meal); rest; no alcohol"],
        ["Cirrhosis", "High calorie, adequate to high protein, late-evening snack, multivitamin, no alcohol"],
        ["Ascites", "Sodium about 2,000 mg/day; daily weight and girth; fluid limit if hyponatremic"],
        ["Esophageal varices", "Soft, nonirritating foods; avoid raw vegetables, nuts, chips, and spicy food"],
        ["Hepatic encephalopathy", "Lactulose (2–3 soft stools/day); prefer vegetable and dairy protein; watch for confusion and asterixis"],
        ["Alcohol use disorder", "Thiamin before glucose (prevents Wernicke encephalopathy); folate, magnesium; watch for refeeding syndrome"]
      ]
    },
    tableTitle: "Liver disease and alcohol",
    beyond: "Older textbooks restricted protein in hepatic encephalopathy. Current liver-disease guidelines say not to restrict it long term because restriction speeds muscle loss; lactulose is the first-line treatment. If an ATI item asks about protein in encephalopathy, look for the answer that controls ammonia (lactulose, small frequent meals, plant and dairy protein) rather than one that cuts protein drastically.",
    facts: [
      "Lactulose works when the client has 2–3 soft stools a day. Report diarrhea (dehydration, low potassium).",
      "Thiamin first, then glucose, in a client with alcohol use disorder.",
      "Ascites makes weight unreliable: track abdominal girth and muscle mass too.",
      "Varices: avoid rough foods that scrape the esophagus."
    ],
    qa: [
      ["Cirrhosis with ascites. Which lunch? Ham sandwich, canned soup, or grilled chicken with rice?", "Grilled chicken with rice (ham and canned soup are high in sodium)."],
      ["Why give thiamin before IV dextrose in alcohol use disorder?", "Glucose metabolism uses up thiamin and can trigger Wernicke encephalopathy."],
      ["How do you know lactulose is working?", "2–3 soft stools a day and improved mental status (less confusion, less asterixis)."]
    ]
  },
  {
    id: "dmplus", sys: "life", name: "Diabetes Self-Management: Sick Days, Exercise & Pregnancy", star: true, starLabel: "ATI",
    sub: "Sick-day rules, exercise and glucose, gestational diabetes, A1C, alcohol, sweeteners, metformin",
    connect: ["Diabetes", "Pregnancy", "Hypoglycemia"],
    summary: "Diabetes questions on ATI are teaching questions: what to do when sick, how to exercise safely, how to eat in pregnancy, and how to spread carbohydrate through the day. The two big rules: keep taking insulin when sick, and carry fast carbohydrate during exercise.",
    chain: {
      why: ["Illness and stress hormones raise glucose even without eating", "Exercise moves glucose into muscle and can drop it for up to 24 hours", "Pregnancy hormones cause insulin resistance in the 2nd and 3rd trimesters"],
      assess: ["Sick day: glucose every 3–4 hours, urine or blood ketones when glucose is over 240 mg/dL", "Before exercise: glucose; delay if very high with ketones, eat first if under 100", "Gestational diabetes screening at 24–28 weeks"],
      act: ["Sick day: keep taking insulin; if solid food isn't tolerated, take about 15 g carbohydrate every hour (or about 50 g every 3–4 hours) as liquids or soft foods; 8 oz of sugar-free fluid every hour", "Exercise: 15 g carbohydrate snack if glucose is under 100 before starting; carry glucose tablets; exercise 1–2 hours after a meal", "Gestational: 3 meals and 2–3 snacks including a bedtime snack; limit concentrated sweets; insulin if diet isn't enough"],
      teach: ["Call the provider: glucose over 240 mg/dL that doesn't come down, moderate or large ketones, vomiting or diarrhea over 6 hours, can't keep fluids down", "Alcohol: with food only, because it blocks the liver from releasing glucose", "Metformin: take with meals; long-term use can lower B12"]
    },
    table: {
      cols: ["Situation", "What to teach"],
      rows: [
        ["Sick day", "Never skip insulin. Glucose every 3–4 hr. Ketones if >240. Carbohydrate as liquids (juice, regular soda, popsicles, broth with crackers). Fluids hourly."],
        ["Exercise", "Check glucose first. <100: snack first. Very high with ketones (type 1): don't exercise. Carry fast carbs. Watch for delayed lows that night."],
        ["Gestational diabetes", "Screen 24–28 weeks. Carbs spread over 3 meals + 2–3 snacks, bedtime snack with protein. Risks: large baby, newborn hypoglycemia. Retest after delivery; higher lifetime type 2 risk."],
        ["Pre-existing diabetes + pregnancy", "Tight control before conception lowers birth defect risk. Insulin needs drop in the 1st trimester and rise in the 2nd–3rd."],
        ["Sweeteners", "Nonnutritive sweeteners are fine in moderation. Aspartame is not safe in PKU."],
        ["Glycemic index", "Whole grains, legumes, and fiber raise glucose more slowly than white bread, potatoes, and sugary drinks."]
      ]
    },
    tableTitle: "Diabetes teaching by situation",
    facts: [
      "A1C goal for most adults with diabetes: <7%. It reflects about 3 months of glucose.",
      "When sick, glucose goes UP: keep insulin going and check more often.",
      "Exercise lowers glucose for up to 24 hours: eat if under 100 and carry fast carbs.",
      "Gestational diabetes: bedtime snack prevents overnight ketosis."
    ],
    qa: [
      ["Type 1 client with flu, not eating, asks to skip insulin. Response?", "Keep taking insulin (illness raises glucose); check glucose every 3–4 hr and ketones if over 240; take carbohydrate as liquids."],
      ["Glucose 92 mg/dL before a jog. Teach?", "Eat a 15 g carbohydrate snack first and carry glucose tablets."],
      ["Why a bedtime snack in gestational diabetes?", "To prevent overnight hypoglycemia and ketosis during the long fast."]
    ]
  },
  {
    id: "peds", sys: "life", name: "Eating Disorders, Food Allergies & PKU", star: true, starLabel: "ATI",
    sub: "Anorexia nervosa, bulimia, binge eating; top allergens and anaphylaxis; phenylketonuria",
    connect: ["Malnutrition", "Refeeding", "Children"],
    summary: "Three lifespan topics ATI likes: eating disorders (watch electrolytes and the heart, and refeed slowly), food allergies (read every label, carry epinephrine), and PKU (a lifelong low-phenylalanine diet that avoids aspartame and high-protein foods).",
    chain: {
      why: ["Anorexia: starvation slows the heart and drains electrolytes", "Bulimia: vomiting loses potassium, chloride, and stomach acid", "Allergy: an immune reaction to a food protein, every time", "PKU: the body can't break down phenylalanine, which builds up and damages the brain"],
      assess: ["Anorexia: very low weight, bradycardia, hypotension, hypothermia, lanugo, amenorrhea, low K⁺", "Bulimia: often normal weight; dental erosion, swollen parotid glands, calluses on knuckles (Russell's sign), low K⁺", "Allergy: hives, lip or tongue swelling, wheezing, hypotension", "PKU: newborn screen after 24–48 hours of protein feeding; musty odor, irritability, intellectual disability if untreated"],
      act: ["Eating disorders: supervised meals, observe 1–2 hours after meals (and bathroom use), weigh at the same time in a gown with back to the scale, slow refeeding with electrolyte checks", "Allergy: avoid the food completely; epinephrine auto-injector first for anaphylaxis, then call 911", "PKU: special low-phenylalanine formula; limit meat, fish, eggs, dairy, nuts, and legumes; no aspartame"],
      teach: ["Eating disorders: weight goal is gradual (about 1–3 lb a week); focus on behaviors, not just numbers", "Allergy: read labels every time (recipes change); tell schools and restaurants", "PKU: the diet is lifelong, and strict control must start before pregnancy"]
    },
    table: {
      cols: ["", "Anorexia nervosa", "Bulimia nervosa"],
      rows: [
        ["Weight", "Very low", "Usually normal"],
        ["Key findings", "Bradycardia, hypotension, hypothermia, lanugo, amenorrhea, dry skin", "Dental erosion, parotid swelling, Russell's sign, esophageal tears"],
        ["Labs", "Low K⁺, low glucose, anemia", "Low K⁺ and chloride, metabolic alkalosis"],
        ["Biggest danger", "Dysrhythmia and refeeding syndrome", "Hypokalemia → dysrhythmia"],
        ["Meals", "Supervised; small, frequent; calories increased slowly", "Supervised; no bathroom for 1–2 hours after meals"]
      ]
    },
    tableTitle: "Anorexia vs. bulimia",
    facts: [
      "Top 9 allergens: milk, egg, peanut, tree nuts, fish, shellfish, wheat, soy, sesame.",
      "Anaphylaxis: epinephrine first, then 911. Antihistamines don't fix airway swelling.",
      "PKU: avoid aspartame (diet sodas, sugar-free gum) and high-protein foods.",
      "Anorexia refeeding: watch K⁺, phosphorus, and magnesium in the first days."
    ],
    qa: [
      ["Bulimia client finishes lunch and asks to use the bathroom. Response?", "Stay with the client or delay bathroom use for 1–2 hours after meals."],
      ["Child with PKU wants a diet soda. Teaching?", "Avoid it: aspartame contains phenylalanine."],
      ["Child with peanut allergy has lip swelling and wheezing at school. First action?", "Give the epinephrine auto-injector, then call 911."]
    ]
  }
  ];
  T.forEach(function (t) { W.DISORDERS.push(t); });

  /* ---------- Plain-language versions ---------- */
  if (W.PLAIN) {
    W.PLAIN.culture = { text: "People eat according to their faith, family, and budget. Some religions forbid pork, beef, alcohol, or coffee, or mixing meat with milk, and many have fasting days. Before you plan anyone's diet, ask what they eat and avoid, and make sure they can actually afford and get the food.", like: "A diet plan is like a shoe: it only helps if it fits the person wearing it." };
    W.PLAIN.supplements = { text: "Pills can fill gaps when food isn't enough, like folic acid in pregnancy or B12 for vegans. But more isn't better: vitamins A and D and iron can build up to toxic levels, and some supplements block medicines or each other. Iron likes vitamin C and hates milk; calcium needs to be spaced away from thyroid pills and some antibiotics.", like: "Supplements are like patching a tire: great for a hole, but adding patches to a good tire just causes problems." };
    W.PLAIN.liver = { text: "The liver is the body's warehouse and filter. When it's scarred, it can't store fuel or make the protein that keeps fluid in the blood vessels, so fluid leaks into the belly. It can't clear ammonia, so the brain gets foggy. The diet gives enough food, cuts salt for the fluid, uses lactulose to flush ammonia out, and never includes alcohol.", like: "A failing liver is like a broken warehouse and garbage service at once: supplies run short and trash piles up." };
    W.PLAIN.dmplus = { text: "When someone with diabetes is sick, their sugar usually goes up, so they keep taking insulin and check more often. Exercise pulls sugar into the muscles, so they check first and carry quick sugar. In pregnancy, hormones fight insulin, so meals and snacks are spread out, with a snack at bedtime.", like: "Being sick is like driving uphill (you still need gas: insulin). Exercise is downhill (ease off and keep the brakes handy: snacks)." };
    W.PLAIN.peds = { text: "Eating disorders can stop the heart because of low potassium, so meals are watched and food is added back slowly. Food allergies are the immune system attacking a food, so the food is avoided completely and epinephrine is carried. Children with PKU can't break down part of protein, so they eat a special low-protein diet and avoid aspartame for life.", like: "PKU is like a factory missing one machine: the raw material piles up and jams everything, so you send in less of it." };
  }

  /* ---------- Flashcards (appended) ---------- */
  [
    ["basics", "Kosher rules to remember", "No pork or shellfish; fish must have fins and scales; never meat with dairy at the same meal. Passover: no leavened bread."],
    ["basics", "Halal rules and Ramadan", "No pork, no alcohol, halal-slaughtered meat. Ramadan: no food or drink sunrise to sunset; adjust diabetes meds with the provider."],
    ["basics", "Hindu and Buddhist diets", "Hindu: no beef; many vegetarian. Buddhist: often lacto-ovo vegetarian."],
    ["basics", "Seventh-day Adventist vs. Latter-day Saints", "Both: no alcohol, coffee, or tea. Adventists: also no pork or shellfish; lacto-ovo vegetarian encouraged. Latter-day Saints: monthly 24-hour fast."],
    ["basics", "Catholic food practices", "No meat on Ash Wednesday and Fridays in Lent; 1-hour fast before Communion."],
    ["basics", "WIC vs. SNAP vs. Meals on Wheels", "WIC: pregnant, postpartum, breastfeeding, children <5 at nutrition risk. SNAP: low-income households. Meals on Wheels / congregate meals: older adults."],
    ["basics", "How to take an iron supplement", "Empty stomach if tolerated, with vitamin C (orange juice); not with milk, tea, coffee, antacids. Liquid through a straw. Expect dark stools and constipation."],
    ["basics", "How to take calcium", "≤500–600 mg at a time. Carbonate with food; citrate any time. Separate from iron, levothyroxine, tetracyclines, fluoroquinolones. Pair with vitamin D."],
    ["basics", "Vitamin A excess", "Teratogenic (birth defects), liver damage. No vitamin A supplements with isotretinoin."],
    ["basics", "B6 and isoniazid", "INH depletes B6 → peripheral neuropathy. Pyridoxine is given with INH."],
    ["basics", "Drugs that lower B12", "Metformin and PPIs (and loss of intrinsic factor)."],
    ["basics", "Salt substitutes", "Potassium chloride: avoid with CKD, ACE inhibitors, ARBs, potassium-sparing diuretics."],
    ["basics", "Herbal bleeding risk", "Ginkgo, garlic, ginger, vitamin E (and fish oil) increase bleeding with warfarin or aspirin."],
    ["basics", "St. John's wort", "Speeds drug metabolism (lowers oral contraceptives, warfarin, cyclosporine) and causes serotonin syndrome with SSRIs."],
    ["gi", "Cirrhosis diet", "High calorie, adequate to high protein, small frequent meals + late-evening snack, multivitamin, NO alcohol."],
    ["gi", "Ascites diet", "Sodium about 2,000 mg/day; fluid limit only if hyponatremic; daily weight and abdominal girth."],
    ["gi", "Lactulose goal in hepatic encephalopathy", "2–3 soft stools a day; lowers ammonia. Watch for dehydration and low K⁺."],
    ["gi", "Esophageal varices and food", "Soft, nonirritating foods; avoid coarse or hard foods (chips, nuts, raw vegetables) and spicy food."],
    ["gi", "Alcohol use disorder: which vitamin first?", "Thiamin, before glucose, to prevent Wernicke encephalopathy. Also folate and magnesium."],
    ["gi", "Hepatitis meal timing", "Biggest meal at breakfast (appetite fades later in the day); small, frequent, high-calorie meals."],
    ["life", "Diabetes sick-day rules", "Keep taking insulin; glucose every 3–4 hr; ketones if >240; ~15 g carb/hr as liquids if not eating; fluids hourly; call for persistent >240, ketones, vomiting."],
    ["life", "Exercise and diabetes", "Check glucose first; <100 → 15 g carb snack; very high with ketones → don't exercise (type 1); carry fast carbs; lows can occur up to 24 hr later."],
    ["life", "Gestational diabetes", "Screen 24–28 weeks. 3 meals + 2–3 snacks incl. bedtime snack. Insulin if diet fails. Risks: macrosomia, newborn hypoglycemia. Higher later type 2 risk."],
    ["life", "A1C goal", "Most adults with diabetes: <7% (normal less than 5.7%). Reflects about 3 months."],
    ["life", "Alcohol and diabetes", "Only with food: alcohol blocks the liver's glucose release → hypoglycemia."],
    ["life", "Anorexia nervosa findings", "Very low weight, bradycardia, hypotension, hypothermia, lanugo, amenorrhea, low K⁺. Refeed slowly."],
    ["life", "Bulimia nervosa findings", "Normal weight, dental erosion, parotid swelling, Russell's sign, low K⁺, metabolic alkalosis. Supervise 1–2 hr after meals."],
    ["life", "Top 9 food allergens", "Milk, egg, peanut, tree nuts, fish, shellfish, wheat, soy, sesame."],
    ["life", "Anaphylaxis first action", "Epinephrine auto-injector (thigh), then call 911."],
    ["life", "PKU diet", "Lifelong low-phenylalanine diet + special formula; limit meat, fish, eggs, dairy, nuts, legumes; no aspartame. Strict control before pregnancy."]
  ].forEach(function (c) { W.FLASHCARDS.push(c); });
})();
