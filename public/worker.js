/*global caches self fetch Router Routes Response React Url*/

importScripts('serviceworker-cache-polyfill.js');
importScripts('build.js');

var pagesCache = 'pages';
var options = {
    headers: {
        'Content-Type': 'text/html'
    }
};

self.addEventListener('fetch', function(event) {
    if (/\.js$/.test(event.request.url)) {
        _static(event);
    } else {
        _app(event);
    }
});

// we use activate here since we want to perform a full clean
// each time build.js is updated, and this happens during SW 
// update -- in the future we might use caches.delete -- not yet implemented
self.addEventListener('activate', function(event) {
    caches.open(pagesCache).then(function(cache) {
        cache.keys().then(function(requests) {
            requests.forEach(function(request) {
                cache.delete(request);
            });
        });
    });
});

function _static(event) {
    event.respondWith(
        fetch(event.request.url)
    );
}

function _app(event) {
    event.respondWith(
        caches.match(event.request).then(function(page) {
            return page || new Promise(function(resolve, reject) {
                Router.run(Routes, _path(event.request.url), function(Handler) {
                    var html = _render(Handler);
                    var response = new Response('<!DOCTYPE html>' + html, options);
                    _storeResponse(pagesCache, event.request, response);
                    resolve(response);
                });
            });
        })
    );
}

function _storeResponse(cacheName, request, response) {
    return caches.open(cacheName).then(function(cache) {
        return cache.put(request, response.clone());
    });
}

function _render(Handler) {
    var handler = React.createFactory(Handler);
    return React.renderToString(handler());
}

function _path(url) {
    return Url.parse(url).path;
}