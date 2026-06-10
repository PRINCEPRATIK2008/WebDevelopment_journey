console.log("Hey this all about variables in Js")
let a = 5;
let b = 4;
let c = "Prince"
console.log(a + b)

// var ---- global scoped , let ---- block scoped----Remember
console.log(typeof a, typeof b, typeof c)
// exempliefy;
{
    let a = 6;
    console.log(a)
}
// above function will give output of 6 if, let is replaced by var then the value of a i.e, 5 will be shown everywhere as var is global scoped

let p = "Prince";
let q = 18;
let r = 4.55;
let x = true;
let y = undefined;
let z = null;

console.log(p, q, r, x, y, z)
console.log(typeof p, typeof q, typeof r, typeof x, typeof y, typeof z)

let o = {
    name : "Prince",
    "job code" : 5600,
    "is handsome": true
}

console.log(o);
o.salary = "100 crores";
console.log(o);
o.salary = "500 crores";
console.log(o);