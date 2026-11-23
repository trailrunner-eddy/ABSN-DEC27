/* Neuro unit for the Patho Final guide (loads after data-heme.js).
   Built from the three neuro Final lectures (Structure and Function of the Neurological System,
   Diseases of the Central Nervous System, Diseases of the Autonomic Nervous System; Prof. Mortensen),
   their transcripts and slides, and the instructor's 340 Final Exam Study Guide.
   Everything is appended so saved progress keeps its place. */
(function () {
  function add(k) { var a = window[k] = window[k] || []; a.push.apply(a, [].slice.call(arguments, 1)); }

  add("SYSTEMS",
    { id: "nsf", name: "Nervous System Structure, Perfusion & ICP", short: "Neuro Basics & ICP", icon: "🧠", weight: "Structure and Function of the Neurological System lecture + CNS intro" },
    { id: "ndeg", name: "Neurodegenerative Disorders", short: "Parkinson's, MS, ALS", icon: "🧓", weight: "Diseases of the CNS lecture" },
    { id: "ninf", name: "CNS Infections", short: "Meningitis & Encephalitis", icon: "🦠", weight: "Diseases of the CNS lecture" },
    { id: "cvd", name: "Cerebrovascular Disorders", short: "TIA, Stroke, Aneurysm", icon: "🚑", weight: "Diseases of the CNS lecture" },
    { id: "ntr", name: "Neuro Trauma & Seizures", short: "TBI, SCI, Seizures", icon: "⚡", weight: "Diseases of the CNS lecture" },
    { id: "ans", name: "Autonomic Nervous System", short: "Autonomic", icon: "🔁", weight: "Diseases of the Autonomic Nervous System lecture" }
  );

  add("EMPHASIS",
    "Neuro: the most sensitive early cue for almost every CNS problem is a change in level of consciousness (restlessness, irritability, subtle confusion).",
    "The skull is a rigid box (Monro-Kellie): if blood, brain, or CSF grows, something else must shrink or ICP rises and perfusion falls.",
    "CPP = MAP − ICP. The brain needs a CPP of at least 60 mm Hg; neurons can't store glucose or run on anaerobic metabolism.",
    "Cushing's triad (rising systolic BP with a widening pulse pressure, bradycardia, irregular respirations) is a late sign of impending herniation.",
    "In neurodegenerative disease the brain damage rarely ends the life; the systemic fallout does: dysphagia → aspiration pneumonia, respiratory muscle failure → respiratory acidosis.",
    "Fever, headache, and a stiff neck = treat as meningitis until proven otherwise. Cloudy CSF with low glucose = bacterial.",
    "TIA symptoms resolve completely (usually within 15–60 minutes) with no infarct, but 10–15% have a major stroke within 90 days: it's the brain's unstable angina.",
    "Any BE FAST sign = time matters: CT first to tell ischemic from hemorrhagic. 'Worst headache of my life' = think hemorrhage or ruptured aneurysm.",
    "Diabetic autonomic neuropathy comes from chronic hyperglycemia, can't be reversed, and causes resting tachycardia, orthostatic hypotension, silent MI, gastroparesis, neurogenic bladder, and anhidrosis."
  );

  add("CRITICAL_THINKING",
    ["Neuro: where is the problem, and is pressure rising?", "Locate the lesion (cerebrum, cerebellum, brainstem, cord, peripheral nerve) to predict the deficits. Then ask whether anything is adding volume inside the skull (blood, edema, CSF, inflammation). If so, watch LOC first, then pupils, then Cushing's triad."],
    ["Neurodegeneration: which cell or substance is lost?", "Parkinson's = dopamine neurons (movement). MS = myelin, by autoimmune T cells (conduction, relapses). ALS = upper and lower motor neurons (strength, swallowing, breathing; sensation and thinking spared)."]
  );

  add("STRATEGY",
    ["Neuro: LOC is the first vital sign", "Restlessness, irritability, or new confusion comes before pupil changes and long before Cushing's triad. A falling GCS (normal 15; 8 or less is severe) outranks a stable chronic deficit."],
    ["Stroke questions: time and type", "Sudden one-sided deficits = stroke until proven otherwise. CT comes first to rule out bleeding. Thunderclap headache, nuchal rigidity, and vomiting point to hemorrhage or a ruptured aneurysm."]
  );

  add("DISORDERS",
  /* ===== STRUCTURE, PERFUSION & ICP ===== */
  {
    id: "nsfn", sys: "nsf", name: "Nervous System Structure & Function",
    connect: ["Neural Communication", "Electrolytes", "Acid-Base"],
    summary: "The nervous system does three things: sensory input, integration, and motor output. Neurons carry signals; glial cells protect, nourish, and insulate them. A neuron rests with a negative charge kept by the Na⁺/K⁺ pump; past threshold, sodium rushes in (depolarization), potassium leaves (repolarization), and calcium entry at the axon terminal releases neurotransmitter. Myelin speeds conduction by letting the signal jump between nodes of Ranvier. The CNS (brain and spinal cord) integrates; the PNS (12 cranial and 31 spinal nerve pairs) carries messages in (afferent) and out (efferent).",
    chain: {
      mechanism: ["Neurons: dendrites receive, cell body processes, axon sends", "Glia: astrocytes (blood-brain barrier), oligodendrocytes (CNS myelin), Schwann cells (PNS myelin), microglia (immune cells)", "Na⁺/K⁺ pump keeps resting potential; Na⁺ in = depolarization; Ca²⁺ in → neurotransmitter release"],
      change: ["Myelin loss → slowed or failed conduction (MS)", "Neurotransmitter imbalance → movement disorders (Parkinson's) or overexcitation (seizures)", "Electrolyte or acid-base shifts change how excitable neurons are"],
      cues: ["Hyponatremia → cerebral edema, confusion, seizures", "Hypernatremia → cellular dehydration, lethargy", "Acidosis → depressed neural activity; alkalosis → hyperexcitability, seizures"],
      worst: ["Seizures, coma, herniation from brain swelling", "Permanent deficits: mature CNS neurons don't divide to replace dead cells"]
    },
    table: { cols: ["Brain region", "Main job", "Damage looks like"], rows: [
      ["Frontal lobe", "Executive function, personality, judgment, voluntary motor, speech production", "Personality change, poor judgment, weakness, expressive aphasia"],
      ["Parietal lobe", "Touch, pain, temperature, spatial awareness", "Numbness, neglect, poor spatial awareness"],
      ["Temporal lobe", "Hearing, memory (hippocampus), language comprehension", "Memory loss, receptive aphasia"],
      ["Occipital lobe", "Vision", "Visual field loss"],
      ["Cerebellum", "Balance, coordination, fine motor control", "Ataxia, unsteady gait"],
      ["Brainstem", "Vital centers: breathing, HR, BP, consciousness, cough and swallow reflexes, cranial nerves", "Abnormal breathing, loss of consciousness, absent protective reflexes"],
      ["Spinal cord", "Ascending sensory and descending motor tracts; the highway between brain and body", "Loss of movement and sensation below the injury"]
    ] },
    tableTitle: "Where the damage is predicts the deficit",
    facts: [
      "Somatic nervous system = voluntary: one heavily myelinated neuron from cord to skeletal muscle, always releasing acetylcholine onto nicotinic receptors.",
      "Autonomic nervous system = involuntary: two-neuron chain (preganglionic → ganglion → postganglionic) to heart, smooth muscle, glands. Sympathetic and parasympathetic; neurotransmitters norepinephrine and acetylcholine.",
      "CNS protection: bone (skull, vertebrae), meninges (dura, arachnoid, pia), and CSF (cushions, removes waste, keeps a stable ionic environment).",
      "Motor tracts cross, so the left brain controls the right side of the body.",
      "CO₂ directly dilates cerebral vessels: high CO₂ → more blood in the skull → higher ICP.",
      "Neuroplasticity: surviving neurons strengthen used pathways, sprout collaterals, and let nearby cortex take over lost function. That is why serial neuro assessments can show recovery over days to weeks."
    ],
    qa: [["What keeps a neuron's resting potential negative?", "The Na⁺/K⁺ pump."],
         ["Why does myelin loss slow signals?", "Myelin lets the impulse jump between nodes of Ranvier (saltatory conduction). Without it the signal slows, scatters, or fails."],
         ["Why can hyponatremia cause confusion and seizures?", "Low serum sodium pulls free water into brain cells by osmosis → cerebral edema."]]
  },
  {
    id: "cperf", sys: "nsf", name: "Cerebral Perfusion, Monro-Kellie & CPP", star: true, starText: "CPP = MAP − ICP",
    connect: ["Perfusion", "Acid-Base", "Fluid Balance"],
    summary: "The brain is about 2% of body weight but uses 15–20% of cardiac output and 20% of the body's oxygen. Neurons can't store glucose or run on anaerobic metabolism, so flow must be continuous: within 10–15 seconds of no flow consciousness is lost, and within 3–5 minutes ATP runs out and neurons start to die. Blood arrives through the internal carotids (front) and vertebral arteries (back), joined by the circle of Willis. Inside the rigid skull are brain (about 80%), blood (10%), and CSF (10%). If one grows, another must shrink or ICP rises (Monro-Kellie).",
    chain: {
      mechanism: ["Internal carotid + vertebral arteries → circle of Willis (collateral flow)", "Autoregulation: arterioles constrict or dilate to keep flow steady across a MAP of about 60–150 mm Hg", "Fixed skull volume: brain 80%, blood 10%, CSF 10%"],
      change: ["Extra volume (bleed, edema, tumor, CSF blockage) → ICP rises", "CPP = MAP − ICP: rising ICP or falling MAP lowers CPP", "Below a CPP of 60 mm Hg → cerebral ischemia"],
      cues: ["Early: change in LOC, headache, vomiting, sluggish pupils", "Late: Cushing's triad, posturing, fixed dilated pupils"],
      worst: ["Herniation of brain tissue down onto the brainstem → brain death", "Ischemic neuronal death within minutes of no flow"]
    },
    table: { cols: ["Value", "Normal", "Meaning"], rows: [
      ["ICP", "5–15 mm Hg", "Pressure inside the skull"],
      ["CPP (MAP − ICP)", "60–100 mm Hg", "Below 60 → ischemia"],
      ["Autoregulation range (MAP)", "about 60–150 mm Hg", "Outside it, brain flow follows BP passively"],
      ["Brain's share", "2% of weight, 15–20% of cardiac output, 20% of O₂", "Huge, constant demand"]
    ] },
    tableTitle: "Perfusion numbers to know",
    facts: [
      "Example: MAP 70 mm Hg − ICP 25 mm Hg = CPP 45 mm Hg → the brain is underperfused.",
      "Retained CO₂ (respiratory acidosis) dilates cerebral vessels, flooding the skull with blood and raising ICP.",
      "A rapid drop in sodium pulls water into brain cells → cerebral edema.",
      "Blood-brain barrier (astrocytes) keeps many substances out; inflammation and acidosis break it down → edema."
    ],
    qa: [["State the Monro-Kellie doctrine.", "The skull is a fixed box of brain, blood, and CSF. If one increases, another must decrease or ICP rises."],
         ["What is the minimum CPP needed to prevent ischemia?", "60 mm Hg."],
         ["Why does the brain tolerate interrupted flow so poorly?", "Neurons can't store glucose or glycogen and can't sustain anaerobic metabolism; ATP is gone within 3–5 minutes."]]
  },
  {
    id: "icp", sys: "nsf", name: "Increased Intracranial Pressure", star: true, starText: "LOC changes first; Cushing's triad is late",
    connect: ["Perfusion", "Inflammation", "Fluid Balance"],
    summary: "Many CNS disorders (stroke, hemorrhage, TBI, meningitis, encephalitis) add volume inside the skull. Once the brain can't compensate, ICP rises and cerebral perfusion falls. Early signs come from a struggling cortex: restlessness, irritability, subtle confusion, headache that worsens with coughing or straining, vomiting without nausea, and sluggish pupils. Late signs mean the brainstem is being compressed: Cushing's triad, posturing, fixed dilated pupils, and a GCS of 8 or less.",
    chain: {
      mechanism: ["Bleeding, edema, inflammation, tumor, or blocked CSF adds volume", "Compensation (shifting CSF and venous blood out) runs out"],
      change: ["ICP rises above 15 mm Hg", "CPP falls → ischemia → more edema → higher ICP (vicious cycle)", "Brain tissue shifts toward the brainstem"],
      cues: ["Early: altered LOC (most sensitive), headache worse with straining or coughing, projectile vomiting without nausea, sluggish pupils", "Late: Cushing's triad, decorticate or decerebrate posturing, fixed and dilated ('blown') pupils, GCS 8 or less"],
      worst: ["Brain herniation → brainstem compression → respiratory arrest and brain death"]
    },
    table: { cols: ["Early", "Late"], rows: [
      ["Restlessness, irritability, subtle confusion", "Cushing's triad: rising systolic BP with widening pulse pressure, bradycardia, irregular respirations"],
      ["Decreasing GCS", "GCS 8 or less"],
      ["Headache, worse with straining or coughing", "Posturing: decorticate (flexion toward the core) or decerebrate (extension away)"],
      ["Vomiting, often projectile, without nausea", "Fixed, dilated (blown) pupils"],
      ["Sluggish pupil response", "Loss of brainstem reflexes"]
    ] },
    tableTitle: "Early vs. late signs of increased ICP",
    facts: [
      "Glasgow Coma Scale: best score 15 (normal); 8 or less is severe.",
      "Coughing and straining raise ICP, which is why the headache worsens with them.",
      "Cushing's triad signals impending herniation: a clinical emergency.",
      "Edema after a stroke or injury peaks 24–72 hours later, so ICP can spike in that window."
    ],
    qa: [["What is the earliest and most sensitive sign of rising ICP?", "A change in level of consciousness (restlessness, irritability, subtle confusion)."],
         ["Name the three parts of Cushing's triad.", "Systolic hypertension with a widening pulse pressure, bradycardia, and irregular respirations."],
         ["Decorticate vs. decerebrate posturing?", "Decorticate = flexion toward the core. Decerebrate = extension away from the core (worse)."]]
  },
  /* ===== NEURODEGENERATIVE ===== */
  {
    id: "parkinsons", sys: "ndeg", name: "Parkinson's Disease", star: true, starText: "Dopamine loss leaves acetylcholine unopposed",
    connect: ["Neurotransmitters", "Motor Control", "Neurodegeneration"],
    summary: "Parkinson's is a progressive, irreversible loss of dopamine-producing neurons in the midbrain (substantia nigra), with misfolded protein clumps called Lewy bodies. Normally dopamine and acetylcholine balance each other in the basal ganglia to smooth voluntary movement. With dopamine gone, acetylcholine runs unopposed, causing excess excitatory output and rigidity. It starts with a resting tremor and progresses to slow, stiff, uncoordinated movement, shuffling gait, falls, dysphagia, and cognitive decline.",
    chain: {
      mechanism: ["Idiopathic mostly; advanced age, male sex, genetic mutations, long-term environmental toxin exposure", "Dopaminergic neurons of the midbrain die; Lewy bodies accumulate"],
      change: ["Less dopamine in the basal ganglia", "Acetylcholine unopposed → excess excitatory output", "Basal ganglia can't smooth or start movement"],
      cues: ["Resting pill-rolling tremor (often first)", "Bradykinesia, rigidity, reduced arm swing, masked face", "Shuffling gait, stooped posture, impaired postural reflexes → falls", "Non-motor: mood change, memory loss, sleep disturbance, autonomic dysfunction"],
      worst: ["Dysphagia → aspiration pneumonia", "Falls with injury; cognitive impairment, incontinence, loss of independence"]
    },
    table: { cols: ["Sign", "Why"], rows: [
      ["Resting tremor (pill-rolling)", "Without dopamine the basal ganglia can't inhibit oscillating motor signals at rest"],
      ["Bradykinesia and rigidity", "Loss of dopamine's motor facilitation → slow, stiff, uncoordinated movement"],
      ["Shuffling gait, falls", "Impaired postural reflexes and balance"],
      ["Masked face, dysphagia", "Fine motor control of facial and pharyngeal muscles lost"]
    ] },
    tableTitle: "Linking dopamine loss to the signs",
    facts: [
      "Diagnosis is clinical: history and neurologic exam. Dopamine transporter imaging can help; MRI rules out structural causes.",
      "Progressive: tremor first, then gait changes, then dysphagia, cognitive impairment, incontinence, and growing need for ADL help.",
      "Lecture rule: the systemic fallout (aspiration, falls) usually ends the life, not the brain damage itself."
    ],
    qa: [["Which neurotransmitter is lost in Parkinson's, and which becomes unopposed?", "Dopamine is lost; acetylcholine becomes unopposed."],
         ["What is usually the first sign?", "A resting (pill-rolling) tremor."],
         ["Why is a client with late Parkinson's at risk for pneumonia?", "Dysphagia from impaired pharyngeal muscle control → aspiration."]]
  },
  {
    id: "ms", sys: "ndeg", name: "Multiple Sclerosis (MS)", star: true, starText: "Autoimmune demyelination; worse with heat",
    connect: ["Autoimmunity", "Hypersensitivity", "Neural Communication"],
    summary: "MS is a chronic autoimmune (type IV, T-cell–mediated hypersensitivity) disease of the CNS. Activated T cells cross a leaky blood-brain barrier and attack oligodendrocytes and myelin, leaving patchy demyelination, cut axons, and hardened scar plaques in the brain, optic nerves, and spinal cord. Without myelin, saltatory conduction fails, so signals slow, scatter, or stop, especially when body temperature rises. Symptoms depend on where the plaques are: weakness and spasticity, numbness and tingling, blurred vision with eye pain, bladder problems.",
    chain: {
      mechanism: ["Genetic susceptibility + environmental trigger (low vitamin D, prior Epstein-Barr virus)", "Activated T cells cross the blood-brain barrier and attack myelin and oligodendrocytes"],
      change: ["Patchy demyelination, axon damage, scar plaques", "Saltatory conduction lost → slowed or failed signals", "Heat further impairs damaged sodium channels"],
      cues: ["Spasticity and weakness (upper motor neuron damage → hyperactive reflexes)", "Paresthesias (numbness, tingling)", "Blurred vision and eye pain (optic neuritis)", "Symptoms worse with heat; bladder dysfunction; fatigue"],
      worst: ["Progressive disability: weakness, loss of bladder control", "Breathing difficulty, higher cardiovascular risk"]
    },
    table: { cols: ["Test", "Finding"], rows: [
      ["MRI of brain and spine", "Demyelinating plaques or lesions (the main test)"],
      ["Lumbar puncture (CSF)", "Elevated IgG index and oligoclonal bands (IgG antibody bands)"],
      ["McDonald criteria", "Combine clinical exam, MRI, and sometimes CSF to make the official diagnosis"]
    ] },
    tableTitle: "Diagnosing MS",
    facts: [
      "More common in females (about 3:1); onset usually 20–40 years old.",
      "Other autoimmune disorders, low vitamin D, and prior Epstein-Barr infection raise risk.",
      "Course is relapsing and progressive: inflammation flares cause relapses; accumulating axon loss causes lasting disability [standard content].",
      "Classic type IV (cell-mediated) hypersensitivity against self-antigens."
    ],
    qa: [["What does the immune system attack in MS?", "Myelin and the oligodendrocytes that make it, in the CNS."],
         ["Why do MS symptoms worsen with a hot shower or fever?", "Heat alters already-damaged sodium channels, further blocking conduction along demyelinated axons."],
         ["Which CSF finding supports MS?", "Oligoclonal bands and an elevated IgG index."]]
  },
  {
    id: "als", sys: "ndeg", name: "Amyotrophic Lateral Sclerosis (ALS)", star: true, starText: "Motor only: sensation and thinking spared",
    connect: ["Motor Neurons", "Respiratory Acidosis", "Aspiration"],
    summary: "ALS (Lou Gehrig's disease) destroys both upper and lower motor neurons, sparing sensory, cognitive, and eye-movement pathways. Muscles lose their nerve signals, so they weaken, twitch, stiffen, and shrink. Walking, speaking, swallowing, and finally breathing fail. Lower motor neuron loss in the phrenic nerve paralyzes the diaphragm, trapping CO₂: respiratory failure and acidosis are the main cause of death.",
    chain: {
      mechanism: ["About 90% sporadic (unknown cause), about 10% familial", "Risk: age 40–60, male, smoking, head trauma (military service), toxins or heavy metals"],
      change: ["Upper motor neuron loss → no inhibition of spinal reflexes", "Lower motor neuron loss → muscle denervation", "Phrenic nerve degeneration → diaphragm paralysis"],
      cues: ["Lower motor neuron: weakness, atrophy, fasciculations (twitching)", "Upper motor neuron: hyperreflexia, spasticity, positive Babinski", "Slurred speech, dysphagia, drooling", "Sensation, thinking, and eye movement intact"],
      worst: ["Aspiration pneumonia", "Respiratory failure with CO₂ retention (respiratory acidosis): the primary cause of death"]
    },
    table: { cols: ["Neuron lost", "Signs"], rows: [
      ["Upper motor neuron (brain → cord)", "Spasticity, hyperreflexia, positive Babinski"],
      ["Lower motor neuron (cord → muscle)", "Weakness, atrophy, fasciculations"],
      ["Bulbar (brainstem) motor neurons", "Slurred speech, dysphagia, drooling, aspiration"],
      ["Phrenic nerve", "Diaphragm weakness → hypoventilation → respiratory acidosis"]
    ] },
    tableTitle: "Upper + lower motor neuron disease",
    facts: [
      "Gold standard: electromyography (EMG) and nerve conduction studies showing widespread denervation with normal sensory conduction.",
      "MRI rules out cord compression or tumor; pulmonary function tests track breathing over time.",
      "Unlike MS or diabetic neuropathy, ALS doesn't cause numbness: sensory pathways are spared."
    ],
    qa: [["How does ALS differ from disorders that mainly affect sensation?", "It destroys motor neurons only; sensation, cognition, and eye movements stay intact."],
         ["What usually causes death in ALS?", "Respiratory failure: diaphragm paralysis traps CO₂ (respiratory acidosis); aspiration pneumonia contributes."],
         ["Name a lower motor neuron sign and an upper motor neuron sign.", "Lower: atrophy or fasciculations. Upper: hyperreflexia, spasticity, positive Babinski."]]
  },
  /* ===== CNS INFECTIONS ===== */
  {
    id: "meningitis", sys: "ninf", name: "Meningitis", star: true, starText: "Bacterial = cloudy CSF, low glucose",
    connect: ["Infection", "Inflammation", "ICP"],
    summary: "Meningitis is inflammation of the meninges, the coverings of the brain and cord. Pathogens cross the blood-brain barrier and multiply in nutrient-rich CSF; neutrophils flood the subarachnoid space and release cytokines, making purulent exudate, cerebral edema, and blocked CSF reabsorption, so ICP rises. Bacterial meningitis (Streptococcus pneumoniae, Haemophilus influenzae) is far more dangerous than viral (enteroviruses, HSV-2). Classic triad: high fever, severe headache, nuchal rigidity.",
    chain: {
      mechanism: ["Bacterial: S. pneumoniae (vaccine-preventable), H. influenzae", "Viral: enteroviruses, HSV-2", "Risks: crowded living (dorms, barracks), immunosuppression, skull fracture, ear infection, sinusitis"],
      change: ["Pathogens cross the blood-brain barrier and multiply in CSF", "Neutrophils and cytokines → purulent exudate", "Cerebral edema + impaired CSF reabsorption → ICP rises", "Brain inflammation can trigger excess ADH → water retention → dilutional hyponatremia → more edema"],
      cues: ["Triad: high fever, severe headache, nuchal rigidity", "Photophobia, nausea and vomiting", "Kernig sign (pain resisting knee extension with hip flexed); Brudzinski sign (hips and knees flex when the neck is flexed)", "Petechial rash (especially meningococcal)", "Altered LOC as ICP rises"],
      worst: ["Increased ICP and herniation", "Septic shock, seizures, death (bacterial)"]
    },
    table: { cols: ["CSF", "Normal", "Bacterial", "Viral meningitis / encephalitis"], rows: [
      ["Opening pressure", "10–20 cm H₂O", "Elevated (above 25)", "Normal to mildly elevated"],
      ["Appearance", "Clear, colorless", "Cloudy, purulent", "Clear"],
      ["WBC", "0–5 cells/µL", "Above 1,000, neutrophils", "10–500, lymphocytes"],
      ["Glucose", "50–80 mg/dL", "Low (below 40): bacteria consume it", "Normal"],
      ["Protein", "15–45 mg/dL", "Elevated (above 100)", "Normal to mildly elevated"]
    ] },
    tableTitle: "CSF analysis (from the lecture slide)",
    facts: [
      "Lumbar puncture with CSF analysis is the key test; also blood cultures, PCR, brain MRI.",
      "Suspected meningitis is treated as meningitis until proven otherwise.",
      "Photophobia means light sensitivity, not fear of light.",
      "Ears and sinuses sit close to the meninges, so their infections can spread across easily."
    ],
    beyond: "The lecture called Brudzinski sign 'budinsky' in the recording; Brudzinski is the neck-flexion sign, and Babinski is the toe reflex seen in upper motor neuron damage.",
    qa: [["What is the classic triad of meningitis?", "High fever, severe headache, nuchal rigidity."],
         ["Why is CSF glucose low in bacterial meningitis?", "The bacteria consume it."],
         ["Bacterial vs. viral CSF appearance and WBC type?", "Bacterial: cloudy, neutrophils. Viral: clear, lymphocytes."]]
  },
  {
    id: "encephalitis", sys: "ninf", name: "Encephalitis", star: true, starText: "Brain tissue itself: think FLAMES",
    connect: ["Infection", "Inflammation", "Seizures"],
    summary: "Encephalitis is inflammation of the brain tissue itself. Pathogens, mostly viruses (HSV-1, West Nile, enteroviruses, rabies), directly invade neurons, causing cell death, hemorrhage, and diffuse cerebral edema. Because the cortex is involved, altered mental status, personality and behavior change, and seizures dominate. It's worked up and cared for like meningitis until the cause is known.",
    chain: {
      mechanism: ["Viral: HSV-1, West Nile virus, enteroviruses, rabies", "Risks: mosquito or tick exposure, very young or very old, immunocompromised"],
      change: ["Virus invades neural cells → neuronal death", "Hemorrhage and diffuse cerebral edema (HSV: temporal lobe)", "ICP rises"],
      cues: ["FLAMES: Flu-like symptoms, Loss of consciousness, Acute headache, Memory problems, Emotional/behavior changes, Seizures", "Fever; confusion, lethargy, personality change, coma"],
      worst: ["Increased ICP, herniation", "Status epilepticus; permanent cognitive deficits"]
    },
    table: { cols: ["", "Meningitis", "Encephalitis"], rows: [
      ["What's inflamed", "Meninges (coverings)", "Brain tissue (neurons)"],
      ["Usual cause", "Bacterial or viral", "Mostly viral (HSV-1)"],
      ["Hallmark", "Fever, headache, stiff neck", "Altered mental status, behavior change, seizures"],
      ["CSF", "Bacterial: cloudy, neutrophils, low glucose", "Clear, lymphocytes, normal glucose"],
      ["MRI", "May be normal early", "Temporal lobe edema or hemorrhage (HSV)"]
    ] },
    tableTitle: "Meningitis vs. encephalitis",
    facts: [
      "Diagnostics are the same as meningitis: LP with CSF analysis, blood cultures, viral PCR, brain MRI.",
      "Fever is expected because it's an infection."
    ],
    qa: [["How do meningitis and encephalitis differ in the structures affected?", "Meningitis inflames the meninges; encephalitis inflames the brain tissue itself."],
         ["What does FLAMES stand for?", "Flu-like symptoms, Loss of consciousness, Acute headache, Memory problems, Emotional or behavior changes, Seizures."],
         ["Most common viral cause of encephalitis in the lecture?", "HSV-1."]]
  },
  /* ===== CEREBROVASCULAR ===== */
  {
    id: "tia", sys: "cvd", name: "Transient Ischemic Attack (TIA)", star: true, starText: "Resolves fully, no infarct, but a warning",
    connect: ["Perfusion", "Atherosclerosis", "Clotting"],
    summary: "A TIA is a brief episode of focal neurologic dysfunction from brain, spinal cord, or retinal ischemia without acute infarction. A microembolus (from an ulcerated carotid plaque or a cardiac thrombus), transient platelet clumping, or a brief pressure drop past a tight stenosis blocks flow, then dissolves, breaks up, or is bypassed by circle-of-Willis collaterals before cells die. Function returns completely, usually within 15–60 minutes. It's the brain's unstable angina: 10–15% have a major stroke within 90 days.",
    chain: {
      mechanism: ["Atherosclerosis, thromboembolism, or small vessel disease", "Microembolus, platelet clump, or flow drop past a stenosis"],
      change: ["Temporary focal ischemia", "Blockage clears or collaterals take over before infarction"],
      cues: ["BE FAST signs that resolve completely (usually 15–60 minutes)", "Often gone by the time the client arrives"],
      worst: ["Major ischemic stroke within 90 days (10–15%)"]
    },
    table: { cols: ["", "TIA", "Ischemic stroke"], rows: [
      ["Blood flow", "Temporarily blocked", "Blocked long enough to kill tissue"],
      ["Infarct on imaging", "No", "Yes"],
      ["Deficits", "Resolve completely (15–60 min)", "Persist"],
      ["Meaning", "Warning: plaque unstable, embolic risk present", "Permanent neuronal death"]
    ] },
    tableTitle: "TIA vs. stroke",
    facts: [
      "BE FAST: Balance, Eyes, Face droop, Arm drift, Speech, Time to call 911 or activate stroke protocol.",
      "CT first (it looks like a stroke), then MRI within 24 hours.",
      "Lipid panel and glucose look for risk factors (hyperlipidemia, diabetes) to guide education.",
      "Treat it as a stroke until proven otherwise."
    ],
    qa: [["How does a TIA differ from an ischemic stroke?", "TIA symptoms resolve completely without infarction; a stroke causes permanent tissue death."],
         ["Why is a TIA compared to unstable angina?", "It signals unstable plaque or embolic risk; 10–15% have a stroke within 90 days."]]
  },
  {
    id: "ischemic", sys: "cvd", name: "Ischemic Stroke", star: true, starText: "85% of strokes; CT first",
    connect: ["Perfusion", "Ischemia", "Acid-Base"],
    summary: "An ischemic stroke is a blockage that lasts long enough to kill brain tissue; it's about 85% of strokes. Thrombotic strokes form over an ulcerated plaque in a large cerebral artery, are often preceded by TIAs, and often happen during sleep when BP is lowest. Embolic strokes come from elsewhere, most often the heart (atrial fibrillation or flutter, recent MI, endocarditis), and lodge suddenly in a smaller vessel. Deficits are sudden and usually one-sided, matching the area that lost blood flow.",
    chain: {
      mechanism: ["Thrombotic: local clot over atherosclerotic plaque", "Embolic: clot or debris from the heart (AFib, recent MI, endocarditis) or carotid", "Risk: hypertension, prior TIA or stroke, smoking, cardiovascular disease, diabetes, clotting disorders"],
      change: ["Flow stops → no O₂ or glucose → ATP gone in minutes", "Ischemic core: anaerobic glycolysis → lactic acid → local acidosis", "Acidosis breaks down the blood-brain barrier → edema peaks 24–72 hours"],
      cues: ["Sudden one-sided numbness or weakness, facial droop", "Vision loss, slurred speech or aphasia", "Ataxia, unsteady gait (BE FAST)"],
      worst: ["Cerebral edema → increased ICP 24–72 hours after the stroke → herniation", "Permanent disability"]
    },
    table: { cols: ["", "Thrombotic", "Embolic"], rows: [
      ["Clot forms", "Locally, over plaque in a large cerebral artery", "Elsewhere, travels up carotid or vertebral arteries"],
      ["Common source", "Atherosclerosis", "The heart (AFib, flutter, MI, endocarditis)"],
      ["Clue", "Often preceded by TIA; often during sleep", "Abrupt onset"]
    ] },
    tableTitle: "Two kinds of ischemic stroke",
    facts: [
      "Goal: treatment started within 60 minutes of hospital arrival.",
      "CT scan first (rules out bleeding), then studies for the cause: ECG, CBC, coagulation studies, glucose, troponin.",
      "NIH Stroke Scale (NIHSS) rates severity: 0 no stroke, 1–4 minor, 5–15 moderate, 16–20 moderate to severe, 21–42 severe.",
      "Deficits depend on location: left hemisphere → right-sided weakness and language problems [standard content]."
    ],
    qa: [["How do thrombosis and embolism cause ischemic stroke?", "Thrombosis: a clot forms in place over a plaque. Embolism: a clot from elsewhere (usually the heart) lodges in a brain artery."],
         ["Why does ICP often peak 24–72 hours after a stroke?", "Lactic acidosis in the ischemic core breaks down the blood-brain barrier → edema that peaks in that window."],
         ["What test comes first for suspected stroke, and why?", "CT, to rule out hemorrhage."]]
  },
  {
    id: "hemorrhagic", sys: "cvd", name: "Hemorrhagic Stroke", star: true, starText: "Worst headache of my life",
    connect: ["Vascular Integrity", "ICP", "Clotting"],
    summary: "A hemorrhagic stroke is a ruptured cerebral vessel spilling blood into the skull; about 15% of strokes but with much higher mortality. Intracerebral hemorrhage ruptures inside brain tissue, usually from chronic uncontrolled hypertension weakening small deep arteries, forming an expanding hematoma. Subarachnoid hemorrhage bleeds into the CSF-filled space between arachnoid and pia, most often from a ruptured berry aneurysm or AVM, causing meningeal irritation and vasospasm. Either one adds volume to the skull, raises ICP, and lowers perfusion.",
    chain: {
      mechanism: ["Intracerebral: chronic hypertension weakens small deep arteries", "Subarachnoid: ruptured berry aneurysm or AVM"],
      change: ["Blood adds volume → ICP rises (Monro-Kellie)", "Expanding hematoma compresses surrounding tissue", "Subarachnoid blood → meningeal irritation and diffuse vasospasm"],
      cues: ["Sudden severe headache ('worst headache of my life', thunderclap)", "Altered LOC, vomiting, seizures", "Stroke deficits (BE FAST); signs of increased ICP"],
      worst: ["Herniation → brain death", "Vasospasm → secondary ischemia (subarachnoid)"]
    },
    table: { cols: ["", "Intracerebral", "Subarachnoid"], rows: [
      ["Where", "Inside brain tissue (parenchyma)", "Into CSF space between arachnoid and pia"],
      ["Main cause", "Chronic hypertension", "Ruptured berry aneurysm (or AVM)"],
      ["Effect", "Expanding hematoma compresses tissue", "Meningeal irritation, diffuse vasospasm"]
    ] },
    tableTitle: "Two kinds of hemorrhagic stroke",
    facts: [
      "CT scan first. If bleeding is seen: platelet count and prothrombin time to look for bleeding problems; renal and liver tests to look for causes.",
      "You can't reliably tell ischemic from hemorrhagic by symptoms alone: that's why CT comes first.",
      "Herniation: pressure pushes brain tissue down toward the brainstem."
    ],
    qa: [["How does rupture of a cerebral vessel cause injury?", "Blood adds volume in the skull (raising ICP and lowering CPP), the hematoma compresses tissue, and subarachnoid blood irritates the meninges and causes vasospasm."],
         ["Main cause of intracerebral vs. subarachnoid hemorrhage?", "Intracerebral: chronic hypertension. Subarachnoid: ruptured berry aneurysm."]]
  },
  {
    id: "aneurysm", sys: "cvd", name: "Cerebral Aneurysm", star: true, starText: "Silent until it ruptures",
    connect: ["Vascular Integrity", "Hypertension", "ICP"],
    summary: "A cerebral aneurysm is a weak, ballooning spot in a cerebral artery wall. The most common is a saccular (berry) aneurysm at branch points of the circle of Willis, where the muscular tunica media and internal elastic lamina may be congenitally thin or missing. Turbulent flow and high pressure at the fork push the weak wall outward. Unruptured, it's usually silent; rupture causes a subarachnoid hemorrhage.",
    chain: {
      mechanism: ["Congenital weak spot at artery branch points", "Turbulent flow and high pressure at the fork", "Less often: infection (septic emboli) or atherosclerosis"],
      change: ["Wall bulges outward (saccular/berry)", "Grows; may press on nearby nerves", "Rupture → blood in the subarachnoid space"],
      cues: ["Unruptured: usually none; large ones cause localized headache or cranial nerve palsy", "Ruptured: thunderclap headache, nuchal rigidity, photophobia, projectile vomiting, LOC changes, seizures"],
      worst: ["Subarachnoid hemorrhage → increased ICP, herniation, vasospasm, death"]
    },
    table: { cols: ["Modifiable risk", "Non-modifiable risk"], rows: [
      ["Hypertension", "Family history of cerebral aneurysm"],
      ["Cigarette smoking (the most critical trigger for growth and rupture)", "Autosomal dominant polycystic kidney disease"],
      ["Cocaine or amphetamine use", "Connective tissue disorders"],
      ["Heavy alcohol use", "Female sex; age 40–60"]
    ] },
    tableTitle: "Aneurysm risk factors",
    facts: [
      "Unlike aortic aneurysms (atherosclerosis-driven), most cerebral aneurysms come from a congenital weak spot.",
      "CT scan shows the bleed after rupture."
    ],
    qa: [["What factors contribute to cerebral aneurysm formation and rupture?", "Congenitally thin wall at branch points plus high pressure and turbulence; hypertension and smoking (most critical), stimulants, heavy alcohol; family history, PKD, connective tissue disorders."],
         ["What does a ruptured aneurysm look like?", "Thunderclap headache, nuchal rigidity, photophobia, projectile vomiting, and signs of increased ICP."]]
  },
  /* ===== TRAUMA & SEIZURES ===== */
  {
    id: "tbi", sys: "ntr", name: "Traumatic Brain Injury (TBI)", star: true, starText: "Primary at impact; secondary hours to days later",
    connect: ["Tissue Injury", "Inflammation", "ICP"],
    summary: "TBI is brain injury from physical trauma (falls, crashes, sports, shaken baby syndrome), open or closed, from mild concussion to severe. The primary injury is the instant mechanical damage at impact. The secondary injury follows over hours to days: an inflammatory and biochemical cascade causes cerebral edema, hypoxia, and hypotension, ICP rises, CPP falls, and herniation threatens. Most care aims to prevent secondary injury.",
    chain: {
      mechanism: ["Falls, motor vehicle crashes, sports (concussion), assault, shaken baby syndrome", "Primary injury: mechanical damage at impact (contusion, shearing, bleeding)"],
      change: ["Secondary injury: inflammation, edema, hypoxia, hypotension", "ICP rises → CPP falls → more ischemia"],
      cues: ["Decreased LOC and GCS (most common finding)", "Mild: mood change, irritability, poor concentration, dizziness, blurred vision, drowsiness", "Moderate–severe: seizures, pupil changes (dilated)", "Severe: posturing, loss of brainstem reflexes, Cushing's triad"],
      worst: ["Herniation compressing the brainstem → death"]
    },
    table: { cols: ["Primary injury", "Secondary injury"], rows: [
      ["At the moment of impact", "Hours to days later"],
      ["Mechanical: contusion, axon shearing, blood-brain barrier damage, bleeding", "Biochemical: inflammation, free radicals, edema, ischemia, hypoxia"],
      ["Can't be undone; prevention is the only cure", "Can be limited by keeping O₂, BP, and CPP up"]
    ] },
    tableTitle: "Primary vs. secondary brain injury",
    facts: [
      "Diagnosis: CT, MRI, X-rays, and serial neurologic assessment (GCS).",
      "Worsening signs: falling GCS, new pupil change, vomiting, posturing, Cushing's triad."
    ],
    qa: [["How do primary and secondary brain injuries differ?", "Primary: mechanical damage at impact. Secondary: the inflammatory cascade, edema, hypoxia, and hypotension that follow over hours to days."],
         ["Which neuro assessment changes signal a worsening TBI?", "Falling LOC or GCS, a newly dilated or sluggish pupil, vomiting, posturing, and Cushing's triad."]]
  },
  {
    id: "sci", sys: "ntr", name: "Spinal Cord Injury (SCI)", star: true, starText: "Level and completeness decide the deficits",
    connect: ["Neural Communication", "Autonomic Regulation", "Perfusion"],
    summary: "SCI is trauma (crashes, sports, falls) that fractures, dislocates, compresses, bruises, or severs the cord, cutting the highway between brain and body. Secondary cord edema, hemorrhage, and ischemia peak 24–72 hours after injury. Loss is below the level of injury: complete injury means no motor or sensory function below it; incomplete means some remains. Cervical injuries can cause quadriplegia; thoracic and lumbar, paraplegia.",
    chain: {
      mechanism: ["Motor vehicle crashes, sports injuries, falls", "Primary: fracture, dislocation, compression, contusion, or transection"],
      change: ["Secondary edema, hemorrhage, ischemia peaking at 24–72 hours", "Ascending sensory and descending motor tracts interrupted below the level"],
      cues: ["Loss of movement and sensation below the injury", "Incomplete: some sensation or movement remains, numbness, tingling", "Complete: total motor and sensory loss below the level"],
      worst: ["High cervical injury → loss of breathing (diaphragm, C3–C5) [standard content]", "Neurogenic shock; autonomic dysreflexia (injuries at T6 or above) [standard content]"]
    },
    table: { cols: ["", "Neurogenic shock", "Autonomic dysreflexia"], rows: [
      ["When", "Early, after injury (usually T6 or above)", "Later, after spinal shock resolves (injury T6 or above)"],
      ["Mechanism", "Sympathetic outflow cut → unopposed parasympathetic tone → vasodilation", "Trigger below the injury (full bladder, constipation, skin pressure) → massive sympathetic reflex that the brain can't dampen below the level"],
      ["Signs", "Hypotension, bradycardia, warm dry skin", "Severe hypertension, pounding headache, flushing and sweating above the injury, bradycardia"],
      ["Priority", "Support BP and HR", "Sit up, find and remove the trigger (bladder first)"]
    ] },
    tableTitle: "Autonomic emergencies after SCI [standard content, on the exam guide]",
    facts: [
      "Diagnosis: CT, MRI, X-rays, and neurologic assessment to classify severity.",
      "The lecture didn't cover neurogenic shock or autonomic dysreflexia, but the instructor's exam guide asks about both, so they're included as standard content."
    ],
    beyond: "Neurogenic shock and autonomic dysreflexia aren't in the recorded lecture but are on the Final study guide. In both, the injured cord disconnects the sympathetic chain from the brain: in neurogenic shock sympathetic tone is lost (low BP, low HR); in autonomic dysreflexia a stimulus below the injury fires an uncontrolled sympathetic surge (dangerously high BP) that the brain can't shut off below the injury.",
    qa: [["How do complete and incomplete SCI differ?", "Complete: no motor or sensory function below the level. Incomplete: some function remains."],
         ["Why does neurogenic shock cause bradycardia and hypotension?", "Sympathetic outflow is cut, leaving parasympathetic (vagal) tone unopposed → vasodilation and slow HR."],
         ["Most common trigger of autonomic dysreflexia?", "A full bladder (also constipation or skin pressure)."]]
  },
  {
    id: "seizure", sys: "ntr", name: "Epileptic Seizures", star: true, starText: "Prodromal → ictal → postictal",
    connect: ["Neural Communication", "Electrolytes", "Cellular Metabolism"],
    summary: "Seizures are uncontrolled electrical disturbances in the brain that can change consciousness, behavior, memory, or feelings. In epileptic seizures a neurotransmitter imbalance overexcites a group of neurons, which recruits connected neurons in a chain reaction. Triggers include TBI, stroke, brain tumors, CNS infection, electrolyte imbalances, certain medications, alcohol or drug withdrawal, and fever (febrile seizures in children), or they can be idiopathic. Signs range from staring spells (absence) to full tonic-clonic seizures, depending on where the activity is.",
    chain: {
      mechanism: ["TBI, stroke, tumor, meningitis or encephalitis", "Electrolyte imbalance (sodium, calcium, glucose), alkalosis, fever, withdrawal, medications, idiopathic"],
      change: ["Excitatory/inhibitory neurotransmitter imbalance", "Neurons fire excessively and recruit neighbors (chain reaction)", "Huge energy and oxygen use during the seizure"],
      cues: ["Prodromal (minutes to days before): mood change, anxiety, headache, aura", "Ictal: absence (staring) to tonic-clonic (whole-body)", "Postictal: confusion, fatigue, headache, soreness, memory loss, temporary weakness; sleeps"],
      worst: ["Prolonged seizure (status epilepticus) → hypoxia, acidosis, hyperthermia, neuronal death [standard content]", "Aspiration and injury"]
    },
    table: { cols: ["", "Focal", "Generalized"], rows: [
      ["Where it starts", "One area of one hemisphere", "Both hemispheres at once"],
      ["Consciousness", "May be preserved or impaired", "Usually lost"],
      ["Examples", "Twitching of one limb, odd sensations, automatisms", "Absence (staring), tonic-clonic"],
      ["Signs match", "The area involved (motor cortex → jerking; occipital → visual)", "Whole-brain involvement"]
    ] },
    tableTitle: "Focal vs. generalized [standard content, on the exam guide]",
    facts: [
      "Epilepsy is most common in young children and adults over 50.",
      "Diagnosis: history, neuro exam, EEG (brain waves), blood tests, lumbar puncture to find the cause.",
      "Electrolyte links: hyponatremia, hypocalcemia, hypoglycemia, and alkalosis all increase neuronal excitability."
    ],
    qa: [["How does abnormal electrical activity produce a seizure?", "A neurotransmitter imbalance overexcites neurons, which recruit connected neurons in a chain reaction of excess firing."],
         ["Name the three seizure stages.", "Prodromal (warning, aura), ictal (the seizure), postictal (confusion, fatigue, recovery)."],
         ["Why is a prolonged seizure dangerous?", "Demand outstrips oxygen and glucose supply → hypoxia, lactic acidosis, hyperthermia, and neuronal death."]]
  },
  {
    id: "nonepileptic", sys: "ntr", name: "Non-Epileptic Seizures",
    connect: ["Psychosocial", "Perfusion"],
    summary: "Non-epileptic seizures look like epileptic seizures but aren't caused by abnormal brain electrical activity. They often have a psychological origin (linked to conversion disorder) and occur with emotional distress, but physiologic causes can mimic seizures too: migraines, stroke, cardiac dysrhythmias, and syncope. They often lack postictal confusion and fatigue and may include rhythmic side-to-side head movement or screaming.",
    chain: {
      mechanism: ["Psychological (conversion disorder), emotional distress", "Mimics: migraine, stroke, dysrhythmia, syncope"],
      change: ["Seizure-like movements without abnormal EEG activity"],
      cues: ["Often triggered by emotional distress", "Side-to-side head movement, rhythmic shaking, screaming", "Usually no postictal confusion or fatigue"],
      worst: ["Missing a true epileptic seizure or a cardiac cause"]
    },
    table: { cols: ["", "Epileptic", "Non-epileptic"], rows: [
      ["Brain electrical activity (EEG)", "Abnormal", "Normal"],
      ["Origin", "Neurologic", "Often psychological; or migraine, stroke, dysrhythmia, syncope"],
      ["After the event", "Postictal confusion, fatigue", "Often no postictal phase"]
    ] },
    tableTitle: "Epileptic vs. non-epileptic",
    facts: ["EEG during an event helps tell them apart."],
    qa: [["What usually distinguishes non-epileptic from epileptic seizures?", "No abnormal EEG activity, frequent emotional trigger, and usually no postictal confusion or fatigue."]]
  },
  /* ===== AUTONOMIC ===== */
  {
    id: "ansfn", sys: "ans", name: "Autonomic Regulation & Orthostatic Hypotension",
    connect: ["Homeostasis", "Perfusion", "GI Motility"],
    summary: "The autonomic nervous system runs involuntary functions: heart rate, blood pressure, digestion, bladder, sweating, pupils. The sympathetic branch (fight or flight, norepinephrine) speeds the heart, constricts vessels, and slows the gut. The parasympathetic branch (rest and digest, acetylcholine; mostly the vagus nerve) slows the heart and drives digestion and bladder emptying. Baroreceptors sense BP and adjust both branches beat to beat. When autonomic nerves fail, the body can't make those adjustments, so standing drops BP (orthostatic hypotension) and the gut and bladder stall.",
    chain: {
      mechanism: ["Two-neuron chain: preganglionic (brainstem/cord) → ganglion → postganglionic → organ", "Baroreceptor reflex: BP falls on standing → sympathetic vasoconstriction and faster HR"],
      change: ["Autonomic nerve damage (diabetes, SCI, Parkinson's) → reflexes blunted", "No vasoconstriction or HR rise on standing"],
      cues: ["Orthostatic hypotension: dizziness, lightheadedness, fainting on standing [standard: SBP drop of 20 or more, or DBP 10 or more, within 3 minutes]", "Fixed heart rate; GI and bladder dysmotility"],
      worst: ["Falls and syncope; silent MI", "Loss of homeostasis under stress (heat, exercise, illness)"]
    },
    table: { cols: ["Organ", "Sympathetic", "Parasympathetic"], rows: [
      ["Heart", "↑ rate and contractility", "↓ rate (vagus)"],
      ["Blood vessels", "Constrict → ↑ BP", "Little direct effect"],
      ["GI tract", "↓ motility", "↑ motility and secretion"],
      ["Bladder", "Relax wall (hold urine)", "Contract detrusor (empty)"],
      ["Sweat glands", "Sweating (sympathetic cholinergic fibers)", "None"],
      ["Pupils", "Dilate", "Constrict"]
    ] },
    tableTitle: "Who controls what [standard content]",
    facts: [
      "Orthostatic hypotension = the baroreceptor reflex fails to tighten vessels and speed the heart when the client stands.",
      "Neurotransmitters: norepinephrine (most sympathetic postganglionic), acetylcholine (parasympathetic, and sympathetic fibers to sweat glands)."
    ],
    qa: [["What causes orthostatic hypotension?", "When the client stands, blood pools in the legs; normally baroreceptors trigger sympathetic vasoconstriction and a faster HR. If autonomic nerves are damaged, that reflex fails and BP drops."],
         ["How does the parasympathetic system affect the heart and gut?", "Slows the heart (vagus) and increases GI motility and secretion."]]
  },
  {
    id: "dan", sys: "ans", name: "Diabetic Autonomic Neuropathy", star: true, starText: "Chronic hyperglycemia; silent MI, gastroparesis",
    connect: ["Diabetes", "Perfusion", "GI Motility"],
    summary: "Diabetic autonomic neuropathy is damage to autonomic nerves from chronic hyperglycemia in type 1 or type 2 diabetes; it's serious and often underdiagnosed. Autonomic fibers are small and thinly myelinated or unmyelinated, so they're especially vulnerable. Excess glucose is shunted through the polyol pathway (aldose reductase turns glucose into sorbitol), which traps water in Schwann cells and neurons and depletes NADPH, so the cell can't regenerate its antioxidant glutathione. Oxidative stress, inflammation, and microvascular ischemia injure parasympathetic fibers first, then sympathetic. It can't be reversed: prevention is glucose control.",
    chain: {
      mechanism: ["Chronic hyperglycemia (poorly controlled type 1 or type 2 diabetes)", "Accelerated by cardiovascular risk factors, obesity, smoking"],
      change: ["Polyol pathway: glucose → sorbitol (aldose reductase) → water drawn into nerve cells, NADPH depleted → less glutathione → oxidative stress", "Microvascular ischemia of the nerves", "Parasympathetic (vagal) fibers fail first, then sympathetic"],
      cues: ["Cardiovascular: resting tachycardia (above 100), exercise intolerance, orthostatic hypotension, silent MI, fixed heart rate", "GI: gastroparesis (nausea, vomiting undigested food, bloating, erratic glucose), nocturnal diarrhea alternating with constipation, dysphagia", "GU: neurogenic bladder, sexual dysfunction", "Sudomotor: anhidrosis (dry, cracked feet), gustatory sweating, heat intolerance"],
      worst: ["Silent MI (no chest pain)", "Unpredictable hypoglycemia from erratic gastric emptying; foot ulcers; recurrent UTIs"]
    },
    table: { cols: ["System", "Mechanism", "Signs"], rows: [
      ["Cardiovascular", "Early vagal loss → resting sympathetic dominance; later sympathetic loss and impaired baroreceptor reflexes", "Resting tachycardia, exercise intolerance, orthostatic hypotension, silent MI, fixed HR (no beat-to-beat variability)"],
      ["Gastrointestinal", "Vagal neuropathy impairs gastric motility, pyloric relaxation, enteric coordination", "Gastroparesis, erratic glucose swings, nocturnal watery diarrhea alternating with constipation, dysphagia"],
      ["Genitourinary", "Can't sense bladder fullness; detrusor motor fibers lost", "Neurogenic bladder (hesitancy, weak stream, incomplete emptying, overflow incontinence, UTIs), erectile dysfunction, decreased lubrication"],
      ["Sudomotor", "Sympathetic cholinergic fibers to sweat glands damaged", "Anhidrosis (dry cracked feet, ulcer risk), gustatory sweating after eating, heat intolerance"]
    ] },
    tableTitle: "Organ-by-organ effects (from the lecture slide)",
    facts: [
      "Labs: A1C (normal below 5.7%; average glucose over about 3 months) and fasting glucose (normal 70–99 mg/dL; current exposure). Other tests rule out other causes; ECG and system-specific tests as needed.",
      "Silent MI happens because cardiac pain afferent nerves are damaged.",
      "Other diabetic neuropathies: peripheral (stocking-glove numbness) and focal/multifocal.",
      "Once present it can't be reversed: the goal is prevention through glucose control."
    ],
    beyond: "The recording says 'chronic hypoglycemia' several times. The cause is chronic HYPERglycemia (high blood glucose), as the slide states.",
    qa: [["How can autonomic dysfunction affect HR, BP, and GI function?", "Vagal loss → resting tachycardia and a fixed HR; lost baroreceptor reflexes → orthostatic hypotension; vagal GI damage → gastroparesis and diarrhea/constipation."],
         ["Why can a client with diabetic autonomic neuropathy have an MI without chest pain?", "Cardiac pain afferent fibers are damaged (silent ischemia)."],
         ["Why do blood glucose levels swing in gastroparesis?", "Food empties unpredictably, so insulin action and carbohydrate absorption don't line up → unexpected highs and lows."]]
  }
  );

  add("EMERGENCIES",
    ["Increased ICP / herniation", "nsf", "Falling LOC, then Cushing's triad (widening pulse pressure, bradycardia, irregular breathing), blown pupil, posturing", "Brainstem compression → respiratory arrest, brain death"],
    ["Acute stroke", "cvd", "Sudden BE FAST deficit: facial droop, arm drift, slurred speech, vision loss, imbalance", "Every minute of ischemia kills neurons; CT first, treatment within 60 minutes of arrival"],
    ["Ruptured cerebral aneurysm / subarachnoid hemorrhage", "cvd", "Thunderclap 'worst headache of my life', nuchal rigidity, vomiting, LOC change", "Rising ICP, herniation, vasospasm"],
    ["Bacterial meningitis", "ninf", "Fever + severe headache + stiff neck; petechial rash; photophobia", "Septic shock, cerebral edema, death"],
    ["Status epilepticus", "ntr", "Seizure that doesn't stop or repeats without recovery between", "Hypoxia, acidosis, hyperthermia, neuronal death"],
    ["Autonomic dysreflexia", "ntr", "SCI at T6 or above with sudden severe hypertension, pounding headache, flushing above the injury", "Hypertensive stroke or seizure; remove the trigger (full bladder)"],
    ["Neurogenic shock", "ntr", "New SCI with hypotension, bradycardia, warm dry skin", "Lost sympathetic tone → poor perfusion"],
    ["ALS respiratory failure", "ndeg", "Weak cough, shallow breathing, rising CO₂, morning headache", "Diaphragm paralysis → respiratory acidosis, death"],
    ["Silent MI in diabetic autonomic neuropathy", "ans", "Diabetic with sudden dyspnea, fatigue, or diaphoresis without chest pain", "Missed MI because pain afferents are damaged"]
  );

  add("LOOKALIKES",
    ["Meningitis vs. encephalitis", "Meningitis = meninges: fever, headache, nuchal rigidity, Kernig/Brudzinski. Encephalitis = brain tissue: altered mental status, behavior change, seizures (FLAMES). Same workup: LP, cultures, PCR, MRI."],
    ["Bacterial vs. viral CSF", "Bacterial: cloudy, opening pressure above 25, WBC above 1,000 neutrophils, glucose low (below 40), protein above 100. Viral: clear, mild lymphocytes, normal glucose."],
    ["TIA vs. ischemic stroke", "Both: sudden BE FAST deficits. TIA resolves completely (15–60 min) with no infarct; stroke persists with infarct on imaging. TIA = warning of stroke within 90 days."],
    ["Ischemic vs. hemorrhagic stroke", "Can't tell by symptoms: CT first. Ischemic (85%): clot, thrombotic or embolic (AFib). Hemorrhagic (15%): rupture; sudden severe headache, vomiting, rapid ICP signs; higher mortality."],
    ["Intracerebral vs. subarachnoid hemorrhage", "Intracerebral: bleeding into brain tissue from chronic hypertension; expanding hematoma. Subarachnoid: bleeding into CSF space from a berry aneurysm; thunderclap headache, nuchal rigidity, vasospasm."],
    ["Parkinson's vs. MS vs. ALS", "Parkinson's: dopamine loss; resting tremor, bradykinesia, rigidity, shuffling. MS: autoimmune demyelination; young women, relapses, vision and sensory changes, worse with heat. ALS: motor neurons only; weakness, atrophy, fasciculations, spasticity; sensation and thinking intact."],
    ["Primary vs. secondary brain injury", "Primary: mechanical damage at impact. Secondary: hours to days later from edema, hypoxia, hypotension, rising ICP; preventable."],
    ["Complete vs. incomplete SCI", "Complete: no motor or sensory function below the level. Incomplete: some sensation or movement preserved."],
    ["Neurogenic shock vs. autonomic dysreflexia", "Neurogenic shock: early, sympathetic loss → hypotension and bradycardia. Autonomic dysreflexia: later, trigger below the lesion → severe hypertension, headache, flushing above the lesion."],
    ["Epileptic vs. non-epileptic seizure", "Epileptic: abnormal EEG, postictal confusion and fatigue. Non-epileptic: normal EEG, emotional trigger, side-to-side head movement, little postictal phase."],
    ["Early vs. late ICP signs", "Early: LOC change, headache, vomiting, sluggish pupils. Late: Cushing's triad, posturing, fixed dilated pupils, GCS 8 or less."]
  );
})();
