const readline = require("readline-sync");
const MAX_ACE_VALUE = 11;
const MIN_ACE_VALUE = 1;
const MAX_SUM = 21;

const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'King', 'Queen', 'Ace'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  prompt('Welcome to Twenty-One Game!');
}

function shuffleDeck(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];

  }
  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    let suit = suits[suitIndex];

    for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
      let value = values[valueIndex];
      deck.push([value, suit]);
    }
  }

  return shuffleDeck(deck);
}

function popTwoCards(deck) {
  return [deck.pop(), deck.pop()];
}

function total(cards) {
  let sum = 0;
  let values = cards.map(card => card[0]);
  // determine the total value of the cards in hand
  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'King', 'Queen'].includes(value)) {
      sum += 10;
    } else {
      sum += value;
    }
  });

  // correct Aces
  // if the sum of the values of the cards in hand exceeds 21, we would subtract
  // 10 from the total sum, that way Ace will have a value of 1 instead of 11
  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > MAX_SUM) {
      sum -= MAX_ACE_VALUE - MIN_ACE_VALUE;
    }
  });

  return sum;
}

function busted(cards) {
  return total(cards) > MAX_SUM;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > MAX_SUM) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_SUM) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }

}

function displayResult(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt("Your Busted! Dealer Won!");
      break;
    case 'DEALER_BUSTED':
      prompt("Dealer's Busted! You Won!");
      break;
    case 'PLAYER':
      prompt("You Won!");
      break;
    case 'DEALER':
      prompt("Dealer Won!");
      break;
    case 'TIE':
      prompt("Nobody Won! It's a Tie");
  }
}

function playAgain() {
  prompt("Do you want to Play Again? yes(y) or no(n)");
  let answer = readline.question();
  while (answer !== 'y' && answer !== 'n') {
    prompt("Sorry, Please Enter a valid Choice");
    prompt("yes(y) or no(n)");
    answer = readline.question();
  }

  return answer === 'y';
}

function hand(cards) {
  return cards.map(card => card.join(' of '));
}

while (true) {
  displayWelcomeMessage();
  // Initialize deck
  let deck = initializeDeck();
  // create a data structure for both player and dealer that would hold
  // the cards that they are dealt
  let playerCards = [];
  let dealerCards = [];
  // Deal two cards two both the player and the dealer
  playerCards.push(...popTwoCards(deck));
  dealerCards.push(...popTwoCards(deck));
  // console.log(playerCards);
  // console.log(dealerCards);

  prompt(`Dealer has ${dealerCards[0].join(' of ')} and unknown`);
  prompt(`You have ${hand(playerCards)}, there total value is ${total(playerCards)}`);

  // Players Turn
  while (true) {
    let playerTurn;
    // we'll keep asking the player if we wants to hit or stay
    while (true) {
      prompt('Would you like to (h)Hit or (s)stay');
      playerTurn = readline.question();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, You must enter 'h' or 's'");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      prompt("You choose to hit!");
      prompt(`Your cards are now ${hand(playerCards)}`);
      prompt(`Total value of the cards in your hands is: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;

  }

  if (busted(playerCards)) {
    displayResult(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You Choose to stay and total value of the cards in your hand is: ${total(playerCards)}`);
  }

  // Dealers turn
  // Dealer hits until the total is atleat 17
  prompt("It's Dealers Turn");
  while (total(dealerCards) <= 17) {
    prompt("Dealer Hits!");
    dealerCards.push(deck.pop());
    prompt(`Dealer Cards are now: ${hand(dealerCards)}`);
  }
  // After dealer's cards value reaches a total of 17, we check if the total is
  // greater than 21, if it is greater than 21 dealer get busted, we display the
  // result and ask the player if he wants to play again. If the dealer doesn't
  // get busted, dealer chooses to stay and control goes back to player.
  if (busted(dealerCards)) {
    prompt(`Dealer's cards have a total value of: ${total(dealerCards)}`);
    displayResult(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }

  } else {
    prompt(`Dealer Choose to stay, and his cards have a total value of ${total(dealerCards)}`);
  }

  // Both player and dealer stay - Compare Cards!
  console.log("***********");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${total(playerCards)}`);
  console.log("***********");

  displayResult(dealerCards, playerCards);
  if (!playAgain()) break;
}

