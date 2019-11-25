// window.onload = function() {
//   console.log(window.innerWidth);
//   console.log(window.location);
//   // Window.location
//   console.log(window.document);
// };

// console.log(document.getElementsByTagName("li"));
// // console.log(document.getElementById("#id"));
// // console.log(document.getElementsByClassName(".class"));
// console.log((document.querySelector("li").style.backgroundColor = "aqua"));
// // document.querySelectorAll("li").style.backgroundColor = "red";
// // console.log(document.querySelectorAll("li").values());
// console.log((document.querySelectorAll("li")[2].style.backgroundColor = "red"));
// console.log(
//   (document.querySelectorAll("li")[1].firstElementChild.textContent = "changed")
// );

// Imsert Element

// var p = document.createElement("p");
// p.textContent = "A new paragraph from DOM!";
// p.style.fontSize = "18px";

// var ul = document.querySelector("ul");

// var a = ul.lastElementChild;
// ul.insertBefore(p, a);

// a.appendChild(p); // inside ul

// ul.after(p); // after ul

// Deleting Element

let parent = document.querySelector("li");
var deleteLink = document.querySelectorAll("a")[1];
console.log(deleteLink);
// deleteLink.parentElement.removeChild(a);
// deleteLink.remove(); // it works

// using Node
// console.log(deleteLink.parentElement.removeChild(a));
// working element, is better working with parentElement

// let child = document.getElementById("p1");
parent.removeChild(parent.firstElementChild); // working
// child.parentNode.removeChild(child); //(it works, alternative)
// remove all children
// if (parent.firstChild) {
//   parent.removeChild(parent.firstElementChild);
//   console.log(parent.firstChild);
// }
