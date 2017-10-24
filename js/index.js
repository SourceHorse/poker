var suits = ['S', 'H', 'D', 'C'];
var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var deck = [];
var shufflepile = [];
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++){
    deck.push(ranks[j] + suits[i]);
  }
}
document.getElementById('shuffler').addEventListener('click', function() {
  shuffle();
});
function shuffle() {
  for (var i = deck.length; i > 0; i--) {
    var pick = Math.floor(Math.random() * i);
    var index = deck.indexOf(deck[pick]);
    shufflepile.push(deck[pick]);
    deck.splice(index, 1);
  }
  deck = shufflepile;
  shufflepile = [];
  console.log(deck);
  console.log(pick);
}
console.log(deck);
