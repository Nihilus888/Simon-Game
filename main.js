//initialize computer and human sequence to compare later
let computer = [1, 2, 3, 4];
let player = [];
let life = 5;
let levels = 1;

//start game function
startButton = document.querySelector('#start');

//when button is clicked on, game starts and runs
startButton.addEventListener('click', (event) => {
    //play game function
    console.log('Hello there');
})

//Initializing buttons for play
yellowButton = document.querySelector('#yellow-button');
blueButton = document.querySelector('#blue-button');
greenButton = document.querySelector('#green-button');
redButton = document.querySelector('#red-button');
informationButton = document.querySelector('#information');

//Display Levels
displayLevel = document.querySelector('#display-level');
displayLevel.innerText = levels;

//Display Life
displayLife = document.querySelector('#life');
displayLife.innerHTML = 'Life: ' + life;

//flash colour functions to use when in need of flashing colours
function flashColour() {
    yellowButton.style.background = 'lightyellow';
    blueButton.style.background = 'lightblue';
    greenButton.style.background = 'lightgreen';
    redButton.style.background = 'pink';
}

//Sets the colours back to normal after flashing
function clearColour() {
    yellowButton.style.background = 'rgb(204, 204, 0)';
    blueButton.style.background = 'darkblue';
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
        yellowButton.style.background = 'lightyellow';
        setTimeout(function() {
            yellowButton.style.background = 'rgb(204, 204, 0)';
        }, 300);
        player.push(1);
    }) 
}

//Blue button onclick, record it and push it into the player array
function blue() {
    blueButton.addEventListener('click', (event) => {
        blueButton.style.background = 'lightblue';
        setTimeout(function() {
            blueButton.style.background = 'darkblue';
        }, 300);
        player.push(2);
    }) 
}

//Green button onclick, record it and push it into the player array
function green() {
    greenButton.addEventListener('click', (event) => {
        greenButton.style.background = 'lightgreen';
        setTimeout(function() {
            greenButton.style.background = 'rgb(0, 128, 0)';
        }, 300);   
        player.push(3);
    }) 
}


//Red button onclick, record it and push it into the player array
function red() {
    redButton.addEventListener('click', (event) => {
        redButton.style.background = 'pink';
        setTimeout(function() {
            redButton.style.background = 'rgb(227, 0, 34)';
        }, 300);  
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

//Check function to see if both arrays are the same, increment the level if they are the same and remain on the same level if they are not
function check() {
    if (JSON.stringify(player) === JSON.stringify(computer)) {
        levels++;
        random();
    } 

    if (JSON.stringify(player) !== JSON.stringify(computer)) {
        levels = levels;
        random();
    } else {
        return;
    }
}

//Reset game function to set everything back to its initial state
function reset() {
    computer = [];
    player = [];
    life = 5;
    levels = 0;
    clearColour();
    //add any other initializing variables later
}

//Computer turn function
function computerTurn() {
    //disable clicking when this function is invoked
    runLoop = async() => {
        for (const item of computer) {
            await new Promise (resolve => setTimeout(resolve, 2000))
            console.log(item);
            if (item === 1) {
                yellowButton.style.background = 'lightyellow';
                setTimeout(function() {
                yellowButton.style.background = 'rgb(204, 204, 0)';}
                , 1000);  
                console.log('yellow');
            }
            
            if (item === 2) {
                blueButton.style.background = 'lightblue';
                setTimeout(function() {
                    blueButton.style.background = 'darkblue';
                }, 1000);
                console.log('blue');
            }
    
            if (item === 3) {
                greenButton.style.background = 'lightgreen';
                setTimeout(function() {
                    greenButton.style.background = 'rgb(0, 128, 0)';
                }, 1000);      
                console.log('green');
            }
    
            if (item === 4) {
                redButton.style.background = 'pink';
                setTimeout(function() {redButton.style.background = 'rgb(227, 0, 34)';
                }, 1000);
                console.log('red');
            }
        }
    }

    runLoop()
}


//Human turn function with a timer function
function playerTurn() {
    if(player.length !== computer.length) {
        yellow();
        green();
        blue();
        red();
    }
}

//Play function


