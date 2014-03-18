'use strict';

describe('Directive: iso', function () {

  // load the directive's module
  beforeEach(module('isoExploreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<iso></iso>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iso directive');
  }));
});
