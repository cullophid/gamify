'use strict';
var config = require('config');
var _ = require('lodash');
var pmongo = require('promised-mongo');

console.log('MONGODB: ' + config.mongoURI);
module.exports = pmongo(config.mongoURI);
module.exports.objectId = pmongo.ObjectId;
module.exports.utils = require('./utils');
