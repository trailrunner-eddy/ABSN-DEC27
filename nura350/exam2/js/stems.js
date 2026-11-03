/* Name decoder: drug-name stems (mostly USAN stems) that give away the class, tied to the 44 Pharm Exam 2 drugs.
   stem is what's shown, hit is the text highlighted inside each drug name, drugs are ids from window.DRUGS,
   more are same-class drugs NOT on this exam (for recognition only), tip is a memory hook.
   NO_STEM lists exam drugs whose names don't follow a class stem, with a hook for each.
   Loaded after drugs.js; it also rebuilds window.SUFFIXES so the Name Game and Memory Aids use the same list. */
window.STEMS = [
  { stem: "-statin", hit: ["statin"], cls: "Statin (HMG-CoA reductase inhibitor)", drugs: ["atorvastatin"], more: "simvastatin, rosuvastatin", tip: "Statins slow the liver's cholesterol factory. Watch liver labs and muscle pain." },
  { stem: "fibr-", hit: ["fibr"], cls: "Fibrate (fibric acid derivative)", drugs: ["gemfibrozil"], more: "fenofibrate", tip: "\"Fibr\" for fibrate. Lowers triglycerides; adds myopathy risk with a statin." },
  { stem: "-imibe", hit: ["imibe"], cls: "Cholesterol absorption inhibitor", drugs: ["ezetimibe"], more: "", tip: "Locks the food door in the gut so less cholesterol gets absorbed." },
  { stem: "-pril", hit: ["pril"], cls: "ACE inhibitor", drugs: ["lisinopril"], more: "captopril, enalapril", tip: "\"Pril\" = dry cough, angioedema, high K⁺. Not in pregnancy." },
  { stem: "-sartan", hit: ["sartan"], cls: "ARB (angiotensin II receptor blocker)", drugs: ["losartan"], more: "valsartan, olmesartan", tip: "ACE inhibitor's cousin without the cough. Still high K⁺, still not in pregnancy." },
  { stem: "-olol", hit: ["olol", "ilol"], cls: "Beta blocker", drugs: ["metoprolol"], more: "atenolol, propranolol, carvedilol (-ilol)", tip: "Slows the pump: check apical pulse and BP first; may mask hypoglycemia." },
  { stem: "-dipine", hit: ["dipine"], cls: "Calcium channel blocker (dihydropyridine, vessels)", drugs: ["nifedipine"], more: "amlodipine", tip: "Relaxes the pipes, not the heart. Reflex tachycardia, ankle edema. Diltiazem is the other CCB (see -tiazem)." },
  { stem: "-tiazem", hit: ["tiazem"], cls: "Calcium channel blocker (non-dihydropyridine, heart)", drugs: ["diltiazem"], more: "verapamil (no stem)", tip: "The CCB that slows the heart rate, so it's also a class IV antiarrhythmic." },
  { stem: "-osin", hit: ["osin"], cls: "Alpha-1 blocker", drugs: ["doxazosin", "tamsulosin"], more: "prazosin, terazosin", tip: "Relaxes smooth muscle in vessels and prostate. First-dose orthostatic hypotension: rise slowly, take at bedtime." },
  { stem: "nitr-", hit: ["nitro"], cls: "Nitrate (vasodilator)", drugs: ["nitroglycerin"], more: "isosorbide mononitrate", tip: "Headache and low BP; never with sildenafil (-afil)." },
  { stem: "-parin", hit: ["parin"], cls: "Heparins (anticoagulant)", drugs: ["heparin", "enoxaparin"], more: "dalteparin", tip: "Heparin: aPTT, antidote protamine. Enoxaparin is the low-molecular-weight one (sub-Q, no routine aPTT)." },
  { stem: "-xaban", hit: ["xaban"], cls: "Direct factor Xa inhibitor (anticoagulant)", drugs: ["apixaban"], more: "rivaroxaban", tip: "\"Xa-ban\" bans factor Xa. Oral, no routine INR." },
  { stem: "-grel", hit: ["grel"], cls: "P2Y12 antiplatelet", drugs: ["clopidogrel"], more: "prasugrel, ticagrelor", tip: "Stops platelets sticking. Hold before surgery; bleeding precautions." },
  { stem: "-teplase", hit: ["teplase"], cls: "Thrombolytic (tPA, clot buster)", drugs: ["alteplase"], more: "reteplase, tenecteplase", tip: "\"-ase\" enzymes break things down: this one dissolves the clot. Highest bleeding risk." },
  { stem: "-darone", hit: ["darone"], cls: "Class III antiarrhythmic", drugs: ["amiodarone"], more: "dronedarone", tip: "Watch lungs, thyroid, liver, and eyes; long half-life." },
  { stem: "-semide", hit: ["semide"], cls: "Loop diuretic", drugs: ["furosemide"], more: "torsemide (bumetanide breaks the pattern)", tip: "Strongest diuretic: big K⁺ loss, ototoxicity with fast IV push." },
  { stem: "-thiazide", hit: ["thiazide"], cls: "Thiazide diuretic", drugs: ["hydrochlorothiazide"], more: "chlorothiazide", tip: "Lowers K⁺, raises glucose, uric acid, and calcium." },
  { stem: "-actone", hit: ["actone"], cls: "Potassium-sparing diuretic (aldosterone blocker)", drugs: ["spironolactone"], more: "eplerenone (-renone)", tip: "Spirono-LACTONE blocks aldosterone, so K⁺ goes UP. Gynecomastia." },
  { stem: "-itol", hit: ["itol"], cls: "Osmotic diuretic (sugar alcohol)", drugs: ["mannitol"], more: "sorbitol is the same chemistry (a laxative)", tip: "Sugar alcohols pull water. Watch for fluid overload and HF; used for ICP." },
  { stem: "-afil", hit: ["afil"], cls: "PDE-5 inhibitor", drugs: ["sildenafil"], more: "tadalafil, vardenafil", tip: "Never with nitrates (nitr-): severe hypotension." },
  { stem: "estr-", hit: ["estr"], cls: "Estrogen", drugs: ["estradiol", "combination-estrogen-progestin"], more: "ethinyl estradiol (in most pills)", tip: "Clot risk (DVT, PE, stroke), worse with smoking." },
  { stem: "-gest-", hit: ["gest"], cls: "Progestin", drugs: ["progesterone", "combination-estrogen-progestin"], more: "levonorgestrel, norgestimate", tip: "PRO-GEST-erone supports GESTation. Don't let its \"-sterone\" ending fool you." },
  { stem: "test-, -sterone", hit: ["testo"], cls: "Androgen", drugs: ["testosterone"], more: "", tip: "Watch: progesterone also ends in -sterone. The \"test\" is what makes it the male hormone." },
  { stem: "-tidine", hit: ["tidine"], cls: "H2 blocker", drugs: ["famotidine"], more: "cimetidine", tip: "Blocks histamine-2 in the stomach, so less acid." },
  { stem: "-prazole", hit: ["prazole"], cls: "Proton pump inhibitor (PPI)", drugs: ["pantoprazole"], more: "omeprazole, esomeprazole", tip: "Strongest acid blocker; long-term use raises C. diff, fracture, and low Mg risk." },
  { stem: "-prost-", hit: ["prost"], cls: "Prostaglandin", drugs: ["misoprostol"], more: "latanoprost, alprostadil", tip: "Protects the stomach lining, but it's contraindicated in pregnancy (contractions)." },
  { stem: "-setron", hit: ["setron"], cls: "Antiemetic (5-HT3 blocker)", drugs: ["ondansetron"], more: "granisetron", tip: "Blocks serotonin's vomiting signal. Watch for QT prolongation." },
  { stem: "rifa-", hit: ["rifa"], cls: "Rifamycin antibiotic", drugs: ["rifaximin"], more: "rifampin", tip: "Rifaximin stays in the gut: traveler's diarrhea, hepatic encephalopathy." },
  { stem: "-sala-", hit: ["salazine"], cls: "Aminosalicylate (5-ASA)", drugs: ["sulfasalazine"], more: "mesalamine, balsalazide", tip: "\"Sulfa\" + \"sala\": a sulfa drug carrying salicylate for ulcerative colitis. Ask about sulfa allergy." }
];
window.NO_STEM = [
  { drug: "hydralazine-hydrochloride", hook: "Direct vasodilator. Think \"hydra relaxes the arteries.\" Reflex tachycardia." },
  { drug: "niacin", hook: "It's vitamin B3. Flushing is the classic side effect; aspirin beforehand helps." },
  { drug: "aspirin", hook: "A salicylate antiplatelet. Bleeding, GI upset, tinnitus; no Reye's in kids." },
  { drug: "warfarin", hook: "Vitamin K antagonist. Lab is PT/INR; antidote vitamin K; keep vitamin K intake steady." },
  { drug: "adenosine", hook: "Antiarrhythmic for SVT. Fast IV push then flush; brief pause on the monitor is expected." },
  { drug: "digoxin", hook: "\"Dig\" from digitalis (foxglove). Pulse under 60, hold; low K⁺ raises toxicity." },
  { drug: "oxybutynin", hook: "Anticholinergic for overactive bladder: dry mouth, constipation, urinary retention." },
  { drug: "metoclopramide", hook: "Dopamine blocker that speeds the gut. Watch for tardive dyskinesia." },
  { drug: "scopolamine", hook: "Anticholinergic patch behind the ear for motion sickness. Wash hands after touching it." },
  { drug: "dicyclomine", hook: "Anticholinergic antispasmodic for IBS. Same \"can't see, spit, pee, poop\" effects." },
  { drug: "calcium-carbonate", hook: "The name is the chemistry: a calcium salt that neutralizes acid. Constipation, kidney stones." },
  { drug: "sucralfate", hook: "\"Sucr\" sugar + \"alfate\" aluminum: forms a paste over the ulcer. Give on an empty stomach, apart from other meds." }
];
window.SUFFIXES = window.STEMS.map(function (s) {
  var names = s.drugs.map(function (id) { var d = (window.DRUGS || []).filter(function (x) { return x.id === id; })[0]; return d ? d.name.toLowerCase() : id; });
  return [s.stem, s.cls, names.join(", ")];
});
