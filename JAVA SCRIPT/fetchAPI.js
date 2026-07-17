const URL = "https://catfact.ninja/fact";
const fct = document.querySelector("#fact");
const tch = document.querySelector(".btn")

// const getFacts = async () => {
//     console.log("getting data ......")
//     let response = await fetch(URL);
//     console.log(response);// JSON FORMAT.. 
//     let data = await response.json();  //.json hume second promise return krta toh krke hum await use kiya...
//     fct.innerText = data.fact;
// };

// with promise func
fetch(URL).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    fct.innerText = data.fact;

})
tch.addEventListener("click", getFacts);