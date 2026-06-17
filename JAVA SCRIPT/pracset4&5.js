// PRACTICE SET 4 :

// question3:
let name = "PRINCE"
console.log(name.toLowercase());

// question4:
const stat = "Please give Rs 1000"
const amount = stat.slice(15);

console.log(amount)

// question5:
let a = "PRINCE"
console.log(a.replace(("N", "X")));

// question2:
const name = "DISHA"
console.log(name.startsWith("o"));
console.log(name.endsWith("o"));

// PRACTICE SET 5:

// question1:

let arr = [1, 2, 3, 4, 5, 6,]

let input = prompt("enter your desire number")
console.log(arr.push((input)));

// question3:

let arr2 = [1, 5, 10, 9, 0, 25]

const operation = (e) => {
    if (e % 10 == 0) {
        return true
    }
    return false
}

console.log(arr2.filter(operation));

// question4 : 

let newArr = arr2.map(e => {
    return e ** 2
})

console.log(newArr);

// question5 :

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const factorial = (i, k) => {
    return i * k;
}
console.log(arr.reduce(factorial));





