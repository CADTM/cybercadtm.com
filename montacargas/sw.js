// Service worker: permite instalar las apps y abrirlas sin internet.
// Los datos de cada dispositivo viven en su propio navegador (localStorage), no aquí.
const CACHE = 'mx3-montacargas-v1';
const FILES = [
  './', './index.html', './cliente.html',
  './manifest-servidor.json', './manifest-cliente.json',
  './icon-servidor-192.png', './icon-servidor-512.png',
  './icon-cliente-192.png', './icon-cliente-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero la red (para recibir actualizaciones); si no hay internet, la copia guardada.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
