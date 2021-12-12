// create a selector for the div element to contain the grid squares
const gridDiv = document.querySelector('.grid-container');

function createEtchASketch() {
    // prompt the user to ask how many cells they would like and store it in a variable
    let cells = prompt("How many cells would you like for your Etch-A-Sketch?");

    // start a for loop to create the number of cells they asked for 
    for (let i = 0; i < cells; i++) {
        // create the divs for the grid cells
        const grid = document.createElement('div');
        grid.classList.add('grid-item');
        gridDiv.appendChild(grid);
    
        // add event listener to change the color of a cell to black when hovered over
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'Black';
        });
    
        // set number of columns and rows dynamically
        document.getElementById('grid').style.gridTemplateRows = `repeat(16, 1fr)`;
        document.getElementById('grid').style.gridTemplateColumns = `repeat(16, 1fr)`;
    }
}

createEtchASketch();