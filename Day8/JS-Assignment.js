// 1. Basic Function
function sayHello() {
	return "Hello, World!";
}
console.log(sayHello());

// 2. Function with Parameters
function doubleNumber(num) {
	return num * 2;
}
console.log(doubleNumber(4));

// 3. Simple Return Function
function addTwoNumbers(num1, num2) {
	return num1 + num2;
}
console.log(addTwoNumbers(5, 7));

// 4. Arrow Function
const doubleNumberArrow = (num) => num * 2;
console.log(doubleNumberArrow(4));

// 5. Arithmetic Operator
function subtractTen(num) {
	return num - 10;
}
console.log(subtractTen(20));

// 6. Comparison Operator
function isGreaterThanFive(num) {
	return num > 5;
}
console.log(isGreaterThanFive(7));

// 7. Logical Operator
function isBetweenOneAndTen(num) {
	return num >= 1 && num <= 10;
}
console.log(isBetweenOneAndTen(5));

// 8. If-Else Statement
function isEven(num) {
	if (num % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

console.log(isEven(10));
console.log(isEven(11));
