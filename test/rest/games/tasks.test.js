'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

var MYTESTGAME = "5533ea5652004f7b6dfa6f59";

describe('Games', function () {
  describe('POST /api/games/:_id/task', function () {
    it('should add a new task if the task is valid', function (done) {
      var task = require('./data/task.json');
      task.name = "test" + _.random(0, 999999);
      request(app)
        .post('/api/games/'+ MYTESTGAME +'/tasks')
        .send(task)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.property('_id', MYTESTGAME);
          var t =_.find(res.body.tasks, function (e) {
            return e.name === task.name && e._id;
          });
          expect(t).to.be.ok;
          expect(t).to.have.property('_id');
          expect(t).to.have.property('name', task.name);
          expect(t).to.have.property('description', task.description);
          expect(t).to.have.property('value', task.value);
        })
        .end(done);
    });
  });
});
