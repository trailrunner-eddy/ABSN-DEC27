/* Original tap-to-learn diagrams for Health Assessment Exam 1 (drawn for this site, safe to publish).
   Each spot: x/y in the diagram's viewBox, what it is, what you assess there, and linked topics. */
(function () {
  /* A simple standing body, front view, centered at x=150 in a 300 × 440 box */
  var LIMBS = "M95 102 L72 172 L58 250 M205 102 L228 172 L242 250 M124 232 L118 330 L112 418 M176 232 L182 330 L188 418";
  var BODY =
    '<path class="dg-bodyline" d="' + LIMBS + '"/><path class="dg-bodyfill" d="' + LIMBS + '"/>' +
    '<ellipse class="dg-body" cx="106" cy="424" rx="16" ry="8"/><ellipse class="dg-body" cx="194" cy="424" rx="16" ry="8"/>' +
    '<rect class="dg-body" x="137" y="66" width="26" height="30" rx="6"/>' +
    '<path class="dg-body" d="M90 98 Q150 84 210 98 L216 238 Q150 252 84 238Z"/>' +
    '<circle class="dg-body" cx="150" cy="42" r="28"/>';

  /* Lungs, front view, in a 400 × 380 box. The client's right lung is on the viewer's left. */
  var RL = "M184 118 C150 96 100 108 80 170 C64 230 62 300 84 348 C120 358 160 350 184 336 Z";
  var LL = "M216 118 C250 96 300 108 320 170 C336 230 338 300 316 348 C290 358 262 352 250 340 C244 316 232 300 216 292 Z";
  function lungs(p) {
    return '<defs><clipPath id="' + p + 'R"><path d="' + RL + '"/></clipPath><clipPath id="' + p + 'L"><path d="' + LL + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + p + 'R)"><rect class="dg-lobe l" x="40" y="80" width="160" height="290"/>' +
      '<path class="dg-lobe m" d="M40 196 L200 196 L200 370 L150 370 L40 226Z"/><rect class="dg-lobe u" x="40" y="80" width="160" height="116"/></g>' +
      '<g clip-path="url(#' + p + 'L)"><rect class="dg-lobe l" x="200" y="80" width="160" height="290"/>' +
      '<path class="dg-lobe u" d="M200 80 L360 80 L360 236 L262 370 L200 370Z"/></g>' +
      '<path class="dg-pleura" d="' + RL + '"/><path class="dg-pleura" d="' + LL + '"/>' +
      '<path class="dg-fissure" d="M80 196 L184 196 M72 228 L150 352 M330 232 L262 352"/>' +
      '<rect class="dg-trachea" x="188" y="18" width="24" height="96" rx="6"/>' +
      '<path class="dg-trachea-r" d="M190 34 L210 34 M190 50 L210 50 M190 66 L210 66 M190 82 L210 82 M190 98 L210 98"/>' +
      '<path class="dg-airway-l" d="M200 112 L162 150 M200 112 L238 150"/>' +
      '<path class="dg-airway-s" d="M162 150 L132 150 M162 150 L150 200 M150 200 L120 250 M150 200 L160 270 M238 150 L270 150 M238 150 L250 200 M250 200 L282 252 M250 200 L246 272"/>' +
      '<path class="dg-muscle" d="M58 368 C130 330 270 330 342 368"/>' +
      '<text class="dg-lbl sm" x="46" y="30">Client\'s right</text><text class="dg-lbl sm" x="356" y="30">Client\'s left</text>';
  }

  /* Front of the chest, in a 360 × 400 box */
  var RIBS = "";
  for (var i = 0; i < 6; i++) {
    var y = 128 + i * 30;
    RIBS += '<path class="dg-rib" d="M164 ' + y + ' C130 ' + (y - 6) + ' 96 ' + (y + 4) + ' ' + (78 + i * 2) + ' ' + (y + 26) + '"/>' +
      '<path class="dg-rib" d="M196 ' + y + ' C230 ' + (y - 6) + ' 264 ' + (y + 4) + ' ' + (282 - i * 2) + ' ' + (y + 26) + '"/>';
  }
  var CHEST =
    '<rect class="dg-body" x="148" y="10" width="64" height="84" rx="10"/>' +
    '<path class="dg-body" d="M70 96 Q180 74 290 96 L304 380 Q180 398 56 380Z"/>' + RIBS +
    '<path class="dg-clav" d="M88 104 C128 94 156 100 170 106 M272 104 C232 94 204 100 190 106"/>' +
    '<rect class="dg-sternum" x="166" y="108" width="28" height="150" rx="8"/><path class="dg-sternum" d="M170 258 L190 258 L180 280Z"/>';

  /* Back of the chest, in a 360 × 420 box */
  var BACK =
    '<rect class="dg-body" x="150" y="8" width="60" height="60" rx="10"/>' +
    '<path class="dg-body" d="M66 70 Q180 50 294 70 L306 400 Q180 414 54 400Z"/>' +
    '<path class="dg-suture" d="M180 60 L180 404"/>' +
    '<ellipse class="dg-bone" cx="118" cy="150" rx="34" ry="56" transform="rotate(8 118 150)"/>' +
    '<ellipse class="dg-bone" cx="242" cy="150" rx="34" ry="56" transform="rotate(-8 242 150)"/>' +
    '<path class="dg-bracket" d="M296 330 L312 330"/><text class="dg-lbl sm" x="330" y="334">T10</text>';

  var D = [
  /* ---------- Mod 1: Intro ---------- */
  { id: "cjmm", kind: "structure", topic: "judgment", sys: "intro", title: "Where health assessment fits in clinical judgment", view: "0 0 480 280",
    svg:
      '<rect class="dg-box hot" x="20" y="40" width="130" height="64" rx="12"/><rect class="dg-box hot" x="175" y="40" width="130" height="64" rx="12"/><rect class="dg-box" x="330" y="40" width="130" height="64" rx="12"/>' +
      '<rect class="dg-box" x="330" y="170" width="130" height="64" rx="12"/><rect class="dg-box" x="175" y="170" width="130" height="64" rx="12"/><rect class="dg-box" x="20" y="170" width="130" height="64" rx="12"/>' +
      '<text class="dg-lbl" x="85" y="70">Recognize</text><text class="dg-lbl" x="85" y="88">cues</text>' +
      '<text class="dg-lbl" x="240" y="70">Analyze</text><text class="dg-lbl" x="240" y="88">cues</text>' +
      '<text class="dg-lbl" x="395" y="70">Prioritize</text><text class="dg-lbl" x="395" y="88">hypotheses</text>' +
      '<text class="dg-lbl" x="395" y="200">Generate</text><text class="dg-lbl" x="395" y="218">solutions</text>' +
      '<text class="dg-lbl" x="240" y="200">Take</text><text class="dg-lbl" x="240" y="218">action</text>' +
      '<text class="dg-lbl" x="85" y="200">Evaluate</text><text class="dg-lbl" x="85" y="218">outcomes</text>' +
      '<path class="dg-arrow thin" d="M152 72 L172 72 M307 72 L327 72 M395 106 L395 166 M328 202 L308 202 M173 202 L153 202 M85 168 L85 108"/>' +
      '<text class="dg-lbl sm" x="162" y="26">Health assessment trains these two</text>' +
      '<text class="dg-lbl sm" x="240" y="266">Then the loop starts again: reassess</text>',
    spots: [
      { x: 30, y: 52, label: "Recognize cues", text: "Gather the story and the exam: a structured health history (subjective) and a systematic physical exam (objective). Health assessment is mostly practice at this step.", topics: ["judgment", "data"] },
      { x: 185, y: 52, label: "Analyze cues", text: "Decide what is expected and what isn't for this person, then connect related cues. Pathophysiology explains why the cues happen.", topics: ["judgment", "findings"] },
      { x: 340, y: 52, label: "Prioritize hypotheses", text: "Which problem is most urgent? The doorway scan and ABCs help here. You can't prioritize well without accurate cues.", topics: ["judgment", "doorway"] },
      { x: 340, y: 182, label: "Generate solutions", text: "Choose interventions and expected outcomes. Pharmacology supports this step.", topics: ["judgment"] },
      { x: 185, y: 182, label: "Take action", text: "Carry out the plan safely. Fundamentals supports this step.", topics: ["judgment"] },
      { x: 30, y: 182, label: "Evaluate outcomes", text: "Reassess after the intervention. That is also one of the six purposes of health assessment: evaluating care.", topics: ["judgment", "purpose"] }
    ] },

  { id: "hands", topic: "inspect", sys: "intro", title: "Which part of the hand to use", view: "0 0 440 280",
    svg:
      /* palm up, left */
      '<rect class="dg-body" x="50" y="120" width="120" height="120" rx="30"/>' +
      '<rect class="dg-body" x="54" y="40" width="24" height="96" rx="12"/><rect class="dg-body" x="82" y="24" width="24" height="110" rx="12"/><rect class="dg-body" x="110" y="28" width="24" height="106" rx="12"/><rect class="dg-body" x="138" y="46" width="22" height="90" rx="11"/>' +
      '<rect class="dg-body" x="168" y="140" width="22" height="70" rx="11" transform="rotate(-35 179 175)"/>' +
      '<circle class="dg-redden" cx="66" cy="52" r="9"/><circle class="dg-redden" cx="94" cy="36" r="9"/><circle class="dg-redden" cx="122" cy="40" r="9"/><circle class="dg-redden" cx="149" cy="58" r="8"/>' +
      '<path class="dg-node" d="M50 170 L50 236 Q50 240 56 240 L64 240 L64 160Z"/>' +
      '<text class="dg-lbl" x="110" y="270">Palm side</text>' +
      /* back of hand, right */
      '<rect class="dg-body" x="270" y="120" width="120" height="120" rx="30"/>' +
      '<rect class="dg-body" x="362" y="40" width="24" height="96" rx="12"/><rect class="dg-body" x="334" y="24" width="24" height="110" rx="12"/><rect class="dg-body" x="306" y="28" width="24" height="106" rx="12"/><rect class="dg-body" x="280" y="46" width="22" height="90" rx="11"/>' +
      '<rect class="dg-body" x="250" y="140" width="22" height="70" rx="11" transform="rotate(35 261 175)"/>' +
      '<rect class="dg-band z3" x="284" y="134" width="92" height="92" rx="22" opacity=".55"/>' +
      '<text class="dg-lbl" x="330" y="270">Back (dorsal) side</text>',
    spots: [
      { x: 94, y: 70, label: "Finger pads (palmar)", text: "The most tactile nerve endings. Use them for fine discrimination: texture, moisture, masses or lumps, and pulses.", topics: ["inspect"] },
      { x: 330, y: 180, label: "Back of the hand (dorsal)", text: "Thinner skin, more sensitive to temperature. Use it to feel whether skin is warm, feverish, cool, or cold and clammy.", topics: ["inspect"] },
      { x: 40, y: 204, label: "Ulnar edge (beyond the lectures)", text: "The pinky-side edge of the hand and palm is often used to feel vibration, like tactile fremitus. It isn't on the slide, but many textbooks teach it.", topics: ["inspect"] },
      { x: 220, y: 40, label: "Inspect before you touch", text: "Look, listen, and smell first, then palpate to confirm. Explain what you'll do and get consent before touching.", topics: ["inspect", "intro2"] }
    ] },

  { id: "percmap", topic: "percuss", sys: "intro", title: "Percussion sounds over the torso", view: "0 0 300 440",
    svg: BODY +
      '<path class="dg-alv-air" d="M146 110 C120 104 104 118 100 150 L100 196 L146 196Z"/>' +
      '<path class="dg-alv-air" d="M154 110 C180 104 196 118 200 150 L200 178 L154 178Z"/>' +
      '<path class="dg-heart-outline" d="M146 150 C160 140 186 146 190 166 C192 186 174 196 160 200 C150 196 140 184 146 150Z"/>' +
      '<path class="dg-liver" d="M98 198 L162 198 C160 214 140 226 98 224Z"/>' +
      '<ellipse class="dg-pleura-air" cx="182" cy="206" rx="20" ry="16"/>',
    spots: [
      { x: 118, y: 150, label: "Resonance (lungs)", text: "A clear, hollow sound over healthy, air-filled lung. Expected over the lung fields.", topics: ["percuss"] },
      { x: 168, y: 170, label: "Dullness (heart)", text: "A soft, deadened thud over solid tissue such as the heart.", topics: ["percuss"] },
      { x: 120, y: 212, label: "Dullness (liver)", text: "Solid organ = dull. Dullness over a lung field is abnormal: fluid, consolidation, or a mass where air should be.", topics: ["percuss"] },
      { x: 186, y: 206, label: "Tympany (stomach)", text: "High-pitched and drum-like over the air-filled stomach and bowel.", topics: ["percuss"] },
      { x: 240, y: 60, label: "Stethoscope basics", text: "Earpieces angled toward your nose. Chest piece on bare skin. Diaphragm (pressed firmly) for high-pitched sounds; bell (rested lightly) for low-pitched sounds. Abdomen order: inspect, auscultate, percuss, palpate.", topics: ["percuss"] }
    ] },

  /* ---------- Mod 2: General survey & history ---------- */
  { id: "gsperson", kind: "structure", topic: "gs", sys: "survey", title: "What the general survey notices", view: "0 0 300 440",
    svg: BODY +
      '<path class="dg-arrow dash" d="M20 20 L20 120"/><text class="dg-lbl sm" x="36" y="14">Door</text>',
    spots: [
      { x: 150, y: 36, label: "Appearance", text: "Apparent age vs. stated age, skin color, facial features and symmetry, hygiene, and dress that fits the weather and setting. Describe; don't judge.", topics: ["gs", "findings"] },
      { x: 186, y: 58, label: "Behavior: speech, mood, affect", text: "Facial expression, eye contact, speech (clear, slurred, very fast or slow), and affect. Mood is what they tell you; affect is what you see.", topics: ["gs"] },
      { x: 150, y: 160, label: "Body structure", text: "Posture, symmetry, stature, nutrition. Positioning is a cue: leaning forward, guarding, or unable to lie flat can mean pain, weakness, or breathing trouble.", topics: ["gs", "doorway"] },
      { x: 112, y: 360, label: "Mobility", text: "Gait, balance, range of motion, transfers, assistive devices. Staggering, shuffling, or unsafe transfers need follow-up and fall precautions.", topics: ["gs"] },
      { x: 30, y: 70, label: "Doorway scan", text: "Starts at the knock. Does this person look immediately unstable? Responsiveness, breathing, color, distress. If yes, stop and prioritize ABCs.", topics: ["doorway", "intro2"] },
      { x: 250, y: 240, label: "Vital signs & pain", text: "The slide adds vital signs, measurements, pain, signs of distress, and signs of violence to the survey.", topics: ["vitals", "abuse"] }
    ] },

  /* ---------- Mod 3: Respiratory ---------- */
  { id: "lungs", kind: "structure", topic: "respap", sys: "resp", title: "Airway and lung lobes (front view)", view: "0 0 400 390",
    svg: lungs("e1lg") +
      '<circle class="dg-alv-sm" cx="356" cy="64" r="8"/><circle class="dg-alv-sm" cx="370" cy="74" r="8"/><circle class="dg-alv-sm" cx="356" cy="82" r="8"/><circle class="dg-alv-sm" cx="342" cy="74" r="8"/>' +
      '<path class="dg-airway-s" d="M320 50 L346 70"/>',
    spots: [
      { x: 200, y: 64, label: "Trachea (lower airway starts here)", text: "Upper airway (nose, mouth, pharynx, larynx) filters, warms, and humidifies air. Lower airway: trachea → bronchi → bronchioles → alveoli. Bronchial sounds are heard over the trachea.", topics: ["respap", "normalbs"] },
      { x: 130, y: 150, label: "Right upper lobe", text: "The right lung has 3 lobes. The horizontal fissure (about the 4th rib in front) separates the upper and middle lobes.", topics: ["respap"] },
      { x: 140, y: 252, label: "Right middle lobe", text: "Heard best in front and at the side. It's missed if you skip the lateral fields.", topics: ["respap", "auscult"] },
      { x: 92, y: 310, label: "Right lower lobe", text: "Mostly posterior. Crackles from pneumonia or fluid often show up first in the lower lobes, so listen down to T10 in back.", topics: ["respap", "advbs"] },
      { x: 266, y: 176, label: "Left upper lobe", text: "The left lung has only 2 lobes, with a notch to make room for the heart.", topics: ["respap"] },
      { x: 312, y: 306, label: "Left lower lobe", text: "Separated by the oblique fissure; mostly heard from the back.", topics: ["respap"] },
      { x: 356, y: 100, label: "Alveoli", text: "Tiny air sacs where O₂ and CO₂ exchange. Fluid here makes crackles.", topics: ["respap", "advbs"] },
      { x: 200, y: 346, label: "Diaphragm", text: "The primary breathing muscle: contracts and moves down on inspiration. Accessory muscles (SCM, scalenes, trapezius) help only when breathing is hard.", topics: ["respap", "inspect3"] },
      { x: 66, y: 260, label: "Pleura", text: "Two thin membranes that let the lungs glide. Inflamed pleura grate (friction rub) and cause sharp pleuritic pain.", topics: ["respap", "advbs"] }
    ] },

  { id: "retractions", topic: "inspect3", sys: "resp", title: "Where retractions pull in", view: "0 0 360 400",
    svg: CHEST +
      '<ellipse class="dg-redden" cx="180" cy="100" rx="13" ry="8"/>' +
      '<ellipse class="dg-redden" cx="118" cy="90" rx="24" ry="7"/><ellipse class="dg-redden" cx="242" cy="90" rx="24" ry="7"/>' +
      '<ellipse class="dg-redden" cx="122" cy="174" rx="22" ry="6" transform="rotate(14 122 174)"/><ellipse class="dg-redden" cx="238" cy="174" rx="22" ry="6" transform="rotate(-14 238 174)"/>' +
      '<ellipse class="dg-redden" cx="180" cy="290" rx="14" ry="9"/>' +
      '<ellipse class="dg-redden" cx="116" cy="322" rx="30" ry="8" transform="rotate(-30 116 322)"/><ellipse class="dg-redden" cx="244" cy="322" rx="30" ry="8" transform="rotate(30 244 322)"/>' +
      '<text class="dg-lbl sm" x="300" y="380">Shaded = where skin pulls in</text>',
    spots: [
      { x: 180, y: 74, label: "Suprasternal (tracheal tug)", text: "Skin pulls in above the sternum, in the middle of the neck. Supra = above.", topics: ["inspect3"] },
      { x: 268, y: 72, label: "Supraclavicular", text: "Skin pulls in above the clavicles.", topics: ["inspect3"] },
      { x: 92, y: 196, label: "Intercostal", text: "Skin pulls in between the ribs.", topics: ["inspect3"] },
      { x: 180, y: 316, label: "Substernal", text: "Skin pulls in below the sternum, at the xiphoid. (One lecture slide's text calls this “above the sternum,” but that's suprasternal; the slide's own diagram shows it below.)", topics: ["inspect3"] },
      { x: 84, y: 346, label: "Subcostal", text: "Skin pulls in just below the rib cage.", topics: ["inspect3"] },
      { x: 300, y: 200, label: "Chart the location", text: "Retractions mean high work of breathing. Document which type and where (“intercostal and subcostal retractions”), plus RR, SpO₂, and whether the client can speak in full sentences.", topics: ["inspect3", "respflags"] }
    ] },

  { id: "apratio", topic: "chest", sys: "resp", title: "Chest shape from above: normal vs. barrel", view: "0 0 460 260",
    svg:
      '<ellipse class="dg-chest" cx="120" cy="130" rx="96" ry="48"/>' +
      '<circle class="dg-chest" cx="340" cy="130" r="74"/>' +
      '<rect class="dg-sternum" x="110" y="76" width="20" height="10" rx="3"/><circle class="dg-bone" cx="120" cy="172" r="7"/>' +
      '<rect class="dg-sternum" x="330" y="50" width="20" height="10" rx="3"/><circle class="dg-bone" cx="340" cy="198" r="7"/>' +
      '<path class="dg-arrow thin" d="M120 90 L120 168 M30 130 L210 130"/>' +
      '<path class="dg-arrow thin" d="M340 64 L340 196 M270 130 L410 130"/>' +
      '<text class="dg-lbl big" x="120" y="222">1 : 2</text><text class="dg-lbl big" x="340" y="236">≈ 1 : 1</text>' +
      '<text class="dg-lbl sm" x="120" y="20">Front of chest ↑</text><text class="dg-lbl sm" x="340" y="20">Front of chest ↑</text>',
    spots: [
      { x: 70, y: 110, label: "Normal chest", text: "Front-to-back (AP) depth is about half the side-to-side (lateral) width: 1:2.", topics: ["chest"] },
      { x: 380, y: 100, label: "Barrel chest", text: "AP depth about equals lateral width (1:1) from long-term air trapping and hyperinflation, as in COPD or emphysema. Often seen with dyspnea and more work of breathing.", topics: ["chest"] },
      { x: 230, y: 70, label: "Paradoxical breathing", text: "Chest and abdomen move in opposite directions. Suggests respiratory muscle fatigue, flail chest, or a diaphragm problem. If new: check SpO₂, effort, and mental status, and escalate.", topics: ["chest", "respflags"] },
      { x: 230, y: 200, label: "Palpate expansion", text: "Hands on the back at the 10th rib, thumbs near the spine, deep breath: thumbs should move apart equally. Unequal movement is a red flag.", topics: ["chest", "respflags"] }
    ] },

  { id: "ladder", topic: "auscult", sys: "resp", title: "Posterior auscultation: the ladder", view: "0 0 360 420",
    svg: BACK +
      '<path class="dg-arrow dash" d="M150 86 L210 86 L150 132 L210 132 L156 196 L204 196 L130 262 L230 262 L128 320 L232 320"/>' +
      '<circle class="dg-node" cx="150" cy="86" r="7"/><circle class="dg-node" cx="210" cy="86" r="7"/><circle class="dg-node" cx="150" cy="132" r="7"/><circle class="dg-node" cx="210" cy="132" r="7"/>' +
      '<circle class="dg-node" cx="156" cy="196" r="7"/><circle class="dg-node" cx="204" cy="196" r="7"/><circle class="dg-node" cx="130" cy="262" r="7"/><circle class="dg-node" cx="230" cy="262" r="7"/>' +
      '<circle class="dg-node" cx="128" cy="320" r="7"/><circle class="dg-node" cx="232" cy="320" r="7"/>',
    spots: [
      { x: 108, y: 72, label: "Start at the apices", text: "Begin above the scapulae. Diaphragm on bare skin; the client breathes slowly and deeply through an open mouth. Listen to one full breath at each spot.", topics: ["auscult"] },
      { x: 180, y: 166, label: "Between the scapulae", text: "Stay off bone: the scapulae muffle sound. Bronchovesicular sounds are normal here.", topics: ["auscult", "normalbs"] },
      { x: 270, y: 262, label: "Side to side", text: "Compare left with right at each level before moving down. A difference stands out when you go straight across.", topics: ["auscult"] },
      { x: 180, y: 330, label: "Down to T10", text: "Most lung tissue is posterior, and the lower lobes are mainly heard here. Go down to about T10.", topics: ["auscult", "respap"] },
      { x: 50, y: 220, label: "Don't skip the sides", text: "Lateral fields (midaxillary lines) are the most commonly missed, which misses the right middle lobe.", topics: ["auscult"] }
    ] },

  { id: "bsmap", topic: "normalbs", sys: "resp", title: "Normal breath sounds by location", view: "0 0 360 400",
    svg: CHEST +
      '<rect class="dg-band z5" x="166" y="20" width="28" height="80" rx="8" opacity=".75"/>' +
      '<rect class="dg-band z3" x="140" y="110" width="26" height="70" rx="8" opacity=".7"/><rect class="dg-band z3" x="194" y="110" width="26" height="70" rx="8" opacity=".7"/>' +
      '<rect class="dg-band z1" x="76" y="120" width="54" height="200" rx="18" opacity=".5"/><rect class="dg-band z1" x="230" y="120" width="54" height="200" rx="18" opacity=".5"/>',
    spots: [
      { x: 180, y: 56, label: "Bronchial", text: "Over the trachea and larynx. Loud and high-pitched; expiration lasts longer than inspiration. Heard in the periphery, it's abnormal and suggests consolidation.", topics: ["normalbs"] },
      { x: 152, y: 144, label: "Bronchovesicular", text: "Over the major bronchi: beside the sternum (1st–2nd ICS) in front and between the scapulae in back. Medium pitch; inspiration equals expiration.", topics: ["normalbs"] },
      { x: 102, y: 230, label: "Vesicular", text: "Over most of the lung surface (the periphery). Soft, low, rustling; inspiration is longer than expiration.", topics: ["normalbs"] },
      { x: 300, y: 340, label: "Right sound, wrong place", text: "A normal sound in the wrong place is abnormal. Always interpret with the rest of the assessment and the client's baseline.", topics: ["normalbs", "advbs"] }
    ] },

  { id: "advmap", topic: "advbs", sys: "resp", title: "Where adventitious sounds come from", view: "0 0 400 390",
    svg: lungs("e1adv"),
    spots: [
      { x: 200, y: 44, label: "Stridor (upper airway)", text: "Harsh, high-pitched, on inspiration, from upper airway obstruction (croup, foreign body, swelling). An emergency: call for help.", topics: ["advbs", "respflags"] },
      { x: 238, y: 140, label: "Rhonchi (large airways)", text: "Low-pitched and snoring, from secretions in the large airways. May clear with coughing.", topics: ["advbs"] },
      { x: 150, y: 210, label: "Wheezes (narrowed airways)", text: "High-pitched and musical, usually on expiration. Narrowed airways, as in asthma or COPD.", topics: ["advbs"] },
      { x: 120, y: 300, label: "Crackles (alveoli)", text: "Popping, usually on inspiration, from fluid in the alveoli (pneumonia, heart failure, fibrosis). Fine = soft and high; coarse = louder and lower. Often at the bases first.", topics: ["advbs"] },
      { x: 326, y: 250, label: "Pleural friction rub", text: "Grating sound in inspiration and expiration from inflamed pleura rubbing together.", topics: ["advbs"] },
      { x: 300, y: 60, label: "Grunting", text: "Short, low sound on expiration. A sign of respiratory distress, especially in infants.", topics: ["advbs", "resplife"] }
    ] }
  ];

  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
