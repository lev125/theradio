var webrtc = new SimpleWebRTC();

webrtc.on('readyToCall', function () {
    console.log('Готово к установлению связи');
});

webrtc.on('stream', function (stream) {
    console.log('Получен поток');
    var audio = new Audio();
    audio.srcObject = stream;
    audio.play();
    audio.addEventListener('volumechange', function () {
        handleVolumeChange(audio.volume);
    });
});

webrtc.on('localStream', function (stream) {
    console.log('Локальный поток создан');
});

function startCall() {
    webrtc.startLocalAudio();
}

function stopCall() {
    webrtc.stopLocalAudio();
}
