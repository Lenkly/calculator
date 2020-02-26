"use strict";

const calcOutput = document.querySelector(".calc__output");
const calcInputs = document.querySelectorAll(".calc__button--num"); //holt sich alle Zahlen
const calcResult = document.querySelector(".calc__button--res");
const calcClear = document.querySelector(".calc__button--clear");

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

const numberOne = Number(calcInputs[5].innerText);
const numberTwo = Number(calcInputs[8].innerText);

function handleClick() {
  calcOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
}
calcResult.addEventListener("click", handleClick);

function clear() {
  calcOutput.value = "";
}
calcClear.addEventListener("click", clear);
