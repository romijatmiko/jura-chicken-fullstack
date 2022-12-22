import express from "express";
import {
	getItems,
	getItemsbyId,
	createItems,
	updateItems,
} from "../controllers/keranjangItems.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/keranjang/menu/get", getItems);
router.get("/keranjang/menu/get/:id", getItemsbyId);
router.post("/keranjang/menu/add", verifyUser, createItems);
router.patch("/keranjang/menu/update/:id", verifyUser, updateItems);

export default router;
