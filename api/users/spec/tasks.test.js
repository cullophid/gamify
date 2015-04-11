'use strict';
var expect = require('chai').expect;
var _ = require('lodash');
var path = require('path');
var tasks = require('../tasks');

describe('Users', function () {
  describe('tasks', function () {
    describe('pushTask', function () {
      it('should return a update object', function () {
        var task = {
          _id: 1,
          value: 10,
          description: 'description'
        };
        var result = tasks._pushTask(task)
        expect(result).to.have.property('$push');
        expect(result.$push).to.have.property('tasks');
        expect(result.$push.tasks).to.have.property('_id', 1);
        expect(result.$push.tasks).to.have.property('value', 10);
        expect(result.$push.tasks).to.have.property('completed')
          .which.is.a('String');

      });
    });
  });
});
