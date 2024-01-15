
const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card_name"),
        type: document.getElementById("card_type"),
    }, 
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides: {
        player1: "player-cards",
        player1BOX: document.querySelector("#player-cards"),
        
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards"),
    },
    action: {
        button: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
};

const pathImages = "./src/assets/icons/";

const cardData = [ // Enumerei as cartas para dar um sentido.
    {
        id: 0,
        name: "White Dragon",
        type: "Papel",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
];

// Objetivo dessa função é gerar um numero aleatorio.
async function getRandomCardId(){ //Math.random() = calcular.numeroAleatorio.
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id; 
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img"); // As "Tags" para o navegador são elementos.
    cardImage.setAttribute("height", "100px"); // css aqui, wow!!!
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1) {
          //mouseover = pausar o mause em cima.
        cardImage.addEventListener("mouseover", () => { 
            drawSelectCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    } 
    return cardImage;
}

async function setCardsField(cardId) {
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId(); //sorteia cartas aleatorias

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    await hiddenCardDetails();

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId); //pra ver quem ganhou
    
    await updateScore();
    await drawButton(duelResults);

}

async function hiddenCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "Rock, Papel, Scissors";
    state.cardSprites.type.innerText = "- ? -";
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | lose: ${state.score.computerScore}`;
}

async function drawButton(text) {
    state.action.button.innerText = text.toUpperCase();
    state.action.button.style.display = "block";
}

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "draw";
    let playerCard = cardData[playerCardId];

    if (playerCard.winOf.includes(computerCardId)) {
        duelResults = "win";        
        state.score.playerScore++

    } if (playerCard.loseOf.includes(computerCardId)) {
        duelResults = "lose";        
        state.score.computerScore++
    }
    await playAudio(duelResults);
    return duelResults;
}

async function removeAllCardsImages(){

    let {computerBOX, player1BOX} = state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img"); 
    imgElements.forEach((img) => img.remove());

    imgElements = player1BOX.querySelectorAll("img"); 
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attibute: " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId(); //Primeiro pensa na logica depois no motor, "Sabedoria para programar!"
        const cardImage = await createCardImage(randomIdCard, fieldSide); 
        
        document.getElementById(fieldSide).appendChild(cardImage);
    };
}

async function resetDuel(){
     state.cardSprites.avatar.src = "";
     state.action.button.style.display = "none";
     state.fieldCards.player.style.display = "none";
     state.fieldCards.computer.style.display = "none";
     init ();
}

async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    try {
        audio.play();        
    } catch (error) {
        
    }
}

function init() {
    
    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"

    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);

    const bgm = document.getElementById("bgm");
    bgm.play();
}

init (); // Primeira função para iniciar os jogos