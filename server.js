const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){

	res.sendFile('./public/html/index.html', {root: './' })
})

var port = 8087

app.listen(port, function(){

	console.log("'rps' running on ", port)
})