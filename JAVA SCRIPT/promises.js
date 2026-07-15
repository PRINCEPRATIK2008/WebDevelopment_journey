console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no was not supporting you")
    } else {
        setTimeout(() => {
            console.log("yes I am done")
            resolve("prince")
        }, 3000);
    }

})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no was not supporting you 2")
    } else {
        setTimeout(() => {
            console.log("yes I am done 2")
            resolve("prince 2")
        }, 1000);
    }

})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

// p.allSettled() : reject ho ya resolve doesnt care it will provide value and status of the promise

// p.race() : jonsi bhi promise phele resolve hui woh show hojaygi 
// p.any() :    HMWRK
// p.resolve() : HMWRK
// p.reject() : HMWRK
// quix : try all these api on your custom promises

// For more practice
let prom3 = new Promise((resolve, reject) => {
    console.log("Downloading.....")
    setTimeout(() => {
        resolve("Download Completed")
    }, 2000);
})

// 2>
console.log("Start");

let p = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve("Done");
});

console.log("End");

// output: internaly stored value on execution 

// Start
// Insider Promise
// End

// foR Done to be print we have to execute this function p.then()

// 3>
console.log("1");

let p = new Promise((resolve) => {
    console.log("2");
    resolve("Prince");
    console.log("3");
});

console.log("4");

p.then((value) => {
    console.log(value);
});

console.log("5");

// output: 1, 2, 3, 4, 5, Prince

// 4>
function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID)
            resolve("success")
            if (getNextData) {
                getNextData()
            }
        }, 5000);
    });
}

// promise-chain
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`some data 1`)
            resolve("success")
        }, 4000);
    })
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`some data2`)
            resolve("success")
        }, 4000);
    })
}
console.log("fetching data1....")
let p1 = asyncFunc1()
p1.then((a) => {
    // console.log(a)
    console.log("fetching data2....")
    let p2 = asyncFunc2()
    p2.then((res) => {
        // console.log(res)
    })
})

