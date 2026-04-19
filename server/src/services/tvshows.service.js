import { TMDB_ENDPOINT, tmdbApi } from "./tmdb.services.js";

async function fetchActionTvShows(){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchActionTvShows)
}
async function fetchComedyTvShows(){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchComedyTvShows)
}
async function fetchCrimeTvShows(){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchCrimeTvShows)
}
async function fetchDramaTvShows(){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchDramaTvShows)
}
async function fetchMysteryTvShows(){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchMysteryTvShows)
}
async function fetchTvShowDetailsById(id){
    return await tmdbApi.get(TMDB_ENDPOINT.fetchTvShowDetails(id))
}

export {fetchActionTvShows, fetchComedyTvShows, fetchCrimeTvShows, fetchDramaTvShows, fetchMysteryTvShows, fetchTvShowDetailsById}