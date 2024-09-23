const prompt = require("prompt-sync")();

const userInput = prompt("Enter multiple string values separated by spaces: ");
const userInputArray = userInput
	.trim()
	.split(/\s+/)
	.map((str) => str.trim().toUpperCase())
	.join(" ");

console.log(`Original Text: ${userInput}`);
console.log(`Edited Text: ${userInputArray}`);
