'use strict';
import R from 'ramda';

export function isObjectId (value) {
  if (typeof value !== 'object') {return false;}
  return value.hasOwnProperty('_bsontype');
}
