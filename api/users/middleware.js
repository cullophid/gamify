'use strict';
import R from 'ramda';
import {objectId} from '../../services/mongo';
export function processParams (req, res, next) {
  req.params = R.pipe(
    R.always(req.params),
    R.clone,
    R.assoc('_id', objectId(req.params._id))
  )();
  next();
}
