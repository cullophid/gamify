'use strict';
var _ = require('lodash');
module.exports = function () {
    return {
        templateUrl: 'templates/tasks.html',
        replace: true,
        controller: controller,
        restrict: 'E',
        scope : {
          tasks: '=bind'
        }
    };
};

controller.$inject = ['$scope','gamesService', 'usersService'];
function controller ($scope, gamesService, usersService) {
  //bidings
  $scope.completeTask = usersService.completeTask;
  $scope.createTask = createTask;

  //functions

  function createTask(task) {
    return gamesService.createTask(task)
      .then(function () {
        $scope.showNewTaskPanel = false;
        $scope.newTask = {};
      });
  }
}
