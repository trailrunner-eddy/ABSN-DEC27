#!/usr/bin/env node
/* Checks every question bank for lab results that are missing their normal range.
   Run from the site folder:  node tools/check-labs.js
   Ranges come from js/labs.js. Exits with code 1 if anything needs fixing. */
"use strict";
var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.join(__dirname, "..");
var LABS = require(path.join(ROOT, "js/labs.js"));

/* Which files to read: every "bank" in js/program.js, plus Dosage Calc. */
function load(file, extra) {
  var w = extra || {}; w.window = w;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), "utf8"), w, { filename: file });
  return w;
}
var files = [];
load("js/program.js").PROGRAM.semesters.forEach(function (sem) {
  sem.courses.forEach(function (c) {
    (c.exams || []).forEach(function (ex) {
      if (!ex.bank || !ex.path) return;
      var dir = path.dirname(ex.path);
      ex.bank.forEach(function (b) { files.push(path.join(dir, b)); });
    });
  });
});
["dosage/calc/js/problems.js"].forEach(function (f) { if (fs.existsSync(path.join(ROOT, f)) && files.indexOf(f) < 0) files.push(f); });

/* Question-style content only (flashcards and study pages state ranges, not results). */
var KEYS = ["QUESTIONS", "TRIAGE", "FINDINGS", "SORTS", "CHAINS", "DOSAGE", "LESSON_EX"];

var NUM = "(\\d[\\d,]*(?:\\.\\d+)?)(?![\\d,.]*\\d)(?!\\s*[–-]\\s*\\d)(?!\\s*(?:mEq|mg|mcg|g|units?|mL|tablets?|hr|hours?|min|minutes?|days?|weeks?)\\b(?!\\/(?:L|dL|mm)))";
var GAP = "(?:\\s+level)?(?:\\s+(?:that|now))?(?:\\s*(?:of|is|was|=|:)|\\s+(?:has\\s+)?(?:dropped|fell|rose|risen|increased|decreased|climbed)\\s+to|\\s+(?:count\\s+)?(?:that\\s+)?(?:has\\s+)?(?:rose|risen|rising|went|dropped|fell)\\s+from|\\s+from)?\\s*";
function compile(names) {
  var out = [];
  names.forEach(function (name) {
    var cs = /[A-Z]/.test(name); // abbreviations (pH, PT, INR) match exact case
    var alt = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out.push(new RegExp("(?<![A-Za-z])" + alt + "(?![A-Za-z])" + GAP + NUM, cs ? "g" : "gi"));
  });
  return out;
}
LABS.forEach(function (l) { l.res = compile(l.names); });
var UNIT = new RegExp("(?<![\\d.,–-])" + NUM.replace("(?!\\s*(?:mEq", "(?!\\s*(?:NOPE") + "\\s*(?:mEq\\/L|mg\\/dL|g\\/dL|\\/mm³|ng\\/mL|pg\\/mL|mmol\\/L|mcg\\/dL)", "g");
var THRESH = /(?:[<>≤≥↑↓]|below|above|under|over|than|at least|up to|limit\w*|restrict\w*|goal|target)\s*$/i;

var problems = 0, checked = 0;
function report(where, text, msg) { problems++; console.log("✗ " + where + "\n    " + msg + "\n    " + text.slice(0, 220) + "\n"); }
function scan(text, where) {
  var seen = {};
  LABS.forEach(function (l) {
    l.res.forEach(function (re) {
      re.lastIndex = 0; var m;
      while ((m = re.exec(text))) {
        var start = m.index + m[0].length - m[1].length;
        if (THRESH.test(text.slice(Math.max(0, start - 14), start))) continue;
        seen[start] = true; checked++;
        var after = text.slice(start, start + 70);
        var n = after.indexOf("(normal");
        if (n >= 0 && /[,;]\s|\.\s|\s(?:and|with|but)\s/.test(after.slice(0, n))) n = -1; // that range belongs to a later value
        if (n < 0) report(where, text, l.lab + " " + m[1] + ": add (normal " + l.normal + ")");
        else if (after.indexOf("(normal " + l.normal, n) !== n) report(where, text, l.lab + " " + m[1] + ": range should read (normal " + l.normal + ")");
      }
    });
  });
  UNIT.lastIndex = 0; var u;
  while ((u = UNIT.exec(text))) {
    if (seen[u.index]) continue;
    if (THRESH.test(text.slice(Math.max(0, u.index - 14), u.index))) continue;
    if (Object.keys(seen).some(function (s) { s = +s; return s < u.index && u.index - s < 40 && text.slice(s, u.index).indexOf("(normal") < 0; })) continue; // "from 1.0 to 1.4 mg/dL"
    checked++;
    var ua = text.slice(u.index, u.index + 60), un = ua.indexOf("(normal");
    if (un < 0 || /[,;]\s|\.\s|\s(?:and|with|but)\s/.test(ua.slice(0, un))) report(where, text, u[0] + ": lab result with no (normal …) range");
  }
}
function walk(v, where) {
  if (typeof v === "string") scan(v, where);
  else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { walk(v[k], where + "." + k); });
}
files.forEach(function (f) {
  var w;
  try { w = load(f); } catch (e) { console.log("! could not read " + f + ": " + e.message); problems++; return; }
  KEYS.forEach(function (k) { if (w[k]) walk(w[k], f + " " + k); });
});
console.log(problems ? problems + " lab result(s) need a normal range." : "All " + checked + " lab results in " + files.length + " bank files show a normal range.");
process.exit(problems ? 1 : 0);
