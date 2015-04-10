'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');   
var sinon = require('sinon');
var mongo = require('../index');
describe('mongo', function () {
  
  it('should have function objectId', function  () {
    expect(mongo).to.have.property('objectId');
  });
  
  describe('prepId' , function () {
    it('should convert a valid hex string to object id', function () {
      var obj = {
        _id : '5525d60af9536b1250d10a61'
      };
      
      var result = mongo.prepId(obj);
      expect(result).to.have.property('_id');
      expect(result._id).to.not.be.a('string');
    });
    
    it('should throw an error if the hext string is not a valid object Id', function () {
      var obj = {
        _id : 'stuff'
      };
      expect(mongo.prepId.bind(mongo, obj)).to.throw(Error);
    })
  })
});
