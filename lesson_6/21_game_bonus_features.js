const READLINE = require("readline-sync");
require("cli-color");
require("colors");
const MAX_ACE_VALUE = 11;
const MAX_SUM = 21;
const DEALER_STAY_VALUE = 17;
const KING_QUEEN_JACK_VALUE = 10;
const ACE_CORRECTION = 10;
const MAX_ROUNDS = 5;
const suits = {H: "\u2665", D: "\u2666", C: "\u2663", S: "\u2660"};
const values = {
  two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, K: 'King', Q: "Queen", J: "Jack", A: "Ace",
};

function displayWelcomeMessage() {
  prompt(`Welcome to 21-Game`.bgYellow.bold);
  prompt("It's a Fantastic Game, Hope you have Fun playing it!".bgYellow.bold);
}

function displayGameRules() {
  prompt("GAME RULES".green.bold);
  prompt('Both the Player and the Dealer will be Dealt with 2 cards each when the Game Starts'.bgGreen.bold);
  prompt("Cards Ranging from 2 through 10 are worth their Face Value".bgGreen.bold);
  prompt("Jack, King and Queen are each worth 10".bgGreen.bold);
  prompt("The Ace can be worth 1 or 11 depending on the Total Value of the Cards in Hand".bgGreen.bold);
  prompt("If the total Value of the Cards in Hand exceeds 21 then Ace will be worth 1 otherWise 11".bgGreen.bold);
  prompt("Both Player and dealer have to make sure their Card's Total value doesn't exceed 21 otherwise they'd get busted".bgGreen.bold);
  prompt("A round is considered only when Player or Dealer Wins/loses".bgRed.bold);
  prompt("Whoever wins the most number of Rounds wins the overall Match".bgRed.bold);
}

function displayPlayerRules() {
  prompt("PLAYER RULES".blue.bold);
  prompt('Player can either choose to Hit or Stay depending on the value of Cards in Hand and what the Player thinks the Dealer has!'.bgBrightBlue.bold);
  prompt('The Player can continue to hit as many Times as they want unless Player gets busted'.bgBrightBlue.bold);
  prompt("For player to get busted while its his turn, his total value of cards in hand must be greater than 21".bgBrightBlue.bold);
  prompt("Stay means Player doesn't need to be dealt another card".bgBrightBlue.bold);
}

function displayDealerRules() {
  prompt("Dealer Rules".brightCyan.bold);
  prompt("Dealer gets his turn when the Player Decides to Stay".bgCyan.bold);
  prompt("Dealer Keeps on Hitting until the Total Value of Cards in Hand Reaches 17".bgCyan.bold);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));// not clear
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}
// Every Card has a suit and a value/rank
// we need to create a deck of 52 cards, each having a suit and a rank
// The Data- structure storing the suits and value/rank are Objects
// Each suit(e.g. HEARTS) has cards ranging from value/rank = 2 through
// value/rank = 10 ,JACK, KING, QUEEN and ACE
// The Data-Structure we'll be using to create a card will be an object
// The Data- structure that'll be holding the cards/ objects will be an array
// we'll take one suit at a time and one rank/value
// Next we going to

function initializeDeck() {
  let deck = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({suit, value});
    });
  });


  return deck;
}

function popTwoCards(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => card.join(' of '));
}

function total(cards) {
  let sum = 0;
  cards.forEach(card => {
    if (card[0] === "Ace") {
      sum += MAX_ACE_VALUE;
    } else if (['King', 'Queen', 'Jack'].includes(card[0])) {
      sum += KING_QUEEN_JACK_VALUE;
    } else {
      sum += card[0];
    }
  });

  // Ace correction
  cards.filter(card => card[0] === "Ace").forEach(_ => {
    if (sum > MAX_SUM) {
      sum -= ACE_CORRECTION;
    }
  });

  return sum;
}

function busted(handValue) {
  return handValue > MAX_SUM;
}

function detectResult (playersHandValue, dealersHandValue) {

  if (playersHandValue > MAX_SUM) {
    return 'PLAYER_BUSTED';
  } else if (dealersHandValue > MAX_SUM) {
    return 'DEALER_BUSTED';
  } else if (playersHandValue > dealersHandValue) {
    return 'PLAYER_WON';
  } else if (playersHandValue < dealersHandValue) {
    return 'DEALER_WON';
  } else {
    return 'TIE';
  }

}

function displayResult (playersHandValue, dealersHandValue) {
  let result = detectResult(playersHandValue, dealersHandValue);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("YOUR BUSTED, DEALER WON".bgMagenta.bold);
      break;
    case "DEALER_BUSTED":
      prompt("DEALER BUSTED, PLAYER WON".bgMagenta.bold);
      break;
    case "PLAYER_WON":
      prompt("YOU WON, DEALER BUSTED".bgMagenta.bold);
      break;
    case "DEALER_WON":
      prompt("DEALER WON, PLAYER BUSTED".bgMagenta.bold);
      break;
    case "TIE":
      prompt("IT WAS A TIE".bgWhite.bold);
  }
}

// eslint-disable-next-line max-len
function roundOutput (playerCards, dealerCards, playersHandValue, dealersHandValue) {
  prompt(`You have ${hand(playerCards)}, having a total of ${playersHandValue}`.green.bold);
  prompt(`Dealer has ${hand(dealerCards)}, having a total of ${dealersHandValue}`.green.bold);
}

function displayScores(scores) {
  prompt(`Rounds won by player: ${scores.playerWins}`.green.bold);
  prompt(`Rounds won by dealer: ${scores.dealerWins}`.green.bold);
  prompt(`Number of rounds completed: ${scores.roundsPlayed}`.green.bold);
}

function nextRound() {
  prompt("PRESS ENTER KEY TO CONTINUE TO THE NEXT ROUND".red.bold);
  READLINE.question("");
  console.clear();

}

function updateScore(playersHandValue, dealersHandValue, scores) {
  if (detectResult(playersHandValue, dealersHandValue) === "DEALER_WON" ||
    detectResult(playersHandValue, dealersHandValue) === "PLAYER_BUSTED") {
    scores.dealerWins += 1;
    scores.roundsPlayed += 1;
  } else if (detectResult(playersHandValue, dealersHandValue) === "DEALER_BUSTED" ||
    detectResult(playersHandValue, dealersHandValue) === "PLAYER_WON") {
    scores.playerWins += 1;
    scores.roundsPlayed += 1;
  }
}

function playerTurn ( playerCards, playersHandValue, deck ) {
  let playerChoice;
  do {
    prompt("Would you like to (h)it or (S)tay".green.bold);
    playerChoice = READLINE.question();
    while (!['h', 's'].includes(playerChoice)) {
      prompt("sorry, Invlaid Choice must enter 'h' or 's'".bgRed.bold);
      playerChoice = READLINE.question();
    }
    console.clear();

    if (playerChoice === 'h') {
      playerCards.push(deck.pop());
      playersHandValue = total(playerCards);
      prompt("YOU CHOOSE TO HIT".green.bold);
      prompt(`Cards in your hands are ${hand(playerCards).join(", ")}, having a total value of ${playersHandValue}`.green.bold);
    }
  } while (playerChoice !== 's' && !busted(playersHandValue));

  return [playerChoice, playersHandValue, playerCards];
}

function displayMatchWinner (scores) {
  if (scores.playerWins > scores.dealerWins) {
    prompt("PLAYER WON THE MATCH".bgGreen.bold);
  } else {
    prompt("DEALER WON THE MATCH".bgGreen.bold);
  }
}

displayWelcomeMessage();
READLINE.question(prompt("Hit Enter Key to Proceed to the Game".red.bold));
console.clear();
// Outer Game loop
while (true) {
  displayGameRules();
  let scores = { playerWins: 0, dealerWins: 0, roundsPlayed: 0 };

  let choice = READLINE.question(prompt(`Press 's' to Start a Match consisting of 5 Rounds or press 'e' to exit the Game`.red.bold));
  while (!['s', 'e'].includes(choice)) {
    prompt("Sorry wrong Choice, Please choose Again".bgRed.bold);
    prompt(`Press 's' to Start a Match consisting of 5 Rounds or press 'e' to exit the Game`.bgRed.bold);
    choice = READLINE.question();
  }
  if (choice === 'e') break;

  while (scores.roundsPlayed < MAX_ROUNDS) {
    console.clear();
    let deck = initializeDeck();

    let playerCards = [];
    let dealerCards = [];

    playerCards.push(...popTwoCards(deck));
    dealerCards.push(...popTwoCards(deck));

    let playersHandValue = total(playerCards);
    let dealersHandValue = total(dealerCards);

    displayScores(scores);

    prompt(`You have ${hand(playerCards).join(' and ')}, having a total value of ${playersHandValue}`.green.bold);
    prompt(`Dealer has ${dealerCards[0].join(' of ')}`.green.bold);
    // Players Turn
    // Player Makes a Choice to either Hit or Stay
    let playerChoice;

    displayDealerRules();
    displayPlayerRules();
    // eslint-disable-next-line max-len
    [playerChoice, playersHandValue, playerCards] = playerTurn(playerCards, playersHandValue, deck);
    
    
    if (busted(playersHandValue)) {
      roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
      displayResult(playersHandValue, dealersHandValue);
      updateScore(playersHandValue, dealersHandValue, scores);
      displayScores(scores);
      if (scores.roundsPlayed === MAX_ROUNDS) {
        prompt("The Match is over".bgGreen.bold);
        displayMatchWinner(scores);
      } else {
        nextRound();
        continue;
      }

    }

    if (playerChoice === 's') {
      // Dealers Turn
      while (dealersHandValue <= DEALER_STAY_VALUE) {
        prompt("Dealer Hits".green.bold);
        dealerCards.push(deck.pop());
        dealersHandValue = total(dealerCards);
        prompt(`Dealer has ${hand(dealerCards).join(', ')}, having a total value of ${dealersHandValue}`.bgGreen.bold);
      }

      if (busted(dealersHandValue)) {
        // eslint-disable-next-line max-len
        roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
        displayResult(playersHandValue, dealersHandValue);
        updateScore(playersHandValue, dealersHandValue, scores);
        displayScores(scores);
        // eslint-disable-next-line max-depth
        if (scores.roundsPlayed === MAX_ROUNDS) {
          prompt("The Match is over".bgGreen.bold);
          displayMatchWinner(scores);
        }
        nextRound();
        continue;


      } else {
        prompt("Dealer Choose to stay".green.bold);
      }

      roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
      displayResult(playersHandValue, dealersHandValue);
      updateScore(playersHandValue, dealersHandValue, scores);
      displayScores(scores);
      if (scores.roundsPlayed === MAX_ROUNDS) {
        prompt("THE MATCH IS OVER".bgGreen.bold);
        displayMatchWinner(scores);
      } else {
        nextRound();
        continue;
      }
    }

  }

}
