const container = document.getElementById("container");

function makeRows(rows, cols)  {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i=0; i<(rows*cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "griditem";
    };
};
makeRows (16,16);

function gridHover() {
 this.style.backgroundColor = "yellow"; 
}

document.querySelectorAll(".griditem").forEach(item => item.addEventListener('mouseover',gridHover));

