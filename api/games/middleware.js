'use strict';
var mongo = require('../../services/mongo');
exports.processParams = function (req, res, next) {
  req.params = mongo.utils.convertPropertiesToObjectId(req.params, '_id');
  next();
};

exports.processQuery = function (req, res, next) {
  req.query = mongo.utils.convertPropertiesToObjectId(req.query, 'users');
  next();
};
