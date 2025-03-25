const CACHE_NAME = 'students-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/main.jsx',
  '/src/App.jsx',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache
        .addAll(urlsToCache)
        .catch(err => console.error('Caching failed:', err));
    }),
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => caches.match('/index.html')),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name)),
      );
    }),
  );
});
