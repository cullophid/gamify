'use strict';

var angular = require('angular');

// components


var app = angular.module('gamify', [
    require('angular-ui-router'),
    require('../session'),
    require('../login'),
    require('../games'),
    require('../users'),
    require('../tabs')
    ]);

app.controller('homeController', require('./homeController'));
app.config(require('../router'));
