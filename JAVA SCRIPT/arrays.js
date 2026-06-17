let arr = [1, 2, 4, 5, 7]
// inded  0 , 1 , 2 , 3 , 4
// console.log(arr);
// console.log(arr.length);

arr[0] = 5666;

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[9]);

console.log(typeof arr);

// array--->string

console.log(arr.toString());

// elements inside array joins

console.log(arr.join(" and "));

// pop function:
// pull out element value from the last of the array 

console.log(arr.pop())

// push function:
// add new elements to the array

console.log(arr.push(100));

console.log(arr.push("PRINCE"));

// shift function:
// pull out the first element...

console.log(arr.shift());

// unshift function:
// add a value at the starting of the array

console.log(arr.unshift(" Jack "));

// delete function:
// as from name it is clear that it is used for some deletion of elements like

delete arr[2];
console.log(arr);

// concat function:
// works as combining two or more arrays together

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
let c = [9, 10, 11, 12];

let d = a.concat(b, c)

// splice function:
// example:
// numbers = [1, 2, 3, 4, 5]

// (5) [1, 2, 3, 4, 5]
// numbers.splice(1, 2)
// (2) [2, 3]
// numbers
// (3) [1, 4, 5]

// it depends on how much index u have added by which it decides to take of the set of all elements within that index...
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(1, 2));

// similary if we do this below:
console.log(numbers.splice(1, 3, 222, 333));
// then the new numbers gets added to the array 

// slice function :

// exemplify 
console.log(numbers.slice(2));

// mean start from index 2 and and move till the end whereas tthe below syntax illustrates :
// start from index 1 and go till index 3 where the element in index 3 is not included ...

console.log(numbers.slice(1, 3))