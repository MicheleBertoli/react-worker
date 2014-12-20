importScripts('dist/build.js');

self.addEventListener('fetch', function(event) {
  if (/\.js$/.test(event.request.url)) {
    _static(event);
  } else {
    _app(event);
  }
});

var options = {
  headers: {
    'Content-Type': 'text/html'
  }
};

function _static(event) {
  event.respondWith(
    fetch(event.request.url)
  );
}

function _app(event) {
  Router.run(Routes, _path(event.request.url), function(Handler) {
    var html = _render(Handler);
    var response = new Response('<!DOCTYPE html>' + html, options);
    event.respondWith(response);
  });
}

function _render(Handler) {
  var handler = React.createFactory(Handler);
  return React.renderToString(handler());
}

function _path(url) {
  return Url.parse(url).path;
}