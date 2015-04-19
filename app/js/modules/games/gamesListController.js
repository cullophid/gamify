'use strict';
var _ = require('lodash');
module.exports = controller;
controller.$inject = ['$scope', '$state', '$stateParams', 'gamesService'];

function controller ($scope, $state, $stateParams, gamesService) {
  $scope.createNewGame = createNewGame;
  //init
  updateGamesList();

  //functions
  function updateGamesList () {
    gamesService.getList()
      .then(function (games) {
        $scope.games = games;
      });
  }
  function createNewGame (newGame) {
    return gamesService.createGame(newGame)
      .then(updateGamesList);
  }
}
