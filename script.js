var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
   
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);


var questionsSection = document.getElementById("questionsSection");
questionsSection.style.display = "none";
var startBttn = document.getElementById("startBttn");



function startQuiz() {
  var startScreen = document.getElementById("startScreen");
  startScreen.style.display = "none";
  questionsSection.style.display = "block"

  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("JavaScript is a __ -side programming language", ["Client", "Server", "Both", "None"], "Both"),
    new Question("JavaScript is a __ -side programming language", ["Client", "Server", "Both", "None"], "Both"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which of the following will write the message “Hello DataFlair!” in an alert box?", ["alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"], "alert(“Hello DataFlair!”);"),
    new Question("Which JavaScript label catches all the values, except for the ones specified?", ["catch", "label", "try", "default"], "default")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();



}


startBttn.onclick = startQuiz;

