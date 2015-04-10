'use strict';
var _ = require('lodash');
var services = require('requireindex')(__dirname);

module.exports = function (router) { // load all services in folder and inject the router;
    _(services)
      .values()
      .forEach(function (module) {
        if (module._router) {
          module._router(router);
        }
      }).value();
    return router;
};
