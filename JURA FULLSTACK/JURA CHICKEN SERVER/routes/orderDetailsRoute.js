import express from "express";
import {
	getOrders,
	createOrders,
	updateOrders,
	deleteOrders,
} from "../controllers/order.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/orders/get/:id", getOrders);
router.post("/orders/add/:id", verifyUser, createOrders);
router.patch("/orders/update/:id", verifyUser, updateOrders);
router.delete("/orders/delete/:id", verifyUser, deleteOrders);

export default router;
