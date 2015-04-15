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
Controller.$inject = ['$scope','usersService'];
function Controller ($scope, usersService) {
  //events
  $scope.$on('user updated', function (event, user) {
      $scope.user = user;
  });
  //init 
  usersService.get('5527e0de97e5ded409557001');
}
