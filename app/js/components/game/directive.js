'use strict';
module.exports = function () {
    return {
        templateUrl: 'templates/game.html',
        replace: true,
        controller: 'gameController',
        controllerAs: 'game',
        restrict: 'E'
    };
};