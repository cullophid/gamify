'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

describe('Games', function () {
  describe('POST /api/games', function () {
    it('should create a new game if valid', function (done) {
      var game = require('./data/game.json');
      game.description = "Game" + _.random(0, 999999);
      request(app)
        .post('/api/games')
        .send(game)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.keys(['_id', 'name', 'description', 'tasks','achievements', 'users']);
          expect(res.body.users).to.have.property('length', 1);
          expect(res.body.users[0]).to.equal(game.users[0]);
          expect(res.body.description).to.equal(game.description);
        })
        .end(done);
    });
  });
});
