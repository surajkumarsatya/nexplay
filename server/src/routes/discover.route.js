import express from "express"
import {getNowPlaying, getTrending, getUpcoming, getTopRated} from "../controllers/discover.controller.js"

const discoverRoute = express.Router()

discoverRoute
    .get("/now-playing", getNowPlaying)
    .get("/trending", getTrending)
    .get("/upcoming", getUpcoming)
    .get("/top-rated", getTopRated)

export default discoverRoute
