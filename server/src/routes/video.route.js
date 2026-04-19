import { Router } from "express";
const videoRouter = Router();
import { getVideoStream, getAllVideos, getThumbnail } from "../controllers/video.controller.js";
/***********routes**************/

videoRouter
    .get("/", getAllVideos)
    .get("/watch", getVideoStream)
    .get("/thumbnail", getThumbnail)

export default videoRouter;