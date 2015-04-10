'use strict';
var _ = require('lodash');

module.exports = GameService;
GameService.$inject = ['$http'];

function GameService ($http) {
  
  return {
    get: get
  }

  //functions
  function get(gameId) {
    return $http.get('/api/games/' + gameId)
      .then(function (res) {
          return res.data;
      });
  }
}
