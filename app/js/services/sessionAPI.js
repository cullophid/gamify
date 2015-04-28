'use strict';
var http = require('./http');
var dispatcher = require('./dispatcher');

module.exports = {
  getSession: getSession,
  authenticate: authenticate
};

function getSession () {
  return http.get('/api/session')
    .then(dispatchChangeAction);
}


function authenticate (credentials) {
  http.post('/api/session/auth', credentials)
    .then(dispatchChangeAction);
}

function dispatchChangeAction (session) {
  dispatcher.dispatch({
    actionType: 'SESSION_CHANGED',
    session: session
  });
}
