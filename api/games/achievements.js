'use strict';
import R from 'ramda';
import {collection, objectId} from'../../services/mongo';
let gamesCollection = collection('games');

export function createAchievement (game, achievement) {
  return gamesCollection.update(game, prepareForInsert(achievement))
    .then(function () {
      return gamesCollection.findOne(game);
    });
}

export function prepareForInsert (achievement) {
  return R.pipe(
    R.always(achievement),
    R.clone,
    R.assoc('_id', objectId()),
    R.assoc('task', objectId(achievement.task)),
    R.createMapEntry('achievements'),
    R.createMapEntry('$push')
  )();
}
