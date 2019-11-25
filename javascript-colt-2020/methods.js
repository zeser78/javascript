// Methods are functions inside objects

const auth = {
  username: "Sergio",
  login: function login() {
    console.log("loggin");
  },
  // short way
  signin() {
    console.log("signin");
  }
};

auth.login();
auth.signin();

// Keyword THIS

function sayHi() {
  console.log("HI");
  console.log(this.setInterval);
}
sayHi();

const person = {
  first: "Sergio",
  last: "Olivares",
  fullName() {
    console.log(this);
    console.log(this.first);
    console.log(`${this.first} ${this.last}`);
  }
};

person.fullName();

// differten way to use THIS

const test = {
  arr: [1, 2, 3, 4],
  pickNumber() {
    const { arr } = this;
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  },

  start() {
    console.log(this.pickNumber);
    // var that = this; // without error function
    this.timerId = setInterval(() => {
      //   console.log("that", that);
      console.log("this", this.pickNumber());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  }
};

test.start();
test.stop();
// arrow function is bad using in methods in object, but good to use when you don't want a new use this

// Examples

function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck) {
  return deck.pop();
}
// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

const myDeck = {
  dick: []
};
console.log(card1);

// console.log(makeDeck());
