var num1 = Math.floor(Math.random() * 6 + 1);
var imagePath1 = "images/dice" + num1 + ".png";
document.querySelector(".img1").setAttribute("src", imagePath1);

var num2 = Math.floor(Math.random() * 6 + 1);
var imagePath2 = "images/dice" + num2 + ".png";
document.querySelector(".img2").setAttribute("src", imagePath2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (num1 < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}