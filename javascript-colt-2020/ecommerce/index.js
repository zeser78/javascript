// console.log("hello from Node");

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//
router.get("./admin/products", (req, res) => {});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extend: true }));
// request and respond
app.get("/", (req, res) => {
  res.send(`
  <div>
  <form method="POST"> 
  <input name="email" placeholder="email" />
  <input name="password" placeholder="password" />
<button>Sign Up</button>
  </form>
  </div>`);
});

// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", data => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//       // console.log(data.toString("utf8"));
//     });
//   } else {
//     next();
//   }
// };

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Account created");
});

app.listen(5050, () => {
  console.log("Listening");
});
