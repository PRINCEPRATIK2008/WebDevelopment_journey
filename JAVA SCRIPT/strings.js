console.log("This is strings tutorial");

let a = "Prince";

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let name = "Prince"
let friend = "jassi"

console.log("His name is " + name + " and his friend name is " + friend)

console.log(`His name is ${name} and his friend name is ${friend}`)


// upercase/lowercase functions :


let b="Shivam"
console.log(b.toUpperCase());

// similarly

console.log(b.toLowerCase());

// slice function :

console.log(b.slice(1,4));

// 1 included hai lekin 4 nhi ....

console.log(b.slice(1));

// Replace function (changes within the strings):

console.log(b.replace("Sh", "77"));

// point to note : only first occurence would change.......

// concat function :

console.log(b.concat(a , "disha"));

// charAT function :

// note: basially charAT function tell about the particular character at a specific value ..

console.log(b.charAt(0));

// indexOF function:

// note : tells a what positon a particular thing is starting like ..

console.log(b.indexOf("iv"));

// endswith / startswith function:

console.log(b.startsWith("Sh"));
console.log(b.endsWith("im"));




