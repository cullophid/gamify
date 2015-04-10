'use strict';
var _ = require('lodash');
var services = require('requireindex')(__dirname);

module.exports = function (router) { // load all services in folder and inject the router;
    _(services)
      .values()
      .forEach(function (loadService) {
        loadService(router);
      }).value();
    return router;
};
