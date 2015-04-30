'use strict';
var R = require('ramda');

module.exports = {
  calculateScore: calculateScore
};

function calculateScore (user, game) {
  var tasks = R.pluck('_id', game.tasks);
  return R.pipe(
    R.filter(function (e) {
      return R.contains(e._id, tasks);
    }),
    R.pluck('value'),
    R.sum
  )(user.tasks);
}
