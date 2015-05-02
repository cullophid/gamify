'use strict';
import R from 'ramda';
import {objectId} from '../../services/mongo';

exports.processParams = function (req, res, next) {
  if (req.params._id) {
    req.params._id = objectId(req.params._id);
  }
  next();
};

exports.processQuery = function (req, res, next) {
  if (req.query.users) {
    req.query.users = objectId(req.query.users);
  }
  next();
};
