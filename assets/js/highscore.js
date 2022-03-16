// variables needed
var quizBody = document.getElementById("quiz")
var timeLeft = document.getElementById("time-counter")
var highscoreBody = document.getElementById("high-score-container")
var secondsLeft = 10;
var score = 0



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

var highScores = []

function renderHighScore() {


    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");
    var hs = document.createElement("h2");
    highscoreBody.appendChild(hs)
    console.log(name)
    if (!name) {
        hs.textContent = "No scores recorded yet"
    }

    hs.textContent = name + " - " + score

    var list = document.createElement("ul");
    list.setAttribute("id", "hs-list");
    var listHS = getElementById("hs-list");
    listHS.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScoreList = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScoreList;
        li.setAttribute("data-index", i);

        listHS.appendChild(li);
    }



}




renderHighScore();



// if it goes to the end what happens












// question shows

// if question is right or wrong

// Add together final score

// add button to record high score

// p