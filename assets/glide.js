(function () {
  var taskEl = document.getElementById("gt-task");
  var goalEl = document.getElementById("gt-goal");
  var urgentEl = document.getElementById("gt-urgent");
  var runBtn = document.getElementById("gt-run");
  var resultEl = document.getElementById("gt-result");

  function run() {
    var task = taskEl.value.trim();
    var goal = goalEl.value;
    var urgent = urgentEl.value;

    if (!task) {
      resultEl.hidden = true;
      taskEl.focus();
      return;
    }
    if (!goal) {
      goalEl.focus();
      return;
    }
    if (!urgent) {
      urgentEl.focus();
      return;
    }

    var verdictClass = "soft";
    var title = "Glide gently.";
    var body = "Name the task, name the why. Small honest steps beat perfect plans.";

    if (goal === "no") {
      verdictClass = "warn";
      title = "Probably a disguise.";
      body =
        "This task did not sound like it moves you toward something you care about. Disguised tasks rarely announce themselves. Consider letting it glide, or refile it for when your energy is real.";
    } else if (goal === "unsure") {
      verdictClass = "soft";
      title = "Not clear yet.";
      body =
        "Clarity comes from naming the goal. Before you judge the task, name what it was meant to serve.";
    } else if (urgent === "high") {
      verdictClass = "pass";
      title = "Keep it tight.";
      body =
        "It moves you toward what matters, and it feels urgent. Timebox it. A calm yes beats a loud maybe.";
    } else {
      verdictClass = "pass";
      title = "A real task.";
      body =
        "It moves you toward what matters. Small and honest beats big and perfect. Take one step.";
    }

    resultEl.className = "verdict " + verdictClass;
    resultEl.innerHTML = "<h2>" + title + "</h2><p>" + body + "</p>";
    resultEl.hidden = false;
  }

  if (runBtn) {
    runBtn.addEventListener("click", run);
  }
})();
