document.addEventListener("DOMContentLoaded", () => {
  const choices = ["Камень", "Бумага", "Ножницы"];
  const userChoiceDisplay = document.getElementById("userChoice");
  const computerChoiceDisplay = document.getElementById("computerChoice");
  const resultDisplay = document.getElementById("resultText");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.getAttribute("data-choice");
      const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];
      const result = getResult(userChoice, computerChoice);
      userChoiceDisplay.innerText = `Ваш выбор: ${userChoice}`;
      computerChoiceDisplay.innerText = `Выбор компьютера: ${computerChoice}`;
      resultDisplay.innerText = `Результат: ${result}`;
    });
  });

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Ничья";
    }
    if (
      (userChoice === "Камень" && computerChoice === "Ножницы") ||
      (userChoice === "Бумага" && computerChoice === "Камень") ||
      (userChoice === "Ножницы" && computerChoice === "Бумага")
    ) {
      return "Вы выиграли!";
    } else {
      return "Вы проиграли!";
    }
  }
});
