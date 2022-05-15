

// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');



//Adding event listener for color selection
// colorPicker.addEventListener('change', function() {
//     var color = this.value;
//     console.log(color);
// });

colorChange = function(color) {
    // colorPicker.addEventListener('change', function() {
    var newColor = color;
    console.log(newColor);
    return newColor;
}

colorPicker.addEventListener('change', colorChange);

//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    grid.style.height = height;
})
width.addEventListener('change', function() {
    grid.style.width = width;
})

// When size is submitted by the user, call makeGrid()


function makeGrid() {
    //declaring variables for the grid and cells
    var grid = document.getElementById('pixelCanvas');
    // var square = document.createElement('div');
    // //changing cell color based on chosen one
    // square.style.color = colorChange();
    // //making cell border
    // square.style.border = (solid, black);

    // looping to create grid rows/columns and cells
    for (var m = grid.style.height; m > 0; m--) {
        var newRow = grid.insertRow();
        for (var i = grid.style.width; i > 0; i--) {
            square = newRow.insertCell();
        }
    }
    for (var n = grid.style.width; n > 0; n--) {
        
    }
}
