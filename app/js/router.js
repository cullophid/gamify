'use strict';
module.exports = Router;
Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/games/5525d60af9536b1250d10a61");
  //
  // Now set up the states
  $stateProvider
    .state('game', {
      url: "/games/:_id",
      templateUrl: "templates/game.html",
      controller: 'gameController',

    });
}
