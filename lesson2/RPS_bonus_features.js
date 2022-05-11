let readline = require('readline-sync');

const FINAL_ROUND = 5;
const MAX_WINS = 3;

const winningMoves = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spoch'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spoch'],
  spoch: ['rock', 'scissors']
};
const CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spoch"
};
const VALID_CHOICES = Object.keys(CHOICES);
let round;
let playerWins;
let computerWins;
let playerChoice;
let computerChoice;
let result;
let answer;

function welcome() {
  prompt(`There are a total of 5 Rounds in this Game.\n==> You need to Win 3 Rounds out of 5 inorder to become a GrandWinner!!!`);
  prompt("It's YOU vs Your Computer!!!");
  prompt('May the force be with you!!!');
  prompt(`Let the Games begin!!!`);
}

function prompt(message) {
  console.log(`==> ${message}`);
}

let invalidChoice = (choice) => {
  return (choice.trim() === '') || (!VALID_CHOICES.includes(choice));
};

let playerChooses = () => {
  let choice = readline.question(prompt(`Please choose a weapon from the given CHOICES:\n==> 'r' for rock\n==> 'p' for paper\n==> 'sc' for scissors\n==> 'l' for lizards\n==> 'sp' for spock\n`));
  while (invalidChoice(choice)) {
    prompt(`Wrong choice of Weapon! Please Choose from one of the given choices: \n==> 'r' for rock\n==> 'p' for paper\n==> 'sc' for scissors\n==> 'l' for lizards\n==> 'sp' for spock\n`);
    choice = readline.question();
  }
  //console.log(`${CHOICES[choice]}`);
  return choice;
};

let computerChooses = () => {
  let randomNumber = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomNumber];
  return choice;
};

function winner() {
  let winner;
  if ((playerChoice === 'rock' && winningMoves[playerChoice].includes(computerChoice)) ||
  (playerChoice === 'paper' && winningMoves[playerChoice].includes(computerChoice)) ||
  (playerChoice === 'scissors' && winningMoves[playerChoice].includes(computerChoice)) ||
  (playerChoice === 'lizard' && winningMoves[playerChoice].includes(computerChoice)) ||
  (playerChoice === 'spoch' && winningMoves[playerChoice].includes(computerChoice))) {
    winner = 'player';
  } else if (playerChoice === computerChoice) {
    winner = 'draw';
  } else {
    winner = 'computer';
  }
  return winner;
}

function displayRounds() {
  if (result === 'player') {
    prompt(`YOU CHOOSE ${playerChoice.toUpperCase()} AND COMPUTER CHOOSE ${computerChoice.toUpperCase()}`);
    prompt(`YOU WON ROUND ${round}`);
  } else if (result === 'computer') {
    prompt(`YOU CHOOSE ${playerChoice.toUpperCase()} AND COMPUTER CHOOSE ${computerChoice.toUpperCase()}`);
    prompt(`COMPUTER WON ROUND ${round}`);
  } else if (result === 'draw') {
    prompt(`You both choose ${playerChoice.toUpperCase()}`);
    prompt('NOBODY WON. THIS ROUND WAS A DRAW');
  }
  console.log('*************************************************************************************');
  prompt(`TOTAL ROUNDS WON BY PLAYER: ${playerWins} || TOTAL ROUNDS WON BY COMPUTER: ${computerWins}`);
}

function displayResult() {
  //console.clear();
  if (round === FINAL_ROUND) {
    if ((playerWins >= MAX_WINS) && (playerWins > computerWins)) {
      prompt(`CONGRATULATIONS YOU HAVE WON ${playerWins} ROUNDS OUT OF 5, YOU ARE THE GRAND WINNER !!!\n`);
    } else if ((computerWins >= MAX_WINS) && (computerWins > playerWins)) {
      prompt(`COMPUTER HAS WON ${computerWins} ROUNDS OUT OF 5, COMPUTER IS THE GRAND WINNER !!!\n`);
    } else if (playerWins === computerWins) {
      prompt(`THE GAME WAS A DRAW !!! YOU WON ${playerWins} ROUND OUT OF 5 AND COMPUTER WON ${computerWins} ROUND OUT OF 5`);
    } else {
      prompt(`NOBODY WON !!! YOU WON ${playerWins} ROUNDS OUT OF 5 AND COMPUTER WON ${computerWins} OUT OF 5`);
    }
  }
}

function playAgain() {
  prompt("Would You like to play again ?\n==> Enter 'y' for yes you want to play again\n==> Enter 'n' for No you dont want to play again\n");
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt(`${answer} is not a Valid Choice`);
    prompt("Please Enter 'y' or 'n'");
    answer = readline.question();
  }
  return answer;
}
function updateScore() {
  if (result === 'player') {
    playerWins++;
  } else if (result === 'computer') {
    computerWins++;
  } else if (result === 'draw') {
    playerWins += 0;
    computerWins += 0;
  }
}

function playMatch() {
  while (round <= 5) {
    prompt(`This is round ${round} out of 5`);
    playerChoice = CHOICES[playerChooses()];
    computerChoice = CHOICES[computerChooses()];
    result = winner();
    updateScore();
    console.clear();
    displayRounds();
    displayResult(round);
    round++;
    if (round === 6) {
      answer = playAgain();
    }
  }
}

welcome();
while (true) {
  round = 1;
  playerWins = 0;
  computerWins = 0;
  playMatch();
  if (answer === 'n') {
    break;
  } else if (answer === 'y') {
    console.clear();
  }
}
