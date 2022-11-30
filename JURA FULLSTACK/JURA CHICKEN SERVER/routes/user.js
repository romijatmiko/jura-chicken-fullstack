import express from "express";
import {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/user";

const router = express.Router();

router.get("/users/get", getUsers);
router.get("/users/get/:id", getUserById);
router.post("/users/post", createUser);
router.patch("/users/post/:id", updateUser);
router.delete("/users/delete/:id", deleteUser);

export default router;
