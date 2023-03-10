const resetBtn = document.getElementById("reset");
const youRock = document.getElementById("ROCK");
const youPaper = document.getElementById("PAPER");
const youScissor = document.getElementById("SCISSORS");
const youOption = [youRock, youPaper, youScissor];

const youScore = document.getElementById("youScore");
const youChoice = document.getElementById("playerText");

const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerText");


const resultDisplay = document.getElementById("resultText")

let youPick;
let computerPick;
let result;
// let score = 0;
// let score = 0;



// function youTurn() {

    youOption.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {

        youPick = e.target.id
        youChoice.innerHTML = youPick;
        computerTurn();
        gameResult();
        gameScore()
    }))

    function computerTurn( ){

        const randNum = Math.floor(Math.random() * 3) + 1;

        switch(randNum){
            case 1:
                computerPick = "ROCK";
                break;
            case 2:
                computerPick = "PAPER";
                break;
            case 3:
                computerPick = "SCISSORS";
                break;
        }
        computerChoice.innerHTML = computerPick;
    }

    function gameResult() {

        if(youPick == computerPick){
            result = "It's a draw.";    
        }
        else if(computerPick == "ROCK"){
            result = ( youPick == "PAPER") ? "You Win!" : "You Lose!";
        }
        else if(computerPick == "PAPER"){
            result = ( youPick == "SCISSORS") ? "You Win!" : "You Lose!";
        }
        else if(computerPick == "SCISSORS"){
            result = ( youPick == "ROCK") ? "You Win!" : "You Lose!";
        }
        resultDisplay.innerHTML = result;
    }

    // function scoreY() {

    //     if(resultDisplay == "You Win!") {    
    //         score + 1 
    //     }
    //     youScore.innerHTML = scoreY + 1;

    //     if(resultDisplay == "You Lose!") {
    //        computerScore.innerHTML = scoreC +1;
    //     }
    // }


resetBtn.addEventListener("click", function(){
    location.reload();

})