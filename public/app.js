
const container = document.querySelector('pre')
const socket = io()
console.log(socket)
socket.on('languages', data => container.innerHTML = JSON.stringify(data.languages, 'utf8', 2))
// button.addEventListener('click', e => {
// 	socket.emit('send', { msg: 'Hello world, please translate this into a foriegn language' })
// })
