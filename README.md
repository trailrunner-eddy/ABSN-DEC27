# ABSN Study Hub

Interactive study guides for the 16-month PLU Accelerated BSN program. Pick a course, then an exam.

- `index.html` – program homepage (semesters → courses → exams)
- `js/program.js` – the list of semesters, courses, and exams. Edit this to add new ones.
- `<course>/<exam>/` – one self-contained study guide per exam (e.g. `nura340/exam2/`)

Everything is plain HTML/CSS/JS, so it also works offline by opening `index.html`.

## Question bank format

Each exam guide's practice questions live in `window.QUESTIONS` (listed under `bank:` in `js/program.js` so they also join NCLEX Prep). Every question needs:

- `type`: `"mc"` (one best answer, `answer` is an index) or `"sata"` (select all that apply, `answer` is a list of indexes). Every current exam (Health Assessment, Patho, Pharm) uses only these two, per the instructors' study guides. If a guide doesn't name its formats, default to NCLEX-style items.
- `diff`: `"easy"` (recall a fact), `"medium"` (apply it to a client), or `"hard"` (multi-step or technical reasoning).
- `why`: a rationale that explains the correct answer, and why tempting distractors are wrong.
- `sys`, `stem`, `options` as before.
- `guide: true` (Pharm) marks questions from the instructor-based study guide, shown in the guide's "Study guide set".

In every practice set, ← Previous reopens questions you already answered with your picks, the correct answer, and the rationale, so you can review mid-set without finishing it. NCLEX Prep allows this in Tutor mode; Exam mode stays forward-only like the real NCLEX.

## Name decoder (Pharm)

`nura350/exam2/js/stems.js` lists drug-name stems (like `-olol` = beta blocker) with the exam drugs that match each one, plus `NO_STEM` for exam drugs whose names don't follow a stem. It powers the Study Guide's "Name decoder" page, the stem pill on each guide drug, and the Name Game's suffix mode. For a new pharm exam, copy the file and point `drugs` at that exam's drug ids.
