'use strict';
var R = require('ramda');
var http = require('../services/http');
var store = require('../services/storeFactory')();
var sessionStore = require('./sessionStore');

var GamesList;
module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get
};

store.register(function (action) {
  switch (action.actionType) {
    case 'UPDATE_GAMESLIST':
      update();
    break;

    case 'SESSION_CHANGED':
    update();
    break;

    default:
  }

});

function update () {
  return http.get('/api/games?users=' + sessionStore.get().user)
    .then(updateAndEmit);
}

function get () {
  return R.clone(GamesList);
}

function updateAndEmit (games) {
  GamesList = games;
  store.emitChange();
  return session;
}
