'use strict';
var http = require('./http');
var dispatcher = require('./dispatcher');

module.exports = {
  fetchGamesForUser: fetchGamesForUser,
  fetchGame: fetchGame
};

function fetchGamesForUser (user) {
  if (!user) {
    return;
  }
  http.get('/api/games?users=' + user._id)
    .then(dispatchGamesListChangeAction);
}

function fetchGame (gameId) {
  http.get('/api/games/' + gameId)
    .then(dispatchGameChangeAction);
}

function dispatchGamesListChangeAction (games) {
  dispatcher.dispatch({
    actionType: 'GAMESLIST_CHANGED',
    gamesList: games
  });
}

function dispatchGameChangeAction (game) {
  dispatcher.dispatch({
    actionType: 'GAME_CHANGED',
    game: game
  });
}
