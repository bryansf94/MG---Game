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

    $nextQuestion.classList.add("hide");
}

// Função para resetar o estado da interface
function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }
}

// Função para selecionar uma resposta
function selectAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct === "true";

    if (correct) {
        document.body.classList.add("correct");
        totalCorrect++;
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
    const totalQuestions = questions.length;
    const performance = Math.floor((totalCorrect * 100) / totalQuestions);

    let message;
    if (performance >= 90) {
        message = "Excelente :)";
    } else if (performance >= 70) {
        message = "Muito bom :)";
    } else if (performance >= 50) {
        message = "Bom";
    } else {
        message = "Pode melhorar :(";
    }

    alert(`Jogo terminado! ${message}`);

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">Questões acertadas ${totalCorrect} de ${totalQuestions} questões!</p>

        <span>Resultado: </span>

        <button onclick=window.location.reload() class="button"> Jogar novamente </button>
    `
}

// Banco de perguntas e respostas
const questions = [
    {
        question: "teste de pergunta",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: false },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: true },
        ],
    },
    {
        question: "teste de pergunta 002",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: true },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 003",
        answers: [
            { text: "resposta 01", correct: true },
            { text: "resposta 02", correct: false },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 004",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: true },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 005",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: true },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 006",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: false },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: true },
        ],
    },
    {
        question: "teste de pergunta 007",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: false },
            { text: "resposta 03", correct: true },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 008",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: true },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: false },
        ],
    },
    {
        question: "teste de pergunta 009",
        answers: [
            { text: "resposta 01", correct: false },
            { text: "resposta 02", correct: false },
            { text: "resposta 03", correct: false },
            { text: "resposta 04", correct: true },
        ],
    },
];
