// array = [1, 2, 3, 4];

// const unique = Array.from(new Set(array)).sort((a, b) => a - b);
// const { 0: first, length, [length - 1]: last } = array;
// console.log(first);
// console.log(last);
// console.log(length);

// let array = Array(5); // undefined
// console.log(array)

// let array = Array.of(5, 10, 11); // Create an array with list of items
// console.log(array);

let array = [10, 12, 16];
console.log(array);

let newArray = Array.from(array, val => val * 2); // create a new array from another array
console.log(newArray);

// array.fill(100);
// array.fill(100, 1, 2);
console.log(array);

console.log(array.find(val => val >= 12)); // 12, stop in the first one

var inventory = [
  { name: "apple", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}
console.log(inventory.find(findCherries));

array = [1, 2, 3];

console.log(array.copyWithin(1, 2));

console.log(array.entries());
console.log(Array(5).fill({ name: "Sergio" })); // create and array and repeat the value
