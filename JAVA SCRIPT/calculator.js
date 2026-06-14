/*
QUESTION : 

creates a faulty calculator using Java script 

this faulty calculator does following :

1> two number as input
2> perform wrong operations 

+ -----> -
- -----> /
/ -----> **
* -----> +

ity performs wrong operation 10% of the time
 
*/

// SOLUTION:

alert("Welcome to the calculator")

let Number1 = Number(prompt("enter a number"));
let Number2 = Number(prompt("enter an another number"));

let operator = prompt("enter a operator(+ , - , / , * )");

function add(Number1, Number2) {
    return Number1 + Number2
}
function sub(Number1, Number2) {
    return Number1 - Number2
}
function mult(Number1, Number2) {
    return Number1 * Number2
}
function div(Number1, Number2) {
    return Number1 / Number2
}
function exp(Number1, Number2) {
    return Number1 ** Number2
}

let obj = Math.random()

if (operator == "+") {
    alert("Your result is:" + (obj < 0.1 ? add(Number1, Number2) : sub(Number1, Number2)))
}
else if (operator == "-") {
    alert("Your result is:" + (obj < 0.1 ? sub(Number1, Number2) : div(Number1, Number2)))
}
else if (operator == "/") {
    alert("Your result is:" + (obj < 0.1 ? div(Number1, Number2) : exp(Number1, Number2)))
}
else if (operator == "*") {
    alert("Your result is:" + (obj < 0.1 ? mult(Number1, Number2) : div(Number1, Number2)))
}
else {
    alert("Please enter a valid number and try again....")
}





