importScripts('dist/build.js');

self.addEventListener('fetch', function(event) {

  if (/\.js$/.test(event.request.url)) {
    _static(event);
  } else {
    _app(event);
  }

});

function _static(event) {

  event.respondWith(
    fetch(event.request.url)
  );

}

function _app(event) {

  var helloMessage = React.createFactory(HelloMessage);
  var html = React.renderToString(helloMessage());
  var response = new Response('<!DOCTYPE html>' + html, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
  event.respondWith(response);

}