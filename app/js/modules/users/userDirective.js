'use strict';
module.exports = function () {
    return {
        templateUrl: 'templates/user.html',
        replace: true,
        controller: Controller,
        restrict: 'E',
        scope : {
        }
    };
};
Controller.$inject = ['$scope','usersService'];
function Controller ($scope, usersService) {
  //init
  updateUser();

  //functions
    function updateUser () {
      usersService.get('5527e0de97e5ded409557001')
        .then(function (user) {
          user.score = usersService.calculateUserScore(user);
          return user;
        })
        .then(function (user) {
          $scope.user = user;
          updateUserScore();
        });
    }
    function updateUserScore () {
        if (!$scope.user) {return;}
        $scope.user.score = usersService.calculateUserScore($scope.user);
    }
}
