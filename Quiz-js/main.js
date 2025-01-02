const form = document.querySelector(".quiz-form");
const correctAnswer = ["A", "A", "A", "A", "A"];
const questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("remove");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `You scored ${score}/5`;
});
