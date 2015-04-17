'use strict';


var angular = require('angular');

angular.module('tabs', [])
  .directive('tabs', require('./tabsDirective'));
  
  
  module.exports = 'tabs';