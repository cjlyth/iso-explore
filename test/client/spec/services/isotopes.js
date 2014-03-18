'use strict';

describe('Service: isotopes', function () {

  // load the service's module
  beforeEach(module('isoExploreApp'));

  // instantiate service
  var isotopes;
  beforeEach(inject(function (_isotopes_) {
    isotopes = _isotopes_;
  }));

  it('should do something', function () {
    expect(!!isotopes).toBe(true);
  });

});
