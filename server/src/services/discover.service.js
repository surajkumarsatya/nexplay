const fetchNowPlaying = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchActionMovies);
};

const fetchTrending = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchComedyMovies);
};

const fetchTopRated = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchHorrorMovies);
};

const fetchUpcoming = async () => {
    return await tmdbApi.get(TMDB_ENDPOINT.fetchRomanceMovies);
};


export {fetchNowPlaying, fetchTrending, fetchTopRated, fetchUpcoming}