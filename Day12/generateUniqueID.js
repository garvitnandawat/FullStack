// Set of characters to be used in the ID generation (Uppercase, Lowercase, Numbers 1-10)
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "12345678910";

// Function to generate a unique ID
function generateUniqueID() {
	let uniqueID = "";

	// Generate random characters from A-Z, a-z (6 characters in this case)
	for (let i = 0; i < 6; i++) {
		const randomChar = characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
		uniqueID += randomChar;
	}

	// Add a random number between 1 and 10 to the ID
	for (let i = 0; i < 2; i++) {
		const randomNumber = numbers.charAt(
			Math.floor(Math.random() * numbers.length)
		);
		uniqueID += randomNumber;
	}
	return uniqueID;
}

// Generate and display a unique ID
const id = generateUniqueID();
console.log(`Generated Unique ID: ${id}`);
