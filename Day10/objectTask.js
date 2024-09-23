let outerObject = {
	value: 52,
	innerObject: {
		value: 53,
	},
};

console.log("Value of first object: " + outerObject.value);
console.log("Value of inner object: " + outerObject.innerObject.value);
