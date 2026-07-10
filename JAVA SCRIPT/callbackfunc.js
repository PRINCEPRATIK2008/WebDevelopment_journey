console.log("Prince is hacker")
console.log("Lassi is hecker")

// script will not stop instead it will move further and after timeout it will print the function
setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);


console.log("the end")

//  callback func:

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Prince", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// understanding it more :
// PTBN: Function tab tak nahi chalta jab tak koi usko call na kare.

// example-1 
function hello() {
    console.log("Hello");
}
function student(func) {
    func()
}
student(hello);

// example-2
function add() {
    console.log(10 + 20);
}
function run(fcn){
    fcn();
}
run(add);

// example-3
function greet(name){
    console.log("Hello"+ name);
}
function ran(fun) {
    fun("Prince");
}
ran(greet)