/* Content for the Patho Exam 2 interactive guide.
   Outline follows the "340 Exam 2 Study Guide"; details come from the Mod 3, 5, 6, 7
   lecture guides, transcripts, and slides. Anything tagged beyond:true is standard
   nursing content added to fill a gap the lectures did not cover. */

window.SYSTEMS = [
  { id: "found", name: "Foundations", short: "Foundations", icon: "⚖️", weight: "Applied in every question", note: "Fluid, electrolytes, acid-base, infection, inflammation, hypersensitivity. Not tested alone; shows up inside every system disorder." },
  { id: "resp", name: "Respiratory", short: "Resp", icon: "🫁", weight: "24–30% of questions · 20–30% of points", qmin: 12, qmax: 15 },
  { id: "card1", name: "Cardiac Part 1 · Vascular", short: "Cardiac 1", icon: "🩸", weight: "16–24% of questions · 12–20% of points", qmin: 8, qmax: 12 },
  { id: "card2", name: "Cardiac Part 2 · The Heart", short: "Cardiac 2", icon: "🫀", weight: "16–24% of questions · 12–20% of points", qmin: 8, qmax: 12 },
  { id: "kidney", name: "Kidney Disorders", short: "Kidney", icon: "🫘", weight: "12–20% of questions · 10–18% of points", qmin: 6, qmax: 10 },
  { id: "gu", name: "Urinary Tract & Reproductive", short: "GU & Repro", icon: "💧", weight: "12–20% of questions · 10–18% of points", qmin: 6, qmax: 10 }
];

window.EMPHASIS = [
  "Hypertension is “the one you need to know the absolute most” in the arterial lecture.",
  "Tension pneumothorax “will always be your priority patient.”",
  "Goal urine output is at least 0.5 mL/kg/hr, and it will be on this test.",
  "No EKG strips on this test, but know what each rhythm does to perfusion.",
  "For male reproductive, focus on the basics."
];

window.CRITICAL_THINKING = [
  ["For each condition, how does the pathophysiology support the expected presentation?", "List every s/s of a condition, ask “why?” for each one, then group the s/s by shared pathophysiology. Use the Chain on each disorder page."],
  ["How would you identify which disorder a client is experiencing?", "Write a short client blurb for each disorder. The Case Builder questions in Practice do this for you."],
  ["How would you differentiate between similar disorders?", "Build a Venn diagram or chart for look-alikes. Try the Sort It games and the Compare tables."],
  ["What is the worst-case scenario for each condition, and what findings would you watch for?", "Pick the top 3–5 emergencies per topic. See the Emergencies page."],
  ["How do you identify priority findings for one client, or a group of clients?", "Use ABCs, acute over chronic, unstable over stable. Practice in Who First?"],
  ["How do you handle a question when you have no clue?", "Find the system and mechanism, predict the cues, eliminate options that belong to a look-alike."],
  ["What test-taking strategies do you use well, and which could you use better?", "Check your weakest system on the Home dashboard and drill it."]
];

window.STRATEGY = [
  ["Find the system and the mechanism first", "Ask what is physically happening: blocked, leaking, inflamed, or not perfused."],
  ["Predict the cues before reading the options", "Most wrong options are true for a look-alike disorder."],
  ["Priority = ABCs, then acute over chronic, then unstable over stable", "A baseline finding (barrel chest, clubbing, COPD SpO₂ 90%) is rarely the priority."],
  ["Trend beats a single number", "A rising CO₂ in asthma or falling urine output in pyelonephritis is the change that signals danger."],
  ["When stuck, eliminate wrong layer, chamber, or location", "Pick the option that matches the mechanism."]
];

/* ---------- Disorders ---------- */
window.DISORDERS = [
/* ===== FOUNDATIONS ===== */
{
  id: "acidbase", sys: "found", name: "Acid-Base in this Unit",
  connect: ["Acid-Base"],
  summary: "Lungs control CO₂ (fast). Kidneys control HCO₃⁻ and H⁺ (slow, days). Normals: pH 7.35–7.45, PaCO₂ 35–45, PaO₂ 75–100, HCO₃⁻ ~22–26.",
  chain: {
    mechanism: ["Hypoventilation retains CO₂", "Hyperventilation blows off CO₂", "Kidneys can't excrete acid", "Poor perfusion → anaerobic metabolism"],
    change: ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Lactic (metabolic) acidosis"],
    cues: ["Drowsiness, confusion with rising CO₂", "Tachypnea, lightheadedness with low CO₂", "Fast, deep breathing (lungs compensating)"],
    worst: ["Hypercapnic respiratory failure", "Shock with lactic acidosis", "Hyperkalemia-driven dysrhythmias"]
  },
  facts: [
    "Pneumonia & asthma: early respiratory alkalosis → later respiratory acidosis (fatigue, trapped CO₂).",
    "COPD (chronic): compensated respiratory acidosis (high CO₂, high HCO₃⁻, near-normal pH).",
    "COPD exacerbation: acute-on-chronic respiratory acidosis (pH falls).",
    "Tension pneumo / hemothorax: acute respiratory acidosis.",
    "PE: early respiratory alkalosis with hypoxemia → late metabolic acidosis from obstructive shock.",
    "Angina/MI: local lactic acidosis in the myocardium impairs the Na⁺/K⁺ pump → dysrhythmias.",
    "AKI/CKD: metabolic acidosis (can't excrete H⁺ or regenerate HCO₃⁻).",
    "Altitude: respiratory alkalosis, then renal compensation."
  ],
  beyond: "ABG steps: (1) pH low = acidosis, high = alkalosis. (2) CO₂ moving opposite to pH = respiratory. (3) HCO₃⁻ moving with pH = metabolic. (4) If the other value pulls pH back toward normal, compensation is happening; a normal pH = full compensation.",
  qa: []
},
{
  id: "fluid", sys: "found", name: "Fluid & Electrolytes in this Unit",
  connect: ["Fluid Balance", "Electrolytes"],
  summary: "Ask: is fluid being lost, retained, or shifted? Is the kidney or a hormone (aldosterone, ADH) changing an electrolyte?",
  chain: {
    mechanism: ["Losses (fever, tachypnea, blood)", "Pump or kidney can't move/excrete fluid", "Low albumin (oncotic pressure)", "High venous/capillary hydrostatic pressure", "Inflammation makes capillaries leaky"],
    change: ["Fluid volume deficit", "Fluid overload", "Fluid shifts out of vessels", "Edema", "Exudate into tissue"],
    cues: ["Rapid weight gain over 1–2 days = fluid, not fat", "Crackles, edema, JVD", "Tachycardia, hypotension with deficit"],
    worst: ["Pulmonary edema", "Hypovolemic shock", "Hyperkalemic arrest"]
  },
  facts: [
    "Deficit: URIs and pneumonia (fever, tachypnea, mouth breathing), hemothorax and aneurysm rupture (blood loss), prerenal AKI.",
    "Overload: left/right HF, AKI, CKD, glomerulonephritis (pump fails or kidneys can't excrete Na⁺/water; RAAS/ADH retain more).",
    "Shift from low oncotic pressure: nephrotic syndrome.",
    "Shift from high hydrostatic pressure: CVI, DVT, valve disease, HF.",
    "High K⁺: AKI, CKD, glomerulonephritis; injured myocardium leaks K⁺.",
    "Low K⁺/Mg²⁺: heart failure (chronic aldosterone wastes them).",
    "Low Na⁺: chronic HF, glomerulonephritis (ADH retains free water → dilutional).",
    "Low Ca²⁺ / high phosphate: CKD (↓vitamin D activation, ↓phosphate excretion).",
    "K⁺, Ca²⁺, Mg²⁺ set the resting membrane potential: all dysrhythmias link here."
  ],
  qa: []
},
{
  id: "defense", sys: "found", name: "Infection, Inflammation & Hypersensitivity",
  connect: ["Infection", "Inflammation", "Immunity"],
  summary: "Injury or pathogen → mast cells and macrophages → histamine, prostaglandins, bradykinin, cytokines → vasodilation (red, hot) + leaky capillaries (swelling, exudate) + nerve sensitization (pain). Cytokines in blood → fever, malaise, ↑WBC, ↑CRP/ESR.",
  chain: {
    mechanism: ["Pathogen enters (droplet, ascending, IV, aspiration)", "Mast cells and macrophages release mediators"],
    change: ["Vasodilation", "Leaky capillaries", "Nerve sensitization", "Systemic cytokines"],
    cues: ["Redness, heat, swelling, pain", "Exudate, mucus", "Fever, malaise, ↑WBC"],
    worst: ["Local infection becomes systemic: sepsis"]
  },
  facts: [
    "Local → systemic is the recurring worst case: strep throat → rheumatic fever; sinusitis → brain; pneumonia → sepsis; cystitis → pyelonephritis → sepsis; acute prostatitis → sepsis; endocarditis → septic emboli.",
    "Immune response doing the damage (not the bug): rheumatic heart disease, glomerulonephritis, myocarditis, TB granulomas, atherosclerosis.",
    "Type I (IgE) hypersensitivity = asthma. Nonallergic rhinitis is NOT IgE-mediated.",
    "Immunocompromise opens the door to fungal pneumonia (Pneumocystis), active TB, and severe viral pneumonia."
  ],
  beyond: "Hypersensitivity types: I IgE/mast cell (asthma, anaphylaxis); II antibody vs. cell surface (rheumatic fever cross-reaction); III immune complexes (post-infectious GN, lupus nephritis); IV delayed T-cell (TB granuloma, positive PPD).",
  qa: []
},

/* ===== RESPIRATORY ===== */
{
  id: "uri", sys: "resp", name: "Upper Respiratory Infections",
  sub: "Pharyngitis, tonsillitis, nonallergic rhinitis, sinusitis, laryngitis, acute bronchitis",
  connect: ["Infection", "Immunity", "Inflammation"],
  pathogens: ["Influenza", "Rhinovirus", "Adenovirus", "RSV", "Group A Streptococcus"],
  summary: "Adults get 2–4 URIs a year, children 6–8. Spread by droplets or contact then self-inoculation of nose or eyes. Most are self-limiting; the danger is edema blocking drainage → secondary bacterial infection.",
  chain: {
    mechanism: ["Pathogen adheres to and invades mucosal epithelium", "Mast cells/macrophages release mediators"],
    change: ["Vasodilation, leaky capillaries, exudate", "Edema blocks ostia and eustachian tubes", "Cilia paralyzed (virus, smoke) → escalator fails"],
    cues: ["Sore throat, painful swallowing", "Congestion, rhinorrhea", "Hoarseness", "Facial pressure (sinusitis)", "Productive cough, wheeze, rhonchi (bronchitis)"],
    worst: ["Untreated strep → rheumatic fever", "Sinusitis spreading to eyes, ears, brain", "Airway obstruction (kissing tonsils)", "Fluid volume deficit"]
  },
  table: {
    cols: ["Condition", "Cause", "Hallmark cues", "Key fact", "Worst case"],
    rows: [
      ["Pharyngitis", "70–80% viral; bacterial = group A strep; smoke, GERD, dry air", "Sore throat, painful swallowing, edema, congestion", "Rapid antigen test or throat culture for strep", "Rheumatic fever: fever, murmur, nonpruritic rash, joint pain"],
      ["Tonsillitis", "Viral or bacterial", "Red, swollen tonsils; dysphagia (solids worse)", "Throat swab, rapid antigen", "Airway obstruction, abscess, scarlet/rheumatic fever"],
      ["Nonallergic rhinitis", "Non-IgE: viruses, irritants, weather, meds, hormones", "Congestion, rhinorrhea, itching", "Rule-out diagnosis (allergy testing negative)", "Dehydration from rhinorrhea and mouth breathing"],
      ["Sinusitis", "Usually secondary bacterial after a virus", "Facial pressure worse leaning forward, thick purulent drainage, ↓smell, fever", ">10 days = bacterial; <10 days = viral", "Spread to eyes, ears, brain"],
      ["Laryngitis", "Viral URI, vocal strain, irritants", "Hoarse or lost voice, dry cough", "Scope if >3 weeks", "Rarely serious"],
      ["Acute bronchitis", ">90% viral", "Productive cough, wheeze, rhonchi, mild dyspnea, low fever", "CXR negative; goal is ruling out pneumonia", "Resolves 2–3 wks; cough may linger"]
    ]
  },
  facts: [
    "Children get more URIs: immature immunity, fewer antigens met, poorer hygiene.",
    "Sinusitis mechanism: edema blocks ostia → sealed cavity → O₂ absorbed, vacuum, fluid fills → stagnant fluid grows bacteria.",
    "Push fluids: exudate, fever, fast breathing, mouth breathing and poor intake all cause fluid deficit; dehydration also thickens mucus."
  ],
  beyond: "Centor clues for group A strep: sudden sore throat with fever, tonsillar exudate, tender anterior neck nodes, and NO cough. Viral pharyngitis usually brings cough, runny nose, and hoarseness. RSV causes bronchiolitis in infants and serious illness in older adults.",
  qa: [
    ["How do viral and bacterial pathogens enter and colonize the upper airway?", "Droplets from coughs/sneezes or touching a contaminated surface then self-inoculating the nose or eyes. Pathogens adhere to and invade epithelial cells, causing injury and necrosis."],
    ["How does local inflammation explain the localized symptoms?", "Mediators (histamine, prostaglandins, bradykinin) cause vasodilation (redness), leaky capillaries (swelling, exudate), and sensitized nerves (pain): sore throat, congestion, hoarseness, productive cough."],
    ["How do you tell viral URI from group A strep pharyngitis?", "Viral (70–80%) comes with a cold picture: congestion, runny nose. Strep is confirmed by rapid antigen or culture, and matters because untreated strep can cause rheumatic fever."],
    ["How do mucosal inflammation and impaired clearance set up secondary bacterial infection?", "Edema blocks sinus ostia and eustachian tubes so fluid sits still and becomes a culture medium. Viruses and smoke paralyze cilia so the escalator stops sweeping bacteria out."]
  ]
},
{
  id: "pneumonia", sys: "resp", name: "Pneumonia",
  connect: ["Infection", "Inflammation", "Immunity", "Fluid Balance", "Acid-Base"],
  pathogens: ["Strep pneumoniae", "Mycoplasma", "Klebsiella", "Staph aureus", "Pneumocystis jirovecii", "Influenza", "COVID-19", "Adenovirus", "RSV"],
  summary: "All pneumonias are a SHUNT problem: alveoli are perfused but not ventilated.",
  chain: {
    mechanism: ["Inhaled, aspirated, or hematogenous pathogen reaches alveoli", "Macrophages release cytokines"],
    change: ["Protein-rich exudate + neutrophils flood alveoli = consolidation", "Perfused but unventilated alveoli (shunt)", "Hypoxemia"],
    cues: ["Dyspnea, tachypnea, hypoxia", "Productive purulent or rust sputum (bacterial)", "Fever, chills", "Mental status change, esp. older adults"],
    worst: ["Respiratory failure", "Sepsis / multi-organ dysfunction", "ARDS (influenza, COVID)", "Lung abscess"]
  },
  table: {
    cols: ["Feature", "Bacterial", "Viral", "Fungal"],
    rows: [
      ["Organisms", "S. pneumoniae (most common), S. aureus, Klebsiella, Pseudomonas", "Influenza A/B, RSV, adenovirus, COVID-19", "Pneumocystis jirovecii (most common), opportunists"],
      ["Where", "Inside alveoli: exudate = consolidation", "Alveolar walls and interstitium", "Parenchyma: granulomas, necrosis, vessel erosion, pleura"],
      ["Onset", "Abrupt, high fever, chills", "Gradual", "Faster, more severe (weak immunity)"],
      ["Cough", "Productive: green, yellow, or rust", "Dry", "Nonproductive; hemoptysis"],
      ["CXR", "Consolidation, often one side", "Bilateral infiltrates", "Varies; upper-lobe nodules"],
      ["WBC / culture", "WBC up; sputum culture positive", "WBC often normal; culture negative, PCR", "Fungal culture"],
      ["Who", "COPD, smokers, alcohol, aspiration, immunosuppression", "Infants, older adults, pregnancy", "Immunocompromised"],
      ["Big complication", "Respiratory failure, abscess, sepsis", "ARDS", "Dissemination: blindness, cerebral emboli, MI"]
    ]
  },
  facts: [
    "Acid-base path: hypoxemia → tachypnea → early respiratory alkalosis → patient tires or secretions trap CO₂ → later respiratory acidosis.",
    "A rising CO₂ in a patient who was alkalotic means they are tiring, not improving.",
    "Fluid: fever and tachypnea raise insensible losses and exudate pulls fluid from vessels.",
    "Worsening/systemic: rising work of breathing, falling SpO₂, new confusion, rising CO₂, hypotension + tachycardia (sepsis)."
  ],
  beyond: "Mycoplasma = mild “walking” atypical pneumonia in young adults in close quarters. Klebsiella = alcohol use and aspiration, “currant jelly” sputum. S. aureus often follows influenza. Pneumocystis = classic advanced HIV pneumonia.",
  qa: [
    ["How do pathogens invade the pulmonary parenchyma?", "Inhaled or aspirated organisms slip past upper airway defenses (worse with impaired cough, smoking, alcohol, aspiration) and colonize alveoli. Bacteria multiply in air sacs; viruses invade airway and alveolar wall cells; fungi germinate when cell-mediated immunity is weak."],
    ["How does intra-alveolar inflammation cause consolidation and impaired gas exchange?", "Cytokines make capillaries leaky; protein-rich exudate and neutrophils flood the alveoli. That solid, fluid-filled lung is consolidation, and fluid-filled alveoli can't exchange gas → hypoxemia."],
    ["How does membrane disruption alter V/Q and ABGs?", "Flooded alveoli are perfused but not ventilated (shunt) → hypoxemia → tachypnea → respiratory alkalosis early; fatigue and secretions trap CO₂ → respiratory acidosis later."],
    ["Immunocompromised vs. community-acquired pathogens?", "Community: S. pneumoniae most often, plus S. aureus, Klebsiella, and influenza, RSV, adenovirus, COVID. Immunocompromised: opportunists, most commonly Pneumocystis jirovecii."],
    ["What tells you pneumonia is worsening or systemic?", "Rising work of breathing, falling SpO₂, new confusion, CO₂ climbing after being low, hypotension and tachycardia (sepsis)."]
  ]
},
{
  id: "tb", sys: "resp", name: "Tuberculosis",
  connect: ["Infection", "Immunity", "Chronic Tissue Injury"],
  pathogens: ["Mycobacterium tuberculosis"],
  summary: "Airborne (N95 in the hospital). Risk: immunocompromise, diabetes, cancer, renal failure, transplant, children <5, substance use. Crowded or underserved settings raise rates.",
  chain: {
    mechanism: ["Inhaled bacillus engulfed by alveolar macrophages", "Lipid-rich cell wall blocks lysosome fusion → multiplies inside"],
    change: ["T cells (cell-mediated) recruit macrophages to wall it off", "Granuloma with caseous necrosis", "Latent if wall holds; active if wall breaks"],
    cues: ["Latent: none, test positive", "Active: low-grade fever, night sweats, weight loss, persistent cough, fatigue"],
    worst: ["Cavitary lung destruction", "Extrapulmonary spread: nodes, kidney, bone, meninges"]
  },
  table: {
    cols: ["", "Latent TB", "Active TB"],
    rows: [
      ["Symptoms", "None", "Low-grade fever, night sweats, weight loss (TNF), persistent cough, fatigue"],
      ["Contagious", "No", "Yes (airborne)"],
      ["Skin or blood test", "Positive", "Positive"],
      ["Sputum", "Negative", "Positive smear or culture"],
      ["Trigger", "—", "Immunosuppression: HIV, chemo, transplant drugs, diabetes, aging"]
    ]
  },
  facts: [
    "PPD skin test given intradermally, read in ~2 days; IGRA is the blood test.",
    "A positive test needs sputum and CXR to separate latent from active.",
    "Weight loss in active TB: TNF breaks down protein and suppresses appetite."
  ],
  qa: [
    ["How does cell-mediated immunity try to wall off M. tuberculosis?", "Macrophages engulf it but can't kill it (lipid-rich wall blocks lysosome fusion). T cells recruit more macrophages to surround infected cells, forming a granuloma (tubercle)."],
    ["What is the significance of granulomas and caseous necrosis?", "The granuloma contains the bacteria so they stop spreading (latent TB). Its cheese-like necrotic center can break down, releasing bacteria and leaving cavities."],
    ["Latent vs. active: pathophysiology and transmission?", "Latent: wall holds, no symptoms, not contagious, test positive. Active: wall breaks, bacteria replicate and spread by air, cytokines cause fever, night sweats, weight loss."],
    ["What triggers reactivation?", "Anything that suppresses cell-mediated immunity: HIV, transplant drugs, chemo, diabetes, cancer, renal failure, aging."]
  ]
},
{
  id: "asthma", sys: "resp", name: "Asthma",
  connect: ["Immunity (Hypersensitivity)", "Inflammation", "Acid-Base"],
  summary: "Chronic airway inflammation with REVERSIBLE hyperresponsiveness. Triggers: allergens, viral infections, exercise, cold air.",
  chain: {
    mechanism: ["Allergen cross-links IgE on mast cells (type I)", "Histamine, leukotrienes, prostaglandins"],
    change: ["Early phase (minutes): bronchospasm", "Late phase (hours): eosinophils + T helper cells → submucosal edema, mucus plugging", "Air trapping, ↑residual volume"],
    cues: ["Expiratory wheeze (hallmark)", "Chest tightness", "Cough", "Early: low CO₂"],
    worst: ["Status asthmaticus: no response to meds", "Rising CO₂ → confusion, extreme fatigue", "Hypercapnic respiratory failure"]
  },
  facts: [
    "ABG progression: early hyperventilation → low CO₂ (respiratory alkalosis). A “normal” CO₂ in a struggling patient may be a swing back. Rising CO₂ = alarm: muscles tiring.",
    "Diagnosis: spirometry showing reversibility after albuterol. Not diagnosed under age 2 (reactive airway disease).",
    "Associated: pneumonia, allergic rhinitis, GERD, OSA, anxiety.",
    "Exhalation is passive (elastic recoil). Narrowed airways collapse sooner as air leaves → air gets in but can't get out."
  ],
  beyond: "A “silent chest” (wheezing disappears while distress continues) means almost no air is moving. It is an emergency, not improvement.",
  qa: [
    ["How does hypersensitivity start airway hyperresponsiveness?", "Allergen cross-links IgE on mast cells (type I) → immediate histamine, leukotriene, prostaglandin release. Viruses, exercise, and cold air also trigger already-inflamed airways."],
    ["What causes bronchospasm, edema, and mucus plugging?", "Early phase: histamine and leukotrienes contract smooth muscle. Late phase: cytokines recruit eosinophils and T helper cells → submucosal edema and mucus hypersecretion."],
    ["How does obstruction cause air trapping and hyperinflation?", "Exhalation relies on elastic recoil; narrowed airways close early, so residual volume rises and the lungs hyperinflate. Wheeze is air forced through narrowed airways."],
    ["How do ABGs shift from early to severe?", "Early: respiratory alkalosis. Then CO₂ climbs back to “normal” (warning), then above normal (respiratory acidosis) with confusion and fatigue = status asthmaticus."]
  ]
},
{
  id: "copd", sys: "resp", name: "COPD",
  connect: ["Inflammation", "Acid-Base", "Infection", "Fluid Balance"],
  summary: "Progressive, IRREVERSIBLE: chronic bronchitis + emphysema, often both. Causes: tobacco (most common), biomass smoke, occupational chemicals, alpha-1 antitrypsin deficiency.",
  chain: {
    mechanism: ["Chronic irritant exposure → inflammation", "Bronchitis: goblet cell hyperplasia, mucus, wall fibrosis", "Emphysema: elastase destroys alveolar walls and recoil fibers"],
    change: ["Distal airways collapse on exhalation → air trapping", "Chronic hypoxia + chronic CO₂ retention", "Kidneys hold HCO₃⁻ → compensated respiratory acidosis"],
    cues: ["Chronic productive cough (bronchitis)", "Barrel chest, ↓breath sounds (emphysema)", "Accessory muscle use, tachypnea", "Clubbing", "Fatigue, weight loss"],
    worst: ["Exacerbation: acute-on-chronic acidosis", "Pneumonia", "Pulmonary HTN → cor pulmonale (right HF)"]
  },
  table: {
    cols: ["Cue", "Why"],
    rows: [
      ["Accessory muscles, tachypnea", "Hyperinflation flattens the diaphragm so it works poorly"],
      ["Decreased breath sounds", "Destroyed alveoli and trapped air muffle sound"],
      ["Chronic hypoxia", "Less surface area for diffusion"],
      ["Chronic hypercapnia", "Collapsing airways trap expired air"],
      ["Fatigue, weight loss", "Huge calorie cost of breathing"],
      ["Barrel chest", "Chronic hyperinflation enlarges AP diameter"],
      ["Clubbing", "Chronic hypoxemia → growth factors in the nail bed"]
    ]
  },
  facts: [
    "Baseline SpO₂ is often below 95%. Target during an exacerbation on O₂: 88–92%.",
    "Chronic CO₂ retainers can shift toward hypoxic drive; the lecture: a real concern but “not as dramatic as once thought.”",
    "Barrel chest and clubbing show chronic disease, not how bad today is.",
    "Exacerbations come from infection (any URI), irritants, or exertion.",
    "Tests: PFTs (diagnosis/staging), CXR/CT, CBC, ABG for acuity and compensation."
  ],
  qa: [
    ["Alveolar breakdown vs. mucus hypersecretion?", "Chronic bronchitis: goblet cell hyperplasia, mucus, fibrosis. Emphysema: proteases (elastase) destroy alveolar walls and elastic fibers."],
    ["How does loss of recoil cause airflow limitation and gas trapping?", "Distal airways collapse during exhalation and trap air; fibrotic, mucus-filled airways add resistance → hyperinflation, flat diaphragm, barrel chest."],
    ["Why are baseline ABGs altered and how are they compensated?", "CO₂ stays high constantly; over days kidneys conserve bicarbonate so pH stays near normal = compensated respiratory acidosis."],
    ["How does pulmonary vascular remodeling cause right HF?", "Chronic hypoxia constricts and remodels pulmonary vessels → pulmonary HTN → RV thickens then fails → JVD, peripheral edema, fluid overload (cor pulmonale)."],
    ["How do infections trigger exacerbations?", "A URI adds inflammation, mucus, and bronchospasm to airways with no reserve; CO₂ rises past what the kidneys compensated, so pH drops."]
  ]
},
{
  id: "trauma", sys: "resp", name: "Traumatic Lung Injuries",
  sub: "Spontaneous, open & tension pneumothorax; hemothorax",
  connect: ["Perfusion", "Fluid Balance", "Inflammation", "Acid-Base"],
  summary: "All of these destroy the negative intrapleural pressure (~−10 cm H₂O) that holds the lung to the chest wall, so the lung collapses and V/Q fails.",
  chain: {
    mechanism: ["Bleb rupture, penetrating wound, or blood enters pleural space", "Intrapleural pressure rises toward atmospheric"],
    change: ["Lung recoils and collapses", "Collapsed alveoli perfused but not ventilated (shunt)", "Tension: mediastinal shift compresses vena cava → ↓preload"],
    cues: ["Sudden pleuritic pain, dyspnea, tachycardia", "↓ or absent breath sounds one side", "Air = hyperresonant; blood = dull", "Tension: tracheal deviation AWAY from injured side, JVD, hypotension"],
    worst: ["Tension pneumo → obstructive shock → arrest", "Hemothorax → hypovolemic shock", "Acute respiratory acidosis"]
  },
  table: {
    cols: ["Type", "What happens", "Key cues", "Priority"],
    rows: [
      ["Spontaneous", "Apical bleb ruptures; tall, thin, young males or COPD", "Sudden pleuritic pain, dyspnea, ↓breath sounds, hyperresonance", "~30% recur within 5 years; upright CXR shows pleural line"],
      ["Open", "Penetrating “sucking chest wound”", "Same respiratory cues + open wound", "Can become tension"],
      ["Tension", "Flap = one-way valve; air in, can't get out → mediastinal shift", "Tracheal deviation (hallmark), JVD, hypotension, tachycardia, absent sounds one side", "ALWAYS the priority. Treat before X-ray (needle decompression)"],
      ["Hemothorax", "Blood in pleural space; pools at base", "Dullness, ↓sounds, hypotension, tachycardia, cool pale clammy skin", "Hypovolemic shock"]
    ]
  },
  facts: [
    "Air sits high and is hyperresonant. Blood sits at the base, is dull, and adds hypovolemia.",
    "Tension = air + JVD + tracheal deviation (obstructive shock).",
    "Hemothorax confirmed when chest tube or thoracentesis drains frank blood."
  ],
  qa: [
    ["How do mechanical disruptions alter intrapleural pressure?", "Air or blood enters the pleural space, raising pressure toward or above atmospheric; the elastic lung recoils inward and collapses."],
    ["How does losing negative pressure cause collapse and V/Q mismatch?", "Collapsed alveoli get blood but no air (shunt) → hypoxemia, dyspnea, tachycardia, ↓breath sounds."],
    ["How does impaired ventilation lead to acidosis and instability?", "CO₂ can't be cleared → acute respiratory acidosis. Tension: mediastinal shift compresses the vena cava → ↓preload/CO → obstructive shock. Hemothorax: blood loss → hypovolemic shock."]
  ]
},

/* ===== CARDIAC PART 1 ===== */
{
  id: "htn", sys: "card1", name: "Hypertension", star: true,
  connect: ["Fluid Balance", "Vascular Resistance", "Organ Perfusion"],
  summary: "SBP >130 and/or DBP >80. BP = CO × SVR, so HTN is a sustained rise in CO, SVR, or both. The instructor's #1 arterial topic.",
  chain: {
    mechanism: ["Primary (90–95%): baroreceptor and RAAS loops desensitize and stop correcting", "Secondary (5–10%): renal/endocrine cause overactivates RAAS/aldosterone"],
    change: ["↑SVR raises afterload → LV works harder, ↑O₂ demand", "↑Volume raises preload", "Wall tension injures endothelium (↓NO)"],
    cues: ["Usually silent", "Headache (autoregulation overwhelmed)", "Chest pain, SOB", "Vision changes (retinal vessels)", "Fatigue"],
    worst: ["Hypertensive emergency: >180/120 + active organ damage", "Stroke, MI, renal failure, pulmonary edema"]
  },
  table: {
    cols: ["", "Urgency", "Emergency"],
    rows: [
      ["BP", ">180/120", ">180/120"],
      ["Acute organ damage?", "No: autoregulation intact", "Yes: active, evolving damage"],
      ["Presentation", "Asymptomatic or mild headache, anxiety, nosebleed", "Encephalopathy (confusion), intracranial hemorrhage, MI, pulmonary edema, renal failure"]
    ]
  },
  facts: [
    "Non-modifiable risks: family history; Black, Asian, Hispanic; male <65 or female >65.",
    "Modifiable: inactivity, smoking, alcohol, stress, obesity, OSA, diet.",
    "Secondary causes: renal disease, Cushing, PCOS, OSA, congenital vascular, stimulants/caffeine/alcohol, pregnancy, meds. Treat the root cause.",
    "BNP promotes Na⁺ excretion (it lowers BP; it does not raise it).",
    "Diagnostics: BP monitoring, EKG, echo, renal US; creatinine, BUN, eGFR; lipids; glucose/A1C; Na⁺, K⁺, Ca²⁺.",
    "Kidney disease ↔ HTN is a vicious cycle."
  ],
  beyond: "End-organ damage over years: heart (LVH → diastolic HF, CAD), kidneys (nephrosclerosis → CKD), brain (stroke, TIA, hemorrhage), retina (retinopathy). The media thickens and stiffens; HTN also drives atherosclerosis and aneurysm.",
  qa: [
    ["How do ↑SVR and ↑volume increase cardiac workload?", "Higher SVR = higher afterload, so the LV squeezes harder and uses more O₂. More volume = higher preload, stretching the heart."],
    ["What role do neurohormonal loops play?", "In primary HTN, baroreceptors and RAAS become desensitized and stop correcting high pressure. In secondary HTN, disease overactivates RAAS/aldosterone."],
    ["How does prolonged high pressure alter arteries?", "Wall tension injures endothelium (↓NO, leaky, sticky). The media thickens and stiffens, narrowing the lumen and speeding atherosclerosis."],
    ["How does chronic HTN damage heart, kidneys, brain, retina?", "Heart: hypertrophy, ischemia, pulmonary congestion. Kidneys: nephron damage and fluid retention (vicious cycle). Brain: headache, stroke. Retina: vessel damage, vision changes."]
  ]
},
{
  id: "athero", sys: "card1", name: "Atherosclerosis",
  connect: ["Inflammation", "Immunity", "Vascular Perfusion"],
  summary: "A chronic, immune-mediated inflammatory disease of the tunica intima, not just a pipe clogging with fat.",
  chain: {
    mechanism: ["Endothelial injury (HTN, smoking, high glucose, stress) → ↓nitric oxide", "LDL enters intima and is OXIDIZED"],
    change: ["Macrophages eat oxidized LDL → foam cells → fatty streak", "Smooth muscle migrates, lays collagen → fibrous cap", "Foam cells die → necrotic core"],
    cues: ["Silent until narrowing causes ischemic pain downstream", "≥70% narrowing → exertional angina or claudication"],
    worst: ["Plaque rupture / thrombus → MI, unstable angina, stroke"]
  },
  facts: [
    "Steps: endothelial injury → LDL oxidized → adhesion molecules catch monocytes and T cells → foam cells (fatty streak) → fibrous cap → necrotic core → rupture or thrombus.",
    "Risks: non-modifiable age, genetics, male; modifiable hyperlipidemia, HTN, smoking, diabetes, obesity.",
    "Diagnostics: lipid panel, CRP, glucose/A1C, coronary artery calcium score.",
    "Stable plaque = fixed, predictable exertional symptoms. Unstable = ruptures or clots → sudden occlusion."
  ],
  beyond: "Vulnerable plaque: thin fibrous cap, large lipid/necrotic core, many inflammatory cells. Stable plaque: thick cap, small core.",
  qa: [
    ["How does endothelial injury start an immune response?", "Damaged endothelium loses NO and becomes leaky and sticky, expressing adhesion molecules that capture monocytes and T cells."],
    ["Connect endothelial dysfunction → lipids → foam cells → plaque.", "LDL enters and is oxidized → macrophages engulf it → foam cells (fatty streak) → smooth muscle cells build a fibrous cap → dying foam cells form a necrotic core."],
    ["How does narrowing impair perfusion?", "At rest supply may be enough; with exertion demand exceeds supply → ischemic pain (angina, claudication). ~70% narrowing gives exertional symptoms."],
    ["Stable vs. unstable plaque?", "Stable: fixed, predictable, relieved by rest. Unstable: ruptures or grows a clot → sudden unpredictable occlusion."]
  ]
},
{
  id: "pad", sys: "card1", name: "PAD, Arterial Thrombosis & Embolism",
  connect: ["Perfusion", "Ischemia", "Inflammation"],
  summary: "Chronic narrowing lets collaterals form, so tissue slowly starves. Acute occlusion gives no time for collaterals, so the limb becomes ischemic within hours.",
  chain: {
    mechanism: ["PAD: atherosclerotic plaques outside heart and brain (legs)", "Thrombosis: clot forms on a plaque", "Embolism: traveling clot lodges (AFib!)"],
    change: ["Chronic: slow tissue starvation", "Acute: sudden loss of distal O₂ delivery"],
    cues: ["PAD: intermittent claudication, weak/absent pulses, pale shiny hairless cool skin, toe/foot ulcers", "Acute: 6 P's: Pain, Pallor, Pulselessness, Poikilothermia, Paresthesia, Paralysis"],
    worst: ["Limb loss", "Muscle death (↑CK, ↑myoglobin)"]
  },
  table: {
    cols: ["", "PAD (chronic)", "Arterial thrombosis (acute)", "Arterial embolism (acute)"],
    rows: [
      ["Risk factors", "Smoking, diabetes, age, hyperlipidemia, HTN", "Atherosclerosis, vascular trauma, hypercoagulable", "AFib, MI, prosthetic valves, endocarditis"],
      ["Cues", "Claudication, weak pulses, pale shiny skin, hair loss, ulcers", "6 P's", "6 P's"],
      ["Diagnostics", "Pulse checks, ultrasound, CTA/MRA", "Doppler, angiography; CK, myoglobin; PT/INR, aPTT, fibrinogen", "Same"]
    ]
  },
  beyond: "Paresthesia and paralysis are late, ominous signs (nerve and muscle dying). Claudication comes on with walking and eases with rest; rest pain = severe. PAD legs feel better dangling; elevation worsens pain.",
  qa: [
    ["Acute vs. chronic occlusion?", "Chronic narrowing: slow decline, pain with activity, collaterals form. Acute thrombosis/embolism: sudden block, no collaterals, whole limb ischemic within hours."],
    ["How does acute ischemia produce the classic signs?", "No flow = pain, pallor, pulselessness, cold; nerves starving for O₂ = paresthesia, paralysis."],
    ["How does chronic insufficiency change tissue?", "Pale, shiny, thin, cool, hairless skin; weak pulses; slow cap refill; round dry ulcers on toes and feet; no edema."]
  ]
},
{
  id: "aneurysm", sys: "card1", name: "Aneurysms",
  connect: ["Structural Integrity", "Perfusion", "Hemodynamics"],
  summary: "The arterial wall (media) weakens and bulges outward. Risks: atherosclerosis, HTN, connective tissue disorders, age, male, smoking.",
  chain: {
    mechanism: ["Media weakens (atherosclerotic inflammation, HTN wall stress, connective tissue disease)"],
    change: ["Wall can't resist pressure → progressive bulge", "Compresses neighbors"],
    cues: ["AAA: pulsatile abdominal mass, bruit, low back/flank ache, early satiety", "TAA: hoarseness, dysphagia, SVC syndrome, unequal arm BPs"],
    worst: ["Rupture/dissection: sudden severe back or chest pain, hypotension, tachycardia → hypovolemic shock"]
  },
  table: {
    cols: ["", "Abdominal (AAA)", "Thoracic (TAA)"],
    rows: [
      ["Main pathology", "Advanced atherosclerosis, HTN, age", "Cystic medial necrosis, connective tissue disorders"],
      ["Compression signs", "Low back/flank ache, early satiety, epigastric discomfort", "Hoarseness, dysphagia, superior vena cava syndrome"],
      ["Key findings", "Palpable pulsatile mass, bruit", "Not palpable; unequal arm BPs or pulses"],
      ["Diagnostic", "Abdominal ultrasound", "Chest CT or TEE"]
    ]
  },
  facts: ["Rupture/dissection labs: CBC and H&H, D-dimer, type and screen (they expect blood loss)."],
  beyond: "Dissection = intimal tear lets blood split the wall layers; classic sudden “tearing” chest or back pain. Rupture = massive internal bleeding → hypovolemic shock, falling H&H, rapidly fatal.",
  qa: [
    ["How does medial weakening cause dilation?", "The media gives the artery its strength; when it weakens, the wall progressively bulges under pressure."],
    ["Role of HTN and atherosclerosis?", "HTN raises constant wall stress; atherosclerotic inflammation degrades wall layers. AAA mostly atherosclerosis + HTN; TAA more connective tissue disease."],
    ["Consequences of dissection or rupture?", "Massive blood loss → hypovolemic shock: hypotension, tachycardia, cool clammy skin, falling H&H."]
  ]
},
{
  id: "venous", sys: "card1", name: "CVI, DVT & Pulmonary Embolism",
  connect: ["Fluid Balance", "Inflammation", "Perfusion", "Acid-Base"],
  summary: "Venous disease starts with failure of forward flow (valves, calf muscle pump, respiratory pump) → pooling, high venous pressure, clotting. Veins hold 60–70% of blood volume.",
  chain: {
    mechanism: ["CVI: incompetent valves", "DVT: Virchow's triad (stasis, endothelial injury, hypercoagulability)", "PE: DVT fragment → IVC → RA → RV → pulmonary artery"],
    change: ["CVI: venous HTN → fluid, protein, RBCs leak", "PE: dead space + bronchoconstriction + ↑pulmonary resistance → RV strain → septum bulges into LV → ↓SV"],
    cues: ["CVI: bilateral edema, brown hemosiderin, medial malleolus ulcers", "DVT: unilateral swelling, warmth, redness, tenderness", "PE: sudden dyspnea (#1), tachycardia, pleuritic pain, doom, hemoptysis"],
    worst: ["PE → RV failure → obstructive shock → death (JVD, hypotension, syncope, AMS)"]
  },
  table: {
    cols: ["", "CVI", "DVT", "PE"],
    rows: [
      ["Onset", "Months to years", "Gradual", "Sudden"],
      ["Cues", "Bilateral edema (pitting → brawny), heavy ache worse standing, better elevated, hemosiderin, ulcers at medial malleolus", "Unilateral swelling, calf/thigh pain, tenderness, warmth, redness", "Sudden dyspnea, tachypnea, tachycardia, pleuritic pain, doom, hemoptysis; RV failure signs"],
      ["Risks", "Prior DVT, prolonged standing, age, female, obesity", "Immobility, cancer, pregnancy/postpartum, estrogen, obesity, thrombophilia", "DVT (~90%), air in IV lines"],
      ["Diagnostics", "Ultrasound (gold), air plethysmography", "Ultrasound (first line), D-dimer", "CTPA (gold), V/Q scan, ABG, D-dimer, troponin, BNP, EKG"],
      ["Complications", "Ulcers, depression", "PE, post-thrombotic syndrome (→ CVI)", "RV failure, obstructive shock, death"]
    ]
  },
  facts: [
    "Virchow's triad: a DVT almost never forms without at least two of the three. SCDs remove stasis.",
    "D-dimer: NEGATIVE rules out DVT/PE in low-risk patients. POSITIVE is nonspecific (surgery, cancer, pregnancy, trauma, inflammation).",
    "PE acid-base: early hyperventilation → respiratory alkalosis with hypoxemia; late shock → metabolic acidosis.",
    "Troponin and BNP rise from RV strain."
  ],
  qa: [
    ["How does valve incompetence cause stasis and edema?", "Valves can't close, blood falls back and pools → venous hypertension pushes fluid, protein, RBCs into tissue → edema, hemosiderin staining, fibrosis, ulcers."],
    ["What in Virchow's triad promotes DVT?", "Stasis (immobility, flights, surgery), endothelial injury (trauma, surgery, IV lines), hypercoagulability (cancer, pregnancy, estrogen, obesity, thrombophilia)."],
    ["How does a clot reach the lungs?", "Leg clot breaks off → vena cava → RA → RV → pumped into pulmonary arteries where it lodges."],
    ["How does PE alter dead space, V/Q, RV and oxygenation?", "Alveoli beyond the clot are ventilated, not perfused (dead space) → hypoxemia. Pulmonary resistance rises, RV dilates and fails, septum bulges into LV → ↓output → obstructive shock."]
  ]
},

/* ===== CARDIAC PART 2 ===== */
{
  id: "valves", sys: "card2", name: "Valve Disorders",
  sub: "Stenosis, regurgitation, prolapse",
  connect: ["Hemodynamics", "Structural Changes", "Fluid Balance"],
  summary: "Learn the three mechanisms, not each valve. A murmur = turbulent flow = valve problem. S1 = AV valves closing; S2 = semilunar valves closing.",
  chain: {
    mechanism: ["Stenosis: won't open fully", "Regurgitation: won't close fully", "Prolapse: leaflets bulge backward"],
    change: ["Stenosis: PRESSURE overload → hypertrophy of the chamber behind it", "Regurgitation: VOLUME overload → dilation", "Upstream hydrostatic pressure rises"],
    cues: ["Murmur", "Left-sided valve: pulmonary congestion (dyspnea, crackles)", "Right-sided valve: peripheral edema"],
    worst: ["Pump failure / heart failure", "AFib from atrial enlargement"]
  },
  table: {
    cols: ["", "Stenosis", "Regurgitation", "Prolapse"],
    rows: [
      ["Failure", "Won't open fully", "Won't close fully", "Leaflets bulge backward"],
      ["Effect", "Pressure overload → hypertrophy", "Volume overload → dilation → pump failure", "Variable; can lead to regurgitation"],
      ["Causes", "Age-related calcification, rheumatic heart disease, congenital; hypercalcemia and CKD speed calcification", "Infective endocarditis, post-MI papillary/chordae damage, dilated cardiomyopathy, HTN, IV drug use", "Weak connective tissue, collagen genes, family history; most often young women"]
    ]
  },
  facts: [
    "Rheumatic heart disease = autoimmune cross-reaction after untreated strep throat (links to pharyngitis).",
    "Diagnostics: echocardiogram (gold), cardiac cath (invasive, not first), BNP trended."
  ],
  beyond: "Aortic stenosis classic triad: angina, syncope, exertional dyspnea, with a systolic murmur. Mitral disease backs into the left atrium → LA enlargement → AFib risk → pulmonary congestion.",
  qa: [
    ["Stenotic vs. regurgitant flow?", "Stenotic valves are stiff/calcified and obstruct forward flow. Regurgitant valves don't close, so blood leaks backward."],
    ["How do pressure vs. volume overloads remodel the heart?", "Pressure overload (stenosis) → hypertrophy. Volume overload (regurgitation) → dilation. Both end in pump failure."],
    ["How do left-sided lesions send pressure backward?", "Blood backs into the LA → pulmonary veins/capillaries → pulmonary congestion; eventually right heart strain → peripheral edema."]
  ]
},
{
  id: "acs", sys: "card2", name: "Angina & Myocardial Infarction",
  connect: ["Perfusion", "Ischemia/Necrosis", "Inflammation", "Acid-Base", "Electrolytes"],
  summary: "Both start with CAD. The difference is time and reversibility: restore flow within ~20 minutes and cells recover fully.",
  chain: {
    mechanism: ["O₂ demand > supply (fixed plaque, rupture, clot, vasospasm)", "Anaerobic metabolism → lactic acid + adenosine"],
    change: ["<20 min: reversible ischemia (angina)", ">20 min: necrosis from subendocardium outward (MI)", "Lactic acidosis impairs Na⁺/K⁺ pump; K⁺ leaks"],
    cues: ["Crushing substernal pressure radiating to arm, jaw, neck, back", "Diaphoresis, cold clammy skin, N/V, apprehension", "Women: jaw/neck pain without chest pain, back pain, fatigue, indigestion"],
    worst: ["Dysrhythmias (most dangerous early)", "Heart failure, shock, emboli"]
  },
  table: {
    cols: ["", "Stable angina", "Unstable angina", "MI"],
    rows: [
      ["Mechanism", "Fixed plaque ≥70%; demand > supply on exertion", "Plaque rupture with partial clot, or vasospasm", "Ischemia >20 min → irreversible necrosis"],
      ["Pattern", "Predictable: exertion, stress, cold, heavy meals", "At rest, more frequent, more severe, >15–20 min", "Severe, crushing, persistent"],
      ["Relief", "Rest", "Not reliably: emergency", "No"],
      ["Troponin", "Normal", "Normal", "Elevated"],
      ["EKG", "Ischemic changes possible", "Ischemic changes possible", "STEMI: ST elevation; NSTEMI: ST depression/T inversion"]
    ]
  },
  facts: [
    "Troponin: rises 2–4 hr, peaks 18–24 hr, stays up 7–14 days. May be normal on arrival, so TREND it.",
    "CK-MB: rises 4–6 hr, normal by 40–72 hr; useful for reinfarction.",
    "12-lead EKG first on everyone with chest pain. WBC peaks 2–4 days.",
    "MI timeline: seconds ATP gone → ~20 min necrosis starts → 24–48 hr neutrophils → 2–4 wk macrophages lay scar (remodeling).",
    "NSTEMI = partial occlusion, subendocardial. STEMI = complete, transmural.",
    "RCA feeds the SA node: inferior MI causes bradycardia.",
    "Acute triggers: sympathetic surge, hypercoagulable state, cocaine/stimulants, sepsis."
  ],
  qa: [
    ["Transient ischemia vs. irreversible necrosis?", "If flow returns within ~20 min, cells recover (angina, troponin normal). Past 20 min cells die starting in the subendocardium (MI, troponin rises)."],
    ["Why does ischemia hurt?", "Anaerobic glycolysis makes lactic acid and adenosine that stimulate visceral pain fibers."],
    ["What inflammation follows MI?", "Neutrophils at 24–48 hr (WBC peaks days 2–4); macrophages replace muscle with scar over 2–4 weeks → remodeling, HF and dysrhythmia risk."],
    ["How do ischemic membranes trigger dysrhythmias?", "Lactic acidosis impairs the Na⁺/K⁺ ATPase, destabilizing the resting potential; injured cells leak K⁺ → dysrhythmias even before cells die."]
  ]
},
{
  id: "itis", sys: "card2", name: "Pericarditis, Myocarditis & Endocarditis",
  connect: ["Infection", "Immunity", "Inflammation", "Perfusion"],
  pathogens: ["Staph aureus", "Group A Strep", "Viruses"],
  summary: "Map each to a layer: pericardium (sac, 15–50 mL fluid) → myocardium (muscle) → endocardium (lining and valves).",
  chain: {
    mechanism: ["Peri: viral, post-MI, autoimmune, uremia → leaky vessels", "Myo: viral/autoimmune T cells attack myocytes", "Endo: bacteremia sticks to injured endothelium → vegetations"],
    change: ["Peri: exudate, friction, effusion compresses filling", "Myo: necrosis + edema → weak contraction", "Endo: valve destruction + septic emboli"],
    cues: ["Peri: sharp pleuritic pain worse lying flat, better leaning forward; friction rub; ST elevation + PR depression; troponin NORMAL", "Myo: fatigue, dyspnea, HF signs, dysrhythmias; troponin UP", "Endo: fever, new murmur, splinter hemorrhages, Janeway lesions (painless), Osler nodes (painful), Roth spots"],
    worst: ["Effusion compressing the heart", "Acute HF, lethal rhythms", "Embolic stroke, sepsis"]
  },
  table: {
    cols: ["", "Pericarditis", "Myocarditis", "Infective endocarditis"],
    rows: [
      ["Causes", "Viral (most common), post-MI, lupus/RA, uremia", "Viral (COVID, adenovirus), autoimmune, cardiotoxic drugs", "IV drug use, central lines, prosthetic valves, dental/invasive procedures"],
      ["Hallmark", "Positional pleuritic pain, friction rub", "HF signs, unpredictable dysrhythmias", "New/changing murmur, embolic skin signs"],
      ["Labs/EKG", "↑ESR/CRP, troponin NOT up; ST elev + PR depression", "↑troponin, ↑CK-MB, dysrhythmias", "WBC up; blood cultures ×2–3 sites"],
      ["Gold standard", "Clinical + EKG + labs", "Endomyocardial biopsy", "Blood cultures; echo shows vegetations"],
      ["Worst case", "Effusion compressing the heart", "Acute HF, lethal rhythms; can become DCM", "HF, embolic stroke, sepsis"]
    ]
  },
  facts: ["Pericarditis vs. MI: both have chest pain and ST elevation. Pericarditis = normal troponin, young, recent virus, positional pain."],
  beyond: "S. aureus = classic acute, aggressive endocarditis (IV drug use, lines). Rapid pericardial fluid = cardiac tamponade: hypotension, JVD, muffled heart sounds (Beck's triad), an emergency.",
  qa: [
    ["How do pathogens or autoimmunity target each layer?", "Viruses cause most peri/myocarditis; autoimmune disease, toxins, post-MI inflammation contribute. In endocarditis, bloodstream bacteria stick to injured endocardium (usually valves)."],
    ["How does pericardial inflammation impair filling?", "Leaky vessels → exudate and friction; fluid collects (effusion) and compresses the heart so it can't fill."],
    ["How does myocarditis cause acute HF?", "Myocyte necrosis and edema reduce contractility → ↓SV → HF signs; conduction inflammation causes dysrhythmias."],
    ["How do vegetations cause valve destruction and emboli?", "Bacteria + platelets + fibrin erode the valve (new regurgitant murmur); fragments embolize (Janeway lesions, splinter hemorrhages, stroke)."]
  ]
},
{
  id: "hf", sys: "card2", name: "Heart Failure & Cardiomyopathies",
  connect: ["Fluid Balance", "Electrolyte Imbalance", "Acid-Base", "Systemic Perfusion"],
  summary: "The body reads low output as hypovolemia, and its compensation (SNS, RAAS, ADH) helps briefly then accelerates failure.",
  chain: {
    mechanism: ["Systolic (HFrEF ≤40%): can't squeeze; prior MI most common", "Diastolic (HFpEF ≥50%): can't relax/fill; long-standing HTN"],
    change: ["↓CO → SNS, RAAS, ADH activate", "↑afterload, ↑preload, remodeling", "Blood backs up behind the failing side"],
    cues: ["Left: lungs (DOE, orthopnea, PND, crackles, pink frothy sputum, S3)", "Right: body (JVD, hepatomegaly, ascites, dependent edema, weight gain)", "Forward: fatigue, cool clammy skin"],
    worst: ["Acute pulmonary edema", "Dysrhythmias from low K⁺/Mg²⁺", "Kidney injury"]
  },
  table: {
    cols: ["System", "Short-term help", "Long-term harm"],
    rows: [
      ["SNS", "↑HR, ↑contractility, vasoconstriction", "↑O₂ demand, ↑afterload"],
      ["RAAS", "Angiotensin II vasoconstricts; aldosterone retains Na⁺/water", "↑afterload, ↑preload, remodeling; wastes K⁺ and Mg²⁺"],
      ["ADH", "Retains free water", "Dilutional hyponatremia (chronic, poorly controlled HF)"]
    ]
  },
  table2: {
    title: "Cardiomyopathies",
    cols: ["", "Dilated (DCM)", "Hypertrophic (HCM)", "Restrictive (RCM)"],
    rows: [
      ["Structure", "Big chambers, thin weak walls", "Asymmetric septal thickening", "Normal thickness, rigid walls"],
      ["Problem", "Systolic (low EF)", "Outflow obstruction + diastolic", "Diastolic (can't fill)"],
      ["Causes", "Genetic, viral myocarditis, alcohol, MI, HTN", "Autosomal dominant", "Amyloidosis, sarcoidosis, radiation"],
      ["Cues", "SOB, weight gain, S3, systolic HF", "Often none; exertional syncope; sudden death in young athletes", "Right-sided HF, JVD, S4"],
      ["Prognosis", "HF, clots, sudden death", "Leading identifiable cause of sudden death in the young", "Worst (2–5 yr survival)"]
    ]
  },
  facts: [
    "BNP <100 helps rule out HF as cause of dyspnea; >400 confirms volume overload.",
    "Echo is gold standard (EF, systolic vs. diastolic). CXR: cardiomegaly, congestion, effusions.",
    "Left-sided HF is the most common cause of right-sided HF. COPD → pulmonary HTN → right HF.",
    "S3 = rapid filling of a fluid-overloaded, dilated ventricle."
  ],
  qa: [
    ["What defines dilated, hypertrophic, restrictive?", "Dilated: big, thin, weak (systolic). Hypertrophic: thick septum blocks outflow (sudden death in young athletes). Restrictive: rigid walls, big atria, worst prognosis."],
    ["Left vs. right HF?", "Left backs into the lungs (orthopnea, PND, crackles, frothy sputum). Right backs into the body (JVD, edema, ascites, hepatomegaly, weight gain)."],
    ["How does compensation backfire?", "SNS, RAAS, ADH raise HR, afterload, and preload: helpful briefly, but they increase O₂ demand on a failing heart and drive remodeling."],
    ["How do fluid overload and poor perfusion change electrolytes?", "Aldosterone wastes K⁺ and Mg²⁺ (dysrhythmias); ADH retains free water → dilutional hyponatremia; kidneys underperfused."]
  ]
},
{
  id: "rhythm", sys: "card2", name: "Dysrhythmias",
  sub: "Sinus brady, sinus tachy, AFib, atrial flutter",
  connect: ["Electrical Conduction", "Perfusion", "Electrolytes"],
  summary: "Whether a rhythm matters depends on cardiac output and perfusion (BP, mentation, skin, urine), not just the number. No EKG strips on this test.",
  chain: {
    mechanism: ["Automaticity too slow/fast (sinus brady/tachy)", "Many chaotic re-entry circuits (AFib 300–600)", "One macro-reentry loop near tricuspid (flutter 250–350)"],
    change: ["Slow rate → ↓CO", "Fast rate → short diastole → ↓filling, ↓coronary flow", "Lost atrial kick (last 20–30% of filling) → ↓SV, blood pools → clot"],
    cues: ["Brady: dizziness, syncope, hypotension, AMS", "Tachy: palpitations, ↑O₂ demand", "AFib: irregularly irregular, no P waves"],
    worst: ["Embolic stroke", "AFib with RVR → ↓CO", "Hyperkalemia → bradycardia → arrest"]
  },
  table: {
    cols: ["", "Sinus brady", "Sinus tachy", "AFib", "Atrial flutter"],
    rows: [
      ["Rate/pattern", "<60, normal conduction", ">100, normal conduction", "Atria 300–600, irregularly irregular, no P waves", "Atria 250–350, sawtooth, regular or predictably irregular"],
      ["Causes", "Athletes, inferior MI (RCA → SA node), hypothyroid, hyperkalemia, meds", "Fever, hypovolemia, hypoxia, pain, anxiety, PE, hyperthyroid, anemia, caffeine/cocaine", "HTN, CAD, HF, mitral disease, hyperthyroid, age, obesity, OSA, binge alcohol", "Same, esp. COPD, PE, structural disease"],
      ["Danger", "↓CO", "↓filling, ↓coronary flow", "Lost kick, clot → stroke; RVR", "Partial kick loss; clot, stroke"]
    ]
  },
  facts: [
    "Conduction: SA 60–100 → AV 40–60 (delay, gatekeeper) → His → Purkinje 20–40.",
    "Action potential: Phase 0 Na⁺ in; Phase 2 Ca²⁺ plateau (contraction); Phase 3 K⁺ out; Phase 4 pump resets.",
    "Above ~120–140 bpm diastolic filling time falls enough to drop CO.",
    "Diagnostics: 12-lead EKG first, Holter for intermittent rhythms, electrolytes (K⁺, Ca²⁺, Mg²⁺), thyroid tests."
  ],
  beyond: "Hyperkalemia (AKI/CKD) makes the resting membrane less negative → bradycardia, heart block, arrest. Hypokalemia (diuretics, aldosterone) → ectopy. Hypomagnesemia worsens both.",
  qa: [
    ["How do automaticity, re-entry, or conduction problems disturb rhythm?", "Sinus brady/tachy: normal pathway firing too slow/fast. AFib: many chaotic re-entry circuits. Flutter: one loop near the tricuspid. The AV node filters impulses."],
    ["How do electrolytes alter membrane potentials?", "Na⁺ depolarizes, Ca²⁺ plateaus, K⁺ repolarizes. Abnormal K⁺/Ca²⁺/Mg²⁺ makes cells fire too easily or conduct too slowly."],
    ["How does losing atrial kick reduce SV and cause clots?", "Atria quiver instead of contracting: the last 20–30% of filling is lost and blood pools → clot → stroke or limb ischemia."]
  ]
},

/* ===== KIDNEY ===== */
{
  id: "aki", sys: "kidney", name: "Acute Kidney Injury",
  connect: ["Fluid & Electrolytes", "Acid-Base", "Perfusion"],
  summary: "An abrupt decline in kidney function. First ask: where does the problem begin? Before, inside, or after the kidney?",
  chain: {
    mechanism: ["Prerenal: not enough blood flow (hemorrhage, dehydration, shock, HF)", "Intrinsic: tissue damage (ATN, GN, nephrotoxins, sepsis)", "Postrenal: obstruction (stones, tumor, BPH)"],
    change: ["↓GFR", "Can't excrete Na⁺/water, K⁺, H⁺, wastes"],
    cues: ["Oliguria/anuria (can be near-normal!)", "Edema, rapid weight gain over 1–2 days, crackles", "Confusion, lethargy (uremia)", "↑K⁺, ↓pH/HCO₃⁻"],
    worst: ["Hyperkalemia → dysrhythmia/arrest", "Fluid overload → pulmonary edema", "Metabolic acidosis"]
  },
  table: {
    cols: ["Finding", "Why"],
    rows: [
      ["Fluid overload, edema, HTN, crackles", "Can't excrete Na⁺ and water"],
      ["Hyperkalemia", "Can't secrete K⁺ → dysrhythmia risk"],
      ["Metabolic acidosis", "Can't excrete H⁺ or regenerate HCO₃⁻; lungs compensate with fast, deep breathing"],
      ["Rising BUN and creatinine, confusion", "Wastes not filtered (uremia)"]
    ]
  },
  facts: [
    "Criteria (any ONE): creatinine ↑ ≥0.3 mg/dL within 48 hr; creatinine ≥1.5× baseline within 7 days; urine output <0.5 mL/kg/hr for ≥6 hr.",
    "Urine output goal ≥0.5 mL/kg/hr (on the test!). 80 kg → 40 mL/hr.",
    "Risks: age, pre-existing CKD, sepsis (huge), nephrotoxins: NSAIDs, aminoglycosides, iodinated contrast.",
    "Prerenal that lasts starves the tissue and becomes intrinsic (ATN).",
    "Severe AKI hits lungs, heart, brain, GI, liver.",
    "Prerenal → restore blood flow; postrenal → relieve the blockage."
  ],
  beyond: "Prerenal clue: BUN:creatinine >~20:1 with concentrated urine (kidney still saving water). ATN: lower ratio and dilute urine (tubules can't concentrate).",
  qa: [
    ["Prerenal vs. intrinsic vs. postrenal?", "Prerenal: blood flow before the kidney. Intrinsic: direct damage inside (ATN, GN, nephrotoxins, sepsis). Postrenal: blockage after the kidney creating back pressure."],
    ["How does ↓filtration affect urine and fluid?", "Less filtrate → oliguria; retained Na⁺ and water → edema, crackles, rapid weight gain."],
    ["What electrolyte changes occur?", "Hyperkalemia (can't secrete K⁺) and accumulating wastes."],
    ["Why metabolic acidosis?", "Kidneys can't excrete H⁺ or make/reabsorb HCO₃⁻; lungs breathe faster to compensate."],
    ["How does ↓perfusion injure the kidney?", "Initially only ↓GFR (prerenal); if prolonged, tubular cells starve and die (ATN)."]
  ]
},
{
  id: "ckd", sys: "kidney", name: "Chronic Kidney Disease",
  connect: ["Fluid & Electrolytes", "Acid-Base", "Chronic Tissue Injury"],
  summary: "Kidney damage or reduced function lasting at least 3 months. Most common causes: diabetes and hypertension.",
  chain: {
    mechanism: ["Nephrons lost (DM, HTN, GN, sickle cell)", "Survivors overwork → injured too → steady decline"],
    change: ["↓Na⁺/water excretion", "↓acid excretion", "↓EPO", "↓vitamin D activation + phosphate retention"],
    cues: ["Early: few or none", "Fatigue, anorexia, N/V, pruritus, cramps, cognitive changes", "Edema, HTN, anemia", "Uremic frost (very late)"],
    worst: ["Cardiovascular disease (HTN, dysrhythmias, atherosclerosis)", "Hyperkalemia", "ESRD (G5)"]
  },
  table: {
    cols: ["Lost function", "Result"],
    rows: [
      ["Na⁺ and water excretion", "Edema, hypertension"],
      ["Acid excretion", "Metabolic acidosis"],
      ["EPO production", "Anemia (fatigue, weakness)"],
      ["Vitamin D activation", "↓Ca²⁺ absorption + phosphate retention → bone loss"],
      ["Urea excretion", "Urea in sweat → uremic frost (very late)"],
      ["K⁺ excretion", "Hyperkalemia"]
    ]
  },
  facts: [
    "Diagnosis: eGFR <60 for ≥3 months and/or damage markers (albumin-to-creatinine ratio, proteinuria, hematuria) ≥3 months. CKD can exist with normal GFR.",
    "One abnormal value during acute illness is NOT CKD.",
    "eGFR >60 expected, 15–60 kidney disease, <15 kidney failure. Staging G1 → G5 (ESRD).",
    "Why CKD → heart disease: volume/BP up, anemia makes heart work harder, acidosis and K⁺ destabilize rhythm."
  ],
  beyond: "Low Ca²⁺ + high phosphate → secondary hyperparathyroidism → calcium pulled from bone (renal osteodystrophy). Low Ca²⁺ can cause tingling and cramps.",
  qa: [
    ["What happens as nephrons are lost?", "Remaining nephrons hyperfilter, preserving function at first, but the extra pressure damages them too."],
    ["Why metabolic acidosis?", "Too few nephrons to excrete the daily acid load or regenerate bicarbonate."],
    ["How does ↓EPO cause anemia?", "Less EPO signal to bone marrow → fewer RBCs → fatigue and extra cardiac work."],
    ["Vitamin D, calcium, phosphate, bone?", "Less calcitriol → less gut Ca²⁺ absorption; phosphate retained → mineral imbalance → bone weakens."]
  ]
},
{
  id: "gn", sys: "kidney", name: "Glomerulonephritis",
  connect: ["Immunity", "Inflammation", "Fluid Balance"],
  summary: "INFLAMED filter: immune complexes or antibodies attack the glomerulus. The infection does not infect the kidney; the inflammation does the damage.",
  chain: {
    mechanism: ["Immune complexes/antibodies deposit after infection (skin, viral) or autoimmune (lupus)"],
    change: ["Inflammation tears barrier and ↓filtration", "RBCs leak (hematuria), some protein", "Na⁺/water retained"],
    cues: ["Tea- or cola-colored urine, RBC casts", "Face/periorbital edema, worse in the morning", "Hypertension", "Rising creatinine"],
    worst: ["AKI → CKD", "Hyperkalemia, hyponatremia", "Cardiovascular disease"]
  },
  facts: [
    "RBC casts = bleeding from inside the kidney.",
    "Tests: urinalysis, proteinuria, creatinine, complement levels, evidence of recent infection, autoantibodies, hepatitis tests, biopsy if unclear."
  ],
  beyond: "Classic: post-streptococcal GN 1–3 weeks after strep pharyngitis or impetigo (another strep link).",
  qa: [
    ["How does an immune response damage glomeruli?", "Immune complexes or antibodies deposit in the barrier, often after infection or with lupus; inflammation does the damage."],
    ["How does inflammation affect filtration?", "The filter tears and swells: GFR drops, creatinine and wastes rise."],
    ["Why blood and protein in urine?", "The damaged barrier lets RBCs (cola urine, RBC casts) and some protein through."],
    ["Why edema and HTN?", "Less filtration → Na⁺ and water retention → volume overload."]
  ]
},
{
  id: "nephrotic", sys: "kidney", name: "Nephrotic Syndrome",
  connect: ["Glomerular Injury", "Fluid Balance"],
  summary: "LEAKY filter: holes too big, protein pours out. Minimal change disease is the classic cause in children.",
  chain: {
    mechanism: ["Damaged glomerular filtration barrier"],
    change: ["Heavy proteinuria (≥3.5 g/day)", "Hypoalbuminemia", "↓plasma oncotic pressure → fluid into tissues", "Body senses low volume → RAAS/ADH retain more", "Liver makes more lipids"],
    cues: ["Foamy urine", "Edema: legs, periorbital, abdomen", "Low albumin, high lipids", "BP often normal early"],
    worst: ["Clots (lost antithrombin III)", "Infection (lost immunoglobulins)", "Malnutrition"]
  },
  table: {
    cols: ["Finding", "Nephrotic (leaky)", "Glomerulonephritis (inflamed)"],
    rows: [
      ["Urine protein", "Heavy ≥3.5 g/day", "Mild to moderate"],
      ["Urine blood", "Minimal or none", "Hallmark: RBC casts"],
      ["Urine look", "Foamy", "Tea- or cola-colored"],
      ["Serum albumin", "Low", "Usually normal"],
      ["Lipids", "High", "Normal"],
      ["Blood pressure", "Often normal early", "Frequently high"],
      ["GFR/creatinine", "Preserved early", "Often declining"],
      ["Edema", "Legs, periorbital, abdomen", "Face/periorbital, worse AM"]
    ]
  },
  beyond: "Complications of protein loss: clots (antithrombin III lost → hypercoagulable, a Virchow link), infections, malnutrition.",
  qa: [
    ["Why heavy protein loss?", "The barrier becomes too permeable, so albumin pours into urine (foamy)."],
    ["Connect proteinuria → edema.", "Proteinuria → hypoalbuminemia → ↓plasma oncotic pressure → fluid leaks into tissues → edema."],
    ["How is circulating volume affected?", "Swollen tissues but LOW effective circulating volume inside the vessels."],
    ["How does the body respond?", "RAAS and ADH retain Na⁺ and water, which also leaks out, worsening edema."]
  ]
},

/* ===== URINARY / REPRO ===== */
{
  id: "cystitis", sys: "gu", name: "Cystitis (Lower UTI)",
  connect: ["Infection", "Immunity", "Inflammation"],
  summary: "E. coli (gut flora) is most common; bacteria near the urethral opening ascend. Urethra ~4 cm vs ~20 cm and close to the anus.",
  chain: {
    mechanism: ["Bacteria ascend urethra → adhere to and invade bladder mucosa"],
    change: ["Swollen, red, painful bladder lining", "Hypersensitive bladder"],
    cues: ["Dysuria, urgency, frequency", "Suprapubic pain, spasms", "Hematuria, cloudy or foul urine", "Older adults: new confusion, falls"],
    worst: ["Ascends to kidney (pyelonephritis) → sepsis"]
  },
  facts: [
    "Risks: female anatomy, intercourse (new partner), spermicide, family history, catheters, incomplete emptying, obstruction.",
    "Any male UTI = complicated. Young infants = more concerning.",
    "UA: pyuria, leukocyte esterase, nitrites. A NEGATIVE nitrite does not rule out infection (not all bacteria convert nitrate).",
    "Culture only if recurrent, unusual, or complicated.",
    "Bacteria in urine is not automatically a UTI; look for symptoms.",
    "Antibiotics treat the cause; urinary analgesics treat symptoms only."
  ],
  qa: [
    ["How do bacteria enter and ascend?", "From around the urethral opening (E. coli) up the urethra into the bladder, where they adhere and multiply."],
    ["Why dysuria, urgency, frequency?", "Inflamed bladder lining burns with urination and becomes hypersensitive, signaling need to void with little urine."],
    ["What raises UTI risk?", "Short urethra, intercourse, spermicide, history, catheters, incomplete emptying, obstruction (stasis)."],
    ["How does a lower UTI climb?", "Bacteria ascend a ureter to the kidney, easier with obstruction, stasis, reflux. New fever, chills, flank pain, vomiting = it climbed."]
  ]
},
{
  id: "pyelo", sys: "gu", name: "Pyelonephritis (Upper UTI)",
  connect: ["Infection", "Immunity", "Inflammation"],
  summary: "Infection of the renal pelvis and kidney tissue, usually ascending from the bladder. The kidney is highly vascular and filters blood, so it goes systemic.",
  chain: {
    mechanism: ["Bacteria ascend bladder → ureter → kidney (stasis, obstruction, reflux)"],
    change: ["Inflamed renal pelvis and parenchyma", "Body-wide inflammatory response", "Bacteria can seed blood"],
    cues: ["Flank pain, CVA tenderness", "Fever, chills, malaise, N/V", "Bladder symptoms may or may not be present"],
    worst: ["Sepsis → ↓renal perfusion → AKI (vicious cycle)", "Abscess, renal scarring"]
  },
  facts: [
    "Red flags: hypotension or falling urine output (poor perfusion, possible sepsis + AKI).",
    "Tests: CVA tenderness, UA (WBCs, bacteria), culture, blood tests (systemic response, kidney function); imaging only if obstruction or abscess suspected."
  ],
  table: {
    cols: ["", "Cystitis (lower)", "Pyelonephritis (upper)"],
    rows: [
      ["Route", "Ascend urethra → bladder mucosa", "Bladder → ureter → kidney"],
      ["Local cues", "Dysuria, urgency, frequency, suprapubic pain, hematuria", "Flank pain, CVA tenderness"],
      ["Systemic cues", "Not typical", "Fever, chills, malaise, N/V"],
      ["Complications", "Spread to kidney", "AKI, abscess, sepsis, scarring"]
    ]
  },
  qa: [
    ["How does infection reach the kidney?", "Usually ascending from the bladder through a ureter, helped by obstruction, stasis, reflux."],
    ["Why local AND systemic findings?", "Kidney inflammation = flank pain/CVA tenderness; systemic inflammatory response = fever, chills, N/V."],
    ["Why more systemic than cystitis?", "Infection is in a highly vascular organ that filters all the blood, not just the bladder lining."],
    ["How does it progress to sepsis?", "Bacteria enter blood; sepsis lowers BP and renal perfusion, worsening AKI."]
  ]
},
{
  id: "stones", sys: "gu", name: "Renal Calculi",
  connect: ["Fluid Balance", "Obstruction", "Inflammation"],
  summary: "Water, salt, and minerals out of balance → concentrated urine → crystals aggregate into a stone. Calcium oxalate/phosphate most common.",
  chain: {
    mechanism: ["Concentrated urine (low fluid, high salt/animal protein)", "Stone moves into ureter and blocks flow"],
    change: ["Pressure builds upstream; ureter stretches and spasms", "Stone scrapes lining", "Urine stasis behind it"],
    cues: ["Renal colic: sudden severe flank pain radiating to abdomen, groin, inner thigh", "Hematuria", "N/V, sweating", "Urgency/frequency near bladder"],
    worst: ["Hydronephrosis → postrenal AKI", "Infection behind the stone → sepsis"]
  },
  facts: [
    "Risks: male, low fluid intake, high salt and animal protein, diabetes/metabolic syndrome, family history, some meds.",
    "Types: calcium oxalate/phosphate, uric acid, struvite, cystine.",
    "Diagnostics: UA (blood, crystals), creatinine/BUN, CT or ultrasound.",
    "Small stones may pass; large ones may need lithotripsy."
  ],
  beyond: "Obstructed + infected kidney (stone + fever) is a urologic emergency. Struvite = chronic UTIs; uric acid = gout.",
  qa: [
    ["What causes stone formation?", "Imbalanced water/salt/minerals and concentrated urine let particles crystallize and aggregate."],
    ["How does concentration matter?", "Less water = same minerals in less urine = more likely to crystallize. Hydration keeps urine dilute."],
    ["How does obstruction cause pain and injury?", "Upstream pressure stretches the ureter (colic); persistent blockage → hydronephrosis → postrenal AKI."],
    ["Why infection risk?", "Trapped urine (stasis) lets bacteria multiply."]
  ]
},
{
  id: "bph", sys: "gu", name: "Benign Prostatic Hyperplasia",
  connect: ["Structural Changes", "Urinary Obstruction"],
  summary: "HYPERPLASIA = more cells (growth outpaces apoptosis) plus smooth muscle tone. Not inflammation. The urethra runs through the prostate.",
  chain: {
    mechanism: ["Age >60, hormones, diabetes, obesity → prostate cells multiply"],
    change: ["Urethra narrowed", "Bladder pushes harder → wall thickens", "Incomplete emptying → stasis"],
    cues: ["Hesitancy, weak/interrupted stream, straining", "Incomplete emptying", "Urgency, frequency, nocturia"],
    worst: ["Retention → UTI, stones", "Back pressure → hydronephrosis → postrenal AKI"]
  },
  facts: [
    "Size ≠ severity: location, muscle tone, and bladder response all matter.",
    "Diagnosis: symptom pattern, UA, prostate exam, post-void residual.",
    "Gradual onset; no fever (vs. acute prostatitis)."
  ],
  beyond: "Long-term obstruction can stretch the bladder until it can't contract well (overflow incontinence).",
  qa: [
    ["How does enlargement affect flow?", "Hyperplasia around the urethra narrows it; smooth muscle tone adds resistance."],
    ["How does obstruction explain symptoms?", "Hesitancy, weak stream, straining; over time bladder wall changes cause urgency, frequency, nocturia."],
    ["Why stasis and infection?", "Residual urine sits still so bacteria multiply (UTI) and stones form."],
    ["How could it hurt the kidneys?", "Severe obstruction backs pressure up the ureters → hydronephrosis → postrenal AKI."]
  ]
},
{
  id: "prostatitis", sys: "gu", name: "Prostatitis",
  connect: ["Infection", "Inflammation"],
  summary: "Acute = usually bacterial (E. coli), often after catheterization or procedures. Chronic = persistent/recurrent, not always bacterial.",
  chain: {
    mechanism: ["Bacteria invade prostate (acute)", "Persistent infection, inflammation, or pelvic floor dysfunction (chronic)"],
    change: ["Prostate inflamed and swollen", "Urethra squeezed"],
    cues: ["Acute: sudden fever, chills, malaise, dysuria, frequency, pelvic/perineal pain, retention", "Chronic: pelvic pain, recurrent UTIs, pain with ejaculation"],
    worst: ["Urinary retention", "Sepsis"]
  },
  table: {
    cols: ["", "BPH", "Acute bacterial prostatitis", "Chronic prostatitis"],
    rows: [
      ["Process", "Hyperplasia; not inflammation", "Bacterial invasion, swelling", "Persistent infection/inflammation or pelvic floor"],
      ["Onset", "Gradual", "Sudden", "Persistent"],
      ["Cues", "Hesitancy, weak stream, nocturia", "Fever, chills, dysuria, perineal pain", "Pelvic pain, recurrent UTIs, pain with ejaculation"],
      ["Complications", "Retention, UTI, stones, postrenal AKI", "Retention, sepsis", "Quality of life"]
    ]
  },
  beyond: "Acute bacterial prostatitis usually gives a very tender, swollen, warm prostate on exam.",
  qa: [
    ["When is infection involved?", "Acute is usually bacterial (E. coli, after catheter/procedure). Chronic may be bacterial, inflammatory, or pelvic floor dysfunction."],
    ["How does inflammation produce symptoms?", "Swelling causes pelvic/perineal pain and irritates the urethra and bladder (dysuria, frequency)."],
    ["How does swelling affect flow?", "The swollen prostate squeezes the urethra: hesitancy, difficulty voiding, retention."],
    ["How does it go systemic?", "Infection spreads to blood (sepsis); retention adds stasis and more infection."]
  ]
}
];

window.EMERGENCIES = [
  ["Tension pneumothorax", "resp", "Tracheal deviation away from injured side, JVD, hypotension, absent breath sounds one side", "Mediastinal shift compresses vena cava → obstructive shock. Treat before X-ray."],
  ["Status asthmaticus", "resp", "No response to meds, confusion, extreme fatigue, rising CO₂", "Air trapping → hypercapnic respiratory failure"],
  ["Pulmonary embolism", "card1", "Sudden dyspnea, pleuritic pain, tachycardia, doom, hemoptysis; JVD + hypotension = RV failure", "Dead space + RV failure → obstructive shock"],
  ["Hemothorax / aneurysm rupture", "card1", "Hypotension, tachycardia, cool clammy skin, falling H&H", "Hypovolemic shock"],
  ["MI / unstable angina", "card2", "Chest pain at rest or >20 min, diaphoresis, nausea; atypical in women; rising troponin", "Necrosis + dysrhythmias + pump failure"],
  ["Hypertensive emergency", "card1", "BP >180/120 + organ damage (confusion, chest pain, pulmonary edema, low urine)", "Endothelial necrosis in vital organs"],
  ["Acute arterial occlusion", "card1", "6 P's, especially new paresthesia/paralysis", "Limb loss"],
  ["AFib with RVR / stroke", "card2", "Fast irregular pulse, hypotension; new weakness or speech change", "↓CO; embolic stroke"],
  ["Acute decompensated HF", "card2", "Pink frothy sputum, crackles, orthopnea, rapid weight gain", "Pulmonary edema"],
  ["Hyperkalemia in AKI", "kidney", "Oliguria, rising creatinine, bradycardia/dysrhythmia", "Cardiac arrest"],
  ["Pyelonephritis / prostatitis → sepsis", "gu", "Fever, chills, flank pain, then hypotension and falling urine output", "Septic shock + AKI"],
  ["Sinus infection spreading to brain", "resp", "Severe headache, vision change, altered mental status", "CNS infection"]
];

window.LOOKALIKES = [
  ["Viral vs. bacterial pneumonia", "Viral: gradual, dry cough, bilateral infiltrates, normal WBC. Bacterial: abrupt, high fever, purulent/rust sputum, one-sided consolidation, high WBC."],
  ["Acute bronchitis vs. pneumonia", "Bronchitis: CXR negative, mild, no hypoxia. Pneumonia: consolidation, hypoxia, shunt."],
  ["Asthma vs. COPD", "Asthma: reversible, episodic, wheeze, any age. COPD: irreversible, progressive, smoker, barrel chest, clubbing, chronic high CO₂."],
  ["Latent vs. active TB", "Both test positive. Latent: no symptoms, not contagious. Active: fever, night sweats, weight loss, contagious."],
  ["Pneumothorax vs. hemothorax", "Pneumo: hyperresonant, air at top. Hemo: dull, fluid at base, hypovolemia."],
  ["Spontaneous vs. tension pneumothorax", "Tension adds JVD, hypotension, tracheal deviation."],
  ["PAD vs. CVI", "No pulse, pale, hairless, toe ulcers vs. edema, brown skin, weepy ankle ulcers."],
  ["DVT vs. CVI", "DVT: one leg, sudden, warm, red, tender. CVI: both legs, chronic, brown, brawny."],
  ["Stable vs. unstable angina vs. MI", "Exertion, relieved by rest vs. at rest or >20 min vs. troponin elevated."],
  ["MI vs. pericarditis", "Pericarditis: positional pain better leaning forward, PR depression, normal troponin, recent virus, young."],
  ["Myocarditis vs. pericarditis", "Myocarditis: troponin up, HF signs, dysrhythmias. Pericarditis: troponin normal, friction rub."],
  ["Left vs. right HF", "Left: lungs (crackles, orthopnea, PND, frothy sputum). Right: body (JVD, edema, ascites, weight gain)."],
  ["Systolic vs. diastolic HF", "EF ≤40% thin dilated vs. EF ≥50% thick stiff."],
  ["DCM vs. HCM vs. RCM", "Thin and weak vs. thick septum and sudden death in young athletes vs. rigid, big atria, worst prognosis."],
  ["AFib vs. atrial flutter", "Irregularly irregular, no P waves vs. sawtooth, regular or predictably irregular."],
  ["Stenosis vs. regurgitation", "Won't open, pressure overload, hypertrophy vs. won't close, volume overload, dilation."],
  ["Prerenal vs. intrinsic vs. postrenal AKI", "Blood flow vs. tissue damage vs. blockage."],
  ["AKI vs. CKD", "Days vs. ≥3 months; CKD adds anemia, bone disease, uremic frost."],
  ["Nephrotic vs. glomerulonephritis", "Foamy urine, very low albumin, high lipids vs. cola urine, RBC casts, HTN, rising creatinine."],
  ["Cystitis vs. pyelonephritis", "Local bladder symptoms vs. flank pain, CVA tenderness, fever, chills, vomiting."],
  ["BPH vs. prostatitis", "Gradual obstruction in older men vs. fever, perineal pain (acute) or pain with ejaculation (chronic)."],
  ["Renal colic vs. pyelonephritis", "Colic: sudden severe pain radiating to groin, hematuria, no fever unless infected. Pyelo: fever, chills, steady flank pain."]
];
