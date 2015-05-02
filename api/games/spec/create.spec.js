'use strict';
import {expect} from 'chai';
import sinon from 'sinon';
import * as create from '../create';

describe('create', function () {

  describe('prepareForInsert', function () {

    var prep = create.prepGameForInsert;
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
      expect(result.users[0].toString()).to.equal(game.users[0]);
    });
  });

});
