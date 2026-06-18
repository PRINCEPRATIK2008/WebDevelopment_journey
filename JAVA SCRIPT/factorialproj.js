// question:
// calculate factorial of a number using reduce and for loop...(2 methods).

// solution:
// (METHOD-1 FOR LOOPS)

let factorial = Number(prompt("Enter no for which you want to calculate factorial"))
let result = 1

for (let index = 1; index <= factorial; index++) {
    result = result * index 
}

console.log(result)

// (METHOD-2 BY REDUCE)

let arr = [1, 2, 3, 4, 5, 6]

let red = (a, b) => {
    return a * b
}

console.log(arr.reduce(red))

