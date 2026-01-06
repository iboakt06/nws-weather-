fetch("https://api.weather.gov/alerts/active")
.then(r=>r.json())
.then(d=>{
localStorage.setItem("alerts",JSON.stringify(d.features));
const c=document.getElementById("alerts");
d.features.forEach((a,i)=>{
c.innerHTML+=`<div class="col-md-4">
<div class="card mb-3 shadow">
<div class="card-body">
<h5>${a.properties.event}</h5>
<p><strong>Bölge:</strong> ${a.properties.areaDesc}</p>
<button class="btn btn-danger" onclick="go(${i})">Detay</button>
</div></div></div>`;
});
})
.catch(()=>{
const s=JSON.parse(localStorage.getItem("alerts"))||[];
const c=document.getElementById("alerts");
s.forEach(a=>{
c.innerHTML+=`<div class="col-md-4"><div class="card mb-3"><div class="card-body">
<h5>${a.properties.event}</h5><p>${a.properties.areaDesc}</p><small>Offline</small>
</div></div></div>`;
});
});
function go(i){
localStorage.setItem("selectedAlert",i);
location.href="detail.html";
}