


var triviaArrObj = [
    {
    question: "What color is associated with Team Valor?",
    choices: ["red", "blue", "green", "blue"],
    answer: "red"
},
{
    question: "Pokemon Go generated $__ million in revenue its first month",
    choices: ["200", "50", "150", "100"],
    answer: "200"
},
{
    question: "What name guarantees Eevee becoming Flareon?",
    choices:  ["Pyro", "Rainer", "Spicy", "Sparky"],
    answer: "Pyro"
},
{
    question: "Who is the Yellow team's mascot?",
    choices: ["Zapdos", "Spark", "Pikachu", "Instinct"],
    answer: "Zapdos"
}];


var correct = 0;
var incorrect = 0;
var unanswered = 0;

var currentNumOfQs = correct + incorrect + unanswered;

var currentQuestion = 0;

function displayQuestions() {
    var sectionTitle = $("<h2>").text(triviaArrObj[currentQuestion].question);
    var sectionTitleDisplayed = $(".section-titles").append(sectionTitle);

    var currentObject = triviaArrObj[currentQuestion];
    
    for (let i = 0; i < array.length; i++) {
        
        const  = array[i];
        
    }
    $("#bttn1").attr("value", triviaArrObj[currentQuestion].choices[0]);
    $("#bttn2").attr("value", triviaArrObj[currentQuestion].choices[1]);
    $("#bttn3").attr("value", triviaArrObj[currentQuestion].choices[2]);
    $("#bttn4").attr("value", triviaArrObj[currentQuestion].choices[3]);
    $("#bttn1").attr("rightAnswer", triviaArrObj[currentQuestion].answer);
    $("#bttn2").attr("rightAnswer", triviaArrObj[currentQuestion].answer);
    $("#bttn3").attr("rightAnswer", triviaArrObj[currentQuestion].answer);
    $("#bttn4").attr("rightAnswer", triviaArrObj[currentQuestion].answer);
    $("#bttn1").html(triviaArrObj[currentQuestion].choices[0]);
    $("#bttn2").html(triviaArrObj[currentQuestion].choices[1]);
    $("#bttn3").html(triviaArrObj[currentQuestion].choices[2]);
    $("#bttn4").html(triviaArrObj[currentQuestion].choices[3]);
    if (currentQuestion < triviaArrObj.length - 1) {
        currentQuestion++;
    }
    else {
        // calling a function that displays the results
    }
}

// user clicks an answer > correct or incorrect
$(".bttn").on("click", function (event) {
    event.preventDefault();
    var userChoice = $(this).attr("value");
    var rightAnswer = $(this).attr("rightAnswer");
    if (userChoice === rightAnswer) {
        correct++;
    }
    else {
        incorrect++;
    }
    
    displayQuestions();
})

$(".bttn").hide();

// var correct = 0;
// var incorrect = 0;
// var unanswered = 0;
// //---- max number is 6, use this for LOGIC when <button>s are clicked
// var currentNumOfQs = correct + incorrect + unanswered;

// var currentQuestion = 0;
//----- tracks the number of =  <button> clicks (any)
// var clickCounter = 0;
// ==================FUNCTIONS=========================

// ----------------------------------------------
//---- timer for 30 seconds --- setInterval
// ----------------------------------------------
var seconds = 30;
var thirtySecTimer;

function startTimer() {
    clearInterval(thirtySecTimer);
    thirtySecTimer = setInterval(decrement, 1000 * 30);
    $("#intervalTimer").append("Time Left: " + seconds);
}

function decrement() {
    seconds--;
    // $("#intervalTimer").html("Time remaining: " + seconds + "!");
    if (seconds <= 0) {
        unanswered++;
    }
}
// ----------------------------------------------
// start/play button functions
// ----------------------------------------------
$("#start").on("click", function(event) {
    // startTimer();
    event.preventDefault();
    console.log("message something");
    $("#start").hide();
    $(".bttn").show();
    displayQuestions();
})

// ----------------------------------------------
// answer buttons functions
//  check if user click = correct   

// ----------------------------------------------

// ----------------------------------------------
// choose set of question & answers
//     display the question & answers 


// var displayQuestions = function pickPageToDisplay() {

// }
// // ----------------------------------------------
// // replaceWith()
// // $("start")


// // $(document).ready(function() {

// //     $("<button>start</button>").insertAfter("#start");
// // })


// $("<button>start</button>").insertAfter("#start");
// }





// // $("#bttn").on("click", evaluate);


// // //  --- after 30 seconds it moves to next q & increases unanswered count
// // var thirtySec = setTimeout(unansweredThirtySec, 1000 * 30);

// // function unansweredThirtySec() {
// //     let 
// //     if (correct++ || incorrect++) {
// //         clearTimeout(unansweredThirtySec);
// //     }
// // }


// // function unansweredThirtySec() {

// //     // start q      or      summary q
// //     if ((currentNumOfQs === 0) || (currentNumOfQs === 6)) {
// //         clearTimeout(thirtySec);

// //     }
// // }






// // =========================================================
// // +++++++++++DOESN'T WORK / NOT FINISHED++++++++++++++++++++


// // -------specific to the page-----
// //  ----will hold the correct answer, followed by wrong options 
// var pageSpecificArray = [];

// // function objectToArray() {
// //     $this.pageSpecificArray.push(this.answer);
// //     this.pageSpecificArray.push(this.wrongOne);
// //     this.pageSpecificArray.push(this.wrongTwo);
// //     this.pageSpecificArray.push(this.wrongThree);
// // }

// function objectToArray() {
//     pageSpecificArray.push(this.answer);
//     pageSpecificArray.push(this.wrongOne);
//     pageSpecificArray.push(this.wrongTwo);
//     pageSpecificArray.push(this.wrongThree);}

// var qOne;
// var qTwo;
// var qThree;
// var qFour;
// var qFive;
// var qSix;    

// // declaring the Object Constructor function, createQuestionAnswerObj 
// // Could have made each Object, hopefully this approach will be useful in future applications
// function createQuestionAnswerObj(question, answer, wrongOne, wrongTwo, wrongThree) {
//     this.question = question;
//     this.answer = answer;
//     this.wrongOne = wrongOne;
//     this.wrongTwo = wrongTwo;
//     this.wrongThree = wrongThree;
// }

// // calling the Obj Constructor function
// qOne = new createQuestionAnswerObj("What color is associated with Team Valor?","Red", "Blue", "Yellow", "Green");
// qTwo = new createQuestionAnswerObj("Pokemon Go generated $__ million in revenue its first month","200", "50", "150", "100");
// qThree = new createQuestionAnswerObj("What name guarantees Eevee becoming Flareon?", "Pyro", "Rainer", "Spicy", "Sparky");
// qFour = new createQuestionAnswerObj("Who is the Yellow team's mascot?", "Zapdos", "Spark", "Pikachu", "Instinct");
// qFive = new createQuestionAnswerObj("What berry makes it easier to catch a pokemon", "razz berry", "pinap berry", "lucky berry", "blueberry");
// qSix = new createQuestionAnswerObj("What is the highest level a trainer can reach?", "40", "35", "75", "100");


// console.log(qOne.question);




// // ++++++++++++++++++++++++++++++++++++++++++++++++
// // window.onload = function () {

