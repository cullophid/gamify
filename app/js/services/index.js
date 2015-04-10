'use strict';
var angular = require('angular');

angular.module('services', [])
    .service('taskService', require('./taskService'))
    .service('userService', require('./userService'));
