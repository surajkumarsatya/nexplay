import {
  fetchActionTvShows,
  fetchComedyTvShows,
  fetchCrimeTvShows,
  fetchDramaTvShows,
  fetchMysteryTvShows,
  fetchTvShowDetailsById,
} from "../services/tvshows.service.js";

async function getActionTvShows(req, res) {
  try {
    const data = await fetchActionTvShows();
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getComedyTvShows(req, res) {
  try {
    const data = await fetchComedyTvShows();
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getCrimeTvShows(req, res) {
  try {
    const data = await fetchCrimeTvShows();
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getDramaTvShows(req, res) {
  try {
    const data = await fetchDramaTvShows();
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getMysteryTvShows(req, res) {
  try {
    const data = await fetchMysteryTvShows();
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "failure",
    });
  }
}

async function getTvShowDetailsById(req, res) {
  try {
    const { id } = req.params;

    if (!id) throw new Error("Video Id is not defined.");

    const data = await fetchTvShowDetailsById(id);
    res.status(200).json({
      success: "success",
      response: data,
    });
  } catch (error) {
    res.status(500).json({
      success: "failure",
      message: error.message,
    });
  }
}

export {
  getActionTvShows,
  getComedyTvShows,
  getCrimeTvShows,
  getDramaTvShows,
  getMysteryTvShows,
  getTvShowDetailsById,
};
