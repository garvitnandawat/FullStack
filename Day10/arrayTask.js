const prompt = require("prompt-sync")();

let arr = [];
let n = parseInt(prompt("Enter the number of elements: "));

for (let i = 0; i < n; i++) {
	arr.push(parseInt(prompt(`Enter element ${i + 1}: `)));
}

// Remove elements whose remainder is 0 when divided by 2
arr = arr.filter((num) => num % 2 !== 0);

console.log("Array after removing elements with remainder 0: ", arr);
