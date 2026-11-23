/* Neuro pages for the Patho Final guide: section overviews, plain-language text, and picture-quiz
   figures from the three neuro lecture slide decks. Loads after pages-heme.js. */
(function () {
  /* ---------- Section overviews ---------- */
  Object.assign(window.SECTIONS, {
    nsf: {
      lead: "Structure and Function of the Neurological System, plus the CNS introduction: neurons and glia, impulse transmission, brain regions, the CNS and PNS, cerebral perfusion, autoregulation, the Monro-Kellie doctrine, and increased intracranial pressure.",
      summary: [
        "Neurons carry signals as electricity along the axon and as chemicals across the synapse. Sodium rushes in to fire the neuron, potassium leaves to reset it, and calcium at the terminal releases neurotransmitter. Glial cells do the support work: astrocytes help build the blood-brain barrier, oligodendrocytes and Schwann cells make myelin, and microglia defend. Because neurons depend on sodium, calcium, glucose, and pH staying in range, electrolyte and acid-base problems show up as confusion, lethargy, and seizures.",
        "The brain takes about 15–20% of cardiac output and has almost no energy stores, so perfusion is everything. Autoregulation keeps flow steady across a wide range of BP until injury breaks it. The skull is a rigid box of brain, blood, and CSF (Monro-Kellie): anything that adds volume raises ICP, and since CPP = MAP − ICP, rising ICP starves the brain. Level of consciousness changes first; Cushing's triad, a blown pupil, and posturing mean herniation is near."
      ],
      structure: [
        "CNS = brain + spinal cord. PNS = 12 cranial and 31 spinal nerve pairs; afferent (in) and efferent (out).",
        "Cerebrum lobes: frontal (judgment, motor, speech), parietal (sensation), temporal (hearing, memory), occipital (vision).",
        "Cerebellum = coordination. Brainstem = breathing, HR, BP, consciousness, protective reflexes.",
        "Normal ICP 5–15 mm Hg; CPP at least 60 mm Hg; GCS 15 normal, 8 or less severe.",
        "High CO₂ dilates cerebral vessels → more blood volume → higher ICP."
      ]
    },
    ndeg: {
      lead: "Neurodegenerative disorders from the Diseases of the CNS lecture: Parkinson's disease, multiple sclerosis, and amyotrophic lateral sclerosis.",
      summary: [
        "Each of these diseases is defined by what is lost. Parkinson's loses dopamine neurons in the substantia nigra, so acetylcholine runs unopposed in the basal ganglia: resting tremor, rigidity, slow movement, and poor balance. MS loses CNS myelin to an autoimmune T-cell attack, so conduction slows or fails wherever plaques form, which is why symptoms differ between clients and come and go with relapses. ALS loses upper and lower motor neurons, so muscles weaken, waste, and twitch while sensation and thinking stay intact.",
        "The brain damage itself rarely ends the life. The instructor emphasized the systemic fallout: weak swallowing leads to aspiration pneumonia, and weak breathing muscles lead to respiratory acidosis and failure. Watch swallowing, cough strength, and breathing as these diseases progress."
      ],
      structure: [
        "Parkinson's: dopamine ↓, Lewy bodies, tremor at rest, bradykinesia, rigidity, shuffling gait.",
        "MS: autoimmune demyelination; young women; vision changes, numbness, fatigue; heat makes it worse; MRI plaques and CSF oligoclonal bands.",
        "ALS: motor neurons only; weakness, atrophy, fasciculations, spasticity; death in 3–5 years from respiratory failure."
      ]
    },
    ninf: {
      lead: "CNS infections from the Diseases of the CNS lecture: meningitis and encephalitis, their signs, CSF findings, and diagnosis.",
      summary: [
        "Both are infections (usually bacterial or viral) that inflame the nervous system; the difference is where. Meningitis inflames the meninges that wrap the brain and cord, so the classic picture is fever, a severe headache, and a stiff neck, with Kernig's and Brudzinski's signs. Encephalitis inflames the brain tissue itself, so thinking and behavior change: confusion, memory problems, personality change, and seizures (FLAMES).",
        "Inflammation adds swelling and blocks CSF flow inside a closed skull, so both can raise ICP, cause seizures, and lead to herniation. The lumbar puncture tells you which organism: bacterial CSF is cloudy with neutrophils, high protein, and low glucose because bacteria eat it; viral CSF is clear with lymphocytes and normal glucose."
      ],
      structure: [
        "Meningitis: fever, headache, nuchal rigidity, photophobia; petechial rash = meningococcal emergency.",
        "Encephalitis: FLAMES (Flu-like, Loss of consciousness, Acute headache, Memory, Emotional/behavior, Seizures).",
        "Workup: LP, blood cultures, PCR, CT/MRI, EEG.",
        "CSF normals: clear, opening pressure 10–20 cm H₂O, WBC 0–5, glucose 50–80 mg/dL, protein 15–45 mg/dL."
      ]
    },
    cvd: {
      lead: "Cerebrovascular disorders from the Diseases of the CNS lecture: TIA, ischemic stroke, hemorrhagic stroke, and cerebral aneurysms.",
      summary: [
        "Neurons survive only minutes without oxygen and glucose. When an artery is blocked (thrombus on a plaque, or an embolus, often from AFib), ATP runs out, cells swell, glutamate and calcium flood in, and neurons die. A TIA is the same event reversed in time: symptoms clear completely, usually within 15–60 minutes, with no infarct, but 10–15% of people have a major stroke within 90 days. The deficit always matches the territory that lost flow.",
        "Hemorrhagic strokes are fewer but deadlier. Chronic hypertension weakens small arteries until they burst into brain tissue, and berry aneurysms at the circle of Willis rupture into the subarachnoid space with a thunderclap headache. Blood compresses tissue and adds volume to the skull, so ICP climbs fast. Symptoms alone can't tell ischemic from hemorrhagic: CT comes first."
      ],
      structure: [
        "BE FAST: Balance, Eyes, Face, Arm, Speech, Time. NIHSS scores severity.",
        "Ischemic about 85% (thrombotic or embolic); hemorrhagic about 15% (intracerebral or subarachnoid).",
        "Edema peaks around 24–72 hours after a large stroke.",
        "Aneurysm risks: hypertension, smoking, family history; after rupture watch for rebleeding, vasospasm, hydrocephalus."
      ]
    },
    ntr: {
      lead: "Neuro trauma and seizures from the Diseases of the CNS lecture: traumatic brain injury, spinal cord injury, epileptic and non-epileptic seizures, plus the exam guide's additions (focal vs. generalized seizures, status epilepticus, neurogenic shock, autonomic dysreflexia).",
      summary: [
        "In TBI, primary injury happens at impact (contusion, laceration, shearing). Secondary injury builds over hours to days from swelling, bleeding, hypoxia, and low BP, and that's the part nursing care can prevent by keeping oxygen and perfusion up and ICP down. SCI interrupts the brain-body highway, so loss is below the level: cervical injuries affect all four limbs and breathing, and complete injuries leave no function below the level. Cutting the cord also cuts sympathetic control, which explains neurogenic shock early and autonomic dysreflexia later.",
        "A seizure is a burst of synchronized firing when excitation outweighs inhibition, spreading from neuron to neuron. Where it starts decides what it looks like: focal seizures match one area, generalized seizures involve both hemispheres. Low sodium, glucose, or calcium, alkalosis, fever, and withdrawal all lower the threshold. A seizure that won't stop burns oxygen and glucose faster than they arrive and can kill neurons. Non-epileptic seizures look similar but have a normal EEG and usually no postictal phase."
      ],
      structure: [
        "TBI by GCS: mild 13–15, moderate 9–12, severe 3–8.",
        "SCI swelling peaks 24–72 hours; complete vs. incomplete; quadriplegia vs. paraplegia.",
        "Neurogenic shock: hypotension + bradycardia. Autonomic dysreflexia (T6 or above): severe hypertension + headache; sit up, empty the bladder.",
        "Seizure stages: prodromal → ictal → postictal."
      ]
    },
    ans: {
      lead: "Diseases of the Autonomic Nervous System: how the sympathetic and parasympathetic branches regulate the body, orthostatic hypotension, and diabetic autonomic neuropathy.",
      summary: [
        "The autonomic system runs the things you don't think about: heart rate, blood pressure, digestion, bladder emptying, sweating. The sympathetic side speeds the heart, tightens vessels, and slows the gut; the parasympathetic side, mostly through the vagus, slows the heart and drives digestion. When you stand up, baroreceptors trigger vasoconstriction and a faster heart rate within seconds. Damage that reflex and BP falls on standing: orthostatic hypotension.",
        "Diabetic autonomic neuropathy is the lecture's main disease. Years of high glucose push sugar through the polyol pathway, trapping water in nerve cells and draining their antioxidant defenses, while small vessels to the nerves become ischemic. The long vagal fibers fail first, so the resting heart rate climbs and stops varying; then sympathetic fibers fail. The result is orthostatic hypotension, silent MI, gastroparesis with wild glucose swings, neurogenic bladder, and dry, cracked feet. It can't be reversed, so glucose control is prevention."
      ],
      structure: [
        "Sympathetic (norepinephrine): ↑HR, vasoconstriction, ↓GI, pupils dilate, sweating.",
        "Parasympathetic (acetylcholine, vagus): ↓HR, ↑GI motility, bladder emptying, pupils constrict.",
        "Diabetic autonomic neuropathy: cardiovascular, GI, GU, and sudomotor effects.",
        "Labs: A1C (normal below 5.7%) and fasting glucose (normal 70–99 mg/dL)."
      ]
    }
  });

  /* ---------- Plain-language versions ---------- */
  Object.assign(window.PLAIN, {
    nsfn: { text: "Your nervous system is a wiring network. Nerve cells pass messages along as tiny electrical pulses and then hand them to the next cell with chemical messengers. Helper cells wrap the wires in insulation (myelin) so messages move fast. The brain and spinal cord are the control center; the nerves are the cables to the rest of the body.", like: "A phone network: wires carry the signal, insulation keeps it fast, and the central office decides where it goes." },
    cperf: { text: "Your brain needs a steady supply of blood because it can't store fuel. The skull is a closed box holding brain, blood, and spinal fluid. If anything in that box grows, the pressure rises and it gets harder for blood to push its way in. Doctors watch the difference between blood pressure and skull pressure to know if the brain is getting enough.", like: "Trying to water a garden through a hose while someone squeezes the hose." },
    icp: { text: "Pressure inside the skull rises when the brain swells, bleeds, or a tumor grows. The first sign is usually a change in how alert or calm someone is. Later signs, like a slow pulse with very high blood pressure and odd breathing, mean the brain is being pushed toward the opening at the base of the skull. That's an emergency.", like: "A crowded elevator: at first people get irritable; once it's packed, someone gets crushed." },
    parkinsons: { text: "In Parkinson's disease, the brain slowly loses cells that make dopamine, a messenger that helps movement stay smooth. Without it, people shake at rest, feel stiff, move slowly, and shuffle when they walk. Over time swallowing gets harder, which can lead to choking or pneumonia.", like: "Driving with the brakes partly on: everything is slow and jerky." },
    ms: { text: "In MS, the immune system attacks the insulation (myelin) around nerves in the brain and spinal cord. Messages slow down or get lost. Symptoms depend on where the damage is: blurry vision, numbness, weakness, tiredness, balance problems. They often come and go in flares, and heat can make them worse.", like: "Chewed-up insulation on electrical cords: the lights flicker depending on which cord is damaged." },
    als: { text: "ALS slowly destroys the nerve cells that tell muscles to move. Muscles get weak, shrink, and twitch. Feeling and thinking usually stay normal, so the person is fully aware. Eventually the muscles for swallowing and breathing weaken, which is what makes it life-threatening.", like: "The phone lines to the muscles are cut one by one, but the caller is still on the line." },
    meningitis: { text: "Meningitis is an infection of the protective layers around the brain and spinal cord. It causes fever, a bad headache, and a stiff neck. Bacterial meningitis is an emergency and can be deadly within hours; viral meningitis is usually milder. A spinal tap tells which kind it is.", like: "Infection in the wrapping paper around a package: the package itself is squeezed and irritated." },
    encephalitis: { text: "Encephalitis is swelling of the brain itself, usually from a virus. Because the brain tissue is inflamed, people can become confused, act differently, forget things, or have seizures, along with fever and headache.", like: "Instead of the wrapping, the contents of the package are damaged." },
    tia: { text: "A TIA is a mini-stroke: blood flow to part of the brain is blocked for a short time, causing stroke symptoms that go away completely, usually within an hour. There's no lasting damage, but it's a warning that a real stroke may be coming soon.", like: "A smoke alarm going off: the fire isn't here yet, but something is wrong." },
    ischemic: { text: "An ischemic stroke happens when a clot blocks blood flow to part of the brain. Without oxygen and sugar, brain cells start dying within minutes. Symptoms depend on which part of the brain is affected: face droop, arm weakness, trouble talking, vision or balance problems. Fast treatment saves brain.", like: "A blocked pipe: everything downstream dries up." },
    hemorrhagic: { text: "A hemorrhagic stroke is bleeding inside the brain, often from long-standing high blood pressure or a burst aneurysm. The blood presses on brain tissue and raises pressure inside the skull. It often starts with a sudden, terrible headache, vomiting, and getting sleepy.", like: "A burst pipe inside a closed room: the water has nowhere to go." },
    aneurysm: { text: "A brain aneurysm is a weak, bulging spot on an artery. It usually causes no symptoms until it bursts, which causes the worst headache of a person's life and bleeding around the brain. High blood pressure and smoking make them more likely to grow and burst.", like: "A bubble on an old tire: fine until it pops." },
    tbi: { text: "A traumatic brain injury happens when a blow or jolt hurts the brain. Some damage happens right away; more can happen over the next hours and days as the brain swells and gets less oxygen. That later damage is what the care team works hardest to prevent.", like: "The crash is the first injury; the traffic jam that blocks the ambulance is the second." },
    sci: { text: "A spinal cord injury damages the main cable between the brain and body. Below the injury, movement and feeling can be lost completely or partly. Injuries in the neck affect arms, legs, and sometimes breathing. The injury can also scramble automatic control of blood pressure and heart rate.", like: "Cutting a cable: everything past the cut loses connection to headquarters." },
    seizure: { text: "A seizure is a sudden burst of uncontrolled electrical activity in the brain. Depending on where it happens, someone may stare blankly, twitch one arm, or shake all over and lose consciousness. Afterward they're often confused and tired. Low sodium or sugar, fever, brain injury, or infection can trigger one.", like: "An electrical storm: one spark sets off the whole neighborhood." },
    nonepileptic: { text: "Non-epileptic seizures look like seizures but aren't caused by abnormal electrical activity in the brain. They're often linked to emotional stress, and brain-wave tests are normal. Other problems like fainting, migraines, or heart rhythm problems can also look like seizures.", like: "A fire drill that looks like a real fire, without the flames." },
    ansfn: { text: "The autonomic nervous system is your autopilot. It speeds up your heart and tightens blood vessels when you need energy, and slows things down so you can digest and rest. When you stand up, it squeezes your blood vessels so you don't faint. If it's damaged, standing can make you dizzy.", like: "A thermostat that keeps the house comfortable without you touching it." },
    dan: { text: "Years of high blood sugar can damage the nerves that run your automatic functions. Your heart may beat fast all the time, your blood pressure can drop when you stand, your stomach may empty too slowly, your bladder may not empty well, and your feet may stop sweating and crack. A heart attack might not even hurt. Good blood sugar control is the best prevention.", like: "Rust slowly eating through the autopilot's wiring." }
  });

  /* ---------- Picture-quiz figures from the neuro lecture slides ---------- */
  var base = window.SLIDE_DECKS.length;
  window.SLIDE_DECKS.push(
    { mod: "Final", title: "Structure and Function of the Neurological System", sys: "nsf" },
    { mod: "Final", title: "Diseases of the Central Nervous System", sys: "ndeg" },
    { mod: "Final", title: "Diseases of the Autonomic Nervous System", sys: "ans" }
  );
  window.SLIDES.push(
    { id: "ns03", deck: base, n: 3, title: "Impulse Transmission" },
    { id: "ns04", deck: base, n: 4, title: "Structural Organization" },
    { id: "ns05", deck: base, n: 5, title: "Major CNS Regions" },
    { id: "ns06", deck: base, n: 6, title: "Cerebral Perfusion" },
    { id: "ns07", deck: base, n: 7, title: "Cerebral Perfusion Pressure & Autoregulation" },
    { id: "ns09", deck: base, n: 9, title: "Peripheral Nervous System" },
    { id: "ns11", deck: base, n: 11, title: "Neuroplasticity" },
    { id: "nc02", deck: base + 1, n: 2, title: "CNS Introduction" },
    { id: "nc04", deck: base + 1, n: 4, title: "Neurodegenerative Disorders" },
    { id: "nc05", deck: base + 1, n: 5, title: "Parkinson's Disease (1 of 2)" },
    { id: "nc06", deck: base + 1, n: 6, title: "Parkinson's Disease (2 of 2)" },
    { id: "nc07", deck: base + 1, n: 7, title: "Multiple Sclerosis" },
    { id: "nc08", deck: base + 1, n: 8, title: "MS" },
    { id: "nc09", deck: base + 1, n: 9, title: "Amyotrophic Lateral Sclerosis (ALS)" },
    { id: "nc10", deck: base + 1, n: 10, title: "ALS" },
    { id: "nc12", deck: base + 1, n: 12, title: "Meningitis" },
    { id: "nc13", deck: base + 1, n: 13, title: "Encephalitis" },
    { id: "nc16", deck: base + 1, n: 16, title: "Transient Ischemic Attack (TIA)" },
    { id: "nc17", deck: base + 1, n: 17, title: "Strokes" },
    { id: "nc18", deck: base + 1, n: 18, title: "Ischemic Strokes" },
    { id: "nc20", deck: base + 1, n: 20, title: "Cerebral Aneurysms" },
    { id: "nc22", deck: base + 1, n: 22, title: "Neuro Trauma" },
    { id: "nc23", deck: base + 1, n: 23, title: "Traumatic Brain Injury" },
    { id: "nc24", deck: base + 1, n: 24, title: "Spinal Cord Injury" },
    { id: "na02", deck: base + 2, n: 2, title: "Diabetic Autonomic Neuropathy" },
    { id: "na04", deck: base + 2, n: 4, title: "Diagnostics/Labs" }
  );
  window.FIGURES.push(
    { f: "ns03-1.jpg", slide: "ns03", topic: "nsfn" },
    { f: "ns04-1.jpg", slide: "ns04", topic: "nsfn" },
    { f: "ns05-1.jpg", slide: "ns05", topic: "nsfn" },
    { f: "ns06-1.jpg", slide: "ns06", topic: "cperf" },
    { f: "ns07-1.jpg", slide: "ns07", topic: "cperf" },
    { f: "ns09-1.jpg", slide: "ns09", topic: "ansfn" },
    { f: "ns11-1.jpg", slide: "ns11", topic: "nsfn" },
    { f: "nc02-1.jpg", slide: "nc02", topic: "nsfn" },
    { f: "nc04-1.jpg", slide: "nc04", topic: "parkinsons" },
    { f: "nc05-1.jpg", slide: "nc05", topic: "parkinsons" },
    { f: "nc06-1.jpg", slide: "nc06", topic: "parkinsons" },
    { f: "nc06-2.jpg", slide: "nc06", topic: "parkinsons" },
    { f: "nc07-1.jpg", slide: "nc07", topic: "ms" },
    { f: "nc08-1.jpg", slide: "nc08", topic: "ms" },
    { f: "nc09-1.jpg", slide: "nc09", topic: "als" },
    { f: "nc10-1.jpg", slide: "nc10", topic: "als" },
    { f: "nc12-1.jpg", slide: "nc12", topic: "meningitis" },
    { f: "nc12-2.jpg", slide: "nc12", topic: "meningitis" },
    { f: "nc13-1.jpg", slide: "nc13", topic: "encephalitis" },
    { f: "nc16-1.jpg", slide: "nc16", topic: "tia" },
    { f: "nc17-1.jpg", slide: "nc17", topic: "ischemic" },
    { f: "nc17-2.jpg", slide: "nc17", topic: "hemorrhagic" },
    { f: "nc18-1.jpg", slide: "nc18", topic: "ischemic" },
    { f: "nc18-2.jpg", slide: "nc18", topic: "ischemic" },
    { f: "nc20-1.jpg", slide: "nc20", topic: "aneurysm" },
    { f: "nc22-1.jpg", slide: "nc22", topic: "tbi" },
    { f: "nc22-2.jpg", slide: "nc22", topic: "sci" },
    { f: "nc23-1.jpg", slide: "nc23", topic: "tbi" },
    { f: "nc23-2.jpg", slide: "nc23", topic: "tbi" },
    { f: "nc24-1.jpg", slide: "nc24", topic: "sci" },
    { f: "na02-1.jpg", slide: "na02", topic: "dan" },
    { f: "na04-1.jpg", slide: "na04", topic: "dan" }
  );
})();
