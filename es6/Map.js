let cardAce = {
  name: "Ace of Spades"
};
let cardKing = {
  name: "King of Clubs"
};

let deck = new Map();
deck.set("as", cardAce);
deck.set("kc", cardKing);

console.log(deck);
console.log(deck.get("as"));

// Set => kind of an array but with unique values
let set = new Set([1, 1, 1]);

set.add(2);
set.delete(1);
for (element of set) {
  console.log(element);
}
