/* Content for the Health Assessment Exam 2 interactive guide.
   Outline follows the "NURA 330 Exam 2 Study Guide"; details come from the Mod 4, 5, 6
   lecture guides and slides. Mod 7 (Reproductive) has no lecture guide yet, so its pages are
   built from the study guide outline plus standard assessment content (marked “Beyond the lectures”). */

window.GUIDE = {
  key: "ha-exam2-v1",
  course: "NURA 330 · Health Assessment",
  title: "Exam 2 Study Lab",
  heroArt: "🩺",
  heroText: "50 items (multiple choice and SATA) in 75 minutes, 20% of the course grade. Lynnwood: Mon Nov 2, 12:00. Auburn: Wed Nov 4. For every system, practice moving from <b>anatomy → what you ask → what you examine → what you report</b>.",
  formats: ["Multiple choice", "Select all that apply"],
  formatNote: "The exam is MC and SATA only. Practice Qs adds a few NGN formats (select N, cloze, matrix) for extra reps.",
  chainTitle: "The assessment chain",
  chainNote: "Anatomy that matters → what you ask (subjective) → what you examine (objective) → red flags to report.",
  chainShort: "an anatomy → ask → examine → report chain",
  chainKeys: [["why", "1 · Anatomy & why"], ["ask", "2 · Ask (subjective)"], ["exam", "3 · Examine (objective)"], ["flags", "4 · Report / red flags"]],
  connectLabel: "Techniques:",
  credit: "Slide image from the PLU ABSN program (NURA 330 lecture slides)."
};

window.SYSTEMS = [
  { id: "skin", name: "Lifespan, Skin & Lymph", short: "Skin & Lymph", icon: "🩹", weight: "Mod 4 · Older adults, integumentary & lymphatic" },
  { id: "cv", name: "Cardiovascular & Peripheral Vascular", short: "Cardio", icon: "🫀", weight: "Mod 5 · Heart, pulses, perfusion" },
  { id: "heent", name: "Head, Eyes, Ears, Nose & Throat", short: "HEENT", icon: "👁️", weight: "Mod 6 · HEENT & cranial nerves" },
  { id: "repro", name: "Reproductive", short: "Repro", icon: "🧬", weight: "Mod 7 · built from the study guide outline" }
];

window.EMPHASIS = [
  "The Braden Scale does NOT account for device pressure: check under devices at least twice daily.",
  "Lower Braden score = higher risk. Don't trust the total alone; a subscale of 1 needs action now.",
  "Stage 1 in darker skin is not bright red: look for purple/eggplant color plus warmth and bogginess.",
  "APE To Man: aortic 2R, pulmonic 2L, Erb's 3L, tricuspid 4L, mitral 5th ICS MCL.",
  "Women having an MI often have no classic chest pain: back/neck pain, nausea, SOB, fatigue.",
  "Carotids one side at a time, never both.",
  "Cranial nerves: you don't need every detail. Link each maneuver to the nerve it tests.",
  "A sudden facial droop during your assessment: activate the stroke response first."
];

window.CRITICAL_THINKING = [
  ["How does health assessment change across the lifespan?", "Ask what is expected for this age, then compare with the client's own baseline. Infants: quiet parts first, fontanelles. Older adults: thin skin, slower recall, atypical presentations like confusion. Use the Lifespan topic and the fontanelle diagram."],
  ["How do you tell an expected finding from an unexpected one?", "Expected fits age, baseline, and context. Unexpected is new, changed, or out of range: a cue to validate and assess further, not a diagnosis. Drill it in Expected or Not?"],
  ["Which unexpected findings need escalation right now?", "Anything that threatens airway, breathing, circulation, or neuro status, or is sudden and new: central cyanosis, spreading cellulitis, unilateral warm swollen calf, new murmur or absent pulse, sudden facial droop, new unequal pupils. See Red Flags."],
  ["How do you document so another nurse could picture the finding?", "Exact numbers, locations, and grades: “2+ pitting edema bilateral ankles,” “2.5 × 3.0 cm non-blanchable erythema, right sacrum,” “S1, S2 present, RRR, no murmurs.” Never “looks fine.”"],
  ["How do you adapt the interview to protect privacy and dignity?", "Interview privately when you can, use the client's pronouns, explain each step, get consent before touch, and use inclusive, nonjudgmental wording (especially for reproductive history)."]
];

window.STRATEGY = [
  ["Read the stem for the client's age and baseline", "The same finding can be expected at 2 months and unexpected at 2 years, or baseline for a COPD client and new for someone else."],
  ["Spot the action word", "“First,” “priority,” “best,” “report” change the answer. A priority question wants the finding that threatens ABCs or is sudden and new."],
  ["For SATA, judge each option alone", "Treat every option as true/false against the stem. Don't look for a pattern in how many to pick."],
  ["Assessment before action", "If the stem hasn't given you enough data, the answer is often to assess further (recheck, compare sides, compare with baseline)."],
  ["Eliminate vague documentation", "Charting answers with numbers, locations, and objective terms beat answers with “normal,” “fine,” or “mild.”"],
  ["Use the right tool and position", "Bell vs. diaphragm, HOB 30–45° for JVD, pull the auricle up and back in adults: technique questions are free points if you know them."]
];

window.DISORDERS = [
/* ================= MOD 4: LIFESPAN, SKIN & LYMPH ================= */
{
  id: "lifespan", sys: "skin", name: "Assessment Across the Lifespan",
  sub: "Growth and development, age-appropriate approach, fontanelles, older adults",
  connect: ["Inspection", "Palpation", "Communication"],
  summary: "Normal changes with age, so every finding is judged against what is expected for this age and this client's baseline. Change your approach too: quiet and gentle for infants, play for toddlers, privacy for teens, extra time and working glasses and hearing aids for older adults.",
  chain: {
    why: ["Infant skull bones are not fused: fontanelles let the brain grow", "Anterior fontanelle closes 12–18 months; posterior about 1–2 months", "Older adult skin: thinner epidermis, less subcutaneous fat, less elasticity"],
    ask: ["Ask the caregiver for infant/child history, but speak to the child directly", "Interview adolescents privately for part of the visit", "Older adults: compare with their own baseline (“What could you do a month ago?”)"],
    exam: ["Infants: observe first on the caregiver's lap; quiet parts (heart, lungs) before ears and mouth", "Palpate fontanelles with the infant calm and upright", "Older adults: handle skin gently; look for senile purpura, lentigines, skin tears, sacral breakdown"],
    flags: ["Sunken fontanelle = dehydration", "Bulging fontanelle = increased intracranial pressure", "New confusion in an older adult can be the first sign of infection"]
  },
  table: {
    cols: ["Age group", "Approach", "Findings to know"],
    rows: [
      ["Infants", "Observe first, non-invasively, calm on caregiver's lap; upsetting parts last", "Fontanelles: anterior closes 12–18 mo, posterior ~1–2 mo; sunken = dehydration, bulging = ↑ICP"],
      ["Toddlers / preschool", "Let them touch the equipment; use play; caregiver close", "Fast deterioration with illness"],
      ["School-age", "Explain simply what and why; respect privacy; let them help", ""],
      ["Adolescents", "Private interview for part of the visit; confidentiality", "Speak to them directly; respect modesty"],
      ["Older adults", "Extra time; glasses and hearing aids in; compare with baseline", "Thin skin, less fat and elasticity, senile purpura, lentigines; skin tears, sacral breakdown; atypical presentations"]
    ]
  },
  facts: [
    "Interpret every finding against age, developmental stage, and the client's own baseline.",
    "Fontanelle closure: anterior 12–18 months. Posterior: the slide text says 1–2 months, the slide diagram says 2–3 months; most references say about 2 months.",
    "Older adults may present atypically: confusion or new fatigue instead of fever.",
    "Older adult skin tears and bruises easily: lift, don't drag, and handle gently."
  ],
  qa: [
    ["An infant's anterior fontanelle is sunken. Most likely cause?", "Dehydration. Bulging would suggest increased intracranial pressure."],
    ["Which parts of an infant exam do you do first?", "The quiet, non-invasive ones (observe, heart, lungs) while the infant is calm. Save ears and mouth for last."],
    ["Why might an older adult with a UTI present with confusion and no fever?", "Older adults often have atypical presentations; new confusion can be the first sign of infection."]
  ]
},
{
  id: "skinap", sys: "skin", name: "Skin & Lymph A&P and History",
  sub: "Skin layers, lymph node chains, OLDCARTS for skin, ABCDE, psychosocial and SDOH",
  connect: ["Health history", "Inspection", "Palpation"],
  summary: "Skin has three layers: the avascular epidermis on top (replaced every 3–4 weeks), the vascular dermis (collagen, nerves, glands, follicles), and the fatty hypodermis that cushions bony prominences. Lymph vessels collect extra tissue fluid and filter it through node chains: cervical, axillary, epitrochlear, inguinal.",
  chain: {
    why: ["Epidermis: avascular barrier, mostly keratinocytes", "Dermis: blood vessels, nerves, sweat and oil glands, hair follicles", "Hypodermis: fat for insulation and cushioning", "Lymph: fluid balance, immune filtration, pathogen defense"],
    ask: ["OLDCARTS for any lesion, rash, or swelling", "Skin history: eczema, psoriasis, skin cancer, slow healing", "Mole changes (ABCDE), meds and topicals (steroids), sun and chemical exposure", "Lymph: swollen glands, tenderness, night sweats, unexplained weight loss"],
    exam: ["Inspect color, lesions, integrity", "Palpate temperature (back of hand), moisture, texture, turgor", "Palpate node chains with finger pads in gentle circles"],
    flags: ["A mole that is asymmetric, irregular, multicolored, >6 mm, or changing", "Night sweats + weight loss + hard nodes", "Injury patterns that don't match the story (bruises in different stages)"]
  },
  table: {
    cols: ["OLDCARTS", "For a skin or lymph complaint"],
    rows: [
      ["Onset", "When did the lesion, rash, or swelling start?"], ["Location", "Localized, regional, or generalized?"], ["Duration", "Persistent, constant, or intermittent?"],
      ["Character", "Itching (pruritus), burning, aching, sharp"], ["Aggravating", "Heat, sweating, soaps, clothing?"], ["Relieving", "Cool compresses, elevation, topicals?"],
      ["Timing", "Time of day, season, menstrual cycle?"], ["Severity", "0–10 and effect on daily activities"]
    ]
  },
  table2: {
    title: "ABCDE for moles (melanoma warning signs)",
    cols: ["Letter", "Warning sign"],
    rows: [["A", "Asymmetry"], ["B", "Border irregular"], ["C", "Color varies within the lesion"], ["D", "Diameter larger than 6 mm (a pencil eraser)"], ["E", "Evolving: changing size, shape, color, or new symptoms"]]
  },
  facts: [
    "Psychosocial: visible lesions, acne, scars, and chronic ulcers affect body image; chronic itch causes sleep loss and isolation; stress (cortisol) worsens eczema, psoriasis, and hives.",
    "SDOH: clean water and shelter for wound care, money for dressings and barrier creams, sun/pesticide/chemical exposure.",
    "Abuse screening: multiple bruises in different stages of healing; follow trauma-informed reporting protocols.",
    "Gender-affirming care: use the patient's pronouns; sexual orientation and gender identity are different things."
  ],
  beyond: "ABCDE is spelled out here; the slide names it but does not define the letters.",
  qa: [
    ["Which skin layer has no blood vessels?", "The epidermis. Nutrients reach it from the dermis below."],
    ["Name the four regional lymph node chains from the lecture.", "Cervical, axillary, epitrochlear (inner elbow), and inguinal."],
    ["A client's mole has grown and has a ragged border. What do you do?", "It fits ABCDE warning signs (border, evolving). Document size and features and refer for evaluation."]
  ]
},
{
  id: "skincolor", sys: "skin", name: "Skin Color, Turgor & Darker Skin",
  sub: "Expected vs. unexpected skin findings, assessing people of color, terminology",
  connect: ["Inspection", "Palpation"],
  summary: "Expected skin is an even tone for the person's genetic background, warm and dry, with pink mucous membranes and quick turgor recoil. In darker skin, redness and cyanosis are hard to see, so look where pigment is lowest (sclera, conjunctiva, oral mucosa, palms, soles) and use your hands: warmth, edema, induration.",
  chain: {
    why: ["Color comes from melanin, blood flow, and oxygenation", "Least-pigmented sites show cyanosis, pallor, and jaundice best"],
    ask: ["“What is normal for your skin?” Ask the patient or family for baseline", "Any color changes: yellowing, bluish lips, paleness?"],
    exam: ["Inspect sclera, conjunctiva, oral mucosa, palms, soles", "Palpate for warmth, edema, induration rather than relying on redness", "Turgor: pinch over the clavicle or sternum; recoil should be <2 sec"],
    flags: ["Central cyanosis (lips, tongue, oral mucosa)", "New jaundice (sclera, hard palate)", "Tenting turgor >2 sec = dehydration"]
  },
  table: {
    cols: ["Finding", "In darker skin / where to look"],
    rows: [
      ["Cyanosis", "Dull gray or bluish tones in oral mucosa, soft palate, conjunctiva"],
      ["Pallor", "Ash-gray or yellowish-brown skin; conjunctiva loses its pink"],
      ["Jaundice", "Hard palate and sclera (don't confuse with normal carotene deposits at the outer sclera)"],
      ["Stage 1 pressure injury", "Dark purple, eggplant, or violaceous, with warmth and boggy or firm tissue"],
      ["Baseline", "Always ask what is normal for their skin"]
    ]
  },
  table2: {
    title: "Terms to know",
    cols: ["Term", "Meaning"],
    rows: [["Erythema", "Redness from capillary congestion"], ["Ecchymosis", "Purple bruise from blood leaking into tissue"], ["Petechiae / purpura", "Pinpoint / larger purple spots from bleeding under the skin"], ["Diaphoresis", "Profuse sweating (fever, shock)"], ["Maceration", "Soft, white, broken-down skin from chronic moisture"], ["Induration", "Firm, hardened skin from inflammation"], ["Eschar", "Thick black or brown dead tissue"], ["Exudate", "Drainage: serous (clear), sanguineous (bloody), purulent (pus)"]]
  },
  facts: [
    "Expected: even tone, warm and dry, pink mucous membranes, cap refill <2 sec (Mod 4 slides), prompt turgor recoil.",
    "Unexpected: central cyanosis, jaundice, pallor, persistent non-blanchable redness, tenting turgor, maceration.",
    "Use the back of your hand for temperature and your finger pads for texture and moisture."
  ],
  beyond: "Petechiae and purpura are defined here; the slides list them as red flags without defining the sizes.",
  qa: [
    ["Where is jaundice easiest to see in a client with dark skin?", "The sclera and the hard palate."],
    ["Where do you test turgor, and what is unexpected?", "Over the clavicle or sternum. Tenting longer than 2 seconds suggests dehydration."],
    ["Why palpate instead of just looking for redness in darker skin?", "Redness can be hard to see; warmth, edema, induration, and bogginess reveal inflammation or a Stage 1 injury."]
  ]
},
{
  id: "pi", sys: "skin", name: "Pressure Injury Stages", star: true, starLabel: "Case: Ms. P",
  sub: "Stages 1–4, unstageable, deep tissue injury, blanching, Stage 1 vs. MASD",
  connect: ["Inspection", "Palpation", "Documentation"],
  summary: "Pressure squeezes the tissue between bone and surface until it loses blood flow. Staging is by the deepest tissue you can see: Stage 1 intact but non-blanchable, Stage 2 into the dermis, Stage 3 into fat, Stage 4 to bone, muscle, or tendon. If slough or eschar hides the base, it is unstageable.",
  chain: {
    why: ["Pressure + shear over bony prominences (sacrum, heels, hips)", "Moisture, immobility, poor nutrition, fever speed breakdown"],
    ask: ["Mobility, continence, nutrition, sensation", "Pain or burning over bony areas"],
    exam: ["Inspect every bony prominence; turn the client", "Blanch test: press a few seconds; does color return?", "Palpate for warmth, bogginess, firmness (especially in darker skin)", "Measure length × width × depth in cm"],
    flags: ["Non-blanchable redness that does not resolve = Stage 1: start prevention now", "Exposed bone, tendon, or muscle", "Signs of infection: purulent drainage, odor, spreading redness"]
  },
  table: {
    cols: ["Stage", "What you see"],
    rows: [
      ["Stage 1", "Intact skin, non-blanchable erythema (dark purple/eggplant in darker skin)"],
      ["Stage 2", "Partial thickness: exposed dermis; may be an intact or ruptured blister"],
      ["Stage 3", "Full thickness: fat (adipose) visible"],
      ["Stage 4", "Full thickness with exposed bone, muscle, or tendon"],
      ["Unstageable", "Full thickness, base covered by slough or eschar, so depth can't be seen"],
      ["Deep tissue injury", "Intact or not; persistent deep red, maroon, or purple, or a blood-filled blister"]
    ]
  },
  table2: {
    title: "Stage 1 pressure injury vs. MASD",
    cols: ["", "Stage 1 pressure injury", "Moisture-associated skin damage"],
    rows: [["Cause", "Pressure (and shear)", "Moisture: urine, stool, sweat"], ["Where", "Over a bony prominence", "Skin folds, perineum; diffuse"], ["Look", "Localized, non-blanchable redness", "Shiny, diffuse, irregular edges"]]
  },
  facts: [
    "Blanchable = turns white then color returns (pressure relieved, not yet an injury). Non-blanchable = stays red = Stage 1.",
    "Ms. P (78, sepsis, incontinent, bedbound): sacrum stays red after pressure relief → Stage 1 pressure injury.",
    "Gold-standard note: “Right sacral region 2.5 cm × 3.0 cm area of non-blanchable erythema without skin breakdown… localized warmth… Braden 14…”",
    "Prevention for Ms. P: turn q2h with a 30° lateral tilt, float heels, HOB ≤30°, lift sheet, dimethicone barrier cream, wound care and nutrition consults."
  ],
  beyond: "Unstageable and deep tissue injury appear in the slide's staging picture but not its text; the blanch test and MASD comparison are added to answer the Ms. P case question.",
  qa: [
    ["A Black patient's sacrum is not red but feels warm and boggy with a purple tone. What does this suggest?", "A Stage 1 pressure injury."],
    ["A wound has a shallow open area with pink dermis and no visible fat. Stage?", "Stage 2."],
    ["A sacral wound is covered in black eschar. Stage?", "Unstageable: you can't see the base."]
  ]
},
{
  id: "braden", sys: "skin", name: "Braden Scale", star: true, starLabel: "Know the scoring",
  sub: "Six subscales, scoring range, risk levels, targeting the low subscale",
  connect: ["Risk assessment", "Documentation"],
  summary: "The Braden Scale predicts pressure injury risk. Six subscales are scored, and the LOWER the total, the HIGHER the risk. Total ranges from 6 (worst) to 23 (best). Look at each subscale too: a single 1 needs its own intervention even when the total looks okay.",
  chain: {
    why: ["Pressure injuries are preventable when risk is spotted early"],
    ask: ["Can the client feel and report discomfort? (sensory)", "How often are they wet? (moisture)", "Do they walk, move, eat?"],
    exam: ["Score all six subscales", "Total = 6–23", "Find the lowest subscale and target it"],
    flags: ["Total ≤18 = at risk", "≤9 = very high risk", "Any subscale of 1"]
  },
  table: {
    cols: ["Subscale", "Points", "What it asks"],
    rows: [
      ["Sensory perception", "1–4", "Can they feel and respond to pressure discomfort?"], ["Moisture", "1–4", "How often is skin exposed to moisture?"],
      ["Activity", "1–4", "Bedfast, chairfast, walks occasionally, walks frequently"], ["Mobility", "1–4", "Can they change and control body position?"],
      ["Nutrition", "1–4", "Usual food intake"], ["Friction & shear", "1–3", "Do they slide down in bed or need lifting?"]
    ]
  },
  table2: {
    title: "Risk levels (lecture slide)",
    cols: ["Total", "Risk"],
    rows: [["19–23", "No risk"], ["15–18", "Mild risk"], ["13–14", "Moderate risk"], ["10–12", "High risk"], ["9 or below", "Very high (severe) risk"]]
  },
  facts: [
    "Lower score = higher risk.",
    "Friction/shear is scored 1–3; the other five are 1–4.",
    "Ms. P scored 14 (moderate): Moisture 2 → barrier cream and prompt linen changes; Mobility 2 → turn q2h, float heels; Friction/shear 1 → HOB ≤30°, lift sheet.",
    "The Braden Scale does not account for medical devices."
  ],
  qa: [
    ["A client's Braden score is 11. Risk level?", "High risk (10–12)."],
    ["Total is 17, but Moisture is 1. What should the nurse do?", "Treat the moisture problem now (barrier cream, continence care, linen changes). Don't rely on the total alone."],
    ["What are the lowest and highest possible Braden totals?", "6 (highest risk) and 23 (lowest risk)."]
  ]
},
{
  id: "mdrpi", sys: "skin", name: "Medical Device-Related Pressure Injuries",
  sub: "MDRPI: high-risk devices, where they injure, prevention",
  connect: ["Inspection", "Prevention"],
  summary: "Devices used for diagnosis or treatment press on skin and leave injuries shaped like the device. The Braden Scale misses this risk, so a client with a great Braden score can still get one. Remove or reposition devices and inspect underneath at least twice daily.",
  chain: {
    why: ["Rigid or tight devices press on thin skin over bone and cartilage (ears, nose bridge)"],
    ask: ["Pain, burning, or numbness under a device"],
    exam: ["Lift or reposition each device and look underneath", "Check ears under O₂ tubing, nose bridge under masks, lips under ET tubes, inner thigh under Foley tubing"],
    flags: ["Redness or breakdown shaped like the device", "Any skin injury under a device the client can't feel or report"]
  },
  table: {
    cols: ["Device", "Where injury happens", "Prevention"],
    rows: [
      ["Nasal cannula / O₂ tubing", "Top of the ears, cheeks", "Foam tubing pads; check skin (slide says q8h)"],
      ["CPAP / BiPAP mask", "Bridge of nose, forehead", "Hydrocolloid barrier; check mask fit"],
      ["ET / trach tube", "Lips, corners of mouth, neck", "Reposition ET tube daily; foam ties"],
      ["Foley / rigid lines", "Inner thigh, meatus", "Securement device; no tension"],
      ["Pulse oximeter probe", "Finger, ear", "Rotate sites every 4 hours"]
    ]
  },
  facts: [
    "High-risk devices: CPAP/BiPAP masks, nasal cannulas, ET tubes, trach ties, Foley catheters, pulse ox probes, rigid splints.",
    "Minimum: inspect under devices at least twice daily (follow agency policy; q8h for cannula is more often, not a contradiction)."
  ],
  qa: [
    ["A client on BiPAP has a Braden score of 21. Is the client at risk for a pressure injury?", "Yes, from the device. The Braden Scale does not account for device pressure."],
    ["How often should a pulse oximeter probe site be rotated?", "Every 4 hours."]
  ]
},
{
  id: "wound", sys: "skin", name: "Wounds: Tunneling vs. Undermining",
  sub: "Clock-face orientation, measuring depth, exudate, wound documentation",
  connect: ["Inspection", "Measurement", "Documentation"],
  summary: "Tunneling is a narrow channel running from the wound into deeper tissue. Undermining is a wide shelf of destroyed tissue under intact skin along the wound edge. Both are described with a clock face where 12 o'clock points to the patient's head, and measured with a sterile cotton-tipped applicator in centimeters.",
  chain: {
    why: ["Hidden spaces under or beyond the wound can trap bacteria and delay healing"],
    ask: ["Pain, odor, drainage changes"],
    exam: ["Orient with a clock face: 12 = head, 6 = feet", "Insert a sterile applicator gently until resistance", "Mark the stick at the wound edge with a gloved finger", "Remove and measure against a metric ruler (cm)"],
    flags: ["Purulent drainage, foul odor, spreading redness", "Tunneling that is deepening on reassessment"]
  },
  table: {
    cols: ["", "Tunneling", "Undermining"],
    rows: [["Shape", "Narrow channel", "Wide shelf or lip under the edge"], ["Direction", "Any direction into deeper tissue (fascia, muscle)", "Along the wound edges under intact skin"], ["Charting", "“Tunneling at 2 o'clock extending 1.8 cm deep”", "“Undermining from 3 to 6 o'clock, 1.5 cm at deepest”"]]
  },
  facts: [
    "Exudate types: serous (clear), sanguineous (bloody), purulent (pus). Document color, amount, odor, and type.",
    "Don't chart “small sore on bottom” or “wound looks better”: give size in cm, location, and comparison to baseline.",
    "NANDA: Impaired Skin Integrity (epidermis/dermis), Impaired Tissue Integrity (Stage 3–4), Risk for Infection (broken barrier, tunneling)."
  ],
  beyond: "The undermining charting example is written to match the slide's tunneling example.",
  qa: [
    ["Which direction is 12 o'clock on a wound?", "Toward the patient's head."],
    ["How do you measure the depth of a tunnel?", "Gently insert a sterile cotton-tipped applicator until you feel resistance, mark it at the wound edge with a gloved finger, remove, and measure in cm."]
  ]
},
{
  id: "nodes", sys: "skin", name: "Lymph Nodes & Skin Red Flags",
  sub: "Expected vs. unexpected nodes, red flags to prioritize and escalate",
  connect: ["Palpation", "Prioritization"],
  summary: "Normal nodes are not palpable, or small (<1 cm), soft, mobile, and nontender. Tender and mobile suggests the body fighting an infection. Hard, fixed, painless, and larger than 1 cm suggests cancer. Some skin findings can't wait: central cyanosis, petechiae and purpura, rapidly spreading cellulitis, and new jaundice.",
  chain: {
    why: ["Nodes filter lymph; they swell when fighting infection or when cancer spreads to them"],
    ask: ["Swollen glands, tenderness, night sweats, weight loss, recent infection"],
    exam: ["Finger pads, gentle circles, both sides", "Note size, consistency, mobility, tenderness, location"],
    flags: ["Hard, fixed, painless node >1 cm → urgent referral", "Central cyanosis → oxygen/airway, call provider now", "Petechiae/purpura → bleeding disorder or sepsis", "Spreading cellulitis → mark border, cultures, IV antibiotics", "Acute jaundice → LFTs, watch for confusion"]
  },
  table: {
    cols: ["Node finding", "Suggests"],
    rows: [["Not palpable, or <1 cm, soft, mobile, nontender", "Expected"], ["Enlarged, tender, firm, mobile", "Infection"], ["Hard, fixed, non-tender, >1 cm", "Malignancy (lymphoma or metastatic cancer)"]]
  },
  table2: {
    title: "Skin red flags: prioritize and escalate",
    cols: ["Finding", "Why / action"],
    rows: [
      ["Central cyanosis", "Arterial hypoxia: immediate airway/oxygen intervention; call the provider now"],
      ["Petechiae & purpura", "Possible bleeding disorder, low platelets, or sepsis/meningococcemia"],
      ["Rapidly spreading cellulitis", "Mark the red border with a skin marker; blood and wound cultures; escalate for IV antibiotics"],
      ["Acute jaundice", "Possible liver failure: check LFTs and bilirubin; watch for hepatic encephalopathy (confusion)"],
      ["Hard, fixed lymph nodes", ">1 cm, firm, non-tender, fixed: refer for urgent biopsy"]
    ]
  },
  facts: [
    "Memory aid: tender + mobile = infection. Hard + fixed + painless = worry about cancer.",
    "Marking the border of cellulitis lets everyone see whether it is spreading."
  ],
  qa: [
    ["A neck node is 2 cm, hard, fixed, and painless. Concern?", "Possible malignancy; report for further evaluation."],
    ["A client has a tender, mobile 1.5 cm node under the jaw and a sore throat. Most likely?", "A reactive node from infection."]
  ]
},

/* ================= MOD 5: CARDIOVASCULAR ================= */
{
  id: "heartap", sys: "cv", name: "Heart Location, Anatomy & Blood Flow",
  sub: "Base and apex, layers, chambers, valves, systole and diastole",
  connect: ["Anatomy", "Auscultation"],
  summary: "The heart sits in the mediastinum behind the sternum, resting on the diaphragm. The base (top) is around the 2nd ICS; the apex points down and left to the 5th ICS at the midclavicular line, where you feel the PMI and count the apical pulse. Blood moves one way through four chambers and four valves.",
  chain: {
    why: ["Two questions for every CV assessment: is the heart pumping well, and is blood reaching the tissues and returning?"],
    ask: ["Activity tolerance: what can they do now compared with before?"],
    exam: ["Find the apex/PMI: 5th ICS, left MCL", "Listen where the valves are heard best (APE To Man)"],
    flags: ["Heart and lungs sit side by side: lung problems strain the heart and a failing heart floods the lungs"]
  },
  table: {
    cols: ["Part", "Key points"],
    rows: [
      ["Layers", "Pericardium (sac with a little fluid), myocardium (muscle), endocardium (inner lining of chambers and valves)"],
      ["Chambers", "Atria receive; ventricles pump. LV has the thickest wall (pumps to the body)"],
      ["AV valves", "Tricuspid (RA→RV), mitral (LA→LV): close for S1"],
      ["Semilunar valves", "Pulmonic (RV→pulmonary artery), aortic (LV→aorta): close for S2"],
      ["Vessels", "Pulmonary artery carries deoxygenated blood (an artery because it leaves the heart); pulmonary veins bring oxygenated blood to the LA"]
    ]
  },
  facts: [
    "Flow: body → vena cava → RA → tricuspid → RV → pulmonic → pulmonary artery → lungs → pulmonary veins → LA → mitral → LV → aortic → aorta → body.",
    "Diastole: ventricles relax and fill. Systole: ventricles contract and eject.",
    "Arteries (thick, high pressure) → arterioles (resistance) → capillaries (exchange) → veins (low pressure, reservoir).",
    "Venous return is helped by venous valves, skeletal muscle contraction, and breathing pressure changes."
  ],
  qa: [
    ["Where is the apex of the heart?", "5th intercostal space, left midclavicular line: the PMI and apical pulse."],
    ["Which chamber has the thickest wall, and why?", "The left ventricle, because it pumps blood out to the whole body."],
    ["Why is the pulmonary artery called an artery if it carries deoxygenated blood?", "Arteries carry blood away from the heart."]
  ]
},
{
  id: "conduction", sys: "cv", name: "Electrical Conduction System",
  sub: "SA node → AV node → bundle of His → bundle branches → Purkinje fibers",
  connect: ["Pulses", "Auscultation"],
  summary: "The SA node in the right atrium is the natural pacemaker. Its impulse makes the atria contract, the AV node holds it briefly so the ventricles can fill, then it races down the bundle of His, bundle branches, and Purkinje fibers so the ventricles contract together. The electrical system says when; the muscle provides the force.",
  chain: {
    why: ["Abnormal impulses make the heart too fast, too slow, or irregular", "Rate and rhythm problems can drop cardiac output"],
    ask: ["Palpitations, dizziness, syncope, chest discomfort, SOB, weakness"],
    exam: ["Count the apical pulse a full 60 seconds", "Check that apical and peripheral pulses match", "Note rate and regularity"],
    flags: ["New irregular rhythm", "Symptomatic tachycardia >100 at rest or bradycardia <60", "Apical rate higher than radial (pulse deficit)"]
  },
  facts: [
    "SA node → AV node (delay) → bundle of His → bundle branches → Purkinje fibers.",
    "The AV node delay lets the ventricles fill before they contract.",
    "Labs and tests: ECG shows electrical activity; echocardiogram shows structures and flow."
  ],
  beyond: "“Pulse deficit” is the name for an apical rate higher than the radial rate; the slide says to check that apical and peripheral pulses match.",
  qa: [
    ["What is the heart's natural pacemaker, and where is it?", "The SA node, in the right atrium."],
    ["Why does the AV node delay the impulse?", "So the ventricles have time to fill before they contract."]
  ]
},
{
  id: "cvhistory", sys: "cv", name: "CV History, Chest Pain & SDOH",
  sub: "Subjective interview, A&P links to symptoms, PQRST, MI symptoms by gender, pediatric chest pain",
  connect: ["Health history", "PQRST", "Prioritization"],
  summary: "Cardiovascular problems often show up as changes in function, so ask what the client can do now compared with before. Link each symptom to its cause: chest pain = not enough blood to heart muscle; orthopnea = fluid backing into the lungs; palpitations = rhythm; edema and weight gain = venous congestion. Women often have an MI without classic chest pain.",
  chain: {
    why: ["Coronary flow ↓ → O₂ ↓ → ischemic pain", "Poor pumping backs fluid into the lungs", "Abnormal rhythm ↓ cardiac output", "Venous congestion → edema, weight gain, nocturia"],
    ask: ["Chest pain/pressure, SOB, palpitations, dizziness/syncope, swelling, fatigue (OLDCARTS)", "PMH: HTN, CAD, HF, valve disease, PVD, cholesterol, prior MI or stroke, stents, pacemaker", "Meds, family history (premature CVD), smoking/vaping, activity, diet, alcohol"],
    exam: ["For chest pain: continuous VS and SpO₂, skin color, breathing effort, JVD and edema"],
    flags: ["Chest pain: never leave the client; stop activity, semi-Fowler's, O₂ per protocol, IV, ECG, rapid response, notify provider", "Child with chest pain during exercise or with fainting"]
  },
  table: {
    cols: ["Typical in men", "More common in women"],
    rows: [["Chest pain and pressure", "Often no classic chest pain"], ["Sweating, lightheadedness", "Back and neck pain, nausea and vomiting"], ["Shortness of breath, stomach pain", "Shortness of breath, dizziness, anxiety, fatigue"]]
  },
  tableTitle: "Heart attack symptoms by gender",
  table2: {
    title: "PQRST for chest pain",
    cols: ["Letter", "Ask"],
    rows: [["P: Pattern / provoking", "What brought it on? Exertion or rest? What helps?"], ["Q: Quality", "Point to it. Sharp, dull, crushing, pressure?"], ["R: Radiation", "Does it spread to the arm, jaw, neck, back?"], ["S: Severity", "0–10; associated nausea, sweating, dyspnea, numbness"], ["T: Time / treatment", "When did it start? Taken anything for it?"]]
  },
  facts: [
    "In the ROS, follow up pertinent positives with OLDCARTS and document negatives as “denies…”.",
    "Pediatric chest pain is usually benign: idiopathic or musculoskeletal (precordial catch, costochondritis), asthma, GERD, anxiety. Cardiac causes are rare.",
    "SDOH: access to meds and appointments, transportation, cost, food access, safe places to exercise, stress and support, job and caregiving demands, tobacco, alcohol, stimulants.",
    "Oxygen: the slide says non-rebreather; current guidelines give O₂ for SpO₂ below about 90% or distress. On the exam, follow the order or protocol in the question."
  ],
  qa: [
    ["A 55-year-old woman reports nausea, jaw and back pain, and fatigue, but no chest pain. What should the nurse consider?", "A possible MI; women often present without classic chest pain."],
    ["What is the nurse's first priority when a client reports new chest pain?", "Stay with the client, stop activity, and get help (VS, O₂ per protocol, ECG, rapid response, notify provider)."],
    ["A 12-year-old has sharp, brief left chest pain at rest that goes away in seconds. Likely cause?", "Precordial catch syndrome: musculoskeletal and harmless. Red flags would be pain with exercise or fainting."]
  ]
},
{
  id: "cvvitals", sys: "cv", name: "Vital Signs & Perfusion",
  sub: "Expected ranges, compensation patterns, the red-flag pattern",
  connect: ["Vital signs", "Pattern recognition"],
  summary: "One abnormal number may not mean much; the pattern does. The body compensates: low SpO₂ drives the respiratory rate up, low BP drives the heart rate up. Tachycardia plus hypotension plus tachypnea plus low SpO₂ together means the cardiovascular system is failing and tissues are hypoxic.",
  chain: {
    why: ["BP pushes blood to organs; HR and stroke volume make cardiac output"],
    ask: ["Dizziness on standing, fatigue, SOB lying flat (orthopnea)"],
    exam: ["Full VS; compare with baseline and trend", "Orthostatic BP if dizzy on standing", "Note pulse pressure (narrow = low stroke volume)"],
    flags: ["HR >100 + SBP <100 + RR >20 + SpO₂ <95% together", "New SBP <100", "Orthostatic drop"]
  },
  table: {
    cols: ["Measure", "Expected", "Abnormal / meaning"],
    rows: [
      ["Heart rate", "60–100", "Tachycardia >100 (compensation, meds, arrhythmia, anxiety); bradycardia <60 (may not perfuse organs)"],
      ["Blood pressure", "<120/80", "Hypotension SBP <100; hypertension (slide: >120/>80; ACC/AHA stage 1 starts at 130/80); narrow pulse pressure (90/70) = low stroke volume"],
      ["SpO₂", "95–100% RA", "<95% hypoxemia; no reading may mean poor perfusion or cold hands"],
      ["Respirations", "12–20", "Tachypnea >20 (compensating); orthopnea = fluid backing into lungs (left-sided HF)"]
    ]
  },
  facts: [
    "Eleanor (72): HR 104, BP 154/88, RR 22, SpO₂ 94%, exertional SOB, 3-pillow orthopnea, 5 lb gain in a week, S3, 2+ ankle edema → the heart isn't keeping up and fluid is building.",
    "Older adults: stiffer arteries raise systolic BP; check for orthostatic hypotension.",
    "Pregnancy: blood volume, HR, and cardiac output rise; a mild HR increase may be expected."
  ],
  qa: [
    ["BP 90/70. What does the narrow pulse pressure suggest?", "Low stroke volume: the heart isn't ejecting much blood with each beat."],
    ["Low BP leads to which compensation?", "Tachycardia."]
  ]
},
{
  id: "jvd", sys: "cv", name: "JVD & Inspection",
  sub: "Positioning for JVD, causes, carotid vs. jugular, precordium and skin",
  connect: ["Inspection", "Positioning"],
  summary: "Jugular vein distention reflects right atrial pressure. With the head of the bed at 30–45°, the jugular veins should not be distended. If they are, blood is backing up from the right heart: right-sided heart failure, fluid overload, tamponade, constrictive pericarditis, or pulmonary hypertension.",
  chain: {
    why: ["Internal jugular vein connects straight to the right atrium: pressure there shows up in the neck"],
    ask: ["SOB, leg swelling, weight gain"],
    exam: ["Supine, HOB 30–45°, pillow removed, head turned slightly away", "Look at the right side of the neck", "Inspect the precordium for scars, pulsations, heaves", "Inspect skin color: face, lips, fingertips (palms, conjunctiva, inner lip in darker skin)"],
    flags: ["JVD upright or at HOB 30–45°, especially with SOB or leg swelling", "Central cyanosis"]
  },
  table: {
    cols: ["", "Carotid pulse", "Jugular pulsation"],
    rows: [["Feel", "Single strong outward beat you can feel", "Soft, multiple waves, not palpable"], ["Position", "Does not change with position", "Drops when the patient sits up"]]
  },
  facts: [
    "JVD is painless but a red flag.",
    "Cyanosis = low oxygenation/perfusion; pallor = reduced blood flow, oxygen, or RBCs.",
    "Order for the CV exam: vital signs → inspect → palpate → auscultate."
  ],
  beyond: "The carotid-vs-jugular comparison is added; the slide only says not to confuse them.",
  qa: [
    ["At what position should JVD be assessed?", "HOB 30–45°, pillow removed, head turned slightly away."],
    ["JVD most often points to a problem on which side of the heart?", "The right side (right-sided HF or fluid overload)."]
  ]
},
{
  id: "periph", sys: "cv", name: "Extremities: Arterial vs. Venous & CWMS",
  sub: "Inspecting the arms and legs, PAD vs. venous insufficiency, DVT, Color-Warmth-Movement-Sensation",
  connect: ["Inspection", "Palpation", "Comparison"],
  summary: "Compare both sides every time. Arterial insufficiency starves the tissue: pale, cool, hairless, shiny skin with weak pulses and slow refill. Venous insufficiency backs blood up: swelling, brown staining, and varicose veins with pulses usually present. One warm, red, swollen, tender calf is a possible DVT.",
  chain: {
    why: ["Hair follicles need arterial blood", "Pooled venous blood leaks iron (hemosiderin) into the skin"],
    ask: ["Leg pain with walking, color or temperature changes, wounds that won't heal"],
    exam: ["Inspect both arms together, then both legs: hair, ulcers, edema, veins", "CWMS: color, warmth (back of hand), movement, sensation", "Compare calves for DVT signs"],
    flags: ["Unilateral calf redness, warmth, tenderness, swelling: possible DVT, report now", "Cool, pale limb with absent pulse", "Impaired movement or sensation of fingers or toes"]
  },
  table: {
    cols: ["", "Arterial (PAD)", "Venous insufficiency"],
    rows: [["Hair", "Lost; shiny, hairless skin", "Normal"], ["Skin", "Pale, cool", "Brown (hemosiderin) staining, varicose veins"], ["Pulses / refill", "Weak or absent; slow refill", "Usually present"], ["Edema", "Usually minimal", "Chronic swelling"]]
  },
  table2: {
    title: "CWMS",
    cols: ["Check", "How / meaning"],
    rows: [["Color", "Inspect: pallor, cyanosis, rubor (dusky red)"], ["Warmth", "Back of hand, both sides: cool = arterial; warm = inflammation, venous stasis, DVT"], ["Movement", "Wiggle, flex, extend fingers and toes (nerves and muscle perfusion)"], ["Sensation", "Light touch both sides (neuropathy, nerve compression)"]]
  },
  facts: ["Always compare right with left.", "Rubor = dusky redness, often in a dependent arterial-insufficient limb."],
  beyond: "“Usually minimal edema” in arterial disease is added; the table is organized from the slide notes.",
  qa: [
    ["A patient's left calf is warm, red, and swollen; the right is normal. Priority?", "Possible DVT; report immediately."],
    ["Shiny, hairless shins with weak pedal pulses suggest what?", "Arterial insufficiency (PAD)."]
  ]
},
{
  id: "pulses", sys: "cv", name: "Pulses & Capillary Refill",
  sub: "Pulse sites, 0–4+ grading, carotid safety, Doppler, cap refill",
  connect: ["Palpation", "Comparison", "Documentation"],
  summary: "Palpate pulses on both sides for rate, rhythm, and strength, and grade them 0 to 4+ where 2+ is normal. Never press both carotids at once. If you can't find a pulse, decide whether it's new, then use a Doppler; absent even by Doppler may be an emergency. Capillary refill should return in about 2–3 seconds.",
  chain: {
    why: ["Pulses show whether arterial blood is reaching each limb"],
    ask: ["Numbness, coldness, pain in a limb"],
    exam: ["Radial, brachial, (carotid one side), femoral, popliteal, posterior tibial, dorsalis pedis", "Grade 0–4+", "Cap refill: press nail until white, release, time the color return"],
    flags: ["New absent pulse (even with Doppler)", "Weak/thready or bounding pulse; new irregular pulse", "Cap refill >2–3 sec"]
  },
  table: {
    cols: ["Grade", "Meaning"],
    rows: [["0", "Absent, can't be felt"], ["1+", "Weak, thready, diminished"], ["2+", "Normal, brisk (expected)"], ["3+", "Increased, strong"], ["4+", "Bounding, full"]]
  },
  tableTitle: "Pulse grading (slide scale)",
  facts: [
    "Posterior tibial: behind and below the medial malleolus. Dorsalis pedis: top of the foot, lateral to the big toe's extensor tendon.",
    "Carotid: one side at a time, never both (can reduce blood flow to the brain).",
    "Document location, grade, symmetry, rate and rhythm: “Radial pulses 2+ bilaterally; dorsalis pedis 1+ bilaterally.”",
    "Cap refill: Mod 4 slides say <2 sec, Mod 5 says 2–3 sec. ≤2 is clearly normal; >3 is clearly abnormal.",
    "The slide uses 0–4+; its speaker notes describe a 0–3 scale. This guide follows the slide."
  ],
  qa: [
    ["Why should the nurse not palpate both carotids at once?", "It can reduce blood flow to the brain."],
    ["You can't palpate a dorsalis pedis pulse. Next step?", "Decide whether it is new or chronic and use a Doppler. If absent even with Doppler, notify the provider."],
    ["Where is the posterior tibial pulse?", "Just behind and below the medial malleolus (inner ankle bone)."]
  ]
},
{
  id: "edema", sys: "cv", name: "Peripheral Edema",
  sub: "Pitting edema grading, dependent edema, what it means",
  connect: ["Palpation", "Documentation"],
  summary: "Retained fluid leaks into dependent tissue (third spacing), so the lower legs swell first, and the higher it climbs the more overloaded the client is. Press firmly a few seconds over the shin or ankle and grade the pit by its depth: 1+ (0–2 mm) up to 4+ (8 mm).",
  chain: {
    why: ["Venous congestion and fluid retention (heart failure, kidney or liver disease, high sodium) push fluid into tissue"],
    ask: ["Weight gain, tight shoes or rings, nocturia, SOB lying flat"],
    exam: ["Press over the shin or ankle a few seconds", "Measure pit depth and rebound", "Note location and how high it goes; compare sides; daily weights"],
    flags: ["Rapid unexplained weight gain", "New or worsening edema", "Unilateral edema (DVT)"]
  },
  table: {
    cols: ["Grade", "Pit depth", "Rebound (slide)"],
    rows: [["1+", "0–2 mm", "Immediately"], ["2+", "3–4 mm", "<15 sec"], ["3+", "5–6 mm", "Up to 30 sec"], ["4+", "8 mm", ">20 sec (likely a typo; references give longer)"]]
  },
  facts: [
    "Focus on pit depth: the rebound times on the slide are inconsistent (4+ shouldn't be faster than 3+).",
    "Chart: “2+ pitting edema bilateral ankles,” never “mild edema.”",
    "Edema + weight gain + orthopnea + S3 in an older adult points to heart failure."
  ],
  qa: [
    ["A 4 mm pit that rebounds in about 10 seconds. Grade?", "2+."],
    ["Why do the lower legs swell first?", "Gravity: fluid collects in dependent tissue."]
  ]
},
{
  id: "heartsounds", sys: "cv", name: "Auscultation: APE To Man, S1 & S2", star: true, starLabel: "Landmarks are testable",
  sub: "Cardiac landmarks, technique, apical pulse, expected heart sounds, tips",
  connect: ["Auscultation", "Positioning"],
  summary: "Listen at five landmarks in order (APE To Man), first with the diaphragm, then with the bell. S1 (lub) is the AV valves closing at the start of systole, loudest at the apex. S2 (dub) is the semilunar valves closing at the start of diastole, loudest at the base. The pause after S2 (diastole) is normally longer.",
  chain: {
    why: ["Valve closure makes S1 and S2", "Each valve is heard best downstream of where it sits"],
    ask: ["“Please try not to talk while I listen.”"],
    exam: ["Diaphragm at A → P → E → T → M; then repeat with the bell", "Identify S1 and S2, rate and rhythm, extra sounds", "Apical pulse at 5th ICS MCL for a full 60 sec", "Ask a client with breasts to lift breast tissue for the mitral area"],
    flags: ["New extra sound (murmur, S3, S4)", "Irregular rhythm that is new"]
  },
  table: {
    cols: ["Landmark", "Location"],
    rows: [["A: Aortic", "2nd ICS, right sternal border"], ["P: Pulmonic", "2nd ICS, left sternal border"], ["E: Erb's point", "3rd ICS, left sternal border"], ["T: Tricuspid", "4th ICS, left sternal border"], ["M: Mitral (apical)", "5th ICS, left midclavicular line (PMI)"]]
  },
  table2: {
    title: "S1 vs. S2",
    cols: ["", "S1 (lub)", "S2 (dub)"],
    rows: [["Caused by", "Mitral + tricuspid closing", "Aortic + pulmonic closing"], ["Marks", "Start of systole", "Start of diastole"], ["Pitch", "Dull, lower, longer", "Higher, shorter"], ["Loudest", "Apex (mitral)", "Base (aortic, pulmonic)"]]
  },
  facts: [
    "Tips: lean forward or left side-lying; brief breath-hold (≤10 sec) if lung sounds interfere; TV off, door closed; practice.",
    "Systole is the short pause between S1 and S2; diastole (S2 to next S1) is longer.",
    "Not sure which sound is S1? Feel the carotid while you listen: S1 happens with the carotid pulse.",
    "Document: “S1, S2 present, regular rate and rhythm, no murmurs,” not “heart sounds normal.”"
  ],
  beyond: "Using the carotid pulse to time S1 is added.",
  qa: [
    ["Where is S2 loudest?", "At the base (aortic and pulmonic areas)."],
    ["Where do you place the stethoscope to assess the tricuspid area?", "4th ICS, left sternal border."],
    ["How long do you count an apical pulse?", "A full 60 seconds."]
  ]
},
{
  id: "extrasounds", sys: "cv", name: "Extra Sounds, Findings to Report & Diagnostics",
  sub: "S3, S4, murmurs, clicks, rubs; abnormal findings to report; tests and labs; documentation",
  connect: ["Auscultation", "Prioritization", "Documentation"],
  summary: "Extra sounds are hard for beginners, so report anything new. S3 (“Ken-TUCK-y”) comes right after S2 from rapid filling or volume overload: normal in kids, heart failure in an older adult with edema. S4 (“TEN-nes-see”) comes right before S1 from a stiff ventricle and is abnormal. A murmur is turbulent flow; a new one must be reported.",
  chain: {
    why: ["Volume overload or stiff ventricles change how blood fills the heart"],
    ask: ["Orthopnea, weight gain, edema, fatigue"],
    exam: ["Use the bell for S3, S4, and murmurs", "Lean forward or left side-lying to bring sounds out"],
    flags: ["New murmur, S3, or S4", "Pericardial friction rub", "Rapid weight gain, new SBP <100, absent pulse, chest pain, unilateral calf signs, JVD at 30–45°"]
  },
  table: {
    cols: ["Sound", "Description"],
    rows: [
      ["S3 (Ken-TUCK-y)", "Low-pitched, early diastole right after S2; rapid filling/volume overload; normal in children, HF in older adults"],
      ["S4 (TEN-nes-see)", "Low-pitched, late diastole right before S1; stiff, noncompliant ventricle; abnormal"],
      ["Murmur", "Blowing or whooshing from turbulent flow; innocent or pathologic; ~50% of children (Still's murmur ages 2–6); new = report"],
      ["Click", "High-pitched, just after S1 (e.g., mitral valve prolapse)"],
      ["Pericardial friction rub", "Grating or scratching from an inflamed pericardium"]
    ]
  },
  table2: {
    title: "Tests and labs",
    cols: ["Test", "What it shows"],
    rows: [["ECG", "Electrical activity"], ["Echocardiogram", "Structures and blood flow (ultrasound)"], ["Heart catheterization", "The heart (and lungs) from inside"], ["CT / cardiac MRI", "Detailed images; MRI shows the moving heart"], ["BNP", "Heart failure"], ["Troponin", "Heart muscle damage"], ["CBC, ABG, electrolytes", "Oxygen carrying, gas exchange, rhythm risks"]]
  },
  facts: [
    "Report: rapid weight gain; new/worse edema; cool, overly warm, or diaphoretic skin; cyanosis or pallor; cap refill >2–3 sec; absent, weak, or bounding pulses; symptomatic HR >100 or <60; new irregular rhythm or extra sounds; new SBP <100 or orthostatic changes; chest pain, calf pain, worsening SOB; impaired movement or sensation; unilateral calf signs; JVD at 30–45°.",
    "Key terms: RRR, dyspnea on exertion, orthopnea, angina, JVD, murmur."
  ],
  qa: [
    ["A low-pitched sound right after S2 in a 74-year-old with edema suggests what?", "An S3, associated with volume overload and heart failure."],
    ["Which chest piece do you use for S3, S4, and murmurs?", "The bell (low-pitched sounds)."],
    ["Which lab points to heart muscle damage?", "Troponin. BNP points to heart failure."]
  ]
},

/* ================= MOD 6: HEENT ================= */
{
  id: "heentap", sys: "heent", name: "HEENT Anatomy, History & SDOH",
  sub: "Why HEENT matters, anatomy overview, subjective questions, psychosocial, equipment",
  connect: ["Health history", "Equipment"],
  summary: "HEENT structures support neurologic function (cranial nerves), vision, hearing and balance, the upper airway, swallowing and nutrition, and circulation to the brain (carotids). Start broad (“Any changes in your vision, hearing, head, nose, or throat?”), follow positives with OLDCARTS, then examine head → eyes → ears → nose → mouth/throat → neck, comparing sides.",
  chain: {
    why: ["Ears: external (auricle, canal), middle (TM, ossicles), inner (cochlea for hearing, vestibular system for balance)", "Eye: cornea, iris, pupil, lens, retina, optic nerve, extraocular muscles", "Neck: nodes, thyroid, trachea, carotids"],
    ask: ["Headaches, dizziness/vertigo, head injury or LOC", "Vision changes, double vision, eye pain/discharge, glasses, last eye exam", "Hearing loss, ear pain, tinnitus, drainage, hearing aids", "Congestion, nosebleeds, sinus pressure; sore throat, hoarseness, trouble swallowing, dental pain"],
    exam: ["Equipment: penlight, otoscope, tongue depressor, Snellen chart, tuning fork, stethoscope, gloves", "Order: head → eyes → ears → nose → mouth/throat → neck"],
    flags: ["Untreated hearing loss in the hospital is a safety risk (missed instructions, alarms, consent)"]
  },
  facts: [
    "History also covers prior HEENT conditions or surgery, eye/ear drops and allergy meds, family history of hearing or vision problems, tobacco/vaping, occupational noise, oral hygiene.",
    "Psychosocial: vision or hearing loss affects independence; chronic dizziness causes fear of falling; appearance, speech, or swallowing changes affect confidence.",
    "SDOH: cost of glasses, hearing aids, and dental care; screening access; noise or irritants at work; transportation to specialists; health literacy and language barriers.",
    "Nursing: ask about barriers, provide communication accommodations, connect to follow-up."
  ],
  qa: [
    ["Sarah Mitchell (58) has dizziness when she turns her head and a plugged right ear. What else would you ask?", "Onset and pattern of the dizziness, hearing loss, tinnitus, ear pain or drainage, head injury, meds, and whether it affects safety (falls)."],
    ["Why is untreated hearing loss a safety issue in the hospital?", "The client can miss instructions and alarms and may not truly consent."]
  ]
},
{
  id: "cn", sys: "heent", name: "Cranial Nerves I–XII", star: true, starLabel: "Link test to nerve",
  sub: "Function of each nerve and the maneuver that tests it",
  connect: ["Neuro", "Functional testing"],
  summary: "You don't need every detail. Know which maneuver tests which nerve: smell (I), vision (II), eye movements and pupils (III, IV, VI), face sensation and chewing (V), facial expression (VII), hearing and balance (VIII), “ah” and swallowing (IX, X), shoulder shrug (XI), and tongue (XII).",
  chain: {
    why: ["Cranial nerves run HEENT function; a deficit can be the first sign of a neuro problem"],
    ask: ["Changes in smell, vision, hearing, swallowing, voice, facial movement"],
    exam: ["Run each test and compare sides"],
    flags: ["Sudden facial droop or asymmetry", "New unequal pupils with neuro symptoms", "Sudden vision or hearing loss"]
  },
  table: {
    cols: ["Nerve", "Function", "How to assess"],
    rows: [
      ["I Olfactory", "Smell", "Familiar scent, one nostril at a time"],
      ["II Optic", "Vision", "Snellen acuity; visual fields by confrontation"],
      ["III, IV, VI Oculomotor, Trochlear, Abducens", "Eye movement (III also constricts the pupil)", "EOMs in the “H” pattern; pupil responses"],
      ["V Trigeminal", "Facial sensation, chewing", "Light touch and sharp/dull on the face, eyes closed; jaw against resistance"],
      ["VII Facial", "Facial expression, taste", "Smile, close eyes tightly, puff cheeks"],
      ["VIII Vestibulocochlear", "Hearing, balance", "Whisper or finger rub; Weber and Rinne"],
      ["IX, X Glossopharyngeal, Vagus", "Swallowing, palate movement, voice", "Say “ah” (uvula rises midline); voice; swallow"],
      ["XI Accessory", "Neck and shoulder movement", "Shrug and turn head against resistance"],
      ["XII Hypoglossal", "Tongue movement", "Stick out tongue: midline"]
    ]
  },
  facts: [
    "Names in order: “Oh Oh Oh To Touch And Feel Very Good Velvet, Ah Heaven.”",
    "Eye muscles: LR6 SO4 (lateral rectus = VI, superior oblique = IV, everything else = III).",
    "The light reflex tests II (senses light) and III (constricts the pupil)."
  ],
  beyond: "The mnemonic and LR6 SO4 are added memory aids.",
  qa: [
    ["The uvula deviates to one side when the patient says “ah.” Which nerves?", "CN IX and X."],
    ["How do you test CN XI?", "Shoulder shrug and head turn against resistance."],
    ["The patient can't puff out one cheek. Which nerve?", "CN VII (facial)."]
  ]
},
{
  id: "headface", sys: "heent", name: "Head, Face, Nose & Sinuses",
  sub: "Skull, TMJ, facial symmetry (CN V, VII), nasal patency, sinuses, smell",
  connect: ["Inspection", "Palpation"],
  summary: "Inspect the skull, scalp, and hair and look for facial symmetry. Palpate the skull and the TMJ while the client opens and closes. Test CN VII (smile, close eyes tightly, puff cheeks) and CN V (light touch and sharp/dull with eyes closed, jaw against resistance). Check nasal patency one side at a time and palpate the frontal and maxillary sinuses.",
  chain: {
    why: ["Facial symmetry and sensation reflect CN V and VII", "Sinuses can fill and become tender with inflammation or infection"],
    ask: ["Headaches, facial pain, congestion, drainage, nosebleeds, smell changes"],
    exam: ["Skull shape, size, symmetry; hair distribution; lesions, masses", "TMJ: tenderness, clicking, limited movement", "Nares patent one at a time; mucosa pink and moist; septum", "Palpate frontal and maxillary sinuses"],
    flags: ["Sudden facial droop → stroke response", "Recurrent nosebleeds → further evaluation"]
  },
  facts: [
    "Expected: normocephalic, atraumatic; symmetric face and movement; nares patent; mucosa pink and moist; sinuses nontender.",
    "Sinus tenderness suggests inflammation, infection, or allergies.",
    "Smell (CN I): test only if the client reports a problem; one nostril at a time with a familiar, non-irritating scent."
  ],
  qa: [
    ["How do you check nasal patency?", "Occlude one nostril and have the client breathe through the other; repeat on the other side."],
    ["Which sinuses can you palpate?", "Frontal and maxillary."]
  ]
},
{
  id: "eyes", sys: "heent", name: "Eyes: Inspection, Acuity & Visual Fields",
  sub: "External eye, Snellen chart, confrontation visual fields",
  connect: ["Inspection", "Functional testing"],
  summary: "Inspect the lids, lashes, conjunctiva, and sclera (expected: white sclera, no abnormal redness). Test acuity (CN II) with a Snellen chart at 20 feet, one eye at a time, noting glasses. Test visual fields by confrontation: face the client about 2 feet away and bring your fingers in from all four quadrants.",
  chain: {
    why: ["CN II carries vision; the retina and optic nerve can be damaged by pressure, stroke, diabetes"],
    ask: ["Blurred or double vision, pain, redness, discharge, glasses/contacts, last eye exam"],
    exam: ["External inspection", "Snellen at 20 ft, each eye, with/without glasses", "Confrontation: client covers one eye, you cover your opposite eye; fingers in from edges"],
    flags: ["Sudden vision loss: urgent"]
  },
  table: {
    cols: ["Snellen result", "Meaning"],
    rows: [["20/20", "Normal"], ["20/40", "Reads at 20 ft what normal vision reads at 40 ft"], ["Larger bottom number", "Worse vision"]]
  },
  facts: [
    "Document with or without correction (glasses).",
    "In confrontation, the client's visual fields should match yours.",
    "Ptosis = drooping upper eyelid. Older adults: presbyopia (near focus) and more cataracts."
  ],
  beyond: "How to read a Snellen fraction is added.",
  qa: [
    ["A client's vision is 20/60 in the left eye. What does that mean?", "At 20 feet they read what a person with normal vision reads at 60 feet: worse than normal."],
    ["How far from the Snellen chart does the client stand?", "20 feet."]
  ]
},
{
  id: "pupils", sys: "heent", name: "PERRLA & Pupil Changes",
  sub: "Direct and consensual light response, accommodation, sluggish, fixed, pinpoint",
  connect: ["Inspection", "Neuro"],
  summary: "PERRLA: Pupils Equal, Round, Reactive to Light and Accommodation. Shine light in one eye: that pupil constricts (direct) and the other does too (consensual). For accommodation, the client looks far, then at your finger moving toward their nose: pupils constrict and the eyes converge. New unequal or nonreactive pupils can mean neurologic trouble.",
  chain: {
    why: ["CN II senses light; CN III constricts the pupil", "Pressure on CN III (herniation) slows or blows the pupil"],
    ask: ["Head injury, headache, vision change, opioid use"],
    exam: ["Size (mm) and shape, compare", "Direct and consensual light", "Accommodation: constrict + converge"],
    flags: ["New unequal pupils with neuro symptoms", "Sluggish pupil (early herniation)", "Fixed, pinpoint pupils with slow breathing (opioids)"]
  },
  table: {
    cols: ["Finding", "Meaning"],
    rows: [["Brisk", "Normal"], ["Sluggish", "CN III compression: early herniation, cerebral edema"], ["Fixed / nonreactive (midposition)", "Midbrain infarction or herniation"], ["Small, pinpoint, nonreactive", "Pons damage or opioid overdose"]]
  },
  facts: ["Anisocoria = unequal pupil sizes.", "Measure pupils in millimeters with a pupil gauge."],
  qa: [
    ["Light is shone in the right eye and the left pupil constricts. What is this called?", "The consensual response."],
    ["Pinpoint, nonreactive pupils and slow respirations: what should the nurse suspect?", "Opioid overdose (or pontine injury)."],
    ["What two things happen with accommodation?", "The pupils constrict and the eyes converge."]
  ]
},
{
  id: "eom", sys: "heent", name: "Extraocular Movements",
  sub: "Six cardinal fields of gaze (the “H”), CN III, IV, VI, nystagmus, diplopia",
  connect: ["Inspection", "Neuro"],
  summary: "Hold your finger 12–18 inches away and have the client keep their head still and follow it through the six cardinal fields (an “H”). Both eyes should move together smoothly with no abnormal nystagmus or double vision.",
  chain: {
    why: ["Six muscles per eye, run by CN III, IV, and VI"],
    ask: ["Double vision, eye strain"],
    exam: ["Finger 12–18 in. away; head still; trace the “H”", "Watch both eyes for smooth, coordinated movement"],
    flags: ["New diplopia or asymmetric movement with neuro signs"]
  },
  table: {
    cols: ["Gaze", "Muscle (nerve)"],
    rows: [["Lateral (out)", "Lateral rectus (CN VI)"], ["Medial (in)", "Medial rectus (CN III)"], ["Down and in", "Superior oblique (CN IV)"], ["Up and out / up and in / down and out", "Superior rectus, inferior oblique, inferior rectus (CN III)"]]
  },
  facts: ["Nystagmus = involuntary rhythmic eye movement.", "Diplopia = double vision.", "LR6 SO4: lateral rectus VI, superior oblique IV, rest III."],
  beyond: "The muscle-to-gaze table is simplified from the lecture's cardinal fields image.",
  qa: [
    ["How far away do you hold your finger for EOMs?", "12–18 inches."],
    ["Which nerve moves the eye laterally?", "CN VI (abducens), through the lateral rectus."]
  ]
},
{
  id: "ears", sys: "heent", name: "Ears, Hearing, Weber & Rinne",
  sub: "Auricle, otoscope, whisper test, conductive vs. sensorineural loss",
  connect: ["Inspection", "Palpation", "Functional testing"],
  summary: "Inspect and palpate the auricle and tragus, look at the canal and tympanic membrane with an otoscope (expected: clear canal, intact pearly gray TM), and test hearing one ear at a time. Weber and Rinne tell conductive loss (sound can't get through the outer or middle ear) from sensorineural loss (inner ear or CN VIII damage).",
  chain: {
    why: ["Outer and middle ear conduct sound; cochlea and CN VIII sense it; vestibular system = balance"],
    ask: ["Hearing loss, pain, tinnitus, drainage, vertigo, hearing aids, noise exposure, ototoxic meds"],
    exam: ["Auricle and tragus: tenderness, swelling", "Otoscope: adult pull auricle up and back; child <3 down and back", "Whisper test or finger rub, one ear at a time", "Weber (midline) and Rinne (mastoid → beside canal)"],
    flags: ["Sudden hearing loss", "Ear pain or drainage needs evaluation"]
  },
  table: {
    cols: ["", "Conductive", "Sensorineural"],
    rows: [["Problem", "Outer/middle ear: earwax, infection, fluid, perforated TM, ossicles", "Inner ear or CN VIII: aging (presbycusis), noise, ototoxic meds"], ["Weber", "Louder in the affected ear", "Louder in the better ear"], ["Rinne", "BC ≥ AC", "AC > BC (still)"], ["Course", "Often treatable", "Usually permanent"]]
  },
  table2: {
    title: "Normal results",
    cols: ["Test", "How", "Normal"],
    rows: [["Weber", "Vibrating fork on midline of head", "Heard equally in both ears"], ["Rinne", "Fork on mastoid; when sound stops, move beside the canal", "Air conduction > bone conduction"]]
  },
  facts: [
    "Use the largest speculum that fits; brace your hand against the client's head.",
    "Tinnitus = ringing; vertigo = spinning sensation.",
    "Sarah Mitchell: cerumen in the right canal and decreased hearing, but don't assume the earwax explains the positional dizziness. Fall precautions; report."
  ],
  beyond: "Otoscope technique is added.",
  qa: [
    ["Weber lateralizes to the left, and Rinne on the left shows BC > AC. Type of loss?", "Conductive loss in the left ear."],
    ["Which way do you pull the auricle for an adult otoscope exam?", "Up and back."],
    ["What color is a normal tympanic membrane?", "Pearly gray and intact."]
  ]
},
{
  id: "mouth", sys: "heent", name: "Mouth & Pharynx",
  sub: "Lips, mucosa, teeth, tongue (CN XII), uvula and palate (CN IX, X), swallowing",
  connect: ["Inspection", "Functional testing"],
  summary: "Look at the lips and mucosa (pink, moist, no lesions), gums and teeth, and all surfaces of the tongue. The tongue should stick out midline (CN XII). When the client says “ah,” the uvula should stay midline and the soft palate rise equally (CN IX, X). Note hoarseness, voice changes, or trouble swallowing.",
  chain: {
    why: ["Airway, nutrition, and swallowing all pass through here"],
    ask: ["Sore throat, hoarseness, trouble swallowing or choking, dental pain, mouth sores, dry mouth"],
    exam: ["Lips, mucosa, gums, teeth", "Tongue: top, sides, underside, movement", "Tonsils and pharynx: redness, swelling, exudate", "Say “ah”"],
    flags: ["Trouble swallowing with drooling, stridor, or respiratory distress → urgent", "Persistent mouth sores or hoarseness → further evaluation"]
  },
  facts: ["Dysphagia = difficulty swallowing; dysphonia = abnormal voice.", "Older adults: dentition and oral health changes; reduced taste and smell affect nutrition and safety.", "Central cyanosis shows on the tongue and oral mucosa."],
  qa: [["The tongue deviates to the right when protruded. Which nerve?", "CN XII (hypoglossal)."], ["A client has drooling, can't swallow, and has stridor. Priority?", "Airway emergency: escalate immediately."]]
},
{
  id: "neck", sys: "heent", name: "Neck, Thyroid, Carotids & Nodes",
  sub: "Trachea, lymph nodes, thyroid from behind, carotids one at a time, bruits",
  connect: ["Inspection", "Palpation", "Auscultation"],
  summary: "The neck should be symmetric with full ROM and the trachea midline. Palpate the cervical nodes systematically, the thyroid from behind while the client swallows, and the carotids one side at a time. A bruit is a whooshing sound from turbulent flow through a narrowed artery.",
  chain: {
    why: ["Thyroid moves up with swallowing", "Carotids feed the brain; narrowing causes a bruit"],
    ask: ["Lumps, swelling, neck pain, trouble swallowing, heat/cold intolerance"],
    exam: ["Inspect symmetry, masses, scars, ROM, tracheal position, JVD", "Nodes: finger pads, gentle circles, both sides", "Thyroid from behind while swallowing; if enlarged, listen for a bruit", "Carotids one at a time; bell for bruits with a brief breath-hold", "CN XI: shrug and turn against resistance"],
    flags: ["New tracheal deviation with respiratory compromise", "Enlarged or fixed nodes; thyroid enlargement or nodules"]
  },
  facts: [
    "Expected: trachea midline, no masses, no JVD when positioned correctly, thyroid not enlarged, carotids 2+ and equal, no bruits.",
    "Thyromegaly = enlarged thyroid. Lymphadenopathy = abnormal node enlargement.",
    "Bruits are also listened for over the abdominal aorta and renal arteries."
  ],
  beyond: "Using the bell and a breath-hold for carotid bruits is added.",
  qa: [["How is the thyroid palpated?", "From behind, while the patient swallows."], ["What does a carotid bruit suggest?", "Turbulent flow from narrowing (stenosis/atherosclerosis)."]]
},
{
  id: "heentflags", sys: "heent", name: "HEENT Red Flags, Lifespan & Documentation",
  sub: "Urgent vs. needs evaluation, lifespan changes, normal and abnormal notes",
  connect: ["Prioritization", "Documentation"],
  summary: "Sudden and neurologic means urgent: facial droop, new unequal pupils with neuro symptoms, sudden vision or hearing loss, the worst headache with neuro changes, drooling with stridor, or new tracheal deviation. Persistent but stable findings (hoarseness, mouth sores, nodes, thyroid nodules, recurrent nosebleeds) need further evaluation.",
  chain: {
    why: ["Stroke, herniation, and airway obstruction are time-critical"],
    ask: ["When did it start? Sudden or gradual?"],
    exam: ["Focused neuro check with any new HEENT deficit"],
    flags: ["Sudden facial droop/slurred speech → activate stroke response while assessing airway and neuro"]
  },
  table: {
    cols: ["Urgent: assess now and escalate", "Needs further evaluation"],
    rows: [["Sudden facial droop or asymmetry", "Persistent hoarseness"], ["New unequal pupils with neuro symptoms", "Enlarged or fixed lymph nodes"], ["Sudden vision loss", "Persistent mouth sores"], ["Sudden severe headache with neuro changes", "Recurrent nosebleeds"], ["Trouble swallowing with drooling, stridor, or distress", "Ear pain or drainage"], ["New tracheal deviation with respiratory compromise; sudden hearing loss", "Thyroid enlargement or nodules"]]
  },
  table2: {
    title: "Lifespan",
    cols: ["Infants & children", "Adults", "Older adults"],
    rows: [["Fontanels and skull; age-appropriate vision and hearing screens; more ear infections; prominent tonsils and nodes; speech, hearing, vision milestones", "Occupational and recreational exposures; screen vision and hearing; tobacco; chronic conditions", "Presbyopia, presbycusis, more cataracts; dentition changes; reduced taste and smell"]]
  },
  facts: [
    "Normal note: “Head normocephalic, atraumatic… PERRLA, EOM intact… Hearing grossly intact bilaterally… Nares patent… Oral mucosa pink and moist; tongue and uvula midline. Neck supple, full ROM; trachea midline. No cervical lymphadenopathy or thyroid enlargement. Carotids 2+ bilaterally.”",
    "Document only what you assessed, keep subjective and objective separate, be specific."
  ],
  qa: [["During your assessment a patient develops facial drooping and slurred speech. First action?", "Activate the emergency/stroke response immediately while assessing the airway and other neuro findings."]]
},

/* ================= MOD 7: REPRODUCTIVE ================= */
{
  id: "reproap", sys: "repro", name: "Reproductive A&P & Inclusive Interviewing",
  sub: "Anatomy review, privacy, confidentiality, inclusive and patient-centered communication",
  connect: ["Communication", "Health history"],
  summary: "Reproductive history is sensitive, so set it up well: private space, explain why you ask, confirm confidentiality and its limits, ask about name and pronouns, and use anatomy-based, nonjudgmental language (“partners,” not assumptions). Normalize the questions: “I ask everyone these questions.”",
  chain: {
    why: ["Female: ovaries, fallopian tubes, uterus, cervix, vagina, vulva, breasts", "Male: testes, epididymis, vas deferens, prostate, seminal vesicles, penis, urethra", "Hormones (estrogen, progesterone, testosterone) drive puberty and cycles"],
    ask: ["Start general, then specific; ask permission before sensitive questions", "Use the client's terms for their body when possible", "“Do you have sex with men, women, or both?” instead of assuming"],
    exam: ["Chaperone and draping per policy; consent before any exam", "Most nursing assessment here is history plus external inspection"],
    flags: ["Signs of sexual abuse, coercion, or trafficking: interview alone, follow reporting laws"]
  },
  facts: [
    "Separate gender identity, sex assigned at birth, anatomy, and sexual orientation; don't assume any from the others.",
    "Interview adolescents privately for part of the visit and explain confidentiality limits.",
    "Use a qualified interpreter, never a partner or family member."
  ],
  beyond: "No Mod 7 lecture guide or slides were in the folder yet. This page is built from the study guide's outline plus standard assessment content; check it against the Mod 7 slides when they're posted.",
  qa: [["How do you open a sexual history in a nonjudgmental way?", "Normalize it (“I ask everyone these questions”), explain why, confirm confidentiality, and use inclusive wording without assumptions."]]
},
{
  id: "reprohx", sys: "repro", name: "Reproductive History: LMP, GTPAL, STIs",
  sub: "Menstrual history, obstetric history (GTPAL), STIs, contraception, urinary patterns",
  connect: ["Health history", "Documentation"],
  summary: "The core reproductive history: last menstrual period (first day of the last period) and cycle pattern; obstetric history using GTPAL; sexual history and STI risk; contraception; and urinary patterns, which often overlap with reproductive problems.",
  chain: {
    why: ["LMP dates pregnancy and flags irregular bleeding", "Urinary and reproductive tracts share space and symptoms"],
    ask: ["LMP, cycle length, flow, pain, bleeding between periods or after menopause", "GTPAL", "Partners, protection, STI history and testing, discharge, lesions", "Contraception method and satisfaction", "Urinary: frequency, urgency, burning, stream changes, nocturia, incontinence"],
    exam: ["Inspect external genitalia for lesions, discharge, swelling (per scope and policy)"],
    flags: ["Postmenopausal bleeding", "Possible pregnancy with severe abdominal pain or heavy bleeding", "New genital lesions or discharge (STI testing)"]
  },
  table: {
    cols: ["Letter", "Means", "Counts"],
    rows: [["G: Gravida", "Total pregnancies", "Including the current one; twins = 1"], ["T: Term", "Births at 37+ weeks", "Each pregnancy, not each baby"], ["P: Preterm", "Births 20–36 6/7 weeks", ""], ["A: Abortions", "Losses before 20 weeks", "Spontaneous or induced"], ["L: Living", "Living children now", "Twins = 2"]]
  },
  tableTitle: "GTPAL",
  facts: [
    "LMP = the FIRST day of the last menstrual period.",
    "Example: pregnant now, one term birth, one miscarriage at 10 weeks, one living child → G3 T1 P0 A1 L1.",
    "Ask about urinary patterns with every reproductive history: BPH and UTIs show up there first."
  ],
  beyond: "No Mod 7 lecture guide yet: LMP, GTPAL rules, and the sexual history items are standard references from the study guide's list.",
  qa: [["A client is pregnant with twins, had one term birth, and has one living child. GTPAL?", "G2 T1 P0 A0 L1 (the current twin pregnancy counts as one G)."], ["What does LMP mean?", "The first day of the last menstrual period."]]
},
{
  id: "reprolife", sys: "repro", name: "Lifespan: Tanner Stages, BPH & Documentation",
  sub: "Puberty (Tanner 1–5), menopause, BPH, expected vs. unexpected findings, charting",
  connect: ["Inspection", "Lifespan", "Documentation"],
  summary: "Tanner stages (1 = prepubertal to 5 = adult) rate breast, genital, and pubic hair development in teens. Older adults have menopause changes (thinner tissue, dryness) and, in people with a prostate, benign prostatic hyperplasia: an enlarged prostate squeezes the urethra, causing a weak stream, hesitancy, frequency, nocturia, and incomplete emptying.",
  chain: {
    why: ["Puberty follows a predictable sequence", "The prostate wraps around the urethra, so enlargement blocks urine flow"],
    ask: ["Teens: puberty timing, periods, concerns, privately", "Older adults: urinary stream, nocturia, dryness, sexual function"],
    exam: ["Rate Tanner stage when within scope", "Look for urinary retention signs (distended bladder)"],
    flags: ["No signs of puberty by the expected age, or very early puberty", "Can't void with a distended bladder (acute retention)", "Testicular mass or sudden testicular pain"]
  },
  table: {
    cols: ["Finding", "Expected", "Unexpected"],
    rows: [["Teen development", "Progresses through Tanner 1–5", "Very early or delayed puberty"], ["Older adult urinary", "Mild nocturia once", "Weak stream, hesitancy, retention (BPH)"], ["External genitalia", "No lesions, discharge, swelling", "Lesions, ulcers, discharge, masses"]]
  },
  facts: [
    "BPH symptoms: weak stream, hesitancy, frequency, urgency, nocturia, dribbling, incomplete emptying.",
    "Document objectively in the EHR with the client's own words for symptoms and exact descriptions of findings."
  ],
  beyond: "No Mod 7 lecture guide yet: Tanner and BPH content is standard reference material matching the study guide's list.",
  qa: [["A 70-year-old reports getting up 4 times a night to urinate with a weak stream. What does this suggest?", "BPH; assess further and report."], ["What does Tanner stage 1 mean?", "Prepubertal."]]
}
];

window.EMERGENCIES = [
  ["Central cyanosis", "skin", "Blue or gray lips, tongue, oral mucosa", "Arterial hypoxia: airway and oxygen now, call the provider."],
  ["Rapidly spreading cellulitis", "skin", "Warm, red, swollen skin with an advancing border, fever", "Can become sepsis: mark the border, cultures, escalate for IV antibiotics."],
  ["Petechiae & purpura", "skin", "Non-blanching pinpoint or larger purple spots", "Bleeding disorder, low platelets, or sepsis/meningococcemia."],
  ["Acute jaundice", "skin", "New yellow sclera or hard palate", "Possible liver failure: LFTs, bilirubin, watch for confusion."],
  ["Possible DVT", "cv", "One calf warm, red, swollen, tender", "A clot can break off and become a PE. Report immediately; compare both legs."],
  ["Chest pain", "cv", "Pressure, crushing pain, radiation; in women often nausea, back/neck/jaw pain, fatigue", "Possible MI: stay with the client, stop activity, semi-Fowler's, O₂ per protocol, IV, ECG, rapid response."],
  ["Cardiovascular failure pattern", "cv", "HR >100 + SBP <100 + RR >20 + SpO₂ <95% together", "Tissues are hypoxic: escalate now."],
  ["Absent pulse", "cv", "No pulse even with Doppler, cool pale limb", "Arterial blockage: notify the provider now."],
  ["JVD with SOB", "cv", "Distended neck veins at HOB 30–45°, dyspnea, edema", "Right-sided failure or fluid overload."],
  ["Stroke signs", "heent", "Sudden facial droop, slurred speech, new weakness", "Activate the stroke response immediately."],
  ["New unequal or nonreactive pupils", "heent", "Sluggish or blown pupil with neuro changes", "Possible herniation: escalate immediately."],
  ["Airway threat", "heent", "Drooling, can't swallow, stridor, distress", "Upper airway obstruction: call for help."],
  ["Sudden vision or hearing loss", "heent", "Abrupt loss in one or both eyes or ears", "Can be vascular or neurologic: urgent evaluation."],
  ["Tracheal deviation", "heent", "Trachea shifted with respiratory compromise", "Mass or tension pneumothorax: escalate."]
];

window.LOOKALIKES = [
  ["Stage 1 pressure injury vs. MASD?", "Stage 1: localized non-blanchable redness over a bony prominence (pressure). MASD: diffuse, shiny, irregular redness in folds or the perineum (moisture)."],
  ["Tunneling vs. undermining?", "Tunneling is a narrow channel in any direction. Undermining is a wide shelf under intact skin along the wound edge."],
  ["Stage 3 vs. Stage 4?", "Stage 3 shows fat. Stage 4 shows bone, muscle, or tendon."],
  ["Unstageable vs. deep tissue injury?", "Unstageable: full thickness, base hidden by slough/eschar. DTI: intact or not, with deep purple/maroon discoloration or a blood blister."],
  ["Infected node vs. malignant node?", "Infection: tender, mobile, firm. Malignancy: hard, fixed, painless, >1 cm."],
  ["Arterial vs. venous insufficiency?", "Arterial: pale, cool, hairless, weak pulses, slow refill. Venous: brown staining, varicosities, chronic edema, pulses present."],
  ["S1 vs. S2?", "S1: AV valves close, start of systole, loudest at the apex, lower and longer. S2: semilunar valves close, start of diastole, loudest at the base, higher and shorter."],
  ["S3 vs. S4?", "S3 right after S2 (Ken-TUCK-y): volume overload, normal in kids. S4 right before S1 (TEN-nes-see): stiff ventricle, abnormal."],
  ["Carotid pulse vs. jugular pulsation?", "Carotid: one strong palpable beat, doesn't change with position. Jugular: soft, multiple waves, not palpable, drops when sitting up."],
  ["Conductive vs. sensorineural hearing loss?", "Conductive: Weber to the affected ear, BC ≥ AC. Sensorineural: Weber to the good ear, AC > BC."],
  ["Direct vs. consensual light response?", "Direct: the lit pupil constricts. Consensual: the other pupil constricts too."],
  ["Sluggish vs. pinpoint pupils?", "Sluggish: CN III compression (early herniation). Pinpoint and nonreactive: pons damage or opioid overdose."],
  ["CN VII vs. CN V?", "VII moves the face (smile, close eyes, puff cheeks). V feels the face and works the jaw."],
  ["Pulse grade 1+ vs. 3+?", "1+ is weak/thready. 2+ is normal. 3+ is increased/strong. 4+ is bounding."]
];
