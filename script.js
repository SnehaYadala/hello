// Multiplication
function multiplication() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").value = a * b;
}


// Division
function division() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b == 0) {
        document.getElementById("result").value =
            "Cannot divide by zero";
    }
    else {
        document.getElementById("result").value = a / b;
    }
}


// Increment
function increment() {

    let value = Number(document.getElementById("num1").value);

    document.getElementById("result").value = value + 1;
}


// Decrement
function decrement() {

    let value = Number(document.getElementById("num1").value);

    document.getElementById("result").value = value - 1;
}


// Clear
function clearAll() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}

