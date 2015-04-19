'use strict';
var _ = require('lodash');
module.exports = controller;
controller.$inject = ['$scope', '$rootScope', '$state'];

function controller ($scope, $root, $state) {
  if (!$root.user) {
    $state.go('login');
  }
}
