let head = document.getElementById("heading");
let para = document.getElementById("task");
let lvl = document.getElementById("level");

let tasks = ["DO 10 DIAMOND PUSHUPS", "LEARN PYTHON", "DATE A GIRL"];
let levels = ["EASY", "MEDIUM", "HARD"]

let sameindex = Math.floor(Math.random() * 3)

para.innerText = tasks[sameindex];
lvl.innerText = levels[sameindex];
