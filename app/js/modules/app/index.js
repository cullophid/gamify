'use strict';

var angular = require('angular');

// components


var app = angular.module('gamify', [
    require('angular-ui-router'),
    require('../session'),
    require('../login'),
    require('../games'),
    require('../users')
    ]);

app.config(require('../router'));
