'use strict';
var _ = require('lodash');
var objectId = require('promised-mongo').ObjectId;
var usersCollection = require('../../services/mongo').collection('users');

module.exports = function (user, task) {
  return Promise.resolve(task)
    .then(pushTask)
    .then(function (update) {
      console.log(transformObjectId(user));
      console.log(update);
      return usersCollection.update(transformObjectId(user), update);
    });
};

function transformObjectId (query) {
  query._id = objectId(query._id);
  return query;
}

function pushTask (task) {
  var trimTask = _.curryRight(_.pick, 3)('_id', 'value');

  return Promise.resolve(task)
    .then(trimTask)
    .then(function (task) {
        task.completed = new Date().toString();
        return task;
    })
    .then(function (task) {
      return {
        $push : {
          tasks : task
        }
      };
    });
}

// export for testing
module.exports._pushTask = pushTask;
