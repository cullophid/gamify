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
  $scope.completeTask = completeTask;

  //events
  $scope.$on('game updated', function (event, game) {
    $scope.game = game;
  });

  //functions
  function completeTask (task) {
    usersService.completeTask(task);
  }

}
