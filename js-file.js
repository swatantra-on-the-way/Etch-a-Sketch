let size_btn = document.querySelector("#grid-size");
size_btn.addEventListener("click", function setGridSize(e){
    let a = prompt("Enter the Grid size you want (1 - 100): ");
    if (parseInt(a) >= 0 && parseInt(a) <= 100) {
        grid_size = parseInt(a);
        deleteGrid();
        createGrid(grid_size);
    }
});

let reset_btn = document.querySelector("#reset");
reset_btn.addEventListener("click", () => {
    clearGrid();
});

function clearGrid() {
    let all = document.querySelectorAll(".individual");
    for (let i = 0; i < all.length; i++){
        all[i].style.backgroundColor = "white";
    }
}

function deleteGrid(){
    let parent = container;
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function selectColor(div) {
    let r = 0;
    let g = 0;
    let b = 0;

    if (!(div.style.opacity)) {
        div.style.opacity = "0";
    }

    if (Number(div.style.opacity) < 1) {
        div.style.opacity = Number(div.style.opacity) + 0.1 + "";
    }

    
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    
    return "rgb("+r+","+g+","+b+")";
}

let container = document.querySelector(".container");
function createGrid(grid_size){
    for (let i = 0; i < grid_size; i++){
        for (let j = 0; j < grid_size; j++){
            let div = document.createElement("div");
            div.classList.add("individual");
            div.style.setProperty("--columns", grid_size);
            div.style.setProperty("--rows", grid_size);
            
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = selectColor(div);
            })
            container.appendChild(div);
        }
    }
}
let grid_size = 16;
createGrid(grid_size);

