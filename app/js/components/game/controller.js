'use strict';
module.exports = function () {
    var self = this;
    self.tasks = require('json!./tasks.json');
    console.log(self.tasks);
}