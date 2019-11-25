var array = [1, 2, 3, 4];

array.push(4); // introduce an element into the array at last position

array.pop(); //  removes the last element in the array

array.shift(); // removes the first element
array.unshift(5); // Inserts new element at the start of an array

console.log(array);
console.log(array.indexOf(5)); // indexOf find the position

// var newArray = array.splice(2, 2); // removes element from an array and left the other elements on the array
// console.log(newArray);
// console.log(array);
// var newArrays = array.slice(2, 4); // returns a section of the array (copy section or everything)
// console.log(newArrays);
// console.log(array);

// fileter and map createa  new array
console.log(
  array.filter(function(value) {
    // just returns the elements of an array that meets the conditions
    return value > 2;
  })
);
console.log(
  array.map(function(element) {
    // calls a defined callback function on each element on the array, and returns array that contains a results
    return element * 2;
  })
);
console.log(array);
console.log(array.reverse()); // same array, reverse the order

var newArray = ["join", "me"];
console.log(array.concat(newArray)); // Combine two or more arrays
console.log(array.join(newArray)); // add all the elements of an array

// Reduce
console.log(
  array.reduce(function(total, value) {
    // the return value of the callback functions is the accumulated
    return total + value;
  })
); // add all the elements of an array
console.log(array);

//
array = [1, 2, 3, 4];

const unique = Array.from(new Set(array)).sort((a, b) => a - b);
const { 0: first, length, [length - 1]: last } = array;
console.log(first);
console.log(last);
console.log(length);
