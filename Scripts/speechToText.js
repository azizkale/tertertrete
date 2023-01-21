//Convert user's voice message into text message

let btnRecord = document.querySelector("#btnRecord");


// Listening for the mouse and touch events
let counter;
const start = () => {
    let count = 0;
    counter = setInterval(() => {
        count++;
    }, 1000);
    SPEECH.onStart(function() {

    });
    SPEECH.onResult(function(result) {
        document.getElementById("speechtotext").innerText = result.transcript;
        console.log(result.transcript)
    });
    SPEECH.start({
        min_confidence: 0.2,
    });
}

const stop = () => {
    SPEECH.stop();
    clearInterval(counter)
    SPEECH.onStop(function() {
        sendMessageToScreen(document.getElementById("speechtotext").innerText, "left")
    });
}

// Listening for our custom pressHold event
// btnRecord.addEventListener("pressHold", doSomething, false);

// btnRecord.ontouchstart = function(eve) {
//     console.log("ya sabr");
//     SPEECH.onStart(function() {

//     });
//     SPEECH.onResult(function(result) {
//         // $timeout(function() {
//         //     if ($scope.step === 1) {
//         //         $scope.name = result.transcript;
//         //         $scope.step = 2;
//         //     }
//         //     $scope.results.push(result);
//         // });
//         document.getElementById("speechtotext").innerText = result.transcript;
//         console.log(result.transcript)
//     });
//     SPEECH.start({
//         min_confidence: 0.2,
//     });
// }

// btnRecord.ontouchend = function() {
//     SPEECH.stop();
//     SPEECH.onStop(function() {
//         sendMessageToScreen(document.getElementById("speechtotext").innerText, "left")
//     });
//     console.log("ya safii")
// }





































const speaknow = async() => {
    navigator.mediaDevices
        .getUserMedia({
            audio: true,
        })
        .then((stream) => {
            console.log({
                stream,
            });
            if (!MediaRecorder.isTypeSupported("audio/webm"))
                return alert("Browser not supported");
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: "audio/webm",
            });
            // const socket = new WebSocket(
            //     "wss://api.deepgram.com/v1/listen?language=tr", ["token", config.TOKEN_DEEPGRAM]
            // );
            // socket.onopen = () => {
            //     console.log({
            //         event: "onopen",
            //     });
            //     mediaRecorder.addEventListener("dataavailable", async(event) => {
            //         if (event.data.size > 0 && socket.readyState == 1) {
            //             socket.send(event.data);
            //         }
            //     });
            //     mediaRecorder.start(1000);
            // };

            // socket.onmessage = async(message) => {
            //     const received = JSON.parse(message.data);
            //     const transcript = received.channel.alternatives[0].transcript;
            //     if (transcript && received.is_final) {
            //         //   ==================
            //         console.log(transcript)
            //         await sendMessageToScreen(transcript, "left")
            //             // await mediaRecorder.stop();
            //             // await sendRequestToChatGPT(transcript);
            //             // await socket.close();
            //             //   ==================

            //     }
            // };

            // socket.onclose = () => {
            //     console.log({
            //         event: "onclose",
            //     });
            // };

            // socket.onerror = (error) => {
            //     console.log({
            //         event: "onerror",
            //         error,
            //     });
            // };
        });

    //hides start-button, displays stop-button
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
    //colors the button
    document.getElementById('btnSend').style.backgroundColor = 'red';
};