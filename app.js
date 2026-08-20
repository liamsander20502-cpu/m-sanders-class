const state={
  view:"home",
  cursor:new Date(2026,7,1),
  home:{
    heading:"Welcome to Our Class",
    reminder:"Please send indoor shoes, a filled water bottle, lunch kit, and backpack each day.",
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
  events:[]
};

const official=[
{date:"2026-09-02",short:"First Day",detail:"First day of school — elementary students attend in the morning",type:"milestone"},
{date:"2026-09-07",short:"No School",detail:"Labour Day — no school",type:"noschool"},
{date:"2026-09-30",short:"No School",detail:"National Day for Truth and Reconciliation — no school",type:"noschool"},
{date:"2026-10-09",short:"No School",detail:"Professional development day — no school for students",type:"noschool"},
{date:"2026-10-12",short:"No School",detail:"Thanksgiving — no school",type:"noschool"},
{date:"2026-10-22",short:"Conferences",detail:"Three-way conferences — no school in the afternoon",type:"conference"},
{date:"2026-10-23",short:"Conferences",detail:"Three-way conferences — no school",type:"conference"},
{date:"2026-11-11",short:"No School",detail:"Remembrance Day — no school",type:"noschool"},
{date:"2026-11-27",short:"No School",detail:"Professional development / planning day — no school for students",type:"noschool"},
{date:"2026-12-21",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-22",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-23",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-24",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-25",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-28",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-29",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-30",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2026-12-31",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2027-01-01",short:"Winter Break",detail:"Winter break",type:"break"},
{date:"2027-01-04",short:"Classes Resume",detail:"Classes resume after winter break",type:"milestone"},
{date:"2027-01-22",short:"No School",detail:"Professional development / planning day — no school for students",type:"noschool"},
{date:"2027-02-05",short:"Report Cards",detail:"Elementary report cards available",type:"conference"},
{date:"2027-02-15",short:"No School",detail:"Family Day — no school",type:"noschool"},
{date:"2027-02-16",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-17",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-18",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-19",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-03-18",short:"Conferences",detail:"Three-way conferences — no school in the afternoon",type:"conference"},
{date:"2027-03-19",short:"Conferences",detail:"Three-way conferences — no school",type:"conference"},
{date:"2027-03-26",short:"No School",detail:"Good Friday — no school",type:"noschool"},
{date:"2027-03-29",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-03-30",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-03-31",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-04-01",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-04-02",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-05-21",short:"No School",detail:"Professional development / planning day — no school for students",type:"noschool"},
{date:"2027-05-24",short:"No School",detail:"Victoria Day — no school",type:"noschool"},
{date:"2027-06-14",short:"No School",detail:"Professional development / planning day — no school for students",type:"noschool"},
{date:"2027-06-29",short:"Last Day",detail:"Last day of school for Kindergarten to Grade 8 students",type:"milestone"}
];

const monthThemes=[
{bg:"#f5fbff",accent:"#2f5678",font:'Georgia,"Times New Roman",serif',icons:["❄️","⛄","🧤","📘","✨"]},
{bg:"#fff4f8",accent:"#8b4660",font:'"Segoe Print","Comic Sans MS",cursive',icons:["💗","💌","🫶","✏️","🌟"]},
{bg:"#f3faef",accent:"#3d6d46",font:'"Trebuchet MS","Segoe UI",sans-serif',icons:["🌱","☘️","🌷","🐦","🌿"]},
{bg:"#eff7fc",accent:"#3c6384",font:'Georgia,"Times New Roman",serif',icons:["☂️","🌧️","📚","🌈","💧"]},
{bg:"#faf3fb",accent:"#664d79",font:'"Segoe Print","Comic Sans MS",cursive',icons:["🌷","🐝","🌼","🦋","🌸"]},
{bg:"#fff9e8",accent:"#8a621d",font:'"Trebuchet MS","Segoe UI",sans-serif',icons:["☀️","🍓","🕶️","🍦","⭐"]},
{bg:"#eefafb",accent:"#246477",font:'"Trebuchet MS","Segoe UI",sans-serif',icons:["🏖️","☀️","🍉","🌊","🐚"]},
{bg:"#fff5e8",accent:"#8a5425",font:'"Segoe Print","Trebuchet MS",sans-serif',icons:["🎒","✏️","📚","🍎","📏"]},
{bg:"#fbf2e7",accent:"#754421",font:'Georgia,"Times New Roman",serif',icons:["🍎","🍂","📓","✏️","🍁"]},
{bg:"#f7effa",accent:"#583166",font:'"Arial Black","Trebuchet MS",sans-serif',icons:["🎃","👻","🦇","🍬","🌙"]},
{bg:"#f6efe5",accent:"#654824",font:'Georgia,"Times New Roman",serif',icons:["🍁","🧣","🍂","📚","🌰"]},
{bg:"#eff8f8",accent:"#2f5759",font:'Georgia,"Times New Roman",serif',icons:["❄️","⛄","🧤","✨","🎁"]}
];

const $=id=>document.getElementById(id);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function toISO(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate(),12).toISOString().slice(0,10)}
function fromISO(s){const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12)}
function fmt(s,opts={month:"short",day:"numeric"}){return fromISO(s).toLocaleDateString("en-CA",opts)}
function combined(){return[
  ...official.map((e,i)=>({...e,id:`off-${i}`,name:e.detail,icon:e.type==="noschool"?"🏠":e.type==="break"?"🌤️":e.type==="conference"?"💬":"⭐",official:true})),
  ...state.events
].sort((a,b)=>a.date.localeCompare(b.date))}

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem("msanderFullHub")||"{}");
    if(saved.home) state.home={...state.home,...saved.home,learning:{...state.home.learning,...(saved.home.learning||{})},links:{...state.home.links,...(saved.home.links||{})}};
    if(Array.isArray(saved.events)) state.events=saved.events;
  }catch(e){}
}
function save(){
  localStorage.setItem("msanderFullHub",JSON.stringify({home:state.home,events:state.events}));
  if($("saveStatus")){
    $("saveStatus").textContent="Saved ✓";
    setTimeout(()=>$("saveStatus").textContent="Saved on this device",1800);
  }
}

function applyTheme(month){
  const t=monthThemes[month];
  [$("homeHero"),$("calendarSurface")].forEach(el=>{
    if(el)el.style.background=`linear-gradient(135deg,${t.bg},#fff)`;
  });
  $("homeMonth").style.color=t.accent;$("homeMonth").style.fontFamily=t.font;
  $("calendarMonth").style.color=t.accent;$("calendarMonth").style.fontFamily=t.font;
  $("homeIcons").innerHTML=t.icons.map(i=>`<span class="hero-icon">${i}</span>`).join("");
}

function showView(name){
  state.view=name;
  ["home","calendar","editor"].forEach(v=>{
    $(`${v}View`).classList.toggle("hidden",v!==name);
  });
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  if(name==="home")renderHome();
  if(name==="calendar")renderCalendar();
  if(name==="editor")populateEditor();
}

function renderHome(){
  const now=new Date();now.setHours(12,0,0,0);
  applyTheme(now.getMonth());
  $("homeMonth").textContent=now.toLocaleDateString("en-CA",{month:"long"});
  $("siteHeading").textContent=state.home.heading;
  $("reminderText").textContent=state.home.reminder;
  $("familyNote").textContent=state.home.familyNote;
  $("familyNote").classList.toggle("hidden",!state.home.familyNote);

  const learning=[
    ["🔤","French / Literacy",state.home.learning.french],
    ["🔢","Math",state.home.learning.math],
    ["🔎","Science / Inquiry",state.home.learning.science],
    ["🤝","Class Focus",state.home.learning.focus]
  ];
  $("learningGrid").innerHTML=learning.map(([icon,label,val])=>`
    <div class="learning-item">
      <div class="learning-icon">${icon}</div>
      <div><div class="learning-label">${label}</div><div class="learning-value">${esc(val)}</div></div>
    </div>`).join("");

  const dow=now.getDay(),diff=dow===0?-6:1-dow,mon=new Date(now);mon.setDate(now.getDate()+diff);
  const all=combined();
  $("weekStrip").innerHTML=[0,1,2,3,4].map(i=>{
    const d=new Date(mon);d.setDate(mon.getDate()+i);const iso=toISO(d);
    const evs=all.filter(e=>e.date===iso).slice(0,3);
    return `<div class="week-day ${iso===toISO(now)?"today":""}">
      <div><div class="week-name">${d.toLocaleDateString("en-CA",{weekday:"short"})}</div><div class="week-date">${d.getDate()}</div></div>
      <div>${evs.length?evs.map(e=>`<span class="week-event">${e.icon||"•"} ${esc(e.short||e.name)}</span>`).join(""):`<span class="week-empty">Nothing special</span>`}</div>
    </div>`;
  }).join("");

  const upcoming=all.filter(e=>e.date>=toISO(now)).slice(0,5);
  $("comingUpList").innerHTML=upcoming.map(e=>`
    <div class="coming-item">
      <div class="coming-date">${fmt(e.date)}</div>
      <div><div class="coming-title">${e.icon||"•"} ${esc(e.short||e.name)}</div><div class="coming-detail">${esc(e.detail||e.name)}</div></div>
    </div>`).join("") || '<div class="empty">Nothing coming up yet.</div>';
}

function renderCalendar(){
  const y=state.cursor.getFullYear(),m=state.cursor.getMonth();
  applyTheme(m);
  $("calendarMonth").textContent=state.cursor.toLocaleDateString("en-CA",{month:"long"});
  $("calendarMonthYear").textContent=state.cursor.toLocaleDateString("en-CA",{month:"long",year:"numeric"});
  const first=new Date(y,m,1,12),start=new Date(y,m,1-first.getDay(),12),today=new Date();today.setHours(0,0,0,0);
  let html="";
  for(let i=0;i<42;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const date=toISO(d),off=official.find(e=>e.date===date),mine=state.events.filter(e=>e.date===date);
    const past=new Date(d.getFullYear(),d.getMonth(),d.getDate())<today;
    html+=`<div class="day ${d.getMonth()===m?"":"other"} ${off?`official-${off.type}`:""} ${past?"past-day":""}">
      <div class="day-top">
        <div class="day-number">${d.getDate()}</div>
        ${off?`<div class="day-label" title="${esc(off.detail)}">${esc(off.short)}</div>`:""}
      </div>
      <div class="day-events">${mine.map(e=>`<div class="event">${e.icon} ${esc(e.name)}</div>`).join("")}</div>
    </div>`;
  }
  $("calendarGrid").innerHTML=html;
}

function renderEventList(){
  if(!state.events.length){$("editorEventList").innerHTML='<div class="empty">No class events yet.</div>';return}
  $("editorEventList").innerHTML=[...state.events].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>`
    <div class="event-row">
      <div class="event-date">${fmt(e.date)}</div>
      <div class="event-main">${e.icon} ${esc(e.name)}</div>
      <button class="delete-btn" data-id="${e.id}">Delete</button>
    </div>`).join("");
  document.querySelectorAll(".delete-btn").forEach(btn=>btn.addEventListener("click",()=>{
    state.events=state.events.filter(e=>String(e.id)!==btn.dataset.id);
    save();renderEventList();renderHome();renderCalendar();
  }));
}

function populateEditor(){
  $("editReminder").value=state.home.reminder;
  $("editHeading").value=state.home.heading;
  $("editFamilyNote").value=state.home.familyNote;
  $("editFrench").value=state.home.learning.french;
  $("editMath").value=state.home.learning.math;
  $("editScience").value=state.home.learning.science;
  $("editFocus").value=state.home.learning.focus;
  $("editSchoolLink").value=state.home.links.school;
  $("editSpsdLink").value=state.home.links.spsd;
  renderEventList();
}

function addEvent(date,name,icon){
  if(!date||!name.trim())return false;
  state.events.push({id:Date.now(),date,name:name.trim(),icon});
  save();renderEventList();renderHome();renderCalendar();
  return true;
}

document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
document.querySelectorAll(".editor-tab").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".editor-tab").forEach(x=>x.classList.toggle("active",x===b));
  const map={home:"editorHome",learning:"editorLearning",events:"editorEvents",links:"editorLinks"};
  Object.values(map).forEach(id=>$(id).classList.add("hidden"));
  $(map[b.dataset.panel]).classList.remove("hidden");
  if(b.dataset.panel==="events")renderEventList();
}));

$("prevMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()-1,1);renderCalendar()});
$("nextMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()+1,1);renderCalendar()});
$("addEventBtn").addEventListener("click",()=>{$("dialogDate").value=toISO(new Date());$("dialogName").value="";$("eventDialog").showModal()});
$("dialogSave").addEventListener("click",e=>{if(!addEvent($("dialogDate").value,$("dialogName").value,$("dialogIcon").value)){e.preventDefault()}});
$("editorAddEvent").addEventListener("click",()=>{if(addEvent($("editorDate").value,$("editorName").value,$("editorIcon").value))$("editorName").value=""});
$("saveHomeBtn").addEventListener("click",()=>{
  state.home.reminder=$("editReminder").value.trim();
  state.home.heading=$("editHeading").value.trim()||"Welcome to Our Class";
  state.home.familyNote=$("editFamilyNote").value.trim();
  save();renderHome();
});
$("saveLearningBtn").addEventListener("click",()=>{
  state.home.learning.french=$("editFrench").value.trim();
  state.home.learning.math=$("editMath").value.trim();
  state.home.learning.science=$("editScience").value.trim();
  state.home.learning.focus=$("editFocus").value.trim();
  save();renderHome();
});
$("saveLinksBtn").addEventListener("click",()=>{
  state.home.links.school=$("editSchoolLink").value.trim();
  state.home.links.spsd=$("editSpsdLink").value.trim();
  save();
});
$("schoolSiteBtn").addEventListener("click",()=>window.open(state.home.links.school,"_blank"));
$("spsdBtn").addEventListener("click",()=>window.open(state.home.links.spsd,"_blank"));

load();
renderHome();
renderCalendar();
renderEventList();
setTimeout(()=>{const splash=$("welcomeSplash");if(splash)splash.remove()},4000);
