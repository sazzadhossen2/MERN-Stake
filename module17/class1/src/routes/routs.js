
import express from "express";
import { createUser, deleteUser, getAlluser, updateUser } from "../controller/user.controllers.js";

const router = express.Router();


router.get('/user',getAlluser);
router.post('/user/create',createUser);
router.put('/user/update/:id',updateUser);
router.delete('/user/delete/:id',deleteUser);

export default router;