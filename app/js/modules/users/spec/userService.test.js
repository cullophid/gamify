'use strict';
var expect = require('chai').expect;
var UsersService = require('../usersService');
describe('UsersService', function () {
  describe('calculateScore', function () {
    var service;
    beforeEach(function () {
      service = new UsersService({});
    });

    it('should return the sum of the users completed tasks', function () {
      var user = {
        tasks : [
          {value: 1},
          {value: 2},
          {value: 3},
        ]
      };
      expect(service.calculateScore(user)).to.equal(6);
    });

  });
});
