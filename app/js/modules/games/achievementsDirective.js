'use strict';
var _ = require('lodash');
module.exports = function () {
    return {
        templateUrl: 'templates/achievements.html',
        replace: true,
        controller: controller,
        restrict: 'E',
        scope : {
          achievements: '=data'
        }
    };
};

controller.$inject = ['$scope','gamesService'];
function controller ($scope, gamesService) {

}
