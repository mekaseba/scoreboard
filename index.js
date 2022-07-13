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

function homePlusDos() {
    homeScore += 2
    homeScoreElement.textContent = homeScore.toString().padStart(2, '0')
}
homePlusTwo.addEventListener("click", homePlusDos) 

function homePlusTres() {
    homeScore += 3
    homeScoreElement.textContent = homeScore.toString().padStart(2, '0')
}
homePlusThree.addEventListener("click", homePlusTres)

function guestPlusUno() {
    guestScore += 1
    guestScoreElement.textContent = guestScore.toString().padStart(2, '0')
}
guestPlusOne.addEventListener("click", guestPlusUno) 

function guestPlusDos() {
    guestScore += 2
    guestScoreElement.textContent = guestScore.toString().padStart(2, '0')
}
guestPlusTwo.addEventListener("click", guestPlusDos) 

function guestPlusTres() {
    guestScore += 3
    guestScoreElement.textContent = guestScore.toString().padStart(2, '0')
}
guestPlusThree.addEventListener("click", guestPlusTres) 