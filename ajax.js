// import data from "./data";

// import { data } from "./data";

// import data from "./data.js";
// var myJSON = ;
// var myJSON = "https://jsonplaceholder.typicode.com/posts";
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = JSON.parse(
        this.responseText
      )[0].Futures;
    }
  };
  xhttp.open("GET", "./data.json", true);
  xhttp.send();
}
//   var http = new XMLHttpRequest();
//   //   var dataUrl = "https://jsonplaceholder.typicode.com/posts";
//   var dataUrl = data;
//   var method = "GET";

//   http.open(method, "./data.js");
//   http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//       console.log(http.responseText);
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//       console.log("error");
//     }
//   };
//   http.send();
// }

// JOSN.parse(http.responseText)[0].id

// POST data

// adding
// http.setRequestHeader("Content-Type", "application/x-www-gorm-urlencoded");

//MSDM MOZILLA
// function reqListener() {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send()
