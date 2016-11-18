'use strict'
const plot = require("../index")
const assert = require('assert') 
describe('test to plot',function () {
    it('should be a function', function () {
        assert(typeof plot === 'function')
    })
    it('should return a string', function() {
        console.log(plot(Math.random,{step: 0.1, points: 10000}))
        assert(typeof plot(Math.random) === 'string')
    })
})