'use strict';
var _ = require('lodash');

module.exports = TaskService;
TaskService.$inject = ['$http'];
function TaskService ($http) {
  var self = this;

  //bindings
  self.get = get;

  //functions
  function get () {
    return $http.get('/api/tasks')
      .then(function (res) {
          return res.data;
      });
  }
}
