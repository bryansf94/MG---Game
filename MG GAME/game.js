// Variáveis globais
let jogadores = [];
let perguntas = [
    { pergunta: "O JavaScript é uma linguagem de programação?", resposta: true },
    { pergunta: "DevOps é uma prática de desenvolvimento ágil?", resposta: true },
    { pergunta: "MySQL é um sistema de banco de dados NoSQL?", resposta: false },
    { pergunta: "A linguagem Python foi criada por Guido van Rossum?", resposta: true },
    { pergunta: "Docker é uma ferramenta de virtualização?", resposta: false },
    { pergunta: "O Git é usado para controle de versão de código?", resposta: true },
    { pergunta: "O SQL é utilizado para gerenciar bancos de dados relacionais?", resposta: true },
    { pergunta: "O Node.js permite usar JavaScript no backend?", resposta: true },
    { pergunta: "Terraform é uma ferramenta para desenvolvimento de aplicativos?", resposta: false },
    { pergunta: "O Kubernetes é usado para orquestrar contêineres?", resposta: true }
];
let perguntaAtual = 0;
let pontuacoes = {};
let jogadoresCadastro = [];
let gameOver = false; // Controla se o jogo acabou

// Tela de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegando os valores dos jogadores
    let player1 = document.getElementById('player1').value.trim();
    let player2 = document.getElementById('player2').value.trim();
    let player3 = document.getElementById('player3').value.trim();
    let player4 = document.getElementById('player4').value.trim();

    // Verificar nomes únicos
    if (new Set([player1, player2, player3, player4]).size !== 4) {
        alert("Os nomes dos jogadores não podem ser repetidos.");
        return;
    }

    jogadoresCadastro = [player1, player2, player3, player4];
    jogadores = [...jogadoresCadastro];
    jogadores.forEach(jogador => pontuacoes[jogador] = 0); // Jogadores começam com 0 pontos

    // Esconde a tela de cadastro e mostra a tela de instruções
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('instrucoes').style.display = 'block';
});

// Tela de Instruções
document.getElementById('startGameBtn').addEventListener('click', function() {
    // Esconde a tela de instruções e mostra a tela de jogo
    document.getElementById('instrucoes').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';

    // Exibe a primeira pergunta e a pontuação
    exibirPergunta();
    exibirPontuacoes();
});

// Função para exibir pergunta
function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('perguntaText').textContent = pergunta.pergunta;
    document.getElementById('respostaErrada').textContent = '';
}

// Função para exibir pontuação
function exibirPontuacoes() {
    let scoreboard = '';
    jogadores.forEach(jogador => {
        scoreboard += `${jogador}: ${pontuacoes[jogador]} pontos<br>`;
    });
    document.getElementById('scoreboard').innerHTML = scoreboard;
}

// Verificar resposta
document.getElementById('trueBtn').addEventListener('click', function() {
    verificarResposta(true);
});

document.getElementById('falseBtn').addEventListener('click', function() {
    verificarResposta(false);
});

function verificarResposta(respostaEscolhida) {
    if (gameOver) return; // Se o jogo acabou, não permite mais respostas

    const respostaCorreta = perguntas[perguntaAtual].resposta;
    const jogadorAtual = jogadores[perguntaAtual % 4]; // Alterna entre jogadores a cada pergunta

    if (respostaEscolhida === respostaCorreta) {
        document.body.style.backgroundColor = '#00FF00'; // Fundo verde
        pontuacoes[jogadorAtual] += 100;
    } else {
        document.body.style.backgroundColor = '#FF0000'; // Fundo vermelho
        document.getElementById('respostaErrada').textContent = respostaCorreta ? "Resposta correta: Verdadeiro" : "Resposta correta: Falso";
    }

    perguntaAtual++;

    // Verifica se algum jogador alcançou 1000 pontos
    if (pontuacoes[jogadorAtual] >= 1000) {
        alert(`${jogadorAtual} venceu o jogo!`);
        gameOver = true;
        document.getElementById('reiniciarBtn').style.display = 'block'; // Botão de reiniciar
    } else if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            document.body.style.backgroundColor = '#111'; // Reset fundo
            exibirPergunta();
            exibirPontuacoes();
        }, 1000);
    } else {
        // Caso chegue ao fim das perguntas sem vencedor
        alert("O jogo terminou sem um vencedor.");
        gameOver = true;
        document.getElementById('reiniciarBtn').style.display = 'block'; // Botão de reiniciar
    }
}

// Reiniciar Jogo
document.getElementById('reiniciarBtn').addEventListener('click', function() {
    window.location.reload();
});

// Função para mostrar a tela de fim de jogo e exibir a pergunta
function fimDeJogo(vencedor) {
    // Oculta o conteúdo atual do jogo e exibe a tela de fim de jogo
    document.getElementById('instrucoes').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('fimJogo').style.display = 'flex';

    // Exibe a mensagem de vencedor ou de término
    if (vencedor) {
        document.getElementById('vencedorMensagem').textContent = `Parabéns ${vencedor}, você venceu!`;
    } else {
        document.getElementById('vencedorMensagem').textContent = 'Jogo terminado. Nenhum vencedor!';
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Oculta a tela de fim de jogo e exibe a tela de cadastro
    document.getElementById('fimJogo').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
    document.getElementById('mensagemAgradecimento').style.display = 'none';  // Esconde mensagem de agradecimento
    resetJogo();  // Função para resetar as variáveis do jogo, pontuação e jogadores
}

// Função para mostrar a mensagem de agradecimento
function mensagemAgradecimento() {
    // Oculta a tela de fim de jogo e exibe a mensagem de agradecimento
    document.getElementById('fimJogo').style.display = 'none';
    document.getElementById('mensagemAgradecimento').style.display = 'flex';
}

// Função para reiniciar o jogo
document.getElementById('btnReiniciarSim').addEventListener('click', reiniciarJogo);
document.getElementById('btnReiniciarNao').addEventListener('click', mensagemAgradecimento);

// Função para resetar o jogo (pontuação e jogadores)
function resetJogo() {
    // Zerar pontos dos jogadores e resetar qualquer outra variável relacionada ao estado do jogo
    jogadores = []; // Exemplo: Resetando o array de jogadores
    perguntasRespondidas = 0; // Resetando contador de perguntas respondidas
    // (Aqui você podemos adicionar o código necessário para reiniciar o estado do jogo)
    document.getElementById('startGameBtn').style.display = 'block'; // Mostrar o botão de "Começar Jogo" novamente
}
