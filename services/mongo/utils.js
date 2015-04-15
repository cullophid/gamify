'use strict';

var _ = require('lodash');
var objectId = require('promised-mongo').ObjectId;

exports.convertToObjectId = convertToObjectId;
exports.createPushStatement = createPushStatement;
exports.addId = addId;

function convertToObjectId(obj) {
  return _.defaults({_id : objectId(obj._id)}, obj);
}

function createPushStatement (obj, list) {
  var template = {
    $push : {}
  };
  template.$push[list] = _.clone(obj);
  return template;
}

function addId (obj) {
  return _.defaults({_id: objectId()}, obj);
}