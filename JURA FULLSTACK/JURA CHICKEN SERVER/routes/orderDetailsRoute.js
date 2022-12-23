import express from "express";
import {
	getOrders,
	createOrders,
	updateOrders,
	deleteOrders,
} from "../controllers/order.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/order/get", getOrders);
router.post("/order/add", verifyUser, createOrders);
router.patch("/order/update/:id", verifyUser, updateOrders);
router.delete("/order/delete/:id", verifyUser, deleteOrders);

export default router;
