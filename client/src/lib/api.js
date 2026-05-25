import axios from "axios";

export const ENDPOINT = {
  // auth
  login: "/api/auth/login",
  signup: "/api/auth/signup",
  // logout , user pending
  // user: "/api/user",
  logout: "/api/auth/logout",
  forgotpassword: "/api/auth/forgotPassword",
  // resetPassword: "/api/auth/resetPassword",
  resetPassword: (id) => `/api/auth/resetPassword/${id}`,

  //discover
  discoverNowPlaying: "/api/discover/now-playing",
  discoverTrending: "/api/discover/trending",
  discoverTopRated: "/api/discover/top-rated",
  discoverUpcoming: "/api/discover/upcoming",
  discoverPopular: "/api/discover/popular",

  // movies
  fetchActionMovies: `/api/movies/action`,
  fetchComedyMovies: `/api/movies/comedy`,
  fetchHorrorMovies: `/api/movies/horror`,
  fetchRomanceMovies: `/api/movies/romance`,
  fetchAnimeMovies: `/api/movies/anime`,

  //tv shows
  fetchActionTvShows: `/api/tv/action`,
  fetchComedyTvShows: `/api/tv/comedy`,
  fetchCrimeTvShows: `/api/tv/crime`,
  fetchDramaTvShows: `/api/tv/drama`,
  fetchMysteryTvShows: `/api/tv/mystery`,

  //eextra data
  // getMovieDetails: (id) => `/movie/details?id=${id}`,
  getMovieDetails: (id) => `/api/movies/${id}`,
  // getTvShowsDetails: (id) => `/tv/details?id=${id}`,
  getTvShowsDetails: (id) => `/api/tv/${id}`,

  //user
  user: "/api/user",
  addToWishlist: "/api/user/wishlist",
  getWishlist: "/api/user/wishlist",

  //payment
  payment: "/api/payment/order",
  updatePremium: "/api/payment/update-premium-access",

  // streaming urls
  fetchAllStreamingVideos: `/api/video`,
  fetchStreamingVideo: (id) => `/api/video?id=${id}`,
  fetchVideoThumbnail: (id) => `/api/video/thumbnail?videoId=${id}`,
};

export const media = (path) => `https://image.tmdb.org/t/p/original` + path;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  // credentials
  withCredentials: true,
});

export function getWatchUrl(vidId, mediaType, poster_path) {
  // console.log("mediaType", mediaType)
  const prefix = mediaType === "tv" ? "tv" : "movies";
  // return `${prefix}/watch?id=${vidId}&poster_path=${poster_path}`;
  return `${prefix}/watch?id=${vidId}`;
}

export const getStreamingVideoThumbnail = (id) =>
  API_BASE_URL + ENDPOINT.fetchVideoThumbnail(id);
