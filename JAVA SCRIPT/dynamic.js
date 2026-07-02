function Createcard(title, cName, views, monthsold, duration, thumbnail) {
    let container = document.querySelector(".container")
    
    let videocard = document.createElement("div");
    videocard.setAttribute("class", "video-card");
    let thumbnailbox = document.createElement("div");
    thumbnailbox.setAttribute("class", "thumbbox1");
    let img = document.createElement("img");

    let duratn = document.createElement("span")
    duratn.setAttribute("class", "duration")

    let information = document.createElement("div")
    information.setAttribute("class", "video-info");

    img.src = thumbnail,
        duratn.innerText = duration;

    let heading = document.createElement("h2")
        heading.innerText = title;

    let info = document.createElement("p");
        info.innerText = `${cName} • ${views} • ${monthsold}`

    thumbnailbox.append(img);
    thumbnailbox.append(duratn);
    information.append(heading)
    information.append(info);
    videocard.append(thumbnailbox);
    videocard.append(information);
    container.append(videocard)

}

Createcard("EXPLORING KYOTO #1", "PassengerPrincE", "598k", "1 month ago", "1:10:02", "Screenshot 2026-07-01 001845.png")
Createcard("CHERRY BLOOSOM IN KYOTO #2", "PassengerPrincE", "900k", "16 days ago", "45:09", "Screenshot 2026-07-02 221736.png")
Createcard("VISITNG SHIBUYA SQUARE FOR FIRST TIME #3", "PassengerPrincE", "900k", "3hours ago", "45:09", "Screenshot 2026-07-02 224638.png")
