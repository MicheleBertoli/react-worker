jest.dontMock('../about.js');

describe('About', function() {

  it('has the proper heading', function() {

    var React = require('react/addons');
    var About = require('../about.js');
    var TestUtils = React.addons.TestUtils;

    var about = TestUtils.renderIntoDocument(
      <About />
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      about, 'h1');

    expect(h1.getDOMNode().textContent).toEqual('About');

  });

});