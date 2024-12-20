// Seleção de elementos da página
const $botaoComecarGame = document.querySelector(".btn_Iniciargame");
const $questionsContainer = document.querySelector(".questions-container");
const $nextQuestion = document.querySelector(".next-question");
const $questionText = document.querySelector(".questions");
const $answersContainer = document.querySelector(".answers-container");

const $conteudoGlobal = document.querySelector(".conteudo_form");
const $containerForm = document.querySelector(".form");
const $nomeJogadores = document.querySelector(".txt_nome_players");
const $quantidadePontos = document.querySelector(".txt_qtd_pontos");

const $botaoCadastrarNome = document.querySelector(".btn_cadastrar");
const $resultado = document.querySelector(".resultado");
const $botaoConcluir = document.querySelector(".btn_concluir");
const $containerGame = document.querySelector(".container_perguntas");

let $nomes = [];

$botaoCadastrarNome.addEventListener("click", adicionarNome);
$botaoConcluir.addEventListener("click", alternarContainers);

//Adicionando os Nomes
function adicionarNome(){
  
  let $nome = $nomeJogadores.value;
  
  if($nome.trim().length === 0){
    alert("Error! Preencha os nomes dos jogadores.");
  }else{
    $nomes.push($nome);
    
    $resultado.innerHTML = `
    <h4>Nomes Cadastrados:</h4>
    <h5>Total de Pontos: ${$quantidadePontos.value}</h5>
    <ul> 
    <li> 
    <span>${$nomes.map(($nome, index) => `${index + 1} - ${$nome}`).join('<br>')}</span> </li> </ul>
  `;
  };
  
  $nomeJogadores.value = "";

  if($nomes.length == 4){
    $botaoCadastrarNome.classList.add("hide");
    $botaoConcluir.classList.remove("hide");
  };
};

//Aternando entre a exibição dos containers
function alternarContainers(){
  $containerGame.classList.remove("hide");
  $conteudoGlobal.classList.add("hide");
};

// Adicionando event listeners
$botaoComecarGame.addEventListener("click", startGame);
$nextQuestion.addEventListener("click", displayNextQuestions);

// Variáveis de estado
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Função para iniciar o jogo
function startGame() {
    $botaoComecarGame.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestions();
    
}

// Função para exibir a próxima pergunta
function displayNextQuestions() {
    resetState();

    if (currentQuestionIndex >= questions.length) {
        return finishGame();
    }

    document.body.removeAttribute("class");
    const currentQuestion = questions[currentQuestionIndex];
    $questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }

        $answersContainer.appendChild(newAnswer);
        newAnswer.addEventListener("click", selectAnswer);
    });

}

// Função para resetar o estado da interface
function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }
  document.body.removeAttribute("class")
  $nextQuestion.classList.add("hide")
}

// Função para selecionar uma resposta
function selectAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct === "true";

    if (correct) {
        document.body.classList.add("correct");
        totalCorrect = totalCorrect + 100;
        alert(`Você ganhou 100 pontos!`);
    } else {
        document.body.classList.add("incorrect");
    }

    Array.from($answersContainer.children).forEach(button => {
        const correct = button.dataset.correct === "true";
        button.classList.add(correct ? "correct" : "incorrect");
        button.disabled = true;
    });

    $nextQuestion.classList.remove("hide");
    currentQuestionIndex++;
}

// Função para finalizar o jogo
function finishGame() {
    const totalQuestions = questions.length * 100;
    const performance = totalCorrect;


    let message;
    if (performance >= 900) {
        message = "Excelente! Você é quase um gerente de TI!)";
    } else if (performance >= 700) {
        message = "Muito bom :)";
    } else if (performance >= 500) {
        message = "Bom";
    } else {
        message = "Pode melhorar :(";
    }

    alert(`Jogo terminado! ${message}`);

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">Você pontuou ${totalCorrect} de ${totalQuestions} pontos possíveis!</p>

        <span>Obrigado por ter participado! </span>

        <button onclick=window.location.reload() class="button"> Jogar novamente </button>
    `
}

// Banco de perguntas e respostas
const questions = [
  {
    question: "A primeira linguagem de programação de alto nível foi o Fortran, desenvolvida nos anos 1950.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O ciclo de vida de um projeto de software geralmente inclui as fases de planejamento, execução e encerramento.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "A metodologia Agile é conhecida por ser rígida e não adaptável a mudanças durante o desenvolvimento de software.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "O teste de unidade é um tipo de teste de software onde unidades individuais de código são testadas isoladamente.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O modelo em cascata é uma abordagem iterativa para o desenvolvimento de software.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "O Git é uma ferramenta de controle de versão distribuída criada por Linus Torvalds em 2005.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O QA (Quality Assurance) envolve apenas a execução de testes automatizados em software.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "O Scrum é uma estrutura dentro da metodologia Agile que facilita a colaboração em projetos complexos.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O DevOps é uma cultura e prática que visa unificar o desenvolvimento de software (Dev) e a operação de software (Ops).",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O processo de teste de software nunca deve ser planejado e deve ser sempre improvisado para obter melhores resultados.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Em redes de computadores, um switch opera na camada de rede do modelo OSI.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "O protocolo TCP é orientado à conexão e garante a entrega dos dados na mesma ordem em que foram enviados.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O DNS (Domain Name System) é responsável por traduzir endereços IP em nomes de domínio legíveis.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "No modelo de rede OSI, a camada de apresentação é responsável por estabelecer, gerenciar e encerrar conexões entre aplicativos.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Um firewall é uma ferramenta que monitora e controla o tráfego de rede com base em regras de segurança pré-determinadas.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O protocolo HTTPS é uma versão segura do HTTP, utilizando SSL/TLS para criptografar a comunicação.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Em um banco de dados relacional, a integridade referencial é garantida pelo uso de chaves primárias e chaves estrangeiras.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "A normalização de banco de dados é o processo de organizar os dados para reduzir a redundância e melhorar a integridade dos dados.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "O comando SQL 'JOIN' é usado para combinar linhas de duas ou mais tabelas com base em uma condição relacionada.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Em um banco de dados, o índice é uma estrutura de dados que melhora a velocidade das operações de consulta em uma tabela.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  }
];
