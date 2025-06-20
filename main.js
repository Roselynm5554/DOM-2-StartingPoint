// Please feel free to change the JS as you see fit! This is just a starting point.

// Select the fill-grid button and color dropdown
const fillGridBtn = document.getElementById("fill-grid");

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
