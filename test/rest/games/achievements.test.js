'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

describe('Games', function () {
  describe('POST /api/games/:_id/achievement', function () {
    it('should add a new achievement if valid', function (done) {
      var achievement = require('./data/achievement.json');
      achievement.description = "achievement" + _.random(0, 999999);
      request(app)
        .post('/api/games/552eec78e8defd5d7185667a/achievements')
        .send(achievement)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.property('_id', '552eec78e8defd5d7185667a');
          var ach = _.find(res.body.achievements, function (e) {
              return e.description === achievement.description;
            });

            expect(ach).to.be.ok;
            expect(ach).to.have.property('_id');
            expect(ach).to.have.property('type', achievement.type);
            expect(ach).to.have.property('value', achievement.value);
            expect(ach).to.have.property('goal', achievement.goal);
            expect(ach).to.have.property('task', achievement.task);
        })
        .end(done);
    });
  });
});
