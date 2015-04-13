'use strict';
var _ = require('lodash');
module.exports = Controller;
Controller.$inject = ['$scope', 'usersService', 'gamesService'];

function Controller ($scope, usersService, gamesService) {
  usersService.get('5527e0de97e5ded409557001');
  gamesService.get('5525d60af9536b1250d10a61');
}
