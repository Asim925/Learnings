// function sayHello(name) {
//   console.log("hello", name);
// }

// sayHello("Asim");

// to get any export define in any module (file.js), we use require to get the exports of that module: "module.exports"

// we're saying that exports obj we got is named as logger
const logger = require("./logger"); // no need to say logger.js, as its already known as js file

logger.logFu("Here is the info about Mercedes CLR GTR");
