'use strict';
import R from 'ramda';
import {collection} from '../../services/mongo';

let usersCollection = collection('users');

export function findOne (query) {
  console.log(query);
  return usersCollection.findOne(query);
}
