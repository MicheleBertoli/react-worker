importScripts('dist/build.js');

self.addEventListener('fetch', function(event) {
  if (/\.js$/.test(event.request.url)) {
    _static(event);
  } else {
    _render(event);
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

function _render(event) {
  Router.run(Routes, _path(event.request.url), function(Handler) {
    var html = _compile(Handler);
    var response = new Response('<!DOCTYPE html>' + html, options);
    event.respondWith(response);
  });
}

function _compile(Handler) {
  var handler = React.createFactory(Handler);
  return React.renderToString(handler());
}

function _path(url) {
  return '/' + url.split('/').pop();
}