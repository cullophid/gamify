'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var tasks = require('../tasks');
describe('tasks', function () {
  describe('prepareForInsert', function () {
    it('should return a mongo insert object', function () {
      var task = {
        name: 'name',
        description: 'description',
        value: 10
      };
      var result = tasks._prepareForInsert(task);

      expect(result).to.have.keys('$push');
      expect(result.$push).to.have.keys('tasks');
      expect(result.$push.tasks).to.have.keys('name', 'description', 'value', '_id');
      expect(result.$push.tasks.task).to.not.be.a('string');

    });
  });
});
