'use strict';
module.exports = router;
router.$inject = ['$stateProvider', '$urlRouterProvider'];
function router ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      views: {
        main : {
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('home.game', {
      url: "/games/:gameId",
      views : {
        page: {
          templateUrl: "templates/game.html",
          controller: 'gamePageController'
        }
      }
    })
    .state('login', {
      url: "/login",
      views : {
        main: {
          templateUrl: "templates/login.html" ,
          controller: 'loginPageController'
        }
      }
    });
}
