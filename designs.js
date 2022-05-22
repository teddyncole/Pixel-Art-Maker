

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
    height = document.getElementById('inputHeight').value;
})

width.addEventListener('change', function() {
    width = document.getElementById('inputWidth').value;
})



// TRYING TO ADD A LISTENER TO THE SUBMIT BUTTON AND JUST HAVE THE HEIGHT AND WIDTH LISTENERS STORE THEIR VALUE TO GENERATE THE GRID WHEN THE SUBMIT BUTTON IS PRESSED (to fix: first row doesn't have correct number of cells, if column value is higher than row value, it won't work)
function makeGrid() {
    let rows = height - 1;
    let columns = width - 1;
    console.log(rows.value);
    console.log(columns.value);
    let table = document.getElementById('pixelTable');
    let cell = document.createElement('td');
    for (i = 0; i < rows; i++) {
        var newRow = document.createElement('tr');
        newRow.id = "row[i]";
        table.appendChild(newRow);
        newRow.appendChild(cell);
        for (j = 0; j < columns; j++) {
            var newCell = document.createElement('td');
            newCell.id = "cell[j]";
            newRow.appendChild(newCell);
        }
    }
}



// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
    makeGrid();
})
