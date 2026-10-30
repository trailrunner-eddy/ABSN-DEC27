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
          lectureExam: "Exam 2",
          lectureGuides: [
            { mod: "Exam 1 · Mods 1–3", title: "Mod 1 · Intro to Health Assessment", file: "Exam 1/Lecture Guides/Mod 1 - Intro to Health Assessment Lecture Guide.pdf", web: "mod-1-intro-to-health-assessment.pdf", topics: [["Subjective vs. objective", "data"], ["Techniques", "inspect"]] },
            { mod: "Exam 1 · Mods 1–3", title: "Mod 2 · General Survey & Health History", file: "Exam 1/Lecture Guides/Mod 2 - General Survey & Health History Lecture Guide.pdf", web: "mod-2-general-survey-and-health-history.pdf", topics: [["General survey", "gs"], ["OLDCARTS", "hpi"]] },
            { mod: "Exam 1 · Mods 1–3", title: "Mod 3 · Respiratory Assessment", file: "Exam 1/Lecture Guides/Mod 3 - Respiratory Assessment Lecture Guide.pdf", web: "mod-3-respiratory-assessment.pdf", topics: [["Breath sounds", "advbs"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 4 · Integumentary & Lymphatic Systems", file: "Exam 2/Lecture Guides/Mod 4 - Integumentary and Lymphatic Systems Lecture Guide.pdf", web: "mod-4-integumentary-and-lymphatic-systems.pdf", topics: [["Pressure injuries", "pi"], ["Braden", "braden"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 5 · Cardiovascular Assessment", file: "Exam 2/Lecture Guides/Mod 5 - Cardiovascular Assessment Lecture Guide.pdf", web: "mod-5-cardiovascular-assessment.pdf", topics: [["Heart sounds", "heartsounds"], ["Pulses", "pulses"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 6 · HEENT", file: "Exam 2/Lecture Guides/Mod 6 - HEENT Lecture Guide.pdf", web: "mod-6-heent.pdf", topics: [["Cranial nerves", "cn"]] },
            { mod: "Exam 2 · Mods 4–7", title: "Mod 7 · GU & Rectal Assessment", file: "Exam 2/Lecture Guides/Mod 7 - GU and Rectal Assessment Lecture Guide.pdf", web: "mod-7-gu-and-rectal-assessment.pdf", topics: [["Bladder scan & PVR", "retention"], ["Urine output", "urine"]] }
          ],
          exams: [
            {
              name: "Exam 1", status: "ready",
              path: "nura330/exam1/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Intro to health assessment, general survey & health history, respiratory assessment. Exam 1 is done; use it to review for the final.",
              topics: ["Intro", "Survey & Hx", "Respiratory"],
              stats: "3 section overviews · 26 topics · 10 diagrams · 70 questions · 93 flashcards"
            },
            {
              name: "Exam 2", status: "ready",
              path: "nura330/exam2/index.html",
              bank: ["js/data.js", "js/practice.js"],
              blurb: "Lifespan, skin & lymph, cardiovascular, HEENT, and rectal & genitourinary. Questions are MC and SATA like the exam, each rated by difficulty.",
              topics: ["Skin & Lymph", "Cardiovascular", "HEENT", "GU & Rectal"],
              stats: "4 section overviews · 38 topics · 20 diagrams · 96 questions · 146 flashcards"
            },
            { name: "Final Exam", status: "planned" }
          ]
        },
        {
          id: "nura340", code: "NURA 340", name: "Pathology", icon: "🫀", color: "#c8463d",
          lectureFolder: "../Sem 1/Patho/Exam 2/Lecture Guides/",
          lectureWebFolder: "nura340/lecture-guides/",
          lectureExam: "Exam 2",
          lectureGuides: [
            { mod: "Diseases of the Respiratory System", title: "Respiratory System Structure & Function", file: "Mod 3 - Respiratory System Structure and Function Lecture Guide.pdf", web: "mod-3-respiratory-system-structure-and-function.pdf", topics: [["Acid-base", "acidbase"], ["Pneumonia", "pneumonia"]] },
            { mod: "Diseases of the Respiratory System", title: "Upper Respiratory Diseases", file: "Mod 3 - Upper Respiratory Diseases Lecture Guide.pdf", web: "mod-3-upper-respiratory-diseases.pdf", topics: [["Upper respiratory infections", "uri"]] },
            { mod: "Diseases of the Respiratory System", title: "Lower Respiratory Diseases", file: "Mod 3 - Lower Respiratory Diseases Lecture Guide.pdf", web: "mod-3-lower-respiratory-diseases.pdf", topics: [["Pneumonia", "pneumonia"], ["TB", "tb"], ["Asthma", "asthma"], ["COPD", "copd"], ["Lung injuries", "trauma"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Structure & Function of the Cardiovascular System", file: "Mod 5 - Structure and Function of the Cardiovascular System Lecture Guide.pdf", web: "mod-5-structure-and-function-of-the-cardiovascular-system.pdf", topics: [["Hypertension", "htn"], ["Fluid & electrolytes", "fluid"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Diseases of the Arterial System", file: "Mod 5 - Diseases of the Arterial System Lecture Guide.pdf", web: "mod-5-diseases-of-the-arterial-system.pdf", topics: [["Hypertension", "htn"], ["Atherosclerosis", "athero"], ["PAD & emboli", "pad"], ["Aneurysms", "aneurysm"]] },
            { mod: "Diseases of the Cardiovascular System I", title: "Diseases of the Venous System", file: "Mod 5 - Diseases of the Venous System Lecture Guide.pdf", web: "mod-5-diseases-of-the-venous-system.pdf", topics: [["CVI, DVT & PE", "venous"]] },
            { mod: "Diseases of the Cardiovascular System II", title: "Cardiac Valves & Ischemic Heart Disease", file: "Mod 6 - Cardiac Valves & Ischemic Heart Disease Lecture Guide.pdf", web: "mod-6-cardiac-valves-and-ischemic-heart-disease.pdf", topics: [["Valves", "valves"], ["Angina & MI", "acs"], ["Peri/myo/endocarditis", "itis"]] },
            { mod: "Diseases of the Cardiovascular System II", title: "Heart Failure & Arrhythmias", file: "Mod 6 - Heart Failure & Arrhythmias Lecture Guide.pdf", web: "mod-6-heart-failure-and-arrhythmias.pdf", topics: [["Heart failure", "hf"], ["Dysrhythmias", "rhythm"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Structure & Function of the Renal System & Urinary Tract", file: "Mod 7 -Structure & Function of the Renal System & Urinary Tract Lecture Guide.pdf", web: "mod-7-structure-and-function-of-the-renal-system-and-urinary-tract.pdf", topics: [["Fluid & electrolytes", "fluid"], ["AKI", "aki"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Renal System", file: "Mod 7 - Diseases of the Renal System Lecture Guide.pdf", web: "mod-7-diseases-of-the-renal-system.pdf", topics: [["AKI", "aki"], ["CKD", "ckd"], ["Glomerulonephritis", "gn"], ["Nephrotic syndrome", "nephrotic"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Urinary Tract", file: "Mod 7 - Diseases of the Urinary Tract Lecture Guide.pdf", web: "mod-7-diseases-of-the-urinary-tract.pdf", topics: [["Cystitis", "cystitis"], ["Pyelonephritis", "pyelo"], ["Renal calculi", "stones"]] },
            { mod: "Diseases of the Renal & Genitourinary System", title: "Diseases of the Male Reproductive System", file: "Mod 7 - Diseases of the Male Reproductive System Lecture Guide.pdf", web: "mod-7-diseases-of-the-male-reproductive-system.pdf", topics: [["BPH", "bph"], ["Prostatitis", "prostatitis"]] }
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
              stats: "6 section overviews · 28 topics · 33 diagrams · 55 MC & SATA questions · 100 flashcards"
            },
            { name: "Final Exam", status: "planned" }
          ]
        },
        {
          id: "nura350", code: "NURA 350", name: "Pharmacology", icon: "💊", color: "#a43f87",
          exams: [
            {
              name: "Exam 2", status: "ready",
              path: "nura350/exam2/index.html",
              bank: ["js/drugs.js", "js/practice.js"],
              blurb: "Your instructor's Exam 2 takeaways in exam order, plus every drug from the combined drug tables: cardiac, renal & GU, reproductive, and GI.",
              topics: ["Study Guide", "Cardiac 1", "Cardiac 2", "Renal/GU", "GI"],
              stats: "11-section study guide · 44 drugs · 77 MC & SATA questions · 143 flashcards"
            }
          ]
        },
        {
          id: "dosage", code: "", name: "Dosage Calc", icon: "🧮", color: "#c27a17",
          exams: []
        },
        {
          id: "nutrition", code: "", name: "Nutrition", icon: "🥗", color: "#4b5fc9",
          exams: []
        }
      ]
    },
    { id: "sem2", name: "Semester 2", note: "", courses: [] },
    { id: "sem3", name: "Semester 3", note: "", courses: [] },
    { id: "sem4", name: "Semester 4", note: "", courses: [] }
  ]
};
