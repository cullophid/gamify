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


  //init
  init();

  function init () {
    if (!$scope.$root.user) {
      return $state.go('login');
    }
    gamesService.get($stateParams.gameId);
  }
}
