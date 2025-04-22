import * as readlineSync from 'readline-sync';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return NaN;
    }
    return a / b;
}

let num1: number = readlineSync.questionFloat("Enter the first number: ");
let num2: number = readlineSync.questionFloat("Enter the second number: ");

console.log("Select an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

let operation: number = readlineSync.questionInt("Enter the operation number (1/2/3/4): ");

let result: number;

switch (operation) {
    case 1:
        result = add(num1, num2);
        console.log(`Result: ${num1} + ${num2} = ${result}`);
        break;
    case 2:
        result = subtract(num1, num2);
        console.log(`Result: ${num1} - ${num2} = ${result}`);
        break;
    case 3:
        result = multiply(num1, num2);
        console.log(`Result: ${num1} * ${num2} = ${result}`);
        break;
    case 4:
        result = divide(num1, num2);
        console.log(`Result: ${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log("Invalid operation.");
}