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

function playGame(humanChoice) {
    let humanScore = 0;
    let computerScore = 0;

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
    
    const body = document.querySelector('body')
    const div = document.createElement('div');
    body.appendChild(div);
    const round = document.createElement('p');
    round.textContent = result + ' ' + action;
    const score = document.createElement('p');
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    round.style.textAlign = score.style.textAlign = 'center';
    div.appendChild(round);
    div.appendChild(score);

    const match = document.createElement('p');
    if (humanScore === computerScore) {
        match.textContent = 'The game ends in a draw!';
    } else {
        const winner = humanScore > computerScore ? 'you' : 'the computer';
        match.textContent = `The game ends with ${winner} claiming victory!`;
    }
    match.style.textAlign = 'center';
    div.appendChild(match);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playGame(button.textContent)));