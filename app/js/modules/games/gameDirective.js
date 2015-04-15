'use strict';
var _ = require('lodash');
module.exports = function () {
    return {
        templateUrl: 'templates/game.html',
        replace: true,
        controller: controller,
        restrict: 'E',
        scope : {
        }
    };
};

controller.$inject = ['$scope','gamesService', 'usersService'];
function controller ($scope, gamesService, usersService) {
  //bidings
  $scope.completeTask = usersService.completeTask;
  $scope.createTask = createTask;
  
  //events
  $scope.$on('game updated', function (event, game) {
    $scope.game = game;
  });
  
  //init
  gamesService.get('5525d60af9536b1250d10a61');

  //functions
  
  function createTask(task) {
    return gamesService.createTask(task)
      .then(function () {
        $scope.showNewTaskPanel = false;
        $scope.newTask = {};
      });
  }
}
