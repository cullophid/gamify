'use strict';

var angular = require('angular');

// components
require('./components/game');

//services
require('./services');

var app = angular.module('gamify', [
    'game',
    'services'
    ]);
// app.run(require('./boot'));
