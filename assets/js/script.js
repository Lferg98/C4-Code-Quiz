/* PSEUDOCODE FOR QUIZ  */

var codeQuiz = [
    {
        question: 'Test question 1', 
        a: 'Answer 1A',
        b: 'Answer 1B',
        c: 'Answer 1C',
        d: 'Answer 1D',
        correctAns: 'Answer 1B'
    }, 
    {
        question: 'Test question 2',
        a: 'Answer 2A',
        b: 'Answer 2B',
        c: 'Answer 2C',
        d: 'Answer 2D',
        correctAns: 'Answer 2C'
    },
    {
        question: 'Test question 3',
        a: 'Answer 3A',
        b: 'Answer 3B',
        c: 'Answer 3C',
        d: 'Answer 3D',
        correctAns: 'Answer 3C'
    },
    {
        question: 'Test question 4',
        a: 'Answer 4A',
        b: 'Answer 4B',
        c: 'Answer 4C',
        d: 'Answer 4D',
        correctAns: 'Answer 4D'
    },
    {
        question: 'Test question 5',
        a: 'Answer 5A',
        b: 'Answer 5B',
        c: 'Answer 5C',
        d: 'Answer 5D',
        correctAns: 'Answer 5B'
    }
]

var cardEl = document.querySelector("#card");
var startBtn = document.querySelector("#start-btn");
var scoreEL = document.querySelector(".score");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];


// start quiz function
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

//ON CLICK OF START BUTTON, TIMER STARTS AND FIRST QUESTION IS DISPLAYED

var scoreCounter = function() {
    scoreEL.textContent = "Current Score: 100";

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < quickQuiz.length) {
            scoreEL.textContent = "Current Score: " + currentScore;
            currentScore--;
        }
        else {
            clearInterval(scoreInterval);
            // add end quiz function 
        }
    }, 1000);
}



/*


-

- QUIZ STRUCTURE 
- QUIZ QUESTIONS SECTION 
- QUIZ ANSWER SELECTIONS SECTION WITH BUTTONS FOR EACH ANSWER SELECTION
- QUIZ CORRECT/INCORRECT SECTION

- ADD TIMER FUNCTION 
- DEDUCT POINTS FOR INCORRECT ANSWERS

- ADD LOCAL STORAGE FUNCTION TO SAVE HIGH SCORES
- ADD OPTION TO TO ENTER NAME AND SAVE HIGH SCORES

- CREATE A HIGH SCORE LIST PAGE
- ADD OPTION TO CLEAR HIGH SCORES

- FINE TUNE STYLE ELEMENTS AND ADDITIONAL FEATURES
- ADD HOVER EFFECTS TO BUTTONS

*/