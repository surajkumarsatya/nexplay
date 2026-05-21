// import { TMDB_ENDPOINT, tmdbApi } from "./tmdb.services.js";

// const fetchNowPlaying = async () => {
//     return await tmdbApi.get(TMDB_ENDPOINT.fetchActionMovies);
// };

// const fetchTrending = async () => {
//     return await tmdbApi.get(TMDB_ENDPOINT.fetchComedyMovies);
// };

// const fetchTopRated = async () => {
//     return await tmdbApi.get(TMDB_ENDPOINT.fetchHorrorMovies);
// };

// const fetchUpcoming = async () => {
//     return await tmdbApi.get(TMDB_ENDPOINT.fetchRomanceMovies);
// };


// export {fetchNowPlaying, fetchTrending, fetchTopRated, fetchUpcoming}

import { tmdbApi, TMDB_ENDPOINT } from "./tmdb.services.js";

const fetchNowPlaying = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchNowPlaying);
};

const fetchTrending = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchTrending);
};

const fetchTopRated = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchTopRated);
};

const fetchUpcoming = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchUpcoming);
};

const fetchPopular = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchPopular);
};

export {
    fetchNowPlaying,
    fetchTrending,
    fetchTopRated,
    fetchUpcoming,
    fetchPopular
};