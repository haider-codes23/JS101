const READLINE = require("readline-sync");
require("cli-color");
require("colors");
// const MAX_ACE_VALUE = 11;
const MAX_SUM = 21;
const MAX_WINS = 5;
const DEALER_CUTOFF_VALUE = 17;
const KING_QUEEN_JACK_VALUE = 10;
const ACE_VALUE = 11;
const ACE_CORRECTION = 10;
const DEAL_ONE_CARD = 1;
const suits = {Heart: "\u2665", Diamond: "\u2666", Club: "\u2663", Spade: "\u2660"};
const values = {
  two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, K: 'King', Q: "Queen", J: "Jack", A: "Ace",
};

function prompt(message) {
  console.log(`=> ${message}`);
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
}

function displayPlayerRules() {
  prompt("PLAYER RULES".blue.bold);
  prompt('Player can either choose to Hit or Stay depending on the value of Cards in Hand and what the Player thinks the Dealer has!'.bgBrightBlue.bold);
  prompt('The Player can continue to hit as many Times as they want unless Player gets busted'.bgBrightBlue.bold);
}

function displayDealerRules() {
  prompt("Dealer Rules".brightCyan.bold);
  prompt("Dealer gets his turn when the Player Decides to Stay".bgCyan.bold);
  prompt("Dealer Keeps on Hitting until the Total Value of Cards in Hand Reaches 17".bgCyan.bold);
}

function displaySymbolNames() {
  prompt(`${suits.Heart}`.red + ` => ` + `${Object.keys(suits)[0]}`.red.bold);
  prompt(`${suits.Diamond}`.white + ` => ` + `${Object.keys(suits)[1]}`.white.bold);
  prompt(`${suits.Club}`.yellow + ` => ` + `${Object.keys(suits)[2]}`.yellow.bold);
  prompt(`${suits.Heart}`.green + ` => ` + `${Object.keys(suits)[3]}`.green);
  console.log(" ");

}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }


  return array;
}

function initializeDeck() {
  let deck = [];

  Object.values(suits).forEach(suit => {
    Object.values(values).forEach(value => {
      deck.push({suit, value});
    });
  });

  return shuffle(deck);
}

function dealCards(cards, numberOfCards) {
  let cardsDealt = [];
  for (let card = 0; card < numberOfCards; card++) {
    cardsDealt.push(cards.pop());
  }

  return cardsDealt;
}

function dealNewCard(cards, deck) {
  cards.push(dealCards(deck, DEAL_ONE_CARD)[0]);
  return cards;
}

function calculateTotal(cards) {
  let sum = 0;
  cards.forEach(card => {
    if (card.value === 'Ace')  {
      sum += ACE_VALUE;
    } else if (['King', 'Queen', 'Jack'].includes(card.value)) {
      sum += KING_QUEEN_JACK_VALUE;
    } else {
      sum += card.value;
    }
  });

  // Ace Correction
  cards.filter(card => card.value === 'Ace').forEach(_ => {
    if (sum > 21) {
      sum -= ACE_CORRECTION; // This way if we have a Ace in our hand and our total exceeds 21 then we subtract 10
      // from the total, that way Ace will have a value of 1 insted of 11.
    }
  });

  return sum;
}

function getCardName(card) {
  //{ suit:  , value: }
  return `[ ${card.value} of ${card.suit} ]`;

}

function busted(cardsTotal) {
  return cardsTotal > MAX_SUM;
}

function displayInitialCards(playerCards, dealerCards,playerTotal) {
  console.log(" ");
  prompt(`YOU HAVE ${getCardName(playerCards[0]) } AND ${getCardName(playerCards[1]) }, HAVING A TOTAL VALUE OF: ${playerTotal}`.green.bold);
  prompt(`DEALER HAS  ${getCardName(dealerCards[0])} AND ONE UNKNOWNCARD`.blue.bold);

}


function promptStartMatch() {
  let choice = READLINE.question(prompt(`PRESS 's' TO START A MATCH WHERE THE WINNER IS ONE WHO FIRST WINS 5 ROUNDS OR PRESS 'e' TO EXIT GAME`.red.bold));
  while (!['s', 'e'].includes(choice)) {
    prompt("Sorry wrong Choice, Please choose Again".bgRed.bold);
    prompt(`Press 's' to Start a Match consisting of 5 Rounds or press 'e' to exit the Game`.bgRed.bold);
    choice = READLINE.question();
  }
  return choice;
}

function promptHitOrStay() {

  prompt("Would you like to (h)it or (S)tay".red.bold);
  let playerChoice = READLINE.question();
  while (!['h', 's'].includes(playerChoice)) {
    prompt("sorry, Invlaid Choice must enter 'h' or 's'".bgRed.bold);
    playerChoice = READLINE.question();
  }

  //console.clear();
  return playerChoice;
}

function showAllCards(playerCards, dealerCards, playerTotal, dealerTotal) {
  let playerCardsString = '';
  let dealerCardsString = '';
  playerCards.forEach(playerCard => {
    playerCardsString += getCardName(playerCard);
  });
  prompt(" ");
  prompt(`YOU HAVE ${playerCardsString}, HAVING A TOTAL OF ${playerTotal}`.green.bold);

  dealerCards.forEach(card => {
    dealerCardsString += getCardName(card);
    //prompt(`${getCardName(card)}`);
  });

  prompt(`DEALER HAS ${dealerCardsString}, HAVING A TOTAL OF ${dealerTotal}`.blue.bold);


}

function showDealerCards(dealerCards, dealerTotal) {
  let dealerCardsString = '';
  dealerCards.forEach(card => {
    dealerCardsString += getCardName(card);
    //prompt(`${getCardName(card)}`);
  });
  prompt(`DEALER HAS ${dealerCardsString}, HAVING A TOTAL OF ${dealerTotal}`.blue.bold);


}


function detectResult (playerTotal, dealerTotal) {

  if (playerTotal > MAX_SUM) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_SUM) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER_WON';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER_WON';
  } else {
    return 'TIE';
  }

}

function displayResult (playerTotal, dealerTotal) {
  let result = detectResult(playerTotal, dealerTotal);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("YOUR BUSTED, DEALER WON THE ROUND".bgMagenta.bold);
      break;
    case "DEALER_BUSTED":
      prompt("DEALER BUSTED, PLAYER WON THE ROUND".bgMagenta.bold);
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


function showDealtCards(playerCards, dealerCards, playerTotal) {
  let playerCardsStringLiteral = '';
  playerCards.forEach(card => {
    playerCardsStringLiteral += ' ';
    playerCardsStringLiteral += getCardName(card);

  });
  prompt(`YOU HAVE ${playerCardsStringLiteral}, HAVING A TOTAL OF ${playerTotal} `.green.bold);
  prompt(`DEALER HAS ${getCardName(dealerCards[0])} AND ONE UNKNOWN-CARD`.blue.bold);

}


function updateScore(playerTotal, dealerTotal, scores) {
  if (detectResult(playerTotal, dealerTotal) === "DEALER_WON" ||
    detectResult(playerTotal, dealerTotal) === "PLAYER_BUSTED") {
    scores.dealerWins += 1;
  } else if (detectResult(playerTotal, dealerTotal) === "DEALER_BUSTED" ||
    detectResult(playerTotal, dealerTotal) === "PLAYER_WON") {
    scores.playerWins += 1;
  }
}

function updateRound(playerTotal, dealerTotal, scores) {
  if (detectResult(playerTotal, dealerTotal) !== "TIE") {
    scores.round += 1;
  }
}

function displayScores(scores) {
  console.log(" ");
  prompt(`Rounds won by player: ${scores.playerWins}`.green.bold);
  prompt(`Rounds won by dealer: ${scores.dealerWins}`.green.bold);
  prompt(`#Round: ${scores.round}`.green.bold);
}

function matchWon(scores) {
  if (scores.playerWins === MAX_WINS || scores.dealerWins === MAX_WINS) {
    return true;
  } else {
    return 0;
  }
}

function displayMatchWinner (scores) {
  if (scores.playerWins === MAX_WINS) {
    prompt("PLAYER WON THE MATCH".bgGreen.bold);
  } else if (scores.dealerWins === MAX_WINS) {
    prompt("DEALER WON THE MATCH".bgGreen.bold);
  }
}

function nextRound() {
  prompt("PRESS ENTER KEY TO CONTINUE TO THE NEXT ROUND".red.bold);
  READLINE.question("");
  console.clear();

}
console.clear();
displayGameRules();
displayPlayerRules();
displayDealerRules();

while (true) {
  let scores = { playerWins: 0, dealerWins: 0, round: 1 };
  let startMatch = promptStartMatch();
  if (startMatch === 'e') break;
  console.clear();

  while (true) {
    //console.clear();
    let deck = initializeDeck();
    let playerChoice;

    let playerCards = [];
    let dealerCards = [];

    playerCards = dealCards(deck, 2);
    dealerCards = dealCards(deck, 2);

    let playerTotal = calculateTotal(playerCards);
    let dealerTotal = calculateTotal(dealerCards);

    displaySymbolNames();
    displayScores(scores);
    displayInitialCards(playerCards, dealerCards, playerTotal);

    //player turn
    while (true) {

      playerChoice = promptHitOrStay();
      console.clear();
      if (playerChoice === 's') break;

      displaySymbolNames();
      dealNewCard(playerCards, deck);
      playerTotal = calculateTotal(playerCards);

      prompt("YOU CHOOSE TO HIT".green.bold);
      showDealtCards(playerCards, dealerCards, playerTotal);
      displayScores(scores);

      if (busted(playerTotal)) break;
    }

    console.clear();
    if (busted(playerTotal)) {
      showAllCards(playerCards, dealerCards, playerTotal, dealerTotal);

      updateScore(playerTotal, dealerTotal, scores);
      displayResult(playerTotal, dealerTotal);
      displayScores(scores);

      if (matchWon(scores)) {
        displayMatchWinner(scores);
        break;
      } else {
        updateRound(playerTotal, dealerTotal, scores);
        nextRound();
        continue;
      }
    }
    prompt(`YOU CHOOSE TO STAY, HAVING A TOTAL OF ${playerTotal}`.green.bold);
    if (playerChoice === 's') {
      // Dealers Turn
      while (dealerTotal <= DEALER_CUTOFF_VALUE) {
        prompt("DEALER HITS".blue.bold);
        dealNewCard(dealerCards, deck);

        dealerTotal = calculateTotal(dealerCards);
        showDealerCards(dealerCards, dealerTotal);

      }
    }
    showAllCards(playerCards, dealerCards, playerTotal, dealerTotal);

    if (dealerTotal >= DEALER_CUTOFF_VALUE && dealerTotal <= MAX_SUM) {
      prompt(`DEALER CHOOSE TO STAY, AT ${dealerTotal}`.blue.bold);
    }
    displayResult(playerTotal, dealerTotal);
    updateScore(playerTotal, dealerTotal, scores);
    displayScores(scores);

    if (matchWon(scores)) {
      displayMatchWinner(scores);
      break;
    } else {
      updateRound(playerTotal, dealerTotal, scores);
      nextRound();
      continue;
    }


  }


}
