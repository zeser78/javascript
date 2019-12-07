// JSON => very close to JavaScript but is not. Doesn't contain functions

// const myReq = new XMLHttpRequest()[

// ]
// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://dataondemand.nasdaq.com/api/v1/quotes/recurring',
//   headers: {'accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer __token__'}},
//   body: { "market_centers": ["string"], "symbols": ["AAPL"]},
//   json: true };

// request(options, function (error, response, body) {
//   console.log(body);
// });
// The above commands return JSON structured like this:

// {
//       "request_id": "string"
// }

// function reqListener() {
//   console.log(this.responseText);
// }

// const oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// reqListener();

// Working XMLHttpRequest => but old way to do request
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", () => {
//   console.log("It worked");
//   const data = JSON.parse(firstReq.responseText);
//   console.log(firstReq.responseText);
//   for (let stock of data.stockList) {
//     console.log(stock.symbol);
//   }
// });
// firstReq.addEventListener("error", () => {
//   console.log("Error");
// });

// firstReq.open(
//   "GET",
//   "https://financialmodelingprep.com/api/v3/stock/real-time-price/"
// );
// firstReq.send();
// console.log("Request Sent!");
//

// FETCH => much better and used Promises to fetch data

fetch("https://financialmodelingprep.com/api/v3/stock/real-time-price")
  .then(response => {
    if (!response.ok) {
      console.log("no status : 200");
      throw new Error(`Status Code Error: ${response.status}`);
    } else {
      response.json().then(data => {
        console.log(data);
        console.log(data.stockList.length);

        // for (let stock of data.stockList) {
        // count = 0;
        // while (count < 10) {
        //   console.log(data.stockList[count]);
        //   const { symbol, price } = data.stockList[count];
        //   console.log(symbol, price);
        //   count++;
        // }
        //   console.log(stock.symbol);
        // }
        for (let i = 0; i < 10; i++) {
          // for (let stock of data.stockList) {
          console.log(data.stockList[i]);
          const { symbol, price } = data.stockList[i];
          console.log(symbol, price);
          // }
        }
      });
    }

    // console.log(response.json());
  })
  .catch(err => {
    console.log("something went wrong with fetch");
    console.log(err);
  });
