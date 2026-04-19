import express from "express"
import {createUser, getAlluser, getUserById, deleteUser} from "../controllers/user.controller.js"
// const { protectRouteMiddleware, isAdminMiddleware } = require("../controller/authController");

const userRoute = express.Router()

userRoute
    .post("/", createUser)
    .get("/", getAlluser)
    .get("/:id", getUserById)
    .delete("/:id", deleteUser)

export default userRoute