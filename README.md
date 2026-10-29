# ABSN Study Hub

Interactive study guides for the 16-month PLU Accelerated BSN program. Pick a course, then an exam.

- `index.html` – program homepage (semesters → courses → exams)
- `js/program.js` – the list of semesters, courses, and exams. Edit this to add new ones.
- `<course>/<exam>/` – one self-contained study guide per exam (e.g. `nura340/exam2/`)

Everything is plain HTML/CSS/JS, so it also works offline by opening `index.html`.

## Question bank format

Each exam guide's practice questions live in `window.QUESTIONS` (listed under `bank:` in `js/program.js` so they also join NCLEX Prep). Every question needs:

- `type`: `"mc"` (one best answer, `answer` is an index) or `"sata"` (select all that apply, `answer` is a list of indexes). Patho exams use only these two.
- `diff`: `"easy"` (recall a fact), `"medium"` (apply it to a client), or `"hard"` (multi-step or technical reasoning).
- `why`: a rationale that explains the correct answer, and why tempting distractors are wrong.
- `sys`, `stem`, `options` as before.
