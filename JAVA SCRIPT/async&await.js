// async work is to always return a promise
async function hello() {
    console.log("Hello")
}

// await work is to pause all execution till the promise is settled of the called function 
// Pnt : await can only be used inside the async function 

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("200")
        }, 2000)
    });
}

// await api(); // we cannot use this remember its Pnt. 
async function getWeatherData() {
    await api();  // Ist call
    await api();  // 2nd call 
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    console.log("Getting data1.....")
    await getData(1);
    console.log("Getting data2.....")
    await getData(2);
    console.log("Getting data3.....")
    await getData(3);
    console.log("Getting data4.....")
    await getData(4);
    console.log("Getting data5.....")
    await getData(5);
}

