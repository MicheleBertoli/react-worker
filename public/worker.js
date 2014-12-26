importScripts('serviceworker-cache-polyfill.js');
importScripts('build.js');

var cacheKey = 'pages';
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

self.addEventListener('activate', function() {
  caches.open(cacheKey).then(function(cache) {
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
      return page || _route(event);
    })
  );
}

function _route(event) {
  return new Promise(function(resolve) {
    Router.run(Routes, _path(event.request.url), function(Handler) {
      var html = _render(Handler);
      var response = new Response('<!DOCTYPE html>' + html, options);
      _store(event.request, response);
      resolve(response);
    });
  });
}

function _path(url) {
  return Url.parse(url).path;
}

function _render(Handler) {
  var handler = React.createFactory(Handler);
  return React.renderToString(handler());
}

function _store(request, response) {
  return caches.open(cacheKey).then(function(cache) {
    return cache.put(request, response.clone());
  });
}