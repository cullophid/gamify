'use strict';
import {expect} from 'chai';
import  sinon from 'sinon';
import * as middleware from '../middleware';

describe('Games - middleware', function () {
  describe('prepQuery', function () {
    it('should convert users to an objectID', function () {
      let req = {
        query: {
          users : '5533eb22dfad4c51dc4277b7'
        }
      };
      let next = sinon.spy();

      middleware.processQuery(req, null, next);
      expect(req.query).to.have.property('users');
      expect(req.query.users).to.not.be.a('string');
    });
    it('should not alter other properties', function () {
      let req = {
        query: {
          test : '5533eb22dfad4c51dc4277b7'
        }
      };
      let next = sinon.spy();

      middleware.processQuery(req, null, next);
      expect(req.query).to.not.have.property('users');
      expect(req.query.users).to.not.be.a('string');
    });
  });
});
