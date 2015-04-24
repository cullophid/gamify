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

function get () {
  return R.clone(Session);
}
