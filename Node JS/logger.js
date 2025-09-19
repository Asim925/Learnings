var url = "https://mylogger.io/log";

function log(message) {
  // send https req
  console.log(message);
}

module.exports.logFu = log; // value is log, key is logFu

// we're actually adding the property name log in the
// module: {
//    ...
//    exports {
//      logFu: log
//    }
// }

// can be seen in the exports obj in module obj
// console.log(module);
