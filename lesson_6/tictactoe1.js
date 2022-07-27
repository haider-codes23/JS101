/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_GAMES_TO_WIN_MATCH = 5;
const winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]]; // diagonals

function prompt(string) {
  console.log(`${string}`);
}

function turn() {
  prompt("If you'd like Computer to take the first turn press y for yes or else press n for no");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y' || answer !== 'n') {
    prompt("Please Choose a Valid Choice");
    prompt("If you'd like Computer to take the first turn press y for yes or else press n for no");
    answer = readline.question();
  }
  return answer === 'y';
}

function displayWelcome() {
  console.clear();
  prompt("Welcome to the Game Tic-Tac-Toe");
  prompt(`You are ${HUMAN_MARKER}, Computer is ${COMPUTER_MARKER}`);
  prompt("The first player to win 5 Rounds wins the overall Match!");
  prompt("If a round results in a tie that round will be played again");
  readline.question(prompt("Press Enter key to start playing the game!"));
  console.clear();
}

function displayWhosWho() {
  prompt(`You are ${HUMAN_MARKER}, Computer is ${COMPUTER_MARKER}`);
}

function displayBoard(board) {
  console.clear();
  displayWhosWho();
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
  } else if (array.length > 2) {
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
  board[square] = HUMAN_MARKER;
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

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < winningLines.length; index++) { // offensive
    let line = winningLines[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  if (!square) {
    for (let index = 0; index < winningLines.length; index++) { // defensive
      let line = winningLines[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  if (board[5] === INITIAL_MARKER) {
    square = 5;
  }
  if (!square) {
    let randomNumber = Math.floor(Math.random() * emptySqaures(board).length);
    square = emptySqaures(board)[randomNumber];
  }
  let randomNumber = Math.floor(Math.random() * emptySqaures(board).length);
  square = emptySqaures(board)[randomNumber];
  board[square] = COMPUTER_MARKER;
}

function detectWinner(board) {

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === HUMAN_MARKER &&
       board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER) {
      return 'User';
    } else if (board[sq1] === COMPUTER_MARKER &&
     board[sq2] === COMPUTER_MARKER &&
    board[sq3] === COMPUTER_MARKER) {
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
    displayCurrentRound(score);
    displayScore(score);
    
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    if (someoneWon(board) || boardFull(board)) {
      break;
    }
    displayBoard(board, score);

  }
}

function playGame(board, score) {
  while (true) {
    displayCurrentRound(score);
    displayScore(score);
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

// Outer Game loop

while (true) {
  let scores = {userWins: 0, computerWins: 0, round : 1};
  displayWelcome();
  // Inner loop
  //console.clear();
  while (true) {

    let board = intializeBoard();
    displayBoard(board);

    playGame(board, scores);


    scoreCounter(board, scores);
    roundCounter(board, scores);
    displayBoard(board);


    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won this round!`);
      displayCurrentRound(scores);
      displayScore(scores);
    } else {
      prompt("It's a tie!");
    }

    matchWinner(scores);
    // If someone wins only then it would be considered a round otherwise not
    // After every 5 rounds score board will be reset for next match
    // if (scores.userWins === NUMBER_OF_GAMES_TO_WIN_MATCH ||
    //   scores.computerWins === NUMBER_OF_GAMES_TO_WIN_MATCH) {
    //   clearScoreBoard(scores);
    // }
    if (scores.round > 5) {
      clearScoreBoard(scores);
      break;
    }
    proceedIntoNextRound();

  }
  let playAnotherGame = playAgain();
  if (!playAnotherGame) break;

  prompt("Thanks for playing Tic Tac Toe");
}

