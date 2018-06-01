//Variables
let wins=0;
let loss=0;
let guesses=10;
let guessesLeft=10;
let guessedLetters=[];
let letterToGuess=null;
let userGuessed=null;

//document.ready that allows the HTML to load before javascript
window.onload = function(){
    reset();
    document.onkeyup = function(event){
        userGuess(event);
        playingGame();
    }
}


function computersChoice(){
    computersOption= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    let computersChoice = computersOption[Math.floor(Math.random*computersOption.length)];
    // let userGuess = String.fromCharCode(event.keyCode).toLowerCase(); not sure how to install this won't work
}console.log("hello");


function userGuess(event){
    userGuessed= event.key;
    userGuessed= userGuessed.toUpperCase();
}

//Function that runs the actual game
function playingGame(){
    guessesLeft--;
    guessesRemaining();
    currentGuess();

    //win conditions if/else
    if(guessesLeft>0){
        if(userGuessed===computersChoice){
            wins++;
            document.querySelector('.wins').innerHTML = "Wins: " + wins;
            alert('Congradulations you outsmarted the Computer!')
            reset();
        }
    }
    else if(guessesLeft===0){
        loss++;
        document.querySelector('.losses').innerHTML = 'Losses: ' + loss;
        alert('Looks like the computer out-computed your brain! Try Again');
        reset();
    }
}

//Javascript to indicate how many guesses player has left
function guessesRemaining(){
    document.querySelector('.guessesLeft').innerHTML="Guesses left: " + guessesLeft;
}

//Creates a list of all the guesses made so far
function currentGuess(){
    guessedLetters.push(userGuessed);
    document.querySelector('.currentGuesses').innerHTML = 'Your Guesses so far: ' + guessedLetters.join(', ');
}


//Function under reset conditions { need to review this still don't fully get it}
function reset(){
    guesses=10;
    guessesLeft=10;
    guessedLetters=[];
    computersChoice();
    currentGuess();
}



