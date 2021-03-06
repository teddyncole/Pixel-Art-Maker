// Select color input
// Select size input

//defining variables from DOM
const submitButton = document.getElementById('submit');
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');
 

//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    height = document.getElementById('inputHeight');
    console.log(height.value);
})

width.addEventListener('change', function() {
    width = document.getElementById('inputWidth');
    console.log(width.value);
})


//adding event listener for color selection
var colorPick = colorPicker.addEventListener('change', function() {
    var newColor = colorPicker.value;
    console.log(newColor);
    colorPicker.value = newColor;
    console.log(colorPicker.value);
});


//adding function to change the cell color
function colorChange(evt) {
    let color = colorPicker.value;
    evt.target.style.backgroundColor = color;
    evt.target.className = 'hasColor';
}


//adding makeGrid function to add given number of rows w/ given number of cells inside
function makeGrid(cells, rows) {
    //variables for pixel table and new row
    let table = document.getElementById('pixelTable');
    var row = document.createElement('tr');
    row.className = 'tableRow'
    //adding first row to table; first row only includes cells if this is added
    table.appendChild(row);
    //create new cell and clone it given number of times in row
    for (let i = 0; i < cells; i++) {
        var cell = document.createElement('td');
        // cell.id = "cell[i]";
        cell.class = "tableCells";
        row.appendChild(cell.cloneNode(true));
    }
    //clone created row ^ given number of times and add them to table
    for (let j = 0; j < (rows - 1); j++) {
        table.appendChild(row.cloneNode(true));
        //add event listener to table to change individual cell colors on click
        table.addEventListener('click', colorChange);
    }
}

//function to remove colors from grid, creates new grid 
function clearGrid() {
    const artTable = document.getElementById('pixelTable');
    artTable.replaceChildren();
    makeGrid(width.value, height.value);
}


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function(event) {
    //stops submit button from refreshing page
    event.preventDefault();
    let pixelTable = document.getElementById('pixelTable');
    var cells = pixelTable.querySelectorAll('td');
    //handles resubmit and size changes
    clearGrid();
});
