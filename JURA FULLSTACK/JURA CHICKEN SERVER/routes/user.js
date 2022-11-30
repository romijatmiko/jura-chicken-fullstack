const express = require("express");
const router = express.Router();

const addUser = require("../controllers/user/postUser");
const getAllUser = require("../controllers/user/getAllUser");
const getUserById = require("../controllers/user/getUserId");
const updateUser = require("../controllers/user/updateUser");
const deteleUser = require("../controllers/user/deleteUser");

router.post("/add", addUser);
router.get("/get", getAllUser);
router.get("/get/:id([0-9a-z-]+)", getUserById);
router.put("/update/:id([0-9a-z-]+)", updateUser);
router.delete("/delete/:id([0-9a-z-]+)", deteleUser);

module.exports = router;
