import express from "express";
import {
	getOrders,
	getAllOrderId,
	getOrderId,
	createOrders,
	updateOrders,
	deleteOrders,
} from "../controllers/order.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/order/get", getOrders);
router.get("/order/get/:id", getOrderId);
router.get("/order/get/all/:id", getAllOrderId);
router.post("/order/add", verifyUser, createOrders);
router.patch("/order/update/:id", verifyUser, updateOrders);
router.delete("/order/delete/:id", verifyUser, deleteOrders);

export default router;
