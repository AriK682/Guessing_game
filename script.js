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
    writeMessage(msg);
}

//speak result
recognition.addEventListener('result', onSpeak);

//write what user speaks
function writeMessage(msg) {
    msgEl.innerHTML = '';
    const div = document.createElement('div');
    div.textContent = 'You said:  ';
    const span = document.createElement('span');
    span.classList.add('box');
    span.textContent = msg;
    
    msgEl.append(div, span);
}