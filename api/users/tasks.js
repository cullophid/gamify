'use strict';
var _ = require('lodash');
var Promise = require('bluebird');
var objectId = require('promised-mongo').ObjectId;
var usersCollection = require('../../services/mongo').collection('users');

exports.completeTask = function (user, task) {
  return usersCollection.update(user, pushTask(task))
    .then(function () {
      return usersCollection.findOne(user);
    });
};

function pushTask (task) {
  var trimTask = _.curryRight(_.pick, 3)('_id', 'value');
  return _(task)
    .thru(trimTask)
    .thru(function (task) {
        task.completed = new Date().toString();
        return task;
    })
    .thru(function (task) {
      return {
        $push : {
          tasks : task
        }
      };
    })
    .value();
}

// export for testing
exports._pushTask = pushTask;
