<!-- markdownlint-disable MD004 MD007 MD010 MD041	MD022 MD024	MD032 -->

# node-scatterplot

A cheep and ugly mini-server to quickly plot datasets to a temporary browser window
The server stops when the browser tab is closed.

```javascript
const scatter = require('@hugov/node-scatterplot')
var set = {squigly: []}
for (var i = 0; i < 20; i++) {
	set.squigly.push([ Math.sqrt(i), i * (1 + Math.sin(i/2)) ])
}
scatter.plot(set)
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)


