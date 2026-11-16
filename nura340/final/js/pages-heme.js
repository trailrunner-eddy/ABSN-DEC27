/* Hematology & Neoplasia pages for the Patho Final guide: section overviews, plain-language text,
   and picture-quiz figures from the five hematology lecture slide decks.
   Loads after pages-endo.js. */
(function () {
  /* ---------- Section overviews ---------- */
  Object.assign(window.SECTIONS, {
    rbc: {
      lead: "Diseases of Red Blood Cells: the CBC, anemia classification, iron deficiency, B12 and folate deficiency, hemolytic anemia, anemia of chronic disease, and hemoglobinopathies.",
      summary: [
        "Red cells carry oxygen on hemoglobin, so every anemia shares the same core symptoms: fatigue, weakness, shortness of breath with activity, pallor, and a faster heart rate as the body tries to keep oxygen moving. Because those symptoms repeat, the instructor wants you to find the cause from the pattern. There are only three ways to become anemic: the marrow makes too few cells, cells are destroyed too fast, or blood is lost.",
        "MCV, the average cell size, is the first clue. Iron builds hemoglobin, so iron deficiency makes small, pale cells. B12 and folate build DNA, so their deficiency makes big cells that couldn't divide. Normal-size cells point to acute bleeding or hemolysis. Then the history and a few targeted labs finish the story: ferritin for iron stores, neurologic signs for B12, jaundice with high reticulocytes and LDH and low haptoglobin for hemolysis, and a chronic inflammatory disease with normal ferritin for anemia of chronic disease."
      ],
      structure: [
        "Marrow stem cells → myeloid line (RBCs, platelets, neutrophils, monocytes) and lymphoid line (B, T, NK cells).",
        "Kidneys → EPO (red cells). Liver → thrombopoietin (platelets).",
        "Marrow needs iron (hemoglobin) plus B12 and folate (DNA).",
        "B12 + intrinsic factor (stomach parietal cells) → absorbed in the terminal ileum.",
        "Hgb = severity; MCV = clue to cause; reticulocytes = is the marrow responding?"
      ]
    },
    sickle: {
      lead: "Sickle Cell Anemia (guest lecture, Prof. Forbes): mechanism, diagnosis, labs, pain crises, acute chest syndrome, fever and the spleen, sequestration, stroke, treatments, and the effects of racism on care.",
      summary: [
        "Hemoglobin S sticks together after it releases oxygen, so red cells turn rigid, sticky, and crescent shaped. That one change explains the whole disease. Rigid cells jam small vessels, so tissue downstream becomes ischemic: pain crises, acute chest syndrome, stroke, priapism, and slow damage to bones, kidneys, lungs, and eyes. Fragile cells break early, so there's chronic hemolytic anemia, and you judge labs against the client's own baseline.",
        "The spleen is injured so early (around 2–3 months) that children with SCD are functionally asplenic, which is why fever is an emergency and why they take daily penicillin. Low oxygen makes more sickling, so the lungs are the danger zone: shallow breathing from pain can start acute chest syndrome, and incentive spirometry helps prevent it. Pain can't be measured by any test, so it is whatever the client says it is."
      ],
      structure: [
        "Two carrier parents: 25% disease, 50% trait, 25% unaffected.",
        "Key labs: hemoglobin and reticulocyte count, compared to baseline.",
        "Acute complications: fever, vaso-occlusive episode, acute chest syndrome, splenic sequestration, stroke.",
        "Daily meds: hydroxyurea, penicillin, folic acid, pain medicines."
      ]
    },
    plt: {
      lead: "Diseases of Platelets: hemostasis, thrombocytopenia (production, destruction, sequestration, dilution; ITP and HIT), primary and secondary thrombocytosis, and acquired platelet function disorders.",
      summary: [
        "Platelets make the first plug when a vessel is injured: they stick to the wall, activate, call in more platelets with signals like thromboxane A2, and clump together. Clotting factors then add fibrin. So platelet problems cause skin and mucosal bleeding (petechiae, bruising, gum and nose bleeds), and PT and aPTT usually stay normal because they test the clotting factors, not platelets.",
        "Ask two questions every time: how many, and how well? A low count comes from less production, faster removal or consumption (ITP, HIT), trapping in a big spleen, or dilution. A high count is either a marrow disorder (essential thrombocythemia, higher clot risk) or a reaction to infection, inflammation, or iron deficiency. A normal count can still bleed if function is impaired by aspirin, uremia, or liver failure. HIT and cirrhosis are the tricky ones, where low platelets and clotting can happen together."
      ],
      structure: [
        "Megakaryocytes in the marrow release platelets; thrombopoietin (liver) drives production.",
        "Normal 150,000–400,000/mm³; spontaneous bleeding risk at about 10,000.",
        "Primary hemostasis: adhesion (von Willebrand factor) → activation → aggregation (thromboxane A2).",
        "Secondary hemostasis: clotting factors → fibrin (PT, aPTT)."
      ]
    },
    wbc: {
      lead: "Diseases of White Blood Cells: leukemias (ALL, CLL, AML, CML), lymphomas (Hodgkin and non-Hodgkin), myelodysplastic neoplasms, and the complications they share.",
      summary: [
        "Leukemia and MDS are marrow problems. Abnormal cells crowd out (leukemia) or fail to mature (MDS), so the healthy lines drop: low hemoglobin causes fatigue, low platelets cause bleeding, and low neutrophils cause infection. A high total white count doesn't mean good immunity, because those cells may be abnormal. The names carry two facts: lymphoid vs. myeloid tells you the line, and acute (blasts, fast) vs. chronic (mature-looking, slow) tells you the pace.",
        "Lymphomas are lymphocyte cancers that usually collect in lymph nodes, so a painless enlarged node and B symptoms (fever, night sweats, weight loss) are the classic picture. Hodgkin has Reed-Sternberg cells that create an inflamed node; non-Hodgkin is a family of slow and aggressive subtypes that often spread outside nodes. The shared emergencies: febrile neutropenia (fever may be the only sign), leukostasis, and tumor lysis syndrome (potassium, phosphate, and uric acid up, calcium down)."
      ],
      structure: [
        "Lymphoid line → B, T, NK cells (ALL, CLL, lymphomas). Myeloid line → RBCs, platelets, granulocytes, monocytes (AML, CML, MDS).",
        "Acute = blasts, rapid. Chronic = mature or maturing cells, gradual.",
        "Hallmarks: smudge cells (CLL), Auer rods (AML), Philadelphia chromosome 9;22 (CML), Reed-Sternberg cells (Hodgkin).",
        "Diagnosis: CBC with differential and smear; marrow biopsy and flow cytometry (leukemia, MDS); node biopsy and PET/CT (lymphoma)."
      ]
    },
    neo: {
      lead: "Introduction to Neoplasia and Cancer: benign vs. malignant, how cancer develops, invasion and metastasis, why location matters (the colon cancer example), and biopsy, grade, and stage.",
      summary: [
        "Normal cells divide when needed, pause to repair damage, and die when damage can't be fixed. Cancer develops as genetic changes pile up and break those controls, so a population of abnormal cells keeps growing. A benign mass stays put but can still cause trouble by pressing on its neighbors (like a pituitary adenoma). A malignant tumor grows into nearby tissue and can travel through blood or lymph to start new tumors elsewhere.",
        "To explain any cancer's symptoms, start with the normal anatomy. A colon tumor narrows the lumen, so stool can't pass easily (cramping, bloating), and fragile tumor tissue bleeds, either visibly or slowly enough to cause iron deficiency anemia. Colon cells found in the liver are metastatic colon cancer. Biopsy says what it is, grade says how abnormal the cells look, and stage says how far it has spread."
      ],
      structure: [
        "Primary tumor → local invasion → metastasis (blood or lymph).",
        "Benign: compresses. Malignant: invades and spreads.",
        "Biopsy = what is it? Grade = how abnormal? Stage = how far?",
        "Exam scope: general concepts plus the colon cancer example; specific cancers from Engage won't be tested."
      ]
    }
  });

  /* ---------- Plain language ---------- */
  Object.assign(window.PLAIN, {
    hemefn: { text: "Your bone marrow is a factory that makes three products: red cells that carry oxygen, white cells that fight germs, and platelets that plug leaks. A blood count (CBC) is the inventory report. If one product is low, look for a problem with that product. If all three are low, the factory itself is in trouble.", like: "One empty shelf means a supply problem for that item. Every shelf empty means the factory is down." },
    anemia: { text: "Anemia means not enough hemoglobin, the stuff in red cells that carries oxygen. You either aren't making enough red cells, they're getting destroyed, or you're losing them by bleeding. The size of the cells is a big clue: small cells usually mean not enough iron, big cells mean not enough B12 or folate, and normal cells often mean bleeding.", like: "Fewer delivery trucks on the road: you can't build them, they keep crashing, or they keep driving off a cliff." },
    ida: { text: "Iron is the main building block of hemoglobin. When your iron runs out, usually from slow bleeding like heavy periods or a bleeding spot in the gut, your body makes small, pale red cells that carry less oxygen. You feel tired and short of breath. The fix is to replace iron and find the leak.", like: "Trying to build cars without enough steel: the cars come out small and flimsy." },
    b12: { text: "B12 helps your body copy DNA so new red cells can split. Without it, cells grow big but don't divide, so you end up with fewer, larger cells. B12 also protects nerves, so low B12 can cause numbness, tingling, and trouble walking, sometimes before the blood counts change. Your stomach makes a helper (intrinsic factor) that you need to absorb B12; in pernicious anemia that helper is missing.", like: "A key that only works with the right keychain. No keychain, no entry, no matter how many keys you have." },
    folate: { text: "Folate, like B12, is needed to copy DNA, so a shortage makes big red cells and anemia. Unlike B12, it doesn't cause nerve problems. Your body only stores a little, so a poor diet, heavy drinking, or pregnancy can use it up fast. Getting enough before pregnancy helps a baby's spine and brain form normally.", like: "A small pantry that runs out quickly if you stop shopping." },
    hemolytic: { text: "In hemolytic anemia, red cells are destroyed before their time. The marrow tries to keep up by making lots of young cells. The broken cells release their contents, which turn into yellow bilirubin, so the skin and eyes can turn yellow and urine can darken. Over time, extra bilirubin can form gallstones.", like: "Cars being scrapped faster than the factory can build them, and the junkyard overflowing." },
    acd: { text: "Long-term inflammation, like from rheumatoid arthritis, makes the body lock iron away in storage. There's plenty of iron in the warehouse, but the marrow can't get to it, so it can't make enough hemoglobin. The marrow also stops listening well to the signal to make red cells.", like: "A full pantry with the door locked." },
    thal: { text: "Some people inherit a change in hemoglobin itself. In sickle cell disease, the hemoglobin is the wrong kind. In thalassemia, the body makes too little of one of hemoglobin's parts. Both cause red cells to break down early, so the person has ongoing anemia.", like: "A machine built with the wrong part vs. one missing a part. Either way it breaks down sooner." },
    scd: { text: "In sickle cell disease, the hemoglobin clumps together when it lets go of oxygen, bending red cells into stiff crescents. These cells get stuck in small blood vessels, cutting off blood flow and causing severe pain and organ damage. They also break apart early, causing ongoing anemia. Most babies are found on newborn screening.", like: "Stiff, bent paperclips trying to flow through a narrow straw." },
    voe: { text: "A pain crisis happens when sickled cells block blood flow and tissue is starved of oxygen. It hurts badly, often in the arms, legs, back, or chest. No blood test or scan can prove how much it hurts, so we believe and treat what the person tells us.", like: "A traffic jam that cuts off deliveries to a whole neighborhood." },
    acs: { text: "Acute chest syndrome is a blockage in the lungs' small blood vessels. It looks like pneumonia: fever, cough, chest pain, fast breathing, and lower oxygen. Low oxygen makes more cells sickle, which makes it worse. Deep breathing with an incentive spirometer helps prevent it.", like: "A snowball rolling downhill: less oxygen, more sickling, even less oxygen." },
    scdfever: { text: "Sickling damages the spleen very early, so it stops filtering out certain dangerous bacteria. That's why any fever in sickle cell disease is an emergency and why kids take daily penicillin. Sometimes blood suddenly gets trapped in the spleen, which swells and steals blood from circulation (splenic sequestration).", like: "A security guard who stopped showing up, so intruders walk right in." },
    scdcomp: { text: "Over a lifetime, blocked blood flow can damage almost any organ: the brain (stroke), bones, lungs, kidneys, eyes, and penis (priapism). Treatments reduce sickling (hydroxyurea), prevent infection (penicillin), support red cell production (folic acid), and replace sickled blood with donor blood (transfusion or exchange).", like: "Years of small clogs in a building's plumbing slowly damage every room." },
    pltfn: { text: "Platelets are tiny cell pieces that rush to a cut, stick to it, and pile on each other to make a quick plug. Then clotting proteins add a mesh to make it strong. If you don't have enough platelets, or they don't work, you bruise easily and bleed from your gums and nose.", like: "Sandbags piled on a leak, then cement poured over them." },
    tcp: { text: "Low platelets means fewer sandbags for leaks. Your marrow might not be making enough, your body might be destroying them, your spleen might be hoarding them, or they might be watered down after big blood loss. In one special case (HIT, from heparin), the body activates platelets so they clump into clots and get used up.", like: "Running low on sandbags: the factory stopped, someone's stealing them, a warehouse is hoarding them, or they've been spread too thin." },
    et: { text: "In essential thrombocythemia, the marrow has a glitch that makes way too many platelets. They clog small blood vessels, causing headaches, vision changes, and burning hands and feet, and they can form dangerous clots. Strangely, extremely high counts can also cause bleeding.", like: "Too many cars on the road cause traffic jams." },
    reactive: { text: "Sometimes the platelet count goes up because the body is reacting to something else, like an infection, inflammation, or low iron. The marrow itself is fine. The count usually drops once the cause is treated.", like: "Extra security hired for a big event, then sent home when it's over." },
    apfd: { text: "Sometimes you have plenty of platelets, but they don't work well. Aspirin stops platelets from calling their friends to the pile. Kidney failure lets toxins build up that make platelets less sticky. Liver failure messes with platelets and clotting proteins at the same time.", like: "Enough workers on site, but they can't use their radios to coordinate." },
    leuk: { text: "Leukemia is a cancer of the blood factory. Abnormal cells multiply and crowd out the healthy ones, so you run low on red cells (tired), platelets (bruising), and working white cells (infections). 'Acute' types move fast with very immature cells; 'chronic' types move slowly.", like: "Weeds taking over a garden until the vegetables can't grow." },
    all: { text: "ALL is the most common cancer in children. Immature immune cells (lymphoblasts) keep multiplying without growing up, filling the marrow and pushing out healthy cells. Kids get tired, pale, bruise easily, get infections, and can have bone pain. It can spread to the brain and spinal fluid, so a spinal tap checks for it.", like: "A classroom full of kindergartners who never move up a grade, until there's no room for anyone else." },
    cll: { text: "CLL is a slow leukemia, usually in older adults. Immune cells (B cells) look grown-up but don't work, so people get infections even though their count is high. Many people feel fine for years and just get regular checkups (watchful waiting).", like: "A big team of employees who show up but don't do their jobs." },
    aml: { text: "AML is a fast leukemia of the other blood line. Immature cells crowd the marrow, so infections, bleeding, and anemia come on quickly. If there are huge numbers of these cells in the blood, they can sludge up small vessels in the lungs and brain.", like: "Rush-hour traffic so thick the ambulances can't get through." },
    cml: { text: "In CML, two chromosomes swap pieces (the Philadelphia chromosome), creating a 'grow' switch that's stuck on. The marrow makes too many myeloid cells, and the spleen gets big, so people feel full after a few bites. Targeted pills turn that stuck switch off.", like: "A gas pedal stuck to the floor, and a medicine that unsticks it." },
    hodgkin: { text: "Lymphoma is cancer of immune cells that usually shows up in lymph nodes, like a painless lump in the neck. Hodgkin lymphoma has special 'owl eye' cells that stir up inflammation, causing fever, night sweats, weight loss, and itching. A biopsy of the node makes the diagnosis.", like: "A troublemaker who riles up the whole neighborhood." },
    nhl: { text: "Non-Hodgkin lymphoma is a big family of lymphomas: some grow slowly, some fast. When very fast cancers are treated, tons of cells burst at once and dump potassium, phosphate, and uric acid into the blood. That can upset the heart rhythm and damage the kidneys (tumor lysis syndrome).", like: "Demolishing a building all at once: the debris clogs the streets." },
    mds: { text: "In MDS, the marrow is busy making cells, but they come out defective and die before they ever reach the blood. So the marrow looks full while the blood counts are low. Sometimes it turns into AML.", like: "A bakery that bakes all day but burns every loaf." },
    oncemerg: { text: "Cancer and its treatment can shut down the blood factory. With very few infection-fighting cells, a fever may be the only warning of a serious infection, so it's an emergency. When treatment kills lots of cancer cells fast, their contents flood the blood and can hurt the heart and kidneys.", like: "A city with no firefighters: one spark can become a wildfire." },
    neo: { text: "Neoplasia means cells growing when they shouldn't. Normally cells divide only when needed and die when damaged. Cancer starts when changes in a cell's genes break those rules. A benign tumor stays in one spot but can press on things nearby. A malignant tumor grows into surrounding tissue and can spread.", like: "A benign tumor is a houseguest taking up space. A malignant one knocks down walls and moves into other houses." },
    spread: { text: "Where a tumor sits explains the symptoms. A colon tumor narrows the tube stool passes through, causing cramping, bloating, and trouble going. Tumors bleed easily, so you may see blood or slowly become anemic. If colon cancer cells travel and grow in the liver, it's still called colon cancer, now metastatic.", like: "A boulder in a pipe, and the boulder's crumbs washing downstream." },
    grade: { text: "A biopsy takes a tissue sample to see if it's cancer and what kind. Grade tells you how strange the cells look under a microscope. Stage tells you how far the cancer has spread in the body. A tumor can have very strange cells and still be caught early in one spot.", like: "Grade is how badly behaved the kids are; stage is how many rooms they've gotten into." }
  });

  /* ---------- Picture-quiz figures from the hematology lecture slides ---------- */
  var base = window.SLIDE_DECKS.length;
  window.SLIDE_DECKS.push(
    { mod: "Final", title: "Diseases of Red Blood Cells", sys: "rbc" },
    { mod: "Final", title: "Sickle Cell Anemia", sys: "sickle" },
    { mod: "Final", title: "Diseases of Platelets", sys: "plt" },
    { mod: "Final", title: "Diseases of White Blood Cells", sys: "wbc" },
    { mod: "Final", title: "Introduction to Neoplasia and Cancer", sys: "neo" }
  );
  window.SLIDES.push(
    { id: "rb04", deck: base, n: 4, title: "Introduction to Anemias" },
    { id: "rb05", deck: base, n: 5, title: "Iron Deficiency Anemia" },
    { id: "rb06", deck: base, n: 6, title: "Vitamin B12 Deficiency Anemia (1 of 2)" },
    { id: "rb07", deck: base, n: 7, title: "Vitamin B12 Deficiency Anemia (2 of 2)" },
    { id: "rb08", deck: base, n: 8, title: "Folate Deficiency Anemia" },
    { id: "rb09", deck: base, n: 9, title: "Hemolytic Anemia (1 of 2)" },
    { id: "rb10", deck: base, n: 10, title: "Hemolytic Anemia (2 of 2)" },
    { id: "sc06", deck: base + 1, n: 6, title: "Sickle Cell Disease: Inheritance" },
    { id: "sc12", deck: base + 1, n: 12, title: "Normal RBC vs. Sickle Cell" },
    { id: "sc13", deck: base + 1, n: 13, title: "Sickle Cells: Crescent Moon Shaped" },
    { id: "sc14", deck: base + 1, n: 14, title: "Sickle Cell: Blood Flow" },
    { id: "sc16", deck: base + 1, n: 16, title: "Sickle Cell Disease: Chronic Complications" },
    { id: "sc22", deck: base + 1, n: 22, title: "Sickle Cell Disease: Common Sites of Pain" },
    { id: "pl04", deck: base + 2, n: 4, title: "Thrombocytopenia (1 of 2)" },
    { id: "pl05", deck: base + 2, n: 5, title: "Thrombocytopenia (2 of 2)" },
    { id: "pl06", deck: base + 2, n: 6, title: "Introduction to Thrombocytosis" },
    { id: "pl07", deck: base + 2, n: 7, title: "Primary Thrombocytosis (1 of 2)" },
    { id: "pl08", deck: base + 2, n: 8, title: "Primary Thrombocytosis (2 of 2)" },
    { id: "pl10", deck: base + 2, n: 10, title: "Acquired Platelet Function Disorders (1 of 2)" },
    { id: "pl11", deck: base + 2, n: 11, title: "Acquired Platelet Function Disorders (2 of 2)" },
    { id: "wb03", deck: base + 3, n: 3, title: "Introduction to Leukemias" },
    { id: "wb04", deck: base + 3, n: 4, title: "Acute Lymphoid Leukemia (1 of 2)" },
    { id: "wb05", deck: base + 3, n: 5, title: "ALL (2 of 2)" },
    { id: "wb07", deck: base + 3, n: 7, title: "Chronic Lymphoid Leukemia" },
    { id: "wb08", deck: base + 3, n: 8, title: "Acute Myeloid Leukemia (1 of 2)" },
    { id: "wb09", deck: base + 3, n: 9, title: "Acute Myeloid Leukemia (2 of 2)" },
    { id: "wb11", deck: base + 3, n: 11, title: "Introduction to Lymphomas" },
    { id: "wb12", deck: base + 3, n: 12, title: "Hodgkin Lymphoma (1 of 2)" },
    { id: "wb13", deck: base + 3, n: 13, title: "Hodgkin Lymphoma (2 of 2)" },
    { id: "wb15", deck: base + 3, n: 15, title: "Myelodysplastic Syndromes" },
    { id: "ne03", deck: base + 4, n: 3, title: "What Is Neoplasia?" },
    { id: "ne05", deck: base + 4, n: 5, title: "How Does Cancer Spread?" },
    { id: "ne06", deck: base + 4, n: 6, title: "Why Does Tumor Location Matter?" }
  );
  window.FIGURES.push(
    { f: "rb04-1.jpg", slide: "rb04", topic: "anemia" },
    { f: "rb05-1.jpg", slide: "rb05", topic: "ida" },
    { f: "rb06-1.jpg", slide: "rb06", topic: "b12" },
    { f: "rb07-1.jpg", slide: "rb07", topic: "b12" },
    { f: "rb08-1.jpg", slide: "rb08", topic: "folate" },
    { f: "rb09-1.jpg", slide: "rb09", topic: "hemolytic" },
    { f: "rb10-1.jpg", slide: "rb10", topic: "hemolytic" },
    { f: "sc06-1.jpg", slide: "sc06", topic: "scd" },
    { f: "sc12-1.jpg", slide: "sc12", topic: "scd" },
    { f: "sc13-1.jpg", slide: "sc13", topic: "scd" },
    { f: "sc14-1.jpg", slide: "sc14", topic: "voe" },
    { f: "sc16-1.jpg", slide: "sc16", topic: "scdcomp" },
    { f: "sc22-1.jpg", slide: "sc22", topic: "voe" },
    { f: "pl04-1.jpg", slide: "pl04", topic: "tcp" },
    { f: "pl04-2.jpg", slide: "pl04", topic: "tcp" },
    { f: "pl05-1.jpg", slide: "pl05", topic: "tcp" },
    { f: "pl06-1.jpg", slide: "pl06", topic: "et" },
    { f: "pl07-1.jpg", slide: "pl07", topic: "et" },
    { f: "pl08-1.jpg", slide: "pl08", topic: "et" },
    { f: "pl10-1.jpg", slide: "pl10", topic: "apfd" },
    { f: "pl10-2.jpg", slide: "pl10", topic: "apfd" },
    { f: "pl11-1.jpg", slide: "pl11", topic: "apfd" },
    { f: "wb03-1.jpg", slide: "wb03", topic: "hemefn" },
    { f: "wb04-1.jpg", slide: "wb04", topic: "all" },
    { f: "wb05-1.jpg", slide: "wb05", topic: "all" },
    { f: "wb05-2.jpg", slide: "wb05", topic: "all" },
    { f: "wb07-1.jpg", slide: "wb07", topic: "cll" },
    { f: "wb08-1.jpg", slide: "wb08", topic: "aml" },
    { f: "wb09-1.jpg", slide: "wb09", topic: "aml" },
    { f: "wb11-1.jpg", slide: "wb11", topic: "hodgkin" },
    { f: "wb12-1.jpg", slide: "wb12", topic: "hodgkin" },
    { f: "wb13-1.jpg", slide: "wb13", topic: "hodgkin" },
    { f: "wb15-1.jpg", slide: "wb15", topic: "mds" },
    { f: "ne03-1.jpg", slide: "ne03", topic: "neo" },
    { f: "ne05-1.jpg", slide: "ne05", topic: "spread" },
    { f: "ne06-1.jpg", slide: "ne06", topic: "spread" }
  );
})();
