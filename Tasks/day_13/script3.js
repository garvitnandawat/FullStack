function filterArray() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example array

    // Display the original array
    document.getElementById('originalArray').textContent = numbers.join(', ');

    // Filter the array to get numbers divisible by 2
    const filteredNumbers = numbers.filter(function(num) {
        return num % 2 === 0; // Check if remainder is 0 when divided by 2
    });

    // Display the filtered array
    document.getElementById('filteredArray').textContent = filteredNumbers.join(', ');
}
