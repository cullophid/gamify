'use strict';

var _ = require('lodash');
var objectId = require('promised-mongo').ObjectId;

exports.convertPropertiesToObjectId = convertPropertiesToObjectId;
exports.createPushStatement = createPushStatement;
exports.addId = addId;
exports.isObjectId = isObjectId

function convertPropertiesToObjectId(obj) {
  return _(obj)
    .pick(_.rest(arguments))
    .mapValues(objectId)
    .defaults(obj)
    .value();
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


function isObjectId (value) {
  if (typeof value !== 'object') {return false;}
  return value.hasOwnProperty('_bsontype');
}
