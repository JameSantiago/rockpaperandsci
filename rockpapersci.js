function compareOptions(playerSelection){
    const possibleOptions = ['rock', 'paper', 'scissors'];
    isThisOpt = true;
    for(i = 0; i < possibleOptions.length && !isThisOpt; i++){
        if(i == playerSelection){
            isThisOpt = true;
            return true;
        }
    }
}


function computerPlay(){

    const possibleOptions = ['rock', 'paper', 'scissors'];

    const randomSelect = Math.floor(Math.random()*possibleOptions.length);

    return possibleOptions[randomSelect];
}

function playerPlay(){

    return prompt("Choose - Rock, Paper or Scissors ").toLowerCase();
}


function playRound(playerSelection, computerSelection){

    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'Player 1 wins';

    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'Player 1 wins';

    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 'Player 1 wins';
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 'Computer wins';

    } else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'Computer wins';

    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'Computer wins';
    } else if(playerSelection == computerSelection){
        return 'Draw'
    } 
}

function game(){

    var counterPlayerOne = 0;
    var counterComputer = 0;

    for(i = 0; i < 4; i++){
        let computerSelection = computerPlay();
        console.log(computerSelection);
        let playerSelection = playerPlay();
        console.log(playerSelection);
        var result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if(result == 'Player 1 wins'){
            counterPlayerOne++;
        } else if(result == 'Computer wins'){
            counterComputer++;
        }
    }

    if(counterPlayerOne > counterComputer){
        return 'Player 1 is better!';
    } else{
        return 'Computer is better';    
    }

}

