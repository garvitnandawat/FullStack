const prompt = require("prompt-sync")();

// Question 1: String Concatenation
const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// Question 2: If-Else Statements
const num = parseInt(prompt("Enter a number: "));

if (num > 0) {
	console.log("Positive");
} else if (num < 0) {
	console.log("Negative");
} else {
	console.log("Zero");
}

// Question 3: Loops
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Question 4: Functions
function greet(name) {
	console.log(`Hello, ${name}!`);
}

greet("Rahul");

// Question 5: Arrays
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

console.log("Sum: " + sum);
