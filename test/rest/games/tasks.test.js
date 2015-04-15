'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

describe('Games', function () {
  describe.skip('POST /api/games/:_id/task', function () {
    it('should add a new task if the task is valid', function (done) {
      var task = require('./data/task.json');
      task.name = "test" + _.random(0, 999999);
      request(app)
        .post('/api/games/5525d60af9536b1250d10a61/tasks')
        .send(task)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.keys(['_id', 'name', 'description', 'tasks']);
          expect(res.body).to.have.property('_id', '5525d60af9536b1250d10a61');
          expect(_.any(res.body.tasks, function (e) {
            return e.name === task.name && e._id;
          })).to.be.true;
        })
        .end(done);  
    });
  });
});
