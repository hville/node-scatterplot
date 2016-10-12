/*eslint-env node, es6*/
module.exports = plot

const fs = require('fs'),
			http = require('http'),
			opener = require('opener')

const port = 8888, //3000
			htmlHeader = { 'Content-Type': 'text/html', 'Cache-control': 'no-store' },
			codeHeader = { 'Content-Type': 'application/javascript', 'Cache-control': 'no-store' },
			clientHtml = readFile(__dirname+'/index.html'),
			dyGraph = readFile(__dirname+'/dygraph-combined.js')

let clientCode = readFile(__dirname+'/client.js'),
		server

function plot(data) {
	server = http.createServer(createHandler).listen(port, 'localhost')
	opener('http://localhost:' + port)
	clientCode = clientCode.then((js) => js + 'setData'+ '(\'' + JSON.stringify(data) + '\');')
}
function createHandler(req, res) {
	switch(req.url) {
		case '/': return clientHtml.then((str) => {
			res.writeHead(200, htmlHeader)
			res.end(str)
		})
		case '/dygraph.js': return dyGraph.then((str) => {
			res.writeHead(200, codeHeader)
			res.end(str)
		})
		case '/client.js': return clientCode.then((str) => {
			res.writeHead(200, codeHeader)
			res.end(str)
			server.close()
		})
	}
}
function readFile(str) {
	return new Promise(function(pass, fail) {
		fs.readFile(str, 'utf-8', (err, data) => {
			return err ? fail(err) : pass(data)
		} )
	})
}
