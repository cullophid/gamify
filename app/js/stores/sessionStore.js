'use strict';
var R = require('ramda');
var sessionAPI = require('../services/sessionAPI');
var store = require('../services/storeFactory')();
var gamesListStore = require('./gamesListStore');

var Session;
module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get,
  dispatchToken: store.register(actionHandler)
};

function actionHandler (action) {
  switch (action.actionType) {
    case 'UPDATE_SESSION':    update(); break;
    case 'AUTHENTICATE_USER': authenticate(action.credentials); break;
    case 'SESSION_CHANGED':
      store.waitFor([gamesListStore.dispatchToken]);
      updateAndEmit(action.session); break;
    default:
  }
}

function update () {
  sessionAPI.fetchSession();
}

function authenticate (credentials) {
  sessionAPI.authenticate(R.clone(credentials));
}

function get () {
  return R.clone(Session);
}
function getUser () {
  if (!Session) {
    return null;
  }
  return R.clone(Session.user);
}

function updateAndEmit (session) {
  Session = session;
  store.emitChange();
}
