/* PSEUDOCODE FOR QUIZ  */

var codeQuiz = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<js>',
        b: '<javascript>',
        c: '<script>',
        d: '<scripting>',
        correctAns: 'b'
    }, 
    {
        question: 'Which of the following is not a way to wrtie a function in JavaScript?',
        a: 'let myFunc = function() { ... };',
        b: 'const myFunc = () => { ... };',
        c: 'var myFunc() = function { ... };',
        d: 'function myFunc() { ... };',
        correctAns: 'c'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        a: '#demo.innerHTML = "Hello World!";',
        b: 'document.getElement("p").innerHTML = "Hello World!";',
        c: 'document.getElementById("demo").innerHTML = "Hello World!";  ',
        d: 'document.getElementByName("p").innerHTML = "Hello World!";',
        correctAns: 'c'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: 'if i <> 5  ',
        b: 'if (i != 5) ',
        c: 'if (i <> 5)',
        d: 'if i =! 5 then',
        correctAns: 'b'
    },
    {
        question: 'What type of data is "56"?',
        a: 'undefined',
        b: 'number',
        c: 'boolean',
        d: 'string',
        correctAns: 'd'
    }
]

var background = document.querySelector("body");
var cardEl = document.querySelector("#card");
var startBtn = document.querySelector("#start-btn");
var scoreEL = document.querySelector(".score");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];


// start quiz function
//QUIZ STRUCTURE 
 //QUIZ QUESTIONS SECTION 
 //QUIZ ANSWER SELECTIONS SECTION WITH BUTTONS FOR EACH ANSWER SELECTION
 //QUIZ CORRECT/INCORRECT SECTION
var quickQuiz = function() {

    document.querySelector("#instructions").remove();

    // creates container div for questions
    var questionEl = document.createElement("div");
    questionEl.className = "question";
    cardEl.appendChild(questionEl);

    // creates container div for answers
    var answersEl = document.createElement("div");
    answersEl.className = "answer-grid";
    cardEl.appendChild(answersEl);

    // button A
    var choiceA = document.createElement("div");
    choiceA.className = "answer-grid-item";
    answersEl.appendChild(choiceA);

    var btnA = document.createElement("button");
    btnA.className = "btn";
    btnA.id = "btn-a";
    choiceA.appendChild(btnA);

    // button B
    var choiceB = document.createElement("div");
    choiceB.className = "answer-grid-item";
    answersEl.appendChild(choiceB);

    var btnB = document.createElement("button");
    btnB.className = "btn";
    btnB.id = "btn-b";
    choiceB.appendChild(btnB);

    // button C
    var choiceC = document.createElement("div");
    choiceC.className = "answer-grid-item";
    answersEl.appendChild(choiceC);

    var btnC = document.createElement("button");
    btnC.className = "btn";
    btnC.id = "btn-c";
    choiceC.appendChild(btnC);

    // button D
    var choiceD = document.createElement("div");
    choiceD.className = "answer-grid-item";
    answersEl.appendChild(choiceD);

    var btnD = document.createElement("button");
    btnD.className = "btn";
    btnD.id = "btn-d";
    choiceD.appendChild(btnD);
}



startBtn.addEventListener("click", createQuiz)



// add button event listeners/iteration for each question

var nextQuestion = function(index) {
    var questionHeader = document.querySelector(".question-header");
    var questionEl = document.querySelector(".question");
    var btnA = document.querySelector("#btn-a");
    var btnB = document.querySelector("#btn-b");
    var btnC = document.querySelector("#btn-c");
    var btnD = document.querySelector("#btn-d");

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









//ON CLICK OF START BUTTON, TIMER STARTS AND FIRST QUESTION IS DISPLAYED

var scoreCounter = function() {
    scoreEl.textContent = "Current Score: 100";

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < quickQuiz.length) {
            scoreEl.textContent = "Current Score: " + currentScore;
            currentScore--;
        }
        else {
            clearInterval(scoreInterval);
            // add end quiz function 
        }
    }, 1000);
}



// add startquiz & endquiz functions

var createQuiz = function() {
    document.querySelector("#instructions").remove();
    quizEl.classList.remove("hide");

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





//ADD TIMER FUNCTION 
//DEDUCT POINTS FOR INCORRECT ANSWERS

//ADD LOCAL STORAGE FUNCTION TO SAVE HIGH SCORES
//ADD OPTION TO TO ENTER NAME AND SAVE HIGH SCORES

//CREATE A HIGH SCORE LIST PAGE
//ADD OPTION TO CLEAR HIGH SCORES

 //FINE TUNE STYLE ELEMENTS AND ADDITIONAL FEATURES
//ADD HOVER EFFECTS TO BUTTONS
