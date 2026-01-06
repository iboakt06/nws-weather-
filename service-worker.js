const cacheName="nws-cache-v2";
const files=["index.html","alerts.html","detail.html","css/style.css","js/alerts.js"];
self.addEventListener("install",e=>{
e.waitUntil(caches.open(cacheName).then(c=>c.addAll(files)));
});
self.addEventListener("fetch",e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});