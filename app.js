const state = {
  role:"teacher",
  language:"en",
  view:"home",
  cursor:new Date(2026,7,1),
  home:{
    reminder:"Please send indoor shoes, a filled water bottle, lunch kit, and backpack each day.",
    classHeading:"Welcome to Our Class",
    familyNote:"",
    links:{
      school:"https://www.spsd.sk.ca/riverheights",
      spsd:"https://www.spsd.sk.ca/"
    },
    learning:{
      french:"Getting comfortable with classroom French and daily routines",
      math:"Counting, comparing, and representing numbers",
      science:"Seasonal changes and observing the world around us",
      focus:"Building independence, kindness, and strong classroom routines"
    }
  },
  events:[],
  extracted:[]
};

const monthThemes=[
{name:"Snowy Starts",kicker:"JANUARY • WINTER",blurb:"A crisp winter month for routines, reading days, and fresh starts.",icons:["❄️","⛄","🧤","📘","☕","✨"],accent:"#4d82b8",soft:"#eef8ff",deep:"#2f5678"},
{name:"Kindness Month",kicker:"FEBRUARY • KINDNESS",blurb:"Warm hearts, friendship, and little moments of classroom kindness.",icons:["💗","💌","🫶","✏️","💕","🌟"],accent:"#bd5779",soft:"#fff0f5",deep:"#7e3650"},
{name:"Spring Awakening",kicker:"MARCH • SPRING",blurb:"New growth, brighter days, and the first signs of spring.",icons:["🌱","☘️","🌷","🐦","🌤️","🌿"],accent:"#4c8b58",soft:"#f0f9ed",deep:"#32613b"},
{name:"Rainy Day Reading",kicker:"APRIL • RAIN & READING",blurb:"Rain boots, umbrellas, books, and cozy classroom learning.",icons:["☂️","🌧️","📚","🌈","💧","🥾"],accent:"#527ea7",soft:"#eef6fb",deep:"#365873"},
{name:"Garden in Bloom",kicker:"MAY • GARDEN",blurb:"Flowers, bees, and a colourful month of growing and learning.",icons:["🌷","🐝","🌼","🦋","🌿","🌸"],accent:"#8a6aa3",soft:"#f8f1fb",deep:"#5f4971"},
{name:"Hello, Summer!",kicker:"JUNE • SUNSHINE",blurb:"Bright days, year-end celebrations, and summer just around the corner.",icons:["☀️","🍓","🕶️","🌈","🍦","⭐"],accent:"#c48a29",soft:"#fff8e5",deep:"#7a581f"},
{name:"Summer Adventure",kicker:"JULY • SUMMER",blurb:"Sunny days, outdoor adventures, and a playful summer feel.",icons:["🏖️","☀️","🍉","🩴","🌊","🐚"],accent:"#2c8197",soft:"#eaf9fb",deep:"#205b69"},
{name:"Back-to-School Buzz",kicker:"AUGUST • BACK TO SCHOOL",blurb:"Fresh pencils, new routines, backpacks, books, and a bright new start.",icons:["🎒","✏️","📚","🍎","🖍️","📏"],accent:"#d07932",soft:"#fff3e5",deep:"#875024"},
{name:"Apple & Autumn",kicker:"SEPTEMBER • AUTUMN",blurb:"Apples, notebooks, changing leaves, and the rhythm of a new school year.",icons:["🍎","🍂","📓","✏️","🍁","📚"],accent:"#a75f34",soft:"#fbf0e5",deep:"#724122"},
{name:"Spooky School Days",kicker:"OCTOBER • HALLOWEEN",blurb:"Pumpkins, friendly ghosts, bats, and just enough spooky fun for October.",icons:["🎃","👻","🦇","🕸️","🍬","🌙"],accent:"#774492",soft:"#f6edf9",deep:"#4e2c60"},
{name:"Cozy Fall",kicker:"NOVEMBER • LATE FALL",blurb:"Warm colours, falling leaves, and a cozy classroom feel.",icons:["🍁","🧣","🍂","📚","☕","🌰"],accent:"#8d6538",soft:"#f7efe5",deep:"#634725"},
{name:"Winter Cheer",kicker:"DECEMBER • WINTER",blurb:"Snowflakes, mittens, lights, and a cheerful winter finish to the year.",icons:["❄️","⛄","🧤","✨","🎁","🌲"],accent:"#3f7375",soft:"#edf7f6",deep:"#2b5152"}
];

const spsdCalendar2026_27=[
{date:"2026-09-02",short:"First Day",detail:"First day of school — elementary students attend in the morning",spsdType:"milestone"},
{date:"2026-09-07",short:"No School",detail:"Labour Day — no school",spsdType:"noschool"},
{date:"2026-09-30",short:"No School",detail:"National Day for Truth and Reconciliation — no school",spsdType:"noschool"},
{date:"2026-10-09",short:"No School",detail:"Professional development day — no school for students",spsdType:"noschool"},
{date:"2026-10-12",short:"No School",detail:"Thanksgiving — no school",spsdType:"noschool"},
{date:"2026-10-22",short:"Conferences",detail:"Three-way conferences — no school in the afternoon",spsdType:"conference"},
{date:"2026-10-23",short:"Conferences",detail:"Three-way conferences — no school",spsdType:"conference"},
{date:"2026-11-11",short:"No School",detail:"Remembrance Day — no school",spsdType:"noschool"},
{date:"2026-11-27",short:"No School",detail:"Professional development / planning day — no school for students",spsdType:"noschool"},
{date:"2026-12-21",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-22",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-23",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-24",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-25",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-28",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-29",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-30",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2026-12-31",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2027-01-01",short:"Winter Break",detail:"Winter break",spsdType:"break"},
{date:"2027-01-04",short:"Classes Resume",detail:"Classes resume after winter break",spsdType:"milestone"},
{date:"2027-01-22",short:"No School",detail:"Professional development / planning day — no school for students",spsdType:"noschool"},
{date:"2027-02-05",short:"Report Cards",detail:"Elementary report cards available",spsdType:"conference"},
{date:"2027-02-15",short:"No School",detail:"Family Day — no school",spsdType:"noschool"},
{date:"2027-02-16",short:"Feb. Break",detail:"February break",spsdType:"break"},
{date:"2027-02-17",short:"Feb. Break",detail:"February break",spsdType:"break"},
{date:"2027-02-18",short:"Feb. Break",detail:"February break",spsdType:"break"},
{date:"2027-02-19",short:"Feb. Break",detail:"February break",spsdType:"break"},
{date:"2027-03-18",short:"Conferences",detail:"Three-way conferences — no school in the afternoon",spsdType:"conference"},
{date:"2027-03-19",short:"Conferences",detail:"Three-way conferences — no school",spsdType:"conference"},
{date:"2027-03-26",short:"No School",detail:"Good Friday — no school",spsdType:"noschool"},
{date:"2027-03-29",short:"Spring Break",detail:"Spring break",spsdType:"break"},
{date:"2027-03-30",short:"Spring Break",detail:"Spring break",spsdType:"break"},
{date:"2027-03-31",short:"Spring Break",detail:"Spring break",spsdType:"break"},
{date:"2027-04-01",short:"Spring Break",detail:"Spring break",spsdType:"break"},
{date:"2027-04-02",short:"Spring Break",detail:"Spring break",spsdType:"break"},
{date:"2027-05-21",short:"No School",detail:"Professional development / planning day — no school for students",spsdType:"noschool"},
{date:"2027-05-24",short:"No School",detail:"Victoria Day — no school",spsdType:"noschool"},
{date:"2027-06-14",short:"No School",detail:"Professional development / planning day — no school for students",spsdType:"noschool"},
{date:"2027-06-29",short:"Last Day",detail:"Last day of school for Kindergarten to Grade 8 students",spsdType:"milestone"}
];

const $=id=>document.getElementById(id);

function loadSavedSite(){
  try{
    const saved=localStorage.getItem("msanderParentHub");
    if(!saved)return;
    const data=JSON.parse(saved);
    if(data.home) state.home={...state.home,...data.home,learning:{...state.home.learning,...(data.home.learning||{})},links:{...state.home.links,...(data.home.links||{})}};
    if(Array.isArray(data.events)) state.events=data.events;
  }catch(err){console.warn("Could not load saved site data",err)}
}
function saveSite(){
  localStorage.setItem("msanderParentHub",JSON.stringify({home:state.home,events:state.events}));
  const status=$("editorStatus");
  if(status){status.textContent="Saved on this device ✓";setTimeout(()=>status.textContent="Changes save on this device.",2200)}
}

const translations={en:{weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},fr:{weekdays:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]}};

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function toISO(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate(),12).toISOString().slice(0,10)}
function fromISO(iso){const [y,m,d]=iso.split("-").map(Number);return new Date(y,m-1,d,12)}
function formatDate(iso,opts={month:"short",day:"numeric"}){return fromISO(iso).toLocaleDateString(state.language==="fr"?"fr-CA":"en-CA",opts)}
function getSpsdEventsForDate(date){return spsdCalendar2026_27.filter(ev=>ev.date===date)}
function combinedEvents(){return [
  ...spsdCalendar2026_27.map((e,i)=>({...e,id:`spsd-${i}`,name:e.detail,icon:e.spsdType==="noschool"?"🏠":e.spsdType==="break"?"🌤️":e.spsdType==="conference"?"💬":"⭐",official:true})),
  ...state.events
].sort((a,b)=>a.date.localeCompare(b.date))}
function isSpsdSchoolYearVisible(){const y=state.cursor.getFullYear(),m=state.cursor.getMonth();return(y===2026&&m>=7)||(y===2027&&m<=5)}

function applyTheme(month,home=false){
  const t=monthThemes[month];
  document.body.className=document.body.className.replace(/month-font-\d+/g,"").trim();
  document.body.classList.add(`month-font-${month}`);
  const root=home?$("homeHero"):$("calendarView");
  root.style.setProperty("--theme-accent",t.accent);
  root.style.setProperty("--theme-soft",t.soft);
  root.style.setProperty("--theme-deep",t.deep);
  if(home){
    const monthName = new Date(2026, month, 1).toLocaleDateString(state.language==="fr"?"fr-CA":"en-CA",{month:"long"});
    $("homeThemeName").textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    $("homeScene").innerHTML=t.icons.map(i=>`<span class="scene-icon">${i}</span>`).join("");
  } else {
    const monthName = new Date(2026, month, 1).toLocaleDateString(state.language==="fr"?"fr-CA":"en-CA",{month:"long"});
    $("themeName").textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    $("themeScene").innerHTML=t.icons.map(i=>`<span class="scene-icon">${i}</span>`).join("");
  }
}

function renderRole(){
  document.querySelectorAll(".teacher-only").forEach(el=>el.classList.toggle("hidden",state.role!=="teacher"));
  document.querySelectorAll(".parent-only").forEach(el=>el.classList.toggle("hidden",state.role!=="parent"));
  if(state.role==="parent"&&["edit"].includes(state.view))showView("home");
  
}

function showView(name){
  state.view=name;
  document.querySelectorAll(".view").forEach(el=>el.classList.add("hidden"));
  const map={home:"homeView",calendar:"calendarView",edit:"editView"};
  $(map[name]).classList.remove("hidden");
  
function renderEditorEvents(){
  const box=$("editorEventList");
  if(!box)return;
  const events=[...state.events].sort((a,b)=>a.date.localeCompare(b.date));
  if(!events.length){
    box.innerHTML='<div class="empty-state">No class events yet. Add one using the form.</div>';
    return;
  }
  box.innerHTML=events.map(ev=>`
    <div class="editor-event-row">
      <div class="editor-event-date">${formatDate(ev.date,{month:"short",day:"numeric"})}</div>
      <div class="editor-event-main"><strong>${ev.icon} ${escapeHtml(ev.name)}</strong><small>${escapeHtml(ev.category)}</small></div>
      <button class="danger-text delete-editor-event" data-id="${ev.id}" type="button">Delete</button>
    </div>`).join("");
  document.querySelectorAll(".delete-editor-event").forEach(btn=>btn.addEventListener("click",()=>{
    state.events=state.events.filter(ev=>String(ev.id)!==btn.dataset.id);
    saveSite();renderEditorEvents();renderHome();renderCalendar();
  }));
}

function showEditorPanel(name){
  document.querySelectorAll(".editor-panel").forEach(p=>p.classList.add("hidden"));
  document.querySelectorAll(".editor-tab").forEach(t=>t.classList.toggle("active",t.dataset.editorPanel===name));
  const map={homepage:"editorHomepage",learning:"editorLearning",events:"editorEvents",links:"editorLinks"};
  $(map[name]).classList.remove("hidden");
  if(name==="events")renderEditorEvents();
}

document.querySelectorAll(".editor-tab").forEach(btn=>btn.addEventListener("click",()=>showEditorPanel(btn.dataset.editorPanel)));

$("saveHomepageBtn").addEventListener("click",()=>{
  state.home.reminder=$("editReminder").value.trim();
  state.home.classHeading=$("editClassHeading").value.trim()||"Welcome to Our Class";
  state.home.familyNote=$("editFamilyNote").value.trim();
  saveSite();renderHome();
});

$("saveLearningBtn").addEventListener("click",()=>{
  state.home.learning.french=$("editFrench").value.trim();
  state.home.learning.math=$("editMath").value.trim();
  state.home.learning.science=$("editScience").value.trim();
  state.home.learning.focus=$("editFocus").value.trim();
  saveSite();renderHome();
});

$("editorAddEventBtn").addEventListener("click",()=>{
  const date=$("editorEventDate").value;
  const name=$("editorEventName").value.trim();
  if(!date||!name){$("editorStatus").textContent="Add a date and event name first.";return}
  state.events.push({
    id:Date.now(),
    date,
    name,
    category:$("editorEventCategory").value,
    icon:$("editorEventIcon").value
  });
  $("editorEventName").value="";
  saveSite();renderEditorEvents();renderHome();renderCalendar();
});

$("saveLinksBtn").addEventListener("click",()=>{
  state.home.links.school=$("editSchoolLink").value.trim();
  state.home.links.spsd=$("editSpsdLink").value.trim();
  saveSite();
});


function getDayDistanceLabel(iso){
  const target = fromISO(iso);
  target.setHours(0,0,0,0);
  const today = new Date();
  today.setHours(0,0,0,0);
  const diff = Math.round((target - today) / 86400000);

  if(diff === 0) return "Today";
  if(diff === 1) return "Tomorrow";
  if(diff === -1) return "Yesterday";
  if(diff > 1) return `${diff} days away`;
  return `${Math.abs(diff)} days ago`;
}

function showDateHover(dayEl){
  const iso = dayEl.dataset.date;
  const card = $("dateHoverCard");
  if(!iso || !card) return;

  $("hoverDate").textContent = formatDate(iso,{weekday:"long",month:"long",day:"numeric",year:"numeric"});
  $("hoverCount").textContent = getDayDistanceLabel(iso);

  document.querySelectorAll(".day.is-hovered").forEach(el=>{
    if(el !== dayEl) el.classList.remove("is-hovered");
  });
  dayEl.classList.add("is-hovered");

  const wrap = dayEl.closest(".calendar-wrap");
  const dayRect = dayEl.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();

  const left = dayRect.left - wrapRect.left + dayRect.width / 2;
  const top = dayRect.top - wrapRect.top;

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
  card.classList.remove("hidden");
}

function hideDateHover(dayEl){
  if(dayEl) dayEl.classList.remove("is-hovered");
  const card = $("dateHoverCard");
  if(card) card.classList.add("hidden");
}

function wireCalendarHover(){
  document.querySelectorAll(".day").forEach(day=>{
    day.addEventListener("mouseenter",()=>showDateHover(day));
    day.addEventListener("mouseleave",()=>hideDateHover(day));
    day.addEventListener("focusin",()=>showDateHover(day));
    day.addEventListener("focusout",()=>hideDateHover(day));

    day.addEventListener("click",(e)=>{
      if(window.matchMedia("(hover: none)").matches){
        e.stopPropagation();
        const alreadyOpen = day.classList.contains("is-hovered");
        document.querySelectorAll(".day.is-hovered").forEach(el=>el.classList.remove("is-hovered"));
        if(alreadyOpen) hideDateHover(day);
        else showDateHover(day);
      }
    });
  });
}

document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.view===name));
  renderRole();
  if(name==="home")renderHome();
  if(name==="calendar")renderCalendar();
  if(name==="absences")renderAbsences();
  if(name==="edit")populateHomeEditor();
}

function renderHome(){
  const now=new Date(); now.setHours(12,0,0,0);
  applyTheme(now.getMonth(),true);
  $("reminderText").textContent=state.home.reminder;
  $("siteClassHeading").textContent=state.home.classHeading || "Welcome to Our Class";
  $("familyNoteText").textContent=state.home.familyNote || "";
  $("familyNoteText").classList.toggle("hidden",!state.home.familyNote);

  const learning=[
    ["🔤","French / Literacy",state.home.learning.french],
    ["🔢","Math",state.home.learning.math],
    ["🔎","Science / Inquiry",state.home.learning.science],
    ["🤝","Class Focus",state.home.learning.focus]
  ];
  $("learningGrid").innerHTML=learning.map(([icon,label,val])=>`<div class="learning-item"><div class="learning-icon">${icon}</div><div><div class="learning-label">${label}</div><div class="learning-value">${escapeHtml(val)}</div></div></div>`).join("");

  const dow=now.getDay(),diff=(dow===0?-6:1-dow);
  const mon=new Date(now);mon.setDate(now.getDate()+diff);
  const all=combinedEvents();

  $("weekStrip").innerHTML=[0,1,2,3,4].map(i=>{
    const d=new Date(mon);d.setDate(mon.getDate()+i);const iso=toISO(d);
    const evs=all.filter(e=>e.date===iso).slice(0,3);
    const isPast = new Date(d.getFullYear(),d.getMonth(),d.getDate()) < new Date(now.getFullYear(),now.getMonth(),now.getDate());
    return `<div class="week-day ${iso===toISO(now)?"today":""} ${isPast?"past-week-day":""}">
      <div><div class="week-day-name">${d.toLocaleDateString(state.language==="fr"?"fr-CA":"en-CA",{weekday:"short"})}</div><div class="week-date">${d.getDate()}</div></div>
      <div>${evs.length?evs.map(e=>`<span class="week-event">${e.icon||"•"} ${escapeHtml(e.short||e.name)}</span>`).join(""):`<span class="week-empty">Nothing special</span>`}</div>
    </div>`;
  }).join("");

  const upcoming=all.filter(e=>e.date>=toISO(now)).slice(0,5);
  $("comingUpList").innerHTML=upcoming.length?upcoming.map(e=>`<div class="coming-item">
    <div class="coming-date">${formatDate(e.date,{month:"short",day:"numeric"})}</div>
    <div><div class="coming-title">${e.icon||"•"} ${escapeHtml(e.short||e.name)}</div><div class="coming-detail">${escapeHtml(e.detail||e.name)}</div></div>
  </div>`).join(""):`<div class="empty-state">Nothing coming up yet.</div>`;
}

function renderCalendar(){
  applyTheme(state.cursor.getMonth(),false);
  const y=state.cursor.getFullYear(),m=state.cursor.getMonth();
  $("monthTitle").textContent=state.cursor.toLocaleDateString(state.language==="fr"?"fr-CA":"en-CA",{month:"long",year:"numeric"});
  $("weekdays").innerHTML=translations[state.language].weekdays.map(d=>`<div>${d}</div>`).join("");
  const first=new Date(y,m,1),start=new Date(y,m,1-first.getDay()),cells=[];
  for(let i=0;i<42;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);const iso=toISO(d),monthMatch=d.getMonth()===m;
    const dayEvents=state.events.filter(ev=>ev.date===iso),official=getSpsdEventsForDate(iso),primary=official[0];
    const today = new Date(); today.setHours(0,0,0,0);
    const cellDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const isPast = cellDate < today;

    cells.push(`<div class="day ${monthMatch?"":"muted"} ${primary?`official-${primary.spsdType}`:""} ${isPast?"past-day":""}" data-date="${iso}" ${primary?`title="${escapeHtml(primary.detail)}"`:""}>
      <div class="day-top"><div class="day-number">${d.getDate()}</div>${primary?`<span class="day-status">${escapeHtml(primary.short)}</span>`:""}</div>
      <div class="day-events">${dayEvents.map(ev=>`<button class="event ${ev.category}" data-event-id="${ev.id}" title="${escapeHtml(ev.name)}">${ev.icon} ${escapeHtml(ev.name)}</button>`).join("")}</div>
    </div>`);
  }
  $("calendarGrid").innerHTML=cells.join("");
  $("spsdNotice").classList.toggle("hidden",!isSpsdSchoolYearVisible());
  wireCalendarHover();
  if(state.role==="teacher")document.querySelectorAll(".day").forEach(day=>day.addEventListener("dblclick",()=>openEventDialog(day.dataset.date)));
}

function openEventDialog(date=toISO(new Date())){$("eventDate").value=date;$("eventName").value="";$("eventCategory").value="school";$("eventIcon").value="📚";$("eventDialog").showModal()}
function saveEvent(){const date=$("eventDate").value,name=$("eventName").value.trim();if(!date||!name)return;state.events.push({id:Date.now(),date,name,category:$("eventCategory").value,icon:$("eventIcon").value});saveSite();renderCalendar();renderHome()}


function populateHomeEditor(){
  $("editReminder").value=state.home.reminder;
  $("editClassHeading").value=state.home.classHeading||"Welcome to Our Class";
  $("editFamilyNote").value=state.home.familyNote||"";
  $("editFrench").value=state.home.learning.french;
  $("editMath").value=state.home.learning.math;
  $("editScience").value=state.home.learning.science;
  $("editFocus").value=state.home.learning.focus;
  $("editSchoolLink").value=state.home.links.school;
  $("editSpsdLink").value=state.home.links.spsd;
  renderEditorEvents();
}

document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>showView(t.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
$("roleSelect").addEventListener("change",e=>{state.role=e.target.value;showView("home")});
$("langBtn").addEventListener("click",()=>{state.language=state.language==="en"?"fr":"en";$("langBtn").textContent=state.language==="en"?"FR":"EN";renderCalendar()});
$("prevMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()-1,1);renderCalendar()});
$("nextMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()+1,1);renderCalendar()});
$("addEventBtn").addEventListener("click",()=>openEventDialog());
$("printBtn").addEventListener("click",()=>window.print());
$("saveEventBtn").addEventListener("click",e=>{if(!$("eventDate").value||!$("eventName").value.trim()){e.preventDefault();return}saveEvent()});
$("schoolSiteBtn").addEventListener("click",()=>window.open(state.home.links.school,"_blank"));
$("spsdBtn").addEventListener("click",()=>window.open(state.home.links.spsd,"_blank"));


function runWelcomeSplash(){
  const splash = $("welcomeSplash");
  if(!splash) return;
  window.setTimeout(()=>splash.classList.add("is-leaving"), 2250);
  window.setTimeout(()=>splash.remove(), 3150);
}

loadSavedSite();runWelcomeSplash();renderRole();renderHome();renderCalendar();


document.addEventListener("click",(e)=>{
  if(!e.target.closest(".day")){
    document.querySelectorAll(".day.is-hovered").forEach(el=>el.classList.remove("is-hovered"));
    const card=$("dateHoverCard");
    if(card) card.classList.add("hidden");
  }
});
