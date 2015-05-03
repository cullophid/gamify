'use strict';
import R from 'ramda';
import dispatcher from '../services/dispatcher';
import * as gamesAPI from '../services/gamesAPI';
import storeFactory from '../services/storeFactory';

let store = storeFactory();
let Game;

export let onChange = store.onChange;
export let removeListener = store.removeListener;
export {get};
export let dispatToken = store.register(actionHandler);

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
