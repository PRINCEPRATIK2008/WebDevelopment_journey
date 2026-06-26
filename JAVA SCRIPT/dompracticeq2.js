let head = document.getElementById("moodtitle")
let para = document.getElementById("moodmessage")

let positive = ["PROGRESSIVE", "DETERMINED", "HARDWORKER", "LEARNER"]
let negative = ["SHAMELESS", "LOSER", "LAZY CHARACTER", "STUPID"]

let messages = [positive, negative]
let moods = ["MOTIVATION", "ROAST"]

// loops are not usefull as we have to basicaly work on two elements...

let randomindex = Math.floor(Math.random() * 2)
let randomtextindex = Math.floor(Math.random() * 4)

// new: variabletext[var1][var2]

head.innerText = moods[randomindex]
para.innerText = messages[randomindex][randomtextindex]
