/* ATI RN Fundamentals exam page (#ati) for the Fundamentals final.
   The blueprint is the item count per sub-scale from the ATI RN Fundamentals Online Practice 2026
   Form B performance profile (60 items). The review map lists every topic that practice assessment
   covered, grouped by sub-scale, so all areas get equal attention. Loads after data.js and practice files. */
(function () {
  var W = window;
  W.ATI = {
    title: "ATI RN Fundamentals",
    lead: "Your final follows the ATI RN Fundamentals assessment. This page gives the blueprint from the 60-item practice assessment (Form B), maps every area it tested to the topics on this site, and starts a 60-question practice exam built the same way.",
    mockN: 60,
    mockNote: "dealt by the ATI blueprint (Management of Care 9, Safety 10, Health Promotion 6, Psychosocial 4, Basic Care 8, Pharm 5, Risk Reduction 6, Physiological Adaptation 3, Clinical Judgment case items 9), all formats and difficulties.",
    setNote: "written in ATI's voice (\"A nurse is caring for a client who…\") in ATI's formats: multiple choice, select all that apply, ordered response, dosage fill-in-the-blank, and Next Gen case items with chart tabs (drop-down sentences, select N, highlight).",
    blueprint: { mgmt: 9, safety: 10, health: 6, psych: 4, comfort: 8, pharm: 5, risk: 6, phys: 3, cj: 9 },
    facts: [
      ["60 items, 9 areas", "Form B had 60 items: Management of Care 9, Safety & Infection Control 10, Health Promotion 6, Psychosocial Integrity 4, Basic Care & Comfort 8, Pharm & Parenteral 5, Reduction of Risk 6, Physiological Adaptation 3, and 9 Clinical Judgment case items."],
      ["Case items carry extra points", "The 9 Clinical Judgment items were worth 26 points together because select N, select all, highlight, and drop-down items score each part. Partial credit counts, so answer every part."],
      ["ATI's formats", "Mostly one-best-answer multiple choice, plus select all that apply, ordered response (drag steps into order), a dosage fill-in-the-blank, and case items with chart tabs (Nurses' Notes, Vital Signs, MAR, Diagnostic Results)."],
      ["Written in ATI's voice", "\"A nurse is caring for a client who… Which of the following actions should the nurse take first?\" Most items ask for the first action, the right technique, the client statement that shows understanding, or what to report."]
    ],
    plan: [
      ["Take the 60-question practice exam cold", "One sitting, no notes, so your score shows what you really know. Use ← Previous to read rationales as you go, or save them for the end."],
      ["Study every area, not just the misses", "Work through each section's topics in order using the blueprint below. Every area on the practice assessment has its own topics and questions here."],
      ["Drill by section", "Run Practice Qs one section at a time until you're at 85% or better, then mix them."],
      ["Do the case items on purpose", "Filter Practice Qs to Clinical Judgment. Open every chart tab before answering."],
      ["Use the games for speed", "Who First?, Sort It, Step Order, and Right Call? build the quick recognition ATI rewards."],
      ["Night before", "Run the Highest-yield rules, Red Flags & Look-alikes, and your unknown flashcards. Sleep."]
    ],
    mapTitle: "Every area on the practice assessment → topics on this site",
    mapNote: "This covers all 60 items on the practice assessment, grouped the way ATI reports them. Tap a topic to study it. ✓ = marked studied.",
    engageTitle: "ATI Engage Fundamentals & Skills modules",
    engageNote: "Your course assigned these ATI modules (Lab 2 lists Infection Control and Isolation, Safety, Vital Signs, Oxygen Therapy, Pain Management, and Specimen Collection). Here's where the same content lives on this site.",
    engage: [
      ["Engage Fundamentals: Infection Control & Isolation", "Chain of infection, standard and transmission-based precautions, PPE.", ["infection", "medsafety"]],
      ["Engage Fundamentals: Safety", "Falls, restraints, fire and oxygen safety, ergonomics, incident reports.", ["falls", "homesafe", "ergo"]],
      ["Skills Modules: Vital Signs, Oxygen Therapy, Pain Management", "Technique, normal ranges, oxygen devices, incentive spirometer, pain scales.", ["vitals", "trach", "pain", "growth"]],
      ["Skills Modules: Specimen Collection, Medication Administration, IV Therapy", "Blood glucose, specimen rules, routes, injections, PIV insertion and complications.", ["labs", "medadmin", "inject", "ivtherapy", "enteral"]]
    ],
    units: [
      { name: "📋 Management of Care · 9 items", items: [
        ["Delegating tasks to assistive personnel; RN scope of practice", ["deleg"]],
        ["Continuity of care: SBAR, transfer report; transcribing incomplete orders", ["handoff"]],
        ["Advance directives (living will), advocacy, chain of command", ["legal"]],
        ["Time management and setting priorities", ["timemgmt", "priority"]]
      ] },
      { name: "🛡️ Safety & Infection Prevention and Control · 10 items", items: [
        ["Priority action after a fall; fall-risk interventions; side rails", ["falls"]],
        ["Ergonomics: proper sitting position, lifting, slide board transfer", ["ergo", "mobility"]],
        ["Isolation precautions: droplet (diphtheria, mycoplasma), airborne (TB)", ["infection"]],
        ["Home oxygen safety", ["homesafe"]],
        ["Client identification, wasting controlled substances", ["medsafety"]],
        ["Teaching insulin self-administration (safe use of equipment)", ["inject"]]
      ] },
      { name: "🌱 Health Promotion & Maintenance · 6 items", items: [
        ["Assessing readiness to learn; teaching older adults with hearing loss", ["teach"]],
        ["Health promotion recommendations for older adults (vaccines, eye exams)", ["screen"]],
        ["Preventing bone loss", ["bone"]],
        ["Respiratory findings and vital signs across the lifespan", ["growth"]]
      ] },
      { name: "💬 Psychosocial Integrity · 4 items", items: [
        ["Indications of effective coping", ["coping"]],
        ["Therapeutic responses (body image after mastectomy, client without housing)", ["therapeutic"]],
        ["Spiritual assessment for a client with a terminal illness", ["grief"]]
      ] },
      { name: "🛏️ Basic Care & Comfort · 8 items", items: [
        ["Steps for transferring a client; walker use; neck ROM", ["mobility"]],
        ["Hygiene care with dignity and privacy", ["hygiene"]],
        ["Clear liquid diet, kosher diet, vegan protein, assessing for dysphagia", ["diets"]],
        ["Pressure injury dressings", ["skin"]],
        ["Ostomy care, enemas, I&O", ["elim"]],
        ["Pain management before activity", ["pain"]]
      ] },
      { name: "💉 Pharmacological & Parenteral Therapies · 5 items", items: [
        ["Enoxaparin SubQ technique; NPH insulin teaching", ["inject"]],
        ["Weight-based oral dose calculation (mL per dose)", ["calc"]],
        ["Giving multiple medications through an enteral tube", ["enteral"]],
        ["IV fluid complications (fluid overload)", ["ivtherapy"]],
        ["Rights, routes, and checks", ["medadmin"]]
      ] },
      { name: "📉 Reduction of Risk Potential · 6 items", items: [
        ["Lab results to report (lipid panel); fasting blood sugar", ["labs"]],
        ["Orthostatic hypotension technique", ["vitals"]],
        ["Postoperative complications: atelectasis, hemorrhage, incentive spirometer refusal", ["postop"]],
        ["Neurological screening (sensory testing)", ["vitals", "growth"]]
      ] },
      { name: "🫁 Physiological Adaptation · 3 items", items: [
        ["Increase in vital signs after surgery", ["postop", "neurofluid"]],
        ["Procedure for wound irrigation", ["wound"]],
        ["Caring for a client having tracheostomy surgery; home trach teaching", ["trach"]]
      ] },
      { name: "🧠 Clinical Judgment case items · 9 items (26 points)", items: [
        ["Analyze cues: paraplegia, chemotherapy, pneumonia", ["ncjmm", "skin", "labs", "infection"]],
        ["Generate solutions: planning care after knee surgery; safe medication administration", ["mobility", "medsafety"]],
        ["Recognize cues: identifying signs of malnutrition", ["diets"]],
        ["Take actions: client with cough and night sweats (TB); seizure", ["infection", "neurofluid"]],
        ["Evaluate outcomes: heart failure teaching", ["ncjmm", "neurofluid"]]
      ] }
    ],
    traps: [
      "'Notify the provider' is rarely first. Assess the client (or remove the danger) first.",
      "'Document' and 'complete an incident report' are real steps but never the first one when a client needs care.",
      "Evaluating a client's response (did the pain go down?) can't be delegated, even though it sounds simple.",
      "Droplet vs. airborne: mycoplasma pneumonia and diphtheria are droplet; TB, measles, and chickenpox are airborne.",
      "Clear liquid traps: sherbet and milk aren't clear; ginger ale, black coffee, and apple juice are.",
      "Kosher traps: swordfish and shrimp aren't kosher; meat and cheese together isn't kosher; milk from cows is fine.",
      "Insulin traps: roll NPH, don't shake; don't aspirate; 45°–90°, not 30°.",
      "Walker traps: the client lifts the walker forward before stepping, with elbows slightly bent, and never pulls up on it to stand.",
      "Ordered response: the first step is almost always an assessment ('ask if the client can bear weight')."
    ]
  };
})();
