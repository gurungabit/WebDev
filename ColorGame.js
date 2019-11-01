var colors = generateRandomColors(6);
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var rgb = document.getElementById("random");
var pickedColor = pickcolor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var mode = "hard";
rgb.textContent = pickedColor;

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickcolor();
    mode = "hard";
    rgb.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
easy.addEventListener("click", function () {
    mode = "easy";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickcolor();
    rgb.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

resetButton.addEventListener("click", function () {
    if (mode === "hard") {
        colors = generateRandomColors(6);
    }
    else {
        colors = generateRandomColors(3);
    }
    pickedColor = pickcolor();
    rgb.textContent = pickedColor;
    messageDisplay.textContent = ""
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?"
            messageDisplay.textContent = "Correct!"
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    })
}
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}
function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr[i] = randomcolor();
    }
    return arr;
}
function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomcolors = "rgb(" + r + "," + " " + g + "," + " " + b + ")";
    return randomcolors;
}