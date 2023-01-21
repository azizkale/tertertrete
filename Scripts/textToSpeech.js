//convert ChatGPT's text message into speech
// let counter;
// document.getElementById('touch').ontouchstart = function(eve) {
//     // let count = 0;
//     // counter = setInterval(function() {
//     //     console.log(count);
//     //     count++;
//     // }, 500);
// }

// document.getElementById('touch').ontouchend = function(eve) {
//     // clearInterval(counter);
//     // console.log("ya safii")
// }

const text_to_speech = async(textfromchatgpt) => {

    return new Promise(async(resolve, reject) => {
        if ('speechSynthesis' in window) {
            var synth = window.speechSynthesis;
            let utterThis = new SpeechSynthesisUtterance(textfromchatgpt);
            var voices = window.speechSynthesis.getVoices();
            // msg.voice = voices[1];
            // msg.volume = 1; // From 0 to 1
            // msg.rate = 1; // From 0.1 to 10
            // msg.pitch = 2; // From 0 to 2
            utterThis.lang = 'tr';

            utterThis.text = await textfromchatgpt;
            await sendMessageToScreen(textfromchatgpt, "right");
            await synth.speak(utterThis);

            utterThis.addEventListener('end', (event) => {
                console.log(`Utterance has finished being spoken after ${event.elapsedTime} seconds.`);
                stopSpeaking()
            });
            // utterThis.onend = await resolve;
        } else {
            // Speech Synthesis Not Supported 😣
            alert("Sorry, your browser doesn't support text to speech!");
        }
    });




}

const stopSpeaking = () => {
    //stops speaking
    window.speechSynthesis.cancel();
    //hides stop-button, displays start-button
    document.getElementById('start').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
    //colors the button
    document.getElementById('btnSend').style.backgroundColor = '#a3d063'
}

// main();

// async function main() {
//   await speak("Say something");
//   var spokenWord = await hear();
//   await speak(spokenWord);
// }

// async function speak(message) {
//   return new Promise((resolve, reject) => {
//     var synth = window.speechSynthesis;
//     var utterThis = new SpeechSynthesisUtterance(message);
//     synth.speak(utterThis);
//     utterThis.onend = resolve;
//   });
// }

// async function hear() {
//   return new Promise((resolve, reject) => {
//     var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     var recognition = new SpeechRecognition();
//     recognition.start();

//     recognition.onresult = function (event) {
//         var current = event.resultIndex;
//         var transcript = event.results[current][0].transcript;
//         console.log(transcript);
//         recognition.stop();
//         resolve(transcript);
//     }
//   });
// }