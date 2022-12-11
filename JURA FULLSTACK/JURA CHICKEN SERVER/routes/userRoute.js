import express from "express";
import {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/user.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/users/get", verifyUser, adminOnly, getUsers);
router.get("/users/get/:id", verifyUser, adminOnly, getUserById);
router.post("/users/add", verifyUser, adminOnly, createUser);
router.patch("/users/update/:id", verifyUser, adminOnly, updateUser);
router.delete("/users/delete/:id", verifyUser, adminOnly, deleteUser);

export default router;
