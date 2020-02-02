// =================== VARIABLES =================
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
    }];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentQuestion = 0;
var i = 0;

var questionsSoFar = (correct + incorrect + unanswered);

var accessToChoices = triviaArrObj[currentQuestion].choices;

// ======FUNCTION: EMPTY() BEFORE DISPLAYING ANOTHER 'PAGE'================
// ==========================================================================
function clearPage() {
    $('div').empty();
}
// ================== INTERVAL TIMER ================
// ==========================================================================
var seconds = 30;
var intervalTimer;

function startTimer() {
    clearInterval(intervalTimer);
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
// ==========================================================================
// after 10 seconds, empty(), calls question & button functions, starts 30 second timer
function shortTimer() {
    // clearPage(); 
    displayQuestion();
    // displayButtons();
    startTimer();
    var timerID = setTimeout(shortTimer, 1000 * 10)
}

// ================== FUNCTION FOR QUESTION & BUtTOnS ========
// ==========================================================================
function displayQuestion() {
    startTimer();

    var createdButton = $('<button>');
    // if there are still questions then it puts the currentquestion[] 
    if (currentQuestion <= (triviaArrObj.length - 1)) {
        var sectionTitle = $('<h3>').text(triviaArrObj[currentQuestion].question);
        var sectionTitleDisplayed = $('.section-titles').append(sectionTitle);
        // displayButtons()

        // ======looping through answer choices and appending each as buttons
        // ==========================================================================
        // ------i represents the index we take from [choices]
        for (let i = 0; i < accessToChoices.length; i++) {
            var createdButton = $('<button>' + triviaArrObj[currentQuestion].choices[i] + '</button>');
            // <button rightAnswer="correct answer" class="madeButtons" text="some text here"> put text here for user to see </button>

            // assigns 'rightAnswer' and 'value' and 'class' attributes
            createdButton.attr({ 'data-value-right-answer': triviaArrObj[currentQuestion].answer, 'value': triviaArrObj[currentQuestion].choices[i], 'class': 'madeButtons', 'text': triviaArrObj[currentQuestion].choices[i] });

            // this works too
            // createdButton.text("put text here for user to see");

            console.log(accessToChoices[1]);

            // placing it on DOM
            // createdButton.insertAfter$('.created-button');
            $('.created-button').append(createdButton);
        }
    }
    else {
        clearPage();
        displayFinalResultsPage();
    }
}
// ================== CORRECT/INCORRECT/UNANSWERED RESPONSE======
// ==========================================================================
function respondCorrect() {
    var goodJob = $('<h3>').text('Correct: Way to go!');
    var goodJobDisplayed = $('.section-titles').append(goodJob);
}

function respondIncorrect() {
    var badJob = $('<h3>').text('Wrong: You should play more Pokemon');
    var badJobDisplayed = $('.section-titles').append(badJob);
}

function respondUnanswered() {
    var noJob = $('<h3>').text('Hope you were playing Pokemon Go and forgot to answer');
    var noJobDisplayed = $('.section-titles').append(noJob);
}

// ================== FINAL RESULTS =====================
// ==========================================================================
function displayFinalResultsPage() {
    var resultsTitle = $('<h3>').text('Let"s see how you did:');
    $('.section-titles').append(resultsTitle);

    // DOM : correct
    var correctResultsText = $('<p>').text('Correct: ' + correct);
    correctResultsText.insertAfter(resultsTitle);

    // DOM : incorrect
    var incorrectResultsText = $('<p>').text('Fail: ' + incorrect);
    incorrectResultsText.insertAfter(correctResultsText);

    // DOM : unanswered
    var unasweredResultsText = $('<p>').text('AFK: ' + unanswered);
    unansweredResultsText.insertAfter(incorrectResultsText);

    //button to start again
    var playButton = $('<button>');
    playButton.attr('onclick', 'displayQuestion()')

    // resetting the counters and question index
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var currentQuestion = 0;
}

// ======== user clicks an answer > correct or incorrect
// ==========================================================================
$('.created-button').on('click', '.madeButtons', function (event) {
    stopTimer();
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
        shortTimer();
        // respondCorrect();
        // currentQuestion++;
    } else {
        console.log("else statement is working... incorrect")
        incorrect++;
        clearPage();
        shortTimer();
        respondIncorrect();
        // currentQuestion++;
    }
});

// ========== START & PLAY AGAIN BUTTON =========
// ==========================================================================
$('#start').on('click', function (event) {
    event.preventDefault();
    console.log('message something');
    $('#start').hide();
    displayQuestion();
    // displayButtons();
    // $('.interval-timer').html('Time remaining: ' + seconds + '!');
})