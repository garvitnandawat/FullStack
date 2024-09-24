function checkNumber() {
    let num = document.getElementById("userInput").value;
    num = parseFloat(num);
    let result;

    if (num > 18) {
        result = "you are eligible for vote";
    } else if (num < 18) {
        result = "you are not eligible for vote";
    } else {
        result = "invalid";
    }

    document.getElementById("result").innerText = result;
}

// const p = required('prompt-sync')();

// let x = 