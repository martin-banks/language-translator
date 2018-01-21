
function isMobile() {
	return /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream;
}

document.querySelector('section#app').setAttribute('data-mobile', isMobile())

// var translateButton = document.querySelector('.translateButton')
// var message = () => document.querySelector('input').value
var languageToList = document.querySelector('.languages__to')
var translation = document.querySelector('.translation')
var listen = document.querySelector('.listen')
var languageTo = () => languageToList.querySelector('select').value
var socket = io()
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var synth = window.speechSynthesis

let speech = null
let voices = []

listen.addEventListener('click', e => {
	speech = new SpeechRecognition()
	speech.start()
	speech.addEventListener('result', e => {
		var msg = e.results[0][0].transcript
		console.log(msg)
		socket.emit('translate', { msg, to: languageTo() })
	})
})


function createLanguageList({ data, type }) {
	var list = items => `<select name="languages" id="languages">${items}</select>`
	var item = value => `<option value="${value.code}">${value.name}</option>`
	var output = list(data.map(d => item(d)).join(''))
	return `<h2>Choose language</h2>
		 ${output}`
}

function setTranslation(data) {
	var { msg } = data
	var talk = new SpeechSynthesisUtterance(msg)
	voices = synth.getVoices()
	var voiceToUse = voices
		.filter(v => v.lang.split('-')[0] === languageTo())[0]
		// .forEach(v => console.log(v.lang))
	// voices.forEach(v => console.log(v.lang.split('-')))
	// if (!voiceToUse) {
	// 	voiceToUse = voices
	// 		.filter(v => v.lang.split('-')[1].toLowerCase() === languageTo().toLowerCase())[0]
	// }
	console.log({ voices, voiceToUse }, languageTo())
	talk.voice = voiceToUse
	synth.speak(talk)
	// let suffix = ''
	// var suffixTemplate = value => `<p>${value}</p>`
	// if (msg.toLowerCase() === message().toLowerCase()) {
	// 	suffix = suffixTemplate('Hmm, looks like it\'s the same, did you set the correct language?')
	// }
	translation.innerHTML = `${msg}`
}


// translateButton.addEventListener('click', e => {
// 	setTranslation({ msg: 'Waiting for translation' })
// 	socket.emit('translate', { msg: message(), to: languageTo() })
// })

socket.on('languages', data => {
	languageToList.innerHTML = createLanguageList({ data: data.languages, type: 'to' })
	languageToList.querySelector('select').value = 'en'
	console.log({ data })
})
socket.on('translation', setTranslation)

