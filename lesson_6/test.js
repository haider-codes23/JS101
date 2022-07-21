function detectResult (playersHandValue, dealersHandValue) {
  let playerTotal = playersHandValue;
  let dealerTotal = dealersHandValue;

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER_WON';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER_WON';
  } else {
    return 'TIE';
  }

}

console.log(detectResult(9,19));