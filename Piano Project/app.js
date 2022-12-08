const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysChecbox = document.querySelector('.keys-checkbox input');

let allKeys = [],
    audio = new Audio("tunes/a.wav"); // by defualt, audio src is a "a" tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // Passing audio src based on key pressed
    audio.play(); //Playing audio
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // Getting clicked key element
    clickedKey.classList.add('active');
    setTimeout(() => { // Removing active class after 150ms from the clicked key element
        clickedKey.classList.remove('active');
    }, 200);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
        // Calling playTune function with passing data-key value as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));

});

const handleVolume = (e) => {
    audio.volume = e.target.value; // Passing the range Slider value as an audio volume
}

const pressedKey = (e) => {
    //If the pressed key is in the allKeys array, only call the playTune function
    if (allKeys.includes(e.key)) playTune(e.key);
}

const showHideKeys = (e) => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysChecbox.addEventListener("click", showHideKeys);