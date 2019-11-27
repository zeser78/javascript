const btn = document.querySelector("#clicker");
// btn.onclick = alert("from here");
// console.dir(btn);

// Using addEventListener
btn.addEventListener("click", function() {
  alert("click");
});
btn.addEventListener("click", function() {
  console.log("second thing");
});

btn.addEventListener("mouseover", function() {
  btn.innerText = "Stop touching me";
});
btn.addEventListener("mouseout", function() {
  btn.innerText = "Click me 2";
});

window.addEventListener("scroll", function() {
  console.log("stop scrolling");
});

// Events on multiple elements

const colors = ["red", "blue", "orange", "yellow", "pink", "indigo", "violet"];

const printColor = function(event) {
  console.log(this);
  console.log(this.style.backgroundColor);
  console.log(event);
};

const h1 = document.querySelector("h1");
const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  //   box.addEventListener("click", function() {
  //     console.log(box.style.backgroundColor);
  //   });
  box.addEventListener("click", printColor);
}

//key events
const input = document.querySelector("#username");
input.addEventListener("keydown", function(e) {
  console.log("key down");
});
input.addEventListener("keyup", function(e) {
  console.log("key down");
});
input.addEventListener("keypress", function(e) {
  console.log("key press");
  console.log(e.key);
});
// insert item in li
const addItemInput = document.querySelector("#addItem");
const itemUl = document.querySelector("#items");
addItemInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    // add a new item to list
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemUl.appendChild(newItem);
    this.value = "";
  }
});

//Form Event and PreventDefault
// select to form id

const form = document.querySelector("#form");
form.addEventListener("submit", function(e) {
  e.preventDefault(); //prevent event to submit or reload the form or page
});
