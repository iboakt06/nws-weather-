const a=JSON.parse(localStorage.getItem("alerts"));
const i=localStorage.getItem("selectedAlert");
const d=document.getElementById("detail");
const x=a[i];
d.innerHTML=`<h2>${x.properties.event}</h2>
<p><strong>Bölge:</strong> ${x.properties.areaDesc}</p>
<p>${x.properties.description}</p>`;