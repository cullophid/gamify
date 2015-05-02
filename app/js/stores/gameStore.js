'use strict';
var R = require('ramda');
var dispatcher = require('../services/dispatcher');
var gamesAPI = require('../services/gamesAPI');
var store = require('../services/storeFactory')();

var Game;

module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get,
  dispatchToken: store.register(actionHandler)
};

function actionHandler (action) {
  switch (action.actionType) {
    case 'UPDATE_GAME':
      update(action.gameId);
      break;
    case 'GAME_CHANGED':
      updateAndEmit(action.game);
      break;
    default:
  }
}

function update (gameId) {
  gamesAPI.fetchGame(gameId);
}

function get () {
  return R.clone(Game);
}

function updateAndEmit (game) {
  Game = game;
  store.emitChange();
}
