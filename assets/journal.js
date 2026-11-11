(function () {
  var textarea = document.getElementById("jr-text");
  var statusEl = document.getElementById("jr-status");
  var dotEl = document.getElementById("jr-dot");
  var countsEl = document.getElementById("jr-counts");
  var clearBtn = document.getElementById("jr-clear");

  var KEY = "primebase.journal.draft";
  var timer = null;

  function wordCount(text) {
    var t = text.trim();
    if (!t) {
      return 0;
    }
    return t.split(/\s+/).length;
  }

  function showSaved() {
    var now = new Date();
    var time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    if (dotEl) {
      dotEl.className = "dot";
    }
    if (statusEl) {
      statusEl.textContent = "Saved \u00B7 " + time;
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, textarea.value);
      showSaved();
    } catch (e) {
      if (statusEl) {
        statusEl.textContent = "This browser will not save drafts";
      }
      if (dotEl) {
        dotEl.className = "dot idle";
      }
    }
  }

  function updateCounts() {
    if (!countsEl) {
      return;
    }
    countsEl.textContent =
      wordCount(textarea.value) + " words \u00B7 " + textarea.value.length + " characters";
  }

  textarea.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(save, 400);
    updateCounts();
  });

  window.addEventListener("beforeunload", function () {
    clearTimeout(timer);
    try {
      localStorage.setItem(KEY, textarea.value);
    } catch (e) {
      return;
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      textarea.value = "";
      clearTimeout(timer);
      save();
      updateCounts();
    });
  }

  var savedValue = "";
  try {
    savedValue = localStorage.getItem(KEY) || "";
  } catch (e) {
    savedValue = "";
  }
  textarea.value = savedValue;
  updateCounts();
  if (savedValue) {
    showSaved();
  } else if (statusEl) {
    statusEl.textContent = "Nothing written yet";
    if (dotEl) {
      dotEl.className = "dot idle";
    }
  }
})();
