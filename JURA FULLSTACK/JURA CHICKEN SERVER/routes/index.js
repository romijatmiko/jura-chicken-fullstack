const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		api_version: "0.1",
	});
});

module.exports = router;
