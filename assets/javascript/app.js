
// for this approach I wanted to try using objects instead of arrays
// for accessing data


//==================  GLOBAL Variables ==========================
// ======================================================

// user response counters
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//max number is 8, use this for LOGIC when <button>s are clicked
var currentNumOfQs = correct + incorrect + unanswered;  


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
// Could have made each Object, hopefully this approach will be useful in future applications
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


// =============================================================
                // TIMERS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// ALL BUTTONS initiate this timeOut
//  after 30 seconds it moves to next page 
//  and increases unanswered count
var thirtySec = setTimeout(unansweredThirtySec, 1000 * 30);

function unansweredThirtySec() {
   
    // start page      or      summary page
    if ((currentNumOfQs === 0) || (currentNumOfQs === 8)) {
        clearTimeout(thirtySec);
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// window.onload = function () {

