

// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');


//adding function to change cell color using event listener for color selection
colorChange = colorPicker.addEventListener('change', function() {
    var newColor = colorPicker.value;
    console.log(newColor);
    return newColor;
});


//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    grid.style.height = height;
})
width.addEventListener('change', function() {
    grid.style.width = width;
})



// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
    makeGrid();
})


function makeGrid() {
    var grid = document.getElementById('pixelCanvas');
    for (var m = grid.style.height; m > 0; m--) {
        var newRow = grid.insertRow();
        for (var i = grid.style.width; i > 0; i--) {
            cell = newRow.insertCell();
            }
        }
    cell.style.color = colorChange();
    }
