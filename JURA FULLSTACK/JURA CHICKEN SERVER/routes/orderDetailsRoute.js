import express from "express";
import {
	getOrders,
	getAllOrderId,
	getOrderId,
	createOrders,
	updateOrders,
	deleteOrders,
	countOrders,
	sumOrders,
	getAdminOrders,
	getAdminDeliver,
} from "../controllers/order.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/order/admin/get/deliver", getAdminDeliver);
router.get("/order/admin/get", getAdminOrders);
router.get("/order/get", getOrders);
router.get("/order/sum/all", sumOrders);
router.get("/order/count/all", countOrders);
router.get("/order/get/:id", getOrderId);
router.get("/order/get/all/:id", getAllOrderId);
router.post("/order/add", verifyUser, createOrders);
router.patch("/order/update/:id", verifyUser, updateOrders);
router.delete("/order/delete/:id", verifyUser, deleteOrders);

export default router;
