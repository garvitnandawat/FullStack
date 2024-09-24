function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value.trim();

    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = number1 / number2;
            }
            break;
        default:
            result = "Invalid input";
            break;
    }

    document.getElementById('result').textContent = result;
}
