
const state = {
    view: {
      squares: document.querySelectorAll(".square"), // ALL pq poed ter mais de 1.
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score"),
    },
    values: {
      gameVelocity: 400,
      hitPosition: 0,
      result: 0,
      currentTime: 30,
    },
    actions: {
      timerId: null,
      countDownTimerId: null,
      backgroundMusic: null,
    },
  };
  
  // Função para iniciar o jogo  // state é para acessar 
  function initializeGame() {
    playBackgroundMusic(); 
    addListenerHitBox();
    state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity); 
    state.actions.countDownTimerId = setInterval(countDown, 500);    
    document.getElementById("startButton").disabled = false;   
  }
  
  // Função para reproduzir o som
  function playSound(audioName) {
    let audio = new Audio(`../src/audios/${audioName}.mp3`);
    audio.volume = 0.2;
    audio.play();
  }

  // Função para reproduzir a música de fundo
  function playBackgroundMusic() {
    stopBackgroundMusic(); // Para garantir que a música anterior pare antes de tocar uma nova
    state.actions.backgroundMusic = new Audio("../src/audios/trilhaSonora.mp3");
    state.actions.backgroundMusic.volume = 0.4;
    state.actions.backgroundMusic.loop = true;
    state.actions.backgroundMusic.play();
  }
  
  // Função para parar a música de fundo
  function stopBackgroundMusic() {
    if (state.actions.backgroundMusic) {
      state.actions.backgroundMusic.pause();
      state.actions.backgroundMusic.currentTime = 30; // Reinicia a música
    }
  }
  
  // Função para reproduzir a música "gameover"
  function playGameOverMusic() {
    stopBackgroundMusic(); // Para parar a música de fundo antes de tocar a música de gameover
    let audio = new Audio("../src/audios/gameover.mp3");
    audio.volume = 0.4;
    audio.play();
  }
  
  // Função para reiniciar o jogo
  function restartGame() {
    resetGame();
    initializeGame();
    
  }
  
  // Função para zerar tudo e reiniciar o jogo
  function resetGame() {
    state.values.hitPosition = 0;
    state.values.result = 0;
    state.values.currentTime = 30;
    
    state.view.timeLeft.textContent = state.values.currentTime;
    state.view.score.textContent = state.values.result;    
  }
  
  // Função para decrementar o tempo e verificar se o jogo acabou
  function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
  
    if (state.values.currentTime <= 0) {
      clearInterval(state.actions.countDownTimerId);
      clearInterval(state.actions.timerId);
      playGameOverMusic(); // Chama a função para tocar a música "gameover"
      setTimeout(() => {
        if (state.values.result > 13) {
            alert("Parabéns você é muito bom! Seu resultado foi de: " + state.values.result + " Perfect.");
        } else if (state.values.result > 9 && state.values.result <= 13){
            alert("Até que mandou bem! Seu resultado foi de: " + state.values.result + ", será se é o suficiente?");            
        } else {
            alert("Só esse tantinho " + state.values.result + ". Dizem que tamanho faz diferença eim.");            
        }        
      }, 500); // Atrasa o alerta em 0.5 segundo após a reprodução da música "gameover"
    }
  }
    
  // Função para gerar 15 quadrados aleatórios, assim ele some e aparece
  function randomSquare() {
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  
    let randomNumber = Math.floor(Math.random() * 15);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
  }
  
  // Adiciona evento de clique nos quadrados
  function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit");
        }
      });
    });
  }
  
  // Inicializa o jogo
  function initialize() {
    initializeGame();
    addListenerHitBox();
  }  

  // Chama a função de inicialização
  initialize();