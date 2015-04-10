'use strict';
var config = require('config');
var pmongo = require('promised-mongo');

module.exports = pmongo(config.mongoURI);
