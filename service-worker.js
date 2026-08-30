const CACHE_NAME = 'windlog-cache-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './config.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Netzwerk zuerst: immer die aktuelle Version laden, wenn online.
// Nur wenn das Netzwerk nicht erreichbar ist (offline), aus dem Cache bedienen.
// So kann die App künftig nie wieder an einer veralteten, zwischengespeicherten
// Version "festhängen", solange eine Internetverbindung besteht.
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  // Supabase-API-Aufrufe nie cachen - immer live vom Netzwerk
  if(event.request.url.includes('supabase.co')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});