'use strict';
var should = require('chai').should();
var Promise = require('bluebird');   
var sinon = require('sinon');
var GameController = require('../gameController');

describe('GameController', function () {
    var controller;
    var taskServiceStub = {
      get: sinon.spy(function () {
        return Promise.resolve(require('./tasks.json'));
      })
    };
});
