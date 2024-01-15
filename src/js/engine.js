const pianoKeys = document.querySelectorAll(".piano_keys .key");
const volumeSlider = document.querySelector(".volume_slider input");
const keysCheck = document.querySelector(".keys_check input");

let audio = new Audio("src/tunes/a.wav");  

let maped = [];

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clicked = document.querySelector(`[data-key="${key}"]`);
        clicked.classList.add("active");
        setTimeout(() => {
        clicked.classList.remove("active");
        }, 150);
};



pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
    maped.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => { //o "e" aqui é elemento. Nesse caso para ser refeênte a qualquer tecla.
    if (maped.includes(e.key)) {
        playTune(e.key)        
    } 
})

const handeleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handeleVolume);

keysCheck.addEventListener("click", showHideKeys);