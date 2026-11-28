/* Practice questions, part 3: Clinical Judgment (Next Gen) case items with chart tabs, matching the ATI
   practice formats: drop-down sentences, select N, select all that apply, and highlight.
   Appends to window.QUESTIONS (loads after questions-2.js). Every item has diff and a why rationale. */
(function () {
  var Q = [
/* ---------- SEIZURE ---------- */
{ sys: "cj", type: "cloze", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "0815: Client is a 34-year-old admitted with a history of a seizure disorder. Reports missing two doses of carbamazepine this week. States, \"I smell burning rubber.\"\n0820: Client found in bed with rigid extremities followed by rhythmic jerking of all four limbs. Unresponsive to voice. Saliva at the corners of the mouth."],
    ["Vital Signs", "0800: T 37.0° C (98.6° F), HR 88/min, RR 18/min, BP 128/78 mm Hg, SpO2 97% on room air"],
    ["Medication Administration Record", "Carbamazepine 200 mg PO twice daily\nLorazepam 2 mg IV PRN for seizure lasting longer than 5 minutes"]
  ],
  stem: "The nurse should first {0}, then {1}, and should not {2}.",
  blanks: [
    { options: ["turn the client onto their side", "insert an oral airway", "hold the client's arms still", "give the client sips of water"], answer: 0 },
    { options: ["time the length of the seizure", "leave to call the provider", "check a blood glucose", "lower the head of the bed flat and leave"], answer: 0 },
    { options: ["place anything in the client's mouth", "loosen restrictive clothing", "stay with the client", "pad the side rails"], answer: 0 }
  ],
  why: "Side-lying keeps the airway open and lets saliva drain, and timing tells the team whether the PRN lorazepam (more than 5 minutes) is needed. Nothing goes in the mouth during a seizure, and the nurse never restrains the limbs. The burning-rubber smell was an aura, and the missed carbamazepine doses explain the seizure." },
{ sys: "cj", type: "sata", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "0835: Seizure lasted 2 minutes. Client now drowsy and confused, oriented to name only. Incontinent of urine. Side rails up and padded.\n0840: Client asks, \"What happened?\""],
    ["Vital Signs", "0835: HR 104/min, RR 20/min, BP 132/80 mm Hg, SpO2 94% on room air"]
  ],
  stem: "The nurse is caring for the client after the seizure. Which of the following actions should the nurse take? Select all that apply.",
  options: ["Keep the client in a side-lying position", "Document what happened before and during the seizure", "Reorient the client and explain what happened", "Offer the client breakfast now", "Provide privacy and hygiene care", "Keep oxygen and suction at the bedside"],
  answer: [0, 1, 2, 4, 5],
  why: "After a seizure (the postictal phase) the client is drowsy and confused, so keep them side-lying, reorient them, give hygiene care with privacy, and keep suction and oxygen ready. Document the aura, the movements, how long it lasted, and how the client is now. Food waits until the client is fully alert and can swallow safely." },

/* ---------- KNEE REPLACEMENT ---------- */
{ sys: "cj", type: "selectn", n: 3, diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "Postoperative day 1: Client is 68 years old, had a right total knee arthroplasty yesterday. Reports pain 7 on a 0-10 scale. Physical therapy is scheduled in 1 hour. Dressing dry and intact. Pedal pulses present bilaterally. Client states, \"I'm scared to bend it.\""],
    ["Vital Signs", "0800: T 37.4° C (99.3° F), HR 84/min, RR 16/min, BP 136/82 mm Hg, SpO2 95% on room air"],
    ["Provider Orders", "Oxycodone 5 mg PO every 4 hours PRN for pain\nEnoxaparin 40 mg SubQ daily\nIncentive spirometer 10 times every hour while awake\nAmbulate with walker and physical therapy"]
  ],
  stem: "The nurse is planning care for the client. Select the 3 actions the nurse should include in the plan of care.",
  options: ["Give oxycodone 30 to 60 minutes before physical therapy", "Have the client use the incentive spirometer every hour while awake", "Keep a pillow under the right knee at all times", "Give enoxaparin as prescribed to prevent blood clots", "Keep the client on bed rest until pain is 3 or less", "Massage the right calf to promote circulation"],
  answer: [0, 1, 3],
  why: "Pain medicine before therapy lets the client move, the incentive spirometer prevents atelectasis, and enoxaparin prevents a DVT after joint surgery. A pillow under the knee causes a flexion contracture, bed rest raises the risk of clots and pneumonia, and massaging the calf could loosen a clot." },

/* ---------- CHEMOTHERAPY ---------- */
{ sys: "cj", type: "cloze", diff: "hard", ati: true,
  case: [
    ["Nurses' Notes", "1000: Client is 52 years old and receiving chemotherapy for breast cancer. Reports fatigue and bleeding gums when brushing teeth. Several bruises on both forearms. Asks for a razor to shave."],
    ["Vital Signs", "1000: T 37.1° C (98.8° F), HR 92/min, RR 18/min, BP 118/70 mm Hg"],
    ["Diagnostic Results", "WBC 4,600/mm³ (normal 5,000–10,000)\nHemoglobin 11.2 g/dL (normal female 12–16, male 14–18)\nPlatelet count 42,000/mm³ (normal 150,000–400,000)"]
  ],
  stem: "The client's findings show the greatest risk for {0}, as shown by the client's {1}. The nurse should {2}.",
  blanks: [
    { options: ["bleeding", "infection", "fluid overload", "dehydration"], answer: 0 },
    { options: ["platelet count", "WBC count", "temperature", "blood pressure"], answer: 0 },
    { options: ["provide an electric razor and a soft toothbrush", "provide a disposable safety razor", "encourage flossing twice a day", "take the temperature rectally"], answer: 0 }
  ],
  why: "A platelet count of 42,000/mm³ (normal 150,000–400,000) plus bleeding gums and bruises points to bleeding. Bleeding precautions: electric razor, soft toothbrush, no flossing, no rectal temperatures or enemas, and no IM injections when possible. The WBC is a little low, but the bleeding cues are what's happening now." },

/* ---------- PNEUMONIA ---------- */
{ sys: "cj", type: "cloze", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "1400: Client is 24 years old, a college student admitted with a dry hacking cough for 2 weeks, headache, and fatigue. Several roommates have similar symptoms. Crackles in the right lower lobe."],
    ["Vital Signs", "1400: T 38.3° C (100.9° F), HR 98/min, RR 22/min, BP 120/76 mm Hg, SpO2 93% on room air"],
    ["Diagnostic Results", "Chest x-ray: patchy right lower lobe infiltrate\nPCR: Mycoplasma pneumoniae positive\nWBC 11,800/mm³ (normal 5,000–10,000)"]
  ],
  stem: "The nurse should place the client on {0} precautions, which require the nurse to wear {1} when entering the room.",
  blanks: [
    { options: ["droplet", "airborne", "contact", "protective"], answer: 0 },
    { options: ["a surgical mask", "an N95 respirator", "a gown only", "no extra equipment"], answer: 0 }
  ],
  why: "Mycoplasma pneumoniae spreads by large droplets, so droplet precautions: a private room (or cohort) and a surgical mask within 3 feet of the client. An N95 and a negative-pressure room are for airborne diseases like TB, measles, and chickenpox." },
{ sys: "cj", type: "highlight", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "Client admitted with pneumonia, day 2."]
  ],
  stem: "The nurse is reviewing the client's assessment on day 2. Highlight the findings that require follow-up.",
  options: ["Alert and oriented, but newly restless", "RR 28/min", "SpO2 89% on 2 L/min nasal cannula", "Productive cough with thick yellow sputum", "Drinking 1,500 mL of fluid per shift", "Lungs clear in the upper lobes", "T 39.2° C (102.6° F)"],
  answer: [0, 1, 2, 3, 6],
  why: "New restlessness can be an early sign of hypoxia, and an RR of 28/min (normal 12–20), SpO2 of 89% on oxygen (expected 95% or higher), thick purulent sputum, and a fever of 39.2° C all show the pneumonia is worsening. Good fluid intake and clear upper lobes are expected or reassuring." },

/* ---------- TB ---------- */
{ sys: "cj", type: "sata", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "2000: Client is 46 years old, recently came from a country where tuberculosis is common. Reports a cough for 4 weeks, coughing up blood-streaked sputum, night sweats, and a 5 kg (11 lb) weight loss."],
    ["Vital Signs", "2000: T 37.9° C (100.2° F), HR 96/min, RR 20/min, BP 124/78 mm Hg"],
    ["Provider Orders", "Sputum for acid-fast bacilli x 3 on consecutive mornings\nChest x-ray"]
  ],
  stem: "The nurse is preparing to care for the client. Which of the following actions should the nurse take? Select all that apply.",
  options: ["Place the client in a negative-pressure room", "Wear a fit-tested N95 respirator when entering the room", "Have the client wear a surgical mask when leaving the room", "Keep the door to the room open for monitoring", "Collect the sputum specimens early in the morning", "Wear a surgical mask when entering the room"],
  answer: [0, 1, 2, 4],
  why: "Cough for weeks, bloody sputum, night sweats, and weight loss point to TB, which is airborne. Use a negative-pressure room with the door closed, a fit-tested N95 for staff, and a surgical mask on the client for transport. Morning sputum is most concentrated. A surgical mask doesn't filter airborne particles, so it doesn't protect the nurse." },

/* ---------- PARAPLEGIA ---------- */
{ sys: "cj", type: "highlight", diff: "hard", ati: true,
  case: [
    ["Nurses' Notes", "Client is 30 years old with paraplegia from a spinal cord injury 3 years ago. Lives with a partner and uses a wheelchair. Admitted for a urinary tract infection."]
  ],
  stem: "The nurse is reviewing the client's nurses' notes. Highlight the findings that require follow-up.",
  options: ["Alert and oriented x4", "Area of nonblanchable redness on the right heel", "Both knees cannot be fully straightened", "Partner does passive range of motion once a day", "Urinates by intermittent self-catheterization", "Sits in the wheelchair for 6 hours without shifting weight", "Eats most of each meal"],
  answer: [1, 2, 3, 5],
  why: "Nonblanchable redness is a stage 1 pressure injury, knees that won't straighten are contractures, and passive ROM only once a day isn't enough to prevent them (aim for at least 2 to 3 times a day). Sitting 6 hours without shifting weight raises the risk of a pressure injury: weight shifts every 15 minutes. The other findings are expected or healthy." },

/* ---------- MALNUTRITION ---------- */
{ sys: "cj", type: "highlight", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "Client is 82 years old, lives alone, admitted after a fall at home. Daughter reports the client 'hasn't been eating much' since their spouse died 4 months ago."],
    ["Diagnostic Results", "Albumin 2.9 g/dL (normal 3.5–5.0)\nHemoglobin 10.9 g/dL (normal female 12–16, male 14–18)\nSodium 139 mEq/L (normal 135–145)"]
  ],
  stem: "The nurse is assessing the client. Highlight the findings that indicate malnutrition.",
  options: ["Lost 6.8 kg (15 lb) in 3 months", "Albumin 2.9 g/dL (normal 3.5–5.0)", "Dry, brittle hair that falls out easily", "Sodium 139 mEq/L (normal 135–145)", "Clothes fit loosely; temporal wasting noted", "Wounds on the shins are slow to heal", "Oriented to person, place, and time"],
  answer: [0, 1, 2, 4, 5],
  why: "Unplanned weight loss, a low albumin of 2.9 g/dL (normal 3.5–5.0), brittle hair, muscle wasting at the temples, and slow wound healing all point to malnutrition. The sodium is normal, and orientation isn't a nutrition finding." },

/* ---------- HEART FAILURE TEACHING ---------- */
{ sys: "cj", type: "selectn", n: 3, diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "Client is 71 years old, being discharged after treatment for heart failure. Medications include furosemide and lisinopril. The nurse reviewed daily weights, a low-sodium diet, and when to call the provider."]
  ],
  stem: "The nurse is evaluating the client's understanding of the teaching. Select the 3 client statements that indicate understanding.",
  options: ["\"I'll weigh myself every morning after I urinate and before breakfast.\"", "\"I'll call my provider if I gain 2 pounds in a day or 5 pounds in a week.\"", "\"I'll take my water pill at bedtime.\"", "\"I'll season my food with herbs instead of salt.\"", "\"Canned soup is a good quick lunch.\"", "\"If my ankles swell, I'll skip my water pill that day.\""],
  answer: [0, 1, 3],
  why: "Daily weights at the same time, calling for a gain of 2 lb in a day or 5 lb in a week, and herbs instead of salt all show understanding. Furosemide is taken in the morning so the client isn't up all night urinating, canned soup is very high in sodium, and swelling means the diuretic is needed more, not less." },
{ sys: "cj", type: "cloze", diff: "hard", ati: true,
  case: [
    ["Nurses' Notes", "Day 3: Client with heart failure is receiving furosemide 40 mg IV twice daily. Client reports breathing is easier. Crackles in the lung bases have decreased. 1+ ankle edema (was 3+ on admission)."],
    ["Intake and Output", "Day 2: Intake 1,400 mL, Output 2,600 mL\nDay 3: Intake 1,300 mL, Output 2,300 mL"],
    ["Diagnostic Results", "Potassium 3.1 mEq/L (normal 3.5–5.0)\nWeight: 84 kg on admission, 81.5 kg today"]
  ],
  stem: "The client's condition is {0}, as shown by {1}. The nurse should report the client's {2} to the provider.",
  blanks: [
    { options: ["improving", "declining", "unchanged"], answer: 0 },
    { options: ["the weight loss and less edema", "the potassium level", "the intake of 1,300 mL"], answer: 0 },
    { options: ["potassium level", "weight", "urine output"], answer: 0 }
  ],
  why: "Losing 2.5 kg, less edema, fewer crackles, and easier breathing show the diuretic is working. But furosemide also wastes potassium, and 3.1 mEq/L (normal 3.5–5.0) puts the client at risk for dysrhythmias, so the nurse reports it." },

/* ---------- SAFE MEDICATION ADMINISTRATION ---------- */
{ sys: "cj", type: "selectn", n: 3, diff: "hard", ati: true,
  case: [
    ["Nurses' Notes", "0900: Client is 77 years old, admitted with atrial fibrillation. Client wears a hearing aid. Has a wristband with name and date of birth. Roommate has a similar last name."],
    ["Vital Signs", "0855: Apical HR 54/min, irregular; BP 108/64 mm Hg"],
    ["Medication Administration Record", "Digoxin 0.125 mg PO daily at 0900\nMetoprolol 25 mg PO twice daily at 0900 and 2100\nAllergies: penicillin"],
    ["Diagnostic Results", "Digoxin level 2.4 ng/mL (normal 0.5–2.0)\nPotassium 3.4 mEq/L (normal 3.5–5.0)"]
  ],
  stem: "The nurse is preparing the client's 0900 medications. Select the 3 actions the nurse should take.",
  options: ["Hold the digoxin and notify the provider", "Identify the client using name and date of birth on the wristband", "Give the metoprolol and recheck the HR in 1 hour", "Report the digoxin level and potassium to the provider", "Ask the roommate to confirm the client's name", "Crush the digoxin and mix it with applesauce"],
  answer: [0, 1, 3],
  why: "An apical HR of 54/min, a digoxin level of 2.4 ng/mL (normal 0.5–2.0), and a low potassium of 3.4 mEq/L (normal 3.5–5.0), which makes digoxin toxicity more likely, mean the nurse holds digoxin and reports. Two identifiers are needed, especially with a similar name nearby. Metoprolol also slows the heart, so it shouldn't be given without talking to the provider." },

/* ---------- POSTOPERATIVE HEMORRHAGE ---------- */
{ sys: "cj", type: "cloze", diff: "medium", ati: true,
  case: [
    ["Nurses' Notes", "1600: Client returned from abdominal surgery at 1200. Now restless and reports feeling 'cold and clammy.' Dressing has a large amount of bright red drainage that has seeped through."],
    ["Vital Signs", "1200: HR 84/min, BP 128/78 mm Hg, RR 16/min\n1400: HR 98/min, BP 116/70 mm Hg, RR 18/min\n1600: HR 118/min, BP 94/58 mm Hg, RR 24/min"]
  ],
  stem: "The client is most likely experiencing {0}. The nurse's first action should be to {1}.",
  blanks: [
    { options: ["hemorrhage", "atelectasis", "a wound infection", "a pulmonary embolism"], answer: 0 },
    { options: ["apply pressure to the site and call the rapid response team", "remove the dressing and let the wound air dry", "document the drainage and check again in 1 hour", "encourage the client to use the incentive spirometer"], answer: 0 }
  ],
  why: "A rising HR, falling BP, fast breathing, restlessness, cool clammy skin, and bright red drainage in the first hours after surgery point to hemorrhage and early shock. Apply pressure and get help right away. Atelectasis shows up in the first 1 to 2 days with low fever and crackles; infection comes on day 3 to 5." },

/* ---------- FALL / SAFETY ---------- */
{ sys: "cj", type: "sata", diff: "easy", ati: true,
  case: [
    ["Nurses' Notes", "0300: Client is 84 years old, admitted with a UTI, and has new confusion. Found trying to climb over the side rails to get to the bathroom. Receiving IV fluids at 100 mL/hr."],
    ["Vital Signs", "0300: T 37.8° C (100.0° F), HR 90/min, BP 112/70 mm Hg"]
  ],
  stem: "The nurse is updating the client's plan of care to prevent a fall. Which of the following interventions should the nurse include? Select all that apply.",
  options: ["Offer toileting every 2 hours", "Keep the bed in the lowest position with wheels locked", "Raise all four side rails", "Place the call light within reach", "Apply a bed alarm", "Apply wrist restraints at night"],
  answer: [0, 1, 3, 4],
  why: "Scheduled toileting fixes the reason the client is getting up, and a low bed, call light in reach, and bed alarm all reduce falls. Four raised side rails count as a restraint and make falls worse because confused clients climb over them. Restraints are a last resort and need a provider order." }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
