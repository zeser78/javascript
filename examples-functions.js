// Functions => designed to perform a particular task - reuse code and use the same code many times with differente arguments

function sum(a, b) {
  let c = a + b;
  return c;
}
console.log(sum(2, 3));

// Objects => variables that can contain many variables
var person = {
  name: "Sergio",
  age: 41
};

// Object Constructor => class in es2015

function person1(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

// Methods are functions that are stored as object properties

function person2(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
let p = new person2("Sergio", 10);
console.log(p.yearOfBirth());

// Array => a group of elements. Special type of object, array uses numbers to access its elements

let courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

// Math object => they are not constructor...doesn't use "new"

// The Date Object
// function myAlert() {
//   alert("hi"); working, but in the browser
// }
// setInterval(myAlert, 3000);

let d = new Date(); // store the current date and time

d1 = new Date(86400000); //new Date(milliseconds)
d2 = new Date(864000000); //new Date(milliseconds)
d3 = new Date("September 23, 2019 14:53:00"); //new Date(dateString)
d4 = new Date(2019, 8, 23, 14, 53, 0, 0); //new Date(dateString)

let t = d.getHours(222);
// console.log(d, d2, d3, d4, t);

// Functions in ECMAScript 6
function add(x, y) {
  var sum = x + y;
  console.log(sum);
}
// difrerent style but can do different stuff => xplain in hoisting
// Functions are object and we can store in variables
const add = (x, y) => {
  let sum = x + y;
  console.log(sum);
};

const greet = x => "Welcome" + x;
const x = () => alert("Hi"); // without parameter

// before using ForEach
var arr = [2, 3, 7, 8];
arr.forEach(function(el) {
  console.log(v * 2);
});

const arr = [2, 3, 7, 8];
arr.forEach(v => {
  console.log(v * 2);
});

// default Parameters
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5));

const test = (a, b = 3, c = 42) => {
  return a + b + c;
};

console.log(test(5));
