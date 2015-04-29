'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var sessionStore = require('../sessionStore');
describe('sessionStore', function () {
  it('should have the correct methods', function () {
    expect(sessionStore).to.have.keys(['onChange', 'removeListener', 'get', 'getUser', 'dispatchToken']);
  });
})
