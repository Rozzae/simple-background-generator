var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssText = document.getElementById("cssText");
var body = document.getElementById("background");
var generate = document.getElementById("generate");

// Set defaults
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
cssText.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// Function to set background color
function setBgColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    printColorText();
}

function printColorText(){
    cssText.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

// Function to auto generate colors
function autoGenerate(){
    color1.value = "#" + (Math.floor(Math.random() * (1000000 - 111111) ) + 111111);
    color2.value = "#" + (Math.floor(Math.random() * (1000000 - 111111) ) + 111111);
    setBgColor();
}

// Add Event listener
generate.addEventListener("click", autoGenerate);
color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);