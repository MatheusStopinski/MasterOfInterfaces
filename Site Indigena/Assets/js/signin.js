const bluePill = document.getElementById("pill-1");
const redPill = document.getElementById("pill-2");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("my-video");
const greeting = document.getElementById("greeting");
const msg1Container = document.getElementById("container-msg1");
const msg2Container = document.getElementById("container-msg2");
const msg3Container = document.getElementById("container-msg3");
const msg4Container = document.getElementById("container-msg4");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");
const loginBtn = document.getElementById("login-btn");

document.addEventListener("DOMContentLoaded", function () {
  
  bluePill.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/matheus_stopinski/";
  });

  redPill.addEventListener("click", function () {
    videoContainer.style.display = "block";
    video.src =
      "https://drive.google.com/uc?export=download&id=1YbUmJjPXCDFPzj0z7azbpnIbf1ZJz45m";
    video.load();
    video.play();
    bluePill.style.display = "none"; // Oculta
    redPill.style.display = "none"; // Oculta
  });

  video.addEventListener("loadedmetadata", function () {
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const videoContainerWidth = videoContainer.offsetWidth;
    const videoContainerHeight = videoContainer.offsetHeight;
    const containerRatio = videoContainerWidth / videoContainerHeight;
    const videoRatio = videoWidth / videoHeight;

    if (containerRatio > videoRatio) {
      video.style.width = "100%";
      video.style.height = "auto";
    } else {
      video.style.width = "auto";
      video.style.height = "100%";
    }
  });

  video.addEventListener("canplay", function () {
    video.play();
  });

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= -4 && video.currentTime <= 0) {
      greeting.style.visibility = "visible";
    } else {
      greeting.style.visibility = "hidden";
    }
  });

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 11.1 && video.currentTime <= 26) {
      msg1Container.style.display = "block";
      msg1.style.visibility = "visible";
    } else {
      msg1Container.style.display = "none";
      msg1.style.visibility = "hidden";
    }
  });

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 26.7 && video.currentTime <= 40.5) {
      msg2Container.style.display = "block";
      msg2.style.visibility = "visible";
    } else {
      msg2Container.style.display = "none";
      msg2.style.visibility = "hidden";
    }
  });

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 41.5 && video.currentTime <= 49.7) {
      msg3Container.style.display = "block";
      msg3.style.visibility = "visible";
    } else {
      msg3Container.style.display = "none";
      msg3.style.visibility = "hidden";
    }
  });

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 81.6 && video.currentTime <= 93.9) {
      msg4Container.style.display = "block";
      msg4.style.visibility = "visible";
    } else {
      msg4Container.style.display = "none";
      msg4.style.visibility = "hidden";
    }
  });

  video.addEventListener("ended", function () {
    loginBtn.style.display = "block";
  });

  loginBtn.addEventListener("click", function () {
    window.location.href =
      "";
  });
});

/* NOTA: Por ser minha primeira vez, 
notei que quero sempre fazer algo a mais, só que isso não tem fim. 
 Então mesmo não querendo, 
 decedi finalizar por aqui, para poder dar inicio  a outros projetos!
 13/09/2023 Parabéns "My Good" to orgulhoso de vc, 
 desejo que seu trajeto seja cada vez mais criativo, afinal isso te move. */
