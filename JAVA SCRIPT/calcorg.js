let random = Math.random()

let a = prompt("Enter your first num");
let b = prompt("Enter your second num");
let c = prompt("Enter the operation");

let obj = {

    // Meaning:
    // User enters	Calculator will use:
    // +	-
    // *	+
    // -	/
    // /	**

    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

// eval function ; caluclations me help krta hai 

if (random > 0.1) {
    //   perform correct calculations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perform wrong calculations
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}