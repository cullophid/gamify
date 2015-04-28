'use strict';
var expect = require('chai').expect;
var sinon = require('sinon');
var storeFactory = require('../storeFactory');
var dispatcher = require('../dispatcher');
describe('Services - storeFactory', function () {
  var store;

  beforeEach(function () {
    store = storeFactory();
  });

  it('should register a callback when calling onChange', function () {
    var callback = sinon.spy();
    store.onChange(callback);
    store.emitChange('test');

    expect(callback.calledOnce).to.equal(true);
    expect(callback.args[0][0]).to.equal('test');
  });

  it('should remove a callback when removeListener is called ', function () {
    var callback = sinon.spy();
    store.onChange(callback);
    store.removeListener(callback);

    store.emitChange('test');
    expect(callback.calledOnce).to.equal(false);
  });

  it('should register with the dispatcher when calling _register', function () {
    var callback = sinon.spy();
    var action = {hello: 'world'};
    store.register(callback);
    dispatcher.dispatch(action);

    expect(callback).to.have.property('calledOnce', true);
    expect(callback.args[0][0]).to.eql(action);

  });
});
