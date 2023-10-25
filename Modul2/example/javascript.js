let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate(operator) {
  try {
    if (operator && operator !== "=") {
      display.value += operator;
    } else if (operator === "^") {
      display.value = Math.pow(
        eval(display.value.split("^")[0]),
        eval(display.value.split("^")[1])
      );
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}
