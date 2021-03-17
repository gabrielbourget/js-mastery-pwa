const CACHE_NAME = "version_1";
const urlsToCache = [ "index.html", "offline.html" ];

const self = this;

// -> Installation of the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened the cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// -> Listening for requests
self.addEventListener("fetch", (event) => {

});

// -> Activate the service worker
self.addEventListener("activate", (event) => {

})