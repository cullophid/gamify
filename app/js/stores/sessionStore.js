'use strict';
var R = require('ramda');
var http = require('../services/http');
var store = require('../services/storeFactory')();

var Session;
module.exports = {
  onChange: store.onChange,
  removeListener: store.removeListener,
  get: get
};

store.register(function (action) {
  switch (action.actionType) {
    case 'UPDATE_SESSION':
      update();
    break;

    case 'AUTHENTICATE_USER':
      authenticate(action.credentials);
    break;

    default:
  }

});

function update () {
  return http.get('/api/session')
    .then(function (res) {
        Session = res.data;
        return res.data;
    })
    .then(store.emitChange);
}
function authenticate (credentials) {
  http.post('/api/session/auth', credentials)
    .then(updateAndEmit);
}

function get () {
  return R.clone(Session);
}

function updateAndEmit (session) {
  Session = session;
  store.emitChange();
  return session;
}
