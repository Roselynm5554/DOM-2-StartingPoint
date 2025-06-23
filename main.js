// Get elements using getElementById
const table = document.getElementsByTagName("table")[0];
const colorSelect = document.getElementById("color-select");
const fillGridBtn = document.getElementById("fill-grid");
const clearGridBtn = document.getElementById("clear-grid");
const addRowBtn = document.getElementById("add-row");
const addColBtn = document.getElementById("add-col");
const removeRowBtn = document.getElementById("remove-row");
const removeColBtn = document.getElementById("remove-col");

let currentColor = colorSelect.value;

// Add a row to the grid
addRowBtn.addEventListener("click", () => {
  const newRow = document.createElement("tr");
  const columnCount = table.rows[0] ? table.rows[0].cells.length : 1;
  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement("td");
    newRow.appendChild(newCell);
  }
  table.appendChild(newRow);
});

// Add a column to the grid
addColBtn.addEventListener("click", () => {
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement("td");
    rows[i].appendChild(newCell);
  }
});

// Remove the last row from the grid
removeRowBtn.addEventListener("click", () => {
  const rowCount = table.rows.length;
  if (rowCount > 0) {
    table.deleteRow(rowCount - 1);
  }
});

// Remove the last column from the grid
removeColBtn.addEventListener("click", () => {
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    if (cells.length > 0) {
      rows[i].deleteCell(cells.length - 1);
    }
  }
});

// Select a color from a dropdown menu
colorSelect.addEventListener("change", function (event) {
  currentColor = event.target.value;
});

// Click a cell to change its color to the selected color
table.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = currentColor;
  }
});

// Fill uncolored cells with the selected color
fillGridBtn.addEventListener("click", function () {
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      if (!cells[j].style.backgroundColor) {
        cells[j].style.backgroundColor = currentColor;
      }
    }
  }
});

// Clear all cells / restore all cells to their original/initial color
clearGridBtn.addEventListener("click", () => {
  const allCells = document.getElementsByTagName("td");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "";
  }
});

// Click and hold (mouseover) from a single cell to another to color all hovered cells
let isMouseDown = false;

table.addEventListener("mousedown", (event) => {
  if (event.target.tagName === "TD") {
    isMouseDown = true;
    event.target.style.backgroundColor = currentColor;
  }
});

table.addEventListener("mouseover", (event) => {
  if (isMouseDown && event.target.tagName === "TD") {
    event.target.style.backgroundColor = currentColor;
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});
