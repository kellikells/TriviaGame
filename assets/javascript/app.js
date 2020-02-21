    // ======= ARRAY VAR: QUESTIONS/CHOICES/ANSWERS =========
var triviaArrObj = [
    {
        question: 'What color is associated with Team Valor?',
        choices: ['red', 'blue', 'green', 'yellow'],
        answer: 'red'
    },
    {
        question: 'Pokemon Go generated $__ million in revenue its first month',
        choices: ['200', '50', '150', '100'],
        answer: '200'
    },
    {
        question: 'What name guarantees Eevee becoming Flareon?',
        choices: ['Pyro', 'Rainer', 'Spicy', 'Sparky'],
        answer: 'Pyro'
    },
    {
        question: 'Who is the Yellow team"s mascot?',
        choices: ['Spark', 'Zapdos', 'Pikachu', 'Instinct'],
        answer: 'Zapdos'
    },
    {
        question: 'What is the highest level for a trainer?',
        choices: ['100', '30', '50', '40'],
        answer: '40'
    }];


//------------counters----------------
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentQuestion = 0;
var i = 0;

var accessToChoices = triviaArrObj[currentQuestion].choices;

var questionsSoFar = (correct + incorrect + unanswered);

// ====FUNCTION: EMPTY() BEFORE DISPLAYING ANOTHER 'PAGE'===
// ====================================================
function clearPage() {
    $('div').empty();
}
// ============== zINTERVAL TIMER ================
// ===============================================
var seconds = 30;
var intervalTimer;

function startTimer() {
    // clearInterval(intervalTimer);
    intervalTimer = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;

    // --------placing timer to the DOM 
    // var timerText = $('<h4> Time Remaining: </h4>');
    // $('.interval-timer').append(timerText);
    $('.interval-timer').html('<h4> Time Remaining: ' + seconds + '</h4>');

    if (seconds === 0) {
        unanswered++;
        // stopTimer();
        clearPage();
        // shortTimer();
        respondUnanswered();
    }
}

function stopTimer() {
    clearInterval(intervalTimer);
}

// ========= FUNCTION FOR QUESTION & BUTTONS ========
// ========================================================
function displayQuestion() {
    // startTimer();
    $('created-button').empty();

    // if there are still questions then it puts the currentquestion[] 
    if (currentQuestion <= (triviaArrObj.length - 1)) {
        clearInterval(intervalTimer);

        //set time to 30 seconds & start timer
        seconds = 30;
        startTimer();

        //showing the question
        var sectionTitle = $('<h3>').text(triviaArrObj[currentQuestion].question);
        var sectionTitleDisplayed = $('.section-titles').append(sectionTitle);

        // looping through answer choices and appending each as buttons

        for (let i = 0; i < accessToChoices.length; i++) {
            var createdButton = $('<button>' + triviaArrObj[currentQuestion].choices[i] + '</button>');

            // assigns 'rightAnswer' and 'value' and 'class' attributes
            createdButton.attr({ 'data-value-right-answer': triviaArrObj[currentQuestion].answer, 'value': triviaArrObj[currentQuestion].choices[i], 'class': 'madeButtons', 'text': triviaArrObj[currentQuestion].choices[i] });

            console.log(accessToChoices[1]);

            // placing it on DOM;
            $('.created-button').append(createdButton);
        }
    }
    else {
        clearPage();
        displayFinalResultsPage();
    }
}

// =========SHORT TIMER for results pages=====
//==============================================
// after 10 seconds, empty(), calls question & button functions, starts 30 second timer
var timerID;
function shortTimer() {
    // clearPage(); 
    displayQuestion();
    // displayButtons();
    // startTimer();
     timerID = setTimeout(shortTimer, 1000 * 10)
    clearTimer(timerID);
}
function stopShortTimer(){
    clearTimeout(timerID);
}


// ======= CORRECT/INCORRECT/UNANSWERED RESPONSE ===
// =========================================================
function respondCorrect() {
    var goodJob = $('<h5>').text('Correct!');
    var goodJobDisplayed = $('.response').html(goodJob);
    // shortTimer();
    displayQuestion();
}

function respondIncorrect() {
    var badJob = $('<h5>').text('Wrong');
    var badJobDisplayed = $('.response').html(badJob);

    displayQuestion();
    console.log(currentQuestion);
}

function respondUnanswered() {
    var noJob = $('<h5>').text('Too Slow');
    var noJobDisplayed = $('.response').html(noJob);
    displayQuestion();
}

// ================== FINAL RESULTS =====================
// ======================================================
function displayFinalResultsPage() {
    console.log(correct, incorrect, unanswered);
    var resultsTitle = $('<h3>').text('Let"s see how you did:');
    $('.section-titles').append(resultsTitle);

    // DOM : correct
    var correctResultsText = $('<p>').text('Correct: ' + correct);
    correctResultsText.insertAfter(resultsTitle);

    // DOM : incorrect
    var incorrectResultsText = $('<p>').text('Fail: ' + incorrect);
    incorrectResultsText.insertAfter(correctResultsText);

    // DOM : unanswered
    var unansweredResultsText = $('<p>').text('What Happened?: ' + unanswered);
    unansweredResultsText.insertAfter(incorrectResultsText);

    //button to start again
    var playButton = $('<button>');
    playButton.attr('onclick', 'displayQuestion()')

    // resetting the counters and question index
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    currentQuestion = 0;

}

// ======== user clicks an answer > correct or incorrect
// =================================================
$('.created-button').on('click', '.madeButtons', function (event) {
    // stopTimer();
    event.preventDefault();
    var userChoice = $(this).attr('value');
    var rightAnswer = $(this).attr('data-value-right-answer');
    console.log(userChoice, rightAnswer);

    console.log("this message shows if onclick for answer button function runs");
    // user is correct 
    // correct count increased
    // page is cleared, timer for results page initiated, elements called for response page
    currentQuestion++;
    if (userChoice === rightAnswer) {
        console.log("if condition works");
        correct++;
        clearPage();
        // shortTimer();
        respondCorrect();
        // currentQuestion++;
    } else {
        console.log("else statement is working... incorrect")
        incorrect++;
        clearPage();
        // shortTimer();
        respondIncorrect();
        // currentQuestion++;
    }
});

// ========== START & PLAY AGAIN BUTTON =========
// ========================================
$('#start').on('click', function (event) {
    event.preventDefault();
    console.log('message something');
    $('#start').hide();
    displayQuestion();
    // displayButtons();
    // $('.interval-timer').html('Time remaining: ' + seconds + '!');
})