/* One tap-to-learn diagram per topic, plus the blood-vessel structure diagram.
   All drawn for this site. Each diagram's "topic" ties it to a topic page. */
(function () {
  function defs(id) { return '<defs><marker id="ah-' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" class="dg-ah"/></marker></defs>'; }
  function arrow(id, d, cls) { return '<path class="' + (cls || "dg-arrow") + '" d="' + d + '" marker-end="url(#ah-' + id + ')"/>'; }
  function T(x, y, s, cls) { return '<text class="' + (cls || "dg-lbl") + '" x="' + x + '" y="' + y + '">' + s + "</text>"; }
  function dots(list, r, cls) { return list.map(function (p) { return '<circle class="' + cls + '" cx="' + p[0] + '" cy="' + p[1] + '" r="' + r + '"/>'; }).join(""); }
  var KIDNEY = function (x, y, s, cls) { s = s || 1; return '<path class="' + (cls || "dg-kidney") + '" transform="translate(' + x + " " + y + ") scale(" + s + ')" d="M0 -60 C-40 -50 -40 50 0 60 C25 66 35 30 25 0 C35 -30 25 -66 0 -60Z"/>'; };
  var LUNGS = function (x, y, s) { return '<g transform="translate(' + x + " " + y + ") scale(" + (s || 1) + ')"><path class="dg-tissue" d="M-8 -30 C-40 -26 -48 20 -40 34 C-30 44 -10 38 -8 24Z"/><path class="dg-tissue" d="M8 -30 C40 -26 48 20 40 34 C30 44 10 38 8 24Z"/><rect class="dg-airway" x="-4" y="-48" width="8" height="26" rx="3"/></g>'; };

  var D = [
  /* ---------- Structure: blood vessels (Cardiac 1 intro) ---------- */
  { id: "vessels", sys: "card1", kind: "structure", title: "Arteries, veins & capillaries", view: "0 0 400 290",
    svg: defs("vessels") +
      '<circle class="dg-adv" cx="80" cy="110" r="58"/><circle class="dg-media" cx="80" cy="110" r="46"/><circle class="dg-intima" cx="80" cy="110" r="30"/><circle class="dg-lumen" cx="80" cy="110" r="26"/>' +
      '<path class="dg-vein-wall" d="M270 60 C320 52 345 90 342 120 C338 160 300 170 268 160 C232 150 222 116 232 90 C238 72 252 63 270 60Z"/><path class="dg-vein-lumen" d="M272 72 C310 66 330 96 328 120 C324 150 296 156 270 150 C244 142 236 118 244 96 C250 80 258 74 272 72Z"/>' +
      '<path class="dg-valve-l" d="M250 128 L282 100 M318 130 L286 102"/>' +
      '<path class="dg-capbed" d="M40 240 C90 200 130 270 180 230 C230 190 270 270 360 235"/>' +
      dots([[90, 228], [140, 245], [200, 222], [260, 248], [310, 236]], 6, "dg-rbc") +
      arrow("vessels", "M30 268 L370 268") +
      T(80, 190, "Artery") + T(285, 190, "Vein") + T(200, 205, "Capillary") + T(200, 285, "flow → tissue → back to heart", "dg-lbl sm"),
    spots: [
      { x: 80, y: 110, label: "Endothelium (tunica intima)", text: "The smooth inner lining. Healthy endothelium releases nitric oxide to relax the vessel and keep blood from clotting. Damage here starts atherosclerosis.", topics: ["athero"] },
      { x: 128, y: 70, label: "Smooth muscle (tunica media)", text: "Thick in arteries. It tightens or relaxes to set systemic vascular resistance (SVR), and that is half of the blood pressure equation: MAP = CO × SVR.", topics: ["htn"] },
      { x: 300, y: 72, label: "Vein wall", text: "Thin and stretchy. Veins hold 60–70% of your blood volume at low pressure, so they act as the body's reservoir.", topics: ["venous"] },
      { x: 284, y: 120, label: "Venous valves", text: "One-way valves plus the calf muscle pump push blood back up to the heart. If the valves fail, blood pools (CVI). If blood sits still, it clots (DVT).", topics: ["venous"] },
      { x: 200, y: 230, label: "Capillaries", text: "One cell thick, where oxygen, nutrients, and fluid trade with the tissues. Perfusion = getting oxygenated blood to this level. Flow = pressure gradient ÷ resistance.", topics: ["fluid", "pad"] }
    ] },

  /* ---------- Foundations ---------- */
  { id: "acidbase-d", topic: "acidbase", sys: "found", title: "Who fixes pH?", view: "0 0 400 260",
    svg: defs("ab") + '<circle class="dg-dial" cx="200" cy="62" r="36"/>' + T(200, 58, "pH", "dg-lbl big") + T(200, 76, "7.35–7.45", "dg-lbl sm") +
      LUNGS(90, 105, 1.1) + KIDNEY(310, 105, 0.7) + T(90, 30, "Lungs · fast") + T(310, 30, "Kidneys · slow") +
      '<path class="dg-beam" d="M60 180 L340 180"/><path class="dg-base" d="M200 182 L178 222 L222 222Z"/>' +
      '<path class="dg-pan" d="M50 180 Q95 214 140 180"/><path class="dg-pan" d="M260 180 Q305 214 350 180"/>' + T(95, 202, "CO₂ = acid") + T(305, 202, "HCO₃⁻ = base") +
      arrow("ab", "M90 150 L92 170", "dg-arrow thin") + arrow("ab", "M310 150 L308 170", "dg-arrow thin"),
    spots: [
      { x: 244, y: 36, label: "Blood pH", text: "Normal is 7.35–7.45. Below 7.35 is acidosis, above 7.45 is alkalosis. Look at pH first, then ask what moved it.", topics: [] },
      { x: 50, y: 110, label: "Lungs control CO₂ (minutes)", text: "Breathing slower or shallower holds CO₂ in (respiratory acidosis: COPD, a tiring asthmatic). Breathing fast blows it off (respiratory alkalosis: early pneumonia, PE, anxiety).", topics: ["copd", "asthma", "pneumonia"] },
      { x: 95, y: 228, label: "PaCO₂ 35–45", text: "CO₂ acts like an acid. If CO₂ moves opposite to pH (CO₂ up, pH down), the problem is respiratory.", topics: [] },
      { x: 350, y: 110, label: "Kidneys control HCO₃⁻ and H⁺ (days)", text: "The kidneys excrete acid and make or save bicarbonate. Failing kidneys can't, so AKI and CKD cause metabolic acidosis. The kidneys also compensate slowly for lung problems.", topics: ["aki", "ckd"] },
      { x: 305, y: 228, label: "HCO₃⁻ 22–26", text: "Bicarbonate is base. If HCO₃⁻ moves the same way as pH (both down), the problem is metabolic. Poor perfusion making lactic acid is another metabolic cause.", topics: ["hf"] }
    ] },
  { id: "fluid-d", topic: "fluid", sys: "found", title: "Fluid at the capillary", view: "0 0 400 270",
    svg: defs("fl") + '<rect class="dg-tissue-bg" x="0" y="0" width="400" height="270" rx="10"/>' +
      '<rect class="dg-capvessel" x="30" y="100" width="340" height="62" rx="31"/>' +
      dots([[90, 120], [150, 140], [205, 118], [255, 142], [320, 125]], 7, "dg-prot") +
      '<path class="dg-gap" d="M186 162 L214 162"/>' + dots([[192, 182], [204, 196], [196, 210], [210, 222]], 5, "dg-drop") +
      '<ellipse class="dg-edema" cx="200" cy="238" rx="80" ry="20"/>' +
      arrow("fl", "M100 98 L100 52") + arrow("fl", "M300 52 L300 96") +
      T(100, 40, "pushes fluid out") + T(300, 40, "pulls fluid back in") + T(60, 92, "artery end", "dg-lbl sm") + T(340, 92, "vein end", "dg-lbl sm"),
    spots: [
      { x: 100, y: 70, label: "Hydrostatic pressure (push)", text: "Blood pressure in the capillary pushes fluid out. It rises when blood backs up, like in heart failure, DVT, or fluid overload from kidney failure.", topics: ["hf", "venous", "ckd"] },
      { x: 300, y: 70, label: "Oncotic pressure (pull)", text: "Albumin in the blood pulls water back in. If albumin is low, the pull is weak and fluid stays in the tissues.", topics: ["nephrotic"] },
      { x: 255, y: 142, label: "Albumin", text: "The main protein that holds water in the vessels. Nephrotic syndrome loses it in the urine, which causes massive edema.", topics: ["nephrotic"] },
      { x: 150, y: 172, label: "Leaky capillary wall", text: "Inflammation (histamine, cytokines) opens gaps in the wall, so fluid and protein escape. That's the swelling of infection, injury, and pneumonia exudate.", topics: ["defense", "pneumonia"] },
      { x: 280, y: 238, label: "Edema", text: "Fluid trapped in the tissues. Weigh daily: a quick gain of 1–2 kg is fluid, not fat. Edema plus crackles and JVD means fluid overload.", topics: ["hf", "gn"] }
    ] },
  { id: "defense-d", topic: "defense", sys: "found", title: "Inflammation at work", view: "0 0 400 280",
    svg: defs("df") + '<rect class="dg-skin" x="0" y="20" width="400" height="22"/><rect class="dg-tissue-bg" x="0" y="42" width="400" height="238"/>' +
      '<path class="dg-splinter" d="M180 0 L214 92"/>' + dots([[212, 98], [222, 92], [204, 106]], 5, "dg-bug") +
      '<circle class="dg-cell" cx="90" cy="120" r="26"/>' + dots([[82, 112], [96, 110], [88, 126], [100, 128], [76, 128]], 3, "dg-gran") +
      dots([[130, 112], [140, 124], [126, 136]], 3, "dg-gran") +
      '<rect class="dg-capvessel" x="10" y="190" width="380" height="54" rx="27"/>' + '<path class="dg-gap" d="M246 190 L270 190"/>' +
      '<circle class="dg-wbc" cx="258" cy="176" r="12"/><circle class="dg-wbc" cx="236" cy="150" r="12"/><circle class="dg-wbc" cx="300" cy="216" r="12"/>' +
      '<path class="dg-nerve" d="M330 60 C350 80 310 100 330 120 C350 140 310 160 330 180"/>' +
      arrow("df", "M380 216 L398 216") + T(90, 166, "mast cell") + T(330, 50, "nerve") + T(70, 268, "dilated, leaky vessel"),
    spots: [
      { x: 214, y: 70, label: "Injury or germ", text: "Damaged cells and microbes set off the alarm. Resident macrophages recognize them and release cytokines.", topics: [] },
      { x: 90, y: 120, label: "Mast cell (histamine)", text: "Releases histamine and other mediators within seconds. Histamine dilates vessels and makes them leaky. It also drives allergic rhinitis and the early phase of asthma.", topics: ["asthma", "uri"] },
      { x: 60, y: 217, label: "Vasodilation", text: "More blood flows in: redness and heat.", topics: [] },
      { x: 258, y: 205, label: "Leaky capillary (exudate)", text: "Fluid and protein escape into the tissue: swelling. In the lung, this exudate fills the alveoli in pneumonia.", topics: ["pneumonia", "fluid"] },
      { x: 236, y: 150, label: "White blood cells", text: "Neutrophils squeeze out to eat the invaders and make pus. That's why WBCs rise in infection, and why sputum turns purulent.", topics: ["pneumonia", "pyelo"] },
      { x: 330, y: 120, label: "Nerve endings (pain)", text: "Prostaglandins and bradykinin sensitize nerves: pain.", topics: [] },
      { x: 370, y: 190, label: "Cytokines to the whole body", text: "When cytokines spread through the blood, you get fever, malaise, high WBC, and high CRP and ESR. That's systemic inflammation, and sepsis is the extreme version.", topics: ["pyelo", "itis"] }
    ] },

  /* ---------- Respiratory ---------- */
  { id: "uri-d", topic: "uri", sys: "resp", title: "The upper airway", view: "0 0 400 320",
    svg: '<rect class="dg-sinus" x="50" y="18" width="100" height="36" rx="16"/><rect class="dg-ostium" x="98" y="52" width="10" height="12"/>' +
      '<path class="dg-airtube" d="M30 64 L210 64 L210 196 L180 196 L180 94 L30 94Z"/>' +
      '<path class="dg-mucosa" d="M30 64 L180 64 M30 94 L180 94"/>' +
      '<ellipse class="dg-tonsil" cx="168" cy="140" rx="10" ry="18"/><ellipse class="dg-tonsil" cx="222" cy="140" rx="10" ry="18"/>' +
      '<rect class="dg-larynx" x="176" y="196" width="38" height="30" rx="6"/><path class="dg-cord" d="M182 212 L193 206 M208 212 L197 206"/>' +
      '<rect class="dg-airway" x="185" y="226" width="20" height="44" rx="6"/><path class="dg-airway-l" d="M195 268 L160 300 M195 268 L230 300"/>' +
      T(100, 12, "sinus") + T(60, 84, "nasal cavity", "dg-lbl sm") + T(260, 120, "pharynx") + T(260, 214, "larynx") + T(260, 260, "trachea"),
    spots: [
      { x: 103, y: 50, label: "Sinus ostium", text: "The tiny drain hole of a sinus. Swelling blocks it, trapped mucus grows bacteria, and that's sinusitis: facial pressure worse leaning forward. It's usually only bacterial after more than 10 days.", topics: ["uri"] },
      { x: 150, y: 79, label: "Nasal mucosa", text: "Warms, filters, and moistens air. Viruses (the common cold) or irritants (nonallergic rhinitis, not IgE) inflame it: congestion and runny nose.", topics: ["uri"] },
      { x: 195, y: 112, label: "Pharynx", text: "Pharyngitis: sore throat. Most are viral (with cough and runny nose). Strep throat has fever, exudate, and no cough, and it needs testing because of its complications.", topics: ["uri", "gn"] },
      { x: 236, y: 152, label: "Tonsils", text: "Lymph tissue that traps germs. Tonsillitis: red, swollen tonsils, trouble swallowing. Watch the airway if swelling is severe.", topics: ["uri"] },
      { x: 195, y: 211, label: "Larynx (vocal cords)", text: "Laryngitis: swollen cords, a hoarse voice, and a dry cough. Usually viral or from overuse.", topics: ["uri"] },
      { x: 195, y: 290, label: "Bronchi", text: "Acute bronchitis: inflamed large airways with a cough that can last weeks. The chest X-ray is negative, because the workup is about ruling out pneumonia.", topics: ["uri", "pneumonia"] }
    ] },
  { id: "pneumonia-d", topic: "pneumonia", sys: "resp", title: "Normal air sac vs. pneumonia", view: "0 0 400 260",
    svg: defs("pn") + '<circle class="dg-alv-air" cx="105" cy="105" r="62"/><circle class="dg-alv-fill" cx="295" cy="105" r="62"/>' +
      dots([[275, 85], [310, 95], [290, 125], [320, 128], [270, 115]], 9, "dg-wbc") +
      '<path class="dg-cap-o" d="M30 190 C70 160 140 160 180 190"/><path class="dg-cap-d" d="M220 190 C260 160 330 160 370 190"/>' +
      arrow("pn", "M105 120 L105 160") + T(105, 225, "Normal: O₂ crosses") + T(295, 225, "Pneumonia: sac filled") + T(105, 84, "air", "dg-lbl sm") + T(295, 62, "exudate", "dg-lbl sm"),
    spots: [
      { x: 140, y: 90, label: "Healthy alveolus", text: "Filled with air. Oxygen crosses a thin wall into the capillary right next to it.", topics: [] },
      { x: 60, y: 182, label: "Capillary turning red", text: "Blood picks up oxygen as it passes a working air sac.", topics: [] },
      { x: 250, y: 92, label: "Consolidation", text: "Protein-rich exudate fills the sac (consolidation on X-ray, crackles, dullness). Bacterial pneumonia usually affects one lobe and causes a productive cough.", topics: ["pneumonia"] },
      { x: 310, y: 95, label: "Neutrophils", text: "WBCs rush in to fight the bacteria. They make the sputum purulent, and rust-colored when red cells leak too.", topics: ["defense"] },
      { x: 340, y: 182, label: "Shunt: blood stays blue", text: "Blood still flows past but picks up no oxygen. That's a shunt, so SpO₂ falls and extra oxygen helps only so much. Watch for a tiring client whose CO₂ starts rising.", topics: ["acidbase"] }
    ] },
  { id: "tb-d", topic: "tb", sys: "resp", title: "TB granuloma: walling it off", view: "0 0 400 280",
    svg: dots([[200, 30], [260, 44], [306, 84], [324, 140], [306, 196], [260, 236], [200, 250], [140, 236], [94, 196], [76, 140], [94, 84], [140, 44]], 11, "dg-lymph") +
      dots([[200, 64], [248, 80], [278, 124], [278, 160], [248, 202], [200, 216], [152, 202], [122, 160], [122, 124], [152, 80]], 17, "dg-macro") +
      '<path class="dg-caseous" d="M200 92 C250 92 260 130 250 160 C240 190 170 196 152 166 C136 140 152 92 200 92Z"/>' +
      '<path class="dg-bacilli" d="M190 120 l10 5 M214 132 l9 -6 M182 150 l10 2 M210 158 l8 6 M230 146 l6 8"/>' + T(200, 276, "Latent TB = bacteria walled off but alive"),
    spots: [
      { x: 214, y: 132, label: "Mycobacterium tuberculosis", text: "Spread by airborne droplets (N95 in the hospital). Its waxy, lipid-rich wall blocks the lysosome, so it survives inside macrophages.", topics: ["tb"] },
      { x: 180, y: 160, label: "Caseous (cheese-like) center", text: "Dead tissue in the middle of the granuloma. Bacteria can stay alive here for years.", topics: ["tb"] },
      { x: 278, y: 124, label: "Macrophages", text: "They swallow the bacteria but can't kill them, so they fuse into a wall.", topics: ["defense"] },
      { x: 76, y: 140, label: "T-cell ring", text: "Lymphocytes hold the wall together. Latent TB: no symptoms, not contagious, but a positive skin or blood test.", topics: ["tb"] },
      { x: 200, y: 250, label: "Reactivation", text: "If immunity drops (HIV, steroids, diabetes, cancer, age), the wall breaks down and TB becomes active: fever, night sweats, weight loss, cough. Now it's contagious.", topics: ["tb"] }
    ] },
  { id: "asthma-d", topic: "asthma", sys: "resp", title: "Airway: normal vs. asthma attack", view: "0 0 400 250",
    svg: '<circle class="dg-sm" cx="105" cy="115" r="66"/><circle class="dg-mucosa-c" cx="105" cy="115" r="54"/><circle class="dg-lumen" cx="105" cy="115" r="42"/>' +
      '<circle class="dg-sm thick" cx="295" cy="115" r="58"/><circle class="dg-mucosa-c swollen" cx="295" cy="115" r="48"/><circle class="dg-lumen" cx="295" cy="115" r="16"/>' +
      '<path class="dg-mucus" d="M286 108 C292 100 304 104 304 112 C306 122 292 126 288 120Z"/>' +
      T(105, 210, "Normal") + T(295, 210, "Asthma attack") + T(295, 232, "tight muscle · swelling · mucus", "dg-lbl sm"),
    spots: [
      { x: 105, y: 115, label: "Open airway", text: "Air moves freely. Between attacks, an asthmatic airway can look close to this, because asthma is reversible.", topics: [] },
      { x: 295, y: 57, label: "Smooth muscle spasm (early phase)", text: "Within minutes of a trigger, mast cells release histamine and leukotrienes, and the muscle clamps down. A rescue bronchodilator (albuterol) relaxes it.", topics: ["defense"] },
      { x: 255, y: 140, label: "Swollen lining (late phase)", text: "Hours later, eosinophils and T cells cause edema and more inflammation. That's why controller steroids matter.", topics: ["asthma"] },
      { x: 312, y: 112, label: "Mucus plug", text: "Thick mucus narrows the airway further and can trap air.", topics: ["asthma"] },
      { x: 335, y: 160, label: "Danger sign", text: "Wheezing that gets quieter (a silent chest), confusion, or a rising CO₂ means the client is tiring out. That's respiratory acidosis, and it's an emergency.", topics: ["acidbase"] }
    ] },
  { id: "copd-d", topic: "copd", sys: "resp", title: "COPD: bronchitis + emphysema", view: "0 0 400 260",
    svg: defs("cp") + '<circle class="dg-sm thick" cx="100" cy="110" r="64"/><circle class="dg-mucosa-c swollen" cx="100" cy="110" r="52"/><circle class="dg-mucus-fill" cx="100" cy="110" r="26"/>' +
      '<path class="dg-alv-big" d="M230 50 C290 30 360 50 370 110 C380 170 320 190 270 180 C220 170 200 90 230 50Z"/><path class="dg-septa" d="M260 70 L276 98 M330 66 L318 96 M296 150 L300 176"/>' +
      arrow("cp", "M300 120 C330 130 330 100 300 110", "dg-arrow thin") +
      T(100, 205, "Chronic bronchitis") + T(300, 205, "Emphysema") + T(200, 248, "CO₂ stays in · O₂ stays low", "dg-lbl"),
    spots: [
      { x: 100, y: 110, label: "Mucus-filled airway", text: "Chronic bronchitis: productive cough at least 3 months a year for 2 years. Mucus and swelling block airflow, so these clients are often hypoxic and cyanotic.", topics: ["copd"] },
      { x: 100, y: 50, label: "Thick, inflamed wall", text: "Smoke enlarges the mucus glands and paralyzes the cilia, so the mucociliary escalator stops clearing.", topics: ["copd"] },
      { x: 250, y: 75, label: "Destroyed alveolar walls", text: "Emphysema: proteases (from smoke, or alpha-1 antitrypsin deficiency) eat the walls. Small sacs merge into big floppy ones with less surface area.", topics: ["copd"] },
      { x: 330, y: 150, label: "Trapped air", text: "The lungs lose their elastic recoil, so air goes in but won't come out. You get a barrel chest, a flattened diaphragm, and pursed-lip breathing.", topics: ["copd"] },
      { x: 200, y: 222, label: "Chronic CO₂ retention", text: "Compensated respiratory acidosis: high CO₂ and high HCO₃⁻. The target SpO₂ is 88–92%.", topics: ["acidbase"] }
    ] },
  { id: "trauma-d", topic: "trauma", sys: "resp", title: "Tension pneumothorax", view: "0 0 400 300",
    svg: defs("tr") + '<rect class="dg-chest" x="30" y="40" width="340" height="240" rx="70"/>' +
      '<path class="dg-pleura-air" d="M205 52 C300 50 360 110 358 190 C356 240 320 270 270 268 L205 268Z"/>' +
      '<path class="dg-blood-pool" d="M210 248 L340 248 C330 262 300 270 270 270 L210 270Z"/>' +
      '<path class="dg-tissue" d="M150 60 C80 70 60 160 70 230 C78 262 120 262 160 250 L176 120Z"/>' +
      '<path class="dg-tissue" d="M232 130 C262 126 268 170 252 190 C236 200 222 186 224 160Z"/>' +
      '<rect class="dg-airway" x="168" y="4" width="18" height="62" rx="6" transform="rotate(-10 177 40)"/>' +
      '<path class="dg-heartm" d="M150 190 C130 170 140 150 160 160 C175 140 196 160 182 186 L162 214Z"/>' +
      arrow("tr", "M300 160 L230 175", "dg-arrow push") + T(300, 120, "air in pleural space"),
    spots: [
      { x: 310, y: 90, label: "Air in the pleural space", text: "A one-way leak lets air in with each breath but not out. The vacuum that held the lung open is gone, and pressure keeps building.", topics: ["trauma"] },
      { x: 245, y: 160, label: "Collapsed lung", text: "The lung shrinks toward the hilum. You'll see absent breath sounds, hyperresonance, and sudden dyspnea on that side.", topics: ["trauma"] },
      { x: 176, y: 30, label: "Trachea shifts away", text: "Tracheal deviation away from the affected side is a late, ominous sign of tension.", topics: ["trauma"] },
      { x: 160, y: 182, label: "Heart and great veins squeezed", text: "Pressure pushes the mediastinum over and kinks venous return, causing obstructive shock: hypotension, JVD, tachycardia. This is ALWAYS the priority client: needle decompression.", topics: ["trauma"] },
      { x: 110, y: 160, label: "Other lung", text: "Still working, but now carries the whole load. Acute respiratory acidosis develops as ventilation fails.", topics: ["acidbase"] },
      { x: 300, y: 258, label: "Blood (hemothorax)", text: "If blood fills the space instead of air, you see the same collapse plus signs of blood loss: pale, cool, tachycardic, hypotensive.", topics: ["fluid"] }
    ] },

  /* ---------- Cardiac 1 ---------- */
  { id: "htn-d", topic: "htn", sys: "card1", title: "Blood pressure = CO × SVR", view: "0 0 400 290",
    svg: defs("ht") + '<path class="dg-heartm" d="M80 150 C40 120 30 80 60 64 C78 56 90 68 92 78 C96 66 110 56 126 64 C152 80 130 124 80 150Z"/>' +
      '<path class="dg-vessel-tube" d="M140 92 L380 92 L380 132 L140 132Z"/><path class="dg-squeeze" d="M240 92 C260 104 280 104 300 92 M240 132 C260 120 280 120 300 132"/>' +
      arrow("ht", "M150 112 L232 112") + T(85, 175, "CO: pump") + T(270, 150, "SVR: tight arteries") +
      '<g class="dg-organs">' + T(60, 235, "🧠", "dg-emoji") + T(150, 235, "👁️", "dg-emoji") + T(240, 235, "🫀", "dg-emoji") + T(330, 235, "🫘", "dg-emoji") + "</g>" +
      T(60, 270, "stroke", "dg-lbl sm") + T(150, 270, "retinopathy", "dg-lbl sm") + T(240, 270, "LVH, HF, MI", "dg-lbl sm") + T(330, 270, "CKD", "dg-lbl sm"),
    spots: [
      { x: 84, y: 100, label: "Cardiac output", text: "CO = heart rate × stroke volume. More volume (salt and water retention) or a faster, stronger heart raises BP.", topics: ["hf"] },
      { x: 270, y: 112, label: "Systemic vascular resistance", text: "Narrowed, stiff, or constricted arteries raise resistance. SNS activation and angiotensin II tighten them. Atherosclerosis stiffens them.", topics: ["athero"] },
      { x: 360, y: 72, label: "Primary vs. secondary", text: "Primary (90–95%): no single cause, and the feedback loops slowly reset to accept a higher pressure. Secondary (5–10%): caused by kidney or endocrine disease.", topics: ["ckd"] },
      { x: 84, y: 208, label: "Brain", text: "Stroke and, in a hypertensive emergency, encephalopathy. An emergency means BP over 180/120 with active organ damage.", topics: [] },
      { x: 264, y: 208, label: "Heart", text: "Pushing against high pressure thickens the LV (LVH). That leads to diastolic HF, MI, and aneurysm risk.", topics: ["hf", "aneurysm"] },
      { x: 354, y: 208, label: "Kidneys", text: "High pressure scars the glomeruli, which causes CKD. CKD then raises BP even more, so it's a vicious cycle.", topics: ["ckd"] }
    ] },
  { id: "pad-d", topic: "pad", sys: "card1", title: "PAD and acute limb ischemia", view: "0 0 400 360",
    svg: '<path class="dg-leg" d="M160 10 L240 10 L246 180 L236 296 L292 326 L292 346 L180 346 L184 296 L166 180Z"/>' +
      '<path class="dg-pale" d="M184 250 L238 250 L236 296 L292 326 L292 346 L180 346 L184 296Z"/>' +
      '<path class="dg-artery-s" d="M205 10 L210 180 L214 296 L270 332"/>' +
      '<ellipse class="dg-plaque" cx="203" cy="104" rx="6" ry="16"/><ellipse class="dg-plaque" cx="213" cy="104" rx="6" ry="16"/>' +
      '<path class="dg-collateral" d="M206 70 C236 80 236 130 210 146"/>' +
      '<ellipse class="dg-clot" cx="213" cy="232" rx="7" ry="13"/><circle class="dg-ulcer" cx="284" cy="338" r="6"/>' +
      T(320, 104, "slow narrowing") + T(320, 232, "sudden clot"),
    spots: [
      { x: 188, y: 100, label: "Plaque narrowing", text: "PAD is atherosclerosis in the leg arteries. At rest flow is OK, but walking muscles need more, so you get intermittent claudication: cramping relieved by rest.", topics: ["pad", "athero"] },
      { x: 238, y: 112, label: "Collateral vessels", text: "Slow narrowing gives time for detour vessels to grow, so the leg survives for years.", topics: ["pad"] },
      { x: 213, y: 232, label: "Acute occlusion (thrombus or embolus)", text: "A sudden clot (often an embolus from AFib) has no collaterals. The 6 P's: pain, pallor, pulselessness, poikilothermia, paresthesia, paralysis. It's an emergency within hours.", topics: ["pad", "rhythm"] },
      { x: 200, y: 290, label: "Chronic skin changes", text: "Pale, shiny, hairless, cool skin with weak pedal pulses. Pain gets worse with elevation and better dangling the leg.", topics: ["pad", "venous"] },
      { x: 284, y: 338, label: "Arterial ulcer", text: "On the toes or pressure points: deep, punched-out, painful, with little drainage.", topics: ["pad"] }
    ] },
  { id: "aneurysm-d", topic: "aneurysm", sys: "card1", title: "Aortic aneurysms", view: "0 0 400 350",
    svg: '<path class="dg-artery" d="M120 70 C120 20 230 20 230 70 L230 300"/><path class="dg-artery-s" d="M150 34 L140 6 M176 26 L176 0 M200 30 L210 4"/>' +
      '<ellipse class="dg-aneur" cx="230" cy="100" rx="22" ry="26"/><ellipse class="dg-aneur" cx="230" cy="225" rx="34" ry="46"/>' +
      '<path class="dg-tear" d="M224 140 L236 175"/><path class="dg-artery-s" d="M230 175 L190 175 M230 175 L270 175"/>' +
      '<path class="dg-artery-s" d="M230 300 L196 340 M230 300 L264 340"/><path class="dg-bleed" d="M268 240 C300 250 320 280 300 300 C290 280 280 266 268 254Z"/>' +
      T(110, 110, "thoracic") + T(110, 225, "abdominal") + T(330, 180, "renal arteries", "dg-lbl sm"),
    spots: [
      { x: 230, y: 100, label: "Thoracic aortic aneurysm", text: "Often from cystic medial necrosis or connective tissue disorders (Marfan). It can't be felt, but it can press on nearby structures: hoarseness, trouble swallowing. Diagnosed with chest CT or TEE.", topics: ["aneurysm"] },
      { x: 230, y: 225, label: "Abdominal aortic aneurysm", text: "Usually from atherosclerosis plus HTN in older male smokers. A pulsating belly mass with a bruit and a vague back ache. Diagnosed with ultrasound.", topics: ["aneurysm", "athero"] },
      { x: 192, y: 158, label: "Dissection", text: "A tear in the inner layer lets blood split the wall. Sudden tearing chest or back pain and unequal arm pressures.", topics: ["aneurysm"] },
      { x: 300, y: 278, label: "Rupture", text: "Sudden severe back or belly pain with BP crashing and HR racing is hypovolemic shock. It's an emergency: labs for CBC, type and screen.", topics: ["aneurysm", "fluid"] }
    ] },
  { id: "venous-d", topic: "venous", sys: "card1", title: "From leg vein to lung", view: "0 0 400 360",
    svg: defs("vn") + '<path class="dg-leg" d="M100 40 L180 40 L186 200 L176 300 L232 326 L232 346 L120 346 L124 300 L106 200Z"/>' +
      '<path class="dg-brown" d="M124 290 L178 290 L176 300 L232 326 L232 340 L122 340Z"/>' +
      '<path class="dg-vein" d="M150 330 L146 200 L142 40" style="stroke-width:14"/>' +
      '<path class="dg-valve-l" d="M138 110 L146 100 L154 110 M139 190 L147 180 L155 190"/><path class="dg-valve-open" d="M140 260 L144 250 M152 250 L156 260"/>' +
      '<ellipse class="dg-clot" cx="148" cy="222" rx="6" ry="14"/>' +
      LUNGS(320, 70, 1) + '<circle class="dg-clot" cx="330" cy="80" r="6"/>' + arrow("vn", "M160 210 C240 200 300 160 318 96", "dg-arrow dash") +
      '<path class="dg-triangle" d="M290 230 L340 310 L240 310Z"/>' + T(290, 222, "stasis", "dg-lbl sm") + T(235, 326, "vessel injury", "dg-lbl sm") + T(345, 326, "clotting ↑", "dg-lbl sm"),
    spots: [
      { x: 146, y: 105, label: "One-way valves", text: "Valves plus the calf muscle pump move blood up against gravity. Veins hold most of your blood volume.", topics: [] },
      { x: 148, y: 258, label: "Failed valve (CVI)", text: "Valves that don't close let blood pool and pressure rise. You see edema, aching, and brown hemosiderin staining around the ankles. Ulcers are shallow, wet, and near the ankle.", topics: ["venous"] },
      { x: 148, y: 222, label: "Deep vein thrombosis", text: "Clot in a deep vein: one swollen, warm, red, tender calf. Confirm with ultrasound and a D-dimer.", topics: ["venous"] },
      { x: 290, y: 280, label: "Virchow's triad", text: "Stasis (immobility, surgery), vessel injury, and hypercoagulability (pregnancy, estrogen, cancer). Any one raises DVT risk.", topics: ["venous"] },
      { x: 330, y: 80, label: "Pulmonary embolism", text: "A DVT breaks off and lodges in the lung (90% of PEs come from a DVT). Sudden dyspnea, tachycardia, pleuritic pain, and a sense of doom. Ventilation without perfusion; the RV can fail.", topics: ["venous", "hf"] }
    ] },

  /* ---------- Cardiac 2 ---------- */
  { id: "valves-d", topic: "valves", sys: "card2", title: "Stenosis vs. regurgitation", view: "0 0 400 270",
    svg: defs("vl") + '<rect class="dg-la" x="40" y="30" width="120" height="70" rx="18"/><path class="dg-lv thickwall" d="M40 116 L160 116 L160 200 C140 240 60 240 40 200Z"/>' +
      '<path class="dg-leaflet thick" d="M40 108 L90 112 M160 108 L110 112"/>' + arrow("vl", "M100 80 L100 140", "dg-arrow jet") +
      '<rect class="dg-la" x="232" y="20" width="136" height="80" rx="20"/><path class="dg-lv" d="M226 116 L374 116 L374 206 C350 258 250 258 226 206Z"/>' +
      '<path class="dg-leaflet" d="M232 108 L292 122 M368 108 L310 96"/>' + arrow("vl", "M300 170 C300 130 300 90 300 60", "dg-arrow back") +
      T(100, 258, "Stenosis: can't open") + T(300, 258, "Regurgitation: can't close") + T(200, 140, "♪", "dg-emoji"),
    spots: [
      { x: 100, y: 112, label: "Stenotic valve", text: "Stiff, narrowed leaflets (calcified with age, or from rheumatic fever). Blood has to squeeze through a small opening, which causes a murmur.", topics: ["valves"] },
      { x: 52, y: 170, label: "Pressure overload", text: "The chamber behind a stenotic valve pushes harder and thickens (hypertrophy). Aortic stenosis: angina, syncope, and HF with exertion.", topics: ["valves", "hf"] },
      { x: 300, y: 112, label: "Regurgitant valve", text: "The leaflets don't seal, so blood leaks backward each beat. Mitral valve prolapse can cause this.", topics: ["valves"] },
      { x: 340, y: 60, label: "Volume overload", text: "Backflow adds extra volume, so the chambers dilate. Mitral problems back pressure into the lungs: crackles, dyspnea.", topics: ["hf"] },
      { x: 200, y: 136, label: "Murmur", text: "Turbulent flow you can hear. S1 = AV valves (mitral, tricuspid) closing. S2 = semilunar valves (aortic, pulmonic) closing. Confirm with an echocardiogram.", topics: ["valves"] }
    ] },
  { id: "acs-d", topic: "acs", sys: "card2", title: "Blocked coronary artery", view: "0 0 400 300",
    svg: '<path class="dg-heartm" d="M200 284 C110 224 46 170 58 110 C70 58 132 48 166 78 C182 92 194 106 200 120 C206 106 218 92 234 78 C268 48 330 58 342 110 C354 170 290 224 200 284Z"/>' +
      '<ellipse class="dg-ischemic" cx="214" cy="214" rx="66" ry="48"/><ellipse class="dg-infarct" cx="214" cy="222" rx="38" ry="28"/>' +
      '<path class="dg-coronary thick" d="M200 112 C206 150 212 180 214 196"/><path class="dg-coronary thick" d="M196 116 C150 130 110 170 104 216"/>' +
      '<ellipse class="dg-plaque" cx="204" cy="146" rx="9" ry="7"/><ellipse class="dg-clot" cx="207" cy="156" rx="6" ry="5"/>' +
      '<path class="dg-ekg" d="M30 270 L60 270 L66 262 L72 270 L80 270 L86 236 L92 280 L98 252 L120 252 L128 270 L150 270"/>' + T(90, 296, "ST elevation", "dg-lbl sm") + T(330, 294, "troponin ↑", "dg-lbl sm"),
    spots: [
      { x: 204, y: 150, label: "Plaque + clot", text: "Stable angina: a fixed plaque blocking 70% or more, so pain comes with exertion and goes away with rest or nitro. Unstable angina: the plaque cracks and a partial clot forms, so pain comes at rest and lasts.", topics: ["acs", "athero"] },
      { x: 268, y: 200, label: "Ischemic zone", text: "Starved but alive. Cells switch to anaerobic metabolism and lactic acid causes pain. Restore flow within about 20 minutes and they fully recover: troponin stays normal.", topics: ["acs"] },
      { x: 214, y: 232, label: "Infarct (dead muscle)", text: "Ischemia lasting more than 20 minutes kills cells, and that's an MI. Dead muscle can't contract (HF risk) and irritable edges cause dysrhythmias.", topics: ["acs", "hf", "rhythm"] },
      { x: 90, y: 252, label: "12-lead EKG", text: "Get it fast: ST elevation (STEMI) or ST depression and T-wave changes (NSTEMI or ischemia).", topics: ["acs"] },
      { x: 330, y: 266, label: "Troponin", text: "Released only when heart cells die. It rises in an MI and stays normal in angina.", topics: ["acs"] }
    ] },
  { id: "itis-d", topic: "itis", sys: "card2", title: "Three layers, three -itis", view: "0 0 400 290",
    svg: defs("it") + '<rect class="dg-sac-band" x="20" y="20" width="360" height="30" rx="8"/><rect class="dg-fluid-band" x="20" y="50" width="360" height="16"/>' +
      '<rect class="dg-myo" x="20" y="66" width="360" height="100"/><path class="dg-stria" d="M40 90 L360 90 M40 116 L360 116 M40 142 L360 142"/>' +
      '<rect class="dg-endo" x="20" y="166" width="360" height="10"/><rect class="dg-chamber" x="20" y="176" width="360" height="100" rx="8"/>' +
      '<path class="dg-leaflet" d="M200 176 C210 210 230 230 260 240"/><path class="dg-veg" d="M244 226 C252 214 268 222 266 234 C262 246 246 244 244 236Z"/>' +
      '<circle class="dg-veg" cx="330" cy="258" r="6"/>' + arrow("it", "M272 240 L322 256", "dg-arrow dash") +
      T(60, 40, "pericardium", "dg-lbl sm") + T(60, 108, "myocardium", "dg-lbl sm") + T(60, 200, "endocardium & valve", "dg-lbl sm"),
    spots: [
      { x: 160, y: 35, label: "Pericarditis", text: "Inflamed outer sac (viral, post-MI, autoimmune, uremia). Sharp pleuritic chest pain that's worse lying flat and better leaning forward, plus a friction rub. EKG: diffuse ST elevation with PR depression.", topics: ["itis"] },
      { x: 300, y: 58, label: "Pericardial fluid", text: "Normally 15–50 mL. If an effusion builds fast, it squeezes the heart (tamponade): low BP, JVD, muffled heart sounds.", topics: ["itis"] },
      { x: 200, y: 116, label: "Myocarditis", text: "Inflamed muscle, often viral. The pump weakens: fatigue, dyspnea, palpitations, acute HF, and unpredictable dysrhythmias. Troponin rises. Biopsy confirms it.", topics: ["itis", "hf"] },
      { x: 120, y: 171, label: "Endocardium", text: "The inner lining and the valves. Bacteria (often staph) stick to damaged or prosthetic valves. Risks: IV drug use, central lines, dental or surgical procedures.", topics: ["itis"] },
      { x: 254, y: 230, label: "Vegetation", text: "A clump of bacteria and clot on the valve. It wrecks the valve (a new murmur) and needs blood cultures and an echo.", topics: ["itis", "valves"] },
      { x: 330, y: 258, label: "Emboli", text: "Pieces break off: stroke, splinter hemorrhages, Janeway lesions, Osler nodes, Roth spots.", topics: ["itis"] }
    ] },
  { id: "hf-d", topic: "hf", sys: "card2", title: "Where heart failure backs up", view: "0 0 400 320",
    svg: defs("hf") + '<rect class="dg-ra" x="150" y="140" width="50" height="110" rx="18"/><rect class="dg-la" x="200" y="140" width="56" height="110" rx="18"/>' +
      LUNGS(228, 58, 1.1) + dots([[208, 66], [218, 78], [244, 70], [252, 82]], 4, "dg-drop") +
      '<path class="dg-vein" d="M70 20 L70 100" style="stroke-width:16"/><path class="dg-liver" d="M40 160 C40 130 110 130 116 150 C120 176 70 186 40 160Z"/>' +
      '<path class="dg-leg2" d="M52 230 L84 230 L86 300 L50 300Z"/><path class="dg-edema-leg" d="M48 270 L88 270 L88 304 L48 304Z"/>' +
      KIDNEY(340, 240, 0.45) +
      arrow("hf", "M228 140 L228 104", "dg-arrow back") + arrow("hf", "M150 180 L120 160", "dg-arrow back") + arrow("hf", "M150 160 L84 90", "dg-arrow back") + arrow("hf", "M150 220 L90 260", "dg-arrow back") +
      T(175, 276, "right", "dg-lbl sm") + T(228, 276, "left", "dg-lbl sm"),
    spots: [
      { x: 228, y: 210, label: "Left ventricle fails", text: "Systolic HF (HFrEF, EF 40% or less): weak squeeze, thin dilated walls. Diastolic HF (HFpEF, EF 50% or more): stiff, thick walls that can't fill.", topics: ["hf"] },
      { x: 270, y: 70, label: "Backs up into the lungs", text: "Left-sided HF: dyspnea, orthopnea, PND, crackles, pink frothy sputum, S3. BNP over 400 confirms volume overload.", topics: ["hf"] },
      { x: 175, y: 210, label: "Right ventricle fails", text: "Most often caused by left-sided HF. Also by COPD or a big PE (cor pulmonale).", topics: ["hf", "copd"] },
      { x: 70, y: 60, label: "JVD", text: "Right-sided HF backs blood into the body's veins: distended neck veins.", topics: ["hf"] },
      { x: 78, y: 150, label: "Liver and belly", text: "Hepatomegaly, splenomegaly, and ascites from venous congestion.", topics: ["hf"] },
      { x: 68, y: 286, label: "Dependent edema", text: "Swollen legs and ankles, or sacrum in bedbound clients. Weigh daily.", topics: ["fluid"] },
      { x: 340, y: 240, label: "The body's 'fix' backfires", text: "The kidneys sense low flow and fire RAAS, SNS, and ADH: hold salt and water, squeeze vessels. That helps briefly, then overloads the failing heart.", topics: ["htn", "aki"] }
    ] },
  { id: "rhythm-d", topic: "rhythm", sys: "card2", title: "The heart's wiring", view: "0 0 400 320",
    svg: '<path class="dg-heart-outline" d="M200 310 C100 250 40 190 50 110 C58 50 120 30 170 60 C185 70 195 82 200 92 C205 82 215 70 230 60 C280 30 342 50 350 110 C360 190 300 250 200 310Z"/>' +
      '<path class="dg-wire" d="M120 80 C150 100 170 120 192 152 M120 80 C130 120 160 140 192 152 M192 152 L200 196 M200 196 C170 230 150 260 170 290 M200 196 C240 230 260 260 230 290"/>' +
      '<path class="dg-purk" d="M170 290 l-14 -8 M170 290 l-6 -16 M230 290 l14 -8 M230 290 l6 -16"/>' +
      '<circle class="dg-node" cx="120" cy="80" r="9"/><circle class="dg-node" cx="192" cy="152" r="8"/>' +
      '<path class="dg-quiver" d="M240 90 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6"/><path class="dg-clot" d="M300 64 C312 56 324 66 318 76 C310 84 298 76 300 64Z"/>',
    spots: [
      { x: 120, y: 80, label: "SA node", text: "The natural pacemaker, 60–100 bpm. Sinus brady (under 60): athletes, inferior MI, high potassium, meds. Sinus tachy (over 100): fever, dehydration, hypoxia, pain, PE, anemia. Treat the cause.", topics: ["rhythm"] },
      { x: 192, y: 152, label: "AV node", text: "Delays the signal so the ventricles can fill. In AFib it gets bombarded and lets through an irregular ventricular rate.", topics: ["rhythm"] },
      { x: 238, y: 250, label: "Bundle branches & Purkinje fibers", text: "Spread the signal through the ventricles so they squeeze together.", topics: [] },
      { x: 264, y: 112, label: "Atrial fibrillation", text: "Chaotic signals make the atria quiver: no P waves, irregularly irregular, and lost 'atrial kick' (CO drops). Atrial flutter is one fast loop with sawtooth waves.", topics: ["rhythm"] },
      { x: 310, y: 70, label: "Clot in the atrium", text: "Blood pools in a quivering atrium and clots. That clot can go to the brain (stroke) or a limb (acute ischemia). That's why AFib clients get anticoagulants.", topics: ["rhythm", "pad"] },
      { x: 120, y: 220, label: "What matters: cardiac output", text: "Too slow: low CO. Too fast: no time to fill and less coronary perfusion (diastole shortens). Check BP, mentation, skin, and urine output, not just the rate.", topics: ["hf", "acs"] }
    ] },

  /* ---------- Kidney ---------- */
  { id: "aki-d", topic: "aki", sys: "kidney", title: "AKI: where is the problem?", view: "0 0 400 280",
    svg: defs("ak") + '<rect class="dg-zone pre" x="10" y="30" width="120" height="200" rx="12"/><rect class="dg-zone intra" x="140" y="30" width="120" height="200" rx="12"/><rect class="dg-zone post" x="270" y="30" width="120" height="200" rx="12"/>' +
      '<path class="dg-heartm" d="M70 140 C40 118 34 90 56 80 C66 76 72 82 74 88 C76 82 84 76 94 80 C116 90 108 120 70 140Z"/>' +
      '<path class="dg-artery-s" d="M96 110 L156 110"/>' + KIDNEY(200, 120, 0.8) +
      '<path class="dg-ureter" d="M212 160 C240 180 280 160 300 150"/><path class="dg-bladder" d="M300 140 C300 116 370 116 370 140 C374 180 352 194 335 194 C318 194 296 180 300 140Z"/><circle class="dg-stone" cx="270" cy="166" r="7"/>' +
      T(70, 22, "PRERENAL") + T(200, 22, "INTRARENAL") + T(330, 22, "POSTRENAL") + T(200, 262, "Creatinine ↑ · K⁺ ↑ · urine < 0.5 mL/kg/hr", "dg-lbl sm"),
    spots: [
      { x: 70, y: 190, label: "Prerenal: not enough flow in", text: "Hemorrhage, dehydration, HF, shock. The kidney itself is fine at first; restore perfusion and it recovers. If it goes on too long, the tubules die.", topics: ["aki", "hf", "fluid"] },
      { x: 200, y: 120, label: "Intrarenal: tissue damage", text: "Acute tubular necrosis from prolonged ischemia or nephrotoxins (contrast, aminoglycosides). Also glomerulonephritis.", topics: ["aki", "gn"] },
      { x: 270, y: 166, label: "Postrenal: urine can't get out", text: "Obstruction from stones, BPH, tumors. Back pressure (hydronephrosis) damages the kidney. Relieve the blockage.", topics: ["aki", "stones", "bph"] },
      { x: 335, y: 160, label: "Urine output", text: "Goal at least 0.5 mL/kg/hr, and it will be on the test. AKI criteria: creatinine up 0.3 within 48 hours, 1.5× baseline within 7 days, or low urine output for 6 or more hours.", topics: ["aki"] },
      { x: 200, y: 234, label: "What builds up", text: "Fluid overload, hyperkalemia (watch for bradycardia and dysrhythmias), and metabolic acidosis.", topics: ["fluid", "acidbase", "rhythm"] }
    ] },
  { id: "ckd-d", topic: "ckd", sys: "kidney", title: "What the kidneys stop doing in CKD", view: "0 0 400 300",
    svg: '<path class="dg-spoke" d="M200 150 L70 60 M200 150 L330 60 M200 150 L50 150 M200 150 L350 150 M200 150 L70 240 M200 150 L330 240"/>' + KIDNEY(200, 150, 0.75, "dg-kidney scarred") + '<path class="dg-scar" d="M186 120 l10 6 M182 160 l12 -4 M196 184 l8 -8"/>' +
      [[70, 60, "Waste"], [330, 60, "Salt & water"], [50, 150, "Potassium"], [350, 150, "Acid"], [70, 240, "EPO → RBCs"], [330, 240, "Vitamin D"]].map(function (b) { return '<rect class="dg-box" x="' + (b[0] - 52) + '" y="' + (b[1] - 18) + '" width="104" height="36" rx="10"/>' + T(b[0], b[1] + 5, b[2], "dg-lbl"); }).join(""),
    spots: [
      { x: 200, y: 112, label: "Nephron loss", text: "Diabetes and HTN destroy nephrons over years. The survivors hyperfilter, which works for a while and then speeds up the damage. CKD means 3 or more months of damage or eGFR under 60.", topics: ["ckd", "htn"] },
      { x: 70, y: 30, label: "Waste: uremia", text: "BUN and creatinine rise: fatigue, nausea, itching, confusion, and uremic pericarditis.", topics: ["itis"] },
      { x: 330, y: 30, label: "Salt and water: overload & HTN", text: "Fluid retention leads to edema, HTN, and HF. That's why CKD raises cardiovascular risk.", topics: ["htn", "hf"] },
      { x: 50, y: 120, label: "Hyperkalemia", text: "The kidneys can't excrete potassium, causing dangerous dysrhythmias.", topics: ["rhythm"] },
      { x: 350, y: 120, label: "Metabolic acidosis", text: "The kidneys can't excrete H⁺ or make HCO₃⁻.", topics: ["acidbase"] },
      { x: 70, y: 210, label: "Anemia", text: "Less erythropoietin means fewer red blood cells: fatigue and pallor.", topics: [] },
      { x: 330, y: 210, label: "Bone and calcium", text: "Less vitamin D activation (calcitriol) means low calcium, high phosphate, and weak bones.", topics: [] }
    ] },
  { id: "gn-d", topic: "gn", sys: "kidney", title: "Glomerulonephritis: an inflamed filter", view: "0 0 400 280",
    svg: defs("gn") + '<circle class="dg-capsule" cx="170" cy="140" r="100"/>' +
      dots([[150, 110], [190, 110], [130, 145], [170, 145], [210, 145], [150, 180], [190, 180]], 22, "dg-glom-loop") +
      '<path class="dg-complex" d="M140 92 l5 -5 l5 5 l-5 5Z M200 128 l5 -5 l5 5 l-5 5Z M118 160 l5 -5 l5 5 l-5 5Z M184 196 l5 -5 l5 5 l-5 5Z"/>' +
      '<path class="dg-tube" d="M266 140 L392 140"/>' + dots([[290, 140], [320, 140], [350, 140], [378, 140]], 6, "dg-rbc") +
      '<path class="dg-artery-s" d="M20 140 L80 140"/>' + T(110, 30, "strep throat 1–3 wks before", "dg-lbl sm") + T(330, 120, "RBCs leak out", "dg-lbl sm") + T(330, 176, "cola-colored urine", "dg-lbl sm"),
    spots: [
      { x: 50, y: 50, label: "Trigger", text: "Classic: post-streptococcal, 1–3 weeks after strep throat or impetigo. The infection doesn't infect the kidney; the immune response does the damage.", topics: ["uri", "defense"] },
      { x: 145, y: 92, label: "Immune complexes", text: "Antibody–antigen complexes lodge in the glomerular walls and attract complement and inflammatory cells.", topics: ["defense"] },
      { x: 320, y: 140, label: "Hematuria", text: "The inflamed filter lets red cells through: tea- or cola-colored urine with RBC casts, plus some protein.", topics: ["gn"] },
      { x: 190, y: 180, label: "Lower GFR", text: "Swollen glomeruli filter less, so the body holds salt and water: hypertension, periorbital edema, oliguria. Creatinine rises.", topics: ["gn", "aki", "htn"] }
    ] },
  { id: "nephrotic-d", topic: "nephrotic", sys: "kidney", title: "Nephrotic syndrome: a leaky filter", view: "0 0 400 290",
    svg: '<rect class="dg-capvessel" x="20" y="20" width="360" height="70" rx="10"/>' + dots([[60, 50], [110, 64], [170, 46], [230, 62], [300, 48], [350, 64]], 9, "dg-prot") +
      '<path class="dg-membrane" d="M20 96 L90 96 M120 96 L200 96 M234 96 L300 96 M330 96 L380 96"/>' +
      '<rect class="dg-urine" x="20" y="104" width="360" height="62" rx="10"/>' + dots([[104, 122], [216, 132], [316, 124], [150, 150], [260, 152]], 9, "dg-prot") +
      '<rect class="dg-capvessel" x="20" y="196" width="200" height="40" rx="20"/>' + dots([[80, 216]], 7, "dg-prot") +
      dots([[90, 250], [130, 258], [170, 252]], 5, "dg-drop") + '<ellipse class="dg-edema" cx="130" cy="268" rx="90" ry="14"/>' +
      '<path class="dg-liver" d="M270 210 C270 186 360 186 366 206 C370 236 300 246 270 210Z"/>' +
      T(200, 16, "blood", "dg-lbl sm") + T(200, 184, "urine: foamy", "dg-lbl sm") + T(318, 262, "liver", "dg-lbl sm"),
    spots: [
      { x: 105, y: 96, label: "Holes in the filter", text: "Damage to the filtration barrier makes holes big enough for protein. Minimal change disease is the classic cause in children. It's NOT mainly inflammation, unlike GN.", topics: ["nephrotic", "gn"] },
      { x: 216, y: 135, label: "Proteinuria", text: "Heavy protein loss (more than 3.5 g/day): foamy urine. Few or no red cells.", topics: ["nephrotic"] },
      { x: 80, y: 216, label: "Low albumin", text: "Less albumin means less oncotic pull holding water in the vessels.", topics: ["fluid"] },
      { x: 200, y: 262, label: "Edema", text: "Water seeps into tissues: periorbital puffiness, then generalized edema (anasarca). The kidneys also hold sodium, which makes it worse.", topics: ["fluid"] },
      { x: 320, y: 212, label: "Liver overreacts", text: "It makes more lipoproteins to replace the protein: high cholesterol. Losing anticoagulant proteins raises clot risk.", topics: ["venous"] }
    ] },

  /* ---------- GU ---------- */
  { id: "cystitis-d", topic: "cystitis", sys: "gu", title: "How bacteria reach the bladder", view: "0 0 400 290",
    svg: defs("cy") + '<path class="dg-bladder inflamed" d="M120 80 C120 30 280 30 280 80 C296 160 250 190 200 190 C150 190 104 160 120 80Z"/>' +
      '<path class="dg-ureter" d="M200 190 L200 248"/><ellipse class="dg-anus" cx="250" cy="270" rx="12" ry="8"/>' +
      dots([[246, 258], [234, 250], [214, 244], [204, 226], [200, 206]], 4, "dg-bug") + arrow("cy", "M214 262 C206 240 204 222 202 200", "dg-arrow thin") +
      '<path class="dg-cup" d="M320 130 L360 130 L354 190 L326 190Z"/>' + T(340, 210, "urinalysis", "dg-lbl sm") + T(160, 262, "short urethra", "dg-lbl sm") + T(200, 110, "bladder", "dg-lbl"),
    spots: [
      { x: 246, y: 258, label: "E. coli from the gut", text: "The most common cause. Bacteria from around the urethral opening ascend. Risks: sex, poor hygiene, catheters, urinary stasis, pregnancy.", topics: ["cystitis"] },
      { x: 186, y: 228, label: "Short urethra", text: "About 4 cm, close to the anus in people with a vagina vs. about 20 cm in people with a penis. Less distance = more UTIs.", topics: ["cystitis"] },
      { x: 200, y: 64, label: "Inflamed bladder lining", text: "Irritation causes dysuria (burning), frequency, urgency, and sometimes hematuria. Older adults may show only confusion.", topics: ["cystitis"] },
      { x: 128, y: 150, label: "Suprapubic pain", text: "Pain low in the belly over the bladder. Usually no high fever or flank pain, which suggests it's still a LOWER UTI.", topics: ["cystitis", "pyelo"] },
      { x: 340, y: 160, label: "Urine findings", text: "WBCs (pyuria), leukocyte esterase, nitrites (some bacteria make them), and bacteria. A culture identifies the organism.", topics: ["cystitis"] }
    ] },
  { id: "pyelo-d", topic: "pyelo", sys: "gu", title: "When the infection climbs to the kidney", view: "0 0 400 320",
    svg: defs("py") + KIDNEY(110, 100, 0.85, "dg-kidney inflamed") + dots([[96, 80], [110, 110], [92, 126]], 6, "dg-abscess") + KIDNEY(290, 100, 0.85) +
      '<path class="dg-ureter" d="M126 140 C150 190 170 220 186 250 M274 140 C250 190 230 220 214 250"/>' +
      '<path class="dg-bladder" d="M160 240 C160 220 240 220 240 240 C250 280 230 296 200 296 C170 296 150 280 160 240Z"/>' +
      dots([[200, 262], [184, 238], [168, 212], [150, 182], [136, 156]], 4, "dg-bug") + arrow("py", "M196 252 C170 220 150 190 132 150", "dg-arrow thin") +
      '<path class="dg-capvessel" d="M40 30 L40 60" style="stroke-width:10"/>' + arrow("py", "M60 70 L20 30", "dg-arrow dash") + T(26, 20, "to blood", "dg-lbl sm") +
      T(330, 210, "CVA (flank)", "dg-lbl sm"),
    spots: [
      { x: 200, y: 268, label: "Starts as cystitis", text: "Most pyelonephritis begins as a bladder infection that keeps climbing.", topics: ["cystitis"] },
      { x: 160, y: 200, label: "Ascends the ureter", text: "Easier with obstruction, urinary stasis, or vesicoureteral reflux (urine flowing backward toward the kidney).", topics: ["pyelo", "stones"] },
      { x: 110, y: 100, label: "Infected kidney", text: "Inflammation in the renal pelvis and tissue: high fever, chills, flank pain, nausea and vomiting, CVA tenderness. WBC casts in urine point to the kidney.", topics: ["pyelo"] },
      { x: 330, y: 178, label: "CVA tenderness", text: "Tap over the costovertebral angle (back, below the 12th rib). Tenderness supports kidney involvement.", topics: ["pyelo"] },
      { x: 40, y: 50, label: "Into the bloodstream", text: "The kidney is highly vascular, so the infection can go systemic: urosepsis. Watch for hypotension, tachycardia, confusion, and falling urine output.", topics: ["defense", "aki"] }
    ] },
  { id: "stones-d", topic: "stones", sys: "gu", title: "Kidney stones on the move", view: "0 0 400 330",
    svg: defs("st") + KIDNEY(110, 100, 0.95, "dg-kidney swollen") + '<path class="dg-pelvis" d="M108 70 C130 80 140 110 120 130"/>' + '<circle class="dg-stone" cx="104" cy="84" r="8"/>' +
      '<path class="dg-ureter wide" d="M126 140 C140 170 150 190 160 214"/><path class="dg-ureter" d="M160 214 C170 240 190 270 200 290"/>' + '<circle class="dg-stone" cx="160" cy="214" r="9"/>' +
      '<path class="dg-bladder" d="M170 280 C170 262 250 262 250 280 C258 312 236 326 210 326 C184 326 162 312 170 280Z"/>' +
      arrow("st", "M260 120 C300 180 300 240 270 290", "dg-arrow dash") + T(320, 110, "flank pain", "dg-lbl sm") + T(320, 300, "→ groin", "dg-lbl sm") + dots([[176, 236], [184, 250]], 3, "dg-rbc"),
    spots: [
      { x: 104, y: 84, label: "Crystals form", text: "Concentrated urine (low intake, dehydration) lets minerals crystallize and clump. Calcium oxalate or phosphate is most common. Drinking more fluid is the main prevention.", topics: ["stones", "fluid"] },
      { x: 160, y: 214, label: "Stone stuck in the ureter", text: "The ureter spasms against it: sudden, severe, colicky flank pain that comes in waves and radiates to the groin, often with nausea.", topics: ["stones"] },
      { x: 60, y: 120, label: "Hydronephrosis", text: "Urine backs up and swells the kidney. If it isn't relieved, that's postrenal AKI.", topics: ["aki"] },
      { x: 200, y: 246, label: "Hematuria", text: "The stone scrapes the lining, so blood shows up in the urine. A noncontrast CT finds the stone.", topics: ["stones"] },
      { x: 300, y: 200, label: "Emergency: blocked + infected", text: "Fever with an obstructing stone means infected urine trapped behind it, which can turn into sepsis fast.", topics: ["pyelo"] }
    ] },
  { id: "bph-d", topic: "bph", sys: "gu", title: "BPH: the prostate squeezes the urethra", view: "0 0 400 320",
    svg: KIDNEY(80, 60, 0.45, "dg-kidney swollen") + KIDNEY(320, 60, 0.45, "dg-kidney swollen") + '<path class="dg-ureter" d="M90 90 C120 120 150 140 170 160 M310 90 C280 120 250 140 230 160"/>' +
      '<path class="dg-bladder thickwall" d="M130 150 C130 110 270 110 270 150 C282 210 250 230 200 230 C150 230 118 210 130 150Z"/><path class="dg-urine-res" d="M140 190 C150 220 250 220 260 190 C250 214 150 214 140 190Z"/>' +
      '<ellipse class="dg-prostate big" cx="200" cy="254" rx="58" ry="30"/><path class="dg-ureter thin" d="M200 228 L200 316"/>' +
      T(320, 254, "enlarged prostate", "dg-lbl sm") + T(320, 200, "urine left behind", "dg-lbl sm"),
    spots: [
      { x: 240, y: 260, label: "Enlarged prostate", text: "Hyperplasia: more cells (growth outpaces cell death) with age and hormones, plus increased smooth muscle tone. Benign, not inflammation.", topics: ["bph"] },
      { x: 200, y: 290, label: "Squeezed urethra", text: "The urethra runs through the prostate. Narrowing causes a weak stream, hesitancy, straining, dribbling, and nocturia.", topics: ["bph"] },
      { x: 150, y: 160, label: "Bladder works harder", text: "The bladder wall thickens to push urine past the blockage, then gets irritable: urgency and frequency.", topics: ["bph"] },
      { x: 220, y: 204, label: "Residual urine", text: "Incomplete emptying leaves stagnant urine, so UTIs and bladder stones are more likely. Complete retention is an emergency.", topics: ["cystitis", "stones"] },
      { x: 80, y: 60, label: "Back pressure on the kidneys", text: "Long-term obstruction can cause hydronephrosis and postrenal AKI.", topics: ["aki"] }
    ] },
  { id: "prostatitis-d", topic: "prostatitis", sys: "gu", title: "Prostatitis: an inflamed prostate", view: "0 0 400 300",
    svg: defs("pr") + '<path class="dg-bladder" d="M130 60 C130 20 270 20 270 60 C282 120 250 140 200 140 C150 140 118 120 130 60Z"/>' +
      '<ellipse class="dg-prostate inflamed" cx="200" cy="170" rx="48" ry="30"/>' + dots([[184, 166], [204, 176], [218, 160]], 5, "dg-bug") +
      '<path class="dg-ureter thin" d="M200 140 L200 290"/>' + '<path class="dg-catheter" d="M206 290 L206 120"/>' + arrow("pr", "M226 284 L216 200", "dg-arrow thin") +
      T(310, 170, "prostate", "dg-lbl sm") + T(300, 270, "catheter / procedure", "dg-lbl sm") + T(80, 250, "pelvic & perineal pain", "dg-lbl sm"),
    spots: [
      { x: 230, y: 170, label: "Acute bacterial prostatitis", text: "Bacteria (often E. coli) get into the prostate: sudden fever, chills, dysuria, and pelvic pain. The prostate is swollen and very tender.", topics: ["prostatitis", "defense"] },
      { x: 226, y: 250, label: "How bacteria get in", text: "Ascending from the urethra, often after catheterization or a urologic procedure.", topics: ["prostatitis", "cystitis"] },
      { x: 80, y: 228, label: "Pain", text: "Pelvic, perineal, and low back pain; painful urination and ejaculation.", topics: ["prostatitis"] },
      { x: 200, y: 80, label: "Urinary symptoms", text: "Swelling can obstruct flow, like BPH, but here the cause is inflammation, not extra growth.", topics: ["bph"] },
      { x: 330, y: 110, label: "Chronic prostatitis", text: "Persistent or recurrent symptoms for more than 3 months. Not always bacterial (chronic pelvic pain syndrome).", topics: ["prostatitis"] }
    ] }
  ];
  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
