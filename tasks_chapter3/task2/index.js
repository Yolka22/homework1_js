let min = 0;
let max = 100;
let guess;

while (true) {
  guess = Math.floor((min + max) / 2);
  let userInput = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}?`);

  if (userInput === ">") {
    min = guess + 1;
  } else if (userInput === "<") {
    max = guess - 1;
  } else if (userInput === "==") {
    alert(`Вітаю! Ви загадали число ${guess}.`);
    break;
  } else {
    alert("Будь ласка, введіть один з наступних символів: '>', '<', або '=='");
  }

  if (min > max) {
    alert("Ви намагаєтесь обдурити гру! Було виявлено нечесність. Гра завершена.");
    break;
  }
}