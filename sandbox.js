'use strict';
var _ = require('lodash');

// monads();
mongo();


function monads () {
    var obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4'
    };

    _(obj)
      .values()
      .forEach(function (e) {
          console.log(e);
      }).value();
}


function mongo () {
  var db = require('./services/mongo');
  var task = {
      "name" : "House Chores",
      "description" : "Not Fun",
      "tasks" : [1, 2, 3]
  };
  insert(game)
    .then(function (value) {
      console.log(value);
    })
    .then(get)
    .then(console.log);

  function get () {
    db.games.find()
      .toArray()
      .then(function (results) {
        console.log(results);
      });
  }

  function insert (doc) {
      return db.games.insert(doc);
  }
}
