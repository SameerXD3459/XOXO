"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
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
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return NaN;
    }
    return a / b;
}
var num1 = readlineSync.questionFloat("Enter the first number: ");
var num2 = readlineSync.questionFloat("Enter the second number: ");
console.log("Select an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
var operation = readlineSync.questionInt("Enter the operation number (1/2/3/4): ");
var result;
switch (operation) {
    case 1:
        result = add(num1, num2);
        console.log("Result: ".concat(num1, " + ").concat(num2, " = ").concat(result));
        break;
    case 2:
        result = subtract(num1, num2);
        console.log("Result: ".concat(num1, " - ").concat(num2, " = ").concat(result));
        break;
    case 3:
        result = multiply(num1, num2);
        console.log("Result: ".concat(num1, " * ").concat(num2, " = ").concat(result));
        break;
    case 4:
        result = divide(num1, num2);
        console.log("Result: ".concat(num1, " / ").concat(num2, " = ").concat(result));
        break;
    default:
        console.log("Invalid operation.");
}
