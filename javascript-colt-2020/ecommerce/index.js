console.log("hello from Node");

const express = require("express");

const app = express();

// request and respond
app.get("/", (req, res) => {
  res.send("hi there from express!!");
});

app.listen(5050, () => {
  console.log("Listening");
});
