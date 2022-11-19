const express = require("express");
const router = express.Router();

const addAdmin = require("../controllers/admin/postAdmin");
const getAllAdmin = require("../controllers/admin/getAllAdmin");
const getAdminById = require("../controllers/admin/getAdminId");
const updateAdmin = require("../controllers/admin/updateAdmin");
const deleteAdmin = require("../controllers/admin/deleteAdmin");

router.post("/add", addAdmin);
router.get("/get", getAdminById);
router.get("/add/:id([0-9a-z-]+)", getAdminById);
router.put("/update/:id([0-9a-z-]+)", updateAdmin);
router.delete("/delete/:id([0-9a-z-]+)", deleteAdmin);

module.exports = router;
