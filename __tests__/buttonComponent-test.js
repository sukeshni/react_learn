jest
  .dontMock('../components/buttonComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Check Button Component', function() {
  var Btn;

  beforeEach(function() {
    // Set up our document body
    document.body.innerHTML =
      '<div id="btn">' +
      '</div>';
    Btn = require('../components/buttonComponent.jsx');
  });

  // it('displays a user Action after a click', function() {

  //   var btnComponent = TestUtils.renderIntoDocument(<Btn />);
  //   btnComponent.create = jest.genMockFunction();
  //   TestUtils.Simulate.click(btnComponent);

  //   // var button = TestUtils.findRenderedDOMComponentWithTag(btnComponent, 'button');
  //   // TestUtils.Simulate.click(button);

  //   expect(btnComponent.create.length).toBe(1);
  //   expect(btnComponent.create).toBeCalled();
  // });

  it('should exists', function() {
    var btnComponent = TestUtils.renderIntoDocument( <Btn /> );
    expect(TestUtils.isCompositeComponent(btnComponent)).toBeTruthy();
  });
});