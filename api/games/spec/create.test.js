'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var create = require('../create');
describe('create', function () {
  describe('prepareForInsert', function () {
    var prep = create._prepGameForInsert;
    it('should return a game ready for insert', function () {
      var game = {
        name: "name",
        users: ['5534058b78e4618fe6997782']
      };

      var result = prep(game);

      expect(result).to.not.equal(game);
      expect(result).to.have.keys(['name','users','description','tasks','achievements']);
      expect(result.name).to.equal(game.name);
      expect(result.users).to.have.property('length', 1);
      expect(result.users[0]).to.not.be.a('string');
      console.log(result.users);
      expect(result.users[0].toString()).to.equal(game.users[0]);
    });
  });

});
