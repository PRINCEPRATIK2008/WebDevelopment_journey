function good(name) {
    console.log("Hey " + name + " you are very nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your tshit is very nice");
}

// good("Prince");
good("xyz")

function sum(a , b) {
    // console.log(a+b)
    return a + b
}

result1 = sum(3 , 5);
result2 = sum(8 , 7);
result3 = sum(2 , 9);

console.log("The sum of these numbers is: ",result1)
console.log("The sum of these numbers is: ",result2)
console.log("The sum of these numbers is: ",result3)

// another example 

function FullName(FirstName , SecondName){
    return FirstName + SecondName
}

Final = FullName("Prince" , "Pratik");

console.log("Your good name is:  ",Final);


// arrow functions

const funct = (x)=>{
    console.log("I am a arrow function: ", x)
}

funct(34);
funct(89);
funct(22);