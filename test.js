/*eslint-env node, es6*/
const plot = require('./index.js')

var set = []
for (var i = 1; i < 500; i++) {
	set.push([ Math.sqrt(i), i * (Math.sin(i/7) + Math.sin(i/203)/2), i * (Math.sin(i/11) + Math.sin(i/317)/2)])
}

plot(set)
