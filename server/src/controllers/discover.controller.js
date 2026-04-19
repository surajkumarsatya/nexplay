import{ tmdbApi, TMDB_ENDPOINT } from "../services/tmdb.services.js";
import {fetchNowPlaying, fetchTrending, fetchTopRated, fetchUpcoming} from "../services/discover.service.js"

const getNowPlaying = async (req, res) => {
    try {
        const data = await fetchNowPlaying();

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getTrending = async (req, res) => {
    try {
        const data = await fetchTrending();

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getTopRated = async (req, res) => {
    try {
        const data = await fetchTopRated();

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getUpcoming = async (req, res) => {
    try {
        const data = await fetchUpcoming();

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

export {
    getNowPlaying,
    getTrending,
    getTopRated,
    getUpcoming,
};