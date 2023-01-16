//convert ChatGPT's text message into speech
const text_to_speech = async(textfromchatgpt) => {
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        // msg.voice = voices[1];
        // msg.volume = 1; // From 0 to 1
        // msg.rate = 1; // From 0.1 to 10
        // msg.pitch = 2; // From 0 to 2
        msg.lang = 'tr';
        await speechSynthesis.speak(msg);

        msg.text = await textfromchatgpt;
        await sendMessageToScreen(textfromchatgpt, "right");
        await window.speechSynthesis.speak(msg);

    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }

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