'use strict';
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

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
  });

  describe('GET /api/users/:_id', function () {
    it('should return the specified user if exists', function (done) {
      request(app)
        .get('/api/games/5525d60af9536b1250d10a61')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id', '5525d60af9536b1250d10a61');
        })
        .end(done);
    });
  });
});
