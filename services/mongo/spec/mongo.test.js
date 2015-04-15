'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');   
var sinon = require('sinon');
var mongo = require('../index');
describe('mongo', function () {
  
  it('should have function objectId', function  () {
    expect(mongo).to.include.keys('objectId', 'utils');
  });
});
