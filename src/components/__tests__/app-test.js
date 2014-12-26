jest.dontMock('../app.js');
jest.dontMock('../test-helpers');

describe('App', function() {

  it('has the proper title', function() {

    var React = require('react/addons');
    var App = require('../app.js');
    var TestUtils = React.addons.TestUtils;
    var testHelpers = require('../test-helpers');

    var stubbed = testHelpers.makeStubbedDescriptor(App);
    var app = TestUtils.renderIntoDocument(stubbed);

    var title = TestUtils.findRenderedDOMComponentWithTag(
      app, 'title');

    expect(title.getDOMNode().textContent).toEqual('React Worker');

  });

});