const express = require("express");
const router = express.Router();

const getUser = require("../services/warga/get-warga");

router.get("/", getUser);

module.exports = router;
