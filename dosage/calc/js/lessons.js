/* Dosage Calc lessons. Each lesson: id, cat ("start" | "med" | "iv"), icon, title, sub, practice (topic ids),
   and blocks: ["p", html] | ["key", html] | ["formula", html] | ["ex", LESSON_EX id, title] | ["try", LESSON_EX id]
   | ["traps", [html…]] | ["table", [head…], [[cell…]…]]. Worked examples live in problems.js (LESSON_EX) so the
   same checker that verifies the practice bank verifies them too. */
window.LESSONS = [
  {
    id: "rules", cat: "start", icon: "🚦", title: "The exam rules", sub: "Rounding, zeros, and what the exam gives you",
    practice: [],
    blocks: [
      ["p", "Every dosage calc problem on your exam follows the same safety rules from the practice sheets. Learn these first, because a correct calculation written the wrong way can still be marked wrong."],
      ["table", ["Rule", "Do", "Don't"], [
        ["<b>Leading zero</b> before a decimal under 1", "0.5 mL", ".5 mL (can be misread as 5 mL)"],
        ["<b>No trailing zero</b> after a decimal", "2 tablets, 1.5 mL", "2.0 tablets (can be misread as 20)"],
        ["<b>Round to the nearest tenth</b> unless the question says otherwise", "3.125 mL → 3.1 mL", "3 mL or 3.13 mL"],
        ["<b>gtt/min: round to a whole number</b>", "31.25 gtt/min → 31 gtt/min", "31.3 gtt/min (you can't count part of a drop)"],
        ["<b>Round only at the end</b>", "Keep every digit until the final answer", "Rounding the weight or mL/hr, then using the rounded number"]
      ]],
      ["key", "How to round: look at the digit just after the place you're rounding to. 5 or more rounds up, 4 or less stays. 6.25 → 6.3 · 41.67 → 42 · 83.33 → 83.3"],
      ["p", "<b>What the exam gives you:</b> only the ATI household conversion chart (tsp, Tbsp, oz, cups, pints, quarts, lb, kg). <b>What it does not give you:</b> metric conversions (g, mg, mcg, L, mL) and time (minutes, hours). You must know those by heart."],
      ["table", ["Memorize (not given)", "Given on the ATI chart"], [
        ["1 g = 1,000 mg", "1 tsp = 5 mL"],
        ["1 mg = 1,000 mcg", "1 Tbsp = 15 mL"],
        ["1 L = 1,000 mL", "1 oz = 30 mL · 2 Tbsp = 1 oz"],
        ["1 kg = 1,000 g", "1 cup = 240 mL = 8 oz"],
        ["1 hr = 60 min", "1 pint = 480 mL · 1 quart = 960 mL"],
        ["1 unit = 1,000 milliunits", "2.2 lb = 1 kg · 1 lb = 16 oz · 1 oz = 28.35 g"]
      ]],
      ["traps", [
        "Moving the decimal the wrong way. Big unit → small unit (g → mg) makes the number bigger; small → big makes it smaller.",
        "Dividing kg by 2.2 instead of lb. Pounds is always the bigger number.",
        "Reading 4 oz as 0.4 lb. Ounces are sixteenths of a pound: 4 oz = 0.25 lb."
      ]]
    ]
  },
  {
    id: "dims", cat: "start", icon: "🧩", title: "Dimensional analysis", sub: "One method that solves every problem",
    practice: ["tabs", "liquid"],
    blocks: [
      ["p", "Dimensional analysis (the fraction method in your example sheets) works for every problem on the exam. You line up fractions so the units you don't want cancel, and the unit you do want is left over."],
      ["formula", "<ol class='moves'><li><b>Start with what is ordered</b> (the dose, the volume, or the rate).</li><li><b>Multiply by a fraction that cancels the unit</b> you don't want. Put that unit on the bottom.</li><li><b>Keep going</b> until the only unit left is the one the question asks for.</li><li><b>Multiply across the top, divide by the bottom,</b> then round.</li></ol>"],
      ["ex", "dims", "Worked example: two fractions"],
      ["p", "Notice the units crossed out in the chain: g cancels g, mg cancels mg, and <b>tab</b> is left. If the leftover unit isn't what the question asked for, a fraction is upside down."],
      ["key", "Same thing as the formula <b>Desired ÷ Have × Quantity</b>: 500 mg ÷ 250 mg × 1 tab = 2 tab. Use whichever you like, but convert units first either way."],
      ["try", "dims_try"]
    ]
  },
  {
    id: "conv", cat: "med", icon: "⚖️", title: "Conversions & intake", sub: "lb ↔ kg, metric, and household measures",
    practice: ["conv"],
    blocks: [
      ["p", "Every conversion is just a fraction that equals 1. 1,000 mg/1 g is the same amount on top and bottom, so multiplying by it changes the units but not the amount."],
      ["formula", "lb → kg: <b>÷ 2.2</b> &nbsp;·&nbsp; kg → lb: <b>× 2.2</b><br>g → mg, mg → mcg, L → mL: <b>× 1,000</b> (decimal 3 places right)<br>mg → g, mcg → mg, mL → L: <b>÷ 1,000</b> (decimal 3 places left)"],
      ["ex", "conv_lb", "Worked example: pounds to kilograms"],
      ["p", "<b>Intake (I&amp;O) problems</b> list a few household amounts. Convert each one to mL with the ATI chart, then add them up."],
      ["ex", "conv_io", "Worked example: total intake"],
      ["traps", ["Forgetting an item in an intake list. Write every item down before you add.", "Using 1 cup = 250 mL. The ATI chart uses 240 mL."]],
      ["try", "conv_try"]
    ]
  },
  {
    id: "tabs", cat: "med", icon: "💊", title: "Tablets & capsules", sub: "Desired over have, with conversions",
    practice: ["tabs"],
    blocks: [
      ["formula", "<b>Tablets = dose ordered × (1 tab ÷ dose in one tab)</b>"],
      ["p", "If the order and the label use the same unit, it's one fraction. If they don't (mg vs mcg, g vs mg), add a conversion fraction first."],
      ["ex", "tabs", "Worked example: mg order, mcg tablets"],
      ["traps", ["A tablet answer over 3 or a tiny fraction is a red flag. Recheck the units.", "Half tablets only if the tablet is scored. Capsules can't be split.", "\"In 2 divided doses\" means the order is the daily total. Divide it before you find tablets per dose."]],
      ["try", "tabs_try"]
    ]
  },
  {
    id: "liquid", cat: "med", icon: "🥄", title: "Oral liquids & household measures", sub: "mg per 5 mL, tsp, and Tbsp",
    practice: ["liquid"],
    blocks: [
      ["formula", "<b>mL = dose ordered × (volume on label ÷ dose on label)</b>"],
      ["p", "Liquid labels often say mg per 5 mL or per 15 mL. Keep that volume on top of the fraction. If the question asks for tsp or Tbsp, add one more fraction from the ATI chart."],
      ["ex", "liquid", "Worked example: a per-5 mL label"],
      ["traps", ["Dividing 240 by 160 and stopping at 1.5. That's how many 5 mL portions, not mL. Multiply by 5.", "Mixing up tsp (5 mL) and Tbsp (15 mL). Tablespoon is the big spoon."]],
      ["try", "liquid_try"]
    ]
  },
  {
    id: "inj", cat: "med", icon: "💉", title: "Injections", sub: "IM, subcut, and IV push volumes",
    practice: ["inj"],
    blocks: [
      ["p", "Same desired-over-have math. Injection volumes are small, so the leading zero matters most here: write 0.4 mL, never .4 mL."],
      ["ex", "inj", "Worked example: heparin units"],
      ["p", "Some questions add extra numbers (the patient's weight on a dose that isn't weight-based, or the diluent volume used to reconstitute a powder). Use only what the formula needs."],
      ["traps", ["Using the reconstitution diluent volume instead of the final concentration.", "Rounding 0.75 mL to 0.8 when the question asks for the nearest hundredth."]],
      ["try", "inj_try"]
    ]
  },
  {
    id: "weight", cat: "med", icon: "🧒", title: "Weight-based doses", sub: "mg/kg, mg/kg/day, and safe ranges",
    practice: ["weight"],
    blocks: [
      ["formula", "<ol class='moves'><li>Weight to <b>kg</b> (÷ 2.2)</li><li><b>mg/kg × kg</b> = mg</li><li>If it's <b>per day</b>, divide by the number of doses</li><li>Desired over have → <b>mL</b></li></ol>"],
      ["ex", "weight", "Worked example: mg/kg per dose"],
      ["p", "<b>mg/kg/day</b> is the total for the whole day. \"Every 12 hours\" is 2 doses, \"every 8 hours\" is 3, \"every 6 hours\" is 4."],
      ["ex", "weight_div", "Worked example: mg/kg/day, divided"],
      ["p", "<b>Safe dose range:</b> multiply the low and high mg/kg by the weight, then check whether the ordered dose (per dose or per day, matching the range) falls between them. Above the range: hold and call the provider."],
      ["traps", ["Multiplying mg/kg by pounds. Always convert to kg first.", "Forgetting to divide a per-day dose into doses.", "Rounding the weight early. Keep every digit until the last step."]],
      ["try", "weight_try"]
    ]
  },
  {
    id: "pump", cat: "iv", icon: "📟", title: "Pump rates (mL/hr)", sub: "Volume over time",
    practice: ["pump", "pumpmin"],
    blocks: [
      ["formula", "<b>mL/hr = total mL ÷ total hours</b><br>If the time is in minutes: <b>mL ÷ min × 60 min/hr</b>"],
      ["p", "An IV pump is always set in mL/hr, so pump problems never need a drop factor."],
      ["ex", "pump", "Worked example: hours"],
      ["ex", "pump_min", "Worked example: minutes (IV piggyback)"],
      ["traps", ["Forgetting × 60 for minutes. A bag that runs in under an hour has a rate bigger than its volume.", "The drug amount (1 g, 500 mg) in a piggyback order is a distractor for a pump rate.", "Liters on the order: change to mL first (not given)."]],
      ["try", "pump_try"]
    ]
  },
  {
    id: "time", cat: "iv", icon: "⏱️", title: "Infusion time & volume", sub: "How long, and how much is left",
    practice: ["time"],
    blocks: [
      ["formula", "<b>Hours = mL ÷ mL/hr</b> &nbsp;·&nbsp; <b>mL infused = mL/hr × hours</b>"],
      ["ex", "time", "Worked example: how many hours"],
      ["p", "\"How much is left\" questions: find how much has run in (rate × time), then subtract from the bag volume. For minutes, multiply hours by 60."],
      ["traps", ["Dividing the rate by the volume (upside down). Hours should come out as a sensible number like 4 or 8, not 0.125."]],
      ["try", "time_try"]
    ]
  },
  {
    id: "gtt", cat: "iv", icon: "💧", title: "Gravity drips (gtt/min)", sub: "Drop factors and rounding to whole drops",
    practice: ["gtt"],
    blocks: [
      ["formula", "<b>gtt/min = (mL × drop factor) ÷ minutes</b><br>Shortcut from a rate: <b>mL/hr × drop factor ÷ 60</b>"],
      ["p", "The <b>drop factor</b> (gtt/mL) is printed on the tubing package and given in the question. <b>Macrodrip</b> is 10, 15, or 20 gtt/mL. <b>Microdrip</b> is 60 gtt/mL, and with microdrip tubing gtt/min equals mL/hr."],
      ["ex", "gtt", "Worked example: hours"],
      ["ex", "gtt_min", "Worked example: minutes"],
      ["traps", ["Rounding to the tenth. gtt/min is always a whole number.", "Rounding the mL/hr first (125 → then × 15 ÷ 60). Keep it in one chain and round once at the end."]],
      ["try", "gtt_try"]
    ]
  },
  {
    id: "dose", cat: "iv", icon: "🫀", title: "Dose-based infusions", sub: "units/hr, mg/hr, mcg/min, and mcg/kg/min",
    practice: ["dose"],
    blocks: [
      ["p", "When the order is a <b>dose per time</b> (heparin 1,000 units/hr) instead of a volume, use the bag's concentration to turn the dose into mL."],
      ["formula", "<b>mL/hr = dose/hr × (bag mL ÷ drug in bag)</b>"],
      ["ex", "dose", "Worked example: heparin"],
      ["p", "<b>Per minute</b> orders need × 60 min/hr. <b>mcg</b> orders with a bag in mg need × 1 mg/1,000 mcg. <b>Per kg</b> orders need the weight first."],
      ["ex", "dose_mcg", "Worked example: mcg/kg/min"],
      ["traps", ["Skipping the weight step on a /kg/ order.", "Mixing up mcg and mg: the bag is in mg, the order is in mcg.", "Reverse questions (mL/hr → units/hr): flip the bag fraction so mL cancels."]],
      ["try", "dose_try"]
    ]
  }
];
