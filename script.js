


var quizQuestions = [{
    question: "Ask a question",
    questionChoices: ["1", "2", "3"],
    correctAnswer: "2"
}, {
    question: "Ask a question",
    questionChoices: ["1", "2", "3"],
    correctAnswer: "2"
}, {
  question: "Ask a question",
  questionChoices: ["1", "2", "3"],
  correctAnswer: "2"
},{
  question: "Ask a question",
  questionChoices: ["1", "2", "3"],
  correctAnswer: "2"
},{
  question: "Ask a question",
  questionChoices: ["1", "2", "3"],
  correctAnswer: "2"
}]




var questionsSection = document.getElementById("questionsSection");
questionsSection.style.display = "none";
var startBttn = document.getElementById("startBttn");

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var oneMinute = 60 * 1,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
//};

function startQuiz() {
  var startScreen = document.getElementById("startScreen");
  startScreen.style.display = "none";
  questionsSection.style.display = "block";


}

startBttn.onclick = startQuiz;
