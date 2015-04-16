'use strict';
var _ = require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

describe('Session', function () {
  describe('POST /api/session/auth', function () {
    it('should return a user if exists', function (done) {
      var body = {
        email: 'authUser@example.com'
      }    
      request(app)
        .post('/api/session/auth')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (res) {
          var  user = res.body;
          expect(user).to.have.keys(['_id', 'email','firstname', 'lastname', 'tasks', 'achievements']);
          expect(user).to.have.property('email', 'authUser@example.com');
        })
        .end(done);  
    });
  });
});
