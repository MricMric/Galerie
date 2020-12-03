const cacheName = "Gallerie";

const files = [
    "/",
    "/script.js",
    "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css",
    "style.css",
    "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@700&display=swap",
    "https://bulma.io/images/placeholders/1280x960.png",
    "https://bulma.io/images/placeholders/96x96.png",
    "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
];


self.addEventListener("install", e => {
    caches.open(cacheName).then(cache => {
        cache.addAll(files);
    });
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(
                keyList.map(function (key) {
                    if (key !== cacheName) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(e.request.url);
});

self.addEventListener("fetch", event => {
    const url = event.request.url;

    if (url.indexOf("https://https://quirky-kirch-74f858.netlify.app/images.json") === 0) {
        event.respondWith(
            fetch(event.request).then(response => {
                if (response.status === 200) {
                    console.info("Formatting data");
                    return response.json().then(json => {
                        const formattedResponse = json.map(j => ({
                            src: j.src,
                            alt: j.alt,
                            title: j.title
                        }));

                        return new Response(JSON.stringify(formattedResponse));
                    });

                } else {
                    console.error(
                        "Service Worker",
                        "Error when fetching",
                        event.request.url
                    );

                    return response;
                }
            })
        );

    } else {
        event.respondWith(
            caches
                .open(cacheName)
                .then(cache => cache.match(event.request))
                .then(response => response || fetch(event.request))
        );
    }
});



/*self.addEventListener('message', event => {
    this.clients.matchAll()
        .then(clients => {
            clients.forEach(client => client.postMessage('Enchanté, je suis le service worker'));
        });
});

self.addEventListener('fetch', event => {
    console.log('PWA!!!!');
});

self.addEventListener('install', event => {
    event.waitUntil(Promise.resolve('Install phase succeed'));
});*/


