////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move !== undefined && move !== null)
    {
        return move;
    }
    else
    {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move !== undefined && move !== null)
    {
        return move;
    }
    else
    {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    console.log("Player Move:" + " " + playerMove);
    console.log("Computer Move: " + computerMove);
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (computerMove === playerMove)
    {
        winner = "tie";
    }
    else 
    {
        switch (playerMove)
        {
            case "rock":
                if (computerMove === "scissors")
                {
                    winner = "player";
                }
                else
                {
                    winner = "computer";
                }
                break;
            case "paper":
                if (computerMove === "rock")
                {
                    winner = "player";
                }
                else
                {
                    winner = "computer";
                }
                break;
            case "scissors":
                if (computerMove === "paper")
                {
                    winner = "player";
                }
                else
                {
                    winner = "computer";
                }
                break;
        }
    }

   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins !== 5 && computerWins !== 5)
    {
        //Pulls Computer and Player Move to determine the winner.
        //Winner get a point!
        var theComputerMove = getComputerMove();
        var thePlayerMove = getPlayerMove();
        var roundWinner = getWinner(thePlayerMove, theComputerMove);
        if (roundWinner === "computer")
        {
            computerWins = computerWins + 1;
            console.log("Computer Wins!");
        }
        else if(roundWinner === "player")
        {
            playerWins = playerWins + 1;
            console.log("Player Wins!");
        }
    }  
    return [playerWins, computerWins];
}

//Outputs winner
var determineWinner = playToFive();

if (determineWinner[0] > determineWinner[1])
{
    console.log("Player Rules!!!");
}
else
{
    console.log("Robots Rule!!!");
}


