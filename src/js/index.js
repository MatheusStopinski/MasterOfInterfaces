const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");
const personagemSelecionado = document.querySelector(".personagem.selecionado");
const botaoSelecionado = document.querySelector(".botao.selecionado");

botoes.forEach(botao, indice) => {
    botao.addEventListener("click", () => {
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
     
     personagemSelecionado.classList.remove("selecionado");   

    personagens[indice].classList.add("selecionado");
    });
});


