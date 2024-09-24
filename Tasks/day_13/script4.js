function displayValues() {
    // Creating the main object
    const mainObject = {
        name: "Main Object",
        innerObject: {
            key: "value",
            number: 42
        }
    };

    // Accessing the value of the second (nested) object
    const innerObjectValue = mainObject.innerObject.key; // Accessing the value of 'key'
    const innerObjectNumber = mainObject.innerObject.number; // Accessing the value of 'number'

    // Display the values on the webpage
    document.getElementById('keyValue').textContent = innerObjectValue;
    document.getElementById('numberValue').textContent = innerObjectNumber;
}
