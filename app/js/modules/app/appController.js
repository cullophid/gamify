'use strict';
var _ = require('lodash');
module.exports = Controller;
Controller.$inject = ['usersService'];

function Controller (usersService) {
  var self = this;
  //bindings
  
  
  //init
  updateUser();
  
  //functions
    function updateUser () {
      usersService.get('5527e0de97e5ded409557001')
        .then(function (user) {
          self.user = user;
          console.log(user);
        });
    }
}
