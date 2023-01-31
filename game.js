function getComputerChoice() {
   
    var choices = ["Rock" , "Paper" , "Sissors"];
    var result = choices[Math.floor(Math.random()*choices.length)];
    return result;
}
