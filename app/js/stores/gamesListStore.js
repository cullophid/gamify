'use strict';
import R from 'ramda';
import dispatcher from '../services/dispatcher';
import {fetchGamesForUser, createGame} from '../services/gamesAPI';
import storeFactory from '../services/storeFactory';
import sessionStore from './sessionStore';

let store = storeFactory();
let GamesList;

export let onChange = store.onChange;
export let removeListener = store.removeListener;
export let dispatchToken = store.register(actionHandler);
export function get () {
  return R.clone(GamesList);
}

function actionHandler (action) {
  switch (action.actionType) {
    case 'SESSION_CHANGED':
      update();
      break;
    case 'GAMESLIST_CHANGED':
      updateAndEmit(action.gamesList);
      break;
    case 'CREATE_GAME':
      createGame(action.game, sessionStore.getUser());
      break;
    default:
  }
}

function update () {
  fetchGamesForUser(sessionStore.getUser());
}

function updateAndEmit (games) {
  GamesList = games;
  store.emitChange();
}
