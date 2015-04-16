'use strict';

module.exports = controller;

controller.$inject = ['$scope', 'sessionService', '$state'];

function controller ($scope, sessionService, $state) {

  $scope.login = login;


  function login (credentials) {
    console.log(credentials);
    sessionService.auth(credentials)
      .then(function (user) {
        console.log(user);
        $state.go('game', {gameId: '5525d60af9536b1250d10a61'})
      });

  }

}
