import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import movieRoute from "./routes/movie.route.js"
import discoverRoute from "./routes/discover.route.js"
import tvshowsRoute from "./routes/tvshows.route.js"
import videoRoute from "./routes/video.route.js"
import paymentRoute from "./routes/payment.route.js"

app.use(express.json())
app.use(cookieParser())
const corsConfig = {
    origin: true,
    credentials: true,
};
app.use(cors(corsConfig));
// app.options("/(.*)", cors(corsConfig));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use("/api/movies", movieRoute);
app.use("/api/tv", tvshowsRoute);
app.use("/api/discover", discoverRoute);

app.use("/api/video", videoRoute);
app.use("/api/payment", paymentRoute);

export default app
