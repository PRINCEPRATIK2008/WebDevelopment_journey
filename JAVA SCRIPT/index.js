console.log("Hello i am conditional tutorial")

let age = 0;
// let grace = 2;


// age += grace        other operators like -= , /= , *= , **= , %=

// camparison operators:
//    == equal to 
//    != not equal to  

//    === equal to and type 
// example:----
//  "3"= 3 is we will run it in terminal its output value be true bcz logicaly values on lhs and rhs are same but its false staement as both types are different lhs is string where as rhs is numeric 
//  so if we write "3"===3 then it will show false as both types are different.....

//    >   greater than
//    <   lesser than 
//    >=  greater than and equal to 
//    <=  lesser than and equal to


// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age / grace);
// console.log(age * grace);
// console.log(age ** grace);

// if else if else ladder example 

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are u kidding")
}
else if (age == 1) {
    console.log("Are u again kidding")
}
else {
    console.log("You can not drive");
}

a = 6;
b = 8;

let c = a > b ? (a - b) : (a + b);

console.log(c);

/*
translates to:

if(a > b){
let  c = a - b ;
}
else{
    let c = a + b ;
}
    
*/