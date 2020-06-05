// VARIABLES

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


//EASY BUTTON

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares = 3;
    //generate 3 new colors
    colors = generateRandomColors(numSquares);
    //pick the winner color
    pickedColor = pickColor();
    //display the winner color
    colorDisplay.textContent = pickedColor;
    //add the 3 new colors to the first 3 squares
    //colors has only 3 items
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
});


//HARD BUTTON

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares = 6;
    //generate 6 new colors
    colors = generateRandomColors(numSquares);
    //pick the winner color
    pickedColor = pickColor();
    //display the winner color
    colorDisplay.textContent = pickedColor;
    //add the 6 new colors to the 6 squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
});


//RESET BUTTON

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

//EASY-HARD BUTTON TOGETHER

//using "mode" class in html for both buttons


for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
};

//FUNCTIONS

function changeColors (color) {         //change all colors to the picked one
    //loop through all squares
    for(var i=0; i<squares.length; i++)
    //change each color to match
    squares[i].style.backgroundColor = color;
    }

function pickColor(){                   //pick a color from the 6
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){     //push random colors num times into an array
    //make an array
    var arr = [];
    //repeat num times
    for (var i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};

function randomColor(){                 //generate a random color
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

