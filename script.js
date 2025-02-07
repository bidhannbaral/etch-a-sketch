function createWebsite() {

    const container = document.querySelector(".container");
    const gridSize = 850;
    const slider = document.querySelector("#slider");
    let size = document.querySelector("#size");
    let currentSize = slider.value;
    let clear = document.querySelector("#clear");
    let eraser = document.querySelector("#eraser");
    let isEraser = false;

    clear.addEventListener("click", () => {
        clearGrid();
    });

    slider.addEventListener("input", () => {
        currentSize = slider.value;
        createGrid(currentSize);
        size.textContent = `Grid Size: ${currentSize} x ${currentSize}`;
    });

    eraser.addEventListener("click", () => {
        isEraser = !isEraser;
        if (isEraser) {
            eraser.textContent = "Color";
        } else {
            eraser.textContent = "Eraser";
        }
    });

    function createGrid(size) {
        container.innerHTML = "";
        const cellSize = `${gridSize/size}px`

        for (let i = 0; i < size; i++) {
            const rowCell = document.createElement("div");
            rowCell.classList.add("grid");
            rowCell.style.height = cellSize;
            rowCell.style.width = cellSize;
            for (let j = 0; j < size; j++) {
                const colCell = document.createElement("div");
                colCell.classList.add("grid");
                colCell.style.height = cellSize;
                colCell.style.width = cellSize;
                rowCell.appendChild(colCell);

                colCell.addEventListener("mouseenter", () => {
                    if (isEraser) {
                        colCell.style.backgroundColor = "white";
                    } else {
                        colCell.style.backgroundColor = randomColor();
                    }
                });
            }

            container.appendChild(rowCell);
        }
    }

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }
    
    function clearGrid() {
        createGrid(currentSize);
    }

    createGrid(currentSize);
}
createWebsite();