'use strict';
require = require('../../require');
var should = require('chai').should();
var path = require('path');
var gameDirective = require(path.join(process.cwd(), 'app/js/components/game/directive'));

describe('GameDirective', function () {
    var target = gameDirective();
    it('shold load the specified template', function () {
        target.template.should.be.a('string');
    });
});