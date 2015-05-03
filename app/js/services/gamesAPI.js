'use strict';
import R from 'ramda';
import * as http from './http';
import dispatcher from './dispatcher';


export function fetchGamesForUser (user) {
  if (!user) {
    return;
  }
  http.get('/api/games?users=' + user._id)
    .then(dispatchGamesListChangeAction);
}

export function fetchGame (gameId) {
  http.get('/api/games/' + gameId)
    .then(dispatchGameChangeAction);
}
export function createGame (game, user) {
  Promise.resolve(game)
    .then(addUserToGame(user))
    .then(http.post('/api/games'))
    .then(R.always(user))
    .then(fetchGamesForUser);

  function addUserToGame (user) {
    return function (game) {
      return R.assoc('users', [user._id], game);
    };
  }
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
