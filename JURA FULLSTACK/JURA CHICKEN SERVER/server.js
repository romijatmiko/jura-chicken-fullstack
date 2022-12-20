import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./db/dbConfig.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/userRoute.js";
import ProductRoute from "./routes/menuRoute.js";
import AuthRoute from "./routes/authRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
	db: db,
});

(async () => {
	await db.sync();
})();

app.use(
	session({
		secret: process.env.TOKEN_IN,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: "auto",
		},
	})
);

app.use(
	cors({
		credentials: true,
		origin: "http://localhost:4000",
	})
);
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
	console.log("Server Berjalan di Port http://localhost:3100");
});
