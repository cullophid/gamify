'use strict';
var _ = require('lodash');
module.exports = Controller;
module.exports.$inject = ['gameService'];
function Controller (gameService) {
    //bindings
    var self = this;
    
    //init
    updateGame('5525d60af9536b1250d10a61');
    
    //functions  
    function updateGame(gameId) {
      return gameService.get(gameId)
        .then(function (game) {
          self.game = game;
          game.tasks = [{name: 'YO'}]
          console.log(game);
        });
    }
    
}
