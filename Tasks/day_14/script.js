// Define an array with string values
const stringArray = ['hello', 'world', 'javascript', 'is', 'fun'];

// Convert each string in the array to uppercase
const upperCaseArray = stringArray.map(str => str.toUpperCase());

// Display the result on the webpage
document.getElementById('result').textContent = upperCaseArray.join(', ');
