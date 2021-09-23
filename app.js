const form = document.querySelector("form");
const correctAnswers = ["A", "B", "C", "D"];
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let introvert = 0;
  let extrovert = 100;
  const selectedAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  selectedAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      introvert += 25;
      extrovert -= 25;
    }
  });
  scrollTo(0, 0);
  // result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  let output1 = 0;
  let output2 = 100;
  const timer = setInterval(() => {
    result.querySelector(".intro").textContent = `${output1}%`;
    result.querySelector(".extro").textContent = `${output2}%`;
    if (output1 === introvert && output2 === extrovert) {
      clearInterval(timer);
    } else {
      output1++;
      output2--;
    }
  }, 10);
});
