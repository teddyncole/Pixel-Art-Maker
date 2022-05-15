

// Select color input
// Select size input

//defining variables from DOM
var submitButton = document.getElementById('submit');
var grid = document.getElementById('pixelCanvas');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
// var colorPicker = document.getElementById('colorPicker');
// let color = colorPicker.value;

//Adding event listener for color selection
document.getElementById('colorPicker').addEventListener('change', function() {
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
