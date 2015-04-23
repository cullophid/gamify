'use strict';
var _ = require('lodash');

// childProcess();
// lodash();
// isObjectId();
cloneNull();

function childProcess () {
  var cp = require('child_process');
  var child = cp.spawn('bin/www');
  setTimeout(function () {
    child.kill();
  },10000);
}

function cloneNull () {
  console.log(_.clone(null));
}

function lodash () {
    var user = {
      email: 'SDFJsadflkj',firstname : 'HEllo'
    }
    // _("HEY")
    console.log(_.method('toLowerCase')('HELLO world'));
}

function isObjectId () {
  var objectId = require('promised-mongo').ObjectId;
  var a = objectId();

  console.log(_.keys(a))
}
