/* Renders the roleplay scripts in js/scripts.js into each patient tab.
   "Hide my lines" blurs your lines so you can practice; tap a line to check it.
   The rubric item each line earns stays visible as a cue. */
(function () {
  var data = window.ROLEPLAY || {};
  var KEY = "nura330-practical-hide";
  var WHO = { n: "You", say: "You, aloud", p: "Patient", dr: "Provider", "do": "Do" };
  var hide = false;
  try { hide = localStorage.getItem(KEY) === "1"; } catch (e) {}

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function mine(li) { return li.classList.contains("n") || li.classList.contains("say"); }

  function apply(card) {
    var btn = card.querySelector("button.sc-hide"), all = card.querySelector("button.sc-all");
    btn.setAttribute("aria-pressed", hide ? "true" : "false");
    btn.textContent = hide ? "Show my lines" : "Hide my lines (practice)";
    all.hidden = !hide;
    card.querySelectorAll("ol.lines li").forEach(function (li) {
      var h = hide && mine(li);
      li.classList.toggle("hid", h);
      if (h) li.tabIndex = 0; else li.removeAttribute("tabindex");
    });
  }

  document.querySelectorAll("[data-script]").forEach(function (card) {
    var s = data[card.getAttribute("data-script")];
    if (!s) return;
    var h2 = el("h2", null, "Roleplay script ");
    var count = 0;
    s.phases.forEach(function (ph) { ph.lines.forEach(function (l) { if (l[2]) count++; }); });
    h2.appendChild(el("span", "pts", count + " graded items"));
    card.appendChild(h2);
    card.appendChild(el("p", "muted", s.cast + " Each graded item is tagged ✓ on the line that earns it. Findings in [brackets] are examples, so on exam day say what you actually find."));

    var bar = el("div", "sc-bar");
    var b1 = el("button", "sc sc-hide"); b1.type = "button";
    var b2 = el("button", "sc sc-all", "Reveal all"); b2.type = "button";
    bar.appendChild(b1); bar.appendChild(b2);
    card.appendChild(bar);

    var lg = el("div", "legend");
    [["You", "var(--accent)"], ["You, aloud to the grader", "var(--ok)"], ["Patient", "var(--muted)"], ["Provider", "var(--warn)"]].forEach(function (x) {
      var sp = el("span"), i = el("i"); i.style.background = x[1]; sp.appendChild(i); sp.appendChild(document.createTextNode(x[0])); lg.appendChild(sp);
    });
    card.appendChild(lg);

    // "Before you leave" always comes last, after the med pass.
    var phases = s.phases.filter(function (ph) { return ph.title !== "Before you leave"; })
      .concat(s.phases.filter(function (ph) { return ph.title === "Before you leave"; }));
    phases.forEach(function (ph) {
      var box = el("div", "ph"), hd = el("div", "ph-h");
      hd.appendChild(el("h3", null, ph.title));
      hd.appendChild(el("span", "tag", ph.pts));
      box.appendChild(hd);
      var ol = el("ol", "lines");
      ph.lines.forEach(function (l) {
        var li = el("li", l[0]);
        li.appendChild(el("span", "who", WHO[l[0]] || ""));
        var body = el("div");
        body.appendChild(el("span", "tx", l[1]));
        if (l[2]) {
          var c = el("span", "crit", "✓ " + l[2]);
          c.setAttribute("data-no-gloss", "");
          body.appendChild(c);
        }
        li.appendChild(body);
        ol.appendChild(li);
      });
      box.appendChild(ol);
      card.appendChild(box);
    });

    b1.addEventListener("click", function () {
      hide = !hide;
      try { localStorage.setItem(KEY, hide ? "1" : "0"); } catch (e) {}
      document.querySelectorAll("[data-script]").forEach(function (c) { if (c.querySelector("button.sc-hide")) apply(c); });
    });
    b2.addEventListener("click", function () {
      card.querySelectorAll("ol.lines li.hid").forEach(function (li) { li.classList.remove("hid"); li.removeAttribute("tabindex"); });
    });
    card.addEventListener("click", function (e) {
      var li = e.target.closest && e.target.closest("ol.lines li.hid");
      if (li) { li.classList.remove("hid"); li.removeAttribute("tabindex"); }
    });
    card.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("ol.lines li.hid")) {
        e.preventDefault(); e.target.classList.remove("hid"); e.target.removeAttribute("tabindex");
      }
    });
    apply(card);
  });
})();
