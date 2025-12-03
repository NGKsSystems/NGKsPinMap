// NGKs Pin Map - Service Worker for offline support
const CACHE_NAME = 'ngks-pinmap-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/styles.css',
    '/manifest.json',
    '/uscities.csv',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache).catch(() => {
                // Some resources may fail (like external CDN), that's okay
                console.log('Some resources failed to cache, app will still work');
            });
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(response => {
            // Return cached version if available
            if (response) {
                return response;
            }

            // Otherwise fetch from network
            return fetch(event.request).then(response => {
                // Don't cache non-successful responses
                if (!response || response.status !== 200 || response.type === 'basic' && event.request.url.includes('nominatim')) {
                    return response;
                }

                // Cache successful responses
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Return offline page or cached response
                return caches.match(event.request);
            });
        })
    );
});
