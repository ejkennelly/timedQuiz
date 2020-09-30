var mainDisplay = document.querySelector(".mainDisplay");
var startButton = document.querySelector("#startButton");
var highScores = document.querySelector("#scoreContainer");
var answerButtons = document.querySelector("#buttons");
var timer = document.querySelector("#timer");
var answerDisplay = document.querySelector("#answers");
var timeLeft = 100;
var quizIndex = 0;
var quizFinished = false;

var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        answer1: "strings",
        answer2:"booleans",
        answer3:"alerts",
        answer4:"numbers",
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answer1: "quotes",
        answer2: "curly brackets", 
        answer3: "parentheses", 
        answer4: "square brackets",
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answer1: "numbers and strings",
        answer2: "other arrays", 
        answer3: "booleans", 
        answer4: "all of the above",
        correct: "all of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript", 
        answer2: "terminal/bash", 
        answer3: "for loops", 
        answer4: "console.log",
        correct: "console.log"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets", 
        answer3: "quotes",
        answer4: "parentheses",
        correct: "quotes"
    }
]
// FUNCTIONS
function displayQuestion(index) {
    if (index >= quiz.length) {
        quizFinished = true;
    }
    else {
        mainDisplay.textContent = quiz[index].question;

        for (var i = 0; i < 4; i++) {
            var quizAnswers = document.createElement("button");
            quizAnswers.setAttribute("id", (i + 1).toString())
            if (i == 0)
                quizAnswers.textContent = quiz[index].answer1;
            else if (i == 1)
                quizAnswers.textContent = quiz[index].answer2;
            else if (i == 2)
                quizAnswers.textContent = quiz[index].answer3;
            else
                quizAnswers.textContent = quiz[index].answer4;
            answerButtons.append(quizAnswers);
        }
    }
};
function answerCheck(quizIndex) {
    var allAnswers = document.querySelectorAll("button");
    for (var i = 0; i < allAnswers.length; i++) {
        allAnswers[i].addEventListener("click", function () {
            if (this.id === quiz[quizIndex].correct) {
                redraw(quizIndex);
                answerDisplay.textContent = "Correct!";
            }
            else {
                timeLeft -= 10;
                redraw(quizIndex);
                answerDisplay.textContent = "Wrong!"
            }
        })
    }
};
function clearButtons() {
    $("#buttons").on("click", function() {
        answerButtons.empty(answerDisplay);
    })
}
function redraw(quizIndex){
    quizIndex++;
    buttons.innerHTML=""
    displayQuestion(quizIndex);
    answerCheck(quizIndex);
};
$(document).ready(function () {

    //Hide start button on click
    $("#startButton").on("click", function () {
        $(startButton).hide();
        displayQuestion(quizIndex);
        answerCheck(quizIndex);
        // Set up timer to start when Start button is clicked
        var quizTimer = setInterval(function () {
            if (timeLeft === -1) {
                clearInterval(quizTimer);
                window.alert("You ran out of time!");

            } else {
                timer.innerHTML = timeLeft + " seconds left."
            }
            //if Answer is incorrect subtract 10 
            timeLeft--;

        }, 1000);


        //loop through quiz questions
        //Answer click moves onto next question 
        //After last question, score screen displays with input for initials
        //Store time and input in local storage




    })
})
