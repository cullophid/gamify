'use strict';

module.exports = controller;

controller.$inject = ['$scope', 'sessionService', '$state'];

function controller ($scope, sessionService, $state) {

  $scope.login = login;

  function login (credentials) {
    sessionService.auth(credentials)
      .then(function (user) {
        $state.go('home.gameslist');
      });

  }

}
