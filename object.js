// var person = {
//   name: "Sergio",
//   age: 41,
//   details: { hobbies: ["Sports", "Cooking"], location: "New York" },
//   greet: function() {
//     console.log("Hello");
//   }
// };

// person.greet();
// console.log(typeof person.name);

// person.name = "Nadia";

// console.log(person);

// Properties and this

var person = {
  name: "Sergio",
  age: 41,
  details: { hobbies: ["Sports", "Cooking"], location: "New York" }
  //   greet: function() {
  //     console.log("Hello, I am " + this.age + " years old");
  //   }
};
// person.greet();

// Creating object with constructor
// var anotherPerson = new Object();
// anotherPerson.name = "Nadia";
// console.log(anotherPerson);

// Reference type, different place on memory
// just save the pointed

// var anotherPerson = Object.create(null);
// anotherPerson.name = "Nadia";
// console.log(anotherPerson);

// Prototypes => we can access to prototype , but is not safe on production
// Object.prototype

console.log(person.protype);
console.log(person.__proto__); // return {}
console.log(person.toString());

Object.prototype.greet = function() {
  // using prototype we can added to the Object
  console.log("Hello there!");
};
person.greet();

var sergio = Object.create(person);
sergio.name = " Nadia"; // we can call this with "this" on greet function on Object person

console.log(sergio.name);
sergio.greet();
console.log(Object.getPrototypeOf(sergio) == person);

// Constructor Functions => create object with default field and value, Prototype allows with inherence from object // diferent levels

function Person() {
  this.name = "Max";
}
console.log("this " + this); // Global object
Person.prototype.name = "Anna"; // doesn't overwrite Person.name
var person = new Person(); // another way to create Object
console.log(person.name);

console.log(person.__proto__ == Person.prototype); // true => constructor function create the prototype

// advance ; config our object
console.log(person instanceof Person); // true

// & Arguments

function Person(name, age) {
  // this is a blueprint to create more object
  this.name = name;
  this.age = age;
}

var user = new Person("Sergio", 41);
var user1 = new Person("Nadia", 41);
console.log(user);
console.log(user1);

// built-in methods and Properties
console.log("name" in person);

for (var field in person) {
  console.log(field);
  console.log(person[field]);
}
