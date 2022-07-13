let homeScoreElement = document.getElementById("home-score-element")
let guestScoreElement = document.getElementById("guest-score-element")

let homePlusOne = document.getElementById("home-plus-one") 
let homePlusTwo = document.getElementById("home-plus-two")
let homePlusThree = document.getElementById("home-plus-three")

let guestPlusOne = document.getElementById("guest-plus-one")
let guestPlusTwo = document.getElementById("guest-plus-two")
let guestPlusThree = document.getElementById("guest-plus-three")

let homeScore = 00
let guestScore = 00

function homePlusUno() {
    homeScore += 1
    homeScoreElement.textContent = homeScore.toString().padStart(2,'0')
}
homePlusOne.addEventListener("click", homePlusUno)