// OBJECT PROTOTYPES =>
// Prototypes => __proto__
// create you own method

// const arr = [1, 2, 3, 4];

// arr.prototype.examp = function() {
//   return console.log("this is an example");
// };

// arr.examp(); // 'this is an example'

// const color = new Color(carrot, [234, 234, 234]);

// Factory Functions
// original
// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Refactoring to OOP // Patterns
function makeColor(r, g, b) {
  const color = {}; // create an object
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function() {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
const firstColor = makeColor(35, 255, 150);
firstColor.hex();

// CONSTRUCTOR FUNCTIONS => using NEW operator keyword to create a blank, plain JS Object
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this);
}
Color.prototype.rbg = function() {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
const color = new Color(255, 40, 100);

// Refactoring to Class => alternatives

class ColorClass {
  constructor(r, g, b, name) {
    // constructor is a function that will execute inmediatly
    console.log("inside contructor");
    // console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const c1 = new ColorClass(255, 54, 45, "tomato");

// Keyword EXTENDS, SUPER and SUBCLASSES

class Pet {
  // functionality that can we extends
  constructor(name, age) {
    console.log("in Pet Constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  // super
  constructor(name, age, liveLeft = 9) {
    console.log("in Cat Constructor");
    super(name, age);
    this.liveLeft = liveLeft;
  }
  //
  // With duplicate functionality
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  eat() {
    return `${this.name} is eating`;
  }
  meow() {
    return "MENOWWWW";
  }
}
class Dog extends Pet {
  // With duplicate functionality
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  eat() {
    return `${this.name} inside class`;
  }
  bark() {
    return "WOOOF";
  }
}

const dog = new Dog("Arthur", 6);
