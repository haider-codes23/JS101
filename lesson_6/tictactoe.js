let readline = require('readline-sync');
const COLOR = require('cli-color');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_GAMES_TO_WIN_MATCH = 5;
const COMPUTERS_TURN = 'c';
const USER_TURN = 'u';
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]]; // diagonals

function prompt(string) {
  console.log(`${string}`);
}

function displayWelcome() {
  console.clear();
  prompt(COLOR.greenBright("Welcome to the Game Tic-Tac-Toe"));
  prompt(COLOR.greenBright(`You are ${COLOR.red(HUMAN_MARKER)}`));
  prompt(COLOR.greenBright(`Computer is ${COLOR.blue(COMPUTER_MARKER)}`));
  prompt(COLOR.yellowBright("The first player to win 5 Rounds wins the overall Match!"));
  prompt(COLOR.yellowBright("If a round results in a tie that round will be played again"));
  readline.question(prompt(COLOR.cyanBright("Press Enter key to start playing the game!")));
  console.clear();
}

function selectTurn() {
  prompt(COLOR.blueBright("If you'd like Computer to take the first turn press c for computer"));
  prompt(COLOR.redBright("If you want to take the first turn then press u for user"));
  let answer = readline.question().toLowerCase()[0];
  console.log(answer);
  while (answer !== COMPUTERS_TURN && answer !== USER_TURN) {
    prompt("Please Choose a Valid Choice");
    prompt(COLOR.yellow("If you'd like Computer to take the first turn press c for computer"));
    prompt(COLOR.yellow("If you want to take the first turn then press u for user"));
    answer = readline.question();
  }
  return answer;
}


function displayWhosWho() {
  prompt(`You are ${COLOR.red(HUMAN_MARKER)}, Computer is ${COLOR.blue(COMPUTER_MARKER)}`);
}

function displayGameDetails(score) {
  displayWhosWho();
  displayScore(score);
  displayCurrentRound(score);
}

function displayBoard(board, score) {
  console.clear();
  displayGameDetails(score);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log('     |     |');
  console.log('');
}

function intializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySqaures(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);

}

function joinOr(array, delimeter = ', ', joinWord = 'or') {
  if (array.length === 0) {
    return '';
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return array.join(` ${joinWord} `);
  } else {
    return array.slice(0, array.length - 1).join(delimeter) +
    `${delimeter}${joinWord} ${array[array.length - 1]}`;
  }

}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square from ${joinOr(emptySqaures(board))}`);
    square = readline.question().trim(); // input trimmed to allow spaces in input

    if (emptySqaures(board).includes(square)) {
      break;
    }

    prompt(`That's not a valid choice`);
  }
  board[square] = COLOR.red(HUMAN_MARKER);
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function getComputerOffensiveChoice(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) { // offensive
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COLOR.blue(COMPUTER_MARKER));
    if (square) break;
  }
  return square;
}

function computerChoosesSquare(board) {
  let square;
  // square = getComputerOffensiveChoice(board);
  // if (!square) {
  //   for (let index = 0; index < WINNING_LINES.length; index++) { // defensive choice
  //     let line = WINNING_LINES[index];
  //     square = findAtRiskSquare(line, board, COLOR.red(HUMAN_MARKER));
  //     if (square) break;
  //   }
  // }

  // if (board[5] === INITIAL_MARKER) square = 5;

  // if (!square) {
  //   let randomNumber = Math.floor(Math.random() * emptySqaures(board).length);
  //   square = emptySqaures(board)[randomNumber];
  // }
  let randomNumber = Math.floor(Math.random() * emptySqaures(board).length);
  square = emptySqaures(board)[randomNumber];
  board[square] = COLOR.blue(COMPUTER_MARKER);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === COLOR.red(HUMAN_MARKER) &&
       board[sq2] === COLOR.red(HUMAN_MARKER) &&
      board[sq3] === COLOR.red(HUMAN_MARKER)) {
      return 'User';
    } else if (board[sq1] === COLOR.blue(COMPUTER_MARKER) &&
     board[sq2] === COLOR.blue(COMPUTER_MARKER) &&
    board[sq3] === COLOR.blue(COMPUTER_MARKER)) {
      return "computer";
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySqaures(board).length === 0;
}


function scoreCounter(board, scores) {
  if (detectWinner(board) === 'User') {
    scores.userWins += 1;
  } else if (detectWinner(board) === 'computer') {
    scores.computerWins += 1;
  }
}

function roundCounter(board, scores) {
  if (detectWinner(board) === 'User' || detectWinner(board) === 'computer') {
    scores.round += 1;
  }
}

function displayScore(score) {
  prompt(`User Score: ${score.userWins}`);
  prompt(`Computer Score: ${score.computerWins}`);
}
function displayCurrentRound(score) {
  prompt(`Round being played: ${score.round}`);
}

function clearScoreBoard(scores) {
  scores.userWins = 0;
  scores.computerWins = 0;
  scores.round = 0;
}

function matchWinner(scores) {
  if (scores.userWins === NUMBER_OF_GAMES_TO_WIN_MATCH) {
    prompt("User has won the match");
  } else if (scores.computerWins === NUMBER_OF_GAMES_TO_WIN_MATCH) {
    prompt("Computer has won the match");
  }
}

function computerPlaysFirst(board, score) {
  while (true) {
    computerChoosesSquare(board);
    displayBoard(board, score);
    if (someoneWon(board) || boardFull(board)) break;

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    if (someoneWon(board) || boardFull(board)) {
      break;
    }
    displayBoard(board, score);
  }
}

function userPlaysFirst(board, score) {
  while (true) {
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    if (someoneWon(board) || boardFull(board)) {
      break;
    }
    displayBoard(board, score);
  }
}

function playAgain() {
  let choices = ['y', 'n'];
  console.log(`Do you want to play again, (y => Yes or n for No)`);
  let userChoice = (readline.question()).toLowerCase()[0];

  while (!choices.includes(userChoice)) {
    console.log("Please enter a valid choice");
    userChoice = readline.question();
  }
  return userChoice === 'y';
}

function proceedIntoNextRound() {
  prompt("Press Enter key to proceed to the next round");
  readline.question();
}

function processGame(board, scores, turn) {
  if (turn === COMPUTERS_TURN) {
    displayBoard(board, scores);
    computerPlaysFirst(board, scores);
    displayBoard(board, scores);
    scoreCounter(board, scores);
    roundCounter(board, scores);
  } else {
    displayBoard(board, scores);
    userPlaysFirst(board, scores);
    displayBoard(board, scores);
    scoreCounter(board, scores);
    roundCounter(board, scores);
  }
}

function displayRoundWinner(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won this round!`);
  } else {
    prompt("It's a tie!");
  }
}

// Outer Game loop

while (true) {
  let scores = {userWins: 0, computerWins: 0, round : 1};
  displayWelcome();
  let turn = selectTurn();
  // Inner loop
  //console.clear();
  while (true) {
    let board = intializeBoard();

    processGame(board, scores, turn);
    displayRoundWinner(board);

    matchWinner(scores);

    if (scores.round >= 6) {
      clearScoreBoard(scores);
      break;
    }
    proceedIntoNextRound();

  }
  let playAnotherGame = playAgain();
  if (!playAnotherGame) break;

  prompt("Thanks for playing Tic Tac Toe");
}

