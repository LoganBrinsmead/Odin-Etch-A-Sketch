// create constants for each of the buttons
const clearButton = document.querySelector("#clear-button");
const blackButton = document.querySelector('#black-btn');
const selectButton = document.querySelector('#select-color-btn');
const colorPicker = document.querySelector('#color');
const rainbowButton = document.querySelector('#rainbow-button');
const resetButton = document.querySelector('#reset-button');
const grayscaleButton = document.querySelector('#grayscale-button');

// create a selector for the div element to contain the grid squares
const gridContainer = document.querySelector('.grid-container');



function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
}


function makeGrid() {

    // make sure we don't have anything in the grid already
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // prompt the user to ask how many cells they would like and store it in a variable
    let cells = prompt("How many squares would you like on each side? Please keep it at 100 or less!");

    // make sure the user keeps the cells at 100 or under 100
    if (cells > 100) {
        while (true) {
            let cells = prompt("Oops! Your input was more than 100! Please keep your input to 100 or less!");
            if (cells > 100) {
                continue;
            } else if (cells <= 100) {
                break;
            }
        }
    }

    gridContainer.setAttribute('id', 'grid');

    // set number of columns and rows dynamically
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;    


    // start a for loop to create the number of cells they asked for 
    for (let i = 0; i <= ((cells*cells) - 1); i++) {
        // create the divs for the grid cells
        let grid = document.createElement('div');
        grid.classList.add('grid-item');
        gridContainer.appendChild(grid);

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'Black';
        });

        clearButton.addEventListener('click', () => {
            grid.style.backgroundColor = 'White';
        });

        blackButton.addEventListener('click', () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'Black';
            });      
        });

        // when the select color button is clicked, turn on the color picker and make the background its style
        selectButton.addEventListener('click', () => {
            colorPicker.removeAttribute('disabled');
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = colorPicker.value;
            });
        });

        grayscaleButton.addEventListener('click', () => {
            let gray = 249;
            grid.addEventListener('mouseover', () => {
                let rgbGray = "rgb(" + gray + ',' + gray + ',' + gray  + ")";
                gray = gray - 13;
                grid.style.backgroundColor = rgbGray;
            });
        });

        rainbowButton.addEventListener('click', () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = getRandomColor();
            });    
        });


    }

}


makeGrid();

resetButton.addEventListener('click', () => {
    makeGrid();
});
