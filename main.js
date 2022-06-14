//Create variables for storage later (like computer sequence and human sequence). No const as these variables need to be amended
let computerOrder = [];
let player = [];
let flash;
let turn;
let good;
let computerTurn;
let interval;
let noise = true;
let on = false;
let win;
let gameover;
let levels = 30;
let life = 5;

//Select all the buttons from the html file for us to use later and put it as constants
const startButton = document.querySelector("#start")
const yellowButton = document.querySelector('#yellow-button');
const blueButton = document.querySelector('#blue-button');
const greenButton = document.querySelector('#green-button');
const redButton = document.querySelector('#red-button');

//Attach event listener to the start button
startButton.addEventListener('click', (event) => {
    if (win) {
        play();
    }
});

function play() {
    win = false;
    computerOrder = [];
    player = [];
    flash = 0;
    interval = 0;
    turn = 1;
    good = true;
    if (life !== 0) {
        for (let i = 0; i < levels; i++) {
            computerOrder.push(Math.floor(Math.random() * 4) + 1);
        }
    }
    computerTurn = true;
    interval = setInterval(Turn, 1000);

    if (life === 0) {
        gameOver();
    }
}

function Turn() {
    on = false;
    
    if(flash == turn) {
        clearInterval(interval);
        computerTurn = false;
        clearColour();
        on = true;
    }

    if (computerTurn) {
        clearColour();
        setTimeout(() => {
            if (computerOrder[flash] == 1) {
                yellow();
            }

            if (computerOrder[flash] == 2) {
                blue();
            }

            if (computerOrder[flash]== 3) {
                green();
            }

            if (computerOrder[flash]== 4) {
                red();
            }
            flash++;
        }, 300);
    }
}

//Functions to use when the button is clicked on
function yellow() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play;
    }
    noise = true;
    yellowButton.getElementsByClassName.backgroundColor = "lightyellow";
}

function blue() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play;
    }
    noise = true;
    blueButton.getElementsByClassName.backgroundColor = "darkblue";
}

function green() {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play;
    }
    noise = true;
    greenButton.getElementsByClassName.backgroundColor = "lightgreen";
}

function red() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    redButton.getElementsByClassName.backgroundColor = "lightred";
}