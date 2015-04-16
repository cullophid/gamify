'use strict';

var angular = require('angular');

// components


var app = angular.module('gamify', [
    require('angular-ui-router'),
    require('../games'),
    require('../users')
    ]);

app.controller('appController', require('./appController'));
app.config(require('../router'));
// app.run(require('./boot'));
