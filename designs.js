// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');


//adding event listener for color selection
colorChange = colorPicker.addEventListener('change', function() {
    var newColor = colorPicker.value;
    console.log(newColor);
    return newColor;
});


//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    height = document.getElementById('inputHeight');
    console.log(height.value);
})

width.addEventListener('change', function() {
    width = document.getElementById('inputWidth');
    console.log(width.value);
})

//adding makeGrid function to add given number of rows w/ given number of cells inside
function makeGrid(cells, rows) {
    //variables for pixel table and new row
    let table = document.getElementById('pixelTable');
    var row = document.createElement('tr');
    //adding first row to table
    table.appendChild(row);
    row.id = "row1"
    //create new cell and clone it given number of times in row
    for (let i = 0; i < cells; i++) {
        var cell = document.createElement('td');
        row.appendChild(cell.cloneNode(true));
    }
    //clone created row ^ given number of times and add them to table
    for (let j = 0; j < (rows - 1); j++) {
        table.appendChild(row.cloneNode(true));
    }
}


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
    makeGrid(width.value, height.value);
    
})
