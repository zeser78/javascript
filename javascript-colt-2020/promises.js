// Promise => we can use it instead callbacks and failure
// is valid use => .then().then().then() and just one .catch() in Promises

const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

willGetYouADog.then(() => {
  console.log("Yay we got a dog!!");
});

willGetYouADog.catch(() => {
  console.log("No dog");
});

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout();
  });
};
