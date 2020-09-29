var quizQuestions = document.querySelector("#quiz");
var startButton = document.querySelector("#startButton");
var highScores = document.querySelector("#scoreContainer");

var timer = document.querySelector("#timer");
var timeLeft = 100;

var quiz= [
  {  
      question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans","alerts","numbers"],
        correct: "alerts"
  },
     { 
         question: "The condition in an if/else statement is enclosed within _______.",
         answers: ["quotes","curly brackets","parentheses","square brackets"],
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
//start button
startButton.addEventListener("click", function(event) {
    startButton.getElementsByClassName.display="none";
    quizQuestions.textContent= quiz[quizIndex].questions;
    // Set up timer to start when Start button is clicked
var quizTimer = setInterval (function(){
    if (timeLeft<=0){
        clearInterval(quizTimer);
        timer.innerHTML = "Quiz Over";
    } else {
        timer.innerHTML = timeLeft + " seconds left."
    }
    timeLeft--;
   
},1000);

})

