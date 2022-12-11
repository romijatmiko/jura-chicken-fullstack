import express from "express";
import {
	getMenu,
	getMenutById,
	createMenu,
	updateMenu,
	deleteMenu,
} from "../controllers/menu.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/menu/get", getMenu);
router.get("/menu/get/:id", getMenutById);
router.post("/menu/add", verifyUser, adminOnly, createMenu);
router.patch("/menu/update/:id", verifyUser, adminOnly, updateMenu);
router.delete("/menu/delete/:id", verifyUser, adminOnly, deleteMenu);

export default router;
