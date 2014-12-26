var React = require('react'),
  Router = require('react-router'),
  State = Router.State;

var Hello = React.createClass({
  mixins: [State],
  render: function() {
    var name = this.getParams() ? this.getParams().name : 'World';
    return (
        <h1>Hello, {name}!</h1>
      );
  }
});

module.exports = Hello;