// create constants for each of the buttons
const resetButton = document.querySelector("#reset-button");
const blackButton = document.querySelector('#black-btn');
const selectButton = document.querySelector('#select-color-btn');
const colorPicker = document.querySelector('#color');
const rainbowButton = document.querySelector('#rainbow-button');


// create a selector for the div element to contain the grid squares
const gridContainer = document.querySelector('.grid-container');

// prompt the user to ask how many cells they would like and store it in a variable
let cells = prompt("How many squares would you like on each side?");


function getRandomColor() {
    return "hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' + 
            (85 + 10 * Math.random()) + '%)'
}


// start a for loop to create the number of cells they asked for 
for (let i = 0; i <= ((cells*cells) - 1); i++) {
    // create the divs for the grid cells
    const grid = document.createElement('div');
    grid.classList.add('grid-item');
    gridContainer.appendChild(grid);

    // set number of columns and rows dynamically
    document.getElementById('grid').style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${cells}, 1fr)`;    

    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'Black';
    });
    
    resetButton.addEventListener('click', () => {
        grid.style.backgroundColor = 'White';
    });
    
    blackButton.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'Black';
            console.log(selection);
        });      
    });


    /*selectButton.addEventListener('click', () => {
        colorPicker.addEventListener('input', () => {
            change = function() {let colorChoice = colorPicker.value; return grid.style.setBackgroundColor = colorChoice;}
            grid.onmmouseover = change();
        });
    });    */    

    rainbowButton.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            // constant to store the random color we will use later on
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            grid.style.backgroundColor = randomColor;
        });    
    });


}