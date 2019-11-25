// function Person() {}

class Person {
  // more Flexibility to create an Object
  constructor(name) {
    // for initialization or properties
    this.name = name;
  }
}

class Sergio extends Person {
  constructor(name) {
    super(); // call the constructor of the parent class
    this.name = name;
  }
}

let person = new Person("Nadia");
console.log(person.name);
let sergio = new Sergio("Olivares");
console.log(sergio.name);

console.log(person.__proto__ === Person.prototype);
