const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Client } = require("pg");
// const jwt = require('jsonwebtoken')

const user = require("./api/user/getAllUser");
const admin = require("./api/admin/getAllAdmin");
const menu = require("./api/menu/getAllMenu");

require("dotenv").config();
const client = new Client();
client.connect();

const app = express();
const port = 3100;

app.use(
	cors({
		origin: "*",
		// credentials: true,
		// origin : 'http://localhost:3000'
	})
);

app.use(express.json());

app.use("/user", user);

app.listen(port, () => {
	console.log(`JuraServer berjalan di port ${port} `);
});
