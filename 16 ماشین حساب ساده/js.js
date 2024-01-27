function clearScreen() {
    // This is for clear all the values on input with the result's ID
    document.getElementById("result").value = "";

    // This is for clear all the values on input with the result's ID
    document.querySelector('.show_num_child').innerHTML = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;

    if (value === "/"){
        document.querySelector('.show_num_child').innerHTML = document.getElementById("result").value
    }else if (value === "-"){
        document.querySelector('.show_num_child').innerHTML = document.getElementById("result").value
    }else if (value === "+"){
        document.querySelector('.show_num_child').innerHTML = document.getElementById("result").value
    }else if (value === "*"){
        document.querySelector('.show_num_child').innerHTML = document.getElementById("result").value
    }

}

// This function evaluates the expression and return result
function
calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;

    // https://www.w3schools.com/jsref/jsref_eval.asp
}