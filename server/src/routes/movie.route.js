import express from "express"
// import {createMovie, getAllMovie, getMovieById, deleteMovieById} from "../controllers/movie.controller.js"
import {getActionMovies, getComedyMovies, getHorrorMovies, getRomanceMovies, getAnimeMovies, getMovieDetailById} from "../controllers/movie.controller.js"

const movieRoute = express.Router()

movieRoute
    .get("/action", getActionMovies)
    .get("/comedy", getComedyMovies)
    .get("/horror", getHorrorMovies)
    .get("/romance", getRomanceMovies)
    .get("/anime", getAnimeMovies)
    // .get("/genre/:id", getMoviesByGenre)
    .get("/:id", getMovieDetailById)

// movieRoute
//   .post("/", createMovie)
//   .get("/", getAllMovie)
//   .get("/:id", getMovieById)
//   .delete("/:id", deleteMovieById)

export default movieRoute