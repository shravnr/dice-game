let randomNumber1 =  Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
document.querySelector(".img1").setAttribute("src", randomImageSource);

let randomNumber2 =  Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
let randomDiceImage1 = "dice" + randomNumber2 + ".png";
let randomImageSource1 = "images/" + randomDiceImage1;
document.querySelector(".img2").setAttribute("src", randomImageSource1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 wins!";
} 
if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").textContent = "tied!";
}