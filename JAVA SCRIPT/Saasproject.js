/* Creating a business name generator by combining list of adjextives and shop name and another world 

List of adjectives:
crazy
amazing 
fire

Shop name:
Engine 
foods
garments

Another word :
Bros
Limited 
Hub

*/

// Solution:

let randm1 = Math.random()
let randm2 = Math.random()
let randm3 = Math.random()

let adj = {
    a: "crazy",
    b: "amazing",
    c: "Fire"
}

let shopname = {
    d: "Engine",
    e: "Foods",
    f: "Garments"
}

let anothername = {
    g: "Bros",
    h: "Limited",
    i: "Hub"
}

let adjresult;
if (randm1 < 0.33) {
    adjresult = adj["a"];
}
else if (randm1 < 0.66) {
    adjresult = adj["b"];
}
else {
    adjresult = adj["c"];
}

let shopnameresult;
if (randm2 < 0.33) {
    shopnameresult = shopname["d"];
}
else if (randm2 < 0.66) {
    shopnameresult = shopname["e"];
}
else {
    shopnameresult = shopname["f"];
}

let anothernameresult;
if (randm3 < 0.33) {
    anothernameresult = anothername["g"];
}
else if (randm3 < 0.66) {
    anothernameresult = anothername["h"];
}
else {
    anothernameresult = anothername["i"];
}

alert(`Your business name should be: ${adjresult} ${shopnameresult} ${anothernameresult}`)
alert(`Thankyou for choosing us`)


// solution from yt 

let rand = Math.random()
let first, second, third;


if (rand<0.33){
      first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

let rand1=Math.random()
if (rand<0.33){
      second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

let rand2=Math.random()
if (rand<0.33){
      third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)