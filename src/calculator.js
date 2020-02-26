"use strict";

const calcOutput = document.querySelector(".calc__output");
const calcInputs = document.querySelectorAll(".calc__button--num"); //holt sich alle Zahlen
const calcResult = document.querySelector(".calc__button--res");
const calcClear = document.querySelector(".calc__button--clear");
const calcOperators = document.querySelector(".calc__button--op");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

let numberOne = Number(calcInputs[5].innerText);
let numberTwo = Number(calcInputs[8].innerText);

function resultOutput() {
  calcOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
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
function addNumbers(calcInput) {
  function handleInput() {
    calcOutput.value += calcInput.innerText;
  }
  calcInput.addEventListener("click", handleInput);
}
calcInputs.forEach(addNumbers);

/*
calcInputs.forEach(function addNumbers(calcInput) {
    calcInput.addEventListener("click")
  console.log(calcInput.innerText);
}); 

calcOperators;

function addOperatorEventListener(calcOperator) {
  function handlecalcOperatorClick() {
    numberOne = Number(calcOutput.value);
    console.log(calcOperator.innerText);
  }
  calcOperator.addEventListener("click", handlecalcOperatorClick);
}
calcOperators.forEach(addOperatorEventListener);
*/
