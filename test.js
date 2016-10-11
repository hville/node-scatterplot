/*eslint-env node, es6*/
const plot = require('./index.js')

var set = []
for (var i = 0; i < 500; i++) {
	set.push([ Math.sqrt(i), i * (1 + Math.sin(i/2)) ])
}

plot(set)
