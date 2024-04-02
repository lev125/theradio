function handleVolumeChange(volume) {
    console.log('Громкость:', volume);
    // Дополнительные действия с громкостью
}

function setLocalVolume(volume) {
    webrtc.setVolumeForLocal(volume);
}
