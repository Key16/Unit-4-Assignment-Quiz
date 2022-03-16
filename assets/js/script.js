// variables needed
var quizBody = document.getElementById("quiz")
var timeLeft = document.getElementById("time-counter")
var highscoreBody = document.getElementById("high-score-container")
var secondsLeft = 10;
var score = 0
var endQuiz = false
var endMessage = "You made it to the end!"
var correctAudio = new Audio('https://freesound.org/data/previews/325/325444_4490625-lq.mp3')
var incorrectAudio = new Audio('https://freesound.org/data/previews/325/325443_4490625-lq.mp3')
var questions = [
    {
        question: "How does a FOR loop start?",
        a: "for i = 1 to 5",
        b: "for (i = 0; i <= 5)",
        c: "for (i <= 5; i++)",
        d: "for (i = 0; i <= 5; i++)  ",
        answer: "D"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World')",
        b: "msg('Hello World')",
        c: "alert('Hello World')",
        d: "console.log('Hello World)",
        answer: "C"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "=>",
        b: "-",
        c: "=",
        d: "==",
        answer: "C"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onclick",
        b: "onchange",
        c: "onmouseclick",
        d: "onmouseover",
        answer: "A"
    }
];
var position = 0

// start quiz

function init() {
    startQuiz();
    renderHighScore();

}
// shows first starting page and button
function startQuiz() {
    // creates welcome text
    var quizWelcome = document.createElement("h3");
    quizWelcome.textContent = "Welcome to the quiz on JS blah blah"
    quizBody.appendChild(quizWelcome);
    // creates button for start game
    var button = document.createElement("button");
    var startQuizbutton = document.createTextNode("Start Quiz");
    button.appendChild(startQuizbutton);
    quizBody.appendChild(button);
    // removes welcome text and button after clicking start game
    button.addEventListener("click", function () {
        button.remove();
        quizWelcome.remove();
        startTimer();
        renderQuestion();

    });

}


function renderQuestion() {


    if (position >= questions.length) {
        quizBody.innerHTML = "<h2> Your score is " + score + "/" + questions.length + "</h2>"
        position = 0
        //sets win to true
        endQuiz = true;
        //sets the message depending on your score, piped into endmessage at the end
        if (score === 2 || score === 3) {
            endMessage = "You almost made it!";
        } else if (score === 1) {
            endMessage = "Try harder next time!"
        } else if (score === 4) {
            endMessage = "Great work!"
        }
        return;
    }

    //shows question 
    quizBody.innerHTML = "<h2> Question " + (parseInt(position) + 1) + " of " + questions.length

    // grabbing the array number for each question loop

    question = questions[position].question;
    answerA = questions[position].a;
    answerB = questions[position].b;
    answerC = questions[position].c;
    answerD = questions[position].d;

    // quizBody.innerHTML = "<h2> Question " + (parseInt(position[])) + " of " + questions.length

    quizBody.innerHTML = "<h2> Question " + (parseInt(position) + 1) + " of " + questions.length
    // displays the question

    quizBody.innerHTML += "<h3> " + question + "<h3>"

    // displays the answers

    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='A' button onclick= 'checkAnswer()'>" + answerA + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='B' button onclick= 'checkAnswer()'>" + answerB + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='C' button onclick= 'checkAnswer()'>" + answerC + "</label><br>"
    quizBody.innerHTML += "<label> <input type='radio' name='choices' value='D' button onclick= 'checkAnswer()'>" + answerD + "</label><br>"

}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        console.log(choices[i])
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // increase score if correct and plays correct audio
    if (choice == questions[position].answer) {
        score++
        correctAudio.play();

    }
    // decreases time by 2 seconds and plays incorrect audio
    else {
        secondsLeft = secondsLeft - 2
        timeLeft.textContent = secondsLeft
        incorrectAudio.play();
    }
    position++
    renderQuestion();
}



// logging score


// timer goes down
function startTimer() {
    // Sets interval in variable

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            quizOver();

        }
        else if (endQuiz) {
            clearInterval(timerInterval);
            endText();
            storeHighScore();
        }

    }, 1000);
}

function quizOver() {
    timeLeft.textContent = " 😔 "
    endMessage = "You ran out of time!"
    quizBody.remove();
    endText();
}

function endText() {
    var endTextMessage = document.createElement("h3")
    endTextMessage.textContent = endMessage;
    document.body.appendChild(endTextMessage);

}

function storeHighScore() {
    localStorage.setItem("score", score);

    var form = document.createElement("FORM");
    form.setAttribute("id", "myForm")
    document.body.appendChild(form);
    var label = document.createElement("label");
    label.setAttribute("for", "name")
    label.textContent = "Record Score "
    form.appendChild(label);

    var input = document.createElement("INPUT");
    input.setAttribute("type", "text")
    input.setAttribute("value", "Your Name")
    input.setAttribute("name", "inputName")
    input.setAttribute("id", "name")
    form.appendChild(input);

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Submit")
    form.appendChild(submit);
    console.log(input)


    submit.addEventListener("click", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        localStorage.setItem("name", name);

        location.href = "./highscore.html";

    });


}


// function renderHighScore() {
//     var name = localStorage.getItem("name");
//     var score = localStorage.getItem("score");
//     var hs = document.createElement("h2");
//     highscoreBody.appendChild(hs)
//     console.log(name)
//     if (!name) {
//         hs.textContent = "No scores recorded yet"
//     }

//     hs.textContent = name + " - " + score


// }


// renderHighScore();




// if it goes to the end what happens












// question shows

// if question is right or wrong

// Add together final score

// add button to record high score

// pull from local storage

init();

