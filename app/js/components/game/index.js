'use strict';
var angular = require('angular');

var Gamecontroller = require('./controller');
  angular.module('game', [])
    .controller('gameController', Gamecontroller)
    .directive('game', require('./directive'));
