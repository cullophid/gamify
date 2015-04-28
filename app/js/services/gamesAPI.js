'use strict';
var http = require('./http');
var dispatcher = require('./dispatcher');

module.exports = {
  fetchGamesForUser: fetchGamesForUser
};

function fetchGamesForUser (user) {
  if (!user) {
    return;
  }
  http.get('/api/games?user=' + user._id)
    .then(dispatchGamesListChangeAction);
}

function dispatchGamesListChangeAction (games) {
  dispatcher.dispatch({
    actionType: 'GAMESLIST_CHANGED',
    gamesList: games
  });
}
