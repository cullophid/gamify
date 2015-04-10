'use strict';
var config = require('config');
var _ = require('lodash');
var pmongo = require('promised-mongo');

module.exports = pmongo(config.mongoURI);
module.exports.objectId = pmongo.ObjectId;
module.exports.prepId = prepId;

function prepId(obj) {
  return _(obj)
    .thru(_.clone)
    .thru(function (obj) {
      obj._id = pmongo.ObjectId(obj._id)
      return obj;
    })
    .value();
}
