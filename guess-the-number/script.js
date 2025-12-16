// DOM elements
const btnCheck = document.querySelector(".check-btn");
const btnReset = document.querySelector(".reset");
const btnStart = document.querySelector(".start");
const question = document.querySelector(".ques h2");
const guessText = document.querySelector(".guess");
const timerDisplay = document.querySelector(".timer");
const input = document.getElementById("val");

// Game variables
let num;
let count = 0;
let timeLeft = 30;
let timer;

// Initially disable input and buttons until Start is clicked
input.disabled = true;
btnCheck.disabled = true;
btnReset.disabled = true;

// Function to start the countdown timer
function startTimer() {
    clearInterval(timer); // Stop any existing timer
    timeLeft = 30;
    timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.innerHTML = "⏰ You are out of time! Click Start to play again.";
            input.disabled = true;
            btnCheck.disabled = true;
            guessText.innerHTML = "";
            count = 0;
            // Number resets but timer won't start until user clicks Start
            num = Math.floor(Math.random() * 100);
            console.log(num);
        }
    }, 1000);
}

// Reset game manually (via Reset button)
function resetGame() {
    clearInterval(timer); // Stop previous timer
    num = Math.floor(Math.random() * 100);
    console.log(num);

    input.value = "";
    input.disabled = true; // Wait for Start to enable
    btnCheck.disabled = true;
    btnReset.disabled = false; // Reset button stays enabled

    question.innerHTML = "Go ahead and enter a random number between 1 to 100!";
    guessText.innerHTML = "";
    timerDisplay.innerHTML = `Time Left: 30 seconds`;
    count = 0;
}

// Start game (via Start button)
function startGame() {
    input.disabled = false;
    btnCheck.disabled = false;
    btnReset.disabled = false;
    input.focus();

    // Only start timer when user clicks Start
    startTimer();
}

// Check guess function (all original features preserved)
function checkGuess() {
    const val = Number(input.value);

    if (count >= 4) {
        guessText.innerHTML = "";
        question.innerHTML = "You are out of attempts! Click Start to play again.";
        input.disabled = true;
        btnCheck.disabled = true;
        clearInterval(timer);
        count = 0;
        return;
    }

    if (val < 1 || val > 100 || isNaN(val)) {
        question.innerHTML = "Invalid input. Click Start to try again.";
        input.disabled = true;
        btnCheck.disabled = true;
        clearInterval(timer);
        count = 0;
        return;
    }

    if (val === num) {
        question.innerHTML = "🎉 Congratulations! You won. Click Start to play again.";
        input.disabled = true;
        btnCheck.disabled = true;
        clearInterval(timer);
        count = 0;
        return;
    }

    if (val > num) {
        question.innerHTML = "Too high!";
        input.value = "";
    } else {
        question.innerHTML = "Too low!";
        input.value = "";
    }

    // Hints logic preserved
    if (count === 2) {
        if (num % 5 === 0) guessText.innerHTML = "Hint: The number is divisible by 5";
        else if (num > 20 && num < 40) guessText.innerHTML = "Hint: The number is between 20 and 40 (exclusive)";
        else if (num % 2 === 0) guessText.innerHTML = "Hint: The number is even";
        else guessText.innerHTML = "You have 2 more attempts left";
    }

    if (count === 3) {
        guessText.innerHTML = "One last attempt!";
    }

    count++;
}

// Event listeners
btnStart.addEventListener("click", startGame);
btnCheck.addEventListener("click", checkGuess);
btnReset.addEventListener("click", resetGame);

function record(){
    //This function is to start recording ,hear , recognise speech , convert it to text and type it
    //This will be done using speech recognition Api --webkit speech recognition - webkit means webkit browsers like safari or chrome
    
}
