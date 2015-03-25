'use strict';


module.exports = boot;

boot.$inject = ['SessionService'];
function boot (Session) {
    Session.update();
}