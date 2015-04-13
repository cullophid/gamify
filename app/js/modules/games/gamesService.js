'use strict';
module.exports = service;
service.$inject = ['$rootScope', '$http'];

function service ($root, $http) {
  var currentGame;
  return {
    get: get
  };

  //functions
  function get (gameId) {
    return $http.get('/api/games/' + gameId)
      .then(function (res) {
        return res.data;
      })
      .then(updateAndBroadcast);
  }

  function updateAndBroadcast (game) {
    currentGame = game;
    $root.$broadcast('game updated', game);
    return game;
  }

}
