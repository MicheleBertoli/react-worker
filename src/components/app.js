var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
        <html>
          <head>
            <title>
              React Worker
            </title>
          </head>
          <body>
            <RouteHandler />
            <script src="/build.js"></script>
          </body>
        </html>
      );
  }
});

module.exports = App;