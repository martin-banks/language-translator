/* eslint-disable */
require('dotenv').config()
// const google = require('googleapis')
const Translate = require('@google-cloud/translate')




var express = require('express')
const app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const path = require('path')

const projectId = process.env.PROJECT
// const key = process.env.TRANSLATE
const keyFilename = process.env.KEYFILE

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

http.listen(3000, function(){
  console.log('listening on *:3001');
});

const translate = new Translate({
	keyFilename,
	projectId,
})



// Where are the view tempaltes stored
app.set('views', path.join(__dirname, 'views'))
// The view engine to render the templates
app.set('view engine', 'pug')

// Static files hosted from here
app.use('/public', express.static(path.join(__dirname, '/public')))

// Variables to pass into templates for all route requests
app.use((req, res, next) => {
	res.locals.menu = ['first', 'second']
	next()
})

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.get('/', (req, res) => res.render('layout'))


io.on('connection', function (socket) {
	translate
		.getLanguages()
		.then(data => {
			socket.emit('languages', { languages: data[0] })
		})
		.catch(console.error)
	
  socket.on('send', data => {
  	translate
			.translate(data.msg, 'fr')
			.then(res => {
				console.log(res[0])
		  	socket.emit('reply', { msg: res[0] })
			})
			.catch(err => {
				console.error('ERROR!!', err)
			})
  })
})


// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500)
//       return res.end('Error loading index.html')
//     }

//     res.writeHead(200)
//     res.end(data)
//   })
// }

// translate
// 	.translate('Hello world', 'fr')
// 	.then(res => {
// 		console.log(res[0])
// 	})
// 	.catch(err => {
// 		console.error('ERROR!!', err)
// 	})



