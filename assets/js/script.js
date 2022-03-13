// variables needed
var quizBody = document.getElementById("quiz")
var timeLeft = document.getElementById("time-counter")
var secondsLeft = 5;
var score = 0
var questions = [
    {
        question: "What is 36 + 42",
        a: "64",
        b: "78",
        c: "76",
        d: "B",
        answer: "A"
    },
    {
        question: "What is 7 x 4?",
        a: "21",
        b: "27",
        c: "28",
        d: "x",
        answer: "A"
    },
    {
        question: "What is 16 / 4?",
        a: "4",
        b: "6",
        c: "3",
        d: "A",
        answer: "A"
    },
    {
        question: "What is 8 x 12?",
        a: "88",
        b: "112",
        c: "96",
        d: "C",
        answer: "A"
    }
];
var position = 0

// start quiz

function init() {
    startQuiz();


}
// shows first starting page and button
function startQuiz() {
    // creates welcome text
    var quizWelcome = document.createElement("h3");
    quizWelcome.textContent = "Welcome to the quiz on JS blah blah"
    document.body.appendChild(quizWelcome);
    // creates button for start game
    var button = document.createElement("button");
    var startQuizbutton = document.createTextNode("Start Game");
    button.appendChild(startQuizbutton);
    document.body.appendChild(button);
    // removes welcome text and button after clicking start game
    button.addEventListener("click", function () {
        button.remove();
        quizWelcome.remove();
        startTimer();
        renderQuestion();
    });
}


function renderQuestion() {
    console.log("rendering question");
    // finished quiz
    if (position >= questions.length) {
        quizBody.innerHTML = "<h3>" + "Congratulations" + "</h3>";
    }

    quizBody.innerHTML = "<h2> Question " + (parseInt(position) + 1) + " of " + questions.length

    // grabbing the array number for each question loop

    question = questions[position].question;
    answerA = questions[position].a;
    answerB = questions[position].b;
    answerC = questions[position].c;
    answerD = questions[position].d;

    // displays the question

    quizBody.innerHTML = "<h3> " + question + "<h3>"

    // displays the answers

    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='A'>" + answerA + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='B'>" + answerB + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='C'>" + answerC + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='D'>" + answerD + "</label><br>"

    var choices = document.getElementsByName("choices")
    var choicesLength = choices.length

    for (var i = 0; i < choicesLength; i++) {
        choices[i].onclick = function () {
            if (choices == question[position].answer) {
                score++;
            }
            position++
            renderQuestion();
        }
    }

}


// timer goes down
function startTimer() {
    // Sets interval in variable

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            quizOver();
        }

    }, 1000);
}


// if it goes to the end what happens

function quizOver() {
    timeLeft.textContent = " 😔 "
    var quizFail = document.createElement("h2");
    quizFail.textContent = "You need to go study more JS"
    document.body.appendChild(quizFail);
}

// question shows

// if question is right or wrong

// Add together final score

// add button to record high score

// pull from local storage

init();


// (function () {
//     // Functions
//     function buildQuiz() {
//         // variable to store the HTML output
//         const output = [];

//         // for each question...
//         myQuestions.forEach(
//             (currentQuestion, questionNumber) => {

//                 // variable to store the list of possible answers
//                 const answers = [];

//                 // and for each available answer...
//                 for (letter in currentQuestion.answers) {

//                     // ...add an HTML radio button
//                     answers.push(
//                         `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                 ${letter} :
//                 ${currentQuestion.answers[letter]}
//               </label>`
//                     );
//                 }

//                 // add this question and its answers to the output
//                 output.push(
//                     `<div class="slide">
//               <div class="question"> ${currentQuestion.question} </div>
//               <div class="answers"> ${answers.join("")} </div>
//             </div>`
//                 );
//             }
//         );

//         // finally combine our output list into one string of HTML and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }

//     function showResults() {

//         // gather answer containers from our quiz
//         const answerContainers = quizContainer.querySelectorAll('.answers');

//         // keep track of user's answers
//         let numCorrect = 0;

//         // for each question...
//         myQuestions.forEach((currentQuestion, questionNumber) => {

//             // find selected answer
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name=question${questionNumber}]:checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//             // if answer is correct
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[questionNumber].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[questionNumber].style.color = 'red';
//             }
//         });

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }

//     function showSlide(n) {
//         slides[currentSlide].classList.remove('active-slide');
//         slides[n].classList.add('active-slide');
//         currentSlide = n;
//         if (currentSlide === 0) {
//             previousButton.style.display = 'none';
//         }
//         else {
//             previousButton.style.display = 'inline-block';
//         }
//         if (currentSlide === slides.length - 1) {
//             nextButton.style.display = 'none';
//             submitButton.style.display = 'inline-block';
//         }
//         else {
//             nextButton.style.display = 'inline-block';
//             submitButton.style.display = 'none';
//         }
//     }

//     function showNextSlide() {
//         showSlide(currentSlide + 1);
//     }

//     function showPreviousSlide() {
//         showSlide(currentSlide - 1);
//     }

//     // Variables
//     const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');
//     const myQuestions = [
//         {
//             question: "Who invented JavaScript?",
//             answers: {
//                 a: "Douglas Crockford",
//                 b: "Sheryl Sandberg",
//                 c: "Brendan Eich"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "Which one of these is a JavaScript package manager?",
//             answers: {
//                 a: "Node.js",
//                 b: "TypeScript",
//                 c: "npm"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "Which tool can you use to ensure code quality?",
//             answers: {
//                 a: "Angular",
//                 b: "jQuery",
//                 c: "RequireJS",
//                 d: "ESLint"
//             },
//             correctAnswer: "d"
//         }
//     ];

//     // Kick things off
//     buildQuiz();

//     // Pagination
//     const previousButton = document.getElementById("previous");
//     const nextButton = document.getElementById("next");
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;

//     // Show the first slide
//     showSlide(currentSlide);

//     // Event listeners
//     submitButton.addEventListener('click', showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);
// })();
