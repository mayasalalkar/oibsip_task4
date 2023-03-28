let result = document.getElementById("result");

function insert(num) {
    result.innerHTML += num;
}

function clearScreen() {
    result.innerHTML = "";
}

function back() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        result.innerHTML = eval(result.innerHTML);
    } catch (error) {
        result.innerHTML = "Error";
    }
}
