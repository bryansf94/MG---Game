/* criando variavel que irá receber o clique do botão para iniciar o game na página inde html*/
const $BotaoComeçarGame = document.querySelector(".btn_Iniciargame")
/* criando variavel que irá receber a div das questões da página Rodar_Game*/
const $questionsConnatianer = document.querySelector(".place.holder")
/*passando a variavel na função de iniciar o game */

$BotaoComeçarGame.addEvenListener("click", startGame)
/* iniciando a função de começar game */

let currentQuestionsIndexx = 0;

function startGame() {
/* Place Holder, ainda trabaalhando nisso */
displayNextQuestions()
}

function displayNextQuestions(){
while($answerConatiner.firstChild) {
    $answerConatiner.removeChild($answerConatiner.firstChil)
}
// Define o texto da pergunta atual
$questionText.textContent = questions[currentQuestionIndex].question

// Itera sobre cada resposta disponível para a pergunta atual
questions[currentQuestionIndex].answers.forEach(answer => {
    // Cria um novo botão para a resposta
    const newAsnwer = document.createElement("button")
    
    // Adiciona classes ao botão, estilizando-o como um botão de resposta
    newAsnwer.classList.add("button", "answer")
    
    // Define o texto do botão como o texto da resposta
    newAsnwer.textContent = answer.text
    
    // Se a resposta for correta, adiciona um atributo de dados 'correct' ao botão
    if (answer.correct) {
        newAsnwer.dataset.correct = answer.correct
    }
    
    // Adiciona o botão de resposta ao contêiner de respostas na interface
    $answerConatiner.appendChild(newAsnwer)

    // Adiciona um evento de clique ao botão de resposta para que, ao ser clicado,
    // a função 'selectAnswer' seja executada
    newAsnwer.addEventListener("click", selectAnswer)
})
/* função que captura o evento da resposta selecionada pelo usuário e então confere se ela possui o atributo "correct" */

function selectAnswer(event) {
const ansClicked = event.target

if(answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    // essas classes são para manipular um atributo no css e indicar se a resposta está correta ou não, talvez podemos reutilizados //
} else {
    document.body.classList.add("incorrect")
}
document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct){

    }
})
}















/* banco de perguntas e respostas que serão utilizadas em forma de objeto*/
const questions = [
    {
        questions: "teste de pergunta",
        answers: [
            {text: "resposta 01" , correct: false },
            {text: "resposta 02" , correct: false },
            {text: "resposta 03" , correct: false },
            {text: "resposta 04" , correct: true },


        ]

    },
    {
   questions: "teste de pergunta 002",
        answers: [
            {text: "resposta 01" , correct: false },
            {text: "resposta 02" , correct: true },
            {text: "resposta 03" , correct: false },
            {text: "resposta 04" , correct: false },


        ]

    },
    {
        questions: "teste de pergunta 003",
             answers: [
                 {text: "resposta 01" , correct: true },
                 {text: "resposta 02" , correct: false },
                 {text: "resposta 03" , correct: false },
                 {text: "resposta 04" , correct: false },
     
     
             ]
     
         },
         {
            questions: "teste de pergunta 004",
                 answers: [
                     {text: "resposta 01" , correct: false },
                     {text: "resposta 02" , correct: true },
                     {text: "resposta 03" , correct: false },
                     {text: "resposta 04" , correct: false },
         
         
                 ]
         
             },
             {
                questions: "teste de pergunta 005",
                     answers: [
                         {text: "resposta 01" , correct: false },
                         {text: "resposta 02" , correct: true },
                         {text: "resposta 03" , correct: false },
                         {text: "resposta 04" , correct: false },
             
             
                     ]
             
                 },
                 {
                    questions: "teste de pergunta 006",
                         answers: [
                             {text: "resposta 01" , correct: false },
                             {text: "resposta 02" , correct: false },
                             {text: "resposta 03" , correct: false },
                             {text: "resposta 04" , correct: true },
                 
                 
                         ]
                 
                     },
                     {
                        questions: "teste de pergunta 007",
                             answers: [
                                 {text: "resposta 01" , correct: false },
                                 {text: "resposta 02" , correct: false },
                                 {text: "resposta 03" , correct: true },
                                 {text: "resposta 04" , correct: false },
                     
                     
                             ]
                     
                         },
                         {
                            questions: "teste de pergunta 008",
                                 answers: [
                                     {text: "resposta 01" , correct: false },
                                     {text: "resposta 02" , correct: true },
                                     {text: "resposta 03" , correct: false },
                                     {text: "resposta 04" , correct: false },
                         
                         
                                 ]
                         
                             },
                             {
                                questions: "teste de pergunta 009",
                                     answers: [
                                         {text: "resposta 01" , correct: false },
                                         {text: "resposta 02" , correct: false },
                                         {text: "resposta 03" , correct: false },
                                         {text: "resposta 04" , correct: true },
                             
                             
                                     ]
                             
                                 }


]
    

