const staticCalcSite = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/math.js",
  "/gear-svgrepo-com.svg",
  "/favicon.ico",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalcSite).then(cache => {
      return cache.addAll(assets)
    })
  )
})
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })

  self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});