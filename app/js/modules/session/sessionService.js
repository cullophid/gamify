'use strict';

var _ = require('lodash');
module.exports = service;
service.$inject = ['$q', '$http', '$rootScope', 'usersService'];

function service ($q, $http, $rootScope, usersService) {

  return {
    auth : auth,
    get: get
  };

  function auth (credentials) {
    return $http.post('/api/session/auth', credentials)
      .then(function (res) {
        return res.data;
      })
      .then(function (user) {
        return _.defaults({score: usersService.calculateScore(user)}, user);
      })
      .then(function (user) {
        $rootScope.user = user;
        return user;
      });
  }
  function get () {
    return $http.get('/api/session')
      .then(function (res) {
        if(res.data && res.data.user) {
          return res.data;
        }
        return $q.reject('Session not found');
      });
  }

}
