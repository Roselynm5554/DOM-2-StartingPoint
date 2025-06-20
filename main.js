

// Please feel free to change the JS as you see fit! This is just a starting point.

// On button click, fill all cells
fillGridBtn.addEventListener("click", () => {
  const selectedColor = colorSelect.value;
  const allCells = document.getElementsByTagName("td");

  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].style.backgroundColor === "") { 
      allCells[i].style.backgroundColor = selectedColor; 
    }
  }

});

// Clear all cells / restore all cells to their original/initial color

const clearGridBtn = document.getElementById("clear-grid");
clearGridBtn.addEventListener("click", () => {
  const allCells = document.getElementsByTagName("td");

  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = ""; 
  }

});


// click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected
// Hovered-over cells from start to end change to the currently selected color
let isMouseDown = false;
const gridCells = document.querySelectorAll("td");

gridCells.forEach(cell => {
  cell.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    const selectedColor = colorSelect.value;
    event.target.style.backgroundColor = selectedColor; 
  });

  cell.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
      const selectedColor = colorSelect.value;
      event.target.style.backgroundColor = selectedColor; 
    }
  });

  cell.addEventListener("mouseup", () => {
    isMouseDown = false; 
  });
});

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});




// Get elements using getElementById
const table = document.getElementsByTagName("table")[0];
const colorSelect = document.getElementById("color-select");
const fillGridBtn = document.getElementById("fill-grid");


let currentColor = colorSelect.value;

//Asmaa: Select a color from a dropdown menu
colorSelect.addEventListener("change", function (event) {
  currentColor = event.target.value;
});

//Asmaa: Click a cell to change its color to the selected color
table.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = currentColor;
  }
});

//Asmaa: Fill  uncolored cells with the selected color
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



