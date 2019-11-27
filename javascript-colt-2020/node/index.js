const message = require("./script.js");

// console.log(arguments);
// console.log(require);
// console.log(module);
// console.log(__dirname);
// console.log(__filename);
// console.log(require.cache);
// console.log(message);

// inspection in NodeJS
// node inspect index.js start up a debugger
// node --inspect index.js
// node --inspect-brk index.js // open chtome://inspect

const fs = require("fs");

fs.readdir(".", (err, filenames) => {
  // EITHER
  if (err) {
    // err ==== an error object, which means something went wrong
    console.log(err);
    //   return
    //   throw new Error(err)
  }
  console.log(filenames);

  // OR
  // err === null, which means everything is ok
});
