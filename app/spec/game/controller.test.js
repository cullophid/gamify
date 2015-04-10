'use strict';
var should = require('chai').should();
var sinon = require('sinon');
var GameController = require('../../js/components/game/controller');

describe('GameController', function () {
    var controller;
    var taskServiceStub = {
      get: sinon.spy(function () {
        return Promise.resolve(require('./tasks.json'));
      })
    };
    describe('updateTasks', function () {

      beforeEach(function () {
        controller = new GameController(taskServiceStub);
      });
      it('should start with an "empty" viewmodel', function () {
        controller.tasks.should.have.property('length', 0);
      });

      it('should update the tasks view model', function () {
        return controller.updateTasks()
          .then(function () {
            should.exist(controller.tasks);
              controller.tasks.should.have.property('length', 4);
          });
      });


    });
    describe('completeTask', function () {

      beforeEach(function () {
        controller = new GameController(taskServiceStub);
      });
      it('should update the completed count', function () {
      });


    });
});
