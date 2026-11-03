/* Section introductions for the Patho Final GI unit: the structure diagram for each section,
   the key structure facts, and a short summary that ties the section together. */
window.SECTIONS = {
  found: {
    diagram: "gitract",
    lead: "Not a lecture of its own. These ideas from all three GI lectures explain the findings in every disorder.",
    summary: [
      "The instructor's question for every GI disorder is: what normal function has been disrupted? Something can move in the wrong direction (reflux), a protective lining can be damaged (gastritis, ulcers, IBD), a passage can be blocked (appendix, gallbladder, bowel), or an organ can lose its job (the scarred liver in cirrhosis). Once you know which one, the findings make sense instead of being a list to memorize.",
      "GI disease spreads beyond the gut through fluid and blood. Diarrhea and vomiting drain volume and electrolytes, an obstructed bowel traps fluid, and vomiting acid causes metabolic alkalosis. Slow bleeding empties iron stores and causes anemia, while fast bleeding drops venous return and cardiac output until the body can't compensate. The recurring worst case for anything that inflames or blocks the gut is perforation, peritonitis, and sepsis."
    ],
    structure: [
      "Esophagus → stomach → duodenum (upper GI) · small intestine → colon → rectum (lower GI).",
      "LES: relaxes to let food in, then closes. Saliva and peristalsis clear normal small reflux.",
      "Stomach defenses: mucus + bicarbonate, tight junctions, blood flow and repair, prostaglandins.",
      "Small intestine absorbs most nutrients and fluid; the colon absorbs water and electrolytes and forms stool.",
      "Visceral pain localizes poorly; parietal peritoneum localizes it well; pain can be referred."
    ]
  },
  upper: {
    diagram: "upper",
    lead: "Diseases of the Upper GI System: GERD, esophagitis, gastritis, peptic ulcer disease, and upper GI bleeding.",
    summary: [
      "The esophagus has one job, moving food down, and a weak defense against acid. GERD happens when the LES barrier fails and acid sits on tissue that can't handle it. Repeated injury inflames it (esophagitis), heals as scar that narrows it (stricture), or changes its cells (Barrett's). Other causes of esophagitis, like pills, Candida, and eosinophilic esophagitis, hurt the same tissue by different mechanisms, so the treatment has to match the cause.",
      "The stomach digests protein while protecting itself, so its disorders are a balance problem. H. pylori and NSAIDs weaken the defenses rather than raising acid. Gastritis is inflammation of the lining, and an ulcer is the same injury gone deeper, past the muscularis mucosae. Depth explains the danger: reach a vessel and it bleeds, go through the wall and it perforates. Upper GI bleeding is the end point, from an ulcer eroding a vessel or a varix rupturing under portal pressure."
    ],
    structure: [
      "Parietal cells: HCl + intrinsic factor (B12 absorption in the terminal ileum).",
      "Chief cells: pepsinogen → pepsin (digests protein).",
      "Erosion stays in the mucosa; an ulcer extends through the muscularis mucosae.",
      "Coffee-ground emesis = blood exposed to acid; melena = upper GI blood digested in the intestines."
    ]
  },
  lower: {
    diagram: "colon",
    lead: "Diseases of the Lower GI System: C. diff, appendicitis, diverticular disease, obstruction and ileus, IBS, Crohn's, UC, colorectal cancer, and lower GI bleeding.",
    summary: [
      "Three overlapping processes explain this lecture: infection, inflammation, and obstruction. When infection or inflammation damages the lining (C. diff, IBD), the bowel can't absorb water and you get diarrhea. When something blocks a hollow structure (appendix, bowel), pressure builds, bacteria grow, blood flow falls, and tissue dies, which leads to perforation and peritonitis. Obstruction also traps fluid in the bowel, so it threatens circulating volume, not just elimination.",
      "IBS and IBD can look alike from the outside, but IBS is a gut–brain, motility, and sensitivity problem with no tissue damage, while IBD is immune-mediated inflammation that damages tissue. Between the two IBDs, location, distribution, and depth decide everything: Crohn's is patchy, anywhere, and transmural (fistulas, strictures), and UC is continuous from the rectum and mucosal (bloody diarrhea, tenesmus)."
    ],
    structure: [
      "Appendix: pouch off the cecum (RLQ, McBurney's point).",
      "Sigmoid colon: LLQ, where diverticula most often form.",
      "Terminal ileum: most common Crohn's site; also where B12 is absorbed.",
      "The rectum is where UC starts; inflammation there causes urgency and tenesmus."
    ]
  },
  liver: {
    diagram: "biliary",
    lead: "Diseases of the Liver & Gallbladder: cholelithiasis, cholecystitis, cirrhosis, hepatitis A, B, and C, and liver labs.",
    summary: [
      "Gallbladder disease is a blockage story. A stone sitting in the gallbladder may never cause trouble. A stone in the cystic duct makes the gallbladder contract against it (pain after fatty meals) and can trap bile until the wall inflames (cholecystitis), following the same path as appendicitis toward necrosis and peritonitis. A stone in the common bile duct stops all bile from reaching the intestine, so bilirubin backs up: jaundice, dark urine, and pale stool.",
      "Liver disease is a loss-of-function story plus a pressure story. Ongoing injury from alcohol, hepatitis B or C, or MASLD heals as scar until it becomes cirrhosis. Fewer working cells mean less albumin (edema, ascites), fewer clotting factors (bleeding), poor bilirubin processing (jaundice), and poor ammonia clearance (confusion). Scar also resists portal blood flow, causing ascites, a big spleen that hides platelets, and varices that can bleed heavily."
    ],
    structure: [
      "Cystic duct connects the gallbladder; the common bile duct carries bile from liver and gallbladder to the duodenum.",
      "Portal vein carries GI blood to the liver; scarring raises its pressure.",
      "Bilirubin: unconjugated (bound to albumin) → conjugated in the liver → bile → stercobilin in stool.",
      "AST/ALT = injury · ALP/GGT/bilirubin = bile flow · albumin/INR = synthesis."
    ]
  }
};
