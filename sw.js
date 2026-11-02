self.addEventListener('fetch', (event) => {
  // Pass-through network requests for real-time Firebase sync
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});