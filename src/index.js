React = require('react');
Router = require('react-router');
Url = require('url');

var Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  HistoryLocation = Router.HistoryLocation;

var App = require('./components/app'),
  Home = require('./components/home'),
  About = require('./components/about'),
  Hello = require('./components/hello');

Routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route path="about" handler={About} />
    <Route path="hello/:name" handler={Hello} />
  </Route>
);

if (typeof window !== 'undefined') {
  Router.run(Routes, HistoryLocation, function(Handler) {
    React.render(<Handler />, document);
  });
}