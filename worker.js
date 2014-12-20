importScripts('react.js');

self.addEventListener('fetch', function(event) {

  var element = React.createElement('h1', null, 'Hello, world!');
  var html = React.renderToString(element);
  var response = new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  });

  event.respondWith(response);

});