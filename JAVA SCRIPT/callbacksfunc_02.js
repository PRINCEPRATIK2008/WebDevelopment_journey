function sum(a, b) {
    console.log(a + b)
}

function calculater(a, b, sumCallback) {
    sumCallback(a, b);
}

calculater(1, 2, sum);

// nesting concept of if-else 
// let age = 19
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior")
//     }
//     else {
//         console.log("middle")
//     }
// }
// else {
//     console.log("child")
// }

// // nesting concept in loops
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//             console.log(j)
//     }
// }

// Example to understand the real callBackhell

function getdata(dataId, getNextData) {

    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// CallBack hell (pyramid of doom)
getdata(1, () => {
    getdata(2, ()=>{
        getdata(3, ()=>{
            getdata(4)
        })
    });
})


