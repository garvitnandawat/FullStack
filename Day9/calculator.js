const prompt = require('prompt-sync')();

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));
const operator = prompt('Enter the operator (+, -, *, /): ');

let result;

if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '*') {
    result = number1 * number2;
} else if (operator === '/') {
    if (number2 !== 0) {
        result = number1 / number2;
    } else {
        console.log('Division by zero is not allowed');
        process.exit();
    }
} else {
    console.log('Invalid input');
    process.exit();
}

console.log(`The result is: ${result}`);
