let person = {
  name: "Sergio",
  age: 41,
  sex: "male"
};

let student = {
  name: "Roger",
  age: 38,
  tour: "20"
};
let newStudent = Object.assign({}, student, person);

// Create a new object
//using this method creates a reference to the base object. object mutate the original object
let newPerson = person;
newPerson.name = "Oli";
console.log(newPerson.name); // Oli
console.log(person.name); // Oli

let newPerson1 = Object.assign({}, person, { name: "Abarca" });
console.log(newPerson1.name); // Abarca
console.log(person.name); // Oli

// Array Destructuring in ES6
let arr = ["1", "2", "3"];
// let [one, two, three] = arr;

// console.log(one);
// console.log(two);
// console.log(three);

let a = () => {
  return [1, 3, 2];
};

let [one, , two] = a();
console.log(one);

// let a,
//   b,
//   c = 4,
//   d = 8;
// [a, b = 6] = [2];
// [c, d] = [d, c];
// Object Destructuring in ES6
let obj = { h: 100, s: true };
let { h, s } = obj;

console.log(h);
console.log(s);
console.log(obj.s);
console.log(obj.h * 3);

// let { a, b } = { a: "Hello", b: "Sergio" };

// ES Rest Parameter
//before
function containAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let x = [2, 3, 6, 7];
console.log(containAll(x, 2, 4, 7));
console.log(containAll(x, 6, 4, 9));

// ES6
function containsAll(arr, ...nums) {
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
console.log(containsAll(x, 6, 4, 9));

// Spread Operator
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

const myFunction2 = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args2 = [1, 2, 3];
myFunction2(...args2, 4);

let dateFields = [2019, 8, 24];
let date = new Date(...dateFields);
console.log(date);
