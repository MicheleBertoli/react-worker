jest.dontMock('../hello.js');
jest.dontMock('../test-helpers');

describe('Hello', function() {

  it('has the proper heading', function() {

    var React = require('react/addons');
    var Hello = require('../hello.js');
    var TestUtils = React.addons.TestUtils;
    var testHelpers = require('../test-helpers');

    var stubbed = testHelpers.makeStubbedDescriptor(Hello);
    var hello = TestUtils.renderIntoDocument(stubbed);

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      hello, 'h1');

    expect(h1.getDOMNode().textContent).toEqual('Hello, World!');

  });

});