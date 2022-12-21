import express from "express";
import {
	getKeranjang,
	createKeranjang,
	updateKeranjang,
	deleteKeranjang,
	getKeranjangId,
} from "../controllers/keranjang.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/keranjang/get", getKeranjang);
router.get("/keranjang/get/:id", getKeranjangId);
router.post("/keranjang/add/:id", verifyUser, createKeranjang);
router.patch("/keranjang/update/:id", verifyUser, updateKeranjang);
router.delete("/keranjang/delete/:id", verifyUser, deleteKeranjang);

export default router;
