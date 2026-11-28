/* Content for the Nursing Fundamentals (NURA 320) final interactive guide.
   The final is an ATI RN Fundamentals assessment. Sections follow the nine sub-scales on the ATI
   RN Fundamentals Online Practice 2026 (Form B) Individual Performance Profile, with each section's
   item count from that report, so every content area gets covered, not just the ones a single score
   report flags. Lab skills come from the N320 lab slides (Lab 2 vital signs & oxygen, Lab 4 medication
   administration, Lab 7 bowel elimination & ostomy, Lab 8 peripheral IV, Lab 10 injections, Lab 11
   infusion pump). Everything else follows standard ATI Fundamentals review content. */

window.GUIDE = {
  key: "nura320-final-v1",
  course: "Semester 1 · Nursing Fundamentals",
  title: "Fundamentals Final Study Lab",
  heroArt: "🩹",
  heroText: "Your final follows the <b>ATI RN Fundamentals</b> assessment. Start on the <b>ATI Plan</b> page for the blueprint and a <b>60-question practice exam</b> built like ATI Form B. Every topic moves from <b>the principle → what you assess → what you do → what you teach or watch for</b>.",
  formats: ["Multiple choice", "Select all that apply", "Select N", "Ordered response", "Fill in the blank", "Drop-down cloze", "Highlight"],
  formatNote: "These are the formats on the ATI RN Fundamentals practice assessment (Form B): mostly one-best-answer multiple choice, plus select all that apply, ordered response (drag the steps into order), dosage fill-in-the-blank, and Next Gen case items that open a chart (Nurses' Notes, Vital Signs, MAR, Diagnostic Results) and ask you to complete a sentence from drop-downs, select a set number of actions, or highlight findings. Every question here is rated easy, medium, or hard and explains the correct answer.",
  chainTitle: "The nursing chain",
  chainNote: "The principle → what you assess → what you do → teaching and red flags.",
  chainShort: "a principle → assess → act → teach chain",
  chainKeys: [["why", "1 · The principle"], ["assess", "2 · Assess"], ["act", "3 · Nursing actions"], ["teach", "4 · Teach / red flags"]],
  connectLabel: "Connects to:",
  emphasisTitle: "Highest-yield rules",
  ctTitle: "Explain it out loud",
  ctNote: "One per ATI area. Answer out loud, then tap to check.",
  frame: "Fundamentals questions are safety and priority questions. Recognize the cues, decide whether the client is stable, then pick the action. If the client is in danger (airway, bleeding, falling, seizing), act on the danger first. If not, assess before you act, and act before you document or report.",
  verdictTitle: "Right Call?",
  verdictIntro: "Read the action or finding, then decide: is it correct practice, does it need correcting or teaching, or is it unsafe enough to stop now?",
  verdict: [["Correct practice", "good"], ["Needs correcting / teaching", "warn"], ["Unsafe: stop & act now", "bad"]],
  verdictHelp: [
    ["Correct practice", "matches the standard of care, scope of practice, and the client's needs."],
    ["Needs correcting / teaching", "a technique error, a misunderstanding, or a borderline finding: correct it, teach, or reassess."],
    ["Unsafe: stop & act now", "puts the client in immediate danger (airway, bleeding, wrong client or drug, fall, fire) or signals a complication that needs escalation."]
  ],
  beyondLabel: "Beyond the slides",
  triageIntro: "ABCs first, then safety, then acute over chronic and unstable over stable. A client asking a teaching question is almost never first.",
  emergIntro: "These are the fundamentals situations you act on right away, plus the look-alikes ATI likes to test.",
  tiles: {
    ati: ["ATI Plan & Practice Exam", "The ATI RN Fundamentals blueprint (items per area), every area mapped to topics, a study plan, and a 60-question practice exam built like Form B."],
    normal: ["✅", "Rapid-fire actions and findings: correct practice, needs correcting, or unsafe?"],
    sort: "Race the clock sorting precautions, delegation, dressings, and look-alike findings.",
    chains: "Put transfers, injections, IV checks, med passes, and seizure care in order.",
    emerg: "Situations to act on now, and how to tell the look-alikes apart."
  },
  credit: ""
};

window.SYSTEMS = [
  { id: "mgmt", name: "Management of Care", short: "Mgmt of Care", icon: "📋", weight: "ATI blueprint · 9 of 60 items" },
  { id: "safety", name: "Safety & Infection Prevention and Control", short: "Safety & Infection", icon: "🛡️", weight: "ATI blueprint · 10 of 60 items" },
  { id: "health", name: "Health Promotion & Maintenance", short: "Health Promotion", icon: "🌱", weight: "ATI blueprint · 6 of 60 items" },
  { id: "psych", name: "Psychosocial Integrity", short: "Psychosocial", icon: "💬", weight: "ATI blueprint · 4 of 60 items" },
  { id: "comfort", name: "Basic Care & Comfort", short: "Basic Care", icon: "🛏️", weight: "ATI blueprint · 8 of 60 items" },
  { id: "pharm", name: "Pharmacological & Parenteral Therapies", short: "Pharm & IV", icon: "💉", weight: "ATI blueprint · 5 of 60 items" },
  { id: "risk", name: "Reduction of Risk Potential", short: "Risk Reduction", icon: "📉", weight: "ATI blueprint · 6 of 60 items" },
  { id: "phys", name: "Physiological Adaptation", short: "Phys Adaptation", icon: "🫁", weight: "ATI blueprint · 3 of 60 items" },
  { id: "cj", name: "Clinical Judgment (Next Gen case items)", short: "Clinical Judgment", icon: "🧠", weight: "ATI blueprint · 9 case items (26 points)" }
];

window.EMPHASIS = [
  "First action = assess, unless the client is in danger right now (airway, bleeding, seizing, falling). Then act on the danger.",
  "Never delegate assessment, teaching, evaluation, or judgment to assistive personnel (AP). Ambulating, bathing, vital signs on a stable client, and I&O are fine.",
  "Two identifiers (name + DOB), never the room number. Three label checks: when you pull it, prepare it, and at the bedside.",
  "Droplet = surgical mask within 3 ft (flu, pertussis, mycoplasma pneumonia, diphtheria, meningococcus). Airborne = N95 + negative-pressure room (TB, measles, chickenpox).",
  "Falls: assess the client for injury first, then call for help, then notify the provider, then fill out an incident report (never charted in the record).",
  "Lifting: object close, knees bent, back straight, wide base of support, use leg and arm muscles.",
  "SubQ 45°–90° · IM 90° (Z-track pulls skin 1 in aside) · ID 10°–15° · PIV insertion 10°–30°. Enoxaparin: abdomen ≥2 in from the umbilicus, no rubbing.",
  "Tube meds: each drug separately, dissolved in water. Flush 15–30 mL before, between, and after (30–60 mL after the last one for some policies).",
  "Orthostatic BP: lying first, then sitting and standing, each within 1–3 min. A drop of 20 systolic or 10 diastolic is positive.",
  "Post-op day 1–2 fever with ↑ RR and pulse = atelectasis until proven otherwise: incentive spirometer 10 times an hour while awake.",
  "Oxygen at home: no smoking or open flame within 10 ft, cotton (not wool) blankets, tanks upright and secured, know where the extinguisher is.",
  "Stage 1 = transparent film · stage 2 = hydrocolloid · stages 3–4 = alginate or foam (heavy drainage) · moist gauze for debridement."
];

window.CRITICAL_THINKING = [
  ["Management of Care: what can the RN delegate to an AP, and what never leaves the RN?", "Delegate stable, predictable, routine tasks with standard steps: ambulating, hygiene, feeding, vital signs on stable clients, I&O, positioning. The RN keeps assessment, teaching, evaluation, care planning, and anything needing nursing judgment (like checking that pain improved after a medication). Use the five rights of delegation: task, circumstance, person, direction, supervision."],
  ["Safety: what is the order of actions after a client falls?", "Check the client for injury first (ABCs, LOC, pain, deformity), get help to move them safely, notify the provider, then complete an incident report. The report is for quality improvement, so it is not mentioned in the medical record."],
  ["Health Promotion: how do you know a client is ready to learn?", "They ask questions, say when they learn best, are comfortable (pain controlled, not anxious or tired), and have what they need to learn (glasses, hearing aids, interpreter). Redirecting teaching to someone else, denial, or 'why do I need this' all mean not ready yet."],
  ["Psychosocial: why are false reassurance and sympathy wrong answers?", "They shut the conversation down. Therapeutic answers reflect or focus on the feeling ('It sounds like you're worried about how you look'), ask open-ended questions, or offer self. Avoid 'don't worry', personal opinions, approval or disapproval, 'why' questions, and changing the subject."],
  ["Basic Care: how do you transfer a client with one-sided weakness to a chair?", "Assess whether they can bear weight, put the chair on the strong side, lock the wheels, have them dangle at the bedside first, use a gait belt, and pivot on the strong leg."],
  ["Pharm & IV: crackles and dyspnea in a client getting IV fluids: what is it and what do you do?", "Fluid overload (circulatory overload). Slow the infusion to keep-open per policy or stop it, raise the head of the bed, assess vital signs and lung sounds, give oxygen as needed, and notify the provider."],
  ["Risk Reduction: a client who is 24 hr post-op has T 38.2 °C, pulse 92, RR 24. What's going on?", "Most likely atelectasis. Have them use the incentive spirometer and cough and deep-breathe, reposition, ambulate, and reassess. Blood gases and cultures are for real breathing trouble, not the first move."],
  ["Physiological Adaptation: what must be at the bedside of a client with a new tracheostomy?", "A spare trach tube the same size (and one smaller) plus the obturator, suction equipment, oxygen, and a manual resuscitation bag. If the tube comes out, the obturator guides the new one in."],
  ["Clinical Judgment: what are the six steps of the clinical judgment model?", "Recognize cues → analyze cues → prioritize hypotheses → generate solutions → take action → evaluate outcomes. Next Gen items test one step at a time, so read what the question is really asking for."]
];

window.STRATEGY = [
  ["Danger first, then assess", "If the client is in danger (choking, seizing, bleeding, on the floor), act on the danger. Otherwise the first step is to assess. 'Check the client' beats 'call the provider', 'document', and 'fill out a report'."],
  ["Act before you write", "Documentation and incident reports are real, but they are never the first action when a client needs care."],
  ["Scope questions: who is allowed?", "RN: assess, teach, evaluate, plan, initiate enteral feedings, insert PIVs and urinary catheters. Not RN: insert ports or central lines, suture, intubate. AP: routine care on stable clients."],
  ["Teaching items: find the wrong statement", "For 'needs more teaching' stems, look for the unsafe statement (smoking near oxygen, aspirating insulin, locking elbows on a walker)."],
  ["Communication items: pick the feeling", "The right answer usually names or explores the feeling. Rule out advice, false reassurance, sympathy, 'why', and changing the subject."],
  ["Next Gen cases: read the tabs", "Open every chart tab before answering. For 'select N' items pick exactly N; for highlight and select-all, judge each finding on its own; partial credit counts."],
  ["Numbers: label every step", "For dosage items, write desired ÷ have × quantity with units, check the answer makes sense, then round the way the stem says (no trailing zero; leading zero before a decimal)."]
];

window.DISORDERS = [
/* ================= MANAGEMENT OF CARE ================= */
{
  id: "deleg", sys: "mgmt", name: "Delegation & Scope of Practice", star: true, starLabel: "On the practice exam",
  sub: "Five rights of delegation; RN vs. LPN vs. AP; what is inside the RN scope",
  connect: ["Assignment", "Supervision", "Nurse practice act", "Safety"],
  summary: "Delegation hands a task (not the responsibility) to someone else. The RN stays accountable, so the RN only delegates tasks that are inside the other person's scope and training, that are routine, and that don't need nursing judgment. Assessment, teaching, evaluation, and care planning stay with the RN.",
  chain: {
    why: ["The RN is accountable for the outcome of anything delegated", "Each state's nurse practice act defines scope", "The more stable and predictable the client, the more can be delegated"],
    assess: ["Is the client stable with a predictable outcome?", "Is the task standard, routine, and unchanging?", "Is the AP or LPN trained and competent for it?"],
    act: ["Use the five rights: right task, circumstance, person, direction/communication, supervision/evaluation", "Give clear directions: what, when, what to report back", "Follow up and evaluate the result"],
    teach: ["Never delegate: initial assessment, teaching, evaluating response (like pain relief), care planning, unstable clients", "LPN: reinforces teaching, gives most meds, collects data on stable clients", "AP: ambulate, bathe, feed (no dysphagia), vital signs on stable clients, I&O, linen, positioning"]
  },
  table: {
    cols: ["Who", "Can do", "Can't do"],
    rows: [
      ["RN", "Admission and ongoing assessment, care planning, teaching, evaluation, IV push meds, insert PIVs and urinary catheters, initiate enteral feedings, blood transfusions", "Insert implanted ports or central lines, suture, intubate, prescribe (provider tasks)"],
      ["LPN/LVN", "Data collection on stable clients, reinforce teaching, oral/IM/SubQ meds, dressing changes, urinary catheters, trach suction on stable clients", "Initial assessment, initial teaching, care planning, unstable clients, IV push (most states)"],
      ["Assistive personnel (AP)", "Ambulating, ROM, bathing and hygiene, feeding stable clients, vital signs on stable clients, I&O, weights, bed making, positioning, specimen collection (stool, urine)", "Anything needing assessment, teaching, evaluation, or sterile technique; meds; checking a client's response to treatment"]
    ]
  },
  facts: [
    "Ambulating a stable post-op client = delegate. Confirming pain went down after an analgesic = evaluation, so the RN does it.",
    "Demonstrating an incentive spirometer or insulin pen = teaching, so the RN keeps it.",
    "Applying sequential compression devices can be delegated after the RN's initial assessment.",
    "Inserting an implanted port, suturing a laceration, and placing an endotracheal tube are provider (or advanced practice) tasks.",
    "Initiating an enteral feeding through a G-tube, NG, or J-tube is within the RN scope.",
    "Assignment ≠ delegation: assignment transfers both the task and responsibility to someone licensed to do it."
  ],
  qa: [
    ["Which of these goes to the AP: measuring I&O, teaching a client to use a walker, or assessing a new admission?", "Measuring I&O. Teaching and assessment stay with the RN."],
    ["What are the five rights of delegation?", "Right task, right circumstance, right person, right direction/communication, right supervision/evaluation."],
    ["Is starting a gastrostomy tube feeding within RN scope?", "Yes. Placing ports, suturing, and intubating are not."]
  ]
},
{
  id: "handoff", sys: "mgmt", name: "Handoff, SBAR & Continuity of Care",
  sub: "SBAR, change-of-shift report, transfer report, critical pathways, transcribing orders",
  connect: ["Communication", "Safety", "Documentation", "Teamwork"],
  summary: "Most errors happen when information is passed between people. SBAR (situation, background, assessment, recommendation) gives every handoff the same structure. Orders must be complete before you carry them out: if a prescription is missing a dose, route, time, or frequency, the nurse calls the prescriber before acting.",
  chain: {
    why: ["Handoffs and transfers are high-risk points for errors", "A standard structure keeps key details from being lost", "The nurse is responsible for making sure an order is complete and safe"],
    assess: ["Is the order complete: client name, date and time, drug, dose, route, frequency, signature?", "What changed this shift and what is pending?", "Is the client moving to another unit or facility?"],
    act: ["Use SBAR for change-of-shift report and calls to providers", "Call the prescriber to clarify incomplete or unclear orders (not the pharmacist, not 'follow routine policy')", "Read back telephone and verbal orders", "Use a transfer report when the client moves to another unit or facility"],
    teach: ["Critical pathway = an interprofessional plan for a diagnosis across all phases of care", "MAR is for documenting medications, not for handoff", "Do the handoff at the bedside when possible so the client can take part"]
  },
  table: {
    cols: ["Letter", "What goes in it", "Example"],
    rows: [
      ["S · Situation", "What is happening now", "\"Mr. L in 412 has new shortness of breath.\""],
      ["B · Background", "Diagnosis, history, relevant treatments", "\"Admitted yesterday for pneumonia, on 2 L oxygen.\""],
      ["A · Assessment", "Your findings and what you think is going on", "\"SpO₂ 88% on 2 L, RR 28, crackles bilaterally.\""],
      ["R · Recommendation", "What you need or suggest", "\"I'd like you to come assess him and consider a chest X-ray.\""]
    ]
  },
  facts: [
    "An insulin order with no glucose-check frequency is incomplete: call the provider now. Waiting for the provider to see it tomorrow can harm the client.",
    "Verbal and telephone orders: write them down, read them back, and get them signed per policy.",
    "Change-of-shift tool = SBAR (or I-PASS). Moving to another unit or facility = transfer report.",
    "The nurse should never carry out an order they believe is unsafe; clarify it and go up the chain of command if needed."
  ],
  qa: [
    ["A new prescription says 'insulin per sliding scale' with no times for glucose checks. What do you do?", "Call the prescriber to clarify the frequency before carrying it out."],
    ["What tool organizes a change-of-shift report?", "SBAR: situation, background, assessment, recommendation."]
  ]
},
{
  id: "legal", sys: "mgmt", name: "Advocacy, Ethics & Legal Duties",
  sub: "Advance directives, informed consent, chain of command, confidentiality",
  connect: ["Advance directives", "Informed consent", "HIPAA", "Ethics"],
  summary: "The nurse advocates by protecting the client's right to make informed decisions, even when the nurse would choose differently. Advance directives tell staff what the client wants if they can't speak for themselves. When a client is in danger and a provider doesn't respond, the nurse goes up the chain of command.",
  chain: {
    why: ["Autonomy: the client decides, after getting full information", "Beneficence and nonmaleficence: do good, avoid harm", "Advocacy: speak up for the client's wishes and safety"],
    assess: ["Does the client understand the options and risks?", "Is there a living will, DNR order, or health care proxy?", "Is the client deteriorating without timely treatment?"],
    act: ["Arrange a meeting with the client, family, and provider so the client can make an informed choice", "Honor the living will; comfort measures (oxygen by nasal cannula, pain control) are still given when resuscitation is declined", "Activate the chain of command (charge nurse, nurse manager) when a provider's response puts the client at risk", "Informed consent: provider explains; nurse witnesses the signature and confirms understanding"],
    teach: ["A client can change advance directives at any time, and staff must honor the change", "The proxy decides only when the client can't", "Don't tell a client what to choose; give information and support their decision"]
  },
  table: {
    cols: ["Term", "Meaning"],
    rows: [
      ["Living will", "Written instructions about life-sustaining treatment if the client can't decide (like declining intubation or CPR)"],
      ["Durable power of attorney for health care (health care proxy)", "Names a person to make decisions when the client can't"],
      ["DNR / allow natural death", "Provider order: no CPR. Comfort care continues."],
      ["Informed consent", "Provider explains procedure, risks, benefits, alternatives; client is competent and signs voluntarily; nurse witnesses"],
      ["Chain of command", "Nurse → charge nurse → nurse manager → higher administration when safety is at risk"]
    ]
  },
  facts: [
    "A client who declines resuscitation can still get oxygen by nasal cannula: it is comfort care, not a resuscitative measure. Intubation is resuscitative.",
    "If the provider says 'just keep checking vitals' for a client in hemorrhagic shock, notify the nurse manager (chain of command). Documenting the conversation comes later.",
    "Advocacy is helping the client get the information to decide, not deciding for them and not just reassuring them.",
    "Confidentiality: share information only with people directly involved in care. No identifying details in public spaces or on social media."
  ],
  qa: [
    ["A client with a living will that declines resuscitation asks what would happen if they had trouble breathing in the ED. What's true?", "Staff would give comfort measures like oxygen by nasal cannula but would not intubate."],
    ["A provider won't come see a client showing signs of shock. Next step?", "Notify the nurse manager / chain of command so the client gets timely care."]
  ]
},
{
  id: "timemgmt", sys: "mgmt", name: "Prioritization & Time Management",
  sub: "Planning the shift, priority frameworks, controlling interruptions",
  connect: ["Prioritization", "Nursing process", "Safety"],
  summary: "Good time management starts in the planning step of the nursing process: list the goals and tasks for each client, rank them, and work the list. Control interruptions, document promptly (not at the end of the shift), and reprioritize as conditions change.",
  chain: {
    why: ["Missed or late care harms clients", "Interruptions cause errors", "Late documentation is less accurate"],
    assess: ["Which clients are unstable or have time-critical needs (meds, pre-op, glucose)?", "What can be delegated?", "What has changed since report?"],
    act: ["Make a prioritized to-do list at the start of the shift", "Finish tasks for one client before starting the next to avoid fragmented care", "Limit interruptions (no-interruption zones for med passes)", "Document as soon as care is done"],
    teach: ["Priority order: ABCs → safety → acute over chronic → actual over potential → unstable over stable", "Maslow: physiological needs before safety, then love/belonging, esteem, self-actualization", "Reprioritize whenever a client's status changes"]
  },
  facts: [
    "Using the planning step to build a prioritized task list is the efficient time-management answer.",
    "Waiting until the end of the shift to document is not effective time management and invites errors.",
    "Allowing interruptions to chat about other clients during a task is an error risk.",
    "Delegating appropriate tasks frees the RN for assessment and teaching."
  ],
  qa: [
    ["Which comes first: a client with new confusion or a client asking about discharge?", "New confusion: an acute change in status."],
    ["Where in the nursing process does time management start?", "Planning: setting goals and priorities for the shift."]
  ]
},

/* ================= SAFETY & INFECTION CONTROL ================= */
{
  id: "falls", sys: "safety", name: "Fall Prevention, Restraints & Incident Reports", star: true, starLabel: "On the practice exam",
  sub: "Fall risk interventions, side rails, restraint rules, what to do after a fall",
  connect: ["Safety", "Older adults", "Documentation", "Mobility"],
  summary: "Falls are the most common injury in health care. Prevent them with a low bed, nonskid footwear, call light in reach, a regular toileting schedule, and the fewest restraints possible. If a client falls, assess them for injury first. Incident reports go to risk management for quality improvement and are never mentioned in the client's record.",
  chain: {
    why: ["Older adults, sedated clients, and clients with urgency or confusion fall most", "All four side rails up counts as a restraint and causes climbing falls", "Restraints cause injury and are a last resort"],
    assess: ["Fall risk on admission and every shift (history, meds, mobility, cognition, elimination)", "After a fall: ABCs, LOC, pain, deformity, bleeding", "Restrained clients: circulation, skin, and need for continued restraint"],
    act: ["Bed in lowest position, wheels locked, call light and items in reach", "Toileting schedule every 1–3 hr, nonskid socks or shoes, night light", "Raise the top two side rails only (to help with turning and sitting up)", "Restraints: provider order (renewed per policy), release and assess at least every 2 hr, quick-release knot tied to the bed frame (not the side rail), two fingers under the strap"],
    teach: ["Family can't be required to sit with the client; the nurse stays responsible for safety", "Wrist restraints need a prescription; raising a side rail does not", "After a fall: assess → get help → notify provider → incident report (not charted)"]
  },
  facts: [
    "A client found on the floor: the first action is to check for injuries. Moving hazards, asking what happened, and notifying the provider come after.",
    "Side rails can trap or injure a confused client who tries to climb over them, so they're used carefully.",
    "When a side rail is raised, the bed should be in the lowest position.",
    "Never chart 'incident report filed' in the medical record; document the facts of the event and the client's condition.",
    "Seclusion and restraints never for staff convenience or as punishment."
  ],
  qa: [
    ["You find a client on the bathroom floor. First action?", "Assess the client for injuries."],
    ["Where is a restraint tied?", "To the bed frame with a quick-release knot, never the side rail."],
    ["A confused client at risk for falls keeps getting up to go to the bathroom. Best intervention?", "A regular toileting schedule (every 1–3 hr)."]
  ]
},
{
  id: "ergo", sys: "safety", name: "Ergonomics & Body Mechanics", star: true, starLabel: "On the practice exam",
  sub: "Lifting, sitting posture, safe client handling",
  connect: ["Workplace safety", "Transfers", "Musculoskeletal injury"],
  summary: "Back injuries come from bending, twisting, and reaching. Keep the load close to your center of gravity, bend your knees, keep a wide base of support, and let your leg and arm muscles do the work. For desk work, sit with hips and knees at about 90°, feet flat, and wrists neutral.",
  chain: {
    why: ["Back muscles are weaker than leg and arm muscles", "Reaching away from the body multiplies strain on the spine", "Repetitive strain injuries come from poor posture held for long periods"],
    assess: ["Weight of the object or how much the client can help", "Need for a second person or a lift device", "Workstation height, chair support, monitor position"],
    act: ["Stand close to the object; bend at the knees and hips, not the waist", "Feet shoulder-width apart for a broad base of support", "Tighten abdominal muscles; lift with the legs; don't twist (pivot your feet)", "Raise the bed to waist level for care; use lift equipment for heavy or dependent clients"],
    teach: ["Office workers: hips and knees at 90°, feet flat on the floor, back supported", "Keep elbows bent at a comfortable angle close to the body; don't fully extend them to reach the mouse", "Wrists neutral and floating while typing (not resting on the desk edge, which raises carpal tunnel risk)", "Monitor at or just below eye level; take short breaks to stretch"]
  },
  facts: [
    "Standing close to the object keeps it near your center of gravity and reduces back strain.",
    "A soft, thick seat cushion doesn't give proper support; a supportive chair with lumbar support does.",
    "Pushing, pulling, or sliding is safer than lifting.",
    "Use a friction-reducing device or slide board for lateral transfers."
  ],
  qa: [
    ["Name three ways to protect your back when moving a cabinet.", "Stand close to it, bend your knees, and keep a wide base of support (and use your legs, not your back)."],
    ["What sitting posture prevents repetitive stress injuries?", "Hips and knees at about 90°, feet flat, back supported, wrists neutral."]
  ]
},
{
  id: "infection", sys: "safety", name: "Infection Control & Isolation Precautions", star: true, starLabel: "On the practice exam",
  sub: "Standard, contact, droplet, airborne, protective environment; PPE order",
  connect: ["Chain of infection", "Hand hygiene", "PPE", "TB"],
  summary: "Standard precautions apply to every client. Transmission-based precautions add PPE and room rules based on how the organism spreads. The key split: droplet particles are larger than 5 microns and fall within about 3 ft (surgical mask), while airborne particles are smaller than 5 microns and float (N95 plus a negative-pressure room).",
  chain: {
    why: ["Break the chain of infection: agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host", "Hand hygiene is the single most effective way to prevent infection"],
    assess: ["What organism and how does it spread?", "Is the client immunocompromised (needs protection from us)?", "Signs of infection: fever, ↑ WBC, drainage, redness"],
    act: ["Hand hygiene: alcohol rub unless hands are visibly soiled or the organism is C. diff (soap and water)", "Don PPE: gown → mask/respirator → goggles → gloves. Doff: gloves → goggles → gown → mask (outside the room) → hand hygiene", "Dedicated equipment (stethoscope, BP cuff) for contact precautions", "Limit transport; client wears a surgical mask outside the room for droplet or airborne"],
    teach: ["Airborne (N95, negative pressure, door closed): TB, measles, varicella, disseminated herpes zoster", "Droplet (mask within 3 ft, private room): influenza, pertussis, rubella, mumps, mycoplasma and pneumococcal pneumonia, meningococcal meningitis, diphtheria (pharyngeal), strep pharyngitis", "Contact (gown + gloves): MRSA, VRE, C. diff, RSV, scabies, lice, herpes simplex, wound infections", "Protective environment: allogeneic stem cell transplant; positive-pressure room, HEPA, no fresh flowers or plants"]
  },
  table: {
    cols: ["Precaution", "Room", "PPE", "Examples"],
    rows: [
      ["Standard", "Any", "Gloves, gown, mask, eyewear as exposure requires", "Every client"],
      ["Contact", "Private or cohort", "Gown and gloves on entry", "MRSA, VRE, C. diff, RSV, scabies, lice, wound drainage"],
      ["Droplet (>5 microns)", "Private or cohort, door may stay open", "Surgical mask within 3 ft (1 m)", "Flu, pertussis, rubella, mumps, mycoplasma pneumonia, meningococcus, diphtheria, strep throat"],
      ["Airborne (<5 microns)", "Negative-pressure airborne infection isolation room, door closed", "Fit-tested N95 or PAPR", "TB, measles, varicella, disseminated zoster"],
      ["Protective environment", "Positive pressure, HEPA filtered", "Mask, gloves, gown per policy", "Allogeneic stem cell transplant"]
    ]
  },
  facts: [
    "TB: N95 before entering, negative-pressure room, remove the respirator after leaving the room, and keep soiled linen bagged inside the room.",
    "A sterile gown isn't required for airborne precautions.",
    "C. diff spores aren't killed by alcohol rub: wash with soap and water and use a bleach-based cleaner.",
    "Neutropenic clients: no fresh flowers, no raw fruits or vegetables per policy, avoid crowds, report a temperature of 100.4 °F (38 °C) or higher."
  ],
  qa: [
    ["Mycoplasma pneumonia: which precautions?", "Droplet: surgical mask within 3 ft, private room."],
    ["Name three things you do for a client with suspected TB.", "Fit-tested N95, negative-pressure room with the door closed, client wears a surgical mask if transported."],
    ["Doffing order?", "Gloves, goggles or face shield, gown, mask (outside the room), then hand hygiene."]
  ]
},
{
  id: "homesafe", sys: "safety", name: "Home & Oxygen Safety",
  sub: "Oxygen fire risk, fire response, poisoning, home hazards",
  connect: ["Oxygen therapy", "Older adults", "Fire safety"],
  summary: "Oxygen isn't flammable itself, but it makes everything else burn faster and ignite more easily. Home safety teaching for oxygen means no smoking or flame nearby, no sparks from wool or synthetic blankets, tanks kept upright and secured, and a working extinguisher and smoke detectors.",
  chain: {
    why: ["Oxygen widens the flammable range and lowers the flashpoint of materials", "Falls and fires are the top home hazards for older adults"],
    assess: ["Smokers in the home, open flames, gas stoves, space heaters", "Where tanks are stored and how they're secured", "Smoke detectors, extinguisher location, clear exits, rugs and cords"],
    act: ["Post 'Oxygen in use' signs", "Keep oxygen at least 10 ft from open flames; visitors smoke outside", "Store tanks upright in a stand or cart; never lay them on the floor", "Use cotton blankets and clothing, not wool or synthetics (static sparks)", "Keep equipment away from heat sources and electrical sparks; ground electrical equipment"],
    teach: ["Fire in a facility: RACE (Rescue, Alarm, Contain, Extinguish). Extinguisher: PASS (Pull, Aim at the base, Squeeze, Sweep)", "Know where the extinguisher is and how to use it", "Don't use petroleum-based products (petroleum jelly) on the face with oxygen; use water-based lubricant", "Poisoning: keep the poison control number posted; store chemicals in original containers"]
  },
  facts: [
    "A client who can point out where the fire extinguisher is demonstrates good oxygen safety.",
    "Extra oxygen tanks are stored upright, not on their side under the bed.",
    "Inspect oxygen equipment daily, not weekly.",
    "Fire classes: A (paper, wood), B (grease, liquids), C (electrical); an ABC extinguisher handles all three."
  ],
  qa: [
    ["Which blanket should a client on home oxygen use?", "Cotton (wool and synthetics can create static sparks)."],
    ["What does PASS stand for?", "Pull the pin, Aim at the base, Squeeze the handle, Sweep side to side."]
  ]
},
{
  id: "medsafety", sys: "safety", name: "Medication Safety, Client ID & Controlled Substances",
  sub: "Two identifiers, wasting controlled drugs, high-alert meds, error reporting",
  connect: ["Rights of medication administration", "Controlled Substances Act", "Incident reports"],
  summary: "Most med errors are caught by habits: two client identifiers every time, three label checks, a second nurse for high-alert drugs, and a witness when a controlled substance is wasted. If an error happens, check the client first, notify the provider, and file an incident report.",
  chain: {
    why: ["Wrong-client errors happen when staff rely on room numbers or the client's response to a name", "Controlled substances are tracked by law (Controlled Substances Act)"],
    assess: ["Client identity: two identifiers (full name, DOB, or MRN) against the wristband and MAR", "Allergies before every medication", "Any discrepancy in a controlled-substance count"],
    act: ["Identify the client using the wristband and the MAR; if the client can't respond, the wristband is the source", "Waste any unused controlled substance with a second nurse watching and both sign", "Two RNs independently check high-alert meds (insulin, heparin, opioids by some routes) per policy", "Error: assess the client → notify the provider → follow orders → incident report"],
    teach: ["Room number, bed assignment, and a visitor's word are never identifiers", "Never lock leftover controlled drugs back in the cabinet or toss them in a sharps container", "Don't leave meds at the bedside", "Report near misses too; reporting is about fixing systems, not blame"]
  },
  facts: [
    "Drawing 1 mL from a 2 mL opioid vial: have another nurse witness the waste of the remaining 1 mL.",
    "For an unresponsive client, use the wristband (two identifiers) and compare it with the MAR.",
    "Insulin is a high-alert drug: many policies require two licensed nurses to verify the dose (Lab 10).",
    "'Do not use' abbreviations include U (write 'units'), IU, QD, QOD, trailing zeros (1.0 mg), and missing leading zeros (.5 mg)."
  ],
  qa: [
    ["Which resources identify an unresponsive client?", "The wristband (two identifiers) compared with the MAR. Not the room number or a visitor."],
    ["You drew up half an opioid vial. What happens to the rest?", "Waste it with a second nurse as witness; both document."]
  ]
},

/* ================= HEALTH PROMOTION ================= */
{
  id: "teach", sys: "health", name: "Client Teaching & Readiness to Learn", star: true, starLabel: "On the practice exam",
  sub: "Readiness cues, learning domains, teaching older adults and clients with hearing loss",
  connect: ["Health literacy", "Older adults", "Teach-back", "Discharge"],
  summary: "A client learns best when they're physically comfortable, emotionally ready, and see why the information matters. Look for readiness cues (questions, naming the best time to learn) before teaching. For older adults, use short sessions, concrete examples, and a lower-pitched, slow, clear voice. Confirm learning with teach-back or return demonstration.",
  chain: {
    why: ["Adults learn when information solves a problem they recognize", "Pain, anxiety, fatigue, and missing tools (glasses, hearing aids) block learning"],
    assess: ["Readiness: asks questions, names when they learn best, wants to be involved", "Not ready: redirects teaching to someone else, denial, 'why do I need this?', in pain", "Literacy, language, culture, sensory limits, preferred learning style"],
    act: ["Fix barriers first: treat pain, get glasses or hearing aids, use an interpreter", "Pick the domain: cognitive (knowledge), psychomotor (skills: demonstrate then return-demonstrate), affective (attitudes)", "Older adults: short sessions (under 30 min), frequent breaks, concrete examples, large print, low-glare light, minimize distractions", "Hearing loss: face the client, speak slowly in a low tone, don't shout"],
    teach: ["Evaluate with teach-back ('Tell me how you will…') or return demonstration", "Simple words, small chunks, most important points first", "Group settings with distractions aren't ideal for older adults"]
  },
  table: {
    cols: ["Domain", "What it covers", "Best teaching method"],
    rows: [
      ["Cognitive", "Knowledge and understanding", "Discussion, reading, video, questions"],
      ["Psychomotor", "Physical skills (insulin injection, walker)", "Demonstration and return demonstration"],
      ["Affective", "Feelings, values, attitudes", "Role-play, discussion, support groups"]
    ]
  },
  facts: [
    "'I can concentrate best in the morning' = ready to learn.",
    "'Talk to my partner about this' or 'I'm wondering why I need to learn this' = not ready yet.",
    "'My glasses are at home' = can't learn yet; get the tool first.",
    "Older adults lose high-frequency hearing first (presbycusis), so lower your pitch rather than raising your volume."
  ],
  qa: [
    ["Which client statement shows readiness to learn insulin injection?", "One that names when or how they learn best, or asks a specific question about it."],
    ["How do you speak to an older adult with hearing loss?", "Face them, speak slowly and clearly in a low-pitched voice, and minimize background noise."]
  ]
},
{
  id: "screen", sys: "health", name: "Health Screening & Immunizations",
  sub: "Adult vaccines, routine screenings, levels of prevention",
  connect: ["Prevention", "Older adults", "Immunity"],
  summary: "Health promotion questions often ask which recommendation belongs in teaching. Know the adult vaccine schedule and the main screening intervals, and remember the three levels of prevention: primary prevents disease, secondary catches it early, tertiary limits damage.",
  chain: {
    why: ["Vaccines and screening prevent or catch disease early", "Older adults have weaker immune responses and more chronic disease"],
    assess: ["Immunization history", "Risk factors (smoking, family history, chronic illness)", "Barriers: cost, transportation, fear"],
    act: ["Tetanus-diphtheria (Td or Tdap) booster every 10 years", "Influenza vaccine every year", "Shingles (recombinant zoster) vaccine at 50 and older: 2 doses", "Pneumococcal vaccine at 50 and older (and younger with risk factors)", "Eye exam every year for older adults; dental every 6–12 months"],
    teach: ["Primary prevention: vaccines, seat belts, exercise, smoking cessation", "Secondary: screenings (mammogram, colonoscopy, BP, glucose)", "Tertiary: rehab, support groups, managing a chronic disease"]
  },
  table: {
    cols: ["Screening or vaccine", "Usual adult recommendation"],
    rows: [
      ["Td/Tdap", "Booster every 10 years (Tdap once as an adult and each pregnancy)"],
      ["Influenza", "Every year"],
      ["Shingles (zoster)", "Age 50 and older, 2 doses"],
      ["Pneumococcal", "Age 50 and older; younger with chronic conditions"],
      ["Colorectal cancer", "Starting at 45 (colonoscopy every 10 yr or other approved tests)"],
      ["Mammogram", "Every 1–2 years starting at 40"],
      ["Eye exam (older adults)", "Every year"],
      ["Blood pressure", "At least every 2 years if normal, yearly if elevated"]
    ]
  },
  facts: [
    "Tetanus booster every 10 years, not every 5.",
    "Pneumococcal vaccine is recommended starting at age 50.",
    "Shingles vaccine starts at 50, not 70.",
    "Older adults should have an eye exam every year (glaucoma, cataracts, macular degeneration)."
  ],
  qa: [
    ["How often does an adult need a tetanus booster?", "Every 10 years."],
    ["Mammogram vs. support group vs. flu shot: which level of prevention is each?", "Secondary, tertiary, primary."]
  ]
},
{
  id: "bone", sys: "health", name: "Preventing Bone Loss & Staying Active",
  sub: "Osteoporosis risk, weight-bearing exercise, calcium and vitamin D",
  connect: ["Osteoporosis", "Falls", "Nutrition", "Older adults"],
  summary: "Bone keeps its density when it carries weight. Weight-bearing exercise (walking, dancing, stair climbing, light weights) plus enough calcium and vitamin D are the core of prevention. Swimming, cycling, and isometrics are fine for fitness but don't load bone.",
  chain: {
    why: ["Bone remodels in response to weight and muscle pull", "Estrogen loss after menopause speeds bone loss"],
    assess: ["Risk: female, older, thin, white or Asian, smoking, alcohol, corticosteroids, low calcium, sedentary", "Height loss, kyphosis, back pain, fracture history", "Fall risk"],
    act: ["Weight-bearing exercise 30 min most days (brisk walking)", "Calcium 1,000–1,200 mg/day and vitamin D 800–1,000 units/day for older adults", "Bone density (DEXA) screening for women 65 and older", "Fall-proof the home"],
    teach: ["High-impact aerobics can fracture fragile bone", "Calcium sources: dairy, fortified juice, canned salmon with bones, leafy greens", "Limit alcohol and caffeine; stop smoking", "Take calcium carbonate with food; calcium citrate any time"]
  },
  facts: [
    "Brisk walking = weight-bearing, recommended. Bicycling and swimming have no weight-bearing advantage for bone.",
    "Isometric exercises build muscle tone but don't prevent osteoporosis.",
    "Sunlight exposure helps the body make vitamin D."
  ],
  qa: [
    ["Which activity best prevents osteoporosis: swimming, cycling, or walking?", "Walking (weight-bearing)."],
    ["Two nutrients for bone health?", "Calcium and vitamin D."]
  ]
},
{
  id: "growth", sys: "health", name: "Growth, Development & Vital Signs Across the Lifespan",
  sub: "Erikson stages, normal vital signs by age (Lab 2), age-specific safety",
  connect: ["Vital signs", "Pediatrics", "Older adults", "Safety"],
  summary: "What's normal depends on age. Infants breathe faster and irregularly, children have higher heart rates, and older adults have slower responses and more fall risk. Erikson's stages help you anticipate what each age group needs.",
  chain: {
    why: ["Expected findings and risks change with age", "Normal values for one age are abnormal for another"],
    assess: ["Compare vital signs with age norms (see table)", "Infant breathing: irregular, diaphragmatic is expected", "Accessory muscle use at any age = labored breathing"],
    act: ["Count respirations and pulse 30 sec × 2 if regular, a full minute if irregular (and always a full minute for infants)", "Use developmentally appropriate teaching and safety measures"],
    teach: ["Infants: back to sleep, rear-facing car seat", "Toddlers and preschoolers: poisoning and drowning prevention", "Adolescents: risk-taking, driving safety", "Older adults: falls, medication safety, sensory changes"]
  },
  table: {
    cols: ["Age", "Pulse (/min)", "Resp (/min)", "BP (mm Hg)"],
    rows: [
      ["Newborn", "100–170", "30–60", "50–70 / 30–45"],
      ["Infant", "90–160", "30–60", "80–90 / 34–42"],
      ["Toddler", "80–140", "20–40", "84–91 / 39–47"],
      ["Preschool", "70–120", "20–35", "88–94 / 47–54"],
      ["School-age", "65–120", "16–22", "95–103 / 57–61"],
      ["Adolescent", "60–100", "12–20", "107–117 / 61–67"],
      ["Adult and older adult", "60–100", "12–20 (older adult 15–20)", "120/80 or less"]
    ]
  },
  table2: {
    title: "Erikson's stages",
    cols: ["Age", "Stage", "What helps"],
    rows: [
      ["Infant (0–1)", "Trust vs. mistrust", "Consistent, responsive caregiving"],
      ["Toddler (1–3)", "Autonomy vs. shame and doubt", "Simple choices, self-feeding, toilet training"],
      ["Preschool (3–6)", "Initiative vs. guilt", "Play, explaining with dolls and drawings"],
      ["School-age (6–12)", "Industry vs. inferiority", "Tasks to master, schoolwork, peers"],
      ["Adolescent (12–18)", "Identity vs. role confusion", "Privacy, peers, involvement in decisions"],
      ["Young adult", "Intimacy vs. isolation", "Relationships, partners in care"],
      ["Middle adult", "Generativity vs. stagnation", "Work, family, community roles"],
      ["Older adult", "Integrity vs. despair", "Life review, reminiscence"]
    ]
  },
  facts: [
    "An infant with an irregular breathing pattern is an expected finding.",
    "Diaphragmatic and thoracic breathing are expected; visible accessory muscle use is labored breathing.",
    "Adult temperature range in the course slides: 96.8–101.3 °F depending on route; axillary reads lowest.",
    "Infants and toddlers are measured lying down with an infantometer (two people); age 2 and up stand on a stadiometer."
  ],
  qa: [
    ["Respiratory rate 40/min: normal for which ages?", "Newborns and infants (30–60); upper limit for toddlers."],
    ["Older adult Erikson stage?", "Integrity vs. despair: support life review."]
  ]
},

/* ================= PSYCHOSOCIAL ================= */
{
  id: "coping", sys: "psych", name: "Stress, Coping & Defense Mechanisms", star: true, starLabel: "On the practice exam",
  sub: "Effective vs. ineffective coping, defense mechanisms, crisis",
  connect: ["Anxiety", "Grief", "Therapeutic communication"],
  summary: "Coping is how someone handles stress. Effective coping looks like healthy routines, expressing feelings, solving problems, and making one's own decisions. Ineffective coping looks like withdrawal, poor sleep, substance use, or depending on others for everyday decisions.",
  chain: {
    why: ["Stress activates the fight-or-flight response; long-term stress harms health", "Defense mechanisms protect against anxiety but can block problem solving if overused"],
    assess: ["Sleep (adults need 7–9 hr), appetite, energy, routines", "Ability to talk about feelings and make decisions", "Support system, substance use, suicide risk"],
    act: ["Encourage expressing feelings; listen actively", "Support healthy routines: regular exercise, sleep hygiene", "Help with problem solving; refer to support groups or counseling", "In crisis: keep the client safe, stay with them, use short clear directions"],
    teach: ["Exercise, relaxation breathing, journaling, support groups", "Avoid alcohol and drugs as coping tools"]
  },
  table: {
    cols: ["Defense mechanism", "What it looks like"],
    rows: [
      ["Denial", "Refusing to accept a diagnosis ('The test must be wrong')"],
      ["Intellectualization / isolation", "Discussing a painful event with no emotion, only facts"],
      ["Projection", "Blaming others for one's own feelings"],
      ["Displacement", "Taking anger out on someone safer (yelling at the nurse instead of the provider)"],
      ["Regression", "Returning to earlier behavior under stress (bed-wetting in a hospitalized child)"],
      ["Rationalization", "Making excuses ('I only drink because work is stressful')"],
      ["Sublimation", "Channeling feelings into an acceptable activity (running after a breakup)"]
    ]
  },
  facts: [
    "Adopting a daily walking routine after a divorce = effective coping.",
    "Talking about a loss with no emotion = intellectualization, a defense mechanism, not healthy expression.",
    "5–6 hr of sleep a night is inadequate for an adult (7–9 hr is the goal).",
    "Relying on parents for day-to-day decisions = ineffective coping."
  ],
  qa: [
    ["Which finding shows effective coping after a major loss?", "A healthy routine like regular exercise, and being able to express feelings."],
    ["A client yells at the nurse after bad news from the provider. Defense mechanism?", "Displacement."]
  ]
},
{
  id: "therapeutic", sys: "psych", name: "Therapeutic Communication",
  sub: "Techniques that open a conversation vs. blocks that shut it down",
  connect: ["Psychosocial care", "Body image", "Advocacy"],
  summary: "Therapeutic communication keeps the focus on the client's feelings and concerns. Open-ended questions, reflecting, focusing, clarifying, and offering self invite the client to talk. False reassurance, giving advice or opinions, approving or disapproving, sympathy, 'why' questions, and changing the subject shut it down.",
  chain: {
    why: ["Clients share more when they feel heard and not judged", "The nurse's job is to explore the client's feelings, not fix them with advice"],
    assess: ["Verbal and nonverbal cues (crying, withdrawal, eye contact)", "What the client is really worried about"],
    act: ["Open-ended: 'Tell me more about what brought you here today.'", "Reflecting / focusing: 'It sounds like you're concerned about the change in your appearance.'", "Clarifying: 'What do you mean when you say…?'", "Offering self: 'I'll sit with you for a while.'", "Silence to let the client think"],
    teach: ["Blocks: 'Don't worry, everything will be fine' (false reassurance), 'You should…' (advice or opinion), 'You'll still be attractive' (disagreeing/approval), 'I'm so sorry this happened' (sympathy), 'Why did you…?' (defensive), 'Let's talk about that later' (dismissing)"]
  },
  table: {
    cols: ["Therapeutic", "Nontherapeutic"],
    rows: [
      ["Open-ended questions", "Closed yes/no questions when you need more"],
      ["Reflecting feelings", "False reassurance"],
      ["Focusing on the main concern", "Changing the subject or postponing"],
      ["Clarifying", "Giving advice or a personal opinion"],
      ["Offering self, active listening", "Sympathy (feeling sorry for)"],
      ["Summarizing", "'Why' questions (make clients defensive)"],
      ["Silence", "Approval or disapproval, stereotyping"]
    ]
  },
  facts: [
    "Post-mastectomy client says 'I never want to look in a mirror again': 'It sounds like you're concerned about the change in your appearance.' (focusing on feelings)",
    "Withdrawn client without housing in the ED: 'Tell me more about what brought you to the hospital today.'",
    "Empathy (understanding the feeling) is therapeutic; sympathy (sharing sorrow, pity) is not.",
    "'I'll talk with you after I finish your dressing' dismisses the concern."
  ],
  qa: [
    ["Which technique is 'It sounds like you're worried about…'?", "Reflecting / focusing on feelings."],
    ["Why is 'Don't be afraid, it'll be alright' wrong?", "False reassurance: it blocks the client from sharing feelings."]
  ]
},
{
  id: "grief", sys: "psych", name: "Grief, End of Life, Spirituality & Body Image",
  sub: "Stages of grief, spiritual assessment, body image changes, postmortem care",
  connect: ["Advance directives", "Therapeutic communication", "Culture"],
  summary: "Grief is a normal response to any loss: a person, a body part, a role, health. Spiritual assessment uses open-ended questions about what gives the client meaning and support, without assuming a religion. After surgery that changes appearance, give the client room to grieve and explore feelings.",
  chain: {
    why: ["Loss affects body, mind, relationships, and spirit", "Spiritual beliefs shape coping and end-of-life choices"],
    assess: ["Stage of grief (denial, anger, bargaining, depression, acceptance; not always in order)", "Spiritual practices and sources of support", "Readiness to look at or touch a changed body part"],
    act: ["Spiritual assessment: 'What kinds of spiritual practices hold meaning for you?'", "Offer chaplain or faith leader referral per the client's wishes", "Allow privacy and time; let the client set the pace for looking at a wound or stoma", "End of life: comfort, mouth care, positioning, pain control, family presence"],
    teach: ["Avoid assumptions ('What does your church teach?') and personal or defensive questions ('Does your diagnosis make you angry at God?')", "Hospice focuses on comfort when cure isn't the goal; palliative care can start at any stage", "Postmortem: follow cultural and religious practices, place the body supine with a pillow under the head, close eyes and mouth, allow family time"]
  },
  facts: [
    "'Does your family have the same faith as you?' is a personal question, not a spiritual assessment.",
    "Signs of approaching death: mottling, cool extremities, Cheyne-Stokes breathing, decreased urine, noisy respirations.",
    "Hearing is thought to be the last sense lost: keep talking to the client."
  ],
  qa: [
    ["Best spiritual assessment question?", "An open-ended one like 'What spiritual practices hold meaning for you?'"],
    ["Name the five Kübler-Ross stages.", "Denial, anger, bargaining, depression, acceptance."]
  ]
},

/* ================= BASIC CARE & COMFORT ================= */
{
  id: "mobility", sys: "comfort", name: "Mobility, Transfers & Assistive Devices", star: true, starLabel: "On the practice exam",
  sub: "Stand-and-pivot, slide board, walker and cane, range of motion",
  connect: ["Falls", "Body mechanics", "Immobility", "Post-op care"],
  summary: "Before moving anyone, find out what they can do. For a bed-to-chair transfer with one-sided weakness, put the chair on the strong side and pivot on the strong leg. Walkers are advanced first, then the client steps into them, with elbows slightly bent. Slide board transfers happen with the bed flat and a little higher than the stretcher.",
  chain: {
    why: ["Immobility causes pressure injuries, DVT, pneumonia, constipation, contractures, and bone loss", "Transfers are high-risk moments for falls and staff injury"],
    assess: ["Can the client bear weight? Strength, balance, cognition, pain, orthostatic symptoms", "Equipment: gait belt, lift, slide board, walker height (top at the wrist crease)"],
    act: ["Bed to chair: assess weight bearing → chair on the strong side, wheels locked → dangle at the bedside → stand-and-pivot on the strong leg", "Slide board: bed flat, bed slightly higher than the stretcher, client's arms crossed over the chest", "Walker: lift (or roll) it forward about 1 step, step in with the weak leg, then the strong leg; elbows flexed 15°–30°; don't pull up on the walker to stand", "Cane: held on the strong side; move cane and weak leg together", "Post-op knee: give analgesic before activities, dangle before standing, SCDs on in bed"],
    teach: ["Push up from the chair arms to stand, then grip the walker", "Don't lock elbows or step before moving the walker", "Wear nonskid shoes; clear rugs and cords"]
  },
  table: {
    cols: ["Neck ROM", "Movement"],
    rows: [
      ["Flexion", "Chin to chest"],
      ["Extension / hyperextension", "Head back as far as possible"],
      ["Lateral flexion", "Ear toward shoulder"],
      ["Rotation", "Turn the head side to side as far as possible"]
    ]
  },
  facts: [
    "Passive ROM is done by the nurse for a client who can't move the joint; active ROM is done by the client.",
    "Repositioning every 2 hr in bed (every 1 hr in a chair) prevents pressure injuries.",
    "Footdrop (plantar flexion contracture) is prevented with high-top shoes or foot boots and ROM more than once a day.",
    "Sequential compression devices prevent DVT; they don't replace ambulation."
  ],
  qa: [
    ["Order the steps to move a client with right-sided weakness to a chair.", "Ask whether they can bear weight → chair on the left (strong) side → dangle at the bedside → stand-and-pivot."],
    ["How should a client advance a standard walker?", "Lift it and move it forward first, then step into it, elbows slightly bent."],
    ["Neck rotation means…", "Turning the head from side to side."]
  ]
},
{
  id: "hygiene", sys: "comfort", name: "Hygiene, Privacy & Personal Care",
  sub: "Bathing with dignity, oral care, perineal care, foot and eye care",
  connect: ["Dignity", "Skin integrity", "Infection control"],
  summary: "Hygiene is a chance to assess the skin and build trust. Explain each step before you do it, keep the client covered except the area being washed, and work at a calm, steady pace. Clean from cleanest to dirtiest.",
  chain: {
    why: ["Clean, dry skin resists breakdown and infection", "Privacy and explanation protect dignity and lower anxiety"],
    assess: ["Skin: redness, breakdown, moisture, bruising", "Ability to do self-care; fatigue, pain"],
    act: ["Explain each step before doing it; drape the client", "Bathe eyes first (inner to outer canthus, clean area of cloth each time), then face, then work toward dirtier areas", "Perineal care: front to back", "Unconscious client oral care: side-lying, suction available, small amount of fluid", "Diabetes foot care: wash and dry well between the toes, no soaking, file nails straight across (or podiatrist)"],
    teach: ["Don't chat with coworkers during personal care; keep the focus on the client", "Rushing through care adds discomfort and disrespect", "Dentures: store in a labeled cup with water"]
  },
  facts: [
    "Explaining each step before hygiene care maintains dignity and privacy.",
    "Leaving the client uncovered for a full assessment compromises privacy; uncover one area at a time.",
    "Use warm (not hot) water; older adults have thinner, drier skin, so use less soap and moisturize."
  ],
  qa: [
    ["Which way do you clean the eye?", "Inner canthus to outer canthus, using a clean part of the cloth each time."],
    ["One action that protects dignity during a bath?", "Explain each step first and keep the client draped except the part being washed."]
  ]
},
{
  id: "diets", sys: "comfort", name: "Therapeutic & Cultural Diets, Dysphagia & Malnutrition", star: true, starLabel: "On the practice exam",
  sub: "Clear vs. full liquid, kosher, vegan, dysphagia signs, signs of malnutrition",
  connect: ["Nutrition", "Aspiration", "Culture", "Wound healing"],
  summary: "Diet questions ask you to pick the food that fits the order or the client's beliefs. Clear liquids are see-through at room temperature. Kosher rules ban pork and shellfish and never mix meat and dairy. Vegans eat no animal products. Dysphagia shows up as coughing, drooling, and pocketing food in the cheeks.",
  chain: {
    why: ["Wrong textures cause aspiration", "Respecting food beliefs supports intake and trust", "Malnutrition slows healing and raises infection risk"],
    assess: ["Swallowing: coughing or choking during meals, wet voice, drooling, food pocketed in the cheeks, slow eating", "Malnutrition: weight loss, muscle wasting, thin sparse hair, dry scaly skin, bruising, fatigue, edema, low albumin", "Food preferences, religion, culture, allergies"],
    act: ["Clear liquid: water, broth, clear juice (apple, cranberry), gelatin, popsicles, tea or coffee (no cream), clear soda (ginger ale)", "Full liquid adds milk, ice cream, sherbet, pudding, strained cream soups", "Dysphagia: sit upright 90°, chin tuck, small bites, thickened liquids as ordered, check the mouth for pockets, speech-language referral", "Kosher: no pork, no shellfish or fish without fins and scales (swordfish, shrimp), no meat with dairy at the same meal", "Vegan protein: beans and rice, lentils, tofu, nuts, soy"],
    teach: ["Islam (halal): no pork or alcohol", "Hinduism: often no beef; many are vegetarian", "Latter-day Saints: no alcohol, coffee, or tea", "Vegans need B12 (fortified foods or supplement)"]
  },
  table: {
    cols: ["Diet", "Allowed", "Not allowed"],
    rows: [
      ["Clear liquid", "Water, broth, apple juice, gelatin, popsicles, black coffee, tea, ginger ale", "Milk, sherbet, ice cream, pudding, orange juice with pulp"],
      ["Full liquid", "All clear liquids + milk, ice cream, sherbet, pudding, strained cream soups", "Solid food"],
      ["Kosher", "Chicken, beef from kosher animals, fish with fins and scales, milk from kosher animals (cow, goat) at separate meals", "Pork, rabbit, shellfish, swordfish, meat + dairy together (cheeseburger)"],
      ["Vegan", "Beans, lentils, tofu, grains, nuts, fruits, vegetables", "Meat, fish, eggs, dairy, honey (often)"],
      ["Dysphagia", "Pureed or minced foods, thickened liquids as ordered", "Thin liquids (unless cleared), dry crumbly foods"]
    ]
  },
  facts: [
    "Orange sherbet is NOT a clear liquid (it isn't clear at room temperature).",
    "Pocketing food in the cheeks is a classic dysphagia sign.",
    "A turkey-and-cheese sandwich breaks kosher rules (meat with dairy).",
    "Malnutrition cues: cachexia, flaccid muscle tone, thin sparse hair, dry scaly skin, bruising, fatigue, edema."
  ],
  qa: [
    ["Which of these isn't allowed on clear liquids: apple juice, black coffee, ginger ale, sherbet?", "Sherbet."],
    ["Name two signs of dysphagia.", "Coughing or choking with meals and pocketing food in the cheeks (also drooling, wet voice)."],
    ["Vegan protein choice?", "Black beans and rice (or tofu, lentils)."]
  ]
},
{
  id: "elim", sys: "comfort", name: "Bowel & Urinary Elimination, Ostomies & I&O",
  sub: "Bristol stool chart, enemas, colostomy vs. ileostomy care, intake and output (Lab 7)",
  connect: ["Fluid balance", "Skin integrity", "Post-op care"],
  summary: "Elimination care means knowing what's normal, measuring accurately, and protecting the skin. Bristol types 3–4 are healthy stool. Ostomy care centers on a good skin barrier seal and a healthy stoma. Urine output should be at least 0.5 mL/kg/hr (about 30 mL/hr for most adults).",
  chain: {
    why: ["Accurate I&O detects dehydration, overload, and kidney or heart failure early", "Stoma output irritates skin, so the barrier must fit"],
    assess: ["Stool type (Bristol 1–2 constipation, 3–4 healthy, 5–7 diarrhea)", "Stoma: moist, red-pink is healthy; pale, dusky, or black = poor blood flow, report", "Intake: oral, IV, enteral, liquid meds. Output: urine, stool, emesis, drains, (insensible losses aren't measured)"],
    act: ["Enema: left side-lying (Sims), tip lubricated, insert 3–4 in (adult), container 12–18 in above the anus, slow flow; cramping = lower or pause", "Oil-retention enema: room temperature, hold at least 30 min", "Ostomy: empty the pouch when one-third to one-half full; cut the barrier opening about 1/16–1/8 in larger than the stoma; clean skin with warm water and dry it", "Ileostomy (RLQ): liquid output, high risk of dehydration and skin breakdown", "Colostomy: more formed stool the further along the colon it is"],
    teach: ["Inspect the stoma daily", "Avoid gas-forming and blockage-prone foods (popcorn, nuts) with a new ileostomy", "Drink enough fluids, especially with an ileostomy"]
  },
  facts: [
    "Normal adult urine output: 0.5–1.0 mL/kg/hr; report less than 30 mL/hr.",
    "Total intake includes liquid meds and IV and enteral fluids.",
    "Return-flow (Harris flush) enema relieves gas: 100–200 mL in, then lower the container to let it flow back.",
    "A Fecal Management System is used for frequent liquid stool to protect skin."
  ],
  qa: [
    ["Position for an enema?", "Left side-lying (Sims) with the right knee flexed."],
    ["What does a healthy stoma look like?", "Moist and pink to red. Pale, dusky, or black needs to be reported."],
    ["When do you empty an ostomy pouch?", "When it's one-third to one-half full."]
  ]
},
{
  id: "skin", sys: "comfort", name: "Pressure Injuries & Dressings", star: true, starLabel: "On the practice exam",
  sub: "Staging, Braden Scale, choosing the right dressing",
  connect: ["Immobility", "Nutrition", "Wound care"],
  summary: "Pressure injuries form over bony prominences when pressure, shear, and moisture cut off blood flow. Prevention means turning, pressure-relieving surfaces, clean dry skin, and good nutrition. The dressing depends on the stage: keep stage 1 protected, keep stage 2 moist, absorb drainage in stages 3 and 4.",
  chain: {
    why: ["Pressure + shear + moisture + poor nutrition = tissue death", "Heels and sacrum are the most common sites"],
    assess: ["Braden Scale (sensory perception, moisture, activity, mobility, nutrition, friction/shear): 18 or lower = at risk", "Stage: 1 nonblanchable redness, intact skin · 2 partial thickness, shallow open or blister · 3 full thickness, fat may show · 4 bone, tendon, or muscle exposed · unstageable: base covered by slough or eschar", "Nutrition: protein intake, albumin, weight"],
    act: ["Reposition every 2 hr in bed, every 1 hr in a chair; float heels off the bed", "HOB at 30° or less to reduce shear (unless contraindicated)", "Keep skin clean and dry; moisture barrier for incontinence", "Don't massage reddened bony areas"],
    teach: ["Report new nonblanchable redness right away", "Eat enough protein, calories, vitamin C, and zinc for healing"]
  },
  table: {
    cols: ["Stage", "What it looks like", "Dressing"],
    rows: [
      ["1", "Intact skin, nonblanchable redness", "Transparent film (protects from friction and shear)"],
      ["2", "Partial thickness; shallow open ulcer or intact blister", "Hydrocolloid (keeps a moist wound bed)"],
      ["3", "Full thickness; fat may be visible", "Alginate or foam (absorbs drainage; alginate forms a gel)"],
      ["4", "Bone, tendon, or muscle exposed", "Alginate or foam; moistened gauze for debridement"],
      ["Unstageable", "Base covered by slough or eschar", "Debridement first (moist gauze or other ordered method), except stable dry heel eschar"]
    ]
  },
  facts: [
    "Stage 2 → hydrocolloid. This is the dressing ATI pairs with stage 2.",
    "A 1.3 cm area of nonblanchable redness on the heel of a paraplegic client is a stage 1 pressure injury: offload the heel.",
    "Plantar flexion contractures in an immobile client need more ROM and foot positioning devices."
  ],
  qa: [
    ["Which dressing for a stage 2 pressure injury?", "Hydrocolloid."],
    ["What is the earliest sign of a pressure injury?", "Nonblanchable redness on intact skin (stage 1)."]
  ]
},
{
  id: "pain", sys: "comfort", name: "Pain, Comfort & Sleep",
  sub: "Pain as the fifth vital sign, scales, PRN timing, nonpharmacologic comfort",
  connect: ["Post-op care", "Mobility", "Medication administration"],
  summary: "Pain is what the client says it is. Assess it with a scale that fits the client, treat it, and reassess. Give PRN analgesics before painful activities (therapy, dressing changes, ambulation) so the client can take part. Pair medication with comfort measures.",
  chain: {
    why: ["Uncontrolled pain slows mobility, breathing, sleep, and healing", "Acute pain can raise heart rate and BP; chronic pain (over 6 months) often doesn't change vital signs"],
    assess: ["Location, intensity, quality, onset, duration, what helps (OLDCARTS)", "Scales: 0–10 numeric, FACES (children), FLACC (infants and nonverbal), PAINAD (dementia)", "Sedation and respiratory rate before and after opioids"],
    act: ["Give PRN analgesic about 30 min before planned activity", "Reassess 30–60 min after oral meds (sooner after IV)", "Nonpharmacologic: positioning, ice or heat (per order), distraction, guided imagery, music, massage (not over a DVT or anticoagulant site)", "Sleep: quiet dark room, cluster care at night, limit caffeine"],
    teach: ["Report pain early, before it's severe", "Splint an abdominal incision with a pillow to cough", "Constipation is the side effect of opioids that doesn't go away: fluids, fiber, stool softener"]
  },
  facts: [
    "Post-op client rating pain 8/10 before physical therapy: give the PRN analgesic before the activity.",
    "Pain went from 8 to 3 after a PRN: document the reassessment.",
    "Checking that pain decreased is evaluation, so it isn't delegated to an AP."
  ],
  qa: [
    ["When should a PRN analgesic be given for a client starting physical therapy?", "Before the session (about 30 min before)."],
    ["Pain scale for a nonverbal infant?", "FLACC (face, legs, activity, cry, consolability)."]
  ]
},

/* ================= PHARM & PARENTERAL ================= */
{
  id: "medadmin", sys: "pharm", name: "Medication Administration: Rights, Checks & Routes",
  sub: "Rights of administration, three checks, abbreviations, nonparenteral routes (Lab 4)",
  connect: ["Client ID", "Documentation", "Safety"],
  summary: "The course's mnemonic is PT/MD/RD: Patient, Time, Medication, Dose, Route, Documentation, the same order every time. Compare the label with the MAR three times: when you take it out, when you prepare it, and at the bedside. Each route has its own technique.",
  chain: {
    why: ["Standard checks catch errors before they reach the client", "If it wasn't charted, it wasn't done"],
    assess: ["Allergies, relevant labs and vitals (right assessment, like apical pulse before digoxin)", "Can the client swallow? Any NPO order?", "Unfamiliar drug: look it up or ask the pharmacist"],
    act: ["Three checks against the MAR: pull, prepare, bedside", "Two identifiers at the bedside; confirm allergies; stay until meds are taken", "Liquids: pour at eye level, read the bottom of the meniscus", "Inhaler: shake, exhale, inhale slowly, hold 10 sec; wait 20–30 sec between puffs (2 min between different inhalers); rinse mouth after a steroid", "Eye drops: lower conjunctival sac, not the cornea; ointment inner to outer canthus", "Ear drops: warm to room temp; pull pinna up and back for over 3 yr (down and back for under 3)", "Transdermal: remove the old patch, clean hairless site, rotate sites", "Rectal suppository: left side-lying, past the internal sphincter; vaginal: on back, knees flexed"],
    teach: ["Client rights: education, refusal (document and notify the provider), right reason, right response", "Don't crush enteric-coated or extended-release tablets", "Sublingual and buccal: let it dissolve; don't swallow or chew"]
  },
  table: {
    cols: ["Abbreviation", "Meaning"],
    rows: [
      ["AC / PC", "Before meals / after meals"],
      ["PRN", "As needed"],
      ["STAT", "Immediately"],
      ["PO / NPO", "By mouth / nothing by mouth"],
      ["SL", "Sublingual (under the tongue)"],
      ["ID / IM / IV", "Intradermal / intramuscular / intravenous"],
      ["c̄ / s̄", "With / without"]
    ]
  },
  table2: {
    title: "Prescription must include",
    cols: ["Element", "Why"],
    rows: [
      ["Client name and DOB", "Right client"],
      ["Drug, dose, route, frequency", "Right drug, dose, route, time"],
      ["Special instructions", "Like hold parameters"],
      ["Prescriber signature", "Legal order"]
    ]
  },
  facts: [
    "Rounding (Lab 4, follow facility policy): volumes over 1 mL to tenths, under 1 mL to hundredths.",
    "Military time avoids AM/PM confusion.",
    "If a client refuses a medication, document the refusal and notify the provider."
  ],
  qa: [
    ["When are the three label checks?", "Removing from storage, preparing, and before giving it at the bedside."],
    ["How do you straighten the ear canal for an adult?", "Pull the pinna up and back."]
  ]
},
{
  id: "inject", sys: "pharm", name: "Injections: ID, SubQ, IM, Enoxaparin & Insulin", star: true, starLabel: "On the practice exam",
  sub: "Angles, sites, needle sizes, Z-track, anticoagulant and insulin rules (Lab 10)",
  connect: ["Medication safety", "Anticoagulants", "Diabetes"],
  summary: "Match the angle to the tissue: intradermal 10°–15°, subcutaneous 45°–90° (depending on needle length and fat), intramuscular 90°. Anticoagulants go in the abdomen at least 2 in from the umbilicus, with no aspiration and no massage. Insulin is a high-alert drug: roll cloudy insulin, draw clear before cloudy, and rotate sites.",
  chain: {
    why: ["Wrong depth changes absorption or causes tissue damage", "Massaging or aspirating anticoagulant sites causes bruising and hematoma"],
    assess: ["Site: no bruising, scarring, lipohypertrophy, or edema", "Amount of subcutaneous tissue (pinch test)", "Platelets and bleeding signs before anticoagulants; glucose before insulin"],
    act: ["ID (TB test): 10°–15°, bevel up, form a wheal, don't massage", "SubQ: 45°–90°, abdomen, upper arm, anterior thigh; most SubQ meds aren't aspirated", "Enoxaparin: abdomen 2 in (5 cm) from the umbilicus, don't expel the air bubble in a prefilled syringe, inject slowly, don't massage", "IM: 90°, ventrogluteal preferred for adults; deltoid for small volumes; vastus lateralis (anterolateral thigh) for infants", "Z-track: pull skin about 1 in laterally, inject, withdraw, then release (seals irritating meds like iron in the muscle)", "Mixing insulin: air into cloudy (NPH), air into clear (regular), draw clear first, then cloudy"],
    teach: ["Roll NPH between the palms; don't shake", "Rotate sites within one area to prevent lipohypertrophy", "Insert at 45°–90° depending on the fat layer; don't aspirate", "Anterior thigh, abdomen, and upper arm all work for insulin"]
  },
  table: {
    cols: ["Route", "Angle", "Typical needle", "Common sites"],
    rows: [
      ["Intradermal", "10°–15°", "26–27 gauge, ⅜–⅝ in", "Inner forearm, upper back"],
      ["Subcutaneous", "45°–90°", "25–27 gauge, ⅜–⅝ in", "Abdomen, back of upper arm, anterior thigh"],
      ["Intramuscular (adult)", "90°", "20–25 gauge, 1–1½ in", "Ventrogluteal, deltoid (≤1 mL), vastus lateralis"],
      ["Peripheral IV insertion", "10°–30°, bevel up", "18–24 gauge catheter", "Hand and forearm veins"]
    ]
  },
  facts: [
    "Pediatric IM: up to 12 months anterolateral thigh; toddlers thigh preferred (or deltoid); children deltoid preferred (Lab 10).",
    "IM absorption is faster than SubQ because muscle has more blood flow.",
    "Don't massage after enoxaparin or heparin.",
    "An insulin dose may need two-nurse verification (high-alert)."
  ],
  qa: [
    ["Angle for enoxaparin?", "45°–90° SubQ, abdomen at least 2 in from the umbilicus."],
    ["What does the Z-track method do?", "Seals the medication in the muscle so it doesn't leak into subcutaneous tissue."],
    ["Mixing regular and NPH: which do you draw first?", "Regular (clear) first, then NPH (cloudy)."]
  ]
},
{
  id: "ivtherapy", sys: "pharm", name: "IV Therapy & Complications", star: true, starLabel: "On the practice exam",
  sub: "PIV insertion, TLC site checks, infiltration vs. phlebitis vs. extravasation vs. fluid overload, pumps (Labs 8 & 11)",
  connect: ["Fluid balance", "Infection control", "Medication safety"],
  summary: "Every IV site gets checked with TLC: Touch (soft, warm, dry, painless), Look (dry, no redness), Compare (same size as the other arm). Local complications show at the site; fluid overload and air embolism show up in the lungs and vital signs.",
  chain: {
    why: ["IVs deliver fluids and drugs straight into the blood, so mistakes and infections act fast", "Older adults and clients with heart or kidney failure overload easily"],
    assess: ["TLC at the site every hour or per policy, even when the client is asleep", "Lung sounds, edema, I&O, vital signs during infusions", "Pump: right channel, rate, VTBI, Guardrails limits"],
    act: ["Insertion: tourniquet, clean and let dry, anchor the vein, 10°–30° bevel up, flashback → advance catheter, release tourniquet, flush, transparent dressing, label", "Infiltration (fluid in tissue): stop and remove the IV, elevate the limb, apply compress per policy, restart in the other arm", "Phlebitis (vein inflammation): stop, remove, warm compress, restart elsewhere", "Extravasation (vesicant leaks): stop, leave the catheter in to aspirate per policy, notify, antidote per order", "Fluid overload: slow or stop the infusion, raise HOB, oxygen, notify", "Air embolism: clamp the line, left side-lying with head down (Trendelenburg), oxygen, notify"],
    teach: ["Tell the nurse about pain, swelling, leaking, or wet dressing", "Secondary (piggyback) bag hangs higher than the primary bag (≥9½ in on the Alaris setup)", "Soft Guardrails limit: recheck; hard limit: the pump blocks it"]
  },
  table: {
    cols: ["Complication", "Signs", "Action"],
    rows: [
      ["Infiltration", "Swelling, cool pale skin, tightness, slowed flow, leaking", "Stop, remove, elevate, restart elsewhere"],
      ["Extravasation", "Like infiltration but with a vesicant: pain, burning, blistering", "Stop, notify, follow vesicant protocol"],
      ["Phlebitis", "Pain, redness, warmth, swelling along the vein, red streak", "Stop, remove, warm compress, restart in another limb"],
      ["Local infection", "Redness, drainage, fever", "Remove, culture per order, notify"],
      ["Fluid overload", "Crackles, dyspnea, distended neck veins, ↑ BP, edema, weight gain", "Slow or stop, sit up, O₂, notify, diuretic per order"],
      ["Air embolism", "Sudden dyspnea, chest pain, hypotension, tachycardia, ↓ LOC", "Clamp, left side + head down, O₂, notify"]
    ]
  },
  facts: [
    "Dyspnea and crackles in the lower lungs during IV fluids = fluid overload, not a site complication.",
    "Infiltration feels cool; phlebitis feels warm.",
    "Practice pump order: 500 mL over 5 hr = 100 mL/hr (Lab 11)."
  ],
  qa: [
    ["Cool, pale, swollen IV site with slow flow?", "Infiltration."],
    ["Red, warm, tender vein with a red streak?", "Phlebitis."],
    ["Client on IV fluids with crackles and dyspnea?", "Fluid overload: slow or stop, sit up, notify."]
  ]
},
{
  id: "enteral", sys: "pharm", name: "Enteral Tube Medications & Feedings",
  sub: "Giving meds through a feeding tube, flushing, aspiration prevention",
  connect: ["Aspiration", "Nutrition", "Medication safety"],
  summary: "Give each medication separately, in liquid form or crushed and dissolved in warm water, and flush between them so drugs don't interact or clog the tube. Keep the head of the bed at least 30° during and after feedings, and push gently if you meet resistance.",
  chain: {
    why: ["Mixing meds can clog the tube or cause drug interactions", "Lying flat during feedings causes aspiration"],
    assess: ["Placement before each use (X-ray confirms initially; then check the external mark and aspirate pH per policy)", "Residual volume per policy; abdominal distension, nausea", "Which meds can't be crushed (enteric-coated, extended-release)"],
    act: ["Stop the feeding; HOB at least 30°", "Flush with 15–30 mL water before the first med", "Dissolve each med separately in about 15–30 mL warm water (or use liquid form)", "Give one med, flush 15–30 mL, give the next", "Flush 15–30 mL after the last med (some policies use 30–60 mL)", "Resistance: push gently, raise the syringe, or reposition the client; never force"],
    teach: ["Keep HOB raised 30–60 min after a feeding", "Coughing or dropping SpO₂ during a feeding = stop it"]
  },
  facts: [
    "Flush with 15–30 mL of water before, between, and after medications.",
    "Never draw multiple meds up together in one syringe.",
    "Initiating enteral feedings is within RN scope."
  ],
  qa: [
    ["How much water to flush between tube meds?", "15–30 mL."],
    ["What do you do if you meet resistance while giving a tube med?", "Push gently, raise the syringe height, or reposition the client. Don't force it."]
  ]
},
{
  id: "calc", sys: "pharm", name: "Dosage Calculation for the ATI Exam",
  sub: "Weight-based doses, liquid doses, IV rates, rounding",
  connect: ["Dosage Calc", "Pediatrics", "IV pumps"],
  summary: "ATI uses ratio and proportion or desired-over-have. Convert units first, solve, then ask whether the answer makes sense, and round only at the end the way the stem says. Use a leading zero (0.5) and no trailing zero (5, not 5.0).",
  chain: {
    why: ["Weight-based doses protect children and small adults", "A misplaced decimal can mean a tenfold error"],
    assess: ["What unit is the answer in (mg, mL, mL/hr, gtt/min)?", "Weight in kg (lb ÷ 2.2)", "Is the dose per day or per dose?"],
    act: ["Desired ÷ Have × Quantity", "mg/kg/day: weight × dose = daily total, then ÷ number of doses", "IV rate (mL/hr) = total volume ÷ hours", "Drip rate (gtt/min) = volume × drop factor ÷ minutes"],
    teach: ["Round only the final answer", "Check: does the volume seem reasonable for that route?"]
  },
  table: {
    cols: ["Problem", "Set-up", "Answer"],
    rows: [
      ["Ampicillin 40 mg/kg/day ÷ q6h, 10 kg child, 125 mg/5 mL", "40 × 10 = 400 mg/day ÷ 4 = 100 mg/dose; 100 ÷ 125 × 5", "4 mL"],
      ["NS 500 mL over 5 hr", "500 ÷ 5", "100 mL/hr"],
      ["1,000 mL over 8 hr, 15 gtt/mL", "1,000 × 15 ÷ 480", "31 gtt/min"]
    ]
  },
  facts: [
    "1 kg = 2.2 lb · 1 g = 1,000 mg · 1 mg = 1,000 mcg · 1 tsp = 5 mL · 1 oz = 30 mL.",
    "For more practice, open the Dosage Calc course on the hub."
  ],
  qa: [
    ["Child weighs 44 lb. Prescribed 5 mg/kg/dose. How many mg per dose?", "44 ÷ 2.2 = 20 kg × 5 = 100 mg."]
  ]
},

/* ================= REDUCTION OF RISK ================= */
{
  id: "vitals", sys: "risk", name: "Vital Signs, Orthostatic BP & Pulse Oximetry",
  sub: "Technique, normal ranges, orthostatic hypotension, SpO₂ accuracy (Lab 2)",
  connect: ["Growth & development", "Falls", "Oxygenation"],
  summary: "Vital signs are only as good as the technique. Use the right cuff size (bladder width about 40% of arm circumference), arm at heart level, legs uncrossed. For orthostatic BP, measure lying, then sitting and standing, each within about 1–3 minutes of the change. A fall of 20 mm Hg systolic or 10 diastolic (or a big pulse rise) is positive.",
  chain: {
    why: ["Changes in vital signs are early cues of deterioration", "Orthostatic hypotension causes falls"],
    assess: ["BP: cuff too small reads falsely high; too large reads falsely low", "Pulse: count 30 sec × 2 if regular; a full minute if irregular; apical for 1 full minute before digoxin", "SpO₂: normal 95–100% (88–92% goal in some COPD); nail polish, cold hands, low perfusion, and anemia affect readings", "Temperature: wait 15–30 min after eating, drinking, or smoking for an oral temp; axillary reads lowest; rectal is most accurate"],
    act: ["Inflate 30 mm Hg above the usual systolic (or to 180 if unknown) and deflate 2–3 mm Hg/sec", "First Korotkoff sound = systolic; disappearance (phase 5) = diastolic", "Orthostatic: supine → sitting → standing, measuring within 1–3 min of each change", "Low SpO₂ reading: check the probe and perfusion, then assess the client"],
    teach: ["Rise slowly: dangle legs before standing", "Pain is the fifth vital sign"]
  },
  facts: [
    "Obtain BP within 3 min after the client changes position to check for orthostatic hypotension.",
    "Light-headedness on standing after knee surgery: dangle at the bedside before standing.",
    "Tachypnea >20/min, bradypnea <12/min (adult).",
    "Glucometer reads 60–400 mg/dL; check the strip expiration and lot number (Lab 2).",
    "Neuro screening: sensory testing is done with the client's eyes closed, touching areas with a cotton ball in random order. Romberg (feet together, eyes open then closed) tests balance; heel-to-toe tests coordination; reflex hammer tests deep tendon reflexes."
  ],
  qa: [
    ["How do you check for orthostatic hypotension?", "BP and pulse lying, then sitting, then standing, each within 1–3 minutes of the change."],
    ["What makes a BP read falsely high?", "A cuff that's too small (or arm below heart level)."]
  ]
},
{
  id: "labs", sys: "risk", name: "Lab Values & Specimen Collection",
  sub: "Fasting tests, lipid panel, CBC, glucose; collecting blood, urine, stool, and sputum",
  connect: ["Heart disease", "Diabetes", "Infection", "Bleeding"],
  summary: "Know which results to report and what makes a specimen valid. A fasting blood glucose needs 8–12 hr with nothing but water, so if the client ate, reschedule. In a lipid panel, high LDL and low HDL raise heart disease risk; high HDL is protective.",
  chain: {
    why: ["Invalid specimens lead to wrong treatment", "Abnormal results need a nursing action or a call to the provider"],
    assess: ["Did the client follow prep (fasting, holding meds)?", "Compare each result with the normal range", "Trends, not just single values"],
    act: ["Fasting glucose after juice: reschedule for the next morning (don't send it, don't order a different test)", "Report: high LDL, low HDL, high triglycerides, abnormal glucose, potassium out of range", "Capillary glucose: warm or dangle the hand, side of the fingertip, let the alcohol dry, wipe away the first drop per policy", "Clean-catch urine: clean front to back, start voiding, then collect midstream", "24-hr urine: discard the first void, save all urine for 24 hr (on ice), end with a final void", "Sputum: early morning, after rinsing the mouth (not mouthwash), deep cough", "Stool for occult blood: avoid red meat, NSAIDs, and vitamin C per test instructions"],
    teach: ["Explain the reason for fasting", "Report bleeding risk with low platelets; infection risk with low WBC"]
  },
  table: {
    cols: ["Lab", "Normal", "Why it matters"],
    rows: [
      ["LDL", "Less than 100 mg/dL", "High = heart disease risk"],
      ["HDL", "Female greater than 50, male greater than 40 mg/dL", "High = protective"],
      ["Total cholesterol", "Less than 200 mg/dL", "High = heart disease risk"],
      ["Fasting glucose", "70–99 mg/dL", "100–125 prediabetes; 126+ diabetes"],
      ["WBC", "5,000–10,000/mm³", "Low = infection risk (neutropenic precautions)"],
      ["Platelets", "150,000–400,000/mm³", "Low = bleeding risk"],
      ["Hemoglobin", "Female 12–16, male 14–18 g/dL", "Low = anemia, fatigue, ↓ O₂ delivery"],
      ["Potassium", "3.5–5.0 mEq/L", "Out of range = dysrhythmias"],
      ["Albumin", "3.5–5.0 g/dL", "Low = malnutrition, poor healing"],
      ["CRP", "Less than 1.0 mg/dL", "High = inflammation, cardiac risk"]
    ]
  },
  facts: [
    "Decreased alkaline phosphatase can point to malnutrition, not heart disease.",
    "Elevated LDL is the lipid result to report for heart disease risk.",
    "A client on chemotherapy with low platelets is at risk for bleeding; low WBC is infection risk."
  ],
  qa: [
    ["Client had juice before a fasting glucose. Action?", "Reschedule the test for the next morning."],
    ["Which lipid result is protective when high?", "HDL."]
  ]
},
{
  id: "postop", sys: "risk", name: "Postoperative Care & Complications", star: true, starLabel: "On the practice exam",
  sub: "Atelectasis, hemorrhage and shock, DVT, wound complications, incentive spirometry",
  connect: ["Vital signs", "Mobility", "Oxygenation", "Pain"],
  summary: "Post-op complications follow a rough timeline: hemorrhage and shock early, atelectasis and pneumonia on days 1–2, wound infection and DVT later. Prevention is turn, cough, deep breathe, incentive spirometer, early ambulation, SCDs, and pain control.",
  chain: {
    why: ["Anesthesia, pain, and immobility cause shallow breathing and venous stasis"],
    assess: ["Hemorrhage/shock: tachycardia (early), hypotension, ↓ urine output, cool clammy skin, restlessness", "Atelectasis: low-grade fever, ↑ RR and pulse, ↓ breath sounds in the bases (days 1–2)", "DVT: calf swelling, warmth, tenderness, redness", "PE: sudden dyspnea, chest pain, tachycardia, anxiety", "Dehiscence: 'something popped'; evisceration: organs through the incision"],
    act: ["Incentive spirometer 10 times an hour while awake: exhale, seal lips, inhale slowly, hold 3–5 sec", "A client refusing the spirometer: first find out why", "Hemorrhage: notify the surgeon; if the response doesn't match the client's condition, use the chain of command", "Evisceration: cover with sterile saline-moistened dressing, low Fowler's with knees bent, notify, stay with the client"],
    teach: ["Splint the incision with a pillow to cough", "Report calf pain or sudden shortness of breath", "Ambulate early and often"]
  },
  facts: [
    "24 hr post-op with T 38.2 °C (100.8 °F), pulse 92, RR 24: encourage frequent use of the incentive spirometer.",
    "Hemorrhage → tachycardia, hypotension, and decreased urine output.",
    "Sudden chest pain post-op suggests pulmonary embolism, not hemorrhage.",
    "Arms across the chest limit chest expansion; position to allow full expansion."
  ],
  qa: [
    ["Post-op day 1 low-grade fever and tachypnea. Likely cause and action?", "Atelectasis: incentive spirometer, cough and deep breathe, ambulate."],
    ["Evisceration: what do you cover it with?", "Sterile dressing moistened with sterile normal saline."]
  ]
},

/* ================= PHYSIOLOGICAL ADAPTATION ================= */
{
  id: "trach", sys: "phys", name: "Oxygen Delivery & Tracheostomy Care", star: true, starLabel: "On the practice exam",
  sub: "Nasal cannula to nonrebreather, hypoxia signs, trach equipment and home care (Lab 2)",
  connect: ["Respiratory assessment", "Home safety", "Infection control"],
  summary: "Choose the oxygen device by how much the client needs and how precise it must be. Early hypoxia looks like restlessness, anxiety, confusion, and tachycardia. A tracheostomy bypasses the nose and mouth, so a face mask or nasal cannula won't help if the tube comes out: keep an obturator, a spare trach, and a manual resuscitation bag at the bedside.",
  chain: {
    why: ["Room air is 21% FiO₂", "Oxygen is a drug: too little causes hypoxia; it's also a fire hazard"],
    assess: ["Early hypoxia: restlessness, anxiety, confusion, headache, tachycardia, tachypnea; late: cyanosis, bradycardia", "SpO₂ and work of breathing (accessory muscles, nasal flaring)", "Skin under tubing: ears, nose, under the chin"],
    act: ["Semi- or high-Fowler's to help ventilation", "Trach suctioning: hyperoxygenate, sterile technique in hospital, suction no longer than 10 sec, only while withdrawing", "Trach care: clean inner cannula, change ties with a second person holding the tube", "Bedside: obturator, spare trach (same size and one smaller), suction, oxygen, bag-valve mask"],
    teach: ["Home trach care uses clean (medical asepsis) technique", "Never remove the outer cannula for cleaning (it holds the airway open)", "Clean the stoma with normal saline, not full-strength hydrogen peroxide", "Wear a trach cover or scarf outdoors (cold air, dust, particles)", "Humidify the air"]
  },
  table: {
    cols: ["Device", "Flow", "FiO₂", "Notes"],
    rows: [
      ["Nasal cannula", "1–6 L/min", "24%–44%", "Comfortable; humidify above 4 L/min"],
      ["Simple face mask", "5–8 L/min", "40%–60%", "At least 5 L/min to flush out CO₂"],
      ["Venturi mask", "Set by adapter", "24%–50%", "Most precise (COPD)"],
      ["Nonrebreather", "10–15 L/min", "Up to 90%+", "Bag must stay inflated; emergencies"],
      ["Trach collar / T-piece", "Per order", "Varies", "Humidified oxygen at the trach"]
    ]
  },
  facts: [
    "An oropharyngeal airway prevents biting on an oral ET tube; it isn't trach backup equipment.",
    "Incentive spirometer teaching is part of oxygen therapy (Lab 2).",
    "A teen with visible accessory muscle use is in labored breathing."
  ],
  qa: [
    ["What goes at the bedside of a new trach client?", "Obturator, spare trach tube, suction, oxygen, and a manual resuscitation bag."],
    ["Which device gives the most precise FiO₂?", "Venturi mask."]
  ]
},
{
  id: "wound", sys: "phys", name: "Wound Care & Irrigation",
  sub: "Irrigation technique, healing, drains, signs of infection",
  connect: ["Pressure injuries", "Infection control", "Nutrition"],
  summary: "Irrigation cleans debris with gentle pressure: a 30–60 mL syringe (often with a 19-gauge catheter) gives safe, effective pressure. Warm the solution to body temperature, clean from the least to the most contaminated area, and use clean gloves to take off the old dressing and sterile gloves for the new one.",
  chain: {
    why: ["Debris and bacteria slow healing", "Too much pressure damages new tissue; too little doesn't clean"],
    assess: ["Size, depth, tunneling, wound bed color (red = granulation, yellow = slough, black = eschar)", "Drainage: serous (clear), sanguineous (bloody), serosanguineous (pink), purulent (thick, colored = infection)", "Pain before care (premedicate)"],
    act: ["Remove the old dressing with clean gloves; switch to sterile gloves for irrigation", "Warm solution to body temperature", "Use a 30–60 mL syringe, tip 1 in above the wound", "Clean from the center outward (or top to bottom), cleanest to dirtiest", "Let the solution flow from the top to the bottom of the wound into a basin"],
    teach: ["Report fever, spreading redness, warmth, purulent drainage, foul odor", "Protein, vitamin C, and zinc support healing"]
  },
  facts: [
    "A 20 mL syringe is too small for ATI's answer; use a 30–60 mL syringe (ATI says 35 mL).",
    "Solution should be body temperature, not 40.5 °C (105 °F).",
    "Primary intention: edges together, heals fastest. Secondary: left open, heals from the bottom up."
  ],
  qa: [
    ["What size syringe for wound irrigation?", "30–60 mL (a 35 mL syringe)."],
    ["Which direction do you clean a wound?", "From the center outward, cleanest to dirtiest."]
  ]
},
{
  id: "neurofluid", sys: "phys", name: "Seizures, Hemorrhage & Fluid Imbalance",
  sub: "Seizure safety, signs of shock, fluid volume excess vs. deficit",
  connect: ["Post-op care", "IV therapy", "Safety"],
  summary: "During a seizure, protect the client from injury, turn them to the side once you can, and time it. Don't restrain them or put anything in the mouth. Shock and fluid problems show up in vital signs: hemorrhage gives a fast pulse and falling BP; fluid overload gives crackles, edema, and a bounding pulse.",
  chain: {
    why: ["Seizures risk head injury and aspiration", "Blood volume loss triggers compensatory tachycardia before BP falls"],
    assess: ["Seizure: time, type, what the client did before, during, and after (postictal state)", "Fluid deficit: thirst, tachycardia, weak pulse, hypotension, ↓ urine, dry mucosa, ↑ Hct and BUN", "Fluid excess: crackles, dyspnea, edema, distended neck veins, bounding pulse, weight gain"],
    act: ["Seizure: stay with the client, call for help, protect the head (cushion), loosen clothing, side-lying once possible, time it, nothing in the mouth, no restraints", "After: vital signs, airway, suction as needed, neuro checks, reorient, document", "Seizure precautions: padded side rails, bed low, suction and oxygen at the bedside", "Shock: notify, oxygen, IV access and fluids per order, legs elevated per policy"],
    teach: ["Carbamazepine: take as prescribed, don't double missed doses, avoid grapefruit, regular lab tests and eye exams", "Daily weights at the same time with the same scale for heart failure; report a gain of 2–3 lb in a day or 5 lb in a week"]
  },
  facts: [
    "First priority during an active seizure: physical safety (protect the head). Then positioning on the side.",
    "Get vital signs and the PRN med after the seizure; another nurse can bring the med so you stay with the client.",
    "Early hemorrhage sign: tachycardia. Urine output decreases."
  ],
  qa: [
    ["What are two things you never do during a seizure?", "Restrain the client or put anything in their mouth."],
    ["Fluid overload lung sound?", "Crackles."]
  ]
},

/* ================= CLINICAL JUDGMENT ================= */
{
  id: "ncjmm", sys: "cj", name: "The Clinical Judgment Model & Next Gen Items",
  sub: "Six steps, how ATI tests each step, how to work a case",
  connect: ["Nursing process", "Prioritization", "Next Gen formats"],
  summary: "Next Gen case items follow the NCSBN Clinical Judgment Measurement Model. Each item tests one step: recognize cues (what matters), analyze cues (what it means), prioritize hypotheses (what's most urgent), generate solutions (what the plan should be), take action (what to do now), and evaluate outcomes (did it work?).",
  chain: {
    why: ["Real clinical decisions happen in steps, and errors happen when one step is skipped"],
    assess: ["Read every chart tab: Nurses' Notes, Vital Signs, MAR, Diagnostic Results, History", "Find the cues that are abnormal or changed"],
    act: ["Recognize cues → highlight or select relevant findings", "Analyze cues → drop-downs linking a finding to a condition ('at risk for ___ as evidenced by ___')", "Prioritize hypotheses → which problem is most urgent", "Generate solutions → select the actions to plan", "Take action → which to do first or now", "Evaluate outcomes → which findings show improvement or teaching worked"],
    teach: ["Partial credit: ATI scores many case items by each correct choice (+/−), so judge each option on its own", "Select N means exactly N"]
  },
  table: {
    cols: ["Step", "Typical question wording", "Usual format"],
    rows: [
      ["Recognize cues", "Which findings require follow-up?", "Highlight, select all"],
      ["Analyze cues", "The client is at risk for ___ as evidenced by ___", "Drop-down cloze"],
      ["Prioritize hypotheses", "Which condition is the client most likely experiencing?", "Drop-down, multiple choice"],
      ["Generate solutions", "Which actions should the nurse plan to take? Select 3", "Select N, select all"],
      ["Take action", "Which action should the nurse take first?", "Multiple choice, drop-down"],
      ["Evaluate outcomes", "Which statements show the teaching was effective?", "Select N, select all"]
    ]
  },
  facts: [
    "The ATI practice exam scores 9 case items for 26 points, so they carry a lot of weight.",
    "Clinical judgment steps line up with the nursing process: assess (recognize), analyze, plan (prioritize, generate), implement (take action), evaluate."
  ],
  qa: [
    ["Which step is 'the client is at risk for bleeding as evidenced by the platelet count'?", "Analyze cues."],
    ["Which step is 'select the statements that show the teaching worked'?", "Evaluate outcomes."]
  ]
},
{
  id: "priority", sys: "cj", name: "Prioritization Frameworks",
  sub: "ABCs, Maslow, safety, acute vs. chronic, nursing process, least restrictive",
  connect: ["Management of care", "Safety", "Who First?"],
  summary: "When every option is a good action, pick the one that keeps the client alive and safe right now. Use ABCs, then Maslow, then safety, then the nursing process (assess before you act), then acute over chronic and unstable over stable.",
  chain: {
    why: ["ATI priority items have more than one correct action; the best answer is the most urgent"],
    assess: ["Is anyone in airway, breathing, or circulation danger?", "Is there a sudden change (acute) versus an expected finding?", "Do I have enough information to act, or do I need to assess first?"],
    act: ["ABCs: airway → breathing → circulation", "Maslow: physiological → safety → love/belonging → esteem → self-actualization", "Nursing process: assess before intervening (unless the client is in danger)", "Least restrictive, least invasive first"],
    teach: ["Unexpected beats expected (fever on post-op day 2 vs. pain at the incision)", "Actual problems beat potential problems"]
  },
  facts: [
    "A client refusing the incentive spirometer: first find out why (assess).",
    "Client seizing on the floor: physical safety first, then positioning, then vital signs after it ends.",
    "In a group of four clients, the one with an acute change in an ABC is first."
  ],
  qa: [
    ["What comes after ABCs in most priority frameworks?", "Safety (Maslow's second level), then acute over chronic."],
    ["When is 'assess' not the first action?", "When the client is in immediate danger and the danger must be removed first (seizure, choking, bleeding, fire)."]
  ]
}
];

window.EMERGENCIES = [
  ["Client found on the floor after a fall", "safety", "Client on the bathroom or room floor", "Assess for injuries (ABCs, LOC, pain, deformity) before moving them. Get help, notify the provider, then the incident report."],
  ["Active seizure", "phys", "Tonic-clonic movements, unresponsive", "Stay, call for help, protect the head, side-lying when possible, time it. Nothing in the mouth, no restraints."],
  ["Hemorrhagic shock post-op", "risk", "Tachycardia, hypotension, ↓ urine output, cool clammy skin", "Notify the surgeon; if the response doesn't match the danger, go up the chain of command."],
  ["Fluid overload during IV therapy", "pharm", "Crackles, dyspnea, distended neck veins, ↑ BP", "Slow or stop the infusion, raise HOB, O₂, notify the provider."],
  ["Air embolism", "pharm", "Sudden dyspnea, chest pain, hypotension, ↓ LOC during IV therapy", "Clamp the line, left side-lying with head down, O₂, notify."],
  ["Tracheostomy tube dislodged", "phys", "Tube out of the stoma, respiratory distress", "Insert the spare tube with the obturator (or bag via the stoma per policy) and call for help."],
  ["Evisceration", "risk", "Organs protrude through the incision", "Cover with sterile saline-moistened dressing, low Fowler's with knees bent, stay, notify."],
  ["Aspiration or choking at meals or tube feeding", "comfort", "Coughing, choking, wet voice, falling SpO₂", "Stop intake or the feeding, upright, suction, assess airway, notify."],
  ["Fire in the room", "safety", "Smoke or flame, especially with oxygen", "RACE: Rescue, Alarm, Contain, Extinguish (PASS)."],
  ["Medication error reaches the client", "safety", "Wrong drug, dose, or client", "Assess the client first, notify the provider, follow orders, then complete an incident report."],
  ["Hypoglycemia after insulin", "pharm", "Glucose below 70, shaky, sweaty, confused", "Alert: 15 g fast carb, recheck in 15 min. Can't swallow: glucagon or IV dextrose per protocol."]
];

window.LOOKALIKES = [
  ["Droplet vs. airborne?", "Droplet (>5 microns, falls within 3 ft): surgical mask, private room. Airborne (<5 microns, floats): N95, negative-pressure room, door closed."],
  ["Infiltration vs. phlebitis?", "Infiltration: fluid in tissue, cool, pale, swollen. Phlebitis: inflamed vein, warm, red, tender, red streak."],
  ["Infiltration vs. extravasation?", "Same leak, but extravasation is a vesicant that can blister and kill tissue. Follow the vesicant protocol."],
  ["Fluid overload vs. dehydration?", "Overload: crackles, edema, bounding pulse, ↑ BP, weight gain. Dehydration: weak fast pulse, ↓ BP, dry mucosa, ↓ urine."],
  ["Atelectasis vs. pneumonia vs. PE?", "Atelectasis: day 1–2 low-grade fever, ↓ bases. Pneumonia: productive cough, crackles, higher fever. PE: sudden dyspnea and chest pain."],
  ["Delegation vs. assignment?", "Delegation: hand off a task, keep accountability. Assignment: transfer task and responsibility to someone licensed for it."],
  ["Empathy vs. sympathy?", "Empathy understands the client's feeling (therapeutic). Sympathy feels sorry for them (nontherapeutic)."],
  ["Clear liquid vs. full liquid?", "Clear: see-through at room temperature (broth, apple juice, gelatin, ginger ale). Full adds milk, sherbet, ice cream, pudding."],
  ["Colostomy vs. ileostomy?", "Colostomy: colon, more formed stool. Ileostomy: ileum (RLQ), liquid output, high dehydration and skin risk."],
  ["Transparent film vs. hydrocolloid vs. alginate?", "Film: stage 1 (friction). Hydrocolloid: stage 2 (moist bed). Alginate: stages 3–4 (absorbs heavy drainage)."],
  ["Walker vs. cane?", "Walker: move the walker, then step in. Cane: strong side, move cane with the weak leg."]
];
