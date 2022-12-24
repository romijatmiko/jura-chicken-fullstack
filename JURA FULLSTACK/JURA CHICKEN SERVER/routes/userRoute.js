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
	countUser,
} from "../controllers/user.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/users/count", countUser);
router.get("/users/get", verifyUser, getUsers);
router.get("/users/get/:id", verifyUser, getUserById);
router.post("/users/add", createUser);
router.patch("/users/update/:id", verifyUser, adminOnly, updateUser);
router.delete("/users/delete/:id", verifyUser, adminOnly, deleteUser);

//admin
router.get("/admin/get", verifyUser, getAdmin);
router.get("/admin/get/:id", verifyUser, getAdminById);
router.post("/admin/add", createAdmin);
router.patch("/admin/update/:id", verifyUser, adminOnly, updateAdmin);
router.delete("/admin/delete/:id", verifyUser, adminOnly, deleteAdmin);
export default router;
