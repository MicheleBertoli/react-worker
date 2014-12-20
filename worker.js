importScripts('dist/build.js');

self.addEventListener('fetch', function(event) {

  var html = React.renderToString(HelloMessage());
  var response = new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  });

  event.respondWith(response);

});