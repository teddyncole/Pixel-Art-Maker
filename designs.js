

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
    // var rows = document.getElementById('inputHeight').value + 1;
    // const row = document.createElement("tr");
    // const cell = document.createElement('td');
    // row.className = "row"
    // let rowNumber = document.getElementsByClassName("row");
    // for (i = rows; i > 0; i--) {
    //     document.getElementById('pixelTable').appendChild(row);
    //     row.appendChild(cell);
    // }
    height = document.getElementById('inputHeight').value;
})

width.addEventListener('change', function() {
    // var columns = document.getElementById('inputWidth').value + 1;
    // const cell = document.createElement('td');
    // let allRows = document.getElementsByClassName("row");
    // let number = 0;
    // for (j = columns; j > 0; j--) {
    //     for (i = 0; i < allRows.length; i++) {
    //         currentRow = allRows[number];
    //         currentRow.appendChild(cell);
    //         number++;
    //     }
    // }
    width = document.getElementById('inputWidth').value;
})



// TRYING INSTEAD TO ADD A LISTENER TO THE SUBMIT BUTTON AND JUST HAVE THE HEIGHT AND WIDTH LISTENERS STORE THEIR VALUE TO GENERATE THE GRID WHEN THE SUBMIT BUTTON IS PRESSED
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
    }
    for (j = 0; j < columns; j++) {
        var newCell = document.createElement('td');
        newCell.id = "cell[j]";
        var tableRows = table.querySelectorAll('tr');
        var thisRow = tableRows[j];
        thisRow.appendChild(newCell);
    }
}



// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
    makeGrid();
})


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
