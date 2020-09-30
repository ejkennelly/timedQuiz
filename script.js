var mainDisplay = document.querySelector(".mainDisplay");
var startButton = document.querySelector("#startButton");
var highScores = document.querySelector("#scoreContainer");
var answerButtons = document.querySelector("#buttons");
var timer = document.querySelector("#timer");
var timeLeft = 100;
var quizIndex = 0;
var quizFinished = false;

var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"
    }
]
// FUNCTIONS

$(document).ready(function () {

    //Hide start button on click
    $("#startButton").on("click", function () {
        $(startButton).hide();
       
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
        //function to display quiz questions
        displayQuestion(quizIndex);
        // answerCheck(quizIndex);
        function displayQuestion(index) {
            if (index >= quiz.length) {
                quizFinished = true;
            }
            else {
                mainDisplay.textContent = quiz[index].question;
                
                for (var i=0; i<4; i++) {
                    var quizAnswers = document.createElement("button");
                    quizAnswers.setAttribute("class", "btn btn-primary m-1");
                    quizAnswers.setAttribute("id", (i + 1).toString())
                    if (i == 0)
                        quizAnswers.textContent = quiz[index].answers[i];
                        else if (i ==1)
                        quizAnswers.textContent = quiz[index].answers[i];
                        else if (i == 2)
                        quizAnswers.textContent = quiz[index].answers[i];
                        else 
                        quizAnswers.textContent = quiz[index].answers[i];
                        answerButtons.append(quizAnswers)
                }
            }
        }
            //loop through quiz questions
            //Answer click moves onto next question 
            //After last question, score screen displays with input for initials
            //Store time and input in local storage
        



    })
})
