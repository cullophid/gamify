'use strict';
var R = require('ramda');
var store = require('../../services/storeFactory')();
var sessionStore = require('../sessionStore');
var gameStore = require('../gameStore');
var helper = require('./helper');

var UserScore;

module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get,
  dispatchToken : register()
};

function register () {
  return store.register(function (action) {
    switch (action.actionType) {
      case 'SESSION_CHANGED':
        update();
        break;
      case 'SESSION_CHANGED':
        update();
        break;
      default:
    }
  });
}

function update () {
  store.waitFor([sessionStore.dispatchToken, gameStore.dispatchToken]);
  updateAndEmit();
}

function get () {
  return R.clone(UserScore);
}

function updateAndEmit () {
  UserScore = helper.calculateScore(sessionStore.getUser(), gameStore.get());
  store.emitChange();
}
