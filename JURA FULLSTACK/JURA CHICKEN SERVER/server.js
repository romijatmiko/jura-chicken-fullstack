const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Client } = require("pg");
// const jwt = require('jsonwebtoken')

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const menuRoutes = require("./routes/menu");

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

app.use("", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/menu", menuRoutes);

app.listen(port, () => {
	console.log(`JuraServer berjalan di port ${port} `);
});
