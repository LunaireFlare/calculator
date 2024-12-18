let operator = "";
let a = "";
let b = "";
let previousOperation = "";
let result = 0;

// --------- DISPLAY FUNCTIONS ---------

const digits = document.querySelectorAll(".digit-btn");
const currentDisplay = document.querySelector(".currentDisplay");
const previousDisplay = document.querySelector(".previousDisplay");

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (previousOperation == "") {
      a += digit.value;
      currentDisplay.textContent = a;
    } else if (previousOperation.charAt(previousOperation.length-2) == "=") {
      a = "";
      a += digit.value;
      currentDisplay.textContent = a;
      previousOperation = "";
      previousDisplay.textContent = previousOperation;
    } else {
      b += digit.value;
      currentDisplay.textContent = b;
    }
  });
});

function setOperator(sign, name) {
  if (a.length != 0 && (previousOperation == "" || previousOperation != "" && b.length == 0)) {
    updateDisplay(sign, name);
  } else if (a.length !== 0 && b.length !== 0 && previousOperation !== "") {
    operate(operator, a, b);
    updateDisplay(sign, name);
  }
}

function updateDisplay(sign, name) {
  operator = name;
  previousOperation = a + sign;
  previousDisplay.textContent = previousOperation;
}

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => handleDecimal())
function handleDecimal() {
  if (previousOperation == "" && !a.includes(".") && a.length >= 1) {
      a += ".";
      currentDisplay.textContent = a;
  } else if (!b.includes (".") && b.length >= 1) {
      b += ".";
      currentDisplay.textContent = b;
  }
}

// --------- CLEAR FUNCTIONS ---------

const clearButton = document.querySelector("#clearbtn");
clearButton.addEventListener("click", () => clearDisplay());
function clearDisplay() {
  a = "";
  b = "";
  previousOperation = "";
  result = 0;
  currentDisplay.textContent = "";
  previousDisplay.textContent = "";
}

const deleteButton = document.querySelector("#deletebtn");
deleteButton.addEventListener("click", () => deleteLastChar())
function deleteLastChar() {
  if (previousOperation == "" && a.length >= 1) {
    a = a.slice(0, -1);
    currentDisplay.textContent = a;
  } else if (previousOperation != "" && b.length >= 1) {
    b = b.slice(0, -1);
    currentDisplay.textContent = b;
  }
}

// --------- MATHS FUNCTIONS ---------

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => setOperator("+", "add"));

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => setOperator("-", "subtract"));

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => setOperator("*", "multiply"))

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => setOperator("/", "divide"));

const equalButton = document.querySelector("#equalbtn");
equalButton.addEventListener("click", () => {
  if (a.length != 0 && b.length != 0 && previousOperation.charAt(previousOperation.length-1) != "=") {
    previousOperation = previousOperation + b + "=";
    previousDisplay.textContent = previousOperation;
    operate(operator, a, b);
    operator = "";
  }
})

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

function operate() {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      if (b === 0) {
        alert("Error! You cannot divide by 0.")
      }
      else result = divide(a, b);
      break;
  }  

  result = parseFloat(result.toFixed(3));
  currentDisplay.textContent = result;
  a = result.toString();
  b = "";
}