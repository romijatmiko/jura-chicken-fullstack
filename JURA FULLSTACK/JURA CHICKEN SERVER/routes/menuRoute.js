const express = require("express");
const router = express.Router();

const addMenu = require("../controllers/menu/postMenu");
const getAllMenu = require("../controllers/menu/getAllMenu");
const getMenuById = require("../controllers/menu/getMenuById");
const updateMenu = require("../controllers/menu/updateMenu");
const deleteMenu = require("../controllers/menu/deleteMenu");

router.post("/add", addMenu);
router.get("/get", getAllMenu);
router.get("/get/:id([0-9a-z-]+)", getMenuById);
router.put("/update/:id([0-9a-z-]+)", updateMenu);
router.delete("/delete/:id([0-9a-z-]+)", deleteMenu);

module.exports = router;
