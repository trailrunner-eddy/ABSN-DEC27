/* Content for the Health Assessment Exam 1 interactive guide.
   Outline follows the "NURA 330 Exam 1 Study Guide"; details come from the Mod 1, 2, 3
   lecture guides and slides. Exam 1 is done, but this content is reviewed for the final. */

window.GUIDE = {
  key: "ha-exam1-v1",
  course: "NURA 330 · Health Assessment",
  title: "Exam 1 Study Lab",
  heroArt: "🫁",
  heroText: "50 items (multiple choice and SATA) in 75 minutes, 15% of the course grade. Respiratory (20–22 Qs) and the general survey and health history (18–20 Qs) carry the most weight. Exam 1 is behind you, but this material comes back on the final.",
  formats: ["Multiple choice", "Select all that apply"],
  formatNote: "The exam is MC and SATA only. Practice Qs adds a few NGN formats (select N, cloze, matrix) for extra reps.",
  chainTitle: "The assessment chain",
  chainNote: "What it is and why it matters → what you ask (subjective) → what you do or observe (objective) → what to report or avoid.",
  chainShort: "a why → ask → examine → report chain",
  chainKeys: [["why", "1 · What & why"], ["ask", "2 · Ask (subjective)"], ["exam", "3 · Do / observe (objective)"], ["flags", "4 · Report / avoid"]],
  connectLabel: "Techniques:",
  credit: "Slide image from the PLU ABSN program (NURA 330 lecture slides)."
};

window.SYSTEMS = [
  { id: "intro", name: "Intro to Health Assessment", short: "Intro", icon: "🧭", weight: "Mod 1 · 10–12 questions" },
  { id: "survey", name: "General Survey & Health History", short: "Survey & Hx", icon: "📋", weight: "Mod 2 · 18–20 questions" },
  { id: "resp", name: "Respiratory Assessment", short: "Resp", icon: "🫁", weight: "Mod 3 · 20–22 questions" }
];

window.EMPHASIS = [
  "Technique order is Inspection → Palpation → Percussion → Auscultation, except the abdomen: Inspect → Auscultate → Percuss → Palpate.",
  "Back of the hand for temperature; finger pads for texture, moisture, masses, and pulses.",
  "Chart descriptive language, not evaluative: “wringing hands, speaking rapidly,” not “anxious.”",
  "If the doorway scan shows instability, stop and prioritize. The history can wait.",
  "Record the chief concern verbatim, in quotation marks.",
  "The ROS is subjective. Objective findings belong in the physical exam.",
  "Never confront a suspected abuser or trafficker.",
  "Auscultate in a ladder, side to side, on bare skin, down to T10 in back. Don't skip the lateral fields.",
  "Stridor is an upper airway emergency."
];

window.CRITICAL_THINKING = [
  ["Is this finding subjective or objective, and where did it come from?", "Subjective = what someone reports (primary: the patient; secondary: family, caregivers, records). Objective = what you see, hear, feel, smell, or measure."],
  ["Does this situation call for a head-to-toe or a focused assessment?", "Stable setting and a baseline needed → comprehensive. A problem happening now → focused on that system first."],
  ["Is this person stable right now?", "Doorway scan: responsiveness, breathing, color, distress. Unstable → stop the routine and prioritize ABCs."],
  ["How would you chart it so another nurse could picture it?", "Descriptive, specific, numbers and locations. “RR 26, labored, crackles RLL, SpO₂ 90% RA,” never “breathing fine.”"],
  ["Which respiratory findings need the provider now?", "SpO₂ <92% (or below baseline), acute stridor, asymmetric chest expansion, worsening dyspnea, new restlessness, anxiety, or decreased LOC."]
];

window.STRATEGY = [
  ["Find the action word", "“First,” “priority,” “best,” “most appropriate” change the answer."],
  ["Assess before you act", "If the stem lacks data, the best answer is often to gather more (recheck, compare sides, ask)."],
  ["Unstable beats routine", "A client in distress needs a focused assessment and escalation before any history or teaching."],
  ["For SATA, judge each option alone", "Treat every option as true or false against the stem."],
  ["Prefer objective, specific documentation", "Answers with numbers, locations, and observable behavior beat labels and judgments."],
  ["Know your technique details", "Diaphragm vs. bell, earpieces forward, bare skin, ladder pattern, back of hand for temperature."]
];

window.DISORDERS = [
/* ================= MOD 1: INTRO ================= */
{
  id: "purpose", sys: "intro", name: "Purpose of Health Assessment & the RN Role",
  sub: "Definition, six purposes, ANA responsibilities, a little history",
  connect: ["Data collection", "Clinical judgment"],
  summary: "Health assessment is “the collection, clinical judgment, and evaluation of data to plan and deliver patient-centered care while accounting for the client's preferences, goals, and needs” (ATI). Data are physiological, psychological, sociocultural, spiritual, economic, and lifestyle. It's more than technique: deciding when, what, and how to assess.",
  chain: {
    why: ["Patients trust us with their stories and bodies; our skills must earn that trust", "Accurate data is the foundation of every later decision"],
    ask: ["The client's preferences, goals, and needs, not only symptoms"],
    exam: ["Gather historical and physical data to set a baseline", "Reassess after interventions"],
    flags: ["Skipping assessment before a critical decision"]
  },
  table: {
    cols: ["Purpose", "What it means"],
    rows: [["Establish a baseline", "Historical and physical data to compare against later"], ["Database creation", "Subjective + objective data into a holistic profile"], ["Clinical decision-making", "Nursing diagnoses, actual or potential problems, priorities"], ["Personalized care planning", "Patient-centered interventions and measurable outcomes"], ["Evaluate care", "Reassess after interventions to confirm outcomes"], ["Health promotion", "Risk factors, habits, education needs to prevent illness"]]
  },
  facts: [
    "ANA RN responsibilities: (1) physical exams and health histories before critical decisions, (2) health promotion, counseling, education, (3) give meds and interventions, (4) coordinate care with other professionals.",
    "History: Laennec invented the stethoscope in 1816; Florence Nightingale tracked ventilation, light, and hygiene; health assessment entered undergrad nursing in the 1970s.",
    "Today's focus is holistic (biological, psychological, social) and on clinical judgment over advanced techniques."
  ],
  qa: [["Name three purposes of health assessment.", "Any of: establish a baseline, build a database, make clinical decisions, plan personalized care, evaluate care, promote health."], ["What is the first ANA responsibility of the RN?", "Perform physical exams and health histories before making critical decisions."]]
},
{
  id: "judgment", sys: "intro", name: "Clinical Judgment & the Nursing Process",
  sub: "AACN definition, NCSBN Clinical Judgment Measurement Model, where assessment fits",
  connect: ["Clinical judgment", "Nursing process"],
  summary: "Health assessment trains the first two steps of clinical judgment: recognizing cues (a structured history and a systematic exam) and analyzing cues (telling normal from abnormal). You can't prioritize, act safely, or evaluate outcomes without an accurate baseline.",
  chain: {
    why: ["NCSBN model: recognize cues → analyze cues → prioritize hypotheses → generate solutions → take action → evaluate outcomes"],
    ask: ["Gather the story completely and accurately"],
    exam: ["Systematic exam; compare findings with expected"],
    flags: ["Jumping to solutions without complete cues"]
  },
  table: {
    cols: ["Course", "Clinical judgment step it trains"],
    rows: [["Health Assessment (NURA 330)", "Recognize cues and analyze cues"], ["Pathophysiology (NURA 340)", "The science of analyzing cues: why the findings happen"], ["Pharmacology", "Generating solutions once cues are recognized"], ["Fundamentals", "Taking action safely"]]
  },
  facts: [
    "AACN: clinical judgment is “the process by which nurses make decisions based on nursing knowledge…, other disciplinary knowledge, critical thinking, and clinical reasoning.”",
    "Nursing process: assessment → analysis/diagnosis → planning → implementation → evaluation."
  ],
  beyond: "The six NCSBN step names are listed here; the slide shows the model only as an image.",
  qa: [["Which two clinical judgment steps does health assessment train?", "Recognize cues and analyze cues."], ["Why is assessment the foundation of care?", "Every later step (prioritizing, acting, evaluating) depends on an accurate baseline of subjective and objective data."]]
},
{
  id: "data", sys: "intro", name: "Subjective vs. Objective Data",
  sub: "Symptoms vs. signs, primary vs. secondary sources, synthesizing cues",
  connect: ["Health history", "Physical exam"],
  summary: "Subjective data (symptoms) is what the client or someone else reports: feelings, perceptions, history. Objective data (signs) is what you observe or measure with your senses and equipment. The patient is the primary source; family and caregivers are secondary. Neither stands alone: you check subjective complaints against the exam.",
  chain: {
    why: ["Subjective = recognizing cues; objective = analyzing them; combined = safe priorities"],
    ask: ["Health history interview: pain, symptoms, SDOH, “I feel dizzy”"],
    exam: ["Vital signs, pupil response, edema, breath sounds"],
    flags: ["Treating a family member's report as objective", "Not noting who gave the information"]
  },
  table: {
    cols: ["", "Subjective (symptom)", "Objective (sign)"],
    rows: [["What", "The patient's perspective, feelings, experience; reported, not measured", "Measurable, observable: sight, hearing, touch, smell, equipment"], ["Source", "Primary: the patient. Secondary: care partners (family, caregivers), records", "The nurse's senses and diagnostic tools"], ["Examples", "Pain rating, health history, SDOH, “I feel dizzy”", "Vital signs, pupils, edema, breath sounds"], ["Collected", "Health history interview", "Physical exam"]]
  },
  facts: [
    "A caregiver's report is still subjective data, but from a secondary source: note who gave it.",
    "Records, other clinicians, and lab reports are also commonly counted as secondary sources.",
    "Health history parts: demographics and pronouns, chief concern and HPI, past history, social history and SDOH, review of systems."
  ],
  qa: [["A daughter says her mother “hasn't been eating for days.” Subjective or objective, and what source?", "Subjective, from a secondary source."], ["Is a pulse oximetry reading of 91% subjective or objective?", "Objective."]]
},
{
  id: "focused", sys: "intro", name: "Comprehensive vs. Focused Assessment",
  sub: "Head-to-toe vs. focused, and the trauma-informed context",
  connect: ["Prioritization", "Trauma-informed care"],
  summary: "A comprehensive (head-to-toe) assessment examines every system to set a holistic baseline in stable settings like an annual physical or admission. A focused assessment targets the system tied to the chief complaint when a problem is happening now. A client gasping for air gets a respiratory assessment, not questions about childhood vaccines.",
  chain: {
    why: ["Match the depth of the exam to stability and setting"],
    ask: ["What brought you in today? Is it happening right now?"],
    exam: ["Stable: all systems. Acute: the involved system first"],
    flags: ["Doing a full head-to-toe while a client is in distress"]
  },
  table: {
    cols: ["", "Comprehensive (head-to-toe)", "Focused"],
    rows: [["What", "Systematic exam of all body systems", "One system or area based on the chief complaint"], ["Where / when", "Primary care visits, long-term care admissions, hospital admissions", "EDs, urgent care, inpatient units when a problem arises"], ["Goal", "Holistic baseline", "Identify and prioritize immediate concerns"], ["Example", "Annual physical", "Patient gasping for air in the ER"]]
  },
  facts: [
    "Trauma-informed context: the U.S. has the highest rate of multiple chronic conditions and highest preventable mortality among high-income countries; about 51.8% of adults have at least one chronic condition and 27.2% have multiple.",
    "Without a trauma-informed approach, patient-centered care suffers and trust declines. Poor health has many causes: physical and behavioral health, structural and social conditions, racism, stigma, bias."
  ],
  qa: [["A patient arrives in the ED with severe shortness of breath. Comprehensive or focused?", "Focused (respiratory)."], ["When is a head-to-toe assessment appropriate?", "In stable settings when you need a baseline, like an annual physical or an admission."]]
},
{
  id: "inspect", sys: "intro", name: "Inspection & Palpation",
  sub: "General survey vs. systematic scan, multisensory inspection, hand surfaces",
  connect: ["Inspection", "Palpation"],
  summary: "Inspection always comes first: your eyes, ears, and nose tell a story before you touch anyone. Palpation then confirms what you saw. Use the back (dorsal surface) of your hand for temperature because the skin is thinner, and your finger pads for fine discrimination: texture, moisture, masses, and pulses.",
  chain: {
    why: ["Inspection is the clinical detective's first step", "Palpation is the tactile map that confirms it"],
    ask: ["Explain what you'll do and why; get consent before touch"],
    exam: ["Macro: general survey of the whole person", "Micro: systematic scan, compare right vs. left", "Multisensory: listen (wheezing), smell (fruity breath, wound odor)", "Palpate: dorsal hand for temperature; finger pads for texture, moisture, lumps, pulses"],
    flags: ["Fruity breath (possible DKA)", "Foul wound odor (possible infection)", "Muscle guarding from fear: rebuild trust"]
  },
  table: {
    cols: ["Hand surface", "Best for", "Why"],
    rows: [["Dorsal (back of hand)", "Temperature: warm, feverish, cold, clammy", "Thinner skin, more sensitive to temperature"], ["Palmar finger pads", "Texture, moisture, masses, pulses", "Highest density of tactile nerve endings"], ["Ulnar surface (beyond the lectures)", "Vibration (tactile fremitus)", "Common textbook point"]]
  },
  facts: [
    "Inspection toolkit: hand hygiene, good lighting, penlight (PERRLA), paper tape measure (wounds).",
    "Protect dignity, privacy, modesty, and comfort; always explain first.",
    "Tissue compliance = how yielding, elastic, or resistant tissue feels under pressure.",
    "You see leg swelling (inspection), then press to see if it pits or is tender (palpation)."
  ],
  beyond: "The ulnar surface for vibration isn't on the slide but shows up in many nursing references.",
  qa: [["Which hand surface should the nurse use to assess skin temperature?", "The dorsal surface (back of the hand)."], ["Which part of the hand detects a pulse or a mass best?", "The palmar finger pads."]]
},
{
  id: "percuss", sys: "intro", name: "Percussion, Auscultation & the Stethoscope",
  sub: "Percussion sounds, stethoscope technique, diaphragm vs. bell, technique order",
  connect: ["Percussion", "Auscultation"],
  summary: "Percussion taps the body to reveal the density underneath: resonance over air-filled lungs, tympany over the stomach and bowel, dullness over solid organs (and abnormally over lungs filled with fluid or a mass). Auscultation listens with a stethoscope: earpieces angled forward, chest piece on bare skin, diaphragm for high-pitched sounds, bell for low-pitched ones.",
  chain: {
    why: ["Sound changes with what's underneath: air, fluid, or solid"],
    ask: ["Ask the client to stay quiet while you listen"],
    exam: ["Earpieces angled toward your nose", "Directly on skin, not over clothing", "Diaphragm pressed firmly; bell rested lightly"],
    flags: ["Dullness over the lungs = fluid or mass where air should be"]
  },
  table: {
    cols: ["Percussion sound", "Quality", "Normally over"],
    rows: [["Resonance", "Clear, hollow", "Air-filled lungs"], ["Tympany", "High-pitched, drum-like", "Air-filled stomach or bowel"], ["Dullness", "Soft, deadened thud", "Solid organs (liver); abnormal over lungs"]]
  },
  table2: {
    title: "Diaphragm vs. bell",
    cols: ["Chest piece", "Detects", "Examples"],
    rows: [["Diaphragm", "High-pitched", "Lung sounds, bowel sounds, S1 and S2"], ["Bell", "Low-pitched", "Murmurs, bruits, S3, S4"]]
  },
  facts: [
    "Usual order: Inspection → Palpation → Percussion → Auscultation.",
    "Abdomen exception: Inspect → Auscultate → Percuss → Palpate, because touching can change bowel sounds.",
    "Pressing the bell hard turns it into a diaphragm and filters out the low sounds.",
    "Percussion isn't widely used by novice nurses."
  ],
  beyond: "“Diaphragm firmly, bell lightly” is an added technique tip.",
  qa: [["In what order are techniques performed for the abdomen?", "Inspection, auscultation, percussion, palpation."], ["Dullness on percussion over the lungs suggests what?", "Fluid or a solid mass where air should be."], ["Which way should the stethoscope earpieces point?", "Forward, toward your nose."]]
},

/* ================= MOD 2: GENERAL SURVEY & HEALTH HISTORY ================= */
{
  id: "findings", sys: "survey", name: "Expected vs. Unexpected & Descriptive Charting",
  sub: "What “unexpected” means, descriptive vs. evaluative language, observation vs. diagnosis",
  connect: ["Documentation", "Clinical judgment"],
  summary: "Expected findings fit the client's baseline, age, development, and context, including normal variation. Unexpected findings are new, changed, or out of range: cues to validate and assess further, not diagnoses. Chart what you observe (descriptive), not what you conclude (evaluative).",
  chain: {
    why: ["Labels and judgments travel through the chart and bias care"],
    ask: ["Clarify before assuming: “I notice you're tapping your foot. How are you feeling?”"],
    exam: ["Observe → describe → clarify → assess further"],
    flags: ["“Looks anxious,” “poor hygiene,” “uncooperative,” “looks sick”"]
  },
  table: {
    cols: ["Evaluative (avoid)", "Descriptive (chart this)"],
    rows: [["“Patient looks anxious.”", "“Wrings hands, shifts repeatedly in chair, speaks rapidly.”"], ["“Poor hygiene.”", "“Clothing visibly soiled; strong body odor noted.”"], ["“Patient is uncooperative.”", "“Declined the exam and stated, ‘I do not want to continue.’”"], ["“Patient looks sick.”", "“Pale, diaphoretic, breathing rapidly while leaning forward.”"]]
  },
  facts: ["“Expected” doesn't mean perfectly healthy; “unexpected” doesn't automatically mean disease.", "“Leaning forward, speaking in short phrases” is an observation. “She has COPD” is a diagnosis."],
  qa: [["Which is better charting: “Patient is anxious” or “Patient is tapping foot and asking repeatedly when the doctor will arrive”?", "The second; it's descriptive."]]
},
{
  id: "gs", sys: "survey", name: "General Survey Components",
  sub: "The four main areas, appearance, behavior, body structure, mobility, mood vs. affect",
  connect: ["Inspection", "Communication"],
  summary: "The general survey is the first overall look at the client, starting from the knock on the door and continuing the whole time. The study guide's four main areas: physical appearance, body structure, mobility, and behavior. The slide adds vital signs and measurements, pain, signs of distress, and signs of violence.",
  chain: {
    why: ["Sets a baseline impression and flags what needs a focused assessment"],
    ask: ["Ask about mood (“How have you been feeling?”)"],
    exam: ["Appearance: age, skin color, facial features, hygiene, dress", "Behavior: expression, affect, speech, demeanor", "Body structure: posture, symmetry, stature, nutrition", "Mobility: gait, balance, ROM, transfers, assistive devices"],
    flags: ["Facial droop or masklike face", "Slurred speech or word-finding trouble", "Staggering, shuffling, unsafe transfers", "Marked change from baseline"]
  },
  table: {
    cols: ["Area", "Expected", "Unexpected / follow up"],
    rows: [["Face", "Symmetric, moves with conversation", "Droop, asymmetry, masklike, involuntary movements"], ["Hygiene & dress", "Clean, fits context", "Marked change from baseline, unsuitable for weather, odor"], ["Speech", "Clear, fluent, fits context", "Slurred, word-finding trouble, very fast or slow"], ["Mood & affect", "Appropriate range; mood and affect match", "Flat, labile, or mismatched affect"], ["Mobility", "Smooth, steady gait, controlled transfers", "Staggering, shuffling, limping, guarding, unsafe transfers"]]
  },
  facts: [
    "Mood = what the client tells you they feel. Affect = the emotion you observe. You ask about mood; you observe affect.",
    "Don't infer income, housing, motivation, substance use, or culture from appearance. Describe first.",
    "Positioning matters: leaning forward, guarding, or unable to lie flat can be early cues of pain, weakness, or respiratory distress."
  ],
  qa: [["Name the four main areas of the general survey on the study guide.", "Physical appearance, body structure, mobility, and behavior."], ["What's the difference between mood and affect?", "Mood is what the client reports; affect is the emotion you observe."], ["When does the general survey start?", "At first contact (the knock on the door), and it continues throughout."]]
},
{
  id: "intro2", sys: "survey", name: "The Introduction: Safety, AIDET & Communication",
  sub: "Knock, hand hygiene, two identifiers, AIDET, trauma-informed approach, therapeutic communication",
  connect: ["Communication", "Safety"],
  summary: "Every encounter starts the same way: knock and ask to enter, hand hygiene, and two identifiers (full name and date of birth, checked against the armband). Then AIDET: Acknowledge, Introduce, Duration, Explanation, Thank you. Keep a clear path to the exit for the client, ask how they want to be addressed, and get verbal consent before touching.",
  chain: {
    why: ["Infection control and patient safety come first", "Asking the client to state identifiers also checks LOC and orientation"],
    ask: ["Preferred name and pronouns", "“Is it okay if I listen to your lungs now?”"],
    exam: ["Knock → hand hygiene → 2 identifiers → AIDET"],
    flags: ["Blocking the client's path to the door", "Touching without consent"]
  },
  table: {
    cols: ["AIDET", "What to do"],
    rows: [["A: Acknowledge", "Greet by name, eye contact (varies by culture), acknowledge visitors"], ["I: Introduce", "Your name, role as a nursing student, purpose"], ["D: Duration", "How long it will take"], ["E: Explanation", "What you'll do, step by step"], ["T: Thank you", "Thank the client; address comfort needs"]]
  },
  facts: [
    "Therapeutic communication: begin broad then focus; listen without interrupting; clarify, reflect, summarize; plain language, one question at a time; acknowledge feelings.",
    "Nonverbal: open posture, eye level, comfortable (not forced) eye contact, respect space and culture.",
    "When words and nonverbal cues don't match, clarify rather than assume."
  ],
  qa: [["What two identifiers are used?", "Full name and date of birth, checked against the armband."], ["What does the D in AIDET stand for?", "Duration: how long the assessment will take."]]
},
{
  id: "doorway", sys: "survey", name: "Doorway Scan: Signs of Distress",
  sub: "Respiratory, pain, neurologic, emotional, and cardiovascular distress; the priority rule",
  connect: ["Inspection", "Prioritization"],
  summary: "Before anything else, ask: does this person look immediately unstable? Check responsiveness, breathing, circulation and color, and distress. If the survey suggests instability, stop and prioritize immediate assessment and safety. The routine survey and history can wait.",
  chain: {
    why: ["Catch the client who can't wait"],
    ask: ["Can they speak in full sentences?"],
    exam: ["Responsiveness, breathing, color, distress from the doorway"],
    flags: ["Labored breathing, accessory muscles, short phrases, cyanosis, tripod position", "New confusion or altered LOC", "Profuse diaphoresis, severe pallor, fainting"]
  },
  table: {
    cols: ["Category", "Look for"],
    rows: [["Respiratory", "Labored breathing, accessory muscles, short phrases, cyanosis, tachypnea, wheezing, stridor, nasal flaring, retractions, tripod position"], ["Pain", "Guarding, grimacing, moaning, restlessness"], ["Neurologic", "New confusion, altered LOC, weakness, speech change"], ["Emotional", "Marked fear, panic, agitation, shutting down"], ["Cardiovascular", "Profuse diaphoresis, severe pallor, cyanosis, weakness, fainting"]]
  },
  facts: ["Priority rule: unstable → stop the routine and prioritize ABCs and safety."],
  qa: [["You walk in and the client is leaning forward on the bedside table, using neck muscles to breathe, speaking two words at a time. What do you do?", "Stop the routine survey: focused respiratory assessment and get help."]]
},
{
  id: "vitals", sys: "survey", name: "Vital Signs & Pain",
  sub: "Adult reference ranges, what tachycardia, tachypnea, and fever mean, nursing actions",
  connect: ["Vital signs", "Clinical judgment"],
  summary: "Vital signs add objective data; pain screening adds the client's experience. Interpret values against the client's baseline and context, verify technique (cuff size, route, equipment), repeat unexpected readings, and escalate worsening trends or instability. One abnormal number matters less than the pattern.",
  chain: {
    why: ["Vital signs show compensation before collapse"],
    ask: ["Pain: self-report, characteristics, severity, effect on function"],
    exam: ["Full set; check technique; repeat unexpected values; compare with trend"],
    flags: ["Worsening trend", "Abnormal VS with symptoms"]
  },
  table: {
    cols: ["Measure", "Adult reference", "Abnormal"],
    rows: [["Temperature", "36–38 °C (96.8–100.4 °F)", "Fever/pyrexia above range"], ["Pulse", "60–100 at rest", "Tachycardia >100; bradycardia <60"], ["Respirations", "12–20 at rest", "Tachypnea >20; bradypnea <12"], ["Blood pressure", "<120/<80", "Hypertension / hypotension"], ["SpO₂", "95–100%", "Hypoxemia below range"]]
  },
  table2: {
    title: "What abnormal vital signs mean",
    cols: ["Finding", "Think", "Do"],
    rows: [["Tachycardia", "Fever, pain, anxiety, dehydration or blood loss, hypoxemia, infection, meds", "Find the cause, recheck, assess perfusion and other VS, report if new or symptomatic"], ["Tachypnea", "Hypoxemia, respiratory illness, fever, pain, anxiety, metabolic causes", "Check SpO₂, work of breathing, lung sounds; position upright; report"], ["Fever", "Infection or inflammation; raises HR, RR, and O₂ demand", "Look for the source and other signs of infection; report per policy"]]
  },
  facts: ["Always recheck an unexpected value and look at the whole patient before escalating, unless the patient is symptomatic or worsening."],
  beyond: "The fever and bradypnea cutoffs and the “what it means” table were added to answer the study guide's question.",
  qa: [["A client's HR is 118. What might cause it, and what do you do?", "Fever, pain, anxiety, dehydration or blood loss, hypoxemia, infection, meds. Find the cause, recheck, assess perfusion and other VS, and report if new or symptomatic."], ["Adult normal respiratory rate?", "12–20 breaths per minute at rest."]]
},
{
  id: "abuse", sys: "survey", name: "Abuse, Neglect & Human Trafficking",
  sub: "Indicators, interviewing privately, mandatory reporting, never confronting",
  connect: ["Safety", "Communication"],
  summary: "Watch for injuries or stories that don't fit, unmet needs, fear or hypervigilance, and a companion who controls the conversation. Interview the client alone when safe, explain confidentiality and its limits, use a qualified interpreter (never the partner, family, or employer), ask direct nonjudgmental questions, and don't pressure. Address urgent needs, document objectively, follow mandatory reporting laws, and never confront a suspected abuser.",
  chain: {
    why: ["Confrontation can increase danger to the client and staff"],
    ask: ["“Do you feel safe where you live?”", "“Has anyone hurt, threatened, frightened, or controlled you?”", "“Is anyone controlling your money, ID, phone, transportation, or access to care?”"],
    exam: ["Document objective findings and the client's own words"],
    flags: ["Never confront", "Don't rely on one red flag or a stereotype"]
  },
  table: {
    cols: ["Potential indicators", "Interview approach", "Nursing response"],
    rows: [["Injuries or a story that doesn't fit", "Speak alone when safe", "Urgent medical and safety needs first"], ["Unmet needs (food, hygiene, meds, shelter)", "Explain confidentiality and reporting limits", "Document objective findings and the client's words"], ["Fear, hypervigilance, withdrawal", "Qualified interpreter, never a companion", "Follow policy and mandatory reporting laws"], ["Companion controls conversation or privacy", "Direct, nonjudgmental; don't pressure", "Involve social work, SANE, advocacy, CPS/APS"]]
  },
  facts: ["PEARR (HEAL Trafficking): Provide privacy, Educate, Ask, Respect, Respond.", "SOAR (HHS): Stop, Observe, Ask, Respond.", "USPSTF (2025): screen women of reproductive age (including pregnant and postpartum) for IPV."],
  qa: [["A client's partner answers every question and won't leave. What should the nurse do?", "Find a safe way to interview the client alone (e.g., during a private part of the exam); don't confront the partner; use a qualified interpreter if needed."]]
},
{
  id: "hpi", sys: "survey", name: "Chief Concern, HPI (OLDCARTS) & PQRST",
  sub: "Biographic data, reason for seeking care verbatim, symptom analysis, pain analysis",
  connect: ["Health history", "Communication"],
  summary: "Start open (“What brought you in today?”) and record the reason for seeking care verbatim, in quotation marks, without converting it to medical terms. Then explore the History of Present Illness with OLDCARTS, and use PQRST for pain.",
  chain: {
    why: ["The client's own words keep the story accurate"],
    ask: ["Preferred name, pronouns, language, interpreter needs", "“Tell me more about…” then OLDCARTS"],
    exam: ["Document the chief concern in quotes"],
    flags: ["Translating “my chest feels tight” into “angina”", "Assuming identity from appearance"]
  },
  table: {
    cols: ["OLDCARTS", "Ask"],
    rows: [["Onset", "When did it begin? Sudden or gradual?"], ["Location", "Where? Does it radiate?"], ["Duration", "How long? Constant or intermittent?"], ["Characteristics", "What does it feel like?"], ["Aggravating / Alleviating", "What makes it worse or better?"], ["Related symptoms", "What else happens with it?"], ["Treatment", "What have you tried? Did it help?"], ["Severity", "How severe? How does it affect function?"]]
  },
  table2: {
    title: "PQRST (pain)",
    cols: ["Letter", "Ask"],
    rows: [["P: Pattern / precipitating", "What caused it? What makes it better or worse?"], ["Q: Quality", "Sharp, dull, burning, throbbing?"], ["R: Radiates", "Does it spread? Where?"], ["S: Severity", "0–10"], ["T: Time and treatment", "When did it begin? Taking anything for it?"]]
  },
  facts: ["Many textbooks expand P as Provocation/Palliation and R as Region/Radiation; same questions.", "Severity isn't just a number: ask how it affects function (“What can you do now that you couldn't before?”)."],
  qa: [["How do you document the reason for seeking care?", "Verbatim, in the client's own words, in quotation marks."], ["Which OLDCARTS letter is “What have you tried?”", "T: Treatment."]]
},
{
  id: "pmh", sys: "survey", name: "Past History, Medications, Allergies & Immunizations",
  sub: "Childhood and chronic illness, injuries, hospitalizations, surgeries, transfusions; allergy vs. side effect",
  connect: ["Health history"],
  summary: "Collect childhood and chronic illnesses (with control and treatment), injuries, hospitalizations, surgeries, and blood transfusions, with approximate dates. List prescription, OTC, and supplements separately, asking what the client actually takes. For allergies, record the actual reaction: nausea is usually a side effect, while hives, angioedema, wheezing, or anaphylaxis is a true allergy.",
  chain: {
    why: ["A true allergy changes risk; a side effect usually doesn't"],
    ask: ["Name, dose, route, frequency, indication for each med", "Recent changes, missed doses, cost or access barriers", "“What happened when you took it?”", "Immunization dates; screenings; primary, dental, vision care"],
    exam: ["Medication reconciliation: compare record, bottles, pharmacy, caregiver"],
    flags: ["Copying the EHR list without checking", "Listing a side effect as an allergy"]
  },
  facts: [
    "Dates matter; approximate dates are still useful.",
    "Codeine causing constipation = side effect, not allergy.",
    "Health promotion: nutrition, activity, sleep, tobacco/substances, sexual health."
  ],
  qa: [["A client reports an “allergy” to codeine that causes constipation. How should the nurse interpret this?", "Likely a side effect, not a true allergy; document the actual reaction."], ["Which reactions indicate a true allergy?", "Hives, angioedema, wheezing, anaphylaxis."]]
},
{
  id: "family", sys: "survey", name: "Family, Social & Mental Health History",
  sub: "Three-generation family history, personal and social habits, emotional health",
  connect: ["Health history", "Risk assessment"],
  summary: "Family history focuses on biologic relatives to map inherited risk, ideally across three generations (the client's, parents, grandparents): ages, major illnesses with age at diagnosis, and cause and age of death. Social history covers nutrition, activity, sleep, tobacco, alcohol and substances, occupation, relationships, spirituality, and safety. Ask about emotional health directly.",
  chain: {
    why: ["Early heart disease, diabetes, cancer, and genetic disorders run in families"],
    ask: ["“How have you been doing emotionally?”", "Substances: what, how much, how often, last use (not “Do you abuse…?”)"],
    exam: ["Build a three-generation pedigree when inherited risk matters"],
    flags: ["Safety concern or self-harm: pause and escalate"]
  },
  facts: ["Family history is a risk factor, not a guarantee.", "Be sensitive to adoption and estrangement.", "Emotional health isn't inferred from facial expression alone."],
  qa: [["How many generations does the study guide want in a family history?", "Three: the client's generation, parents, and grandparents."], ["How should you ask about alcohol use?", "Neutrally: what, how much, how often, and when last used."]]
},
{
  id: "sdoh", sys: "survey", name: "SDOH & Function: ADLs vs. IADLs",
  sub: "Social determinants of health, Healthy People 2030 domains, activities of daily living",
  connect: ["Health history", "Function"],
  summary: "Ask everyone about the conditions that make it easier or harder to stay healthy: housing, food, utilities, transportation, money, work, education, access to care and meds, and safety. Then assess function: ADLs are basic self-care; IADLs are the more complex tasks needed to live independently.",
  chain: {
    why: ["SDOH are part of the cause and part of the plan"],
    ask: ["“I ask everyone about things that can make it easier or harder to stay healthy…”", "“Who helps you at home?” “Can you get your groceries?”"],
    exam: ["Assess usual mobility and activity and changes from baseline"],
    flags: ["A positive screen should lead to resources or referral"]
  },
  table: {
    cols: ["", "ADLs", "IADLs"],
    rows: [["What", "Basic self-care", "Complex tasks for independent living"], ["Examples", "Bathing, dressing, toileting, eating", "Managing meds, preparing meals, shopping, finances, transportation"]]
  },
  facts: ["Healthy People 2030 SDOH domains: economic stability; education access and quality; health care access and quality; neighborhood and built environment; social and community context.", "James Walker (Mod 1) took his meds sporadically because of copays and lives in a food desert: SDOH explain his BP and edema."],
  qa: [["Is managing medications an ADL or an IADL?", "IADL."], ["Is bathing an ADL or an IADL?", "ADL."]]
},
{
  id: "ros", sys: "survey", name: "Review of Systems & Closing the Interview",
  sub: "Pertinent positives and negatives, subjective only, five closing steps",
  connect: ["Health history", "Documentation"],
  summary: "The ROS asks system-by-system questions to catch symptoms the HPI missed. It is subjective: document pertinent positives (symptoms they have that matter) and pertinent negatives (symptoms they deny that matter, like “denies chest pain”). Objective findings go in the physical exam. Close by summarizing, validating, inviting, prioritizing, and documenting.",
  chain: {
    why: ["Catches problems the client didn't mention"],
    ask: ["General, skin, HEENT, respiratory, CV, GI, GU, MSK, neuro, endocrine, heme/lymph, psych"],
    exam: ["Close: summarize → validate → invite (“Anything we haven't talked about?”) → prioritize → document"],
    flags: ["Putting “crackles in the RLL” in the ROS (it's objective)"]
  },
  facts: ["The study guide calls the ROS “subjective and objective,” but the slides are explicit: objective findings belong in the physical exam. Expect the exam to treat the ROS as subjective.", "Document collateral information with its source."],
  qa: [["Where does “crackles in the right lower lobe” belong: ROS or physical exam?", "The physical exam (it's objective)."], ["What's a pertinent negative?", "A symptom the client denies that matters, e.g., “denies chest pain.”"]]
},

/* ================= MOD 3: RESPIRATORY ================= */
{
  id: "respap", sys: "resp", name: "Respiratory A&P",
  sub: "Upper and lower airway, lobes, alveoli, diaphragm, accessory muscles, pleura, breathing control",
  connect: ["Anatomy"],
  summary: "The upper airway (nose, mouth, pharynx, larynx) filters, warms, and humidifies air. The lower airway runs trachea → bronchi → bronchioles → alveoli, where O₂ and CO₂ exchange. The right lung has 3 lobes, the left has 2 (room for the heart). The diaphragm is the main breathing muscle; accessory muscles kick in when breathing is hard.",
  chain: {
    why: ["Normal breathing needs a patent airway + ventilation + perfusion + gas exchange", "The brainstem drives breathing in response to CO₂, O₂, and pH"],
    ask: ["Breathlessness, cough, changes in breathing"],
    exam: ["Watch for accessory muscle use"],
    flags: ["Accessory muscle use is an important finding"]
  },
  table: {
    cols: ["Structure", "Key points"],
    rows: [["Upper airway", "Nose, mouth, pharynx, larynx: filter, warm, humidify"], ["Lower airway", "Trachea → bronchi → bronchioles → alveoli"], ["Lungs", "Right 3 lobes (upper, middle, lower); left 2 (upper, lower)"], ["Alveoli", "Gas exchange"], ["Diaphragm", "Primary muscle; contracts and moves down on inspiration"], ["Accessory muscles", "Sternocleidomastoid, scalenes, trapezius (inspiration); abdominals (forced expiration)"], ["Pleura", "Membranes that let the lungs glide"]]
  },
  facts: ["Right middle lobe (and left lingula) is heard best anteriorly/laterally; lower lobes mainly posteriorly."],
  beyond: "Accessory muscle names are added.",
  qa: [["How many lobes does each lung have?", "Right 3, left 2."], ["What is the primary muscle of breathing?", "The diaphragm."]]
},
{
  id: "resplife", sys: "resp", name: "Lifespan: Pediatric vs. Older Adult",
  sub: "Infant and child airway differences, older adult changes",
  connect: ["Lifespan"],
  summary: "Children have narrow airways, bigger tongues and heads, softer tracheas, and faster respiratory rates; infants are obligate nose breathers. A little swelling or mucus narrows a small airway a lot, and distress progresses fast. Older adults have stiffer lungs, weaker coughs and muscles, and more aspiration and infection risk, and illness may show up only as confusion or fatigue.",
  chain: {
    why: ["Small airway: a little edema causes big resistance", "Older adult: less compliance and weaker cough"],
    ask: ["Feeding and congestion in infants", "New confusion or fatigue in older adults"],
    exam: ["Children: retractions, nasal flaring, grunting; abdominal breathing is common", "Older adults: subtle signs; check SpO₂ and LOC"],
    flags: ["Stuffy nose in an infant can impair breathing", "Pediatric distress worsens quickly"]
  },
  table: {
    cols: ["Infants & children", "Older adults"],
    rows: [["Larger head and tongue; obligate nose breathers; small nares", "Decreased elasticity and chest expansion"], ["Flexible trachea; narrow airway", "Weaker cough and respiratory muscles"], ["Faster RR; abdominal breathing common", "Higher infection and aspiration risk"], ["Watch for retractions, flaring, grunting; distress progresses quickly", "Illness may present subtly (confusion, fatigue)"]]
  },
  qa: [["Why does a stuffy nose matter so much in a young infant?", "Infants are obligate nose breathers."], ["What might be the first sign of pneumonia in an older adult?", "New confusion or fatigue, before fever or cough."]]
},
{
  id: "resphx", sys: "resp", name: "Respiratory History, SDOH & Pack-Years",
  sub: "Subjective questions, environment and access, pack-year math",
  connect: ["Health history", "Risk assessment"],
  summary: "Start with “What is troubling you most at the moment?” Ask about diagnosed conditions, home oxygen and equipment, meds, breathlessness, cough, energy, smoking or vaping, and pleuritic chest pain (sharp pain worse with a deep breath or cough). Calculate pack-years: packs per day × years smoked.",
  chain: {
    why: ["Smoking-related risk rises with cumulative pack-years"],
    ask: ["Asthma, COPD, pneumonia, allergies; home O₂, CPAP, BiPAP, nebulizer", "Cough: productive? color? Pleuritic pain?", "Smoking/vaping, secondhand smoke, readiness to quit", "Mold, wood smoke, dust, chemicals, pets", "Electricity for O₂ concentrators; access to inhalers; health literacy"],
    exam: ["Packs/day × years = pack-years (20 cigarettes = 1 pack)"],
    flags: ["Anxiety worsens the feeling of dyspnea"]
  },
  table: {
    cols: ["Example", "Pack-years"],
    rows: [["2 packs/day × 15 years", "30"], ["½ pack/day × 20 years", "10"], ["1½ packs/day × 20 years", "30"], ["10 cigarettes/day × 30 years", "15 (10 cigarettes = 0.5 pack)"]]
  },
  facts: ["James (68) had a 30 pack-year history."],
  qa: [["A client smoked 1½ packs a day for 20 years. Pack-years?", "30."], ["What is pleuritic chest pain?", "Sharp pain that worsens with a deep breath or cough."]]
},
{
  id: "inspect3", sys: "resp", name: "Inspection: Work of Breathing & Cyanosis",
  sub: "Vital signs, respiratory effort, retractions, cyanosis across skin tones",
  connect: ["Vital signs", "Inspection"],
  summary: "Start least invasive: vital signs, then look. Rate, depth, and effort; accessory muscles; retractions; nasal flaring; head bobbing; skin and lip color; chest shape and symmetry; LOC; and whether they can speak in full sentences. Respiratory rate is often the earliest sign of deterioration. Confirm cyanosis with pulse oximetry.",
  chain: {
    why: ["Retractions show the chest wall being sucked in by high effort"],
    ask: ["“Are you short of breath right now?”"],
    exam: ["Order: VS → inspect → auscultate → palpate → document", "Retractions: subcostal, intercostal, suprasternal, supraclavicular, substernal", "Cyanosis: tongue, oral mucosa, inner lips, hard palate, conjunctivae, nail beds"],
    flags: ["Retractions, nasal flaring, can't speak full sentences", "Central cyanosis"]
  },
  table: {
    cols: ["Retraction", "Where the skin pulls in"],
    rows: [["Subcostal", "Just below the rib cage (“belly breathing”)"], ["Intercostal", "Between the ribs"], ["Suprasternal (tracheal tug)", "Above the sternum, middle of the neck"], ["Supraclavicular", "Above the clavicles"], ["Substernal", "Below the sternum, at the xiphoid"]]
  },
  facts: ["Cyanosis in lighter skin: blue/purple lips and nail beds. In darker skin: gray, ashen, dull; check the tongue, oral mucosa, hard palate.", "The slide text says substernal is “above the sternum” (that's suprasternal); its diagram correctly says below."],
  qa: [["Where is a suprasternal retraction?", "Above the sternum in the middle of the neck (tracheal tug)."], ["Where is cyanosis most reliably seen in darker skin?", "Tongue, oral mucosa, inner lips, hard palate (central sites with the least pigment)."]]
},
{
  id: "chest", sys: "resp", name: "Chest Shape, Paradoxical Breathing & Palpation",
  sub: "AP ratio 1:2 vs. barrel chest 1:1, paradoxical movement, chest expansion",
  connect: ["Inspection", "Palpation"],
  summary: "A normal chest is about half as deep front-to-back as it is wide (AP:lateral 1:2). A barrel chest is as deep as it is wide (1:1) from chronic air trapping, as in COPD/emphysema. Paradoxical breathing (chest and abdomen moving opposite ways) signals fatigue, flail chest, or diaphragm weakness. Palpate expansion with thumbs at the 10th rib: they should move apart equally.",
  chain: {
    why: ["Hyperinflation rounds the chest", "Equal expansion means both lungs inflate"],
    ask: ["Long-standing lung disease? Chest trauma?"],
    exam: ["Compare AP vs. lateral diameter", "Watch chest and abdomen rise together", "Hands on posterior chest at the 10th rib, thumbs near spine; deep breath"],
    flags: ["New paradoxical breathing: check SpO₂, effort, mental status; escalate", "Asymmetric expansion"]
  },
  table: {
    cols: ["", "Normal chest", "Barrel chest"],
    rows: [["AP : lateral", "1:2", "About 1:1"], ["Cause", "n/a", "Air trapping/hyperinflation (COPD, emphysema)"], ["Often seen with", "n/a", "Dyspnea, increased work of breathing"]]
  },
  beyond: "The thumbs-at-the-10th-rib palpation technique is added.",
  qa: [["A client with COPD has an AP:lateral ratio of 1:1. What is this called?", "Barrel chest."], ["Thumbs move apart unequally during a deep breath. Significance?", "Asymmetric expansion: a red flag to report."]]
},
{
  id: "auscult", sys: "resp", name: "Auscultation Technique",
  sub: "Diaphragm on bare skin, open-mouth breaths, ladder pattern, anterior/lateral/posterior fields",
  connect: ["Auscultation"],
  summary: "Use the diaphragm directly on bare skin. Have the client breathe slowly and deeply through an open mouth and listen to one full breath at each spot. Go top to bottom, comparing side to side (ladder pattern) across anterior, lateral, and posterior fields, avoiding bone and the scapulae.",
  chain: {
    why: ["Side-to-side comparison makes a difference stand out"],
    ask: ["“Breathe slowly and deeply through your mouth.”"],
    exam: ["Anterior: apices above clavicles to ~6th rib", "Lateral: midaxillary lines (most often missed)", "Posterior: above scapulae to ~T10 (most lung tissue is here)"],
    flags: ["Note location, timing, and quality of anything abnormal"]
  },
  facts: ["Don't skip the back or the sides.", "Interpret any sound with the whole assessment and the client's baseline."],
  qa: [["How far down do you auscultate the posterior chest?", "To about T10."], ["Which field is most commonly missed?", "The lateral fields."]]
},
{
  id: "normalbs", sys: "resp", name: "Normal Breath Sounds",
  sub: "Bronchial, bronchovesicular, vesicular: where and what they sound like",
  connect: ["Auscultation"],
  summary: "Bronchial sounds are loud and high-pitched over the trachea and larynx, with expiration longer than inspiration. Bronchovesicular sounds are medium over the major bronchi, with equal inspiration and expiration. Vesicular sounds are soft and low over most of the lung, with inspiration longer. A normal sound in the wrong place is abnormal.",
  chain: {
    why: ["Sound changes with airway size and how much lung tissue it passes through"],
    ask: ["n/a"],
    exam: ["Bronchial: trachea", "Bronchovesicular: beside sternum in front, between scapulae in back", "Vesicular: periphery"],
    flags: ["Bronchial sounds over the periphery = possible consolidation (pneumonia)"]
  },
  table: {
    cols: ["Sound", "Where", "Quality"],
    rows: [["Bronchial", "Trachea and larynx", "High-pitched, loud; expiration > inspiration"], ["Bronchovesicular", "Major bronchi (beside sternum; between scapulae)", "Medium pitch; inspiration = expiration"], ["Vesicular", "Most of the lung surface (periphery)", "Low, soft, rustling; inspiration > expiration"]]
  },
  qa: [["Which normal sound is heard over most of the lung fields?", "Vesicular."], ["What does bronchial sound over the peripheral fields suggest?", "Consolidation, e.g., pneumonia."]]
},
{
  id: "advbs", sys: "resp", name: "Adventitious Breath Sounds",
  sub: "Wheezes, crackles, stridor, rhonchi, pleural friction rub, grunting",
  connect: ["Auscultation"],
  summary: "Adventitious sounds are abnormal extra sounds. Wheezes are musical (narrow airways). Crackles pop on inspiration (fluid in alveoli). Stridor is a harsh inspiratory sound from upper airway obstruction: an emergency. Rhonchi snore (secretions in large airways) and may clear with coughing. A friction rub grates (inflamed pleura). Grunting means distress, especially in infants.",
  chain: {
    why: ["Each sound points to where the problem is in the airway"],
    ask: ["Baseline: does the client always wheeze (e.g., COPD)?"],
    exam: ["Note location, inspiration vs. expiration, and whether coughing clears it"],
    flags: ["Stridor = call for help immediately"]
  },
  table: {
    cols: ["Sound", "Sounds like", "When", "Suggests"],
    rows: [["Wheezing", "High-pitched, musical", "Usually expiration", "Narrowed airways (asthma, COPD)"], ["Crackles (rales)", "Popping; fine = soft, high; coarse = louder, lower", "Usually inspiration", "Fluid in alveoli (pneumonia, HF, fibrosis)"], ["Stridor", "Harsh, high-pitched", "Inspiration", "Upper airway obstruction (croup, foreign body): emergency"], ["Rhonchi", "Low, snoring", "Usually expiration", "Secretions in large airways; may clear with cough"], ["Pleural friction rub", "Grating", "Both", "Inflamed pleura rubbing"], ["Grunting", "Low, short", "Expiration", "Respiratory distress, especially infants"]]
  },
  beyond: "“Rhonchi may clear with coughing” and “grunting is especially seen in infants” are added details.",
  qa: [["Popping sounds on inspiration in the lung bases suggest what?", "Crackles, from fluid in the alveoli."], ["A child has a high-pitched sound on inspiration and is drooling. Priority?", "Stridor: upper airway obstruction. Call for help immediately."]]
},
{
  id: "respflags", sys: "resp", name: "Red Flags, Diagnostics, Terms & Documentation",
  sub: "What to report now, labs and chest X-ray, terminology, charting examples, James's case",
  connect: ["Prioritization", "Documentation"],
  summary: "Report now: SpO₂ below 92% (or below baseline), pleuritic or other pain, worsening dyspnea, decreased LOC, restlessness, anxiety, or irritability (early hypoxia), acute stridor, and asymmetric chest expansion. Chart precise numbers and terms: rate, rhythm, depth, breath sounds with location, effort, cough and sputum, SpO₂ and O₂ source.",
  chain: {
    why: ["Restlessness and anxiety are early signs of hypoxia"],
    ask: ["“Does it feel worse than before?”"],
    exam: ["James: RR 26, accessory muscles, crackles RLL, yellow sputum, pleuritic pain, SpO₂ 90% → position upright, O₂ per orders, monitor, report"],
    flags: ["SpO₂ <92%", "Acute stridor", "Asymmetric expansion", "Worsening dyspnea", "New restlessness or ↓ LOC"]
  },
  table: {
    cols: ["Test", "Why"],
    rows: [["CBC", "WBC for infection; Hgb/Hct for O₂-carrying capacity"], ["ABG", "Oxygenation, ventilation, acid-base"], ["BMP/CMP", "Electrolytes and kidney function"], ["Sputum culture", "Organism causing infection"], ["Blood cultures", "Serious or systemic infection"], ["BNP", "Heart failure as a cause of dyspnea"], ["Chest X-ray", "Pneumonia, edema, effusion, pneumothorax, hyperinflation"]]
  },
  table2: {
    title: "Terms",
    cols: ["Term", "Meaning"],
    rows: [["Tachypnea / bradypnea", "Abnormally fast / slow breathing"], ["Dyspnea", "Difficult or uncomfortable breathing"], ["Orthopnea", "Difficulty breathing lying flat"], ["Productive / non-productive cough", "Produces sputum / dry"], ["Pulmonary edema", "Fluid in the lungs"], ["SpO₂", "% of hemoglobin carrying oxygen"]]
  },
  facts: ["Avoid: “Pt breathing fast and coughing a lot.” Chart: “Respirations 26/min, labored. Productive cough with thick yellow sputum. Breath sounds diminished bilaterally with expiratory wheezes. O₂ sat 91% on room air.”"],
  qa: [["New restlessness and anxiety in a client with pneumonia should make the nurse think of what?", "Hypoxia; check SpO₂ and report."], ["Which SpO₂ value is the lecture's report-now cutoff?", "Below 92% (or below the client's baseline)."]]
}
];

window.EMERGENCIES = [
  ["Client unstable at the door", "survey", "Labored breathing, can't speak full sentences, cyanosis, new confusion, profuse sweating", "Stop the routine survey and history; prioritize ABCs and get help."],
  ["Suspected abuse or trafficking", "survey", "Story doesn't fit, controlling companion, fear", "Interview alone, address urgent needs, follow reporting laws. Never confront."],
  ["Safety or self-harm concern", "survey", "Disclosure during the emotional health history", "Pause the history and follow the escalation process."],
  ["Abnormal VS with symptoms", "survey", "Tachycardia, tachypnea, fever with distress or a worsening trend", "Recheck, assess the whole patient, escalate."],
  ["Stridor", "resp", "Harsh, high-pitched inspiratory sound, drooling", "Upper airway obstruction: call for help immediately."],
  ["SpO₂ below 92%", "resp", "Low reading (or below baseline) confirmed by probe check", "Position upright, oxygen per orders, report."],
  ["Early hypoxia", "resp", "New restlessness, anxiety, irritability, decreased LOC", "Check SpO₂ and work of breathing; report."],
  ["Asymmetric chest expansion", "resp", "Thumbs at the 10th rib move apart unequally", "One lung isn't inflating: report."],
  ["Paradoxical breathing", "resp", "Chest and abdomen move opposite directions", "Muscle fatigue, flail chest, or diaphragm problem: escalate if new."],
  ["Central cyanosis", "resp", "Blue or gray tongue, lips, oral mucosa", "Hypoxemia: oxygen and escalation."]
];

window.LOOKALIKES = [
  ["Subjective vs. objective data?", "Subjective is reported (symptoms, history, feelings). Objective is observed or measured (signs, VS, exam findings)."],
  ["Primary vs. secondary source?", "Primary is the patient. Secondary is anyone or anything else: family, caregivers, records, other clinicians."],
  ["Comprehensive vs. focused assessment?", "Comprehensive: all systems for a baseline in a stable setting. Focused: one system for a current problem."],
  ["Dorsal hand vs. finger pads?", "Back of the hand for temperature; finger pads for texture, moisture, masses, pulses."],
  ["Diaphragm vs. bell?", "Diaphragm for high-pitched sounds (lungs, bowel, S1/S2). Bell for low-pitched sounds (murmurs, bruits, S3/S4)."],
  ["Resonance vs. tympany vs. dullness?", "Resonance: lungs. Tympany: stomach/bowel. Dullness: solid organs (abnormal over lungs)."],
  ["Mood vs. affect?", "Mood is reported by the client; affect is observed by the nurse."],
  ["Descriptive vs. evaluative charting?", "Descriptive states what you saw or heard. Evaluative adds a judgment (“anxious,” “uncooperative”)."],
  ["Allergy vs. side effect?", "Allergy: hives, angioedema, wheezing, anaphylaxis. Side effect: nausea, constipation, drowsiness."],
  ["ADL vs. IADL?", "ADL: bathing, dressing, toileting, eating. IADL: meds, meals, shopping, finances, transportation."],
  ["OLDCARTS vs. PQRST?", "OLDCARTS analyzes any symptom (HPI). PQRST analyzes pain."],
  ["Wheeze vs. stridor?", "Wheeze: musical, usually expiratory, lower airways. Stridor: harsh, inspiratory, upper airway emergency."],
  ["Crackles vs. rhonchi?", "Crackles: popping, inspiratory, fluid in alveoli. Rhonchi: snoring, expiratory, secretions in large airways, may clear with cough."],
  ["Normal chest vs. barrel chest?", "Normal AP:lateral 1:2. Barrel 1:1 from air trapping (COPD)."],
  ["Bronchial vs. vesicular?", "Bronchial: loud, high, over the trachea, expiration longer. Vesicular: soft, low, over the periphery, inspiration longer."]
];
