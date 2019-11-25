// DOM Document Object Model
// document.body.innerHTML("change text"); // document is the root, and innerHTML is a property

// All HTML elements are objects, object has properties and methods.
// The "document" object has methods that allow you to select the desire HTML element

// document.getElementById(id); // finds element by id

// document.getElementsByClassName(name); // finds all elements by class name

// document.getElementsByTagName(name); // finds elements by tag name

// Selecting DOM
// DOM has a set a of properties and methods that provide info about their relaionships in the DOM
// element.chilNodes //returns an array of an element's child nodes
// element.firstChild // returns the first child node of a element
// element.lastChild //returns the last child node of an element
// element.hasChildNodes // returns true if an element has any child nodes, otherwise false
// element.nextSibling returns the next node at the same tree level
// Element.previousSibling returns the previous node at the same tree level
// element.parentNode returns the parent node of an element
// let a = document.getElementById("demo");
// let arr = a.childNodes;
// for (let x = 0; x < arr.length; x++) {
//   arr[x].innerHTML = "new text";
// }
// Changing Attributes
{
  /* <img id"myimg" src="orange.png" alt="" />
<script>
    let el = document.getElementById("myimg");
    el.src = "apple.png";
</script> */
}

// Changing style
// document has a lot the methods and functions

// Changing ELements
// element.cloneNodes() clones and element and returns the resulting node
// document.createElement(element) creates a new element node.
// document.createTextNode(text) create a new text node.

// Creating Element
let p = document.createElement("p");
let node = document.createTextNode("some new text from node");
let node1 = document.createTextNode("some new text from node 1 -");
p.appendChild(node);
// p.insertBefore(node1, node);

let div = document.getElementById("demo");
div.appendChild(p);
// div.insertBefore(node1, node);

// Removing Element
let parent = document.getElementById("demo");
let child = document.getElementById("p1");
// parent.removeChild(child); // working
// child.parentNode.removeChild(child); //(it works, alternative)
// remove all children
// if (parent.firstChild) {
//   parent.removeChild(parent.firstElementChild);
//   console.log(parent.firstChild);
// }
// console.log(parent.hasChildNodes);
// parent.firstElementChild.remove(parent.firstChild);
// console.log(parent.firstElementChild);

// while (parent.firstChild) {
//   parent.removeChild(parent.firstChild);
// }
// let ff = parent.removeChild(parent.firstChild);
// console.log(ff);
// parent.remove();

// Replacing Elements
parent.replaceChild(p, child); // working => changes p for child

// Animations
let t = setInterval(move, 500);
let pos = 0;
let hg = 10;
let box = document.getElementById("box");

// function move() {
//   pos += 1;

//   box.style.left = pos + "px";

//   console.log(pos);
// }

t = setInterval(move, 10);
function move() {
  if (pos >= 150) {
    // clearInterval(t);
    pos = 0;
    hg = 1.5;
  } else {
    pos += 1;
    hg += 1.5;
    box.style.bottom = hg + "px";
    box.style.left = pos + "px";
  }
}

// Handling Events
function show() {
  alert("Hi there");
  // }

  // let xa = document.getElementById("demo");
  // xa.onclick = function() {
  document.querySelector("p").innerHTML = Date();
}
// Events
{
  /* <body onload= "doSomething()"> */
}

// window.onload = function() {
//     // some code
// }

// Event Listeners
// addEventListener() is a method atthaches an event handler to an element without overwriting
// element.addEventListener(event, function, useCapture)
// first parameter is the event "type" (like "click" or "mousedown")
// the second parameter is boolean value specifying whether to use event bubbling or event capturing
let btn = document.getElementById("demoButton");
btn.addEventListener("click", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}

// Event Propagation
// - bublbing, the innermost element's event is hardled first, and then the outer element's event is handled
// - Capturing, the outermost element's event is handled first and then the innner
// - on React e.propagation()

// Creating img slider
let images = ["slide1.png", "slide2.png", "slide3.png", "slide4.png"];
let num = 0;
function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
