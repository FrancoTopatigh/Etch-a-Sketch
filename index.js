function makeRows(rows, cols){
    const container = document.getElementById("container");

    container.innerHTML = "";

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let cell;
    for(let c = 0; c < (rows * cols); c++){
        cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("mouseover", changeColor);
    });

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

//CHANGE BACKGROUND

// function changeBackground(e){
//     e.target.style.backgroundColor = "black";
// }

// const gridItems = document.querySelectorAll(".grid-item");

// gridItems.forEach(item => {
//     item.addEventListener("mouseover", changeBackground);
// });

//CLEAR GRID

function clearGrid(){
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => {
    cell.style.backgroundColor = "white";
    });
}

clearBtn.addEventListener("click", clearGrid);

//RESIZE GRID

function resizeGrid(){
    let userNumber = Number(prompt("Choose a number between 1 and 100"));

    if(userNumber >= 1  && userNumber <= 100){
        makeRows(userNumber, userNumber);
    } else{
        alert("Numero invalido");
    }
}

resizeGridBtn.addEventListener("click", resizeGrid);

function getRandomColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let rainbowMode = false;

function changeColor(e){
        if(rainbowMode){
            e.target.style.backgroundColor = getRandomColor();
        } else{
            e.target.style.backgroundColor = "black";
        }

}

function toggleRainbowMode() {
    rainbowMode = !rainbowMode;
    
    if (rainbowMode) {
        rainbowBtn.textContent = "Normal Mode";
    } else {
        rainbowBtn.textContent = "Rainbow Mode";
    }
}

rainbowBtn.addEventListener("click", toggleRainbowMode);