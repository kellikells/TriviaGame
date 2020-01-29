$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    //---- max number is 6, use this for LOGIC when <button>s are clicked
    var currentNumOfQs = correct + incorrect + unanswered;

    var currentQuestion = 0;
    // ----- tracks the number of  <button> clicks (any)
    var clickCounter = 0;
    // ==================FUNCTIONS=========================

    // ----------------------------------------------
    // ---- timer for 30 seconds --- setInterval
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

    // -----------------------------------------------
    //   --- after 30 seconds it moves to next q & increases unanswered count 
    var thirtySec = setTimeout(unansweredThirtySec, 1000 * 30);

    function unansweredThirtySec() {
        if (correct++ || incorrect++) {    //this means the user selected some answer
            clearTimeout(unansweredThirtySec);
        }
    }


    function unansweredThirtySec() {
        // start q      or      summary 
        if ((currentNumOfQs === 0) || (currentNumOfQs === 6)) {
            clearTimeout(thirtySec);
        }
    }




    // start/play button functions
    // ----------------------------------------------
    $("#start").on("click", function (event) {
        startTimer();
        event.preventDefault();
        displayQuestions();
    })

    // ----------------------------------------------
    // answer buttons functions
    //  check if user click = correct   

    // ----------------------------------------------

    // ----------------------------------------------
    // choose set of question & answers
    //     display the question & nswers 


    // var displayQuestions = function pickPageToDisplay()

    // ----------------------------------------------
    // replaceWith()



    // $(document).ready(function() {

    //     $("<button>start</button>").insertAfter("#start");
    // })

    // $("<button>start</button>").insertAfter("#start");
    // }




    // =========================================================
    // +++++++++++DOESN'T WORK / NOT FINISHED++++++++++++++++++++


    // -------specific to the page-----
    //  ----will hold the correct answer, followed by wrong options 
    var pageSpecificArray = [];

    // function objectToArray() {
    //     $this.pageSpecificArray.push(this.answer);
    //     this.pageSpecificArray.push(this.wrongOne);
    //     this.pageSpecificArray.push(this.wrongTwo);
    //     this.pageSpecificArray.push(this.wrongThree);
    // }

    function objectToArray() {
        pageSpecificArray.push(this.answer);
        pageSpecificArray.push(this.wrongOne);
        pageSpecificArray.push(this.wrongTwo);
        pageSpecificArray.push(this.wrongThree);
    }

    var qOne;
    var qTwo;
    var qThree;
    var qFour;
    var qFive;
    var qSix;

    // declaring the Object Constructor function, MakeQuestAnsObj 
    // Could have made each Object, hopefully this approach will be useful in future applications
    // function MakeQuestAnsObj(question, answer, wrongOne, wrongTwo, wrongThree) {
    //     return (
    //     question: question,
    //     answer: answer
    //     wrongOne: wrongOne
    //     wrongTwo: wrongTwo
    //     wrongThree: wrongThree
    //     )}

    function MakeQuestAnsObj(question, answer, wrongOne, wrongTwo, wrongThree) {
        this.question = question;
        this.answer = answer;
        this.wrongOne = wrongOne;
        this.wrongTwo = wrongTwo;
        this.wrongThree = wrongThree;) 
}



// calling the Obj Constructor function
qOne = new MakeQuestAnsObj("What color is associated with Team Valor?", "Red", "Blue", "Yellow", "Green");
qTwo = new MakeQuestAnsObj("Pokemon Go generated $__ million in revenue its first month", "200", "50", "150", "100");
qThree = new MakeQuestAnsObj("What name guarantees Eevee becoming Flareon?", "Pyro", "Rainer", "Spicy", "Sparky");
qFour = new MakeQuestAnsObj("Who is the Yellow team's mascot?", "Zapdos", "Spark", "Pikachu", "Instinct");
qFive = new MakeQuestAnsObj("What berry makes it easier to catch a pokemon", "razz berry", "pinap berry", "lucky berry", "blueberry");
qSix = new MakeQuestAnsObj("What is the highest level a trainer can reach?", "40", "35", "75", "100");


console.log(qOne.question);

})