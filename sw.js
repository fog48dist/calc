
var repoPath = '/calc';
var assets = [    
  `${repoPath}/`,
  `${repoPath}/index.html`,
  `${repoPath}/math.js`,
  `${repoPath}/gear-svgrepo-com.svg`,
]

const cacheName ="calc_cache_003"

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets)
    })
  )
})

  self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
