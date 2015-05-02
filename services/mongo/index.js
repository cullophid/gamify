'use strict';
import config from 'config';
import pmongo from 'promised-mongo';

let mongo = pmongo(config.mongoURI);

export function collection (name) {
  return mongo.collection(name);
}
export function objectId (id) {
  return new pmongo.ObjectId(id);
}
