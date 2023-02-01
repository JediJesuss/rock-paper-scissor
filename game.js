function getComputerChoice() {
   
    var choices = ["rock" , "paper" , "sissors"];
    var result = choices[Math.floor(Math.random()*choices.length)];
    return result;
}

function getPlayerChoice(){
    var playerSelection = prompt("Please Pick");
        playerSelection = playerSelection.toLowerCase();

    return playerSelection;
}

var playerPoints = 0;
var computerPoints = 0;

function playRound(){
    var  playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

    let player = "You win!";
    let computer  = "You Lose!";

    if(playerChoice == "rock" && computerChoice == "paper"){
        alert(computer);
        computerPoints++;
    }else if(playerChoice == "rock" && computerChoice=="sissors"){
        alert(player);
        playerPoints++;
    }else if(playerChoice == "paper" && computerChoice=="rock"){
        alert(player);
        playerPoints++;
    }else if(playerChoice == "paper" && computerChoice=="sissors"){
        alert(computer);
        computerPoints++;
    }else if(playerChoice == "sissors" && computerChoice=="rock"){
        alert(computer);
        computerPoints++;
    }else if(playerChoice == "sissors" && computerChoice=="paper"){
        alert(player);
        playerPoints++;
    } else alert("It's a Draw!");

}

function game(){
    for(let i = 0; i <5; i++){
        var round = playRound();
        if(i == 4){
            if(playerPoints > computerPoints){
                alert("You Win! ------- Final Score: Player: " +playerPoints+" Computer: " +computerPoints);
            }else if (playerPoints == computerPoints){
                alert("Draw!  ------- Final Score: Player: " +playerPoints+" Computer: " +computerPoints);
            }else alert("You Lose! ------- Final Score: Player: " +playerPoints+" Computer: " +computerPoints);
        } else {
            alert("Current Score: Player: " + playerPoints + " Computer: " + computerPoints)
        }
    }
}