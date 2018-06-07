$(document).ready(function() {

  var myQuestions = [
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
    },
    {
        question: "Who is the only player to win three World Cups?",
        answers: {
          a: " Pele ",
          b: " Diego Maradona ",
          c: " Neymar Jr. ",
          d: " Zinedine Zidane "
        },
        correctAnswer: "a"
      },
    
      {
        question: "Who won the 2014 World Cup?",
        answers: {
          a: " France ",
          b: " Spain ",
          c: " Germany ",
          d: " Italy "
        },
        correctAnswer: "c"
      }
      
  ];

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
        
      var output = [];
    
      myQuestions.forEach(function(currentQuestion, questionNumber) {
    
        var answers = [];
    
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
        var answerContainers = quizContainer.querySelectorAll(".answers");
    
        var numCorrect = 0;
    
        myQuestions.forEach(function(currentQuestion, questionNumber) {
          var answerContainer = answerContainers[questionNumber];
          var selector = `input[name=question${questionNumber}]:checked`;
          var userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
          if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
    
            answerContainers[questionNumber].style.color = "green";
          } else {
            answerContainers[questionNumber].style.color = "red";
          }
        });
    
        $("#results").html("You got " + numCorrect + " out of " + myQuestions.length + " correct!");
      }
    
      var quizContainer = document.getElementById("quiz");
    
      buildQuiz();
    
    });    
