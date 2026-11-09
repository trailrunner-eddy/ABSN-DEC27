# ABSN Study Hub

Interactive study guides for the 16-month PLU Accelerated BSN program. Pick a course, then an exam.

- `index.html` – program homepage (semesters → courses → exams)
- `js/program.js` – the list of semesters, courses, and exams. Edit this to add new ones.
- `<course>/<exam>/` – one self-contained study guide per exam (e.g. `nura340/exam2/`)

Everything is plain HTML/CSS/JS, so it also works offline by opening `index.html`.

## Question bank format

Each exam guide's practice questions live in `window.QUESTIONS` (listed under `bank:` in `js/program.js` so they also join NCLEX Prep). Every question needs:

- `type`: `"mc"` (one best answer, `answer` is an index) or `"sata"` (select all that apply, `answer` is a list of indexes). Health Assessment, Patho, and Pharm use only these two, per the instructors' study guides. If a guide doesn't name its formats, default to NCLEX-style items: Nutrition (`nutrition/exam/`) and Patho Final (`nura340/final/`, GI unit) have no instructor exam guide yet, so they add a few Next Gen formats (`selectn`, `matrix`, `cloze`). When the Patho Final study guide is published, recheck its formats and blueprint.
- `diff`: `"easy"` (recall a fact), `"medium"` (apply it to a client), or `"hard"` (multi-step or technical reasoning).
- `why`: a rationale that explains the correct answer, and why tempting distractors are wrong.
- `sys`, `stem`, `options` as before.
- `guide: true` (Pharm) marks questions from the instructor-based study guide, shown in the guide's "Study guide set".
- Pharm Exam 2 extra banks load after `practice.js` so saved progress keeps its place: `practice-added.js` (`added: true`, drugs the instructor guide skipped) and `practice-more.js` (`more: true`, 50 more questions from the instructor's Exam 2 Takeaways, the quiz's "New 50" set), then `practice-hard.js` (`hard50: true`, 50 hard questions built on the Pharm Exam 2 Study Guide, the quiz's "Hard 50" set). Add new questions in a new file at the end, not in the middle.

- Lab results show their normal range right after the value, the way the NCLEX does: `K⁺ 6.4 mEq/L (normal 3.5–5.0)`. This applies to stems, options, rationales, triage cards, and findings cards. Use the wording from `js/labs.js` (the site's one list of reference ranges, NCLEX/ATI values plus course-taught ones), and run `node tools/check-labs.js` after adding questions: it lists any lab result missing its range or using a different one. Thresholds and criteria (`glucose <70`) don't need a range. Every page also loads `js/labs.js`, which keeps each range on one line on phones; new pages need `<script src="…/js/labs.js"></script>` after `glossary.js`.

In every practice set, ← Previous reopens questions you already answered with your picks, the correct answer, and the rationale, so you can review mid-set without finishing it. NCLEX Prep allows this in Tutor mode; Exam mode stays forward-only like the real NCLEX.

## Name decoder (Pharm)

`nura350/exam2/js/stems.js` lists drug-name stems (like `-olol` = beta blocker) with the exam drugs that match each one, plus `NO_STEM` for exam drugs whose names don't follow a stem. It powers the Study Guide's "Name decoder" page, the stem pill on each guide drug, and the Name Game's suffix mode. For a new pharm exam, copy the file and point `drugs` at that exam's drug ids.

## Medical term definitions (whole site)

`js/glossary.js` is loaded on every page. It finds medical terms in the page text (like *myopathy*, *orthopnea*, *BPH*), underlines the first mention in each paragraph or box with a dotted line, and shows a short definition on hover (computer) or tap (phone). Answer choices, buttons, links, and flashcards are left alone so a definition never gives away an answer. To add a term, add a `["term|other spelling", "Definition."]` line to `GLOSSARY` in that file; plurals match automatically, and names in ALL CAPS only match in capitals. New pages need `<script src="…/js/glossary.js"></script>` after their other scripts.

## Flashcards

Each guide's flashcards cover its exam study guide topic by topic (the instructor's guide where there is one: Health Assessment Exams 1–2, Patho Exam 2, Pharm Exam 2; the Nutrition study guide for Nutrition). Patho Final has no instructor guide yet, so its deck stays on the lecture guides. Saved "known" marks are stored by card position, so add new cards at the end of `window.FLASHCARDS` rather than in the middle. Pharm Exam 2 builds its deck in `js/app.js`: one card per study-guide takeaway (tagged "📋 Study guide"), one per name ending in `stems.js`, plus class/use, brand, and key-point cards for every drug.
