import express from "express";
import {
	getMenu,
	getMenutById,
	createMenu,
	updateMenu,
	deleteMenu,
} from "../controllers/menu.js";
import { verifyUser } from "../middleware/authUser.js";

const router = express.Router();

router.get("/products", verifyUser, getMenu);
router.get("/products/:id", verifyUser, getMenutById);
router.post("/products", verifyUser, createMenu);
router.patch("/products/:id", verifyUser, updateMenu);
router.delete("/products/:id", verifyUser, deleteMenu);

export default router;
