'use strict';
import {collection} from '../../services/mongo';
let gamesCollection = collection('games');

export function find (query) {
  return gamesCollection.find(query)
    .toArray();
}

export function findOne (query) {
  return gamesCollection.findOne(query);
}
