const container = document.getElementById("container");
const clearButton = document.querySelector(".clearButton");
const newgridButton = document.querySelector(".newgridButton");


function makeRows(gridNumber)  {
    let gridArea = gridNumber*gridNumber;
    for (let i=0; i<gridArea; i++) {
        let cell = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(cell).className = "griditem";
    };
function gridHover() {
    this.style.backgroundColor = "rgb(226, 207, 31)"; 
}
document.querySelectorAll(".griditem").forEach(item => item.addEventListener('mouseover',gridHover));
};
makeRows (16);



function clear() {
    document.querySelectorAll(".griditem").forEach(items => items.style.backgroundColor = "rgb(9, 9, 172)");
}
clearButton.addEventListener("click", clear);

function newGrid() {
let newGridSize = prompt ("Please enter new grid size")
if (newGridSize < 1 || newGridSize>100 || Number.isNaN(newGridSize)) {
    alert("Enter a number between 1 and 100");
    newGrid();
    }
    else {
        clear ();
        document.querySelectorAll(".griditem").forEach(item => item.remove());
        makeRows(newGridSize)
    }
}
newgridButton.addEventListener("click", newGrid);

