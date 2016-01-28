jest
  .dontMock('../components/organizationComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('displayAction', function() {
  var Organization;

  beforeEach(function() {
    // Set up our document body
    document.body.innerHTML =
      '<div id="org">' +
      '</div>';
    Organization = require('../components/organizationComponent.jsx');
  });

  it('should exists', function() {
    var orgComponent = TestUtils.renderIntoDocument( <Organization /> );
    expect(TestUtils.isCompositeComponent(orgComponent)).toBeTruthy();
  });

  it('check organization name', () => {
    // Render a checkbox with label in the document
    var orgComponent = TestUtils.renderIntoDocument( <Organization /> );
    var el = TestUtils.findRenderedDOMComponentWithClass(orgComponent, 'orgComponent');
    var orgNode = ReactDOM.findDOMNode(el);

    expect(orgNode.value).toEqual('');
    TestUtils.Simulate.change(orgNode,{target: {value: "organization1"}});
    expect(orgNode.value).toEqual('organization1');

  });

});