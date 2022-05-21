

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
    var rows = document.getElementById('inputHeight').value + 1;
    const row = document.createElement("tr");
    const cell = document.createElement('td');
    row.className = "row"
    let rowNumber = document.getElementsByClassName("row");
    for (i = rows; i > 0; i--) {
        document.getElementById('pixelTable').appendChild(row);
        row.appendChild(cell);
    }
})

// let columnCount = 1;
// //add event listener to change grid width
// width.addEventListener('change', function() {
//     columnCount += 1;
//     let toAdd = columnCount;
//     let rowCount = (document.querySelectorAll('tr').length) + 1;
//     let allRows = document.getElementsByClassName("row");
//     const cell = document.createElement('td');
//     let counter = 0;
//     let currentRow = document.querySelectorAll('tr')[counter];
//     let nextRow = currentRow.nextElementSibling;
//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {
//             const element = object[key];
            
//         }
//     }
// })


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
