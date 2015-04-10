'use strict';
var _ = require('lodash'),
  bootstrap = require('requireindex')(__dirname),
  Promise = require('bluebird');

// build a promise chain from all modules in folder
module.exports = function () {
  return _(bootstrap)
    .values()
    .reduce(chainPromise,Promise.resolve());
};

function chainPromise (promise, func) {
  if (typeof func === 'function') {
    return promise.then(func);
  }
  return promise;
}
