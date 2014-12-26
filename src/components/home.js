var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      click: 0
    }
  },
  handleClick: function() {
    this.setState({
      click: this.state.click + 1
    });
  },
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
            <li>
              <button onClick={this.handleClick}>Click: {this.state.click}</button>
            </li>
          </ul>
        </div>
      );
  }
});

module.exports = Home;