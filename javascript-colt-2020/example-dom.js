// DOM
// return a string
// document.innerText => grab the text
let h1 = document.querySelector("h1");
console.log(h1.innerText);

// textContent grab everything in a string
h1.textContent = "DOM DOM";
console.log(h1.textContent);

// innerHTML => grab everything with tag and we can add tags too
let html = document.querySelector("div");
// console.log(html.innerHTML);
// html.innerHTML = "<h1>Bye bye</p>";
// html.innerHTML += "is cool";

// With query gets value
const lis = document.querySelectorAll("li");
console.log(lis[2].innerHTML);
console.log(lis);

let firstLi = lis;
console.log(firstLi);
console.dir(firstLi[0].parentNode);
console.log(firstLi[1].parentElement);
// const lis = document.getElementsByTagName("li");
// console.log(lis[2].value);
// for (let li of firstLi) {
//   li.innerHTML = "Winner";
// }

console.log(firstLi[0].style); // you can see all the properties CSS in JS (getComputedStyle)

const styles = getComputedStyle(firstLi[0]);
console.log(styles); //return an object with all the css peroperties

// Manipulating Classes
const todo = document.querySelector(".todo");
//setAtribute => replace the class
todo.setAttribute("class", "done");
// classList
todo.classList.remove("done");
todo.classList.add("done");
todo.classList.toggle("done");

// Creating Element
const newh2 = document.createElement("h2");
newh2.innerText = "Creating Element";

newh2.classList.add("todo");
// appendChild => add a new element or a parent, add at the end
const section = document.querySelector("section");
section.appendChild(newh2);

// insertBefore => select first the new element, and then select where you want insert before
const parentUl = document.querySelector("ul");
parentUl.insertBefore(newh2, todo);

// append
const firstP = document.querySelector("p");

firstP.append(newh2, newh2);
firstP.prepend(newh2, newh2);

// removeChild()
// const liRemove = document.querySelector("li");
// parentUl.removeChild(liRemove);

// remove() == remove the Node or element
parentUl.lastElementChild.remove();
console.log();
// parentUl.remove();
