'use strict';
var _ = require('lodash');
module.exports = Controller;
module.exports.$inject = ['taskService'];
function Controller (taskService) {
    var self = this;
    //bindings
    self.tasks = [];
    self.updateTasks = updateTasks;

    //init
    updateTasks();

    //functions
    function updateTasks () {
      return taskService.get()
        .then(function (tasks) {
          self.tasks = tasks;
        });
    }

}
