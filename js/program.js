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
          id: "nura340", code: "NURA 340", name: "Pathophysiology", icon: "🫀", color: "#c8463d",
          lectureFolder: "../Sem 1/Patho/Exam 2/Lecture Guides/",
          lectureWebFolder: "nura340/lecture-guides/",
          lectureExam: "Exam 2",
          lectureGuides: [
            { mod: "Mod 3", title: "Respiratory System Structure & Function", file: "Mod 3 - Respiratory System Structure and Function Lecture Guide.pdf", web: "mod-3-respiratory-system-structure-and-function.pdf", topics: [["Acid-base", "acidbase"], ["Pneumonia", "pneumonia"]] },
            { mod: "Mod 3", title: "Upper Respiratory Diseases", file: "Mod 3 - Upper Respiratory Diseases Lecture Guide.pdf", web: "mod-3-upper-respiratory-diseases.pdf", topics: [["Upper respiratory infections", "uri"]] },
            { mod: "Mod 3", title: "Lower Respiratory Diseases", file: "Mod 3 - Lower Respiratory Diseases Lecture Guide.pdf", web: "mod-3-lower-respiratory-diseases.pdf", topics: [["Pneumonia", "pneumonia"], ["TB", "tb"], ["Asthma", "asthma"], ["COPD", "copd"], ["Lung injuries", "trauma"]] },
            { mod: "Mod 5", title: "Structure & Function of the Cardiovascular System", file: "Mod 5 - Structure and Function of the Cardiovascular System Lecture Guide.pdf", web: "mod-5-structure-and-function-of-the-cardiovascular-system.pdf", topics: [["Hypertension", "htn"], ["Fluid & electrolytes", "fluid"]] },
            { mod: "Mod 5", title: "Diseases of the Arterial System", file: "Mod 5 - Diseases of the Arterial System Lecture Guide.pdf", web: "mod-5-diseases-of-the-arterial-system.pdf", topics: [["Hypertension", "htn"], ["Atherosclerosis", "athero"], ["PAD & emboli", "pad"], ["Aneurysms", "aneurysm"]] },
            { mod: "Mod 5", title: "Diseases of the Venous System", file: "Mod 5 - Diseases of the Venous System Lecture Guide.pdf", web: "mod-5-diseases-of-the-venous-system.pdf", topics: [["CVI, DVT & PE", "venous"]] },
            { mod: "Mod 6", title: "Cardiac Valves & Ischemic Heart Disease", file: "Mod 6 - Cardiac Valves & Ischemic Heart Disease Lecture Guide.pdf", web: "mod-6-cardiac-valves-and-ischemic-heart-disease.pdf", topics: [["Valves", "valves"], ["Angina & MI", "acs"], ["Peri/myo/endocarditis", "itis"]] },
            { mod: "Mod 6", title: "Heart Failure & Arrhythmias", file: "Mod 6 - Heart Failure & Arrhythmias Lecture Guide.pdf", web: "mod-6-heart-failure-and-arrhythmias.pdf", topics: [["Heart failure", "hf"], ["Dysrhythmias", "rhythm"]] },
            { mod: "Mod 7", title: "Structure & Function of the Renal System & Urinary Tract", file: "Mod 7 -Structure & Function of the Renal System & Urinary Tract Lecture Guide.pdf", web: "mod-7-structure-and-function-of-the-renal-system-and-urinary-tract.pdf", topics: [["Fluid & electrolytes", "fluid"], ["AKI", "aki"]] },
            { mod: "Mod 7", title: "Diseases of the Renal System", file: "Mod 7 - Diseases of the Renal System Lecture Guide.pdf", web: "mod-7-diseases-of-the-renal-system.pdf", topics: [["AKI", "aki"], ["CKD", "ckd"], ["Glomerulonephritis", "gn"], ["Nephrotic syndrome", "nephrotic"]] },
            { mod: "Mod 7", title: "Diseases of the Urinary Tract", file: "Mod 7 - Diseases of the Urinary Tract Lecture Guide.pdf", web: "mod-7-diseases-of-the-urinary-tract.pdf", topics: [["Cystitis", "cystitis"], ["Pyelonephritis", "pyelo"], ["Renal calculi", "stones"]] },
            { mod: "Mod 7", title: "Diseases of the Male Reproductive System", file: "Mod 7 - Diseases of the Male Reproductive System Lecture Guide.pdf", web: "mod-7-diseases-of-the-male-reproductive-system.pdf", topics: [["BPH", "bph"], ["Prostatitis", "prostatitis"]] }
          ],
          exams: [
            { name: "Exam 1", status: "planned" },
            {
              name: "Exam 2", status: "ready",
              path: "nura340/exam2/index.html",
              localPath: "../Sem 1/Patho/Exam 2/Patho Exam 2 Study Lab/index.html",
              blurb: "Respiratory, vascular, cardiac, kidney, urinary & reproductive disorders.",
              topics: ["Respiratory", "Cardiac 1", "Cardiac 2", "Kidney", "GU & Repro"],
              stats: "28 topics · 55 questions · 100 flashcards · 4 games"
            },
            { name: "Final Exam", status: "planned" }
          ]
        },
        {
          id: "nura330", code: "NURA 330", name: "Health Assessment", icon: "🩺", color: "#12898f",
          exams: [ { name: "Exam 1", status: "planned" } ]
        }
      ]
    },
    { id: "sem2", name: "Semester 2", note: "", courses: [] },
    { id: "sem3", name: "Semester 3", note: "", courses: [] },
    { id: "sem4", name: "Semester 4", note: "", courses: [] }
  ]
};
