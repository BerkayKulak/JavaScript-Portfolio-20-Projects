const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

updatedDisplay();

function updatedDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;

  if (!element.matches("button")) {
    return;
  }

  if (element.classList.contains("operator")) {
    return;
  }

  if (element.classList.contains("decimal")) {
    inputDecimal(element.value);
    updatedDisplay();
    return;
  }

  if (element.classList.contains("clear")) {
    clear();
    updatedDisplay();
    return;
  }

  inputNumber(element.value);
  updatedDisplay();
});

function inputNumber(num) {
  displayValue = displayValue === "" ? num : displayValue + num;
}

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function clear() {
  displayValue = "0";
}
