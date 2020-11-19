self.addEventListener('message', event => {
    this.clients.matchAll()
        .then(clients => {
            clients.forEach(client => client.postMessage('Enchanté, je suis le service worker'));
        });
});

/*self.addEventListener('install',function(event){
    event.waitUntil(caches.open('nom_du_cache').then(cache=>{
        Returncache.addAll(['/index.html','/style.css', 'script.js']);
    })); 
});

self.addEventListener('fetch',function(e){
    e.respondWith(caches.open('nom_du_cache').then(cache=>cache.match(e.request)).then(function (response){
        return response || fetch(e.request);
    })); 
});*/


console.log(navigator.onLine ? 'online' : 'offline')
/*self.addEventListener('activate', function(event){
    event.waitUntil(…);
});*/





