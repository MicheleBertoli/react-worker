React = require('react');
Router = require('react-router');
Url = require('url');

var RouteHandler = Router.RouteHandler,
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  State = Router.State;

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
            <script src="/dist/build.js"></script>
          </body>
        </html>
      );
  }
});

var Home = React.createClass({
  render: function() {
    return (
        <div>
          <h1>It works!</h1>
          <ul>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="hello/World">Hello World</a>
            </li>
          </ul>
        </div>
      );
  }
});

var About = React.createClass({
  render: function() {
    return (
        <h1>About</h1>
      );
  }
});

var Hello = React.createClass({
  mixins: [State],
  render: function() {
    var name = this.getParams().name;
    return (
        <h1>Hello, {name}!</h1>
      );
  }
});

Routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route path="about" handler={About} />
    <Route path="hello/:name" handler={Hello} />
  </Route>
);