(function () {
  var expensesEl = document.getElementById("ft-expenses");
  var savingsEl = document.getElementById("ft-savings");
  var resultEl = document.getElementById("ft-result");
  var runBtn = document.getElementById("ft-run");

  var AVG_MONTH_DAYS = 30.436875;

  function fmt(n) {
    return Math.round(n).toLocaleString("en-US");
  }

  function renderRows(daysText, expenses, savings, monthsText, dateText, noteText) {
    resultEl.innerHTML =
      '<div class="result-days">' +
      '<span class="num">' +
      daysText +
      "</span>" +
      '<span class="lbl">Days of Freedom</span>' +
      "</div>" +
      '<ul class="result-rows">' +
      "<li><span>Monthly living expenses</span><span>" +
      expenses +
      "</span></li>" +
      "<li><span>Savings / liquid wealth</span><span>" +
      savings +
      "</span></li>" +
      "<li><span>Months of freedom</span><span>" +
      monthsText +
      "</span></li>" +
      "<li><span>Est. freedom date</span><span>" +
      dateText +
      "</span></li>" +
      "</ul>" +
      '<p class="result-note">' +
      noteText +
      "</p>";
  }

  function run() {
    var expenses = parseFloat(expensesEl.value) || 0;
    var savings = parseFloat(savingsEl.value) || 0;

    if (!expenses && !savings) {
      resultEl.innerHTML =
        '<div class="result-empty">Enter your monthly living expenses and your current savings to see your days of freedom.</div>';
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
    var expensesText = expenses > 0 ? fmt(expenses) : "Living";
    var monthsText = free ? "Living" : months.toFixed(1);
    var dateText = free
      ? "You made it"
      : new Date(Date.now() + days * 86400000).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        });
    var noteText = free
      ? "That is a full year of freedom. You are living your freedom number."
      : "Every bit of discipline today adds more freedom to your future.";

    renderRows(daysText, expensesText, fmt(savings), monthsText, dateText, noteText);
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
