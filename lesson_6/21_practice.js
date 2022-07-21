const READLINE = require("readline-sync");
require("colors");
const suits = {H: "Hearts", D: "Diamonds", C: "Clubs", S: "Spades"};
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
  prompt("21 Game is played with a Deck of 52 cards".bgGreen.bold);
  prompt('Both the Player and the Dealer will be Dealt with 2 cards each when the Game Starts'.bgGreen.bold);
  prompt("Cards Ranging from 2 through 10 are worth their Face Value".bgGreen.bold);
  prompt("Jack, King and Queen are each worth 10".bgGreen.bold);
  prompt("The Ace can be worth 1 or 11 depending on the Total Value of the Cards in Hand".bgGreen.bold);
  prompt("If the total Value of the Cards in Hand exceeds 21 then Ace will be worth 1 otherWise 11".bgGreen.bold);
  prompt("Both Player and dealer have to make sure their Card's Total value doesn't exceed 21 otherwise they'd get busted".bgGreen.bold);
  prompt("Dealer has to show one of his cards to the player and has to hide the other one".bgGreen.bold);
}

function displayPlayerRules() {
  prompt("PLAYER RULES".blue.bold);
  prompt('Player always gets to take the first Turn'.bgBrightBlue.bold);
  prompt('Player can either choose to Hit or Stay depending on the value of Cards in Hand and what the Player thinks the Dealer has!'.bgBrightBlue.bold);
  prompt('The Player can continue to hit as many Times as they want unless Player gets busted'.bgBrightBlue.bold);
  prompt("Hit means Player wants to be dealt another card".bgBrightBlue.bold);
  prompt("Stay means Player doesn't need to be dealt another card".bgBrightBlue.bold);
}

function displayDealerRules() {
  prompt("Dealer Rules".brightCyan.bold);
  prompt("Dealer get his turn when the Player Decides to Stay".bgCyan.bold);
  prompt("Dealer Keeps on Hitting until the Total Value of Cards in Hand Reaches 17".bgCyan.bold);
  prompt("If Dealer's cards Total value exceeds 17, we check if dealers busted, if not then dealer decides to Stay".bgCyan.bold);
  prompt("If both Dealer and Player decide to stay we compare their cards total Value".bgCyan.bold);
  prompt("If Dealer's cards have a higher Total Value, then Dealer Wins".bgCyan.bold);
  prompt("If Player's cards have a Higher Total Value, then Player Wins".bgCyan.bold);
}
function prompt(message) {
  console.log(`=> ${message}`);
}
// on first iteration first will be equal to array.length - 1 which is
// 53 - 1 = 52 and the expression will generate a number between 0(inclusive)
// and 53(excluding), in the next iteration first is decremented by 1 and it's
// value is 51, now the expression generates a number between 0(inclusive) an
// 51(excluding).
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));// not clear
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}

function initializeDeck() {
  let suitsArray = Object.values(suits);
  let valuesArray = Object.values(values);
  let deck = [];

  for (let suitIndex = 0; suitIndex < suitsArray.length; suitIndex++) {
    let suit = suitsArray[suitIndex];

    for (let valueIndex = 0; valueIndex < valuesArray.length; valueIndex++) {
      let value = valuesArray[valueIndex];
      deck.push([value, suit]);
    }
  }

  return shuffle(deck);
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
      sum += 11;
    } else if (['King', 'Queen', 'Jack'].includes(card[0])) {
      sum += 10;
    } else {
      sum += card[0];
    }
  });

  // Ace correction
  cards.filter(card => card[0] === "Ace").forEach(_ => {
    if (sum > 21) {
      sum -= 10;
    }
  });

  return sum;
}

function busted(handValue) {
  return handValue > 21;
}

function detectResult (playersHandValue, dealersHandValue) {

  if (playersHandValue > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealersHandValue > 21) {
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
      prompt("YOUR BUSTED, DEALER WON");
      break;
    case "DEALER_BUSTED":
      prompt("DEALER BUSTED, PLAYER WON");
      break;
    case "PLAYER_WON":
      prompt("YOU WON, DEALER BUSTED");
      break;
    case "DEALER_WON":
      prompt("DEALER WON, PLAYER BUSTED");
      break;
    case "TIE":
      prompt("IT WAS A TIE");
  }
}

function playAgain() {
  prompt("To play Again press y for yes or n for no");
  let answer = READLINE.question();
  while (answer !== 'y' && answer !== 'n') {
    prompt("Invalid Choice, Please Choose Again");
    answer = READLINE.question();
  }

  return answer === 'y';
}

function roundOutput (pCards, dCards, pHandValue, dHandValue) {
  prompt(`You have ${hand(pCards)}, having a total of ${pHandValue}`);
  prompt(`Dealer has ${hand(dCards)}, having a total of ${dHandValue}`);
}

function displayScores(scores) {
  prompt(`Rounds won by player: ${scores.playerWins}`);
  prompt(`Rounds won by dealer: ${scores.dealerWins}`);
  prompt(`Number of rounds completed: ${scores.roundsPlayed}`);
}

function nextRound() {
  prompt("PRESS ENTER KEY TO CONTINUE TO THE NEXT ROUND");
  READLINE.question("");
}
// Outer Game loop
while (true) {

  let scores = { playerWins: 0, dealerWins: 0, roundsPlayed: 0 };
  displayWelcomeMessage();
  displayGameRules();
  displayPlayerRules();
  displayDealerRules();
  // Prepare a shuffled deck of 52 cards
  
  let deck = initializeDeck();
  // Create a Data Structure for both Player and Dealer to Store their cards
  // are dealt
  let playerCards = [];
  let dealerCards = [];
  // Deal two cards each to both the player and the dealer
  playerCards.push(...popTwoCards(deck));
  dealerCards.push(...popTwoCards(deck));
  // Player and dealers total hand value
  let playersHandValue = total(playerCards);
  let dealersHandValue = total(dealerCards);

  prompt(`You have ${hand(playerCards).join(' and ')}, having a total value of ${playersHandValue}`);
  prompt(`Dealer has ${dealerCards[0].join(' of ')}`);
  // Player Turn
  while (true) {
    let playerChoice;
    prompt("PLAYER TURN");
    while (true) {
      prompt("Would you like to Hit(h) or Stay(s)");
      playerChoice = READLINE.question().toLowerCase();
      if (['h', 's'].includes(playerChoice)) {
        break;
      } else {
        prompt("Sorry must enter 'h' or 's'");
      }
    }

    if (playerChoice === 'h') {
      playerCards.push(deck.pop());
      playersHandValue = total(playerCards);
      prompt("You Choose to Hit");
      prompt(`Cards is your Hand are ${hand(playerCards).join(', ')}, having a total of ${playersHandValue}`);
    }

    if (playerChoice === 's' || busted(playersHandValue)) {
      break;
    }
  }
  if (busted(playersHandValue)) {
    displayResult(playersHandValue, dealersHandValue);
    roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
    if (detectResult(playersHandValue, dealersHandValue) === "DEALER_WON" ||
     detectResult(playersHandValue, dealersHandValue) === "PLAYER_BUSTED") {
      scores.dealerWins += 1;
      scores.roundsPlayed += 1;
    } else if (detectResult(playersHandValue, dealersHandValue) === "DEALER_BUSTED" ||
     detectResult(playersHandValue, dealersHandValue) === "PLAYER_WON") {
      scores.playerWins += 1;
      scores.roundsPlayed += 1;
    }
    displayScores(scores);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {prompt(`You Choose to Stay, Cards is your hands are ${hand(playerCards)}, having a total value of ${playersHandValue}`)}

  // Dealer's Turn
  prompt("It's Dealer's Turn");
  while (dealersHandValue <= 17) {
    prompt("Dealer Hits");
    dealerCards.push(deck.pop());
    dealersHandValue = total(dealerCards);
    prompt(`Dealer Cards are now ${hand(dealerCards)}, having a total of ${dealersHandValue}`);
  }

  if (busted(dealersHandValue)) {
    roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
    displayResult(playersHandValue, dealersHandValue);
    if (detectResult(playersHandValue, dealersHandValue) === "DEALER_WON" ||
     detectResult(playersHandValue, dealersHandValue) === "PLAYER_BUSTED") {
      scores.dealerWins += 1;
      scores.roundsPlayed += 1;
    } else if (detectResult(playersHandValue, dealersHandValue) === "DEALER_BUSTED" ||
     detectResult(playersHandValue, dealersHandValue) === "PLAYER_WON") {
      scores.playerWins += 1;
      scores.roundsPlayed += 1;
    }
    displayScores(scores);
    if (playAgain()) {
      continue;
    } else {break}

  } else {
    prompt(`Dealer Choose to stay, having a total of ${dealersHandValue}`);
  }

  // Both player and dealer choose to stay
  roundOutput(playerCards, dealerCards, playersHandValue, dealersHandValue);
  displayResult(playersHandValue, dealersHandValue);
  if (detectResult(playersHandValue, dealersHandValue) === "DEALER_WON" ||
    detectResult(playersHandValue, dealersHandValue) === "PLAYER_BUSTED") {
    scores.dealerWins += 1;
    scores.roundsPlayed += 1;
  } else if (detectResult(playersHandValue, dealersHandValue) === "DEALER_BUSTED" ||
    detectResult(playersHandValue, dealersHandValue) === "PLAYER_WON") {
    scores.playerWins += 1;
    scores.roundsPlayed += 1;
  }
  displayScores(scores);
  if (playAgain()) {
    continue;
  } else break;
}

