/* Original tap-to-learn diagrams (drawn for this site, safe to publish).
   Each spot: x/y in the diagram's viewBox, what it is, what goes wrong there, and linked topics. */
window.DIAGRAMS = [
  {
    id: "lungs", sys: "resp", title: "Lungs & airways", view: "0 0 400 360",
    svg:
      '<path class="dg-tissue" d="M120 120 C70 130 50 210 55 280 C58 310 90 318 130 305 L178 290 L180 140 C170 122 145 115 120 120Z"/>' +
      '<path class="dg-tissue" d="M280 120 C330 130 350 210 345 280 C342 310 310 318 270 305 L222 290 L220 140 C230 122 255 115 280 120Z"/>' +
      '<path class="dg-pleura" d="M112 110 C58 122 38 212 44 284 C48 322 92 330 136 316 L188 298 L190 136"/><path class="dg-pleura" d="M288 110 C342 122 362 212 356 284 C352 322 308 330 264 316 L212 298 L210 136"/>' +
      '<rect class="dg-airway" x="188" y="20" width="24" height="110" rx="8"/>' +
      '<path class="dg-airway-l" d="M200 128 L160 170 L130 200 M160 170 L150 230 M200 128 L240 170 L272 205 M240 170 L250 235"/>' +
      '<path class="dg-airway-s" d="M130 200 L112 222 M130 200 L120 250 M150 230 L135 262 M272 205 L292 228 M272 205 L282 252 M250 235 L262 268"/>' +
      '<path class="dg-muscle" d="M40 318 C120 280 280 280 360 318" />' +
      '<circle class="dg-alv" cx="112" cy="222" r="9"/><circle class="dg-alv" cx="120" cy="252" r="8"/><circle class="dg-alv" cx="135" cy="264" r="8"/><circle class="dg-alv" cx="292" cy="228" r="9"/><circle class="dg-alv" cx="282" cy="254" r="8"/><circle class="dg-alv" cx="262" cy="270" r="8"/>',
    spots: [
      { x: 200, y: 52, label: "Trachea", text: "The windpipe. Rings of cartilage hold it open. In a tension pneumothorax it gets pushed toward the side away from the collapsed lung.", topics: ["trauma"] },
      { x: 160, y: 170, label: "Bronchi", text: "The big branches into each lung, lined with mucus and tiny hairs (the mucociliary escalator). Chronic bronchitis inflames them and floods them with mucus.", topics: ["copd", "uri"] },
      { x: 130, y: 200, label: "Bronchioles", text: "Small airways with smooth muscle and no cartilage. In asthma they squeeze tight, swell, and plug with mucus, which causes wheezing.", topics: ["asthma"] },
      { x: 282, y: 254, label: "Alveoli", text: "Tiny air sacs where oxygen enters the blood. Pneumonia fills them with fluid (a shunt). Emphysema destroys their walls, so air gets trapped.", topics: ["pneumonia", "copd"] },
      { x: 50, y: 230, label: "Pleura", text: "Two thin, moist layers with a vacuum between them that holds the lung against the chest wall. Air or blood in that space collapses the lung.", topics: ["trauma"] },
      { x: 200, y: 290, label: "Diaphragm", text: "The main breathing muscle. It flattens to pull air in. In COPD it gets flattened by trapped air, so breathing takes more work.", topics: ["copd"] }
    ]
  },
  {
    id: "heart", sys: "card2", title: "The heart", view: "0 0 400 380",
    svg:
      '<path class="dg-sac" d="M200 60 C110 60 60 130 70 220 C80 300 150 350 200 360 C250 350 320 300 330 220 C340 130 290 60 200 60Z"/>' +
      '<path class="dg-vein" d="M108 30 L108 120"/><path class="dg-vein" d="M108 250 L108 330"/>' +
      '<path class="dg-artery" d="M210 120 C210 60 240 30 290 40 L330 50"/>' +
      '<path class="dg-pa" d="M175 125 C170 80 150 60 120 55"/>' +
      '<rect class="dg-ra" x="92" y="110" width="98" height="90" rx="30"/><rect class="dg-la" x="210" y="110" width="98" height="90" rx="30"/>' +
      '<path class="dg-rv" d="M92 210 L190 210 L190 300 C160 320 120 300 92 260Z"/><path class="dg-lv" d="M210 210 L308 210 L308 260 C290 310 240 335 210 315Z"/>' +
      '<rect class="dg-valve" x="118" y="200" width="46" height="9" rx="3"/><rect class="dg-valve" x="236" y="200" width="46" height="9" rx="3"/>' +
      '<rect class="dg-valve" x="160" y="118" width="24" height="8" rx="3" transform="rotate(-20 172 122)"/><rect class="dg-valve" x="206" y="112" width="24" height="8" rx="3"/>' +
      '<path class="dg-coronary" d="M232 128 C260 150 280 220 262 300"/><path class="dg-coronary" d="M196 130 C150 150 120 200 120 280"/>' +
      '<text class="dg-txt" x="141" y="160">RA</text><text class="dg-txt" x="259" y="160">LA</text><text class="dg-txt" x="141" y="262">RV</text><text class="dg-txt" x="259" y="262">LV</text>',
    spots: [
      { x: 108, y: 70, label: "Superior vena cava", text: "Brings blood back from the body to the right atrium. In right-sided heart failure, blood backs up here, and you see it as JVD.", topics: ["hf"] },
      { x: 141, y: 135, label: "Right atrium & SA node", text: "The SA node, the natural pacemaker, sits in the right atrium wall. In AFib the atria quiver instead of squeezing, so blood pools and can clot.", topics: ["rhythm"] },
      { x: 141, y: 205, label: "Tricuspid valve", text: "The one-way door between the right atrium and right ventricle. It closes as part of S1.", topics: ["valves"] },
      { x: 150, y: 285, label: "Right ventricle", text: "Pumps blood to the lungs. If it fails, blood backs up into the body: JVD, swollen legs, enlarged liver. A big PE can suddenly overload it.", topics: ["hf", "venous"] },
      { x: 160, y: 90, label: "Pulmonary artery", text: "Carries low-oxygen blood to the lungs. A pulmonary embolism lodges in its branches.", topics: ["venous"] },
      { x: 259, y: 135, label: "Left atrium", text: "Receives oxygen-rich blood from the lungs. In left-sided heart failure, pressure backs up from here into the lungs, causing crackles and dyspnea.", topics: ["hf"] },
      { x: 259, y: 205, label: "Mitral valve", text: "Between the left atrium and left ventricle. Stenosis makes it hard to open, and regurgitation lets blood leak backward. Both raise pressure in the lungs.", topics: ["valves"] },
      { x: 218, y: 116, label: "Aortic valve", text: "The door from the left ventricle to the aorta. Aortic stenosis forces the LV to push harder (pressure overload), so the wall thickens.", topics: ["valves"] },
      { x: 255, y: 290, label: "Left ventricle", text: "The main pump to the body. Systolic HF means it squeezes weakly (EF 40% or less). Diastolic HF means it's too stiff to fill.", topics: ["hf"] },
      { x: 279, y: 248, label: "Coronary arteries", text: "Feed the heart muscle itself, and fill during diastole. Plaque here causes angina, and a full blockage for more than about 20 minutes causes an MI.", topics: ["acs", "athero"] },
      { x: 330, y: 220, label: "Pericardium", text: "The sac around the heart, with a little fluid. When inflamed (pericarditis), it causes sharp pain that's better leaning forward and a friction rub.", topics: ["itis"] },
      { x: 310, y: 46, label: "Aorta", text: "The body's main artery. An aneurysm is a weak, bulging spot in its wall. Sudden tearing pain with low BP is an emergency.", topics: ["aneurysm"] }
    ]
  },
  {
    id: "artery", sys: "card1", title: "Inside an artery", view: "0 0 400 300",
    svg:
      '<circle class="dg-adv" cx="200" cy="150" r="130"/><circle class="dg-media" cx="200" cy="150" r="108"/><circle class="dg-intima" cx="200" cy="150" r="88"/>' +
      '<circle class="dg-lumen" cx="200" cy="150" r="82"/>' +
      '<path class="dg-plaque" d="M130 100 C150 140 190 160 250 150 C270 145 282 120 278 104 C250 80 160 70 130 100Z"/>' +
      '<path class="dg-cap" d="M136 104 C155 136 192 152 248 144 C266 140 276 122 274 108"/>' +
      '<path class="dg-clot" d="M210 150 C230 165 255 162 262 148 C240 152 225 150 210 150Z"/>' +
      '<circle class="dg-rbc" cx="190" cy="195" r="9"/><circle class="dg-rbc" cx="225" cy="205" r="9"/><circle class="dg-rbc" cx="160" cy="180" r="9"/>',
    spots: [
      { x: 200, y: 200, label: "Lumen", text: "The open channel blood flows through. Flow drops sharply as it narrows. Stable angina usually means a 70% or greater narrowing in a coronary artery.", topics: ["acs", "pad"] },
      { x: 120, y: 230, label: "Tunica intima (endothelium)", text: "The thin inner lining. Damage here from high BP, smoking, high sugar, or LDL is the first step of atherosclerosis.", topics: ["athero", "htn"] },
      { x: 300, y: 200, label: "Tunica media", text: "The smooth muscle layer that tightens and relaxes to set resistance (and BP). When it weakens, the wall can bulge into an aneurysm.", topics: ["htn", "aneurysm"] },
      { x: 330, y: 80, label: "Tunica adventitia", text: "The tough outer layer that anchors the vessel.", topics: ["aneurysm"] },
      { x: 175, y: 105, label: "Plaque (lipid core)", text: "LDL slips into the wall, gets oxidized, and macrophages eat it and become foam cells. The core grows into a plaque.", topics: ["athero"] },
      { x: 270, y: 112, label: "Fibrous cap", text: "A cap over the plaque. A thin cap can rupture, and that's what turns stable disease into unstable angina or an MI.", topics: ["athero", "acs"] },
      { x: 240, y: 156, label: "Clot (thrombus)", text: "Forms on a ruptured plaque. It can partly block (unstable angina), fully block (MI or acute limb ischemia), or break off as an embolus.", topics: ["acs", "pad"] }
    ]
  },
  {
    id: "nephron", sys: "kidney", title: "The nephron", view: "0 0 420 340",
    svg:
      '<path class="dg-artery" d="M20 70 L80 70"/><path class="dg-artery-s" d="M150 95 L210 60 L260 60"/>' +
      '<circle class="dg-capsule" cx="110" cy="80" r="42"/><circle class="dg-glom" cx="110" cy="80" r="26"/>' +
      '<path class="dg-tube" d="M145 105 C190 120 150 150 195 160 C240 170 200 200 240 205 L240 300 C240 325 280 325 280 300 L280 190 C280 160 330 175 320 140 C312 115 350 110 360 120 L360 320"/>' +
      '<path class="dg-duct" d="M360 40 L360 330"/>',
    spots: [
      { x: 45, y: 70, label: "Afferent arteriole", text: "Brings blood into the glomerulus. Low blood flow here from bleeding, dehydration, or shock is prerenal AKI.", topics: ["aki"] },
      { x: 110, y: 80, label: "Glomerulus", text: "The filter: a tuft of capillaries. Inflamed means glomerulonephritis (blood in urine, HTN, edema). Leaky means nephrotic syndrome (lots of protein in urine).", topics: ["gn", "nephrotic"] },
      { x: 78, y: 48, label: "Bowman's capsule", text: "The cup that catches the filtered fluid. GFR is how much fluid gets filtered into it each minute.", topics: ["ckd", "aki"] },
      { x: 235, y: 60, label: "Efferent arteriole", text: "Carries blood out of the glomerulus. Squeezing it helps keep filtration pressure up when BP falls.", topics: ["aki"] },
      { x: 180, y: 145, label: "Proximal tubule", text: "Takes back most of the water, sodium, glucose, and amino acids. It's easily damaged by low oxygen or toxins (intrarenal AKI).", topics: ["aki"] },
      { x: 260, y: 315, label: "Loop of Henle", text: "Sets up the salty gradient that lets the kidney concentrate urine and save water.", topics: ["fluid"] },
      { x: 320, y: 140, label: "Distal tubule", text: "Fine-tunes sodium, potassium, and acid. Aldosterone (from RAAS) makes it hold sodium and water and dump potassium.", topics: ["fluid", "htn"] },
      { x: 360, y: 260, label: "Collecting duct", text: "ADH opens water channels here so water goes back into the blood and urine gets concentrated. Very concentrated urine helps kidney stones form.", topics: ["fluid", "stones"] }
    ]
  },
  {
    id: "urinary", sys: "gu", title: "Urinary tract & prostate", view: "0 0 360 420",
    svg:
      '<path class="dg-artery" d="M180 20 L180 230"/>' +
      '<path class="dg-kidney" d="M70 60 C30 70 30 170 70 180 C95 186 105 150 95 120 C105 90 95 54 70 60Z"/><path class="dg-kidney" d="M290 60 C330 70 330 170 290 180 C265 186 255 150 265 120 C255 90 265 54 290 60Z"/>' +
      '<path class="dg-artery-s" d="M180 115 L98 118 M180 115 L262 118"/>' +
      '<path class="dg-ureter" d="M92 140 C110 200 130 250 150 292 M268 140 C250 200 230 250 210 292"/>' +
      '<path class="dg-bladder" d="M130 280 C130 250 230 250 230 280 C240 330 210 350 180 350 C150 350 120 330 130 280Z"/>' +
      '<ellipse class="dg-prostate" cx="180" cy="362" rx="26" ry="14"/>' +
      '<path class="dg-ureter" d="M180 350 L180 410"/>',
    spots: [
      { x: 60, y: 120, label: "Kidney", text: "Filters blood and makes urine. An infection that climbs up here is pyelonephritis: fever, chills, flank pain, CVA tenderness.", topics: ["pyelo", "aki", "ckd"] },
      { x: 140, y: 117, label: "Renal artery", text: "Carries about 20–25% of cardiac output to the kidneys. Low flow causes prerenal AKI and turns on RAAS, which raises BP.", topics: ["aki", "htn"] },
      { x: 120, y: 230, label: "Ureter", text: "A muscular tube that moves urine by peristalsis. A stone stuck here causes waves of severe flank-to-groin pain.", topics: ["stones"] },
      { x: 180, y: 300, label: "Bladder", text: "Stores urine. Infection here is cystitis: burning, frequency, urgency, and pain above the pubic bone, usually without high fever.", topics: ["cystitis"] },
      { x: 180, y: 362, label: "Prostate", text: "Wraps around the urethra just below the bladder. If it enlarges (BPH), it pinches urine flow. If it's inflamed (prostatitis), it causes pain and fever.", topics: ["bph", "prostatitis"] },
      { x: 180, y: 398, label: "Urethra", text: "The exit tube. A short urethra close to the anus makes it easier for bacteria to climb up and cause a UTI.", topics: ["cystitis"] }
    ]
  }
];
