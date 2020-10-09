const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!key) return;
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
}

const removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitioned', removeTransition))
window.addEventListener('keydown', playSound)
