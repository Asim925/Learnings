// =============================== using function from other file =======================================

/*
    to get any export define in any module (file.js),
    we use require to get the "exports obj" of that module: "module.exports"
    we're saying that exports obj we got is named as logger
    no need to say logger.js, as its already known as js file
*/

const logger = require("./logger");
logger.logFu("Here is the info about Mercedes CLR GTR");
