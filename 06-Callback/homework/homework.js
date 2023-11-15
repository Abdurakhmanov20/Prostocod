function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function deleteValue() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById("result").value;
    let calculation = eval(result);
    document.getElementById("result").value = calculation;
}