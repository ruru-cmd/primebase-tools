(function () {
  var REMINDERS = [
    {
      title: "Spot the Disguised Task",
      lede: "Most of what looks like work is not work at all.",
      body: [
        "Identify the disguised actions and tasks that do not bring you closer to your goal. They rarely announce themselves. They look like checking one message, one quick scroll, a small reply that quietly eats an hour. The trick is to name them while they are still small.",
        "Most of these fake tasks arrive through the phone in your pocket. If that is where your day leaks, the guide to making your Android device distraction free is a practical place to start the cleanup."
      ]
    },
    {
      title: "Just Glide",
      lede: "When you meet resistance, do not wrestle with it.",
      body: [
        "When you meet resistance, do not wrestle with it. Keep your pace, go around it, and stay light. Forcing rarely helps, and the fight itself usually costs more than the obstacle did."
      ]
    },
    {
      title: "Eat With Peace",
      lede: "Put the plate down. Chew slowly. Be grateful.",
      body: [
        "Eat your food with peace. Put the plate down, chew slowly, and let your gut do its work after you finish. Then be grateful for it. Gratitude is not a ritual here, it is just the natural response to a warm meal and a calm body."
      ]
    },
    {
      title: "Jog, Get Ready",
      lede: "Movement comes before the day starts.",
      body: [
        "Movement comes before the day starts, not after it has already taken everything out of you. A short run clears the fog, wakes the body, and gives you a quiet window where nothing is being asked of you yet."
      ]
    }
  ];

  function dayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function renderToday() {
    var idx = dayOfYear() % REMINDERS.length;
    var r = REMINDERS[idx];

    var titleEl = document.getElementById("dr-title");
    var ledeEl = document.getElementById("dr-lede");
    var bodyEl = document.getElementById("dr-body");
    var dateEl = document.getElementById("dr-date");

    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    }
    if (titleEl) {
      titleEl.textContent = r.title;
    }
    if (ledeEl) {
      ledeEl.textContent = r.lede;
    }
    if (bodyEl) {
      bodyEl.innerHTML = "";
      for (var i = 0; i < r.body.length; i++) {
        var p = document.createElement("p");
        p.textContent = r.body[i];
        bodyEl.appendChild(p);
      }
    }

    return idx;
  }

  function renderList(todayIdx) {
    var listEl = document.getElementById("dr-list");
    if (!listEl) {
      return;
    }
    var html = "";
    for (var i = 0; i < REMINDERS.length; i++) {
      var r = REMINDERS[i];
      var cls = "reminder";
      if (i === todayIdx) {
        cls = "reminder today";
      }
      var head = '<span class="r-idx">Reminder ' + (i + 1) + "</span>" + r.title;
      html =
        html +
        '<div class="' +
        cls +
        '"><h4>' +
        head +
        "</h4><p>" +
        r.body[0] +
        "</p></div>";
    }
    listEl.innerHTML = html;
  }

  function init() {
    var todayIdx = renderToday();
    renderList(todayIdx);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
