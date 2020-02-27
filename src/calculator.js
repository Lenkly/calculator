import { add, subtract, multiply, divide } from "./math.js";

const calcOutput = document.querySelector(".calc__output");
const calcInputs = document.querySelectorAll(".calc__button--num"); //holt sich alle Zahlen
const calcResult = document.querySelector(".calc__button--res");
const calcClear = document.querySelector(".calc__button--clear");
const calcOperators = document.querySelectorAll(".calc__button--op");

let numberOne = 0;
let numberTwo = 0;

function resultOutput() {
  numberTwo = Number(calcOutput.value);
  calcOutput.value = add(numberOne, numberTwo);
  console.log("resultclick", numberOne, numberTwo, calcOutput.value);
}
calcResult.addEventListener("click", resultOutput);

function clear() {
  calcOutput.value = "";
}
calcClear.addEventListener("click", clear);

//Durch Anklicken der Nummern werden sie im Output angzeigt
/* function addNumbers(calcInput) {
  function handleInput() {
    calcOutput.value = calcInput.innerText;
  }
  calcInput.addEventListener("click", handleInput);
}
calcInputs.forEach(addNumbers); */

//+= führt dazu, dass Nummern hintereinander geschrieben werden
calcInputs.forEach(function addNumbers(calcInput) {
  function handleInput() {
    calcOutput.value += calcInput.innerText;
    console.log(calcInput.innerText);
  }
  calcInput.addEventListener("click", handleInput);
});

calcOperators.forEach(function addOperator(calcOperator) {
  function operatorInput() {
    numberOne = Number(calcOutput.value);
    clear();
    console.log(
      "operatorInputClick",
      numberOne,
      numberTwo,
      calcOperator.innerText
    );
  }
  calcOperator.addEventListener("click", operatorInput);
});
/*
function plusminus(numberOne, numberTwo) {
  if (calcOutput.value == numberOne) {
    numberOne = numberOne * -1;
    calcOutput.value = numberOne;
  } else if (calcOutput.value != numberOne && calcOutput.value == numberTwo) {
    numberTwo = numberTwo * -1;
    calcOutput.value = numberTwo;
  }
}

ANDERE LÖSUNG
function addNumbers(calcInput) {
  function handleInput() {
    calcOutput.value += calcInput.innerText;
    console.log("handleInputClick", numberOne, numberTwo);
  }
  calcInput.addEventListener("click", handleInput);
}
calcInputs.forEach(addNumbers);

function addOperator(calcOperator) {
  function operatorInput() {
    numberOne = Number(calcOutput.value);
    clear(); //Entfernt die erste Zahl, damit di zweite Zahl hinzugefügt werden kann
    console.log(
      "operatorInputClick",
      numberOne,
      numberTwo,
      calcOperator.innerText
    );
  }
  calcOperator.addEventListener("click", operatorInput);
}
calcOperators.forEach(addOperator); */
