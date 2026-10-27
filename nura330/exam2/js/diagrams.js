/* Original tap-to-learn diagrams for Health Assessment Exam 2 (drawn for this site, safe to publish).
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

  /* The heart shape used for flow and wiring */
  var HEART = '<path class="dg-sac" d="M200 60 C110 60 60 130 70 220 C80 300 150 350 200 360 C250 350 320 300 330 220 C340 130 290 60 200 60Z"/>' +
    '<path class="dg-vein" d="M108 30 L108 120"/><path class="dg-vein" d="M108 250 L108 330"/>' +
    '<path class="dg-artery" d="M210 120 C210 60 240 30 290 40 L330 50"/>' +
    '<path class="dg-pa" d="M175 125 C170 80 150 60 120 55"/>' +
    '<rect class="dg-ra" x="92" y="110" width="98" height="90" rx="30"/><rect class="dg-la" x="210" y="110" width="98" height="90" rx="30"/>' +
    '<path class="dg-rv" d="M92 210 L190 210 L190 300 C160 320 120 300 92 260Z"/><path class="dg-lv" d="M210 210 L308 210 L308 260 C290 310 240 335 210 315Z"/>' +
    '<rect class="dg-valve" x="118" y="200" width="46" height="9" rx="3"/><rect class="dg-valve" x="236" y="200" width="46" height="9" rx="3"/>' +
    '<rect class="dg-valve" x="160" y="118" width="24" height="8" rx="3" transform="rotate(-20 172 122)"/><rect class="dg-valve" x="206" y="112" width="24" height="8" rx="3"/>';

  var D = [
  /* ---------- Skin & lymph ---------- */
  { id: "skin", kind: "structure", topic: "skinap", sys: "skin", title: "Skin layers & pressure injury depth", view: "0 0 440 340",
    svg:
      '<rect class="dg-epi" x="70" y="60" width="350" height="34"/>' +
      '<rect class="dg-derm" x="70" y="94" width="350" height="104"/>' +
      '<rect class="dg-fat" x="70" y="198" width="350" height="70"/>' +
      '<rect class="dg-musc" x="70" y="268" width="350" height="34"/>' +
      '<rect class="dg-bone" x="70" y="302" width="350" height="26" rx="4"/>' +
      '<path class="dg-hair" d="M160 20 L170 60 L176 170"/><ellipse class="dg-follicle" cx="176" cy="172" rx="10" ry="14"/>' +
      '<ellipse class="dg-gland" cx="196" cy="118" rx="12" ry="8"/>' +
      '<path class="dg-sweat" d="M330 60 L330 150 C322 160 340 166 332 174 C324 182 342 186 334 194"/>' +
      '<path class="dg-art-thin" d="M70 186 C150 176 260 196 420 182"/><path class="dg-vein-thin" d="M70 192 C150 202 260 184 420 192"/>' +
      '<path class="dg-nerve" d="M250 190 L256 120 l-8 -10 M256 120 l8 -10"/>' +
      '<path class="dg-bracket" d="M58 62 L50 62 L50 92 L58 92 M58 96 L50 96 L50 196 L58 196 M58 200 L50 200 L50 266 L58 266 M58 270 L50 270 L50 326 L58 326"/>' +
      '<text class="dg-lbl sm" x="26" y="82">1–2</text><text class="dg-lbl sm" x="26" y="150">2</text><text class="dg-lbl sm" x="26" y="238">3</text><text class="dg-lbl sm" x="26" y="302">4</text>' +
      '<text class="dg-lbl sm" x="26" y="48">Stage</text>',
    spots: [
      { x: 110, y: 77, label: "Epidermis", text: "Thin outer barrier with no blood vessels, mostly keratinocytes, replaced every 3–4 weeks. Stage 1 keeps it intact (non-blanchable redness); Stage 2 breaks through it.", topics: ["skinap", "pi"] },
      { x: 110, y: 145, label: "Dermis", text: "Vascular connective tissue with collagen, elastic fibers, nerves, hair follicles, and sweat and oil glands. Stage 2 is partial-thickness loss that exposes the dermis.", topics: ["skinap", "pi"] },
      { x: 110, y: 233, label: "Hypodermis (subcutaneous fat)", text: "Fat for insulation, energy storage, and cushioning over bony prominences. Older adults have less of it, so bones press closer to the surface. Seeing fat in a wound = Stage 3.", topics: ["pi", "lifespan"] },
      { x: 110, y: 296, label: "Muscle, tendon & bone", text: "Exposed bone, muscle, or tendon = Stage 4. If slough or eschar covers the base so you can't tell the depth, it's unstageable.", topics: ["pi"] },
      { x: 176, y: 172, label: "Hair follicle", text: "Follicles need arterial blood. Hairless, shiny shins point to arterial insufficiency.", topics: ["periph"] },
      { x: 332, y: 180, label: "Sweat gland", text: "Profuse sweating (diaphoresis) from fever or shock adds moisture, one of the Braden subscales.", topics: ["braden", "skincolor"] },
      { x: 300, y: 188, label: "Dermal blood vessels", text: "Capillary congestion makes erythema. Press on red skin: if it blanches and refills, blood flow is intact; if it stays red, it's non-blanchable (Stage 1).", topics: ["pi", "skincolor"] },
      { x: 256, y: 120, label: "Nerve endings", text: "Let the client feel pressure and pain. Poor sensory perception lowers the Braden score because the client won't shift position.", topics: ["braden"] }
    ] },

  { id: "pistages", topic: "pi", sys: "skin", title: "Pressure injury stages side by side", view: "0 0 480 300",
    svg: (function () {
      var s = "", x, i;
      for (i = 0; i < 6; i++) {
        x = 14 + i * 78;
        s += '<rect class="dg-epi" x="' + x + '" y="80" width="70" height="22"/><rect class="dg-derm" x="' + x + '" y="102" width="70" height="56"/>' +
          '<rect class="dg-fat" x="' + x + '" y="158" width="70" height="52"/><rect class="dg-musc" x="' + x + '" y="210" width="70" height="30"/><rect class="dg-bone" x="' + x + '" y="240" width="70" height="20" rx="3"/>';
      }
      s += '<rect class="dg-redden" x="22" y="80" width="54" height="22" rx="4"/>';
      s += '<path class="dg-woundcut" d="M104 80 L110 120 L140 120 L146 80Z"/>';
      s += '<path class="dg-woundcut" d="M180 80 L186 180 L218 180 L224 80Z"/>';
      s += '<path class="dg-woundcut" d="M258 80 L264 252 L296 252 L302 80Z"/>';
      s += '<path class="dg-woundcut" d="M336 80 L342 200 L374 200 L380 80Z"/><path class="dg-eschar" d="M334 80 L382 80 L380 106 L336 106Z"/>';
      s += '<path class="dg-dti" d="M418 80 C418 70 476 70 476 80 L476 96 C460 102 432 102 418 96Z"/><ellipse class="dg-dti-deep" cx="447" cy="190" rx="26" ry="26"/>';
      ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Unstageable", "Deep tissue"].forEach(function (t, k) { s += '<text class="dg-lbl sm" x="' + (49 + k * 78) + '" y="60">' + t + "</text>"; });
      return s;
    })(),
    spots: [
      { x: 49, y: 120, label: "Stage 1", text: "Intact skin with non-blanchable erythema. In darker skin: purple/eggplant, warm, boggy or firm. Start prevention now.", topics: ["pi", "skincolor"] },
      { x: 127, y: 140, label: "Stage 2", text: "Partial-thickness loss with exposed dermis, pink and shallow; may be an intact or ruptured blister. No fat visible.", topics: ["pi"] },
      { x: 205, y: 196, label: "Stage 3", text: "Full-thickness loss: fat (adipose) visible in the wound bed.", topics: ["pi"] },
      { x: 283, y: 270, label: "Stage 4", text: "Full-thickness loss with exposed bone, muscle, or tendon.", topics: ["pi"] },
      { x: 358, y: 128, label: "Unstageable", text: "Full-thickness, but slough or eschar covers the base so you can't see how deep it goes.", topics: ["pi", "wound"] },
      { x: 447, y: 140, label: "Deep tissue pressure injury", text: "Intact or non-intact skin with persistent deep red, maroon, or purple discoloration or a blood-filled blister: damage is deeper than it looks.", topics: ["pi"] }
    ] },

  { id: "bradenbar", topic: "braden", sys: "skin", title: "Braden total: lower is riskier", view: "0 0 460 220",
    svg:
      '<rect class="dg-band z5" x="20" y="90" width="76" height="40" rx="6"/><rect class="dg-band z4" x="96" y="90" width="76" height="40"/>' +
      '<rect class="dg-band z3" x="172" y="90" width="50" height="40"/><rect class="dg-band z2" x="222" y="90" width="100" height="40"/><rect class="dg-band z1" x="322" y="90" width="118" height="40" rx="6"/>' +
      '<text class="dg-lbl" x="58" y="150">6–9</text><text class="dg-lbl" x="134" y="150">10–12</text><text class="dg-lbl" x="197" y="150">13–14</text><text class="dg-lbl" x="272" y="150">15–18</text><text class="dg-lbl" x="381" y="150">19–23</text>' +
      '<text class="dg-lbl sm" x="40" y="70">← worse</text><text class="dg-lbl sm" x="420" y="70">better →</text>' +
      '<path class="dg-arrow thin" d="M60 190 L400 190"/><text class="dg-lbl sm" x="230" y="210">6 subscales: 5 scored 1–4, friction/shear 1–3</text>',
    spots: [
      { x: 58, y: 110, label: "9 or below: very high risk", text: "The most severe risk band. Every prevention measure, plus targeted fixes for each low subscale.", topics: ["braden"] },
      { x: 134, y: 110, label: "10–12: high risk", text: "A client scoring 11 is high risk.", topics: ["braden"] },
      { x: 197, y: 110, label: "13–14: moderate risk", text: "Ms. P scored 14: moisture, mobility, and friction/shear were her low subscales, and each got its own intervention.", topics: ["braden", "pi"] },
      { x: 272, y: 110, label: "15–18: mild risk", text: "At risk (18 or below). Still look at each subscale: a single 1 needs action even when the total is mild.", topics: ["braden"] },
      { x: 381, y: 110, label: "19–23: no risk", text: "No risk by Braden, but the scale ignores devices: a client on BiPAP with 21 can still get an MDRPI.", topics: ["braden", "mdrpi"] }
    ] },

  { id: "woundclock", topic: "wound", sys: "skin", title: "Wound clock: tunneling vs. undermining", view: "0 0 380 360",
    svg:
      '<circle class="dg-clock" cx="190" cy="190" r="140"/>' +
      '<text class="dg-lbl" x="190" y="40">12 · head</text><text class="dg-lbl" x="190" y="352">6 · feet</text><text class="dg-lbl" x="348" y="194">3</text><text class="dg-lbl" x="32" y="194">9</text>' +
      '<path class="dg-under" d="M118 196 C100 240 130 290 190 296 C200 296 206 280 196 268 C150 262 132 236 140 200Z"/>' +
      '<path class="dg-woundbed" d="M140 140 C170 110 230 118 248 150 C266 190 240 250 196 262 C150 270 120 230 124 190 C126 168 130 152 140 140Z"/>' +
      '<path class="dg-tunnel" d="M238 140 L300 86"/>' +
      '<path class="dg-applicator" d="M238 140 L292 92"/><circle class="dg-tip" cx="294" cy="90" r="5"/>' +
      '<path class="dg-arrow thin" d="M190 22 L190 8"/>',
    spots: [
      { x: 190, y: 64, label: "12 o'clock = toward the head", text: "Orient every wound like a clock face: 12 toward the patient's head, 6 toward the feet.", topics: ["wound"] },
      { x: 270, y: 112, label: "Tunneling (2 o'clock)", text: "A narrow channel running into deeper tissue (fascia, muscle). Chart: “Tunneling noted at 2 o'clock extending 1.8 cm deep.”", topics: ["wound"] },
      { x: 300, y: 86, label: "Sterile cotton-tipped applicator", text: "Insert gently until resistance, grasp the stick at the wound edge with a gloved finger, remove, and measure against a metric ruler in cm.", topics: ["wound"] },
      { x: 130, y: 262, label: "Undermining (6 to 9 o'clock)", text: "A wide shelf of destroyed tissue under intact skin along the edge. Chart the clock range and the deepest point in cm.", topics: ["wound"] },
      { x: 190, y: 190, label: "Wound bed", text: "Stage by the deepest visible tissue; note slough or eschar. Document size (L × W × D cm), exudate type, amount, color, and odor.", topics: ["wound", "pi"] }
    ] },

  { id: "nodesbody", topic: "nodes", sys: "skin", title: "Lymph node chains", view: "0 0 300 440",
    svg: BODY +
      '<path class="dg-lvessel" d="M160 74 L166 96 L198 112 M140 74 L130 96 M198 112 L210 170 L226 172 M166 120 L170 236 M170 236 L180 240"/>' +
      '<circle class="dg-lnode" cx="162" cy="78" r="5"/><circle class="dg-lnode" cx="166" cy="88" r="5"/><circle class="dg-lnode" cx="128" cy="98" r="5"/><circle class="dg-lnode" cx="200" cy="114" r="6"/><circle class="dg-lnode" cx="226" cy="170" r="5"/><circle class="dg-lnode" cx="170" cy="236" r="6"/><circle class="dg-lnode" cx="180" cy="240" r="5"/>',
    spots: [
      { x: 178, y: 72, label: "Cervical nodes", text: "Along the neck. Tender, mobile nodes here usually mean an infection nearby (throat, ears, teeth). Palpate with finger pads in gentle circles, both sides.", topics: ["nodes", "neck"] },
      { x: 118, y: 108, label: "Supraclavicular nodes", text: "Above the clavicle. A hard, fixed, painless node here (>1 cm) is a classic malignancy warning: refer.", topics: ["nodes", "neck"] },
      { x: 212, y: 124, label: "Axillary nodes", text: "In the armpit; drain the arm and breast. Part of the lecture's four regional chains.", topics: ["nodes", "skinap"] },
      { x: 236, y: 182, label: "Epitrochlear nodes", text: "Inner elbow. Drain the forearm and hand; enlarge with hand infections.", topics: ["nodes", "skinap"] },
      { x: 184, y: 252, label: "Inguinal nodes", text: "In the groin; drain the legs and genital area. Enlarged with leg or genital infections (including some STIs).", topics: ["nodes", "reprohx"] }
    ] },

  { id: "fontanelles", topic: "lifespan", sys: "skin", title: "Infant skull from above", view: "0 0 340 360",
    svg:
      '<ellipse class="dg-skull" cx="170" cy="180" rx="118" ry="150"/>' +
      '<path class="dg-suture" d="M170 30 L170 330 M60 140 C110 120 230 120 280 140 M80 262 C120 236 220 236 260 262"/>' +
      '<path class="dg-fontanelle" d="M170 92 L206 134 L170 176 L134 134Z"/>' +
      '<path class="dg-fontanelle" d="M170 226 L200 266 L140 266Z"/>' +
      '<text class="dg-lbl" x="170" y="22">Face / front ↑</text>',
    spots: [
      { x: 170, y: 134, label: "Anterior fontanelle", text: "Diamond-shaped soft spot that closes at 12–18 months. Palpate with the infant calm and upright: should be soft and flat.", topics: ["lifespan"] },
      { x: 170, y: 252, label: "Posterior fontanelle", text: "Small triangle at the back that closes early: about 1–2 months on the slide text, 2–3 months on the slide diagram (most references say about 2).", topics: ["lifespan"] },
      { x: 230, y: 120, label: "Sunken", text: "A sunken fontanelle = dehydration. Check intake, wet diapers, mucous membranes.", topics: ["lifespan"] },
      { x: 110, y: 120, label: "Bulging", text: "A bulging fontanelle in a calm infant = increased intracranial pressure. Report now.", topics: ["lifespan"] },
      { x: 170, y: 310, label: "Sutures", text: "The fibrous seams between skull bones. They let the skull grow with the brain.", topics: ["lifespan", "headface"] }
    ] },

  /* ---------- Cardiovascular ---------- */
  { id: "apetm", kind: "structure", topic: "heartsounds", sys: "cv", title: "APE To Man: where to listen", view: "0 0 360 400",
    svg:
      '<path class="dg-heart-outline faint" d="M150 150 C150 120 200 110 230 130 C270 150 290 200 270 260 C255 300 210 320 190 330 C170 310 140 260 140 220Z"/>' +
      '<path class="dg-clav" d="M60 70 C110 60 150 70 170 76 M300 70 C250 60 210 70 190 76"/>' +
      '<rect class="dg-sternum" x="164" y="74" width="32" height="210" rx="12"/>' +
      '<path class="dg-rib" d="M164 110 C120 104 80 110 52 124 M196 110 C240 104 280 110 308 124 M164 146 C120 140 76 148 46 166 M196 146 C240 140 284 148 314 166 M164 182 C120 178 76 188 48 208 M196 182 C240 178 284 188 312 208 M164 218 C120 216 82 228 56 250 M196 218 C240 216 278 228 304 250 M164 254 C126 254 92 266 70 288 M196 254 C234 254 268 266 290 288"/>' +
      '<path class="dg-mcl" d="M262 70 L262 330"/><text class="dg-lbl sm" x="262" y="346">left MCL</text>' +
      '<text class="dg-lbl sm" x="74" y="132">2nd ICS</text><text class="dg-lbl sm" x="64" y="168">3rd</text><text class="dg-lbl sm" x="62" y="204">4th</text><text class="dg-lbl sm" x="70" y="240">5th</text>' +
      '<text class="dg-lbl sm" x="100" y="380">patient\'s right</text><text class="dg-lbl sm" x="260" y="380">patient\'s left</text>',
    spots: [
      { x: 148, y: 128, label: "A · Aortic", text: "2nd ICS, right sternal border. Start here with the diaphragm. S2 is louder than S1 at the base.", topics: ["heartsounds"] },
      { x: 212, y: 128, label: "P · Pulmonic", text: "2nd ICS, left sternal border. Also at the base, where S2 is loudest.", topics: ["heartsounds"] },
      { x: 212, y: 164, label: "E · Erb's point", text: "3rd ICS, left sternal border. A good spot to hear both S1 and S2 and many murmurs.", topics: ["heartsounds", "extrasounds"] },
      { x: 212, y: 200, label: "T · Tricuspid", text: "4th ICS, left sternal border. Tricuspid closure is part of S1.", topics: ["heartsounds"] },
      { x: 262, y: 236, label: "M · Mitral (apical) / PMI", text: "5th ICS, left midclavicular line. Apex of the heart: S1 is loudest here, and you count the apical pulse for a full 60 seconds. Have a client with breasts lift breast tissue.", topics: ["heartsounds", "heartap", "conduction"] },
      { x: 180, y: 106, label: "Sternal angle", text: "The ridge where the manubrium meets the sternal body. Slide your fingers off it to the side to find the 2nd rib and the 2nd ICS just below.", topics: ["heartsounds"] }
    ] },

  { id: "flow", topic: "heartap", sys: "cv", title: "Blood flow through the heart", view: "0 0 400 380",
    svg: HEART + '<text class="dg-txt" x="141" y="160">RA</text><text class="dg-txt" x="259" y="160">LA</text><text class="dg-txt" x="141" y="262">RV</text><text class="dg-txt" x="259" y="262">LV</text>',
    spots: [
      { x: 108, y: 70, label: "Superior vena cava", text: "Brings deoxygenated blood from the body into the right atrium. Pressure backing up here shows as JVD.", topics: ["heartap", "jvd"] },
      { x: 141, y: 135, label: "Right atrium", text: "Receives blood from the body. The SA node (pacemaker) sits in its wall.", topics: ["heartap", "conduction"] },
      { x: 141, y: 205, label: "Tricuspid valve", text: "AV valve between RA and RV. Closes with the mitral for S1 (start of systole). Heard at the 4th ICS, left sternal border.", topics: ["heartsounds"] },
      { x: 141, y: 280, label: "Right ventricle", text: "Pumps blood to the lungs through the pulmonic valve and pulmonary artery.", topics: ["heartap"] },
      { x: 150, y: 70, label: "Pulmonary artery & pulmonic valve", text: "Carries deoxygenated blood to the lungs (still an artery: it leaves the heart). Pulmonic valve closes for S2.", topics: ["heartap", "heartsounds"] },
      { x: 259, y: 135, label: "Left atrium", text: "Receives oxygenated blood from the pulmonary veins.", topics: ["heartap"] },
      { x: 259, y: 205, label: "Mitral valve", text: "AV valve between LA and LV. Closes for S1; heard best at the apex (5th ICS MCL).", topics: ["heartsounds"] },
      { x: 259, y: 280, label: "Left ventricle", text: "Thickest wall: pumps to the whole body. When it struggles, fluid backs into the lungs (orthopnea, crackles).", topics: ["heartap", "cvvitals"] },
      { x: 300, y: 46, label: "Aorta & aortic valve", text: "Aortic valve closes with the pulmonic for S2 (start of diastole), loudest at the base.", topics: ["heartsounds"] }
    ] },

  { id: "wiring", topic: "conduction", sys: "cv", title: "The conduction system", view: "0 0 400 320",
    svg: '<path class="dg-heart-outline" d="M200 310 C100 250 40 190 50 110 C58 50 120 30 170 60 C185 70 195 82 200 92 C205 82 215 70 230 60 C280 30 342 50 350 110 C360 190 300 250 200 310Z"/>' +
      '<path class="dg-wire" d="M120 80 C150 100 170 120 192 152 M120 80 C130 120 160 140 192 152 M192 152 L200 196 M200 196 C170 230 150 260 170 290 M200 196 C240 230 260 260 230 290"/>' +
      '<path class="dg-purk" d="M170 290 l-14 -8 M170 290 l-6 -16 M230 290 l14 -8 M230 290 l6 -16"/>' +
      '<circle class="dg-node" cx="120" cy="80" r="9"/><circle class="dg-node" cx="192" cy="152" r="8"/>',
    spots: [
      { x: 120, y: 80, label: "1 · SA node", text: "The natural pacemaker in the right atrium. Fires first; the atria contract.", topics: ["conduction"] },
      { x: 192, y: 152, label: "2 · AV node", text: "Briefly delays the impulse so the ventricles can fill.", topics: ["conduction"] },
      { x: 200, y: 196, label: "3 · Bundle of His", text: "Carries the signal from the AV node into the wall between the ventricles.", topics: ["conduction"] },
      { x: 254, y: 252, label: "4 · Bundle branches", text: "Right and left branches carry the signal down each ventricle.", topics: ["conduction"] },
      { x: 156, y: 290, label: "5 · Purkinje fibers", text: "Spread the signal through the ventricle walls so they contract together.", topics: ["conduction"] },
      { x: 300, y: 110, label: "When the wiring misfires", text: "Too fast, too slow, or irregular: ask about palpitations, dizziness, syncope, SOB; count the apical pulse 60 sec and compare with the radial.", topics: ["conduction", "cvvitals"] }
    ] },

  { id: "pulsebody", topic: "pulses", sys: "cv", title: "Where to feel pulses", view: "0 0 300 440",
    svg: BODY,
    spots: [
      { x: 140, y: 82, label: "Carotid", text: "Side of the neck. One side at a time, never both (can reduce blood flow to the brain). Listen for bruits when indicated.", topics: ["pulses", "neck"] },
      { x: 166, y: 140, label: "Apical", text: "5th ICS, left MCL (PMI). Count a full 60 seconds; compare with the radial.", topics: ["pulses", "heartsounds"] },
      { x: 76, y: 170, label: "Brachial", text: "Inner elbow, medial to the biceps tendon. Compare both arms.", topics: ["pulses"] },
      { x: 60, y: 240, label: "Radial", text: "Thumb side of the wrist. Compare both sides for rate, rhythm, and strength.", topics: ["pulses"] },
      { x: 130, y: 236, label: "Femoral", text: "In the groin, below the inguinal ligament.", topics: ["pulses"] },
      { x: 182, y: 330, label: "Popliteal", text: "Behind the knee; easiest with the knee slightly bent.", topics: ["pulses"] },
      { x: 114, y: 404, label: "Posterior tibial", text: "Just behind and below the medial malleolus (inner ankle bone).", topics: ["pulses", "periph"] },
      { x: 196, y: 422, label: "Dorsalis pedis", text: "Top of the foot, just lateral to the big toe's extensor tendon. Can't find it? Decide if it's new and use a Doppler.", topics: ["pulses", "periph"] }
    ] },

  { id: "legs", topic: "periph", sys: "cv", title: "Arterial vs. venous legs", view: "0 0 400 360",
    svg:
      '<path class="dg-leg-art" d="M70 30 L130 30 L126 270 C126 290 140 300 160 306 L160 330 L60 330 L66 270Z"/>' +
      '<path class="dg-leg-ven" d="M240 30 L320 30 L326 250 C330 280 336 296 350 306 L350 330 L238 330 L236 270 C230 240 232 200 240 150Z"/>' +
      '<path class="dg-hemo" d="M244 230 C270 222 300 224 326 236 L330 290 C300 296 268 296 240 290Z"/>' +
      '<path class="dg-varicose" d="M286 60 C276 90 300 110 288 140 C278 170 300 186 292 210"/>' +
      '<circle class="dg-ulcer" cx="150" cy="320" r="7"/><ellipse class="dg-ulcer moist" cx="258" cy="276" rx="12" ry="8"/>' +
      '<text class="dg-lbl" x="100" y="352">Arterial</text><text class="dg-lbl" x="296" y="352">Venous</text>',
    spots: [
      { x: 98, y: 100, label: "Shiny, hairless, pale, cool skin", text: "Hair follicles need arterial blood. Pale and cool = not enough blood getting in. Compare warmth with the back of your hand.", topics: ["periph"] },
      { x: 150, y: 320, label: "Toe ulcer, weak pulse", text: "Arterial: weak or absent pulses, slow cap refill, minimal edema. Absent with Doppler = notify now.", topics: ["periph", "pulses"] },
      { x: 288, y: 140, label: "Varicose veins", text: "Failing valves let blood pool in distended superficial veins.", topics: ["periph"] },
      { x: 300, y: 262, label: "Brown (hemosiderin) staining", text: "Pooled blood leaks iron into the skin around the ankles. Pulses are usually present.", topics: ["periph"] },
      { x: 330, y: 200, label: "Chronic swelling", text: "Venous insufficiency keeps the lower leg swollen; grade any pitting edema by depth.", topics: ["periph", "edema"] },
      { x: 200, y: 180, label: "Compare both legs", text: "One calf warm, red, swollen, and tender with the other normal = possible DVT. Report right away.", topics: ["periph"] }
    ] },

  { id: "jvdneck", topic: "jvd", sys: "cv", title: "Checking JVD at 30–45°", view: "0 0 400 300",
    svg:
      '<path class="dg-bed" d="M20 270 L380 270 M60 270 L300 110"/>' +
      '<path class="dg-body" d="M120 236 L300 116 L330 150 L170 260Z"/>' +
      '<circle class="dg-body" cx="330" cy="96" r="38"/>' +
      '<path class="dg-scm" d="M300 112 L246 170"/>' +
      '<path class="dg-jug" d="M314 126 L262 178"/>' +
      '<path class="dg-carotid" d="M296 132 L250 176"/>' +
      '<path class="dg-arc" d="M110 270 A50 50 0 0 0 102 240"/><text class="dg-lbl" x="160" y="262">30–45°</text>',
    spots: [
      { x: 104, y: 252, label: "HOB 30–45°", text: "Supine with the head of the bed at 30–45°, pillow removed so the neck isn't flexed, head turned slightly away.", topics: ["jvd"] },
      { x: 290, y: 150, label: "Internal / external jugular", text: "Reflects right atrial pressure. Should NOT be distended at 30–45° or upright. Most visible on the right side.", topics: ["jvd"] },
      { x: 258, y: 164, label: "Carotid artery (don't confuse)", text: "One strong, palpable outward beat that doesn't change with position. Jugular pulsations are soft, multi-wave, not palpable, and drop when the client sits up.", topics: ["jvd", "neck"] },
      { x: 220, y: 190, label: "What JVD means", text: "Right-sided heart failure, fluid overload (kidney or liver disease), constrictive pericarditis, tamponade, pulmonary hypertension. Painless, but a red flag with SOB or leg swelling.", topics: ["jvd", "extrasounds"] }
    ] },

  /* ---------- HEENT ---------- */
  { id: "cn", kind: "structure", topic: "cn", sys: "heent", title: "Cranial nerve tests on the face", view: "0 0 360 420",
    svg:
      '<path class="dg-body" d="M60 400 C60 340 110 320 150 314 L210 314 C250 320 300 340 300 400Z"/>' +
      '<rect class="dg-body" x="148" y="270" width="64" height="52" rx="10"/>' +
      '<ellipse class="dg-body" cx="180" cy="160" rx="96" ry="122"/>' +
      '<ellipse class="dg-body" cx="84" cy="166" rx="14" ry="26"/><ellipse class="dg-body" cx="276" cy="166" rx="14" ry="26"/>' +
      '<ellipse class="dg-eyewhite" cx="146" cy="138" rx="20" ry="11"/><ellipse class="dg-eyewhite" cx="214" cy="138" rx="20" ry="11"/>' +
      '<circle class="dg-iris" cx="146" cy="138" r="8"/><circle class="dg-iris" cx="214" cy="138" r="8"/><circle class="dg-pupil" cx="146" cy="138" r="3.5"/><circle class="dg-pupil" cx="214" cy="138" r="3.5"/>' +
      '<path class="dg-feature" d="M180 140 L170 190 L190 192 M150 228 C170 240 190 240 210 228"/>' +
      '<path class="dg-tongue" d="M168 232 C170 250 190 250 192 232Z"/>',
    spots: [
      { x: 194, y: 182, label: "CN I · Olfactory", text: "Smell. Only test if the client reports a problem: a familiar, non-irritating scent, one nostril at a time.", topics: ["cn", "headface"] },
      { x: 214, y: 112, label: "CN II · Optic", text: "Vision: Snellen chart at 20 ft, one eye at a time; visual fields by confrontation. Senses light for the pupil reflex.", topics: ["cn", "eyes", "pupils"] },
      { x: 146, y: 112, label: "CN III, IV, VI", text: "Eye movements through the six cardinal fields (the “H”). CN III also constricts the pupil. LR6 SO4.", topics: ["cn", "eom", "pupils"] },
      { x: 118, y: 200, label: "CN V · Trigeminal", text: "Facial sensation and chewing: light touch and sharp/dull with eyes closed; jaw side to side against resistance.", topics: ["cn", "headface"] },
      { x: 232, y: 214, label: "CN VII · Facial", text: "Facial expression and taste: smile, close eyes tightly against resistance, puff cheeks. Look for symmetry. Sudden droop = stroke response.", topics: ["cn", "headface", "heentflags"] },
      { x: 276, y: 166, label: "CN VIII · Vestibulocochlear", text: "Hearing and balance: whisper or finger rub one ear at a time; Weber and Rinne.", topics: ["cn", "ears"] },
      { x: 180, y: 284, label: "CN IX, X · Glossopharyngeal, Vagus", text: "Swallow, palate, voice: say “ah,” uvula rises midline. Uvula off to one side = IX/X problem.", topics: ["cn", "mouth"] },
      { x: 92, y: 350, label: "CN XI · Accessory", text: "Shrug shoulders and turn the head against resistance.", topics: ["cn", "neck"] },
      { x: 180, y: 244, label: "CN XII · Hypoglossal", text: "Tongue movement: stick it out; it should be midline.", topics: ["cn", "mouth"] }
    ] },

  { id: "gaze", topic: "eom", sys: "heent", title: "Six cardinal fields of gaze", view: "0 0 400 300",
    svg:
      '<ellipse class="dg-eyewhite" cx="160" cy="150" rx="40" ry="22"/><ellipse class="dg-eyewhite" cx="240" cy="150" rx="40" ry="22"/>' +
      '<circle class="dg-iris" cx="160" cy="150" r="15"/><circle class="dg-iris" cx="240" cy="150" r="15"/><circle class="dg-pupil" cx="160" cy="150" r="6"/><circle class="dg-pupil" cx="240" cy="150" r="6"/>' +
      '<path class="dg-hpath" d="M60 60 L60 240 M60 150 L340 150 M340 60 L340 240"/>' +
      '<text class="dg-lbl sm" x="200" y="280">Client\'s right ← → client\'s left (finger 12–18 in. away, head still)</text>',
    spots: [
      { x: 60, y: 60, label: "Up and to the right", text: "Tests the right superior rectus and left inferior oblique (CN III).", topics: ["eom"] },
      { x: 60, y: 150, label: "Right (lateral)", text: "Right eye looks out with the lateral rectus (CN VI); left eye looks in with the medial rectus (CN III).", topics: ["eom", "cn"] },
      { x: 60, y: 240, label: "Down and to the right", text: "Right inferior rectus (CN III) and left superior oblique (CN IV).", topics: ["eom"] },
      { x: 340, y: 60, label: "Up and to the left", text: "Left superior rectus and right inferior oblique (CN III).", topics: ["eom"] },
      { x: 340, y: 150, label: "Left (lateral)", text: "Left lateral rectus (CN VI) and right medial rectus (CN III).", topics: ["eom"] },
      { x: 340, y: 240, label: "Down and to the left", text: "Left inferior rectus (CN III) and right superior oblique (CN IV).", topics: ["eom"] },
      { x: 200, y: 150, label: "What you watch for", text: "Smooth, coordinated movement of both eyes. Unexpected: nystagmus (involuntary rhythmic movement), diplopia (double vision), one eye lagging.", topics: ["eom"] }
    ] },

  { id: "pupilchart", topic: "pupils", sys: "heent", title: "Pupil findings", view: "0 0 440 260",
    svg:
      '<g transform="translate(60 80)"><ellipse class="dg-eyewhite" rx="38" ry="22"/><circle class="dg-iris" r="15"/><circle class="dg-pupil" r="2"/></g>' +
      '<g transform="translate(170 80)"><ellipse class="dg-eyewhite" rx="38" ry="22"/><circle class="dg-iris" r="15"/><circle class="dg-pupil" r="5"/></g>' +
      '<g transform="translate(280 80)"><ellipse class="dg-eyewhite" rx="38" ry="22"/><circle class="dg-iris" r="15"/><circle class="dg-pupil" r="7"/></g>' +
      '<g transform="translate(390 80)"><ellipse class="dg-eyewhite" rx="38" ry="22"/><circle class="dg-iris" r="15"/><circle class="dg-pupil" r="7"/></g>' +
      '<text class="dg-lbl sm" x="60" y="124">pinpoint</text><text class="dg-lbl sm" x="170" y="124">brisk</text><text class="dg-lbl sm" x="280" y="124">sluggish</text><text class="dg-lbl sm" x="390" y="124">fixed</text>' +
      '<g transform="translate(150 200)"><ellipse class="dg-eyewhite" rx="34" ry="20"/><circle class="dg-iris" r="13"/><circle class="dg-pupil" r="4"/></g>' +
      '<g transform="translate(240 200)"><ellipse class="dg-eyewhite" rx="34" ry="20"/><circle class="dg-iris" r="13"/><circle class="dg-pupil" r="4"/></g>' +
      '<path class="dg-light" d="M60 200 L112 200"/><text class="dg-lbl sm" x="196" y="246">light in the right eye → both constrict</text>',
    spots: [
      { x: 60, y: 46, label: "Small, pinpoint, nonreactive", text: "Damage to the pons (hemorrhage, ischemia) or opioid overdose. With slow breathing, think opioids.", topics: ["pupils"] },
      { x: 170, y: 46, label: "Brisk", text: "Normal: pupils equal, round, and constrict quickly to light.", topics: ["pupils"] },
      { x: 280, y: 46, label: "Sluggish", text: "Compression of CN III: early herniation or cerebral edema. New after a head injury = escalate.", topics: ["pupils", "heentflags"] },
      { x: 390, y: 46, label: "Fixed / nonreactive (midposition)", text: "Loss of sympathetic and parasympathetic input: midbrain infarction or herniation.", topics: ["pupils"] },
      { x: 150, y: 168, label: "Direct response", text: "Shine the penlight in one eye: that pupil constricts. Tests CN II (senses light) and CN III (constricts).", topics: ["pupils", "cn"] },
      { x: 240, y: 168, label: "Consensual response", text: "The opposite pupil constricts too. Then check accommodation: look far, then near; pupils constrict and eyes converge.", topics: ["pupils"] }
    ] },

  { id: "ear", topic: "ears", sys: "heent", title: "The ear and hearing loss", view: "0 0 440 300",
    svg:
      '<path class="dg-body" d="M40 60 C10 100 10 200 50 240 C70 256 90 230 86 200 C84 180 100 170 110 160 C100 120 80 80 40 60Z"/>' +
      '<path class="dg-canal" d="M96 152 L190 152"/>' +
      '<path class="dg-tm" d="M196 120 L200 186"/>' +
      '<path class="dg-ossicle" d="M206 140 l18 -6 l14 10 l12 -2"/>' +
      '<path class="dg-cochlea" d="M300 180 C340 180 340 140 310 140 C290 140 292 166 310 164 C320 163 320 154 312 154"/>' +
      '<path class="dg-semi" d="M276 120 C270 80 310 70 316 110 M290 124 C300 92 340 98 330 128"/>' +
      '<path class="dg-cn8" d="M330 160 L410 150"/>' +
      '<path class="dg-eust" d="M220 190 L280 260"/>' +
      '<path class="dg-bracket" d="M96 40 L250 40 M96 40 L96 48 M250 40 L250 48 M266 40 L420 40 M266 40 L266 48 M420 40 L420 48"/>' +
      '<text class="dg-lbl sm" x="173" y="30">conductive problems</text><text class="dg-lbl sm" x="343" y="30">sensorineural problems</text>',
    spots: [
      { x: 60, y: 120, label: "Auricle & tragus", text: "Inspect for symmetry, position, lesions, drainage; palpate for tenderness. Adults: pull up and back for the otoscope. Children under ~3: down and back.", topics: ["ears"] },
      { x: 150, y: 152, label: "External canal", text: "Should be clear. Cerumen blocking it causes conductive hearing loss.", topics: ["ears"] },
      { x: 198, y: 200, label: "Tympanic membrane", text: "Expected: intact and pearly gray. A perforation or fluid behind it causes conductive loss.", topics: ["ears"] },
      { x: 232, y: 120, label: "Ossicles (middle ear)", text: "Tiny bones that carry sound to the inner ear. Damage = conductive loss.", topics: ["ears"] },
      { x: 318, y: 190, label: "Cochlea", text: "Inner ear organ of hearing. Aging (presbycusis), loud noise, and ototoxic meds damage it: sensorineural loss, usually permanent.", topics: ["ears", "heentflags"] },
      { x: 300, y: 92, label: "Vestibular system", text: "Balance. Problems cause vertigo (spinning), like Sarah Mitchell's positional dizziness: fall precautions and report.", topics: ["ears"] },
      { x: 400, y: 150, label: "CN VIII", text: "Carries hearing and balance to the brain. Test with whisper/finger rub, Weber, and Rinne.", topics: ["ears", "cn"] },
      { x: 250, y: 236, label: "Eustachian tube", text: "Connects the middle ear to the throat; children's are shorter and flatter, so ear infections are more common.", topics: ["ears", "heentflags"] }
    ] },

  { id: "mouthview", topic: "mouth", sys: "heent", title: "Inside the mouth", view: "0 0 400 300",
    svg:
      '<path class="dg-lip" d="M40 150 C80 40 320 40 360 150 C320 260 80 260 40 150Z"/>' +
      '<path class="dg-oral" d="M70 150 C100 70 300 70 330 150 C300 230 100 230 70 150Z"/>' +
      '<path class="dg-palate" d="M110 104 C150 84 250 84 290 104 C250 120 150 120 110 104Z"/>' +
      '<path class="dg-uvula" d="M192 118 C192 140 208 140 208 118Z"/>' +
      '<ellipse class="dg-tonsil" cx="140" cy="140" rx="14" ry="20"/><ellipse class="dg-tonsil" cx="260" cy="140" rx="14" ry="20"/>' +
      '<path class="dg-tongue" d="M110 190 C130 150 270 150 290 190 C260 220 140 220 110 190Z"/>',
    spots: [
      { x: 200, y: 98, label: "Hard palate", text: "A good place to see jaundice in darker skin.", topics: ["mouth", "skincolor"] },
      { x: 200, y: 134, label: "Uvula & soft palate (CN IX, X)", text: "Say “ah”: the uvula should stay midline and the soft palate rise equally. Deviation = CN IX/X problem.", topics: ["mouth", "cn"] },
      { x: 140, y: 140, label: "Tonsils & pharynx", text: "Look for redness, swelling, exudate. Tonsils can be more prominent in children.", topics: ["mouth"] },
      { x: 200, y: 190, label: "Tongue (CN XII)", text: "Inspect top, sides, and underside; it should protrude midline and move symmetrically. Central cyanosis shows here.", topics: ["mouth", "cn"] },
      { x: 330, y: 186, label: "Lips & oral mucosa", text: "Pink, moist, no lesions. Persistent sores need evaluation; dry mucosa can mean dehydration.", topics: ["mouth"] }
    ] },

  { id: "neckfront", topic: "neck", sys: "heent", title: "The front of the neck", view: "0 0 360 360",
    svg:
      '<path class="dg-body" d="M110 20 L250 20 L262 250 C300 270 340 290 350 340 L10 340 C20 290 60 270 98 250Z"/>' +
      '<rect class="dg-trachea" x="164" y="70" width="32" height="210" rx="10"/>' +
      '<path class="dg-trachea-r" d="M166 100 L194 100 M166 124 L194 124 M166 220 L194 220 M166 244 L194 244"/>' +
      '<path class="dg-thyroid" d="M180 160 C160 140 130 140 132 180 C134 210 160 212 180 196 C200 212 226 210 228 180 C230 140 200 140 180 160Z"/>' +
      '<path class="dg-carotid" d="M130 40 L136 250 M230 40 L224 250"/>' +
      '<path class="dg-scm" d="M106 40 L150 280 M254 40 L210 280"/>' +
      '<circle class="dg-lnode" cx="96" cy="140" r="6"/><circle class="dg-lnode" cx="264" cy="140" r="6"/><circle class="dg-lnode" cx="80" cy="270" r="6"/>',
    spots: [
      { x: 180, y: 90, label: "Trachea", text: "Should be midline. New tracheal deviation with respiratory compromise is urgent.", topics: ["neck", "heentflags"] },
      { x: 150, y: 180, label: "Thyroid", text: "Palpate from behind while the client swallows (it moves up). Note enlargement (thyromegaly), nodules, tenderness; if enlarged, listen for a bruit.", topics: ["neck"] },
      { x: 236, y: 100, label: "Carotid artery", text: "Palpate gently, one side at a time; expected 2+ and equal. Listen with the bell during a brief breath-hold: a bruit means turbulent flow from narrowing.", topics: ["neck", "pulses"] },
      { x: 110, y: 90, label: "Sternocleidomastoid (CN XI)", text: "Turn the head against resistance; shrug shoulders. Tests CN XI.", topics: ["neck", "cn"] },
      { x: 264, y: 156, label: "Cervical lymph nodes", text: "Finger pads, gentle circles, both sides. Expected: not palpable or small, soft, mobile, nontender.", topics: ["neck", "nodes"] },
      { x: 80, y: 286, label: "Supraclavicular node", text: "Hard, fixed, painless and >1 cm here = malignancy concern: refer.", topics: ["neck", "nodes"] }
    ] }
  ];

  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
