'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('lodash');
var middleware = require('../middleware');

describe('Users', function () {
  describe('middleware', function () {
    var next;
    describe('processParams', function () {
      beforeEach(function () {
        next = sinon.spy();
      });
      
      it('should convert _id to objectID', function () {
        var req = {
          params : {
            _id : "5525d60af9536b1250d10a61"
          }  
        };
        middleware.processParams(req, null, next);
        
        expect(req.params).to.have.property('_id')
          .which.is.not.a('string');
      });
      
      it('should leave other properties intact', function () {
          
        var req = {
          params : {
            _id : "5525d60af9536b1250d10a61",
            name: 'NAME'
          }  
        };
        middleware.processParams(req, null, next);
        
        expect(req.params).to.have.property('name', 'NAME');
      });
    });
  });
});
