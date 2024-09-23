let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Add an element to the end of the array using push()
arr.push(11);
console.log("After push:", arr);

// 2. Remove the last element from the array using pop()
let removedElement = arr.pop();
console.log("Removed element:", removedElement);
console.log("After pop:", arr);

// 3. Remove the first element from the array using shift()
removedElement = arr.shift();
console.log("Removed element:", removedElement);
console.log("After shift:", arr);

// 4. Add an element to the beginning of the array using unshift()
arr.unshift(0);
console.log("After unshift:", arr);

// 5. Modify the array by removing and/or adding elements using splice()
arr.splice(2, 2, 20, 21);
console.log("After splice:", arr);

// 6. Create a new array from a portion of the existing array using slice()
let slicedArray = arr.slice(3, 6);
console.log("Sliced array:", slicedArray);

// 7. Find the index of an element in the array using indexOf()
let index = arr.indexOf(21);
console.log("Index of 21:", index);

// 8. Create a new array by transforming each element in the existing array using map()
let mappedArray = arr.map((x) => x * 2);
console.log("Mapped array:", mappedArray);

// 9. Filter elements from the array that meet a certain condition using filter()
let filteredArray = arr.filter((x) => x % 2 === 0);
console.log("Filtered array:", filteredArray);

// 10. Calculate a single value from the array using reduce()
let sum = arr.reduce((acc, current) => acc + current, 0);
console.log("Sum of array:", sum);
