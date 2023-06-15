const quizForm = document.querySelector(".quiz-form")
const submitBtn = document.querySelector("#submit-answers-btn")
const outputMsg = document.querySelector(".output")

const correctAnswers = ["90°","One Right Angle","Equilateral","Median","60"]

function calculateScore() {
    const formResults = new FormData(quizForm)
    let score = 0
    let index = 0

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1
        }
        index = index + 1
    }
    outputMsg.innerText = "Your final score is " + score
}

submitBtn.addEventListener("click", calculateScore)
