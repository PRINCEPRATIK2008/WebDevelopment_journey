document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey i am a box</div>\n        <div class="box">Hey i am a box</div>\n    </div>'

// tagName property sirf elements pe applicable hai whereas nodeName kisi bhi trh ke node ke liye hai 
document.querySelector(".container").tagName
'DIV'
document.querySelector(".container").nodeName
'DIV'

// shows text content without showing the tags
document.querySelector(".container").textContent 

// inner HTML change 
document.querySelector(".container").innerHTML = "Hey i am prince"

// element consist of any attribute or not 
document.querySelector(".container").hasAttribute("style")
// return true {example}

// whats inside the attribute
document.querySelector(".container").getAttribute("style")
// return display : flex; {example}

// if we want to change the attribute value
document.querySelector(".container").setAttribute("style", "display : inline")
// return style = "display inline" {example}

// get all the attributes of an element by this 
document.querySelector(".container").attributes

// if we want to remove a attribut 
document.querySelector(".container").remove("style")
// style will get removed {example}

let div = document.createElement("div");
div.innerHTML = "i have been inserted <b>by prince</b>"
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

// container element ke phele and baad me uss div ki placement
document.querySelector(".container").before(div);
document.querySelector(".container").after(div);

// within container me beginning ya last wali movement ke liye 
document.querySelector(".container").prepend(div);
document.querySelector(".container").append(div);

// strings ka addition with respect to the element 
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "I am under the water. here too much raining please help ouuuuuu..")
// "afterend" "afterbegin" "beforeend" "beforebegin" can be used acc. to need

// classList & className
document.querySelector(".container").classList
document.querySelector(".container").className

// classList & className add/remove
document.querySelector(".container").classList.add("example")
// .toggle : khula hai toh band / band hai toh khula 
document.querySelector(".container").classList.toggle("red")