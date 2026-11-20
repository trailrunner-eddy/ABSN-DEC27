/* ============================================================
   ABSN PROGRAM MAP: edit this file to add semesters, courses and exams.

   To add an exam guide:
   1. Put the guide in its own folder in this site: <course id>/<exam>/
      (for example: nura350/exam1/index.html).
   2. Add an entry to that course's "exams" list below with:
        name:   what shows on the card
        status: "ready" (has a guide), "planned" (coming soon)
        path:   the guide's index.html, relative to this site's root
        date:   optional, e.g. "2026-11-05" (shows a countdown)
        localPath: optional path used when the hub is opened from the Mac
        topics: optional list of chips shown on the card
        bank:   optional script files (relative to the guide folder) holding its
                practice questions; they join the NCLEX Prep question pool
                Question format for new banks: window.QUESTIONS = [{ sys, type, diff, stem,
                options, answer, why }]. type is "mc" (answer = index) or "sata"
                (answer = [indexes]); Patho uses only these two. diff rates how
                technical it is: "easy" (recall), "medium" (apply to a client),
                "hard" (multi-step or technical reasoning). why explains the
                correct answer, and the distractors when useful.
                Any lab result gets its normal range right after it, NCLEX style:
                "K⁺ 6.4 mEq/L (normal 3.5–5.0)". Ranges live in js/labs.js;
                run node tools/check-labs.js to catch missing ones.

   Lecture guides (per course):
        lectureFolder:    folder holding the PDFs, relative to the hub on the Mac
        lectureWebFolder: folder holding the PDFs in this site (for downloads online)
        lectureExam:   which exam guide the topic chips open
        lectureGuides: [{ mod, title, file (Mac name), web (site name), topics: [[label, topicId]] }]
   3. Save and refresh the hub page.
   ============================================================ */

window.PROGRAM = {
  name: "PLU Accelerated BSN",
  months: 16,
  semesters: [
    {
      id: "sem1", name: "Semester 1", note: "Foundations",
      courses: [
        {
          id: "nura320", code: "NURA 320", name: "Nursing Fundamentals", icon: "🩹", color: "#5b8c3a",
          exams: []
        },
        {
          id: "nura330", code: "NURA 330", name: "Health Assessment", icon: "🩺", color: "#12898f",
          lectureFolder: "../Sem 1/Health Assessment/",
          lectureWebFolder: "nura330/lecture-guides/",
          lectureExam: "Final Exam",
          lectureGuides: [
            { mod: "Exam 1 · Mods 1–3", title: "Mod 1 · Intro to Health Assessment", file: "Exam 1/Lecture Guides/Mod 1 - Intro to Health Assessment Lecture Guide.pdf", web: "mod-1-intro-to-health-assessment.pdf", topics: [["Subjective vs. objective", "data"], ["Techniques", "inspect"]] },
            { mod: "Exam 1 · Mods 1–3", title: "Mod 2 · General Survey & Health History", file: "Exam 1/Lecture Guides/Mod 2 - General Survey & Health History Lecture Guide.pdf", web: "mod-2-general-survey-and-health-history.pdf", topics: [["General survey", "gs"], ["OLDCARTS", "hpi"]] },
            { mod: "Exam 1 · Mods 1–3", title: "Mod 3 · Respiratory Assessment", file: "Exam 1/Lecture Guides/Mod 3 - Respiratory Assessment Lecture Guide.pdf", web: "mod-3-respiratory-assessment.pdf", topics: [["Breath sounds", "advbs"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 4 · Integumentary & Lymphatic Systems", file: "Exam 2/Lecture Guides/Mod 4 - Integumentary and Lymphatic Systems Lecture Guide.pdf", web: "mod-4-integumentary-and-lymphatic-systems.pdf", topics: [["Pressure injuries", "pi"], ["Braden", "braden"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 5 · Cardiovascular Assessment", file: "Exam 2/Lecture Guides/Mod 5 - Cardiovascular Assessment Lecture Guide.pdf", web: "mod-5-cardiovascular-assessment.pdf", topics: [["Heart sounds", "heartsounds"], ["Pulses", "pulses"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 6 · HEENT", file: "Exam 2/Lecture Guides/Mod 6 - HEENT Lecture Guide.pdf", web: "mod-6-heent.pdf", topics: [["Cranial nerves", "cn"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 7 · GU & Rectal Assessment", file: "Exam 2/Lecture Guides/Mod 7 - GU and Rectal Assessment Lecture Guide.pdf", web: "mod-7-gu-and-rectal-assessment.pdf", topics: [["Bladder scan & PVR", "retention"], ["Urine output", "urine"]] },
            { mod: "Final · Mods 8–11", title: "Mod 8 · GU, Rectal & Reproductive (final study guide map + Mod 7 guide)", file: "Final/Lecture Guides/Mod 8 - GU and Rectal Assessment Lecture Guide.pdf", web: "mod-8-gu-rectal-and-reproductive-assessment.pdf", topics: [["Bladder scan & PVR", "retention"], ["Urine output", "urine"]] },
            { mod: "Final · Mods 8–11", title: "Mod 9 · GI & Abdominal Assessment", file: "Final/Lecture Guides/Mod 9 - GI and Abdominal Assessment Lecture Guide.pdf", web: "mod-9-gi-and-abdominal-assessment.pdf", topics: [["Bowel sounds", "bowel"], ["CVA tenderness", "cva"]] },
            { mod: "Final · Mods 8–11", title: "Mod 10 · Neurological Assessment", file: "Final/Lecture Guides/Mod 10 - Neuro Assessment Lecture Guide.pdf", web: "mod-10-neurological-assessment.pdf", topics: [["Stroke priorities", "stroke"], ["GCS", "gcs"]] },
            { mod: "Final · Mods 8–11", title: "Mod 11 · Musculoskeletal Assessment (coming when the slides are posted)" }
          ],
          exams: [
            {
              name: "Exam 1", status: "ready",
              path: "nura330/exam1/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Intro to health assessment, general survey & health history, respiratory assessment. Exam 1 is done; use it to review for the final.",
              topics: ["Intro", "Survey & Hx", "Respiratory"],
              stats: "3 section overviews · 26 topics · 10 diagrams · 70 questions · 122 flashcards"
            },
            {
              name: "Exam 2", status: "ready",
              path: "nura330/exam2/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Lifespan, skin & lymph, cardiovascular, HEENT, and rectal & genitourinary. Questions are MC and SATA like the exam, each rated by difficulty.",
              topics: ["Skin & Lymph", "Cardiovascular", "HEENT", "GU & Rectal"],
              stats: "4 section overviews · 38 topics · 20 diagrams · 96 questions · 184 flashcards"
            },
            {
              name: "Final Exam", status: "ready",
              path: "nura330/final/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Cumulative: every module from intro through GI and neuro, plus a full-length 50-question mock final weighted like the blueprint. Mod 11 (musculoskeletal) is a placeholder until its slides are posted.",
              topics: ["All of Exams 1–2", "GI & Abdomen", "Neuro", "MSK (coming)"],
              stats: "10 section overviews · 82 topics · 35 diagrams · 298 questions (132 new) · 385 flashcards"
            },
            {
              name: "Final Practical", status: "ready",
              path: "nura330/practical/index.html",
              localPath: "../Sem 1/Health Assessment/Final/Practical Exam Study Guide/index.html",
              blurb: "The 10-minute practical, step by step: the core safety and assessment routine for every patient, then a rubric walk-through (Recognize, Analyze, Prioritize, Act, Evaluate) with SBAR scripts and the NURA 320 med pass for each of the four possible patients.",
              topics: ["Core routine", "Cardiovascular", "Respiratory", "Neuro", "Musculoskeletal"],
              stats: "4 patient scenarios · 100-point rubric map · 10-minute pacing plan · practice checklists"
            }
          ]
        },
        {
          id: "nura340", code: "NURA 340", name: "Pathology", icon: "🫀", color: "#c8463d",
          lectureFolder: "../Sem 1/Patho/",
          lectureWebFolder: "nura340/lecture-guides/",
          lectureExam: "Exam 2",
          /* Reading guides: read-through references built from assigned readings (not exam guides).
             Same fields as an exam entry; they show under "Reading guides" on the course page. */
          readings: [
            {
              name: "Mod 9 GI Reading Guide", status: "ready",
              path: "nura340/mod9-gi/index.html",
              blurb: "Your Mod 9 readings as a page-by-page reference: how the GI system works, then upper GI, lower GI, and gallbladder & liver disorders, each in the same six color-coded sections.",
              topics: ["GI basics", "Upper GI", "Lower GI", "Liver & GB"],
              stats: "30 pages · 30 figures · searchable · term definitions & lab ranges"
            }
          ],
          lectureGuides: [
            { mod: "Diseases of the Respiratory System", title: "Respiratory System Structure & Function", file: "Exam 2/Lecture Guides/Mod 3 - Respiratory System Structure and Function Lecture Guide.pdf", web: "mod-3-respiratory-system-structure-and-function.pdf", topics: [["Acid-base", "acidbase"], ["Pneumonia", "pneumonia"]] },
            { mod: "Diseases of the Respiratory System", title: "Upper Respiratory Diseases", file: "Exam 2/Lecture Guides/Mod 3 - Upper Respiratory Diseases Lecture Guide.pdf", web: "mod-3-upper-respiratory-diseases.pdf", topics: [["Upper respiratory infections", "uri"]] },
            { mod: "Diseases of the Respiratory System", title: "Lower Respiratory Diseases", file: "Exam 2/Lecture Guides/Mod 3 - Lower Respiratory Diseases Lecture Guide.pdf", web: "mod-3-lower-respiratory-diseases.pdf", topics: [["Pneumonia", "pneumonia"], ["TB", "tb"], ["Asthma", "asthma"], ["COPD", "copd"], ["Lung injuries", "trauma"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Structure & Function of the Cardiovascular System", file: "Exam 2/Lecture Guides/Mod 5 - Structure and Function of the Cardiovascular System Lecture Guide.pdf", web: "mod-5-structure-and-function-of-the-cardiovascular-system.pdf", topics: [["Hypertension", "htn"], ["Fluid & electrolytes", "fluid"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Diseases of the Arterial System", file: "Exam 2/Lecture Guides/Mod 5 - Diseases of the Arterial System Lecture Guide.pdf", web: "mod-5-diseases-of-the-arterial-system.pdf", topics: [["Hypertension", "htn"], ["Atherosclerosis", "athero"], ["PAD & emboli", "pad"], ["Aneurysms", "aneurysm"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Diseases of the Venous System", file: "Exam 2/Lecture Guides/Mod 5 - Diseases of the Venous System Lecture Guide.pdf", web: "mod-5-diseases-of-the-venous-system.pdf", topics: [["CVI, DVT & PE", "venous"]] },
            { mod: "Diseases of the Cardiovascular System II", title: "Cardiac Valves & Ischemic Heart Disease", file: "Exam 2/Lecture Guides/Mod 6 - Cardiac Valves & Ischemic Heart Disease Lecture Guide.pdf", web: "mod-6-cardiac-valves-and-ischemic-heart-disease.pdf", topics: [["Valves", "valves"], ["Angina & MI", "acs"], ["Peri/myo/endocarditis", "itis"]] },
            { mod: "Diseases of the Cardiovascular System II", title: "Heart Failure & Arrhythmias", file: "Exam 2/Lecture Guides/Mod 6 - Heart Failure & Arrhythmias Lecture Guide.pdf", web: "mod-6-heart-failure-and-arrhythmias.pdf", topics: [["Heart failure", "hf"], ["Dysrhythmias", "rhythm"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Structure & Function of the Renal System & Urinary Tract", file: "Exam 2/Lecture Guides/Mod 7 -Structure & Function of the Renal System & Urinary Tract Lecture Guide.pdf", web: "mod-7-structure-and-function-of-the-renal-system-and-urinary-tract.pdf", topics: [["Fluid & electrolytes", "fluid"], ["AKI", "aki"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Renal System", file: "Exam 2/Lecture Guides/Mod 7 - Diseases of the Renal System Lecture Guide.pdf", web: "mod-7-diseases-of-the-renal-system.pdf", topics: [["AKI", "aki"], ["CKD", "ckd"], ["Glomerulonephritis", "gn"], ["Nephrotic syndrome", "nephrotic"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Urinary Tract", file: "Exam 2/Lecture Guides/Mod 7 - Diseases of the Urinary Tract Lecture Guide.pdf", web: "mod-7-diseases-of-the-urinary-tract.pdf", topics: [["Cystitis", "cystitis"], ["Pyelonephritis", "pyelo"], ["Renal calculi", "stones"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Male Reproductive System", file: "Exam 2/Lecture Guides/Mod 7 - Diseases of the Male Reproductive System Lecture Guide.pdf", web: "mod-7-diseases-of-the-male-reproductive-system.pdf", topics: [["BPH", "bph"], ["Prostatitis", "prostatitis"]] },
            { mod: "Final · Diseases of the GI System", title: "Diseases of the Upper GI System", file: "Final/Lecture Guide/Diseases of the Upper GI System Lecture Guide.pdf", web: "final-diseases-of-the-upper-gi-system.pdf", topics: [["GERD", "gerd"], ["PUD", "pud"], ["Upper GI bleed", "ugib"]] },
            { mod: "Final · Diseases of the GI System", title: "Diseases of the Lower GI System", file: "Final/Lecture Guide/Diseases of the Lower GI System Lecture Guide.pdf", web: "final-diseases-of-the-lower-gi-system.pdf", topics: [["C. diff", "cdiff"], ["Appendicitis", "appendicitis"], ["Crohn's vs. UC", "uc"]] },
            { mod: "Final · Diseases of the GI System", title: "Diseases of the Liver & Gallbladder", file: "Final/Lecture Guide/Diseases of the Liver and Gallbladder Lecture Guide.pdf", web: "final-diseases-of-the-liver-and-gallbladder.pdf", topics: [["Gallstones", "gallstones"], ["Cirrhosis", "cirrhosis"], ["Hepatitis", "hepc"]] },
            { mod: "Final · Diseases of the Endocrine System", title: "Diseases of the Pancreas", file: "Final/Lecture Guide/Diseases of the Pancreas Lecture Guide.pdf", web: "final-diseases-of-the-pancreas.pdf", topics: [["Type 1 DM", "t1dm"], ["DKA vs. HHS", "dkahhs"], ["Pancreatitis", "pancreatitis"]] },
            { mod: "Final · Diseases of the Endocrine System", title: "Diseases of the Thyroid Gland", file: "Final/Lecture Guide/Diseases of the Thyroid Gland Lecture Guide.pdf", web: "final-diseases-of-the-thyroid-gland.pdf", topics: [["Hypothyroidism", "hypothyroid"], ["Hyperthyroidism", "hyperthyroid"], ["Goiter", "goiter"]] },
            { mod: "Final · Diseases of the Endocrine System", title: "Diseases of the Pituitary & Adrenal Glands", file: "Final/Lecture Guide/Diseases of the Pituitary and Adrenal Glands Lecture Guide.pdf", web: "final-diseases-of-the-pituitary-and-adrenal-glands.pdf", topics: [["Cushing", "cushing"], ["Addison's", "addison"], ["Hyperaldosteronism", "aldo"]] },
            { mod: "Final · Diseases of the Hematologic System", title: "Diseases of Red Blood Cells", file: "Final/Lecture Guide/Diseases of Red Blood Cells Lecture Guide.pdf", web: "final-diseases-of-red-blood-cells.pdf", topics: [["Iron deficiency", "ida"], ["B12 vs. folate", "b12"], ["Hemolytic anemia", "hemolytic"]] },
            { mod: "Final · Diseases of the Hematologic System", title: "Sickle Cell Anemia", file: "Final/Lecture Guide/Sickle Cell Anemia Lecture Guide.pdf", web: "final-sickle-cell-anemia.pdf", topics: [["Sickle cell disease", "scd"], ["Pain crisis", "voe"], ["Acute chest", "acs"]] },
            { mod: "Final · Diseases of the Hematologic System", title: "Diseases of Platelets", file: "Final/Lecture Guide/Diseases of Platelets Lecture Guide.pdf", web: "final-diseases-of-platelets.pdf", topics: [["Thrombocytopenia", "tcp"], ["Essential thrombocythemia", "et"], ["Acquired platelet disorders", "apfd"]] },
            { mod: "Final · Diseases of the Hematologic System", title: "Diseases of White Blood Cells", file: "Final/Lecture Guide/Diseases of White Blood Cells Lecture Guide.pdf", web: "final-diseases-of-white-blood-cells.pdf", topics: [["Leukemias", "leuk"], ["Lymphomas", "hodgkin"], ["MDS", "mds"]] },
            { mod: "Final · Diseases of the Hematologic System", title: "Introduction to Neoplasia & Cancer", file: "Final/Lecture Guide/Introduction to Neoplasia and Cancer Lecture Guide.pdf", web: "final-introduction-to-neoplasia-and-cancer.pdf", topics: [["Benign vs. malignant", "neo"], ["Spread", "spread"], ["Grade & stage", "grade"]] }
          ],
          exams: [
            { name: "Exam 1", status: "planned" },
            {
              name: "Exam 2", status: "ready",
              path: "nura340/exam2/index.html",
              localPath: "../Sem 1/Patho/Exam 2/Patho Exam 2 Study Lab/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Respiratory, vascular, cardiac, kidney, urinary & reproductive disorders.",
              topics: ["Respiratory", "Cardiac 1", "Cardiac 2", "Kidney", "GU & Repro"],
              stats: "6 section overviews · 28 topics · 33 diagrams · 55 MC & SATA questions · 210 flashcards"
            },
            {
              name: "Final Exam", status: "ready",
              path: "nura340/final/index.html",
              bank: ["js/data.js", "js/data-endo.js", "js/data-heme.js", "js/practice.js", "js/practice-endo.js", "js/practice-heme.js", "js/practice-deep.js"],
              blurb: "GI, endocrine, and hematology & neoplasia from the eleven Final lecture guides, plus the instructor's Final study guide with every question answered in depth. Questions use the guide's formats (MC, SATA, select N, drop-down rationale, cloze) and include an exam-depth set.",
              topics: ["Exam Guide", "GI", "Endocrine", "Anemias & Sickle Cell", "Platelets", "Leukemia & Lymphoma", "Neoplasia"],
              stats: "Instructor exam guide answered · 12 section overviews · 72 topics · 316 questions (41 exam-depth) · 263 flashcards"
            }
          ]
        },
        {
          id: "nura350", code: "NURA 350", name: "Pharmacology", icon: "💊", color: "#a43f87",
          lectureFolder: "../Sem 1/Pharm/",
          lectureWebFolder: "nura350/lecture-guides/",
          lectureExam: "Exam 2",
          lectureGuides: [
            { mod: "Exam 2 · Cardiac, Renal & GU", title: "Cardiovascular System, Part 1", file: "Exam 2/Lecture Guide/Pharm for the Cardiovascular System Pt 1 Lecture Guide.pdf", web: "exam2-cardiovascular-system-pt-1.pdf", topics: [] },
            { mod: "Exam 2 · Cardiac, Renal & GU", title: "Cardiovascular System, Part 2", file: "Exam 2/Lecture Guide/Pharm for the Cardiovascular System Pt 2 Lecture Guide.pdf", web: "exam2-cardiovascular-system-pt-2.pdf", topics: [] },
            { mod: "Exam 2 · Cardiac, Renal & GU", title: "Renal System", file: "Exam 2/Lecture Guide/Pharm for the Renal System Lecture Guide.pdf", web: "exam2-renal-system.pdf", topics: [] },
            { mod: "Exam 2 · Cardiac, Renal & GU", title: "Genitourinary & Reproductive Systems", file: "Exam 2/Lecture Guide/Pharm for the Genitourinary and Reproductive Systems Lecture Guide.pdf", web: "exam2-genitourinary-and-reproductive-systems.pdf", topics: [] },
            { mod: "Final · Endocrine", title: "Diabetes Mellitus", file: "Final/Lecture Guides/Pharm for Diabetes Mellitus Lecture Guide.pdf", web: "final-diabetes-mellitus.pdf", topics: [] },
            { mod: "Final · Endocrine", title: "Thyroid Disorders", file: "Final/Lecture Guides/Pharm for Thyroid Disorders Lecture Guide.pdf", web: "final-thyroid-disorders.pdf", topics: [] },
            { mod: "Final · Neurological", title: "Neurological System, Part 1 (anticonvulsants & duloxetine)", file: "Final/Lecture Guides/Pharm for the Neurological System Pt 1 Lecture Guide.pdf", web: "final-neurological-system-pt-1.pdf", topics: [] },
            { mod: "Final · Neurological", title: "Neurological System, Part 2 (Parkinson's, sedatives & muscle relaxants)", file: "Final/Lecture Guides/Pharm for the Neurological System Pt 2 Lecture Guide.pdf", web: "final-neurological-system-pt-2.pdf", topics: [] },
            { mod: "Final · Chemotherapy", title: "Chemotherapy & Growth Factors", file: "Final/Lecture Guides/Pharm for Chemotherapy Lecture Guide.pdf", web: "final-chemotherapy.pdf", topics: [] }
          ],
          exams: [
            {
              name: "Exam 2", status: "ready",
              path: "nura350/exam2/index.html",
              bank: ["js/drugs.js", "js/practice.js", "js/practice-added.js", "js/practice-more.js", "js/practice-hard.js"],
              blurb: "Your instructor's Exam 2 takeaways in exam order, plus every drug from the combined drug tables: cardiac, renal & GU, reproductive, and GI.",
              topics: ["Study Guide", "Cardiac 1", "Cardiac 2", "Renal/GU", "GI"],
              stats: "11-section study guide · 44 drugs · 201 MC & SATA questions · 289 flashcards"
            }
          ]
        },
        {
          id: "dosage", code: "", name: "Dosage Calc", icon: "🧮", color: "#c27a17",
          exams: [
            {
              name: "Med Math & IV Rates", status: "ready",
              path: "dosage/calc/index.html",
              blurb: "Learn dimensional analysis, then practice medication math and IV flow rates with typed answers and step-by-step solutions. Only the ATI conversion chart is given, like the exam.",
              topics: ["Med math", "IV flow rates", "ATI chart"],
              stats: "11 lessons · 200 problems (100 med math, 100 IV) · easy to hard"
            }
          ]
        },
        {
          id: "nutrition", code: "", name: "Nutrition", icon: "🥗", color: "#4b5fc9",
          exams: [
            {
              name: "Nutrition Exam", status: "ready",
              path: "nutrition/exam/index.html",
              bank: ["js/data.js", "js/practice.js", "js/ati.js", "js/practice-ati.js"],
              blurb: "For the 70-question ATI Nutrition CMS: an ATI exam plan and 70-question practice test, plus the nine Key Concepts (vital sign, healing, breathing, heart, kidney, GI, lifespan and diabetes, anemia and cancer, tube feeding and TPN) and ATI topics like religious diets, supplements, and liver disease. Every question rated by difficulty.",
              topics: ["ATI CMS plan", "Foundations", "Assessment", "Heart & Kidney", "GI & Liver", "Lifespan & DM", "Tube feeds & TPN"],
              stats: "ATI CMS page · 40 topics · 227 questions (105 ATI-style) · 196 flashcards · 70-question practice test"
            }
          ]
        }
      ]
    },
    { id: "sem2", name: "Semester 2", note: "", courses: [] },
    { id: "sem3", name: "Semester 3", note: "", courses: [] },
    { id: "sem4", name: "Semester 4", note: "", courses: [] }
  ]
};
