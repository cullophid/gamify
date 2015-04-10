'use strict';

var angular = require('angular');

// components


var app = angular.module('gamify', [
    require('../games'),
    require('../users')
    ]);

app.controller('appController', require('./appController'));
// app.run(require('./boot'));
