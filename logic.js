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

function convertToNumber(choice) {
    return choice === 'rock' ? -1 : choice === 'paper' ? 0 : 1;
}

function playRound(humanChoice) {
    if (humanScore === 0 && computerScore === 0) {
        match.textContent = '';
    }
    
    let computerChoice = getComputerChoice();
    
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

    round.textContent = result + ' ' + action;
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    round.style.textAlign = score.style.textAlign = 'center';

    if (humanScore >= 5 || computerScore >= 5) {
        const winner = humanScore > computerScore ? 'you' : 'the computer';
        match.textContent = `The game ends with ${winner} claiming victory!`;
        match.style.textAlign = 'center';
        humanScore = computerScore = 0;
    }
}

// Initialise game
let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body')
const div = document.createElement('div');
body.appendChild(div);
const round = document.createElement('p');
const score = document.createElement('p');
const match = document.createElement('p');
div.appendChild(round);
div.appendChild(score);
div.appendChild(match);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.textContent)));