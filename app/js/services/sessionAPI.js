'use strict';
var http = require('./http');
var dispatcher = require('./dispatcher');

module.exports = {
  fetchSession: fetchSession,
  authenticate: authenticate
};

function fetchSession () {
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
