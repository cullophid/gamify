'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('lodash');
var auth = require('../auth');

describe('Sessions - auth', function () {
  describe('prepuser', function () {
    it('should return a session object with a userId', function () {
      var user = {
        email : 'IAManEMail@Example.com',
        firstname: "Andreas"
      };
      var result = auth._prepUser(user);

      expect(result).to.include.keys(['email', 'firstname']);
    });
  });
});
