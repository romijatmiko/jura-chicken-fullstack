const express = require("express");
const router = express.Router();

const addMenu = require("../controllers/menu/postMenu");
const getAllMenu = require("../controllers/menu/getAllMenu");
const getMenuById = require("../controllers/menu/");
const updateMenu = require("../controllers/user/updateUser");
const deleteMenu = require("../controllers/user/deleteUser");

router.post("/add", addUser);
router.get("/get", getAllUser);
router.get("/add/:id([0-9a-z-]+)", getUserById);
router.put("/update/:id([0-9a-z-]+)", updateUser);
router.delete("/delete/:id([0-9a-z-]+)", deteleUser);

module.exports = router;
