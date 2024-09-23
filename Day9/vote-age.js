const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");

 if (age >= 18) {
  console.log("You are eligible for vote");
} else if (age < 18) {
  console.log("You are not eligible for vote");
} else {
  console.log("Invalid input");
}