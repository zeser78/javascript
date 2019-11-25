// Classes in ES6
// constructor is a special methid which is used for creating and initializing and object created with a class , just one for class

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const square = new Rectangle(5, 5);
// console.log(square);

// Class Methods in ES6
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // getter
    return this.calArea();
  }
  calArea() {
    // method
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area);

// Using static method

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log(Point.distance(p1, p2));

// Inheritance in ES6
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}
class Dog extends Animal {
  speak() {
    super.speak(); // added Super, alternative => Arthur makes a noise
    console.log(this.name + " barks"); // Arthur barks
  }
}
let dog = new Dog("Arthur");
dog.speak();

// ES6 Map => a Map object can be used to hold key/value pairs
let map = new Map([["k1", "v1"], ["k2", "v2"]]);
console.log(map.size);
// functionality Methods :
//set(key,value)
//get(key)
//has(key)
//delete(key)
//clear()
//keys()
//values()
//entries()

// ES6 Set => a Set object can be used to hold unique values (no prepetitions are allowed)
let set = new Set([1, 2, 4, 58, 8, 8, 8]);
console.log(set.size);

// Methods:
// add(value)
//delete(value)
// has(value)
// clear()
// values()

// ES6 Promises => is a better way for asynchronous programming when compared to the common way of using a setTImeout() type of method
// setTimeout(function() {
//   console.log("Work1");
//   setTimeout(function() {
//     console.log("work2");
//   }, 1000);
// }, 1000);
// console.log("End"); // print 'End', 'Work' and 'Work2' (the work is done asynchronously)

// new Promise(function(resolve, reject) {
//   // Work
//   if (success) resolve(result);
//   else reject(Error("failure"));
// });

function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
    if (work === "") {
      reject(Error("Nothing"));
    }
    setTimeout(() => {
      resolve(work);
    }, 1000);
  });
}
asyncFunc("Work 1")
  .then(
    function(result) {
      console.log(result);
      return asyncFunc("Work 2");
    },
    function(error) {
      console.log(error);
    }
  )
  .then(
    function(result) {
      console.log(result);
    },
    function(error) {
      console.log(error);
    }
  );
console.log("End");

// Iterators & Generators
// Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator
let myIterableObj = {
  [Symbol.iterator]: function*() {
    // function* this the generator function
    yield 1;
    yield 2;
    yield 3;
  }
};
console.log([...myIterableObj]);

function* idMaker() {
  let index = 0;
  while (index < 5) yield index++;
}
let gen = idMaker();
console.log("result " + gen.next().value);
