'use strict';
require = require('../../require');
var should = require('chai').should();
var path = require('path');
var GameController = require(path.join(process.cwd(), 'app/js/modules/game/controller'));

describe('GameController', function () {
    var controller;
    beforeEach(function () {
        controller = new GameController();
    });
    it('should contain a list of 3 tasks', function () {
        controller.should.have.property('tasks');
        controller.tasks.should.have.property('length', 3);
    });
});