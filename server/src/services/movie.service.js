import { TMDB_ENDPOINT, tmdbApi } from "./tmdb.services.js";

// Genre Movies
const fetchActionMovies = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchActionMovies);
};

const fetchComedyMovies = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchComedyMovies);
};

const fetchHorrorMovies = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchHorrorMovies);
};

const fetchRomanceMovies = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchRomanceMovies);
};

const fetchAnimeMovies = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchAnimeMovies);
};

const fetchMovieDetailById = async (id) => {
    if (!id) throw new Error("Movie Id is required.");
    return await tmdbApi.get(TMDB_ENDPOINT.fetchMovieDetails(id));
};

const fetchMovieVideos = async (id) => {
    if (!id) throw new Error("Movie ID is required.");
    return await tmdbApi.get(TMDB_ENDPOINT.fetchMovieVideos(id));
};

export {
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchAnimeMovies,
    fetchMovieDetailById,
    fetchMovieVideos
};