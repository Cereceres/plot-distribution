# plot-distribution
plot a distribution given
## Install

```bash
$ npm install plot-distribution
```
## Test

```js
let plot = require('plot-distribution')
console.log(plot(Math.random),{step: 0.1, points: 10000}) -> // 
// 0.00****************************
// 0.10****************************
// 0.20*******************************
// 0.30*****************************
// 0.40****************************
// 0.50*****************************
// 0.60****************************
// 0.70****************************
// 0.80*****************************
// 0.90*****************************
```
## API  pdf(distribution,[options]) -> String

The function receive a distribution and return a string, the default values to options
object are:

```js
options = {
    min: 0,
    max: 1,
    intervals: 1000,
    step: (options.max - options.min)/options.intervals,
    points: 1000
}
```

distribution function has to be a function that receive a numerically param between [min, max].
You do not need to pass both params intervals and step, as you can see only is neccessary to pass only one
of this params. Using the Math.random function to test we obtain something like:

```bash
0.00****************************
0.10****************************
0.20*******************************
0.30*****************************
0.40****************************
0.50*****************************
0.60****************************
0.70****************************
0.80*****************************
0.90*****************************
```