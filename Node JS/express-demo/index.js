const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "math" },
  { id: 2, name: "english" },
  { id: 3, name: "javascripyt" },
  { id: 4, name: "tailwind" },
  { id: 5, name: "urdu" },
  { id: 6, name: "islamiat" },
  { id: 7, name: "physcis" },
  { id: 8, name: "chemmistry" },
  { id: 9, name: "sindhi" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

/*
  // parameter added here in url
  // query (e.g SortOrder is set from frontend and then we can get it by .query :)
  app.get("/api/posts/:year/:month", (req, res) => {
    res.send([req.params, req.query]);
  });
*/

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id == req.params.id);
  if (!course) return res.status(404).send("course not found");
  res.send(course);
});

app.post("/api/course", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Sahi se likh bhai");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id == req.params.id);
  if (!course) return res.status(404).send("course not found");

  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Sahi se likh bhai");
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id == req.params.id);
  if (!course) return res.status(404).send("course not found");

  courses.splice(courses.indexOf(course), 1);

  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port} port`));
