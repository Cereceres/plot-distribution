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