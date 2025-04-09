function makeRows(rows, cols){
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let cell;
    for(let c = 0; c < (rows * cols); c++){
        cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(16,16);

const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-btn");
clearBtn.textContent = "Clear";

const resizeGridBtn = document.createElement("button");
resizeGridBtn.classList.add("resize-grid-btn");
resizeGridBtn.textContent = "Resize Grid";

const rainbowBtn = document.createElement("button");
rainbowBtn.classList.add("rainbow-btn");
rainbowBtn.textContent = "Rainbow";

const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(clearBtn);
buttonContainer.appendChild(resizeGridBtn);
buttonContainer.appendChild(rainbowBtn);

function changeBackground(e){
    e.target.style.backgroundColor = "black";
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(item => {
    item.addEventListener("mouseover", changeBackground);
})