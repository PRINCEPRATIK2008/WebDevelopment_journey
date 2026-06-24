// const num=  Number(prompt("enter your number"))
// let result= 1
// for (let index = 1; index<=num ; index++) {
//         result = index * result;
//         // or 
//         // result *= index;
// }
// console.log(result);


// another better new method

let a = 6

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c
}
factorial(a)