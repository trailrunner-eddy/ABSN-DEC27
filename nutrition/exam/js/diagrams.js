/* Original tap-to-learn diagrams for the Nutrition guide (drawn for this site).
   Each spot: x/y in the diagram's viewBox, what it is, why it matters, and linked topics. */
(function () {
  /* A simple standing body, front view, centered at x=150 in a 300 × 440 box */
  var LIMBS = "M95 102 L72 172 L58 250 M205 102 L228 172 L242 250 M124 232 L118 330 L112 418 M176 232 L182 330 L188 418";
  var BODY =
    '<path class="dg-bodyline" d="' + LIMBS + '"/><path class="dg-bodyfill" d="' + LIMBS + '"/>' +
    '<ellipse class="dg-body" cx="106" cy="424" rx="16" ry="8"/><ellipse class="dg-body" cx="194" cy="424" rx="16" ry="8"/>' +
    '<rect class="dg-body" x="137" y="66" width="26" height="30" rx="6"/>' +
    '<path class="dg-body" d="M90 98 Q150 84 210 98 L216 238 Q150 252 84 238Z"/>' +
    '<circle class="dg-body" cx="150" cy="42" r="28"/>';

  var D = [
  { id: "plate", topic: "guidelines", sys: "basics", title: "MyPlate: building a healthy plate", view: "0 0 420 340",
    svg:
      '<circle class="dg-plate" cx="180" cy="170" r="148"/>' +
      '<path class="dg-fruit" d="M180 170 L42 170 A138 138 0 0 1 162 33 Z"/>' +
      '<path class="dg-grain" d="M180 170 L162 33 A138 138 0 0 1 318 170 Z"/>' +
      '<path class="dg-prot" d="M180 170 L318 170 A138 138 0 0 1 198 307 Z"/>' +
      '<path class="dg-veg" d="M180 170 L198 307 A138 138 0 0 1 42 170 Z"/>' +
      '<circle class="dg-dairy" cx="370" cy="70" r="32"/>' +
      '<text class="dg-lbl big" x="112" y="128">Fruits</text><text class="dg-lbl big" x="250" y="118">Grains</text>' +
      '<text class="dg-lbl big" x="252" y="240">Protein</text><text class="dg-lbl big" x="112" y="232">Vegetables</text>' +
      '<text class="dg-lbl" x="370" y="74">Dairy</text>' +
      '<rect class="dg-limit" x="300" y="268" width="112" height="56" rx="10"/><text class="dg-lbl sm" x="356" y="290">Limit: sodium,</text><text class="dg-lbl sm" x="356" y="306">sugar, sat. fat</text>',
    spots: [
      { x: 92, y: 96, label: "Fruits", text: "With vegetables, half the plate. Whole fruit over juice. Citrus, strawberries, and peppers give vitamin C; bananas, oranges, and dried fruit give potassium.", topics: ["guidelines", "vitamins"] },
      { x: 92, y: 258, label: "Vegetables", text: "A bit more than a quarter of the plate. Dark greens give folate, vitamin K, calcium, and magnesium; orange and yellow produce give vitamin A. Keep vitamin K intake consistent on warfarin.", topics: ["guidelines", "vitamins", "anemia"] },
      { x: 262, y: 86, label: "Grains", text: "Make at least half your grains whole for fiber (AI 25 g F / 38 g M). Fortified grains supply folate and iron. Wheat, barley, and rye contain gluten (celiac).", topics: ["guidelines", "macros", "lower"] },
      { x: 268, y: 266, label: "Protein", text: "Lean meats, fish, poultry, eggs, beans, nuts, soy. Complete proteins come from animal foods and soy; combine plant proteins over the day. Oily fish twice a week for omega-3s.", topics: ["macros", "chd"] },
      { x: 370, y: 104, label: "Dairy", text: "Calcium and vitamin D for bones. Low-fat dairy is part of DASH. Whole milk for ages 1–2; low-fat after 2. Lactose intolerance: yogurt and aged cheese are tolerated better.", topics: ["guidelines", "htn", "upper"] },
      { x: 356, y: 250, label: "Limit", text: "Added sugars <10% of calories, saturated fat <10% (≤7% for heart health), sodium <2,300 mg/day, alcohol ≤2 drinks (men) / ≤1 (women).", topics: ["guidelines", "htn", "chd"] }
    ] },

  { id: "gitract", topic: "digest", sys: "gi", title: "The digestive tract: where things go wrong", view: "0 0 360 470",
    svg:
      '<path class="dg-gi-line" d="M180 30 L180 60"/>' +
      '<ellipse class="dg-gi-mouth" cx="180" cy="34" rx="34" ry="16"/>' +
      '<path class="dg-gi-eso" d="M180 50 L184 150"/>' +
      '<path class="dg-liver" d="M70 150 C90 120 190 118 200 140 C204 170 170 200 120 202 C88 204 66 186 70 150Z"/>' +
      '<ellipse class="dg-gb" cx="148" cy="206" rx="13" ry="10"/>' +
      '<path class="dg-stomach" d="M184 146 C240 132 282 160 276 204 C270 244 220 254 196 236 C214 226 236 216 232 196 C228 176 200 176 186 168Z"/>' +
      '<path class="dg-pancreas" d="M180 252 C210 244 250 244 288 236 C294 246 290 256 280 258 C246 264 210 266 182 266Z"/>' +
      '<path class="dg-colon" d="M96 410 L96 290 C96 276 104 270 118 270 L250 270 C264 270 272 278 272 292 L272 400 C272 420 248 430 220 420 L190 410 L190 450"/>' +
      '<path class="dg-si" d="M130 300 C160 290 230 290 240 306 C250 322 140 318 132 334 C126 350 240 340 244 356 C248 374 140 372 134 388 C130 400 170 404 196 400"/>' +
      '<text class="dg-lbl sm" x="320" y="200">Stomach</text><text class="dg-lbl sm" x="40" y="140">Liver</text>',
    spots: [
      { x: 180, y: 34, label: "Mouth (ingestion)", text: "Chewing and the start of swallowing. Poor dentition, stomatitis, taste change, and dysphagia all start here. Only feed clients who are awake with an intact gag and swallow.", topics: ["dysphagia", "barriers", "cancer"] },
      { x: 182, y: 120, label: "Esophagus & LES", text: "The lower esophageal sphincter keeps acid down. Fat, caffeine, chocolate, alcohol, nicotine, and mint relax it (GERD). Don't eat 3 hr before lying down.", topics: ["upper"] },
      { x: 250, y: 190, label: "Stomach", text: "Makes acid and intrinsic factor (needed for B12). Gastritis and PUD worsen with NSAIDs, H. pylori, alcohol. After gastrectomy: dumping syndrome and B12/iron loss.", topics: ["upper", "anemia"] },
      { x: 120, y: 165, label: "Liver", text: "Makes bile, stores glycogen and vitamins, removes nitrogen from amino acids, and makes albumin. Liver disease: protein usually increased, no alcohol; albumin and prealbumin fall.", topics: ["accessory", "labs", "digest"] },
      { x: 148, y: 222, label: "Gallbladder", text: "Stores bile, which emulsifies fat. Cholecystitis: RUQ pain to the right shoulder after fatty meals → low-fat diet.", topics: ["accessory", "digest"] },
      { x: 236, y: 256, label: "Pancreas", text: "Amylase (starch), lipase (fat), and insulin. Acute pancreatitis: NPO + NG suction. Cystic fibrosis: no enzymes → A, D, E, K deficiency.", topics: ["accessory", "resp", "dm"] },
      { x: 190, y: 330, label: "Small intestine", text: "Where most absorption happens. Celiac flattens the villi; Crohn's and resection cause malabsorption (B12, folate, fat). Ileostomy output is liquid: replace fluid and electrolytes.", topics: ["lower", "digest", "anemia"] },
      { x: 96, y: 330, label: "Large intestine", text: "Absorbs water and forms stool. Fiber and fluids prevent constipation and diverticulosis; acute diverticulitis starts with clear liquids.", topics: ["lower", "digest"] }
    ] },

  { id: "routes", topic: "enteral", sys: "cant", title: "Feeding routes: if the gut works, use it", view: "0 0 300 440",
    svg: BODY +
      '<path class="dg-stom" d="M150 150 C178 140 196 158 192 182 C188 204 164 210 150 198 C160 190 170 182 166 170 C162 162 154 162 150 160Z"/>' +
      '<path class="dg-tube" d="M156 40 C170 50 164 80 160 110 C156 140 164 160 176 178"/>' +
      '<path class="dg-tube nj" d="M144 40 C132 56 136 90 140 120 C144 160 128 196 150 214"/>' +
      '<circle class="dg-port" cx="186" cy="176" r="7"/>' +
      '<circle class="dg-port" cx="168" cy="216" r="6"/>' +
      '<path class="dg-cline" d="M118 110 L132 104 L146 120"/>' +
      '<path class="dg-pline" d="M222 170 L236 196"/>',
    spots: [
      { x: 150, y: 58, label: "Oral (modified diet)", text: "First choice whenever the client can swallow safely: clear → full → soft → regular, or IDDSI textures and thickened liquids for dysphagia.", topics: ["modified", "dysphagia"] },
      { x: 170, y: 92, label: "Nasogastric (NG) tube", text: "Short-term (<3–4 weeks). Confirm placement by X-ray before first use; mark at the nares and check every shift and before each feeding. Bolus feedings go to the stomach only.", topics: ["enteral"] },
      { x: 126, y: 150, label: "Nasoduodenal / nasojejunal", text: "Short-term, past the stomach: for aspiration risk or delayed gastric emptying. Continuous feeding only (no bolus); more dumping risk than gastric feeds.", topics: ["enteral"] },
      { x: 204, y: 170, label: "Gastrostomy (PEG / button)", text: "Long-term. Gastric feedings are better tolerated (less dumping). Buttons are comfortable but make residual checks harder. Care for the stoma site.", topics: ["enteral"] },
      { x: 168, y: 232, label: "Jejunostomy (J-tube)", text: "Long-term, below the stomach, for clients who can't tolerate gastric feeds or are at high aspiration risk. Continuous or cyclic, not bolus.", topics: ["enteral"] },
      { x: 112, y: 124, label: "Central line (TPN)", text: "TPN with dextrose >10% must go into a central vein. Strict asepsis, sterile dressing changes, tubing every 24 hr. Watch for pneumothorax after insertion, infection, and hyperglycemia.", topics: ["tpn"] },
      { x: 246, y: 200, label: "Peripheral IV (PPN)", text: "PPN: dextrose ≤10%, amino acids ≤5%, short-term (7–10 days), not complete nutrition.", topics: ["tpn"] }
    ] }
  ];

  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
