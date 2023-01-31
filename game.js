function getComputerChoice() {
   
    var choices = ["rock" , "paper" , "sissors"];
    var result = choices[Math.floor(Math.random()*choices.length)];
    return result;
}

function playRound(player){
    let computer = getComputerChoice();
    let result = "";

    if(player == "rock"){
        if(computer == "paper"){
            return result = "You lose";
        }else if(computer == "sissors"){
            return result = "You win";
        } else return result = "Nobody wins";
    }
}
