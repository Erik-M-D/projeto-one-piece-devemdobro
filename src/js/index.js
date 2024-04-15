const botoes = document.querySelectorAll(".botao");

// adicionar selecionado na classe do botao escolhido

const personagens = document.querySelectorAll(".personagem");

// identificar qual o personagem do botão selecionado == usar se ARRAY

// o forEach tem um indice | com 2 argumentos coloca ()
botoes.forEach((botao, indice) => {
    // colocando listiner em cada botao
    botao.addEventListener("click", () => {
        // removendo o "selecionado" existente
        desselecionarBotao();
        botao.classList.add("selecionado");
        // mexendo no personagens
        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado")
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

