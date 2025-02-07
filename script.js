function createWebsite() {

    const container = document.querySelector(".container");
    const gridSize = 800;
    const slider = document.querySelector("#slider");
    let size = document.querySelector("#size");
    let currentSize = slider.value;
    let clear = document.querySelector("#clear");

    container.addEventListener("mouseover", () => {
        
    });

    clear.addEventListener("click", () => {
        clearGrid();
    });

    slider.addEventListener("input", () => {
        currentSize = slider.value;
        createGrid(currentSize);
        size.textContent = `Grid Size: ${currentSize} x ${currentSize}`;
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
            }
            container.appendChild(rowCell);
        }
    }

    function clearGrid() {
        createGrid(currentSize);
    }

    createGrid(currentSize);
}

createWebsite();