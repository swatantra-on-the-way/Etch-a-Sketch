let a = document.querySelector("#grid-size");
a.addEventListener("click", function setGridSize(e){
    let a = prompt("Enter the Grid size you want (1 - 100): ");
    if (parseInt(a) >= 0 && parseInt(a) <= 100) {
        grid_size = parseInt(a);
        deleteGrid(grid_size);
        createGrid(grid_size);
    }
});

// function clearGrid() {
//     let all = document.querySelectorAll(".individual");
//     for (let i = 0; i < all.length; i++){
//         all[i].style.backgroundColor = "white";
//     }
// }

function deleteGrid(grid_size){
    let parent = document.querySelector(".container");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function selectColor() {
    let r = 0;
    let g = 0;
    let b = 0;

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
                div.style.backgroundColor = selectColor();
            })
            container.appendChild(div);
        }
    }
}
let grid_size = 16;
createGrid(grid_size);

