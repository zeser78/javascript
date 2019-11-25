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
for (let li of firstLi) {
  li.innerHTML = "Winner";
}

console.log(firstLi[0].style); // you can see all the properties CSS in JS

const styles = getComputedStyle(firstLi[0]);
console.log(styles);
