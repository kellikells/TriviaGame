
// for this approach I wanted to try using objects instead of arrays
// for accessing data


//==================  GLOBAL Variables ==========================
// ======================================================

// Each object has the values specific to the question being asked
var arrayOfObjectsThatContainPropertiesThatChange = [];

// specific to the question:
//  will hold the correct answer, followed by wrong options 
var answerChoicesArray = [];

var makeAnswerChoicesArray = function () {
    this.answerChoicesArray.push(this.answer);
    this.answerChoicesArray.push(this.wrongAnswerOne);
    this.answerChoicesArray.push(this.wrongAnswerTwo);
    this.answerChoicesArray.push(this.wrongAnswerThree);
}



// declaring the Object Constructor function, assemblePageInfoAndFacts
function assemblePageInfoAndFacts(question, answer, wrongAnswerOne, wrongAnswerTwo,
    wrongAnswerThree) {
    this.question = question;
    this.answer = answer;
    this.wrongAnswerOne = wrongAnswerOne;
    this.wrongAnswerTwo = wrongAnswerTwo;
    this.wrongAnswerThree = wrongAnswerThree;
}

var pageOne = new assemblePageInfoAndFacts("What color is associated with Team Valor?",
    "Red", "Blue", "Yellow", "Green");
console.log(pageOne.question);




// conditional statements will compare the values 
// ======================================================
//======================= FUNCTIONS===============
// ======================================================

// function to start and restart game

// startGame()

//======----timers--(Three0S) (5S)--------

// ======================================================
// =======================LOOPS?============
// ======================================================


// ======================================================
// =====================LOGIC (conditionals)=================
// ======================================================


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// store function to start the game in variable, or 
// event listener