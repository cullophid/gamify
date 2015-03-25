var _ = require('lodash');
var services = require('requireindex')(__dirname);

module.exports = function (router) {
    // load all services in folder and inject the router;
    _.forIn(services, function (loadService) {
        loadService(router);
    });
    return router;
}