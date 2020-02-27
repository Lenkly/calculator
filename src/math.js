export function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
export function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
export function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
export function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
export function calculate(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return add(numberOne, numberTwo);
  }
  if (operator === "-") {
    return subtract(numberOne, numberTwo);
  }
  if (operator === "×") {
    return multiply(numberOne, numberTwo);
  }
  if (operator === "÷") {
    return divide(numberOne, numberTwo);
  }
}
