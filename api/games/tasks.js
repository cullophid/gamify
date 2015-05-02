'use strict';
import R from 'ramda';
import {collection, objectId} from '../../services/mongo';
let gamesCollection = collection('games');

export function createTask (game, task) {
  return gamesCollection.update(game, prepareForInsert(task))
    .then(function () {
      return gamesCollection.findOne(game);
    });
}

export function prepareForInsert (task) {
  return R.pipe(
    R.always(task),
    R.assoc('_id', objectId()),
    R.createMapEntry('tasks'),
    R.createMapEntry('$push')
  )();
}
