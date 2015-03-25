'use strict';

var angular = require('angular');

// modules
require('./components/game');

var app = angular.module('gamify', [
    'game'
    ]);
app.run(function () {
    console.log('Running App');
})