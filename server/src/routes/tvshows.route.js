import expresss from "express";
import {
  getActionTvShows,
  getComedyTvShows,
  getCrimeTvShows,
  getDramaTvShows,
  getMysteryTvShows,
  getTvShowDetailsById,
} from "../controllers/tvshows.controller.js";

const tvshowsRoute = expresss.Router();

tvshowsRoute
  .get("/action", getActionTvShows)
  .get("/comedy", getComedyTvShows)
  .get("/crime", getCrimeTvShows)
  .get("/drama", getDramaTvShows)
  .get("/mystery", getMysteryTvShows)
  .get("/details/:id", getTvShowDetailsById);

export default tvshowsRoute;
