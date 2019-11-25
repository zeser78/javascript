var x = 2;

// Conditionals and Loops

// IF , else If and else
if (x > 2) {
  console.log("It's bigger");
} else if (x > 2) {
  console.log("It's smaller");
} else {
  console.log("It's equal");
}

// Switch cases => we can use 'switch' if they are too many 'else if'
switch (x) {
  case x > 2:
    console.log("It's bigger");
    break;
  case x < 2:
    console.log("It's smaller");
    break;
  case (x = 2):
    console.log("It's equal");
    break;
  default:
    console.log("It's not a number");
}
// Loops
// FOR => is commonly used when creating a loop

for (i = 0, totalFor = 0; i < 11; i += 1) {
  totalFor += i;
  console.log(`totalFor = ${i} - ${totalFor}`);
}
console.log(`${i} - ${totalFor}`);

// with For we can use "break" statement where break the loop "jumps out" of the loop.
// and and "continue", where ends the execution of the loop, only one iteration, and continue s with the itiration

//LOOPS in ECMAScript 6
// commonly
let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}
// FOR...IN => should be used for array
let obj = { a: 1, b: 2, c: 3 };
for (let v in obj) {
  console.log(v);
}
// FOR...OF => loop iterating over iterable object
let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}
for (let ch of "Hello") {
  console.log(ch);
}

// WHILE is a loop that the conditional statement thar return true or false
var total = 0;
count = 1;
while (count <= 10) {
  total += count;
  count += 1;
  console.log(`result =  ${count} - ${total}`);
}
// console.log(sum(range(1, 10)));

// Do While condition => is a variant of the while loop,
// execute the block once, before checking if the condition is true
var x = 0;
var totalDo = 0;
do {
  totalDo += x;
  x++;
  console.log(`totalDo = ${totalDo}`);
} while (x < 11);
