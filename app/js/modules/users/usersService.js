'use strict';
var _ = require('lodash');
module.exports = Service;
Service.$inject = ['$rootScope','$http'];

function Service ($root, $http) {
  return {
    get: get,
    calculateUserScore: calculateScore,
    completeTask: completeTask
  };

  //functions
  function get (userId) {
    return $http.get('/api/users/' + userId)
      .then(function (res) {
        return res.data;
      })
      .then(addScore)
      .then(updateAndBroadcast);
  }

  function completeTask (task) {
    return $http.post('/api/users/' + $root.user._id + '/completeTask', task)
      .then(function (res) {
          return res.data;
      })
      .then(addScore)
      .then(updateAndBroadcast);
  }

  function addScore (user) {
      return _.defaults({score: calculateScore(user)}, user);
  }

  function calculateScore (user) {
    return _.reduce(user.tasks, function (sum, task) {
          return sum + task.value;
    }, 0);
  }
  function updateAndBroadcast (user) {
    $root.user = user;
    $root.$broadcast('user updated', user);
    return user;
  }

}
