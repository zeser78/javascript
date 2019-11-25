window.onload = function() {
  console.log("Window loaded!");
};

// event Handler
var btn = document.querySelector("button");
btn.onclick = function() {
  console.log("Clicked");
};
// event Listenner
var btn = document.querySelector("button");
btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);

function listener1() {
  console.log("Listener 1");
}
function listener2() {
  console.log("Listener 2");
}

setTimeout(function() {
  btn.removeEventListener("click", listener1);
}, 2000);

/// propagate
// if one listener is above or under another listener, can active both
var inner = document.querySelector("#inner");
var outer = document.querySelector("#outer");

inner.addEventListener("click", innerListener);
outer.addEventListener("click", outerListener, true); // adding true prioritize the order of the trigger
function innerListener(event) {
  console.log(event.clientX, event.ClientY); // show the coordenates
  console.log(event.target); // which element trigged the event
  console.log(event.bubles); // to check is bubble up
  event.stopPropagation(); // to stop I doesn't pass to another element
  console.log("Clicker inner!");
}

function outerListener(event) {
  console.log("Clicked outer!");
}
