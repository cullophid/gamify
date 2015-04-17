'use strict';
module.exports = function () {
    return {
        templateUrl: 'templates/user.html',
        replace: true,
        restrict: 'E',
        scope : {
          user: '=bind'
        }
    };
};
