'use strict';
var _ = require('lodash');

// childProcess();
// console.log(objectIds());
lodash();

function childProcess () {
  var cp = require('child_process');
  var child = cp.spawn('bin/www');
  setTimeout(function () {
    child.kill();
  },10000);
}

function  objectIds () {
  var objectId = require('promised-mongo').ObjectId;
  return _(_.range(10))
    .map(function () {
        return objectId();
    })
    .value();
}

function lodash () {
    var user = {
      email: 'SDFJsadflkj',firstname : 'HEllo'
    }
    // _("HEY")
    console.log(_.method('toLowerCase')('HELLO world'));
}
