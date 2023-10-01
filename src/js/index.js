const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

let personagemSelecionado = document.querySelector(".personagem.selecionado");
let botaoSelecionado = document.querySelector(".botao.selecionado");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a classe 'selecionado' dos elementos anteriores
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }

        // Adiciona a classe 'selecionado' ao botão e ao personagem clicados
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        // Atualiza as referências dos elementos selecionados
        botaoSelecionado = botao;
        personagemSelecionado = personagens[indice];
    });
});
