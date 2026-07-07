let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    //  alert("i was clicked. YAYY!!")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked. Enjoy your click!</b>"
})
// LIST OF ALL MOUSE EVENTS:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("contextmenu", ()=>{
    alert("Donot hack us by right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key , e.keyCode);
})