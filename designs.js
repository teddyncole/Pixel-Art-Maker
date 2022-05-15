

// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
const grid = document.getElementById('pixelCanvas');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');

//Adding event listener for color selection
colorPicker.addEventListener('change', function() {
    var color = this.value;
    console.log(color);
});

//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    grid.style.height = height;
})
width.addEventListener('change', function() {
    grid.style.width = width;
})





// When size is submitted by the user, call makeGrid()


function makeGrid() {

// Your code goes here!

}
