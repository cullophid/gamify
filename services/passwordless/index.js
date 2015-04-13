'use strict';

var config = require('config');
var passwordless = require('passwordless');
var MongoStore = require('passwordless-mongostore');
var email = require('emailjs');


var yourEmail = 'andreas@sentia.io';
var smtpServer  = email.server.connect({
   user:    'andreas@sentia.io',
   password: 'sentiabolcherjils',
   host:    'smtp.google.com',
   ssl:     true
});
var host = 'localhost:3000';
passwordless.init(new MongoStore(config.mongoURI));
passwordless.addDelivery(
  function(tokenToSend, uidToSend, recipient, callback) {
      // Send out token
      smtpServer.send({
         text:    'Hello!\nYou can now access your account here: ' +
              host + '?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend),
         from:    yourEmail,
         to:      recipient,
         subject: 'Token for ' + host
      }, function(err, message) {
          if(err) {
              console.log(err);
          }
          callback(err);
      });
  });

exports.sessionSupport = passwordless.sessionSupport;
exports.acceptToken = passwordless.acceptToken;
