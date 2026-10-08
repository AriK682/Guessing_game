const msgEl = document.getElementById('msg');

//Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNum = getRandomNumber();
console.log('Number:', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

function onSpeak(event) {
    const msg = event.results[0][0].transcript;
    console.log(msg);
}

//speak result
recognition.addEventListener('result', onSpeak);