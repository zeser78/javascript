// Built-in
//
function message(message) {
  console.log(message);
  console.log(arguments.length); // 'arguments' Object / array with different functionalities
}
message("hi", 10);

// SetTimeout => create user experience, animation , fetch data
setTimeout(function() {
  console.log("Finished");
}, 1000);

// setInterval
// setInterval(function() {
//   console.log("Ping");
// }, 500);

clearInterval(); // stop setInterval

// transform form and values
var a = "5";
console.log(parseInt(a));
// toString() // to string
// toFixed(); // to decimal

var string = "Any text";
console.log(string.length);
console.log(string.charAt(2));
console.log(string.concat(" again"));
console.log(string.toUpperCase());
console.log(string.split(""));
console.log(string.trim());

// Math Object
var pi = Math.PI;
var e = Math.E;
console.log(pi);
console.log(e);
console.log(Math.abs(-e));
console.log(Math.ceil(e));
console.log(Math.floor(e));
console.log(Math.log(e));

var random = Math.random() * 100 + 1;
console.log(Math.floor(random));

// Date Object

var today = new Date();
var newToday = new Date(2019, 8, 30);

console.log(today.toString());
console.log(newToday.toString());
console.log(Date.parse("2019/09/30"));
console.log(newToday.getDate());
console.log(today.getDay()); // get the position of the week
console.log(today.getUTCDay()); // get the position of the week

// Regular Expresions

var string = "abc";
var pattern = /ab/;

console.log(pattern);
console.log(pattern.exec(string));
