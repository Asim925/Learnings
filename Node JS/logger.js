var url = "https://mylogger.io/log";
const EventEmitter = require("events");
const emitter = new EventEmitter();

function log(message) {
  console.log(message);

  emitter.on("logging", (arg) => {
    console.log("logger listner called", arg);
  });

  emitter.emit("logging", { msg: message }); // raising*
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
