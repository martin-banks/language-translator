/* eslint-disable */
require('dotenv').config()
// const google = require('googleapis')
const Translate = require('@google-cloud/translate')

var express = require('express')
const app = express()
var http = require('http').Server(app)
// Create socket.io instance
// We'll use this to send content 
// to translate and translated responses back to client
var io = require('socket.io')(http)
const path = require('path')

const projectId = process.env.PROJECT
// const key = process.env.TRANSLATE
const keyFilename = process.env.KEYFILE
const port = 3000
http.listen(port, function(){
  console.log(`listening on *: ${port}`);
});

// Create new translate instance
// This is what we'll call later to access translate api
const translate = new Translate({ keyFilename, projectId })

// Where are the view tempaltes stored ...
app.set('views', path.join(__dirname, 'views'))
// The view engine to render the templates ...
app.set('view engine', 'pug')

// Static files (scripts and styles ) hosted from here
app.use('/public', express.static(path.join(__dirname, '/public')))

// Variables to pass into templates for all route requests
app.use((req, res, next) => {
	next()
})

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.get('/', (req, res) => res.render('layout'))


// Start socket.io connection
io.on('connection', function (socket) {
	// when a user connects, get a list of languages available to translate ...
	translate
		.getLanguages()
		.then(data => {
			// ... and return it back to client
			socket.emit('languages', { languages: data[0] })
		})
		.catch(console.error)
	
	// Start listening for 'send' events
	// This event is used by the client to send messages to translate
  socket.on('translate', data => {
  	// send the message to the tanslate api
  	translate
			.translate(data.msg, data.to)
			.then(res => {
				console.log(res[0])
				// return the translated 
		  	socket.emit('translation', { msg: res[0] })
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



