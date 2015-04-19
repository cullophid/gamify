'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var achievements = require('../achievements');
describe('achievements', function () {
  describe('prepareForInsert', function () {
    it('should return a mongo insert object', function () {
      var achievement = {
        name: 'name',
        description: 'description',
        task : '5533fd9084375622e2faf89d',
        value: 10
      };
      var result = achievements._prepareForInsert(achievement);

      expect(result).to.have.keys('$push');
      expect(result.$push).to.have.keys('achievements');
      expect(result.$push.achievements).to.have.keys('name', 'description', 'task', 'value', '_id');
      expect(result.$push.achievements.task).to.not.be.a('string');

    });
  });
});
