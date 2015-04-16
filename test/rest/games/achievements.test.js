'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

describe('Games', function () {
  describe.skip('POST /api/games/:_id/achievement', function () {
    it('should add a new task if the task is valid', function (done) {
      var achievement = require('./data/achievement.json');
      achievement.name = "test" + _.random(0, 999999);
      request(app)
        .post('/api/games/5525d60af9536b1250d10a61/achievements')
        .send(achievement)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.keys(['_id', 'name', 'description', 'tasks']);
          expect(res.body).to.have.property('_id', '5525d60af9536b1250d10a61');
          var ach = _.find(res.body.achievement, function (e) {
              return e.name === achievement.name;
            });
            
            expect(ach).to.be.ok;
            expect(ach).to.have.property('_id');
            expect(ach).to.have.property('type', '')
        })
        .end(done);  
    });
  });
});
