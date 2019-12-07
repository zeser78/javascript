// AXIOS => it's a library, we can added by cnd link or npm
// simple to use,

function getData() {
  const data = axios
    .get("https://financialmodelingprep.com/api/v3/stock/real-time-price")
    .then(data => {
      console.log(data);
    });
}
// Using ASYNC and AWAY as PROMISES, make it easy
async function getData() {
  const data = await axios.get(
    "https://financialmodelingprep.com/api/v3/stock/real-time-price/uvxy" // return a Promise, move on after resolve
  );
  console.log("data async", data);
}

getData();

// caching error
async function getData() {
  try {
    const data = await axios.get(
      "https://financialmodelingprep.com/api/v3/stock/real-time-price/uvxy" // return a Promise, move on after resolve
    );
  } catch (e) {
    console.log("catched", e);
  }
  //   console.log("data async", data);
}
