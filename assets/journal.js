(function () {
  var ta = document.getElementById("jr-text");
  var statusEl = document.getElementById("jr-status");
  var countsEl = document.getElementById("jr-counts");
  var clearBtn = document.getElementById("jr-clear");
  var KEY = "primebase.journal.draft";
  var timer = null;

  function words(text) {
    var t = text.trim();
    return t ? t.split(/\s+/).length : 0;
  }

  function count() {
    if (countsEl) {
      countsEl.textContent = words(ta.value) + " words";
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, ta.value);
    } catch (e) {
      if (statusEl) {
        statusEl.textContent = "not saved";
      }
      return;
    }
    if (statusEl) {
      statusEl.textContent = "saved";
    }
  }

  ta.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(save, 400);
    count();
    if (statusEl) {
      statusEl.textContent = "\u2026";
    }
  });

  window.addEventListener("beforeunload", function () {
    clearTimeout(timer);
    try {
      localStorage.setItem(KEY, ta.value);
    } catch (e) {
      return;
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      ta.value = "";
      clearTimeout(timer);
      save();
      count();
    });
  }

  try {
    ta.value = localStorage.getItem(KEY) || "";
  } catch (e) {
    ta.value = "";
  }
  count();
  if (statusEl) {
    statusEl.textContent = ta.value ? "saved" : "";
  }
})();
