'use strict';
var _ = require('lodash');
module.exports = service;
service.$inject = ['$rootScope', '$q', '$http'];

function service ($root, $q, $http) {
  var currentGame;
  return {
    get: get,
    getList: getList,
    createGame: createGame,
    createTask: createTask
  };

  //functions
  function get (gameId) {
    return $http.get('/api/games/' + gameId)
      .then(function (res) {
        return res.data;
      })
      .then(updateAndBroadcast);
  }

  function createTask (task) {
    return $http.post('/api/games/' + currentGame._id + '/tasks', task)
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

  function getList () {
    if (!$root.user) {return $q.reject('Session has no user');}
      return $http.get('/api/games?users=' + $root.user._id)
        .then(function (res) {
            return res.data;
        });
  }


  function createGame (game) {
      return $http.post('/api/games', prepGame(game))
        .then(function (res) {
          return res.data;
        });
     function prepGame (game) {
       return _.defaults({users: [$root.user._id]}, game);
     }
  }

}
