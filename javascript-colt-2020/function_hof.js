function add(x, y) {
  return x + y;
}

const subtract = function(x, y) {
  return x - y;
};
function multiply(x, y) {
  return x * y;
}
const divide = function divide(x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide];

let result = operations[1](100, 3); // use subtract function 97

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

const thing = {
  doSomething: multiply,
  doSum: add
};

console.log(thing.doSomething(3, 3));
console.log(thing.doSum(3, 3));
console.log(result);
// HOF
function test() {
  console.log("hello World");
}
function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(test, 3);

function test2() {
  console.log("second test");
}

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
pickOne(test, test2);
// console.log(pickOne(test, test2));

function makeBetweenFunc(x, y) {
  return function(num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(99));

// CALLBACK => is passing function in another function

// function grumpus() {
//   alert("Hey");
// }
// setTimeout(grumpus, 500);
setTimeout(function() {
  console.log("hey");
}, 500);

function buttonTest() {
  alert("Welcome");
}

// const btn = document.querySelector("button");
// btn.addEventListener("click", buttonTest);
// btn.addEventListener("click", function() {
//   alert("Callback function");
// });

// HOISTING

var animal = "dog";

console.log(animal);
