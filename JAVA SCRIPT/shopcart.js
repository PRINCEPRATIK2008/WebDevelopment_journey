let shopcart = [2000, 450, 99, 1200, 350]

let finalamt = (a, b) => {
    return a + b
}

// console.log(shopcart.reduce(finalamt));
let total = shopcart.reduce(finalamt)

if (total > 1000) {
    console.log(total - total * 0.1)
}
else {
    console.log("No discount can be provided")
}

