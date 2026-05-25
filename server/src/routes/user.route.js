import express from "express"
import {addToWishlist, getUserWishlist, getCurrentUser} from "../controllers/user.controller.js"
import { protectRouteMiddleware } from "../controllers/auth.controller.js";

const userRoute = express.Router()

userRoute
    // .post("/", createUser)
    // .get("/", getAlluser)
    // .get("/:id", getUserById)
    // .delete("/:id", deleteUser)
    .use(protectRouteMiddleware)
    .get("/wishlist", getUserWishlist)
    .get("/",getCurrentUser)
    .post("/wishlist", addToWishlist)

export default userRoute