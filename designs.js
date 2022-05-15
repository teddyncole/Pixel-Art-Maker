// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
const grid = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;

function grabColor() {
    color = colorPicker.value;
    console.log(color);
}

colorPicker.addEventListener('change', grabColor) {
    console.log(color);
});

// When size is submitted by the user, call makeGrid()


function makeGrid() {

// Your code goes here!

}
