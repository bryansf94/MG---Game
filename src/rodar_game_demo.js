// Seleção de elementos da página
const $botaoComecarGame = document.querySelector(".btn_Iniciargame");
const $questionsContainer = document.querySelector(".questions-container");
const $nextQuestion = document.querySelector(".next-question");
const $questionText = document.querySelector(".questions");
const $answersContainer = document.querySelector(".answers-container");

// Adicionando event listeners
$botaoComecarGame.addEventListener("click", startGame);
$nextQuestion.addEventListener("click", displayNextQuestions);

// Variáveis de estado
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Função para iniciar o jogo
function startGame() {
<<<<<<< HEAD
    
    $questionsContainer.classList.remove("hide");
=======
    $botaoComecarGame.classList.add("hide")
    $questionsContainer.classList.remove("hide")
>>>>>>> c16fba3e00cbe322fc536ed4c6e0264f15eb77a4
    displayNextQuestions();
    $botaoComecarGame.classList.add("hide"); 
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
<<<<<<< HEAD
    const totalQuestions = questions.length;
    const performance = Math.floor((totalCorrect * 100) / totalQuestions);
    $nextQuestion.classList.add("hide"); 
    $questionText.classList.add("hide"); 
=======
    const totalQuestions = questions.length * 100;
    const performance = totalCorrect;

>>>>>>> c16fba3e00cbe322fc536ed4c6e0264f15eb77a4

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

<<<<<<< HEAD
        <span>
            Resultado: <br> 
            Player 1 <br>
            Player 2 <br>
            Player 3
        </span>
=======
        <span>Obrigado por ter participado! </span>
>>>>>>> c16fba3e00cbe322fc536ed4c6e0264f15eb77a4

        <button onclick=window.location.reload() class="button"> Jogar novamente </button>
    `
}

// Banco de perguntas e respostas
const questions = [
    {
      question: "Dentro de qual elemento HTML colocamos o JavaScript?",
      answers: [
        { text: "<javascript>", correct: false },
        { text: "<js>", correct: false },
        { text: "<script>", correct: true },
        { text: "<scripting>", correct: false }
      ]
    },
    {
      question: "Onde é o lugar correto para inserir JavaScript?",
      answers: [
        { text: "Tanto no <head> quanto no <body> está correto", correct: true },
        { text: "No <body>", correct: false },
        { text: "No <head>", correct: false },
        { text: "Em outro lugar", correct: false }
      ]
    },
    {
      question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
      answers: [
        { text: '<script src="xxx.js">', correct: true },
        { text: '<script href="xxx.js">', correct: false },
        { text: '<script name="xxx.js">', correct: false },
        { text: "Nenhuma das alternativas", correct: false }
      ]
    },
    {
      question: 'O arquivo JavaScript externo deve conter a tag <script>',
      answers: [
        { text: "Verdadeiro", correct: false },
        { text: "Falso", correct: true }
      ]
    },
    {
      question: 'Como escrever "Hello World" numa caixa de alerta?',
      answers: [
        { text: 'msg("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false }
      ]
    },
    {
      question: 'Como podemos criar uma função no JavaScript?',
      answers: [
        { text: 'function:myFunction()', correct: false },
        { text: 'function myFunction()', correct: true },
        { text: 'function = myFunction()', correct: false },
        { text: 'Nenhum desses códigos criaria uma função', correct: false }
      ]
    },
    {
      question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
      answers: [
        { text: 'call minhaFuncao()', correct: false },
        { text: 'call function minhaFuncao()', correct: false },
        { text: 'Nenhum desses códigos chamaria essa função', correct: false },
        { text: 'minhaFuncao()', correct: true },
      ]
    },
    {
        question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
        answers: [
          { text: 'call minhaFuncao()', correct: false },
          { text: 'call function minhaFuncao()', correct: false },
          { text: 'Nenhum desses códigos chamaria essa função', correct: false },
          { text: 'minhaFuncao()', correct: true },
        ]
      },
      {
        question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
        answers: [
          { text: 'call minhaFuncao()', correct: false },
          { text: 'call function minhaFuncao()', correct: false },
          { text: 'Nenhum desses códigos chamaria essa função', correct: false },
          { text: 'minhaFuncao()', correct: true },
        ]
      },
  ]