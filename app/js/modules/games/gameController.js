'use strict';
var _ = require('lodash');
module.exports = controller;
controller.$inject = ['$scope', '$state', '$stateParams', 'gamesService'];

function controller ($scope, $state, $stateParams, gamesService) {
  $scope.activeTab = 0;
  //events
  $scope.$on('game updated', function (event, game) {
    $scope.game = game;
  });
  
  $scope.$on('user', function () {
    updateGame();
  });

  updateGame();

  function updateGame () {
    if (!$scope.$root.user) {return;}
    gamesService.get($stateParams.gameId);
  }
}
