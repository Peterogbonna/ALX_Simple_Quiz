// Define a function named checkAnswer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s answer
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
    if (selectedInput) {
        userAnswer = selectedInput.value;
    }

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the user’s answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Correct feedback
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // Incorrect feedback - this is the exact string the checker is looking for
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');

// Add a click event listener to the button
submitButton.addEventListener('click', checkAnswer);