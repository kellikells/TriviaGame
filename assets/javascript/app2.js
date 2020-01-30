$(document).ready(function () {
    // =================== VARIABLES =================
    
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    
    var currentQuestion = 0;
    
    // ================== QUESTIONS AND ANSWERS(BUTTONS) ====================
    // var triviaArrObj = [
    //     {
    //         question: "What color is associated with Team Valor?",
    //         choices: ["red", "blue", "green", "blue"],
    //         answer: "red"
    //     },
    //     {
    //         question: "Pokemon Go generated $__ million in revenue its first month",
    //         choices: ["200", "50", "150", "100"],
    //         answer: "200"
    //     },
    //     {
    //         question: "What name guarantees Eevee becoming Flareon?",
    //         choices: ["Pyro", "Rainer", "Spicy", "Sparky"],
    //         answer: "Pyro"
    //     },
    //     {
    //         question: "Who is the Yellow team's mascot?",
    //         choices: ["Zapdos", "Spark", "Pikachu", "Instinct"],
    //         answer: "Zapdos"
    //     }];
    
    // ================== CLEAR PAGE FUNCTION ================
    function clearPage() {
        $("div").empty();
    }
    
    // ================== CORRECT/INCORRECT/UNANSWERED RESPONSE======
    function respondCorrect() {
        var goodJob = $("<h3>").text("Correct: Way to go!");
        var goodJobDisplayed = $(".section-titles").append(goodJob);
        // return goodJobDisplayed;
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
        $(".section-titles").append("resultsTitle");
    
        var correctResultsText = $("<p>").text("Correct: " + correct);
        var correctDisplay = correctResultsText.insertAfter(resultsTitle);
    
    
    
        console.log(correctResultsText);
    
    
    
    
        // ($("<p>").text("Correct: " + correct)).insertAfter(restultsTitle);
    }
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
    
    
    
    // ================== FUNCTION FOR QUESTION & BUTTONS DOM =========
    function displayThisQuizPage() {
    console.log("displayThisQuizPage function");
        // =================== DOM: QUESTION  ====================
        var sectionTitle = $("<h3>").text(triviaArrObj[currentQuestion].question);
        var sectionTitleDisplayed = $(".section-titles").append(sectionTitle);
    
        console.log(sectionTitle);
        // ================== DOM: ANSWER BUTTONS ===================
        var createdButton = $("<button>");
        for (let i = 0; i < triviaArrObj.length; i++) {
    
            // ------x represents the index we take from [choices], 
            // ------which only goes up to 3 (4 choices)
            var x = 0;
    
            createdButton.attr({ "rightAnswer": triviaArrObj[i].answer, "value": triviaArrObj[i].choices[x], "class": "madeButtons" });
            createdButton.text(triviaArrObj[currentQuestion].choices[x]);
            $(".created-button").append(createdButton);
    
            // ------increment choices[x] for next button & set conditionals
            x++;
            if (x === 4) {
                let x = 0;
            }
            if (currentQuestion < triviaArrObj.length - 1) {
                currentQuestion++;
            }
        }
    };
    // else if{
    // calling a function that displays the results
    //         };
    //     }
    // }
    // ================== QUESTIONS AND ANSWERS(BUTTONS) ====================
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
            choices: ["Pyro", "Rainer", "Spicy", "Sparky"],
            answer: "Pyro"
        },
        {
            question: "Who is the Yellow team's mascot?",
            choices: ["Zapdos", "Spark", "Pikachu", "Instinct"],
            answer: "Zapdos"
        }];
    // ================== user clicks an answer > correct or incorrect
    $(".madeButtons").on("click", function (event) {
        event.preventDefault();
        var userChoice = $(this).attr("value");
        var rightAnswer = $(this).attr("rightAnswer");
        if (userChoice === rightAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }
        // displayThisQuizPage();
    });
    
    
    
    // ================== INTERVAL TIMER ================
    
    // ========== START & PLAY AGAIN BUTTON =========
    $("#start").on("click", function (event) {
        startTimer();
        event.preventDefault();
        console.log("message something");
        $("#start").hide();
        displayThisQuizPage();
    });
    var seconds = 30;
    var thirtySecTimer;
    
    // ---------timer function---------------
    
    function startTimer() {
    
        clearInterval(thirtySecTimer);
        thirtySecTimer = setInterval(decrement, 1000 * 30);
    
        function decrement() {
            seconds--;
            // $("#interval-timer").html("Time remaining: " + seconds + "!");
            if (seconds <= 0) {
                unanswered++;
            }
        }
    }
    
    
    });
    