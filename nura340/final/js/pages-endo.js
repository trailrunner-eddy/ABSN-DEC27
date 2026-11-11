/* Endocrine unit pages for the Patho Final guide: section overviews, plain-language text,
   tap-to-learn diagrams (drawn for this site), and picture-quiz figures from the endocrine lecture slides.
   Loads after sections.js, plain.js, diagrams.js, and slides.js. */
(function () {
  /* ---------- Section overviews ---------- */
  Object.assign(window.SECTIONS, {
    pancreas: {
      diagram: "pancreas",
      lead: "Diseases of the Pancreas: type 1 and type 2 diabetes, DKA and HHS, diabetes labs, and acute and chronic pancreatitis.",
      summary: [
        "The pancreas does two jobs. Its islets make insulin (beta cells) and glucagon (alpha cells) to control blood glucose, and its acinar cells make digestive enzymes. Diabetes is a failure of insulin action: in type 1 the immune system destroys the beta cells, and in type 2 the cells resist insulin until the beta cells wear out. Either way glucose stays in the blood, spills into the urine, and drags water with it, which explains the polyuria, thirst, and dehydration.",
        "The two hyperglycemic emergencies differ by how much insulin is left. With almost none (DKA), fat breaks down into ketones and the blood turns acidic, so the client breathes deep and fast with fruity breath. With some insulin (HHS), ketones stay low, but glucose climbs so high that dehydration and confusion dominate. Pancreatitis is the exocrine side failing: enzymes activate inside the gland and digest it, causing severe pain to the back and fluid loss from leaky vessels."
      ],
      structure: [
        "Islets: beta cells → insulin (lowers glucose); alpha cells → glucagon (raises glucose).",
        "Acinar cells → lipase, amylase, proteases → pancreatic duct → duodenum.",
        "The pancreatic duct and common bile duct share an opening: a gallstone there can cause pancreatitis.",
        "Diagnosis: fasting glucose ≥126, A1C ≥6.5%, 2-hr OGTT ≥200, or random ≥200 with symptoms."
      ]
    },
    thyroid: {
      diagram: "thyroidaxis",
      lead: "Diseases of the Thyroid Gland: the thyroid axis and labs, hypothyroidism, hyperthyroidism, goiter, and nodules.",
      summary: [
        "Thyroid hormone sets the body's pace, and its control is a feedback loop: TRH from the hypothalamus, TSH from the pituitary, then T4 and T3 from the thyroid, which turn the signal back down. Too little hormone and everything slows (fatigue, cold, constipation, bradycardia); too much and everything speeds up (heat intolerance, weight loss, tachycardia, AFib). The extremes are myxedema coma and thyroid storm.",
        "The labs tell you where the problem is. When the thyroid itself fails, TSH moves the opposite way from T4 because feedback still works. When TSH is low or 'inappropriately normal' with a low T4, the pituitary or hypothalamus is the problem. Graves' disease breaks the loop entirely, because antibodies stimulate the gland no matter what TSH is doing. Goiters and nodules are about size and shape, not function, and a big one can press on the trachea, esophagus, or the nerves to the voice box."
      ],
      structure: [
        "Hypothalamus (TRH) → anterior pituitary (TSH) → thyroid (T4 > T3); T3 is more active, tissues convert T4 to T3.",
        "Negative feedback: high T4/T3 turns down TRH and TSH.",
        "Primary: ↑TSH ↓T4 (hypo) or ↓TSH ↑T4 (hyper). Central: ↓T4 with low or inappropriately normal TSH.",
        "Behind and beside the thyroid: trachea, esophagus, recurrent laryngeal nerves."
      ]
    },
    adrenal: {
      diagram: "hpa",
      lead: "Diseases of the Pituitary and Adrenal Glands: pituitary adenoma, hyperprolactinemia, hypopituitarism, Cushing syndrome, Addison's disease, and hyperaldosteronism.",
      summary: [
        "The pituitary sits just under the optic chiasm and runs most other glands. A tumor there causes trouble two ways: it can make too much of one hormone (prolactin, ACTH), and it can press on its surroundings, causing headaches, loss of the outer visual fields, and failure of the normal pituitary. When the pituitary fails, each missing hormone has its own picture, and losing ACTH is the dangerous one because the body can't make cortisol under stress.",
        "The adrenal cortex makes two hormones with different bosses: cortisol answers to ACTH, and aldosterone answers mainly to renin–angiotensin and potassium. That one fact explains the patterns. Too much cortisol (Cushing) raises glucose and breaks down muscle, skin, and bone. A damaged adrenal (Addison's) loses both hormones, so blood pressure and sodium fall, potassium rises, and ACTH climbs and darkens the skin. Too much aldosterone holds sodium and water and dumps potassium, so the main finding is hard-to-control hypertension."
      ],
      structure: [
        "Anterior pituitary: TSH, ACTH, GH, prolactin, FSH/LH. Posterior: ADH and oxytocin (made in the hypothalamus).",
        "Dopamine from the hypothalamus holds prolactin down.",
        "Adrenal cortex: cortisol (ACTH-driven) and aldosterone (renin–angiotensin and K⁺). Medulla: epinephrine, norepinephrine.",
        "Pair the labs: ACTH with cortisol, renin with aldosterone."
      ]
    }
  });

  /* ---------- Plain language ---------- */
  Object.assign(window.PLAIN, {
    pancfn: {
      text: "The pancreas has two jobs. Most of it makes juices that digest food and sends them into the intestine through a tube. Small clusters of cells scattered inside it make insulin, which lets sugar into your cells, and glucagon, which raises sugar between meals.",
      like: "A kitchen that also runs the building's thermostat."
    },
    t1dm: {
      text: "The immune system destroys the cells that make insulin. Without insulin, sugar can't get into cells, so it piles up in the blood while the body starves. The body breaks down fat and muscle for fuel, so people lose weight, and the sugar spilling into urine makes them pee a lot and feel very thirsty. People with type 1 need insulin to live.",
      like: "The delivery truck (insulin) is gone, so the food (sugar) piles up at the curb while everyone inside goes hungry."
    },
    t2dm: {
      text: "The body still makes insulin, but the cells stop listening to it. At first the pancreas makes extra to keep up. Over years it wears out, and blood sugar climbs. It comes on slowly, so many people feel fine at first. High sugar over time damages blood vessels and nerves. It isn't anyone's moral failing.",
      like: "Knocking louder and louder on a door that's harder and harder to open, until the knocker gets tired."
    },
    dkahhs: {
      text: "Two blood-sugar emergencies. In DKA there's almost no insulin, so the body burns fat and makes acids called ketones. The person breathes deep and fast and their breath smells fruity. In HHS there's a little insulin, enough to stop the acids, but sugar gets extremely high, the person pees out huge amounts of water, and becomes very dry and confused.",
      like: "DKA is a fire making smoke (acid). HHS is a drought (dehydration)."
    },
    dmlabs: {
      text: "Four tests can diagnose diabetes: a fasting blood sugar, an A1C that shows the average sugar over about three months, a sugar test two hours after a sweet drink, or a random sugar test when someone already has clear symptoms. The cutoffs are the same for type 1 and type 2.",
      like: "A1C is the three-month report card; a single sugar test is one pop quiz."
    },
    pancreatitis: {
      text: "The pancreas's digestive juices switch on too early, while still inside it, and start digesting the pancreas itself. Gallstones and alcohol are the usual causes. It causes terrible upper-belly pain that goes through to the back. The swelling makes blood vessels leaky, so fluid leaves the bloodstream. Repeated attacks scar the pancreas, so it can't digest fat or make insulin.",
      like: "Cleaning chemicals that eat through the bottle they're stored in."
    },
    thyroidfn: {
      text: "The brain sends a signal (TSH) telling the thyroid in your neck to make thyroid hormone. Thyroid hormone sets how fast your body runs. When there's enough, the brain turns the signal down. Doctors read TSH and thyroid hormone together to see whether the thyroid or the brain's signal is the problem.",
      like: "A thermostat and a furnace. If the house is cold and the thermostat is calling for heat, the furnace is broken. If the thermostat isn't calling, the thermostat is broken."
    },
    hypothyroid: {
      text: "The thyroid doesn't make enough hormone, so everything slows down: tired, cold, constipated, slow heartbeat, dry skin, weight gain, foggy thinking. Most often the immune system attacks the thyroid (Hashimoto's). The brain turns up TSH trying to get more hormone.",
      like: "Running the whole body in low-power mode."
    },
    hyperthyroid: {
      text: "Too much thyroid hormone, so everything speeds up: hot, sweaty, losing weight, racing heart, anxious, shaky, loose stools. Most often antibodies keep switching the thyroid on (Graves'), which can also make the eyes bulge. A racing, irregular heartbeat can cause clots and strokes.",
      like: "The gas pedal is stuck down."
    },
    goiter: {
      text: "A goiter is a thyroid that has grown big. A nodule is a lump in it. Size doesn't tell you if the thyroid makes too much, too little, or the right amount of hormone. A big one can press on the windpipe, food pipe, or voice nerves.",
      like: "A big engine isn't always a fast engine."
    },
    pitadrfn: {
      text: "The pituitary, a pea-sized gland under the brain, sends signals that run other glands. The adrenal glands sit on top of the kidneys. Their outer layer makes cortisol (a stress and sugar hormone, controlled by the pituitary) and aldosterone (a salt-and-water hormone, controlled mostly by the kidneys). Their center makes adrenaline.",
      like: "The pituitary is the manager; the adrenal outer layer has two departments with different bosses."
    },
    adenoma: {
      text: "A harmless-type growth in the pituitary. Some make too much of a hormone. Big ones press on the nerves for vision right above it, so people lose the outer edges of their vision, and they can squash the rest of the pituitary so it stops working.",
      like: "A tenant who either throws loud parties (extra hormone) or just takes up too much room."
    },
    prolactin: {
      text: "Prolactin is the milk hormone. The brain normally keeps it low with dopamine. A pituitary tumor or medicines that block dopamine let it rise. High prolactin shuts down the reproductive hormones, so periods stop, sex drive drops, and milk can leak from the nipples, in any sex.",
      like: "Take your foot off the brake and the car rolls."
    },
    hypopit: {
      text: "The pituitary stops making one or more of its signals. Each missing signal causes its own problem: low thyroid, low cortisol, missing periods, poor growth, or peeing huge amounts. Missing the cortisol signal is the most dangerous, because the body can't handle stress or illness.",
      like: "The manager stops calling the departments, and each one goes quiet in its own way."
    },
    cushing: {
      text: "Too much cortisol, most often from taking steroid medicines for a long time. Cortisol raises blood sugar and breaks down muscle, skin, and bone. People get a round face, fat on the upper back and belly, thin arms and legs, easy bruising, wide purple stretch marks, weak bones, and infections.",
      like: "The stress alarm stuck on for months."
    },
    addison: {
      text: "The adrenal glands are damaged, usually by the immune system, so they make too little cortisol and too little aldosterone. People are tired, lose weight, have low blood pressure and low sodium, and high potassium. The pituitary keeps shouting for more cortisol, and that signal darkens the skin. Stress or illness can cause a crash into shock.",
      like: "No stress hormone and no salt-saving hormone, with the manager yelling louder and louder."
    },
    aldo: {
      text: "Too much of the salt-saving hormone. The kidneys hold on to salt and water and get rid of potassium, so blood pressure goes up and stays up, and potassium can drop low enough to cause weakness and cramps.",
      like: "A sponge that won't wring out, raising the pressure in the pipes."
    },
    achalasia: {
      text: "The nerves in the food pipe stop working. The valve at the bottom won't open and the pipe stops squeezing food down, so both food and drinks get stuck and come back up on their own.",
      like: "A door stuck shut at the end of a hallway where nobody's walking."
    }
  });

  /* ---------- Diagrams ---------- */
  function T(x, y, s, cls) { return '<text class="' + (cls || "dg-lbl sm") + '" x="' + x + '" y="' + y + '">' + s + "</text>"; }
  function S(d, color, w, extra) { return '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"' + (extra || "") + "/>"; }
  function box(x, y, w, h, fill, stroke, label) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2"/>' + T(x + w / 2, y + h / 2 + 5, label, "dg-lbl"); }
  var ARROW = '<defs><marker id="ahE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#4a5468"/></marker>' +
    '<marker id="ahR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#c2413a"/></marker></defs>';
  function A(d, red) { return '<path d="' + d + '" fill="none" stroke="' + (red ? "#c2413a" : "#4a5468") + '" stroke-width="3"' + (red ? ' stroke-dasharray="7 5"' : "") + ' marker-end="url(#' + (red ? "ahR" : "ahE") + ')"/>'; }
  var butterfly = function (cx, cy, s) {
    return '<path d="M' + cx + ' ' + (cy + 6 * s) + ' C' + (cx - 10 * s) + ' ' + (cy + 4 * s) + ' ' + (cx - 16 * s) + ' ' + (cy + 26 * s) + ' ' + (cx - 34 * s) + ' ' + (cy + 24 * s) +
      ' C' + (cx - 52 * s) + ' ' + (cy + 22 * s) + ' ' + (cx - 50 * s) + ' ' + (cy - 30 * s) + ' ' + (cx - 32 * s) + ' ' + (cy - 30 * s) + ' C' + (cx - 18 * s) + ' ' + (cy - 30 * s) + ' ' + (cx - 14 * s) + ' ' + (cy - 6 * s) + ' ' + cx + ' ' + (cy - 4 * s) +
      ' C' + (cx + 14 * s) + ' ' + (cy - 6 * s) + ' ' + (cx + 18 * s) + ' ' + (cy - 30 * s) + ' ' + (cx + 32 * s) + ' ' + (cy - 30 * s) + ' C' + (cx + 50 * s) + ' ' + (cy - 30 * s) + ' ' + (cx + 52 * s) + ' ' + (cy + 22 * s) + ' ' + (cx + 34 * s) + ' ' + (cy + 24 * s) +
      ' C' + (cx + 16 * s) + ' ' + (cy + 26 * s) + ' ' + (cx + 10 * s) + ' ' + (cy + 4 * s) + ' ' + cx + ' ' + (cy + 6 * s) + 'Z" fill="#f6b26b" stroke="#c27a17" stroke-width="2"/>';
  };

  var D = [
  {
    id: "pancreas", kind: "structure", sys: "pancreas", title: "The pancreas: ducts and islets", view: "0 0 400 330",
    svg: ARROW +
      S("M150 46 C66 40 44 150 70 210 C90 256 140 270 176 262", "#e8a69f", 24) +
      '<path d="M96 150 C92 118 120 102 150 106 C200 112 250 88 300 78 C340 70 372 82 370 100 C368 120 330 122 296 132 C250 144 214 160 180 176 C150 190 118 196 104 180 C98 172 96 162 96 150Z" fill="#f6d58a" stroke="#b7791f" stroke-width="2"/>' +
      S("M80 160 C110 156 140 148 180 140 C230 128 290 106 352 94", "#b7791f", 3) +
      S("M112 0 L112 70 C112 110 100 140 82 160", "#6f9a3e", 7) +
      '<circle cx="80" cy="161" r="6" fill="#7a3a2e"/>' +
      '<g fill="#e9c27a" stroke="#b7791f" stroke-width="1.5"><circle cx="232" cy="130" r="6"/><circle cx="242" cy="124" r="6"/><circle cx="240" cy="136" r="6"/><circle cx="250" cy="130" r="6"/></g>' +
      '<circle cx="190" cy="140" r="7" fill="#fff3d6" stroke="#c8463d" stroke-width="2"/>' +
      S("M196 146 L262 228", "#7b8496", 1.5, ' stroke-dasharray="4 4"') +
      '<circle cx="300" cy="262" r="58" fill="#fff3d6" stroke="#c8463d" stroke-width="2"/>' +
      '<g stroke="#b7791f" stroke-width="1"><circle cx="300" cy="262" r="12" fill="#f6e3a8"/><circle cx="276" cy="256" r="12" fill="#f6e3a8"/><circle cx="324" cy="256" r="12" fill="#f6e3a8"/><circle cx="288" cy="282" r="12" fill="#f6e3a8"/><circle cx="312" cy="282" r="12" fill="#f6e3a8"/><circle cx="300" cy="240" r="12" fill="#f6e3a8"/></g>' +
      '<g stroke="#a32b26" stroke-width="1"><circle cx="258" cy="232" r="10" fill="#f0a39c"/><circle cx="346" cy="236" r="10" fill="#f0a39c"/><circle cx="252" cy="284" r="10" fill="#f0a39c"/><circle cx="344" cy="292" r="10" fill="#f0a39c"/><circle cx="300" cy="312" r="9" fill="#f0a39c"/></g>' +
      T(150, 312, "duodenum") + T(335, 66, "tail") + T(196, 92, "body") + T(138, 214, "head") + T(150, 16, "bile duct") + T(300, 196, "islet (zoomed)"),
    spots: [
      { x: 124, y: 168, label: "Head of the pancreas", text: "Sits in the curve of the duodenum, right next to the common bile duct. Swelling here, or a stone at the shared opening, blocks drainage of enzymes and bile.", topics: ["pancfn", "pancreatitis"] },
      { x: 300, y: 104, label: "Body and tail", text: "Mostly acinar tissue (enzymes) with islets scattered throughout. In chronic pancreatitis, scar replaces both, so digestion and insulin production fail.", topics: ["pancfn", "pancreatitis"] },
      { x: 240, y: 116, label: "Acinar cells", text: "Make lipase, amylase, and proteases. Normally these activate in the duodenum. If they activate inside the pancreas, it digests itself (autodigestion).", topics: ["pancreatitis", "pancfn"] },
      { x: 168, y: 156, label: "Pancreatic duct", text: "Carries enzymes to the duodenum. Blockage keeps enzymes in the gland, where they activate early.", topics: ["pancreatitis"] },
      { x: 126, y: 40, label: "Common bile duct", text: "Brings bile from the liver and gallbladder. It joins the pancreatic duct at a shared opening.", topics: ["pancreatitis", "gallstones"] },
      { x: 60, y: 172, label: "Shared opening into the duodenum", text: "Where bile and pancreatic juice empty together. A gallstone stuck here is a top cause of acute pancreatitis.", topics: ["pancreatitis", "gallstones"] },
      { x: 300, y: 262, label: "Beta cells (islets)", text: "Make insulin. Destroyed by autoimmunity in type 1 diabetes (low C-peptide). In type 2 they overwork against insulin resistance, then decline.", topics: ["t1dm", "t2dm", "pancfn"] },
      { x: 346, y: 236, label: "Alpha cells (islets)", text: "Make glucagon, which raises glucose between meals. With stress hormones it pushes glucose even higher in DKA and HHS.", topics: ["pancfn", "dkahhs"] },
      { x: 56, y: 100, label: "Duodenum", text: "Where enzymes and bile mix with food. Enzymes are supposed to activate here, not in the pancreas.", topics: ["pancfn"] }
    ]
  },
  {
    id: "thyroidaxis", kind: "structure", sys: "thyroid", title: "The thyroid feedback loop", view: "0 0 400 360",
    svg: ARROW +
      box(40, 16, 170, 46, "#e6ecfb", "#4b5fc9", "Hypothalamus") +
      box(40, 116, 170, 46, "#e6f4f4", "#12898f", "Anterior pituitary") +
      A("M125 64 L125 112") + T(150, 94, "TRH", "dg-lbl") +
      A("M125 164 L125 222") + T(150, 198, "TSH", "dg-lbl") +
      butterfly(125, 262, 1.25) + T(125, 320, "thyroid", "dg-lbl") +
      A("M190 262 L262 262") + T(226, 252, "T4 > T3", "dg-lbl") +
      box(266, 236, 120, 52, "#fdf3dc", "#b7791f", "Body tissues") + T(326, 326, "T4 → T3 (active)") +
      A("M330 232 C340 140 300 64 216 40", true) + A("M318 232 C300 170 260 146 214 140", true) +
      T(252, 98, "− feedback", "dg-lbl"),
    spots: [
      { x: 30, y: 40, label: "Hypothalamus", text: "Releases TRH. A problem here causes tertiary (central) hypothyroidism: low T4 with low or inappropriately normal TSH.", topics: ["thyroidfn", "hypothyroid"] },
      { x: 30, y: 140, label: "Anterior pituitary", text: "Releases TSH, the best first screen for primary thyroid disease. Pituitary failure causes secondary (central) hypothyroidism.", topics: ["thyroidfn", "hypothyroid", "hypopit"] },
      { x: 100, y: 196, label: "TSH signal", text: "Rises when T4 is low (primary hypothyroidism) and falls when T4 is high (hyperthyroidism). Constant high TSH makes the gland grow (goiter).", topics: ["thyroidfn", "goiter"] },
      { x: 125, y: 262, label: "Thyroid gland", text: "Makes T4 (more) and T3 (more active). Hashimoto's damages it (hypo); Graves', toxic nodules, and thyroiditis cause too much hormone (hyper).", topics: ["hypothyroid", "hyperthyroid", "goiter"] },
      { x: 62, y: 248, label: "TSH receptor", text: "In Graves' disease, antibodies switch this receptor on, so the gland keeps making hormone even though TSH is suppressed.", topics: ["hyperthyroid"] },
      { x: 226, y: 278, label: "T4 and T3", text: "Too little: everything slows (fatigue, cold, constipation, bradycardia). Too much: everything speeds up (heat intolerance, weight loss, tachycardia, AFib).", topics: ["hypothyroid", "hyperthyroid"] },
      { x: 326, y: 304, label: "Body tissues", text: "Convert T4 to the more active T3. Thyroid hormone sets metabolic rate, heart rate, gut motility, brain development, muscle, and bone.", topics: ["thyroidfn"] },
      { x: 308, y: 110, label: "Negative feedback", text: "Enough T4/T3 turns down TRH and TSH. In primary disease, TSH moves opposite to T4 because this loop still works.", topics: ["thyroidfn", "hyperthyroid", "hypothyroid"] }
    ]
  },
  {
    id: "neck", kind: "structure", sys: "thyroid", title: "What a big thyroid presses on", view: "0 0 400 280",
    svg:
      '<ellipse cx="200" cy="150" rx="186" ry="118" fill="#f5d9c6" stroke="#c27a17" stroke-width="2"/>' +
      '<path d="M120 70 C150 46 250 46 280 70 C310 92 318 140 290 150 C268 158 254 128 236 116 C222 108 178 108 164 116 C146 128 132 158 110 150 C82 140 90 92 120 70Z" fill="#f6b26b" stroke="#c27a17" stroke-width="2"/>' +
      '<circle cx="292" cy="112" r="16" fill="#f9d48c" stroke="#b7791f" stroke-width="2"/>' +
      '<circle cx="200" cy="136" r="34" fill="#e8f1f8" stroke="#5a78c4" stroke-width="5"/>' +
      '<ellipse cx="200" cy="198" rx="26" ry="14" fill="#f0a39c" stroke="#b13a32" stroke-width="2"/>' +
      '<rect x="176" y="232" width="48" height="26" rx="8" fill="#e2ddd2" stroke="#8790a3" stroke-width="2"/>' +
      '<circle cx="164" cy="180" r="5" fill="#f3d36b" stroke="#b7791f" stroke-width="2"/><circle cx="236" cy="180" r="5" fill="#f3d36b" stroke="#b7791f" stroke-width="2"/>' +
      '<circle cx="98" cy="186" r="12" fill="#e8a69f" stroke="#b13a32" stroke-width="2"/><circle cx="302" cy="186" r="12" fill="#e8a69f" stroke="#b13a32" stroke-width="2"/>' +
      T(200, 24, "front of neck") + T(200, 274, "spine (back)") + T(200, 140, "trachea") + T(200, 224, "esophagus") + T(330, 84, "nodule"),
    spots: [
      { x: 120, y: 92, label: "Thyroid lobe", text: "Wraps around the front and sides of the trachea. An enlarged gland (goiter) can be hypo-, hyper-, or normally functioning.", topics: ["goiter", "hypothyroid", "hyperthyroid"] },
      { x: 200, y: 62, label: "Isthmus", text: "The bridge joining the two lobes, lying across the front of the trachea.", topics: ["thyroidfn", "goiter"] },
      { x: 292, y: 112, label: "Thyroid nodule", text: "A lump in the gland. Most are benign; concern rises with childhood radiation or family history. Some make hormone on their own (autonomous) and cause hyperthyroidism.", topics: ["goiter", "hyperthyroid"] },
      { x: 224, y: 112, label: "Trachea", text: "A large goiter can narrow it → trouble breathing or stridor. That's an airway emergency.", topics: ["goiter"] },
      { x: 200, y: 198, label: "Esophagus", text: "Behind the trachea. Compression → dysphagia.", topics: ["goiter"] },
      { x: 236, y: 180, label: "Recurrent laryngeal nerve", text: "Runs in the groove between trachea and esophagus and controls the vocal cords. Compression → hoarseness.", topics: ["goiter"] },
      { x: 98, y: 186, label: "Carotid artery and jugular vein", text: "Run beside the gland. Not a lecture focus; shown so you can orient the picture.", topics: [] }
    ]
  },
  {
    id: "hpa", kind: "structure", sys: "adrenal", title: "Pituitary and adrenal: who controls what", view: "0 0 400 380",
    svg: ARROW +
      box(20, 14, 170, 44, "#e6ecfb", "#4b5fc9", "Hypothalamus") +
      S("M40 92 L170 112 M40 112 L170 92", "#7b8496", 6) + T(105, 86, "optic chiasm") +
      S("M105 60 L105 134", "#c27a17", 6) +
      '<ellipse cx="86" cy="160" rx="30" ry="24" fill="#9fd6d8" stroke="#12898f" stroke-width="2"/>' +
      '<ellipse cx="132" cy="160" rx="20" ry="20" fill="#cfd6f3" stroke="#4b5fc9" stroke-width="2"/>' +
      T(76, 200, "anterior") + T(140, 200, "posterior") +
      A("M100 186 C120 260 180 270 236 252") + T(160, 294, "ACTH", "dg-lbl") +
      '<path d="M300 300 C250 300 236 340 262 362 C282 378 326 378 344 360 C370 334 352 300 300 300Z" fill="#c8463d" opacity=".8" stroke="#8f1d16" stroke-width="2"/>' +
      '<path d="M246 288 C258 222 288 204 300 204 C312 204 344 222 356 288 C330 300 272 300 246 288Z" fill="#f6b26b" stroke="#c27a17" stroke-width="2"/>' +
      '<path d="M272 280 C280 246 292 236 300 236 C308 236 322 246 330 280 C314 286 288 286 272 280Z" fill="#a0522d" stroke="#6b3418" stroke-width="2"/>' +
      A("M356 344 C390 320 392 270 362 262", false) + T(372, 372, "renin, K⁺", "dg-lbl") +
      T(300, 196, "adrenal gland", "dg-lbl") + T(306, 340, "kidney", "dg-lbl") +
      T(290, 120, "Cortisol ← ACTH") + T(290, 140, "Aldosterone ← renin + K⁺") + T(290, 160, "Medulla: epi / norepi"),
    spots: [
      { x: 205, y: 36, label: "Hypothalamus", text: "Makes releasing hormones (TRH, CRH), dopamine that holds prolactin down, and ADH and oxytocin that the posterior pituitary stores.", topics: ["pitadrfn", "prolactin"] },
      { x: 186, y: 102, label: "Optic chiasm", text: "Sits right above the pituitary. An adenoma pushing up on its center causes bitemporal hemianopia (outer visual fields lost).", topics: ["adenoma"] },
      { x: 105, y: 126, label: "Pituitary stalk", text: "Carries dopamine down from the hypothalamus. A mass that compresses it removes the brake on prolactin.", topics: ["prolactin", "adenoma"] },
      { x: 60, y: 160, label: "Anterior pituitary", text: "Makes TSH, ACTH, GH, prolactin, FSH, and LH. Adenomas start here; failure of these cells is hypopituitarism.", topics: ["adenoma", "hypopit", "prolactin", "cushing"] },
      { x: 150, y: 160, label: "Posterior pituitary", text: "Releases ADH and oxytocin. Losing ADH → large volumes of dilute urine.", topics: ["hypopit", "pitadrfn"] },
      { x: 196, y: 268, label: "ACTH signal", text: "Drives cortisol. High in Addison's (no feedback → darker skin) and Cushing's disease; low with an adrenal tumor or steroid medicine.", topics: ["cushing", "addison", "hypopit"] },
      { x: 254, y: 252, label: "Adrenal cortex: cortisol", text: "Too much → Cushing syndrome (hyperglycemia, central fat, striae, weak bones). Too little → fatigue, low BP, hypoglycemia, adrenal crisis.", topics: ["cushing", "addison"] },
      { x: 348, y: 252, label: "Adrenal cortex: aldosterone", text: "Driven by renin–angiotensin and K⁺, not mainly ACTH. Too much → hypertension, hypokalemia, alkalosis. Too little (Addison's) → ↓Na⁺, ↑K⁺, low BP.", topics: ["aldo", "addison", "pitadrfn"] },
      { x: 300, y: 262, label: "Adrenal medulla", text: "Makes epinephrine and norepinephrine (fight or flight).", topics: ["pitadrfn"] },
      { x: 268, y: 336, label: "Kidney (renin)", text: "Releases renin when perfusion is low. In primary hyperaldosteronism renin is suppressed; in renal artery stenosis both renin and aldosterone are high.", topics: ["aldo"] }
    ]
  }
  ];
  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);

  /* The GI biliary diagram's shared-opening spot also relates to pancreatitis now. */
  window.DIAGRAMS.forEach(function (dg) {
    if (dg.id !== "biliary") return;
    dg.spots.forEach(function (p) { if (/pancreatic ducts empty/.test(p.label) && p.topics.indexOf("pancreatitis") < 0) p.topics.push("pancreatitis"); });
  });

  /* ---------- Picture-quiz figures from the endocrine lecture slides ---------- */
  var base = window.SLIDE_DECKS.length;
  window.SLIDE_DECKS.push(
    { mod: "Final", title: "Diseases of the Pancreas", sys: "pancreas" },
    { mod: "Final", title: "Diseases of the Thyroid Gland", sys: "thyroid" }
  );
  window.SLIDES.push(
    { id: "p03", deck: base, n: 3, title: "Introduction to Diabetes Mellitus" },
    { id: "p04", deck: base, n: 4, title: "Type 1 Diabetes Mellitus (1 of 2)" },
    { id: "p06", deck: base, n: 6, title: "Type 2 Diabetes Mellitus (1 of 2)" },
    { id: "p10", deck: base, n: 10, title: "Pancreatitis: Etiology, Pathogenesis, and Manifestations" },
    { id: "t03", deck: base + 1, n: 3, title: "Disorders of Thyroid Hormone Production" },
    { id: "t05", deck: base + 1, n: 5, title: "Hypothyroidism Part 2: Diagnosis and Impact on Health" },
    { id: "t07", deck: base + 1, n: 7, title: "Hyperthyroidism Part 1" },
    { id: "t11", deck: base + 1, n: 11, title: "Introduction to Structural Thyroid Disorders" }
  );
  window.FIGURES.push(
    { f: "p03-1.jpg", slide: "p03", topic: "pancfn" },
    { f: "p03-2.jpg", slide: "p03", topic: "pancfn" },
    { f: "p04-1.jpg", slide: "p04", topic: "t1dm" },
    { f: "p06-1.jpg", slide: "p06", topic: "t2dm" },
    { f: "p06-2.jpg", slide: "p06", topic: "dkahhs" },
    { f: "p10-1.jpg", slide: "p10", topic: "pancreatitis" },
    { f: "t03-1.jpg", slide: "t03", topic: "thyroidfn" },
    { f: "t03-2.jpg", slide: "t03", topic: "thyroidfn" },
    { f: "t03-3.jpg", slide: "t03", topic: "thyroidfn" },
    { f: "t05-1.jpg", slide: "t05", topic: "hypothyroid" },
    { f: "t07-1.jpg", slide: "t07", topic: "hyperthyroid" },
    { f: "t11-1.jpg", slide: "t11", topic: "goiter" },
    { f: "t11-2.jpg", slide: "t11", topic: "goiter" }
  );
})();
