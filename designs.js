

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

width.addEventListener('change', function() {
    var columns = document.getElementById('inputWidth').value + 1;
    const cell = document.createElement('td');
    let allRows = document.getElementsByClassName("row");
    let number = 0;
    for (j = columns; j > 0; j--) {
        for (i = 0; i < allRows.length; i++) {
            currentRow = allRows[number];
            currentRow.appendChild(cell);
            number++;
        }
    }
})



// TRYING INSTEAD TO ADD A LISTENER TO THE SUBMIT BUTTON AND JUST HAVE THE HEIGHT AND WIDTH LISTENERS STORE THEIR VALUE TO GENERATE THE GRID WHEN THE SUBMIT BUTTON IS PRESSED
function makeGrid() {
    let rows = height.value;
    let columns = width.value;
    let table = document.getElementById('pixelTable');
    for (i = 0; i < rows; i++) {
        var newRow = document.createElement('tr');
        newRow.id = "row[i]";
        table.appendChild(newRow);
    }
    
}

// makeGrid();













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
