jest.dontMock('../home.js');

describe('Home', function() {

  var React = require('react/addons');
  var Home = require('../home.js');
  var TestUtils = React.addons.TestUtils;

  var home;
  var button;

  beforeEach(function() {

    home = TestUtils.renderIntoDocument(
      <Home />
    );
    
    button = TestUtils.findRenderedDOMComponentWithTag(
      home, 'button');

  }); 

  it('shows zero clicks on load', function() {

    expect(button.getDOMNode().textContent).toEqual('Clicks: 0');
  
  });

  it('counts the number of clicks', function() {

    TestUtils.Simulate.click(button);

    expect(button.getDOMNode().textContent).toEqual('Clicks: 1');

  });

});