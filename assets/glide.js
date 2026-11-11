(function () {
  var taskEl = document.getElementById("gt-task");
  var goalEl = document.getElementById("gt-goal");
  var urgentEl = document.getElementById("gt-urgent");
  var timeEl = document.getElementById("gt-time");
  var runBtn = document.getElementById("gt-run");
  var resultEl = document.getElementById("gt-result");
  var verdictEl = document.getElementById("gt-verdict");
  var verdictBodyEl = document.getElementById("gt-verdict-body");

  function run() {
    var task = taskEl.value.trim();
    var goal = goalEl.value;
    var urgent = urgentEl.value;
    var minutes = parseInt(timeEl.value, 10) || 0;

    if (!task) {
      resultEl.hidden = true;
      taskEl.focus();
      return;
    }

    var verdictClass = "soft";
    var verdictTitle = "Glide gently.";
    var verdictBody =
      "Name the task, name the why. Small honest steps beat perfect plans.";

    if (goal === "no") {
      verdictClass = "warn";
      verdictTitle = "Probably a disguise.";
      verdictBody =
        "This task did not sound like it moves you toward something you care about. Disguised tasks rarely announce themselves. Consider letting it glide, or refile it for when your energy is real.";
    } else if (goal === "unsure") {
      verdictClass = "soft";
      verdictTitle = "Not clear yet.";
      verdictBody =
        "Clarity comes from naming the goal. Before you judge the task, name what it was meant to serve.";
    } else if (urgent === "high") {
      verdictClass = "pass";
      verdictTitle = "Keep it tight.";
      verdictBody =
        "It moves you toward what matters, and it feels urgent. Timebox it. A calm yes beats a loud maybe.";
    } else {
      verdictClass = "pass";
      verdictTitle = "A real task.";
      verdictBody =
        "It moves you toward what matters. Small and honest beats big and perfect. Take one step.";
    }

    if (minutes > 60 && goal === "no") {
      verdictBody =
        verdictBody + " If it quietly steals more than an hour, it may be worth letting go of entirely.";
    }

    verdictEl.className = "gt-verdict " + verdictClass;
    verdictEl.textContent = verdictTitle;
    verdictBodyEl.textContent = verdictBody;
    resultEl.hidden = false;
  }

  if (runBtn) {
    runBtn.addEventListener("click", run);
  }
})();
