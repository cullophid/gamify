'use strict';
var _ =require('lodash');
var expect = require('chai').expect;
var app = require('../../../server');
var request = require('supertest');

var TESTUSERID = "5527e0de97e5ded409557001";

describe('Users', function () {
  describe('POST /api/users', function () {
    it('create a new user', function (done) {
      var user = require('./data/user.json');
      user.email = "user" + _.random(0, 999999) + '@example.com';
      request(app)
        .post('/api/users')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(function (res) {
          expect(res.body).to.have.keys(['_id', 'firstname', 'lastname', 'email', 'tasks']);
          expect(res.body).to.have.property('firstname', user.firstname);
          expect(res.body).to.have.property('lastname', user.lastname);
          expect(res.body).to.have.property('email', user.email);
        })
        .end(done);
    });
  });
});
