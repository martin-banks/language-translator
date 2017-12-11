
// const translateButton = document.querySelector('.translateButton')
// const message = () => document.querySelector('input').value
const languageToList = document.querySelector('.languages__to')
const translation = document.querySelector('.translation')
const listen = document.querySelector('.listen')
const languageTo = () => languageToList.querySelector('select').value
const socket = io()
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const synth = window.speechSynthesis


let speech = null
let voices = []

listen.addEventListener('click', e => {
	speech = new SpeechRecognition()
	speech.start()
	speech.addEventListener('result', e => {
		const msg = e.results[0][0].transcript
		console.log(msg)
		socket.emit('translate', { msg, to: languageTo() })
	})
})


function createLanguageList({ data, type }) {
	const list = items => `<select name="languages" id="kanguages">${items}</select>`
	const item = value => `<option value="${value.code}">${value.name}</option>`
	const output = list(data.map(d => item(d)).join(''))
	return `<h2>Choose language</h2>
		 ${output}`
}

function setTranslation(data) {
	const { msg } = data
	const talk = new SpeechSynthesisUtterance(msg)
	voices = synth.getVoices()
	const voiceToUse = voices
		.filter(v => v.lang.split('-')[0] === languageTo())[0]
		// .forEach(v => console.log(v.lang))
	talk.voice = voiceToUse
	synth.speak(talk)
	// let suffix = ''
	// const suffixTemplate = value => `<p>${value}</p>`
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
})
socket.on('translation', setTranslation)

