'use strict';
var _ = require('lodash');
module.exports = controller;
controller.$inject = ['$scope', '$rootScope', '$state', 'sessionService', 'usersService'];

function controller ($scope, $root, $state, sessionService, usersService) {
  if ($state.includes('home') && !$root.user) {
    sessionService.get()
      .then(function (session) {
        $root.user = _.defaults({score: usersService.calculateScore(session.user)}, session.user);
        $root.$broadcast('user', session.user);
      })
      .catch(function (err) {
        $state.go('login');
      });
  }
}
