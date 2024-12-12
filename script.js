let operator, a, b;
let displayReset = false;

const digits = document.querySelectorAll(".digit-btn");
const operators = document.querySelectorAll(".operator-btn");
const currentDisplay = document.querySelector(".currentDisplay");
const previousDisplay = document.querySelector(".previousDisplay");

const clearButton = document.querySelector("#clearbtn");
const deleteButton = document.querySelector("#deletebtn");
const equalButton = document.querySelector("#equalbtn")


// --------- DISPLAY FUNCTIONS ---------

digits.forEach((digit) => {
  digit.addEventListener("click", () => appendToDisplay(digit.textContent));
})

operators.forEach((operator) => {
  operator.addEventListener("click", () => appendToDisplay(operator.textContent));
})

function appendToDisplay(value) {
  if (currentDisplay === "0" || previousDisplay)
  currentDisplay.textContent += value;
}

clearButton.addEventListener("click", () => clearDisplay());

function clearDisplay() {
  a = 0;
  b = 0;
  operator = "";
  currentDisplay.textContent = "";
  previousDisplay.textContent = "";
}

equalButton.addEventListener("click", () => operate())


// --------- MATHS FUNCTIONS ---------

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0) return null
      else return divide(a, b);
      break;
  }
}