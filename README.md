# plot-distribution
plot a distribution given
## Install

```bash
$ npm install plot-distribution
```
## Test

```js
let plot = require('plot-distribution')
console.log(plot(Math.random))
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
of this params.