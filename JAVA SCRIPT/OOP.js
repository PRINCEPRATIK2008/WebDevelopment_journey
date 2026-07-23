// let obj = {
//     a: 1,
//     b: "Prince"
// }

// console.log(obj);

// let animal ={
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal; //set rabbit_[[Prototype]] = animal


class animal{
    constructor(){
        console.log("object is created....")
    }
    eats(){
        console.log("kha raha hooon")
    }
    jumps(){
        console.log("kood raha hooon")
    }
}

let a = new animal()
console.log(a)