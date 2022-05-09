let readline = require('readline-sync');
const VALID_CHOICES = ['rock' , 'paper', 'scissors'];

function prompt(message) {
  console.log(`==> ${message}`);
}

let invalidChoice = (choice) => {
  return (choice.trim() === '') || (!VALID_CHOICES.includes(choice));
};

let player = () => {
  let choice = readline.question(prompt(`Please choose a weapon from the given CHOICES: ${VALID_CHOICES.join(' - ')}\n`));
  while (invalidChoice(choice)) {
    prompt(`Wrong choice of Weapon! Please Choose from one of the given choices: ${VALID_CHOICES.join(' - ')}\n`);
    choice = readline.question();
  }
  prompt(`You choose ${choice} as a weapon of your choice!\n`);

  return choice;
};

let computer = () => {
  let randomNumber = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomNumber];

  prompt(`Computer has choosen ${choice} as the weapon of it's choice!\n`);
  return choice;
};

let displayResult = (player, computer) => {
  if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
    prompt("YOU HAVE WON !!!\n");
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player === 'rock') || (computer === 'scissors' && player === 'paper')) {
    prompt('COMPUTER HAS WON');
  } else if (player === computer) {
    prompt("IT'S A DRAW !!!\n");
  }
};

while (true) {
  console.clear();
  displayResult(player(), computer());
  prompt("Would You like to play again ?\n==> Enter 'y' for yes you want to play again\n==> Enter 'n' for No you dont want to play again\n");
  let playAgain = readline.question().toLowerCase();

  while (playAgain !== 'y' && playAgain !== 'n') {
    prompt(`${playAgain} is not a Valid Choice`);
    prompt("Please Enter 'y' or 'n'");
    playAgain = readline.question();
  }
  if (playAgain === 'n') break;
}


