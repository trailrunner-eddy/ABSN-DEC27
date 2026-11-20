/* Roleplay scripts for the NURA 330 Final Practical.
   One script per patient, laid out in rubric order. Each graded criterion is
   tagged on the line that earns it (third item in a line), so you can see that
   every point is covered. No timing: the script is the minimum that answers
   every graded item.
   Line types:
     do  = what you do (stage direction)
     n   = you, speaking to the patient or provider
     say = you, saying a finding out loud for the grader
     p   = patient (your partner reads these)
     dr  = provider on the phone (your partner reads these)
   Abbreviations are spelled out in parentheses the first time they appear in each script. */
window.ROLEPLAY = {
  thompson: {
    cast: "You are the nurse. Your partner plays Patricia Thompson, then Dr. Garcia on the phone.",
    phases: [
      { title: "Safety & professionalism", pts: "Recognize cues · 9 pts", lines: [
        ["do", "Knock and wait for permission. As you enter, scan for hazards and distress.", "Knock and ask to enter"],
        ["n", "Knock knock. Good morning, may I come in?"],
        ["p", "Yes, come on in."],
        ["say", "I'm performing hand hygiene.", "Hand hygiene"],
        ["n", "Good morning, Ms. Thompson. I'm ___, the nursing student caring for you today. I'll take about 10 minutes to check your heart, circulation, and breathing. Is that okay? Thank you.", "AIDET (Acknowledge, Introduce, Duration, Explanation, Thank you)"],
        ["n", "I'll close the curtain for your privacy.", "HIPAA (Health Insurance Portability and Accountability Act) / privacy"],
        ["n", "Can you tell me your full name and date of birth?"],
        ["p", "Patricia Thompson. November 20th, 1954."],
        ["say", "Name and DOB (date of birth) match the armband and chart. The chart lists her sex as male, so I'll report that discrepancy to be corrected.", "Verify armband: name + DOB"],
        ["n", "Do you have any allergies to medicines, foods, or latex?"],
        ["p", "No."],
        ["say", "No known allergies, no allergy band, no isolation precautions.", "Allergies & precautions"],
        ["say", "She is well groomed, calm, sitting up, speaking in full sentences, and answering appropriately. Breathing looks slightly fast.", "General appearance, mood, speech"]
      ]},
      { title: "Focused history", pts: "Recognize cues · 1 pt", lines: [
        ["n", "Your pain is charted as a 2. Where is it, when did it start, what makes it better or worse, what does it feel like, does it spread, and is it constant?", "Pain with OPQRST (onset, provocation, quality, region, severity, timing)"],
        ["p", "Both ankles and lower legs ache and feel heavy. It came on over a few days. Putting my feet up helps. It's there most of the time and doesn't spread. Still a 2."],
        ["n", "Any shortness of breath, trouble breathing lying flat, chest pain, or weight gain?", "Associated symptoms"],
        ["p", "I get winded walking to the bathroom, I sleep on 3 pillows, and my rings feel tight. No chest pain."]
      ]},
      { title: "General focused assessment", pts: "Recognize cues · 5 pts", lines: [
        ["n", "Where are you, what's today's date, and why are you here?"],
        ["p", "The hospital, [today's date], for my heart and this swelling."],
        ["say", "Alert and oriented ×4.", "Orientation ×4"],
        ["say", "Alert, skin pink, no cyanosis or diaphoresis.", "Appearance, LOC (level of consciousness), skin color"],
        ["say", "Upper and lower extremities warm and dry bilaterally.", "Temperature & moisture, all 4 limbs"],
        ["say", "I'm cleaning my stethoscope, and I'll listen on bare skin.", "Uses equipment correctly"],
        ["say", "Apical pulse 88 and regular, matching the chart.", "Accurate objective data"]
      ]},
      { title: "Cardiovascular assessment", pts: "Recognize cues · 5 pts", lines: [
        ["do", "Raise the head of the bed to 30–45°, turn her head slightly left, and look at the right side of her neck. Press 5 seconds over each foot, ankle, and shin."],
        ["say", "JVD (jugular venous distention) present at 45 degrees. 2+ pitting edema in both feet, ankles, and shins; no edema in the hands or sacrum.", "JVD and edema, BUE (bilateral upper extremities) and BLE (bilateral lower extremities)"],
        ["say", "Capillary refill under 3 seconds in fingers and toes bilaterally.", "Capillary refill, verbalized"],
        ["do", "Listen at APETM (aortic, pulmonic, Erb's point, tricuspid, mitral) with the diaphragm, then the bell at the apex. Count the apical pulse for a full 60 seconds."],
        ["say", "S1 and S2 heard at all sites; apical pulse 88 and regular over a full minute. [If heard:] an S3 (third heart sound) at the apex.", "APETM and apical pulse ×1 full minute"],
        ["say", "Radial pulses 2+, equal, and regular bilaterally.", "Rate, rhythm, symmetry of pulses"],
        ["say", "Dorsalis pedis and posterior tibial pulses 1+ and equal bilaterally, harder to feel through the edema.", "Posterior tibial and dorsalis pedis"],
        ["say", "Bonus: fine crackles in both posterior lung bases."]
      ]},
      { title: "Analyze cues", pts: "20 pts", lines: [
        ["say", "Normal: heart rate 88 and regular, temperature 98.4, alert and oriented ×4, capillary refill under 3 seconds, radial pulses 2+ and equal.", "Identifies normal findings"],
        ["say", "Abnormal: RR (respiratory rate) 22, tachypnea. SpO₂ (oxygen saturation) 94%, below normal. BP (blood pressure) 138/86, stage 1 hypertension. JVD, 2+ edema, crackles, and three-pillow orthopnea.", "Identifies abnormal findings"],
        ["say", "These point to fluid volume excess, likely heart failure. Fluid backing into the lungs causes the fast breathing, low oxygen, and crackles; fluid backing into the body causes the JVD and edema.", "Explains why abnormals matter"],
        ["say", "I'd also want her daily weight trend, intake and output, potassium, BUN (blood urea nitrogen), creatinine, BNP (B-type natriuretic peptide), and a chest X-ray.", "Identifies additional data needed"]
      ]},
      { title: "Prioritize hypotheses", pts: "20 pts", lines: [
        ["say", "My priority is fluid volume excess causing impaired gas exchange. Breathing comes first under the ABCs (airway, breathing, circulation), so it outranks her pain of 2.", "States priority problem"],
        ["n", "Dr. Garcia, this is ___, the nursing student caring for Patricia Thompson in room ___. Her respiratory rate is 22 and her oxygen saturation is 94%. She's 72, with furosemide 40 mg by mouth every 4 hours ordered, no allergies, full code. I found JVD, 2+ bilateral edema, and crackles at both bases; BP 138/86. I'm concerned about fluid overload. May I get daily weights, strict I&O (intake and output), and a BMP (basic metabolic panel)?", "Communicates clearly: SBAR (Situation, Background, Assessment, Recommendation)"],
        ["dr", "Yes, go ahead with daily weights, strict I&O, and a BMP. Give her scheduled furosemide now."],
        ["n", "Reading back: daily weights, strict I&O, a BMP, and give the scheduled furosemide now. Thank you."],
      ]},
      { title: "Take action", pts: "10 pts", lines: [
        ["say", "I'm raising her to high-Fowler's, applying O₂ (oxygen) at 2 L by nasal cannula per protocol, and elevating her legs. I'll check her potassium and BP before giving the diuretic.", "Recommends an intervention / notifies provider"]
      ]},
      { title: "Evaluate outcomes", pts: "20 pts", lines: [
        ["say", "I'll reassess her RR, SpO₂, lung sounds, BP, edema, urine output, and weight.", "What to reassess"],
        ["say", "I expect RR 12 to 20, SpO₂ 95% or higher, clearer lungs, and good urine output within 1 to 2 hours of the diuretic.", "Expected outcome"],
        ["say", "If her SpO₂ keeps dropping, she has pink frothy sputum, or she becomes confused, I'll call rapid response.", "Whether to escalate"],
        ["say", "The diuretic removes extra fluid, which should ease her breathing.", "Sound reasoning"]
      ]},
      { title: "Before you leave", pts: "Safety", lines: [
        ["say", "Bed in the lowest position, 2 side rails up, call light and tray table in reach. Performing hand hygiene on exit.", "Leaves room safe"]
      ]},
      { title: "NURA 320 med pass: furosemide", pts: "Five rights · priority", lines: [
        ["n", "Before I give your medicine, can you tell me your name and date of birth again?"],
        ["p", "Patricia Thompson. November 20th, 1954."],
        ["say", "Name and date of birth match the armband and the MAR (medication administration record).", "Right patient"],
        ["say", "Furosemide (Lasix), and the label matches the MAR.", "Right drug"],
        ["say", "40 mg, matching the order.", "Right dose"],
        ["say", "PO (by mouth), as ordered.", "Right route"],
        ["say", "Every 4 hours, and it's due now.", "Right time"],
        ["n", "This is furosemide, a water pill, to help your body get rid of the extra fluid. You'll urinate more, so call me before you get up. Weigh yourself every morning."],
        ["do", "Hand her the tablet with water and stay until she has swallowed it."],
        ["say", "I'll recheck her BP, lung sounds, edema, and urine output after the dose."]
      ]}
    ]
  },

  daniel: {
    cast: "You are the nurse. Your partner plays Daniel Martinez, then the covering provider on the phone.",
    phases: [
      { title: "Safety & professionalism", pts: "Recognize cues · 9 pts", lines: [
        ["do", "Knock and wait for permission. As you enter, scan for hazards and distress: he's leaning forward and breathing fast.", "Knock and ask to enter"],
        ["n", "Knock knock. May I come in?"],
        ["p", "Yeah... come in."],
        ["say", "I'm performing hand hygiene.", "Hand hygiene"],
        ["n", "Hi Daniel, I'm ___, the nursing student caring for you. I'll take about 10 minutes to check your breathing and listen to your lungs. You don't need to talk much. Thank you.", "AIDET (Acknowledge, Introduce, Duration, Explanation, Thank you)"],
        ["n", "I'll close the door for privacy.", "HIPAA (Health Insurance Portability and Accountability Act) / privacy"],
        ["n", "Can you tell me your full name and date of birth?"],
        ["p", "Daniel Martinez... November 20th, 2005."],
        ["say", "Name and DOB (date of birth) match the armband and chart. Height is charted as 178 with no unit, so I'll confirm it's centimeters. No attending is listed, so I'll find the covering provider.", "Verify armband: name + DOB"],
        ["n", "Any allergies to medicines, foods, or latex?"],
        ["p", "No."],
        ["say", "No known allergies, no allergy band, no isolation precautions.", "Allergies & precautions"],
        ["say", "He is groomed and cooperative but anxious, in a tripod position, speaking in short phrases.", "General appearance, mood, speech"]
      ]},
      { title: "Focused history", pts: "Recognize cues · 1 pt", lines: [
        ["n", "Your pain is charted as a 3. Where is it, when did it start, what makes it better or worse, what does it feel like, and does it spread?", "Pain with OPQRST (onset, provocation, quality, region, severity, timing)"],
        ["p", "Chest feels tight... like a band. Since last night, around cats. Worse walking or talking. Sitting up helps. Doesn't spread. Still a 3."],
        ["n", "Any cough, wheezing, fever, or mucus? When was your last inhaler dose?", "Associated symptoms"],
        ["p", "Dry cough, wheezing, no fever. Last dose at 4 this morning."]
      ]},
      { title: "General focused assessment", pts: "Recognize cues · 5 pts", lines: [
        ["n", "Short answers are fine. Where are you, what's the date, and why are you here?"],
        ["p", "Hospital... [today's date]... asthma."],
        ["say", "Alert and oriented ×4.", "Orientation ×4"],
        ["say", "Alert, skin pink, no cyanosis of the lips or nail beds, no diaphoresis.", "Appearance, LOC (level of consciousness), skin color"],
        ["say", "Upper and lower extremities warm and dry bilaterally.", "Temperature & moisture, all 4 limbs"],
        ["say", "I'm cleaning my stethoscope, and I'll listen on bare skin.", "Uses equipment correctly"],
        ["say", "Respirations 24 on my count, matching the chart.", "Accurate objective data"]
      ]},
      { title: "Respiratory assessment", pts: "Recognize cues · 5 pts", lines: [
        ["do", "Count respirations for 30 to 60 seconds without telling him."],
        ["say", "Respirations 24 and labored, using neck accessory muscles, speaking 4 to 5 words at a time.", "Rate and effort, difficulty noted"],
        ["say", "AP (anteroposterior) to lateral diameter about 1:2, chest symmetric, sitting upright and leaning forward.", "AP diameter, symmetry, positioning"],
        ["do", "Listen posterior, lateral, then anterior, side to side, one full breath per spot."],
        ["say", "Expiratory wheezes in all lung fields bilaterally, slightly diminished at the bases, no crackles.", "Auscultates anterior, posterior, lateral"],
        ["do", "Feel the trachea in the sternal notch. Place your thumbs at T9–T10 and have him breathe deeply."],
        ["say", "Trachea midline. Expansion symmetric, about 5 cm. No tenderness, crepitus, or chest wall abnormalities.", "Palpates trachea, expansion, tenderness, crepitus"]
      ]},
      { title: "Analyze cues", pts: "20 pts", lines: [
        ["say", "Normal: temperature 98.6 with no sign of infection, alert and oriented ×4, trachea midline, symmetric expansion.", "Identifies normal findings"],
        ["say", "Abnormal: RR (respiratory rate) 24, tachypnea. SpO₂ (oxygen saturation) 93%, hypoxemia. HR (heart rate) 112, tachycardia. Wheezes, accessory muscle use, and short phrases.", "Identifies abnormal findings"],
        ["say", "Bronchospasm narrows his airways, so less oxygen reaches his blood. He's breathing faster and his heart rate is up to compensate. If he tires, he could go into respiratory failure.", "Explains why abnormals matter"],
        ["say", "I'd also want a peak flow compared with his personal best, his asthma history and triggers, and an ABG (arterial blood gas) and chest X-ray if he worsens.", "Identifies additional data needed"]
      ]},
      { title: "Prioritize hypotheses", pts: "20 pts", lines: [
        ["say", "My priority is ineffective airway clearance and impaired gas exchange from bronchospasm. It's an airway and breathing problem, so it outranks everything else.", "States priority problem"],
        ["n", "This is ___, the nursing student caring for Daniel Martinez in room ___. His SpO₂ is 93% with RR 24 and HR 112. He's 21 with asthma, has albuterol 2 puffs every 4 hours ordered with the last dose at 0400, and no allergies. He has diffuse expiratory wheezes and accessory muscle use, and he can only speak in short phrases. I think he's having bronchospasm. I'm giving his albuterol and starting oxygen now. Could you come evaluate him, and would you like a peak flow, an ABG, or a nebulizer if he doesn't improve?", "Communicates clearly: SBAR (Situation, Background, Assessment, Recommendation)"],
        ["dr", "Give the albuterol, get a peak flow before and after, and call me back in 15 minutes if he isn't better."],
        ["n", "Reading back: albuterol now, peak flow before and after, and call back in 15 minutes if he isn't improving. Thank you."]
      ]},
      { title: "Take action", pts: "10 pts", lines: [
        ["say", "I'm putting him in high-Fowler's, applying O₂ (oxygen) per protocol to keep SpO₂ at 92 to 94% or higher, giving the scheduled albuterol, and coaching slow pursed-lip breathing.", "Recommends an intervention / notifies provider"]
      ]},
      { title: "Evaluate outcomes", pts: "20 pts", lines: [
        ["say", "In 5 to 15 minutes I'll reassess his SpO₂, RR, work of breathing, lung sounds, HR, and ability to speak.", "What to reassess"],
        ["say", "I expect SpO₂ 95% or higher, RR 12 to 20, fewer wheezes, full sentences, and his HR trending down.", "Expected outcome"],
        ["say", "If his SpO₂ drops below 90%, his chest goes silent, he gets drowsy, or he can't speak, I'll call rapid response.", "Whether to escalate"],
        ["say", "The bronchodilator opens his airways so more oxygen gets in.", "Sound reasoning"]
      ]},
      { title: "Before you leave", pts: "Safety", lines: [
        ["say", "Bed in the lowest position with him sitting upright, 2 side rails up, call light and tray table in reach. Performing hand hygiene on exit.", "Leaves room safe"]
      ]},
      { title: "NURA 320 med pass: albuterol MDI (metered-dose inhaler)", pts: "Five rights · priority", lines: [
        ["n", "Before I give your medicine, can you tell me your name and date of birth again?"],
        ["p", "Daniel Martinez. November 20th, 2005."],
        ["say", "Name and date of birth match the armband and the MAR (medication administration record).", "Right patient"],
        ["say", "Albuterol, and the label matches the MAR.", "Right drug"],
        ["say", "2 puffs, matching the order.", "Right dose"],
        ["say", "Inhaled, with a spacer, as ordered.", "Right route"],
        ["say", "Every 4 hours. The last dose was at 0400, so it's due now.", "Right time"],
        ["n", "This is your albuterol inhaler to open your airways. Shake it, breathe all the way out, seal your lips on the spacer, press once as you breathe in slowly, and hold for 10 seconds. Wait 1 minute before the second puff. It may make you a little shaky."],
        ["do", "Watch him take both puffs and coach his technique."],
        ["say", "I'll recheck his SpO₂, RR, lung sounds, and HR in 5 to 15 minutes."]
      ]}
    ]
  },

  elena: {
    cast: "You are the nurse. Your partner plays Elena Martinez, then Dr. Garcia on the phone.",
    phases: [
      { title: "Safety & professionalism", pts: "Recognize cues · 9 pts", lines: [
        ["do", "Knock and wait for permission. As you enter, scan for hazards and distress: she's shielding her eyes from the light.", "Knock and ask to enter"],
        ["n", "Knock knock. Good morning, may I come in?"],
        ["p", "Yes."],
        ["say", "I'm performing hand hygiene.", "Hand hygiene"],
        ["n", "Good morning, Ms. Martinez. I'm ___, the nursing student caring for you. I'll take about 10 minutes to ask about your pain and check your nervous system. Is that okay? Thank you.", "AIDET (Acknowledge, Introduce, Duration, Explanation, Thank you)"],
        ["n", "I'll close the curtain for your privacy.", "HIPAA (Health Insurance Portability and Accountability Act) / privacy"],
        ["n", "Can you tell me your full name and date of birth?"],
        ["p", "Elena Martinez. November 20th, 1963."],
        ["say", "Name and DOB (date of birth) match the armband and chart. Her weight is charted as 152 with no unit, so I'll clarify pounds or kilograms.", "Verify armband: name + DOB"],
        ["n", "Any allergies to medicines, foods, or latex?"],
        ["p", "No."],
        ["say", "No known allergies, no allergy band, no isolation precautions.", "Allergies & precautions"],
        ["say", "She is well groomed and cooperative, speaks clearly, answers appropriately, and looks uncomfortable.", "General appearance, mood, speech"]
      ]},
      { title: "Focused history", pts: "Recognize cues · 1 pt", lines: [
        ["n", "Your pain is charted as a 5. Where is it, when did it start, did it come on suddenly, what makes it better or worse, and what does it feel like?", "Pain with OPQRST (onset, provocation, quality, region, severity, timing)"],
        ["p", "A headache across my forehead since I woke up. It built up slowly, and it's dull and pressing. Light makes it worse; the dark helps. It's a 5, and not the worst I've had."],
        ["n", "Any vision changes, nausea, stiff neck, fever, weakness, numbness, or falls?", "Associated symptoms"],
        ["p", "A little queasy. None of the rest."],
      ]},
      { title: "General focused assessment", pts: "Recognize cues · 5 pts", lines: [
        ["n", "Where are you, what's today's date, and why are you here?"],
        ["p", "The hospital, [today's date], for this headache."],
        ["say", "Alert and oriented ×4.", "Orientation ×4"],
        ["say", "Alert, skin pink, no cyanosis or diaphoresis.", "Appearance, LOC (level of consciousness), skin color"],
        ["say", "Upper and lower extremities warm and dry bilaterally.", "Temperature & moisture, all 4 limbs"],
        ["say", "I'm cleaning my penlight before I use it.", "Uses equipment correctly"],
        ["say", "Her vital signs match the chart.", "Accurate objective data"]
      ]},
      { title: "Neurological assessment", pts: "Recognize cues · 5 pts", lines: [
        ["say", "Alert, oriented ×4, speech clear with no slurring or word-finding trouble.", "LOC, orientation, speech"],
        ["do", "Dim the lights. Bring the penlight in from the side for each eye, then move your finger toward her nose."],
        ["say", "Pupils 3 mm, equal, round, reactive to light directly and consensually, and accommodating: PERRLA (pupils equal, round, reactive to light and accommodation).", "Pupils: PERRLA"],
        ["n", "Squeeze my fingers with both hands. Now push your feet against my hands like a gas pedal."],
        ["say", "Hand grips and pedal pushes strong and equal, 5 out of 5 bilaterally.", "Hand grips and foot pushes"],
        ["do", "Hold her chin and trace an H about 12 inches from her face."],
        ["say", "EOMs (extraocular movements) intact in all six gazes, no nystagmus: cranial nerves 3, 4, and 6 intact.", "Cranial nerves III, IV, VI"],
        ["n", "Close your eyes. Tell me when you feel me touch you and whether it's the same on both sides."],
        ["say", "Light touch intact and equal bilaterally.", "Light-touch sensation"]
      ]},
      { title: "Analyze cues", pts: "20 pts", lines: [
        ["say", "Normal: HR (heart rate) 78, RR (respiratory rate) 16, temperature 98.6, SpO₂ (oxygen saturation) 97%. Alert and oriented ×4, PERRLA, EOMs intact, equal strength and sensation.", "Identifies normal findings"],
        ["say", "Abnormal: pain 5 out of 10, BP (blood pressure) 132/82 stage 1 hypertension, light sensitivity and mild nausea.", "Identifies abnormal findings"],
        ["say", "With a normal neuro exam, this is acute pain affecting her comfort, and the pain may be raising her BP. A one-sided deficit or pupil change would suggest stroke or rising intracranial pressure.", "Explains why abnormals matter"],
        ["say", "I'd also want a fingerstick glucose, her BP trend, and her headache history, including any recent head injury.", "Identifies additional data needed"],
      ]},
      { title: "Prioritize hypotheses", pts: "20 pts", lines: [
        ["say", "My priority is acute pain. If I'd found any focal deficit, it would become possible stroke, and I'd call a stroke alert and keep her NPO (nothing by mouth).", "States priority problem"],
        ["n", "Dr. Garcia, this is ___, the nursing student caring for Elena Martinez in room ___. She has a headache rated 5 out of 10. She's 63, with acetaminophen 650 mg every 4 hours ordered, and no allergies. Her neuro exam is intact and her BP is 132/82. I'm giving her scheduled acetaminophen and will recheck her pain in an hour. Please call back if you'd like anything else.", "Communicates clearly: SBAR (Situation, Background, Assessment, Recommendation)"],
        ["dr", "Sounds good. Call me if her neuro exam changes or the pain gets worse."],
        ["n", "Okay: call with any neuro change or worsening pain. Thank you."],
      ]},
      { title: "Take action", pts: "10 pts", lines: [
        ["say", "I'm giving the acetaminophen, dimming the lights, offering a cool cloth, and keeping the call light in reach.", "Recommends an intervention / notifies provider"]
      ]},
      { title: "Evaluate outcomes", pts: "20 pts", lines: [
        ["say", "I'll reassess her pain 30 to 60 minutes after the dose, repeat neuro checks, and recheck her BP.", "What to reassess"],
        ["say", "I expect pain at or below her goal, an unchanged neuro exam, and her BP easing.", "Expected outcome"],
        ["say", "If the pain worsens or she has a new deficit, vomiting, stiff neck, or a sudden severe headache, I'll notify the provider right away.", "Whether to escalate"],
        ["say", "Treating the pain and limiting light and noise should relieve the headache, and repeat neuro checks catch anything more serious.", "Sound reasoning"]
      ]},
      { title: "Before you leave", pts: "Safety", lines: [
        ["say", "Bed in the lowest position, 2 side rails up, call light and tray table in reach. Performing hand hygiene on exit.", "Leaves room safe"]
      ]},
      { title: "NURA 320 med pass: acetaminophen", pts: "Five rights · priority", lines: [
        ["n", "Before I give your medicine, can you tell me your name and date of birth again?"],
        ["p", "Elena Martinez. November 20th, 1963."],
        ["say", "Name and date of birth match the armband and the MAR (medication administration record).", "Right patient"],
        ["say", "Acetaminophen (Tylenol), and the label matches the MAR.", "Right drug"],
        ["say", "650 mg, matching the order.", "Right dose"],
        ["say", "PO (by mouth), as ordered.", "Right route"],
        ["say", "Every 4 hours. Her last dose was over 4 hours ago, so it's due.", "Right time"],
        ["n", "This is Tylenol for your headache. Take it with a sip of water. Call me if it isn't better in about an hour."],
        ["do", "Hand her the tablet with water and stay until she has swallowed it."],
        ["say", "I'll recheck her pain score in 30 to 60 minutes."]
      ]}
    ]
  },

  bennett: {
    cast: "You are the nurse. Your partner plays Michael Bennett, then the covering provider on the phone.",
    phases: [
      { title: "Safety & professionalism", pts: "Recognize cues · 9 pts", lines: [
        ["do", "Knock and wait for permission. As you enter, scan for clutter, bed height, and non-skid socks.", "Knock and ask to enter"],
        ["n", "Knock knock. Good morning, may I come in?"],
        ["p", "Sure, come in."],
        ["say", "I'm performing hand hygiene.", "Hand hygiene"],
        ["n", "Good morning, Mr. Bennett. I'm ___, the nursing student caring for you. I'll take about 10 minutes to ask about your pain, look at your joints, and see how you move. Is that all right? Thank you.", "AIDET (Acknowledge, Introduce, Duration, Explanation, Thank you)"],
        ["n", "I'll close the curtain for your privacy.", "HIPAA (Health Insurance Portability and Accountability Act) / privacy"],
        ["n", "Can you tell me your full name and date of birth?"],
        ["p", "Michael Bennett. November 20th, 1955."],
        ["say", "Name and DOB (date of birth) match the armband and chart. No attending is listed, so I'll find the covering provider.", "Verify armband: name + DOB"],
        ["n", "Any allergies to medicines, foods, or latex?"],
        ["p", "No."],
        ["say", "No known allergies, no allergy band, no isolation precautions.", "Allergies & precautions"],
        ["say", "He is well groomed, calm, speaking clearly, and answering appropriately, and he grimaces when he moves his right leg.", "General appearance, mood, speech"]
      ]},
      { title: "Focused history", pts: "Recognize cues · 1 pt", lines: [
        ["n", "Your pain is charted as a 6. Where is it, when did it start, what makes it better or worse, what does it feel like, and does it spread?", "Pain with OPQRST (onset, provocation, quality, region, severity, timing)"],
        ["p", "My right knee. It's bothered me for years but got worse yesterday after yard work. Walking and stairs make it worse; propping it up helps. It's a deep ache that sometimes grinds, and it stays in the knee. Stiff for about 20 minutes in the morning."],
        ["n", "Any numbness, tingling, fever, or falls?", "Associated symptoms"],
        ["p", "No numbness or fever. I almost fell getting up last night."],
      ]},
      { title: "General focused assessment", pts: "Recognize cues · 5 pts", lines: [
        ["n", "Where are you, what's today's date, and why are you here?"],
        ["p", "The hospital, [today's date], for my knee."],
        ["say", "Alert and oriented ×4.", "Orientation ×4"],
        ["say", "Alert, skin pink, no cyanosis or diaphoresis.", "Appearance, LOC (level of consciousness), skin color"],
        ["say", "Upper and lower extremities warm and dry bilaterally.", "Temperature & moisture, all 4 limbs"],
        ["say", "I'm putting on a gait belt correctly, snug at the waist.", "Uses equipment correctly"],
        ["say", "His vital signs match the chart.", "Accurate objective data"]
      ]},
      { title: "Musculoskeletal assessment", pts: "Recognize cues · 5 pts", lines: [
        ["do", "Expose both knees and compare. Feel for warmth with the back of your hand."],
        ["say", "Right knee mildly swollen compared with the left; no redness, warmth, bruising, or deformity.", "Inspects joint for swelling, redness"],
        ["n", "Bend your right knee as far as is comfortable, then straighten it. Stop if it hurts."],
        ["say", "Right knee flexes to about 90 degrees, limited by pain, with crepitus; the left flexes fully.", "Range of motion"],
        ["say", "Right knee pain 6 out of 10, a deep aching worse with activity, with morning stiffness under 30 minutes.", "Pain: location, quality, intensity, timing"],
        ["do", "Bed low, non-skid socks on, gait belt on. Have him dangle, then stand with your assistance."],
        ["say", "Stands with one assist and favors his right leg with a short stride. He's slightly unsteady, so I won't walk him alone.", "Functional mobility: gait or transfer"],
        ["n", "Wiggle your fingers and toes. Any numbness or tingling?"],
        ["p", "No, they feel fine."],
        ["say", "CMS (circulation, motion, sensation) intact in BUE (bilateral upper extremities) and BLE (bilateral lower extremities): warm, pink, capillary refill under 3 seconds, pulses 2+ and equal, moves and feels all extremities.", "CMS in BUE and BLE"]
      ]},
      { title: "Analyze cues", pts: "20 pts", lines: [
        ["say", "Normal: HR (heart rate) 78, RR (respiratory rate) 16, temperature 98.4, and SpO₂ (oxygen saturation) 97%, so no sign of infection. CMS intact.", "Identifies normal findings"],
        ["say", "Abnormal: pain 6 out of 10, BP (blood pressure) 132/84 stage 1 hypertension, right knee swelling, limited flexion, crepitus, unsteady gait, and a near-fall.", "Identifies abnormal findings"],
        ["say", "Pain limits his movement, and at 71 that raises his risk of falls, stiffness, pressure injury, and blood clots.", "Explains why abnormals matter"],
        ["say", "I'd also want his knee X-ray results, what caused the flare, and his fall history and home mobility aids.", "Identifies additional data needed"],
      ]},
      { title: "Prioritize hypotheses", pts: "20 pts", lines: [
        ["say", "My priority is acute pain impairing physical mobility, with a high fall risk. If his CMS were abnormal, it would become neurovascular compromise.", "States priority problem"],
        ["n", "This is ___, the nursing student caring for Michael Bennett in room ___. He has right knee pain rated 6 out of 10. He's 71, with ibuprofen 400 mg every 4 hours ordered, and no allergies. His knee is swollen with limited flexion; CMS is intact. He's unsteady and nearly fell last night. BP 132/84. I'm giving his scheduled ibuprofen with food. Could we get a PT (physical therapy) consult for his mobility?", "Communicates clearly: SBAR (Situation, Background, Assessment, Recommendation)"],
        ["dr", "Yes, I'll order the PT consult. Keep him on fall precautions."],
        ["n", "Reading back: PT consult and fall precautions. Thank you."],
      ]},
      { title: "Take action", pts: "10 pts", lines: [
        ["say", "I'm giving the ibuprofen with food, elevating his knee with ice, and starting fall precautions: bed low, call light in reach, non-skid socks, and a gait belt with assist for walking.", "Recommends an intervention / notifies provider"]
      ]},
      { title: "Evaluate outcomes", pts: "20 pts", lines: [
        ["say", "I'll reassess his pain 30 to 60 minutes after the dose, plus his range of motion, transfers, CMS, BP, and any stomach symptoms.", "What to reassess"],
        ["say", "I expect pain at or below his goal of 3, safe transfers with help, intact CMS, and no falls.", "Expected outcome"],
        ["say", "If he has new numbness or a cool limb, more swelling, fever, black stools, or less urine, I'll notify the provider.", "Whether to escalate"],
        ["say", "Controlling his pain lets him move safely, and fall precautions protect him while he's unsteady.", "Sound reasoning"]
      ]},
      { title: "Before you leave", pts: "Safety", lines: [
        ["say", "Bed in the lowest position, 2 side rails up, call light and tray table in reach. Performing hand hygiene on exit.", "Leaves room safe"]
      ]},
      { title: "NURA 320 med pass: ibuprofen", pts: "Five rights · priority", lines: [
        ["n", "Before I give your medicine, can you tell me your name and date of birth again?"],
        ["p", "Michael Bennett. November 20th, 1955."],
        ["say", "Name and date of birth match the armband and the MAR (medication administration record).", "Right patient"],
        ["say", "Ibuprofen (Motrin), and the label matches the MAR.", "Right drug"],
        ["say", "400 mg, matching the order.", "Right dose"],
        ["say", "PO (by mouth), with food, as ordered.", "Right route"],
        ["say", "Every 4 hours. His last dose was over 4 hours ago, so it's due.", "Right time"],
        ["n", "This is ibuprofen for your knee pain and swelling. Take it with your breakfast and a full glass of water. Call me before you get up."],
        ["do", "Hand him the tablet with water and food and stay until he has swallowed it."],
        ["say", "I'll recheck his pain in 30 to 60 minutes."]
      ]}
    ]
  }
};
