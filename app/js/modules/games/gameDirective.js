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

controller.$inject = ['$scope','gameService'];
function controller ($scope, gameService) {
    //init
    updateGame('5525d60af9536b1250d10a61');

    //functions
    function updateGame(gameId) {
      return gameService.get(gameId)
        .then(function (game) {
          $scope.game = game;
        });
    }

}
