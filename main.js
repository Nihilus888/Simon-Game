//initialize computer and human sequence to compare later
let computer = [];
let player = [];
let life = 5;
let levels = 0;

//start game function
startButton = document.querySelector('#start');
motivationButton = document.querySelector('#motivation')
correctButton = document.querySelector('#correct');
stopButton = document.querySelector('#stop');
pauseButton = document.querySelector('#pause');

//Username log in function
/*
let name = window.prompt("Enter your name: ");
alert("Your name is " + name);
displayName = document.querySelector('#name');
displayName.innerText = "Name: " + name;
*/

informationButton = document.querySelector('#information');
informationButton.innerText = 'Status: Game not started yet'

//when button is clicked on, game starts and runs
startButton.addEventListener('click', (event) => {
    levels++;
    if (levels === 0) {
        displayLevel.innerText = "-"
    } else {
        displayLevel.innerText = levels;
        informationButton.innerText = 'Status: Game has started';
    }
    playGame();
})

//when stop button is clicked on, resets game
stopButton.addEventListener('click', (event) => {
    displayLevel.innerText = levels;
    informationButton.innerText = 'Status: Game not started yet'
    resetGame();
});

//When pause button is clicked on, pauses game


//Initializing buttons for play
yellowButton = document.querySelector('#yellow-button');
blueButton = document.querySelector('#blue-button');
greenButton = document.querySelector('#green-button');
redButton = document.querySelector('#red-button');
informationButton = document.querySelector('#information');

//Display Levels
displayLevel = document.querySelector('#display-level');
if (levels === 0) {
    displayLevel.innerText = "-"
} else {
    displayLevel.innerText = levels;
}

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
    console.log(yellowButton.style.background);
}

console.log(clearColour());

//Randomizes array for up to 30 levels
function random() {
    const array = ['yellowButton', 'blueButton', 'greenButton', 'redButton'];
    for (let i = 0; i < levels; i++) {
        computer.push(Math.floor(Math.random() * 4) + 1);
        console.log(computer);
    }
}

//Win function to alert the user that they have already won
function win() {
    const winning = document.querySelector('#win');
    if (levels === 30) {
        alert("Congratulations you have won the game!");
        resetGame();
    } else {
        return
    }
}

//Gameover function to end the game when the game is over
function gameOver() {
    if (life === 0) {
        alert("Game over!")
        resetGame();
    } else {
        return;
    }
}


//Reset game function to set everything back to its initial state
//check with eugene to set how to reset the entire functions
function resetGame() {
    computer.length = 0;
    player.length = 0;
    life = 5;
    levels = 0;
    yellowButton.removeEventListener('click', yellowButtonClick);
    blueButton.removeEventListener('click', blueButtonClick);
    greenButton.removeEventListener('click', greenButtonClick);
    redButton.removeEventListener('click', redButtonClick);
    informationButton.innerText = 'Status: Game not started yet'
    displayLife.innerHTML = 'Life: ' + life;
    displayLevel.innerHTML = levels;
    if (levels === 0) {
        displayLevel.innerText = "-"
    } else {
        displayLevel.innerText = levels;
    }
}

//Computer turn function
function computerTurn() {
    //disable clicking when this function is invoked
    runLoop = async () => {
        for (const item of computer) {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(item);
            if (item === 1) {
                yellowButton.style.background = 'lightyellow';
                setTimeout(function () {
                    yellowButton.style.background = 'rgb(204, 204, 0)';
                }
                    , 1000);
                console.log('yellow');
            }

            if (item === 2) {
                blueButton.style.background = 'lightblue';
                setTimeout(function () {
                    blueButton.style.background = 'darkblue';
                }, 1000);
                console.log('blue');
            }

            if (item === 3) {
                greenButton.style.background = 'lightgreen';
                setTimeout(function () {
                    greenButton.style.background = 'rgb(0, 128, 0)';
                }, 1000);
                console.log('green');
            }

            if (item === 4) {
                redButton.style.background = 'pink';
                setTimeout(function () {
                    redButton.style.background = 'rgb(227, 0, 34)';
                }, 1000);
                console.log('red');
            }
        }
    }

    runLoop()
}

//Player Round

function checkPlayerRound() {
    console.log('has player finish turn:', player.length === computer.length)
    const hasGameEnd = player.length === computer.length;
    if (hasGameEnd) {
        yellowButton.removeEventListener('click', yellowButtonClick);
        blueButton.removeEventListener('click', blueButtonClick);
        greenButton.removeEventListener('click', greenButtonClick);
        redButton.removeEventListener('click', redButtonClick);

        if (JSON.stringify(player) === JSON.stringify(computer)) {
            player = [];
            life++;
            displayLife.innerHTML = 'Life: ' + life;
            nextRound();
            win();
        }

        if (JSON.stringify(player) !== JSON.stringify(computer)) {
            player = [];
            life--;
            displayLife.innerHTML = 'Life: ' + life;
            computerTurn();
            playerTurn();
            gameOver();
        }
    }
}

function yellowButtonClick() {
    yellowButton.style.background = 'lightyellow';
    setTimeout(function () {
        yellowButton.style.background = 'rgb(204, 204, 0)';
    }, 300);
    player.push(1);

    checkPlayerRound()

    console.log(player);
}

function blueButtonClick() {
    blueButton.style.background = 'lightblue';
    setTimeout(function () {
        blueButton.style.background = 'darkblue';
    }, 300);
    player.push(2);

    checkPlayerRound()
    console.log(player);
}

function greenButtonClick() {
    greenButton.style.background = 'lightgreen';
    setTimeout(function () {
        greenButton.style.background = 'rgb(0, 128, 0)';
    }, 300);
    player.push(3);

    checkPlayerRound() // --> might not be a good name 

    console.log(player);
}

function redButtonClick() {
    redButton.style.background = 'pink';
    setTimeout(function () {
        redButton.style.background = 'rgb(227, 0, 34)';
    }, 300);
    player.push(4);

    checkPlayerRound()

    console.log(player);
}

//Human turn function 

function playerTurn() {
    yellowButton.addEventListener('click', yellowButtonClick);

    blueButton.addEventListener('click', blueButtonClick);

    greenButton.addEventListener('click', greenButtonClick);

    redButton.addEventListener('click', redButtonClick);
}

//next round function  

function nextRound() {
    levels++
    displayLevel.innerText = levels;
    computer.push(Math.floor(Math.random() * 4) + 1);
    computerTurn();
    playerTurn();
}

//Play function

function playGame() {
    random();
    computerTurn();
    playerTurn();
}

//Motivational button 
motivationButton.addEventListener('click', (event) => {
    const quotesDiv = document.querySelector('#quotes')

    const motivationalQuotes = ['Aristotle: Quality is not an act but a habit'
        , 'Lao Tzu: The journey of a thousand miles begins with one step'
        , 'Epictecus: It is not what happens to you, but how you react to it that matters'
        , 'Arthur Schopenhaeur: Talent hits a target that no one can hit, genius hits a target that no one can see'
        , 'Freidrich Engle: An ounce of action is worth a ton of theory'
        , 'John Dewey: Education is not preperation for life; education is life itself'
        , 'Rene Descartes: I think, therefore I am'
        , 'Socrates: There is only one good, knowledge, and one evil, ignorance'
        , 'Soren Kierkegaard: Life can only be understood backwards but must be lived forward'
        , 'Epicurus: The greater the difficulty, the more glory in summounting it'
        , 'Spnioza: I can control my passions and emotions if I can understand their nature'
        , 'Seneca: Virtue is nothing else than right reason'
        , 'Democritus: The brave man is he who overcomes not only his enemies but his pleasures'
        , 'John Locke: The mind is furnished with ideas by experience alone'
        , 'Aristotle: The mark of an educated mind to be able to entertain a thought without accepting it'
        , 'Soren Kierkegaard: Nothing ventured, nothing gained'
        , 'Fredriech Nietzsche: He who has a why, can bear almost any how'
        , 'Jordan Peterson: If you fulfill your obligations everyday, you dont need to worry about the future'
        , 'Carl Jung: I am not what happened to me, I am what I choose to be'
        , 'Socrates: The unexamined life is not worth living'
        , 'Seneca: What need is there to weep over parts of life? The whole of it calls for tears']

    quotesDiv.innerText = motivationalQuotes[Math.floor((Math.random() * motivationalQuotes.length))];
})

//wildCard functions to reward the user for their accomplishment thus far
const wildCardDiv = document.querySelector('#wildcard-type');
const wildCardDescription = document.querySelector('#wildcard-description');
const wildcardButton = document.querySelector('#wildcard-button');

function wildCard() {
    const wildcards = ['Skip the level', 'Gain an extra life', 'Impute element'];
    wildCardDiv.innerText = wildcards[Math.floor((Math.random() * wildcards.length))];
    if (wildCardDiv.innerText === 'Skip the level') {
        levels++;
        player = [];
        computer = [];
        wildCardDescription.innerText = 'Level skipped';
    }

    if (wildCardDiv.innerText === 'Gain an extra life') {
        life++;
        wildCardDescription.innerText = 'Extra life gained';
    }

    if (wildCardDiv.innerText === 'Impute element') {
        wildCardDescription.innerText = 'Impute element';
        lastElementComputer = computer[computer.length - 1];
        if (player.length - 1) {
            player.push(lastElementComputer);
        }
    }
}

/*
if (levels % 5 === 0) {
    wildcardButton.addEventListener('click', wildCard());
} else {
    wildcardButton.removeEventListener('click');
    wildCardDescription.innerText = " ";
}
*/





