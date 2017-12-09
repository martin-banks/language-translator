/* eslint-disable */
require('dotenv').config()
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});

let languages = 'null'
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
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


// const google = require('googleapis')
const Translate = require('@google-cloud/translate')

const projectId = process.env.PROJECT
// const key = process.env.TRANSLATE
const keyFilename = process.env.KEYFILE

const translate = new Translate({
	keyFilename,
	projectId,
})


translate
	.translate('Hello world', 'fr')
	.then(res => {
		console.log(res[0])
	})
	.catch(err => {
		console.error('ERROR!!', err)
	})

translate
	.getLanguages()
	.then(data => {
		languages = data[0]
		// console.log(JSON.stringify(data[0], 'utf8', 2))
	})
	.catch(console.error)

