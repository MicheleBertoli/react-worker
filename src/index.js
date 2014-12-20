React = require('react');
Router = require('react-router');
RouteHandler = Router.RouteHandler;
Route = Router.Route;
DefaultRoute = Router.DefaultRoute;

App = React.createClass({
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
            <script src="dist/build.js"></script>
          </body>
        </html>
      );
  }
});

Home = React.createClass({
  render: function() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <a href="about">About</a>
        </div>
      );
  }
});

About = React.createClass({
  render: function() {
    return (
        <h1>About</h1>
      );
  }
});

Routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route path="/about" handler={About} />
  </Route>
);