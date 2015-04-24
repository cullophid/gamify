'use strict';
var request = require('superagent');

module.exports = {
  get: get,
  post: post
};

function get (url) {
  return new Promise(function (resolve, reject) {
    request
      .get(url)
      .set('Accept', 'application/json')
      .end(function (err, result) {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
  });
}

function post (url, data) {
  return new Promise(function (resolve, reject) {
    request
      .post(url)
      .send(data)
      .set('Accept', 'application/json')
      .end(function (err, result) {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
  });
}
