'use strict';
var expect = require('chai').expect;
var helper = require('../../app/js/services/helper.service');

describe('Helper Service', function () {
  it('should return the answer to life, the universe and everything', function () {
    expect(helper()).to.equal(42);
  });

});
