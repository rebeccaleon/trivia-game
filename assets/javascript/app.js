$(document).ready(function() {

//30 Second Countdown
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    
function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      showResults();
      $("#timer").html("time's up!");
    } else {
      $("#timer").html(timeLeft + " seconds");
      timeLeft--;
    }
  }

//Build the Quiz Form
function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {

  
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
        );
      }

    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
  });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  
  const myQuestions = [
    {
      question: "Which country has the most World Cup wins?",
      answers: {
        a: " Italy ",
        b: " Brazil ",
        c: " Argentina "
      },
      correctAnswer: "b"
    },
    {
      question: "In what year was the first World Cup held?",
      answers: {
        a: " 1922 ",
        b: " 1926 ",
        c: " 1930 "
      },
      correctAnswer: "c"
    },
    {
      question: "Which country is hosting the 2018 World Cup?",
      answers: {
        a: " Turkey ",
        b: " Mexico ",
        c: " Russia ",
        d: " Australia "
      },
      correctAnswer: "c"
    }
  ];

  buildQuiz();

});    
