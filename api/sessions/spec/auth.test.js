'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('lodash');
var auth = require('../auth');

describe('Sessions', function () {
  describe('auth', function () {
    it('should return a users object with a lowercase email', function () {
      var user = {
        email : 'IAManEMail@Example.com',
        firstname: "Andreas"
      };
      var result = auth._prepUser(user);

      expect(result).to.have.keys(['email', 'firstname']);
      expect(result).to.have.property('email', 'iamanemail@example.com');
      expect(result).to.have.property('firstname', 'Andreas');
    });
  });
});
