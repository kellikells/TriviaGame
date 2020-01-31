
$(document).ready(function () {

    // =================== VARIABLES =================
    var triviaArrObj = [
        {
            question: "What color is associated with Team Valor?",
            choices: ["red", "blue", "green", "yellow"],
            answer: "red"
        },
        {
            question: "Pokemon Go generated $__ million in revenue its first month",
            choices: ["200", "50", "150", "100"],
            answer: "200"
        },
        {
            question: "What name guarantees Eevee becoming Flareon?",
            choices: ["Pyro", "Rainer", "Spicy", "Sparky"],
            answer: "Pyro"
        },
        {
            question: "Who is the Yellow team's mascot?",
            choices: ["Spark", "Zapdos", "Pikachu", "Instinct"],
            answer: "Zapdos"
        }];

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var currentQuestion = 0;
    var i = 0;

    var questionsSoFar = (correct + incorrect + unanswered);

    var accessToChoices = triviaArrObj[currentQuestion].choices;

    // ======FUNCTION: EMPTY() BEFORE DISPLAYING ANOTHER "PAGE"================
    function clearPage() {
        $("div").empty();
    }

    // ================== FUNCTION FOR QUESTION - DOM =========
    function displayQuestion() {

        // if there are still questions then it puts the currentquestion[] 
        if (currentQuestion <= (triviaArrObj.length - 1)) {
            var sectionTitle = $("<h3>").text(triviaArrObj[currentQuestion].question);
            var sectionTitleDisplayed = $(".section-titles").append(sectionTitle);
            displayButtons()
        }
        else {
            clearPage();
            displayFinalResultsPage();
        }
    }
    // ================== FUNCTION FOR BUTTON - DOM =========

function displayButtons(){
    for (i = 0; i < 4; i++) {
        var rightAnswerText = function(){
            return triviaArrObj[currentQuestion].answer
        }
        var valueText = function() {
            return accessToChoices[i]
        }
        $(".created-button").append("<button/>", {
            "text": valueText,
            "value": valueText,
            "rightAnswer": rightAnswerText,
            "class": madeButtons
        });
    }}


    //     createdButtonOne.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[1], "class": "madeButtons" });
    //     $(".created-button").append(createdButtonOne);


    // function displayButtons() {
    //     var createdButtonZero = $("<button>");
    //     var createdButtonOne = $("<button>");
    //     var createdButtonTwo = $("<button>");
    //     var createdButtonThree = $("<button>");

    //     //====== assigns "rightAnswer", "value",  "class" attributes
    //     createdButtonZero.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[0], "class": "madeButtons" });
    //     // placing it on DOM
    //     // createdButton.insertAfter$(".created-button");
    //     $(".created-button").append(createdButtonZero);

    //     createdButtonOne.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[1], "class": "madeButtons" });
    //     $(".created-button").append(createdButtonOne);

    //     createdButtonTwo.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[2], "class": "madeButtons" });
    //     $(".created-button").append(createdButtonTwo);

    //     createdButtonThree.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[3], "class": "madeButtons" });
    //     $(".created-button").append(createdButtonThree);

    // }





    // ================THIS DIDN'T WORK BUT IDK WHY=========================
    // ======looping through answer choices and appending each as buttons

    // var createdButton = $("<button>");
    // ------i represents the index we take from [choices]
    // for (let i = 0; i < accessToChoices.length; i++) {
    //     var createdButton = $("<button>");

    //     // assigns "rightAnswer" and "value" and "class" attributes
    //     createdButton.attr({ "rightAnswer": triviaArrObj[currentQuestion].answer, "value": accessToChoices[i], "class": "madeButtons" })

    //     // creates text of the button
    //     console.log(createdButton.text(accessToChoices[3]));

    //     // placing it on DOM
    //     // createdButton.insertAfter$(".created-button");
    //     $(".created-button").append(createdButton);
    // }

    // ================== CORRECT/INCORRECT/UNANSWERED RESPONSE======
    function respondCorrect() {
        var goodJob = $("<h3>").text("Correct: Way to go!");
        var goodJobDisplayed = $(".section-titles").append(goodJob);
    }

    function respondIncorrect() {
        var badJob = $("<h3>").text("Wrong: You should play more Pokemon");
        var badJobDisplayed = $(".section-titles").append(badJob);
    }

    function respondUnanswered() {
        var noJob = $("<h3>").text("Hope you were playing Pokemon Go and forgot to answer");
        var noJobDisplayed = $(".section-titles").append(noJob);
    }

    // ================== FINAL RESULTS =====================
    function displayFinalResultsPage() {
        var resultsTitle = $("<h3>").text("Let's see how you did:");
        $(".section-titles").append(resultsTitle);

        // DOM : correct
        var correctResultsText = $("<p>").text("Correct: " + correct);
        correctResultsText.insertAfter(resultsTitle);

        // DOM : incorrect
        var incorrectResultsText = $("<p>").text("Fail: " + incorrect);
        incorrectResultsText.insertAfter(correctResultsText);

        // DOM : unanswered
        var unasweredResultsText = $("<p>").text("AFK: " + unanswered);
        unansweredResultsText.insertAfter(incorrectResultsText);

        //button to start again
        var playButton = $("<button>");
        playButton.attr("onclick", "displayQuestion()")

        // resetting the counters and question index
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        var currentQuestion = 0;
    }

    // ======== user clicks an answer > correct or incorrect
    $(".madeButtons").on("click", function (event) {
        stopTimer();
        event.preventDefault();
        var userChoice = $(this).attr("value");
        var rightAnswer = $(this).attr("rightAnswer");

        // user is correct 
        // correct count increased
        // page is cleared, timer for results page initiated, elements called for response page
        if (userChoice === rightAnswer) {
            correct++;
            clearPage();
            shortTimer();
            respondCorrect();
        } else {
            incorrect++;
            clearPage();
            shortTimer();
            respondIncorrect();
        }
    });

    // ================== INTERVAL TIMER ================
    var seconds = 30;
    var intervalTimer;

    function startTimer() {
        clearInterval(intervalTimer);
        intervalTimer = setInterval(decrement, 1000 * 30);
    }

    function decrement() {
        seconds--;

        // --------placing timer to the DOM 
        // var timerText = $("<h4> Time Remaining: </h4>");
        // $(".interval-timer").append(timerText);
        $(".interval-timer").html("<h4> Time Remaining: " + seconds + "</h4>");

        if (seconds === 0) {
            unanswered++;
            stopTimer();
            clearPage();
            shortTimer();
            respondUnanswered();
        }
    }

    function stopTimer() {
        clearInterval(intervalTimer);
    }
    // =========SHORT TIMER for results pages=====
    // after 10 seconds, empty(), calls question & button functions, starts 30 second timer
    function shortTimer() {
        clearPage(); s
        displayQuestion();
        // displayButtons();
        startTimer();
        var timerID = setTimeout(shortTimer, 1000 * 10)
    }

    // ========== START & PLAY AGAIN BUTTON =========
    $("#start").on("click", function (event) {
        startTimer();
        event.preventDefault();
        console.log("message something");
        $("#start").hide();
        displayQuestion();
        // displayButtons();
        $(".interval-timer").html("Time remaining: " + seconds + "!");
    });



});
