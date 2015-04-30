'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var helper = require('../helper');
describe('UserScoreStore - helper', function () {
  describe('calculateUserScore', function () {
    it('should add all the users tasks for the given game', function () {
      var user = {
        tasks : [
          {
            _id : 1,
            value: 10
          },
          {
            _id : 2,
            value: 20
          },
          {
            _id : 3,
            value: 40
          }
        ]
      };
      var game = {
        tasks : [
          {
            _id : 1
          },
          {
            _id : 2
          },
        ]
      };

      expect(helper.calculateScore(user, game))
        .to.equal(30);
    });
  });
});
