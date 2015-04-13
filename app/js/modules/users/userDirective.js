'use strict';
module.exports = function () {
    return {
        templateUrl: 'templates/user.html',
        replace: true,
        controller: Controller,
        restrict: 'E',
        scope : {}
    };
};
Controller.$inject = ['$scope'];
function Controller ($scope) {
  //init
  $scope.$on('user updated', function (event, user) {
      $scope.user = user;
  });
}
