function Createcard(discription, price, rating, delivery, userbought, offers, imgsource) {
    let container = document.querySelector(".container")

    let thumbnails = document.createElement("div")
    thumbnails.setAttribute("class", "thumbnail")
    let ratings = document.createElement("span")
    ratings.innerText = rating
    let priceBox = document.createElement("div")
    priceBox.innerText = price
    let deliverydetails = document.createElement("span")
    deliverydetails.innerText = delivery
    let discriptionBox = document.createElement("h3")
    discriptionBox.innerText = discription
    let cardinfo = document.createElement("div")
    cardinfo.setAttribute("class", "card-infooo")
    let productcard = document.createElement("div")
    productcard.setAttribute("class", "product-card")
    let purchase = document.createElement("span")
    purchase.innerText = userbought
    let img = document.createElement("img")
    img.src = imgsource
    let button = document.createElement("button")
    button.innerText = "Add to cart"
    button.setAttribute("class", "cart-btn")

    container.append(productcard)
    productcard.append(thumbnails)
    thumbnails.append(img)
    productcard.append(cardinfo)
    cardinfo.append(discriptionBox)
    cardinfo.append(ratings)
    cardinfo.append(priceBox)
    cardinfo.append(deliverydetails)
    cardinfo.append(purchase)
    cardinfo.append(button)
}

Createcard(
    "LG UltraGear 27-inch QHD Gaming Monitor | 180Hz | 1ms | HDR10",
    "₹18,999",
    "⭐⭐⭐⭐☆ 4.4",
    "FREE Delivery Tomorrow",
    "10K+ bought in past month",
    "40% OFF",
    "https://m.media-amazon.com/images/I/81wUbtf6rWL._SX679_.jpg"
)