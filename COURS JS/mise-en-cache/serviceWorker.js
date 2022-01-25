// METTRE EN Cache
const cacheName = "cache-v1";
const assets = ["/", "/index.html"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// Fetcher le cache
self.addEventListener("fetch", (e) => {
    // console.log(e.request);
    e.respondWith(
        caches.match(e.request).then((cache) => {
            return cache || fetch(e.request);
        })
    );
});