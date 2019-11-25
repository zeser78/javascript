// Array.prototype.ForEach = function(callback) {
//   for (var i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// }[(1, 2, 3)](function(number) {
//   print(number);
// });

// var a = 1;

// function foo() {
//   var b = a + 1;

//   function bar() {
//     var c = b + a;
//   }
//   bar();
// }

// foo();
// console.log(foo());

var obj = {};

function baz() {
  obj.a = "Hello";

  return function bar() {
    console.log("Property a set on obj", obj.a);
  };
}

var bazReturnFn = baz();
bazReturnFn(); // Prints Property a set on obj, Hello

//

function foo(a, b) {
  var c = a + b;

  function bar() {
    return c;
  }

  return bar();
}

console.log(foo(1, 2));

//
function add() {
  var a = arguments[0];
  var b = arguments[1];
  return a + b;
}

console.log(add(1, 2));

function foo() {
  var a = "Hello World";
  setTimeout(function bar() {
    console.log("Inside function bar");
  }, 1000);
}
console.log(foo());
