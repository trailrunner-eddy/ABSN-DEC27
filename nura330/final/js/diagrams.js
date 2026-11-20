/* Original tap-to-learn diagrams for the Health Assessment Final's new modules (drawn for this site, safe to publish).
   Each spot: x/y in the diagram's viewBox, what it is, what you assess there, and linked topics. */
(function () {
  var LIMBS = "M95 102 L72 172 L58 250 M205 102 L228 172 L242 250 M124 232 L118 330 L112 418 M176 232 L182 330 L188 418";
  var BODY =
    '<path class="dg-bodyline" d="' + LIMBS + '"/><path class="dg-bodyfill" d="' + LIMBS + '"/>' +
    '<ellipse class="dg-body" cx="106" cy="424" rx="16" ry="8"/><ellipse class="dg-body" cx="194" cy="424" rx="16" ry="8"/>' +
    '<rect class="dg-body" x="137" y="66" width="26" height="30" rx="6"/>' +
    '<path class="dg-body" d="M90 98 Q150 84 210 98 L216 238 Q150 252 84 238Z"/>' +
    '<circle class="dg-body" cx="150" cy="42" r="28"/>';

  var D = [
  /* ---------- GI ---------- */
  { id: "abdquad", kind: "structure", topic: "giap", sys: "gi", title: "Abdominal quadrants & where to listen", view: "0 0 400 400",
    svg:
      '<path class="dg-body" d="M80 40 Q200 20 320 40 L340 330 Q200 380 60 330Z"/>' +
      '<path class="dg-liver" d="M95 85 Q170 70 205 95 Q190 150 120 160 Q95 130 95 85Z"/>' +
      '<path class="dg-sac" d="M230 90 Q290 80 300 120 Q290 165 240 160 Q215 130 230 90Z"/>' +
      '<path class="dg-tube" d="M120 300 Q110 240 125 200 Q200 185 275 200 Q292 240 280 285 Q260 310 240 300"/>' +
      '<circle class="dg-tip" cx="128" cy="292" r="7"/>' +
      '<ellipse class="dg-bladder" cx="200" cy="322" rx="34" ry="20"/>' +
      '<path class="dg-arrow" d="M200 40 L200 360 M70 200 L330 200"/>' +
      '<circle class="dg-lnode" cx="200" cy="200" r="7"/>' +
      '<text class="dg-lbl" x="200" y="18">Client’s right is on YOUR left</text>' +
      '<text class="dg-lbl" x="120" y="60">RUQ</text><text class="dg-lbl" x="280" y="60">LUQ</text>' +
      '<text class="dg-lbl" x="105" y="350">RLQ</text><text class="dg-lbl" x="295" y="350">LLQ</text>',
    spots: [
      { x: 140, y: 270, label: "1 · RLQ: start here", text: "Bowel sounds start in the RLQ (diaphragm). Appendix and cecum live here; RLQ pain may suggest the appendix.", topics: ["bowel", "giap"] },
      { x: 150, y: 120, label: "2 · RUQ", text: "Liver, gallbladder, right kidney. RUQ pain may suggest the gallbladder. Dullness over the liver is expected.", topics: ["giap", "palpperc"] },
      { x: 262, y: 125, label: "3 · LUQ", text: "Stomach, spleen, pancreas. Tympany over the gas-filled stomach.", topics: ["giap", "palpperc"] },
      { x: 262, y: 270, label: "4 · LLQ", text: "Descending and sigmoid colon. Stool can make this area dull.", topics: ["giap", "bowel"] },
      { x: 200, y: 110, label: "Epigastric region", text: "Upper middle: stomach, pancreas. J.M.'s pain was here (think GERD, gastritis, ulcer, especially with NSAIDs).", topics: ["gicase", "gihx"] },
      { x: 200, y: 200, label: "Umbilicus & aorta", text: "Inspect position, redness, bulging (hernia). A faint aortic pulsation can be normal in thin people; a prominent pulsatile mass means don't palpate or percuss: notify. Listen for a bruit with the bell.", topics: ["giorder", "bowel"] },
      { x: 200, y: 330, label: "Suprapubic (hypogastric)", text: "Include it in palpation. Fullness here may be urinary retention: consider a bladder scan.", topics: ["palpperc"] }
    ] },

  { id: "cvaback", topic: "cva", sys: "gi", title: "CVA tenderness (back view)", view: "0 0 300 320",
    svg:
      '<path class="dg-body" d="M60 30 Q150 10 240 30 L250 290 Q150 310 50 290Z"/>' +
      '<path class="dg-bone" d="M150 30 L150 300" stroke-width="10"/>' +
      '<path class="dg-rib" d="M150 150 Q100 160 70 190 M150 150 Q200 160 230 190 M150 130 Q95 138 64 165 M150 130 Q205 138 236 165"/>' +
      '<ellipse class="dg-kidney" cx="110" cy="195" rx="22" ry="34"/><ellipse class="dg-kidney" cx="190" cy="195" rx="22" ry="34"/>' +
      '<text class="dg-lbl" x="150" y="316">Client sitting, seen from behind</text>',
    spots: [
      { x: 118, y: 168, label: "Left CVA", text: "Where the 12th rib meets the spine. One hand flat here, strike it gently with the other fist. Assess both sides.", topics: ["cva"] },
      { x: 182, y: 168, label: "Right CVA", text: "Same technique on the other side. Tenderness may mean kidney infection; with fever and dysuria think pyelonephritis.", topics: ["cva"] },
      { x: 150, y: 250, label: "Spine", text: "The CVA sits at the angle between the 12th rib and the vertebral column.", topics: ["cva"] }
    ] },

  /* ---------- Neuro ---------- */
  { id: "brainlobes", kind: "structure", topic: "neuroap", sys: "neuro", title: "The brain: lobes, cerebellum, brainstem", view: "0 0 420 340",
    svg:
      '<path d="M70 190 Q60 90 170 60 Q220 50 230 70 L210 190 Q140 210 70 190Z" style="fill:#c9d8f0;stroke:#5b6b8c;stroke-width:2"/>' +
      '<path d="M230 70 Q300 70 320 120 L270 170 L210 190Z" style="fill:#dccdf2;stroke:#5b6b8c;stroke-width:2"/>' +
      '<path d="M320 120 Q360 170 340 220 L280 220 L270 170Z" style="fill:#f3dcc4;stroke:#5b6b8c;stroke-width:2"/>' +
      '<path d="M110 205 Q180 235 280 220 Q270 260 200 262 Q130 258 110 205Z" style="fill:#cfe8d4;stroke:#5b6b8c;stroke-width:2"/>' +
      '<path d="M270 232 Q330 230 340 262 Q320 292 270 282 Q250 260 270 232Z" style="fill:#f2c6c6;stroke:#8c5b5b;stroke-width:2"/>' +
      '<path d="M222 250 Q232 290 232 335 L248 335 Q248 290 240 250Z" style="fill:#e6d3a8;stroke:#8c7a5b;stroke-width:2"/>' +
      '<text class="dg-lbl" x="70" y="40">Front (face) ←</text>',
    spots: [
      { x: 140, y: 130, label: "Frontal lobe", text: "Movement, judgment, speech. Damage can change personality and voluntary movement.", topics: ["neuroap"] },
      { x: 265, y: 110, label: "Parietal lobe", text: "Sensation. Decreased light touch on one side can come from the opposite parietal lobe.", topics: ["neuroap"] },
      { x: 315, y: 185, label: "Occipital lobe", text: "Vision. BE-FAST's E (sudden vision loss) can point here.", topics: ["neuroap", "befast"] },
      { x: 190, y: 238, label: "Temporal lobe", text: "Hearing and memory.", topics: ["neuroap"] },
      { x: 300, y: 258, label: "Cerebellum", text: "Balance, posture, smooth voluntary movement. Tested with finger-to-nose, rapid alternating movements, gait, and Romberg. Ataxia = cerebellar problem.", topics: ["neuroap", "dtr"] },
      { x: 236, y: 300, label: "Brainstem → spinal cord", text: "Midbrain, pons, medulla: breathing, heart rate, consciousness, cranial nerves. Pupil and breathing changes are late, dangerous signs.", topics: ["neuroap", "gcs"] },
      { x: 120, y: 170, label: "Left hemisphere stroke", text: "Motor pathways cross: a left-hemisphere stroke causes RIGHT-sided weakness, often with aphasia (as in Mr. Alvarez).", topics: ["stroke"] }
    ] },

  { id: "cnface", topic: "cnneuro", sys: "neuro", title: "Cranial nerves: what you test where", view: "0 0 320 380",
    svg:
      '<ellipse class="dg-body" cx="160" cy="150" rx="90" ry="115"/>' +
      '<path class="dg-body" d="M120 255 L118 300 Q60 310 30 350 L290 350 Q260 310 202 300 L200 255Z"/>' +
      '<ellipse class="dg-eyewhite" cx="125" cy="130" rx="18" ry="10"/><ellipse class="dg-eyewhite" cx="195" cy="130" rx="18" ry="10"/>' +
      '<circle class="dg-pupil" cx="125" cy="130" r="5"/><circle class="dg-pupil" cx="195" cy="130" r="5"/>' +
      '<path class="dg-lip" d="M128 210 Q160 228 192 210"/>' +
      '<path class="dg-tongue" d="M150 214 Q160 236 170 214Z"/>' +
      '<path class="dg-feature" d="M160 135 L150 180 L170 180"/>' +
      '<ellipse class="dg-body" cx="68" cy="150" rx="10" ry="22"/><ellipse class="dg-body" cx="252" cy="150" rx="10" ry="22"/>',
    spots: [
      { x: 160, y: 168, label: "CN I · Olfactory", text: "Smell: identify a familiar scent, one nostril at a time, eyes closed.", topics: ["cnneuro"] },
      { x: 125, y: 110, label: "CN II · Optic", text: "Visual acuity (OD, OS, OU) and visual fields; with III, pupil reaction to light.", topics: ["cnneuro"] },
      { x: 195, y: 110, label: "CN III, IV, VI", text: "Eye movements: trace a large H, head still. CN III also constricts the pupil and lifts the eyelid. (CN IV trochlear, CN VI abducens.)", topics: ["cnneuro"] },
      { x: 100, y: 185, label: "CN V · Trigeminal", text: "Facial sensation; clench teeth while you feel the temporal and masseter muscles.", topics: ["cnneuro"] },
      { x: 215, y: 200, label: "CN VII · Facial", text: "Raise brows, frown, close eyes tightly, smile, puff cheeks. A one-sided droop with a new onset = stroke alert.", topics: ["cnneuro", "stroke"] },
      { x: 252, y: 150, label: "CN VIII · Vestibulocochlear", text: "Hearing (finger rub, whispered voice) and balance.", topics: ["cnneuro"] },
      { x: 160, y: 270, label: "CN IX & X", text: "Gag (warn first), swallow, voice; “Ah” and the uvula and soft palate rise. Weak gag/swallow = aspiration risk: stay NPO.", topics: ["cnneuro", "stroke"] },
      { x: 70, y: 330, label: "CN XI · Spinal accessory", text: "Shrug shoulders and turn the head against light resistance.", topics: ["cnneuro"] },
      { x: 160, y: 240, label: "CN XII · Hypoglossal", text: "Stick out the tongue: it should be midline. Deviation is unexpected.", topics: ["cnneuro"] }
    ] },

  { id: "dtrbody", topic: "dtr", sys: "neuro", title: "Deep tendon reflexes: where to strike", view: "0 0 300 440",
    svg: BODY,
    spots: [
      { x: 80, y: 160, label: "Biceps · C5–C6", text: "Thumb on the biceps tendon in the antecubital fossa; strike your thumb. Watch for elbow flexion.", topics: ["dtr"] },
      { x: 232, y: 222, label: "Brachioradialis · C5–C6", text: "Strike the radius about 2–3 inches above the wrist.", topics: ["dtr"] },
      { x: 120, y: 330, label: "Patellar · L2–L4", text: "Strike the tendon just below the kneecap with the leg hanging relaxed.", topics: ["dtr"] },
      { x: 190, y: 410, label: "Achilles · S1–S2", text: "Dorsiflex the foot slightly and strike the tendon above the heel.", topics: ["dtr"] },
      { x: 150, y: 160, label: "Grading 0–4+", text: "0 absent, 1+ diminished, 2+ normal, 3+ brisk (may be normal), 4+ hyperactive with clonus. Expected: 2+ and symmetric.", topics: ["dtr", "neurofind"] }
    ] },
  /* ---------- MSK ---------- */
  { id: "mskjoints", kind: "structure", topic: "mskap", sys: "msk", title: "Joints head to toe", view: "0 0 300 440",
    svg: BODY,
    spots: [
      { x: 150, y: 82, label: "Neck · cervical spine", text: "Skull on 7 cervical vertebrae: nodding and rotation. Expected: head erect, aligned with the trunk. Test flexion, extension, hyperextension, lateral flexion, rotation.", topics: ["mskap", "mskregions"] },
      { x: 94, y: 104, label: "Shoulder · ball and socket", text: "Greatest range of motion, least stability. A flattened contour after a fall suggests dislocation; pain on abduction suggests subacromial bursa trouble.", topics: ["mskap", "mskregions"] },
      { x: 80, y: 160, label: "Elbow · hinge", text: "Humerus, radius, ulna. Expected: hollows beside the olecranon. Effusion (gout), nodules (RA), or a displaced olecranon (dislocation) are unexpected.", topics: ["mskap", "mskregions"] },
      { x: 238, y: 236, label: "Wrist and hand · condyloid + 27 bones", text: "Fine movement and grip. Unexpected: swelling or nodules (arthritis), ulnar deviation, ganglion cyst. Test opposition and grip.", topics: ["mskap", "mskregions"] },
      { x: 150, y: 175, label: "Spine", text: "Cervical and lumbar curves concave, thoracic convex. Unexpected: kyphosis, lordosis, scoliosis (forward-bend test).", topics: ["mskap", "mskregions"] },
      { x: 116, y: 250, label: "Hip · ball and socket", text: "Femoral head in the acetabulum: wide motion with weight-bearing stability. Iliac crests and gluteal folds should be level. Lecture case: hip fracture after a fall.", topics: ["mskap", "mskcase"] },
      { x: 122, y: 330, label: "Knee · hinge", text: "Femur, tibia, patella; cruciate and collateral ligaments and menisci. Expected hollows beside the patella; a boggy knee or crepitus with pain is unexpected.", topics: ["mskap", "mskregions"] },
      { x: 194, y: 408, label: "Ankle and foot · hinge", text: "Tibia, fibula, talus plus 26 foot bones. Test dorsiflexion, plantar flexion, inversion, eversion. Unexpected: hallux valgus, hammertoes, calluses.", topics: ["mskap", "mskregions", "mskexam"] }
    ] }
  ];
  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
