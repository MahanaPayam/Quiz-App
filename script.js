const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(quizForm);
    let answeredQuestions = 0;
    const totalQuestions = 10;

    // Check how many questions have been answered
    for (let i = 1; i <= totalQuestions; i++) {
        if (formData.get(`q${i}`)) {
            answeredQuestions++;
        }
    }

    if (answeredQuestions < totalQuestions) {
        alert('Please answer all the questions before submitting.');
        return;
    }

    // Reset the form after submission
    quizForm.reset();
    alert('Quiz submitted! The form will reset now.');
});