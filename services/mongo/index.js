'use strict';
var config = require('config');
var _ = require('lodash');
var pmongo = require('promised-mongo');

module.exports = pmongo(config.mongoURI);
module.exports.objectId = pmongo.ObjectId;
module.exports.utils = require('./utils');
