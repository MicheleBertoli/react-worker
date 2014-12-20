React = require('react');

HelloMessage = React.createClass({
  render: function() {
    return (
        <html>
          <head>
            <title>
              React Worker
            </title>
          </head>
          <body>
            <h1>Hello, world!</h1>
            <script src="dist/build.js"></script>
          </body>
        </html>
      );
  }
});