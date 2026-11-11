(function () {
  var BASE = document.documentElement.getAttribute("data-base") || "";

  var TOOLS = [
    {
      icon: "\u{1F54A}\uFE0F",
      tag: "Finance",
      title: "Freedom Tracker",
      tagline: "Measure your wealth in time, not just currency.",
      description: "Know how many days of freedom your savings actually buy, and when you will be free for real.",
      path: "freedom-tracker/",
      cta: "Open the tool"
    },
    {
      icon: "\u270D\uFE0F",
      tag: "Reflection",
      title: "Journal",
      tagline: "A quiet space to write and reflect.",
      description: "Private drafts for daily thoughts, reflections and clarity. Stays on this device until you clear it.",
      path: "journal/",
      cta: "Open the journal"
    },
    {
      icon: "\u{1F32B}\uFE0F",
      tag: "Mind",
      title: "Daily Read",
      tagline: "A little learning every day. One idea at a time.",
      description: "One of four gentle reminders for quieter days. Spot the disguised task, glide, eat in peace, jog.",
      path: "daily-read/",
      cta: "Read today"
    },
    {
      icon: "\u{1F50D}",
      tag: "Focus",
      title: "Glide Check",
      tagline: "Is it a task, or a disguise?",
      description: "Run your to-do through a gentle check before it eats your day. Ask whether it moves you toward what matters.",
      path: "glide-check/",
      cta: "Run the check"
    }
  ];

  function href(path) {
    return BASE + path;
  }

  function renderHeader() {
    var header = document.getElementById("site-header");
    if (!header) {
      return;
    }
    header.innerHTML =
      '<div class="container header-inner">' +
      '<a class="brand" href="' +
      href("index.html") +
      '">Primebase</a>' +
      '<nav class="site-nav">' +
      '<a href="' +
      href("index.html") +
      '">Tools</a>' +
      '<a href="' +
      href("freedom-tracker/") +
      '">Freedom Tracker</a>' +
      '<a href="' +
      href("journal/") +
      '">Journal</a>' +
      '<a href="' +
      href("daily-read/") +
      '">Daily Read</a>' +
      '<a href="' +
      href("glide-check/") +
      '">Glide Check</a>' +
      "</nav>" +
      "</div>";
  }

  function renderFooter() {
    var footer = document.getElementById("site-footer");
    if (!footer) {
      return;
    }
    footer.innerHTML =
      '<div class="container footer-inner">' +
      "<p>Primebase \u2014 a self reflection place.</p>" +
      '<p><a href="https://www.primebase.in/">www.primebase.in</a></p>' +
      "</div>";
  }

  function renderToolsGrid() {
    var grid = document.getElementById("tools-grid");
    if (!grid) {
      return;
    }
    grid.innerHTML = TOOLS.map(function (t) {
      return (
        '<a class="tool-card" href="' +
        href(t.path) +
        '">' +
        '<div class="tool-card-top">' +
        '<span class="tool-icon">' +
        t.icon +
        "</span>" +
        '<span class="tool-tag">' +
        t.tag +
        "</span>" +
        "</div>" +
        "<h3>" +
        t.title +
        "</h3>" +
        '<p class="tool-tagline">' +
        t.tagline +
        "</p>" +
        '<p class="tool-desc">' +
        t.description +
        "</p>" +
        '<span class="tool-cta">' +
        t.cta +
        " \u2192</span>" +
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
