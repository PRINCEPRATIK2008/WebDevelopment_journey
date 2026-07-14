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
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

// p.allSettled() : reject ho ya resolve doesnt care it will provide value and status of the promise

// p.race() : jonsi bhi promise phele resolve hui woh show hojaygi 
// p.any() :    HMWRK
// p.resolve() : HMWRK
// p.reject() : HMWRK
// quix : try all these api on your custom promises