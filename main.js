//initialize computer and human sequence to compare later
let computer = [];
let player = [];
let life = 5;
let levels = 1;

//start game function
startButton = document.querySelector('#start');
motivationButton = document.querySelector('#motivation')
correctButton = document.querySelector('#correct');
stopButton = document.querySelector('#stop');
pauseButton = document.querySelector('#pause');
resumeButton = document.querySelector('#resume');
Turn = document.getElementById('Turn');

//audio button for game sounds
yellowButtonSound = document.getElementById('clip1');
blueButtonSound = document.getElementById('clip2');
greenButtonSound = document.getElementById('clip3');
redButtonSound = document.getElementById('clip4');
allSound = document.getElementById('audioclips');
audioButton = document.getElementById('audio');

//Username log in function


let name = window.prompt("Enter your name: ");
alert("Welcome to Simon Game! Your name is " + name);
displayName = document.querySelector('#name');
displayName.innerText = name;


informationButton = document.querySelector('#information');
informationButton.innerText = 'Status: Game not started yet'

//Turn inner text when game has not yet started

Turn.innerText = "Nobody's turn";

//toggle sound on or off 
function togglePlay() {
    if (audioButton.paused) {
        audioButton.play();
    } else {
        audioButton.pause();
    }
}

//when button is clicked on, game starts and runs

startButton.addEventListener('click', (event) => {
    if (levels === 0) {
        displayLevel.innerText = "-"
    } else {
        displayLevel.innerText = levels;
        informationButton.innerText = 'Status: Game has started';
        informationButton.style.color = 'green';
    }
    //remove eventListener
    playGame();
})

//when stop button is clicked on, resets game

stopButton.addEventListener('click', (event) => {
    displayLevel.innerText = levels;
    informationButton.innerText = 'Status: Game not started yet'
    informationButton.style.color = 'red';
    writeHighScore();
    resetGame();
});

//When pause button is clicked on, pauses game

pauseButton.addEventListener('click', (event) => {
    informationButton.innerText = 'Status: Game paused';
    informationButton.style.color = 'white';
    disableButtons();
})

//when resume button is clicked on, resumes game

resumeButton.addEventListener('click', (event) => {
    informationButton.innerText = 'Status: Game has resumed';
    informationButton.style.color = 'green';
    enableButtons();
})

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
}

//Disable buttons 

function disableButtons() {
    yellowButton.removeEventListener('click', yellowButtonClick);
    blueButton.removeEventListener('click', blueButtonClick);
    greenButton.removeEventListener('click', greenButtonClick);
    redButton.removeEventListener('click', redButtonClick);
}

//enable buttons 

function enableButtons() {
    yellowButton.addEventListener('click', yellowButtonClick);
    blueButton.addEventListener('click', blueButtonClick);
    greenButton.addEventListener('click', greenButtonClick);
    redButton.addEventListener('click', redButtonClick);
}

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
        writeHighScore();
        resetGame();
    } else {
        return
    }
}

//Gameover function to end the game when the game is over

function gameOver() {
    if (life === 0) {
        alert("Game over! Better luck next time!")
        console.log(levels);
        writeHighScore();
        resetGame();
    } else {
        return;
    }
}


//Reset game function to set everything back to its initial state

function resetGame() {
    computer.length = 0;
    player.length = 0;
    life = 5;
    levels = 1;
    disableButtons();

    informationButton.innerText = 'Status: Game not started yet'
    informationButton.style.color = 'red';
    displayLife.innerHTML = 'Life: ' + life;
    Turn.innerText = "Nobody's turn";
    displayLevel.innerHTML = levels;
    wildCardDescription.innerText = " "

    if (levels === 0) {
        displayLevel.innerText = "-"
    } else {
        displayLevel.innerText = levels;
    }
}

//Computer turn function

function computerTurn() {

    runLoop = async () => {
        for (const item of computer) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log(item);
            Turn.innerText = "Computer's Turn";
            Turn.style.color = 'darkblue';
            if (item === 1) {
                yellowButton.style.background = 'lightyellow';
                setTimeout(function () {
                    yellowButton.style.background = 'rgb(204, 204, 0)';
                    yellowButtonSound.play();
                    Turn.innerText = "Computer's Turn";
                    Turn.style.color = 'darkblue';
                }
                    , 300);
                console.log('yellow');
            }

            if (item === 2) {
                blueButton.style.background = 'lightblue';
                setTimeout(function () {
                    blueButton.style.background = 'darkblue';
                    blueButtonSound.play();
                    Turn.innerText = "Computer's Turn";
                    Turn.style.color = 'darkblue';
                }, 300);
                console.log('blue');
            }

            if (item === 3) {
                greenButton.style.background = 'lightgreen';
                setTimeout(function () {
                    greenButton.style.background = 'rgb(0, 128, 0)';
                    greenButtonSound.play();
                    Turn.innerText = "Computer's Turn";
                    Turn.style.color = 'darkblue';
                }, 300);
                console.log('green');
            }

            if (item === 4) {
                redButton.style.background = 'pink';

                setTimeout(function () {
                    redButton.style.background = 'rgb(227, 0, 34)';
                    redButtonSound.play();
                    Turn.innerText = "Computer's Turn";
                    Turn.style.color = 'darkblue';
                }, 300);
                console.log('red');
            }
        }
    }

    Turn.innerText = "Computer's Turn";
    Turn.style.color = 'darkblue';
    runLoop();
}

//Player Round

function checkPlayerRound() {
    console.log('has player finish turn:', player.length === computer.length)
    const hasGameEnd = player.length === computer.length;

    if (hasGameEnd) {
        disableButtons();

        if (JSON.stringify(player) === JSON.stringify(computer)) {
            player = [];
            life++;
            displayLife.innerHTML = 'Life: ' + life;
            nextRound();
            wildCard();
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
        yellowButtonSound.play();
    }, 300);
    player.push(1);

    checkPlayerRound()

    console.log(player);
}

function blueButtonClick() {
    blueButton.style.background = 'lightblue';

    setTimeout(function () {
        blueButton.style.background = 'darkblue';
        blueButtonSound.play();
    }, 300);
    player.push(2);

    checkPlayerRound()
    console.log(player);
}

function greenButtonClick() {
    greenButton.style.background = 'lightgreen';

    setTimeout(function () {
        greenButton.style.background = 'rgb(0, 128, 0)';
        greenButtonSound.play();
    }, 300);
    player.push(3);

    checkPlayerRound();

    console.log(player);
}

function redButtonClick() {
    redButton.style.background = 'pink';

    setTimeout(function () {
        redButton.style.background = 'rgb(227, 0, 34)';
        redButtonSound.play();
    }, 300);
    player.push(4);

    checkPlayerRound()

    console.log(player);
}

//Human turn function 

function playerTurn() {

    Turn.innerText = "Player's Turn";
    Turn.style.color = 'darkred';

    yellowButton.addEventListener('click', yellowButtonClick);

    blueButton.addEventListener('click', blueButtonClick);

    greenButton.addEventListener('click', greenButtonClick);

    redButton.addEventListener('click', redButtonClick);
}

//next round function  

function nextRound() {
    levels++;
    displayLevel.innerText = levels;
    computer.push(Math.floor(Math.random() * 4) + 1);
    computerTurn();
    playerTurn();
}

//previous round function

function previousRound() {
    levels -= 2;
    displayLevel.innerText = levels;
    computer.push(Math.floor(Math.random() * 4) - 1);
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
        , 'Seneca: What need is there to weep over parts of life? The whole of it calls for tears'
        , 'Socrates: The only true wisdom is in knowing you know nothing'
        , 'Confucius: Roads were made for journeys, not destinations'
        , 'Master Yoda: Do or do not, there is no try'
        , 'Master Yoda: The greatest teacher failure is'
        , 'Batman: Why do we fall? So that we can learn to pick ourselves up'
        , 'Batman: Our greatest glory is not in never falling, but in rising every time we fall'
        , 'Jor-El: What if a child dreamed of something other than what society intended, what if a child aspired to something greater']

    quotesDiv.innerText = motivationalQuotes[Math.floor((Math.random() * motivationalQuotes.length))];
})

//wildCard functions to reward the user for their accomplishment thus far after every 5 levels
//check with eugene on imputing last element and other ideas

const wildCardDiv = document.querySelector('#wildcard-type');
const wildCardDescription = document.querySelector('#wildcard-description');

function wildCard() {

    const wildCards = ['Level skipped', 'Extra life gained', 'Minus a life', 'Instant death'];
    wildCardDiv.innerText = wildCards[Math.floor((Math.random() * wildCards.length))];
    console.log(wildCardDiv);

    if (levels % 5 === 0) {

        //Skips a level immediately
        if (wildCardDiv.innerText === 'Level skipped') {
            wildCardDescription.innerText = 'Level skipped';
            nextRound();
        }

        //Extra life gained
        if (wildCardDiv.innerText === 'Extra life gained') {
            life++;
            console.log(life);
            displayLife.innerHTML = 'Life: ' + life;
            wildCardDescription.innerText = 'Extra life gained';
        }

        //Minus a life
        if (wildCardDiv.innerText === 'Minus a life') {
            wildCardDescription.innerText = 'Minus a life';
            life--;
            displayLife.innerHTML = 'Life: ' + life;
            wildCardDescription.innerText = 'Minus a life';
        }

        //Instant death
        if (wildCardDiv.innerText === 'Instant death') {
            wildCardDescription.innerText = 'Instant death';
            alert('My deepest condolences as you have received the instant death wildcard. Better luck next time!');
            resetGame();
        }

    } else {
        wildCardDescription.innerText = " ";
    }
}

//Highscore area
highScoreDisplay = document.getElementById('NameAndScore');
function writeHighScore() {

    const person = {
        name: displayName.innerText,
        score: levels,
    }

    currentHighScorePerson = localStorage.getItem('Person High Score');
    currentHighScore = localStorage.getItem('HighScore');

    if (levels > currentHighScore) {
        currentHighScorePerson = localStorage.setItem('Person High Score', name);
        currentHighScore = localStorage.setItem('HighScore', levels);
        currentHighScorePerson = localStorage.getItem('Person High Score')
        currentHighScore = localStorage.getItem('HighScore');

        console.log(currentHighScorePerson);
        console.log(currentHighScore);
        highScoreDisplay.innerText = 'High Score: ' + currentHighScorePerson + ' ' + currentHighScore;

    } else {
        currentHighScorePerson = localStorage.getItem('Person High Score')
        currentHighScore = localStorage.getItem('HighScore');
        highScoreDisplay.innerText = 'High Score: ' + currentHighScorePerson + ' ' + currentHighScore;
    }
}

//Makes the highscore appear before game starts
writeHighScore();

//clear Highscore
clearHighScore = document.getElementById('ClearHighScore');

function clearingHighScore() {
    localStorage.removeItem('Person High Score');
    localStorage.removeItem('HighScore');
    highScoreDisplay.innerText = 'High Score: ';
}

clearHighScore.addEventListener('click', clearingHighScore());



