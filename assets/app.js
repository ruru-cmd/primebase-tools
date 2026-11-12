(function () {
  var BASE = document.documentElement.getAttribute("data-base") || "";

  var TOOLS = [
    { title: "Freedom Tracker", line: "Measure wealth in time.", img: "assets/img/freedom.jpg", path: "freedom-tracker/" },
    { title: "Journal", line: "A quiet page, kept private.", img: "assets/img/journal.jpg", path: "journal/" },
    { title: "Daily Read", line: "One reminder a day.", img: "assets/img/read.jpg", path: "daily-read/" },
    { title: "Glide Check", line: "Is it a task, or a disguise?", img: "assets/img/glide.jpg", path: "glide-check/" }
  ];

  function href(path) {
    return BASE + path;
  }

  function renderHeader() {
    var header = document.getElementById("site-header");
    if (!header) {
      return;
    }
    header.className = "masthead";
    header.innerHTML =
      '<div class="wrap mast-inner">' +
      '<a class="brand" href="' +
      href("index.html") +
      '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<circle cx="12" cy="10.5" r="6" fill="#a6533a"/>' +
      '<path d="M2.5 18.5h19" stroke="#17150f" stroke-width="1.6" stroke-linecap="round"/>' +
      "</svg>" +
      "Primebase" +
      "</a>" +
      '<a class="mast-note" href="' +
      href("index.html#tools-grid") +
      '">Tools</a>' +
      "</div>";
  }

  function renderFooter() {
    var footer = document.getElementById("site-footer");
    if (!footer) {
      return;
    }
    footer.className = "footer";
    footer.innerHTML =
      '<div class="wrap">' +
      "<span>Primebase \u2014 a self reflection place.</span>" +
      '<a href="https://www.primebase.in/">www.primebase.in \u2197</a>' +
      "</div>";
  }

  function renderToolsGrid() {
    var grid = document.getElementById("tools-grid");
    if (!grid) {
      return;
    }
    grid.innerHTML = TOOLS.map(function (t) {
      return (
        '<a class="card" href="' +
        href(t.path) +
        '">' +
        '<span class="card-art"><img src="' +
        href(t.img) +
        '" alt="" width="768" height="576" loading="lazy"></span>' +
        '<span class="card-text"><span class="card-title">' +
        t.title +
        '</span><span class="card-line">' +
        t.line +
        "</span></span>" +
        "</a>"
      );
    }).join("");
  }

  function init() {
    renderHeader();
    renderFooter();
    renderToolsGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
