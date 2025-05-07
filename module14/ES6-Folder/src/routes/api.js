import express from "express";


import * as UserController from "../controllers/userControllers.js";
const router =express.Router();


// User Routes
router.post("/create",UserController.createUserController)


export default router;