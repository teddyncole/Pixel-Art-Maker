

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

// //function for adding cells based on number of wanted rows and columns
// function addCells(rows, columns) {
//     //variables for storing DOMD elements: table row and table cells
//     var newRow = document.createElement("tr");
//     // var newColumn = document.createElement("td");
//     //for loop adds rows for each number of rows given as argument
//     for (i = 0; i<rows; i++) {
//         document.getElementById('pixelTable').appendChild(newRow);
//         //for loop adds columns (cells in rows) for number of columns given as argument
//         // for(j = 0; j<columns; j++){
//         //     newRow.appendChild(newColumn);
//         // }
//     }
// }

//Adding event listener to change grid to chosen height and width
height.addEventListener('change', function() {
    var rows = document.getElementById('inputHeight').value;
    const row = document.createElement("tr");
    for (i = rows; i > 0; i--) {
        document.getElementById('pixelCanvas').appendChild(row);
    }
})

width.addEventListener('change', function() {
    grid.style.width = width;
})


// When size is submitted by the user, call makeGrid()
// submitButton.addEventListener('click', function() {
//     makeGrid();
// })


// function makeGrid() {
//     var grid = document.getElementById('pixelCanvas');
//     for (var m = grid.style.height; m > 0; m--) {
//         var newRow = grid.insertRow();
//         for (var i = grid.style.width; i > 0; i--) {
//             cell = newRow.insertCell();
//             }
//         }
//     cell.style.color = colorChange();
//     }
