/* PSEUDOCODE FOR QUIZ  */

var codeQuiz = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<js>',
        b: '<javascript>',
        c: '<script>',
        d: '<scripting>',
        answer: 'c'
    }, 
    {
        question: 'Which of the following is not a way to write a function in JavaScript?',
        a: 'let myFunc = function() { ... };',
        b: 'const myFunc = () => { ... };',
        c: 'var myFunc() = function { ... };',
        d: 'function myFunc() { ... };',
        answer: 'c'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        a: '#demo.innerHTML = "Hello World!";',
        b: 'document.getElement("p").innerHTML = "Hello World!";',
        c: 'document.getElementById("demo").innerHTML = "Hello World!";  ',
        d: 'document.getElementByName("p").innerHTML = "Hello World!";',
        answer: 'c'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: 'if i <> 5  ',
        b: 'if (i != 5) ',
        c: 'if (i <> 5)',
        d: 'if i =! 5 then',
        answer: 'b'
    },
    {
        question: 'What type of data is "56"?',
        a: 'undefined',
        b: 'number',
        c: 'boolean',
        d: 'string',
        answer: 'd'
    }
]


var background = document.querySelector("body");
var startBtn = document.querySelector("#start-btn");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var scoreEl = document.querySelector(".score");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];

// starts score counter upon quiz start
var scoreCounter = function() {
    scoreEl.textContent = "Current score: 100"

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < codeQuiz.length) {
            scoreEl.textContent = "Current score: " + currentScore;
            currentScore--
        }
        else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 1000);
}

var createQuiz = function() {
    document.querySelector("#instructions").remove();
    quizEl.classList.remove("hide")

    nextQues(questionCounter);
    scoreCounter();
}

// iterates through questions and answers
var nextQues = function(index) {
    var questionHeader = document.querySelector(".question-header");
    var questionEl = document.querySelector(".question");
    var btnA = document.getElementById("btn-a");
    var btnB = document.getElementById("btn-b");
    var btnC = document.getElementById("btn-c");
    var btnD = document.getElementById("btn-d");

    questionHeader.textContent = "Question #" + parseInt(index + 1)
    questionEl.textContent = codeQuiz[index].question;
    btnA.textContent = codeQuiz[index].a;
    btnB.textContent = codeQuiz[index].b;
    btnC.textContent = codeQuiz[index].c;
    btnD.textContent = codeQuiz[index].d;

    btnA.addEventListener("click", checkAnswer);
    btnB.addEventListener("click", checkAnswer);
    btnC.addEventListener("click", checkAnswer);
    btnD.addEventListener("click", checkAnswer);
}

var checkAnswer = function(event) {
    var clickedBtn = event.target.getAttribute("value");
    var feedbackEl = document.querySelector(".feedback");
    feedbackEl.classList.remove("hide");
    
    // checks button value against correct answer in array
    if (clickedBtn === codeQuiz[questionCounter].answer) {
        background.className = "correct";
        feedbackEl.textContent = "CORRECT!"
    }
    else {
        if (currentScore >= 5) {
            currentScore -= 5;
            scoreEl.textContent = "Current score: " + currentScore;
            }
        background.className = "incorrect";
        feedbackEl.classList.remove("hide");
        feedbackEl.textContent = "INCORRECT!"
    }

    questionCounter++

    if (questionCounter < codeQuiz.length) {        
        nextQues(questionCounter);
    }
    else {
        endQuiz();
    }
}

var endQuiz = function() {
    quizEl.remove();
    scoreEl.remove();
 
    endEl.innerHTML = "<h2 class='end-title'>It's all over ! Well Done !</h2><p>Your final score is " + currentScore + ".  Please enter your name.</p>";

    var scoreForm = document.createElement("form");
    scoreForm.id = "score-form";
    endEl.appendChild(scoreForm);

    var nameInput = document.createElement("input");
    nameInput.className = "name-input";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "player-name");
    nameInput.setAttribute("placeholder", "ENTER YOUR NAME");
    scoreForm.appendChild(nameInput);

    var nameBtn = document.createElement("button");
    nameBtn.className = "btn";
    nameBtn.id = "name-btn"
    nameBtn.textContent = "SUBMIT";
    scoreForm.appendChild(nameBtn);

    nameBtn.addEventListener("click", saveScore);
}

var saveScore = function() {
    event.preventDefault()

    var playerName = document.querySelector("input[name='player-name']").value;

    if (!playerName) {
        alert("Please enter your name!")
    }
    else {
        var scoreObj = {
            name: playerName,
            score: currentScore
        }
    
        highScores.push(scoreObj);
        document.querySelector("#score-form").reset();
        localStorage.setItem("scores", JSON.stringify(highScores));
        document.location.href = "highscore.html";
    }
}

var loadScores = function() { 
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);
}

loadScores();
startBtn.addEventListener("click", createQuiz)