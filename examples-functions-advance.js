// Closures => available to store the variable

function generator(input) {
  var number = input;
  return function() {
    return number * 2;
  };
}
var cal = generator(900);
console.log(cal());

// IIFEs

(function calc() {
  console.log("Calc");
})();
