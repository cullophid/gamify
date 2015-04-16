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

controller.$inject = ['$scope', 'gamesService'];
function controller ($scope, gamesService) {
  //events
  $scope.$on('game updated', function (event, game) {
    $scope.game = game;
  });

  //init
  gamesService.get('5525d60af9536b1250d10a61');
}
