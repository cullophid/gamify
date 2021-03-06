'use strict';
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

var TESTUSERID = "5533e8e952004f7b6dfa6f58";
describe('Users', function () {
  describe('GET /api/users', function () {
    it('should return a list of users', function (done) {
      request(app)
        .get('/api/users')
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
        .get('/api/users/' + TESTUSERID)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id', TESTUSERID);
        })
        .end(done);
    });
  });
});
