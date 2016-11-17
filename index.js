'use strict'
let MaximumPoints = 1000
module.exports = function (distribution, options) {
    options = options || {}
    if (typeof distribution !== 'function') return
    let min = options.min || 0
    let max = options.max || 1
    let intervals = options.intervals || MaximumPoints
    let step = options.step || (max - min)/intervals
    let points = options.points || 1000
    let Max 
    let keys
    let getPdfLikeString = function (lenght) {
    let i = 0
    let lenghtString = ''
    let get = function () {
        if(i > lenght) return lenghtString
        lenghtString += '*'
        i++
        return get()
    }
    return get()
    }
    let getString = function (data) {
    let plot = ''
    keys.sort(function compareNumbers(a, b) {
        return +(a) - (+(b));
    }).forEach(function (item) {
        plot += item + getPdfLikeString(Math.floor(data[item]/Max*30)) + '\n'
    })
    return plot
    }
    let data = {}
    let where
    for (var i = 0; i < points; i++ ) {
        where = Math.floor((distribution()-min)/step)
        if( where < 0) continue
        data[(where*step + min).toFixed(2)] = data[(where*step + min).toFixed(2)] || 0
        data[(where*step + min).toFixed(2)]++
    }
    keys = Object.keys(data)
    Max =  data[keys.sort(function compareNumbers(a, b) {
        return +(data[a]) - (+(data[b]));
    })[keys.length - 1]]
    return getString(data)
}