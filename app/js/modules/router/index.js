'use strict';
module.exports = router;
router.$inject = ['$stateProvider', '$urlRouterProvider'];
function router ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/games");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      views: {
        main : {
          controller: "homeController",
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('home.gameslist', {
      url: "/games",
      views : {
        page: {
          templateUrl: "templates/gameslist.html",
          controller: 'gamesListController'
        }
      }
    })
    .state('home.game', {
      url: "/games/:gameId",
      views : {
        page: {
          templateUrl: "templates/game.html",
          controller: 'gameController'
        }
      }
    })
    .state('login', {
      url: "/login",
      views : {
        main: {
          templateUrl: "templates/login.html" ,
          controller: 'loginController'
        }
      }
    });
}
