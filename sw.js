/* Aura Music Signature — GitHub Pages compatible */
const CACHE_NAME='aura-music-signature-v11-library-grid';
const ASSET_PATHS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg'];
const assetURL=path=>new URL(path,self.registration.scope).href;
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSET_PATHS.map(assetURL))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('aura-music-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const requestURL=new URL(event.request.url);
 if(requestURL.origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>{
  if(cached)return cached;
  return fetch(event.request).then(response=>{
   if(response.ok&&requestURL.origin===self.location.origin){
    const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
   }
   return response;
  }).catch(()=>caches.match(assetURL('./index.html')));
 }));
});
