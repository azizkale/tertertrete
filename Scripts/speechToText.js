//Convert user's voice message into text message
let mediaRecorder;
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
            const socket = new WebSocket(
                "wss://api.deepgram.com/v1/listen?language=tr", ["token", config.TOKEN_DEEPGRAM]
            );
            socket.onopen = () => {
                console.log({
                    event: "onopen",
                });
                mediaRecorder.start(1000);
                mediaRecorder.addEventListener("dataavailable", async(event) => {
                    if (event.data.size > 0 && socket.readyState == 1) {
                        // socket.send(event.data);
                        let result = event.data;
                        SPEECH.start({
                            min_confidence: 0.2,
                        });
                        SPEECH.onResult(function(result) {

                            console.log(result.transcript)
                            document.getElementById('sss').innerText = result.transcript
                        });
                    }
                });

            };

            socket.onmessage = async(message) => {
                const received = JSON.parse(message.data);
                const transcript = received.channel.alternatives[0].transcript;
                if (transcript && received.is_final) {
                    //   ==================
                    console.log(transcript)
                    await sendMessageToScreen(transcript, "left")
                    await mediaRecorder.stop();
                    await sendRequestToChatGPT(transcript);
                    await socket.close();
                    //   ==================

                }
            };

            socket.onclose = () => {
                console.log({
                    event: "onclose",
                });
            };

            socket.onerror = (error) => {
                console.log({
                    event: "onerror",
                    error,
                });
            };
        });

    //hides start-button, displays stop-button
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
    //colors the button
    document.getElementById('btnSend').style.backgroundColor = 'red';
};