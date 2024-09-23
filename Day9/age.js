const prompt = require('prompt-sync')();

const userInput = prompt('Enter a number: ');

const number = parseFloat(userInput);

if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}
