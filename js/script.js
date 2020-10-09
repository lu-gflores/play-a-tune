const playSound = e => {
    const audio = (`audio[data-key="${e.keyCode}]"`);
    const key = $(`.key[data-key="${e.keyCode}]"`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

}