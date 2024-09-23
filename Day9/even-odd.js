const prompt = require('prompt-sync')();

const userInput = prompt('Enter a number: ');

const number = parseFloat(userInput);

if (number % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}
