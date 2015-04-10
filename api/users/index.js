'use strict';

exports.find = require('./find').find;
exports.findOne = require('./find').findOne;
exports.completeTask = require('./tasks').completeTask;
exports.create = require('./create');

exports._router = require('./router');