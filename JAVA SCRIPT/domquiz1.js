let select = document.getElementsByClassName("box")
let colors = ["red", "blue", "green", "yellow", "orange"]
let colors1 = ["black", "orange", "red", "blue", "white"]
let size = colors.length

for (let index = 0; index < select.length; index++) {
    let randomindex = Math.floor(Math.random() * size)
    let randomtextindex = Math.floor(Math.random() * size)
    select[index].style.backgroundColor = colors[randomindex]
    select[index].style.color = colors1[randomtextindex]
}


