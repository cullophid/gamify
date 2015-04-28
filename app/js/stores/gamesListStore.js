'use strict';
var R = require('ramda');
var dispatcher = require('../services/dispatcher');
var gamesAPI = require('../services/gamesAPI');
var store = require('../services/storeFactory')();
var sessionStore = require('./sessionStore');

var GamesList;
module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get,
  dispatchToken: store.register(actionHandler)
};
function actionHandler (action) {
  switch (action.actionType) {
    case 'SESSION_CHANGED':
      update();
      break;
    case 'GAMESLIST_CHANGED':
      updateAndEmit(action.gamesList);
      break;
    default:
  }
}

function update () {
  gamesAPI.fetchGamesForUser(sessionStore.getUser());
}

function get () {
  return R.clone(GamesList);
}

function updateAndEmit (games) {
  GamesList = games;
  store.emitChange();
}
