'use strict';
import R from 'ramda';
import {collection, objectId} from '../../services/mongo';
let gamesCollection = collection('games');
let gameDefaults = {
  tasks:[],
  achievements: [],
  description : "",
  users: []
};

export function create (game) {
  return gamesCollection.insert(prepGameForInsert(game))
    .then(function (game) {
      return gamesCollection.findOne(R.pick(['_id'], game))
        .then(function (game) {
          return game;
        });
    });
}

export function prepGameForInsert (game) {
  game = R.clone(game);
  game.users = R.map(objectId, game.users);
  return R.merge(gameDefaults, game);
}
