'use strict';
module.exports = function () {
    return {
        template: require('raw!./template.html'),
        replace: true,
        controller: 'gameController',
        controllerAs: 'game',
        restrict: 'E'
    };
};