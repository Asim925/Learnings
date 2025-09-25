const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([12, 3, 4]);
});

app.listen(3000, () => console.log("listening on 3000 port"));
