'use strict';
import {expect} from 'chai';
import sionon from 'sinon';
import * as mongo from '../index';
describe('mongo', function () {

  it('should have function objectId', function  () {
    expect(mongo).to.include.keys('collection','objectId');
  });
});
