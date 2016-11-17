'use strict'
const plot = require("../index")
const assert = require('assert') 
describe('test to plot',function () {
    it('should be a function', function () {
        assert(typeof plot === 'function')
    })
    it('should return a string', function() {
        assert(typeof plot(Math.random) === 'string')
    })
})