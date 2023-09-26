const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

let currentTrack = 0;
const tracks = [
 "https://65381g.ha.azioncdn.net/7/9/a/6/matheus-stopinski-0-37d88ba0.mp3", 
"https://65381g.ha.azioncdn.net/d/2/7/7/matheus-stopinski-1-2c049065.mp3", "https://65381g.ha.azioncdn.net/8/5/5/d/matheus-stopinski-4-b8ac26d0.mp3", "https://65381g.ha.azioncdn.net/4/8/0/9/matheus-stopinski-2-0244da5a.mp3", 
"https://65381g.ha.azioncdn.net/b/c/2/0/matheus-stopinski-3-71c68ea1.mp3", "https://65381g.ha.azioncdn.net/3/2/6/4/matheus-stopinski-5-337d153e.mp3",   
];

playButton.addEventListener("click", () => {
  audio.volume = 0.4;
  audio.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline";
});

pauseButton.addEventListener("click", () => {
  audio.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "inline";
});

nextButton.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
});

prevButton.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
});

document.addEventListener("DOMContentLoaded", function() {

  const banner = document.querySelector(".banner");
  const indiaImage = document.querySelector(".india");
  const promo = document.querySelector(".Oferta");
  const frase = document.querySelector(".frase");
  const music = document.querySelector(".music");
  
  function animateBannerElements() {
    indiaImage.style.left = "-8%";
    promo.style.right = "0px";
    frase.style.top = "142px";
    music.style.bottom = "-320px";
    setTimeout(() => {
      banner.removeEventListener("mouseenter", animateBannerElements);
    }, 2500); 
  }

  banner.addEventListener("mouseenter", animateBannerElements);
  

});

window.addEventListener("scroll", function () {
      var elementosDiv = document.querySelector(".elementos");
      var scrollPosition = window.scrollY;

      if (scrollPosition >= 60) {
        elementosDiv.classList.add("fix-top");
      } else {
        elementosDiv.classList.remove("fix-top");
      }
    });

