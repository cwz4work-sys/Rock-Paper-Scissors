function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return 'rock';
    } else if (randNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt('Enter rock, paper or scissors');
}

let humanScore = 0;
let computerScore = 0;

function convertToNumber(choice) {
    return choice === 'rock' ? -1 : choice === 'paper' ? 0 : 1;
}

function playRound(humanChoice, computerChoice) {
    const action = `You threw ${humanChoice.toLowerCase()} while the computer threw ${computerChoice}.`;
    humanChoice = convertToNumber(humanChoice.toLowerCase());
    computerChoice = convertToNumber(computerChoice);
    let result = 'You ';

    if (humanChoice === computerChoice) {
        result = 'It is a draw!';
    } else if (humanChoice - computerChoice === -1 || humanChoice - computerChoice > 1) {
        result += 'lose!';
        computerScore += 1;
    } else {
        result += 'win!';
        humanScore += 1;
    }

    console.log(result + ' ' + action + `\nYou: ${humanScore} | Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
