'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');
var sinon = require('sinon');
var utils = require('../index').utils;
var objectId = require('../index').objectId;
describe('mongo utils', function () {
  describe('convertPropertiesToObjectId', function () {
    var convertPropertiesToObjectId = utils.convertPropertiesToObjectId;
    it('should return a copy', function  () {
      var id = '552d2667cef3d8ed064782f9';
      var obj = {
        _id : id
      };
      expect(convertPropertiesToObjectId(obj, '_id')).to.not.equal(obj);
    });

    it('should convert selected properties to objectIds', function  () {
      var obj = {
        _id : '552d2667cef3d8ed064782f8',
        userId: '552d2667cef3d8ed064782f9',
        other : 'not id'
      };
      var result = convertPropertiesToObjectId(obj, '_id', 'userId');

      expect(result).to.have.property('_id');
      expect(result._id).to.not.be.a('string');
      expect(result._id.toString()).to.equal(obj._id);
      expect(result).to.have.property('userId');
      expect(result.userId).to.not.be.a('string');
      expect(result.userId.toString()).to.equal(obj.userId);
      expect(result.other).to.equal(obj.other);
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
    });
  });

  describe('isObjectId', function () {
    it('should return true if the value is an objectId', function () {
      expect(utils.isObjectId(objectId())).to.equal(true);
    });

    it('should return false if the value is not an objectId', function () {
      expect(utils.isObjectId('not an object Id')).to.equal(false);
    });
  });

});
