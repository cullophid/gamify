'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');   
var sinon = require('sinon');
var utils = require('../index').utils;
describe('mongo utils', function () {
  describe('convertToObjectId', function () {
    var convertToObjectId = utils.convertToObjectId;
    it('should return a copy', function  () {
      var id = '552d2667cef3d8ed064782f9';
      var obj = {
        _id : id
      };
      expect(convertToObjectId(obj)).to.not.equal(obj);
    });
    it('should convert _id to an objectId', function  () {
      var id = '552d2667cef3d8ed064782f9';
      var obj = {
        _id : id
      };
      var result = convertToObjectId(obj);
      
      expect(result).to.have.property('_id');
      expect(result._id).to.not.be.a('string');
      expect(result._id.toString()).to.equal(id);
    });
    
  });
  describe('createPushStatement', function () {
    var createPushStatement = utils.createPushStatement;
   it('should return a copy of the object wrapped in a $push field', function () {
     var obj = {
       hello: 'world'
     };
     var result = createPushStatement(obj, 'tasks');
     
     expect(result).to.have.property('$push');
     expect(result.$push).to.have.property('tasks');
     expect(result.$push.tasks).to.eql(obj);
     expect(result.$push.tasks).to.not.equal(obj);
     
   });
    it('should assign the given object to a property with the given name', function () {
     var obj = {
       hello: 'world'
     };
     var result = createPushStatement(obj, 'tasks');
     
     expect(result).to.have.property('$push');
   });
    
  });
  
  describe('addId', function () {
    var addId = utils.addId;
    it('should return a clone with a unique objectId', function () {
      var obj = {
        'name': 'patterson'
      };
      var result = addId(obj);
      expect(result)
    })
  })
  
});
