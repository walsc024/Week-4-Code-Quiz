const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var quizQuestions = [{
    question: "Ask a question",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
    answer: 2,
}, {
    question: "Ask a question",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
    correctAnswer: 2,
}, {
  question: "Ask a question",
  choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
  correctAnswer: 2,
},{
  question: "Ask a question",
  choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
  correctAnswer: 2,
},{
  question: "Ask a question",
  choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
  correctAnswer: 2,
}]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3


var questionsSection = document.getElementById("questionsSection");
questionsSection.style.display = "none";
var startBttn = document.getElementById("startBttn");



function startQuiz() {
  var startScreen = document.getElementById("startScreen");
  startScreen.style.display = "none";
  questionsSection.style.display = "block"
  questionCounter = 0;
  score = 0;
  availableQuestions = [...quizQuestions]
  console.log(availableQuestions);
  getNewQuestion();
  
};

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choices => {
    const number = choices.dataset ['number'];
    choices.innerText = currentQuestion['choice' + number];
  })
};

startQuiz();



startBttn.onclick = startQuiz;