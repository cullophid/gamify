'use strict';
var dispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

module.exports = function () {
  var emitter = new EventEmitter();
  return {
    onChange: onChange,
    removeListener: removeListener,
    emitChange: emitChange,
    register: register,
    waitFor: dispatcher.waitFor
  };

  function onChange (callback) {
    emitter.on(CHANGE_EVENT, callback);
  }

  function removeListener (callback) {
    emitter.removeListener(CHANGE_EVENT, callback);
  }

  function emitChange (data) {
    emitter.emit(CHANGE_EVENT, data);
  }

  function register (callback) {
    return dispatcher.register(callback);
  }
};
