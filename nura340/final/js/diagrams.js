/* Original tap-to-learn diagrams for the GI unit (drawn for this site, safe to publish).
   Each spot: x/y in the diagram's viewBox, what it is, what goes wrong there, and linked topics.
   The client's right side is drawn on the viewer's left, as in an anatomy picture. */
(function () {
  function T(x, y, s, cls) { return '<text class="' + (cls || "dg-lbl sm") + '" x="' + x + '" y="' + y + '">' + s + "</text>"; }
  function S(d, color, w, extra) { return '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"' + (extra || "") + "/>"; }

  var D = [
  {
    id: "gitract", kind: "structure", sys: "found", title: "The GI tract at a glance", view: "0 0 400 370",
    svg:
      '<path class="dg-liver" d="M52 112 C50 78 140 66 205 92 L196 138 C160 150 90 152 52 112Z"/>' +
      '<ellipse cx="146" cy="150" rx="15" ry="9" fill="#6f9a3e" stroke="#3f6a1a" stroke-width="2"/>' +
      S("M222 14 L222 108", "#e8a69f", 16) + S("M222 14 L222 108", "#b13a32", 2, ' stroke-dasharray="1 0" opacity=".35"') +
      '<path class="dg-tissue" d="M214 106 C262 92 312 118 306 166 C300 210 248 222 222 200 C212 192 206 182 200 180 L214 106Z"/>' +
      '<rect x="210" y="102" width="24" height="9" rx="3" fill="#7a3a2e"/>' +
      S("M200 180 C178 186 172 206 184 220 C196 232 216 228 222 216", "#e8a69f", 14) +
      S("M112 336 L112 232 C112 216 122 208 138 208 L284 208 C300 208 306 218 306 234 L306 300 C306 322 286 334 258 336 L230 336 C214 336 210 342 210 352", "#d7b46a", 22) +
      S("M150 238 C175 228 205 248 230 236 C255 224 270 250 250 262 C228 274 190 252 168 266 C148 278 160 300 184 296 C210 292 236 302 256 296 C272 290 262 312 240 314 C214 316 170 312 128 316", "#f0a39c", 10) +
      S("M112 330 C104 340 100 350 96 358", "#d7b46a", 9) +
      '<circle cx="210" cy="356" r="5" fill="#7a3a2e"/>' +
      T(222, 10, "esophagus") + T(330, 140, "stomach") + T(70, 140, "liver") + T(355, 270, "colon"),
    spots: [
      { x: 244, y: 52, label: "Esophagus", text: "Moves food to the stomach by peristalsis. Its lining has much less protection against acid than the stomach, so reflux burns it (GERD, esophagitis).", topics: ["gerd", "esophagitis"] },
      { x: 196, y: 106, label: "Lower esophageal sphincter (LES)", text: "Relaxes to let food in, then closes so stomach contents can't move back up. The diaphragm supports it. When it relaxes at the wrong time, you get GERD.", topics: ["gerd"] },
      { x: 268, y: 160, label: "Stomach", text: "Mixes food with acid (parietal cells) and pepsin (chief cells), protected by mucus, bicarbonate, blood flow, and prostaglandins. When defenses weaken: gastritis and ulcers.", topics: ["gastritis", "pud", "gifn"] },
      { x: 100, y: 100, label: "Liver", text: "Processes nutrients, bilirubin, drugs, and ammonia; makes bile, albumin, and clotting factors. Long-term injury scars it (cirrhosis).", topics: ["liverfn", "cirrhosis"] },
      { x: 146, y: 172, label: "Gallbladder", text: "Stores and concentrates bile, then squeezes after a fatty meal. Stones and a blocked cystic duct cause pain and cholecystitis.", topics: ["gallstones", "cholecystitis"] },
      { x: 166, y: 210, label: "Duodenum", text: "First part of the small intestine, where bile enters. A common ulcer site; duodenal ulcer pain may ease briefly with eating.", topics: ["pud", "ugib"] },
      { x: 206, y: 272, label: "Small intestine", text: "Absorbs most nutrients and a large amount of fluid. Crohn's often hits the terminal ileum, where B12 is absorbed. Adhesions here can cause obstruction.", topics: ["crohns", "obstruction"] },
      { x: 84, y: 352, label: "Appendix", text: "A small pouch at the start of the large intestine in the RLQ (McBurney's point). A blocked opening → pressure → inflammation → ischemia → perforation.", topics: ["appendicitis"] },
      { x: 286, y: 330, label: "Sigmoid colon", text: "Sits in the LLQ. Diverticula most often form here, which is why diverticulitis usually hurts on the lower left.", topics: ["diverticular"] },
      { x: 232, y: 356, label: "Rectum", text: "Where UC starts before spreading up continuously. Rectal inflammation causes urgency and tenesmus.", topics: ["uc", "lgib"] }
    ]
  },
  {
    id: "upper", kind: "structure", sys: "upper", title: "Stomach wall: defenses, erosion vs. ulcer", view: "0 0 400 330",
    svg:
      '<rect x="20" y="40" width="360" height="16" fill="#dceefc"/>' +
      '<rect x="20" y="56" width="360" height="56" fill="#fbe0de"/>' +
      '<rect x="20" y="112" width="360" height="8" fill="#b0574f"/>' +
      '<rect x="20" y="120" width="360" height="70" fill="#fdf3dc"/>' +
      '<rect x="20" y="190" width="360" height="62" fill="#e8a69f"/>' +
      '<rect x="20" y="252" width="360" height="8" fill="#c8a08a"/>' +
      '<path d="M150 40 C150 40 156 60 170 84 C178 96 192 96 200 84 C214 60 220 40 220 40Z" fill="#f6c9c4" stroke="#b13a32" stroke-width="1.5"/>' +
      '<path d="M268 40 C270 70 282 150 300 168 C310 176 322 176 332 168 C350 150 362 70 364 40Z" fill="#7d1a14"/>' +
      '<circle cx="316" cy="178" r="9" fill="#c2413a" stroke="#7d1a14" stroke-width="2"/>' +
      '<path d="M60 112 L60 70 M80 112 L80 66 M100 112 L100 70 M120 112 L120 66" stroke="#e8a69f" stroke-width="10" stroke-linecap="round"/>' +
      '<text class="dg-lbl sm" x="185" y="30">erosion</text><text class="dg-lbl sm" x="316" y="30">ulcer</text>' +
      '<text class="dg-lbl sm" x="200" y="284">Tap the dots: mucus → mucosa → submucosa → muscle</text>',
    spots: [
      { x: 44, y: 48, label: "Mucus and bicarbonate layer", text: "Holds bicarbonate next to the cells to neutralize acid. H. pylori lives here and makes urease to make its surroundings less acidic.", topics: ["gastritis", "gifn"] },
      { x: 90, y: 90, label: "Mucosa (parietal and chief cells)", text: "Parietal cells make HCl and intrinsic factor; chief cells make pepsinogen. Autoimmune gastritis destroys parietal cells → no intrinsic factor → B12 (pernicious) anemia.", topics: ["gastritis", "fluidgi"] },
      { x: 185, y: 98, label: "Erosion", text: "Injury that stays in the mucosa. Gastritis and erosive injury can bleed slowly, causing iron deficiency anemia.", topics: ["gastritis", "pud"] },
      { x: 250, y: 116, label: "Muscularis mucosae", text: "The thin muscle layer within the mucosa. Crossing it is what makes a lesion an ulcer instead of an erosion.", topics: ["pud"] },
      { x: 316, y: 110, label: "Ulcer", text: "A deeper, localized breakdown from H. pylori or NSAIDs. Acid and pepsin digest the less-protected tissue. Through the full wall → perforation → peritonitis.", topics: ["pud"] },
      { x: 345, y: 190, label: "Blood vessel in the submucosa", text: "When an ulcer reaches a vessel, it bleeds: hematemesis, melena, and, if fast, tachycardia and shock.", topics: ["ugib", "fluidgi"] },
      { x: 150, y: 150, label: "Blood flow and repair", text: "Good mucosal blood flow (supported by prostaglandins) keeps the lining healthy. NSAIDs lower prostaglandins; shock and critical illness lower blood flow. Both weaken the defense.", topics: ["gastritis", "pud"] },
      { x: 150, y: 222, label: "Muscle layer", text: "Churns and mixes food and moves it into the duodenum. Swelling or scarring at the outlet can cause obstruction and persistent vomiting.", topics: ["pud"] }
    ]
  },
  {
    id: "colon", kind: "structure", sys: "lower", title: "Lower GI map: where things go wrong", view: "0 0 400 380",
    svg:
      '<line x1="200" y1="20" x2="200" y2="360" stroke="#9aa3b5" stroke-width="1.5" stroke-dasharray="5 5"/>' +
      '<line x1="30" y1="190" x2="370" y2="190" stroke="#9aa3b5" stroke-width="1.5" stroke-dasharray="5 5"/>' +
      T(60, 36, "RUQ") + T(340, 36, "LUQ") + T(60, 372, "RLQ") + T(340, 372, "LLQ") +
      S("M100 300 L100 110 C100 88 112 78 134 78 L268 78 C290 78 300 90 300 112 L300 250 C300 280 290 300 260 310 C240 316 226 322 222 340 L220 362", "#d7b46a", 30) +
      S("M300 112 L300 250 C300 280 290 300 260 310 C240 316 226 322 222 340 L220 362", "#c2413a", 30, ' opacity=".28"') +
      '<path d="M160 230 C140 222 116 236 100 250" fill="none" stroke="#f0a39c" stroke-width="14" stroke-linecap="round"/>' +
      '<circle cx="142" cy="226" r="6" fill="#c2413a"/><circle cx="232" cy="78" r="6" fill="#c2413a"/>' +
      S("M100 300 C94 314 90 324 84 336", "#d7b46a", 10) +
      '<circle cx="276" cy="296" r="8" fill="#f3e3b8" stroke="#b7791f" stroke-width="2"/><circle cx="296" cy="276" r="7" fill="#f3e3b8" stroke="#b7791f" stroke-width="2"/><circle cx="252" cy="314" r="7" fill="#f3e3b8" stroke="#b7791f" stroke-width="2"/>' +
      '<circle cx="200" cy="190" r="6" fill="#4a5468"/>' +
      T(186, 252, "terminal ileum") + T(330, 200, "UC: up from") + T(330, 214, "the rectum"),
    spots: [
      { x: 200, y: 168, label: "Umbilicus", text: "Early appendicitis pain is vague and periumbilical, because the inflamed organ (visceral pain) localizes poorly.", topics: ["appendicitis", "gifn"] },
      { x: 76, y: 336, label: "Appendix · McBurney's point (RLQ)", text: "Once inflammation reaches the parietal peritoneum, pain localizes to the RLQ. Sudden relief can mean perforation.", topics: ["appendicitis"] },
      { x: 150, y: 206, label: "Terminal ileum", text: "Crohn's most often affects the terminal ileum and colon, in patches (skip lesions), through the full wall. Small-intestine disease causes malabsorption.", topics: ["crohns"] },
      { x: 232, y: 100, label: "Skip lesion in the colon", text: "Crohn's inflamed areas are separated by relatively normal tissue. Transmural inflammation → strictures, fistulas, abscesses.", topics: ["crohns"] },
      { x: 300, y: 160, label: "Descending colon", text: "In UC, inflammation spreads up from the rectum continuously (no gaps) and stays in the mucosa. Severe disease → toxic megacolon.", topics: ["uc"] },
      { x: 268, y: 270, label: "Sigmoid colon diverticula (LLQ)", text: "Pouches through weak spots in the wall. Inflamed (-itis): LLQ pain and fever. A nearby vessel can bleed painlessly.", topics: ["diverticular", "lgib"] },
      { x: 244, y: 352, label: "Rectum", text: "UC starts here: bloody diarrhea with mucus, urgency, and tenesmus. Hemorrhoids are another lower GI bleeding source.", topics: ["uc", "lgib"] },
      { x: 132, y: 64, label: "Colon lining", text: "Absorbs water and electrolytes. When C. diff toxins inflame it, water stays in the bowel → watery diarrhea → hypovolemia.", topics: ["cdiff", "fluidgi"] },
      { x: 120, y: 260, label: "Small-bowel loop", text: "Adhesions, a hernia, or a tumor can physically block it (mechanical obstruction). After surgery or with opioids, motility can stop without a blockage (ileus).", topics: ["obstruction"] }
    ]
  },
  {
    id: "biliary", kind: "structure", sys: "liver", title: "Liver, bile ducts & portal circulation", view: "0 0 400 360",
    svg:
      '<path class="dg-liver" d="M30 110 C26 60 150 34 260 62 C300 72 312 96 296 116 C270 146 170 160 100 150 C60 144 34 136 30 110Z"/>' +
      '<path d="M130 176 C118 196 130 222 150 220 C166 218 170 198 162 178 Z" fill="#6f9a3e" stroke="#3f6a1a" stroke-width="2"/>' +
      S("M150 150 L172 186", "#c49a3a", 7) + S("M162 178 L176 192", "#c49a3a", 7) +
      S("M176 186 L190 250", "#c49a3a", 9) +
      '<path d="M220 260 C250 250 300 254 340 246 L344 262 C300 272 250 272 222 276Z" fill="#fdf3dc" stroke="#b7791f" stroke-width="2"/>' +
      S("M330 254 C280 262 230 262 196 258", "#c49a3a", 4) +
      S("M150 240 C170 236 190 236 198 258 C204 280 200 310 180 330", "#e8a69f", 18) +
      S("M262 168 C250 186 236 210 228 236", "#5a78c4", 12) +
      '<path d="M330 150 C356 150 372 176 364 204 C356 226 326 228 316 206 C308 186 312 152 330 150Z" fill="#9a5a8a" stroke="#6a2a5a" stroke-width="2"/>' +
      S("M318 196 C296 186 276 176 262 168", "#5a78c4", 8) +
      S("M228 236 C230 200 240 180 250 140", "#5a78c4", 8) +
      S("M262 30 L262 0", "#e8a69f", 14) + S("M256 6 C266 14 252 20 264 26", "#5a78c4", 3) +
      '<circle cx="196" cy="252" r="5" fill="#4a3f2a"/>' +
      T(80, 100, "liver", "dg-lbl") + T(345, 238, "spleen") + T(290, 288, "pancreas") + T(152, 345, "duodenum"),
    spots: [
      { x: 110, y: 88, label: "Liver cells (hepatocytes)", text: "Make albumin and clotting factors, conjugate bilirubin, and clear ammonia and drugs. Injury raises AST/ALT; loss of cells lowers albumin and raises INR.", topics: ["liverfn", "cirrhosis", "liverlabs"] },
      { x: 112, y: 206, label: "Gallbladder", text: "Stores and concentrates bile. Cholesterol supersaturation and stasis form stones. Inflamed wall = cholecystitis (persistent RUQ pain, fever).", topics: ["gallstones", "cholecystitis"] },
      { x: 186, y: 172, label: "Cystic duct", text: "A stone here makes the gallbladder contract against it → pain after fatty meals. If it stays blocked → cholecystitis. Usually no jaundice, because liver bile still drains.", topics: ["gallstones", "cholecystitis"] },
      { x: 166, y: 236, label: "Common bile duct", text: "Carries bile from the liver and gallbladder to the duodenum. A stone here backs bilirubin into the blood: jaundice, dark urine, pale stool, ↑bilirubin and ALP.", topics: ["gallstones", "liverfn", "liverlabs"] },
      { x: 214, y: 278, label: "Where bile and pancreatic ducts empty", text: "A stone near here can block pancreatic drainage → gallstone pancreatitis (less common).", topics: ["gallstones"] },
      { x: 238, y: 208, label: "Portal vein", text: "Carries blood from the GI tract to the liver. Scarring raises resistance → portal hypertension → ascites, splenomegaly, varices.", topics: ["cirrhosis"] },
      { x: 368, y: 170, label: "Spleen", text: "Portal hypertension enlarges it, and it holds more platelets → low platelet count → bleeding risk.", topics: ["cirrhosis", "liverlabs"] },
      { x: 284, y: 16, label: "Esophageal varices", text: "Collateral veins enlarged by portal pressure. They can rupture and bleed heavily, and poor clotting makes it worse.", topics: ["cirrhosis", "ugib"] },
      { x: 220, y: 320, label: "Duodenum", text: "Bile enters here; gut bacteria later turn bilirubin into urobilinogen and stercobilin (brown stool).", topics: ["liverfn"] }
    ]
  }
  ];
  window.DIAGRAMS = (window.DIAGRAMS || []).concat(D);
})();
