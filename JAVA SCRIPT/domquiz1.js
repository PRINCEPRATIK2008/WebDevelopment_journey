// let select = document.getElementsByClassName("box")
// let colors = ["red", "blue", "green", "yellow", "orange"]
// let colors1 = ["black", "orange", "red", "blue", "white"]
// let size = colors.length

// for (let index = 0; index < select.length; index++) {
//     let randomindex = Math.floor(Math.random() * size)
//     let randomtextindex = Math.floor(Math.random() * size)
//     select[index].style.backgroundColor = colors[randomindex]
//     select[index].style.color = colors1[randomtextindex]
// }

// Another approach :

// let boxes = document.getElementsByClassName("box");
// or 
console.log("script is initializing...");

let boxes = document.querySelector(".container").children

function getRandomcolor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = getRandomcolor();
    element.style.color = getRandomcolor();
});

