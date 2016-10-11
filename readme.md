<!-- markdownlint-disable MD004 MD007 MD010 MD041	MD022 MD024	MD032 -->

# node-scatterplot

One-off mini-server to quickly plot datasets to a temporary browser window.

```javascript
const plot = require('@hugov/node-scatterplot')
var set = []
for (var i = 0; i < 20; i++) {
	set.push([ Math.sqrt(i), i * (1 + Math.sin(i/2)) ])
}
plot(set)
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)


