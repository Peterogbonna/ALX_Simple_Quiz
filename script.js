// quiz.js

function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    
    // Handle cases where no answer is selected
    if (!selectedInput) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedInput.value;

    // 3. Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red';
    }
}

// 4. Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);