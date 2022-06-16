//initialize computer and human sequence to compare later
let computer = [];
let player = [];
let life = 5;
let levels = 0;

//start game function
startButton = document.querySelector('#start');

//when button is clicked on, game starts and runs
startButton.addEventListener('click', (event) => {
    //start game function
    console.log('Hello there');
})

//Initializing buttons for play
yellowButton = document.querySelector('#yellow-button');
blueButton = document.querySelector('#blue-button');
greenButton = document.querySelector('#green-button');
redButton = document.querySelector('#red-button');

//Display Levels
displayLevel = document.querySelector('#display-level');
displayLevel.innerText = levels;

//Display Life
displayLife = document.querySelector('#life');
displayLife.innerHTML = 'Life: ' + life;

//flash colour functions to use when in need of flashing colours
function flashColour() {
    yellowButton.style.background = 'lightyellow';
    blueButton.style.background = 'darkblue';
    greenButton.style.background = 'lightgreen';
    redButton.style.background = 'pink';
}

//Sets the colours back to normal after flashing
function clearColour() {
    yellowButton.style.background = 'rgb(204, 204, 0)';
    blueButton.style.background = 'skyblue';
    greenButton.style.background = 'rgb(0, 128, 0)';
    redButton.style.background = 'rgb(227, 0, 34)';
}

//Randomizes array for up to 30 levels
function random() {
    const array = ['yellowButton', 'blueButton', 'greenButton', 'redButton'];
    for(let i = 0; i < levels; i++) {
        computer.push(Math.floor(Math.random() * 4) + 1);
    }
}

//Yellow button onclick, record it and push it into the player array
function yellow() {
    yellowButton.addEventListener('click', (event) => {
        player.push(1);
    }) 
}

//Blue button onclick, record it and push it into the player array
function blue() {
    blueButton.addEventListener('click', (event) => {
        player.push(2);
    }) 
}

//Green button onclick, record it and push it into the player array
function green() {
    greenButton.addEventListener('click', (event) => {
        player.push(3);
    }) 
}

//Red button onclick, record it and push it into the player array
function red() {
    redButton.addEventListener('click', (event) => {
        player.push(4);
    })
}

//Win function to alert the user that they have already won
function win() {
    const winning = document.querySelector('#win');
    console.log(winning);
    if (levels === 30) {
        winning.innerText = "Congratulations you have won the game!";
        //insert reset function here
    } else {
        winning.innerText = "Game is in session";
    }
}

//Gameover function to end the game when the game is over
function gameOver() {
    if (life === 0) {
        alert("Gameover!")
        //insert reset function
    } else {
        return
    }
}

//Check function to see if both arrays are the same

//Reset game function to set everything back to its initial state

//Computer turn function

//Human turn function

//Play function


