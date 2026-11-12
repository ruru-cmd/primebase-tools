(function () {
  var expensesEl = document.getElementById("ft-expenses");
  var savingsEl = document.getElementById("ft-savings");
  var resultEl = document.getElementById("ft-result");
  var runBtn = document.getElementById("ft-run");
  var AVG_MONTH_DAYS = 30.436875;

  function fmt(n) {
    return Math.round(n).toLocaleString("en-US");
  }

  function run() {
    var expenses = parseFloat(expensesEl.value) || 0;
    var savings = parseFloat(savingsEl.value) || 0;

    if (!expenses && !savings) {
      resultEl.innerHTML = '<p class="empty">Enter your monthly expenses and savings.</p>';
      return;
    }

    var months = 0;
    var days = 0;
    var free = false;

    if (expenses > 0) {
      months = savings / expenses;
      days = months * AVG_MONTH_DAYS;
      if (months >= 12) {
        free = true;
      }
    } else {
      free = true;
    }

    var daysText = free ? "365+" : fmt(days);
    var caption;

    if (free) {
      caption = "A year or more. You are living your freedom number.";
    } else {
      var dateText = new Date(Date.now() + days * 86400000).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      });
      caption = "\u2248 " + months.toFixed(1) + " months \u00b7 free by " + dateText;
    }

    resultEl.innerHTML =
      '<p class="days">' +
      daysText +
      '</p><p class="days-label">Days of freedom</p><p class="caption">' +
      caption +
      "</p>";
  }

  if (runBtn) {
    runBtn.addEventListener("click", run);
  }

  [expensesEl, savingsEl].forEach(function (el) {
    if (el) {
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          run();
        }
      });
    }
  });

  run();
})();
