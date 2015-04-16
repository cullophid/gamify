'use strict';

var _ = require('lodash');
module.exports = service;
service.$inject = ['$http', '$rootScope', 'usersService'];

function service ($http, $rootScope, usersService) {

  return {
    auth : auth
  };

  function auth (credentials) {
    return $http.post('/api/session/auth', credentials)
      .then(function (res) {
        return res.data;
      })
      .then(function (user) {
        return _.defaults({score: usersService.calculateUserScore(user)}, user);
      })
      .then(function (user) {
        $rootScope.user = user;
        return user;
      });
  }

}
