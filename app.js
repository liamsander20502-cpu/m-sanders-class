const state={
  cursor:new Date(2026,7,1),
  events:[]
};

const official=[
{date:"2026-09-02",short:"First Day",detail:"First day of school",type:"milestone"},
{date:"2026-09-07",short:"No School",detail:"Labour Day",type:"noschool"},
{date:"2026-09-30",short:"No School",detail:"Truth and Reconciliation Day",type:"noschool"},
{date:"2026-10-09",short:"No School",detail:"PD day",type:"noschool"},
{date:"2026-10-12",short:"No School",detail:"Thanksgiving",type:"noschool"},
{date:"2026-10-22",short:"Conferences",detail:"Three-way conferences — no school PM",type:"conference"},
{date:"2026-10-23",short:"Conferences",detail:"Three-way conferences — no school",type:"conference"},
{date:"2026-11-11",short:"No School",detail:"Remembrance Day",type:"noschool"},
{date:"2026-11-27",short:"No School",detail:"PD / planning day",type:"noschool"},
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
{date:"2027-01-04",short:"Classes Resume",detail:"Classes resume",type:"milestone"},
{date:"2027-01-22",short:"No School",detail:"PD / planning day",type:"noschool"},
{date:"2027-02-05",short:"Report Cards",detail:"Report cards available",type:"conference"},
{date:"2027-02-15",short:"No School",detail:"Family Day",type:"noschool"},
{date:"2027-02-16",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-17",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-18",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-02-19",short:"Feb. Break",detail:"February break",type:"break"},
{date:"2027-03-18",short:"Conferences",detail:"Three-way conferences — no school PM",type:"conference"},
{date:"2027-03-19",short:"Conferences",detail:"Three-way conferences — no school",type:"conference"},
{date:"2027-03-26",short:"No School",detail:"Good Friday",type:"noschool"},
{date:"2027-03-29",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-03-30",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-03-31",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-04-01",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-04-02",short:"Spring Break",detail:"Spring break",type:"break"},
{date:"2027-05-21",short:"No School",detail:"PD / planning day",type:"noschool"},
{date:"2027-05-24",short:"No School",detail:"Victoria Day",type:"noschool"},
{date:"2027-06-14",short:"No School",detail:"PD / planning day",type:"noschool"},
{date:"2027-06-29",short:"Last Day",detail:"Last day for K–8 students",type:"milestone"}
];

const $=id=>document.getElementById(id);
function iso(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate(),12).toISOString().slice(0,10)}
function fromISO(s){const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12)}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function fmt(s){return fromISO(s).toLocaleDateString("en-CA",{month:"short",day:"numeric"})}

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem("msanderCalendar")||"{}");
    if(Array.isArray(saved.events))state.events=saved.events;
  }catch(e){}
}
function save(){localStorage.setItem("msanderCalendar",JSON.stringify({events:state.events}))}

function show(view){
  ["home","calendar","editor"].forEach(v=>{
    $(`${v}View`).classList.toggle("hidden",v!==view);
    $(`${v}Tab`).classList.toggle("active",v===view);
  });
  if(view==="calendar")renderCalendar();
  if(view==="editor")renderEditor();
}

function themeMonth(month){
  const surface=$("calendarSurface");
  const styles=[
    ["#f7fbff","#2f5678",'Georgia,"Times New Roman",serif'],
    ["#fff4f8","#8b4660",'"Segoe Print","Comic Sans MS",cursive'],
    ["#f3faef","#3d6d46",'"Trebuchet MS","Segoe UI",sans-serif'],
    ["#eff7fc","#3c6384",'Georgia,"Times New Roman",serif'],
    ["#faf3fb","#664d79",'"Segoe Print","Comic Sans MS",cursive'],
    ["#fff9e8","#8a621d",'"Trebuchet MS","Segoe UI",sans-serif'],
    ["#eefafb","#246477",'"Trebuchet MS","Segoe UI",sans-serif'],
    ["#fff5e8","#8a5425",'"Segoe Print","Trebuchet MS",sans-serif'],
    ["#fbf2e7","#754421",'Georgia,"Times New Roman",serif'],
    ["#f7effa","#583166",'"Arial Black","Trebuchet MS",sans-serif'],
    ["#f6efe5","#654824",'Georgia,"Times New Roman",serif'],
    ["#eff8f8","#2f5759",'Georgia,"Times New Roman",serif']
  ][month];
  surface.style.background=`linear-gradient(135deg,${styles[0]},#fff)`;
  $("monthHeading").style.color=styles[1];
  $("monthHeading").style.fontFamily=styles[2];
}

function renderCalendar(){
  const y=state.cursor.getFullYear(),m=state.cursor.getMonth();
  themeMonth(m);
  $("monthHeading").textContent=state.cursor.toLocaleDateString("en-CA",{month:"long"});
  const first=new Date(y,m,1,12);
  const start=new Date(y,m,1-first.getDay(),12);
  const today=new Date();today.setHours(0,0,0,0);
  let html="";
  for(let i=0;i<42;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const date=iso(d);
    const isPast=new Date(d.getFullYear(),d.getMonth(),d.getDate())<today;
    const off=official.find(e=>e.date===date);
    const mine=state.events.filter(e=>e.date===date);
    html+=`<div class="day ${d.getMonth()===m?"":"other"} ${off?`official-${off.type}`:""} ${isPast?"past-day":""}">
      <div class="day-top">
        <div class="day-number">${d.getDate()}</div>
        ${off?`<div class="day-label" title="${esc(off.detail)}">${esc(off.short)}</div>`:""}
      </div>
      <div class="day-events">
        ${mine.map(e=>`<div class="event">${e.icon} ${esc(e.name)}</div>`).join("")}
      </div>
    </div>`;
  }
  $("calendarGrid").innerHTML=html;
}

function renderEditor(){
  if(!state.events.length){
    $("eventList").innerHTML='<div class="empty">No class events yet.</div>';
    return;
  }
  $("eventList").innerHTML=[...state.events].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>`
    <div class="event-row">
      <div class="event-date">${fmt(e.date)}</div>
      <div class="event-main">${e.icon} ${esc(e.name)}</div>
      <button class="delete" data-id="${e.id}">Delete</button>
    </div>`).join("");
  document.querySelectorAll(".delete").forEach(b=>b.addEventListener("click",()=>{
    state.events=state.events.filter(e=>String(e.id)!==b.dataset.id);
    save();renderEditor();renderCalendar();
  }));
}

function addEvent(date,name,icon){
  if(!date||!name.trim())return;
  state.events.push({id:Date.now(),date,name:name.trim(),icon});
  save();renderCalendar();renderEditor();
}

$("homeTab").addEventListener("click",()=>show("home"));
$("calendarTab").addEventListener("click",()=>show("calendar"));
$("editorTab").addEventListener("click",()=>show("editor"));
$("openCalendarFromHome").addEventListener("click",()=>show("calendar"));
$("prevMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()-1,1);renderCalendar()});
$("nextMonth").addEventListener("click",()=>{state.cursor=new Date(state.cursor.getFullYear(),state.cursor.getMonth()+1,1);renderCalendar()});
$("addEventBtn").addEventListener("click",()=>{$("dialogDate").value=iso(new Date());$("dialogName").value="";$("eventDialog").showModal()});
$("dialogSave").addEventListener("click",e=>{if(!$("dialogDate").value||!$("dialogName").value.trim()){e.preventDefault();return}addEvent($("dialogDate").value,$("dialogName").value,$("dialogIcon").value)});
$("editorAdd").addEventListener("click",()=>{addEvent($("editorDate").value,$("editorName").value,$("editorIcon").value);$("editorName").value=""});

load();
renderCalendar();
renderEditor();
setTimeout(()=>{const s=$("welcomeSplash");if(s)s.remove()},3300);
