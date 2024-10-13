const express = require('express');
let cors = require('cors');
let sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());

let db;

async function initDb() {
     db = await open({
      filename: 'database.sqlite',
      driver: sqlite3.Database
    });
    return db;
  }

initDb();


const fetchAllMovies = async () => { 
let query = "SELECT * FROM movies"
let response = await db.all(query , [])
return { movies: response };
}

async function fetchMovieByGenre(genre) { 
  let query = 'SELECT * FROM movies WHERE genre = ?';
  let response = await db.all(query , [genre])
  return { movie: response };
  }


app.get('/' , async (req,res) => {
  const result = await fetchAllMovies()
  res.status(200).json(result)
})


app.get('/movies/genre/:genre ' , async (req,res) => {
  let genre = req.params.genre;
  const result = await fetchMovieByGenre(genre)
  res.status(200).json(result)
})












app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
