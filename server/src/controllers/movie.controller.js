// import MovieModel from "../models/movie.model.js";
// import mongoose from "mongoose";

// import { response } from "express";
// import { TMDB_ENDPOINT, tmdbApi } from "../services/tmdb.services.js";
import {
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchAnimeMovies,
  fetchMovieVideos,
  fetchMovieDetailById
} from "../services/movie.service.js";

async function getActionMovies(req, res) {
  try {
    const data = await fetchActionMovies();
    res.status(200).json({
      status: "success",
      results: data.results,
      page: data.page,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getComedyMovies(req, res) {
  try {
    const data = await fetchComedyMovies();

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
}

const getHorrorMovies = async (req, res) => {
  try {
    const data = await fetchHorrorMovies();

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getRomanceMovies = async (req, res) => {
  try {
    const data = await fetchRomanceMovies();

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getAnimeMovies = async (req, res) => {
  try {
    const data = await fetchAnimeMovies();

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getMovieDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Video Id is not defined.");
    const details = await fetchMovieDetailById(id);

    res.status(200).json({
      status: "success",
      data: details,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

export {
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getAnimeMovies,
  getMovieDetailById,
};

// async function createMovie(req, res) {
//   try {
//     //get data from the request
//     const movieObject = req.body;

//     // to save the data into `mongoDB`
//     const movie = await MovieModel.create(movieObject);

//     return res.status(201).json({
//       success: true,
//       data: movie,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// }

// async function getAllMovie(req, res) {
//   try {
//     // `find()`: fetch all the documents from 'movie' collection and returns an array
//     const movies = await MovieModel.find();

//     return res.status(200).json({
//       success: true,
//       data: movies,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//     });
//   }
// }

// async function getMovieById(req, res) {
//   try {
//     const movieId = req.params.id;

//     if (!movieId || typeof movieId !== "string") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid movie ID",
//       });
//     }

//     if (!mongoose.Types.ObjectId.isValid(movieId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid movie ID",
//       });
//     }

//     const movie = await MovieModel.findById(movieId);

//     if (!movie) {
//       return res.status(404).json({
//         success: false,
//         message: "Movie not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: movie,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//     });
//   }
// }

// async function deleteMovieById(req, res) {
//   try {
//     const movieId = req.params.id;

//     if (!movieId || typeof movieId != "string") {
//       return res.status(400).json({
//         success: "false",
//         message: "Invalid movie id",
//       });
//     }

//     if (!mongoose.Types.ObjectId.isValid(movieId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid movie id",
//       });
//     }

//     const movie = await MovieModel.findByIdAndDelete(movieId);

//     if (!movie) {
//       return res.status(404).json({
//         success: false,
//         message: "Movie not found",
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       message: "Movie is deleted",
//       movie: movie,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Something went wrong",
//     });
//   }
// }

// export { createMovie, getAllMovie, getMovieById, deleteMovieById };
