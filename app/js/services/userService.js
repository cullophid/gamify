'use strict';
var _ = require('lodash');

module.exports = UserService;
UserService.$inject = ['$http'];
function UserService ($http) {
  var self = this;

  //bindings
  self.completeTask = completeTask;
  self.completeTask = completeTask;

  //functions
  function completeTask () {
    return $http.post('/api/user/tasks/complete')
      .then(function (res) {
          return res.data;
      });
  }
}
