const readline = require('readline-sync');
const CLC = require('cli-color');

let round;
let playerWins;
let computerWins;
let playerChoice;
let computerChoice;
let result;
let answer;


const CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spock"
};
const VALID_CHOICES = Object.keys(CHOICES);

function welcome() {
  prompt(CLC.green("There are a total of 5 Rounds in this Game.\n==> You need to Win 3 Rounds out of 5 inorder to become a GrandWinner!!!"));
  prompt(CLC.green("It's YOU vs Your Computer!!!"));
  prompt(CLC.green("May the force be with you!!!"));
  prompt(CLC.green("Let the Games begin!!!"));
}

function prompt(message) {
  console.log(`==> ${message}`);
}

let invalidChoice = (choice) => {
  return (choice.trim() === '') || (!VALID_CHOICES.includes(choice));
};

let player = () => {
  let choice = readline.question(prompt(CLC.magentaBright(`Please choose a weapon from the given CHOICES:\n==> 'r' for rock\n==> 'p' for paper\n==> 'sc' for scissors\n==> 'l' for lizards\n==> 'sp' for spock\n`)));
  while (invalidChoice(choice)) {
    prompt(CLC.red(`Wrong choice of Weapon! Please Choose from one of the given choices: \n==> 'r' for rock\n==> 'p' for paper\n==> 'sc' for scissors\n==> 'l' for lizards\n==> 'sp' for spock\n`));
    choice = readline.question();
  }
  return CHOICES[choice];
};

let computer = () => {
  let randomNumber = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomNumber];
  return CHOICES[choice];
};

function playerWin(player, computer) {
  return ((player === 'rock' && computer === 'scissors')
    || (player === 'rock' && computer === 'lizard')
    || (player === 'paper' && computer === 'spock')
    || (player === 'paper' && computer === 'rock')
    || (player === 'scissors' && computer === 'paper')
    || (player === 'scissors' && computer === 'lizard')
    || (player === 'lizard' && computer === 'spock')
    || (player === 'lizard' && computer === 'paper')
    || (player === 'spock' && computer === 'scissors')
    || (player === 'spock' && computer === 'rock'));
}

function win(player, computer) {
  let winner;
  if (playerWin(player, computer)) {
    winner = 'player';
  } else if (player === computer) {
    winner = 'draw';
  } else {
    winner = 'computer';
  }
  return winner;
}

function displayRounds(result, round, playerWins, computerWins) {
  if (result === 'player') {
    prompt(`YOU CHOOSE ${playerChoice.toUpperCase()} AND COMPUTER CHOOSE ${computerChoice.toUpperCase()}`);
    prompt(`YOU WON ROUND ${round}`);
    prompt(`TOTAL ROUNDS WON BY PLAYER: ${playerWins} || TOTAL ROUNDS WON BY COMPUTER: ${computerWins}`);
    console.log('*************************************************************************************');
  } else if (result === 'computer') {
    prompt(`YOU CHOOSE ${playerChoice.toUpperCase()} AND COMPUTER CHOOSE ${computerChoice.toUpperCase()}`);
    prompt(`COMPUTER WON ROUND ${round}`);
    prompt(`TOTAL ROUNDS WON BY PLAYER: ${playerWins} || TOTAL ROUNDS WON BY COMPUTER: ${computerWins}`);
    console.log('**************************************************************************************');
  } else if (result === 'draw') {
    prompt(`You both choose ${playerChoice.toUpperCase()}`);
    prompt('NOBODY WON. THIS ROUND WAS A DRAW');
    prompt(`TOTAL ROUNDS WON BY PLAYER: ${playerWins} || TOTAL ROUNDS WON BY COMPUTER: ${computerWins}`);
    console.log('*************************************************************************************');
  }
}

function displayResult(round, playerWins, computerWins) {
  //console.clear();
  if (round === 5) {
    if ((playerWins >= 3) && (playerWins > computerWins)) {
      prompt(`CONGRATULATIONS YOU HAVE WON ${playerWins} ROUNDS OUT OF 5, YOU ARE THE GRAND WINNER !!!\n`);
    } else if ((computerWins >= 3) && (computerWins > playerWins)) {
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

while (true) {
  welcome();
  round = 1;
  playerWins = 0;
  computerWins = 0;
  while (round <= 5) {
    prompt(CLC.yellow(`This is round ${round} out of 5`));
    playerChoice = player();
    computerChoice = computer();
    result = win(playerChoice, computerChoice);
    if (result === 'player') {
      playerWins++;
    } else if (result === 'computer') {
      computerWins++;
    } else if (result === 'draw') {
      playerWins += 0;
      computerWins += 0;
    }
    console.clear();
    displayRounds(result, round, playerWins, computerWins);
    //console.clear();
    displayResult(round, playerWins, computerWins);

    round++;
    if (round === 6) {
      answer = playAgain();
    }
  }
  if (answer === 'n') {
    break;
  } else if (answer === 'y') {
    console.clear();
  }
}
