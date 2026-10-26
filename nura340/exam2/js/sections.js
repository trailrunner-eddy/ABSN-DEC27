/* Section introductions: the structure diagram from each system's structure & function
   lecture, the key structure facts, and a short summary that ties the section together. */
window.SECTIONS = {
  found: {
    diagram: "fluid-d",
    lead: "Not tested by itself, but every disorder in this unit is explained with these three ideas.",
    summary: [
      "Almost every question in this unit comes back to three questions. Where is the fluid going? What is happening to the acid-base balance? Is inflammation helping or hurting? Fluid is lost (fever, bleeding), held on to (failing heart or kidneys, RAAS and ADH), or shifted out of the vessels (low albumin, high back-pressure, leaky inflamed capillaries). The lungs adjust CO₂ in minutes and the kidneys adjust bicarbonate over days, so a lung disease shows up as a respiratory acid-base problem and a kidney or perfusion problem as a metabolic one.",
      "Inflammation is the body's alarm. Vasodilation and leaky capillaries bring in white cells, but they also cause the swelling, exudate, and pain you see in pneumonia, glomerulonephritis, pericarditis, and UTIs. When it spreads through the body it causes fever, high WBCs, and in the worst case sepsis. When you meet any disorder, ask what it does to fluid, to pH, and to inflammation, and you can predict most of its cues."
    ],
    structure: [
      "Capillary push (hydrostatic) vs. pull (oncotic, from albumin) decides where fluid sits.",
      "Lungs: CO₂ (fast). Kidneys: HCO₃⁻ and H⁺ (slow).",
      "Normals: pH 7.35–7.45 · PaCO₂ 35–45 · HCO₃⁻ 22–26 · PaO₂ 75–100.",
      "Inflammation: redness, heat, swelling, pain, loss of function, then fever and ↑WBC/CRP when systemic."
    ]
  },
  resp: {
    diagram: "lungs",
    lead: "Mod 3 · Structure & Function of the Respiratory System, Upper and Lower Respiratory Diseases.",
    summary: [
      "The respiratory system has two jobs: ventilation (moving air in and out) and oxygenation (getting oxygen across the alveolar wall into the blood). The upper tract (nose, sinuses, pharynx, larynx) filters and warms air and is the first line of defense. Most upper infections are viral and self-limiting, and the danger is swelling that blocks drainage. The lower tract (trachea to alveoli) is where gas exchange happens. That's where pneumonia floods the air sacs (a shunt), TB hides in walled-off granulomas, asthma squeezes airways reversibly, and COPD destroys them permanently.",
      "Everything that breaks the pleural seal (pneumothorax, hemothorax) collapses the lung, and a tension pneumothorax is always the priority client. The common thread is the ABG: hypoxemia and fast breathing first cause respiratory alkalosis. When the client tires, or air is trapped (COPD), CO₂ climbs and you get respiratory acidosis. A rising CO₂ in a struggling client is the alarm."
    ],
    structure: [
      "Upper tract: nasal cavity, sinuses, pharynx, larynx. Lower tract: trachea, bronchi, bronchioles, alveoli.",
      "Mucociliary escalator + cough clear the airways; alveolar macrophages clean the air sacs.",
      "Visceral and parietal pleura with negative pressure (about −10 cm H₂O) keep the lungs open.",
      "Breathing drive is normally CO₂ (central chemoreceptors); low O₂ (peripheral) is the backup.",
      "Shunt = perfusion without ventilation (pneumonia). Dead space = ventilation without perfusion (PE)."
    ]
  },
  card1: {
    diagram: "vessels",
    lead: "Mod 5 · Structure & Function of the Cardiovascular System, Arterial and Venous Diseases.",
    summary: [
      "Perfusion means getting oxygenated blood to the tissues, and flow = pressure ÷ resistance. Arteries are thick, muscular, high-pressure pipes. Their lining (endothelium) and muscle (media) set blood pressure through MAP = CO × SVR. Hypertension is a long-term rise in either side of that equation, and it damages the endothelium. That damage is the first step of atherosclerosis: an inflammatory plaque that narrows arteries slowly (PAD, stable angina) or ruptures and clots suddenly (acute limb ischemia, MI). Weak arterial walls bulge into aneurysms, which are silent until they tear or rupture.",
      "Veins are the opposite: thin, low-pressure, and holding most of the blood, with one-way valves and the calf muscle pump moving blood uphill. When valves fail, blood pools (CVI). When blood sits still, it clots (DVT), and a clot that travels to the lungs is a PE. To tell them apart: arterial problems are pale, cool, painful, and worse with elevation; venous problems are swollen, warm, brown-stained, and better with elevation."
    ],
    structure: [
      "Artery wall: intima (endothelium), media (smooth muscle), adventitia.",
      "MAP = DBP + ⅓(SBP − DBP) and MAP = CO × SVR. Goal MAP at least 65.",
      "Baroreceptors, RAAS, and natriuretic peptides keep BP steady.",
      "Veins hold 60–70% of blood volume; valves + calf muscle pump return it.",
      "Normal perfusion: warm skin, cap refill ≤3 s, strong pulses, urine ≥0.5 mL/kg/hr."
    ]
  },
  card2: {
    diagram: "heart",
    lead: "Mod 5 & 6 · Heart structures, Cardiac Valves & Ischemic Heart Disease, Heart Failure & Arrhythmias.",
    summary: [
      "The heart is a two-sided pump with one-way valves, its own blood supply, and its own wiring. Each disorder breaks one of those parts. Valve disease is either a door that won't open (stenosis → pressure overload) or one that won't close (regurgitation → volume overload). Coronary artery disease starves the muscle: reversible ischemia is angina, and more than about 20 minutes of it is an MI with dead muscle and rising troponin. The -itis disorders map to the layers: pericarditis (sac), myocarditis (muscle), and endocarditis (lining and valves).",
      "When the pump fails from any of these, blood backs up behind it. Left-sided failure floods the lungs, right-sided failure congests the body, and the body's RAAS and SNS response makes the overload worse. Dysrhythmias matter only for what they do to cardiac output. Too slow or too fast drops perfusion, and AFib also lets clots form that can cause a stroke. For every cardiac client, judge by perfusion: BP, mentation, skin, and urine output."
    ],
    structure: [
      "Layers: pericardium, epicardium, myocardium, endocardium.",
      "Valves: tricuspid & mitral (AV, S1); pulmonic & aortic (semilunar, S2).",
      "Coronary arteries: LAD, circumflex, RCA. They fill during DIASTOLE.",
      "Conduction: SA node → AV node → bundle of His → bundle branches → Purkinje fibers.",
      "CO = HR × SV; SV depends on preload, contractility, and afterload."
    ]
  },
  kidney: {
    diagram: "nephron",
    lead: "Mod 7 · Structure & Function of the Renal System, Diseases of the Renal System.",
    summary: [
      "Each kidney has about a million nephrons. Each one filters blood at the glomerulus, then reabsorbs what the body needs and secretes what it doesn't in the tubules. Through that work, the kidneys control fluid, sodium, potassium, acid-base, and blood pressure (RAAS), and they make hormones (EPO, active vitamin D). Kidney disorders are best sorted by where they break the nephron. AKI is sudden: not enough flow in (prerenal), damaged tissue (intrarenal), or urine that can't get out (postrenal). CKD is the slow loss of nephrons, mostly from diabetes and HTN, until every kidney job starts to fail.",
      "The two glomerular disorders are opposite kinds of broken filter. Glomerulonephritis is an inflamed filter: blood in the urine, HTN, and fluid retention, classically after strep. Nephrotic syndrome is a leaky filter: heavy protein loss, low albumin, massive edema, and high cholesterol. Whatever the cause, failing kidneys leave behind the same dangerous trio: fluid overload, hyperkalemia, and metabolic acidosis."
    ],
    structure: [
      "Nephron: glomerulus + Bowman's capsule → proximal tubule → loop of Henle → distal tubule → collecting duct.",
      "Three processes: filtration, reabsorption, secretion. GFR = how much is filtered per minute.",
      "ADH: saves water at the collecting duct. Aldosterone (RAAS): saves Na⁺ and water, dumps K⁺.",
      "Kidneys excrete H⁺ and regenerate HCO₃⁻ (acid-base).",
      "Hormones: EPO (red blood cells), calcitriol (active vitamin D, calcium)."
    ]
  },
  gu: {
    diagram: "urinary",
    lead: "Mod 7 · Diseases of the Urinary Tract, Diseases of the Male Reproductive System.",
    summary: [
      "Urine travels from the kidney, down the ureters by peristalsis, to the bladder, and out through the urethra, which passes through the prostate in people who have one. Most problems here are about something going the wrong way or getting stuck. Bacteria climbing up the short urethra infect the bladder (cystitis: burning, frequency, urgency, no high fever). If they keep climbing to the kidney (pyelonephritis), the infection becomes systemic, with fever, chills, flank pain, and CVA tenderness, and can lead to sepsis.",
      "Concentrated urine forms stones that get stuck in the ureter, causing waves of flank-to-groin pain and hematuria. An enlarging prostate (BPH) pinches the urethra, causing a weak stream, retention, and leftover urine that breeds infection. Prostatitis is inflammation or infection rather than growth. The shared danger is obstruction: anything that stops urine from draining backs it up into the kidney (postrenal AKI), and obstruction plus infection is an emergency."
    ],
    structure: [
      "Path: kidney → ureter → bladder → urethra.",
      "Urethra about 4 cm with a vagina vs. about 20 cm with a penis (UTI risk).",
      "Prostate sits just below the bladder and wraps the urethra.",
      "Lower UTI = bladder/urethra; upper UTI = kidney (pyelonephritis).",
      "Obstruction anywhere → stasis (infection) and back pressure (hydronephrosis, AKI)."
    ]
  }
};
