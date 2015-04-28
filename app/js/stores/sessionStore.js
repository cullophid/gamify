'use strict';
var R = require('ramda');
var http = require('../services/http');
var store = require('../services/storeFactory')();
var sessionApi = require('../services/sessionAPI');

var Session;

module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get,
  getUser: getUser,
  dispatchToken : register()
};


function register () {
  return store.register(function (action) {
    switch (action.actionType) {
      case 'UPDATE_SESSION': update(); break;
      case 'AUTHENTICATE_USER': authenticate(action.credentials); break;
      case 'SESSION_CHANGED': updateAndEmit(action.session); break;
      default:
    }
  
  });
}



function update () {
  sessionApi.fetchSession();
}
function authenticate (credentials) {
  sessionApi.authenticate(credentials);
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
