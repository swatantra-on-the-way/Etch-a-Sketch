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
function createBoxes(){
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            let div = document.createElement("div");
            div.classList.add("individual");
            //div.style.width = "25px";
            //div.style.height = "25px";
            div.style.backgroundColor = selectColor();
            container.appendChild(div);
            
        }
    }
}

createBoxes();