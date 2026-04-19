/****************************************** Auth Routes ********************************/
import express from "express"
import {signupHandler, loginHandler, protectRouteMiddleware, logoutController, forgotPasswordController, resetPasswordHandler} from "../controllers/auth.controller.js"

const authRouter = express.Router();

// this is a middleware, whose task is verify your profile only if you have token and it is verified
// this middleware to only for `/profile` route
// app.use(protectRouteMiddleware);
authRouter
    .post("/login", loginHandler)
    .post("/signup", signupHandler)
    .get("/logout", protectRouteMiddleware, logoutController)
    // .get("/profile", profileHandler)
    .patch("/forgotPassword", forgotPasswordController)
    .patch("/resetPassword/:id", resetPasswordHandler)

export default authRouter;
