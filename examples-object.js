// Object

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

// ES 6
let person = {
  name,
  age
};

// ES6 Computed property Names
let prop = "name";

let user = {
  [prop]: "Sergio"
};
