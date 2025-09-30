const express = require("express");
const app = express();
app.use(express.json());

const movies = [
  { id: 1, genre: "horror" },
  { id: 2, genre: "adventure" },
  { id: 3, genre: "action" },
  { id: 4, genre: "funny" },
  { id: 5, genre: "documentry" },
];

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  if (!req.params.id || req.params.id > movies.length)
    return req.status(404).send("Movie not found");

  const movie = movies.find((movie) => movie.id == req.params.id);
  res.send(movie);
});

app.post("/api/movies", (req, res) => {
  if (!req.body.genre || req.body.genre.length < 3)
    return req.status(404).send("Genre should be valid of atleast 3 letters");

  const movie = {
    id: movies.length + 1,
    genre: req.body.genre,
  };

  movies.push(movie);
  res.send(movie);
});

app.put("/api/movies/:id", (req, res) => {
  if (!req.params.id || req.params.id > movies.length)
    return req.status(404).send("movie not found");

  const movie = movies.find((movie) => movie.id == req.params.id);
  movie.genre = req.body.genre;
  res.send(movie);
});

app.delete("/api/movies/:id", (req, res) => {
  if (!req.params.id || req.params.id > movies.length)
    return req.status(404).send("movie not found");

  const movie = movies.find((movie) => movie.id == req.params.id);
  movies.splice(movies.indexOf(movie), 1);

  res.send(movie);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port} port`));
