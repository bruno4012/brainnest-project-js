let playerName='';
const rock=0;
const paper=1;
const scissors=2;
let computerChoice; 
let playerLowerChoice;
let scoreComputer = 0;
let scorePlayer = 0;

getPlayerInformation();

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
    if( playerLowerChoice == 'quit')
    {
        window.close();
    }
    else if (possibility.indexOf(playerLowerChoice) !== -1){
        computerPlay();
    }
    else{
            alert('incorrect input (to quit the game just type quit)');
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
    alert('computer ' + scoreComputer +' '+ playerName +' '+ scorePlayer); 
    gamecheckWiner();
}

function gamecheckWiner(){

    if(scoreComputer == 3 && scoreComputer > scorePlayer){
        alert('Computer Is The WINER');
        resetGame();
    } 
    else if (scorePlayer == 3 && scorePlayer > scoreComputer) {
        alert(playerName +' Is The WINER');
        resetGame();
    } 
    else {
        player();
    }
}

function resetGame(){
    scorePlayer = 0;
    scoreComputer = 0;
    alert('Would You Like To Play Again ?')
    let replayGame = prompt('Please Type Yes, No or Change Name', '');
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