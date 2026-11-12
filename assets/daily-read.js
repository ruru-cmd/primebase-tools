(function () {
  var REMINDERS = [
    {
      title: "Spot the Disguised Task",
      body: [
        "Identify the disguised actions and tasks that do not bring you closer to your goal. They rarely announce themselves. They look like checking one message, one quick scroll, a small reply that quietly eats an hour. The trick is to name them while they are still small.",
        "Most of these fake tasks arrive through the phone in your pocket. If that is where your day leaks, the guide to making your Android device distraction free is a practical place to start the cleanup."
      ]
    },
    {
      title: "Just Glide",
      body: [
        "When you meet resistance, do not wrestle with it. Keep your pace, go around it, and stay light. Forcing rarely helps, and the fight itself usually costs more than the obstacle did."
      ]
    },
    {
      title: "Eat With Peace",
      body: [
        "Eat your food with peace. Put the plate down, chew slowly, and let your gut do its work after you finish. Then be grateful for it. Gratitude is not a ritual here, it is just the natural response to a warm meal and a calm body."
      ]
    },
    {
      title: "Jog, Get Ready",
      body: [
        "Movement comes before the day starts, not after it has already taken everything out of you. A short run clears the fog, wakes the body, and gives you a quiet window where nothing is being asked of you yet."
      ]
    }
  ];

  var dateEl = document.getElementById("dr-date");
  var titleEl = document.getElementById("dr-title");
  var bodyEl = document.getElementById("dr-body");
  var tabsEl = document.getElementById("dr-tabs");
  var current = 0;

  function dayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function render(idx) {
    current = idx;
    var r = REMINDERS[idx];

    if (titleEl) {
      titleEl.textContent = r.title;
    }

    if (bodyEl) {
      bodyEl.innerHTML = "";
      for (var i = 0; i < r.body.length; i++) {
        var p = document.createElement("p");
        p.textContent = r.body[i];
        bodyEl.appendChild(p);
      }
    }

    if (tabsEl) {
      var tabs = tabsEl.querySelectorAll(".tab");
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].setAttribute("aria-current", j === idx ? "true" : "false");
      }
    }
  }

  function buildTabs() {
    if (!tabsEl) {
      return;
    }
    tabsEl.innerHTML = "";
    REMINDERS.forEach(function (r, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tab";
      b.textContent = "0" + (i + 1) + "  " + r.title;
      b.addEventListener("click", function () {
        render(i);
      });
      tabsEl.appendChild(b);
    });
  }

  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
  }

  buildTabs();
  render(dayOfYear() % REMINDERS.length);
  void current;
})();
