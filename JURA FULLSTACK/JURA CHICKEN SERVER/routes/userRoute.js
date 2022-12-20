import express from "express";
import {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	getAdmin,
	getAdminById,
	createAdmin,
	updateAdmin,
	deleteAdmin,
} from "../controllers/user.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/users/get", verifyUser, getUsers);
router.get("/users/get/:id", verifyUser, getUserById);
router.post("/users/add", verifyUser, adminOnly, createUser);
router.patch("/users/update/:id", verifyUser, adminOnly, updateUser);
router.delete("/users/delete/:id", verifyUser, adminOnly, deleteUser);

//admin
router.get("/admin/get", verifyUser, getUsers);
router.get("/admin/get/:id", verifyUser, getUserById);
router.post("/admin/add", createUser);
router.patch("/admin/update/:id", verifyUser, adminOnly, updateUser);
router.delete("/admin/delete/:id", verifyUser, adminOnly, deleteUser);
export default router;
