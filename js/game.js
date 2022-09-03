let playerName='';
const rock=0;
const paper=1;
const scissors=2;
let computerChoice; 
let playerLowerChoice;
let scoreComputer = 0;
let scorePlayer = 0;
let i = 0;



function getPlayerInformation(){
    alert('hey there');
    do{
        playerName = prompt('Please Enter Yout name','');
    }
    while(playerName =='');
 
    if (playerName !==''){
        alert(' Hi '+ playerName);
        alert(' Lets Start The Game!');
        player()

    }
}

function player(){
    let possibility = ['rock','paper','scissors'];
    //  ask player for play 
    let playerChoice= prompt(playerName + ' Please Type Rock, Paper or Scissor','');
    playerLowerChoice = playerChoice.toLocaleLowerCase();
    // check if played world exist 
    if (possibility.indexOf(playerLowerChoice) !== -1){
        computerPlay();
    }
    else{
            alert('incorrect input');
            player();
    }
}
function computerPlay(){
    const randomGenNumber = Math.floor(Math.random() * 3);

    if (randomGenNumber == 0){
        computerChoice = 'paper'
    }
    if (randomGenNumber == 1){
        computerChoice = 'rock'
    }
    if (randomGenNumber == 2){
        computerChoice = 'scissors'
    }
    alert('Computer Choose '+ computerChoice );
    gameScore();
}
function gameScore(){
    if (computerChoice == playerLowerChoice){
        alert('Draw');
    }
    else if (computerChoice == 'rock' && playerLowerChoice == 'paper'){
        alert(playerName + ' win');
        scorePlayer++;
    }
    else if (computerChoice == 'paper' && playerLowerChoice == 'scissors'){
        alert(playerName + ' win');
        scorePlayer++;
    }   
    else if (computerChoice == 'scissors' && playerLowerChoice == 'rock'){
        alert(playerName + ' win');
        scorePlayer++;
    }
    else{ 
        alert('computer win');  
        scoreComputer++;
    }
    gamecheckWiner();
}
function gamecheckWiner(){
    while( i < 4){
         i++;
         console.log(i)
         console.log('computer ' + computerChoice +' '+ playerName +' '+ playerLowerChoice);
         console.log('computer ' + scoreComputer +' '+ playerName +' '+ scorePlayer);
         player();
         
    }
    if(scoreComputer == scorePlayer)
    { 
        console.log('Drawn');
        player(); 
    }
    else if (scoreComputer > scorePlayer){
        alert('Game Over');
        alert('computer ' + scoreComputer +' '+ playerName +' '+ scorePlayer); 
        resetGame();
    }else{
        alert(playerName +' Win The Game');
        alert('computer ' + scoreComputer +' '+ playerName +' '+ scorePlayer); 
        resetGame();
    }
    // if(scoreComputer == 3 && scoreComputer > scorePlayer){
    //     alert('Computer Is The WINER');
    //     resetGame();
    // } 
    // else if (scorePlayer == 3 && scorePlayer > scoreComputer) {
    //     alert(playerName +' Is The WINER');
    //     resetGame();
    // } 
    // else {
    //     player();
    // }
}
function resetGame(){
    scorePlayer = 0;
    scoreComputer = 0;
    i = 0;
    alert('Would You Like To Play Again ?')
    let replayGame = prompt('Please Type Yes, No or Change Name');
    let replayGameLower = replayGame.toLocaleLowerCase();

    if (replayGameLower == 'yes'){
        player();
        // alert(replayGameLower)
    }
    else if ( replayGameLower == 'change name'){
        getPlayerInformation();
        // alert(replayGameLower)
    }
    else if  ( replayGameLower == 'no'){
        window.close();
        // alert(replayGameLower)
    }
    else {
        alert('choice not valid')
        resetGame()
    }
}