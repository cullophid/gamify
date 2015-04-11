'use strict';
var _ = require('lodash');

childProcess();

function childProcess () {
  var cp = require('child_process');
  var child = cp.spawn('bin/www');
  setTimeout(function () {
    child.kill();
  },10000);
}

function  objectIds () {
  var objectId = require('promised-mongo').ObjectId;
  _(_.range(10))
    .map(function () {
        return objectId();
        console.log('yo');
    })
    .tap(console.log)
    .value();
}
