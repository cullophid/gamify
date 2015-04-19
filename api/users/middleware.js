'use strict';
var mongo = require('../../services/mongo');
exports.processParams = function (req, res, next) {
  req.params = mongo.utils.convertPropertiesToObjectId(req.params, '_id');
  next();
}
