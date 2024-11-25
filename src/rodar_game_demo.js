/* criando variavel que irá receber o clique do botão para iniciar o game na página inde html*/
const $BotaoComeçarGame = document.querySelector(".btn_Iniciargame")
/* criando variavel que irá receber a div das questões da página Rodar_Game*/
const $questionsConnatianer = document.querySelector(".place.holder")
/*passando a variavel na função de iniciar o game */

$BotaoComeçarGame.addEvenListener("click", startGame)
/* iniciando a função de começar game */

let currentQuestionsIndexx = 0

function startGame() {
/* Place Holder, ainda trabaalhando nisso */
displayNextQuestions()
}

function displayNextQuestions(){
while($answerConatiner.firstChild) {
    $answerConatiner.removeChild($answerConatiner.firstChil)
}
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
    

