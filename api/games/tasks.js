'use strict';
var mongo = require('../../services/mongo');
var gamesCollection = mongo.collection('games');

exports.createTasks = function (game, task) {
  return gamesCollection.update(game, pushTask);
};

function pushTask (task) {
  
  return Promise.resolve(task)
    .then(function (task) {
        task.created = new Date().toString();
        return task;
    })
    .then(function (task) {
      return {
        $push : {
          tasks : task
        }
      };
    });
};
