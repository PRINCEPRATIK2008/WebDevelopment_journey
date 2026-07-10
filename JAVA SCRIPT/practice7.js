// question 1 
document.querySelector(".navsection").children[0].children[0].style.color = "red"

// question 2 - Create a table without tbody. Now use "View Page Source" to check whether it has a tbody or not. ANSWER IS YES

// question 3
const section = document.querySelector(".parts")
section.children[0].children[0].style.color = "green"
section.children[0].children[2].style.color = "green"

// question 4
document.querySelectorAll(".list").forEach(e => {
    e.style.backgroundColor = "cyan"
});