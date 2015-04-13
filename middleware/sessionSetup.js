'use strict';
var users = require('../api/users');
var objectId = require('promised-mongo').ObjectId;
module.exports = function (req, res, next) {
  users.findOne({_id : objectId('5527e0de97e5ded409557001')})
    .then(function (user) {
        req.session.user = user;
        next();
    });
};
