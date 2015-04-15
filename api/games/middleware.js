'use strict';
var mongo = require('../../services/mongo');
exports.processParams = function (req, res, next) {
  req.params = mongo.utils.convertToObjectId(req.params);
  next();
};
