'use strict';
module.exports = router;
router.$inject = ['$stateProvider', '$urlRouterProvider'];
function router ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('game', {
      url: "/games/:gameId",
      templateUrl: "templates/game.html",
      controller: 'gamePageController'
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'loginPageController'
    });
}
