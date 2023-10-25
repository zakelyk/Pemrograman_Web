let display = document.getElementById("display");

function appendValue(value) {
  if (value === "de") {
    toggleDecimal();
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function toggleDecimal() {
  if (display.value.includes("e")) {
    // Konversi dari notasi ilmiah ke desimal
    display.value = parseFloat(display.value).toString();
  } else if (!display.value.includes(".")) {
    // Konversi dari desimal ke notasi ilmiah
    display.value = Number(display.value).toExponential();
  }
}

function calculate(operator) {
  try {
    let currentVal = display.value;

    if (operator) {
      currentVal += operator;
    } else {
      currentVal = eval(currentVal);
    }

    display.value = currentVal.toString();
  } catch (error) {
    display.value = "Error";
  }
}
