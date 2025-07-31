// Define a function named checkAnswer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4"

    // Retrieve the user's answer
    const selectInput = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
    if (selectedInput) {
        userAnswer = selectedInput.value;
    }

    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        // If the answer is correct
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If the answer is incorrect
        feedbackElement.textContent = "That is incorrect. Try agia!";
    }
}

// Add an event listener to the Submit Answer button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);