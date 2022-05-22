

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

function getValue(element) {
    console.log(element.value);
    return element.value;
}

//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    height = document.getElementById('inputHeight');
    console.log(height.value);
})

width.addEventListener('change', function() {
    width = document.getElementById('inputWidth');
    console.log(width.value);
})

//add a class for a row with the right amount of cells and just append the row to the table?
class CalculatedRow{
    constructor(cells, rows) {
        this.cells = cells;
        this.rows = rows;
        }
    
    createGrid(cells, rows) {
        let table = document.getElementById('pixelTable');
        var row = document.createElement('tr');
        table.appendChild(row);
        row.id = "row1"
        for (let i = 0; i < this.cells; i++) {
            var cell = document.createElement('td');
            row.appendChild(cell.cloneNode(true));
        }
        for (let j = 0; j < (this.rows - 1); j++) {
            table.appendChild(row.cloneNode(true));
        }
    }
}


const firstRow = new CalculatedRow(6,1);



// TRYING TO ADD A LISTENER TO THE SUBMIT BUTTON AND JUST HAVE THE HEIGHT AND WIDTH LISTENERS STORE THEIR VALUE TO GENERATE THE GRID WHEN THE SUBMIT BUTTON IS PRESSED (to fix: first row doesn't have correct number of cells, if column value is higher than row value, it won't work)
function makeGrid() {
    let rows = height - 1;
    let columns = width;
    console.log(rows.value);
    console.log(columns.value);
    let table = document.getElementById('pixelTable');
    for (i = 0; i < rows; i++) {
        var newRow = document.createElement('tr');
        newRow.id = "row[i]";
        table.appendChild(newRow);
        for (j = 0; j < columns; j++) {
            var newCell = document.createElement('td');
            newRow.appendChild(newCell.cloneNode(true));
        }
    }
}


function createRow(cells) {
    let table = document.getElementById('pixelTable');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    table.appendChild(row);
    counter = cells;
    if (counter > 0) {
        row.appendChild(cell);
        counter--;
        console.log(counter);
    } else {
        return
    }
}



// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
    firstRow.createGrid();
    
})
