

// Please feel free to change the JS as you see fit! This is just a starting point.

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



