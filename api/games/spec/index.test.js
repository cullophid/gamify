'use strict';
var expect = require('chai').expect;
var games = require('../index');

describe('games', function () {
  it('should have the right endpoints', function () {
    expect(games).to.have.keys(['find', 'findOne', 'create', '_router']);
  });
})