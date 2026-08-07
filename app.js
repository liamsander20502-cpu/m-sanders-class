const state = {
  role: "teacher",
  language: "en",
  view: "calendar",
  cursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  events: [
    { id: 1, date: isoThisMonth(5), name: "Library", category: "recurring", icon: "📚" },
    { id: 2, date: isoThisMonth(12), name: "Gym", category: "recurring", icon: "🏃" },
    { id: 3, date: isoThisMonth(19), name: "School Photos", category: "special", icon: "📷" }
  ],
  absences: [
    { id: 1, student: "Avery S.", start: isoThisMonth(22), end: isoThisMonth(23), note: "Family trip", status: "pending" }
  ],
  extracted: []
};

function isoThisMonth(day) {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), day, 12).toISOString().slice(0,10);
}

const translations = {
  en: {
    weekdays: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  },
  fr: {
    weekdays: ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]
  }
};

const $ = (id) => document.getElementById(id);

function renderRole() {
  document.querySelectorAll(".teacher-only").forEach(el => el.classList.toggle("hidden", state.role !== "teacher"));
  document.querySelectorAll(".parent-only").forEach(el => el.classList.toggle("hidden", state.role !== "parent"));

  if (state.role === "parent" && ["import", "absences"].includes(state.view)) {
    showView("calendar");
  }
  if (state.role === "teacher" && state.view === "submit") {
    showView("calendar");
  }
}

function showView(name) {
  state.view = name;
  document.querySelectorAll(".view").forEach(el => el.classList.add("hidden"));
  const map = {
    calendar: "calendarView",
    import: "importView",
    absences: "absencesView",
    submit: "submitView"
  };
  $(map[name]).classList.remove("hidden");

  
const monthThemes = [
  {
    name:"Snowy Starts", kicker:"JANUARY • WINTER",
    blurb:"A crisp winter calendar for routines, reading days, and fresh starts.",
    icons:["❄️","⛄","🧤","📘","☕","✨"]
  },
  {
    name:"Kindness Month", kicker:"FEBRUARY • KINDNESS",
    blurb:"Warm hearts, friendship, and little moments of classroom kindness.",
    icons:["💗","💌","🫶","✏️","💕","🌟"]
  },
  {
    name:"Spring Awakening", kicker:"MARCH • SPRING",
    blurb:"New growth, brighter days, and the first signs of spring.",
    icons:["🌱","☘️","🌷","🐦","🌤️","🌿"]
  },
  {
    name:"Rainy Day Reading", kicker:"APRIL • RAIN & READING",
    blurb:"Rain boots, umbrellas, books, and cozy classroom learning.",
    icons:["☂️","🌧️","📚","🌈","💧","🥾"]
  },
  {
    name:"Garden in Bloom", kicker:"MAY • GARDEN",
    blurb:"Flowers, bees, and a colourful month of growing and learning.",
    icons:["🌷","🐝","🌼","🦋","🌿","🌸"]
  },
  {
    name:"Hello, Summer!", kicker:"JUNE • SUNSHINE",
    blurb:"Bright days, year-end celebrations, and summer just around the corner.",
    icons:["☀️","🍓","🕶️","🌈","🍦","⭐"]
  },
  {
    name:"Summer Adventure", kicker:"JULY • SUMMER",
    blurb:"Sunny days, outdoor adventures, and a playful summer feel.",
    icons:["🏖️","☀️","🍉","🩴","🌊","🐚"]
  },
  {
    name:"Back-to-School Buzz", kicker:"AUGUST • BACK TO SCHOOL",
    blurb:"Fresh pencils, new routines, backpacks, books, and a bright new start.",
    icons:["🎒","✏️","📚","🍎","🖍️","📏"]
  },
  {
    name:"Apple & Autumn", kicker:"SEPTEMBER • AUTUMN",
    blurb:"Apples, notebooks, changing leaves, and the rhythm of a new school year.",
    icons:["🍎","🍂","📓","✏️","🍁","📚"]
  },
  {
    name:"Spooky School Days", kicker:"OCTOBER • HALLOWEEN",
    blurb:"Pumpkins, friendly ghosts, bats, and just enough spooky fun for October.",
    icons:["🎃","👻","🦇","🕸️","🍬","🌙"]
  },
  {
    name:"Cozy Fall", kicker:"NOVEMBER • LATE FALL",
    blurb:"Warm colours, falling leaves, and a cozy classroom feel.",
    icons:["🍁","🧣","🍂","📚","☕","🌰"]
  },
  {
    name:"Winter Cheer", kicker:"DECEMBER • WINTER",
    blurb:"Snowflakes, mittens, lights, and a cheerful winter finish to the year.",
    icons:["❄️","⛄","🧤","✨","🎁","🌲"]
  }
];

function applyMonthTheme() {
  const view = $("calendarView");
  if (!view) return;

  for (let i = 0; i < 12; i++) view.classList.remove(`theme-month-${i}`);

  const month = state.cursor.getMonth();
  const theme = monthThemes[month];
  view.classList.add(`theme-month-${month}`);

  $("themeKicker").textContent = theme.kicker;
  $("themeName").textContent = theme.name;
  $("themeBlurb").textContent = theme.blurb;

  $("themeScene").innerHTML =
    theme.icons.map(icon => `<span class="theme-object">${icon}</span>`).join("") +
    `<i class="theme-spark s1"></i><i class="theme-spark s2"></i><i class="theme-spark s3"></i>`;
}



const spsdCalendar2026_27 = [
  {date:"2026-09-02", short:"First Day", detail:"First day of school — elementary students attend in the morning", spsdType:"milestone"},
  {date:"2026-09-07", short:"No School", detail:"Labour Day — no school", spsdType:"noschool"},
  {date:"2026-09-30", short:"No School", detail:"National Day for Truth and Reconciliation — no school", spsdType:"noschool"},

  {date:"2026-10-09", short:"No School", detail:"Professional development day — no school for students", spsdType:"noschool"},
  {date:"2026-10-12", short:"No School", detail:"Thanksgiving — no school", spsdType:"noschool"},
  {date:"2026-10-22", short:"Conferences", detail:"Three-way conferences — no school in the afternoon", spsdType:"conference"},
  {date:"2026-10-23", short:"Conferences", detail:"Three-way conferences — no school", spsdType:"conference"},

  {date:"2026-11-11", short:"No School", detail:"Remembrance Day — no school", spsdType:"noschool"},
  {date:"2026-11-27", short:"No School", detail:"Professional development / planning day — no school for students", spsdType:"noschool"},

  {date:"2026-12-21", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-22", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-23", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-24", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-25", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-28", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-29", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-30", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2026-12-31", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2027-01-01", short:"Winter Break", detail:"Winter break", spsdType:"break"},
  {date:"2027-01-04", short:"Classes Resume", detail:"Classes resume after winter break", spsdType:"milestone"},
  {date:"2027-01-22", short:"No School", detail:"Professional development / planning day — no school for students", spsdType:"noschool"},

  {date:"2027-02-05", short:"Report Cards", detail:"Elementary report cards available", spsdType:"conference"},
  {date:"2027-02-15", short:"No School", detail:"Family Day — no school", spsdType:"noschool"},
  {date:"2027-02-16", short:"Feb. Break", detail:"February break", spsdType:"break"},
  {date:"2027-02-17", short:"Feb. Break", detail:"February break", spsdType:"break"},
  {date:"2027-02-18", short:"Feb. Break", detail:"February break", spsdType:"break"},
  {date:"2027-02-19", short:"Feb. Break", detail:"February break", spsdType:"break"},

  {date:"2027-03-18", short:"Conferences", detail:"Three-way conferences — no school in the afternoon", spsdType:"conference"},
  {date:"2027-03-19", short:"Conferences", detail:"Three-way conferences — no school", spsdType:"conference"},
  {date:"2027-03-26", short:"No School", detail:"Good Friday — no school", spsdType:"noschool"},
  {date:"2027-03-29", short:"Spring Break", detail:"Spring break", spsdType:"break"},
  {date:"2027-03-30", short:"Spring Break", detail:"Spring break", spsdType:"break"},
  {date:"2027-03-31", short:"Spring Break", detail:"Spring break", spsdType:"break"},
  {date:"2027-04-01", short:"Spring Break", detail:"Spring break", spsdType:"break"},
  {date:"2027-04-02", short:"Spring Break", detail:"Spring break", spsdType:"break"},

  {date:"2027-05-21", short:"No School", detail:"Professional development / planning day — no school for students", spsdType:"noschool"},
  {date:"2027-05-24", short:"No School", detail:"Victoria Day — no school", spsdType:"noschool"},

  {date:"2027-06-14", short:"No School", detail:"Professional development / planning day — no school for students", spsdType:"noschool"},
  {date:"2027-06-29", short:"Last Day", detail:"Last day of school for Kindergarten to Grade 8 students", spsdType:"milestone"}
];

function getSpsdEventsForDate(date) {
  return spsdCalendar2026_27.filter(ev => ev.date === date);
}

function isSpsdSchoolYearVisible() {
  const y = state.cursor.getFullYear();
  const m = state.cursor.getMonth();
  return (y === 2026 && m >= 7) || (y === 2027 && m <= 5);
}


document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === name);
  });

  renderRole();
  if (name === "calendar") renderCalendar();
  if (name === "absences") renderAbsences();
}

function renderCalendar() {
  applyMonthTheme();
  const y = state.cursor.getFullYear();
  const m = state.cursor.getMonth();
  $("monthTitle").textContent = state.cursor.toLocaleDateString(state.language === "fr" ? "fr-CA" : "en-CA", {
    month: "long", year: "numeric"
  });

  $("weekdays").innerHTML = translations[state.language].weekdays.map(d => `<div>${d}</div>`).join("");

  const first = new Date(y, m, 1);
  const start = new Date(y, m, 1 - first.getDay());

  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const iso = toISO(d);
    const monthMatch = d.getMonth() === m;
    const dayEvents = state.events.filter(ev => ev.date === iso);
    const spsdEvents = getSpsdEventsForDate(iso);

    const primarySpsd = spsdEvents[0];

    cells.push(`
      <div class="day ${monthMatch ? "" : "muted"} ${primarySpsd ? `official-day official-${primarySpsd.spsdType}` : ""}" data-date="${iso}" ${primarySpsd ? `title="${escapeHtml(primarySpsd.detail)}"` : ""}>
        <div class="day-top">
          <div class="day-number">${d.getDate()}</div>
          ${primarySpsd ? `<span class="day-status">${escapeHtml(primarySpsd.short)}</span>` : ""}
        </div>
        <div class="day-events">
          ${dayEvents.map(ev => `
            <button class="event ${ev.category}" data-event-id="${ev.id}" title="${escapeHtml(ev.name)}">
              ${ev.icon} ${escapeHtml(ev.name)}
            </button>`).join("")}
        </div>
      </div>
    `);
  }
  $("calendarGrid").innerHTML = cells.join("");
  $("spsdNotice").classList.toggle("hidden", !isSpsdSchoolYearVisible());

  if (state.role === "teacher") {
    document.querySelectorAll(".day").forEach(day => {
      day.addEventListener("dblclick", () => openEventDialog(day.dataset.date));
    });
  }
}

function toISO(d) {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12);
  return local.toISOString().slice(0,10);
}

function openEventDialog(date = toISO(new Date())) {
  $("eventDate").value = date;
  $("eventName").value = "";
  $("eventCategory").value = "school";
  $("eventIcon").value = "📚";
  $("eventDialog").showModal();
}

function saveEvent() {
  const date = $("eventDate").value;
  const name = $("eventName").value.trim();
  if (!date || !name) return;
  state.events.push({
    id: Date.now(),
    date,
    name,
    category: $("eventCategory").value,
    icon: $("eventIcon").value
  });
  renderCalendar();
}

function parseEventsFromText(text) {
  const lines = text.split(/\n+/).map(s => s.trim()).filter(Boolean);
  const monthMap = {
    jan:0, january:0, janvier:0,
    feb:1, february:1, février:1, fevrier:1,
    mar:2, march:2, mars:2,
    apr:3, april:3, avril:3,
    may:4, mai:4,
    jun:5, june:5, juin:5,
    jul:6, july:6, juillet:6,
    aug:7, august:7, août:7, aout:7,
    sep:8, sept:8, september:8, septembre:8,
    oct:9, october:9, octobre:9,
    nov:10, november:10, novembre:10,
    dec:11, december:11, décembre:11, decembre:11
  };

  const year = state.cursor.getFullYear();
  const results = [];

  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-zÀ-ÿ.]+)\s*(\d{1,2})(?:,\s*(\d{4}))?\s*[-–—:]\s*(.+)$/);
    if (!match) continue;

    const monthKey = match[1].toLowerCase().replace(".", "");
    const month = monthMap[monthKey];
    if (month === undefined) continue;
    const day = Number(match[2]);
    const eventYear = match[3] ? Number(match[3]) : year;
    const name = match[4].trim();

    let icon = "⭐";
    let category = "school";
    const lower = name.toLowerCase();

    if (lower.includes("library") || lower.includes("biblioth")) { icon = "📚"; category = "recurring"; }
    else if (lower.includes("gym") || lower.includes("phys") || lower.includes("run")) { icon = "🏃"; }
    else if (lower.includes("photo") || lower.includes("picture")) { icon = "📷"; category = "special"; }
    else if (lower.includes("trip") || lower.includes("bus") || lower.includes("sortie")) { icon = "🚌"; category = "special"; }
    else if (lower.includes("no school") || lower.includes("pd day") || lower.includes("classes")) { icon = "🏠"; category = "special"; }
    else if (lower.includes("art")) { icon = "🎨"; }
    else if (lower.includes("music") || lower.includes("musique")) { icon = "🎵"; }

    results.push({
      id: Date.now() + results.length,
      approved: true,
      date: new Date(eventYear, month, day, 12).toISOString().slice(0,10),
      name,
      category,
      icon
    });
  }
  return results;
}

function renderReview() {
  if (!state.extracted.length) {
    $("reviewList").innerHTML = `<div class="empty-state">No events found. Try lines like “Sept. 8 – School photos”.</div>`;
    $("publishBtn").disabled = true;
    return;
  }

  $("reviewList").innerHTML = state.extracted.map(ev => `
    <label class="review-card">
      <input type="checkbox" data-review-id="${ev.id}" ${ev.approved ? "checked" : ""}>
      <div>
        <strong>${ev.icon} ${escapeHtml(ev.name)}</strong>
        <div class="review-meta">
          <span>${formatDate(ev.date)}</span>
          <span>${ev.category}</span>
        </div>
      </div>
    </label>
  `).join("");

  document.querySelectorAll("[data-review-id]").forEach(box => {
    box.addEventListener("change", () => {
      const ev = state.extracted.find(x => String(x.id) === box.dataset.reviewId);
      if (ev) ev.approved = box.checked;
    });
  });

  $("publishBtn").disabled = false;
}

function renderAbsences() {
  $("absenceBadge").textContent = state.absences.filter(a => a.status === "pending").length;

  if (!state.absences.length) {
    $("absenceList").innerHTML = `<div class="empty-state">No planned absences submitted.</div>`;
    return;
  }

  $("absenceList").innerHTML = state.absences.map(a => `
    <div class="absence-card">
      <div>
        <strong>${escapeHtml(a.student)}</strong>
        <div>${formatDate(a.start)}${a.end && a.end !== a.start ? ` – ${formatDate(a.end)}` : ""}</div>
        ${a.note ? `<div class="small">${escapeHtml(a.note)}</div>` : ""}
      </div>
      <div>
        <span class="status ${a.status === "ack" ? "ack" : ""}">${a.status === "ack" ? "Acknowledged" : "Pending"}</span>
        ${a.status !== "ack" ? `<div><button class="secondary ack-btn" data-id="${a.id}">Acknowledge</button></div>` : ""}
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".ack-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = state.absences.find(a => String(a.id) === btn.dataset.id);
      if (item) item.status = "ack";
      renderAbsences();
    });
  });
}

function formatDate(iso) {
  const [y,m,d] = iso.split("-").map(Number);
  return new Date(y,m-1,d).toLocaleDateString(state.language === "fr" ? "fr-CA" : "en-CA", {
    month: "short", day: "numeric", year: "numeric"
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  })[c]);
}


const monthThemes = [
  {
    name:"Snowy Starts", kicker:"JANUARY • WINTER",
    blurb:"A crisp winter calendar for routines, reading days, and fresh starts.",
    icons:["❄️","⛄","🧤","📘","☕","✨"]
  },
  {
    name:"Kindness Month", kicker:"FEBRUARY • KINDNESS",
    blurb:"Warm hearts, friendship, and little moments of classroom kindness.",
    icons:["💗","💌","🫶","✏️","💕","🌟"]
  },
  {
    name:"Spring Awakening", kicker:"MARCH • SPRING",
    blurb:"New growth, brighter days, and the first signs of spring.",
    icons:["🌱","☘️","🌷","🐦","🌤️","🌿"]
  },
  {
    name:"Rainy Day Reading", kicker:"APRIL • RAIN & READING",
    blurb:"Rain boots, umbrellas, books, and cozy classroom learning.",
    icons:["☂️","🌧️","📚","🌈","💧","🥾"]
  },
  {
    name:"Garden in Bloom", kicker:"MAY • GARDEN",
    blurb:"Flowers, bees, and a colourful month of growing and learning.",
    icons:["🌷","🐝","🌼","🦋","🌿","🌸"]
  },
  {
    name:"Hello, Summer!", kicker:"JUNE • SUNSHINE",
    blurb:"Bright days, year-end celebrations, and summer just around the corner.",
    icons:["☀️","🍓","🕶️","🌈","🍦","⭐"]
  },
  {
    name:"Summer Adventure", kicker:"JULY • SUMMER",
    blurb:"Sunny days, outdoor adventures, and a playful summer feel.",
    icons:["🏖️","☀️","🍉","🩴","🌊","🐚"]
  },
  {
    name:"Back-to-School Buzz", kicker:"AUGUST • BACK TO SCHOOL",
    blurb:"Fresh pencils, new routines, backpacks, books, and a bright new start.",
    icons:["🎒","✏️","📚","🍎","🖍️","📏"]
  },
  {
    name:"Apple & Autumn", kicker:"SEPTEMBER • AUTUMN",
    blurb:"Apples, notebooks, changing leaves, and the rhythm of a new school year.",
    icons:["🍎","🍂","📓","✏️","🍁","📚"]
  },
  {
    name:"Spooky School Days", kicker:"OCTOBER • HALLOWEEN",
    blurb:"Pumpkins, friendly ghosts, bats, and just enough spooky fun for October.",
    icons:["🎃","👻","🦇","🕸️","🍬","🌙"]
  },
  {
    name:"Cozy Fall", kicker:"NOVEMBER • LATE FALL",
    blurb:"Warm colours, falling leaves, and a cozy classroom feel.",
    icons:["🍁","🧣","🍂","📚","☕","🌰"]
  },
  {
    name:"Winter Cheer", kicker:"DECEMBER • WINTER",
    blurb:"Snowflakes, mittens, lights, and a cheerful winter finish to the year.",
    icons:["❄️","⛄","🧤","✨","🎁","🌲"]
  }
];

function applyMonthTheme() {
  const view = $("calendarView");
  if (!view) return;

  for (let i = 0; i < 12; i++) view.classList.remove(`theme-month-${i}`);

  const month = state.cursor.getMonth();
  const theme = monthThemes[month];
  view.classList.add(`theme-month-${month}`);

  $("themeKicker").textContent = theme.kicker;
  $("themeName").textContent = theme.name;
  $("themeBlurb").textContent = theme.blurb;

  $("themeScene").innerHTML =
    theme.icons.map(icon => `<span class="theme-object">${icon}</span>`).join("") +
    `<i class="theme-spark s1"></i><i class="theme-spark s2"></i><i class="theme-spark s3"></i>`;
}



const spsdCalendar2026_27 = [
  // Staff planning / operations before students return
  {date:"2026-08-27", name:"PD / Planning / Operations", icon:"🗂️", spsdType:"noschool"},
  {date:"2026-08-28", name:"PD / Planning / Operations", icon:"🗂️", spsdType:"noschool"},
  {date:"2026-08-31", name:"PD / Planning / Operations", icon:"🗂️", spsdType:"noschool"},
  {date:"2026-09-01", name:"PD / Planning / Operations", icon:"🗂️", spsdType:"noschool"},

  // September
  {date:"2026-09-02", name:"First Day — Elementary AM Only", icon:"🎒", spsdType:"milestone"},
  {date:"2026-09-07", name:"Labour Day — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2026-09-30", name:"Truth & Reconciliation — No School", icon:"🏠", spsdType:"holiday"},

  // October
  {date:"2026-10-09", name:"PD Day — No School for Students", icon:"🗂️", spsdType:"noschool"},
  {date:"2026-10-12", name:"Thanksgiving — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2026-10-22", name:"3-Way Conferences — No School PM", icon:"💬", spsdType:"conference"},
  {date:"2026-10-23", name:"3-Way Conferences — No School", icon:"💬", spsdType:"conference"},

  // November
  {date:"2026-11-11", name:"Remembrance Day — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2026-11-27", name:"PD / Planning — No School", icon:"🗂️", spsdType:"noschool"},

  // Winter break
  {date:"2026-12-21", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-22", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-23", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-24", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-25", name:"Christmas Day", icon:"❄️", spsdType:"holiday"},
  {date:"2026-12-28", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-29", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-30", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2026-12-31", name:"Winter Break", icon:"❄️", spsdType:"break"},
  {date:"2027-01-01", name:"Winter Break / New Year's Day", icon:"❄️", spsdType:"holiday"},
  {date:"2027-01-04", name:"Classes Resume", icon:"🎒", spsdType:"milestone"},
  {date:"2027-01-22", name:"PD / Planning — No School", icon:"🗂️", spsdType:"noschool"},

  // February
  {date:"2027-02-05", name:"Report Cards Available", icon:"📄", spsdType:"conference"},
  {date:"2027-02-15", name:"Family Day — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2027-02-16", name:"February Break", icon:"❄️", spsdType:"break"},
  {date:"2027-02-17", name:"February Break", icon:"❄️", spsdType:"break"},
  {date:"2027-02-18", name:"February Break", icon:"❄️", spsdType:"break"},
  {date:"2027-02-19", name:"February Break", icon:"❄️", spsdType:"break"},

  // March / April
  {date:"2027-03-18", name:"3-Way Conferences — No School PM", icon:"💬", spsdType:"conference"},
  {date:"2027-03-19", name:"3-Way Conferences — No School", icon:"💬", spsdType:"conference"},
  {date:"2027-03-26", name:"Good Friday — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2027-03-29", name:"Spring Break", icon:"🌷", spsdType:"break"},
  {date:"2027-03-30", name:"Spring Break", icon:"🌷", spsdType:"break"},
  {date:"2027-03-31", name:"Spring Break", icon:"🌷", spsdType:"break"},
  {date:"2027-04-01", name:"Spring Break", icon:"🌷", spsdType:"break"},
  {date:"2027-04-02", name:"Spring Break", icon:"🌷", spsdType:"break"},

  // May / June
  {date:"2027-05-21", name:"PD / Planning — No School", icon:"🗂️", spsdType:"noschool"},
  {date:"2027-05-24", name:"Victoria Day — No School", icon:"🏠", spsdType:"holiday"},
  {date:"2027-06-14", name:"PD / Planning — No School", icon:"🗂️", spsdType:"noschool"},
  {date:"2027-06-29", name:"Last Day — K–8 Students", icon:"🎉", spsdType:"milestone"},
  {date:"2027-06-30", name:"Last Day — School Staff", icon:"✅", spsdType:"milestone"}
];

function getSpsdEventsForDate(date) {
  return spsdCalendar2026_27.filter(ev => ev.date === date);
}

function isSpsdSchoolYearVisible() {
  const y = state.cursor.getFullYear();
  const m = state.cursor.getMonth();
  return (y === 2026 && m >= 7) || (y === 2027 && m <= 5);
}


document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

$("roleSelect").addEventListener("change", (e) => {
  state.role = e.target.value;
  renderRole();
  showView("calendar");
});

$("langBtn").addEventListener("click", () => {
  state.language = state.language === "en" ? "fr" : "en";
  $("langBtn").textContent = state.language === "en" ? "FR" : "EN";
  renderCalendar();
});

$("prevMonth").addEventListener("click", () => {
  state.cursor = new Date(state.cursor.getFullYear(), state.cursor.getMonth() - 1, 1);
  renderCalendar();
});

$("nextMonth").addEventListener("click", () => {
  state.cursor = new Date(state.cursor.getFullYear(), state.cursor.getMonth() + 1, 1);
  renderCalendar();
});

$("addEventBtn").addEventListener("click", () => openEventDialog());
$("printBtn").addEventListener("click", () => window.print());

$("saveEventBtn").addEventListener("click", (e) => {
  if (!$("eventDate").value || !$("eventName").value.trim()) {
    e.preventDefault();
    return;
  }
  saveEvent();
});

$("imageInput").addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  $("imagePreview").classList.remove("empty");
  $("imagePreview").innerHTML = `<img src="${url}" alt="Uploaded calendar source preview">`;
});

$("extractBtn").addEventListener("click", () => {
  state.extracted = parseEventsFromText($("importText").value);
  renderReview();
});

$("publishBtn").addEventListener("click", () => {
  const approved = state.extracted.filter(e => e.approved);
  approved.forEach(ev => state.events.push({
    id: Date.now() + Math.random(),
    date: ev.date,
    name: ev.name,
    category: ev.category,
    icon: ev.icon
  }));
  state.extracted = [];
  $("importText").value = "";
  renderReview();
  showView("calendar");
});

$("submitAbsenceBtn").addEventListener("click", () => {
  const start = $("absenceStart").value;
  if (!start) return;
  state.absences.push({
    id: Date.now(),
    student: $("studentSelect").value,
    start,
    end: $("absenceEnd").value || start,
    note: $("absenceNote").value.trim(),
    status: "pending"
  });
  $("absenceStart").value = "";
  $("absenceEnd").value = "";
  $("absenceNote").value = "";
  $("submitMessage").classList.remove("hidden");
  renderAbsences();
  setTimeout(() => $("submitMessage").classList.add("hidden"), 3500);
});

renderRole();
renderCalendar();
renderAbsences();
