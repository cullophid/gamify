'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');


var MYTESTGAME = "5533ea5652004f7b6dfa6f59";
var MYTESTUSER = "5533e8e952004f7b6dfa6f58";

describe('Games', function () {
  describe('GET /api/games', function () {
    it('should return a list of games', function (done) {
      request(app)
        .get('/api/games')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.gte(1);
        })
        .end(done);
    });
    it('should return a list of games filtered by user', function (done) {
      request(app)
        .get('/api/games?users=' + MYTESTUSER)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.gte(1);
          expect(_.every(res.body, function (e) {
            return _.includes(e.users, MYTESTUSER);
          })).to.equal(true, 'all games should contain the user');
        })
        .end(done);
    });
  });

  describe('GET /api/games/:_id', function () {
    it('should return the specified game if exists', function (done) {
      request(app)
        .get('/api/games/' + MYTESTGAME)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id', MYTESTGAME);
        })
        .end(done);
    });
  });
});
