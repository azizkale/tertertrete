// const textToSpeech = (text) => {
// function getVoices() {
//     let voices = speechSynthesis.getVoices();
//     if (!voices.length) {
//         // some time the voice will not be initialized so we can call spaek with empty string
//         // this will initialize the voices 
//         let utterance = new SpeechSynthesisUtterance("");
//         speechSynthesis.speak(utterance);
//         voices = speechSynthesis.getVoices();
//     }
//     return voices;
// }


// function speak(text, voice, rate, pitch, volume) {
//     // create a SpeechSynthesisUtterance to configure the how text to be spoken 
//     let speakData = new SpeechSynthesisUtterance();
//     speakData.volume = volume; // From 0 to 1
//     speakData.rate = rate; // From 0.1 to 10
//     speakData.pitch = pitch; // From 0 to 2
//     speakData.text = text;
//     speakData.lang = 'tr';
//     speakData.voice = voice;

//     // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
//     speechSynthesis.speak(speakData);

// }

// if ('speechSynthesis' in window) {
//     // v
//     let voices = getVoices();
//     let rate = 0.8,
//         pitch = 1,
//         volume = 1;
//     // let text = "Nasılsın reis";

//     speak(text, voices[5], rate, pitch, volume);

//     // setTimeout(() => { // speak after 2 seconds 
//     //     rate = 0.5;
//     //     pitch = 1.5, volume = 0.5;
//     //     text = "Spaecking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
//     //     speak(text, voices[10], rate, pitch, volume);
//     // }, 2000);
// } else {
//     console.log(' Speech Synthesis Not Supported 😞');
// }
// }

const myFunc = (textfromchatgpt) => {
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        // msg.voice = voices[1];
        // msg.volume = 1; // From 0 to 1
        // msg.rate = 1; // From 0.1 to 10
        // msg.pitch = 2; // From 0 to 2
        msg.lang = 'tr';
        speechSynthesis.speak(msg);

        msg.text = textfromchatgpt;
        window.speechSynthesis.speak(msg);
    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }

}