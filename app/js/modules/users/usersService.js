'use strict';
var _ = require('lodash');
module.exports = Service;
Service.$inject = ['$http'];

function Service ($http) {
  return {
    get: get,
    calculateUserScore: calculateUserScore
  };

  function get (userId) {
    return $http.get('/api/users/' + userId)
      .then(function (res) {
        return res.data;
      });
  }

  function calculateUserScore (user) {
    return _.reduce(user.tasks, function (sum, task) {
          return sum + task.value;
    }, 0);
  }
}
